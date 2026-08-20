/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-radioactivite.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-radioactivite',
    level: 2, subject: 'physique',
    icon: '☢️',
    title: 'Radioactivité et réactions nucléaires',
    subtitle: 'Noyau atomique, désintégrations α/β⁻/β⁺, loi de décroissance radioactive, demi-vie, fission et fusion',
    keywords: ['Radioactivité', 'Décroissance radioactive', 'Demi-vie', 'Désintégration', 'Fission-fusion'],
    physics: 'La radioactivité est exploitée en médecine nucléaire (scintigraphie, radiothérapie), en datation archéologique et géologique (carbone 14, potassium-argon), dans la production d\'électricité par fission (centrales nucléaires) et dans la recherche sur la fusion comme source d\'énergie future.',

    cours: {
      intro: 'Un noyau atomique est caractérisé par son nombre de nucléons $A$ (protons + neutrons) et son numéro atomique $Z$ (nombre de protons), notés $^A_Z X$. Certains noyaux, dits <strong>radioactifs</strong>, sont instables et se désintègrent spontanément, en émettant une particule ($\\alpha$, $\\beta^-$ ou $\\beta^+$) pour atteindre une configuration plus stable.<br/><br/>Toute équation de désintégration nucléaire obéit aux <strong>lois de conservation</strong> de Soddy : le nombre de masse $A$ et le numéro atomique $Z$ se conservent globalement entre les noyaux avant et après la réaction.<br/><br/>À l\'échelle d\'un échantillon, le nombre de noyaux radioactifs restants décroît selon une loi exponentielle caractéristique, $N(t)=N_0 e^{-\\lambda t}$, où $\\lambda$ est la <strong>constante radioactive</strong> du noyau considéré. On caractérise souvent cette décroissance par la <strong>demi-vie</strong> $t_{1/2}$, durée au bout de laquelle la moitié des noyaux initiaux se sont désintégrés.',
      definitions: [
        { term: 'Noyau atomique ($^A_Z X$)', def: 'Noyau constitué de $Z$ protons et $N=A-Z$ neutrons, soit $A$ nucléons au total. Deux noyaux de même $Z$ mais de $A$ différent sont des <strong>isotopes</strong>.' },
        { term: 'Désintégrations $\\alpha$, $\\beta^-$, $\\beta^+$', def: 'Trois modes de désintégration radioactive : émission d\'un noyau d\'hélium ($\\alpha$, $^4_2He$), transformation d\'un neutron en proton avec émission d\'un électron ($\\beta^-$), ou d\'un proton en neutron avec émission d\'un positon ($\\beta^+$).' },
        { term: 'Lois de conservation (Soddy)', def: 'Dans toute équation de réaction nucléaire, le nombre de masse total $A$ et le numéro atomique total $Z$ se conservent entre l\'état initial et l\'état final.' },
        { term: 'Demi-vie ($t_{1/2}$)', def: 'Durée au bout de laquelle la moitié des noyaux radioactifs initialement présents se sont désintégrés : $t_{1/2}=\\dfrac{\\ln 2}{\\lambda}$. Après $n$ demi-vies, il ne reste que $\\left(\\dfrac12\\right)^n$ de la population initiale.' }
      ],
      method: {
        title: 'Résoudre un problème de radioactivité en 3 étapes',
        steps: [
          'Pour une <strong>équation de désintégration</strong> : identifier le type ($\\alpha$, $\\beta^-$ ou $\\beta^+$), puis écrire le noyau fils en appliquant les lois de conservation de $A$ et $Z$.',
          'Pour une <strong>décroissance temporelle</strong> : identifier $N_0$ (population initiale), $t_{1/2}$ ou $\\lambda$ (liés par $t_{1/2}=\\dfrac{\\ln2}{\\lambda}$), puis appliquer $N(t)=N_0 e^{-\\lambda t}$ — ou, plus simplement, compter le nombre de demi-vies écoulées pour utiliser $N(t)=N_0\\left(\\dfrac12\\right)^{t/t_{1/2}}$.',
          'Pour une <strong>réaction de fission ou de fusion</strong>, calculer la perte de masse $|\\Delta m|$ entre l\'état initial et l\'état final, puis en déduire l\'énergie libérée par $|\\Delta E|=|\\Delta m|c^2$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Décroissance radioactive',
        title: 'Loi de décroissance exponentielle et demi-vie',
        description: 'Le nombre de noyaux radioactifs $N(t)$ décroît exponentiellement : à chaque demi-vie $t_{1/2}$ écoulée, la population restante est divisée par $2$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="radio-title radio-desc">
            <title id="radio-title">Courbe de decroissance radioactive N(t)</title>
            <desc id="radio-desc">Un graphique represente le nombre de noyaux radioactifs restants en ordonnee en fonction du temps en abscisse. La courbe part de la valeur initiale N0 et decroit de facon exponentielle, de plus en plus lentement, sans jamais atteindre zero. Des lignes pointillees indiquent qu'au temps egal a une demi-vie, la population vaut la moitie de N0, et qu'au temps egal a deux demi-vies, elle vaut le quart de N0, illustrant la division par deux a chaque demi-vie ecoulee.</desc>

            <defs>
              <marker id="arrow-tle-radio" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="60" y1="250" x2="520" y2="250" marker-end="url(#arrow-tle-radio)"></line>
            <line class="frame-line" x1="60" y1="250" x2="60" y2="50" marker-end="url(#arrow-tle-radio)"></line>
            <text class="tick-label" x="60" y="32" text-anchor="middle">N</text>
            <text class="tick-label" x="518" y="266" text-anchor="end">t</text>

            <!-- courbe de decroissance exponentielle (points calcules) -->
            <path class="curve-main" fill="none" d="M60,70 L97,99 L133,123 L170,143 L207,160 L243,174 L280,186 L317,197 L353,205 L390,212 L427,218 L463,223 L500,227"></path>

            <!-- niveau N0 -->
            <line class="guide-line" x1="60" y1="70" x2="500" y2="70"></line>
            <text class="tick-label" x="50" y="74" text-anchor="end">N₀</text>

            <!-- niveau N0/2 et t1/2 -->
            <line class="guide-line" x1="60" y1="160" x2="207" y2="160"></line>
            <line class="guide-line" x1="207" y1="160" x2="207" y2="250"></line>
            <circle class="plot-point" cx="207" cy="160" r="4"></circle>
            <text class="tick-label" x="50" y="164" text-anchor="end">N₀/2</text>
            <text class="tick-label" x="207" y="264" text-anchor="middle">t₁/₂</text>

            <!-- niveau N0/4 et 2t1/2 -->
            <line class="guide-line" x1="60" y1="205" x2="353" y2="205"></line>
            <line class="guide-line" x1="353" y1="205" x2="353" y2="250"></line>
            <circle class="plot-point" cx="353" cy="205" r="4"></circle>
            <text class="tick-label" x="50" y="209" text-anchor="end">N₀/4</text>
            <text class="tick-label" x="353" y="264" text-anchor="middle">2t₁/₂</text>
          </svg>
        `,
        notes: [
          'À $t=0$, la population est $N_0$. Après une demi-vie ($t=t_{1/2}$), il n\'en reste que $\\dfrac{N_0}{2}$.',
          'Après <strong>deux</strong> demi-vies ($t=2\\,t_{1/2}$), la population est à nouveau divisée par $2$ : il reste $\\dfrac{N_0}{4}$, et non $0$ — la signature d\'une décroissance <strong>exponentielle</strong>, pas linéaire.',
          'La courbe ne touche jamais complètement l\'axe des temps : théoriquement, il reste toujours une fraction, même infime, de noyaux non désintégrés.'
        ],
        reading: 'Repère $N_0$ sur l\'axe vertical, puis suis la courbe : à chaque fois que le temps avance d\'une demi-vie $t_{1/2}$, la population restante est divisée par $2$ (et non ramenée à $0$).',
        caption: 'Décroissance radioactive : le nombre de noyaux $N(t)=N_0 e^{-\\lambda t}$ diminue exponentiellement, divisé par $2$ à chaque demi-vie $t_{1/2}$ écoulée.'
      },
      diagrams: [
        {
          theme: 'physique',
          kicker: 'Lois de conservation de Soddy',
          title: 'Conservation de $A$ et $Z$ lors d\'une désintégration (exemple : désintégration $\\alpha$)',
          description: 'Lors de toute désintégration radioactive, le nombre de nucléons $A$ et le numéro atomique $Z$ se conservent globalement entre le noyau père et l\'ensemble {noyau fils + particule émise}.',
          svg: `
            <svg viewBox="0 0 560 300" role="img" aria-labelledby="radio2-title radio2-desc">
              <title id="radio2-title">Conservation du nombre de nucleons et du numero atomique lors d'une desintegration</title>
              <desc id="radio2-desc">Un schema illustre la desintegration alpha d'un noyau de radium 226. A gauche, un cercle represente le noyau pere, etiquete Ra-226, avec un nombre de masse A egal a 226 et un numero atomique Z egal a 88. Une fleche horizontale, etiquetee alpha, mene vers la droite a deux cercles plus petits relies par un signe plus. Le premier represente le noyau fils, etiquete Rn-222, avec A egal a 222 et Z egal a 86. Le second, plus petit, represente la particule alpha emise, avec A egal a 4 et Z egal a 2. En dessous de ce schema, un tableau recapitule les trois modes de desintegration radioactive : pour la desintegration alpha, le nombre de masse varie de moins quatre et le numero atomique de moins deux ; pour la desintegration beta moins, le nombre de masse ne varie pas et le numero atomique varie de plus un ; pour la desintegration beta plus, le nombre de masse ne varie pas et le numero atomique varie de moins un.</desc>

              <defs>
                <marker id="arrow-tle-radio2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- noyau pere -->
              <circle class="plot-point-alt" cx="110" cy="100" r="50"></circle>
              <text class="label-soft" x="110" y="36" text-anchor="middle">Noyau père</text>
              <text class="annotation-label" x="110" y="92" text-anchor="middle">Ra-226</text>
              <text class="tick-label" x="110" y="108" text-anchor="middle">A = 226</text>
              <text class="tick-label" x="110" y="122" text-anchor="middle">Z = 88</text>

              <!-- fleche de desintegration -->
              <line class="curve-main" x1="165" y1="100" x2="235" y2="100" marker-end="url(#arrow-tle-radio2)"></line>
              <text class="annotation-label" x="200" y="85" text-anchor="middle">α</text>

              <!-- noyau fils -->
              <circle class="plot-point-alt" cx="310" cy="100" r="42"></circle>
              <text class="label-soft" x="310" y="44" text-anchor="middle">Noyau fils</text>
              <text class="annotation-label" x="310" y="92" text-anchor="middle">Rn-222</text>
              <text class="tick-label" x="310" y="108" text-anchor="middle">A = 222</text>
              <text class="tick-label" x="310" y="122" text-anchor="middle">Z = 86</text>

              <!-- signe plus -->
              <text class="annotation-label" x="379" y="107" text-anchor="middle" font-size="22">+</text>

              <!-- particule alpha -->
              <circle class="plot-point-alt" cx="440" cy="100" r="34"></circle>
              <text class="label-soft" x="440" y="50" text-anchor="middle">Particule émise</text>
              <text class="annotation-label" x="440" y="92" text-anchor="middle">α</text>
              <text class="tick-label" x="440" y="108" text-anchor="middle">A = 4</text>
              <text class="tick-label" x="440" y="122" text-anchor="middle">Z = 2</text>

              <!-- tableau des 3 modes de desintegration -->
              <rect class="frame-line" x="60" y="185" width="440" height="100" rx="12" fill="var(--diagram-soft)"></rect>
              <text class="label-soft" x="280" y="203" text-anchor="middle">Bilan des 3 modes de désintégration</text>
              <text class="tick-label" x="110" y="222" text-anchor="middle">Mode</text>
              <text class="tick-label" x="290" y="222" text-anchor="middle">ΔA</text>
              <text class="tick-label" x="440" y="222" text-anchor="middle">ΔZ</text>
              <text class="annotation-label" x="110" y="240" text-anchor="middle">α</text>
              <text class="tick-label" x="290" y="240" text-anchor="middle">−4</text>
              <text class="tick-label" x="440" y="240" text-anchor="middle">−2</text>
              <text class="annotation-label" x="110" y="256" text-anchor="middle">β⁻</text>
              <text class="tick-label" x="290" y="256" text-anchor="middle">0</text>
              <text class="tick-label" x="440" y="256" text-anchor="middle">+1</text>
              <text class="annotation-label" x="110" y="272" text-anchor="middle">β⁺</text>
              <text class="tick-label" x="290" y="272" text-anchor="middle">0</text>
              <text class="tick-label" x="440" y="272" text-anchor="middle">−1</text>
            </svg>
          `,
          notes: [
            'La désintégration illustrée ici est une désintégration $\\alpha$ : le noyau de radium 226 ($A=226$, $Z=88$) émet un noyau d\'hélium ($^4_2He$) et devient un noyau de radon 222 ($A=222$, $Z=86$).',
            'Dans les deux cas, la somme se vérifie : $226=222+4$ pour $A$, et $88=86+2$ pour $Z$ — les <strong>lois de conservation de Soddy</strong> s\'appliquent globalement entre l\'état initial et l\'état final, jamais séparément sur un seul noyau.',
            'Le tableau généralise aux trois modes de désintégration : la désintégration $\\beta^-$ (respectivement $\\beta^+$) ne change jamais $A$, mais <strong>augmente</strong> (respectivement <strong>diminue</strong>) $Z$ de $1$, car un neutron se transforme en proton (respectivement l\'inverse).'
          ],
          reading: 'Vérifie que la somme des $A$ (et des $Z$) du noyau fils et de la particule émise redonne exactement les valeurs du noyau père, puis reporte-toi au tableau pour généraliser ce bilan aux désintégrations $\\beta^-$ et $\\beta^+$.',
          caption: 'Conservation du nombre de nucléons $A$ et du numéro atomique $Z$ lors d\'une désintégration $\\alpha$ (ici, radium 226 → radon 222 + hélium 4), et bilan des trois modes de désintégration radioactive.'
        }
      ],
      example: {
        statement: 'Un échantillon d\'iode 131 (utilisé en médecine nucléaire), de demi-vie $t_{1/2}=8{,}0$ jours, contient initialement $N_0=4{,}0\\times10^{15}$ noyaux radioactifs.<br/><br/>Calculer la constante radioactive $\\lambda$, puis le nombre de noyaux restants après $t=24$ jours.',
        steps: [
          'Constante radioactive : $\\lambda=\\dfrac{\\ln2}{t_{1/2}}=\\dfrac{0{,}693}{8{,}0}\\approx0{,}0866$ jour$^{-1}$.',
          'La durée $t=24$ jours correspond exactement à $\\dfrac{24}{8{,}0}=3$ demi-vies.',
          'Après $3$ demi-vies, la population restante est $N=N_0\\left(\\dfrac12\\right)^3=\\dfrac{N_0}{8}=\\dfrac{4{,}0\\times10^{15}}{8}=5{,}0\\times10^{14}$ noyaux.'
        ],
        answer: '$\\lambda\\approx0{,}0866$ jour$^{-1}$ et $N(24\\text{ j})=5{,}0\\times10^{14}$ noyaux. Repérer le nombre exact de demi-vies écoulées (ici $3$) permet souvent d\'éviter le calcul complet de l\'exponentielle.'
      },
      formulas: [
        'Notation d\'un noyau : $^A_Z X$ ($A$ = nombre de masse, $Z$ = numéro atomique)',
        'Loi de décroissance radioactive : $N(t)=N_0 e^{-\\lambda t}$',
        'Demi-vie : $t_{1/2}=\\dfrac{\\ln 2}{\\lambda}$',
        'Après $n$ demi-vies : $N=N_0\\left(\\dfrac12\\right)^n$',
        'Activité : $a(t)=\\lambda N(t)$ (en becquerels, Bq) — à ne pas confondre avec le nombre de masse $A$',
        'Relation masse-énergie (Einstein) : $|\\Delta E|=|\\Delta m|c^2$ (fission, fusion)'
      ],
      recap: [
        'Dans toute équation nucléaire, le nombre de masse $A$ et le numéro atomique $Z$ se <strong>conservent</strong> globalement : c\'est ce qui permet de déterminer le noyau fils.',
        'La décroissance radioactive est <strong>exponentielle</strong> : après chaque demi-vie $t_{1/2}$, la population restante est divisée par $2$, jamais ramenée brutalement à $0$.',
        'La demi-vie $t_{1/2}$ et la constante radioactive $\\lambda$ sont deux façons équivalentes de caractériser la <strong>même</strong> décroissance : $t_{1/2}=\\dfrac{\\ln2}{\\lambda}$.',
        'Les réactions de fission et de fusion libèrent une énergie considérable, reliée à la perte de masse par la relation d\'Einstein $|\\Delta E|=|\\Delta m|c^2$.'
      ],
      piege: 'Une erreur fréquente est de croire que la population de noyaux radioactifs s\'annule après deux demi-vies, en imaginant à tort une décroissance linéaire : en réalité, elle est simplement divisée par $2$ à chaque demi-vie ($N_0\\to N_0/2\\to N_0/4\\to\\dots$), sans jamais atteindre exactement zéro. Attention également à la notation $A$, utilisée à la fois pour le nombre de masse d\'un noyau et pour l\'activité d\'un échantillon (en becquerels) : seul le contexte permet de lever cette ambiguïté fréquente dans les énoncés.'
    },

    quiz: [
      {
        q: 'Une population de noyaux radioactifs a une demi-vie $t_{1/2}=10$ jours. Après $20$ jours (soit $2$ demi-vies), quelle fraction de la population initiale reste-t-il ?',
        options: [
          '$\\dfrac14$',
          '$\\dfrac12$',
          '$0$ (tout a disparu)',
          '$\\dfrac{1}{20}$'
        ],
        answer: 0,
        correction: 'Chaque demi-vie divise la population par $2$ : après $2$ demi-vies, il reste $\\left(\\dfrac12\\right)^2=\\dfrac14$ de la population initiale.'
      },
      {
        q: 'Lors d\'une désintégration $\\alpha$, le noyau fils a, par rapport au noyau père :',
        options: [
          'Un nombre de masse $A$ diminué de $4$ et un numéro atomique $Z$ diminué de $2$',
          '$A$ et $Z$ inchangés',
          '$A$ diminué de $2$ et $Z$ diminué de $4$',
          '$A$ inchangé et $Z$ diminué de $2$'
        ],
        answer: 0,
        correction: 'La désintégration $\\alpha$ émet un noyau d\'hélium $^4_2He$ : le noyau fils perd donc $4$ nucléons ($A-4$) et $2$ protons ($Z-2$), conformément aux lois de conservation de Soddy.'
      },
      {
        q: 'Un échantillon contient initialement $N_0=8{,}0\\times10^{10}$ noyaux radioactifs de demi-vie $t_{1/2}=6{,}0$ jours. Combien en reste-t-il après $t=18$ jours (soit $3$ demi-vies) ?',
        options: [
          '$1{,}0\\times10^{10}$',
          '$2{,}7\\times10^{10}$',
          '$4{,}0\\times10^{10}$',
          '$0$'
        ],
        answer: 0,
        correction: 'Après $3$ demi-vies, $N=N_0\\left(\\dfrac12\\right)^3=\\dfrac{N_0}{8}=\\dfrac{8{,}0\\times10^{10}}{8}=1{,}0\\times10^{10}$ noyaux.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['fraction', 'conservation']);

        if (typeExo === 'fraction') {
          var t12 = pick([2, 3, 4, 5, 6, 8, 10, 12]);
          var nHL = pick([1, 2, 3, 4]);
          var t = t12 * nHL;
          var fraction = parseFloat(Math.pow(0.5, nHL).toFixed(4));
          var contexte = pick([
            'un radio-isotope médical utilisé en scintigraphie',
            'une source radioactive de laboratoire',
            'un échantillon archéologique en cours de datation',
            'un traceur radioactif industriel',
            'une source de contrôle utilisée en radioprotection'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte + ', de demi-vie $t_{1/2}=' + t12 + '$ jours.<br/><br/>Calcule la fraction $\\dfrac{N}{N_0}$ de la population initiale restante après $t=' + t + '$ jours (sans unité, arrondie au dix-millième).',
            answer: fraction,
            tolerance: Math.max(0.0005, parseFloat((fraction * 0.03).toFixed(4))),
            unit: '',
            hint: 'Calcule d\'abord le nombre de demi-vies écoulées $n=\\dfrac{t}{t_{1/2}}$, puis utilise $\\dfrac{N}{N_0}=\\left(\\dfrac12\\right)^n$.',
            solution: [
              'Nombre de demi-vies écoulées : $n=\\dfrac{t}{t_{1/2}}=\\dfrac{' + t + '}{' + t12 + '}=' + nHL + '$.',
              'Fraction restante : $\\dfrac{N}{N_0}=\\left(\\dfrac12\\right)^{' + nHL + '}$.',
              'Résultat : $\\dfrac{N}{N_0}\\approx' + fr(fraction, 4) + '$.'
            ]
          };
        } else {
          var zValues = [6, 19, 27, 53, 88, 92];
          var Z = pick(zValues);
          var type = pick(['alpha', 'beta-', 'beta+']);
          var Zp, typeLabel;
          if (type === 'alpha') { Zp = Z - 2; typeLabel = '\\alpha'; }
          else if (type === 'beta-') { Zp = Z + 1; typeLabel = '\\beta^-'; }
          else { Zp = Z - 1; typeLabel = '\\beta^+'; }
          return {
            statement: 'Un noyau radioactif de numéro atomique $Z=' + Z + '$ subit une désintégration de type $' + typeLabel + '$.<br/><br/>Calcule le numéro atomique $Z\'$ du noyau fils formé.',
            answer: Zp,
            tolerance: 0.5,
            unit: '',
            hint: 'Applique la loi de conservation du numéro atomique selon le type de désintégration : $\\alpha$ ($Z-2$), $\\beta^-$ ($Z+1$), $\\beta^+$ ($Z-1$).',
            solution: [
              'Type de désintégration : $' + typeLabel + '$.',
              'Loi de conservation appliquée à $Z=' + Z + '$ : $Z\'=' + Zp + '$.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Lors de la fission d\'un noyau d\'uranium 235 dans un réacteur nucléaire, la perte de masse entre l\'état initial et les produits de fission est $|\\Delta m|=3{,}20\\times10^{-28}$ kg. On donne $c\\approx3{,}00\\times10^8$ m/s et $1$ MeV $=1{,}60\\times10^{-13}$ J. Un réacteur donné effectue environ $3{,}0\\times10^{19}$ fissions par seconde.',
      tasks: [
        'Calculer l\'énergie $|\\Delta E|$ libérée par une seule fission, en joules puis en MeV.',
        'En déduire la puissance $P$ libérée par le réacteur, en watts puis en mégawatts (MW).',
        'Comparer cet ordre de grandeur à celui d\'une centrale nucléaire réelle (typiquement quelques centaines de MW à plus de $1\\,000$ MW pour la puissance thermique du cœur).'
      ],
      solutions: [
        '$|\\Delta E|=|\\Delta m|c^2=3{,}20\\times10^{-28}\\times(3{,}00\\times10^8)^2=3{,}20\\times10^{-28}\\times9{,}00\\times10^{16}=2{,}88\\times10^{-11}$ J, soit $\\dfrac{2{,}88\\times10^{-11}}{1{,}60\\times10^{-13}}=180$ MeV.',
        '$P=|\\Delta E|\\times(\\text{fissions par seconde})=2{,}88\\times10^{-11}\\times3{,}0\\times10^{19}=8{,}64\\times10^8$ W $=864$ MW.',
        'Cette puissance, de l\'ordre de $864$ MW, est parfaitement cohérente avec la puissance thermique du cœur d\'un réacteur nucléaire réel (souvent entre $1\\,000$ et $3\\,000$ MW thermiques pour les réacteurs de puissance électrique de plusieurs centaines de MW) : l\'énergie colossale libérée par une seule fission ($180$ MeV, soit des millions de fois l\'énergie d\'une réaction chimique) explique la densité énergétique exceptionnelle du combustible nucléaire.'
      ],
      finalAnswer: '$|\\Delta E|=180$ MeV par fission, et $P\\approx864$ MW pour l\'ensemble du réacteur. Cet ordre de grandeur, cohérent avec les réacteurs réels, illustre pourquoi une masse infime de combustible nucléaire libère une énergie comparable à celle de tonnes de combustible fossile.'
    },

    evaluation: {
      title: 'Évaluation — Radioactivité et réactions nucléaires',
      duration: '30 min',
      questions: [
        {
          statement: 'Un noyau de radium 226 ($A=226$, $Z=88$) subit une désintégration $\\alpha$. Calculer le nombre de masse $A\'$ du noyau fils.',
          type: 'numeric',
          answer: 222,
          tolerance: 0.5,
          unit: '',
          points: 2,
          correction: 'La désintégration $\\alpha$ émet un noyau d\'hélium ($A=4$) : $A\'=A-4=226-4=222$.'
        },
        {
          statement: 'Lors d\'une désintégration $\\beta^-$, la transformation qui a lieu dans le noyau est :',
          type: 'multiple-choice',
          options: [
            'Un neutron se transforme en proton, avec émission d\'un électron',
            'Un proton se transforme en neutron, avec émission d\'un positon',
            'Un proton se transforme en neutron, avec émission d\'un électron',
            'Aucune particule n\'est émise'
          ],
          answer: 0,
          points: 2,
          correction: 'La désintégration $\\beta^-$ correspond à la transformation d\'un neutron en proton au sein du noyau, avec émission d\'un électron (et d\'un antineutrino) : le numéro atomique augmente donc de $1$.'
        },
        {
          statement: 'Un échantillon a une demi-vie $t_{1/2}=5{,}0$ ans. Calculer la fraction $\\dfrac{N}{N_0}$ restante après $t=20$ ans (sans unité, arrondie au millième).',
          type: 'numeric',
          answer: 0.0625,
          tolerance: 0.003,
          unit: '',
          points: 3,
          correction: '$n=\\dfrac{t}{t_{1/2}}=\\dfrac{20}{5{,}0}=4$ demi-vies. $\\dfrac{N}{N_0}=\\left(\\dfrac12\\right)^4=0{,}0625$.'
        },
        {
          statement: 'La demi-vie $t_{1/2}$ d\'un échantillon radioactif est reliée à la constante radioactive $\\lambda$ par :',
          type: 'multiple-choice',
          options: [
            '$t_{1/2}=\\lambda\\ln2$',
            '$t_{1/2}=\\dfrac{\\ln2}{\\lambda}$',
            '$t_{1/2}=\\dfrac{\\lambda}{\\ln2}$',
            '$t_{1/2}=2\\lambda$'
          ],
          answer: 1,
          points: 2,
          correction: 'La relation exacte est $t_{1/2}=\\dfrac{\\ln2}{\\lambda}$, obtenue en résolvant $N_0 e^{-\\lambda t_{1/2}}=\\dfrac{N_0}{2}$.'
        },
        {
          statement: 'Une réaction nucléaire s\'accompagne d\'une perte de masse $|\\Delta m|=1{,}0\\times10^{-29}$ kg ($c\\approx3{,}00\\times10^8$ m/s, $1$ MeV $=1{,}60\\times10^{-13}$ J). Calculer l\'énergie libérée $|\\Delta E|$, en MeV.',
          type: 'numeric',
          answer: 5.625,
          tolerance: 0.2,
          unit: 'MeV',
          points: 3,
          correction: '$|\\Delta E|=|\\Delta m|c^2=1{,}0\\times10^{-29}\\times(3{,}00\\times10^8)^2=9{,}0\\times10^{-13}$ J, soit $\\dfrac{9{,}0\\times10^{-13}}{1{,}60\\times10^{-13}}=5{,}625$ MeV.'
        }
      ]
    }
  });
