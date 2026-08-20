/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-quantique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-quantique',
    level: 2, subject: 'physique',
    icon: '⚛️',
    title: 'Physique quantique : dualité et niveaux d\'énergie',
    subtitle: 'Dualité onde-particule, photon, longueur d\'onde de de Broglie, quantification de l\'énergie, transitions atomiques',
    keywords: ['Photon', 'Dualité onde-particule', 'Quantification', 'Niveaux d\'énergie', 'Transition atomique'],
    physics: 'La physique quantique explique le fonctionnement des lasers et des diodes électroluminescentes (transitions entre niveaux d\'énergie), permet l\'analyse spectrale des étoiles par leurs raies d\'émission et d\'absorption, et fonde le principe du microscope électronique, qui exploite la très faible longueur d\'onde de de Broglie des électrons accélérés.',

    cours: {
      intro: 'Deux découvertes du début du XX<sup>e</sup> siècle ont montré que la lumière ne peut être décrite ni comme une onde pure ni comme un flux de particules pures : elle possède les deux aspects à la fois. C\'est la <strong>dualité onde-particule</strong>.<br/><br/>Sous son aspect corpusculaire, la lumière est un flux de <strong>photons</strong>, des grains d\'énergie transportant chacun $E=hf=\\dfrac{hc}{\\lambda}$, où $h\\approx6{,}63\\times10^{-34}$ J·s est la <strong>constante de Planck</strong>. Réciproquement, Louis de Broglie a montré que toute particule matérielle de quantité de mouvement $p$ est associée à une onde de longueur d\'onde $\\lambda=\\dfrac{h}{p}$.<br/><br/>Cette dualité s\'accompagne d\'une autre découverte majeure : dans un atome, l\'énergie des électrons ne peut prendre que des valeurs bien précises, <strong>discrètes</strong> — la <strong>quantification de l\'énergie</strong>. Le passage d\'un niveau à l\'autre se fait par absorption ou émission d\'un photon unique, d\'énergie exactement égale à l\'écart entre les deux niveaux.',
      definitions: [
        { term: 'Photon', def: 'Grain de lumière, sans masse, transportant une énergie $E=hf=\\dfrac{hc}{\\lambda}$, où $h\\approx6{,}63\\times10^{-34}$ J·s est la constante de Planck, $f$ la fréquence et $\\lambda$ la longueur d\'onde de la radiation associée.' },
        { term: 'Dualité onde-particule', def: 'Propriété fondamentale de la lumière (et, selon de Broglie, de toute particule matérielle) de se comporter tantôt comme une onde (diffraction, interférences), tantôt comme un flux de particules (photons, effet photoélectrique).' },
        { term: 'Longueur d\'onde de de Broglie', def: 'Longueur d\'onde $\\lambda=\\dfrac{h}{p}$ associée à toute particule matérielle de quantité de mouvement $p=mv$. Elle n\'est significative que pour des particules très légères (électrons, atomes) : la masse des objets macroscopiques la rend totalement indétectable.' },
        { term: 'Niveaux d\'énergie / quantification', def: 'Dans un atome, l\'énergie des électrons ne peut prendre que des valeurs discrètes $E_n$ (niveaux d\'énergie). Une transition entre deux niveaux $E_i$ et $E_f$ s\'accompagne de l\'absorption ou de l\'émission d\'un photon unique d\'énergie $\\Delta E=|E_f-E_i|=hf$.' }
      ],
      method: {
        title: 'Résoudre un problème de physique quantique en 3 étapes',
        steps: [
          'Pour un problème de <strong>photon</strong> : identifier la grandeur donnée (fréquence $f$, longueur d\'onde $\\lambda$, ou énergie $E$) et utiliser $E=hf=\\dfrac{hc}{\\lambda}$ pour passer de l\'une à l\'autre.',
          'Pour une <strong>transition atomique</strong> : repérer les niveaux d\'énergie $E_i$ (initial) et $E_f$ (final) sur le diagramme, calculer $\\Delta E=|E_f-E_i|$, puis en déduire la fréquence ou la longueur d\'onde du photon échangé via $\\Delta E=hf=\\dfrac{hc}{\\lambda}$.',
          '<strong>Déterminer le sens</strong> de la transition : absorption si l\'atome monte vers un niveau supérieur ($E_f &gt; E_i$, un photon est absorbé), émission s\'il descend vers un niveau inférieur ($E_f &lt; E_i$, un photon est émis).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Quantification de l\'énergie',
        title: 'Niveaux d\'énergie et transitions atomiques (atome d\'hydrogène)',
        description: 'Dans l\'atome d\'hydrogène, l\'énergie des niveaux $E_n=-\\dfrac{13{,}6}{n^2}$ eV ne peut prendre que des valeurs discrètes. Une transition entre deux niveaux s\'accompagne de l\'absorption ou de l\'émission d\'un photon unique.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="quantique-title quantique-desc">
            <title id="quantique-title">Diagramme des niveaux d'energie de l'atome d'hydrogene</title>
            <desc id="quantique-desc">Cinq lignes horizontales, empilees du bas vers le haut et de plus en plus rapprochees, representent les niveaux d'energie discrets de l'atome d'hydrogene, du niveau fondamental n egal 1 tout en bas jusqu'a la limite d'ionisation n tend vers l'infini tout en haut. Une fleche verticale orientee vers le haut relie le niveau n egal 1 au niveau n egal 3, representant l'absorption d'un photon ultraviolet. Une autre fleche verticale orientee vers le bas relie le niveau n egal 4 au niveau n egal 2, representant l'emission d'un photon visible. L'echelle verticale n'est pas lineaire : elle est resserree pour rester lisible malgre le grand ecart entre le niveau fondamental et les niveaux excites.</desc>

            <defs>
              <marker id="arrow-tle-quant" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- niveaux d'energie -->
            <line class="frame-line" x1="180" y1="50" x2="380" y2="50"></line>
            <line class="frame-line" x1="180" y1="90" x2="380" y2="90"></line>
            <line class="frame-line" x1="180" y1="120" x2="380" y2="120"></line>
            <line class="frame-line" x1="180" y1="170" x2="380" y2="170"></line>
            <line class="frame-line" x1="180" y1="250" x2="380" y2="250"></line>

            <text class="tick-label" x="170" y="54" text-anchor="end">n→∞ (E = 0 eV)</text>
            <text class="tick-label" x="170" y="94" text-anchor="end">n=4 (E₄ = −0,85 eV)</text>
            <text class="tick-label" x="170" y="124" text-anchor="end">n=3 (E₃ = −1,51 eV)</text>
            <text class="tick-label" x="170" y="174" text-anchor="end">n=2 (E₂ = −3,4 eV)</text>
            <text class="tick-label" x="170" y="254" text-anchor="end">n=1 (E₁ = −13,6 eV)</text>

            <!-- absorption : n=1 vers n=3 -->
            <line class="curve-main" x1="280" y1="250" x2="280" y2="122" marker-end="url(#arrow-tle-quant)"></line>
            <text class="annotation-label" x="270" y="200" text-anchor="end">Absorption</text>
            <text class="tick-label" x="270" y="215" text-anchor="end">λ≈103 nm</text>

            <!-- emission : n=4 vers n=2 -->
            <line class="curve-main" x1="335" y1="90" x2="335" y2="168" marker-end="url(#arrow-tle-quant)"></line>
            <text class="annotation-label" x="345" y="115" text-anchor="start">Émission</text>
            <text class="tick-label" x="345" y="130" text-anchor="start">λ≈487,5 nm</text>
          </svg>
        `,
        notes: [
          'Les niveaux d\'énergie sont <strong>négatifs</strong> et se rapprochent de $0$ à mesure que $n$ augmente : $n\\to\\infty$ correspond à l\'électron libéré de l\'atome (ionisation).',
          'L\'échelle verticale du diagramme n\'est pas linéaire : elle est resserrée pour rester lisible, malgré le grand écart entre le niveau fondamental et les niveaux excités.',
          'La flèche vers le <strong>haut</strong> (absorption) correspond à un photon <strong>reçu</strong> par l\'atome ; la flèche vers le <strong>bas</strong> (émission) correspond à un photon <strong>libéré</strong> par l\'atome.'
        ],
        reading: 'Repère les cinq niveaux du bas ($n=1$) vers le haut ($n\\to\\infty$), puis suis chaque flèche : la flèche montante illustre une absorption, la flèche descendante une émission, chacune associée à un photon d\'énergie et de longueur d\'onde bien précises.',
        caption: 'Diagramme des niveaux d\'énergie de l\'atome d\'hydrogène : une transition entre deux niveaux s\'accompagne toujours de l\'absorption ou de l\'émission d\'un photon unique, d\'énergie égale à l\'écart entre les niveaux.'
      },
      diagrams: [
        {
          theme: 'physique',
          kicker: 'Relation E = hc/λ',
          title: 'L\'énergie d\'un photon est inversement proportionnelle à sa longueur d\'onde',
          description: 'Plus la longueur d\'onde $\\lambda$ est petite, plus l\'énergie $E=hc/\\lambda$ du photon est grande : la relation est <strong>inverse</strong>, jamais directement proportionnelle.',
          svg: `
            <svg viewBox="0 0 560 300" role="img" aria-labelledby="quantique2-title quantique2-desc">
              <title id="quantique2-title">Energie d'un photon en fonction de la longueur d'onde</title>
              <desc id="quantique2-desc">Un graphique represente l'energie d'un photon en electron-volts en ordonnee, en fonction de sa longueur d'onde en nanometres en abscisse. La courbe decroit de facon continue et convexe : tres pentue pour les petites longueurs d'onde, elle s'aplatit progressivement, sans jamais redevenir croissante. Trois points sont places sur la courbe. Le premier, a 420 nanometres, a une energie d'environ 2,96 electron-volts, rattache aux deux axes par des lignes pointillees. Le second, a 487,5 nanometres, correspond exactement a l'exemple resolu juste au-dessus dans le cours. Le troisieme, a 700 nanometres, a une energie bien plus faible, d'environ 1,78 electron-volt, egalement rattache aux axes par des lignes pointillees. L'ensemble montre qu'une longueur d'onde plus petite correspond toujours a une energie plus grande, jamais l'inverse.</desc>

              <defs>
                <marker id="arrow-tle-quant2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- axes -->
              <line class="frame-line" x1="60" y1="250" x2="520" y2="250" marker-end="url(#arrow-tle-quant2)"></line>
              <line class="frame-line" x1="60" y1="250" x2="60" y2="40" marker-end="url(#arrow-tle-quant2)"></line>
              <text class="tick-label" x="60" y="30" text-anchor="middle">E</text>
              <text class="tick-label" x="518" y="266" text-anchor="end">λ</text>

              <!-- guides du point a 420 nm -->
              <line class="guide-line" x1="108" y1="72" x2="108" y2="250"></line>
              <line class="guide-line" x1="60" y1="72" x2="108" y2="72"></line>

              <!-- guides du point a 700 nm -->
              <line class="guide-line" x1="441" y1="143" x2="441" y2="250"></line>
              <line class="guide-line" x1="60" y1="143" x2="441" y2="143"></line>

              <!-- courbe E = hc/lambda (points calcules) -->
              <path class="curve-main" fill="none" d="M60,54 L108,72 L143,84 L188,97 L203,101 L262,114 L322,126 L381,135 L441,143 L500,151"></path>

              <!-- points -->
              <circle class="plot-point" cx="108" cy="72" r="4"></circle>
              <circle class="plot-point-alt" cx="188" cy="97" r="4"></circle>
              <circle class="plot-point" cx="441" cy="143" r="4"></circle>

              <!-- labels du point a 420 nm -->
              <text class="tick-label" x="108" y="264" text-anchor="middle">λ≈420 nm</text>
              <text class="tick-label" x="60" y="76" text-anchor="end">E≈2,96 eV</text>

              <!-- label du point exemple (487,5 nm) -->
              <text class="annotation-label" x="188" y="76" text-anchor="middle">487,5 nm (exemple)</text>

              <!-- labels du point a 700 nm -->
              <text class="tick-label" x="441" y="264" text-anchor="middle">λ≈700 nm</text>
              <text class="tick-label" x="60" y="147" text-anchor="end">E≈1,78 eV</text>
            </svg>
          `,
          notes: [
            'La courbe est <strong>décroissante</strong> sur toute sa longueur : quand $\\lambda$ augmente, $E$ diminue — jamais l\'inverse. C\'est le piège le plus fréquent de ce chapitre : $E$ n\'est <strong>pas</strong> proportionnelle à $\\lambda$, elle lui est <strong>inversement</strong> proportionnelle.',
            'Le point à $487{,}5$ nm est exactement celui calculé dans l\'exemple résolu ci-dessus (transition $n=4\\to2$, $\\Delta E=2{,}55$ eV) : il permet de vérifier au coup d\'œil la cohérence entre le calcul et le graphique.',
            'Entre les deux points repères, $\\lambda$ passe de $420$ nm à $700$ nm (elle augmente), tandis que $E$ passe d\'environ $2{,}96$ eV à environ $1{,}78$ eV (elle diminue) : la longueur d\'onde la plus <strong>petite</strong> est bien celle du photon le plus <strong>énergétique</strong>.'
          ],
          reading: 'Suis la courbe de la gauche (petites longueurs d\'onde, énergie élevée) vers la droite (grandes longueurs d\'onde, énergie faible), puis compare les deux points repères : à $\\lambda=420$ nm correspond une énergie plus grande qu\'à $\\lambda=700$ nm.',
          caption: 'Énergie d\'un photon $E=hc/\\lambda$ en fonction de sa longueur d\'onde : une relation inversement proportionnelle, jamais directement proportionnelle.'
        }
      ],
      example: {
        statement: 'Un atome d\'hydrogène, initialement dans l\'état excité $n=4$ ($E_4=-0{,}85$ eV), effectue une transition vers le niveau $n=2$ ($E_2=-3{,}4$ eV), avec émission d\'un photon. On donne $h\\approx6{,}63\\times10^{-34}$ J·s, $c\\approx3{,}00\\times10^8$ m/s et $1$ eV $=1{,}60\\times10^{-19}$ J.<br/><br/>Calculer l\'énergie du photon émis, puis sa longueur d\'onde.',
        steps: [
          'Énergie du photon : $\\Delta E=|E_2-E_4|=|-3{,}4-(-0{,}85)|=2{,}55$ eV.',
          'Conversion en joules : $\\Delta E=2{,}55\\times1{,}60\\times10^{-19}\\approx4{,}08\\times10^{-19}$ J.',
          'Longueur d\'onde associée : $\\lambda=\\dfrac{hc}{\\Delta E}=\\dfrac{6{,}63\\times10^{-34}\\times3{,}00\\times10^8}{4{,}08\\times10^{-19}}\\approx4{,}875\\times10^{-7}$ m.'
        ],
        answer: '$\\Delta E=2{,}55$ eV et $\\lambda\\approx487{,}5$ nm. Cette longueur d\'onde correspond à une raie bleu-vert visible : c\'est la célèbre raie $H_\\beta$ du spectre de l\'hydrogène, observée aussi bien en laboratoire que dans la lumière des étoiles.'
      },
      formulas: [
        'Énergie d\'un photon : $E=hf=\\dfrac{hc}{\\lambda}$',
        'Constante de Planck : $h\\approx6{,}63\\times10^{-34}$ J·s',
        'Longueur d\'onde de de Broglie : $\\lambda=\\dfrac{h}{p}$, avec $p=mv$',
        'Énergie échangée lors d\'une transition : $\\Delta E=|E_f-E_i|=hf=\\dfrac{hc}{\\lambda}$',
        'Niveaux de l\'atome d\'hydrogène : $E_n=-\\dfrac{13{,}6}{n^2}$ eV'
      ],
      recap: [
        'La lumière (et toute particule matérielle) possède une <strong>double nature</strong> : ondulatoire (diffraction, interférences) et corpusculaire (photons, quantité de mouvement).',
        'L\'énergie d\'un photon est <strong>proportionnelle à sa fréquence</strong> ($E=hf$) et donc <strong>inversement proportionnelle à sa longueur d\'onde</strong> ($E=hc/\\lambda$) : plus $\\lambda$ est petite, plus le photon est énergétique.',
        'Les niveaux d\'énergie d\'un atome sont <strong>discrets</strong> : seules certaines transitions, d\'énergie bien précise, sont possibles — d\'où les raies fines des spectres atomiques.',
        'Une transition vers un niveau supérieur correspond à une <strong>absorption</strong> de photon, une transition vers un niveau inférieur à une <strong>émission</strong> de photon.'
      ],
      piege: 'Une erreur fréquente est de croire que l\'énergie d\'un photon est proportionnelle à sa longueur d\'onde : c\'est l\'inverse, $E=hc/\\lambda$ montre qu\'un photon de grande longueur d\'onde (rouge, infrarouge) est <strong>moins</strong> énergétique qu\'un photon de petite longueur d\'onde (bleu, ultraviolet). Attention également à ne pas oublier la valeur absolue dans $\\Delta E=|E_f-E_i|$ : l\'énergie d\'un photon est toujours positive, que la transition soit une absorption ou une émission.'
    },

    quiz: [
      {
        q: 'Un photon associé à une radiation de fréquence $f$ possède une énergie :',
        options: [
          '$E=hf$',
          '$E=\\dfrac{h}{f}$',
          '$E=hf^2$',
          '$E=h+f$'
        ],
        answer: 0,
        correction: 'L\'énergie d\'un photon est directement proportionnelle à sa fréquence : $E=hf$, où $h$ est la constante de Planck.'
      },
      {
        q: 'Pourquoi la longueur d\'onde de de Broglie d\'une balle de tennis en mouvement n\'est-elle jamais observée expérimentalement ?',
        options: [
          'Car sa masse est bien trop grande, ce qui rend $\\lambda=h/p$ extrêmement petite',
          'Car une balle de tennis n\'a pas de quantité de mouvement',
          'Car cette formule ne s\'applique qu\'aux ondes lumineuses',
          'Car la vitesse d\'une balle de tennis est nulle'
        ],
        answer: 0,
        correction: 'La quantité de mouvement $p=mv$ d\'une balle de tennis est énorme comparée à celle d\'un électron : $\\lambda=h/p$ devient alors totalement négligeable (bien plus petite que la taille d\'un noyau atomique), donc inobservable.'
      },
      {
        q: 'Un atome d\'hydrogène effectue une transition du niveau $n=1$ ($E_1=-13{,}6$ eV) vers le niveau $n=2$ ($E_2=-3{,}4$ eV) par absorption d\'un photon. Quelle est l\'énergie de ce photon ?',
        options: [
          '$10{,}2$ eV',
          '$17{,}0$ eV',
          '$-10{,}2$ eV',
          '$3{,}4$ eV'
        ],
        answer: 0,
        correction: '$\\Delta E=|E_2-E_1|=|-3{,}4-(-13{,}6)|=10{,}2$ eV.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var h = 6.63e-34, c = 3.00e8, e = 1.60e-19;
        var typeExo = pick(['energiePhoton', 'transition']);

        if (typeExo === 'energiePhoton') {
          var lambdaNm = pick([400, 450, 500, 550, 600, 650, 700]);
          var E_eV = parseFloat(((h * c / (lambdaNm * 1e-9)) / e).toFixed(3));
          var contexte = pick([
            'une diode électroluminescente (LED)',
            'un pointeur laser de démonstration',
            'un spectromètre de laboratoire',
            'une lampe spectrale de travaux pratiques',
            'un capteur optique industriel'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte + ', on étudie une radiation de longueur d\'onde $\\lambda=' + lambdaNm + '$ nm (on donne $h\\approx6{,}63\\times10^{-34}$ J·s, $c\\approx3{,}00\\times10^8$ m/s et $1$ eV $=1{,}60\\times10^{-19}$ J).<br/><br/>Calcule l\'énergie du photon associé, en eV (arrondie au millième).',
            answer: E_eV,
            tolerance: Math.max(0.01, parseFloat((E_eV * 0.03).toFixed(3))),
            unit: 'eV',
            hint: 'Calcule $E=\\dfrac{hc}{\\lambda}$ en joules, puis convertis en eV en divisant par $1{,}60\\times10^{-19}$.',
            solution: [
              'Énergie en joules : $E=\\dfrac{hc}{\\lambda}=\\dfrac{6{,}63\\times10^{-34}\\times3{,}00\\times10^8}{' + lambdaNm + '\\times10^{-9}}$.',
              'Conversion en eV : $E_{eV}=\\dfrac{E}{1{,}60\\times10^{-19}}$.',
              'Résultat : $E\\approx' + fr(E_eV, 3) + '$ eV.'
            ]
          };
        } else {
          var pairs = [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]];
          var pair = pick(pairs);
          var nLow = pair[0], nHigh = pair[1];
          var sens = pick(['absorption', 'emission']);
          var En = function (n) { return -13.6 / (n * n); };
          var dE_eV = Math.abs(En(nHigh) - En(nLow));
          var dE_J = dE_eV * e;
          var lambdaNm2 = parseFloat(((h * c / dE_J) * 1e9).toFixed(1));
          var nFrom = sens === 'absorption' ? nLow : nHigh;
          var nTo = sens === 'absorption' ? nHigh : nLow;
          var contexte2 = pick([
            'un tube à décharge de laboratoire',
            'une lampe spectrale à hydrogène',
            'un plasma étudié en astrophysique',
            'une expérience de spectroscopie atomique'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', un atome d\'hydrogène passe du niveau $n=' + nFrom + '$ au niveau $n=' + nTo + '$ par ' + (sens === 'absorption' ? 'absorption' : 'émission') + ' d\'un photon (niveaux $E_n=-\\dfrac{13{,}6}{n^2}$ eV).<br/><br/>Calcule la longueur d\'onde $\\lambda$ de ce photon (en nm, arrondie au dixième).',
            answer: lambdaNm2,
            tolerance: Math.max(0.5, parseFloat((lambdaNm2 * 0.03).toFixed(1))),
            unit: 'nm',
            hint: 'Calcule $\\Delta E=|E_{' + nHigh + '}-E_{' + nLow + '}|$ en eV, convertis en joules, puis utilise $\\lambda=\\dfrac{hc}{\\Delta E}$.',
            solution: [
              'Écart d\'énergie : $\\Delta E=\\left|-\\dfrac{13{,}6}{' + nHigh + '^2}-\\left(-\\dfrac{13{,}6}{' + nLow + '^2}\\right)\\right|\\approx' + fr(dE_eV, 3) + '$ eV.',
              'Conversion en joules : $\\Delta E\\approx' + fr(parseFloat(dE_J.toExponential(3))) + '$ J.',
              'Longueur d\'onde : $\\lambda=\\dfrac{hc}{\\Delta E}\\approx' + fr(lambdaNm2, 1) + '$ nm.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un atome, initialement dans son état fondamental d\'énergie $E_1=-13{,}6$ eV, absorbe un photon de longueur d\'onde $\\lambda=97{,}5$ nm. On donne $h\\approx6{,}63\\times10^{-34}$ J·s, $c\\approx3{,}00\\times10^8$ m/s et $1$ eV $=1{,}60\\times10^{-19}$ J. Les niveaux d\'énergie de cet atome suivent la loi $E_n=-\\dfrac{13{,}6}{n^2}$ eV.',
      tasks: [
        'Calculer l\'énergie du photon absorbé, en eV.',
        'En déduire l\'énergie $E_{exc}$ du niveau excité atteint par l\'atome après absorption.',
        'Déterminer le nombre quantique $n$ du niveau excité atteint.'
      ],
      solutions: [
        '$E_{photon}=\\dfrac{hc}{\\lambda}=\\dfrac{6{,}63\\times10^{-34}\\times3{,}00\\times10^8}{97{,}5\\times10^{-9}}\\approx2{,}040\\times10^{-18}$ J, soit $\\dfrac{2{,}040\\times10^{-18}}{1{,}60\\times10^{-19}}\\approx12{,}75$ eV.',
        'L\'atome absorbe intégralement cette énergie : $E_{exc}=E_1+E_{photon}=-13{,}6+12{,}75=-0{,}85$ eV.',
        'On résout $-\\dfrac{13{,}6}{n^2}=-0{,}85$, soit $n^2=\\dfrac{13{,}6}{0{,}85}=16$, donc $n=4$.'
      ],
      finalAnswer: '$E_{photon}\\approx12{,}75$ eV, $E_{exc}=-0{,}85$ eV, correspondant au niveau $n=4$. Cette méthode — mesurer la longueur d\'onde d\'une raie d\'absorption pour en déduire la structure des niveaux d\'énergie — est exactement celle utilisée par les astrophysiciens pour identifier la composition chimique des étoiles à partir de leur spectre.'
    },

    evaluation: {
      title: 'Évaluation — Physique quantique : dualité et niveaux d\'énergie',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer l\'énergie, en eV, d\'un photon de longueur d\'onde $\\lambda=620$ nm ($h\\approx6{,}63\\times10^{-34}$ J·s, $c\\approx3{,}00\\times10^8$ m/s, $1$ eV $=1{,}60\\times10^{-19}$ J).',
          type: 'numeric',
          answer: 2.005,
          tolerance: 0.05,
          unit: 'eV',
          points: 3,
          correction: '$E=\\dfrac{hc}{\\lambda}=\\dfrac{6{,}63\\times10^{-34}\\times3{,}00\\times10^8}{620\\times10^{-9}}\\approx3{,}21\\times10^{-19}$ J $\\approx2{,}01$ eV.'
        },
        {
          statement: 'Dans un atome, les niveaux d\'énergie possibles sont :',
          type: 'multiple-choice',
          options: [
            'Continus : toutes les valeurs d\'énergie sont possibles',
            'Discrets : seules certaines valeurs précises sont possibles',
            'Toujours positifs',
            'Indépendants du nombre quantique $n$'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'énergie d\'un atome est quantifiée : elle ne peut prendre que des valeurs discrètes $E_n$, ce qui explique les raies fines (et non un spectre continu) observées dans les spectres atomiques.'
        },
        {
          statement: 'Un atome d\'hydrogène passe du niveau $n=2$ ($E_2=-3{,}4$ eV) au niveau $n=3$ ($E_3=-1{,}51$ eV) par absorption. Calculer la longueur d\'onde du photon absorbé (en nm).',
          type: 'numeric',
          answer: 658,
          tolerance: 15,
          unit: 'nm',
          points: 3,
          correction: '$\\Delta E=|E_3-E_2|=|-1{,}51-(-3{,}4)|=1{,}89$ eV $\\approx3{,}02\\times10^{-19}$ J. $\\lambda=\\dfrac{hc}{\\Delta E}\\approx6{,}58\\times10^{-7}$ m $=658$ nm.'
        },
        {
          statement: 'Une transition atomique vers un niveau d\'énergie supérieur ($E_f &gt; E_i$) correspond à :',
          type: 'multiple-choice',
          options: [
            'Une émission de photon',
            'Une absorption de photon',
            'Aucun échange de photon',
            'Une ionisation systématique'
          ],
          answer: 1,
          points: 2,
          correction: 'Pour monter vers un niveau d\'énergie supérieur, l\'atome doit recevoir de l\'énergie : il absorbe un photon d\'énergie exactement égale à l\'écart entre les deux niveaux.'
        },
        {
          statement: 'La longueur d\'onde de de Broglie associée à une particule de quantité de mouvement $p$ s\'exprime :',
          type: 'multiple-choice',
          options: [
            '$\\lambda=hp$',
            '$\\lambda=\\dfrac{h}{p}$',
            '$\\lambda=\\dfrac{p}{h}$',
            '$\\lambda=h+p$'
          ],
          answer: 1,
          points: 2,
          correction: 'La relation de de Broglie s\'écrit $\\lambda=\\dfrac{h}{p}$ : plus la quantité de mouvement $p$ est grande, plus la longueur d\'onde associée est petite.'
        }
      ]
    }
  });
