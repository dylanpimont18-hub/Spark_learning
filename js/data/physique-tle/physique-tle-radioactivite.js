/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-radioactivite.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-radioactivite',
    level: 2, subject: 'physique',
    icon: '☢️',
    title: 'Radioactivité et réactions nucléaires',
    subtitle: 'Désintégration radioactive, lois de conservation, décroissance exponentielle, demi-vie',
    keywords: ['Radioactivité', 'Demi-vie', 'Décroissance exponentielle', 'Activité', 'Noyau'],
    physics: 'La radioactivité est exploitée en médecine (imagerie et radiothérapie), en datation archéologique et géologique (méthode au carbone 14), dans la production d\'électricité nucléaire, et dans le contrôle non destructif de matériaux industriels.',

    cours: {
      intro: 'Certains noyaux atomiques, dits <strong>radioactifs</strong>, sont instables : ils se transforment spontanément en un autre noyau, en émettant un rayonnement. On distingue trois grands types de désintégration : la radioactivité $\\alpha$ (émission d\'un noyau d\'hélium), la radioactivité $\\beta^-$ (émission d\'un électron) et la radioactivité $\\beta^+$ (émission d\'un positon).<br/><br/>Dans toute réaction nucléaire, deux grandeurs se conservent obligatoirement : le <strong>nombre de masse</strong> $A$ (nombre de nucléons) et le <strong>numéro atomique</strong> $Z$ (nombre de protons). Ces <strong>lois de conservation</strong> (dites lois de Soddy) permettent de déterminer le noyau fils produit lors d\'une désintégration.<br/><br/>À l\'échelle d\'un échantillon, le nombre de noyaux radioactifs $N(t)$ encore présents décroît au cours du temps selon une loi exponentielle : $N(t) = N_0 \\, e^{-\\lambda t}$, où $\\lambda$ est la <strong>constante radioactive</strong>. La <strong>demi-vie</strong> $t_{1/2}$ est la durée au bout de laquelle la moitié des noyaux initiaux ont disparu.',
      definitions: [
        { term: 'Noyau radioactif', def: 'Noyau atomique instable qui se désintègre spontanément et aléatoirement en émettant un rayonnement ($\\alpha$, $\\beta^-$ ou $\\beta^+$), se transformant en un autre noyau.' },
        { term: 'Lois de conservation (Soddy)', def: 'Lors de toute réaction nucléaire, le nombre de masse $A$ (nucléons) et le numéro atomique $Z$ (protons) se conservent : $\\sum A_{avant} = \\sum A_{après}$ et $\\sum Z_{avant} = \\sum Z_{après}$.' },
        { term: 'Demi-vie $t_{1/2}$', def: 'Durée au bout de laquelle la moitié des noyaux radioactifs initialement présents se sont désintégrés : $N(t_{1/2}) = \\dfrac{N_0}{2}$. Elle est reliée à la constante radioactive par $t_{1/2} = \\dfrac{\\ln 2}{\\lambda}$.' },
        { term: 'Activité $A(t)$', def: 'Nombre de désintégrations par seconde dans un échantillon, en becquerels (Bq) : $A(t) = \\lambda N(t) = A_0 \\, e^{-\\lambda t}$, où $A_0 = \\lambda N_0$.' }
      ],
      method: {
        title: 'Déterminer la quantité restante après une durée donnée en 3 étapes',
        steps: [
          '<strong>Identifier la demi-vie</strong> $t_{1/2}$ du noyau étudié, et en déduire la constante radioactive $\\lambda = \\dfrac{\\ln 2}{t_{1/2}}$ si elle n\'est pas donnée directement.',
          '<strong>Appliquer la loi de décroissance</strong> $N(t) = N_0 \\, e^{-\\lambda t}$ (ou $A(t) = A_0 \\, e^{-\\lambda t}$ pour l\'activité), avec $t$ exprimé dans la <strong>même unité</strong> que $t_{1/2}$.',
          '<strong>Interpréter le résultat</strong> : si $t$ est un multiple entier $k$ de $t_{1/2}$, le calcul se simplifie directement en $N(t) = \\dfrac{N_0}{2^k}$, sans même utiliser l\'exponentielle.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Décroissance radioactive N(t) = N₀ e^(−λt)',
        title: 'Évolution du nombre de noyaux radioactifs au cours du temps',
        description: 'Le nombre de noyaux radioactifs $N(t)$ diminue de <strong>moitié</strong> à chaque demi-vie $t_{1/2}$ écoulée : $N_0 \\to \\dfrac{N_0}{2} \\to \\dfrac{N_0}{4} \\to \\dfrac{N_0}{8} \\dots$',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="decroiss-title decroiss-desc">
            <title id="decroiss-title">Courbe de decroissance radioactive en fonction du temps</title>
            <desc id="decroiss-desc">Un graphique represente le nombre de noyaux radioactifs N en ordonnee en fonction du temps t en abscisse, exprime en nombre de demi-vies. La courbe part d'une valeur initiale N zero et decroit de maniere exponentielle, rapidement au debut puis de plus en plus lentement, sans jamais atteindre zero. Trois points sont mis en evidence sur la courbe aux instants correspondant a une, deux et trois demi-vies, avec des lignes pointillees reliant le premier point aux deux axes. Les niveaux N zero, N zero sur deux, N zero sur quatre et N zero sur huit sont indiques.</desc>

            <defs>
              <marker id="arrow-tle-radioactivite" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="60" y1="260" x2="520" y2="260" marker-end="url(#arrow-tle-radioactivite)"></line>
            <line class="frame-line" x1="60" y1="260" x2="60" y2="50" marker-end="url(#arrow-tle-radioactivite)"></line>
            <text class="tick-label" x="60" y="32" text-anchor="middle">N</text>
            <text class="tick-label" x="518" y="276" text-anchor="end">t</text>

            <!-- courbe de decroissance exponentielle (calculee, N/N0 = 0,5^t en unites de t1/2) -->
            <path class="curve-main" fill="none" d="M60.0,70.0 L82.0,94.6 L104.0,116.0 L126.0,134.6 L148.0,150.9 L170.0,165.0 L192.0,177.3 L214.0,188.0 L236.0,197.3 L258.0,205.4 L280.0,212.5 L302.0,218.6 L324.0,224.0 L346.0,228.7 L368.0,232.7 L390.0,236.2 L412.0,239.3 L434.0,242.0 L456.0,244.3 L478.0,246.4 L500.0,248.1"></path>

            <!-- niveau N0 -->
            <line class="guide-line" x1="60" y1="70" x2="500" y2="70"></line>
            <text class="tick-label" x="50" y="74" text-anchor="end">N₀</text>

            <!-- point a t1/2 : N0/2 -->
            <line class="guide-line" x1="60" y1="165" x2="170" y2="165"></line>
            <line class="guide-line" x1="170" y1="165" x2="170" y2="260"></line>
            <circle class="plot-point" cx="170" cy="165" r="5"></circle>
            <text class="tick-label" x="50" y="169" text-anchor="end">N₀/2</text>
            <text class="tick-label" x="170" y="276" text-anchor="middle">t½</text>
            <text class="annotation-label" x="195" y="150" text-anchor="start">Demi-vie</text>

            <!-- point a 2 t1/2 : N0/4 -->
            <circle class="plot-point-alt" cx="280" cy="212.5" r="4"></circle>
            <line class="guide-line" x1="280" y1="212.5" x2="280" y2="260"></line>
            <text class="tick-label" x="280" y="276" text-anchor="middle">2t½</text>
            <text class="label-soft" x="292" y="216" text-anchor="start">N₀/4</text>

            <!-- point a 3 t1/2 : N0/8 -->
            <circle class="plot-point-alt" cx="390" cy="236.2" r="4"></circle>
            <line class="guide-line" x1="390" y1="236.2" x2="390" y2="260"></line>
            <text class="tick-label" x="390" y="276" text-anchor="middle">3t½</text>
            <text class="label-soft" x="402" y="240" text-anchor="start">N₀/8</text>
          </svg>
        `,
        notes: [
          'À chaque <strong>demi-vie</strong> écoulée, le nombre de noyaux restants est divisé par <strong>deux</strong> : $N_0 \\to \\dfrac{N_0}{2} \\to \\dfrac{N_0}{4} \\to \\dfrac{N_0}{8}$, quel que soit l\'instant de départ choisi.',
          'La courbe se rapproche de l\'axe des temps sans jamais l\'atteindre : en théorie, il reste toujours une petite quantité de noyaux non désintégrés, aussi longtemps que $t$ reste fini.',
          'La demi-vie $t_{1/2}$ est une propriété <strong>caractéristique</strong> de chaque type de noyau radioactif, indépendante de la quantité initiale $N_0$.'
        ],
        reading: 'Repère $N_0$ à $t=0$, puis suis la courbe jusqu\'au point marqué à $t_{1/2}$ (la moitié de $N_0$), puis jusqu\'aux points suivants à $2t_{1/2}$ et $3t_{1/2}$, où le nombre de noyaux est à nouveau divisé par deux à chaque fois.',
        caption: 'Courbe de décroissance radioactive $N(t) = N_0 e^{-\\lambda t}$ : le nombre de noyaux est divisé par deux à chaque demi-vie écoulée.'
      },
      example: {
        statement: 'Le carbone 14 ($^{14}_6C$) est un noyau radioactif de demi-vie $t_{1/2} = 5\\,730$ ans, utilisé pour la datation d\'objets organiques anciens. Un échantillon contient initialement $N_0 = 8{,}0\\times10^{10}$ noyaux de carbone 14.<br/><br/>Calculer la constante radioactive $\\lambda$ du carbone 14, puis le nombre de noyaux restants après une durée $t = 11\\,460$ ans.',
        steps: [
          'Constante radioactive : $\\lambda = \\dfrac{\\ln 2}{t_{1/2}} = \\dfrac{0{,}693}{5\\,730} \\approx 1{,}21\\times10^{-4}$ an$^{-1}$.',
          'On remarque que $t = 11\\,460$ ans $= 2 \\times 5\\,730$ ans $= 2 \\times t_{1/2}$ : la durée écoulée correspond exactement à <strong>deux demi-vies</strong>.',
          'Après deux demi-vies, le nombre de noyaux restants est divisé par $2^2 = 4$ : $N(t) = \\dfrac{N_0}{4} = \\dfrac{8{,}0\\times10^{10}}{4} = 2{,}0\\times10^{10}$ noyaux.',
          'Vérification avec la formule exponentielle : $N(t) = N_0\\,e^{-\\lambda t} = 8{,}0\\times10^{10} \\times e^{-1{,}21\\times10^{-4}\\times11\\,460} \\approx 8{,}0\\times10^{10} \\times e^{-1{,}39} \\approx 2{,}0\\times10^{10}$ noyaux. Les deux méthodes concordent.'
        ],
        answer: '$\\lambda \\approx 1{,}21\\times10^{-4}$ an$^{-1}$ et $N(t) \\approx 2{,}0\\times10^{10}$ noyaux après $11\\,460$ ans, soit un quart de la quantité initiale. C\'est en mesurant cette proportion restante que les archéologues déterminent l\'âge d\'un échantillon organique.'
      },
      formulas: [
        'Loi de décroissance radioactive : $N(t) = N_0 \\, e^{-\\lambda t}$',
        'Relation demi-vie / constante radioactive : $t_{1/2} = \\dfrac{\\ln 2}{\\lambda} \\approx \\dfrac{0{,}693}{\\lambda}$',
        'Activité : $A(t) = \\lambda N(t) = A_0 \\, e^{-\\lambda t}$, en becquerels (Bq)',
        'Après $k$ demi-vies exactement : $N(t) = \\dfrac{N_0}{2^k}$',
        'Conservation lors d\'une réaction nucléaire : conservation du nombre de masse $A$ et du numéro atomique $Z$'
      ],
      recap: [
        'Un noyau radioactif se désintègre spontanément en émettant un rayonnement $\\alpha$, $\\beta^-$ ou $\\beta^+$, en respectant les <strong>lois de conservation</strong> de $A$ et $Z$.',
        'Le nombre de noyaux restants suit une <strong>décroissance exponentielle</strong> $N(t) = N_0 e^{-\\lambda t}$, jamais une décroissance linéaire.',
        'La <strong>demi-vie</strong> $t_{1/2} = \\dfrac{\\ln 2}{\\lambda}$ est <strong>caractéristique</strong> du noyau, indépendante de la quantité initiale de matière.',
        'Après $k$ demi-vies exactement, il reste toujours $\\dfrac{N_0}{2^k}$ noyaux : un raccourci de calcul très utile quand $t$ est un multiple de $t_{1/2}$.'
      ],
      piege: 'Une erreur fréquente est de croire que la demi-vie dépend de la quantité initiale $N_0$ ou qu\'un échantillon serait « complètement désintégré » après $2\\times t_{1/2}$ : la décroissance exponentielle ne s\'annule jamais réellement, seule la proportion restante est divisée par deux à chaque demi-vie. Attention aussi à ne pas mélanger la <strong>demi-vie</strong> $t_{1/2}$ (une durée fixe, en années ou en secondes) avec la <strong>constante radioactive</strong> $\\lambda$ (une probabilité de désintégration par unité de temps) : ce sont deux grandeurs reliées mais distinctes.'
    },

    quiz: [
      {
        q: 'Un échantillon radioactif a une demi-vie $t_{1/2} = 10$ jours et contient initialement $N_0 = 4{,}0\\times10^{8}$ noyaux. Combien reste-t-il de noyaux après $20$ jours ?',
        options: [
          '$2{,}0\\times10^{8}$ noyaux',
          '$1{,}0\\times10^{8}$ noyaux',
          '$0$ noyau',
          '$4{,}0\\times10^{8}$ noyaux (inchangé)'
        ],
        answer: 1,
        correction: '$20$ jours $= 2 \\times t_{1/2}$ : le nombre de noyaux est divisé par $2^2 = 4$. $N = \\dfrac{4{,}0\\times10^8}{4} = 1{,}0\\times10^8$ noyaux.'
      },
      {
        q: 'Que se conserve toujours lors d\'une réaction nucléaire (désintégration $\\alpha$, $\\beta^-$ ou $\\beta^+$) ?',
        options: [
          'Uniquement le nombre de masse $A$',
          'Uniquement le numéro atomique $Z$',
          'Le nombre de masse $A$ et le numéro atomique $Z$',
          'Ni $A$ ni $Z$ ne se conservent'
        ],
        answer: 2,
        correction: 'Les lois de conservation de Soddy imposent que le nombre de masse $A$ (nucléons) <strong>et</strong> le numéro atomique $Z$ (protons) se conservent lors de toute réaction nucléaire.'
      },
      {
        q: 'Quelle relation relie la demi-vie $t_{1/2}$ à la constante radioactive $\\lambda$ ?',
        options: [
          '$t_{1/2} = \\lambda \\times \\ln 2$',
          '$t_{1/2} = \\dfrac{\\ln 2}{\\lambda}$',
          '$t_{1/2} = \\dfrac{\\lambda}{\\ln 2}$',
          '$t_{1/2} = 2\\lambda$'
        ],
        answer: 1,
        correction: 'La demi-vie est reliée à la constante radioactive par $t_{1/2} = \\dfrac{\\ln 2}{\\lambda}$, ce qui équivaut aussi à $\\lambda = \\dfrac{\\ln 2}{t_{1/2}}$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['demiVies', 'constanteLambda']);

        if (typeExo === 'demiVies') {
          var t12 = pick([2, 4, 5, 8, 10, 15, 20, 30]);
          var k = rand(1, 4);
          var tTotal = t12 * k;
          var N0 = pick([1e8, 2e8, 4e8, 5e8, 8e8, 1e9, 1.6e9]);
          var Nrestant = N0 / Math.pow(2, k);
          var expN = Math.floor(Math.log10(Nrestant));
          var mantN = parseFloat((Nrestant / Math.pow(10, expN)).toFixed(2));
          var contexte = pick([
            'un échantillon radioactif étudié en laboratoire',
            'une source utilisée pour un contrôle industriel',
            'un traceur radioactif employé en imagerie médicale',
            'un échantillon minéral analysé en géologie'
          ]);
          return {
            statement: 'Dans ' + contexte + ', un échantillon radioactif de demi-vie $t_{1/2} = ' + t12 + '$ jours contient initialement $N_0 = ' + N0.toExponential(1).replace('.', '{,}').replace('e', ' \\times 10^{').replace('+', '') + '}$ noyaux.<br/><br/>Calcule le nombre de noyaux $N$ restants après une durée $t = ' + tTotal + '$ jours (en notation scientifique).',
            answer: Nrestant,
            tolerance: Nrestant * 0.03,
            unit: '',
            hint: 'Remarque que $t = ' + k + ' \\times t_{1/2}$ : le nombre de noyaux est alors divisé par $2^{' + k + '}$.',
            solution: [
              'La durée $t = ' + tTotal + '$ jours correspond exactement à $' + k + '$ demi-vies ($t = ' + k + ' \\times t_{1/2}$).',
              'Après $' + k + '$ demi-vies, le nombre de noyaux est divisé par $2^{' + k + '} = ' + Math.pow(2, k) + '$.',
              'Résultat : $N = \\dfrac{N_0}{' + Math.pow(2, k) + '} \\approx ' + fr(mantN, 2) + ' \\times 10^{' + expN + '}$ noyaux.'
            ]
          };
        } else {
          var t12b = pick([3, 6, 8, 12, 15, 20, 25, 50]);
          var lambda = Math.log(2) / t12b;
          var expL = Math.floor(Math.log10(lambda));
          var mantL = parseFloat((lambda / Math.pow(10, expL)).toFixed(2));
          var contexte2 = pick([
            'un radionucléide médical à courte durée de vie',
            'une source radioactive de laboratoire',
            'un isotope utilisé pour un traceur industriel',
            'un échantillon étudié en cours de physique nucléaire'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', un noyau radioactif a une demi-vie $t_{1/2} = ' + t12b + '$ heures.<br/><br/>Calcule sa constante radioactive $\\lambda$ (en h$^{-1}$, notation scientifique).',
            answer: lambda,
            tolerance: lambda * 0.03,
            unit: 'h⁻¹',
            hint: 'Utilise $\\lambda = \\dfrac{\\ln 2}{t_{1/2}}$, avec $\\ln 2 \\approx 0{,}693$.',
            solution: [
              'Formule : $\\lambda = \\dfrac{\\ln 2}{t_{1/2}} = \\dfrac{0{,}693}{' + t12b + '}$.',
              'Résultat : $\\lambda \\approx ' + fr(mantL, 2) + ' \\times 10^{' + expL + '}$ h$^{-1}$.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'L\'iode 131 ($^{131}_{53}I$), utilisé en médecine nucléaire, est un noyau radioactif $\\beta^-$ de demi-vie $t_{1/2} = 8{,}0$ jours. Un patient reçoit une dose contenant initialement $N_0 = 2{,}0\\times10^{16}$ noyaux d\'iode 131.',
      tasks: [
        'Écrire l\'équation de désintégration $\\beta^-$ de l\'iode 131, sachant que le noyau fils obtenu est le xénon ($Xe$, $Z=54$), en identifiant le nombre de masse et le numéro atomique de la particule émise.',
        'Calculer la constante radioactive $\\lambda$ de l\'iode 131 (en jour$^{-1}$).',
        'Calculer le nombre de noyaux d\'iode 131 restants après $t = 24$ jours.'
      ],
      solutions: [
        'La désintégration $\\beta^-$ correspond à l\'émission d\'un électron $^{0}_{-1}e$. Les lois de conservation imposent : $A$ conservé donc le xénon formé a le même nombre de masse $131$, et $Z$ conservé donc $53 = 54 + (-1)$ (le numéro atomique augmente de 1 car un neutron se transforme en proton). Équation : $^{131}_{53}I \\rightarrow \\,^{131}_{54}Xe + \\,^{0}_{-1}e$.',
        '$\\lambda = \\dfrac{\\ln 2}{t_{1/2}} = \\dfrac{0{,}693}{8{,}0} \\approx 0{,}0866$ jour$^{-1}$.',
        'On remarque que $t = 24$ jours $= 3 \\times 8{,}0$ jours $= 3 \\times t_{1/2}$ : le nombre de noyaux restants est divisé par $2^3 = 8$. $N(t) = \\dfrac{N_0}{8} = \\dfrac{2{,}0\\times10^{16}}{8} = 2{,}5\\times10^{15}$ noyaux.'
      ],
      finalAnswer: 'Équation de désintégration : $^{131}_{53}I \\rightarrow \\,^{131}_{54}Xe + \\,^{0}_{-1}e$, avec $\\lambda \\approx 0{,}0866$ jour$^{-1}$, et $N(24\\text{ j}) \\approx 2{,}5\\times10^{15}$ noyaux restants (un huitième de la dose initiale). Cette décroissance rapide explique pourquoi l\'iode 131 est particulièrement adapté à un usage médical de courte durée.'
    },

    evaluation: {
      title: 'Évaluation — Radioactivité et réactions nucléaires',
      duration: '30 min',
      questions: [
        {
          statement: 'Un échantillon a $N_0 = 6{,}0\\times10^{10}$ noyaux et une demi-vie $t_{1/2}=5$ ans. Combien reste-t-il de noyaux après $15$ ans (en notation scientifique) ?',
          type: 'numeric',
          answer: 7.5e9,
          tolerance: 0.5e9,
          unit: '',
          points: 3,
          correction: '$15$ ans $= 3\\times t_{1/2}$, donc $N = \\dfrac{N_0}{2^3} = \\dfrac{6{,}0\\times10^{10}}{8} = 7{,}5\\times10^{9}$ noyaux.'
        },
        {
          statement: 'Lors d\'une désintégration $\\alpha$, le noyau émis est :',
          type: 'multiple-choice',
          options: [
            'Un électron $^{0}_{-1}e$',
            'Un noyau d\'hélium $^{4}_{2}He$',
            'Un positon $^{0}_{+1}e$',
            'Un photon $\\gamma$ uniquement'
          ],
          answer: 1,
          points: 2,
          correction: 'La radioactivité $\\alpha$ correspond à l\'émission d\'un noyau d\'hélium $^{4}_{2}He$ (deux protons et deux neutrons).'
        },
        {
          statement: 'Un noyau a une constante radioactive $\\lambda = 0{,}0231$ an$^{-1}$. Calculer sa demi-vie $t_{1/2}$ (en années, arrondie à l\'unité).',
          type: 'numeric',
          answer: 30,
          tolerance: 1,
          unit: 'ans',
          points: 2,
          correction: '$t_{1/2} = \\dfrac{\\ln 2}{\\lambda} = \\dfrac{0{,}693}{0{,}0231} \\approx 30$ ans.'
        },
        {
          statement: 'Dans une réaction nucléaire, si le nombre de masse total avant réaction est $A=238$ et que l\'un des produits a $A=234$, quel est le nombre de masse de l\'autre produit émis ?',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Par conservation du nombre de masse, $238 = 234 + A_{émis}$, donc $A_{émis} = 4$ (cohérent avec l\'émission d\'une particule $\\alpha$).'
        },
        {
          statement: 'La demi-vie d\'un noyau radioactif :',
          type: 'multiple-choice',
          options: [
            'Dépend de la quantité initiale de matière $N_0$',
            'Est une caractéristique du noyau, indépendante de $N_0$',
            'Diminue si $N_0$ augmente',
            'N\'a pas de sens physique précis'
          ],
          answer: 1,
          points: 2,
          correction: 'La demi-vie est une propriété caractéristique du type de noyau considéré : elle ne dépend absolument pas de la quantité de matière initiale $N_0$.'
        }
      ]
    }
  });
