/* =========================================================
   Spark Learning – data/5e/5e-aires-perimetres.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-aires-perimetres',
    level: 1, subject: 'maths',
    icon: '🔷',
    title: 'Aires et périmètres (approfondissement)',
    subtitle: 'Disque, figures composées, conversions',
    keywords: ['Aire', 'Périmètre', 'Disque', 'Secteur', 'Figures composées', 'Conversion'],
    physics: false,

    cours: {
      /* DECOUVRIR REECRIT LE 2026-09-13. L'intro ouvrait sur la METHODE (« les
         figures complexes se decomposent »), c'est-a-dire sur la reponse. La
         question retenue porte sur une figure qu'aucune formule connue ne
         couvre : c'est l'absence de formule qui rend la decomposition
         necessaire, et il faut la faire sentir avant de la nommer.
         Aire VERIFIEE : 12 x 8 - 4 x 3 = 84 m2. */
      intro: 'Un terrain a la forme d\'un rectangle de $12$ m sur $8$ m dont on a retiré un coin carré de $4$ m sur $3$ m. Quelle est son aire ?<br/><br/>' +
        'Cherche la formule de « l\'aire d\'un terrain en forme de L » : elle n\'existe pas, et elle n\'existera jamais, car les formes possibles sont innombrables. Il faut donc se débrouiller avec les seules figures dont tu connais déjà l\'aire.<br/><br/>' +
        'Les figures complexes se décomposent toujours en <strong>figures simples</strong> (rectangles, triangles, disques). L\'aire totale est la somme (ou différence) des aires des parties.<br/><br/>' +
        '<strong>Règle de conversion des aires :</strong> quand on passe d\'une unité de longueur à une autre, l\'exposant $2$ s\'applique aussi au facteur de conversion : $1$ m $= 100$ cm, donc $1$ m² $= 100^2$ cm² $= 10\\,000$ cm². Beaucoup d\'élèves multiplient par $100$ au lieu de $10\\,000$ !<br/><br/>' +
        'Le <strong>disque</strong> de rayon $r$ a une aire $\\pi r^2$ — c\'est $r$ seul au carré, pas $\\pi r$ entier. Le périmètre (ou <strong>circonférence</strong>) vaut $2\\pi r$.<br/><br/>' +
        'Pour les <strong>figures composées</strong>, bien identifier si on ajoute une partie (rectangle + demi-disque) ou si on soustrait (carré avec un trou circulaire).',
      definitions: [
        { term: 'Aire', def: 'Mesure de la surface d\'une figure plane. S\'exprime en unités au carré (cm², m², etc.).' },
        { term: 'Périmètre', def: 'Longueur du contour d\'une figure. S\'exprime en unités de longueur (cm, m, etc.).' },
        { term: 'Disque', def: 'Surface délimitée par un cercle. Aire = $\\pi r^2$, périmètre = $2\\pi r$.' },
        { term: 'Figure composée', def: 'Figure obtenue en assemblant ou en retranchant des figures simples. Son aire est la somme (ou différence) des aires des parties.' }
      ],
      example: {
        statement: 'Calcule l\'aire d\'un terrain rectangulaire de $30$ m × $20$ m dans lequel on a creusé une piscine circulaire de rayon $4$ m.',
        steps: [
          'Aire du rectangle : $30 \\times 20 = 600$ m².',
          'Aire du disque (piscine) : $\\pi \\times 4^2 = 3{,}14 \\times 16 \\approx 50{,}3$ m².',
          'Aire restante : $600 - 50{,}3 = 549{,}7$ m².'
        ],
        answer: '$\\approx 549{,}7$ m²'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Figure composée',
        title: 'Décomposer une aire composée : additionner ou soustraire ?',
        description: 'Terrain rectangulaire de $30$ m $\\times$ $20$ m dans lequel une piscine circulaire de rayon $4$ m est retirée : l\'aire restante est une différence d\'aires, l\'exemple du cours.',
        svg: `
          <svg viewBox="0 0 360 250" role="img" aria-labelledby="aires-terrain-title aires-terrain-desc">
            <title id="aires-terrain-title">Terrain rectangulaire avec piscine circulaire retiree</title>
            <desc id="aires-terrain-desc">Un rectangle de 30 metres sur 20 metres represente un terrain. Un disque de rayon 4 metres est retire en son centre pour figurer une piscine : l'aire restante est l'aire du rectangle moins l'aire du disque.</desc>
            <rect class="frame-line" x="60" y="40" width="240" height="160" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)"></rect>
            <circle class="curve-main" cx="200" cy="120" r="32" fill="var(--bg-card)"></circle>
            <line class="guide-line" x1="200" y1="120" x2="232" y2="120"></line>
            <circle class="plot-point" cx="200" cy="120" r="4"></circle>
            <circle class="plot-point-alt" cx="232" cy="120" r="4"></circle>
            <line class="frame-line" x1="60" y1="210" x2="60" y2="222"></line>
            <line class="frame-line" x1="300" y1="210" x2="300" y2="222"></line>
            <line class="guide-line" x1="60" y1="216" x2="300" y2="216"></line>
            <line class="frame-line" x1="38" y1="40" x2="50" y2="40"></line>
            <line class="frame-line" x1="38" y1="200" x2="50" y2="200"></line>
            <line class="guide-line" x1="44" y1="40" x2="44" y2="200"></line>
            <text class="label-soft" x="70" y="58">Terrain</text>
            <text class="label-soft" x="182" y="124">Piscine</text>
            <text class="annotation-label" x="204" y="112">r = 4 m</text>
            <text class="axis-label" x="150" y="234">30 m</text>
            <text class="axis-label" x="14" y="124" transform="rotate(-90 14 124)">20 m</text>
          </svg>
        `,
        notes: [
          'L\'aire du rectangle (le terrain) vaut $30 \\times 20 = 600$ m².',
          'Le disque retiré (la piscine) a un rayon de $4$ m : son aire vaut $\\pi \\times 4^2 \\approx 3{,}14 \\times 16 \\approx 50{,}3$ m².',
          'Le disque est creusé DANS le rectangle : on soustrait. Aire restante $\\approx 600 - 50{,}3 \\approx 549{,}7$ m².'
        ],
        reading: 'Face à une figure composée, identifie d\'abord si une partie est ajoutée (on additionne) ou retirée comme ici (on soustrait), avant de calculer quoi que ce soit.',
        caption: 'Terrain rectangulaire de $30$ m $\\times$ $20$ m avec une piscine circulaire de rayon $4$ m retirée en son centre — aire restante $\\approx 549{,}7$ m², exemple du cours.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13) — une figure par MALENTENDU.
         Les trois retenus sont ceux que l'intro du cours signale elle-meme :
           1. la conversion d'aires faite avec le facteur des LONGUEURS ;
           2. $\pi r^2$ lu comme $(\pi r)^2$ ;
           3. la figure composee dont on ne sait pas si l'on ajoute ou retire.

         Le point 1 se dessine sur le DECIMETRE carre, pas sur le metre carre :
         un metre carre quadrille en centimetres compterait 10 000 cases, soit
         un aplat gris illisible a l'impression. Le raisonnement est identique
         et l'echelle, elle, est vraie — mieux vaut une figure juste sur un cas
         plus petit qu'une figure fausse sur le cas annonce. La note fait le
         pont vers le metre carre explicitement.

         Proportions VERIFIEES PAR LE CALCUL : $(\pi r)^2 / (\pi r^2) = \pi$
         exactement, soit un rapport de 3,14 entre les deux disques du
         point 2 ; le carre de 1 dm contient exactement 10 x 10 = 100 carres
         de 1 cm. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Convertir une aire',
          title: 'Le facteur de conversion passe au carré, lui aussi',
          description: 'Pour les longueurs, $1$ dm $= 10$ cm. Beaucoup d\'élèves en concluent que $1$ dm² $= 10$ cm². Le dessin dit le contraire : il faut <strong>$100$ carrés</strong> de $1$ cm² pour paver un carré de $1$ dm de côté, parce que le facteur $10$ agit dans <strong>les deux directions</strong>.',
          svg: `
            <svg viewBox="0 0 400 210" role="img" aria-labelledby="aires-conv-title aires-conv-desc">
              <title id="aires-conv-title">Un carre de 1 decimetre de cote pave par cent carres de 1 centimetre</title>
              <desc id="aires-conv-desc">Un carre de 1 decimetre de cote est quadrille en carres de 1 centimetre de cote. On compte 10 carres sur une rangee et 10 rangees, soit 100 carres au total. Le carre de 1 decimetre carre vaut donc 100 centimetres carres, et non 10. Un seul carre unite est mis en evidence dans le coin superieur gauche. A droite du dessin, une comparaison rappelle que pour les longueurs le facteur est 10 alors que pour les aires il est 10 multiplie par 10, soit 100.</desc>

              <!-- Carre de 1 dm : 140 unites de cote, quadrille en 10 colonnes
                   et 10 rangees de 14 unites, donc des carres de 1 cm exacts. -->
              <rect class="frame-line" x="40" y="46" width="140" height="140" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></rect>
              <line class="grid-line" x1="54" y1="46" x2="54" y2="186"></line>
              <line class="grid-line" x1="68" y1="46" x2="68" y2="186"></line>
              <line class="grid-line" x1="82" y1="46" x2="82" y2="186"></line>
              <line class="grid-line" x1="96" y1="46" x2="96" y2="186"></line>
              <line class="grid-line" x1="110" y1="46" x2="110" y2="186"></line>
              <line class="grid-line" x1="124" y1="46" x2="124" y2="186"></line>
              <line class="grid-line" x1="138" y1="46" x2="138" y2="186"></line>
              <line class="grid-line" x1="152" y1="46" x2="152" y2="186"></line>
              <line class="grid-line" x1="166" y1="46" x2="166" y2="186"></line>
              <line class="grid-line" x1="40" y1="60" x2="180" y2="60"></line>
              <line class="grid-line" x1="40" y1="74" x2="180" y2="74"></line>
              <line class="grid-line" x1="40" y1="88" x2="180" y2="88"></line>
              <line class="grid-line" x1="40" y1="102" x2="180" y2="102"></line>
              <line class="grid-line" x1="40" y1="116" x2="180" y2="116"></line>
              <line class="grid-line" x1="40" y1="130" x2="180" y2="130"></line>
              <line class="grid-line" x1="40" y1="144" x2="180" y2="144"></line>
              <line class="grid-line" x1="40" y1="158" x2="180" y2="158"></line>
              <line class="grid-line" x1="40" y1="172" x2="180" y2="172"></line>

              <!-- Le carre unite, teinte plus fort : seul objet a isoler. -->
              <rect class="frame-line" x="40" y="46" width="14" height="14" fill="color-mix(in srgb, var(--diagram-accent) 40%, transparent)"></rect>
              <line class="guide-line" x1="47" y1="46" x2="70" y2="26"></line>
              <text class="label-soft" x="74" y="24" text-anchor="start">1 cm²</text>

              <text class="tick-label" x="110" y="204" text-anchor="middle">10 cm, soit 1 dm</text>
              <text class="tick-label" x="32" y="121" text-anchor="end">10 cm</text>

              <!-- La comparaison des deux facteurs, cote a cote : c'est elle le
                   sujet de la figure, pas le quadrillage. -->
              <text class="annotation-label" x="212" y="86" text-anchor="start">longueur : × 10</text>
              <text class="tick-label" x="212" y="106" text-anchor="start">1 dm = 10 cm</text>
              <text class="annotation-label" x="212" y="140" text-anchor="start">aire : × 100</text>
              <text class="tick-label" x="212" y="160" text-anchor="start">1 dm² = 10 × 10 = 100 cm²</text>
            </svg>
          `,
          notes: [
            'Une rangée contient $10$ carrés de $1$ cm² ; il y a $10$ rangées, donc $10 \\times 10 = 100$ carrés.',
            'Le facteur $10$ des longueurs agit sur la largeur <strong>et</strong> sur la hauteur : il est donc au carré pour les aires.',
            'Le même raisonnement vaut pour le mètre : $1$ m $= 100$ cm donne $1$ m² $= 100 \\times 100 = 10\\,000$ cm², jamais $100$ cm².'
          ],
          reading: 'Compte les carrés d\'une seule rangée : $10$. Compte les rangées : $10$. Le carré de $1$ dm² en contient donc $100$, pas $10$. Un facteur qui vaut $10$ sur une longueur en vaut toujours $100$ sur une aire.',
          caption: 'Le carré de $1$ dm de côté pavé par $100$ carrés de $1$ cm² : le facteur de conversion des aires est le carré de celui des longueurs.'
        },
        {
          theme: 'maths',
          kicker: 'Où se pose le carré',
          title: 'Dans $\\pi r^2$, seul le rayon est au carré',
          description: 'Le disque de gauche a l\'aire juste, $\\pi r^2$. Celui de droite est ce qu\'on obtiendrait en élevant au carré le produit $\\pi r$ tout entier. L\'écart n\'est pas un détail : le second est <strong>$\\pi$ fois plus grand</strong>, soit plus du triple.',
          svg: `
            <svg viewBox="0 0 400 224" role="img" aria-labelledby="aires-pir2-title aires-pir2-desc">
              <title id="aires-pir2-title">Le disque d'aire pi r carre et le disque trop grand obtenu en elevant pi r au carre</title>
              <desc id="aires-pir2-desc">A gauche, en teinte d'accent, le disque de rayon 4 centimetres : son aire vaut pi multiplie par 4 au carre, soit environ 50 virgule 2 centimetres carres. A droite, en teinte faible et en trait tirete, le disque qu'on obtiendrait en elevant au carre le produit pi fois r tout entier : son aire vaudrait environ 157 virgule 8 centimetres carres, soit pi fois plus, c'est-a-dire plus du triple. Les deux disques sont dessines a la meme echelle et poses sur la meme ligne de base, si bien que la difference de taille se lit directement. Le calcul juste est place en haut, l'erreur en dessous.</desc>

              <text class="annotation-label" x="200" y="18" text-anchor="middle">le carré porte sur le rayon seul</text>

              <!-- Patron « piege » : le juste en accent, l'erreur en teinte
                   faible et en tirete. Les rayons dessines sont dans le rapport
                   racine de pi (1,772), qui est exactement le rapport des rayons
                   de deux disques dont les aires sont dans le rapport pi.
                   40 unites a gauche, 40 x 1,772 = 70,9 arrondi a 71 a droite. -->
              <circle class="frame-line" cx="88" cy="128" r="40" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)"></circle>
              <line class="guide-line" x1="88" y1="128" x2="128" y2="128"></line>
              <circle class="plot-point" cx="88" cy="128" r="3"></circle>
              <text class="tick-label" x="108" y="120" text-anchor="middle">4 cm</text>
              <text class="annotation-label" x="88" y="192" text-anchor="middle">π × 4² ≈ 50,2 cm²</text>
              <text class="tick-label" x="88" y="210" text-anchor="middle">le calcul juste</text>

              <circle class="guide-line" cx="286" cy="128" r="71" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke-dasharray="5 4"></circle>
              <circle class="plot-point-alt" cx="286" cy="128" r="3"></circle>
              <text class="label-soft" x="286" y="192" text-anchor="middle">(π × 4)² ≈ 157,8 cm²</text>
              <text class="tick-label" x="286" y="210" text-anchor="middle">plus du triple</text>
            </svg>
          `,
          notes: [
            'Aire juste : $\\mathcal{A} = \\pi r^2 = 3{,}14 \\times 4^2 = 3{,}14 \\times 16 \\approx 50{,}2$ cm².',
            'Si l\'on élève $\\pi r$ au carré : $(3{,}14 \\times 4)^2 = 12{,}56^2 \\approx 157{,}8$ cm².',
            '$157{,}8 \\div 50{,}2 \\approx 3{,}14$ : l\'erreur multiplie l\'aire par $\\pi$ exactement. Elle est donc <strong>toujours</strong> du même ordre, jamais négligeable.'
          ],
          reading: 'Calcule d\'abord $4^2 = 16$, et seulement ensuite multiplie par $3{,}14$. L\'ordre compte : élever au carré vient avant de multiplier par $\\pi$, comme le veulent les priorités des opérations.',
          caption: 'Le disque de rayon $4$ cm, d\'aire $\\pi r^2 \\approx 50{,}2$ cm², et le disque trop grand qu\'on obtient en élevant $\\pi r$ au carré ($\\approx 157{,}8$ cm²).'
        },
        {
          theme: 'maths',
          kicker: 'Ajouter ou retirer',
          title: 'Une même figure, deux décompositions',
          description: 'Devant une figure composée, la question n\'est jamais « quelle formule ? » mais <strong>« est-ce que j\'ajoute ou est-ce que je retire ? »</strong>. À gauche le demi-disque <strong>déborde</strong> du rectangle : on additionne. À droite il est <strong>creusé dedans</strong> : on soustrait. Le même demi-disque, deux résultats opposés.',
          svg: `
            <svg viewBox="0 0 400 214" role="img" aria-labelledby="aires-comp-title aires-comp-desc">
              <title id="aires-comp-title">Un demi-disque ajoute a un rectangle, puis retire du meme rectangle</title>
              <desc id="aires-comp-desc">A gauche, un rectangle de 12 centimetres sur 6 surmonte d'un demi-disque de rayon 3 centimetres pose sur son bord superieur : le demi-disque deborde du rectangle, donc son aire s'ajoute a celle du rectangle et le total vaut environ 86 virgule 1 centimetres carres. A droite, le meme rectangle et le meme demi-disque, mais le demi-disque est creuse a l'interieur du rectangle : son aire se retire alors et il reste environ 57 virgule 9 centimetres carres. Les deux rectangles sont identiques, poses sur la meme ligne de base et a la meme echelle : seule la position du demi-disque change. La partie qui s'ajoute est teintee, la partie qui se retire est laissee vide et bordee de tirets.</desc>

              <!-- Rectangle 12 x 6, echelle 12 unites par centimetre : 144 x 72.
                   Les DEUX rectangles sont strictement identiques et poses sur la
                   meme ligne de base (y = 168) : la seule difference visible doit
                   etre la position du demi-disque. -->
              <rect class="frame-line" x="20" y="96" width="144" height="72" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></rect>
              <path class="frame-line" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" d="M56 96 A 36 36 0 0 1 128 96 Z"></path>
              <text class="annotation-label" x="92" y="88" text-anchor="middle">+</text>
              <text class="tick-label" x="92" y="184" text-anchor="middle">12 cm</text>
              <text class="tick-label" x="12" y="136" text-anchor="end">6 cm</text>
              <text class="annotation-label" x="92" y="202" text-anchor="middle">72 + 14,1 ≈ 86,1 cm²</text>

              <!-- Meme rectangle, meme demi-disque, mais CREUSE : trace en
                   tirete et laisse vide, ce qui est la convention du manuel pour
                   une partie retiree. -->
              <rect class="frame-line" x="236" y="96" width="144" height="72" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></rect>
              <path class="guide-line" fill="color-mix(in srgb, var(--bg-card) 100%, transparent)" stroke-dasharray="5 4" d="M272 96 A 36 36 0 0 0 344 96 Z"></path>
              <text class="annotation-label" x="308" y="88" text-anchor="middle">−</text>
              <text class="tick-label" x="308" y="184" text-anchor="middle">12 cm</text>
              <text class="annotation-label" x="308" y="202" text-anchor="middle">72 − 14,1 ≈ 57,9 cm²</text>

              <text class="label-soft" x="200" y="28" text-anchor="middle">même demi-disque de rayon 3 cm</text>
              <text class="tick-label" x="200" y="46" text-anchor="middle">posé dessus, il s ajoute ; creusé dedans, il se retire</text>
            </svg>
          `,
          notes: [
            'Rectangle : $12 \\times 6 = 72$ cm² dans les deux cas.',
            'Demi-disque de rayon $3$ cm : $\\dfrac{\\pi \\times 3^2}{2} = \\dfrac{3{,}14 \\times 9}{2} \\approx 14{,}1$ cm², dans les deux cas également.',
            'À gauche $72 + 14{,}1 \\approx 86{,}1$ cm² ; à droite $72 - 14{,}1 \\approx 57{,}9$ cm². L\'écart entre les deux réponses vaut <strong>deux fois</strong> l\'aire du demi-disque.'
          ],
          reading: 'Avant tout calcul, repasse le contour de la figure avec ton doigt. Si le demi-disque est du bon côté du trait, tu l\'ajoutes ; s\'il est en creux, tu le retires. Le calcul est le même, c\'est le signe qui change.',
          caption: 'Le même rectangle de $12$ cm $\\times$ $6$ cm et le même demi-disque de rayon $3$ cm : ajouté, l\'aire vaut $\\approx 86{,}1$ cm² ; retiré, $\\approx 57{,}9$ cm².'
        }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Décomposer</strong> la figure complexe en figures simples connues.',
          '<strong>Calculer l\'aire</strong> de chaque partie séparément.',
          '<strong>Additionner</strong> (ou soustraire si une partie est retirée).',
          '<strong>Conversions</strong> : $1\\,\\text{m}^2 = 10\\,000\\,\\text{cm}^2$, $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$.'
        ]
      },
      formulas: [
        'Disque : $\\mathcal{A} = \\pi r^2$, $\\mathcal{P} = 2\\pi r$',
        'Demi-disque : $\\mathcal{A} = \\dfrac{\\pi r^2}{2}$',
        '$1\\,\\text{m}^2 = 10^4\\,\\text{cm}^2 = 10^6\\,\\text{mm}^2$',
        'Figures composées : $\\mathcal{A}_{\\text{tot}} = \\mathcal{A}_1 + \\mathcal{A}_2 \\pm \\ldots$'
      ],
      recap: [
        'Aire du disque : $\\pi r^2$ (bien utiliser le rayon, pas le diamètre !).',
        'Conversion d\'aires : élever le facteur de conversion au carré ($1$ m² = $10\\,000$ cm²).',
        'Figure composée = somme ou différence de figures simples.',
        'Périmètre d\'un cercle : $2\\pi r$ (ou $\\pi d$ avec le diamètre).'
      ],
      piege: 'Piège de conversion : $2\\,\\text{cm} = 20\\,\\text{mm}$ mais $2\\,\\text{cm}^2 \\neq 20\\,\\text{mm}^2$. En réalité $2\\,\\text{cm}^2 = 200\\,\\text{mm}^2$ (on multiplie par $100$, pas par $10$).'
    },

    quiz: [
      {
        q: 'Quelle est l\'aire d\'un demi-disque de rayon $6$ cm (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$56{,}52$ cm²', '$113{,}04$ cm²', '$18{,}84$ cm²', '$37{,}68$ cm²'],
        answer: 0,
        correction: '$\\mathcal{A} = \\dfrac{\\pi r^2}{2} = \\dfrac{3{,}14 \\times 36}{2} = \\dfrac{113{,}04}{2} = 56{,}52$ cm².'
      },
      {
        q: '$3{,}5\\,\\text{m}^2$ correspond à combien de cm² ?',
        options: ['$350$ cm²', '$3500$ cm²', '$35\\,000$ cm²', '$350\\,000$ cm²'],
        answer: 2,
        correction: '$1\\,\\text{m}^2 = 10\\,000\\,\\text{cm}^2$, donc $3{,}5 \\times 10\\,000 = 35\\,000$ cm².'
      },
      {
        q: 'Un élève convertit $5$ cm² en mm² et trouve $50$ mm². Quelle est son erreur ?',
        options: [
          'Il a raison : $1$ cm $= 10$ mm, donc $5$ cm² $= 50$ mm².',
          'Il faut multiplier par $100$ (pas $10$) : $1$ cm² $= 10^2 = 100$ mm². Donc $5$ cm² $= 500$ mm².',
          'Il faut multiplier par $1000$ : $5$ cm² $= 5000$ mm².',
          'Les cm² et mm² ne sont pas convertibles directement.'
        ],
        answer: 1,
        correction: '$1$ cm $= 10$ mm, donc $1$ cm² $= (10\\,\\text{mm})^2 = 100$ mm². Ainsi $5$ cm² $= 5 \\times 100 = 500$ mm².'
      }
    ],

    /* ELARGISSEMENT ET CORRECTIONS DU 2026-09-13.

       DEFAUT D'ACCORD, corrige d'abord : l'enonce ecrivait « un(e) pizza »,
       « un(e) horloge », une parenthese de complaisance qui s'IMPRIME telle
       quelle dans le livre. Chaque contexte porte desormais son article.

       ETAT DE DEPART : le generateur ne rendait QU'UNE tache, l'aire d'un disque
       connaissant le rayon — 5 moules, 3 enonces de banque. L'evaluation teste
       pourtant cinq choses : aire du disque, conversion m² vers cm², perimetre a
       partir du DIAMETRE, figure composee par difference, et conversion cm² vers
       mm². Quatre questions sur cinq n'avaient donc aucun exercice
       d'entrainement, et trois remediations de la fiche professeur n'avaient
       nulle part ou renvoyer.

       On ajoute trois taches, chacune adossee a une erreur frequente reelle :
         - le perimetre a partir du diametre, ou l'eleve confond r et d ;
         - la conversion d'aire, ou il multiplie par 100 au lieu de 10 000 ;
         - la figure composee, ou il additionne au lieu de soustraire. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['aireDisque', 'perimetreDiametre', 'conversion', 'composee']);

        if (tache === 'perimetreDiametre') {
          /* On donne le DIAMETRE, jamais le rayon : c'est la confusion du
             chapitre. Diametre PAIR pour que le rayon reste entier. */
          const ctx = pick([
            { obj: 'une roue de vélo', emoji: '🚲' },
            { obj: 'un couvercle de casserole', emoji: '🍳' },
            { obj: 'une bouche d\'égout', emoji: '🕳️' },
            { obj: 'un cerceau de gymnastique', emoji: '⭕' }
          ]);
          const d = 2 * rand(3, 15);
          const p = parseFloat((3.14 * d).toFixed(1));
          return {
            statement: `${ctx.emoji} Calcule le périmètre d'${ctx.obj} de <strong>diamètre</strong> $${d}$ cm.<br/>Utilise $\\pi \\approx 3{,}14$ et arrondis à $0{,}1$ cm.`,
            /* La figure trace le DIAMETRE d'un bord a l'autre en passant par le
               centre : voir le trait traverser tout le disque est ce qui rend
               evident que le rayon n'en est que la moitie. */
            figure: figureDisque(d / 2, { diametre: true }),
            answer: p,
            tolerance: 0.2,
            unit: 'cm',
            hint: `Le périmètre d'un cercle vaut $2\\pi r$, où $r$ est le <strong>rayon</strong>.<br/><br/>On te donne le diamètre : commence par en prendre la moitié. Ou utilise directement $\\pi d$, qui est la même formule.`,
            solution: [
              `Le périmètre d'un cercle utilise le rayon, pas le diamètre.`,
              `Rayon : $r = ${d} \\div 2 = ${d / 2}$ cm.`,
              `Périmètre : $\\mathcal{P} = 2 \\times 3{,}14 \\times ${d / 2} = ${fr(p, 1)}$ cm.`,
              `Contrôle : $\\pi d = 3{,}14 \\times ${d} = ${fr(p, 1)}$ cm, le même résultat — $2\\pi r$ et $\\pi d$ sont deux écritures de la même formule.`
            ]
          };
        }

        if (tache === 'conversion') {
          /* Conversion d'aire, dans les deux sens, avec le facteur au CARRE.
             Les couples d'unites sont ceux du programme, et le facteur est
             toujours une puissance de 10 au carre. */
          const cas = pick([
            { de: 'm²', vers: 'cm²', facteur: 10000, lon: '1 m = 100 cm', base: 100 },
            { de: 'cm²', vers: 'mm²', facteur: 100, lon: '1 cm = 10 mm', base: 10 },
            { de: 'dm²', vers: 'cm²', facteur: 100, lon: '1 dm = 10 cm', base: 10 },
            { de: 'km²', vers: 'm²', facteur: 1000000, lon: '1 km = 1 000 m', base: 1000 }
          ]);
          const val = pick([2, 2.5, 3, 4, 5, 7.5]);
          const res = val * cas.facteur;
          return {
            statement: `📐 Convertis $${fr(val)}$ ${cas.de} en ${cas.vers}.<br/>Attention : pour une <strong>aire</strong>, le facteur de conversion s'élève au carré.`,
            answer: res,
            tolerance: 0,
            unit: cas.vers,
            hint: `Pour les longueurs, $${cas.lon}$.<br/><br/>Pour les aires, le facteur est donc $${cas.base}^2$, et non $${cas.base}$.`,
            solution: [
              `Longueurs : $${cas.lon}$.`,
              `Aires : $1$ ${cas.de} $= ${cas.base}^2$ ${cas.vers} $= ${fr(cas.facteur)}$ ${cas.vers}.`,
              `Donc $${fr(val)}$ ${cas.de} $= ${fr(val)} \\times ${fr(cas.facteur)} = ${fr(res)}$ ${cas.vers}.`
            ]
          };
        }

        if (tache === 'composee') {
          /* Figure composee par DIFFERENCE : un rectangle dont on retire un
             disque. L'eleve doit decider de SOUSTRAIRE, ce qui est la tache, et
             non simplement calculer deux aires. Le rayon est borne pour que le
             disque tienne dans le rectangle — sans quoi l'enonce serait
             geometriquement impossible. */
          const ctx = pick([
            { obj: 'un terrain', trou: 'une piscine circulaire', emoji: '🏡' },
            { obj: 'une plaque de métal', trou: 'un trou circulaire', emoji: '🔧' },
            { obj: 'une pelouse', trou: 'un massif circulaire', emoji: '🌿' },
            { obj: 'un plateau de table', trou: 'une découpe circulaire', emoji: '🪵' }
          ]);
          const L = rand(20, 40);
          const l = rand(10, 20);
          const r = rand(2, Math.floor(Math.min(L, l) / 2) - 1);
          const aire = parseFloat((L * l - 3.14 * r * r).toFixed(1));
          return {
            statement: `${ctx.emoji} ${ctx.obj.charAt(0).toUpperCase() + ctx.obj.slice(1)} rectangulaire mesure $${L}$ m sur $${l}$ m. On y aménage ${ctx.trou} de rayon $${r}$ m.<br/>Quelle est l'aire restante, en m² ? Utilise $\\pi \\approx 3{,}14$ et arrondis à $0{,}1$.`,
            answer: aire,
            tolerance: 0.3,
            unit: 'm²',
            hint: `La partie circulaire est <strong>retirée</strong> du rectangle : il faut donc une soustraction.<br/><br/>Calcule les deux aires séparément, puis retire la plus petite.`,
            solution: [
              `On retire l'aire du disque à celle du rectangle.`,
              `Aire du rectangle : $${L} \\times ${l} = ${fr(L * l)}$ m².`,
              `Aire du disque : $3{,}14 \\times ${r}^2 = ${fr(parseFloat((3.14 * r * r).toFixed(1)), 1)}$ m².`,
              `Aire restante : $${fr(L * l)} - ${fr(parseFloat((3.14 * r * r).toFixed(1)), 1)} = ${fr(aire, 1)}$ m².`,
              `Contrôle : le résultat doit être plus PETIT que l'aire du rectangle, puisqu'on a retiré quelque chose.`
            ]
          };
        }

        // Tache d'origine, avec l'accord corrige : « un(e) pizza » s'imprimait
        // tel quel dans le livre.
        const ctx = pick([
          { obj: 'une pizza', emoji: '🍕' },
          { obj: 'une horloge', emoji: '🕐' },
          { obj: 'un frisbee', emoji: '🥏' },
          { obj: 'une assiette', emoji: '🍽️' },
          { obj: 'une piscine ronde', emoji: '🏊' }
        ]);
        const r = rand(2, 10);
        return {
          statement: `${ctx.emoji} Calcule l'aire d'${ctx.obj} circulaire de <strong>rayon</strong> $${r}$ cm.<br/>Utilise $\\pi \\approx 3{,}14$ et arrondis à $0{,}1$ cm².`,
          figure: figureDisque(r),
          answer: parseFloat((3.14 * r * r).toFixed(1)),
          tolerance: 0.2,
          unit: 'cm²',
          hint: `$\\mathcal{A} = \\pi r^2$ : c'est le <strong>rayon seul</strong> qui est au carré, jamais le produit $\\pi r$.<br/><br/>Commence par $${r}^2$.`,
          solution: [
            `Dans $\\pi r^2$, c'est le rayon seul qui est élevé au carré.`,
            `Rayon au carré : $${r}^2 = ${r * r}$.`,
            `$\\mathcal{A} = 3{,}14 \\times ${r * r} = ${fr(3.14 * r * r, 1)}$ cm².`
          ]
        };
      }
    },
    probleme: {
      context: 'Un stade a une piste d\'athlétisme composée de deux lignes droites de $100$ m chacune et de deux demi-cercles de rayon $36$ m.',
      tasks: [
        'Calcule la longueur des deux demi-cercles (périmètre total des parties courbes).',
        'Calcule le périmètre total de la piste.',
        'Calcule l\'aire totale intérieure de la piste (rectangle central + deux demi-disques).'
      ],
      solutions: [
        'Périmètre des deux demi-cercles = périmètre d\'un cercle de rayon $36$ m : $2\\pi \\times 36 \\approx 2 \\times 3{,}14 \\times 36 \\approx 226$ m.',
        'Périmètre total : $2 \\times 100 + 226 = 426$ m.',
        'Aire rectangle : $100 \\times 72 = 7200$ m². Aire disque : $\\pi \\times 36^2 \\approx 4069$ m². Total $\\approx 11\\,269$ m².'
      ],
      finalAnswer: 'La piste fait environ $426$ m de périmètre pour une aire intérieure de $\\approx 11\\,269$ m².'
    },

    evaluation: {
      title: 'Évaluation — Aires et périmètres',
      duration: '25 min',
      questions: [
        {
          statement: 'Quelle est l\'aire d\'un disque de rayon $5$ cm ? (Utiliser $\\pi \\approx 3{,}14$, arrondir à $0{,}1$ cm².)',
          type: 'numeric',
          answer: 78.5,
          tolerance: 0.2,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = \\pi r^2 = 3{,}14 \\times 5^2 = 3{,}14 \\times 25 = 78{,}5$ cm².'
        },
        {
          statement: '$2{,}5$ m² correspondent à combien de cm² ?',
          type: 'numeric',
          answer: 25000,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$1\\,\\text{m}^2 = 10\\,000\\,\\text{cm}^2$. Donc $2{,}5 \\times 10\\,000 = 25\\,000$ cm².'
        },
        {
          statement: 'Le périmètre d\'un cercle de diamètre $10$ cm vaut (avec $\\pi \\approx 3{,}14$) :',
          type: 'numeric',
          answer: 31.4,
          tolerance: 0.1,
          unit: 'cm',
          points: 2,
          correction: '$\\mathcal{P} = \\pi \\times d = 3{,}14 \\times 10 = 31{,}4$ cm.'
        },
        {
          statement: 'Un terrain rectangulaire mesure $40$ m par $25$ m. On y creuse une piscine circulaire de rayon $5$ m. Quelle est l\'aire du terrain restant (avec $\\pi \\approx 3{,}14$) ?',
          type: 'numeric',
          answer: 921.5,
          tolerance: 0.5,
          unit: 'm²',
          points: 2,
          correction: 'Aire du rectangle : $40 \\times 25 = 1000$ m². Aire du disque : $3{,}14 \\times 25 = 78{,}5$ m². Aire restante : $1000 - 78{,}5 = 921{,}5$ m².'
        },
        {
          statement: '$8$ cm² est égal à :',
          type: 'multiple-choice',
          options: [
            '$80$ mm²',
            '$800$ mm²',
            '$8000$ mm²',
            '$0{,}8$ mm²'
          ],
          answer: 1,
          points: 2,
          correction: '$1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$. Ainsi $8$ cm² $= 8 \\times 100 = 800$ mm².'
        }
      ]
    }
  });
