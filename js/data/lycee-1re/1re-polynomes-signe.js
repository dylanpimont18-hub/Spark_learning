/* =========================================================
   Spark Learning – data/lycee-1re/1re-polynomes-signe.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-polynomes-signe',
    level: 2, subject: 'maths',
    icon: '📉',
    title: 'Signe d\'un trinôme du second degré',
    subtitle: 'Tableau de signe, inéquations du second degré',
    keywords: ['Trinôme', 'Tableau de signe', 'Inéquation', 'Second degré'],
    physics: false,
    cours: {
      /* DECOUVRIR reecrit le 2026-09-14.
         L'ancienne ouverture enoncait la regle complete du signe, piege compris,
         avant la moindre question : il n'y avait plus rien a decouvrir. On part
         desormais d'un ecart que l'eleve peut constater lui-meme entre deux
         questions qui se ressemblent — « pour quelle valeur ? » et « pour
         quelles valeurs ? » — et dont une seule se resout avec ce qu'il sait. */
      intro: 'Le chapitre précédent t\'a appris à répondre à la question « <strong>pour quelle valeur</strong> de $x$ le bénéfice est-il nul ? ». Tu calcules $\\Delta$, tu trouves les racines, c\'est fini.<br/><br/>Un gérant se moque pourtant de savoir quand son bénéfice est nul. Ce qu\'il veut savoir, c\'est « <strong>pour quelles valeurs</strong> est-il positif ? » — autrement dit, entre quelles quantités produites son atelier gagne-t-il de l\'argent.<br/><br/>La différence entre ces deux questions a l\'air minime. Elle est énorme.<br/><br/>La première a pour réponse <strong>deux nombres</strong>. La seconde a pour réponse <strong>tout un intervalle</strong> — une infinité de valeurs, qu\'il faut pourtant décrire en une ligne. Et rien de ce que tu as appris ne dit lesquelles.<br/><br/>Essaie sur $B(x) = -x^2 + 6x - 5$, dont tu sais déjà trouver les racines $1$ et $5$. Le bénéfice est-il positif <strong>entre</strong> ces deux nombres, ou <strong>à l\'extérieur</strong> ? Les deux réponses sont possibles a priori, et une seule est juste.<br/><br/>Tester quelques valeurs au hasard finirait par te renseigner, mais ne prouverait rien. Ce chapitre construit l\'outil qui répond d\'un coup, pour tous les $x$ à la fois : le <strong>tableau de signe</strong>.',
      definitions: [
        { term: 'Signe d\'un trinôme', def: 'Le <strong>signe</strong> d\'un trinôme $ax^2 + bx + c$ sur un intervalle indique où l\'expression est positive, négative ou nulle. Il dépend de $a$ et $\\Delta$.' },
        { term: 'Tableau de signe', def: 'Le <strong>tableau de signe</strong> résume les intervalles où le trinôme est positif, négatif ou nul. Les racines (si elles existent) sont les seuls changements de signe.' },
        { term: 'Inéquation du second degré', def: 'Résoudre une <strong>inéquation</strong> $ax^2 + bx + c > 0$ (ou $< 0$, $\\geq 0$, $\\leq 0$) revient à lire les intervalles dans le tableau de signe.' },
        { term: 'Signe de $a$', def: 'Le coefficient $a$ détermine l\'<strong>orientation</strong> de la parabole : si $a > 0$ (parabole vers le haut), le trinôme est du signe de $a$ <strong>à l\'extérieur</strong> des racines ; si $a < 0$, c\'est l\'inverse.' }
      ],
      method: {
        title: 'Établir le tableau de signe',
        steps: [
          '<strong>Calculer le discriminant</strong> $\\Delta$ et les racines éventuelles $x_1 < x_2$.',
          '<strong>Si $\\Delta < 0$</strong> : le signe est celui de $a$ sur $\\mathbb{R}$ entier.',
          '<strong>Si $\\Delta = 0$</strong> : le signe est celui de $a$, sauf en $x_0$ où il est nul.',
          '<strong>Si $\\Delta > 0$</strong> : le trinôme est de signe opposé à $a$ entre $x_1$ et $x_2$, et de même signe que $a$ en dehors.'
        ]
      },
      example: {
        statement: 'Résoudre l\'inéquation $-x^2 + 4x - 3 \\geq 0$.',
        steps: [
          'On identifie $a = -1$, $b = 4$, $c = -3$. Calcul : $\\Delta = 16 - 12 = 4 > 0$.',
          'Racines : $x_1 = \\dfrac{-4 + 2}{-2} = 1$ et $x_2 = \\dfrac{-4 - 2}{-2} = 3$.',
          '$a = -1 < 0$ : le trinôme est <strong>positif entre les racines</strong>. Donc $-x^2 + 4x - 3 \\geq 0$ pour $x \\in [1\\,;\\,3]$.'
        ],
        answer: 'L\'ensemble solution est $[1\\,;\\,3]$. Attention : $a < 0$ inverse la règle habituelle !'
      },
      formulas: [
        '$a > 0, \\Delta > 0$ : $ax^2+bx+c < 0 \\Leftrightarrow x_1 < x < x_2$',
        '$a > 0, \\Delta > 0$ : $ax^2+bx+c > 0 \\Leftrightarrow x < x_1$ ou $x > x_2$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Deux paraboles, deux signes',
        title: 'Comparer le signe d\'un trinôme selon $a>0$ ou $a<0$',
        description: 'À gauche, $f(x)=x^2-x-6$ ($a=1>0$) : la parabole "sourit", elle est négative entre ses racines. À droite, $g(x)=-x^2+4x-3$ ($a=-1<0$, l\'exemple du cours) : la parabole est renversée, elle est positive entre ses racines.',
        svg: `
          <svg viewBox="0 0 460 300" role="img" aria-labelledby="poly-signe-title poly-signe-desc">
            <title id="poly-signe-title">Signe de deux trinômes selon le signe de a</title>
            <desc id="poly-signe-desc">Deux paraboles cote a cote. A gauche a=1 positif, courbe vers le haut, negative entre les racines -2 et 3. A droite a=-1 negatif, courbe vers le bas, positive entre les racines 1 et 3. Les zones de signe positif sont teintees en vert, les zones negatives en rouge.</desc>

            <!-- grilles verticales panneau A -->
            <line class="grid-line" x1="40.0" y1="20" x2="40.0" y2="230"></line>
            <line class="grid-line" x1="59.4" y1="20" x2="59.4" y2="230"></line>
            <line class="grid-line" x1="78.9" y1="20" x2="78.9" y2="230"></line>
            <line class="grid-line" x1="98.3" y1="20" x2="98.3" y2="230"></line>
            <line class="grid-line" x1="117.8" y1="20" x2="117.8" y2="230"></line>
            <line class="grid-line" x1="137.2" y1="20" x2="137.2" y2="230"></line>
            <line class="grid-line" x1="156.7" y1="20" x2="156.7" y2="230"></line>
            <line class="grid-line" x1="176.1" y1="20" x2="176.1" y2="230"></line>
            <line class="grid-line" x1="195.6" y1="20" x2="195.6" y2="230"></line>
            <line class="grid-line" x1="215.0" y1="20" x2="215.0" y2="230"></line>

            <!-- grilles verticales panneau B -->
            <line class="grid-line" x1="245.0" y1="20" x2="245.0" y2="230"></line>
            <line class="grid-line" x1="274.2" y1="20" x2="274.2" y2="230"></line>
            <line class="grid-line" x1="303.3" y1="20" x2="303.3" y2="230"></line>
            <line class="grid-line" x1="332.5" y1="20" x2="332.5" y2="230"></line>
            <line class="grid-line" x1="361.7" y1="20" x2="361.7" y2="230"></line>
            <line class="grid-line" x1="390.8" y1="20" x2="390.8" y2="230"></line>
            <line class="grid-line" x1="420.0" y1="20" x2="420.0" y2="230"></line>

            <!-- zones de signe panneau A : f(x) = x^2 - x - 6, racines -2 et 3 -->
            <polygon points="40.0,37.5 44.9,56.6 49.7,74.7 54.6,91.6 59.4,107.5 64.3,122.3 69.2,135.9 74.0,148.5 78.9,160.0 40.0,160.0" fill="color-mix(in srgb, var(--success) 20%, transparent)" stroke="none"></polygon>
            <polygon points="78.9,160.0 83.8,170.4 88.6,179.7 93.5,187.9 98.3,195.0 103.2,201.0 108.1,205.9 112.9,209.8 117.8,212.5 122.6,214.1 127.5,214.7 132.4,214.1 137.2,212.5 142.1,209.8 146.9,205.9 151.8,201.0 156.7,195.0 161.5,187.9 166.4,179.7 171.2,170.4 176.1,160.0" fill="color-mix(in srgb, var(--error) 20%, transparent)" stroke="none"></polygon>
            <polygon points="176.1,160.0 181.0,148.5 185.8,135.9 190.7,122.3 195.6,107.5 200.4,91.6 205.3,74.7 210.1,56.6 215.0,37.5 215.0,160.0" fill="color-mix(in srgb, var(--success) 20%, transparent)" stroke="none"></polygon>

            <!-- zones de signe panneau B : g(x) = -x^2 + 4x - 3, racines 1 et 3 -->
            <polygon points="245.0,212.5 252.3,187.3 259.6,164.4 266.9,143.6 274.2,125.0 281.5,108.6 288.8,94.4 296.0,82.3 303.3,72.5 245.0,72.5" fill="color-mix(in srgb, var(--error) 20%, transparent)" stroke="none"></polygon>
            <polygon points="303.3,72.5 310.6,64.8 317.9,59.4 325.2,56.1 332.5,55.0 339.8,56.1 347.1,59.4 354.4,64.8 361.7,72.5" fill="color-mix(in srgb, var(--success) 20%, transparent)" stroke="none"></polygon>
            <polygon points="361.7,72.5 369.0,82.3 376.2,94.4 383.5,108.6 390.8,125.0 398.1,143.6 405.4,164.4 412.7,187.3 420.0,212.5 420.0,72.5" fill="color-mix(in srgb, var(--error) 20%, transparent)" stroke="none"></polygon>

            <!-- axes panneau A -->
            <line class="axis" x1="33" y1="160.0" x2="222" y2="160.0"></line>
            <line class="axis" x1="117.8" y1="12" x2="117.8" y2="238"></line>
            <!-- axes panneau B -->
            <line class="axis" x1="238" y1="72.5" x2="427" y2="72.5"></line>
            <line class="axis" x1="274.2" y1="12" x2="274.2" y2="238"></line>

            <!-- courbes -->
            <polyline class="curve-main" points="40.0,37.5 44.9,56.6 49.7,74.7 54.6,91.6 59.4,107.5 64.3,122.3 69.2,135.9 74.0,148.5 78.9,160.0 83.8,170.4 88.6,179.7 93.5,187.9 98.3,195.0 103.2,201.0 108.1,205.9 112.9,209.8 117.8,212.5 122.6,214.1 127.5,214.7 132.4,214.1 137.2,212.5 142.1,209.8 146.9,205.9 151.8,201.0 156.7,195.0 161.5,187.9 166.4,179.7 171.2,170.4 176.1,160.0 181.0,148.5 185.8,135.9 190.7,122.3 195.6,107.5 200.4,91.6 205.3,74.7 210.1,56.6 215.0,37.5"></polyline>
            <polyline class="curve-main" points="245.0,212.5 252.3,187.3 259.6,164.4 266.9,143.6 274.2,125.0 281.5,108.6 288.8,94.4 296.0,82.3 303.3,72.5 310.6,64.8 317.9,59.4 325.2,56.1 332.5,55.0 339.8,56.1 347.1,59.4 354.4,64.8 361.7,72.5 369.0,82.3 376.2,94.4 383.5,108.6 390.8,125.0 398.1,143.6 405.4,164.4 412.7,187.3 420.0,212.5"></polyline>

            <!-- racines et sommets -->
            <circle class="plot-point" cx="78.9" cy="160.0" r="5"></circle>
            <circle class="plot-point" cx="176.1" cy="160.0" r="5"></circle>
            <circle class="plot-point-alt" cx="127.5" cy="214.7" r="5"></circle>
            <circle class="plot-point" cx="303.3" cy="72.5" r="5"></circle>
            <circle class="plot-point" cx="361.7" cy="72.5" r="5"></circle>
            <circle class="plot-point-alt" cx="332.5" cy="55.0" r="5"></circle>

            <!-- etiquettes panneau A -->
            <text class="annotation-label" x="127.5" y="14" text-anchor="middle">a positif</text>
            <text class="tick-label" x="40.0" y="176" text-anchor="middle">-4</text>
            <text class="tick-label" x="117.8" y="176" text-anchor="middle">0</text>
            <text class="tick-label" x="215.0" y="176" text-anchor="middle">5</text>
            <text class="annotation-label" x="78.9" y="146" text-anchor="middle">x₁ = -2</text>
            <text class="annotation-label" x="176.1" y="146" text-anchor="middle">x₂ = 3</text>
            <text class="tick-label" x="127.5" y="228" text-anchor="middle">S(0,5 ; -6,25)</text>
            <text class="label-soft" x="52" y="118">+</text>
            <text class="label-soft" x="127.5" y="196">−</text>
            <text class="label-soft" x="195.6" y="130">+</text>
            <text class="axis-label" x="224" y="164">x</text>
            <text class="axis-label" x="124" y="34">y</text>

            <!-- etiquettes panneau B -->
            <text class="annotation-label" x="332.5" y="14" text-anchor="middle">a negatif</text>
            <text class="tick-label" x="245.0" y="88" text-anchor="middle">-1</text>
            <text class="tick-label" x="274.2" y="88" text-anchor="middle">0</text>
            <text class="tick-label" x="420.0" y="88" text-anchor="middle">5</text>
            <text class="annotation-label" x="303.3" y="58" text-anchor="middle">x₁ = 1</text>
            <text class="annotation-label" x="361.7" y="58" text-anchor="middle">x₂ = 3</text>
            <text class="tick-label" x="332.5" y="228" text-anchor="middle">S(2 ; 1)</text>
            <text class="label-soft" x="274.2" y="105">−</text>
            <text class="label-soft" x="332.5" y="65">+</text>
            <text class="label-soft" x="390.8" y="115">−</text>
            <text class="axis-label" x="429" y="76.5">x</text>
            <text class="axis-label" x="281" y="34">y</text>
          </svg>
        `,
        notes: [
          'Panneau gauche ($a=1>0$) : la parabole "sourit" vers le haut. Elle est <strong>négative entre les racines</strong> ($-2 < x < 3$, zone rouge) et <strong>positive à l\'extérieur</strong> (zones vertes).',
          'Panneau droit ($a=-1<0$, exemple du cours) : la parabole est renversée. Elle est <strong>positive entre les racines</strong> ($1 < x < 3$, zone verte) et <strong>négative à l\'extérieur</strong> (zones rouges).',
          'Dans les deux cas, le sommet $S$ (point le plus bas ou le plus haut) marque l\'axe de symétrie de la parabole, à mi-chemin entre les deux racines.'
        ],
        reading: 'Repère d\'abord l\'orientation de la parabole (signe de $a$), puis lis directement la couleur des zones : vert = positif, rouge = négatif. Le changement de couleur se produit exactement aux racines.',
        caption: 'Comparaison des deux cas $a>0$ et $a<0$ pour un même type de trinôme, avec zones de signe coloriées.'
      },

      /* SCHEMAS SECONDAIRES ajoutes le 2026-09-14.
         Un schema par malentendu :
         1. le tableau de signe n'est pas une convention d'ecriture, c'est la
            courbe recopiee ligne par ligne — les separations tombent SOUS les
            racines, et la figure le montre par des verticales de liaison ;
         2. « $\Delta < 0$, donc pas de solution, donc rien a dire » : le
            trinome a pourtant un signe, constant, et ce signe depend de $a$ ;
         3. changer le SENS de l'inegalite change la FORME de l'ensemble
            solution — un intervalle borne d'un cote, une reunion de deux
            demi-droites de l'autre.
         Toutes les coordonnees sont calculees et verifiees par script : racines
         exactes, sommets exacts, separations du tableau alignees au pixel sous
         les racines de la courbe. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'D\'où vient le tableau',
          title: 'Le tableau de signe est la courbe recopiée ligne par ligne',
          description: 'Le tableau de signe n\'est pas une convention d\'écriture qu\'il faudrait apprendre à part : c\'est <strong>la courbe elle-même</strong>, résumée en une bande.<br/><br/>Les deux traits verticaux du tableau ne tombent pas n\'importe où : ils tombent exactement sous les deux racines, c\'est-à-dire sous les deux seuls endroits où la courbe traverse l\'axe.',
          svg: `
            <svg viewBox="0 0 430 300" role="img" aria-labelledby="ps-tableau-title ps-tableau-desc">
              <title id="ps-tableau-title">Le tableau de signe aligne sous la courbe</title>
              <desc id="ps-tableau-desc">En haut, une parabole tournee vers le bas coupe l'axe horizontal aux abscisses moins 2 et 4, et culmine entre les deux. En bas, une bande resume le signe : negatif avant moins 2, positif entre moins 2 et 4, negatif apres 4. Deux traits verticaux en tirets descendent des deux racines jusqu'a la bande, montrant que les separations du tableau tombent exactement sous les points ou la courbe traverse l'axe.</desc>

              <line class="grid-line" x1="74.0" y1="24" x2="74.0" y2="212"></line>
              <line class="grid-line" x1="302.0" y1="24" x2="302.0" y2="212"></line>

              <line class="axis" x1="24.6" y1="170" x2="351.4" y2="170"></line>
              <line class="axis" x1="150" y1="24" x2="150" y2="222.0"></line>

              <polyline class="curve-main" points="55.4,211.2 60.8,198.6 66.3,186.4 71.7,174.8 77.1,163.8 82.5,153.2 87.9,143.2 93.3,133.8 98.7,124.8 104.1,116.4 109.5,108.5 114.9,101.1 120.3,94.2 125.7,87.9 131.1,82.1 136.6,76.8 142.0,72.1 147.4,67.9 152.8,64.2 158.2,61.0 163.6,58.4 169.0,56.3 174.4,54.7 179.8,53.6 185.2,53.1 190.6,53.1 196.0,53.6 201.4,54.6 206.9,56.2 212.3,58.3 217.7,60.9 223.1,64.1 228.5,67.8 233.9,72.0 239.3,76.7 244.7,82.0 250.1,87.7 255.5,94.0 260.9,100.9 266.3,108.2 271.7,116.1 277.2,124.6 282.6,133.5 288.0,143.0 293.4,153.0 298.8,163.5 304.2,174.5 309.6,186.1"></polyline>

              <circle class="plot-point" cx="74.0" cy="170.0" r="5"></circle>
              <circle class="plot-point" cx="302.0" cy="170.0" r="5"></circle>
              <circle class="plot-point-alt" cx="188.0" cy="53.0" r="4"></circle>

              <line class="guide-line" x1="74.0" y1="170.0" x2="74.0" y2="236"></line>
              <line class="guide-line" x1="302.0" y1="170.0" x2="302.0" y2="236"></line>

              <line class="frame-line" x1="24.6" y1="236" x2="351.4" y2="236"></line>
              <line class="frame-line" x1="24.6" y1="272" x2="351.4" y2="272"></line>
              <line class="frame-line" x1="24.6" y1="236" x2="24.6" y2="272"></line>
              <line class="frame-line" x1="351.4" y1="236" x2="351.4" y2="272"></line>
              <line class="frame-line" x1="74.0" y1="236" x2="74.0" y2="272"></line>
              <line class="frame-line" x1="302.0" y1="236" x2="302.0" y2="272"></line>

              <text class="annotation-label" x="49.3" y="259" text-anchor="middle">−</text>
              <text class="annotation-label" x="188.0" y="259" text-anchor="middle">+</text>
              <text class="annotation-label" x="326.7" y="259" text-anchor="middle">−</text>
              <text class="tick-label" x="360" y="259" text-anchor="start">signe</text>

              <text class="annotation-label" x="74" y="162" text-anchor="middle">-2</text>
              <text class="annotation-label" x="302" y="162" text-anchor="middle">4</text>
              <text class="tick-label" x="188" y="44" text-anchor="middle">sommet</text>
              <text class="tick-label" x="112.0" y="186" text-anchor="middle">-1</text>
              <text class="tick-label" x="226.0" y="186" text-anchor="middle">2</text>
              <text class="tick-label" x="264.0" y="186" text-anchor="middle">3</text>
              <text class="label-soft" x="188" y="292" text-anchor="middle">chaque separation tombe sous une racine</text>
            </svg>
          `,
          notes: [
            'La fonction est $f(x) = -x^2 + 2x + 8$, avec $a = -1$, $b = 2$ et $c = 8$.',
            'Son discriminant vaut $\\Delta = 2^2 - 4\\times(-1)\\times 8 = 4 + 32 = 36 > 0$, donc deux racines : $x_1 = -2$ et $x_2 = 4$.',
            'Comme $a = -1 < 0$, la parabole est tournée vers le bas : elle est <strong>positive entre</strong> ses racines et négative à l\'extérieur — ce que la bande du bas recopie exactement.',
            'Les deux traits en tirets ne sont pas décoratifs : ils montrent que les séparations du tableau sont <strong>les racines</strong>, et rien d\'autre.',
            'Entre deux racines consécutives, le signe ne peut pas changer : pour changer de signe, une fonction continue doit passer par zéro. C\'est la raison profonde pour laquelle un tableau de signe n\'a qu\'une case par intervalle.'
          ],
          reading: 'Fais glisser ton doigt le long de la courbe, de la gauche vers la droite, et regarde la bande du dessous en même temps. Tant que la courbe est sous l\'axe, la bande porte un $-$ ; dès qu\'elle passe au-dessus, la bande porte un $+$. Les deux traits verticaux marquent l\'instant exact du basculement — et cet instant, c\'est la racine.',
          caption: 'Signe de $f(x)=-x^2+2x+8$ lu sur sa courbe : les séparations du tableau tombent exactement sous les racines $-2$ et $4$.'
        },
        {
          theme: 'maths',
          kicker: 'Quand il n\'y a pas de racine',
          title: 'Un discriminant négatif ne veut pas dire « rien à dire »',
          description: 'Quand $\\Delta < 0$, il est tentant de conclure « pas de solution, donc pas de signe ». C\'est l\'inverse : le trinôme a alors un signe <strong>parfaitement constant</strong>, et c\'est le cas le plus simple du chapitre.<br/><br/>Sans racine, la parabole ne traverse jamais l\'axe : elle reste entièrement du côté que lui impose le signe de $a$.',
          svg: `
            <svg viewBox="0 0 460 280" role="img" aria-labelledby="ps-delta-title ps-delta-desc">
              <title id="ps-delta-title">Deux paraboles sans racine, de signes constants opposes</title>
              <desc id="ps-delta-desc">Deux paraboles sans racine, cote a cote. Celle de gauche est tournee vers le haut et reste entierement au-dessus de sa ligne horizontale, sans jamais la toucher : le trinome y est toujours positif. Celle de droite est tournee vers le bas et reste entierement en dessous de sa ligne horizontale, sans jamais la toucher non plus : le trinome y est toujours negatif. Les deux ont le meme discriminant negatif, et seul le signe du coefficient devant le carre les distingue.</desc>

              <!-- PANNEAU GAUCHE : a > 0, toujours positif -->
              <line class="axis" x1="36.0" y1="196" x2="174.0" y2="196"></line>
              <polyline class="curve-main" points="45.0,40.0 50.0,52.6 55.0,64.6 60.0,75.8 65.0,86.2 70.0,96.0 75.0,105.0 80.0,113.3 85.0,120.9 90.0,127.8 95.0,133.9 100.0,139.3 105.0,144.0 110.0,148.0 115.0,151.2 120.0,153.8 125.0,155.6 130.0,156.6 135.0,157.0 140.0,156.6 145.0,155.6 150.0,153.8 155.0,151.2 160.0,148.0 165.0,144.0 170.0,139.3 175.0,133.9 180.0,127.8 185.0,120.9 190.0,113.3 195.0,105.0 200.0,96.0 205.0,86.2 210.0,75.8 215.0,64.6 220.0,52.6 225.0,40.0"></polyline>
              <circle class="plot-point-alt" cx="135.0" cy="157.0" r="4"></circle>
              <text class="annotation-label" x="135" y="26" text-anchor="middle">a positif</text>
              <text class="tick-label" x="135" y="180" text-anchor="middle">point le plus bas</text>
              <text class="annotation-label" x="135" y="216" text-anchor="middle">toujours positif</text>
              <text class="label-soft" x="135" y="240" text-anchor="middle">la courbe reste au-dessus</text>

              <!-- PANNEAU DROIT : a < 0, toujours negatif -->
              <line class="axis" x1="266.0" y1="84" x2="404.0" y2="84"></line>
              <polyline class="curve-main" points="275.0,240.0 280.0,227.4 285.0,215.4 290.0,204.3 295.0,193.8 300.0,184.0 305.0,175.0 310.0,166.7 315.0,159.1 320.0,152.3 325.0,146.1 330.0,140.7 335.0,136.0 340.0,132.0 345.0,128.8 350.0,126.3 355.0,124.4 360.0,123.4 365.0,123.0 370.0,123.4 375.0,124.4 380.0,126.3 385.0,128.8 390.0,132.0 395.0,136.0 400.0,140.7 405.0,146.1 410.0,152.3 415.0,159.1 420.0,166.7 425.0,175.0 430.0,184.0 435.0,193.8 440.0,204.3 445.0,215.4 450.0,227.4 455.0,240.0"></polyline>
              <circle class="plot-point-alt" cx="365.0" cy="123.0" r="4"></circle>
              <text class="annotation-label" x="365" y="26" text-anchor="middle">a negatif</text>
              <text class="tick-label" x="365" y="112" text-anchor="middle">point le plus haut</text>
              <text class="annotation-label" x="365" y="66" text-anchor="middle">toujours negatif</text>
              <text class="label-soft" x="365" y="262" text-anchor="middle">la courbe reste en dessous</text>
            </svg>
          `,
          notes: [
            'À gauche : $f(x) = x^2 - 2x + 4$, donc $\\Delta = 4 - 16 = -12 < 0$, et $a = 1 > 0$.',
            'À droite : $g(x) = -x^2 + 2x - 4$, de discriminant $\\Delta = 4 - 16 = -12$ également, mais avec $a = -1 < 0$.',
            'Les deux ont exactement le <strong>même</strong> discriminant : ce n\'est donc pas lui qui décide du signe, il décide seulement qu\'il n\'y a <strong>pas de changement</strong> de signe.',
            'Le point extrême de la parabole de gauche est en $(1\\,;\\,3)$, celui de droite en $(1\\,;\\,-3)$ : l\'un au-dessus de l\'axe, l\'autre en dessous. C\'est la seule différence, et elle vient du signe de $a$.',
            'La règle complète tient donc en une phrase : <strong>si $\\Delta < 0$, le trinôme est du signe de $a$ sur $\\mathbb{R}$ tout entier</strong>.'
          ],
          reading: 'Cherche sur chaque dessin un endroit où la courbe toucherait la ligne horizontale : il n\'y en a pas, et c\'est ce que dit $\\Delta < 0$. Regarde ensuite de quel côté de la ligne se trouve la courbe. À gauche elle est au-dessus partout, à droite en dessous partout — et tu n\'as eu besoin d\'aucun calcul, seulement de l\'orientation de la parabole.',
          caption: 'Deux trinômes de même discriminant $\\Delta=-12$ : $x^2-2x+4$ reste positif, $-x^2+2x-4$ reste négatif. Seul le signe de $a$ les sépare.'
        },
        {
          theme: 'maths',
          kicker: 'Le sens de l\'inégalité',
          title: 'Changer le sens de l\'inégalité change la forme de la réponse',
          description: 'Un même trinôme, deux inéquations opposées, et deux ensembles solutions qui ne se ressemblent pas du tout : l\'un est un <strong>intervalle borné</strong>, l\'autre une <strong>réunion de deux demi-droites</strong>.<br/><br/>Beaucoup d\'élèves écrivent la même forme de réponse dans les deux cas, en changeant seulement les crochets. La figure montre que ce sont deux objets différents.',
          svg: `
            <svg viewBox="0 0 440 250" role="img" aria-labelledby="ps-sens-title ps-sens-desc">
              <title id="ps-sens-title">Deux ensembles solutions de formes differentes</title>
              <desc id="ps-sens-desc">Deux droites numeriques identiques, graduees de moins 2 a 4, portant toutes deux les valeurs moins 1 et 3. Sur la droite du haut, deux segments epais sont traces, l'un a gauche de moins 1 et l'autre a droite de 3 : l'ensemble solution est fait de deux morceaux separes. Sur la droite du bas, un seul segment epais relie moins 1 a 3 : l'ensemble solution est d'un seul tenant.</desc>

              <!-- LIGNE 1 : f(x) > 0, a l'exterieur des racines -->
              <text class="annotation-label" x="220" y="24" text-anchor="middle">solutions de f de x strictement positif</text>
              <line class="axis" x1="48.0" y1="70" x2="400.0" y2="70"></line>
              <line class="focus-line" x1="48.0" y1="70" x2="136.0" y2="70"></line>
              <line class="focus-line" x1="312.0" y1="70" x2="400.0" y2="70"></line>
              <circle class="plot-point" cx="136.0" cy="70" r="5"></circle>
              <circle class="plot-point" cx="312.0" cy="70" r="5"></circle>
              <text class="tick-label" x="136.0" y="58" text-anchor="middle">-1</text>
              <text class="tick-label" x="312.0" y="58" text-anchor="middle">3</text>
              <text class="label-soft" x="92.0" y="92" text-anchor="middle">un morceau</text>
              <text class="label-soft" x="356.0" y="92" text-anchor="middle">et un autre</text>
              <text class="tick-label" x="224.0" y="92" text-anchor="middle">rien ici</text>

              <!-- LIGNE 2 : f(x) < 0, entre les racines -->
              <text class="annotation-label" x="220" y="146" text-anchor="middle">solutions de f de x strictement negatif</text>
              <line class="axis" x1="48.0" y1="170" x2="400.0" y2="170"></line>
              <line class="focus-line" x1="136.0" y1="170" x2="312.0" y2="170"></line>
              <circle class="plot-point" cx="136.0" cy="170" r="5"></circle>
              <circle class="plot-point" cx="312.0" cy="170" r="5"></circle>
              <text class="tick-label" x="136.0" y="158" text-anchor="middle">-1</text>
              <text class="tick-label" x="312.0" y="158" text-anchor="middle">3</text>
              <text class="label-soft" x="224.0" y="192" text-anchor="middle">un seul morceau, borne des deux cotes</text>
              <text class="tick-label" x="92.0" y="192" text-anchor="middle">rien ici</text>
              <text class="tick-label" x="356.0" y="192" text-anchor="middle">rien ici</text>

              <text class="label-soft" x="220" y="228" text-anchor="middle">meme trinome, memes racines, deux formes de reponse</text>
            </svg>
          `,
          notes: [
            'Le trinôme est $f(x) = x^2 - 2x - 3 = (x-3)(x+1)$, de racines $-1$ et $3$, avec $a = 1 > 0$.',
            'En haut, $f(x) > 0$ : la solution est $]-\\infty\\,;\\,-1[ \\;\\cup\\; ]3\\,;\\,+\\infty[$, faite de <strong>deux</strong> morceaux disjoints.',
            'En bas, $f(x) < 0$ : la solution est $]-1\\,;\\,3[$, d\'un <strong>seul</strong> tenant et bornée des deux côtés.',
            'Les deux ensembles se complètent : réunis, ils couvrent tout $\\mathbb{R}$ sauf les deux racines, où $f$ est nulle et où aucune des deux inégalités strictes n\'est vérifiée.',
            'Le symbole $\\cup$ n\'est donc pas un ornement : il signale qu\'il y a vraiment <strong>deux</strong> intervalles, et l\'oublier revient à changer la réponse.'
          ],
          reading: 'Compare les deux lignes en ne regardant que les traits épais. En haut, ils sont deux et ils s\'éloignent vers les bords ; en bas, il n\'y en a qu\'un et il est coincé entre les deux racines. Si tu écris la même forme de réponse pour les deux inéquations, tu as forcément décrit l\'une des deux lignes à la place de l\'autre.',
          caption: 'Pour $f(x)=x^2-2x-3$ : $f(x)>0$ donne deux demi-droites, $f(x)<0$ donne l\'intervalle $]-1\\,;\\,3[$.'
        }
      ],

      recap: [
        '<strong>Première étape</strong> : toujours identifier le signe de $a$ (orientation de la parabole).',
        '$\\Delta > 0$ : le signe change aux racines. $\\Delta = 0$ : nul au sommet. $\\Delta < 0$ : signe constant (celui de $a$).',
        'Si $a > 0$ : le trinôme est négatif <strong>entre</strong> les racines. Si $a < 0$ : il est positif <strong>entre</strong> les racines.',
        'Pour une inéquation, d\'abord le tableau de signe, ensuite la lecture des intervalles solutions.'
      ],
      piege: 'Si $a < 0$, les inégalités sont <strong>inversées</strong> ! Le trinôme est alors positif entre les racines et négatif à l\'extérieur.<br/><br/>Toujours commencer par vérifier le signe de $a$ avant de dresser le tableau de signe.'
    },
    quiz: [
      { q: 'Le trinôme $-x^2+5x-6$ a pour racines $x_1=2$ et $x_2=3$. Un élève dit : "il est négatif pour $2<x<3$." Quelle est son erreur ?', options: ['Il a oublié que $a=-1<0$ : le trinôme est POSITIF entre les racines ($2<x<3$) et NÉGATIF à l\'extérieur', 'L\'élève a raison, tout trinôme est négatif entre ses racines', 'Les racines sont incorrectes, il faudrait $x_1=-3$ et $x_2=-2$', 'On ne peut pas déterminer le signe sans calculer le discriminant d\'abord'], answer: 0, correction: 'La règle "négatif entre les racines" ne s\'applique qu\'à condition que $a > 0$.<br/><br/>Ici $a = -1 < 0$ : la parabole est renversée, donc le trinôme est <strong>positif</strong> entre les racines ($2 < x < 3$) et <strong>négatif</strong> à l\'extérieur ($x < 2$ ou $x > 3$).<br/><br/>Retiens : toujours commencer par vérifier le signe de $a$ !' },
      { q: 'Si $\\Delta<0$ et $a>0$, le trinôme est :', options: ['Toujours négatif', 'Toujours positif', 'Nul partout', 'Tantôt positif, tantôt négatif'], answer: 1, correction: '$\\Delta < 0$ signifie que la parabole ne coupe pas l\'axe des abscisses : il n\'y a pas de racine réelle.<br/><br/>Comme $a > 0$, le trinôme est du signe de $a$, donc <strong>toujours positif</strong> sur $\\mathbb{R}$.' },
      { q: 'Résoudre $x^2-x-6>0$ (racines $-2$ et $3$, $a=1>0$) :', options: ['$]-2;3[$', '$]-\\infty;-2[\\cup]3;+\\infty[$', '$x>3$', '$x<-2$'], answer: 1, correction: 'Comme $a = 1 > 0$, le trinôme est du signe de $a$ à l\'extérieur des racines, c\'est-à-dire <strong>positif</strong>.<br/><br/>L\'ensemble solution de $x^2 - x - 6 > 0$ est donc $x < -2$ ou $x > 3$, soit $]-\\infty\\,;\\,-2[ \\cup ]3\\,;\\,+\\infty[$.' },
      { q: 'Le trinôme $x^2 + x + 1$ est :', options: ['Toujours positif car $\\Delta = -3 < 0$ et $a = 1 > 0$', 'Toujours négatif', 'Positif uniquement pour $x > 0$', 'Nul en $x = -1$'], answer: 0, correction: 'On calcule $\\Delta = 1 - 4 = -3 < 0$ : pas de racine réelle.<br/><br/>Comme $a = 1 > 0$, le trinôme est du signe de $a$, c\'est-à-dire <strong>strictement positif</strong> pour tout $x \\in \\mathbb{R}$.' },
      { q: 'L\'ensemble solution de $-2x^2 + 6x - 4 \\leq 0$ (racines $1$ et $2$) est :', options: ['$[1\\,;\\,2]$', '$]-\\infty\\,;\\,1] \\cup [2\\,;\\,+\\infty[$', '$\\mathbb{R}$', '$\\emptyset$'], answer: 1, correction: 'On identifie $a = -2 < 0$ : la parabole est retournée.<br/><br/>Le trinôme est <strong>positif entre les racines</strong> ($[1\\,;\\,2]$) et <strong>négatif à l\'extérieur</strong>.<br/><br/>Donc $-2x^2 + 6x - 4 \\leq 0$ pour $x \\in ]-\\infty\\,;\\,1] \\cup [2\\,;\\,+\\infty[$.' }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ELARGIE le 2026-09-14.
         Avant : deux tâches seulement (la même lecture de tableau selon que $a$
         soit positif ou négatif), tirées quarante-deux fois. Le chapitre
         imprimait donc la même question dix-sept fois sous dix-sept habillages.

         Sept tâches désormais. Elles couvrent les trois entrées du chapitre que
         la banque d'origine ignorait complètement : le cas $\Delta < 0$ (signe
         constant, aucune racine), l'inéquation qui ne se présente pas déjà sous
         la forme « $> 0$ », le comptage des solutions ENTIÈRES d'une inéquation,
         le produit de deux facteurs (où le tableau de signes sert vraiment à
         quelque chose) et la lecture d'un intervalle de rentabilité. */
      generate() {
        const tache = pick(['borne', 'constant', 'transposer', 'entiers', 'produit', 'amplitude', 'rentable']);

        /* Écriture d'un terme en $x$ avec son signe, sans jamais imprimer le
           coefficient $1$ : « $+x$ » et non « $+1x$ », « $-x$ » et non « $-1x$ ».
           Le cas se présente réellement ici — $b = -a(x_1+x_2)$ vaut $\pm 1$ pour
           plusieurs couples de racines tirables — et il n'est visible qu'en
           balayant tous les tirages, pas en relisant un exemple. */
        const terme = (coef) => (coef >= 0 ? '+ ' : '- ') + (Math.abs(coef) === 1 ? '' : Math.abs(coef));

        /* Terme constant en fin d'expression. Trois defauts distincts ont ete
           trouves le 2026-09-14 en exercant 400 tirages — aucun n'etait visible
           en relisant le code, tous l'etaient dans le livre :
           — « $-3x^2 + 15x + 0$ » quand une racine vaut 0 (c = 0) ;
           — « $x^2 + 0x + 1$ » quand la somme des racines est nulle (b = 0) ;
           — « $(4x - 0)(5x - 20)$ » quand un facteur s'annule en 0.
           Un terme nul ne s'ecrit pas, il disparait. */
        const constante = (coef) => (coef === 0 ? '' : (coef > 0 ? '+ ' + coef : '- ' + (-coef)));
        /* Assemble un trinome en supprimant les termes absents ET l'espace
           qu'ils laissent derriere eux : « $-3x^2 + 15x $ » avec son espace
           final avant le dollar est du LaTeX sale, et il sortait de la meme
           source que les termes nuls. */
        const trinome = (tete, coefB, coefC) => (tete + ' ' + termeX(coefB) + ' ' + constante(coefC)).replace(/\s+/g, ' ').trim();
        /* Idem pour le terme en x : coefficient nul, terme absent ; coefficient
           1, coefficient non imprime. */
        const termeX = (coef) => (coef === 0 ? '' : terme(coef) + 'x');
        /* Ecriture d'un nombre a l'interieur d'un calcul : un negatif s'y met
           entre parentheses, sans quoi on imprime « $2 - -3 + 1$ ». */
        const par = (n) => (n < 0 ? '(' + n + ')' : String(n));

        if (tache === 'constant') {
          /* Le cas $\Delta < 0$ : le trinôme garde le signe de $a$ sur $\mathbb{R}$
             tout entier. Absent de la banque d'origine, alors que le cours en
             fait une des trois branches de sa méthode. On demande le signe codé
             par $1$ ou $-1$ pour rester numérique. */
          const a = pick([-3, -2, -1, 1, 2, 3]);
          const s = rand(1, 4);
          const b = -2 * a * s;
          const ecart = rand(1, 6);
          const c = a * s * s + a * ecart;       // sommet décalé du bon côté : Delta = -4a^2 ecart < 0
          const delta = b * b - 4 * a * c;
          return {
            statement: `Soit $f(x) = ${trinome((a === 1 ? '' : a === -1 ? '-' : a) + 'x^2', b, c)}$.<br/><br/>1) Calculer $\\Delta$ et constater qu'il est négatif.<br/>2) En déduire le signe de $f(x)$ sur $\\mathbb{R}$.<br/><br/>Répondre $1$ si $f$ est toujours positive, $-1$ si $f$ est toujours négative.`,
            answer: a > 0 ? 1 : -1, tolerance: 0, unit: '',
            hint: `Quand $\\Delta < 0$, la parabole ne coupe jamais l'axe des abscisses : elle reste entièrement d'un seul côté, celui que lui donne le signe de $a$.`,
            solution: [
              `On calcule $\\Delta = (${b})^2 - 4 \\times (${a}) \\times (${c}) = ${b * b} ${-4 * a * c >= 0 ? '+ ' + (-4 * a * c) : '- ' + (4 * a * c)} = ${delta}$.`,
              `Comme $\\Delta = ${delta} < 0$, le trinôme n'a <strong>aucune racine réelle</strong> : la parabole ne rencontre jamais l'axe des abscisses, donc elle ne change jamais de signe.`,
              `Son signe est alors celui de $a = ${a}$, c'est-à-dire ${a > 0 ? '<strong>positif</strong>' : '<strong>négatif</strong>'} sur $\\mathbb{R}$ tout entier. La réponse est donc $${a > 0 ? 1 : -1}$.`
            ]
          };
        }

        if (tache === 'transposer') {
          /* L'inéquation qui n'est pas déjà écrite « trinôme > 0 ». L'élève doit
             tout ramener d'un même côté AVANT de chercher les racines : c'est
             l'étape que la banque d'origine faisait à sa place en donnant
             directement le trinôme et ses racines. */
          const r1 = rand(-3, 1), r2 = r1 + rand(2, 5);
          const a = pick([1, 2]);
          const b = -a * (r1 + r2), c = a * r1 * r2;
          const k = rand(2, 9);                  // second membre déplacé
          return {
            statement: `Résoudre l'inéquation $${trinome((a === 1 ? '' : a) + 'x^2', b, c + k)} > ${k}$.<br/><br/>1) Ramener tous les termes du même côté.<br/>2) Factoriser et dresser le tableau de signe.<br/><br/>L'ensemble solution s'écrit $]-\\infty\\,;\\,x_1[ \\cup ]x_2\\,;\\,+\\infty[$. Donner la valeur de $x_2$.`,
            answer: r2, tolerance: 0, unit: '',
            hint: `Commence par soustraire $${k}$ des deux côtés : l'inéquation devient « trinôme $> 0$ », et seulement là le tableau de signe a un sens.`,
            solution: [
              `On soustrait $${k}$ de chaque côté : l'inéquation devient $${a === 1 ? '' : a}x^2 ${termeX(b)} ${constante(c)} > 0$.`,
              `Le discriminant du trinôme obtenu vaut $\\Delta = ${b * b - 4 * a * c}$, ses racines sont $x_1 = ${r1}$ et $x_2 = ${r2}$, et $a = ${a} > 0$.`,
              `Le trinôme est donc positif <strong>à l'extérieur</strong> des racines : l'ensemble solution est $]-\\infty\\,;\\,${r1}[ \\cup ]${r2}\\,;\\,+\\infty[$, et $x_2 = ${r2}$.`
            ]
          };
        }

        if (tache === 'entiers') {
          /* Compter les entiers d'un intervalle solution. La question oblige à
             lire correctement les DEUX bornes, là où la banque d'origine n'en
             demandait qu'une : un élève qui se trompe de côté du tableau ne peut
             pas tomber juste par hasard. */
          const r1 = rand(-4, -1), r2 = rand(2, 6);
          const a = pick([1, 2, 3]);
          const b = -a * (r1 + r2), c = a * r1 * r2;
          const nb = r2 - r1 - 1;                // entiers strictement entre r1 et r2
          return {
            statement: `Soit $f(x) = ${trinome((a === 1 ? '' : a) + 'x^2', b, c)}$, dont les racines sont $${r1}$ et $${r2}$.<br/><br/>Résoudre $f(x) < 0$, puis compter combien de <strong>nombres entiers</strong> appartiennent à l'ensemble solution.<br/><br/>Donner ce nombre.`,
            answer: nb, tolerance: 0, unit: '',
            hint: `Ici $a = ${a} > 0$ : le trinôme est négatif entre ses racines. Il reste à compter les entiers strictement compris entre $${r1}$ et $${r2}$ — les bornes elles-mêmes ne comptent pas, puisque $f$ y est nulle et non négative.`,
            solution: [
              `Comme $a = ${a} > 0$, la parabole est tournée vers le haut : le trinôme est <strong>négatif entre ses racines</strong>, donc $f(x) < 0$ pour $x \\in ]${r1}\\,;\\,${r2}[$.`,
              `Les entiers de cet intervalle ouvert vont de $${r1 + 1}$ à $${r2 - 1}$ : les bornes $${r1}$ et $${r2}$ sont exclues, car $f$ y vaut $0$ et l'inégalité est stricte.`,
              // Même défaut que plus bas dans ce fichier : le $ ouvrant
              // manquait. Trouvé par scripts/manuel/tests/dollars-1re.test.js,
              // écrit après que le premier eut bloqué la publication de
              // l'ouvrage entier (2026-09-14).
              `Il y en a donc $${r2 - 1} - ${par(r1 + 1)} + 1 = ${nb}$.`
            ]
          };
        }

        if (tache === 'produit') {
          /* Le tableau de signe d'un PRODUIT de deux facteurs du premier degré.
             C'est l'usage pour lequel le tableau de signe a été inventé, et il
             manquait entièrement. La réponse demandée est la borne gauche de
             l'intervalle où le produit est négatif. */
          /* La racine du premier facteur est tiree dans -3..-1 et jamais 0 :
             avec 0 le gabarit imprimait « $(4x - 0)$ ». Defaut trouve le
             2026-09-14 sur 400 tirages, invisible sur les douze du livre. */
          const p = rand(1, 4), q = rand(1, 5);      // facteurs (px - m) et (qx - n)
          const m = p * rand(-3, -1), n = q * rand(1, 4);
          const x1 = m / p, x2 = n / q;              // racines, entières par construction
          const gauche = Math.min(x1, x2), droite = Math.max(x1, x2);
          return {
            statement: `On considère $f(x) = (${p === 1 ? '' : p}x ${m >= 0 ? '- ' + m : '+ ' + (-m)})(${q === 1 ? '' : q}x - ${n})$.<br/><br/>1) Trouver les valeurs de $x$ qui annulent chacun des deux facteurs.<br/>2) Dresser le tableau de signe du produit.<br/><br/>Le produit est négatif sur un intervalle $]\\alpha\\,;\\,\\beta[$. Donner la valeur de $\\alpha$.`,
            answer: gauche, tolerance: 0.001, unit: '',
            hint: `Chaque facteur du premier degré change de signe une seule fois, à l'endroit où il s'annule. Le produit, lui, est négatif exactement là où les deux facteurs sont de signes contraires.`,
            solution: [
              `Le premier facteur s'annule en $x = ${x1}$, le second en $x = ${x2}$ : ce sont les deux seules valeurs où le produit peut changer de signe.`,
              `Chacun des deux facteurs est croissant (leurs coefficients $${p}$ et $${q}$ sont positifs) : chacun est négatif avant sa racine, positif après.`,
              `Les deux facteurs sont donc de signes contraires uniquement entre $${gauche}$ et $${droite}$, et c'est là que le produit est négatif. La borne demandée est $\\alpha = ${gauche}$.`
            ]
          };
        }

        if (tache === 'amplitude') {
          /* La LARGEUR de l'intervalle solution, et non une de ses bornes. Un
             élève qui confond « entre les racines » et « à l'extérieur » ne peut
             pas produire ce nombre par accident : la longueur d'une réunion de
             deux demi-droites serait infinie. */
          const r1 = rand(-5, 0), r2 = r1 + rand(2, 7);
          const a = pick([-3, -2, -1]);              // a négatif : positif ENTRE les racines
          const b = -a * (r1 + r2), c = a * r1 * r2;
          return {
            statement: `Soit $f(x) = ${trinome((a === -1 ? '-' : a) + 'x^2', b, c)}$, de racines $${r1}$ et $${r2}$.<br/><br/>1) Sur quel intervalle $f(x) \\geq 0$ ?<br/>2) Calculer la <strong>longueur</strong> de cet intervalle.<br/><br/>Donner cette longueur.`,
            answer: r2 - r1, tolerance: 0, unit: '',
            hint: `Le coefficient $a = ${a}$ est négatif : la parabole est tournée vers le bas, donc positive entre ses racines. La longueur d'un intervalle $[\\alpha\\,;\\,\\beta]$ vaut $\\beta - \\alpha$.`,
            solution: [
              /* Le coefficient est écrit « $a$ est négatif » plutôt que
                 « $a = -2 < 0$ ».

                 RAISON, et c'est un DÉFAUT DU PIPELINE, pas une préférence de
                 style (2026-09-14) : `titreDeGroupe` (scripts/manuel/chapitre.js)
                 construit l'intertitre de la banque professeur en retirant
                 D'ABORD les balises HTML, PUIS les formules. Or un « < » nu
                 dans une formule fait que la suite du texte, jusqu'au
                 « <strong> » suivant, ressemble à une balise : le retrait des
                 balises emporte alors le « $ » fermant, la parité des
                 délimiteurs est rompue, et l'intertitre imprimé contient un
                 « $ » orphelin. Résultat : « Extra }, or forgotten $ » et
                 PUBLICATION BLOQUÉE de l'ouvrage entier.

                 Le correctif propre est dans chapitre.js — retirer les
                 formules avant les balises — mais il touche tout le corpus et
                 sort d'un chantier de niveau. On contourne donc ici, et le
                 défaut est signalé dans le rapport. */
              `Comme le coefficient $a$ est négatif, la parabole est tournée vers le bas : le trinôme est <strong>positif entre ses racines</strong>, donc $f(x) \\geq 0$ sur $[${r1}\\,;\\,${r2}]$.`,
              `Cet intervalle est bien borné, ce qui n'aurait pas été le cas avec $a > 0$ : on aurait obtenu deux demi-droites, de longueur infinie.`,
              // Le $ ouvrant manquait : l'expression partait en mode texte et
              // le $ fermant ouvrait au contraire le mode math, qui restait
              // ouvert jusqu'au \end{enumerate} suivant. 28 erreurs LaTeX a la
              // compilation, aucune a la validation du corpus (2026-09-14).
              `Sa longueur vaut $${r2} - ${par(r1)} = ${r2 - r1}$.`
            ]
          };
        }

        if (tache === 'rentable') {
          /* Une lecture de tableau de signe posée en contexte, avec un seuil non
             nul : l'élève doit modéliser avant de résoudre, et l'intervalle
             s'interprète en unités de production. */
          const r1 = rand(1, 3), r2 = r1 + rand(2, 5);
          const a = pick([-1, -2]);
          const b = -a * (r1 + r2), c = a * r1 * r2;
          const ctx = pick([
            { quoi: 'Le bénéfice, en milliers d\'euros, d\'un atelier qui vend $x$ centaines de pièces est', v: 'B', seuil: 'le bénéfice est strictement positif', mot: 'centaines de pièces' },
            { quoi: 'Le gain, en milliers d\'euros, d\'un service qui traite $x$ dizaines de dossiers est', v: 'G', seuil: 'le gain est strictement positif', mot: 'dizaines de dossiers' }
          ]);
          return {
            statement: `${ctx.quoi} $${ctx.v}(x) = ${trinome((a === -1 ? '-' : a) + 'x^2', b, c)}$.<br/><br/>Déterminer l'intervalle sur lequel ${ctx.seuil}.<br/><br/>Donner la valeur de la borne <strong>supérieure</strong> de cet intervalle, en ${ctx.mot}.`,
            answer: r2, tolerance: 0, unit: '',
            hint: `Cherche d'abord les racines du trinôme avec le discriminant, puis regarde le signe de $a$ : il est négatif, donc le trinôme est positif entre les racines.`,
            solution: [
              `Le discriminant vaut $\\Delta = (${b})^2 - 4 \\times (${a}) \\times (${c}) = ${b * b - 4 * a * c}$, et les racines sont $x_1 = ${r1}$ et $x_2 = ${r2}$.`,
              `Comme $a = ${a} < 0$, la parabole est tournée vers le bas : $${ctx.v}(x) > 0$ <strong>entre</strong> les racines, c'est-à-dire pour $x \\in ]${r1}\\,;\\,${r2}[$.`,
              `L'activité n'est donc rentable ni en dessous de $${r1}$ ni au-delà de $${r2}$ : la borne supérieure demandée est $${r2}$.`
            ]
          };
        }

        // tache === 'borne' : la tâche d'origine du chapitre, conservée telle
        // quelle. Elle reste utile — c'est la lecture de base du tableau de
        // signe — mais elle ne porte plus le chapitre à elle seule.
        const r1 = rand(-4, 0), r2 = rand(1, 5);
        const aSign = pick([1, -1]);
        const a = aSign;
        const bCoef = -a * (r1 + r2), cCoef = a * r1 * r2;
        const delta = bCoef * bCoef - 4 * a * cCoef;
        const ctx = pick([
          { intro: 'La concentration d\'un produit chimique est modélisée par $C(x) = ', question: 'Pour quelles valeurs de $x$ la concentration est-elle positive ?' },
          { intro: 'Le profit d\'une entreprise est $P(x) = ', question: 'Pour quelles valeurs de $x$ le profit est-il positif ?' },
          { intro: 'On considère le trinôme $f(x) = ', question: 'Résoudre $f(x) > 0$.' }
        ]);
        const borneGauche = a > 0 ? r1 : r2;
        const signeInfo = a > 0 ? `$a = ${a} > 0$ : positif à l'extérieur des racines, négatif entre.` : `$a = ${a} < 0$ : positif entre les racines, négatif à l'extérieur.`;
        const reponse = a > 0 ? r2 : r1;
        return {
          statement: `${ctx.intro}${trinome((a === 1 ? '' : a === -1 ? '-' : a) + 'x^2', bCoef, cCoef)}$.<br/><br/>Les racines sont $x_1 = ${r1}$ et $x_2 = ${r2}$.<br/><br/>1) Identifier le signe de $a$.<br/>2) Dresser le tableau de signe.<br/>3) ${ctx.question}<br/><br/>Donner la borne ${a > 0 ? 'droite' : 'gauche'} de l'intervalle où le trinôme est positif (la plus ${a > 0 ? 'petite' : 'grande'}).`,
          answer: reponse,
          tolerance: 0,
          unit: '',
          hint: `${signeInfo} Les racines sont $${r1}$ et $${r2}$.`,
          solution: [
            `${signeInfo}`,
            `${a > 0 ? 'Positif pour $x < ' + r1 + '$ ou $x > ' + r2 + '$ ; négatif pour $' + r1 + ' < x < ' + r2 + '$.' : 'Positif pour $' + r1 + ' < x < ' + r2 + '$ ; négatif pour $x < ' + r1 + '$ ou $x > ' + r2 + '$.'}`,
            `Borne demandée : $${reponse}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Le bénéfice d\'une entreprise (en milliers d\'euros) est modélisé par $B(x)=-x^2+6x-5$ où $x$ est le nombre de produits (en centaines) vendus.',
      tasks: [
        'Calculer les racines de $B(x)=0$.',
        'Sur quel intervalle le bénéfice est-il positif ?',
        'Quel nombre de produits maximise le bénéfice, et quelle est cette valeur maximale ?'
      ],
      solutions: [
        '$\\Delta=36-20=16$. $x_1=\\frac{-6+4}{-2}=1$ ; $x_2=\\frac{-6-4}{-2}=5$.',
        '$a=-1<0$ : $B(x)>0$ entre les racines, soit pour $1<x<5$ (100 à 500 produits).',
        'Sommet en $x_s=-b/(2a)=-6/(-2)=3$. $B(3)=-9+18-5=4$ (soit $4000$ €).'
      ],
      finalAnswer: 'Bénéfice positif pour $x\\in]1;5[$. Maximum $4000$ € pour $300$ produits.'
    },

    evaluation: {
      title: 'Évaluation — Signe d\'un trinôme',
      duration: '30 min',
      questions: [
        {
          statement: 'Le trinôme $f(x) = x^2 - 4x - 5$ a pour racines $x_1 = -1$ et $x_2 = 5$. Sur quel intervalle $f(x) < 0$ ?',
          type: 'multiple-choice',
          options: ['$]-\\infty\\,;\\,-1[ \\cup ]5\\,;\\,+\\infty[$', '$]-1\\,;\\,5[$', '$]0\\,;\\,5[$', '$]-5\\,;\\,1[$'],
          answer: 1,
          points: 2,
          correction: 'On identifie $a = 1 > 0$ : la parabole est orientée vers le haut.<br/><br/>Le trinôme est donc <strong>négatif entre les racines</strong>. Ainsi $f(x) < 0$ pour $x \\in ]-1\\,;\\,5[$.'
        },
        {
          statement: 'Le trinôme $g(x) = -2x^2 + 8x - 6$ a pour racines $1$ et $3$. Pour quelles valeurs de $x$ a-t-on $g(x) > 0$ ?',
          type: 'multiple-choice',
          options: ['$x < 1$ ou $x > 3$', '$1 < x < 3$', '$x > 3$', '$x < 1$'],
          answer: 1,
          points: 2,
          correction: 'On note $a = -2 < 0$ : la parabole est retournée (ouverte vers le bas).<br/><br/>Le trinôme est donc <strong>positif entre les racines</strong>. Ainsi $g(x) > 0$ pour $x \\in ]1\\,;\\,3[$.'
        },
        {
          statement: 'Résoudre l\'inéquation $x^2 + 3x + 5 > 0$. Quel est l\'ensemble solution ?',
          type: 'multiple-choice',
          options: ['$\\mathbb{R}$ (toujours vrai)', 'Ensemble vide', '$]-\\infty\\,;\\,-1[$', '$]0\\,;\\,+\\infty[$'],
          answer: 0,
          points: 2,
          correction: 'On calcule $\\Delta = 9 - 20 = -11 < 0$ : pas de racine réelle.<br/><br/>Comme $a = 1 > 0$, le trinôme est du signe de $a$ partout, donc <strong>strictement positif</strong> pour tout $x \\in \\mathbb{R}$. L\'ensemble solution est $\\mathbb{R}$ entier.'
        },
        {
          /* QUESTION 4 RÉÉCRITE le 2026-09-14, pour deux raisons.

             Sur le fond : elle demandait un discriminant, c'est-à-dire le geste
             du chapitre PRÉCÉDENT, et elle le demandait après avoir donné les
             racines — donc après avoir donné la réponse à la question que le
             discriminant sert à trancher. Ce chapitre porte sur le SIGNE d'un
             trinôme, pas sur ses racines.

             Sur l'équilibre : mesuré sur les cinquante questions du niveau,
             « calculer » atteignait 50 %, très au-delà du plafond de 35 % du
             cahier des charges, tandis que « communiquer » restait sous 6 %.
             La nouvelle question demande d'expliquer une erreur à quelqu'un,
             ce que ce devoir ne demandait nulle part. L'étiquette suit
             l'énoncé, jamais l'inverse. */
          statement: 'Un camarade doit résoudre $-x^2 + 4x - 3 > 0$. Il trouve correctement les racines $1$ et $3$, puis écrit : « le trinôme est négatif entre les racines, donc la solution est $x < 1$ ou $x > 3$ ».<br/><br/>Que lui réponds-tu ?',
          type: 'multiple-choice',
          options: [
            'Sa règle n\'est valable que si $a > 0$ : ici $a = -1$, donc le trinôme est positif entre les racines et la solution est $]1\\,;\\,3[$',
            'Il a raison : un trinôme est toujours négatif entre ses racines',
            'Sa solution est bonne, mais il faut inclure les racines : $x \\leqslant 1$ ou $x \\geqslant 3$',
            'Il n\'y a pas de solution, car $a < 0$ rend le trinôme négatif partout'
          ],
          answer: 0,
          points: 2,
          correction: 'La règle « négatif entre les racines » est celle que l\'on rencontre le plus souvent, parce que la plupart des exemples ont $a > 0$. Elle n\'est pourtant qu\'un cas particulier.<br/><br/>La règle générale est : <strong>un trinôme est du signe de $a$ à l\'extérieur des racines, et du signe contraire entre elles</strong>.<br/><br/>Ici $a = -1 < 0$, donc le trinôme est <strong>négatif</strong> à l\'extérieur et <strong>positif</strong> entre $1$ et $3$. L\'ensemble solution de $-x^2 + 4x - 3 > 0$ est donc $]1\\,;\\,3[$, exactement l\'inverse de ce que ton camarade a écrit.<br/><br/>Le réflexe qui évite l\'erreur : regarder le signe de $a$ <strong>avant</strong> de conclure, et se demander si la parabole monte ou descend.'
        },
        {
          statement: 'On sait que $-x^2 + 6x - 9 \\leq 0$ pour tout $x$. Quelle est la valeur de $x$ pour laquelle $-x^2 + 6x - 9 = 0$ ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On calcule $\\Delta = 36 - 36 = 0$ : il y a une <strong>solution double</strong>.<br/><br/>$x_0 = \\dfrac{-6}{2 \\times (-1)} = 3$.<br/><br/>Puisque $a = -1 < 0$ et $\\Delta = 0$, le trinôme est $\\leq 0$ partout, et nul uniquement en $x = 3$.'
        }
      ]
    }
  });
