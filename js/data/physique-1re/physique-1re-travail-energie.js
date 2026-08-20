/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-travail-energie.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-travail-energie',
    level: 2, subject: 'physique',
    icon: '🎢',
    title: 'Travail d\'une force et énergie',
    subtitle: 'Travail moteur/résistant, énergie cinétique, énergie potentielle de pesanteur, conservation de l\'énergie mécanique',
    keywords: ['Travail', 'Énergie cinétique', 'Énergie potentielle', 'Énergie mécanique', 'Théorème de l\'énergie cinétique'],
    physics: 'Ces notions permettent de calculer la vitesse d\'un skieur au bas d\'une piste, de dimensionner le freinage d\'une montagne russe, d\'évaluer l\'énergie dissipée par les frottements dans un mécanisme, et de comprendre pourquoi un satellite en orbite circulaire conserve une vitesse constante malgré l\'attraction terrestre permanente.',

    cours: {
      intro: 'Le <strong>travail</strong> d\'une force constante $\\vec{F}$ lors d\'un déplacement $\\vec{d}$ mesure l\'énergie qu\'elle transfère au système : $W(\\vec F) = \\vec F \\cdot \\vec d = F \\times d \\times \\cos\\theta$, où $\\theta$ est l\'angle entre la force et le déplacement. Ce travail est <strong>moteur</strong> ($W>0$) si la force favorise le mouvement, <strong>résistant</strong> ($W<0$) si elle s\'y oppose, et <strong>nul</strong> si elle lui est perpendiculaire.<br/><br/>Le poids a un travail particulièrement simple : $W(\\vec P) = \\pm mgh$, où $h$ est la différence de hauteur — <strong>indépendant du chemin parcouru</strong>. Le <strong>théorème de l\'énergie cinétique</strong> relie le travail des forces à la variation de vitesse : $\\Delta E_c = \\sum W(\\vec F)$, avec $E_c = \\dfrac{1}{2}mv^2$.<br/><br/>Lorsqu\'aucun frottement n\'agit, seul le poids travaille : l\'<strong>énergie mécanique</strong> $E_m = E_c + E_p$ (avec $E_p = mgz$ l\'énergie potentielle de pesanteur) se <strong>conserve</strong> tout au long du mouvement — toute perte d\'énergie potentielle se retrouve intégralement en énergie cinétique, et réciproquement.',
      definitions: [
        { term: 'Travail d\'une force constante ($W$)', def: '$W(\\vec F) = F\\times d\\times\\cos\\theta$, en joules (J), où $\\theta$ est l\'angle entre la force $\\vec F$ et le déplacement $\\vec d$. Moteur si $W>0$, résistant si $W<0$, nul si la force est perpendiculaire au déplacement.' },
        { term: 'Énergie cinétique ($E_c$)', def: '$E_c = \\dfrac{1}{2}mv^2$, en joules (J) : énergie associée au mouvement d\'un système de masse $m$ et de vitesse $v$.' },
        { term: 'Théorème de l\'énergie cinétique', def: 'Entre deux instants, la variation d\'énergie cinétique d\'un système est égale à la somme des travaux des forces qui s\'exercent sur lui : $\\Delta E_c = E_{c,f} - E_{c,i} = \\sum W(\\vec F)$.' },
        { term: 'Énergie potentielle de pesanteur et énergie mécanique', def: '$E_p = mgz$ (altitude $z$). L\'énergie mécanique $E_m = E_c + E_p$ se <strong>conserve</strong> en l\'absence de frottement (seul le poids travaille).' }
      ],
      method: {
        title: 'Résoudre un problème de travail et d\'énergie en 3 étapes',
        steps: [
          '<strong>Identifier les forces</strong> qui s\'exercent sur le système et calculer leur travail individuel $W(\\vec F) = F\\times d\\times\\cos\\theta$ — en faisant particulièrement attention au signe (moteur, résistant ou nul selon l\'angle avec le déplacement).',
          '<strong>Appliquer le théorème de l\'énergie cinétique</strong> $\\Delta E_c = \\sum W(\\vec F)$ pour relier les vitesses initiale et finale aux travaux, <strong>ou</strong> utiliser la <strong>conservation de l\'énergie mécanique</strong> $E_m = \\text{constante}$ si aucun frottement n\'agit (plus rapide, mais valable seulement sans frottement).',
          '<strong>Isoler la grandeur cherchée</strong> (vitesse, hauteur, distance...) à partir de la relation obtenue, en n\'oubliant pas que $E_c = \\dfrac{1}{2}mv^2$ nécessite souvent une racine carrée pour retrouver $v$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Conservation de l\'énergie mécanique (plan incliné sans frottement)',
        title: 'Énergie cinétique, potentielle et mécanique en fonction de la position',
        description: 'Un solide glisse sans frottement le long d\'un plan incliné. L\'énergie potentielle $E_p$ diminue exactement de ce que l\'énergie cinétique $E_c$ augmente : leur somme, l\'énergie mécanique $E_m$, reste <strong>constante</strong> tout au long de la descente.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="energie-title energie-desc">
            <title id="energie-title">Evolution des energies cinetique, potentielle et mecanique le long d'un plan incline sans frottement</title>
            <desc id="energie-desc">Un graphique represente l'energie en joules sur l'axe vertical et la position sur le plan incline en metres sur l'axe horizontal. La courbe de l'energie potentielle Ep decroit lineairement de 100 joules a 0 joule. La courbe de l'energie cinetique Ec croit lineairement de 0 a 100 joules, croisant la courbe Ep exactement a mi-parcours ou les deux valent 50 joules chacune. Une droite horizontale representant l'energie mecanique Em reste constante a 100 joules sur toute la largeur du graphique, confirmant que la somme Ec plus Ep est invariante.</desc>

            <defs>
              <marker id="arrow-phy1re-energie" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="70" y1="260" x2="70" y2="35" marker-end="url(#arrow-phy1re-energie)"></line>
            <line class="frame-line" x1="60" y1="250" x2="515" y2="250" marker-end="url(#arrow-phy1re-energie)"></line>
            <text class="tick-label" x="70" y="26" text-anchor="middle">E (J)</text>
            <text class="tick-label" x="510" y="238" text-anchor="end">s (m)</text>

            <!-- graduations axe E -->
            <line class="grid-line" x1="66" y1="150" x2="74" y2="150"></line>
            <text class="tick-label" x="58" y="154" text-anchor="end">50</text>
            <line class="grid-line" x1="66" y1="50" x2="74" y2="50"></line>
            <text class="tick-label" x="58" y="54" text-anchor="end">100</text>

            <!-- graduations axe s -->
            <line class="grid-line" x1="285" y1="246" x2="285" y2="254"></line>
            <text class="tick-label" x="285" y="266" text-anchor="middle">5</text>
            <line class="grid-line" x1="500" y1="246" x2="500" y2="254"></line>
            <text class="tick-label" x="500" y="266" text-anchor="middle">10</text>

            <!-- Em : droite horizontale constante -->
            <line class="frame-line" x1="70" y1="50" x2="500" y2="50"></line>
            <text class="annotation-label" x="230" y="40" text-anchor="middle">Em</text>

            <!-- Ep : decroissante -->
            <path class="curve-main" fill="none" d="M70,50 L177.5,100 L285,150 L392.5,200 L500,250"></path>
            <circle class="plot-point" cx="70" cy="50" r="4"></circle>
            <circle class="plot-point" cx="177.5" cy="100" r="4"></circle>
            <circle class="plot-point" cx="285" cy="150" r="4"></circle>
            <circle class="plot-point" cx="392.5" cy="200" r="4"></circle>
            <circle class="plot-point" cx="500" cy="250" r="4"></circle>
            <text class="annotation-label" x="145" y="88" text-anchor="middle">Ep</text>

            <!-- Ec : croissante -->
            <path class="guide-line" fill="none" d="M70,250 L177.5,200 L285,150 L392.5,100 L500,50"></path>
            <circle class="plot-point-alt" cx="70" cy="250" r="4"></circle>
            <circle class="plot-point-alt" cx="177.5" cy="200" r="4"></circle>
            <circle class="plot-point-alt" cx="285" cy="150" r="4"></circle>
            <circle class="plot-point-alt" cx="392.5" cy="100" r="4"></circle>
            <circle class="plot-point-alt" cx="500" cy="50" r="4"></circle>
            <text class="annotation-label" x="405" y="88" text-anchor="middle">Ec</text>
          </svg>
        `,
        notes: [
          'La droite $E_m$ (énergie mécanique) reste <strong>horizontale</strong> : elle ne varie pas, car aucun frottement ne dissipe d\'énergie.',
          'À mi-parcours, les deux courbes $E_p$ et $E_c$ se <strong>croisent exactement</strong> : à cet instant, l\'énergie potentielle et l\'énergie cinétique sont égales, chacune valant la moitié de $E_m$.',
          'À chaque position, $E_p + E_c = E_m$ : ce que perd l\'énergie potentielle est intégralement transféré à l\'énergie cinétique — c\'est la signature d\'un mouvement <strong>sans frottement</strong>.'
        ],
        reading: 'Suis la droite $E_p$ qui descend de $100$ à $0$ J, et la droite $E_c$ qui monte de $0$ à $100$ J : leur somme, représentée par la droite horizontale $E_m$, reste constante à $100$ J sur tout le parcours.',
        caption: 'Le long d\'un plan incliné sans frottement, l\'énergie potentielle $E_p$ se transforme intégralement en énergie cinétique $E_c$ : leur somme, l\'énergie mécanique $E_m$, reste constante.'
      },
      diagrams: [
        {
          theme: 'physique',
          kicker: 'Travail d\'une force : moteur, nul ou résistant selon l\'angle θ',
          title: 'Trois cas de figure pour W(F) = F × d × cos θ',
          description: 'Le schéma ci-dessus illustre la <strong>conservation de l\'énergie</strong>, mais pas le <strong>travail</strong> lui-même — la toute première notion du chapitre. Le travail d\'une force constante dépend uniquement de l\'angle $\\theta$ entre $\\vec{F}$ et le déplacement $\\vec{d}$ : <strong>moteur</strong> si $\\theta=0°$, <strong>nul</strong> si $\\theta=90°$, <strong>résistant</strong> si $\\theta=180°$.',
          svg: `
            <svg viewBox="0 0 560 300" role="img" aria-labelledby="energie-travail-title energie-travail-desc">
              <title id="energie-travail-title">Travail d'une force selon l'angle entre la force et le deplacement</title>
              <desc id="energie-travail-desc">Trois situations cote a cote, separees par des pointilles verticaux. Dans chacune, un petit carre figure un objet, avec une fleche de deplacement d horizontale vers la droite en dessous. A gauche, la force F est horizontale et pointe dans le meme sens que le deplacement : le travail est moteur. Au centre, la force F est verticale, perpendiculaire au deplacement, avec un petit angle droit code a leur intersection : le travail est nul. A droite, la force F est horizontale mais pointe en sens oppose au deplacement : le travail est resistant.</desc>

              <defs>
                <marker id="arrow-phy1re-travail" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- separateurs -->
              <line class="guide-line" x1="187" y1="40" x2="187" y2="270"></line>
              <line class="guide-line" x1="373" y1="40" x2="373" y2="270"></line>

              <!-- PANNEAU 1 : moteur (theta = 0 deg) -->
              <rect class="frame-line" x="82" y="155" width="30" height="30" fill="none"></rect>
              <circle class="plot-point" cx="97" cy="170" r="3"></circle>
              <line class="frame-line" x1="67" y1="230" x2="127" y2="230" marker-end="url(#arrow-phy1re-travail)"></line>
              <text class="tick-label" x="97" y="248" text-anchor="middle">d</text>
              <line class="curve-main" x1="97" y1="170" x2="157" y2="170" marker-end="url(#arrow-phy1re-travail)"></line>
              <text class="annotation-label" x="167" y="166" text-anchor="start">F</text>
              <text class="label-soft" x="97" y="266" text-anchor="middle">moteur (θ = 0°)</text>

              <!-- PANNEAU 2 : nul (theta = 90 deg) -->
              <rect class="frame-line" x="265" y="155" width="30" height="30" fill="none"></rect>
              <circle class="plot-point" cx="280" cy="170" r="3"></circle>
              <line class="frame-line" x1="250" y1="230" x2="310" y2="230" marker-end="url(#arrow-phy1re-travail)"></line>
              <text class="tick-label" x="280" y="248" text-anchor="middle">d</text>
              <line class="guide-line" x1="280" y1="170" x2="320" y2="170"></line>
              <polyline points="290,170 290,160 280,160" class="frame-line" fill="none"></polyline>
              <line class="curve-main" x1="280" y1="170" x2="280" y2="110" marker-end="url(#arrow-phy1re-travail)"></line>
              <text class="annotation-label" x="280" y="90" text-anchor="middle">F</text>
              <text class="label-soft" x="280" y="266" text-anchor="middle">nul (θ = 90°)</text>

              <!-- PANNEAU 3 : resistant (theta = 180 deg) -->
              <rect class="frame-line" x="448" y="155" width="30" height="30" fill="none"></rect>
              <circle class="plot-point" cx="463" cy="170" r="3"></circle>
              <line class="frame-line" x1="433" y1="230" x2="493" y2="230" marker-end="url(#arrow-phy1re-travail)"></line>
              <text class="tick-label" x="463" y="248" text-anchor="middle">d</text>
              <line class="curve-main" x1="463" y1="170" x2="403" y2="170" marker-end="url(#arrow-phy1re-travail)"></line>
              <text class="annotation-label" x="393" y="166" text-anchor="end">F</text>
              <text class="label-soft" x="463" y="266" text-anchor="middle">résistant (θ = 180°)</text>
            </svg>
          `,
          notes: [
            'Panneau de gauche ($\\theta=0°$) : $\\vec{F}$ et $\\vec{d}$ pointent dans le <strong>même sens</strong> : $\\cos\\theta=\\cos(0°)=1$, donc $W=F\\times d>0$ — le travail est <strong>moteur</strong>.',
            'Panneau du centre ($\\theta=90°$, angle droit codé) : $\\vec{F}$ est <strong>perpendiculaire</strong> à $\\vec{d}$ : $\\cos\\theta=\\cos(90°)=0$, donc $W=0$ quelle que soit l\'intensité de $F$ — c\'est le piège classique à éviter.',
            'Panneau de droite ($\\theta=180°$) : $\\vec{F}$ pointe en <strong>sens opposé</strong> à $\\vec{d}$ : $\\cos\\theta=\\cos(180°)=-1$, donc $W=-F\\times d<0$ — le travail est <strong>résistant</strong>.'
          ],
          reading: 'Dans les trois panneaux, le déplacement $\\vec{d}$ (flèche du bas) pointe toujours vers la droite : seul l\'angle de $\\vec{F}$ change d\'un panneau à l\'autre, ce qui suffit à faire basculer le travail de moteur à nul puis à résistant.',
          caption: 'Le signe du travail $W(\\vec{F})=F\\times d\\times\\cos\\theta$ dépend uniquement de l\'angle $\\theta$ entre la force et le déplacement : moteur ($\\theta=0°$), nul ($\\theta=90°$), résistant ($\\theta=180°$).'
        }
      ],
      example: {
        statement: 'Un solide de masse $m = 2$ kg part sans vitesse initiale du sommet d\'un plan incliné sans frottement, à une hauteur $h_0 = 5$ m. On prend $g = 10$ m/s².<br/><br/>En utilisant la conservation de l\'énergie mécanique, calculer la vitesse $v$ du solide au bas du plan incliné.',
        steps: [
          'Aucun frottement ⟹ seul le poids travaille ⟹ l\'énergie mécanique $E_m = E_c + E_p$ se <strong>conserve</strong> tout au long de la descente.',
          'État initial (sommet, vitesse nulle) : $E_{c,i} = 0$ et $E_{p,i} = mgh_0 = 2\\times10\\times5 = 100$ J, donc $E_m = 100$ J.',
          'État final (bas du plan, altitude nulle) : $E_{p,f} = 0$, donc $E_{c,f} = E_m = 100$ J : toute l\'énergie potentielle s\'est transformée en énergie cinétique.',
          'Or $E_{c,f} = \\dfrac{1}{2}mv^2$, donc $v = \\sqrt{\\dfrac{2E_{c,f}}{m}} = \\sqrt{\\dfrac{2\\times100}{2}} = \\sqrt{100} = 10$ m/s.'
        ],
        answer: '$v = 10$ m/s au bas du plan incliné. Ce résultat ne dépend ni de la longueur du plan incliné, ni de son angle : seule la hauteur de chute $h_0$ compte, tant qu\'il n\'y a pas de frottement.'
      },
      formulas: [
        'Travail d\'une force constante : $W(\\vec F) = \\vec F \\cdot \\vec d = F \\times d \\times \\cos\\theta$',
        'Travail du poids : $W(\\vec P) = \\pm mgh$ (indépendant du chemin suivi)',
        'Théorème de l\'énergie cinétique : $\\Delta E_c = \\sum W(\\vec F)$',
        'Énergie cinétique : $E_c = \\dfrac{1}{2}mv^2$ ; Énergie potentielle de pesanteur : $E_p = mgz$',
        'Énergie mécanique : $E_m = E_c+E_p$, conservée en l\'absence de frottement'
      ],
      recap: [
        'Le travail d\'une force est <strong>moteur</strong> si elle accompagne le mouvement, <strong>résistant</strong> si elle s\'y oppose, et <strong>nul</strong> si elle est perpendiculaire au déplacement.',
        'Le travail du poids ne dépend que de la différence de hauteur, jamais du chemin parcouru : $W(\\vec P) = \\pm mgh$.',
        'Le théorème de l\'énergie cinétique $\\Delta E_c = \\sum W(\\vec F)$ relie le travail des forces à la variation de vitesse.',
        'En l\'absence de frottement, l\'énergie mécanique $E_m = E_c+E_p$ se conserve : toute perte d\'énergie potentielle se retrouve intégralement en énergie cinétique.'
      ],
      piege: 'Une erreur fréquente est de croire qu\'une force très intense fournit forcément un travail important, en oubliant le facteur $\\cos\\theta$ dans $W(\\vec F) = F\\times d\\times\\cos\\theta$. Attention : une force <strong>perpendiculaire</strong> au déplacement, comme la réaction normale d\'un support ou la tension centripète d\'une trajectoire circulaire, a un travail rigoureusement <strong>nul</strong>, quelle que soit son intensité.'
    },

    quiz: [
      {
        q: 'Un objet glisse le long d\'un plan incliné, du haut vers le bas. Le travail du poids pendant cette descente est :',
        options: [
          'Moteur, car le poids favorise le déplacement vers le bas',
          'Résistant, car le poids s\'oppose toujours au mouvement',
          'Nul, car le poids est vertical alors que le plan est incliné',
          'Impossible à déterminer sans connaître l\'angle du plan'
        ],
        answer: 0,
        correction: 'Lors d\'une descente, le déplacement a une composante dans le sens du poids : le travail $W(\\vec P) = +mgh$ est donc <strong>moteur</strong>, quel que soit l\'angle précis du plan (seule l\'intensité du travail dépend de la hauteur $h$, pas son signe).'
      },
      {
        q: 'Une force $F = 20$ N s\'exerce perpendiculairement à un déplacement $d = 5$ m. Quel est le travail de cette force ?',
        options: [
          '0 J',
          '100 J',
          '4 J',
          '25 J'
        ],
        answer: 0,
        correction: '$W = F\\times d\\times\\cos(90°) = F\\times d\\times 0 = 0$ J : une force perpendiculaire au déplacement a toujours un travail nul, indépendamment de son intensité.'
      },
      {
        q: 'Un objet initialement au repos est soumis à des forces dont le travail total vaut $W = 50$ J entre deux instants. D\'après le théorème de l\'énergie cinétique, son énergie cinétique finale est :',
        options: [
          '50 J',
          '25 J',
          '100 J',
          'Impossible à déterminer sans connaître la masse'
        ],
        answer: 0,
        correction: '$\\Delta E_c = \\sum W = 50$ J. Comme $E_{c,i}=0$ (objet initialement au repos), $E_{c,f} = E_{c,i}+\\Delta E_c = 0+50 = 50$ J — pas besoin de connaître la masse séparément puisque la question porte directement sur l\'énergie.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['travail', 'energie']);

        if (typeExo === 'travail') {
          var F = pick([10, 15, 20, 25, 30, 40, 50, 80, 100]);
          var d = pick([2, 3, 4, 5, 6, 8, 10]);
          var theta = pick([0, 30, 45, 60, 90, 120, 150, 180]);
          var W = F * d * Math.cos(theta * Math.PI / 180);
          var Wround = parseFloat(W.toFixed(1));
          var tol = parseFloat(Math.max(0.5, Math.abs(Wround) * 0.05).toFixed(1));
          var contexte = pick([
            'une valise tirée par une poignée inclinée',
            'un traîneau tracté par une corde oblique',
            'une caisse poussée sur un quai',
            'un chariot tiré en biais',
            'une luge tractée sur la neige'
          ]);
          var nature = Wround > 0.05 ? 'un travail moteur (positif)' : (Wround < -0.05 ? 'un travail résistant (négatif)' : 'un travail nul (force perpendiculaire au déplacement)');
          return {
            statement: 'Dans le cas de ' + contexte + ', une force constante $F = ' + F + '$ N fait un angle $\\theta = ' + theta + '°$ avec un déplacement $d = ' + d + '$ m.<br/><br/>Calcule le travail $W(\\vec F)$ de cette force (en J, arrondi au dixième).',
            answer: Wround,
            tolerance: tol,
            unit: 'J',
            hint: 'Utilise $W(\\vec F) = F\\times d\\times\\cos\\theta$, avec $\\theta$ l\'angle entre la force et le déplacement.',
            solution: [
              'Formule du travail d\'une force constante : $W(\\vec F) = F\\times d\\times\\cos\\theta$.',
              'Application numérique : $W = ' + F + '\\times' + d + '\\times\\cos(' + theta + '°)$.',
              'Résultat : $W \\approx ' + fr(Wround, 1) + '$ J, soit ' + nature + '.'
            ]
          };
        } else {
          var m = pick([0.5, 1, 1.5, 2, 3, 4, 5, 8, 10]);
          var h0 = pick([1, 1.5, 2, 3, 4, 5, 6, 8, 10]);
          var g = 10;
          var v = Math.sqrt(2 * g * h0);
          var vround = parseFloat(v.toFixed(2));
          var tol2 = parseFloat(Math.max(0.05, vround * 0.03).toFixed(2));
          var contexte2 = pick([
            'un skieur au sommet d\'une piste sans frottement (modèle idéalisé)',
            'une bille lâchée en haut d\'une rampe',
            'un chariot de montagnes russes en haut d\'une descente',
            'un solide sur un plan incliné lisse de laboratoire'
          ]);
          return {
            statement: 'Dans le cas simplifié (sans frottement) de ' + contexte2 + ', un système de masse $m = ' + fr(m, 1) + '$ kg part sans vitesse initiale d\'une hauteur $h_0 = ' + fr(h0, 1) + '$ m (on prend $g = 10$ m/s²).<br/><br/>En utilisant la conservation de l\'énergie mécanique, calcule la vitesse $v$ atteinte en bas (en m/s, arrondie au centième).',
            answer: vround,
            tolerance: tol2,
            unit: 'm/s',
            hint: 'Sans frottement, $E_m$ se conserve : $mgh_0 = \\dfrac{1}{2}mv^2$, donc $v=\\sqrt{2gh_0}$ (la masse se simplifie).',
            solution: [
              'Conservation de l\'énergie mécanique (pas de frottement) : $E_{p,i} = E_{c,f}$, soit $mgh_0 = \\dfrac{1}{2}mv^2$.',
              'La masse $m$ se simplifie des deux côtés : $v = \\sqrt{2gh_0} = \\sqrt{2\\times10\\times' + fr(h0, 1) + '}$.',
              'Résultat : $v \\approx ' + fr(vround, 2) + '$ m/s.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un solide de masse $m = 5$ kg est lancé vers le haut d\'un plan incliné rugueux avec une vitesse initiale $v_0 = 8$ m/s. Le long de son parcours, il s\'élève d\'une hauteur $h = 2{,}0$ m avant de s\'arrêter. Une force de frottement, de travail $W(f) = -60$ J, s\'oppose au mouvement pendant toute la montée (on prend $g = 10$ m/s²).',
      tasks: [
        'Calculer l\'énergie cinétique initiale $E_{c,i}$ du solide.',
        'Calculer le travail du poids $W(\\vec P)$ pendant la montée.',
        'À l\'aide du théorème de l\'énergie cinétique, calculer l\'énergie cinétique finale $E_{c,f}$ du solide, et vérifier qu\'il s\'arrête bien au sommet de sa montée.'
      ],
      solutions: [
        '$E_{c,i} = \\dfrac{1}{2}mv_0^2 = \\dfrac{1}{2}\\times5\\times8^2 = \\dfrac{1}{2}\\times5\\times64 = 160$ J.',
        '$W(\\vec P) = -mgh = -5\\times10\\times2{,}0 = -100$ J (travail résistant, car le solide s\'élève).',
        'Théorème de l\'énergie cinétique : $\\Delta E_c = W(\\vec P) + W(f) = -100 + (-60) = -160$ J. Donc $E_{c,f} = E_{c,i} + \\Delta E_c = 160 - 160 = 0$ J : le solide atteint bien une vitesse nulle exactement au sommet de sa montée.'
      ],
      finalAnswer: '$E_{c,i} = 160$ J, $W(\\vec P) = -100$ J, $E_{c,f} = 0$ J : le solide s\'immobilise exactement au sommet de sa trajectoire ascendante. Contrairement au cas sans frottement (où toute l\'énergie cinétique initiale se retrouverait intégralement en énergie potentielle), une partie de l\'énergie ($60$ J) a été dissipée par les frottements : l\'énergie mécanique n\'est plus conservée.'
    },

    evaluation: {
      title: 'Évaluation — Travail d\'une force et énergie',
      duration: '30 min',
      questions: [
        {
          statement: 'Une force $F = 40$ N fait un angle $\\theta = 60°$ avec un déplacement $d = 5$ m. Calculer le travail $W(\\vec F)$ de cette force (en J, arrondi au dixième).',
          type: 'numeric',
          answer: 100,
          tolerance: 2,
          unit: 'J',
          points: 2,
          correction: '$W = F\\times d\\times\\cos\\theta = 40\\times5\\times\\cos(60°) = 200\\times0{,}5 = 100$ J.'
        },
        {
          statement: 'Un satellite en orbite circulaire autour de la Terre est soumis à la force gravitationnelle, en permanence perpendiculaire à sa vitesse. Le travail de cette force au cours d\'un tour complet est :',
          type: 'multiple-choice',
          options: [
            'Nul',
            'Maximal',
            'Négatif',
            'Positif et croissant'
          ],
          answer: 0,
          points: 2,
          correction: 'Une force perpendiculaire au déplacement à chaque instant a un travail nul : c\'est d\'ailleurs pourquoi la vitesse d\'un satellite en orbite circulaire reste constante en norme (théorème de l\'énergie cinétique : $\\Delta E_c=0$).'
        },
        {
          statement: 'Un objet de masse $m = 3$ kg se déplace à une vitesse $v = 6$ m/s. Calculer son énergie cinétique $E_c$ (en J).',
          type: 'numeric',
          answer: 54,
          tolerance: 1,
          unit: 'J',
          points: 2,
          correction: '$E_c = \\dfrac{1}{2}mv^2 = 0{,}5\\times3\\times6^2 = 0{,}5\\times3\\times36 = 54$ J.'
        },
        {
          statement: 'Un solide de masse $m = 4$ kg part sans vitesse initiale d\'une hauteur $h_0 = 3{,}0$ m sur un plan incliné sans frottement ($g = 10$ m/s²). Calculer sa vitesse $v$ au bas du plan (en m/s, arrondie au centième).',
          type: 'numeric',
          answer: 7.75,
          tolerance: 0.1,
          unit: 'm/s',
          points: 2,
          correction: 'Conservation de $E_m$ : $v = \\sqrt{2gh_0} = \\sqrt{2\\times10\\times3{,}0} = \\sqrt{60} \\approx 7{,}75$ m/s.'
        },
        {
          statement: 'D\'après le théorème de l\'énergie cinétique, si la somme des travaux des forces appliquées à un système est négative entre deux instants, alors :',
          type: 'multiple-choice',
          options: [
            'Son énergie cinétique diminue (il ralentit)',
            'Son énergie cinétique augmente',
            'Sa vitesse reste constante',
            'Sa masse diminue'
          ],
          answer: 0,
          points: 2,
          correction: '$\\Delta E_c = \\sum W(\\vec F)$ ; si $\\sum W < 0$, alors $\\Delta E_c < 0$ : l\'énergie cinétique, donc la vitesse en valeur absolue, diminue.'
        }
      ]
    }
  });
