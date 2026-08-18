/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-quantique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-quantique',
    level: 2, subject: 'physique',
    icon: '⚛️',
    title: 'Physique quantique (dualité, niveaux d\'énergie)',
    subtitle: 'Dualité onde-particule, photon, quantification de l\'énergie, transitions atomiques',
    keywords: ['Photon', 'Dualité onde-particule', 'Niveaux d\'énergie', 'Transition', 'Planck'],
    physics: 'La physique quantique est à l\'origine du fonctionnement des LED et lasers (émission de photons lors de transitions d\'énergie), des cellules photovoltaïques, de l\'imagerie médicale par résonance, et de l\'analyse spectrale utilisée pour identifier la composition chimique des étoiles.',

    cours: {
      intro: 'À l\'échelle atomique, la lumière ne se comporte pas uniquement comme une onde : elle se comporte aussi, dans certaines expériences, comme un flux de grains d\'énergie appelés <strong>photons</strong>. C\'est la <strong>dualité onde-particule</strong> : selon l\'expérience réalisée, la lumière (et même la matière) manifeste tantôt un caractère ondulatoire, tantôt un caractère corpusculaire.<br/><br/>Un photon associé à une onde de fréquence $\\nu$ transporte une énergie <strong>quantifiée</strong>, c\'est-à-dire qu\'elle ne peut prendre que des valeurs bien précises : $E = h\\nu$, où $h$ est la <strong>constante de Planck</strong>.<br/><br/>De façon similaire, l\'énergie d\'un atome n\'est pas continue : elle ne peut prendre que certaines valeurs discrètes, appelées <strong>niveaux d\'énergie</strong>. Lorsqu\'un électron passe d\'un niveau à un autre (<strong>transition</strong>), l\'atome absorbe ou émet un photon dont l\'énergie correspond exactement à l\'écart entre les deux niveaux.',
      definitions: [
        { term: 'Photon', def: 'Grain (quantum) d\'énergie lumineuse associé à une onde électromagnétique de fréquence $\\nu$. Son énergie vaut $E = h\\nu = \\dfrac{hc}{\\lambda}$, en joules (J).' },
        { term: 'Dualité onde-particule', def: 'Propriété selon laquelle la lumière (et plus généralement toute particule) présente à la fois un comportement ondulatoire (diffraction, interférences) et un comportement corpusculaire (photons, quantification de l\'énergie).' },
        { term: 'Niveau d\'énergie', def: 'Valeur discrète (parmi un ensemble fini de valeurs autorisées) que peut prendre l\'énergie d\'un atome. L\'état de plus basse énergie est l\'<strong>état fondamental</strong>, les autres sont des <strong>états excités</strong>.' },
        { term: 'Transition (émission/absorption)', def: 'Passage d\'un électron d\'un niveau d\'énergie $E_i$ à un niveau $E_f$. Si $E_f < E_i$, l\'atome <strong>émet</strong> un photon d\'énergie $|\\Delta E|$ ; si $E_f > E_i$, il doit <strong>absorber</strong> un photon de cette même énergie.' }
      ],
      method: {
        title: 'Déterminer l\'énergie d\'un photon émis lors d\'une transition en 3 étapes',
        steps: [
          '<strong>Repérer les deux niveaux d\'énergie</strong> concernés, $E_i$ (niveau de départ) et $E_f$ (niveau d\'arrivée), généralement donnés en électronvolts (eV).',
          '<strong>Calculer la variation d\'énergie</strong> $|\\Delta E| = |E_f - E_i|$, puis la convertir en joules si besoin ($1$ eV $= 1{,}60\\times10^{-19}$ J).',
          '<strong>En déduire la fréquence</strong> $\\nu = \\dfrac{|\\Delta E|}{h}$ puis, si besoin, la <strong>longueur d\'onde</strong> $\\lambda = \\dfrac{c}{\\nu} = \\dfrac{hc}{|\\Delta E|}$ du photon échangé.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Niveaux d\'énergie de l\'atome d\'hydrogène',
        title: 'Transition électronique et émission d\'un photon',
        description: 'L\'énergie de l\'atome d\'hydrogène ne peut prendre que des valeurs discrètes $E_n$. Lors d\'une transition d\'un niveau supérieur vers un niveau inférieur, l\'atome émet un photon dont l\'énergie correspond exactement à l\'écart entre les deux niveaux.',
        svg: `
          <svg viewBox="0 0 560 320" role="img" aria-labelledby="niveaux-title niveaux-desc">
            <title id="niveaux-title">Diagramme des niveaux d'energie de l'atome d'hydrogene</title>
            <desc id="niveaux-desc">Un axe vertical oriente vers le haut represente l'energie croissante. Cinq niveaux horizontaux sont representes, du plus bas au plus haut : E1 a moins 13,6 electron-volts pour n egal 1, E2 a moins 3,4 electron-volts pour n egal 2, E3 a environ moins 1,51 electron-volt pour n egal 3, E4 a environ moins 0,85 electron-volt pour n egal 4, et une ligne en pointilles representant la limite d'ionisation a une energie nulle. L'espacement vertical entre les niveaux diminue a mesure que l'on monte, ce qui traduit qualitativement le resserrement reel des niveaux pres de la limite d'ionisation. Une fleche verticale relie le niveau n egal 3 au niveau n egal 2, orientee vers le bas, accompagnee d'un symbole ondule representant un photon emis.</desc>

            <defs>
              <marker id="arrow-tle-quantique" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axe energie -->
            <line class="frame-line" x1="100" y1="290" x2="100" y2="50" marker-end="url(#arrow-tle-quantique)"></line>
            <text class="tick-label" x="90" y="45" text-anchor="end">E</text>

            <!-- limite d'ionisation -->
            <line class="guide-line" x1="140" y1="60" x2="440" y2="60"></line>
            <text class="tick-label" x="450" y="64" text-anchor="start">E → 0 (ionisation)</text>

            <!-- niveaux d'energie -->
            <line class="frame-line" x1="140" y1="100" x2="380" y2="100"></line>
            <text class="tick-label" x="390" y="104" text-anchor="start">E₄ ≈ -0,85 eV (n=4)</text>

            <line class="frame-line" x1="140" y1="150" x2="380" y2="150"></line>
            <text class="tick-label" x="390" y="154" text-anchor="start">E₃ ≈ -1,51 eV (n=3)</text>

            <line class="frame-line" x1="140" y1="210" x2="380" y2="210"></line>
            <text class="tick-label" x="390" y="214" text-anchor="start">E₂ = -3,4 eV (n=2)</text>

            <line class="frame-line" x1="140" y1="280" x2="380" y2="280"></line>
            <text class="tick-label" x="390" y="284" text-anchor="start">E₁ = -13,6 eV (n=1, fondamental)</text>

            <!-- transition n=3 vers n=2, emission -->
            <line class="curve-main" x1="250" y1="150" x2="250" y2="210" marker-end="url(#arrow-tle-quantique)"></line>
            <text class="tick-label" x="235" y="180" text-anchor="end">n=3 → n=2</text>

            <!-- symbole du photon (ligne ondulee) -->
            <path class="curve-main" fill="none" d="M290,170 L298,160 L306,180 L314,160 L322,180 L330,170"></path>
            <text class="annotation-label" x="335" y="167" text-anchor="start">photon émis</text>
          </svg>
        `,
        notes: [
          'L\'énergie de l\'atome d\'hydrogène est <strong>quantifiée</strong> : elle ne peut prendre que les valeurs $E_n = -\\dfrac{13{,}6}{n^2}$ eV, pour $n = 1, 2, 3, \\dots$',
          'L\'écartement vertical entre les niveaux diminue à mesure que $n$ augmente, jusqu\'à converger vers la <strong>limite d\'ionisation</strong> ($E = 0$) : c\'est une tendance physique réelle, ici représentée de façon schématique.',
          'La transition $n = 3 \\rightarrow n = 2$ représentée correspond à l\'émission d\'un photon d\'énergie $|\\Delta E| = |E_3 - E_2| \\approx 1{,}89$ eV, dans le domaine visible (lumière rouge, $\\lambda \\approx 656$ nm) : c\'est la célèbre raie $H_\\alpha$ de l\'hydrogène.'
        ],
        reading: 'Repère les niveaux d\'énergie de bas en haut (n=1 le plus bas, énergie la plus négative), puis suis la flèche verticale qui relie le niveau n=3 au niveau n=2 : elle représente l\'émission d\'un photon.',
        caption: 'Diagramme (schématique) des niveaux d\'énergie de l\'atome d\'hydrogène : une transition d\'un niveau supérieur vers un niveau inférieur s\'accompagne de l\'émission d\'un photon d\'énergie $|\\Delta E| = h\\nu$.'
      },
      example: {
        statement: 'Dans l\'atome d\'hydrogène, un électron passe du niveau $n=3$ ($E_3 \\approx -1{,}51$ eV) au niveau $n=2$ ($E_2 = -3{,}40$ eV).<br/><br/>Calculer l\'énergie du photon émis (en eV puis en J), sa fréquence, puis sa longueur d\'onde. On donne $h = 6{,}63\\times10^{-34}$ J·s, $c = 3{,}00\\times10^8$ m/s et $1$ eV $= 1{,}60\\times10^{-19}$ J.',
        steps: [
          'Puisque l\'électron passe d\'un niveau supérieur ($E_3$) à un niveau inférieur ($E_2$), un photon est <strong>émis</strong>, d\'énergie $|\\Delta E| = |E_3 - E_2| = |-1{,}51 - (-3{,}40)| = 1{,}89$ eV.',
          'Conversion en joules : $|\\Delta E| = 1{,}89 \\times 1{,}60\\times10^{-19} \\approx 3{,}02\\times10^{-19}$ J.',
          'Fréquence du photon : $\\nu = \\dfrac{|\\Delta E|}{h} = \\dfrac{3{,}02\\times10^{-19}}{6{,}63\\times10^{-34}} \\approx 4{,}56\\times10^{14}$ Hz.',
          'Longueur d\'onde : $\\lambda = \\dfrac{c}{\\nu} = \\dfrac{3{,}00\\times10^8}{4{,}56\\times10^{14}} \\approx 6{,}58\\times10^{-7}$ m, soit $\\lambda \\approx 658$ nm.'
        ],
        answer: '$|\\Delta E| \\approx 1{,}89$ eV, $\\nu \\approx 4{,}56\\times10^{14}$ Hz, $\\lambda \\approx 658$ nm. Cette longueur d\'onde correspond à une lumière <strong>rouge</strong> visible : c\'est la raie $H_\\alpha$ de l\'hydrogène, l\'une des raies les plus connues du spectre de l\'atome, mesurée expérimentalement autour de $656$ nm.'
      },
      formulas: [
        'Énergie d\'un photon : $E = h\\nu = \\dfrac{hc}{\\lambda}$',
        'Constantes : $h \\approx 6{,}63\\times10^{-34}$ J·s (Planck), $c \\approx 3{,}00\\times10^8$ m/s',
        'Conversion : $1$ eV $= 1{,}60\\times10^{-19}$ J',
        'Niveaux d\'énergie de l\'atome d\'hydrogène : $E_n = -\\dfrac{13{,}6}{n^2}$ eV',
        'Photon échangé lors d\'une transition : $|\\Delta E| = |E_f - E_i| = h\\nu$'
      ],
      recap: [
        'La <strong>dualité onde-particule</strong> montre que la lumière se comporte tantôt comme une onde, tantôt comme un flux de <strong>photons</strong> d\'énergie $E = h\\nu$.',
        'L\'énergie d\'un atome est <strong>quantifiée</strong> : elle ne prend que des valeurs discrètes, les <strong>niveaux d\'énergie</strong>.',
        'Une transition vers un niveau inférieur <strong>émet</strong> un photon ; une transition vers un niveau supérieur nécessite l\'<strong>absorption</strong> d\'un photon de même énergie.',
        'L\'énergie du photon échangé est toujours égale à l\'écart <strong>exact</strong> entre les deux niveaux : $|\\Delta E| = h\\nu$.'
      ],
      piege: 'Une confusion fréquente est d\'oublier le signe négatif des niveaux d\'énergie atomique et de calculer $E_f - E_i$ sans prendre la valeur absolue, ce qui peut donner une énergie de photon négative dénuée de sens physique : c\'est toujours $|\\Delta E| = |E_f - E_i|$ qui compte. Attention également à ne pas confondre <strong>émission</strong> (l\'atome perd de l\'énergie, transition vers un niveau plus bas) et <strong>absorption</strong> (l\'atome gagne de l\'énergie, transition vers un niveau plus haut) : le sens de la transition détermine lequel des deux phénomènes se produit.'
    },

    quiz: [
      {
        q: 'D\'après la dualité onde-particule, un photon d\'énergie $E$ est associé à une onde de fréquence $\\nu$ telle que :',
        options: [
          '$E = \\dfrac{h}{\\nu}$',
          '$E = h\\nu$',
          '$E = h + \\nu$',
          '$E = \\nu^2$'
        ],
        answer: 1,
        correction: 'La relation de Planck-Einstein relie l\'énergie d\'un photon à la fréquence de l\'onde associée : $E = h\\nu$, avec $h$ la constante de Planck.'
      },
      {
        q: 'Un électron passe d\'un niveau d\'énergie $E_i = -2{,}0$ eV à un niveau $E_f = -4{,}0$ eV. Que se passe-t-il ?',
        options: [
          'L\'atome absorbe un photon de $2{,}0$ eV',
          'L\'atome émet un photon de $2{,}0$ eV',
          'L\'atome absorbe un photon de $6{,}0$ eV',
          'Rien ne se produit, car l\'énergie ne change pas'
        ],
        answer: 1,
        correction: 'Le niveau final ($-4{,}0$ eV) est plus bas que le niveau initial ($-2{,}0$ eV) : l\'atome perd de l\'énergie, il <strong>émet</strong> donc un photon d\'énergie $|\\Delta E| = |-4{,}0-(-2{,}0)| = 2{,}0$ eV.'
      },
      {
        q: 'Pourquoi dit-on que l\'énergie d\'un atome est « quantifiée » ?',
        options: [
          'Parce qu\'elle peut prendre n\'importe quelle valeur, de façon continue',
          'Parce qu\'elle ne peut prendre que certaines valeurs discrètes bien précises',
          'Parce qu\'elle est toujours nulle',
          'Parce qu\'elle dépend uniquement de la température'
        ],
        answer: 1,
        correction: 'L\'énergie d\'un atome ne peut prendre qu\'un ensemble discret de valeurs autorisées, les niveaux d\'énergie : c\'est le sens du mot « quantifiée », par opposition à une grandeur continue.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['energiePhoton', 'longueurOnde']);
        var h = 6.63e-34;
        var c = 3.00e8;
        var eV = 1.60e-19;

        if (typeExo === 'energiePhoton') {
          var Ei = -randFloat(0.5, 3, 2);
          var Ef = Ei - randFloat(0.5, 4, 2);
          var deltaE = parseFloat(Math.abs(Ei - Ef).toFixed(2));
          var deltaEJ = deltaE * eV;
          var nu = deltaEJ / h;
          var expNu = Math.floor(Math.log10(nu));
          var mantNu = parseFloat((nu / Math.pow(10, expNu)).toFixed(2));
          var contexte = pick([
            'un atome excité en laboratoire',
            'une lampe spectrale étudiée en TP',
            'un gaz atomique observé par spectroscopie',
            'un modèle simplifié d\'atome étudié en cours'
          ]);
          return {
            statement: 'Dans ' + contexte + ', un électron passe d\'un niveau d\'énergie $E_i = ' + fr(Ei, 2) + '$ eV à un niveau d\'énergie $E_f = ' + fr(Ef, 2) + '$ eV.<br/><br/>Calcule l\'énergie $|\\Delta E|$ du photon échangé (en eV, arrondie au centième), puis sa fréquence $\\nu$ (en Hz, notation scientifique). On donne $h = 6{,}63\\times10^{-34}$ J·s et $1$ eV $= 1{,}60\\times10^{-19}$ J.',
            answer: deltaE,
            tolerance: 0.05,
            unit: 'eV',
            hint: 'Calcule $|\\Delta E| = |E_f - E_i|$ en eV, convertis en joules, puis utilise $\\nu = \\dfrac{|\\Delta E|}{h}$.',
            solution: [
              'Variation d\'énergie : $|\\Delta E| = |E_f - E_i| = |' + fr(Ef, 2) + ' - (' + fr(Ei, 2) + ')| = ' + fr(deltaE, 2) + '$ eV.',
              'Conversion en joules : $|\\Delta E| \\approx ' + fr(deltaE, 2) + ' \\times 1{,}60\\times10^{-19} \\approx ' + fr(parseFloat(deltaEJ.toExponential(3).split('e')[0]), 2) + ' \\times 10^{' + deltaEJ.toExponential(3).split('e')[1].replace('+', '') + '}$ J.',
              'Fréquence : $\\nu = \\dfrac{|\\Delta E|}{h} \\approx ' + fr(mantNu, 2) + ' \\times 10^{' + expNu + '}$ Hz.'
            ]
          };
        } else {
          var lambdas2 = [400, 450, 486, 500, 550, 589, 656, 700];
          var lambdaNm = pick(lambdas2);
          var lambdaM = lambdaNm * 1e-9;
          var Ephoton = (h * c) / lambdaM;
          var EphotonEv = parseFloat((Ephoton / eV).toFixed(2));
          var contexte2 = pick([
            'une raie spectrale observée au spectroscope',
            'une source lumineuse monochromatique de TP',
            'un capteur optique étalonné en laboratoire',
            'un laser utilisé en travaux pratiques'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', on étudie un photon de longueur d\'onde $\\lambda = ' + lambdaNm + '$ nm.<br/><br/>Calcule l\'énergie de ce photon, exprimée en électronvolts (eV, arrondie au centième). On donne $h = 6{,}63\\times10^{-34}$ J·s, $c = 3{,}00\\times10^8$ m/s et $1$ eV $= 1{,}60\\times10^{-19}$ J.',
            answer: EphotonEv,
            tolerance: Math.max(0.02, parseFloat((EphotonEv * 0.03).toFixed(2))),
            unit: 'eV',
            hint: 'Utilise $E = \\dfrac{hc}{\\lambda}$ (en convertissant $\\lambda$ en mètres), puis convertis le résultat de joules en eV.',
            solution: [
              'Énergie en joules : $E = \\dfrac{hc}{\\lambda} = \\dfrac{6{,}63\\times10^{-34} \\times 3{,}00\\times10^8}{' + lambdaNm + '\\times10^{-9}}$.',
              'Conversion en électronvolts : $E_{eV} = \\dfrac{E}{1{,}60\\times10^{-19}}$.',
              'Résultat : $E \\approx ' + fr(EphotonEv, 2) + '$ eV.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un atome d\'hydrogène possède les niveaux d\'énergie $E_2 = -3{,}40$ eV et $E_4 \\approx -0{,}85$ eV. On étudie la transition d\'un électron entre ces deux niveaux, dans les deux sens possibles.',
      tasks: [
        'Un électron initialement au niveau $n=2$ absorbe un photon et passe au niveau $n=4$. Calculer l\'énergie de ce photon absorbé.',
        'Calculer la fréquence puis la longueur d\'onde de ce photon, et préciser s\'il appartient au domaine visible. On donne $h = 6{,}63\\times10^{-34}$ J·s, $c = 3{,}00\\times10^8$ m/s et $1$ eV $= 1{,}60\\times10^{-19}$ J.',
        'L\'électron retombe ensuite spontanément du niveau $n=4$ au niveau $n=2$. Comparer l\'énergie du photon alors émis à celle du photon absorbé à la question 1.'
      ],
      solutions: [
        'Puisque l\'électron passe d\'un niveau bas ($E_2$) à un niveau plus haut ($E_4$), il <strong>absorbe</strong> un photon d\'énergie $|\\Delta E| = |E_4 - E_2| = |-0{,}85 - (-3{,}40)| = 2{,}55$ eV.',
        'En joules : $|\\Delta E| = 2{,}55 \\times 1{,}60\\times10^{-19} \\approx 4{,}08\\times10^{-19}$ J. Fréquence : $\\nu = \\dfrac{|\\Delta E|}{h} \\approx \\dfrac{4{,}08\\times10^{-19}}{6{,}63\\times10^{-34}} \\approx 6{,}15\\times10^{14}$ Hz. Longueur d\'onde : $\\lambda = \\dfrac{c}{\\nu} \\approx \\dfrac{3{,}00\\times10^8}{6{,}15\\times10^{14}} \\approx 4{,}88\\times10^{-7}$ m $\\approx 488$ nm, une valeur qui appartient bien au <strong>domaine visible</strong> (lumière bleue-verte).',
        'La transition retour ($n=4 \\rightarrow n=2$) met en jeu exactement le <strong>même écart d\'énergie</strong> $|\\Delta E| = 2{,}55$ eV, donc un photon <strong>émis</strong> de même énergie, même fréquence et même longueur d\'onde que celui absorbé à la question 1 : seul le sens de l\'échange change.'
      ],
      finalAnswer: 'Le photon échangé, absorbé à l\'aller comme émis au retour, a une énergie $|\\Delta E| = 2{,}55$ eV, soit $\\lambda \\approx 488$ nm (domaine visible). Ce résultat illustre une propriété générale : l\'énergie associée à une transition entre deux niveaux donnés est fixe, qu\'elle soit absorbée ou émise.'
    },

    evaluation: {
      title: 'Évaluation — Physique quantique (dualité, niveaux d\'énergie)',
      duration: '30 min',
      questions: [
        {
          statement: 'La relation de Planck-Einstein reliant l\'énergie d\'un photon à la fréquence de l\'onde associée s\'écrit :',
          type: 'multiple-choice',
          options: [
            '$E = h\\nu$',
            '$E = \\dfrac{\\nu}{h}$',
            '$E = h + \\nu$',
            '$E = h\\lambda$'
          ],
          answer: 0,
          points: 2,
          correction: 'L\'énergie d\'un photon est $E = h\\nu$, où $h$ est la constante de Planck et $\\nu$ la fréquence de l\'onde associée.'
        },
        {
          statement: 'Un photon a une énergie $E = 3{,}0$ eV. Convertir cette énergie en joules (notation scientifique, $1$ eV $= 1{,}60\\times10^{-19}$ J).',
          type: 'numeric',
          answer: 4.8e-19,
          tolerance: 0.2e-19,
          unit: 'J',
          points: 2,
          correction: '$E = 3{,}0 \\times 1{,}60\\times10^{-19} = 4{,}8\\times10^{-19}$ J.'
        },
        {
          statement: 'Un électron passe d\'un niveau $E_i = -1{,}5$ eV à un niveau $E_f = -0{,}5$ eV. Que se passe-t-il ?',
          type: 'multiple-choice',
          options: [
            'L\'atome émet un photon de $1{,}0$ eV',
            'L\'atome absorbe un photon de $1{,}0$ eV',
            'L\'atome émet un photon de $2{,}0$ eV',
            'Aucun échange de photon n\'est nécessaire'
          ],
          answer: 1,
          points: 2,
          correction: 'Le niveau final est plus haut que le niveau initial : l\'atome gagne de l\'énergie, il doit donc <strong>absorber</strong> un photon d\'énergie $|\\Delta E| = |-0{,}5-(-1{,}5)| = 1{,}0$ eV.'
        },
        {
          statement: 'Calculer la fréquence d\'un photon d\'énergie $|\\Delta E| = 3{,}31\\times10^{-19}$ J (avec $h = 6{,}63\\times10^{-34}$ J·s), en Hz (notation scientifique, deux chiffres significatifs).',
          type: 'numeric',
          answer: 5.0e14,
          tolerance: 0.3e14,
          unit: 'Hz',
          points: 3,
          correction: '$\\nu = \\dfrac{|\\Delta E|}{h} = \\dfrac{3{,}31\\times10^{-19}}{6{,}63\\times10^{-34}} \\approx 5{,}0\\times10^{14}$ Hz.'
        },
        {
          statement: 'L\'énergie d\'un atome est dite « quantifiée » car :',
          type: 'multiple-choice',
          options: [
            'Elle peut prendre toutes les valeurs possibles, sans restriction',
            'Elle ne peut prendre qu\'un ensemble discret de valeurs autorisées',
            'Elle est toujours proportionnelle à la masse de l\'atome',
            'Elle ne dépend que de la vitesse de la lumière'
          ],
          answer: 1,
          points: 2,
          correction: 'La quantification de l\'énergie signifie que seules certaines valeurs bien précises sont permises pour l\'énergie d\'un atome : ce sont les niveaux d\'énergie.'
        }
      ]
    }
  });
