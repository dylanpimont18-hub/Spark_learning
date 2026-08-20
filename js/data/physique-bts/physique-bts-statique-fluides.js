/* =========================================================
   Spark Learning – data/physique-bts/physique-bts-statique-fluides.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-bts-statique-fluides',
    level: 3, subject: 'physique',
    icon: '💧',
    title: 'Statique des fluides',
    subtitle: 'Pression dans un fluide au repos, principe fondamental de la statique des fluides, principe de Pascal, poussée d\'Archimède',
    keywords: ['Pression', 'PFSF', 'Pascal', 'Archimède', 'Hydrostatique'],
    physics: 'La statique des fluides explique le fonctionnement des vérins et presses hydrauliques, le dimensionnement des barrages et réservoirs, la conception des sous-marins, et la flottaison des bateaux.',

    cours: {
      intro: 'Un <strong>fluide</strong> (liquide ou gaz) au repos exerce une <strong>pression</strong> sur toute paroi ou surface en contact avec lui. La pression $P$ est définie comme le rapport d\'une force pressante $F$ (perpendiculaire à la surface) sur l\'aire $S$ de cette surface : $P = \\dfrac{F}{S}$, exprimée en pascals (Pa = N/m²).<br/><br/>Dans un fluide au repos, la pression <strong>augmente avec la profondeur</strong> : c\'est le <strong>principe fondamental de la statique des fluides</strong> (PFSF), $P = P_0 + \\rho g h$, où $\\rho$ est la masse volumique du fluide, $g$ l\'accélération de la pesanteur et $h$ la profondeur sous la surface libre.<br/><br/>Deux conséquences pratiques majeures : le <strong>principe de Pascal</strong> (une pression appliquée en un point d\'un fluide incompressible se transmet intégralement partout, ce qui permet de démultiplier une force dans une presse hydraulique) et la <strong>poussée d\'Archimède</strong> (un objet immergé subit une force verticale vers le haut égale au poids du volume de fluide déplacé).',
      definitions: [
        { term: 'Pression ($P$)', def: 'Rapport d\'une force pressante $F$ sur l\'aire $S$ de la surface sur laquelle elle s\'exerce : $P = \\dfrac{F}{S}$. Unité : le pascal (Pa = N/m²). $1$ bar $= 10^5$ Pa.' },
        { term: 'Masse volumique ($\\rho$)', def: 'Masse par unité de volume d\'un fluide : $\\rho = \\dfrac{m}{V}$, en kg/m³. Exemple : $\\rho_{\\text{eau}} = 1\\,000$ kg/m³.' },
        { term: 'PFSF', def: 'Principe fondamental de la statique des fluides : $P = P_0 + \\rho g h$, où $P_0$ est la pression à la surface libre (souvent la pression atmosphérique) et $h$ la profondeur considérée.' },
        { term: 'Poussée d\'Archimède ($\\Pi$)', def: 'Force verticale, dirigée vers le haut, subie par un objet immergé : $\\Pi = \\rho_{\\text{fluide}} \\times V_{\\text{immergé}} \\times g$. Elle est égale au poids du volume de fluide déplacé.' }
      ],
      method: {
        title: 'Résoudre un problème de statique des fluides en 3 étapes',
        steps: [
          '<strong>Identifier le fluide et la référence de pression</strong> : quelle est la masse volumique $\\rho$ ? Où se trouve la surface libre (souvent à la pression atmosphérique $P_0 \\approx 101\\,325$ Pa) ?<br/>Exemple : une piscine ouverte à l\'air libre a sa surface à $P_0$ = pression atmosphérique.',
          '<strong>Appliquer le PFSF</strong> pour calculer la pression à la profondeur souhaitée : $P = P_0 + \\rho g h$.<br/>Attention aux unités : $\\rho$ en kg/m³, $g$ en m/s², $h$ en m, pour obtenir $P$ directement en Pa.',
          'Si l\'exercice porte sur un <strong>objet immergé</strong> ou une <strong>transmission de force</strong> : calculer la poussée d\'Archimède $\\Pi = \\rho_{\\text{fluide}} V_{\\text{immergé}} g$ (et la comparer au poids), ou appliquer le principe de Pascal $\\dfrac{F_1}{S_1} = \\dfrac{F_2}{S_2}$ entre deux surfaces reliées par le même fluide.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Principe fondamental de la statique des fluides (PFSF)',
        title: 'La pression augmente linéairement avec la profondeur : $P = P_0 + \\rho g h$',
        description: 'Colonne d\'eau ouverte à l\'air libre ($\\rho = 1\\,000$ kg/m³) : à gauche, la profondeur $h$ et la pression associée en trois points repères ; à droite, le profil $P(h)$ correspondant. Les trois points sont alignés sur une droite, car $P$ est une <strong>fonction affine</strong> de $h$. Les valeurs reprennent celles de l\'exemple résolu ci-dessous (piscine de profondeur $2{,}5$ m).',
        svg: `
          <svg viewBox="0 0 680 325" role="img" aria-labelledby="pfsf-diagram-title pfsf-diagram-desc">
            <title id="pfsf-diagram-title">Profil de pression hydrostatique P(h) dans une colonne d'eau</title>
            <desc id="pfsf-diagram-desc">A gauche, une colonne d'eau ouverte a l'air libre avec trois profondeurs reperees : h=0 a la surface (pression P0), h=1,25 m (pression intermediaire) et h=2,5 m au fond, chacune associee a une fleche horizontale dont la longueur augmente avec la profondeur. A droite, le profil de pression P(h) correspondant : un graphique dont l'axe vertical represente la profondeur h croissant vers le bas et l'axe horizontal la pression P, sur lequel les trois points sont exactement alignes sur une droite, de P0 = 101325 Pa en surface jusqu'a 125850 Pa au fond, ce qui illustre que la pression est une fonction affine croissante de la profondeur.</desc>

            <defs>
              <marker id="arrow-physbts-pfsf" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- ===== Panel gauche : colonne de fluide ===== -->
            <text class="annotation-label" x="150" y="18" text-anchor="middle">Colonne de fluide (eau)</text>
            <text class="label-soft" x="150" y="34" text-anchor="middle">Air, P₀</text>

            <!-- corps du fluide -->
            <rect x="100" y="50" width="100" height="220" fill="var(--diagram-accent)" fill-opacity="0.10"></rect>

            <!-- parois et surface libre -->
            <line class="frame-line" x1="100" y1="50" x2="100" y2="270"></line>
            <line class="frame-line" x1="200" y1="50" x2="200" y2="270"></line>
            <line class="frame-line" x1="100" y1="270" x2="200" y2="270"></line>
            <line class="frame-line" x1="100" y1="50" x2="200" y2="50"></line>

            <!-- reperes de profondeur -->
            <line class="guide-line" x1="94" y1="50" x2="100" y2="50"></line>
            <line class="guide-line" x1="94" y1="160" x2="100" y2="160"></line>
            <line class="guide-line" x1="94" y1="270" x2="100" y2="270"></line>
            <text class="tick-label" x="90" y="54" text-anchor="end">h = 0</text>
            <text class="tick-label" x="90" y="164" text-anchor="end">h = 1,25 m</text>
            <text class="tick-label" x="90" y="274" text-anchor="end">h = 2,5 m</text>

            <!-- points repere sur la paroi droite -->
            <circle class="plot-point" cx="200" cy="50" r="5"></circle>
            <circle class="plot-point-alt" cx="200" cy="160" r="4"></circle>
            <circle class="plot-point" cx="200" cy="270" r="5.5"></circle>

            <!-- fleches de pression (longueur croissante avec la profondeur) -->
            <line class="curve-main" x1="200" y1="50" x2="214" y2="50" marker-end="url(#arrow-physbts-pfsf)"></line>
            <line class="curve-main" x1="200" y1="160" x2="234" y2="160" marker-end="url(#arrow-physbts-pfsf)"></line>
            <line class="curve-main" x1="200" y1="270" x2="254" y2="270" marker-end="url(#arrow-physbts-pfsf)"></line>
            <text class="annotation-label" x="218" y="44">P₀</text>
            <text class="annotation-label" x="238" y="154">P₁</text>
            <text class="annotation-label" x="258" y="264">P₂</text>

            <!-- ===== Panel droit : profil P(h) ===== -->
            <text class="annotation-label" x="470" y="18" text-anchor="middle">Profil de pression P(h)</text>

            <!-- grille de lecture -->
            <line class="grid-line" x1="345" y1="160" x2="612" y2="160"></line>
            <line class="grid-line" x1="470" y1="40" x2="470" y2="295"></line>

            <!-- axes -->
            <line class="axis" x1="345" y1="50" x2="612" y2="50" marker-end="url(#arrow-physbts-pfsf)"></line>
            <line class="axis" x1="360" y1="40" x2="360" y2="297" marker-end="url(#arrow-physbts-pfsf)"></line>
            <text class="axis-label" x="620" y="54" text-anchor="start">P (Pa)</text>
            <text class="axis-label" x="360" y="312" text-anchor="middle">h (m)</text>

            <!-- graduations profondeur (alignees avec le panel gauche) ; "0" omis : trop
                 proche du croisement des axes P/h, deja lisible via "h = 0" a gauche -->
            <text class="tick-label" x="352" y="164" text-anchor="end">1,25</text>
            <text class="tick-label" x="352" y="274" text-anchor="end">2,5</text>

            <!-- graduations pression (x=360 omis : l'axe h et le point P0 marquent deja cette origine) -->
            <line class="guide-line" x1="470" y1="42" x2="470" y2="50"></line>
            <line class="guide-line" x1="580" y1="42" x2="580" y2="50"></line>
            <text class="tick-label" x="360" y="34" text-anchor="middle">101 325</text>
            <text class="tick-label" x="470" y="34" text-anchor="middle">≈113 588</text>
            <text class="tick-label" x="580" y="34" text-anchor="middle">125 850</text>

            <!-- profil P(h) : trois points alignes -->
            <polyline class="curve-main" points="360,50 470,160 580,270" fill="none"></polyline>
            <circle class="plot-point" cx="360" cy="50" r="5"></circle>
            <circle class="plot-point-alt" cx="470" cy="160" r="4"></circle>
            <circle class="plot-point" cx="580" cy="270" r="5.5"></circle>
          </svg>
        `,
        notes: [
          'La pression $P_0 = 101\\,325$ Pa (pression atmosphérique) existe déjà à profondeur nulle, à la surface : ce n\'est jamais zéro.',
          'Chaque mètre de profondeur ajoute $\\rho g \\approx 9\\,810$ Pa. Sur $h = 2{,}5$ m d\'eau, le terme hydrostatique $\\rho g h$ vaut $24\\,525$ Pa.',
          'Le profil $P(h)$ est une <strong>droite</strong> : les trois points $P_0$, $P_1$ et $P_2$ sont alignés, car $P$ est une fonction affine de $h$ — c\'est la signature du PFSF.'
        ],
        reading: 'Suis les trois profondeurs repères ($h=0$, $h=1{,}25$ m, $h=2{,}5$ m) sur la colonne de gauche, puis retrouve la pression correspondante sur le profil $P(h)$ à droite.',
        caption: 'Profil de pression hydrostatique dans une colonne d\'eau : la pression croît linéairement avec la profondeur, de $P_0 = 101\\,325$ Pa en surface à $125\\,850$ Pa à $h = 2{,}5$ m (valeurs de l\'exemple résolu).'
      },
      diagrams: [{
        theme: 'physique',
        kicker: 'Presse hydraulique (principe de Pascal)',
        title: 'Transmission intégrale de la pression dans un fluide au repos',
        description: 'Deux pistons de sections $S_1$ et $S_2$ reliés par un même fluide incompressible : la pression se transmet intégralement, d\'où $\\dfrac{F_1}{S_1} = \\dfrac{F_2}{S_2}$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="pascal-title pascal-desc">
            <title id="pascal-title">Schema d'une presse hydraulique illustrant le principe de Pascal</title>
            <desc id="pascal-desc">Deux cylindres relies par un meme fluide au meme niveau : un petit piston de section S1 a gauche, sur lequel s'exerce une force F1 vers le bas, et un grand piston de section S2 a droite portant une charge, souleve par une force F2 vers le haut. Le fluide etant incompressible et les deux points consideres etant a la meme hauteur, les pressions sont egales, ce qui donne F1 sur S1 egal a F2 sur S2 : la petite force sur la petite section permet de soulever une charge bien plus importante sur la grande section.</desc>

            <defs>
              <marker id="arrow-physbts-pascal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- fluide / tube de liaison au meme niveau -->
            <line class="frame-line" x1="90" y1="260" x2="520" y2="260"></line>

            <!-- cylindre gauche (petite section S1) -->
            <line class="frame-line" x1="90" y1="80" x2="90" y2="260"></line>
            <line class="frame-line" x1="170" y1="80" x2="170" y2="260"></line>
            <rect class="frame-line" x="90" y="140" width="80" height="14" fill="none"></rect>

            <!-- force F1 -->
            <line class="curve-main" x1="130" y1="60" x2="130" y2="138" marker-end="url(#arrow-physbts-pascal)"></line>
            <text class="annotation-label" x="145" y="72">F₁</text>

            <!-- cotation S1 -->
            <line class="guide-line" x1="90" y1="163" x2="90" y2="173"></line>
            <line class="guide-line" x1="170" y1="163" x2="170" y2="173"></line>
            <line class="guide-line" x1="90" y1="168" x2="170" y2="168"></line>
            <text class="tick-label" x="130" y="188" text-anchor="middle">S₁</text>

            <!-- cylindre droit (grande section S2) -->
            <line class="frame-line" x1="340" y1="40" x2="340" y2="260"></line>
            <line class="frame-line" x1="520" y1="40" x2="520" y2="260"></line>
            <rect class="frame-line" x="340" y="110" width="180" height="14" fill="none"></rect>

            <!-- charge posee sur le grand piston -->
            <rect class="frame-line" x="395" y="55" width="70" height="45" fill="none"></rect>
            <text class="label-soft" x="430" y="46" text-anchor="middle">Charge</text>

            <!-- force F2 -->
            <line class="curve-main" x1="460" y1="230" x2="460" y2="126" marker-end="url(#arrow-physbts-pascal)"></line>
            <text class="annotation-label" x="470" y="190">F₂</text>

            <!-- cotation S2 -->
            <line class="guide-line" x1="340" y1="133" x2="340" y2="143"></line>
            <line class="guide-line" x1="520" y1="133" x2="520" y2="143"></line>
            <line class="guide-line" x1="340" y1="138" x2="520" y2="138"></line>
            <text class="tick-label" x="430" y="158" text-anchor="middle">S₂</text>

            <!-- reperes au meme niveau -->
            <circle class="plot-point-alt" cx="130" cy="260" r="4"></circle>
            <circle class="plot-point-alt" cx="430" cy="260" r="4"></circle>
            <line class="guide-line" x1="130" y1="245" x2="430" y2="245"></line>
            <text class="tick-label" x="280" y="235" text-anchor="middle">P₁ = P₂ (même niveau)</text>
          </svg>
        `,
        notes: [
          'Le <strong>principe de Pascal</strong> : une pression appliquée en un point d\'un fluide incompressible se transmet intégralement en tout point du fluide.',
          'Au même niveau (même hauteur $h$) dans un fluide au repos, la pression est identique : $P_1 = P_2$, quelle que soit la forme des cylindres.',
          'Comme $P = \\dfrac{F}{S}$, l\'égalité des pressions donne $\\dfrac{F_1}{S_1} = \\dfrac{F_2}{S_2}$ : une petite force sur un petit piston peut soulever une charge bien plus grande si $S_2 \\gg S_1$ (presse hydraulique, vérin, frein hydraulique).'
        ],
        reading: 'Repère les deux cylindres reliés par le même fluide au même niveau, puis compare les sections $S_1$ (petite, à gauche) et $S_2$ (grande, à droite).',
        caption: 'Presse hydraulique : principe de Pascal appliqué à deux pistons de sections différentes reliés par un même fluide incompressible.'
      }],
      example: {
        statement: 'Une piscine est remplie d\'eau ($\\rho = 1\\,000$ kg/m³) jusqu\'à une profondeur $h = 2{,}5$ m. On prend $P_0 = 101\\,325$ Pa (pression atmosphérique à la surface) et $g = 9{,}81$ m/s².<br/><br/>Calculer la pression totale au fond de la piscine.',
        steps: [
          'La surface libre de la piscine est à l\'air libre : la pression y vaut $P_0 = 101\\,325$ Pa.',
          'Principe fondamental de la statique des fluides : $P = P_0 + \\rho g h$.',
          'Calcul du terme hydrostatique : $\\rho g h = 1\\,000 \\times 9{,}81 \\times 2{,}5 = 24\\,525$ Pa.',
          'Pression totale au fond : $P = 101\\,325 + 24\\,525 = 125\\,850$ Pa, soit environ $125{,}9$ kPa.'
        ],
        answer: '$P \\approx 125\\,850$ Pa. La pression atmosphérique contribue à plus des trois quarts de la pression totale : à faible profondeur, ne pas l\'oublier serait une erreur importante.'
      },
      formulas: [
        '$P = \\dfrac{F}{S}$ (définition de la pression, en Pa = N/m²)',
        'PFSF : $P = P_0 + \\rho g h$',
        'Principe de Pascal (presse hydraulique) : $\\dfrac{F_1}{S_1} = \\dfrac{F_2}{S_2}$',
        'Poussée d\'Archimède : $\\Pi = \\rho_{\\text{fluide}} \\times V_{\\text{immergé}} \\times g$',
        '$1$ bar $= 10^5$ Pa ; $P_{\\text{atm}} \\approx 101\\,325$ Pa'
      ],
      recap: [
        'La pression dans un fluide au repos ne dépend que de la <strong>profondeur</strong> (et de $\\rho$, $g$), jamais de la forme du récipient ni du volume total de fluide.',
        'Le principe de Pascal permet de démultiplier une force grâce à des sections différentes : c\'est le principe des vérins, presses et freins hydrauliques.',
        'La poussée d\'Archimède est égale au poids du volume de fluide déplacé. Un objet immergé remonte si cette poussée dépasse son poids.',
        'Toujours vérifier l\'homogénéité des unités avant de calculer : Pa = N/m², et ne pas oublier la pression atmosphérique $P_0$ quand la surface est ouverte à l\'air libre.'
      ],
      piege: 'La pression au fond d\'un récipient ne dépend que de la <strong>profondeur</strong> $h$, pas de la forme du récipient ni du volume total de liquide : c\'est le <strong>paradoxe hydrostatique</strong>. Un tube fin et une cuve large, remplis du même liquide à la même hauteur, exercent exactement la même pression au fond. Attention également à ne pas confondre la pression (Pa, indépendante de la surface) et la force pressante ($F = P \\times S$, qui elle dépend directement de l\'aire).'
    },

    quiz: [
      {
        q: 'Une presse hydraulique a un petit piston de section $S_1 = 8$ cm² et un grand piston de section $S_2 = 400$ cm². On applique une force $F_1 = 100$ N sur le petit piston. Quelle force $F_2$ peut-on soulever sur le grand piston ?',
        options: [
          '$F_2 = 5\\,000$ N',
          '$F_2 = 50$ N',
          '$F_2 = 3\\,200$ N',
          '$F_2 = 400$ N'
        ],
        answer: 0,
        correction: 'Principe de Pascal : $\\dfrac{F_1}{S_1} = \\dfrac{F_2}{S_2}$ → $F_2 = F_1 \\times \\dfrac{S_2}{S_1} = 100 \\times \\dfrac{400}{8} = 100 \\times 50 = 5\\,000$ N. Le rapport des sections ($50$) multiplie directement la force transmise.'
      },
      {
        q: 'Deux récipients de formes très différentes (un tube étroit et une cuve large) contiennent le même liquide, rempli exactement à la même hauteur $h$. Comment se comparent les pressions au fond des deux récipients ?',
        options: [
          'La pression est plus grande dans la cuve large, car elle contient plus de liquide',
          'La pression est identique dans les deux, car elle ne dépend que de la hauteur $h$',
          'La pression est plus grande dans le tube étroit, car le liquide y est plus « concentré »',
          'On ne peut pas comparer sans connaître le volume exact de chaque récipient'
        ],
        answer: 1,
        correction: 'D\'après le PFSF, $P = P_0 + \\rho g h$ : la pression ne dépend que de $\\rho$, $g$ et $h$, jamais de la forme du récipient ni du volume total. C\'est le paradoxe hydrostatique — contre-intuitif, mais bien vérifié expérimentalement.'
      },
      {
        q: 'Un solide totalement immergé dans un fluide remonte vers la surface si :',
        options: [
          'La poussée d\'Archimède qu\'il subit est supérieure à son poids',
          'La poussée d\'Archimède qu\'il subit est inférieure à son poids',
          'La poussée d\'Archimède est nulle',
          'Son poids est nul'
        ],
        answer: 0,
        correction: 'En appliquant le PFD sur l\'axe vertical : le solide accélère vers le haut si la résultante des forces (poussée $\\Pi$ vers le haut, poids $P$ vers le bas) est dirigée vers le haut, c\'est-à-dire si $\\Pi > P$. C\'est ce qui explique la flottaison d\'un objet moins dense que le fluide qui l\'entoure.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['pascal', 'pfsf']);

        if (typeExo === 'pascal') {
          var S1 = randFloat(2, 15, 1);
          var S2 = rand(100, 800);
          var F1 = rand(20, 300);
          var F2 = parseFloat((F1 * S2 / S1).toFixed(0));
          var contexte = pick([
            'un vérin de presse à emboutir',
            'un cric hydraulique de garage',
            'un frein hydraulique de poids lourd',
            'une presse hydraulique d\'atelier',
            'un élévateur de véhicules'
          ]);
          return {
            statement: 'Sur ' + contexte + ', le petit piston a une section $S_1 = ' + fr(S1, 1) + '$ cm² et le grand piston une section $S_2 = ' + S2 + '$ cm². On applique une force $F_1 = ' + F1 + '$ N sur le petit piston.<br/><br/>D\'après le principe de Pascal, calcule la force $F_2$ transmise sur le grand piston (en N, arrondie à l\'unité).',
            answer: F2,
            tolerance: Math.max(5, F2 * 0.03),
            unit: 'N',
            hint: 'Le principe de Pascal donne l\'égalité des pressions : $P_1 = P_2$, soit $\\dfrac{F_1}{S_1} = \\dfrac{F_2}{S_2}$.',
            solution: [
              'Égalité des pressions (principe de Pascal) : $\\dfrac{F_1}{S_1} = \\dfrac{F_2}{S_2}$.',
              'On isole $F_2$ : $F_2 = F_1 \\times \\dfrac{S_2}{S_1} = ' + F1 + ' \\times \\dfrac{' + S2 + '}{' + fr(S1, 1) + '}$.',
              'Résultat : $F_2 \\approx ' + F2 + '$ N.',
              'Le rapport des sections $\\dfrac{S_2}{S_1} \\approx ' + fr(parseFloat((S2 / S1).toFixed(1)), 1) + '$ indique combien de fois la force est démultipliée.'
            ]
          };
        } else {
          var liquides = [
            { nom: 'eau', rho: 1000 },
            { nom: 'eau de mer', rho: 1025 },
            { nom: 'huile hydraulique', rho: 850 }
          ];
          var liquide = pick(liquides);
          var h = randFloat(0.5, 12, 1);
          var P0 = 101325;
          var P = Math.round(P0 + liquide.rho * 9.81 * h);
          return {
            statement: 'Un réservoir ouvert à l\'air libre est rempli de ' + liquide.nom + ' (masse volumique $\\rho = ' + liquide.rho + '$ kg/m³) sur une profondeur $h = ' + fr(h, 1) + '$ m. On prend $P_0 = 101\\,325$ Pa et $g = 9{,}81$ m/s².<br/><br/>Calcule la pression totale $P$ au fond du réservoir (en Pa, arrondie à l\'unité).',
            answer: P,
            tolerance: 300,
            unit: 'Pa',
            hint: 'Applique le principe fondamental de la statique des fluides : $P = P_0 + \\rho g h$.',
            solution: [
              'PFSF : $P = P_0 + \\rho g h$.',
              'Terme hydrostatique : $\\rho g h = ' + liquide.rho + ' \\times 9{,}81 \\times ' + fr(h, 1) + ' \\approx ' + Math.round(liquide.rho * 9.81 * h) + '$ Pa.',
              'Pression totale : $P = 101\\,325 + ' + Math.round(liquide.rho * 9.81 * h) + ' \\approx ' + P + '$ Pa.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un sous-marin plonge à une profondeur $h = 200$ m dans l\'eau de mer ($\\rho = 1\\,025$ kg/m³). Un hublot circulaire de diamètre $d = 30$ cm équipe la coque. On prend $P_0 = 101\\,325$ Pa et $g = 9{,}81$ m/s².',
      tasks: [
        'Calculer la pression totale $P$ exercée par l\'eau à cette profondeur.',
        'Calculer l\'aire $S$ du hublot circulaire.',
        'Calculer la force pressante $F$ exercée par l\'eau sur le hublot, et commenter son ordre de grandeur.'
      ],
      solutions: [
        'PFSF : $P = P_0 + \\rho g h = 101\\,325 + 1\\,025 \\times 9{,}81 \\times 200 = 101\\,325 + 2\\,011\\,050 \\approx 2\\,112\\,375$ Pa, soit environ $2{,}11$ MPa (plus de $20$ fois la pression atmosphérique).',
        'Aire d\'un disque de rayon $r = \\dfrac{d}{2} = 0{,}15$ m : $S = \\pi r^2 = \\pi \\times 0{,}15^2 \\approx 0{,}0707$ m².',
        'Force pressante : $F = P \\times S \\approx 2\\,112\\,375 \\times 0{,}0707 \\approx 149\\,300$ N, soit environ $149{,}3$ kN.'
      ],
      finalAnswer: '$F \\approx 149{,}3$ kN, ce qui équivaut au poids d\'environ $15$ tonnes ($\\dfrac{149\\,300}{9{,}81} \\approx 15\\,220$ kg) concentrées sur un simple hublot de $30$ cm de diamètre : cela illustre pourquoi la coque et les hublots des sous-marins doivent être extrêmement renforcés en grande profondeur.'
    },

    evaluation: {
      title: 'Évaluation — Statique des fluides',
      duration: '30 min',
      questions: [
        {
          statement: 'Une force de $450$ N s\'exerce perpendiculairement sur une surface de $0{,}05$ m². Calculer la pression exercée (en Pa).',
          type: 'numeric',
          answer: 9000,
          tolerance: 100,
          unit: 'Pa',
          points: 2,
          correction: '$P = \\dfrac{F}{S} = \\dfrac{450}{0{,}05} = 9\\,000$ Pa. Diviser par une petite surface donne une pression importante : c\'est pourquoi une pointe fine (petite surface) perce facilement, contrairement à une surface plate.'
        },
        {
          statement: 'Le principe fondamental de la statique des fluides s\'écrit :',
          type: 'multiple-choice',
          options: [
            '$P = P_0 - \\rho g h$',
            '$P = P_0 + \\rho g h$',
            '$P = \\rho \\times g \\times S$',
            '$P = \\dfrac{P_0}{\\rho g h}$'
          ],
          answer: 1,
          points: 2,
          correction: 'La pression augmente avec la profondeur : $P = P_0 + \\rho g h$, où $P_0$ est la pression à la surface libre. Le signe $+$ traduit le fait qu\'on s\'enfonce dans le fluide, donc que la pression augmente.'
        },
        {
          statement: 'Calculer la pression totale au fond d\'un bassin d\'eau ($\\rho = 1\\,000$ kg/m³) de profondeur $h = 8$ m, avec $P_0 = 101\\,325$ Pa et $g = 9{,}81$ m/s² (en Pa).',
          type: 'numeric',
          answer: 179805,
          tolerance: 500,
          unit: 'Pa',
          points: 3,
          correction: '$P = P_0 + \\rho g h = 101\\,325 + 1\\,000 \\times 9{,}81 \\times 8 = 101\\,325 + 78\\,480 = 179\\,805$ Pa.'
        },
        {
          statement: 'Une presse hydraulique a un petit piston de section $S_1 = 4$ cm² et un grand piston de section $S_2 = 200$ cm². On applique $F_1 = 50$ N sur le petit piston. Calculer la force $F_2$ transmise (en N).',
          type: 'numeric',
          answer: 2500,
          tolerance: 50,
          unit: 'N',
          points: 2,
          correction: '$F_2 = F_1 \\times \\dfrac{S_2}{S_1} = 50 \\times \\dfrac{200}{4} = 50 \\times 50 = 2\\,500$ N.'
        },
        {
          statement: 'La poussée d\'Archimède subie par un objet totalement immergé dépend :',
          type: 'multiple-choice',
          options: [
            'Du poids de l\'objet uniquement',
            'Du volume de fluide déplacé et de la masse volumique du fluide',
            'De la profondeur exacte d\'immersion',
            'De la forme précise de l\'objet uniquement'
          ],
          answer: 1,
          points: 1,
          correction: '$\\Pi = \\rho_{\\text{fluide}} \\times V_{\\text{immergé}} \\times g$ : seuls le volume immergé et la masse volumique du fluide interviennent, pas la profondeur (tant que l\'objet reste immergé) ni le poids de l\'objet lui-même.'
        }
      ]
    }
  });
