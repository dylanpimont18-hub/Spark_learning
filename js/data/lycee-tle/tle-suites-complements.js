/* =========================================================
   Spark Learning – data/lycee-tle/tle-suites-complements.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-suites-complements',
    level: 2, subject: 'maths',
    icon: '🔗',
    title: 'Suites — compléments',
    subtitle: 'Récurrence, limites, raisonnement par récurrence',
    keywords: ['Suite', 'Récurrence', 'Limite', 'Raisonnement par récurrence', 'Monotonie'],
    physics: false,
    cours: {
      /* « DÉCOUVRIR » RÉÉCRIT le 2026-09-14. L'ancienne version posait
         l'image de l'échelle, puis énonçait les deux étapes, puis la notion
         de point fixe : c'était le cours résumé, et le cahier des charges
         proscrit l'ouverture par la définition.

         La question retenue est un VRAI problème, et l'élève ne peut pas le
         résoudre avec ce qu'il sait : vérifier une propriété sur mille rangs
         ne prouve rien sur le rang mille un, et il n'existe aucun outil de
         première pour franchir ce pas. La conjecture proposée est de plus
         FAUSSE — ce qui interdit de s'en tirer en la vérifiant sur quelques
         cas, et montre que la vérification n'est pas une preuve.

         On évite le travers inverse (l'anecdote plaquée) : la difficulté est
         logique, elle est réelle, et c'est elle qui a motivé l'invention du
         raisonnement par récurrence. */
      intro: 'Voici une affirmation : <strong>$n^2 + n + 41$ est un nombre premier pour tout entier $n$.</strong><br/><br/>Vérifie-la. Pour $n = 0$ tu obtiens $41$, premier. Pour $n = 1$, $43$, premier. Pour $n = 2$, $47$. Pour $n = 3$, $53$. Continue : $61$, $71$, $83$, $97$, $113$... tous premiers.<br/><br/>Tu peux vérifier jusqu\'à $n = 39$ : quarante cas de suite, tous premiers. À ce stade, qui douterait encore ?<br/><br/>Pourtant, pour $n = 40$, l\'expression vaut $40^2 + 40 + 41 = 1681 = 41 \\times 41$. Elle n\'est pas première. L\'affirmation était <strong>fausse</strong>.<br/><br/>Voilà le problème que ce chapitre résout. Vérifier une propriété sur mille cas ne dit <strong>rien</strong> du cas suivant, et une infinité de cas ne se vérifient pas un par un — il n\'y a pas assez de temps dans l\'univers.<br/><br/>Il faut donc une méthode qui prouve une infinité d\'affirmations en un nombre fini de lignes. Elle existe, et elle repose sur une idée qui ressemble à une file de dominos : si tu établis que <strong>le premier tombe</strong>, et que <strong>chacun fait tomber le suivant</strong>, alors ils tombent tous — sans que tu aies à les regarder un par un.<br/><br/>C\'est le <strong>raisonnement par récurrence</strong>, et il te faudra les deux moitiés. Tu verras plus loin ce qui arrive quand on en oublie une.',
      definitions: [
        { term: 'Raisonnement par récurrence', def: 'Méthode de démonstration en deux étapes : <strong>initialisation</strong> (vérifier $P(n_0)$) et <strong>hérédité</strong> (prouver que $P(n) \\Rightarrow P(n+1)$). Conclusion : la propriété est vraie pour tout $n \\geq n_0$.' },
        { term: 'Suite convergente', def: 'Suite $(u_n)$ telle que $\\lim_{n \\to +\\infty} u_n = \\ell \\in \\mathbb{R}$. Théorème fondamental : toute suite <strong>croissante majorée</strong> (ou décroissante minorée) converge.' },
        { term: 'Point fixe', def: 'Si $(u_n)$ converge vers $\\ell$ et $u_{n+1} = f(u_n)$ avec $f$ continue, alors $\\ell = f(\\ell)$. Résoudre cette équation donne les <strong>candidats</strong> à la limite.' },
        { term: 'Suite auxiliaire', def: 'Pour étudier $u_{n+1} = au_n + b$, on pose $v_n = u_n - \\ell$ (avec $\\ell$ point fixe). Alors $(v_n)$ est géométrique de raison $a$, ce qui permet de trouver $u_n$ explicitement.' }
      ],
      method: {
        title: 'Raisonnement par récurrence',
        steps: [
          '<strong>Initialisation</strong> : vérifier la propriété pour le rang de départ (souvent $n=0$ ou $n=1$).',
          '<strong>Hérédité</strong> : supposer la propriété vraie au rang $n$ et montrer qu\'elle est vraie au rang $n+1$.',
          '<strong>Conclusion</strong> : par le principe de récurrence, la propriété est vraie pour tout $n$.',
          '<strong>Monotonie des suites</strong> : étudier le signe de $u_{n+1}-u_n$.'
        ]
      },
      example: {
        statement: 'Soit la suite définie par $u_0 = 5$ et $u_{n+1} = \\dfrac{1}{2}u_n + 3$. Déterminer la limite de $(u_n)$.',
        steps: [
          'On cherche le point fixe : $\\ell = \\dfrac{1}{2}\\ell + 3 \\Rightarrow \\dfrac{1}{2}\\ell = 3 \\Rightarrow \\ell = 6$.',
          'On pose $v_n = u_n - 6$. Alors $v_{n+1} = u_{n+1} - 6 = \\dfrac{1}{2}u_n + 3 - 6 = \\dfrac{1}{2}(u_n - 6) = \\dfrac{1}{2}v_n$.',
          '$(v_n)$ est géométrique de raison $q = \\dfrac{1}{2}$ et de premier terme $v_0 = 5 - 6 = -1$.',
          '$v_n = -1 \\times \\left(\\dfrac{1}{2}\\right)^n$, donc $u_n = 6 - \\left(\\dfrac{1}{2}\\right)^n$.',
          'Comme $|q| = \\dfrac{1}{2} < 1$ : $v_n \\to 0$, donc $u_n \\to 6$.'
        ],
        answer: '$\\lim_{n \\to +\\infty} u_n = 6$. La suite est croissante (car $u_0 = 5 < 6 = \\ell$) et majorée par $6$.'
      },
      formulas: [
        'Suite arithmétique : $u_n = u_0 + nr$',
        'Suite géométrique : $u_n = u_0 \\cdot q^n$',
        '$\\lim_{n\\to+\\infty} q^n = 0$ si $|q|<1$',
        '$\\lim_{n\\to+\\infty} q^n = +\\infty$ si $q>1$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Toile d\'araignée',
        title: 'Visualiser la convergence de $u_{n+1}=\\frac{1}{2}u_n+3$ vers son point fixe',
        description: 'Reprise de l\'exemple du cours : $u_0=5$. On trace la courbe de $f(u)=\\frac{1}{2}u+3$, la droite $y=u$, puis le chemin en escalier qui relie chaque terme au suivant. Les marches rétrécissent à vue d\'œil : c\'est la convergence vers $\\ell=6$.',
        svg: `
          <svg viewBox="0 0 400 300" role="img" aria-labelledby="cobweb-title cobweb-desc">
            <title id="cobweb-title">Toile d'araignée de la suite u(n+1) = u(n)/2 + 3</title>
            <desc id="cobweb-desc">Cadre allant de 4 a 7 en abscisse et en ordonnee. La droite y=x est en pointille, la courbe de f est une droite solide moins pentue. Un escalier part du point (5,5), rebondit entre la courbe et la droite y=x, et se resserre en spirale rectangulaire vers le point fixe (6,6).</desc>

            <rect class="frame-line" x="60" y="20" width="250" height="250" fill="none"></rect>
            <line class="grid-line" x1="143.33" y1="20" x2="143.33" y2="270"></line>
            <line class="grid-line" x1="226.67" y1="20" x2="226.67" y2="270"></line>
            <line class="grid-line" x1="60" y1="186.67" x2="310" y2="186.67"></line>
            <line class="grid-line" x1="60" y1="103.33" x2="310" y2="103.33"></line>

            <!-- droite y = x (reference) -->
            <line class="guide-line" x1="60" y1="270" x2="310" y2="20"></line>

            <!-- courbe de f(u) = u/2 + 3 -->
            <line class="curve-main" x1="60" y1="186.67" x2="310" y2="61.67"></line>

            <!-- chemin en escalier : u0=5, u1=5,5, u2=5,75, u3=5,875, u4=5,9375, u5=5,96875, u6=5,984375 -->
            <polyline points="143.33,186.67 143.33,145.0 185.0,145.0 185.0,124.17 205.83,124.17 205.83,113.75 216.25,113.75 216.25,108.54 221.46,108.54 221.46,105.94 224.06,105.94 224.06,104.64 225.36,104.64" fill="none" style="stroke: var(--secondary); stroke-width: 2.6; stroke-linecap: round; stroke-linejoin: round;"></polyline>

            <circle class="plot-point" cx="143.33" cy="186.67" r="5"></circle>
            <circle class="plot-point-alt" cx="185.0" cy="145.0" r="4"></circle>
            <circle class="plot-point-alt" cx="205.83" cy="124.17" r="4"></circle>
            <circle class="plot-point-alt" cx="216.25" cy="113.75" r="4"></circle>
            <circle class="plot-point-alt" cx="221.46" cy="108.54" r="3.5"></circle>
            <circle class="plot-point-alt" cx="224.06" cy="105.94" r="3"></circle>
            <circle class="plot-point" cx="226.67" cy="103.33" r="5.5"></circle>

            <text class="tick-label" x="60" y="286" text-anchor="middle">4</text>
            <text class="tick-label" x="143.33" y="286" text-anchor="middle">5</text>
            <text class="tick-label" x="226.67" y="286" text-anchor="middle">6</text>
            <text class="tick-label" x="310" y="286" text-anchor="middle">7</text>
            <text class="tick-label" x="50" y="274" text-anchor="end">4</text>
            <text class="tick-label" x="50" y="190.67" text-anchor="end">5</text>
            <text class="tick-label" x="50" y="107.33" text-anchor="end">6</text>
            <text class="tick-label" x="50" y="24" text-anchor="end">7</text>

            <text class="axis-label" x="185" y="299" text-anchor="middle">uₙ</text>
            <text class="axis-label" x="14" y="145" text-anchor="middle" transform="rotate(-90 14 145)">uₙ₊₁</text>

            <text class="annotation-label" x="296" y="28" text-anchor="end">y = uₙ</text>
            <text class="annotation-label" x="296" y="70" text-anchor="end">f(uₙ) = uₙ/2 + 3</text>
            <text class="annotation-label" x="130" y="210">u₀ = 5</text>
            <text class="annotation-label" x="231" y="94">ℓ = 6</text>

            <text class="label-soft" x="150" y="160" style="fill: var(--secondary);">trajectoire (uₙ)</text>
          </svg>
        `,
        notes: [
          'On part de $u_0=5$ sur la droite $y=u$. On monte (ou descend) verticalement jusqu\'à la courbe de $f$ : ça donne $u_1=f(u_0)$.',
          'On se déplace horizontalement jusqu\'à la droite $y=u$ : le point obtenu a pour abscisse $u_1$, prêt pour l\'itération suivante.',
          'Les marches de l\'escalier rétrécissent à chaque itération : $u_2=5{,}75$, $u_3=5{,}875$, $u_4=5{,}9375\\ldots$ La suite se rapproche du point fixe $\\ell=6$, intersection de $y=u$ et de la courbe de $f$.'
        ],
        reading: 'Le point fixe $\\ell$ est toujours l\'intersection entre la droite $y=u$ et la courbe de $f$. Ici $0<a=\\frac12<1$ : l\'escalier ne rebondit pas d\'un côté à l\'autre, il progresse en marches régulières d\'un seul côté — signe d\'une convergence monotone (suite croissante majorée par $\\ell$).',
        caption: 'Toile d\'araignée de $u_{n+1}=\\frac{1}{2}u_n+3$, $u_0=5$ : convergence monotone vers $\\ell=6$.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14, sur le modèle du
         chapitre pilote (tle-primitives-integrales). Principe : une figure
         par MALENTENDU, pas une figure par formule.

         Les trois malentendus retenus sont ceux qui coûtent le chapitre :
           1. l'élève croit que l'hérédité est « la vraie démonstration » et
              que l'initialisation est une formalité ; la figure montre les
              MÊMES dominos, également espacés, qui tombent ou ne tombent pas
              selon qu'on en pousse un ou non ;
           2. il retient « $q^n$ tend vers zéro » sans la condition, ou
              l'inverse ; la figure trace les deux suites côte à côte sur le
              MÊME repère, et l'écart se voit dès le sixième rang ;
           3. il croit que résoudre $\ell = f(\ell)$ prouve la convergence ;
              la figure montre deux convergences de NATURES différentes vers
              le même point fixe, selon le signe de la pente — et donc que
              le point fixe ne dit rien à lui seul du comportement.

         TOUTES les coordonnées sont CALCULÉES par script (jamais posées à
         l'œil) et vérifiées par scripts/manuel/tests/diagrams-tle.test.js :
         les hauteurs des bâtons sont bien $q^n$ à l'échelle déclarée, et le
         chemin en escalier est bien celui de la suite annoncée, sommet par
         sommet. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Pourquoi deux étapes',
          title: 'La file de dominos, avec et sans le premier geste',
          description: 'Sur les deux rangées, les dominos sont <strong>identiques</strong> et <strong>également espacés</strong> : chacun est assez proche du suivant pour le renverser. C\'est l\'hérédité, et elle est vraie dans les deux cas. Ce qui change, c\'est qu\'en haut on a poussé le premier.',
          svg: `
            <svg viewBox="0 0 460 280" role="img" aria-labelledby="tle-suites-dom-title tle-suites-dom-desc">
              <title id="tle-suites-dom-title">Deux rangees de dominos identiques, l'une renversee et l'autre intacte</title>
              <desc id="tle-suites-dom-desc">En haut, sept dominos identiques et regulierement espaces sont tous couches, inclines dans le meme sens : quelqu'un a pousse le premier et la chute s'est propagee jusqu'au bout. En bas, les sept memes dominos, au meme espacement, sont tous encore debout : personne n'a pousse le premier, et bien que chacun soit capable de renverser son voisin, aucun ne tombe. La capacite a se transmettre la chute ne suffit donc pas : il faut aussi un premier geste.</desc>

              <!-- RANGEE DU HAUT : initialisation faite, tout tombe.
                   Chaque domino est un parallelogramme incline a 60 degres,
                   donc decale de 45 en abscisse pour 26 de hauteur restante. -->
              <line class="frame-line" x1="34" y1="108" x2="440" y2="108"></line>
              <polygon class="plot-point" points="46,108 59,108 104,82 91,82" fill="color-mix(in srgb, var(--success) 30%, transparent)"></polygon>
              <polygon class="plot-point" points="98,108 111,108 156,82 143,82" fill="color-mix(in srgb, var(--success) 30%, transparent)"></polygon>
              <polygon class="plot-point" points="150,108 163,108 208,82 195,82" fill="color-mix(in srgb, var(--success) 30%, transparent)"></polygon>
              <polygon class="plot-point" points="202,108 215,108 260,82 247,82" fill="color-mix(in srgb, var(--success) 30%, transparent)"></polygon>
              <polygon class="plot-point" points="254,108 267,108 312,82 299,82" fill="color-mix(in srgb, var(--success) 30%, transparent)"></polygon>
              <polygon class="plot-point" points="306,108 319,108 364,82 351,82" fill="color-mix(in srgb, var(--success) 30%, transparent)"></polygon>
              <polygon class="plot-point" points="358,108 371,108 416,82 403,82" fill="color-mix(in srgb, var(--success) 30%, transparent)"></polygon>
              <text class="annotation-label" x="34" y="38" text-anchor="start">avec initialisation</text>
              <text class="tick-label" x="34" y="54" text-anchor="start">on pousse le premier, ils tombent tous</text>
              <text class="tick-label" x="52.5" y="126" text-anchor="middle">rang zéro</text>
              <text class="tick-label" x="364.5" y="126" text-anchor="middle">rang six</text>

              <!-- RANGEE DU BAS : heredite identique, mais personne n'a
                   pousse : rien ne tombe. Memes abscisses, meme espacement. -->
              <line class="frame-line" x1="34" y1="226" x2="440" y2="226"></line>
              <rect class="plot-point-alt" x="46" y="174" width="13" height="52" fill="color-mix(in srgb, var(--error) 24%, transparent)"></rect>
              <rect class="plot-point-alt" x="98" y="174" width="13" height="52" fill="color-mix(in srgb, var(--error) 24%, transparent)"></rect>
              <rect class="plot-point-alt" x="150" y="174" width="13" height="52" fill="color-mix(in srgb, var(--error) 24%, transparent)"></rect>
              <rect class="plot-point-alt" x="202" y="174" width="13" height="52" fill="color-mix(in srgb, var(--error) 24%, transparent)"></rect>
              <rect class="plot-point-alt" x="254" y="174" width="13" height="52" fill="color-mix(in srgb, var(--error) 24%, transparent)"></rect>
              <rect class="plot-point-alt" x="306" y="174" width="13" height="52" fill="color-mix(in srgb, var(--error) 24%, transparent)"></rect>
              <rect class="plot-point-alt" x="358" y="174" width="13" height="52" fill="color-mix(in srgb, var(--error) 24%, transparent)"></rect>
              <text class="annotation-label" x="34" y="156" text-anchor="start">sans initialisation</text>
              <text class="tick-label" x="34" y="246" text-anchor="start">personne ne pousse, aucun ne tombe</text>
              <text class="tick-label" x="230" y="268" text-anchor="middle">hérédité identique dans les deux rangées</text>
            </svg>
          `,
          notes: [
            'Les deux rangées ont exactement le <strong>même espacement</strong> : $52$ unités entre deux dominos larges de $13$. L\'hérédité — « chaque domino peut renverser le suivant » — est donc vraie en haut comme en bas.',
            'En haut, quelqu\'un a poussé le domino de rang zéro : c\'est l\'<strong>initialisation</strong>. La chute se propage de proche en proche, et les sept tombent.',
            'En bas, personne n\'a poussé. Rien ne tombe, et rien ne tombera jamais — alors que la propriété de transmission est intacte. <strong>L\'hérédité seule ne prouve rien.</strong>'
          ],
          reading: 'Regarde la rangée du bas et demande-toi ce qui lui manque. Ce n\'est pas la capacité à transmettre : elle est identique à celle du haut. C\'est un <strong>point de départ</strong>. Une démonstration par récurrence où tu aurais parfaitement rédigé l\'hérédité, mais oublié de vérifier le rang initial, est exactement cette rangée-là : impeccable et vide. Et l\'inverse est vrai aussi — vérifier le rang zéro sans établir l\'hérédité, c\'est pousser un domino qui n\'a aucun voisin.',
          caption: 'Hérédité identique dans les deux rangées : seule l\'initialisation décide si la propriété se propage.'
        },
        {
          theme: 'maths',
          kicker: 'Tout se joue sur la raison',
          title: 'Deux suites géométriques, deux destins',
          description: 'Ces deux suites partent du <strong>même</strong> premier terme $u_0 = 1$. La seule différence est la raison : $0{,}7$ d\'un côté, $1{,}35$ de l\'autre. Au rang $6$, l\'une vaut $0{,}118$ et l\'autre $6{,}053$ — un rapport de plus de cinquante.',
          svg: `
            <svg viewBox="0 0 440 270" role="img" aria-labelledby="tle-suites-geo-title tle-suites-geo-desc">
              <title id="tle-suites-geo-title">Deux suites geometriques tracees sur le meme repere</title>
              <desc id="tle-suites-geo-desc">Sur un meme repere, deux series de points marquent les sept premiers termes de deux suites geometriques partant toutes deux de un. La premiere, de raison zero virgule sept, descend rapidement vers l'axe horizontal et s'en approche de plus en plus : elle converge vers zero. La seconde, de raison un virgule trente-cinq, monte de plus en plus vite et s'eloigne du bas du repere : elle diverge vers l'infini. Le seul parametre qui change entre les deux est la raison.</desc>

              <line class="grid-line" x1="40" y1="184.3" x2="404" y2="184.3"></line>
              <line class="grid-line" x1="40" y1="158.6" x2="404" y2="158.6"></line>
              <line class="grid-line" x1="40" y1="107.1" x2="404" y2="107.1"></line>
              <line class="grid-line" x1="40" y1="55.7" x2="404" y2="55.7"></line>
              <line class="axis" x1="40" y1="210" x2="404" y2="210"></line>
              <line class="axis" x1="40" y1="30" x2="40" y2="210"></line>

              <!-- Suite de raison 0,7 : tiges puis sommets. -->
              <line class="graph-line" x1="52" y1="210" x2="52" y2="184.3"></line>
              <line class="graph-line" x1="108.7" y1="210" x2="108.7" y2="192"></line>
              <line class="graph-line" x1="165.3" y1="210" x2="165.3" y2="197.4"></line>
              <line class="graph-line" x1="222" y1="210" x2="222" y2="201.2"></line>
              <line class="graph-line" x1="278.7" y1="210" x2="278.7" y2="203.8"></line>
              <line class="graph-line" x1="335.3" y1="210" x2="335.3" y2="205.7"></line>
              <line class="graph-line" x1="392" y1="210" x2="392" y2="207"></line>
              <circle class="plot-point" cx="52" cy="184.3" r="4"></circle>
              <circle class="plot-point" cx="108.7" cy="192" r="4"></circle>
              <circle class="plot-point" cx="165.3" cy="197.4" r="4"></circle>
              <circle class="plot-point" cx="222" cy="201.2" r="4"></circle>
              <circle class="plot-point" cx="278.7" cy="203.8" r="4"></circle>
              <circle class="plot-point" cx="335.3" cy="205.7" r="4"></circle>
              <circle class="plot-point" cx="392" cy="207" r="4"></circle>

              <!-- Suite de raison 1,35 : sommets relies pour rendre la
                   montee lisible. -->
              <polyline class="curve-main" points="52,184.3 108.7,175.3 165.3,163.1 222,146.7 278.7,124.6 335.3,94.7 392,54.3"></polyline>
              <circle class="plot-point-alt" cx="52" cy="184.3" r="4.5"></circle>
              <circle class="plot-point-alt" cx="108.7" cy="175.3" r="4.5"></circle>
              <circle class="plot-point-alt" cx="165.3" cy="163.1" r="4.5"></circle>
              <circle class="plot-point-alt" cx="222" cy="146.7" r="4.5"></circle>
              <circle class="plot-point-alt" cx="278.7" cy="124.6" r="4.5"></circle>
              <circle class="plot-point-alt" cx="335.3" cy="94.7" r="4.5"></circle>
              <circle class="plot-point-alt" cx="392" cy="54.3" r="4.5"></circle>

              <text class="annotation-label" x="396" y="44" text-anchor="end">raison un virgule trente-cinq</text>
              <text class="tick-label" x="396" y="30" text-anchor="end">elle diverge</text>
              <text class="annotation-label" x="396" y="228" text-anchor="end">raison zéro virgule sept</text>
              <text class="tick-label" x="396" y="242" text-anchor="end">elle converge vers zéro</text>

              <text class="tick-label" x="34" y="188" text-anchor="end">1</text>
              <text class="tick-label" x="34" y="163" text-anchor="end">2</text>
              <text class="tick-label" x="34" y="111" text-anchor="end">4</text>
              <text class="tick-label" x="34" y="60" text-anchor="end">6</text>
              <text class="tick-label" x="52" y="224" text-anchor="middle">0</text>
              <text class="tick-label" x="222" y="224" text-anchor="middle">3</text>
              <text class="tick-label" x="392" y="224" text-anchor="middle">6</text>
              <text class="tick-label" x="222" y="262" text-anchor="middle">rang de la suite</text>
            </svg>
          `,
          notes: [
            'En bâtons : $u_n = 0{,}7^n$, qui vaut $1$ puis $0{,}7$ ; $0{,}49$ ; $0{,}343$ ; $0{,}240$ ; $0{,}168$ ; $0{,}118$. Comme $|q| < 1$, la suite <strong>converge vers $0$</strong> — et elle ne l\'atteint jamais.',
            'En courbe : $v_n = 1{,}35^n$, qui vaut $1$ puis $1{,}35$ ; $1{,}823$ ; $2{,}460$ ; $3{,}322$ ; $4{,}484$ ; $6{,}053$. Comme $q > 1$, la suite <strong>diverge vers $+\\infty$</strong>.',
            'Le seuil est exactement $|q| = 1$, et il ne dépend <strong>pas</strong> du premier terme. Une suite de raison $0{,}99$ finit par tendre vers $0$ même en partant d\'un milliard ; une suite de raison $1{,}01$ finit par exploser même en partant d\'un millionième.'
          ],
          reading: 'Ne regarde pas les premiers rangs : ils ne prouvent rien. Au rang $2$, les deux suites valent encore $0{,}49$ et $1{,}82$ — c\'est peu de chose. C\'est en poursuivant que l\'écart se creuse, et il ne cesse plus de se creuser. Retiens donc la question à te poser devant toute suite géométrique : <strong>$|q|$ est-il plus petit ou plus grand que $1$ ?</strong> Cette seule comparaison décide de tout, et elle se fait de tête.',
          caption: 'Les sept premiers termes de $0{,}7^n$ (convergente) et de $1{,}35^n$ (divergente), au même départ $u_0 = 1$.'
        },
        {
          theme: 'maths',
          kicker: 'Le point fixe ne dit pas tout',
          title: 'Deux façons d\'arriver au même point fixe',
          description: 'Ces deux suites ont le <strong>même</strong> point fixe $\\ell = 6$, et pourtant elles n\'y vont pas du tout de la même manière. À gauche l\'escalier monte régulièrement d\'un seul côté ; à droite il tourne en spirale autour du point. Résoudre $\\ell = f(\\ell)$ ne permet pas de le deviner.',
          svg: `
            <svg viewBox="0 0 448 250" role="img" aria-labelledby="tle-suites-pf-title tle-suites-pf-desc">
              <title id="tle-suites-pf-title">Convergence en escalier puis convergence en spirale vers le meme point fixe</title>
              <desc id="tle-suites-pf-desc">Deux carres a la meme echelle. Dans chacun, une diagonale montante represente la droite des points fixes et une autre droite represente la fonction. A gauche, la droite de la fonction monte doucement et le chemin de la suite forme un escalier regulier qui monte toujours du meme cote vers le point d'intersection. A droite, la droite de la fonction descend et le chemin de la suite tourne en rectangles de plus en plus petits autour du point d'intersection, en passant alternativement au-dessus puis au-dessous. Les deux points d'intersection sont a la meme place.</desc>

              <!-- VIGNETTE GAUCHE : pente positive 0,5 -> escalier monotone. -->
              <rect class="frame-line" x="44" y="26" width="168" height="168" fill="none"></rect>
              <line class="guide-line" x1="44" y1="194" x2="212" y2="26"></line>
              <line class="curve-main" x1="44" y1="148.5" x2="212" y2="64.5"></line>
              <polyline class="graph-line" points="65,173 65,138 100,138 100,120.5 117.5,120.5 117.5,111.8 126.3,111.8 126.3,107.4 130.6,107.4 130.6,105.2 132.8,105.2 132.8,104.1 133.9,104.1" fill="none"></polyline>
              <circle class="plot-point" cx="65" cy="173" r="4"></circle>
              <circle class="plot-point-alt" cx="135" cy="103" r="5.5"></circle>
              <text class="annotation-label" x="128" y="20" text-anchor="middle">pente positive</text>
              <text class="tick-label" x="128" y="212" text-anchor="middle">escalier régulier</text>
              <text class="tick-label" x="128" y="228" text-anchor="middle">la suite monte sans jamais redescendre</text>

              <!-- VIGNETTE DROITE : pente negative -0,8 -> spirale. -->
              <rect class="frame-line" x="252" y="26" width="168" height="168" fill="none"></rect>
              <line class="guide-line" x1="252" y1="194" x2="420" y2="26"></line>
              <line class="curve-main" x1="252" y1="30.2" x2="420" y2="164.6"></line>
              <polyline class="graph-line" points="280,166 280,52.6 393.4,52.6 393.4,143.3 302.7,143.3 302.7,70.7 375.3,70.7 375.3,128.8 317.2,128.8 317.2,82.4 363.6,82.4 363.6,119.5 326.5,119.5" fill="none"></polyline>
              <circle class="plot-point" cx="280" cy="166" r="4"></circle>
              <circle class="plot-point-alt" cx="343" cy="103" r="5.5"></circle>
              <text class="annotation-label" x="336" y="20" text-anchor="middle">pente négative</text>
              <text class="tick-label" x="336" y="212" text-anchor="middle">spirale rectangulaire</text>
              <text class="tick-label" x="336" y="228" text-anchor="middle">la suite passe dessus puis dessous</text>
            </svg>
          `,
          notes: [
            'À gauche : $u_{n+1} = 0{,}5\\,u_n + 3$, de point fixe $\\ell = \\dfrac{3}{1 - 0{,}5} = 6$. Partie de $u_0 = 4$, la suite monte en marches de plus en plus courtes et reste toujours <strong>en dessous</strong> de $6$ : elle est croissante et majorée.',
            'À droite : $u_{n+1} = -0{,}8\\,u_n + 10{,}8$, de point fixe $\\ell = \\dfrac{10{,}8}{1 + 0{,}8} = 6$ — le <strong>même</strong>. Partie de $u_0 = 4{,}2$, elle passe alternativement au-dessus puis au-dessous de $6$ : elle n\'est ni croissante ni décroissante.',
            'Le signe de la pente décide de la forme. Une pente <strong>positive</strong> donne un escalier monotone ; une pente <strong>négative</strong> donne une spirale. Et dans les deux cas, la convergence n\'est assurée que parce que $|a| < 1$.'
          ],
          reading: 'Voilà pourquoi résoudre $\\ell = f(\\ell)$ ne suffit jamais. Cette équation te donne un <strong>candidat</strong> — ici $6$ dans les deux cas — mais elle ne te dit ni si la suite converge, ni comment. La spirale de droite, par exemple, interdit tout raisonnement du type « la suite est croissante donc elle monte vers $6$ » : elle n\'est pas croissante du tout. La convergence se démontre à part, par la monotonie et le bornage, ou en passant par la suite auxiliaire $v_n = u_n - \\ell$, qui est géométrique de raison la pente.',
          caption: 'Deux suites de même point fixe $\\ell = 6$ : escalier monotone pour une pente de $0{,}5$, spirale pour une pente de $-0{,}8$.'
        }
      ],

      recap: [
        'Récurrence = initialisation + hérédité. Les deux étapes sont <strong>indispensables</strong>.',
        'Suite croissante et majorée → converge. Suite décroissante et minorée → converge. Théorème de la limite monotone.',
        'Si $u_{n+1} = f(u_n)$ converge vers $\\ell$, alors $\\ell = f(\\ell)$ (point fixe). Utiliser la suite auxiliaire $v_n = u_n - \\ell$ pour obtenir une suite géométrique.',
        '$|q| < 1 \\Rightarrow q^n \\to 0$, $q > 1 \\Rightarrow q^n \\to +\\infty$, $q = 1 \\Rightarrow q^n = 1$, $q \\leq -1 \\Rightarrow (q^n)$ diverge.'
      ],
      piege: 'L\'hérédité <strong>suppose</strong> la propriété au rang $n$ (hypothèse de récurrence) : elle ne se démontre pas, elle s\'utilise !<br/><br/>Ne pas confondre "supposer" et "montrer". L\'objectif de l\'hérédité est de prouver $P(n+1)$ en utilisant $P(n)$ comme hypothèse.'
    },
    quiz: [
      { q: 'Pour la suite géométrique $u_n=3\\times2^n$, $\\lim_{n\\to+\\infty}u_n=$ ?', options: ['$0$', '$3$', '$+\\infty$', '$6$'], answer: 2, correction: 'La raison est $q=2>1$, donc $2^n\\to+\\infty$ quand $n \\to +\\infty$.<br/><br/>Par conséquent $u_n = 3 \\times 2^n \\to +\\infty$. La suite diverge vers $+\\infty$.' },
      { q: 'Un élève veut prouver par récurrence que $u_n>0$ pour tout $n\\ge0$. Il prouve l\'hérédité (si $u_n>0$ alors $u_{n+1}>0$) mais oublie l\'initialisation. Sa démonstration est-elle valide ?', options: ['Non : sans initialisation, la chaîne n\'a pas de point de départ et la démonstration est invalide', 'Oui : si l\'hérédité est prouvée, la propriété est vraie pour tout $n$', 'Oui : l\'initialisation n\'est utile que si $u_0=0$', 'Cela dépend de $u_0$ : si $u_0>0$ est donné dans l\'énoncé, l\'initialisation est automatiquement satisfaite'], answer: 0, correction: 'Sans initialisation, la récurrence ne "démarre" pas.<br/><br/>L\'option D est séduisante : $u_0>0$ peut être donné dans l\'énoncé — mais l\'élève doit <strong>EXPLICITEMENT</strong> vérifier le cas de base dans sa démonstration.<br/><br/>Par analogie : l\'hérédité dit "si le barreau $n$ tient, le barreau $n+1$ tient" — mais si aucun barreau de départ n\'est posé, l\'argument ne prouve rien.' },
      { q: '$u_{n+1}-u_n>0$ pour tout $n$ signifie que la suite est :', options: ['Décroissante', 'Constante', 'Croissante', 'Nulle'], answer: 2, correction: '$u_{n+1}-u_n>0$ signifie $u_{n+1}>u_n$ pour tout $n$ : chaque terme est supérieur au précédent.<br/><br/>La suite est donc <strong>strictement croissante</strong>.' },
      { q: 'La suite $u_{n+1} = \\dfrac{u_n}{3} + 4$ converge vers $\\ell$. Que vaut $\\ell$ ?', options: ['$4$', '$6$', '$12$', '$3$'], answer: 1, correction: 'Si la suite converge vers $\\ell$, alors à la limite $u_{n+1} = u_n = \\ell$ :<br/><br/>$\\ell = \\dfrac{\\ell}{3} + 4 \\Rightarrow \\ell - \\dfrac{\\ell}{3} = 4 \\Rightarrow \\dfrac{2\\ell}{3} = 4 \\Rightarrow \\ell = 6$.' },
      { q: 'La suite $u_n = (-1)^n$ est-elle convergente ?', options: ['Oui, vers $0$ (la moyenne de $1$ et $-1$)', 'Oui, vers $1$', 'Non, elle oscille entre $1$ et $-1$ sans se stabiliser', 'Oui, vers $-1$'], answer: 2, correction: '$u_n$ alterne entre $1$ (rang pair) et $-1$ (rang impair) : elle ne se rapproche d\'aucune valeur fixe.<br/><br/>La suite <strong>diverge</strong>, mais elle est bornée. Cela montre qu\'une suite bornée n\'est pas forcément convergente !' }
    ],
    /* BANQUE D'EXERCICES — élargie le 2026-09-14, sur le modèle du chapitre
       pilote.

       AVANT : une seule tâche distincte (résoudre $\ell = f(\ell)$ pour une
       récurrence affine), habillée de quatre décors par pick(). Le professeur
       qui feuilletait la banque y lisait douze fois la même équation.

       APRÈS : sept tâches réellement différentes, qui couvrent ce que le
       chapitre demande VRAIMENT — le point fixe, mais aussi le calcul de
       termes par itération, le terme général d'une géométrique, la somme des
       termes, le seuil à franchir, la reconnaissance de la convergence selon
       $|q|$, et la suite auxiliaire.

       Le décor continue de varier par pick(), mais il ne compte pas pour de
       la diversité : une tâche se reconnaît à la première ligne du corrigé.

       Notation décimale : toujours par fr(), jamais par un .replace() écrit
       à la main — bug récurrent du corpus. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['pointFixe', 'iteration', 'termeGeneral', 'somme',
                            'seuil', 'natureSelonQ', 'suiteAuxiliaire']);

        /* TÂCHE 1 — point fixe d'une récurrence affine. La tâche historique,
           conservée : c'est la question la plus fréquente au baccalauréat. */
        if (tache === 'pointFixe') {
          const ctx = pick([
            { intro: 'Chaque année, le capital d\'une entreprise évolue selon', u: '€' },
            { intro: 'Le volume d\'eau d\'un lac évolue chaque mois selon', u: 'L' },
            { intro: 'La population d\'une colonie évolue selon', u: 'individus' },
            { intro: 'La concentration d\'un médicament dans le sang évolue selon', u: 'mg/L' }
          ]);
          const u0 = rand(1, 8), a = pick([2, 3, 4, 5]), b = rand(1, 5);
          // u_{n+1} = u_n/a + b => l = ab/(a-1)
          const l = parseFloat((a * b / (a - 1)).toFixed(2));
          return {
            statement: `${ctx.intro} $u_{n+1} = \\dfrac{u_n}{${a}} + ${b}$ ${ctx.u}, avec $u_0 = ${u0}$ ${ctx.u}. Si cette suite converge, calculer sa limite $\\ell$ (en ${ctx.u}). Arrondir à $0{,}01$.`,
            answer: l, tolerance: 0.05, unit: '',
            hint: `Si la suite converge vers $\\ell$, alors $u_{n+1}$ et $u_n$ tendent vers la même valeur : $\\ell = \\dfrac{\\ell}{${a}} + ${b}$. Résous cette équation.`,
            solution: [
              `$\\ell = \\dfrac{\\ell}{${a}} + ${b}$`,
              `$\\ell - \\dfrac{\\ell}{${a}} = ${b} \\Rightarrow \\dfrac{${a - 1}\\ell}{${a}} = ${b}$`,
              `$\\ell = \\dfrac{${a} \\times ${b}}{${a - 1}} = ${fr(l)}$ ${ctx.u}`
            ]
          };
        }

        /* TÂCHE 2 — calculer un terme par itérations successives. Tâche
           radicalement différente : l'élève n'a rien à résoudre, il doit
           appliquer la relation plusieurs fois de suite sans se tromper. Elle
           installe le sens de « récurrence » avant toute démonstration. */
        if (tache === 'iteration') {
          const ctx = pick([
            { intro: 'Un compte épargne suit' },
            { intro: 'Le stock d\'un entrepôt suit' },
            { intro: 'Le nombre de bactéries d\'une culture suit' }
          ]);
          const u0 = rand(1, 6), a = pick([2, 3]), b = rand(1, 5), k = 3;
          let u = u0;
          const etapes = [];
          for (let i = 0; i < k; i++) {
            const v = a * u + b;
            etapes.push(`$u_{${i + 1}} = ${a} \\times ${u} + ${b} = ${v}$`);
            u = v;
          }
          return {
            statement: `${ctx.intro} $u_{n+1} = ${a}u_n + ${b}$, avec $u_0 = ${u0}$. Calculer $u_3$.`,
            answer: u, tolerance: 0, unit: '',
            hint: `Il n'y a pas de formule à trouver : applique la relation trois fois de suite, en repartant à chaque fois du terme que tu viens d'obtenir.`,
            solution: etapes.concat([
              `Donc $u_3 = ${u}$. Attention à ne pas repartir de $u_0$ à chaque étape : chaque terme se construit sur le <strong>précédent</strong>.`
            ])
          };
        }

        /* TÂCHE 3 — terme général d'une suite géométrique. On sort de la
           récurrence : ici la suite est donnée explicitement, et l'élève
           applique une puissance. C'est le pont vers l'étude des limites. */
        if (tache === 'termeGeneral') {
          const ctx = pick([
            { intro: 'La valeur d\'un véhicule (en milliers d\'euros) suit' },
            { intro: 'L\'intensité d\'un signal (en unités arbitraires) suit' },
            { intro: 'La surface d\'une nappe de pollution (en hectares) suit' }
          ]);
          const u0 = rand(2, 9), q = pick([0.5, 0.8, 1.5, 2]), n = rand(3, 5);
          const res = parseFloat((u0 * Math.pow(q, n)).toFixed(3));
          return {
            statement: `${ctx.intro} une suite géométrique de premier terme $u_0 = ${u0}$ et de raison $q = ${fr(q)}$. Calculer $u_{${n}}$. Arrondir à $0{,}001$.`,
            answer: res, tolerance: 0.002, unit: '',
            hint: `Le terme général d'une suite géométrique est $u_n = u_0 \\times q^n$. L'exposant est le <strong>rang</strong>, pas le rang moins un — on part bien de $u_0$.`,
            solution: [
              `$u_n = u_0 \\times q^n = ${u0} \\times ${fr(q)}^{\\,n}$`,
              `$u_{${n}} = ${u0} \\times ${fr(q)}^{${n}} = ${u0} \\times ${fr(parseFloat(Math.pow(q, n).toFixed(4)))}$`,
              `$u_{${n}} = ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 4 — somme des premiers termes. Formule entièrement
           différente des précédentes, et erreur classique : le nombre de
           termes vaut $n+1$ quand on part du rang 0. */
        if (tache === 'somme') {
          const ctx = pick([
            { intro: 'Les versements annuels sur un plan suivent' },
            { intro: 'Les distances parcourues chaque jour suivent' },
            { intro: 'Les quantités produites chaque mois suivent' }
          ]);
          const u0 = rand(2, 6), r = rand(2, 7), n = rand(6, 12);
          // somme arithmetique de u_0 a u_n : (n+1)(u_0 + u_n)/2
          const un = u0 + n * r;
          const res = (n + 1) * (u0 + un) / 2;
          return {
            statement: `${ctx.intro} une suite arithmétique de premier terme $u_0 = ${u0}$ et de raison $r = ${r}$. Calculer la somme $S = u_0 + u_1 + \\cdots + u_{${n}}$.`,
            answer: res, tolerance: 0, unit: '',
            hint: `Calcule d'abord $u_{${n}}$, puis applique $S = \\dfrac{(\\text{nombre de termes}) \\times (\\text{premier} + \\text{dernier})}{2}$. Compte bien les termes : de $u_0$ à $u_{${n}}$, il y en a $${n + 1}$, pas $${n}$.`,
            solution: [
              `$u_{${n}} = ${u0} + ${n} \\times ${r} = ${un}$`,
              `Nombre de termes de $u_0$ à $u_{${n}}$ : $${n} + 1 = ${n + 1}$`,
              `$S = \\dfrac{${n + 1} \\times (${u0} + ${un})}{2} = \\dfrac{${n + 1} \\times ${u0 + un}}{2} = ${res}$`
            ]
          };
        }

        /* TÂCHE 5 — seuil à franchir. L'élève cherche le premier rang qui
           dépasse une valeur : la réponse est un RANG, pas un terme, et cela
           suffit à en faire une tâche distincte. Elle prépare l'algorithmique
           du programme (recherche de seuil par balayage). */
        if (tache === 'seuil') {
          const ctx = pick([
            { intro: 'Une population double régulièrement :' },
            { intro: 'Un placement grossit régulièrement :' },
            { intro: 'Une rumeur se propage régulièrement :' }
          ]);
          const u0 = rand(2, 5), q = pick([1.5, 2]), cible = pick([50, 100, 200]);
          let n = 0, u = u0;
          while (u <= cible) { u *= q; n++; }
          const avant = parseFloat((u0 * Math.pow(q, n - 1)).toFixed(2));
          const apres = parseFloat(u.toFixed(2));
          return {
            statement: `${ctx.intro} $u_n = ${u0} \\times ${fr(q)}^{\\,n}$. Déterminer le plus petit rang $n$ pour lequel $u_n > ${cible}$.`,
            answer: n, tolerance: 0, unit: '',
            hint: `Calcule les termes de proche en proche jusqu'à dépasser $${cible}$, et retiens le <strong>rang</strong> auquel cela se produit — pas la valeur du terme.`,
            solution: [
              `On calcule les termes successifs jusqu'à franchir le seuil.`,
              `Au rang $${n - 1}$ : $u_{${n - 1}} = ${fr(avant)}$, encore inférieur ou égal à $${cible}$.`,
              `Au rang $${n}$ : $u_{${n}} = ${fr(apres)}$, qui dépasse $${cible}$.`,
              `Le plus petit rang cherché est donc $n = ${n}$.`
            ]
          };
        }

        /* TÂCHE 6 — nature de la suite selon $|q|$. Aucun calcul de terme :
           l'élève doit TRANCHER entre trois comportements à partir de la
           seule raison. Adossée au deuxième schéma du cours. */
        if (tache === 'natureSelonQ') {
          const ctx = pick([
            { intro: 'Un modèle économique fournit' },
            { intro: 'Un modèle démographique fournit' },
            { intro: 'Un modèle physique fournit' }
          ]);
          const u0 = rand(2, 9);
          const cas = pick([
            { q: 0.4, code: 1 }, { q: 0.9, code: 1 }, { q: -0.6, code: 1 },
            { q: 1.2, code: 2 }, { q: 3, code: 2 },
            { q: -1.5, code: 3 }
          ]);
          const q = cas.q;
          return {
            statement: `${ctx.intro} la suite géométrique $u_n = ${u0} \\times (${fr(q)})^{\\,n}$. Quelle est sa nature ? Répondre par $1$ si elle converge vers $0$, par $2$ si elle diverge vers $+\\infty$, par $3$ si elle diverge en oscillant sans limite.`,
            answer: cas.code, tolerance: 0, unit: '',
            hint: `Tout se joue sur $|q|$, c'est-à-dire la raison sans son signe. Ici $|q| = ${fr(Math.abs(q))}$. Compare-le à $1$, puis regarde le signe de $q$.`,
            solution: [
              `Raison : $q = ${fr(q)}$, donc $|q| = ${fr(Math.abs(q))}$.`,
              Math.abs(q) < 1
                ? `Comme $|q| < 1$, la puissance $q^n$ s'écrase vers $0$, donc $u_n \\to 0$ : la suite <strong>converge vers $0$</strong>. La réponse est $1$.`
                : (q > 1
                    ? `Comme $q > 1$, la puissance $q^n$ part vers $+\\infty$, donc $u_n \\to +\\infty$ : la suite <strong>diverge</strong>. La réponse est $2$.`
                    : `Comme $q \\leq -1$, la puissance $q^n$ change de signe à chaque rang tout en grandissant en valeur absolue : la suite <strong>oscille sans limite</strong>. La réponse est $3$.`),
              `Retiens l'ordre : d'abord $|q|$ par rapport à $1$, ensuite seulement le signe.`
            ]
          };
        }

        /* TÂCHE 7 — suite auxiliaire. La tâche la plus complète du chapitre :
           on pose $v_n = u_n - \ell$, on reconnaît une géométrique, et on en
           tire un terme explicite. C'est la technique attendue au
           baccalauréat, et elle n'apparaissait nulle part dans la banque. */
        const ctx = pick([
          { intro: 'Pour étudier une évolution, on pose' },
          { intro: 'Pour obtenir une formule explicite, on pose' },
          { intro: 'Pour lever la récurrence, on pose' }
        ]);
        const a = pick([2, 3, 4]), b = rand(1, 6), u0 = rand(1, 9), n = rand(2, 4);
        // u_{n+1} = u_n/a + b, point fixe l = ab/(a-1)
        const l = a * b / (a - 1);
        // v_n = u_n - l est geometrique de raison 1/a, v_0 = u0 - l
        const v0 = u0 - l;
        const res = parseFloat((l + v0 * Math.pow(1 / a, n)).toFixed(3));
        return {
          statement: `${ctx.intro} $u_{n+1} = \\dfrac{u_n}{${a}} + ${b}$ avec $u_0 = ${u0}$, puis $v_n = u_n - \\ell$ où $\\ell$ est le point fixe. La suite $(v_n)$ est géométrique. En déduire $u_{${n}}$. Arrondir à $0{,}001$.`,
          answer: res, tolerance: 0.002, unit: '',
          hint: `Calcule d'abord $\\ell$, puis $v_0 = u_0 - \\ell$. La raison de $(v_n)$ est $\\dfrac{1}{${a}}$, donc $v_n = v_0 \\times \\left(\\dfrac{1}{${a}}\\right)^n$, et enfin $u_n = v_n + \\ell$.`,
          solution: [
            `Point fixe : $\\ell = \\dfrac{${a} \\times ${b}}{${a - 1}} = ${fr(parseFloat(l.toFixed(3)))}$`,
            `Premier terme auxiliaire : $v_0 = ${u0} - ${fr(parseFloat(l.toFixed(3)))} = ${fr(parseFloat(v0.toFixed(3)))}$`,
            `$(v_n)$ est géométrique de raison $\\dfrac{1}{${a}}$, donc $v_{${n}} = ${fr(parseFloat(v0.toFixed(3)))} \\times \\left(\\dfrac{1}{${a}}\\right)^{${n}} = ${fr(parseFloat((v0 * Math.pow(1 / a, n)).toFixed(3)))}$`,
            `On revient à $u$ : $u_{${n}} = v_{${n}} + \\ell = ${fr(res)}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Une suite est définie par $u_0=1$ et $u_{n+1}=\\frac{u_n}{2}+1$ pour tout $n\\ge0$.',
      tasks: [
        'Calculer $u_1$, $u_2$, $u_3$.',
        'Conjecturer la limite de $(u_n)$.',
        'Vérifier que la suite est croissante et majorée par $2$.'
      ],
      solutions: [
        '$u_1=\\frac{1}{2}+1=1{,}5$ ; $u_2=\\frac{1{,}5}{2}+1=1{,}75$ ; $u_3=\\frac{1{,}75}{2}+1=1{,}875$.',
        'Les termes semblent converger vers $l=2$ (résoudre $l=l/2+1 \\Rightarrow l=2$).',
        'Si $u_n<2$, alors $u_{n+1}=u_n/2+1<1+1=2$ (majorée). $u_{n+1}-u_n=1-u_n/2>0$ si $u_n<2$ (croissante).'
      ],
      finalAnswer: 'Suite croissante majorée par $2$ : elle converge vers $2$.'
    },

    evaluation: {
      title: 'Évaluation — Suites compléments',
      duration: '35 min',
      questions: [
        {
          statement: 'Soit $(u_n)$ la suite géométrique de premier terme $u_0 = 3$ et de raison $q = 0{,}5$. Calculer $u_5$.',
          type: 'numeric',
          answer: 0.09375,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: 'On applique la formule du terme général d\'une suite géométrique :<br/><br/>$u_5 = u_0 \\times q^5 = 3 \\times (0{,}5)^5 = 3 \\times \\dfrac{1}{32} = \\dfrac{3}{32} = 0{,}09375$.'
        },
        {
          /* Q2 RÉÉCRITE le 2026-09-14. L'ancienne demandait la limite d'une
             géométrique avec $|q| < 1$ : la réponse se cochait en
             reconnaissant la formule du cours, sans le moindre raisonnement.

             La nouvelle donne DEUX informations qui, prises séparément, ne
             concluent pas, et demande ce qu'on peut en tirer ensemble.
             L'élève ne produit aucun nombre : il passe d'une propriété à une
             autre. C'est « raisonner ». */
          statement: 'Une suite $(u_n)$ est <strong>croissante</strong> et tous ses termes sont <strong>inférieurs à $10$</strong>. On ne connaît ni son premier terme ni sa formule. Que peut-on affirmer ?',
          type: 'multiple-choice',
          options: [
            'Elle converge vers une limite $\\ell$ qui vérifie $\\ell \\leq 10$, sans qu\'on puisse dire laquelle',
            'Elle converge vers $10$',
            'Elle diverge vers $+\\infty$, puisqu\'elle est croissante',
            'On ne peut rien affirmer sans connaître son expression'
          ],
          answer: 0,
          points: 2,
          correction: 'Prises séparément, les deux informations ne concluent pas. Une suite croissante peut très bien diverger — pense à $u_n = n$. Une suite majorée peut très bien ne pas converger — pense à $u_n = (-1)^n$, qui reste bornée et oscille sans fin.<br/><br/>Mais <strong>ensemble</strong>, elles suffisent : c\'est le <strong>théorème de la limite monotone</strong>. Une suite croissante et majorée converge nécessairement.<br/><br/>En revanche, le théorème ne dit <strong>pas</strong> vers quoi. La limite est inférieure ou égale au majorant $10$, mais elle peut valoir $3$, ou $9{,}9$, ou $10$ — rien ne permet de trancher.<br/><br/>C\'est un théorème d\'<strong>existence</strong> : il garantit qu\'une limite existe, il ne la calcule pas. Répondre « elle converge vers $10$ » revient à confondre le majorant avec la limite, et c\'est l\'erreur la plus fréquente sur ce théorème.'
        },
        {
          /* Q3 RÉÉCRITE le 2026-09-14. L'ancienne demandait la somme d'une
             suite arithmétique : un deuxième calcul, alors que la Q1 en
             était déjà un.

             La nouvelle part d'une situation concrète — un traitement médical
             avec élimination partielle — et demande à l'élève de TRADUIRE
             cette situation en une relation de récurrence, puis d'en tirer
             la valeur d'équilibre. C'est « modéliser ». */
          statement: 'Un patient prend $30$ mg d\'un médicament chaque matin. Entre deux prises, son organisme en élimine $40\\%$ de ce qu\'il contient. On note $u_n$ la quantité présente, en mg, juste après la prise du jour $n$. Quelle quantité le corps contiendra-t-il à long terme, juste après la prise du matin ?',
          type: 'numeric',
          answer: 75,
          tolerance: 0.5,
          unit: 'mg',
          points: 2,
          correction: 'La difficulté n\'est pas le calcul, c\'est d\'écrire la <strong>bonne relation</strong>.<br/><br/>Entre deux prises, le corps élimine $40\\%$ de ce qu\'il contient : il en <strong>conserve</strong> donc $60\\%$, soit $0{,}6\\,u_n$. Puis le patient prend $30$ mg de plus.<br/><br/>D\'où la relation : $u_{n+1} = 0{,}6\\,u_n + 30$.<br/><br/>Attention au piège : il ne faut pas écrire $0{,}4\\,u_n$, qui serait la quantité éliminée et non celle qui reste.<br/><br/>À long terme, la quantité se stabilise : $u_{n+1}$ et $u_n$ tendent vers la même valeur $\\ell$, qui vérifie donc $\\ell = 0{,}6\\,\\ell + 30$.<br/><br/>On résout : $0{,}4\\,\\ell = 30$, donc $\\ell = 75$ mg.<br/><br/>L\'interprétation vaut le calcul : le médicament <strong>s\'accumule</strong>, et l\'organisme finit par contenir bien plus que la dose journalière — $75$ mg pour $30$ mg pris chaque jour. C\'est exactement pourquoi les posologies se calculent, et pourquoi doubler une dose « pour rattraper un oubli » est dangereux.'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-14. L'ancienne demandait quelle étape
             manque quand on ne prouve que l'hérédité : la réponse se cochait
             en reconnaissant le mot « initialisation », sans qu'on sache si
             l'élève comprend POURQUOI elle manque.

             La nouvelle met l'élève en position de CORRECTEUR face à une
             copie dont l'hérédité est parfaitement rédigée et dont la
             conclusion est pourtant fausse — et la propriété choisie est
             effectivement héréditaire et effectivement fausse, ce qui rend
             la situation honnête. Aucun nombre à produire. C'est
             « communiquer ». */
          statement: 'Un camarade veut démontrer que « $3^n$ est un multiple de $5$ pour tout $n \\geq 0$ ». Il écrit : « Supposons $3^n$ multiple de $5$, donc $3^n = 5k$. Alors $3^{n+1} = 3 \\times 3^n = 3 \\times 5k = 5 \\times 3k$, qui est bien un multiple de $5$. L\'hérédité est donc démontrée, et la propriété est vraie pour tout $n$. » Son calcul d\'hérédité est juste. Sa conclusion ne l\'est pas — $3^0 = 1$ n\'est pas multiple de $5$. Quelle phrase corrige son raisonnement ?',
          type: 'multiple-choice',
          options: [
            'Il lui manque l\'<strong>initialisation</strong> : son hérédité montre seulement que la propriété se transmet, jamais qu\'elle est vraie quelque part. Ici elle n\'est vraie à aucun rang, et l\'hérédité reste pourtant correcte',
            'Son calcul d\'hérédité est faux : $3 \\times 5k$ n\'est pas un multiple de $5$',
            'Il aurait dû faire l\'hérédité du rang $n+1$ vers le rang $n$',
            'La récurrence ne s\'applique pas aux questions de divisibilité'
          ],
          answer: 0,
          points: 2,
          correction: 'Son hérédité est <strong>parfaitement correcte</strong>, et c\'est ce qui rend l\'exemple instructif : $3 \\times 5k = 5 \\times 3k$ est bien un multiple de $5$. Il n\'y a rien à reprendre dans ce calcul.<br/><br/>Ce qui manque, c\'est l\'<strong>initialisation</strong>. Et elle ne manque pas par étourderie : elle est <strong>impossible</strong>, puisque $3^0 = 1$, $3^1 = 3$, $3^2 = 9$ ne sont multiples de $5$ à aucun rang.<br/><br/>L\'hérédité dit seulement : « <em>si</em> c\'était vrai quelque part, ce serait vrai ensuite ». Elle ne dit jamais que c\'est vrai quelque part.<br/><br/>C\'est exactement la rangée de dominos du cours où personne n\'a poussé le premier : chacun est capable de renverser son voisin, et aucun ne tombe.<br/><br/>À retenir : une hérédité juste ne vaut rien sans initialisation, et une démonstration où l\'on « oublie » de vérifier le rang de départ peut établir n\'importe quelle absurdité.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-14. L'ancienne demandait de résoudre
             $\ell = \frac{\ell}{3} + 2$ : un troisième calcul, et le même
             que la première tâche de la banque.

             La nouvelle demande de dire ce que le point fixe PROUVE et ce
             qu'il ne prouve pas — donc de passer d'une propriété à une
             autre sans produire de nombre. C'est « raisonner ». */
          statement: 'Pour la suite $u_0 = 1$ et $u_{n+1} = 3u_n - 4$, un élève résout $\\ell = 3\\ell - 4$ et trouve $\\ell = 2$. Il en conclut que la suite converge vers $2$. Pourtant $u_0 = 1$, $u_1 = -1$, $u_2 = -7$, $u_3 = -25$ : la suite s\'effondre vers $-\\infty$. Que vaut réellement le calcul du point fixe ?',
          type: 'multiple-choice',
          options: [
            'Il donne seulement un <strong>candidat</strong> : si la suite converge, sa limite ne peut être que $2$. Il ne prouve jamais qu\'elle converge, et ici elle ne converge pas',
            'Le calcul est faux : la bonne solution de $\\ell = 3\\ell - 4$ est $\\ell = -2$',
            'Le point fixe prouve toujours la convergence, donc les termes calculés doivent être erronés',
            'Le point fixe n\'existe que si la suite est croissante'
          ],
          answer: 0,
          points: 2,
          correction: 'Le calcul de $\\ell$ est exact : $\\ell = 3\\ell - 4$ donne $2\\ell = 4$, donc $\\ell = 2$. Et les termes calculés sont exacts aussi.<br/><br/>Il n\'y a donc aucune contradiction : le raisonnement du point fixe est une <strong>implication à sens unique</strong>.<br/><br/>Ce qu\'il dit vraiment : « <em>si</em> la suite converge vers $\\ell$, <em>alors</em> $\\ell = f(\\ell)$ ». Il élimine tous les autres candidats, et c\'est déjà beaucoup — mais il ne dit rien sur l\'hypothèse de départ.<br/><br/>Ici l\'hypothèse est fausse : la suite diverge. Le nombre $2$ est bien l\'unique limite <strong>possible</strong>, et elle n\'est pas atteinte.<br/><br/>Pour établir la convergence, il faut un argument séparé : la monotonie et le bornage, ou le passage par la suite auxiliaire $v_n = u_n - \\ell$. Ici $v_n = u_n - 2$ est géométrique de raison $3$, et comme $|3| > 1$ elle explose — ce qui confirme la divergence.<br/><br/>À retenir : <strong>on cherche le point fixe après avoir prouvé la convergence, jamais à sa place.</strong>'
        }
      ]
    }
  });
