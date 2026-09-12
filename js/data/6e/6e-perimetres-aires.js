/* =========================================================
   Spark Learning – data/6e/6e-perimetres-aires.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-perimetres-aires',
    level: 1, subject: 'maths',
    icon: '📏',
    title: 'Périmètres et aires',
    subtitle: 'Rectangle, triangle, disque',
    keywords: ['Périmètre', 'Aire', 'Rectangle', 'Triangle', 'Disque', 'Pi'],
    physics: false,

    cours: {
      /* « Decouvrir » reecrit le 2026-09-13. Entree retenue : le grillage et le
         gazon d'un meme jardin, deux commandes differentes pour un seul
         terrain. La confusion perimetre/aire est mise en scene AVANT d'etre
         nommee. Le contre-exemple numerique de l'ancienne intro (meme aire,
         perimetres tres differents) est conserve : c'est le meilleur argument
         du chapitre. */
      intro: 'Un jardin rectangulaire à aménager. Pour le clôturer, le vendeur demande combien de mètres de grillage il te faut. Pour le gazon, il demande combien de mètres carrés. Deux questions sur le même jardin, et deux nombres différents — pourquoi ne suffit-il pas de dire « il est grand » ?<br/><br/>' +
        'Parce que le grillage se déroule le long du <strong>contour</strong>, tandis que le gazon recouvre la <strong>surface</strong>. Ce ne sont pas les mêmes mesures, et elles ne s\'expriment même pas dans les mêmes unités : des mètres d\'un côté, des mètres carrés de l\'autre.<br/><br/>' +
        'On appelle <strong>périmètre</strong> la longueur du contour — on « fait le tour » — et <strong>aire</strong> la mesure de la surface intérieure.<br/><br/>' +
        'Ces deux grandeurs sont si <strong>indépendantes</strong> qu\'on peut en changer une sans toucher à l\'autre. Un rectangle de $1$ cm sur $10$ cm et un carré d\'environ $3{,}16$ cm de côté ont exactement la même aire ($10$ cm²), mais des périmètres très différents. Commander le grillage d\'après l\'aire, c\'est se tromper de livraison.<br/><br/>' +
        'Pour les figures rondes intervient une constante célèbre, $\\pi \\approx 3{,}14159\\ldots$, qui est le rapport entre la circonférence et le diamètre de <strong>tout</strong> cercle, quelle que soit sa taille. On retrouvera l\'aire en physique dans la pression ($P = F/S$), et le périmètre dans les longueurs de câbles ou de clôtures.',

      definitions: [
        { term: 'Périmètre', def: 'Longueur totale du contour d\'une figure. Unité : cm ou m (longueur).' },
        { term: 'Aire', def: 'Mesure de la surface intérieure. Unité : cm² ou m² (surface).' },
        { term: 'Pi ($\\pi$)', def: 'Constante universelle $\\approx 3{,}14$. Rapport de la circonférence au diamètre pour tout cercle.' },
        { term: 'Disque', def: 'Surface intérieure du cercle. Aire $= \\pi r^2$, périmètre (cercle) $= 2\\pi r$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier la figure</strong> et ses dimensions. <em>Exemple :</em> rectangle de $8 \\times 5$ cm.',
          '<strong>Appliquer la formule</strong>. <em>Périmètre :</em> $2(8+5) = 26$ cm. <em>Aire :</em> $8 \\times 5 = 40$ cm².',
          '<strong>Vérifier les unités</strong> : périmètre en cm, aire en cm². Ne pas confondre les deux !'
        ]
      },
      example: {
        statement: 'Calculer l\'aire et le périmètre d\'un disque de rayon $r = 5$ cm.',
        steps: [
          'Périmètre (cercle) : $\\mathcal{P} = 2\\pi r = 2 \\times 3{,}14 \\times 5 = 31{,}4$ cm.',
          'Aire (disque) : $\\mathcal{A} = \\pi r^2 = 3{,}14 \\times 25 = 78{,}5$ cm².',
          'Unités : périmètre en cm ✓, aire en cm² ✓'
        ],
        answer: '$\\mathcal{P} = 31{,}4$ cm et $\\mathcal{A} = 78{,}5$ cm²'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Contour vs surface',
        title: 'Périmètre (le contour) et aire (la surface teintée) sur trois figures',
        description: 'Le trait épais mesure le tour de la figure (périmètre) ; la teinte à l\'intérieur mesure la surface (aire). Rectangle et disque reprennent les valeurs du cours.',
        svg: `
          <svg viewBox="0 0 400 215" role="img" aria-labelledby="perimaire-diagram-title perimaire-diagram-desc">
            <title id="perimaire-diagram-title">Perimetre et aire d'un rectangle, d'un triangle et d'un disque</title>
            <desc id="perimaire-diagram-desc">Trois figures cote a cote : rectangle 8 sur 5, triangle de base et hauteur, disque de rayon 5. Le contour represente le perimetre et la teinte interieure represente l'aire.</desc>
            <rect x="20" y="14" width="170" height="30" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 7%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))"></rect>
            <line class="frame-line" x1="32" y1="29" x2="56" y2="29"></line>
            <text class="annotation-label" x="64" y="34">Périmètre (contour)</text>
            <rect x="210" y="14" width="170" height="30" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 7%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))"></rect>
            <rect x="222" y="21" width="16" height="16" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" stroke="none"></rect>
            <text class="annotation-label" x="248" y="34">Aire (surface)</text>
            <rect class="frame-line" x="30" y="90" width="100" height="62" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></rect>
            <text class="annotation-label" x="36" y="104">l = 5 cm</text>
            <text class="annotation-label" x="80" y="168" text-anchor="middle">L = 8 cm</text>
            <text class="annotation-label" x="80" y="186" text-anchor="middle">P = 26 cm</text>
            <text class="tick-label" x="80" y="200" text-anchor="middle">A = 40 cm²</text>
            <polygon class="frame-line" points="160,152 260,152 210,90" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></polygon>
            <line class="guide-line" x1="210" y1="90" x2="210" y2="152"></line>
            <path fill="none" class="grid-line" d="M204 152 L204 146 L210 146"></path>
            <text class="annotation-label" x="216" y="122">hauteur</text>
            <text class="annotation-label" x="210" y="168" text-anchor="middle">base</text>
            <text class="annotation-label" x="210" y="186" text-anchor="middle">P = a + b + c</text>
            <text class="tick-label" x="210" y="200" text-anchor="middle">A = base × h / 2</text>
            <circle class="frame-line" cx="340" cy="121" r="41" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></circle>
            <line class="guide-line" x1="340" y1="121" x2="381" y2="121"></line>
            <text class="annotation-label" x="346" y="115">r = 5 cm</text>
            <text class="annotation-label" x="340" y="186" text-anchor="middle">P = 2 π r</text>
            <text class="tick-label" x="340" y="200" text-anchor="middle">A = π r²</text>
          </svg>
        `,
        notes: [
          'Le rectangle reprend l\'exemple du cours : $L = 8$ cm, $l = 5$ cm, donc $\\mathcal{P} = 2(8+5) = 26$ cm et $\\mathcal{A} = 8 \\times 5 = 40$ cm².',
          'Le triangle n\'a pas de valeurs chiffrées dans le cours : seules les formules $\\mathcal{P} = a+b+c$ et $\\mathcal{A} = \\dfrac{\\text{base} \\times h}{2}$ sont rappelées, sur une figure générique.',
          'Le disque reprend l\'exemple du cours : $r = 5$ cm, donc $\\mathcal{P} = 2\\pi \\times 5 \\approx 31{,}4$ cm et $\\mathcal{A} = \\pi \\times 5^2 \\approx 78{,}5$ cm² (avec $\\pi \\approx 3{,}14$).'
        ],
        reading: 'Suis le trait épais du doigt : c\'est le périmètre. La zone colorée à l\'intérieur, c\'est l\'aire. Les deux se calculent avec des formules différentes et ne s\'expriment jamais dans la même unité.',
        caption: 'Périmètre (contour, en cm) et aire (surface teintée, en cm²) sur un rectangle, un triangle et un disque.'
      },
      /* Schemas secondaires (2026-09-12). Le chapitre n'avait qu'une figure
         pour DEUX notions qu'un eleve de 6e confond systematiquement : on
         ajoute une figure par malentendu identifie, plutot qu'une figure par
         formule — une formule se lit dans l'encadre, un malentendu ne se
         dissipe qu'a l'oeil.

         CONVENTION DE COMPOSITION retenue ici et reprise dans tout le manuel :
         dans une figure de COMPARAISON, les deux objets compares se posent
         cote a cote sur la MEME ligne de base et a la MEME echelle, et la
         grandeur qui varie est la seule difference visible. Toute autre
         difference (position verticale, epaisseur de trait, teinte) serait lue
         par l'eleve comme faisant partie de la demonstration. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Deux notions indépendantes',
          title: 'Même périmètre, aires différentes',
          description: 'Ces deux figures ont <strong>exactement le même périmètre</strong> ($16$ cm de contour), et pourtant leur surface n\'est pas la même. C\'est la preuve visuelle que périmètre et aire sont <strong>deux grandeurs indépendantes</strong>.',
          svg: `
            <svg viewBox="0 0 400 176" role="img" aria-labelledby="perimaire-comp-title perimaire-comp-desc">
              <title id="perimaire-comp-title">Deux rectangles de meme perimetre et d'aires differentes</title>
              <desc id="perimaire-comp-desc">A gauche, un carre de 4 centimetres de cote : son perimetre vaut 16 centimetres et son aire 16 centimetres carres. A droite, un rectangle de 7 centimetres de long sur 1 centimetre de large : son perimetre vaut aussi 16 centimetres, mais son aire ne vaut que 7 centimetres carres. Les deux figures sont dessinees a la meme echelle et posees sur la meme ligne de base, si bien que seule la forme change. Le carre, plus ramasse, contient plus de surface que le rectangle allonge alors que leurs contours ont la meme longueur.</desc>

              <text class="annotation-label" x="200" y="16" text-anchor="middle">MÊME PÉRIMÈTRE : 16 cm</text>

              <!-- Carre 4x4. Echelle commune aux deux figures : 20 unites de
                   viewBox par centimetre, pour que la comparaison des aires se
                   fasse a l'oeil sans arriere-pensee.

                   CADRAGE (leçon du chapitre pilote, 2026-09-12) : le viewBox
                   doit epouser le dessin. La commande useasboundingbox fige la
                   boite TikZ sur le viewBox ENTIER, donc toute bande vide en
                   haut ou en bas du viewBox devient du blanc paye en pages
                   imprimees, que LaTeX ne peut plus recuperer. On cadre serre,
                   avec seulement la marge necessaire aux etiquettes. -->
              <rect class="frame-line" x="44" y="58" width="80" height="80" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)"></rect>
              <text class="tick-label" x="84" y="154" text-anchor="middle">4 cm</text>
              <text class="tick-label" x="36" y="102" text-anchor="end">4 cm</text>
              <text class="annotation-label" x="84" y="172" text-anchor="middle">A = 16 cm²</text>

              <!-- Rectangle 7x1, pose sur la MEME ligne de base (y = 138). -->
              <rect class="frame-line" x="238" y="118" width="140" height="20" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)"></rect>
              <text class="tick-label" x="308" y="154" text-anchor="middle">7 cm</text>
              <text class="tick-label" x="230" y="133" text-anchor="end">1 cm</text>
              <text class="annotation-label" x="308" y="172" text-anchor="middle">A = 7 cm²</text>

              <!-- Le lien entre les deux figures se dit par un TRAIT, pas par
                   des mots empiles : trois mots poses les uns sous les autres
                   au milieu du dessin se lisaient comme du texte tombe la par
                   accident (constate sur l'epreuve du 2026-09-12). Une accolade
                   horizontale portant une seule etiquette rattache visiblement
                   les deux objets compares. -->
              <path class="guide-line" fill="none" d="M84 44 L84 34 L308 34 L308 44"></path>
              <text class="label-soft" x="196" y="28" text-anchor="middle">mais aires différentes</text>
            </svg>
          `,
          notes: [
            'Carré : $\\mathcal{P} = 4 \\times 4 = 16$ cm et $\\mathcal{A} = 4 \\times 4 = 16$ cm².',
            'Rectangle : $\\mathcal{P} = 2 \\times (7 + 1) = 16$ cm et $\\mathcal{A} = 7 \\times 1 = 7$ cm².',
            'Même contour, mais plus du <strong>double</strong> de surface pour le carré : à périmètre fixé, c\'est la forme la plus « ramassée » qui enferme le plus d\'aire.'
          ],
          reading: 'Fais le tour des deux figures avec ton doigt : tu parcours la même longueur, $16$ cm. Regarde maintenant la surface colorée : celle de gauche est bien plus grande. Un périmètre plus grand n\'entraîne donc jamais automatiquement une aire plus grande.',
          caption: 'Deux figures de même périmètre ($16$ cm) mais d\'aires différentes ($16$ cm² et $7$ cm²).'
        },
        {
          theme: 'maths',
          kicker: 'Pourquoi des cm²',
          title: 'L\'aire se compte en carrés unités',
          description: 'Une aire n\'est pas une formule tombée du ciel : c\'est un <strong>nombre de carrés de $1$ cm de côté</strong> que l\'on peut poser dans la figure. La multiplication $L \\times l$ ne fait que compter ces carrés plus vite.',
          svg: `
            <svg viewBox="0 16 420 224" role="img" aria-labelledby="perimaire-unite-title perimaire-unite-desc">
              <title id="perimaire-unite-title">Un rectangle 8 sur 5 pave par des carres de 1 centimetre de cote</title>
              <desc id="perimaire-unite-desc">Un rectangle de 8 centimetres de long sur 5 centimetres de large est quadrille en carres de 1 centimetre de cote. On compte 8 carres sur une rangee et 5 rangees, soit 40 carres en tout. L'aire du rectangle vaut donc 40 centimetres carres, ce que donne aussi directement la multiplication 8 fois 5. Un seul carre unite est mis en evidence dans le coin en haut a gauche pour montrer ce que represente un centimetre carre.</desc>

              <!-- Rectangle 8x5, echelle 32 unites de viewBox par centimetre. -->
              <rect class="frame-line" x="64" y="52" width="256" height="160" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></rect>

              <!-- Quadrillage interieur : les lignes du pavage, en grid-line
                   (le trait le plus fin de la charte). HIERARCHIE VISUELLE :
                   le pavage explique la formule, il ne doit jamais concurrencer
                   le contour de la figure, qui reste en frame-line. -->
              <line class="grid-line" x1="96" y1="52" x2="96" y2="212"></line>
              <line class="grid-line" x1="128" y1="52" x2="128" y2="212"></line>
              <line class="grid-line" x1="160" y1="52" x2="160" y2="212"></line>
              <line class="grid-line" x1="192" y1="52" x2="192" y2="212"></line>
              <line class="grid-line" x1="224" y1="52" x2="224" y2="212"></line>
              <line class="grid-line" x1="256" y1="52" x2="256" y2="212"></line>
              <line class="grid-line" x1="288" y1="52" x2="288" y2="212"></line>
              <line class="grid-line" x1="64" y1="84" x2="320" y2="84"></line>
              <line class="grid-line" x1="64" y1="116" x2="320" y2="116"></line>
              <line class="grid-line" x1="64" y1="148" x2="320" y2="148"></line>
              <line class="grid-line" x1="64" y1="180" x2="320" y2="180"></line>

              <!-- Le carre unite, teinte plus fort que le pavage : c'est le
                   seul objet que l'eleve doit isoler du regard. -->
              <rect class="frame-line" x="64" y="52" width="32" height="32" fill="color-mix(in srgb, var(--diagram-accent) 38%, transparent)"></rect>
              <line class="guide-line" x1="80" y1="52" x2="120" y2="30"></line>
              <text class="label-soft" x="126" y="28">1 carré = 1 cm²</text>

              <text class="tick-label" x="192" y="232" text-anchor="middle">8 carrés par rangée</text>
              <text class="tick-label" x="56" y="136" text-anchor="end">5 rangées</text>
              <text class="annotation-label" x="332" y="136">8 × 5 = 40 cm²</text>
            </svg>
          `,
          notes: [
            'Une rangée contient $8$ carrés de $1$ cm² ; il y a $5$ rangées.',
            'Total : $8 \\times 5 = 40$ carrés, donc $\\mathcal{A} = 40$ cm².',
            'C\'est pour cela qu\'une aire s\'exprime en cm² et jamais en cm : on compte des <strong>carrés</strong>, pas des longueurs.'
          ],
          reading: 'Compte les carrés d\'une seule rangée : il y en a $8$. Compte le nombre de rangées : il y en a $5$. Plutôt que de compter les $40$ carrés un par un, on multiplie : $8 \\times 5$. La formule de l\'aire du rectangle n\'est rien d\'autre que ce comptage abrégé.',
          caption: 'L\'aire d\'un rectangle de $8$ cm sur $5$ cm : $40$ carrés de $1$ cm² chacun.'
        },
        {
          theme: 'maths',
          kicker: 'Le piège du chapitre',
          title: 'Dans l\'aire du disque, c\'est le rayon qui est au carré',
          description: 'L\'erreur la plus fréquente du chapitre : élever $\\pi r$ tout entier au carré au lieu du seul rayon. Les deux calculs ne donnent pas du tout le même nombre.',
          svg: `
            <svg viewBox="0 0 400 210" role="img" aria-labelledby="perimaire-piege-title perimaire-piege-desc">
              <title id="perimaire-piege-title">Comparaison du bon calcul et du calcul errone de l'aire d'un disque</title>
              <desc id="perimaire-piege-desc">Un disque de rayon 5 centimetres est dessine a gauche, avec son rayon trace du centre vers le bord. A droite, deux calculs sont compares. Le calcul correct eleve le rayon au carre avant de multiplier par pi : 3 virgule 14 multiplie par 25 donne 78 virgule 5 centimetres carres. Le calcul errone eleve au carre le produit pi fois rayon tout entier, soit 15 virgule 7 au carre, ce qui donne environ 246 centimetres carres, un resultat plus de trois fois trop grand.</desc>

              <!-- Disque de reference, rayon 5 cm a l'echelle 12 unites/cm. -->
              <circle class="frame-line" cx="76" cy="104" r="60" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></circle>
              <line class="guide-line" x1="76" y1="104" x2="136" y2="104"></line>
              <circle class="plot-point" cx="76" cy="104" r="4"></circle>
              <text class="annotation-label" x="90" y="98">r = 5 cm</text>
              <text class="tick-label" x="76" y="188" text-anchor="middle">le disque du cours</text>

              <!-- Colonne de droite : le bon calcul en haut, l'erreur en bas.
                   PARTI PRIS pour toute figure « piege » du manuel : le calcul
                   JUSTE se pose en premier et en teinte d'accent ; l'erreur
                   vient dessous, en teinte faible et en trait tirete. L'oeil
                   lit le haut d'abord, et c'est la bonne forme qui doit rester
                   en memoire, jamais la fausse. -->
              <rect x="176" y="40" width="212" height="54" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 16%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 34%, var(--border))"></rect>
              <text class="annotation-label" x="190" y="62">A = π × r²</text>
              <text class="tick-label" x="190" y="82">3,14 × 25 = 78,5 cm²</text>

              <rect x="176" y="116" width="212" height="54" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 18%, var(--border))" stroke-dasharray="5 4"></rect>
              <text class="tick-label" x="190" y="138">(π × r)² = 15,7²</text>
              <text class="label-soft" x="190" y="158">≈ 246 cm² : bien trop grand</text>
            </svg>
          `,
          notes: [
            'Bon calcul : on élève <strong>d\'abord</strong> le rayon au carré, $5^2 = 25$, puis on multiplie par $\\pi$ : $3{,}14 \\times 25 = 78{,}5$ cm².',
            'Calcul erroné : $(\\pi r)^2 = 15{,}7^2 \\approx 246$ cm², soit un résultat plus de <strong>trois fois trop grand</strong>.',
            'Repère de bon sens : l\'aire d\'un disque est toujours plus grande que celle du carré construit sur son rayon ($25$ cm² ici) et plus petite que celle du carré construit sur son diamètre ($100$ cm²). $78{,}5$ est bien entre les deux ; $246$ ne l\'est pas.'
          ],
          reading: 'Un exposant ne porte que sur ce qu\'il touche : dans $\\pi r^2$, il touche le $r$, pas le $\\pi$. Pour te contrôler, encadre : l\'aire doit tomber entre l\'aire du carré de côté $r$ et celle du carré de côté $2r$.',
          caption: 'Le piège du chapitre : $\\pi r^2$ (correct) et $(\\pi r)^2$ (erroné) sur le disque de rayon $5$ cm.'
        }
      ],
      formulas: [
        'Rectangle : $\\mathcal{P} = 2(L + l)$ et $\\mathcal{A} = L \\times l$',
        'Triangle : $\\mathcal{P} = a + b + c$ et $\\mathcal{A} = \\dfrac{\\text{base} \\times h}{2}$',
        'Disque : $\\mathcal{P} = 2\\pi r$ et $\\mathcal{A} = \\pi r^2$, avec $\\pi \\approx 3{,}14$'
      ],
      recap: [
        'Périmètre = longueur du contour (en cm). Aire = mesure de la surface (en cm²).',
        'Rectangle : $\\mathcal{P} = 2(L+l)$, $\\mathcal{A} = L \\times l$.',
        'Disque : $\\mathcal{P} = 2\\pi r$, $\\mathcal{A} = \\pi r^2$. Attention : c\'est $r$ au carré, pas $\\pi r$ !',
        'Un périmètre plus grand ne signifie pas une aire plus grande.'
      ],
      piege: 'Piège classique : confondre périmètre et aire. Le périmètre se mesure en cm (longueur), l\'aire en cm² (surface). De plus, dans $\\pi r^2$, c\'est $r$ qui est élevé au carré, pas $\\pi r$ entier !'
    },

    quiz: [
      { q: 'Un rectangle mesure $8$ cm de long et $5$ cm de large. Quelle est son aire ?', options: ['$26$ cm²', '$40$ cm²', '$13$ cm²', '$80$ cm²'], answer: 1, correction: '$\\mathcal{A} = 8 \\times 5 = 40$ cm².' },
      { q: 'Un disque a un rayon de $7$ cm. Quelle est son aire ($\\pi \\approx 3{,}14$) ?', options: ['$21{,}98$ cm²', '$43{,}96$ cm²', '$153{,}86$ cm²', '$153{,}86$ m²'], answer: 2, correction: '$\\pi \\times 7^2 = 3{,}14 \\times 49 = 153{,}86$ cm².' },
      { q: 'Un élève calcule $\\mathcal{A} = \\pi \\times 4 = 12{,}56$ cm² pour un disque de rayon $4$ cm. Son erreur ?', options: ['$2\\pi r = 25{,}13$ cm', 'Il a confondu avec le périmètre. L\'aire est $\\pi r^2 = \\pi \\times 16 \\approx 50{,}27$ cm².', 'Correct.', 'Il faut $r = 2$.'], answer: 1, correction: 'L\'aire est $\\pi r^2 = \\pi \\times 16 \\approx 50{,}27$ cm², pas $\\pi \\times r$.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const fig = pick(['rectangle', 'triangle', 'disque']);
        if (fig === 'rectangle') {
          const L = rand(4, 15), l = rand(2, L - 1);
          const ctx = pick([
            { build: () => `Un rectangle mesure $${L}$ cm de long et $${l}$ cm de large.<br/>Calcule son <strong>aire</strong> en cm².` },
            { build: () => `Léa découpe une tablette de chocolat rectangulaire de $${L}$ cm sur $${l}$ cm.<br/>Quelle est l'<strong>aire</strong> de cette tablette (en cm²) ?` },
            { build: () => `Une carte de visite mesure $${L}$ cm de long et $${l}$ cm de large.<br/>Calcule son <strong>aire</strong> en cm².` },
            { build: () => `Un cahier de brouillon a pour dimensions $${L}$ cm × $${l}$ cm.<br/>Quelle est l'<strong>aire</strong> de sa couverture (en cm²) ?` },
            { build: () => `Un napperon rectangulaire mesure $${L}$ cm de long et $${l}$ cm de large.<br/>Calcule son <strong>aire</strong> en cm².` },
            { build: () => `Une carte postale a pour dimensions $${L}$ cm × $${l}$ cm.<br/>Quelle est l'<strong>aire</strong> occupée par cette carte (en cm²) ?` }
          ]);
          return {
            statement: ctx.build(),
            // Figure parametrique (2026-09-12) : construite a partir des L et l
            // du tirage, donc toujours d'accord avec l'enonce. Sans elle,
            // l'eleve devait se representer le rectangle avant de calculer —
            // ce qui n'est pas la competence evaluee ici.
            figure: figureRectangle(L, l),
            answer: L * l,
            tolerance: 0,
            unit: 'cm²',
            hint: `$\\mathcal{A} = L \\times l = ${L} \\times ${l}$.`,
            solution: [`$\\mathcal{A} = ${L} \\times ${l} = ${L * l}$ cm²`]
          };
        }
        if (fig === 'triangle') {
          const b = rand(4, 12), h = rand(3, 10);
          const aire = parseFloat((b * h / 2).toFixed(1));
          const ctx = pick([
            { build: () => `Un triangle a une base de $${b}$ cm et une hauteur de $${h}$ cm.<br/>Calcule son <strong>aire</strong> en cm².` },
            { build: () => `La voile triangulaire d'une maquette de bateau a une base de $${b}$ cm et une hauteur de $${h}$ cm.<br/>Quelle est l'<strong>aire</strong> de cette voile (en cm²) ?` },
            { build: () => `Un fanion triangulaire a une base de $${b}$ cm et une hauteur de $${h}$ cm.<br/>Calcule l'<strong>aire</strong> de ce fanion en cm².` },
            { build: () => `Un panneau de signalisation triangulaire a une base de $${b}$ cm et une hauteur de $${h}$ cm.<br/>Quelle est l'<strong>aire</strong> de ce panneau (en cm²) ?` },
            { build: () => `L'aile d'un cerf-volant a la forme d'un triangle de base $${b}$ cm et de hauteur $${h}$ cm.<br/>Calcule l'<strong>aire</strong> de cette aile en cm².` },
            { build: () => `Une part de pizza triangulaire a une base de $${b}$ cm et une hauteur de $${h}$ cm.<br/>Quelle est l'<strong>aire</strong> de cette part (en cm²) ?` }
          ]);
          return {
            statement: ctx.build(),
            // La hauteur est tracee en pointilles et son angle droit code : sur
            // un enonce de triangle, « hauteur » est justement le mot que
            // l'eleve confond avec « cote ».
            figure: figureTriangle(b, h),
            answer: aire,
            tolerance: 0.1,
            unit: 'cm²',
            hint: `$\\mathcal{A} = \\dfrac{b \\times h}{2}$.`,
            solution: [`$\\mathcal{A} = \\dfrac{${b} \\times ${h}}{2} = \\dfrac{${b * h}}{2} = ${fr(aire)}$ cm²`]
          };
        }
        const r = rand(2, 10);
        const aire = parseFloat((3.14 * r * r).toFixed(2));
        const ctx = pick([
          { build: () => `Un disque a un rayon de $${r}$ cm.<br/>Calcule son <strong>aire</strong> avec $\\pi \\approx 3{,}14$.` },
          { build: () => `Un CD a un rayon de $${r}$ cm.<br/>Calcule l'<strong>aire</strong> de ce disque avec $\\pi \\approx 3{,}14$.` },
          { build: () => `Un sous-verre circulaire a un rayon de $${r}$ cm.<br/>Quelle est son <strong>aire</strong> (avec $\\pi \\approx 3{,}14$) ?` },
          { build: () => `Le couvercle rond d'un bocal a un rayon de $${r}$ cm.<br/>Calcule l'<strong>aire</strong> de ce couvercle avec $\\pi \\approx 3{,}14$.` },
          { build: () => `Le cadran d'une horloge circulaire a un rayon de $${r}$ cm.<br/>Calcule l'<strong>aire</strong> de ce cadran avec $\\pi \\approx 3{,}14$.` },
          { build: () => `La roue d'un jouet a un rayon de $${r}$ cm.<br/>Quelle est l'<strong>aire</strong> de cette roue (avec $\\pi \\approx 3{,}14$) ?` }
        ]);
        return {
          statement: ctx.build(),
          // Le rayon est trace depuis le centre : c'est ce trait qui distingue
          // visuellement r de d, la confusion la plus frequente du chapitre.
          figure: figureDisque(r),
          answer: aire,
          tolerance: 0.5,
          unit: 'cm²',
          hint: `$\\mathcal{A} = \\pi r^2 = 3{,}14 \\times ${r}^2$.`,
          solution: [`$\\mathcal{A} = 3{,}14 \\times ${r * r} = ${fr(aire)}$ cm²`]
        };
      }
    },

    probleme: {
      context: 'Un jardinier veut gazonner un jardin rectangulaire de $12$ m × $8$ m. Une zone rectangulaire de $4$ m × $3$ m est réservée pour un bassin.',
      tasks: [
        'Calcule l\'aire totale du jardin.',
        'Calcule l\'aire de la zone bassin.',
        'Quelle superficie sera gazonnée ?',
        'La pelouse coûte $4{,}50$ € le m². Quel est le coût total ?'
      ],
      solutions: [
        'Aire totale : $12 \\times 8 = 96$ m².',
        'Aire bassin : $4 \\times 3 = 12$ m².',
        'Aire gazonnée : $96 - 12 = 84$ m².',
        'Coût : $84 \\times 4{,}50 = 378$ €.'
      ],
      finalAnswer: 'La superficie gazonnée est $84$ m² pour un coût de $378$ €.'
    },

    evaluation: {
      title: 'Évaluation — Périmètres et aires',
      duration: '20 min',
      questions: [
        { statement: 'Un rectangle mesure $12$ cm × $7$ cm. Calcule son périmètre en cm.', type: 'numeric', answer: 38, tolerance: 0, unit: 'cm', points: 2, correction: '$2(12+7) = 38$ cm.' },
        { statement: 'Un triangle a une base de $10$ cm et une hauteur de $6$ cm. Son aire ?', type: 'numeric', answer: 30, tolerance: 0, unit: 'cm²', points: 2, correction: '$\\dfrac{10 \\times 6}{2} = 30$ cm².' },
        { statement: 'Un disque a un rayon de $5$ cm. Son aire ($\\pi \\approx 3{,}14$) ?', type: 'numeric', answer: 78.5, tolerance: 0.1, unit: 'cm²', points: 2, correction: '$3{,}14 \\times 25 = 78{,}5$ cm².' },
        // Competence « communiquer » (2026-09-12). L'ancienne version se tranchait
        // sur les unites, trois options etant absurdes : elle notait une lecture, pas
        // une formulation. Les quatre options disent desormais toutes la meme chose
        // en apparence ; seule l'une d'elles distingue proprement les deux grandeurs
        // ET leurs unites, ce que le referentiel appelle « communiquer ».
        { statement: 'Un camarade te demande d\'expliquer, en une phrase, ce qui distingue le <strong>périmètre</strong> de l\'<strong>aire</strong> d\'un rectangle.<br/><br/>Quelle phrase est la mieux formulée ?', type: 'multiple-choice', options: ['« Le périmètre, c\'est quand on additionne ; l\'aire, c\'est quand on multiplie. »', '« Le périmètre mesure la longueur du contour et s\'exprime en cm ; l\'aire mesure la surface intérieure et s\'exprime en cm². »', '« Le périmètre et l\'aire mesurent tous les deux la taille de la figure, mais avec des formules différentes. »', '« Le périmètre est toujours plus petit que l\'aire. »'], answer: 1, points: 2, correction: 'La première phrase décrit deux <em>opérations</em> sans dire ce qu\'on mesure : elle est d\'ailleurs fausse pour le carré, dont le périmètre se calcule aussi par une multiplication.<br/><br/>La troisième renonce justement à distinguer les deux grandeurs.<br/><br/>La quatrième énonce une comparaison qui n\'a pas de sens : un contour en cm et une surface en cm² ne se comparent pas.<br/><br/>Seule la deuxième dit <strong>ce que chaque grandeur mesure</strong> (le contour, la surface) <strong>et dans quelle unité</strong> : c\'est la phrase qu\'on attend.' },
        { statement: 'Un cercle a un diamètre de $8$ cm. Son périmètre ($\\pi \\approx 3{,}14$) ?', type: 'numeric', answer: 25.12, tolerance: 0.1, unit: 'cm', points: 2, correction: '$\\pi \\times d = 3{,}14 \\times 8 = 25{,}12$ cm.' }
      ]
    }
  });
