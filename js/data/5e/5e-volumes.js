/* =========================================================
   Spark Learning – data/5e/5e-volumes.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-volumes',
    level: 1, subject: 'maths',
    icon: '📦',
    title: 'Volumes (prismes et cylindres)',
    subtitle: 'Formule de base, conversions',
    keywords: ['Volume', 'Prisme', 'Cylindre', 'Aire de base', 'Hauteur', 'Litre'],
    physics: 'Calcul du volume d\'une canalisation cylindrique, d\'un réservoir ou d\'une citerne',

    cours: {
      /* DECOUVRIR REECRIT LE 2026-09-13. L'intro donnait la formule en premier
         mot. La question retenue porte sur une citerne CYLINDRIQUE, dont le
         volume n'est calculable par aucun outil de sixieme, ou seul le pave
         droit etait vu. Valeur VERIFIEE : 3,14 x 0,6^2 x 2 = 2,261 m3, soit
         environ 2 260 litres. */
      intro: 'Une citerne cylindrique mesure $1{,}2$ m de diamètre et $2$ m de haut. Combien de litres d\'eau peut-elle contenir ?<br/><br/>' +
        'La question paraît simple, et pourtant : en sixième, tu ne savais calculer que le volume d\'un pavé droit, en multipliant trois longueurs. Ici il n\'y en a pas trois — la base est ronde. Il va falloir une autre idée, et elle vaudra aussi bien pour les prismes que pour les cylindres.<br/><br/>' +
        'La formule universelle $V = \\mathcal{A}_{\\text{base}} \\times h$ s\'applique à tout <strong>prisme</strong> et tout <strong>cylindre</strong>. L\'intuition : le volume est la surface de la base « empilée » sur une hauteur $h$.<br/><br/>' +
        '<strong>Point clé sur la hauteur :</strong> la hauteur est la distance entre les deux bases, mesurée perpendiculairement à celles-ci.<br/><br/>' +
        'Pour un <strong>cylindre</strong>, la base est un disque : $V = \\pi r^2 h$. Attention à ne pas confondre rayon et diamètre !<br/><br/>' +
        '<strong>Conversion :</strong> $1$ dm³ $= 1$ L exactement, et $1$ m³ $= 1000$ L. En chimie, le volume d\'une fiole jaugée est en mL, et la conversion vers cm³ est immédiate ($1$ mL $= 1$ cm³).<br/><br/>' +
        'Et la citerne du début ? Son rayon vaut $1{,}2 \\div 2 = 0{,}6$ m, donc $V = 3{,}14 \\times 0{,}6^2 \\times 2 \\approx 2{,}26$ m³, soit environ <strong>$2\\,260$ litres</strong>.',
      definitions: [
        { term: 'Prisme droit', def: 'Solide dont les deux bases sont des polygones identiques et parallèles, reliés par des faces rectangulaires. Volume = aire de la base × hauteur.' },
        { term: 'Cylindre', def: 'Solide dont les deux bases sont des disques identiques et parallèles. Volume = $\\pi r^2 \\times h$.' },
        { term: 'Pavé droit', def: 'Prisme dont les bases sont des rectangles. Volume = $L \\times l \\times h$. Cas particulier : le cube ($L = l = h$).' },
        { term: 'Hauteur d\'un solide', def: 'Distance perpendiculaire entre les deux bases. Ne pas confondre avec un côté latéral si le prisme est incliné.' }
      ],
      example: {
        statement: 'Un cylindre a un rayon de $5$ cm et une hauteur de $12$ cm. Calcule son volume.',
        steps: [
          'Aire de la base (disque) : $\\pi r^2 = 3{,}14 \\times 25 = 78{,}5$ cm².',
          'Volume : $V = 78{,}5 \\times 12 = 942$ cm³.',
          'Conversion : $942$ cm³ $= 0{,}942$ L.'
        ],
        answer: '$942$ cm³ $\\approx 0{,}94$ L'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Prismes et cylindres',
        title: 'Volume = aire de la base × hauteur, hauteur toujours perpendiculaire',
        description: 'Le pavé droit et le cylindre partagent la même formule $V = \\mathcal{A}_{\\text{base}} \\times h$. Sur le cylindre de l\'exemple du cours ($r = 5$ cm, $h = 12$ cm), l\'angle droit rappelle que la hauteur est perpendiculaire à la base — jamais un côté incliné.',
        svg: `
          <svg viewBox="0 0 420 240" role="img" aria-labelledby="volumes-title volumes-desc">
            <title id="volumes-title">Pave droit et cylindre avec hauteur perpendiculaire a la base</title>
            <desc id="volumes-desc">A gauche un pave droit de longueur L, largeur l et hauteur h. A droite le cylindre de l'exemple du cours, de rayon 5 centimetres et de hauteur 12 centimetres, avec sa base en disque mise en evidence et sa hauteur perpendiculaire marquee par un angle droit.</desc>
            <rect x="15" y="14" width="185" height="34" rx="10" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="annotation-label" x="26" y="36">Pavé droit :</text>
            <text class="tick-label" x="108" y="36">V = L × l × h</text>
            <rect x="215" y="14" width="190" height="34" rx="10" fill="color-mix(in srgb, var(--accent) 14%, var(--bg-card))" stroke="color-mix(in srgb, var(--accent) 38%, var(--border))"></rect>
            <text class="annotation-label" x="226" y="36">Cylindre :</text>
            <text class="tick-label" x="296" y="36">V = π × r² × h</text>
            <polygon points="30,105 120,105 150,80 60,80" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)" stroke="none"></polygon>
            <polygon points="120,195 120,105 150,80 150,170" fill="color-mix(in srgb, var(--diagram-accent) 4%, transparent)" stroke="none"></polygon>
            <polygon points="30,195 120,195 120,105 30,105" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="30" y1="195" x2="120" y2="195"></line>
            <line class="frame-line" x1="120" y1="195" x2="120" y2="105"></line>
            <line class="frame-line" x1="120" y1="105" x2="30" y2="105"></line>
            <line class="frame-line" x1="30" y1="105" x2="30" y2="195"></line>
            <line class="frame-line" x1="30" y1="105" x2="60" y2="80"></line>
            <line class="frame-line" x1="120" y1="105" x2="150" y2="80"></line>
            <line class="frame-line" x1="60" y1="80" x2="150" y2="80"></line>
            <line class="frame-line" x1="120" y1="195" x2="150" y2="170"></line>
            <line class="frame-line" x1="150" y1="170" x2="150" y2="80"></line>
            <path class="axis" d="M30 183 L42 183 L42 195"></path>
            <text class="annotation-label" x="68" y="213">L</text>
            <text class="annotation-label" x="34" y="74">l</text>
            <text class="annotation-label" x="10" y="153">h</text>
            <text class="label-soft" x="88" y="66">Base</text>
            <ellipse class="frame-line" cx="280" cy="200" rx="50" ry="16" fill="color-mix(in srgb, var(--diagram-accent) 4%, transparent)"></ellipse>
            <line class="frame-line" x1="230" y1="80" x2="230" y2="200"></line>
            <line class="frame-line" x1="330" y1="80" x2="330" y2="200"></line>
            <ellipse class="frame-line" cx="280" cy="80" rx="50" ry="16" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></ellipse>
            <line class="guide-line" x1="280" y1="80" x2="330" y2="80"></line>
            <circle class="plot-point" cx="280" cy="80" r="4"></circle>
            <circle class="plot-point-alt" cx="330" cy="80" r="4"></circle>
            <line class="guide-line" x1="280" y1="200" x2="345" y2="200"></line>
            <line class="guide-line" x1="345" y1="80" x2="345" y2="200"></line>
            <line class="frame-line" x1="340" y1="80" x2="350" y2="80"></line>
            <line class="frame-line" x1="340" y1="200" x2="350" y2="200"></line>
            <path class="axis" d="M333 200 L333 188 L345 188"></path>
            <text class="label-soft" x="264" y="58">Base</text>
            <text class="annotation-label" x="334" y="72">r = 5 cm</text>
            <text class="annotation-label" x="352" y="143">h = 12 cm</text>
          </svg>
        `,
        notes: [
          'Le pavé droit a pour base un rectangle $L \\times l$ ; sa hauteur $h$ est perpendiculaire à cette base : $V = L \\times l \\times h$.',
          'Le cylindre a pour base un disque de rayon $r = 5$ cm ; son aire de base vaut $\\pi \\times 5^2 \\approx 78{,}5$ cm² (avec $\\pi \\approx 3{,}14$).',
          'Avec une hauteur $h = 12$ cm, le volume du cylindre est $V = 78{,}5 \\times 12 = 942$ cm³, soit environ $0{,}94$ L.'
        ],
        reading: 'Repère toujours d\'abord la base et sa forme, puis mesure la hauteur perpendiculairement à cette base — pas le long d\'une arête inclinée.',
        caption: 'Pavé droit (formule générale $V = L \\times l \\times h$) et cylindre de rayon $5$ cm et hauteur $12$ cm — l\'exemple du cours donne $V = 942$ cm³. Dans les deux cas, la hauteur est perpendiculaire à la base.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13) — une figure par MALENTENDU, jamais
         une figure par formule : la formule $V = \mathcal{A}_{base} \times h$
         se lit dans l'encadre, elle n'a pas besoin d'etre dessinee.

         Les trois malentendus retenus sont ceux que le cours signale lui-meme
         comme des pieges, et chacun est indetectable au seul enonce :
           1. la hauteur confondue avec l'arete laterale d'un prisme incline ;
           2. le diametre pris pour le rayon, qui QUADRUPLE le volume ;
           3. le litre vecu comme une unite sans lien avec les cm3.

         Toutes les proportions sont VERIFIEES PAR LE CALCUL, pas a l'oeil :
         l'arete inclinee mesure 98,49 unites pour une hauteur de 90, soit le
         rapport 1,094 annonce ; le rapport des volumes vaut exactement 4 ;
         le cube de 1 dm contient exactement 10x10x10 = 1000 cubes de 1 cm. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'La hauteur, pas le côté',
          title: 'Deux prismes de même volume, dont un penché',
          description: 'Ces deux prismes ont la <strong>même base</strong> et la <strong>même hauteur</strong> : leurs volumes sont donc égaux. Pourtant l\'arête latérale du prisme penché est <strong>plus longue</strong> que sa hauteur. C\'est elle que l\'élève mesure par réflexe, et c\'est elle qui donne un volume trop grand.',
          svg: `
            <svg viewBox="0 0 400 232" role="img" aria-labelledby="volumes-hauteur-title volumes-hauteur-desc">
              <title id="volumes-hauteur-title">Un prisme droit et un prisme penche de meme base et de meme hauteur</title>
              <desc id="volumes-hauteur-desc">A gauche un prisme droit pose sur une base horizontale : sa hauteur, marquee par un angle droit, se confond avec son arete verticale. A droite un prisme penche ayant exactement la meme base et exactement la meme hauteur perpendiculaire, mais dont l'arete laterale est oblique et donc plus longue que la hauteur. Les deux solides sont poses sur la meme ligne de base et dessines a la meme echelle. La hauteur perpendiculaire est tracee en trait tirete a l'interieur du prisme penche, ce qui montre qu'elle est plus courte que l'arete. Les deux volumes sont egaux puisque la base et la hauteur le sont.</desc>

              <text class="annotation-label" x="200" y="18" text-anchor="middle">même base, même hauteur : même volume</text>

              <!-- Prisme DROIT. Base 90 de large, hauteur 90 : l'arete
                   verticale EST la hauteur, il n'y a rien a confondre. -->
              <polygon class="frame-line" points="40,190 130,190 130,100 40,100" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></polygon>
              <line class="frame-line" x1="40" y1="100" x2="64" y2="80"></line>
              <line class="frame-line" x1="130" y1="100" x2="154" y2="80"></line>
              <line class="frame-line" x1="64" y1="80" x2="154" y2="80"></line>
              <line class="frame-line" x1="154" y1="80" x2="154" y2="170"></line>
              <line class="frame-line" x1="130" y1="190" x2="154" y2="170"></line>
              <path class="axis" d="M40 178 L52 178 L52 190"></path>
              <text class="annotation-label" x="32" y="149" text-anchor="end">h</text>
              <text class="tick-label" x="85" y="208" text-anchor="middle">prisme droit</text>

              <!-- Prisme PENCHE. Base IDENTIQUE (90 de large) posee sur la MEME
                   ligne de base y=190, hauteur perpendiculaire IDENTIQUE (90) :
                   le sommet est donc a y=100 lui aussi. Seul le decalage
                   lateral de 40 change, ce qui est exactement la convention du
                   patron « comparaison » — la grandeur qui varie doit etre la
                   seule difference visible. -->
              <polygon class="frame-line" points="246,190 336,190 376,100 286,100" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></polygon>
              <line class="frame-line" x1="286" y1="100" x2="310" y2="80"></line>
              <line class="frame-line" x1="376" y1="100" x2="400" y2="80"></line>
              <line class="frame-line" x1="310" y1="80" x2="400" y2="80"></line>

              <!-- La hauteur perpendiculaire, en tirete a l'INTERIEUR : elle
                   descend du sommet arriere droit vers la base, a la verticale.
                   Elle mesure 90, l'arete oblique 98,49. -->
              <line class="guide-line" x1="286" y1="100" x2="286" y2="190" stroke-dasharray="5 4"></line>
              <path class="axis" d="M286 178 L298 178 L298 190"></path>
              <text class="annotation-label" x="278" y="149" text-anchor="end">h</text>
              <text class="label-soft" x="356" y="152" text-anchor="start">arête</text>
              <text class="label-soft" x="356" y="168" text-anchor="start">plus longue</text>
              <text class="tick-label" x="311" y="208" text-anchor="middle">prisme penché</text>

              <text class="label-soft" x="200" y="226" text-anchor="middle">la hauteur se mesure à la verticale, jamais le long de arête</text>
            </svg>
          `,
          notes: [
            'Les deux prismes ont la même base et la même hauteur $h$ : leurs volumes sont <strong>égaux</strong>.',
            'Sur le prisme penché, l\'arête latérale est environ $1{,}09$ fois plus longue que la hauteur.',
            'Prendre l\'arête pour la hauteur donnerait donc un volume <strong>trop grand d\'environ $9\\%$</strong> — une erreur invisible sur le résultat, qui reste plausible.'
          ],
          reading: 'Pose ta règle à la verticale, du sol jusqu\'à la base du haut : c\'est cela, la hauteur. Suis maintenant l\'arête penchée du doigt : tu parcours un chemin plus long. Le solide n\'a pourtant pas grossi.',
          caption: 'Un prisme droit et un prisme penché de même base et de même hauteur : les volumes sont égaux, mais l\'arête du second est plus longue que sa hauteur.'
        },
        {
          theme: 'maths',
          kicker: 'Rayon ou diamètre',
          title: 'Confondre les deux multiplie le volume par quatre',
          description: 'Le cylindre de gauche est celui du cours : $r = 5$ cm. Celui de droite est ce que l\'on obtient en prenant le <strong>diamètre pour le rayon</strong>. Comme le rayon est <strong>au carré</strong> dans la formule, doubler le rayon ne double pas le volume : il le <strong>quadruple</strong>.',
          svg: `
            <svg viewBox="0 0 400 244" role="img" aria-labelledby="volumes-rayon-title volumes-rayon-desc">
              <title id="volumes-rayon-title">Le cylindre juste et le cylindre obtenu en confondant rayon et diametre</title>
              <desc id="volumes-rayon-desc">A gauche, en teinte d'accent, le cylindre du cours de rayon 5 centimetres et de hauteur 12 centimetres : son volume vaut 942 centimetres cubes. A droite, en teinte faible et en trait tirete, le cylindre errone obtenu en prenant le diametre de 10 centimetres pour le rayon : son rayon vaut alors 10 centimetres et son volume 3768 centimetres cubes, soit quatre fois plus. Les deux cylindres ont la meme hauteur et sont poses sur la meme ligne de base, a la meme echelle, si bien que seul le rayon differe. Le calcul juste est place en haut, l'erreur en dessous.</desc>

              <!-- Convention du patron « piege » : le calcul JUSTE en haut et en
                   teinte d'accent, l'erreur DESSOUS en teinte faible et en trait
                   tirete. L'oeil lit le haut d'abord. -->
              <text class="annotation-label" x="14" y="20" text-anchor="start">le rayon est la moitié du diamètre</text>

              <!-- Cylindre JUSTE : r = 5 cm, demi-largeur 40 unites (echelle
                   8 unites par centimetre), hauteur 96 unites = 12 cm. -->
              <ellipse class="frame-line" cx="90" cy="180" rx="40" ry="13" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)"></ellipse>
              <line class="frame-line" x1="50" y1="84" x2="50" y2="180"></line>
              <line class="frame-line" x1="130" y1="84" x2="130" y2="180"></line>
              <ellipse class="frame-line" cx="90" cy="84" rx="40" ry="13" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></ellipse>
              <line class="guide-line" x1="90" y1="84" x2="130" y2="84"></line>
              <circle class="plot-point" cx="90" cy="84" r="3"></circle>
              <text class="tick-label" x="106" y="76" text-anchor="middle">5 cm</text>
              <text class="annotation-label" x="90" y="212" text-anchor="middle">V = 942 cm³</text>
              <text class="tick-label" x="90" y="230" text-anchor="middle">rayon 5 cm</text>

              <!-- Cylindre ERRONE : r = 10 cm, donc demi-largeur 80 unites a la
                   MEME echelle. MEME hauteur, MEME ligne de base : le rayon est
                   la seule difference visible. -->
              <ellipse class="guide-line" cx="290" cy="180" rx="80" ry="20" fill="color-mix(in srgb, var(--diagram-accent) 4%, transparent)" stroke-dasharray="5 4"></ellipse>
              <line class="guide-line" x1="210" y1="84" x2="210" y2="180" stroke-dasharray="5 4"></line>
              <line class="guide-line" x1="370" y1="84" x2="370" y2="180" stroke-dasharray="5 4"></line>
              <ellipse class="guide-line" cx="290" cy="84" rx="80" ry="20" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)" stroke-dasharray="5 4"></ellipse>
              <line class="guide-line" x1="290" y1="84" x2="370" y2="84"></line>
              <circle class="plot-point-alt" cx="290" cy="84" r="3"></circle>
              <text class="tick-label" x="330" y="76" text-anchor="middle">10 cm</text>
              <text class="label-soft" x="290" y="212" text-anchor="middle">V = 3 768 cm³</text>
              <text class="tick-label" x="290" y="230" text-anchor="middle">diamètre pris pour rayon</text>

              <text class="label-soft" x="200" y="46" text-anchor="middle">× 2 sur le rayon donne × 4 sur le volume</text>
            </svg>
          `,
          notes: [
            'Cylindre juste : $r = 5$ cm, donc $V = 3{,}14 \\times 5^2 \\times 12 = 942$ cm³.',
            'Diamètre pris pour rayon : $r = 10$ cm, donc $V = 3{,}14 \\times 10^2 \\times 12 = 3\\,768$ cm³.',
            '$3\\,768 \\div 942 = 4$ exactement : le rayon est <strong>au carré</strong>, donc le doubler multiplie le volume par $2^2 = 4$.'
          ],
          reading: 'Regarde les deux disques du dessus : celui de droite est deux fois plus large. Regarde maintenant la place qu\'il occupe : il en tient quatre comme celui de gauche. C\'est ce que fait le carré dans la formule.',
          caption: 'Le cylindre du cours ($r = 5$ cm, $V = 942$ cm³) et celui obtenu en confondant rayon et diamètre ($r = 10$ cm, $V = 3\\,768$ cm³) : quatre fois plus.'
        },
        {
          theme: 'maths',
          kicker: 'Pourquoi 1 L = 1000 cm³',
          title: 'Un litre est un cube de 10 cm d\'arête',
          description: 'Le litre n\'est pas une unité tombée du ciel, sans rapport avec les centimètres : c\'est <strong>exactement</strong> le volume d\'un cube de $1$ dm d\'arête, c\'est-à-dire de $10$ cm. Et un tel cube se remplit avec $10 \\times 10 \\times 10$ petits cubes de $1$ cm³.',
          svg: `
            <svg viewBox="0 0 400 228" role="img" aria-labelledby="volumes-litre-title volumes-litre-desc">
              <title id="volumes-litre-title">Un cube de 1 decimetre d'arete pave par mille cubes de 1 centimetre</title>
              <desc id="volumes-litre-desc">Un cube de 1 decimetre d'arete, soit 10 centimetres, est dessine en perspective. Ses trois faces visibles sont quadrillees en carres de 1 centimetre de cote : on compte 10 carres par arete. Une couche horizontale contient donc 10 fois 10, soit 100 petits cubes, et il y a 10 couches empilees, ce qui donne 1000 petits cubes de 1 centimetre cube chacun. Le volume du grand cube vaut donc 1000 centimetres cubes, c'est-a-dire 1 decimetre cube, c'est-a-dire 1 litre. Un seul petit cube unite est mis en evidence dans le coin superieur pour montrer ce que represente 1 centimetre cube.</desc>

              <!-- Cube en perspective cavaliere, arete 120 unites pour 10 cm,
                   soit 12 unites par centimetre ; fuyante reduite de moitie
                   (30 unites), qui est la definition meme de la perspective
                   cavaliere et la convention deja retenue par
                   js/data/figures-exercices.js pour le pave droit. -->
              <polygon points="60,190 180,190 210,160 90,160" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke="none"></polygon>
              <polygon points="180,190 210,160 210,40 180,70" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
              <polygon points="60,70 180,70 180,190 60,190" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)" stroke="none"></polygon>

              <!-- Quadrillage de la face avant : 10 colonnes et 10 rangees de
                   12 unites, donc des carres de 1 cm de cote exactement. -->
              <line class="grid-line" x1="72" y1="70" x2="72" y2="190"></line>
              <line class="grid-line" x1="84" y1="70" x2="84" y2="190"></line>
              <line class="grid-line" x1="96" y1="70" x2="96" y2="190"></line>
              <line class="grid-line" x1="108" y1="70" x2="108" y2="190"></line>
              <line class="grid-line" x1="120" y1="70" x2="120" y2="190"></line>
              <line class="grid-line" x1="132" y1="70" x2="132" y2="190"></line>
              <line class="grid-line" x1="144" y1="70" x2="144" y2="190"></line>
              <line class="grid-line" x1="156" y1="70" x2="156" y2="190"></line>
              <line class="grid-line" x1="168" y1="70" x2="168" y2="190"></line>
              <line class="grid-line" x1="60" y1="82" x2="180" y2="82"></line>
              <line class="grid-line" x1="60" y1="94" x2="180" y2="94"></line>
              <line class="grid-line" x1="60" y1="106" x2="180" y2="106"></line>
              <line class="grid-line" x1="60" y1="118" x2="180" y2="118"></line>
              <line class="grid-line" x1="60" y1="130" x2="180" y2="130"></line>
              <line class="grid-line" x1="60" y1="142" x2="180" y2="142"></line>
              <line class="grid-line" x1="60" y1="154" x2="180" y2="154"></line>
              <line class="grid-line" x1="60" y1="166" x2="180" y2="166"></line>
              <line class="grid-line" x1="60" y1="178" x2="180" y2="178"></line>

              <!-- Aretes du cube, en frame-line : le quadrillage explique, il ne
                   doit jamais concurrencer le contour du solide. -->
              <line class="frame-line" x1="60" y1="70" x2="180" y2="70"></line>
              <line class="frame-line" x1="180" y1="70" x2="180" y2="190"></line>
              <line class="frame-line" x1="180" y1="190" x2="60" y2="190"></line>
              <line class="frame-line" x1="60" y1="190" x2="60" y2="70"></line>
              <line class="frame-line" x1="60" y1="70" x2="90" y2="40"></line>
              <line class="frame-line" x1="180" y1="70" x2="210" y2="40"></line>
              <line class="frame-line" x1="90" y1="40" x2="210" y2="40"></line>
              <line class="frame-line" x1="210" y1="40" x2="210" y2="160"></line>
              <line class="frame-line" x1="180" y1="190" x2="210" y2="160"></line>

              <!-- Le cube unite, teinte plus fort : le seul objet a isoler. -->
              <rect class="frame-line" x="60" y="70" width="12" height="12" fill="color-mix(in srgb, var(--diagram-accent) 40%, transparent)"></rect>
              <line class="guide-line" x1="66" y1="70" x2="46" y2="30"></line>
              <text class="label-soft" x="42" y="24" text-anchor="start">1 cube = 1 cm³</text>

              <text class="tick-label" x="120" y="208" text-anchor="middle">10 cm</text>
              <text class="tick-label" x="50" y="134" text-anchor="end">10 cm</text>
              <text class="annotation-label" x="230" y="104" text-anchor="start">1 dm³ = 1 L</text>
              <text class="tick-label" x="230" y="124" text-anchor="start">10 × 10 × 10 = 1 000 cm³</text>
            </svg>
          `,
          notes: [
            'Une couche du cube contient $10 \\times 10 = 100$ petits cubes de $1$ cm³.',
            'Il y a $10$ couches empilées, donc $100 \\times 10 = 1\\,000$ petits cubes en tout.',
            'D\'où l\'égalité $1$ L $= 1$ dm³ $= 1\\,000$ cm³, qui n\'est pas une convention à retenir mais un <strong>comptage</strong>.'
          ],
          reading: 'Compte les carrés le long d\'une arête : il y en a $10$. Une couche en contient donc $100$, et il y a $10$ couches. La bouteille d\'un litre de ta cuisine tient exactement dans ce cube.',
          caption: 'Le cube de $1$ dm d\'arête pavé par $1\\,000$ cubes de $1$ cm³ : c\'est la définition du litre.'
        }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier la base</strong> et calculer son aire $\\mathcal{A}_{\\text{base}}$.',
          '<strong>Appliquer</strong> : $V = \\mathcal{A}_{\\text{base}} \\times h$.',
          '<strong>Convertir</strong> si nécessaire : $1\\,\\text{L} = 1\\,\\text{dm}^3 = 1000\\,\\text{cm}^3$.'
        ]
      },
      formulas: [
        'Prisme/cylindre : $V = \\mathcal{A}_{\\text{base}} \\times h$',
        'Pavé droit : $V = L \\times l \\times h$',
        'Cylindre : $V = \\pi r^2 \\times h$',
        '$1\\,\\text{L} = 1\\,\\text{dm}^3 = 1000\\,\\text{cm}^3$, $1\\,\\text{m}^3 = 1000\\,\\text{L}$'
      ],
      recap: [
        'Volume = aire de la base × hauteur (pour tout prisme et cylindre).',
        'Cylindre : utiliser le RAYON (pas le diamètre) dans $\\pi r^2 h$.',
        '$1$ L $= 1$ dm³ $= 1000$ cm³.',
        'La hauteur est perpendiculaire aux bases (pas un côté latéral).'
      ],
      piege: 'Piège : la formule du cylindre utilise le <strong>rayon</strong>, et un énoncé donne souvent le <strong>diamètre</strong>. Avec un diamètre de $10$ cm, le rayon vaut $5$ cm : $V = \\pi \\times 5^2 \\times h$, et non $\\pi \\times 10^2 \\times h$.<br/><br/>L\'oubli ne double pas le volume, il le <strong>quadruple</strong>, car le rayon est au carré.'
    },

    quiz: [
      {
        q: 'Un cylindre a un rayon de $3$ cm et une hauteur de $10$ cm. Quel est son volume (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$94{,}2$ cm³', '$28{,}26$ cm³', '$282{,}6$ cm³', '$188{,}4$ cm³'],
        answer: 2,
        correction: '$V = \\pi r^2 h = 3{,}14 \\times 9 \\times 10 = 282{,}6$ cm³.<br/><br/>$94{,}2$ : le rayon n\'a pas été mis au carré ($3{,}14 \\times 3 \\times 10$). $188{,}4$ : le rayon a été doublé au lieu d\'être élevé au carré ($3{,}14 \\times 6 \\times 10$). $28{,}26$ : c\'est l\'aire de la base seule, la hauteur a été oubliée.'
      },
      {
        q: 'Un aquarium (pavé droit) mesure $60\\,\\text{cm} \\times 30\\,\\text{cm} \\times 40\\,\\text{cm}$. Quelle est sa capacité en litres ?',
        options: ['$7{,}2$ L', '$72$ L', '$720$ L', '$7200$ L'],
        answer: 1,
        correction: '$V = 60 \\times 30 \\times 40 = 72\\,000$ cm³. Comme $1\\,\\text{L} = 1000\\,\\text{cm}^3$, cela fait $72$ L.'
      },
      {
        q: 'Un cylindre a un diamètre de $6$ cm et une hauteur de $10$ cm. Un élève calcule $V = \\pi \\times 6^2 \\times 10 = 1130$ cm³. Où est l\'erreur ?',
        options: [
          'Il n\'y a pas d\'erreur.',
          'Il aurait dû diviser par $2$ : $V = \\pi \\times 6^2 \\times 10 \\div 2$.',
          'Il a oublié de multiplier par $h$ : $V = \\pi \\times 6^2$.',
          'Il a utilisé le diamètre au lieu du rayon : $r = 3$ cm. Le bon calcul est $V = \\pi \\times 3^2 \\times 10 \\approx 282{,}6$ cm³.'
        ],
        answer: 3,
        correction: 'Le rayon est la moitié du diamètre : $r = 6 \\div 2 = 3$ cm. La formule est $V = \\pi r^2 h = \\pi \\times 3^2 \\times 10 = 90\\pi \\approx 282{,}6$ cm³.<br/><br/>Diviser par $2$ à la fin ne corrige pas l\'erreur : le rayon est au carré, le résultat de l\'élève est donc <strong>quatre</strong> fois trop grand, pas deux.'
      },
      {
        q: 'Un prisme droit a pour base un triangle d\'aire $12$ cm² et une hauteur de $5$ cm. Quel est son volume ?',
        options: ['$60$ cm³', '$17$ cm³', '$30$ cm³', '$120$ cm³'],
        answer: 0,
        correction: 'La formule est la même pour tout prisme : $V = \\mathcal{A}_{\\text{base}} \\times h = 12 \\times 5 = 60$ cm³.<br/><br/>$17$ : aire et hauteur ont été additionnées. $30$ : l\'aire du triangle a été divisée par $2$ une seconde fois, alors que l\'énoncé donne déjà l\'aire. $120$ : la hauteur a été comptée deux fois.'
      }
    ],

    /* ELARGISSEMENT ET CORRECTION DU 2026-09-13.

       DEFAUT D'ACCORD, corrige d'abord : l'enonce ecrivait « un(e) valise »,
       « un(e) aquarium », parenthese de complaisance qui s'IMPRIME telle quelle
       dans le livre. Chaque contexte porte desormais son article.

       ETAT DE DEPART : le generateur ne rendait QU'UNE tache, le volume d'un
       pave droit — 5 moules, 3 enonces de banque. L'evaluation teste pourtant le
       cylindre (Q2), la contenance en litres (Q3) et une conversion (Q4) : trois
       questions sur cinq sans aucun exercice d'entrainement, et deux
       remediations de la fiche professeur sans renvoi possible.

       On ajoute les trois taches manquantes, chacune adossee a une erreur
       frequente reelle :
         - le cylindre a partir du DIAMETRE, ou l'eleve oublie de prendre la
           moitie et quadruple son resultat ;
         - la conversion de volume, ou il multiplie par 10 au lieu de 1 000 ;
         - la contenance en litres, qui relie le volume geometrique au liquide. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['pave', 'cylindre', 'conversion', 'contenance']);

        if (tache === 'cylindre') {
          /* On donne le DIAMETRE, jamais le rayon : c'est la confusion du
             chapitre, et elle quadruple le resultat puisque le rayon est au
             carre. Diametre PAIR pour que le rayon reste entier. */
          const ctx = pick([
            { obj: 'une boîte de conserve', emoji: '🥫' },
            { obj: 'un verre cylindrique', emoji: '🥛' },
            { obj: 'un tuyau bouché', emoji: '🔧' },
            { obj: 'un pot de peinture', emoji: '🪣' }
          ]);
          const d = 2 * rand(2, 8);
          const h = rand(5, 20);
          const v = parseFloat((3.14 * (d / 2) * (d / 2) * h).toFixed(1));
          return {
            statement: `${ctx.emoji} Calcule le volume d'${ctx.obj} de <strong>diamètre</strong> $${d}$ cm et de hauteur $${h}$ cm.<br/>Utilise $\\pi \\approx 3{,}14$ et arrondis à $0{,}1$ cm³.`,
            answer: v,
            tolerance: 0.5,
            unit: 'cm³',
            hint: `$V = \\pi r^2 h$ utilise le <strong>rayon</strong>, pas le diamètre.<br/><br/>Commence par $r = ${d} \\div 2$, sinon ton résultat sera quatre fois trop grand.`,
            solution: [
              `Le volume d'un cylindre utilise le rayon, pas le diamètre.`,
              `Rayon : $r = ${d} \\div 2 = ${d / 2}$ cm.`,
              `Aire de la base : $3{,}14 \\times ${d / 2}^2 = ${fr(parseFloat((3.14 * (d / 2) * (d / 2)).toFixed(2)))}$ cm².`,
              `Volume : $${fr(parseFloat((3.14 * (d / 2) * (d / 2)).toFixed(2)))} \\times ${h} = ${fr(v, 1)}$ cm³.`,
              `Contrôle : le cylindre tient dans une boîte de $${d} \\times ${d} \\times ${h} = ${fr(d * d * h)}$ cm³, et ${fr(v, 1)} est bien plus petit.`
            ]
          };
        }

        if (tache === 'conversion') {
          /* Conversion de volume : le facteur de conversion des longueurs
             s'eleve au CUBE. Les couples sont ceux du programme. */
          const cas = pick([
            { de: 'dm³', vers: 'cm³', facteur: 1000, lon: '1\\,\\text{dm} = 10\\,\\text{cm}', base: 10 },
            { de: 'm³', vers: 'dm³', facteur: 1000, lon: '1\\,\\text{m} = 10\\,\\text{dm}', base: 10 },
            { de: 'cm³', vers: 'mm³', facteur: 1000, lon: '1\\,\\text{cm} = 10\\,\\text{mm}', base: 10 },
            { de: 'm³', vers: 'cm³', facteur: 1000000, lon: '1\\,\\text{m} = 100\\,\\text{cm}', base: 100 }
          ]);
          const val = pick([2, 2.5, 3, 4, 7.5]);
          const res = val * cas.facteur;
          return {
            statement: `📐 Convertis $${fr(val)}$ ${cas.de} en ${cas.vers}.<br/>Attention : pour un <strong>volume</strong>, le facteur de conversion s'élève au cube.`,
            answer: res,
            tolerance: 0,
            unit: cas.vers,
            hint: `Pour les longueurs, $${cas.lon}$.<br/><br/>Pour les volumes, le facteur est donc $${cas.base}^3$, et non $${cas.base}$.`,
            solution: [
              `Longueurs : $${cas.lon}$.`,
              `Volumes : $1$ ${cas.de} $= ${cas.base}^3$ ${cas.vers} $= ${fr(cas.facteur)}$ ${cas.vers}.`,
              `Donc $${fr(val)}$ ${cas.de} $= ${fr(val)} \\times ${fr(cas.facteur)} = ${fr(res)}$ ${cas.vers}.`
            ]
          };
        }

        if (tache === 'contenance') {
          /* Contenance : on relie le volume geometrique (cm³) au liquide
             (litres), via 1 L = 1 dm³ = 1 000 cm³. Arete MULTIPLE DE 10 pour
             que la contenance tombe juste. */
          const ctx = pick([
            { obj: 'un aquarium cubique', emoji: '🐠' },
            { obj: 'une cuve cubique', emoji: '🛢️' },
            { obj: 'un bac cubique', emoji: '🪣' },
            { obj: 'un réservoir cubique', emoji: '💧' }
          ]);
          const a = 10 * rand(2, 6);
          const litres = (a * a * a) / 1000;
          return {
            statement: `${ctx.emoji} ${ctx.obj.charAt(0).toUpperCase() + ctx.obj.slice(1)} a une arête de $${a}$ cm.<br/>Quelle est sa contenance, en litres ?`,
            answer: litres,
            tolerance: 0,
            unit: 'L',
            hint: `Calcule d'abord le volume en cm³.<br/><br/>Puis souviens-toi que $1$ L $= 1$ dm³ $= 1\\,000$ cm³.`,
            solution: [
              `On calcule le volume en cm³, puis on le convertit en litres.`,
              `Volume : $${a} \\times ${a} \\times ${a} = ${fr(a * a * a)}$ cm³.`,
              `Conversion : $1$ L $= 1\\,000$ cm³, donc $${fr(a * a * a)} \\div 1\\,000 = ${fr(litres)}$ L.`
            ]
          };
        }

        // Tache d'origine, accord corrige. Plages de dimensions portees par le
        // contexte (2026-10-13) : une valise de 11 x 3 x 4 cm apprenait a
        // ignorer l'ordre de grandeur. Tirees APRES pick(), qui indexe sa
        // memoire de tournee par contenu.
        const ctx = pick([
          { obj: 'une boîte à chaussures', emoji: '👟', dims: [[28, 35], [18, 22], [10, 14]] },
          { obj: 'un aquarium', emoji: '🐠', dims: [[40, 80], [25, 40], [30, 45]] },
          { obj: 'une valise', emoji: '🧳', dims: [[55, 75], [35, 48], [20, 28]] },
          { obj: 'un coffre', emoji: '📦', dims: [[60, 90], [35, 50], [30, 45]] },
          { obj: 'une brique', emoji: '🧱', dims: [[20, 25], [10, 12], [5, 7]] }
        ]);
        const [L, l, h] = ctx.dims.map(([mn, mx]) => rand(mn, mx));
        return {
          statement: `${ctx.emoji} Calcule le volume d'${ctx.obj} (pavé droit) de dimensions $${L}$ cm × $${l}$ cm × $${h}$ cm.`,
          /* Perspective cavaliere : la fuyante reduite de moitie est la
             convention du college, et voir les TROIS dimensions sur un dessin
             est ce qui rend la formule lisible. */
          figure: figurePave(L, l, h),
          answer: L * l * h,
          tolerance: 0,
          unit: 'cm³',
          hint: `Pour un pavé droit, le volume est le produit des trois dimensions : $${L} \\times ${l} \\times ${h}$.`,
          solution: [
            `Le volume d'un pavé droit est le produit de ses trois dimensions.`,
            `$V = ${L} \\times ${l} \\times ${h} = ${fr(L * l * h)}$ cm³.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une citerne cylindrique de rayon $0{,}8$ m et de hauteur $2{,}5$ m est utilisée pour stocker de l\'eau de pluie.',
      tasks: [
        'Calcule le volume de la citerne en m³ (avec $\\pi \\approx 3{,}14$).',
        'Convertis en litres.',
        'Si on pompe $500$ L par jour, combien de jours dure le stock quand la citerne est pleine ?'
      ],
      solutions: [
        '$V = 3{,}14 \\times 0{,}64 \\times 2{,}5 \\approx 5{,}024$ m³.',
        '$5{,}024\\,\\text{m}^3 = 5024$ L.',
        '$5024 \\div 500 \\approx 10$ jours.'
      ],
      finalAnswer: 'La citerne contient environ $5024$ L, soit environ $10$ jours de réserve.'
    },

    evaluation: {
      title: 'Évaluation — Volumes (prismes et cylindres)',
      duration: '25 min',
      questions: [
        {
        /* QUESTION REECRITE LE 2026-09-13.

           Elle demandait le volume d'un pave droit dont les trois dimensions
           etaient donnees, soit l'application la plus directe possible de la
           formule, et un DEUXIEME « calculer » sur cinq questions dans un
           ouvrage ou cette competence pesait 45,7 % du total.

           La nouvelle question est un PROBLEME INVERSE : le volume est donne,
           c'est une dimension qui manque. Il n'y a pas de formule a reciter —
           il faut comprendre que la hauteur s'obtient en divisant le volume par
           l'aire de la base, ce qui suppose d'avoir compris la formule plutot
           que de l'avoir apprise. C'est « chercher ». Les valeurs sont choisies
           pour que la reponse soit entiere. */
          statement: 'Un pavé droit a une base de $8$ cm sur $5$ cm et un volume de $120$ cm³. Quelle est sa hauteur, en cm ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Le volume d\'un pavé droit vaut $V = \\mathcal{A}_{\\text{base}} \\times h$. ' +
            'Ici l\'aire de la base est $8 \\times 5 = 40$ cm². ' +
            'La hauteur s\'obtient donc en <strong>divisant</strong> : $h = \\dfrac{120}{40} = 3$ cm. ' +
            'Vérification : $8 \\times 5 \\times 3 = 120$ cm³ ✓. ' +
            'Autrement dit, on empile $3$ couches de $40$ cm³ chacune pour atteindre $120$ cm³.'
        },
        {
          statement: 'Un cylindre a un rayon de $4$ cm et une hauteur de $10$ cm. Quel est son volume ? (Utiliser $\\pi \\approx 3{,}14$, arrondir à $0{,}1$ cm³.)',
          type: 'numeric',
          answer: 502.4,
          tolerance: 0.5,
          unit: 'cm³',
          points: 2,
          correction: '$V = \\pi r^2 h = 3{,}14 \\times 4^2 \\times 10 = 3{,}14 \\times 16 \\times 10 = 502{,}4$ cm³.'
        },
        {
          statement: 'Un aquarium cubique a une arête de $30$ cm. Sa contenance en litres est :',
          type: 'numeric',
          answer: 27,
          tolerance: 0,
          unit: 'L',
          points: 2,
          correction: '$V = 30^3 = 27\\,000$ cm³. Conversion : $1\\,\\text{L} = 1000\\,\\text{cm}^3$, donc $27\\,000 \\div 1000 = 27$ L.'
        },
        {
          statement: '$2{,}5$ dm³ correspondent à combien de cm³ ?',
          type: 'numeric',
          answer: 2500,
          tolerance: 0,
          unit: 'cm³',
          points: 2,
          correction: '$1\\,\\text{dm}^3 = 1000\\,\\text{cm}^3$. Donc $2{,}5 \\times 1000 = 2500$ cm³.'
        },
        {
          statement: 'Un cylindre a un diamètre de $10$ cm et une hauteur de $8$ cm. Un élève calcule $V = \\pi \\times 10^2 \\times 8$. Quelle est son erreur ?',
          type: 'multiple-choice',
          options: [
            'Il n\'y a pas d\'erreur.',
            'Il a utilisé le diamètre au lieu du rayon : $r = 5$ cm, donc $V = \\pi \\times 5^2 \\times 8 = 200\\pi \\approx 628$ cm³.',
            'Il fallait diviser par $2$ à la fin.',
            'Il fallait ajouter les aires des deux bases.'
          ],
          answer: 1,
          points: 2,
          correction: 'Le rayon est la moitié du diamètre : $r = 10 \\div 2 = 5$ cm. La formule correcte est $V = \\pi r^2 h = \\pi \\times 25 \\times 8 = 200\\pi \\approx 628$ cm³.'
        }
      ]
    }
  });
