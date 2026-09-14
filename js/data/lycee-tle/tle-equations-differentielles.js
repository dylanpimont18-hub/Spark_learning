/* =========================================================
   Spark Learning – data/lycee-tle/tle-equations-differentielles.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-equations-differentielles',
    level: 2, subject: 'maths',
    icon: '🌊',
    title: 'Équations Différentielles du 1er Ordre',
    subtitle: 'Constante de temps τ, régime transitoire',
    keywords: ['Équation différentielle', 'Constante de temps τ', 'Régime transitoire', 'Circuit RC'],
    physics: 'Charge condensateur RC, chute libre avec frottements',

    cours: {
      /* « DÉCOUVRIR » RÉÉCRIT le 2026-09-14.

         L'ancienne version définissait tout d'entrée : ce qu'est une
         équation différentielle, sa solution générale, la valeur de
         $63{,}2\%$, la convention des $5\tau$, la formule $\tau = RC$.
         C'est un résumé de cours, pas une entrée : le test du cahier des
         charges est « si on peut répondre à la question d'ouverture sans la
         notion du chapitre, la question est mal choisie », et une
         définition ne pose aucune question.

         La question retenue est une VRAIE impasse pour un élève de
         terminale : il sait tracer une courbe quand on lui donne $y(t)$ ;
         on lui donne ici tout le contraire — la règle qui fabrique la
         courbe, sans la courbe. Il ne peut pas la deviner, et il peut
         constater que ses outils habituels (primitive directe) échouent,
         puisque le second membre contient l'inconnue elle-même.

         On évite le travers inverse (le décor plaqué) : le refroidissement
         d'une tasse est le phénomène même que l'équation décrit, pas une
         illustration ajoutée après coup. */
      intro: 'Une tasse de café à $80$ °C est posée dans une pièce à $20$ °C. Elle refroidit. Mais <strong>comment</strong> exactement ?<br/><br/>Une chose est sûre, et tu peux la constater : le café chaud refroidit <strong>vite</strong> au début, puis de plus en plus lentement. Au bout d\'une heure il est tiède, et il le reste longtemps.<br/><br/>La physique donne la règle exacte de ce refroidissement, et elle est remarquablement simple : <strong>plus l\'écart avec la pièce est grand, plus la température chute vite</strong>. À $80$ °C, l\'écart vaut $60$ degrés et ça chute fort ; à $25$ °C, l\'écart ne vaut plus que $5$ degrés et ça ne bouge presque plus.<br/><br/>Écrivons-le. La vitesse de refroidissement, c\'est la dérivée $T\'(t)$. L\'écart à la pièce, c\'est $T(t) - 20$. La règle dit que l\'une est proportionnelle à l\'autre :<br/><br/>$$T\'(t) = -k\\big(T(t) - 20\\big)$$<br/><br/>Et voilà l\'ennui. Tu sais trouver $T$ quand on te donne $T\'$ : tu cherches une primitive. Mais ici, pour calculer $T\'$, il faudrait déjà connaître $T$ — qui est justement ce qu\'on cherche. <strong>L\'inconnue apparaît des deux côtés.</strong><br/><br/>Une égalité de cette forme, où une fonction inconnue est reliée à sa propre dérivée, s\'appelle une <strong>équation différentielle</strong>. Ce n\'est pas une équation où l\'on cherche un nombre : c\'est une équation où l\'on cherche une <strong>fonction</strong>.<br/><br/>Bonne nouvelle : celles de ce chapitre ont toutes la même solution, et c\'est une exponentielle. Ce qui va les distinguer les unes des autres, c\'est un seul nombre — la <strong>constante de temps</strong> $\\tau$, qui dit à quelle vitesse le système s\'approche de son état final.',
      definitions: [
        { term: 'Équation différentielle', def: 'Équation reliant une fonction inconnue $y(t)$ à sa dérivée $y\'(t)$ (et éventuellement ses dérivées d\'ordres supérieurs). L\'ordre de l\'ED est celui de la plus haute dérivée présente.' },
        { term: 'Constante de temps $\\tau$', def: 'Paramètre qui caractérise la rapidité de la réponse du système. À $t = \\tau$, la grandeur a atteint $63{,}2\\%$ de sa valeur finale. Le régime permanent est considéré atteint à $5\\tau$.' },
        { term: 'Régime transitoire', def: 'Phase pendant laquelle le système évolue depuis sa condition initiale vers sa valeur d\'équilibre. La durée du transitoire est d\'environ $5\\tau$.' },
        { term: 'Régime permanent', def: 'État atteint quand le transitoire est terminé : la grandeur ne varie plus (ou de manière négligeable). $y(t) \\approx y_\\infty$ pour $t \\gg \\tau$.' }
      ],
      method: {
        title: 'Méthode de résolution',
        steps: [
          '<strong>Forme canonique</strong> : écrire sous $\\tau \\dfrac{dy}{dt} + y = y_{\\infty}$ où $\\tau$ est la constante de temps et $y_{\\infty}$ la valeur en régime permanent.',
          '<strong>Solution générale</strong> : $y(t) = y_{\\infty} + (y_0 - y_{\\infty}) e^{-t/\\tau}$ où $y_0 = y(0)$ est la condition initiale.',
          '<strong>Paramètres physiques</strong> : circuit RC, $\\tau = RC$ ; charge depuis $U_0 = 0$ : $U_C(t) = E(1 - e^{-t/\\tau})$.'
        ]
      },
      example: {
        statement: 'Un circuit RC avec $R = 5$ kΩ et $C = 200$ μF est alimenté par un générateur $E = 12$ V. Le condensateur est initialement déchargé. Calculer $U_C$ à $t = 2$ s.',
        steps: [
          'Calcul de la constante de temps : $\\tau = RC = 5 \\times 10^3 \\times 200 \\times 10^{-6} = 1$ s.',
          'Expression de $U_C(t)$ : $U_C(t) = E(1 - e^{-t/\\tau}) = 12(1 - e^{-t})$.',
          'À $t = 2$ s : $U_C(2) = 12(1 - e^{-2}) = 12(1 - 0{,}1353) = 12 \\times 0{,}8647$.',
          '$U_C(2) \\approx 10{,}38$ V.'
        ],
        answer: '$U_C(2) \\approx 10{,}38$ V. Après $2\\tau$, le condensateur a atteint $86{,}5\\%$ de la tension finale $E$.'
      },
      formulas: [
        '$\\tau \\dfrac{dU_C}{dt} + U_C = E$ (circuit RC en charge)',
        '$U_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$ (solution en charge)',
        '$\\tau = R \\times C$ (circuit RC)',
        'À $t = \\tau$ : $U_C(\\tau) = E(1 - e^{-1}) \\approx 0{,}632 E$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Courbe de charge d\'un condensateur',
        title: '$U_C(t) = E(1 - e^{-t/\\tau})$ avec $E = 12$ V et $\\tau = 1$ s (exemple du cours)',
        description: 'Tracé point par point de la tension aux bornes du condensateur pendant la charge à travers une résistance, avec le repère caractéristique à $\\tau$ où $63{,}2\\%$ de la tension finale $E$ est atteinte.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="rc-graph-title rc-graph-desc">
            <title id="rc-graph-title">Charge d'un condensateur a travers une resistance</title>
            <desc id="rc-graph-desc">Courbe de la tension U_C en fonction du temps pour un circuit RC en charge, avec E = 12 V et tau = 1 s. Le point a t = tau est marque : U_C atteint 63,2% de la tension finale E. La courbe se rapproche de E sans jamais l'atteindre exactement ; le point a t = 2 s (exemple du cours) et le point a 5 tau (regime permanent conventionnel) sont egalement marques.</desc>

            <!-- grille -->
            <line class="grid-line" x1="60" y1="170.8" x2="440" y2="170.8"></line>
            <line class="grid-line" x1="60" y1="131.5" x2="440" y2="131.5"></line>
            <line class="grid-line" x1="60" y1="92.3" x2="440" y2="92.3"></line>
            <line class="grid-line" x1="136" y1="20" x2="136" y2="210"></line>
            <line class="grid-line" x1="212" y1="20" x2="212" y2="210"></line>
            <line class="grid-line" x1="288" y1="20" x2="288" y2="210"></line>
            <line class="grid-line" x1="364" y1="20" x2="364" y2="210"></line>

            <!-- axes -->
            <line class="axis" x1="60" y1="210" x2="460" y2="210"></line>
            <line class="axis" x1="60" y1="210" x2="60" y2="20"></line>

            <!-- asymptote E -->
            <line class="guide-line" x1="60" y1="53.1" x2="440" y2="53.1"></line>
            <text class="annotation-label" x="436" y="46" text-anchor="end">E = 12 V</text>

            <!-- courbe U_C(t) = E(1 - e^(-t/tau)) -->
            <path class="curve-main" d="M60.0 210.0 L75.2 181.6 L90.4 158.3 L105.6 139.2 L120.8 123.6 L136.0 110.8 L151.2 100.3 L166.4 91.8 L181.6 84.8 L196.8 79.0 L212.0 74.3 L227.2 70.5 L242.4 67.3 L257.6 64.7 L272.8 62.6 L288.0 60.9 L303.2 59.5 L318.4 58.3 L333.6 57.4 L348.8 56.6 L364.0 56.0 L379.2 55.4 L394.4 55.0 L409.6 54.7 L424.8 54.4 L440.0 54.1"></path>

            <!-- repere a tau -->
            <line class="guide-line" x1="136" y1="210" x2="136" y2="110.8"></line>
            <line class="guide-line" x1="60" y1="110.8" x2="136" y2="110.8"></line>
            <circle class="plot-point" cx="136" cy="110.8" r="5"></circle>
            <text class="annotation-label" x="141" y="129" text-anchor="start">63,2 % de E</text>

            <!-- point exemple t = 2 s -->
            <circle class="plot-point-alt" cx="212" cy="74.3" r="5"></circle>
            <text class="annotation-label" x="217" y="100" text-anchor="start">t = 2 s : 10,38 V</text>

            <!-- point a 5 tau (regime permanent) -->
            <circle class="plot-point-alt" cx="440" cy="54.1" r="4"></circle>

            <!-- ticks x -->
            <text class="tick-label" x="60" y="228" text-anchor="middle">0</text>
            <text class="tick-label" x="136" y="228" text-anchor="middle">τ</text>
            <text class="tick-label" x="212" y="228" text-anchor="middle">2τ</text>
            <text class="tick-label" x="288" y="228" text-anchor="middle">3τ</text>
            <text class="tick-label" x="364" y="228" text-anchor="middle">4τ</text>
            <text class="tick-label" x="440" y="228" text-anchor="middle">5τ</text>
            <text class="axis-label" x="440" y="245" text-anchor="end">t (s)</text>

            <!-- ticks y -->
            <text class="tick-label" x="50" y="213" text-anchor="end">0</text>
            <text class="tick-label" x="50" y="174.8" text-anchor="end">3</text>
            <text class="tick-label" x="50" y="135.5" text-anchor="end">6</text>
            <text class="tick-label" x="50" y="96.3" text-anchor="end">9</text>
            <text class="axis-label" x="16" y="13" text-anchor="start">U_C (V)</text>
          </svg>
        `,
        notes: [
          'À $t=\\tau=1$ s, $U_C(\\tau)=E(1-e^{-1})\\approx 7{,}59$ V, soit $63{,}2\\%$ de $E$ — c\'est la définition même de $\\tau$, quel que soit le circuit.',
          'À $t=2$ s (l\'exemple du cours), $U_C(2)\\approx 10{,}38$ V, soit $86{,}5\\%$ de $E$.',
          'Le régime permanent est atteint conventionnellement à $5\\tau=5$ s, où $U_C\\approx 11{,}92$ V ($99{,}3\\%$ de $E$) — la courbe ne touche jamais exactement l\'asymptote $E$.'
        ],
        reading: 'Repère d\'abord la ligne pointillée horizontale qui indique $E$, la valeur finale jamais atteinte exactement. Puis repère le point à $\\tau$ : il est toujours à $63{,}2\\%$ du chemin parcouru, quel que soit le circuit.',
        caption: 'Charge d\'un condensateur à travers une résistance : $U_C(t) = E(1 - e^{-t/\\tau})$, avec $E = 12$ V et $\\tau = RC = 1$ s (mêmes valeurs que l\'exemple du cours).'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14.

         Principe du cahier des charges : une figure par MALENTENDU, pas une
         figure par formule. Les trois retenus sont ceux qui coûtent le
         chapitre :

           1. $\tau$ est vu comme un nombre à calculer par $RC$, jamais comme
              une durée qu'on LIT sur une courbe. La tangente à l'origine
              coupe l'asymptote exactement en $t = \tau$ : c'est une
              propriété exacte, démontrable en deux lignes, et c'est la
              méthode expérimentale de mesure de $\tau$ ;
           2. « régime permanent atteint à $5\tau$ » est retenu comme une
              consigne arbitraire, faute de voir ce que recouvre le mot
              « transitoire » ;
           3. l'élève croit que la condition initiale décide de la valeur
              finale, alors que c'est l'ÉQUATION qui la fixe.

         La propriété de la figure 1 est vérifiée au flottant près par
         scripts/manuel/tests/diagrams-tle.test.js : la tangente en $t=0$ a
         pour pente $E/\tau$, donc elle vaut $E$ exactement en $t = \tau$.
         Toutes les coordonnées sont CALCULÉES par script. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Lire $\\tau$ sur la courbe',
          title: 'La tangente à l\'origine rencontre l\'asymptote exactement à $t = \\tau$',
          description: 'La constante de temps n\'est pas seulement un produit $RC$ à calculer : elle se <strong>lit</strong> sur n\'importe quel relevé expérimental. On trace la tangente au départ, on la prolonge jusqu\'à la valeur finale, et l\'abscisse du croisement est $\\tau$. La propriété est exacte, pas approchée.',
          svg: `
            <svg viewBox="0 0 450 250" role="img" aria-labelledby="tle-tau-title tle-tau-desc">
              <title id="tle-tau-title">La tangente a l'origine coupe l'asymptote a la constante de temps</title>
              <desc id="tle-tau-desc">Courbe de charge d'un condensateur partant de zero et montant vers une valeur finale de douze volts, representee par une ligne horizontale en pointille. Une droite est tracee depuis l'origine, tangente a la courbe en ce point. Cette droite monte plus vite que la courbe et rencontre la ligne des douze volts a l'abscisse deux secondes, qui est exactement la constante de temps du systeme. Au meme instant, la courbe elle-meme n'a atteint que sept virgule cinquante-huit volts, soit soixante-trois virgule deux pour cent de la valeur finale.</desc>

              <!-- Echelle : X(t) = 60 + 36 t ; Y(y) = 210 - 12,5 y. -->
              <line class="grid-line" x1="132" y1="35" x2="132" y2="210"></line>
              <line class="grid-line" x1="204" y1="35" x2="204" y2="210"></line>
              <line class="grid-line" x1="276" y1="35" x2="276" y2="210"></line>
              <line class="grid-line" x1="348" y1="35" x2="348" y2="210"></line>
              <line class="grid-line" x1="60" y1="172.5" x2="420" y2="172.5"></line>
              <line class="grid-line" x1="60" y1="135" x2="420" y2="135"></line>
              <line class="grid-line" x1="60" y1="97.5" x2="420" y2="97.5"></line>

              <line class="axis" x1="50" y1="210" x2="440" y2="210"></line>
              <line class="axis" x1="60" y1="220" x2="60" y2="25"></line>

              <!-- asymptote : la valeur finale -->
              <line class="focus-line" x1="60" y1="60" x2="430" y2="60"></line>
              <text class="annotation-label" x="426" y="52" text-anchor="end">valeur finale : 12 V</text>

              <!-- courbe y(t) = 12 (1 - e^(-t/2)) -->
              <polyline class="curve-main" points="60,210 69,192.4 78,176.8 87,163.1 96,151 105,140.3 114,130.9 123,122.5 132,115.2 141,108.7 150,103 159,97.9 168,93.5 177,89.5 186,86.1 195,83 204,80.3 213,77.9 222,75.8 231,74 240,72.3 249,70.9 258,69.6 267,68.5 276,67.5 285,66.6 294,65.8 303,65.1 312,64.5 321,64 330,63.5 339,63.1 348,62.7 357,62.4 366,62.1 375,61.9 384,61.7 393,61.5 402,61.3 411,61.1 420,61"></polyline>

              <!-- tangente a l'origine : pente 12/2 = 6 V par seconde -->
              <line class="guide-line" x1="60" y1="210" x2="140.6" y2="42"></line>

              <!-- le croisement, exactement en t = tau -->
              <line class="focus-line" x1="132" y1="210" x2="132" y2="60"></line>
              <circle class="plot-point" cx="132" cy="60" r="6"></circle>
              <circle class="plot-point-alt" cx="132" cy="115.2" r="6"></circle>

              <text class="annotation-label" x="146" y="84" text-anchor="start">croisement</text>
              <text class="annotation-label" x="146" y="126" text-anchor="start">la courbe est à 7,59 V</text>
              <text class="label-soft" x="146" y="144" text-anchor="start">soit 63,2 pour cent</text>

              <text class="tick-label" x="132" y="228" text-anchor="middle">2</text>
              <text class="tick-label" x="204" y="228" text-anchor="middle">4</text>
              <text class="tick-label" x="276" y="228" text-anchor="middle">6</text>
              <text class="tick-label" x="348" y="228" text-anchor="middle">8</text>
              <text class="tick-label" x="54" y="176" text-anchor="end">3</text>
              <text class="tick-label" x="54" y="139" text-anchor="end">6</text>
              <text class="tick-label" x="54" y="101" text-anchor="end">9</text>
              <text class="axis-label" x="420" y="244" text-anchor="end">temps en secondes</text>
              <text class="label-soft" x="66" y="244" text-anchor="start">ici la constante de temps vaut 2 secondes</text>
            </svg>
          `,
          notes: [
            'La propriété se démontre en deux lignes. La solution est $y(t) = E\\left(1 - e^{-t/\\tau}\\right)$, donc $y\'(t) = \\dfrac{E}{\\tau}e^{-t/\\tau}$ et la pente au départ vaut $y\'(0) = \\dfrac{E}{\\tau}$.',
            'Une droite partant de $0$ avec cette pente atteint la hauteur $E$ au bout d\'un temps $\\dfrac{E}{E/\\tau} = \\tau$. Le croisement tombe donc <strong>exactement</strong> sur $\\tau$, quels que soient $E$ et $\\tau$ : la figure ci-dessus en est un cas particulier, pas une coïncidence.',
            'C\'est la méthode de mesure employée au laboratoire. Sur un relevé d\'oscilloscope, on ne connaît ni $R$, ni $C$, ni $\\tau$ : on trace la tangente au départ, on lit l\'abscisse du croisement, et l\'on tient $\\tau$. Autre lecture équivalente, à partir de la même figure : chercher l\'instant où la courbe atteint $63{,}2\\%$ de sa valeur finale.'
          ],
          reading: 'Suis la droite depuis l\'origine : elle part avec exactement la même inclinaison que la courbe, puis s\'en détache parce que la courbe, elle, ralentit. Le point où la droite rencontre le pointillé horizontal te donne $\\tau$. Descends ensuite à la verticale jusqu\'à la courbe : tu tombes sur $7{,}59$ V, et non sur $12$. Voilà la réponse à la question qu\'on pose toujours : <strong>$\\tau$ n\'est pas le temps de charge complète</strong>. C\'est le temps qu\'il faudrait si le système gardait sa vitesse de départ — or il ne la garde pas.',
          caption: 'Charge avec $E = 12$ V et $\\tau = 2$ s : la tangente à l\'origine coupe l\'asymptote en $t = 2$ s, où la courbe n\'est qu\'à $7{,}59$ V.'
        },
        {
          theme: 'maths',
          kicker: 'Ce que « transitoire » veut dire',
          title: 'Le régime transitoire et ce qui vient après',
          description: 'Le système ne bascule pas d\'un état à l\'autre : il met un certain temps, et ce temps se mesure en multiples de $\\tau$. Dans la zone colorée, la grandeur évolue encore nettement ; au-delà, elle est à moins de $1\\%$ de sa valeur finale, et l\'on convient qu\'elle n\'évolue plus.',
          svg: `
            <svg viewBox="0 0 450 245" role="img" aria-labelledby="tle-transitoire-title tle-transitoire-desc">
              <title id="tle-transitoire-title">Regime transitoire puis regime permanent</title>
              <desc id="tle-transitoire-desc">Courbe de charge montant de zero vers dix, avec une bande coloree couvrant les cinq premieres constantes de temps. Quatre reperes sont marques sur la courbe : a une constante de temps elle atteint soixante-trois virgule deux pour cent de la valeur finale, a deux constantes quatre-vingt-six virgule cinq pour cent, a trois constantes quatre-vingt-quinze pour cent, et a cinq constantes quatre-vingt-dix-neuf virgule trois pour cent. Au-dela de la bande coloree, la courbe est visuellement confondue avec sa valeur finale.</desc>

              <!-- Bande du regime transitoire : de 0 a 5 tau. -->
              <rect class="frame-line" x="60" y="62.5" width="225" height="137.5" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></rect>
              <text class="label-soft" x="172" y="82" text-anchor="middle">régime transitoire</text>
              <text class="label-soft" x="360" y="82" text-anchor="middle">régime permanent</text>

              <line class="axis" x1="50" y1="200" x2="440" y2="200"></line>
              <line class="axis" x1="60" y1="210" x2="60" y2="25"></line>

              <line class="focus-line" x1="60" y1="62.5" x2="430" y2="62.5"></line>
              <text class="annotation-label" x="426" y="55" text-anchor="end">valeur finale</text>

              <polyline class="curve-main" points="60,200 67.5,178.9 75,161 82.5,145.9 90,133.1 97.5,122.3 105,113.1 112.5,105.3 120,98.7 127.5,93.2 135,88.5 142.5,84.5 150,81.1 157.5,78.3 165,75.8 172.5,73.8 180,72.1 187.5,70.6 195,69.3 202.5,68.3 210,67.4 217.5,66.7 225,66 232.5,65.5 240,65 247.5,64.6 255,64.3 262.5,64 270,63.8 277.5,63.6 285,63.4 292.5,63.3 300,63.2 307.5,63.1 315,63 322.5,62.9 330,62.8 337.5,62.8 345,62.7 352.5,62.7 360,62.7 367.5,62.6 375,62.6 382.5,62.6 390,62.6 397.5,62.6 405,62.6 412.5,62.6 420,62.5"></polyline>

              <circle class="plot-point" cx="105" cy="113.1" r="5"></circle>
              <circle class="plot-point" cx="150" cy="81.1" r="5"></circle>
              <circle class="plot-point" cx="195" cy="69.3" r="5"></circle>
              <circle class="plot-point-alt" cx="285" cy="63.4" r="5"></circle>

              <line class="grid-line" x1="105" y1="113.1" x2="105" y2="200"></line>
              <line class="grid-line" x1="150" y1="81.1" x2="150" y2="200"></line>
              <line class="grid-line" x1="195" y1="69.3" x2="195" y2="200"></line>
              <line class="grid-line" x1="285" y1="63.4" x2="285" y2="200"></line>

              <text class="tick-label" x="105" y="216" text-anchor="middle">1 tau</text>
              <text class="tick-label" x="150" y="216" text-anchor="middle">2 tau</text>
              <text class="tick-label" x="195" y="216" text-anchor="middle">3 tau</text>
              <text class="tick-label" x="285" y="216" text-anchor="middle">5 tau</text>

              <text class="tick-label" x="111" y="128" text-anchor="start">63,2 pour cent</text>
              <text class="tick-label" x="156" y="98" text-anchor="start">86,5</text>
              <text class="tick-label" x="201" y="112" text-anchor="start">95,0</text>
              <text class="tick-label" x="291" y="100" text-anchor="start">99,3</text>
              <text class="axis-label" x="420" y="238" text-anchor="end">temps</text>
            </svg>
          `,
          notes: [
            'Les quatre pourcentages sont les valeurs exactes de $1 - e^{-k}$ : $63{,}2\\%$ pour $k = 1$, $86{,}5\\%$ pour $k = 2$, $95{,}0\\%$ pour $k = 3$ et $99{,}3\\%$ pour $k = 5$. Ils ne dépendent ni de la grandeur étudiée, ni de la valeur de $\\tau$ — ils sont les mêmes pour tous les systèmes de ce type.',
            'La convention des $5\\tau$ n\'est donc pas arbitraire : elle correspond à $e^{-5} \\approx 0{,}007$, soit un écart résiduel inférieur à $1\\%$. C\'est en général sous la précision de l\'appareil de mesure, donc <strong>indiscernable</strong> de la valeur finale.',
            'Théoriquement, la valeur finale n\'est jamais atteinte : une exponentielle ne s\'annule pas. Il y a donc deux réponses à « quand est-ce fini ? » — jamais si l\'on est rigoureux, à $5\\tau$ si l\'on est pratique — et il faut savoir laquelle on donne.'
          ],
          reading: 'Regarde à quelle vitesse les repères se rapprochent du pointillé horizontal : le premier est encore loin, le deuxième déjà bien plus haut, et à partir du troisième ils sont pratiquement collés. Ne confonds pas $\\tau$ et la durée du transitoire : $\\tau$ est l\'unité de temps du système, la durée du transitoire en vaut cinq. Un système dont $\\tau$ vaut une milliseconde a fini en cinq millisecondes ; un système dont $\\tau$ vaut une heure met cinq heures. Même courbe, seule l\'échelle change.',
          caption: 'Régime transitoire (les cinq premiers $\\tau$) et régime permanent : $63{,}2$ puis $86{,}5$, $95{,}0$ et $99{,}3$ pour cent de la valeur finale.'
        },
        {
          theme: 'maths',
          kicker: 'Ce que décide la condition initiale',
          title: 'Deux départs différents, une seule destination',
          description: 'Les deux courbes sont solutions de la <strong>même</strong> équation différentielle, avec deux conditions initiales opposées : l\'une part de $0$, l\'autre de $14$. Elles convergent pourtant vers la même valeur $8$. C\'est l\'équation qui fixe la destination ; la condition initiale ne choisit que le point de départ.',
          svg: `
            <svg viewBox="0 0 450 255" role="img" aria-labelledby="tle-deuxci-title tle-deuxci-desc">
              <title id="tle-deuxci-title">Deux solutions de la meme equation, avec deux conditions initiales</title>
              <desc id="tle-deuxci-desc">Deux courbes sont tracees dans le meme repere. La premiere part de zero et monte ; la seconde part de quatorze et descend. Toutes deux se rapprochent de la meme valeur huit, marquee par une ligne horizontale en pointille, et l'ecart qui les separe se reduit continuellement. Au depart cet ecart vaut quatorze ; apres une constante de temps il ne vaut plus que cinq virgule quinze, soit trente-sept pour cent de sa valeur initiale.</desc>

              <!-- Echelle : X(t) = 60 + 40 t ; Y(y) = 210 - 10,9375 y. -->
              <line class="grid-line" x1="120" y1="35" x2="120" y2="210"></line>
              <line class="grid-line" x1="180" y1="35" x2="180" y2="210"></line>
              <line class="grid-line" x1="240" y1="35" x2="240" y2="210"></line>
              <line class="grid-line" x1="300" y1="35" x2="300" y2="210"></line>
              <line class="grid-line" x1="360" y1="35" x2="360" y2="210"></line>

              <line class="axis" x1="50" y1="210" x2="440" y2="210"></line>
              <line class="axis" x1="60" y1="220" x2="60" y2="25"></line>

              <!-- la destination commune -->
              <line class="focus-line" x1="60" y1="122.5" x2="430" y2="122.5"></line>
              <text class="annotation-label" x="426" y="115" text-anchor="end">destination commune : 8</text>

              <!-- solution partant de 0 -->
              <polyline class="curve-main" points="60,210 70,196.6 80,185.2 90,175.6 100,167.4 110,160.5 120,154.7 130,149.7 140,145.6 150,142 160,139 170,136.5 180,134.3 190,132.5 200,131 210,129.7 220,128.6 230,127.6 240,126.9 250,126.2 260,125.6 270,125.1 280,124.7 290,124.4 300,124.1 310,123.9 320,123.6 330,123.5 340,123.3 350,123.2 360,123.1 370,123 380,122.9 390,122.9 400,122.8 410,122.8 420,122.7"></polyline>

              <!-- solution partant de 14 -->
              <polyline class="graph-line" points="60,56.9 70,66.9 80,75.5 90,82.7 100,88.8 110,94 120,98.4 130,102.1 140,105.2 150,107.9 160,110.1 170,112 180,113.6 190,115 200,116.1 210,117.1 220,117.9 230,118.6 240,119.2 250,119.7 260,120.2 270,120.5 280,120.8 290,121.1 300,121.3 310,121.5 320,121.6 330,121.8 340,121.9 350,122 360,122.1 370,122.1 380,122.2 390,122.2 400,122.3 410,122.3 420,122.3"></polyline>

              <circle class="plot-point" cx="60" cy="210" r="5"></circle>
              <circle class="plot-point-alt" cx="60" cy="56.9" r="5"></circle>

              <!-- l'ecart, mesure au depart puis apres une constante de temps -->
              <line class="focus-line" x1="46" y1="56.9" x2="46" y2="210"></line>
              <text class="tick-label" x="40" y="136" text-anchor="end">14</text>
              <line class="focus-line" x1="120" y1="98.4" x2="120" y2="154.7"></line>
              <text class="annotation-label" x="126" y="130" text-anchor="start">écart réduit à 5,15</text>

              <text class="tick-label" x="120" y="228" text-anchor="middle">1 tau</text>
              <text class="tick-label" x="180" y="228" text-anchor="middle">2 tau</text>
              <text class="tick-label" x="240" y="228" text-anchor="middle">3 tau</text>
              <text class="tick-label" x="300" y="228" text-anchor="middle">4 tau</text>
              <text class="tick-label" x="360" y="228" text-anchor="middle">5 tau</text>
              <text class="annotation-label" x="66" y="204" text-anchor="start">départ à 0</text>
              <text class="annotation-label" x="66" y="50" text-anchor="start">départ à 14</text>
              <text class="axis-label" x="420" y="246" text-anchor="end">temps</text>
            </svg>
          `,
          notes: [
            'Les deux courbes sont $y(t) = 8 + (y_0 - 8)e^{-t/\\tau}$ avec $y_0 = 0$ et $y_0 = 14$. Seul le coefficient $(y_0 - 8)$ diffère : il vaut $-8$ pour l\'une, $+6$ pour l\'autre, ce qui explique que la première monte et que la seconde descende.',
            'Le terme $e^{-t/\\tau}$ tend vers $0$ dans les deux cas, donc les deux courbes tendent vers $8$. La valeur finale $y_\\infty$ est écrite dans l\'<strong>équation</strong> ; la condition initiale, elle, n\'apparaît que dans le coefficient devant l\'exponentielle.',
            'L\'écart entre les deux courbes vaut $|y_{0,1} - y_{0,2}|\\,e^{-t/\\tau}$ : il décroît exponentiellement, avec la même constante de temps. Au départ il vaut $14$ ; après un $\\tau$ il ne vaut plus que $14\\,e^{-1} \\approx 5{,}15$, soit exactement $36{,}8\\%$ de sa valeur initiale. Deux systèmes identiques oublient donc leur passé à la même vitesse qu\'ils rejoignent leur cible.'
          ],
          reading: 'Suis les deux courbes en même temps, de gauche à droite : elles se rapprochent l\'une de l\'autre sans jamais se croiser, et finissent par se confondre avec le pointillé. Retiens le partage des rôles : <strong>l\'équation dit où l\'on va, la condition initiale dit d\'où l\'on part</strong>. C\'est pourquoi une équation différentielle seule ne suffit pas à décrire un système — il en existe une infinité de solutions, une par point de départ — et pourquoi, à l\'inverse, connaître seulement l\'état de départ ne te dit rien de l\'état final.',
          caption: 'Deux solutions de $\\tau y\' + y = 8$, avec $y(0) = 0$ et $y(0) = 14$ : deux départs, une destination, et un écart divisé par $e$ à chaque $\\tau$.'
        }
      ],

      recap: [
        'L\'équation $\\tau y\' + y = y_\\infty$ a pour solution $y(t) = y_\\infty + (y_0 - y_\\infty)e^{-t/\\tau}$ : exponentielle décroissante vers $y_\\infty$.',
        'La constante de temps $\\tau$ fixe la rapidité du transitoire : à $\\tau$, on est à $63{,}2\\%$ ; à $5\\tau$, à $99{,}3\\%$.',
        'Dans un circuit RC : $\\tau = RC$. Les unités $\\Omega \\times F = s$ donnent bien un temps.',
        'Deux cas classiques : charge ($U_C(0) = 0 \\to E$) et décharge ($U_C(0) = E \\to 0$). La décharge suit $U_C(t) = E \\cdot e^{-t/\\tau}$.'
      ],
      piege: 'Le régime permanent est atteint théoriquement à l\'infini.<br/><br/>En pratique, on considère qu\'après $5\\tau$, le transitoire est terminé ($U_C \\approx 0{,}993E$).<br/><br/>Ne pas confondre $\\tau$ (constante de temps en secondes) et la "durée du transitoire" ($5\\tau$).'
    },

    quiz: [
      {
        q: 'Dans un circuit RC série avec $R = 10$ kΩ et $C = 100$ μF, la constante de temps est :',
        options: ['$\\tau = 1$ ms', '$\\tau = 0{,}1$ s', '$\\tau = 1$ s', '$\\tau = 10$ s'],
        answer: 2,
        correction: 'On applique la formule $\\tau = RC$ en convertissant les unités :<br/><br/>$\\tau = RC = 10 \\times 10^3 \\times 100 \\times 10^{-6} = 10^4 \\times 10^{-4} = 1$ s.'
      },
      {
        q: 'Lors de la charge d\'un condensateur via $RC$, à $t = \\tau$, la tension aux bornes du condensateur vaut environ :',
        options: ['$0{,}5 E$', '$0{,}632 E$', '$0{,}865 E$', '$E$'],
        answer: 1,
        correction: '$U_C(\\tau) = E(1 - e^{-1}) = E(1 - 0{,}368) = 0{,}632 E$.<br/><br/>La valeur $63{,}2\\%$ est fondamentale : elle permet d\'identifier $\\tau$ expérimentalement sur une courbe de charge.'
      },
      {
        q: 'Un élève dit : "La constante de temps $\\tau = RC$ est le temps nécessaire pour charger complètement le condensateur." Est-il correct ?',
        options: [
          'Non : $\\tau$ est le temps pour atteindre $63{,}2\\%$ de la tension finale. Le chargement "complet" est à $5\\tau$ (pratiquement) ou à l\'infini (théoriquement)',
          'Oui : à $t = \\tau$, $U_C = E$ exactement',
          'Oui : après $\\tau$ secondes, le condensateur est chargé à $100\\%$',
          'Non : $\\tau$ est le temps pour atteindre $50\\%$ de $E$ (demi-vie du circuit)'
        ],
        answer: 0,
        correction: 'À $t = \\tau$, $U_C(\\tau) = E(1-e^{-1}) \\approx 0{,}632\\,E$ soit $63{,}2\\%$ seulement.<br/><br/>La charge n\'atteint théoriquement $E$ qu\'à $t \\to +\\infty$. Par convention, on dit que le régime permanent est atteint à $5\\tau$ car $e^{-5} \\approx 0{,}007$, soit moins de $1\\%$ d\'écart.<br/><br/>L\'option D décrirait la demi-vie radioactive ($50\\%$), pas un circuit RC.'
      },
      {
        q: 'Lors de la DÉCHARGE d\'un condensateur initialement chargé à $E$, l\'expression de $U_C(t)$ est :',
        options: [
          '$U_C(t) = E \\cdot e^{-t/\\tau}$',
          '$U_C(t) = E(1 - e^{-t/\\tau})$',
          '$U_C(t) = E \\cdot e^{t/\\tau}$',
          '$U_C(t) = E(1 + e^{-t/\\tau})$'
        ],
        answer: 0,
        correction: 'En décharge, la valeur finale est $y_\\infty = 0$ et la valeur initiale est $y_0 = E$.<br/><br/>En substituant dans la solution générale : $U_C(t) = 0 + (E - 0)e^{-t/\\tau} = E \\cdot e^{-t/\\tau}$.<br/><br/>La tension décroît exponentiellement vers $0$.'
      },
      {
        q: 'On double la résistance $R$ dans un circuit RC. Quel est l\'effet sur $\\tau$ ?',
        options: [
          '$\\tau$ est divisé par $2$',
          '$\\tau$ est multiplié par $2$',
          '$\\tau$ reste inchangé',
          '$\\tau$ est multiplié par $4$'
        ],
        answer: 1,
        correction: '$\\tau = RC$. Si $R$ est doublée, $\\tau\' = 2R \\times C = 2\\tau$.<br/><br/>Le transitoire dure deux fois plus longtemps : le condensateur se charge plus lentement. C\'est logique car une résistance plus grande limite le courant de charge.'
      }
    ],

    /* BANQUE D'EXERCICES — élargie le 2026-09-14.

       AVANT : une seule tâche (la tension à $t = \tau$, c'est-à-dire
       $0{,}632 \times E$), habillée de quatre décors par pick(). Mesuré sur
       400 tirages : 4 moules d'énoncé, UNE tâche. Le livre imprimait douze
       fois la même multiplication, et — plus gênant — cette unique tâche se
       résolvait SANS jamais utiliser la valeur de $\tau$, pourtant calculée
       dans le corrigé : le nombre était décoratif.

       APRÈS : sept tâches réellement différentes, qui couvrent le chapitre —
       calcul de $\tau$, charge et décharge à un instant quelconque, temps
       pour atteindre un seuil, refroidissement de Newton (le phénomène du
       « Découvrir »), résolution d'une équation donnée sous forme canonique,
       et lecture inverse de $\tau$ à partir d'une mesure.

       Notation décimale : toujours par fr(), jamais par un .replace() écrit
       à la main — bug récurrent du corpus. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['tauRC', 'chargeInstant', 'decharge', 'seuil',
                            'newton', 'formeCanonique', 'tauMesure']);

        /* Affichage d'une constante de temps : un entier s'écrit « 2 » et
           non « 2{,}0 ». fr(2, 1) produirait la seconde forme, qu'aucun
           professeur n'écrirait au tableau. */
        const aff = (v) => (Number.isInteger(v) ? String(v) : fr(v, 1));

        /* TÂCHE 1 — calcul de $\tau = RC$, avec la conversion d'unités qui
           va avec. Les kilo-ohms et les micro-farads sont la vraie
           difficulté ici : $10^3 \times 10^{-6} = 10^{-3}$. */
        if (tache === 'tauRC') {
          const ctx = pick([
            { nom: 'un circuit de temporisation pour une alarme' },
            { nom: 'un filtre placé devant un capteur de température' },
            { nom: 'un circuit de protection contre les surtensions' }
          ]);
          const R = pick([1.2, 2.2, 3.3, 4.7, 6.8]);
          const C = pick([100, 220, 330, 470]);
          const res = parseFloat((R * 1e3 * C * 1e-6).toFixed(3));
          return {
            statement: `On réalise ${ctx.nom} avec $R = ${fr(R, 1)}$ kΩ et $C = ${C}$ μF. Calculer la constante de temps $\\tau$ en secondes. Arrondir à $0{,}001$.`,
            answer: res, tolerance: 0.002, unit: 's',
            hint: `$\\tau = RC$, mais seulement en <strong>ohms</strong> et en <strong>farads</strong>. Convertis d'abord : $1$ kΩ vaut $10^3$ Ω et $1$ μF vaut $10^{-6}$ F, donc le produit des deux préfixes vaut $10^{-3}$.`,
            solution: [
              `$R = ${fr(R, 1)} \\times 10^3$ Ω et $C = ${C} \\times 10^{-6}$ F`,
              `$\\tau = ${fr(R, 1)} \\times ${C} \\times 10^{3-6} = ${fr(parseFloat((R * C).toFixed(1)))} \\times 10^{-3}$ s`,
              `$\\tau \\approx ${fr(res)}$ s`
            ]
          };
        }

        /* TÂCHE 2 — tension de charge à un instant QUELCONQUE, pas
           seulement à $\tau$. C'est la tâche qui force enfin à utiliser la
           valeur de $\tau$ dans l'exponentielle. */
        if (tache === 'chargeInstant') {
          const ctx = pick([
            { nom: 'le condensateur de charge d\'un flash photographique' },
            { nom: 'le condensateur de lissage d\'une alimentation' },
            { nom: 'le condensateur de déclenchement d\'un minuteur' }
          ]);
          const E = rand(5, 15), tau = pick([0.5, 1, 2, 2.5]);
          const t = parseFloat((tau * pick([0.5, 1.5, 2, 3])).toFixed(2));
          const res = parseFloat((E * (1 - Math.exp(-t / tau))).toFixed(2));
          return {
            statement: `On charge ${ctx.nom} sous $E = ${E}$ V, avec une constante de temps $\\tau = ${aff(tau)}$ s. Le condensateur est initialement déchargé. Calculer $U_C$ à l'instant $t = ${fr(t)}$ s. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: 'V',
            hint: `$U_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$. Commence par calculer le rapport $\\dfrac{t}{\\tau}$ : c'est lui qui va dans l'exponentielle, pas $t$ tout seul.`,
            solution: [
              `$\\dfrac{t}{\\tau} = \\dfrac{${fr(t)}}{${aff(tau)}} = ${fr(parseFloat((t / tau).toFixed(2)))}$`,
              `$U_C = ${E}\\left(1 - e^{-${fr(parseFloat((t / tau).toFixed(2)))}}\\right) = ${E} \\times ${fr(parseFloat((1 - Math.exp(-t / tau)).toFixed(4)))}$`,
              `$U_C \\approx ${fr(res)}$ V`
            ]
          };
        }

        /* TÂCHE 3 — DÉCHARGE. Le chapitre l'énonce dans son récapitulatif
           et son quiz, mais aucun exercice ne la faisait travailler. La
           différence de forme ($e^{-t/\tau}$ seul, sans le « 1 moins ») est
           exactement ce qui se confond. */
        if (tache === 'decharge') {
          const ctx = pick([
            { nom: 'un condensateur de sauvegarde mémoire' },
            { nom: 'le condensateur de tête d\'un flash' },
            { nom: 'un condensateur de filtrage que l\'on isole' }
          ]);
          const U0 = rand(6, 20), tau = pick([0.5, 1, 2, 4]);
          const t = parseFloat((tau * pick([1, 1.5, 2, 3])).toFixed(2));
          const res = parseFloat((U0 * Math.exp(-t / tau)).toFixed(2));
          return {
            statement: `On isole ${ctx.nom}, chargé à $${U0}$ V, et il se décharge dans une résistance. Sa constante de temps vaut $\\tau = ${aff(tau)}$ s. Quelle tension reste-t-il après $${fr(t)}$ s ? Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: 'V',
            hint: `En décharge, la valeur finale est $0$ : la solution générale $y_\\infty + (y_0 - y_\\infty)e^{-t/\\tau}$ se réduit à $U_C(t) = U_0\\,e^{-t/\\tau}$. Il n'y a pas de « $1$ moins » ici.`,
            solution: [
              `Valeur finale nulle, donc $U_C(t) = ${U0}\\,e^{-t/\\tau}$`,
              `$\\dfrac{t}{\\tau} = \\dfrac{${fr(t)}}{${aff(tau)}} = ${fr(parseFloat((t / tau).toFixed(2)))}$, et $e^{-${fr(parseFloat((t / tau).toFixed(2)))}} \\approx ${fr(parseFloat(Math.exp(-t / tau).toFixed(4)))}$`,
              `$U_C \\approx ${fr(res)}$ V`
            ]
          };
        }

        /* TÂCHE 4 — temps pour atteindre un SEUIL. Le chemin inverse, qui
           oblige à passer par le logarithme. C'est la tâche la plus proche
           d'une question d'ingénierie réelle (dimensionner une
           temporisation). */
        if (tache === 'seuil') {
          const ctx = pick([
            { nom: 'une temporisation d\'éclairage' },
            { nom: 'un seuil de déclenchement de relais' },
            { nom: 'une alarme de fin de charge' }
          ]);
          const tau = pick([0.5, 1, 2, 3]);
          const pct = pick([50, 75, 90, 95]);
          const res = parseFloat((-tau * Math.log(1 - pct / 100)).toFixed(3));
          return {
            statement: `On dimensionne ${ctx.nom} sur un circuit de constante de temps $\\tau = ${aff(tau)}$ s. Au bout de combien de secondes la tension atteint-elle $${pct}\\%$ de sa valeur finale ? Arrondir à $0{,}001$.`,
            answer: res, tolerance: 0.005, unit: 's',
            hint: `On cherche $t$ tel que $1 - e^{-t/\\tau} = ${fr(pct / 100, 2)}$. Isole l'exponentielle, puis prends le logarithme : c'est lui qui fait descendre $t$ de l'exposant.`,
            solution: [
              `$1 - e^{-t/\\tau} = ${fr(pct / 100, 2)}$, donc $e^{-t/\\tau} = ${fr(parseFloat((1 - pct / 100).toFixed(2)))}$`,
              `$-\\dfrac{t}{\\tau} = \\ln(${fr(parseFloat((1 - pct / 100).toFixed(2)))}) \\approx ${fr(parseFloat(Math.log(1 - pct / 100).toFixed(4)))}$`,
              `$t = ${aff(tau)} \\times ${fr(parseFloat((-Math.log(1 - pct / 100)).toFixed(4)))} \\approx ${fr(res)}$ s`
            ]
          };
        }

        /* TÂCHE 5 — refroidissement de Newton. Nouvelle, et c'est le
           phénomène même du « Découvrir » : la tasse de café. La valeur
           finale n'y est PAS nulle, ce qui oblige à employer la forme
           complète $y_\infty + (y_0 - y_\infty)e^{-t/\tau}$. */
        if (tache === 'newton') {
          const ctx = pick([
            { nom: 'une tasse de café' },
            { nom: 'un lingot métallique sorti du four' },
            { nom: 'un plat que l\'on laisse tiédir' }
          ]);
          const T0 = pick([70, 80, 90]), Tamb = pick([18, 20, 22]);
          const tau = pick([10, 15, 20]);
          const t = tau * pick([1, 2, 3]);
          const res = parseFloat((Tamb + (T0 - Tamb) * Math.exp(-t / tau)).toFixed(2));
          return {
            statement: `On laisse refroidir ${ctx.nom}, initialement à $${T0}$ °C, dans une pièce dont la température ambiante est de $${Tamb}$ °C. Le refroidissement a pour constante de temps $\\tau = ${tau}$ min. Quelle est la température après $t = ${t}$ min ? Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: '°C',
            hint: `Ici la valeur finale n'est pas $0$ mais $${Tamb}$ °C. Emploie la forme complète $T(t) = T_{amb} + (T_0 - T_{amb})e^{-t/\\tau}$ : c'est l'<strong>écart</strong> à la pièce qui décroît exponentiellement, pas la température elle-même.`,
            solution: [
              `Écart de départ : $${T0} - ${Tamb} = ${T0 - Tamb}$ °C`,
              `Après $${t}$ min, cet écart vaut $${T0 - Tamb} \\times e^{-${t / tau}} \\approx ${fr(parseFloat(((T0 - Tamb) * Math.exp(-t / tau)).toFixed(2)))}$ °C`,
              `$T = ${Tamb} + ${fr(parseFloat(((T0 - Tamb) * Math.exp(-t / tau)).toFixed(2)))} \\approx ${fr(res)}$ °C`
            ]
          };
        }

        /* TÂCHE 6 — forme canonique abstraite, sans contexte physique.
           Nouvelle : elle vérifie que l'élève sait lire $\tau$ et
           $y_\infty$ directement dans l'équation, sans s'appuyer sur un
           circuit qu'il aurait reconnu. */
        if (tache === 'formeCanonique') {
          const ctx = pick([
            { intro: 'Un modèle de production s\'écrit' },
            { intro: 'Un modèle de diffusion s\'écrit' },
            { intro: 'Un modèle de régulation s\'écrit' }
          ]);
          const yinf = rand(4, 20), y0 = rand(0, 3), tau = rand(2, 6);
          const t = tau * pick([1, 2, 3]);
          const res = parseFloat((yinf + (y0 - yinf) * Math.exp(-t / tau)).toFixed(2));
          return {
            statement: `${ctx.intro} $\\tau y' + y = ${yinf}$, avec $y(0) = ${y0}$ et $\\tau = ${tau}$. Calculer $y(${t})$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: '',
            hint: `Lis les deux paramètres directement dans l'équation : la valeur finale $y_\\infty$ est le second membre, ici $${yinf}$, et $\\tau$ est donné. Applique ensuite $y(t) = y_\\infty + (y_0 - y_\\infty)e^{-t/\\tau}$.`,
            solution: [
              `$y_\\infty = ${yinf}$ et $y_0 = ${y0}$, donc $y(t) = ${yinf} + (${y0} - ${yinf})e^{-t/${tau}}$`,
              `$\\dfrac{${t}}{${tau}} = ${t / tau}$, et $e^{-${t / tau}} \\approx ${fr(parseFloat(Math.exp(-t / tau).toFixed(4)))}$`,
              `$y(${t}) = ${yinf} - ${yinf - y0} \\times ${fr(parseFloat(Math.exp(-t / tau).toFixed(4)))} \\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 7 — retrouver $\tau$ à partir d'une MESURE. Nouvelle, et
           c'est la démarche expérimentale : on ne connaît ni $R$ ni $C$, on
           relève une tension à un instant et on remonte à $\tau$. Adossée
           au premier schéma secondaire du cours. */
        const ctx = pick([
          { nom: 'sur un oscilloscope' },
          { nom: 'sur un enregistreur de laboratoire' },
          { nom: 'sur un relevé de banc d\'essai' }
        ]);
        const E = pick([5, 9, 10, 12]);
        const tauVrai = pick([0.4, 0.8, 1.5, 2.5]);
        const t = parseFloat((tauVrai * pick([1.5, 2, 3])).toFixed(2));
        const U = parseFloat((E * (1 - Math.exp(-t / tauVrai))).toFixed(2));
        // On remonte : tau = -t / ln(1 - U/E)
        const res = parseFloat((-t / Math.log(1 - U / E)).toFixed(3));
        return {
          statement: `On relève ${ctx.nom} la charge d'un condensateur : la tension finale vaut $${E}$ V, et à l'instant $t = ${fr(t)}$ s la tension mesurée est de $${fr(U)}$ V. Le condensateur partait de $0$ V. En déduire la constante de temps $\\tau$ du circuit, en secondes. Arrondir à $0{,}001$.`,
          answer: res, tolerance: 0.01, unit: 's',
          hint: `Pars de $U = E\\left(1 - e^{-t/\\tau}\\right)$ et isole l'exponentielle : $e^{-t/\\tau} = 1 - \\dfrac{U}{E}$. Prends ensuite le logarithme, puis isole $\\tau$ — attention, il est au dénominateur.`,
          solution: [
            `$\\dfrac{U}{E} = \\dfrac{${fr(U)}}{${E}} \\approx ${fr(parseFloat((U / E).toFixed(4)))}$, donc $e^{-t/\\tau} \\approx ${fr(parseFloat((1 - U / E).toFixed(4)))}$`,
            `$-\\dfrac{t}{\\tau} = \\ln(${fr(parseFloat((1 - U / E).toFixed(4)))}) \\approx ${fr(parseFloat(Math.log(1 - U / E).toFixed(4)))}$`,
            `$\\tau = \\dfrac{${fr(t)}}{${fr(parseFloat((-Math.log(1 - U / E)).toFixed(4)))}} \\approx ${fr(res)}$ s`
          ]
        };
      }
    },

    probleme: {
      context: 'Un condensateur de capacité $C = 470$ μF est chargé à travers une résistance $R = 2{,}2$ kΩ par un générateur de f.e.m. $E = 9$ V. Le condensateur est initialement déchargé ($U_C(0) = 0$).',
      schema: null,
      tasks: [
        'Calculer la constante de temps $\\tau = RC$.',
        'Exprimer la tension $U_C(t)$ au cours du temps.',
        'Quelle est la tension aux bornes du condensateur à $t = \\tau$ ? Arrondir à 3 chiffres significatifs.'
      ],
      solutions: [
        '$\\tau = RC = 2{,}2 \\times 10^3 \\times 470 \\times 10^{-6} = 2200 \\times 470 \\times 10^{-6} = 1{,}034$ s $\\approx 1{,}03$ s.',
        '$U_C(t) = E\\left(1 - e^{-t/\\tau}\\right) = 9\\left(1 - e^{-t/1{,}03}\\right)$ V.',
        '$U_C(\\tau) = 9 \\times (1 - e^{-1}) = 9 \\times 0{,}6321 = 5{,}69$ V $\\approx 5{,}69$ V.'
      ],
      finalAnswer: '$U_C(\\tau) \\approx 5{,}69$ V (soit $63{,}2\\%$ de $E = 9$ V)'
    },

    evaluation: {
      title: 'Évaluation — Équations différentielles du 1er ordre',
      duration: '35 min',
      questions: [
        {
          /* Q1 RÉÉCRITE le 2026-09-14. Elle demandait de calculer
             $\tau = RC$ : une multiplication, que la question 2 reprend
             maintenant à son compte.

             La nouvelle question part d'une SITUATION décrite en mots — un
             ballon qui se remplit d'autant plus lentement qu'il est plein —
             et demande de choisir l'équation qui la traduit. Aucune formule
             n'est rappelée. Traduire une situation concrète en écriture
             mathématique, c'est « modéliser ».

             Les distracteurs sont les trois erreurs de modélisation les
             plus fréquentes : confondre la grandeur et son écart à la
             cible, oublier le signe, et écrire une proportionnalité simple
             au lieu d'une équation différentielle. */
          statement: 'Un ballon se gonfle jusqu\'à un volume maximal de $5$ L. Plus il est proche de ce volume, plus il se remplit lentement : la vitesse de remplissage est proportionnelle au volume qu\'il <strong>reste</strong> à remplir. On note $V(t)$ le volume au temps $t$. Quelle équation traduit cette situation ?',
          type: 'multiple-choice',
          options: [
            '$V\'(t) = k\\big(5 - V(t)\\big)$, avec $k > 0$',
            '$V\'(t) = kV(t)$, avec $k > 0$',
            '$V(t) = k\\big(5 - V(t)\\big)$, avec $k > 0$',
            '$V\'(t) = -k \\times 5$, avec $k > 0$'
          ],
          answer: 0,
          points: 2,
          correction: 'Traduisons l\'énoncé morceau par morceau.<br/><br/>« La vitesse de remplissage » : c\'est la dérivée du volume, donc $V\'(t)$.<br/><br/>« Le volume qu\'il reste à remplir » : c\'est la différence entre le maximum et le volume actuel, donc $5 - V(t)$.<br/><br/>« Est proportionnelle à » : les deux quantités sont liées par un coefficient constant $k$.<br/><br/>D\'où $V\'(t) = k\\big(5 - V(t)\\big)$.<br/><br/>Vérifions que le modèle se comporte comme décrit. Au départ, $V = 0$ et $V\' = 5k$ : le remplissage est rapide. Quand $V$ approche $5$, la parenthèse tend vers $0$ et $V\'$ aussi : le remplissage ralentit. C\'est bien ce que dit l\'énoncé.<br/><br/>L\'option B décrirait un ballon qui se remplit de plus en plus <strong>vite</strong> à mesure qu\'il se remplit — une croissance exponentielle, sans limite : c\'est le contraire.<br/><br/>L\'option C a oublié le prime : ce n\'est plus une équation différentielle, c\'est une équation ordinaire, dont la solution est un nombre fixe et non une fonction du temps.<br/><br/>L\'option D donne une vitesse constante : le ballon se remplirait linéairement, puis dépasserait les $5$ L sans rien remarquer.'
        },
        {
          /* Q2 RÉÉCRITE le 2026-09-14. Elle demandait de reconnaître la
             valeur $63{,}2\%$ parmi quatre pourcentages : une question de
             mémoire, pas de calcul.

             La nouvelle question reprend le calcul de $\tau = RC$ que
             portait l'ancienne question 1, avec la conversion d'unités qui
             en fait la difficulté réelle. C'est « calculer ». */
          statement: 'Un circuit RC comporte $R = 4{,}7$ kΩ et $C = 220$ μF. Calculer sa constante de temps $\\tau$ en secondes. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 1.03,
          tolerance: 0.02,
          unit: 's',
          points: 2,
          correction: 'La formule $\\tau = RC$ ne vaut qu\'en unités de base : des <strong>ohms</strong> et des <strong>farads</strong>. Il faut donc convertir avant de multiplier.<br/><br/>$R = 4{,}7$ kΩ $= 4{,}7 \\times 10^3$ Ω, et $C = 220$ μF $= 220 \\times 10^{-6}$ F.<br/><br/>$\\tau = 4{,}7 \\times 10^3 \\times 220 \\times 10^{-6} = 4{,}7 \\times 220 \\times 10^{-3} = 1034 \\times 10^{-3}$.<br/><br/>Donc $\\tau \\approx 1{,}03$ s.<br/><br/>Astuce de calcul mental : le produit des deux préfixes, kilo et micro, vaut $10^{3} \\times 10^{-6} = 10^{-3}$. Multiplier des kΩ par des μF donne donc directement des <strong>millisecondes</strong>.'
        },
        {
          /* Q3 RÉÉCRITE le 2026-09-14. Elle demandait $U_C(2)$ pour
             $E = 12$ V et $\tau = 2$ s : un calcul, et le troisième de
             l'évaluation.

             La nouvelle question ne demande AUCUN nombre : on donne deux
             circuits de constantes de temps différentes et l'on demande de
             conclure sur leur comportement relatif. L'élève passe d'une
             propriété (la forme de la solution) à une comparaison, sans
             calculer. C'est « raisonner ». */
          statement: 'Deux circuits RC sont alimentés par la <strong>même</strong> tension $E$, mais le premier a une constante de temps $\\tau_1 = 0{,}5$ s et le second $\\tau_2 = 2$ s. <strong>Sans calculer aucune tension</strong>, que peut-on affirmer ?',
          type: 'multiple-choice',
          options: [
            'Le premier se charge quatre fois plus vite, mais les deux atteignent la même tension finale $E$',
            'Le premier atteint une tension finale quatre fois plus élevée que le second',
            'Le second se charge plus vite, car une constante de temps plus grande signifie une charge plus rapide',
            'On ne peut rien comparer sans connaître $R$ et $C$ pour chaque circuit'
          ],
          answer: 0,
          points: 2,
          correction: 'Les deux solutions s\'écrivent $U_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$. La lettre $\\tau$ n\'apparaît qu\'à <strong>un seul endroit</strong> : dans l\'exposant, au dénominateur.<br/><br/>Conséquence sur la valeur finale : quand $t$ devient grand, $e^{-t/\\tau}$ tend vers $0$ quelle que soit la valeur de $\\tau$, et $U_C$ tend vers $E$. La constante de temps ne change donc rien à la destination — seul $E$ la fixe. C\'est ce qui élimine l\'option B.<br/><br/>Conséquence sur la rapidité : pour atteindre un même pourcentage de $E$, il faut le même rapport $\\dfrac{t}{\\tau}$. Un $\\tau$ quatre fois plus petit demande donc un temps quatre fois plus court. Le premier circuit est bien quatre fois plus rapide — ce qui élimine l\'option C, qui inverse le sens.<br/><br/>Quant à l\'option D, elle est fausse parce que $R$ et $C$ n\'interviennent que par leur <strong>produit</strong>. Connaître $\\tau$ suffit ; savoir de quels $R$ et $C$ il provient n\'apporte rien.<br/><br/>À retenir : $\\tau$ règle la <strong>vitesse</strong>, pas la <strong>destination</strong>.'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-14. Elle demandait après combien de
             constantes de temps le régime permanent est atteint : une
             convention à réciter.

             La nouvelle question part d'un relevé expérimental décrit en
             mots et demande de déterminer un paramètre du modèle. L'élève
             doit décider quelle grandeur du texte joue quel rôle dans
             l'équation, puis en tirer le nombre demandé. C'est
             « modéliser ». */
          statement: 'Un technicien mesure le refroidissement d\'un four. La température de la pièce est de $20$ °C. Le four part de $220$ °C, et après $30$ minutes il est descendu à $120$ °C. Sachant que l\'écart à la température de la pièce décroît exponentiellement, quelle sera la température du four après $60$ minutes ?',
          type: 'numeric',
          answer: 70,
          tolerance: 1,
          unit: '°C',
          points: 2,
          correction: 'Le point à décider, et c\'est tout l\'enjeu, est <strong>quelle grandeur décroît exponentiellement</strong>. Ce n\'est pas la température — sinon elle tendrait vers $0$ °C — mais l\'<strong>écart</strong> à la pièce.<br/><br/>Écart au départ : $220 - 20 = 200$ °C.<br/><br/>Écart après $30$ min : $120 - 20 = 100$ °C. Il a donc été divisé par $2$ en $30$ minutes.<br/><br/>Un écart qui décroît exponentiellement est divisé par le <strong>même facteur</strong> sur des durées égales — exactement comme une demi-vie. Les $30$ minutes suivantes le divisent donc encore par $2$ : il passe de $100$ à $50$ °C.<br/><br/>Température après $60$ min : $20 + 50 = 70$ °C.<br/><br/>L\'erreur à éviter est de raisonner sur la température brute : « elle a perdu $100$ °C en $30$ min, donc elle en perdra encore $100$ », ce qui donnerait $20$ °C — c\'est-à-dire exactement la température de la pièce, atteinte en une heure pile. Un four ne se refroidit pas ainsi : plus il approche de la pièce, plus il ralentit.'
        },
        {
          statement: 'La solution de $\\tau \\dfrac{dy}{dt} + y = 5$ avec $y(0) = 0$ et $\\tau = 3$ est $y(t) = 5(1 - e^{-t/3})$. Calculer $y(3)$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 3.16,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: 'On substitue $t = 3$ dans la solution : $y(3) = 5(1 - e^{-3/3}) = 5(1 - e^{-1})$.<br/><br/>$y(3) = 5 \\times 0{,}6321 = 3{,}16$. On retrouve le fameux $63{,}2\\%$ de la valeur finale.'
        }
      ]
    }
  });
