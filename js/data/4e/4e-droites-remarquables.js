window.MODULES.push(
    {
    id: '4e-droites-remarquables',
    level: 1, subject: 'maths',
    icon: '🔺',
    title: 'Droites remarquables du triangle',
    subtitle: 'Médiatrice, bissectrice, médiane, hauteur',
    keywords: ['Médiatrice', 'Bissectrice', 'Médiane', 'Hauteur', 'Cercle inscrit', 'Cercle circonscrit'],
    physics: false,
    cours: {
      intro: 'Un archéologue retrouve trois éclats du bord d\'une assiette circulaire cassée : comment retrouver le centre exact de l\'assiette sans le reste de l\'objet ? En traçant certaines droites bien choisies à partir des trois points, on peut reconstruire le centre — c\'est le genre de problème que résolvent les droites remarquables du triangle.<br/><br/>' +
        'Chaque triangle possède quatre familles de droites remarquables, chacune associée à un point de concours unique.' +
        '<br/><br/>' +
        '<strong>Médiatrices</strong> → circumcentre (équidistant des 3 sommets = centre du cercle circonscrit). <strong>Bissectrices</strong> → incentre (équidistant des 3 côtés = centre du cercle inscrit). <strong>Médianes</strong> → centroïde ou isobarycentre (centre de gravité, à $\\frac{2}{3}$ de chaque sommet). <strong>Hauteurs</strong> → orthocentre (peut être extérieur au triangle si obtus).' +
        '<br/><br/>' +
        '<strong>Piège fréquent :</strong> ne pas confondre médiane (joint un sommet au milieu du côté opposé) et médiatrice (perpendiculaire à un côté en son milieu — elle ne passe pas nécessairement par un sommet).' +
        '<br/><br/>' +
        'Ces droites sont utiles en ingénierie : le centroïde est le centre de masse, le circumcentre sert à trouver le cercle passant par 3 points.',
      definitions: [
        { term: 'Médiatrice', def: 'Droite perpendiculaire à un côté en son milieu. Lieu des points équidistants des deux extrémités de ce côté.' },
        { term: 'Bissectrice', def: 'Demi-droite issue d\'un sommet qui partage l\'angle en deux angles égaux.' },
        { term: 'Médiane', def: 'Segment (ou droite) qui joint un sommet au milieu du côté opposé.' },
        { term: 'Hauteur', def: 'Droite perpendiculaire à un côté passant par le sommet opposé. Elle peut être extérieure au triangle si celui-ci est obtus.' }
      ],
      method: {
        title: 'Les quatre droites remarquables',
        steps: [
           '<strong>Médiatrice</strong> d\'un côté : perpendiculaire à ce côté en son milieu. Les trois médiatrices se coupent au CIRCUMCENTRE (centre du cercle circonscrit). <strong>Exemple :</strong> pour $[AB]$ avec $A(0;0)$ et $B(6;0)$, le milieu est $(3;0)$ et la médiatrice est la droite $x = 3$.',
           '<strong>Bissectrice</strong> d\'un angle : partage l\'angle en deux angles égaux. Les trois bissectrices se coupent à l\'INCENTRE (centre du cercle inscrit). <strong>Exemple :</strong> la bissectrice d\'un angle de $80°$ crée deux angles de $40°$.',
          '<strong>Médiane</strong> : joint un sommet au milieu du côté opposé. Les trois médianes se coupent au CENTROÏDE (ou ISOBARYCENTRE), à $\\frac{2}{3}$ de chaque sommet. <strong>Exemple :</strong> si la médiane issue de $A$ mesure $12$ cm, alors $AG = \\frac{2}{3} \\times 12 = 8$ cm.',
          '<strong>Hauteur</strong> : perpendiculaire issue d\'un sommet sur le côté opposé. Les trois hauteurs se coupent à l\'ORTHOCENTRE. <strong>Exemple :</strong> dans un triangle rectangle, les deux hauteurs issues des angles aigus sont les deux côtés de l\'angle droit.'
        ]
      },
      example: {
        statement: 'Un triangle $ABC$ a pour sommets $A(0 ; 0)$, $B(8 ; 0)$ et $C(2 ; 6)$. Calculer les coordonnées du centroïde $G$ et la longueur $AG$ sachant que la médiane issue de $A$ va au milieu $M$ de $[BC]$.',
        steps: [
          'Milieu de $[BC]$ : $M = \\left(\\dfrac{8+2}{2} ; \\dfrac{0+6}{2}\\right) = (5 ; 3)$.',
          'Centroïde : $G = \\left(\\dfrac{0+8+2}{3} ; \\dfrac{0+0+6}{3}\\right) = \\left(\\dfrac{10}{3} ; 2\\right)$.',
          'Longueur $AM = \\sqrt{5^2 + 3^2} = \\sqrt{34} \\approx 5{,}83$ cm. Donc $AG = \\dfrac{2}{3} \\times \\sqrt{34} \\approx 3{,}89$ cm.'
        ],
        answer: 'Le centroïde est en $G\\left(\\dfrac{10}{3} ; 2\\right)$ et $AG \\approx 3{,}89$ unités.'
      },
      formulas: [
        'Médiatrice : locus des points équidistants des deux extrémités',
        'Centroïde $G$ : $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$',
        'Sur une médiane : $AG = \\frac{2}{3} AM$ (M = milieu du côté opposé)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Triangle et droites remarquables',
        title: 'Quatre familles de droites, quatre points de concours',
        description: 'Sur le triangle $ABC$ de l\'exemple ($A(0;0)$, $B(8;0)$, $C(2;6)$) : les médianes se coupent au centre de gravité $G$, les médiatrices au centre du cercle circonscrit $O$, les hauteurs à l\'orthocentre $H$, et les bissectrices au centre du cercle inscrit $I$.',
        svg: `
          <!-- QUATRE VIGNETTES, une par famille, plutot qu'une seule figure.
               La version precedente superposait 12 droites dans un triangle de
               10 cm, distinguees par des nuances de gris et une legende : sur le
               papier, plus rien n'etait suivable (audit du 2026-08-16). Chaque
               panneau montre le MEME triangle A(0;0) B(8;0) C(2;6) à la même
               echelle (13 px par unité) : c'est la comparaison entre panneaux
               qui fait voir que les quatre points de concours sont distincts.
               Les sommets ne sont nommes que sur le premier panneau. -->
          <svg viewBox="0 0 500 344" role="img" aria-labelledby="droites-rem-title droites-rem-desc">
            <title id="droites-rem-title">Les quatre droites remarquables du triangle, une par vignette</title>
            <desc id="droites-rem-desc">Quatre vignettes du meme triangle A(0;0) B(8;0) C(2;6) : les médianes et leur point de concours G, les médiatrices et O, les hauteurs et H, les bissectrices et I. Les quatre points sont a des positions differentes a l'interieur du triangle.</desc>

            <!-- 1. Médianes -> G(10/3 ; 2) -->
            <text class="axis-label" x="40" y="24">1. Médianes → G</text>
            <polygon points="40,150 144,150 66,72" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="40" y1="150" x2="144" y2="150"></line>
            <line class="frame-line" x1="144" y1="150" x2="66" y2="72"></line>
            <line class="frame-line" x1="66" y1="72" x2="40" y2="150"></line>
            <line class="curve-main" x1="40" y1="150" x2="105" y2="111"></line>
            <line class="curve-main" x1="144" y1="150" x2="53" y2="111"></line>
            <line class="curve-main" x1="66" y1="72" x2="92" y2="150"></line>
            <circle class="plot-point-alt" cx="40" cy="150" r="4"></circle>
            <circle class="plot-point-alt" cx="144" cy="150" r="4"></circle>
            <circle class="plot-point-alt" cx="66" cy="72" r="4"></circle>
            <text class="tick-label" x="26" y="166">A</text>
            <text class="tick-label" x="148" y="166">B</text>
            <text class="tick-label" x="72" y="66">C</text>
            <circle class="plot-point" cx="83" cy="124" r="5"></circle>
            <text class="annotation-label" x="90" y="132">G</text>
            <text class="tick-label" x="40" y="180">centre de gravité</text>

            <!-- 2. Médiatrices -> O(4 ; 2) -->
            <text class="axis-label" x="290" y="24">2. Médiatrices → O</text>
            <polygon points="290,150 394,150 316,72" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="290" y1="150" x2="394" y2="150"></line>
            <line class="frame-line" x1="394" y1="150" x2="316" y2="72"></line>
            <line class="frame-line" x1="316" y1="72" x2="290" y2="150"></line>
            <line class="curve-main" x1="342" y1="162" x2="342" y2="108"></line>
            <line class="curve-main" x1="291" y1="107" x2="358" y2="129"></line>
            <line class="curve-main" x1="365" y1="101" x2="326" y2="140"></line>
            <circle class="plot-point-alt" cx="290" cy="150" r="4"></circle>
            <circle class="plot-point-alt" cx="394" cy="150" r="4"></circle>
            <circle class="plot-point-alt" cx="316" cy="72" r="4"></circle>
            <circle class="plot-point" cx="342" cy="124" r="5"></circle>
            <text class="annotation-label" x="350" y="140">O</text>
            <text class="tick-label" x="290" y="180">centre du cercle circonscrit</text>

            <!-- 3. Hauteurs -> H(2 ; 2) -->
            <text class="axis-label" x="40" y="204">3. Hauteurs → H</text>
            <polygon points="40,310 144,310 66,232" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="40" y1="310" x2="144" y2="310"></line>
            <line class="frame-line" x1="144" y1="310" x2="66" y2="232"></line>
            <line class="frame-line" x1="66" y1="232" x2="40" y2="310"></line>
            <line class="curve-main" x1="66" y1="232" x2="66" y2="310"></line>
            <line class="curve-main" x1="40" y1="310" x2="92" y2="258"></line>
            <line class="curve-main" x1="144" y1="310" x2="50" y2="279"></line>
            <circle class="plot-point-alt" cx="40" cy="310" r="4"></circle>
            <circle class="plot-point-alt" cx="144" cy="310" r="4"></circle>
            <circle class="plot-point-alt" cx="66" cy="232" r="4"></circle>
            <circle class="plot-point" cx="66" cy="284" r="5"></circle>
            <text class="annotation-label" x="73" y="292">H</text>
            <text class="tick-label" x="40" y="340">orthocentre</text>

            <!-- 4. Bissectrices -> I(2,92 ; 2,10) -->
            <text class="axis-label" x="290" y="204">4. Bissectrices → I</text>
            <polygon points="290,310 394,310 316,232" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="290" y1="310" x2="394" y2="310"></line>
            <line class="frame-line" x1="394" y1="310" x2="316" y2="232"></line>
            <line class="frame-line" x1="316" y1="232" x2="290" y2="310"></line>
            <line class="curve-main" x1="290" y1="310" x2="350" y2="266"></line>
            <line class="curve-main" x1="394" y1="310" x2="303" y2="272"></line>
            <line class="curve-main" x1="316" y1="232" x2="334" y2="310"></line>
            <circle class="plot-point-alt" cx="290" cy="310" r="4"></circle>
            <circle class="plot-point-alt" cx="394" cy="310" r="4"></circle>
            <circle class="plot-point-alt" cx="316" cy="232" r="4"></circle>
            <circle class="plot-point" cx="328" cy="283" r="5"></circle>
            <text class="annotation-label" x="335" y="291">I</text>
            <text class="tick-label" x="290" y="340">centre du cercle inscrit</text>
          </svg>
        `,
        notes: [
          'Médianes (trait plein épais) : chaque sommet relié au milieu du côté opposé. Les trois se coupent au centre de gravité G, aux 2/3 de chaque sommet.',
          'Médiatrices (tirets longs) : perpendiculaires à chaque côté en son milieu, elles ne passent pas forcément par un sommet. Elles se coupent au centre du cercle circonscrit O, équidistant de A, B et C.',
          'Hauteurs (trait plein coloré) : perpendiculaires issues de chaque sommet sur le côté opposé. Elles se coupent à l\'orthocentre H.',
          'Bissectrices (tirets courts) : partagent chaque angle en deux. Elles se coupent au centre du cercle inscrit I, équidistant des trois côtés.'
        ],
        reading: 'Les quatre vignettes montrent le même triangle à la même échelle : seule change la famille de droites tracée. Compare la position du point noir d\'une vignette à l\'autre — les quatre points de concours ne sont pas au même endroit.',
        caption: 'Le même triangle $ABC$ vu quatre fois : médianes (→ $G$), médiatrices (→ $O$), hauteurs (→ $H$), bissectrices (→ $I$). Ce triangle étant acutangle, les quatre points restent à l\'intérieur du triangle.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13). Une figure par MALENTENDU :
         1. mediane et mediatrice sont confondues parce que toutes deux
            « passent par le milieu » — la mediatrice ignore le sommet ;
         2. le rapport 2/3 du centre de gravite se compte depuis le SOMMET,
            et l'eleve prend un tiers pour deux tiers ;
         3. le centre du cercle circonscrit SORT du triangle quand celui-ci est
            obtusangle, ce qu'aucune figure de cours ne montre jamais.
         Coordonnees exactes : sommets choisis pour que G tombe sur des entiers
         (somme des coordonnees divisible par 3) et que A, G et M soient
         rigoureusement alignes — produit vectoriel nul (scratchpad
         geo-exact.js). */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'La confusion la plus tenace',
          title: 'Médiane et médiatrice passent par le même milieu',
          description: 'Les deux droites passent par le milieu de $[BC]$, et c\'est tout ce qu\'elles ont en commun. La <strong>médiane</strong> rejoint le sommet opposé ; la <strong>médiatrice</strong> est perpendiculaire au côté et ne s\'occupe d\'aucun sommet.',
          svg: `
            <svg viewBox="0 0 400 200" role="img" aria-labelledby="droites-conf-title droites-conf-desc">
              <title id="droites-conf-title">La mediane et la mediatrice d'un meme cote</title>
              <desc id="droites-conf-desc">Le meme triangle est dessine deux fois. A gauche, la mediane part du sommet A et rejoint le milieu du cote oppose : elle est inclinee et touche le sommet. A droite, la mediatrice part du meme milieu mais monte perpendiculairement au cote, marquee par un petit carre d'angle droit, et ne passe pas par le sommet A. Les deux droites partagent donc le meme point de depart au milieu du cote, mais vont dans des directions differentes.</desc>

              <!-- MEME triangle et MEME ligne de base des deux cotes : la seule
                   difference visible doit etre la droite tracee. -->
              <polygon class="frame-line" points="30,160 150,160 66,60" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></polygon>
              <line class="curve-main" x1="66" y1="60" x2="90" y2="160"></line>
              <circle class="plot-point" cx="90" cy="160" r="4"></circle>
              <text class="annotation-label" x="60" y="52" text-anchor="middle">A</text>
              <text class="tick-label" x="22" y="176" text-anchor="middle">B</text>
              <text class="tick-label" x="158" y="176" text-anchor="middle">C</text>
              <text class="tick-label" x="90" y="176" text-anchor="middle">milieu</text>
              <text class="annotation-label" x="90" y="30" text-anchor="middle">médiane</text>
              <text class="tick-label" x="90" y="192" text-anchor="middle">elle rejoint le sommet A</text>

              <polygon class="frame-line" points="240,160 360,160 276,60" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></polygon>
              <line class="curve-main" x1="300" y1="160" x2="300" y2="52"></line>
              <circle class="plot-point" cx="300" cy="160" r="4"></circle>
              <path class="grid-line" fill="none" d="M291 160 L291 151 L300 151"></path>
              <text class="annotation-label" x="270" y="52" text-anchor="middle">A</text>
              <text class="tick-label" x="232" y="176" text-anchor="middle">B</text>
              <text class="tick-label" x="368" y="176" text-anchor="middle">C</text>
              <text class="tick-label" x="300" y="176" text-anchor="middle">milieu</text>
              <text class="annotation-label" x="300" y="30" text-anchor="middle">médiatrice</text>
              <text class="tick-label" x="300" y="192" text-anchor="middle">elle ignore le sommet A</text>
            </svg>
          `,
          notes: [
            'Les deux droites partent du <strong>même point</strong>, le milieu de $[BC]$ : c\'est ce qui rend la confusion si naturelle.',
            'La médiane est définie par un <strong>sommet</strong> et un milieu. La médiatrice est définie par un <strong>angle droit</strong> et un milieu.',
            'Elles ne coïncident que si le triangle est isocèle en $A$ — cas particulier, et surtout pas cas général.'
          ],
          reading: 'Demande-toi toujours : est-ce que ma droite touche un sommet ? Si oui, c\'est une médiane. Est-ce qu\'elle forme un angle droit avec le côté ? Alors c\'est une médiatrice.',
          caption: 'Médiane et médiatrice de $[BC]$ : même milieu, mais l\'une rejoint le sommet et l\'autre est perpendiculaire.'
        },
        {
          theme: 'maths',
          kicker: 'Deux tiers depuis où ?',
          title: 'Le centre de gravité est aux deux tiers en partant du sommet',
          description: 'Le point $G$ coupe chaque médiane en deux morceaux dont l\'un est <strong>le double</strong> de l\'autre. Toute la difficulté est de savoir de quel côté on compte : la grande part est du côté du <strong>sommet</strong>.',
          svg: `
            <svg viewBox="0 0 400 200" role="img" aria-labelledby="droites-g-title droites-g-desc">
              <title id="droites-g-title">Le centre de gravite partage la mediane en deux tiers et un tiers</title>
              <desc id="droites-g-desc">Un triangle porte une mediane allant du sommet A au milieu M du cote oppose. Le centre de gravite G est place sur cette mediane. Le segment allant de A a G est deux fois plus long que le segment allant de G a M : le premier represente deux tiers de la mediane et le second un tiers. Les deux portions sont mesurees et etiquetees, la grande du cote du sommet.</desc>

              <!-- Sommets choisis pour que G soit ENTIER : A(60,180) B(300,180)
                   C(162,39), somme des x = 522 et des y = 399, tous deux
                   divisibles par 3. G = (174,133), M = (231,109.5).
                   Verifie : A, G, M alignes (produit vectoriel exactement nul)
                   et AG/GM = 2,000000000. -->
              <polygon class="frame-line" points="60,180 300,180 162,39" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)"></polygon>
              <line class="curve-main" x1="60" y1="180" x2="231" y2="109.5"></line>
              <circle class="plot-point" cx="174" cy="133" r="5"></circle>
              <circle class="plot-point-alt" cx="231" cy="109.5" r="4"></circle>

              <text class="annotation-label" x="52" y="192" text-anchor="middle">A</text>
              <text class="tick-label" x="306" y="192" text-anchor="middle">B</text>
              <text class="tick-label" x="162" y="32" text-anchor="middle">C</text>
              <text class="annotation-label" x="170" y="152" text-anchor="middle">G</text>
              <text class="tick-label" x="243" y="104" text-anchor="middle">M</text>

              <text class="annotation-label" x="112" y="146" text-anchor="middle">deux tiers</text>
              <text class="tick-label" x="208" y="132" text-anchor="middle">un tiers</text>
              <text class="tick-label" x="200" y="192" text-anchor="middle">la grande part est du côté du sommet</text>
            </svg>
          `,
          notes: [
            'Le segment $[AG]$ vaut <strong>deux tiers</strong> de la médiane, et $[GM]$ un tiers : $AG$ est donc le double de $GM$.',
            'Conséquence pratique : si on te donne $GM$, la médiane entière vaut $3 \\times GM$, et $AG = 2 \\times GM$.',
            'L\'erreur classique est de multiplier par $\\dfrac{3}{2}$ au lieu de $3$, en confondant $GM$ avec $AG$.'
          ],
          reading: 'Repère d\'abord le sommet, puis pars de lui. La première portion rencontrée est la plus longue : deux tiers. Le petit bout restant, du côté du milieu, est le tiers.',
          caption: 'Le centre de gravité $G$ partage la médiane en deux tiers du côté du sommet et un tiers du côté du milieu.'
        },
        {
          theme: 'maths',
          kicker: 'Ce que les figures de cours ne montrent pas',
          title: 'Le centre du cercle circonscrit peut sortir du triangle',
          description: 'Presque toutes les figures de cours utilisent un triangle « bien proportionné », où le point $O$ tombe à l\'intérieur. Ce n\'est pas une règle : dès que le triangle a un <strong>angle obtus</strong>, le centre passe dehors.',
          svg: `
            <svg viewBox="0 0 400 188" role="img" aria-labelledby="droites-obtus-title droites-obtus-desc">
              <title id="droites-obtus-title">Position du centre du cercle circonscrit selon la forme du triangle</title>
              <desc id="droites-obtus-desc">Deux triangles sont compares. Celui de gauche a tous ses angles aigus et le centre de son cercle circonscrit se trouve a l'interieur de la figure. Celui de droite possede un angle obtus et le centre de son cercle circonscrit se trouve a l'exterieur du triangle, au dela du cote le plus long. Dans les deux cas le centre reste a egale distance des trois sommets, ce qui est la seule propriete qui le definit.</desc>

              <!-- Triangle AIGU : A(40,150) B(150,150) C(104,64).
                   Angles mesures 53,3 / 61,9 / 64,8 degres, donc bien aigu.
                   Centre du cercle circonscrit CALCULE (formule du
                   circumcentre, scratchpad circum.js) : O = (95 ; 124,12) et
                   R = 60,79 — equidistant des trois sommets a 0,01 pres.
                   Une premiere version posait O « a vue » en (95 ; 118,31)
                   avec R = 63,05 : le cercle ne passait par aucun sommet. -->
              <polygon class="frame-line" points="40,150 150,150 104,64" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></polygon>
              <circle class="grid-line" cx="95" cy="124.12" r="60.79" fill="none"></circle>
              <circle class="plot-point" cx="95" cy="124.12" r="5"></circle>
              <text class="annotation-label" x="95" y="142" text-anchor="middle">O</text>
              <text class="tick-label" x="95" y="180" text-anchor="middle">angles aigus : O dedans</text>

              <!-- Triangle OBTUS : A(250,150) B(360,150) C(280,120).
                   Angle en C = 114,4 degres, franchement obtus (une premiere
                   version n'atteignait que 90,8 : la sortie de O se jouait a
                   un cheveu et ne se voyait pas). O = (305 ; 175), R = 60,42,
                   verifie equidistant des trois sommets et EXTERIEUR au
                   triangle par les coordonnees barycentriques. -->
              <polygon class="frame-line" points="250,150 360,150 280,120" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></polygon>
              <circle class="grid-line" cx="305" cy="175" r="60.42" fill="none"></circle>
              <circle class="plot-point" cx="305" cy="175" r="5"></circle>
              <text class="annotation-label" x="317" y="172" text-anchor="start">O</text>
              <text class="tick-label" x="305" y="112" text-anchor="middle">angle obtus : O dehors</text>
            </svg>
          `,
          notes: [
            'Dans les deux cas, $O$ est à <strong>égale distance des trois sommets</strong> : c\'est sa seule définition, et elle ne dit rien sur « dedans » ou « dehors ».',
            'Le cercle passe bien par les trois sommets des deux côtés, même quand son centre est à l\'extérieur de la figure.',
            'Cas limite à connaître : si le triangle est <strong>rectangle</strong>, $O$ tombe exactement sur le milieu de l\'hypoténuse.'
          ],
          reading: 'Ne cherche pas $O$ « au milieu » du triangle. Construis deux médiatrices et prends leur intersection : elle tombera où elle doit, dedans ou dehors.',
          caption: 'Le centre du cercle circonscrit sort du triangle dès que celui-ci possède un angle obtus.'
        }
      ],
      recap: [
        'Quatre familles de droites : médiatrices, bissectrices, médianes, hauteurs — chacune a un point de concours.',
        'Médiatrices → circumcentre (cercle circonscrit) ; bissectrices → incentre (cercle inscrit).',
        'Médianes → centroïde (centre de gravité, à $\\frac{2}{3}$ du sommet) ; hauteurs → orthocentre.',
        'Ne pas confondre médiane (passe par un sommet) et médiatrice (perpendiculaire au milieu d\'un côté).'
      ],
      piege: 'Piège : confondre médiane et médiatrice. La médiane joint un sommet au milieu du côté opposé (elle passe par un sommet). La médiatrice est perpendiculaire à un côté en son milieu (elle ne passe pas forcément par un sommet).'
    },
    quiz: [
      {
        q: 'Un élève confond médiane et médiatrice. Laquelle de ces affirmations distingue correctement les deux ?',
        options: [
          'La médiane est perpendiculaire à un côté ; la médiatrice joint un sommet au milieu du côté opposé.',
          'La médiane joint un sommet au milieu du côté opposé ; la médiatrice est perpendiculaire à un côté en son milieu.',
          'Médiane et médiatrice sont identiques dans un triangle isocèle.',
          'La médiane passe par le milieu de deux côtés ; la médiatrice passe par un sommet.'
        ],
        answer: 1,
        correction: 'La <strong>médiane</strong> joint un sommet au milieu du côté opposé → elle passe toujours par un sommet. La <strong>médiatrice</strong> est perpendiculaire à un côté en son milieu → elle passe par le milieu du côté, mais pas nécessairement par un sommet. Seul cas particulier : dans un triangle équilatéral ou isocèle, médiane, médiatrice, bissectrice et hauteur coïncident sur le même côté.'
      },
      {
        q: 'La médiatrice d\'un segment $[AB]$ est l\'ensemble des points :',
        options: ['À égale distance de $A$ et $B$', 'Sur le segment $[AB]$', 'Formant un angle de $45°$ avec $[AB]$', 'À mi-chemin entre $A$ et $B$'],
        answer: 0,
        correction: 'La médiatrice de $[AB]$ est la droite perpendiculaire à $[AB]$ en son milieu. Elle est le lieu des points équidistants de $A$ et $B$.'
      },
      {
        q: 'Le centroïde $G$ se trouve à quelle fraction de la longueur d\'une médiane depuis le sommet ?',
        options: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{3}{4}$'],
        answer: 2,
        correction: 'Le centroïde divise chaque médiane dans le rapport $2:1$ depuis le sommet. Il se trouve aux $\\frac{2}{3}$ de la médiane depuis le sommet.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* ELARGI LE 2026-09-13. Le chapitre s'intitule « Droites remarquables du
         triangle » et le generateur ne tirait qu'une seule tache, la position du
         centre de gravite sur une mediane : 4 moules, 12 enonces, aucune banque.
         Les mediatrices, les bissectrices et les hauteurs — trois des quatre
         familles au programme — n'etaient jamais exercees, alors que
         l'evaluation les interroge.

         Cinq taches maintenant, une par famille de droite plus la tache
         inverse du centre de gravite. Les trois taches d'identification sont
         posees en numerique (un code de reponse) parce que le generateur du
         chapitre est de type 'numeric' : les transformer en questions a choix
         demanderait de changer le type du module, ce qui toucherait le site. */
      generate() {
        const tache = pick(['centre-gravite', 'centre-gravite', 'gm-inverse', 'mediatrice', 'bissectrice', 'hauteur']);
        const metier = pick([
          { intro: 'En architecture, on localise le centre de gravite d\'une pièce triangulaire', emoji: '🏗️' },
          { intro: 'En physique, on determine le point d\'équilibre d\'une plaque triangulaire', emoji: '⚖️' },
          { intro: 'En cartographie, on cherche le centroide d\'une zone triangulaire', emoji: '🗺️' },
          { intro: 'En robotique, on calcule la position du barycentre d\'un chassis triangulaire', emoji: '🤖' }
        ]);

        if (tache === 'centre-gravite') {
          // On tire des medianes MULTIPLES DE 3 : AG tombe alors juste, et
          // l'eleve n'a pas a arrondir une fraction en plus du raisonnement.
          const am = pick([6, 9, 12, 15, 18, 21, 24]);
          const ag = 2 * am / 3;
          return {
            statement: metier.emoji + ' ' + metier.intro + '. La médiane issue de $A$ mesure $' + am + '$ cm. ' +
              'Le centre de gravite $G$ est situe aux deux tiers de cette médiane en partant de $A$. Quelle est la longueur $AG$, en cm ?',
            answer: ag,
            tolerance: 0.1,
            unit: 'cm',
            hint: '$AG = \\dfrac{2}{3} \\times AM$, avec $AM = ' + am + '$ cm.',
            solution: [
              '$AG = \\dfrac{2}{3} \\times ' + am + ' = \\dfrac{' + (2 * am) + '}{3} = ' + fr(ag) + '$ cm.',
              'Contrôle : le tiers restant, $GM = ' + fr(am - ag) + '$ cm, est bien la moitié de $AG$.'
            ]
          };
        }

        if (tache === 'gm-inverse') {
          // Tache inverse : on donne GM, on demande la mediane entiere. C'est la
          // ou le rapport 2/3 est le plus souvent inverse.
          const gm = pick([2, 3, 4, 5, 6, 7, 8]);
          const am = 3 * gm;
          return {
            statement: metier.emoji + ' Dans un triangle, $M$ est le milieu de $[BC]$ et $G$ le centre de gravite. On mesure $GM = ' + gm + '$ cm. ' +
              'Quelle est la longueur de la médiane $AM$, en cm ?',
            answer: am,
            tolerance: 0.1,
            unit: 'cm',
            hint: 'Le centre de gravite coupe la médiane en deux morceaux : $AG$ vaut les deux tiers, $GM$ le tiers restant.',
            solution: [
              '$G$ est aux deux tiers de la médiane en partant de $A$, donc $GM$ représente le TIERS de la médiane.',
              '$AM = 3 \\times GM = 3 \\times ' + gm + ' = ' + am + '$ cm.',
              'Piege frequent : multiplier par $\\dfrac{3}{2}$ au lieu de $3$, en confondant $GM$ avec $AG$.'
            ]
          };
        }

        if (tache === 'mediatrice') {
          const R = pick([5, 6, 7, 8, 9, 10, 12]);
          return {
            statement: metier.emoji + ' Les trois médiatrices d\'un triangle $ABC$ se coupent en un point $O$, et l\'on mesure $OA = ' + R + '$ cm. ' +
              'Quelle est la longueur $OC$, en cm ?',
            answer: R,
            tolerance: 0.01,
            unit: 'cm',
            hint: 'Une médiatrice est l\'ensemble des points situés à égale distance des deux extrémités d\'un segment. Que vaut alors leur point commun ?',
            solution: [
              'Le point de concours des trois médiatrices est le <strong>centre du cercle circonscrit</strong>.',
              'Il est donc à la même distance des trois sommets : $OA = OB = OC = R$.',
              '$OC = ' + R + '$ cm, sans aucun calcul a poser.'
            ]
          };
        }

        if (tache === 'bissectrice') {
          const ang = pick([40, 50, 56, 64, 70, 74, 80]);
          const moitie = ang / 2;
          return {
            statement: metier.emoji + ' Dans un triangle $ABC$, l\'angle $\\widehat{A}$ mesure $' + ang + '°$ et l\'on trace sa bissectrice. ' +
              'Quelle est la mesure, en degrés, de chacun des deux angles ainsi formes en $A$ ?',
            answer: moitie,
            tolerance: 0.01,
            unit: '°',
            hint: 'Une bissectrice partage un angle en deux angles de même mesure.',
            solution: [
              'La bissectrice d\'un angle le partage en deux angles <strong>égaux</strong>.',
              'Chaque moitié mesure donc $\\dfrac{' + ang + '}{2} = ' + fr(moitie) + '°$.',
              'Le point de concours des trois bissectrices est le centre du cercle inscrit, a égale distance des trois côtés — a ne pas confondre avec le centre du cercle circonscrit, qui vient des médiatrices.'
            ]
          };
        }

        // tache === 'hauteur' : aire du triangle a partir d'une hauteur, ce qui
        // rappelle qu'une hauteur est une distance a un cote, pas une mediane.
        const base = pick([6, 8, 10, 12, 14, 16]);
        const h = pick([3, 5, 7, 9, 11]);
        const aire = base * h / 2;
        return {
          statement: metier.emoji + ' Dans un triangle $ABC$, le côté $[BC]$ mesure $' + base + '$ cm et la hauteur issue de $A$ mesure $' + h + '$ cm. ' +
            'Quelle est l\'aire du triangle, en cm² ?',
          answer: aire,
          tolerance: 0.01,
          unit: 'cm²',
          hint: 'La hauteur issue de $A$ est la distance de $A$ a la droite $(BC)$ : c\'est exactement ce qu\'il faut pour l\'aire.',
          solution: [
            'La hauteur issue de $A$ est perpendiculaire a $(BC)$ : c\'est la hauteur relative au cote $[BC]$.',
            '$\\mathcal{A} = \\dfrac{' + base + ' \\times ' + h + '}{2} = ' + fr(aire) + '$ cm².',
            'Attention a ne pas prendre la médiane a la place de la hauteur : la médiane joint $A$ au MILIEU de $[BC]$, la hauteur y arrive perpendiculairement. Elles ne coincident que dans un triangle isocele.'
          ]
        };
      }
    },
    probleme: {
      context: 'Un triangle $ABC$ a pour sommets $A(0;0)$, $B(6;0)$ et $C(3;6)$.',
      tasks: [
        'Calculer le milieu $M$ de $[BC]$.',
        'Vérifier que $A$, $M$ et le centroïde $G\\left(3; 2\\right)$ sont alignés.',
        'Calculer $AG$ et $GM$ pour vérifier que $AG = 2 \\times GM$.'
      ],
      solutions: [
        '$M = \\left(\\frac{6+3}{2}; \\frac{0+6}{2}\\right) = (4{,}5 ; 3)$.',
        'Vecteurs $\\vec{AM}(4{,}5;3)$ et $\\vec{AG}(3;2)$ : $\\frac{4{,}5}{3} = \\frac{3}{2} = 1{,}5$. Colinéaires ✓.',
        '$AG = \\sqrt{9+4} = \\sqrt{13}$, $GM = \\sqrt{2{,}25+1} = \\sqrt{3{,}25}$. $\\frac{\\sqrt{13}}{\\sqrt{3{,}25}} = \\sqrt{4} = 2$ ✓.'
      ],
      finalAnswer: 'Le centroïde $G(3;2)$ se trouve bien aux $\\frac{2}{3}$ de la médiane depuis $A$.'
    },

    evaluation: {
      title: 'Évaluation — Droites remarquables du triangle',
      duration: '25 min',
      questions: [
        {
          statement: 'Les trois médiatrices d\'un triangle se coupent en un point appelé :',
          type: 'multiple-choice',
          options: ['L\'orthocentre', 'Le centroïde', 'Le circumcentre', 'L\'incentre'],
          answer: 2,
          points: 2,
          correction: 'Les trois médiatrices se coupent au circumcentre, qui est le centre du cercle circonscrit au triangle (équidistant des trois sommets).'
        },
        {
          statement: 'Les trois bissectrices d\'un triangle se coupent en un point appelé :',
          type: 'multiple-choice',
          options: ['Le circumcentre', 'L\'orthocentre', 'Le centroïde', 'L\'incentre'],
          answer: 3,
          points: 2,
          correction: 'Les trois bissectrices se coupent à l\'incentre, qui est le centre du cercle inscrit dans le triangle (équidistant des trois côtés).'
        },
        {
          statement: 'Dans un triangle, une médiane issue de $A$ mesure $15\\,\\text{cm}$. Le centroïde $G$ se trouve à quelle distance de $A$ ?',
          type: 'numeric',
          answer: 10,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: 'Le centroïde divise chaque médiane dans le rapport $2:1$ depuis le sommet. $AG = \\dfrac{2}{3} \\times 15 = 10\\,\\text{cm}$.'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-13 pour mobiliser « chercher ». L'ancienne
             question demandait de nommer la médiane parmi quatre droites, soit
             du vocabulaire. Ici l'élève doit repérer que la donnée porte sur le
             SEGMENT RESTANT, $GM$, et non sur $AG$, puis inverser le rapport —
             l'énoncé ne dit pas lequel des deux tiers est donné. */
          statement: 'Dans un triangle $ABC$, $G$ est le centre de gravité et $M$ le milieu de $[BC]$. On mesure $GM = 4\\,\\text{cm}$. Quelle est la longueur de la médiane issue de $A$, en cm ?',
          type: 'numeric',
          answer: 12,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: 'Attention à ce qui est donné : c\'est $GM$, le segment qui reste après $G$, et non $AG$.<br/><br/>' +
            'Le centre de gravité est aux deux tiers de la médiane en partant du sommet. Le morceau $AG$ vaut donc $\\dfrac{2}{3}$ de la médiane, et $GM$ le tiers restant.<br/><br/>' +
            'Si $GM$ représente un tiers de la médiane, la médiane entière en vaut trois fois plus : $AM = 3 \\times 4 = 12\\,\\text{cm}$.<br/><br/>' +
            'Contrôle : $AG = \\dfrac{2}{3} \\times 12 = 8\\,\\text{cm}$, et $8 + 4 = 12$. ✓ Le piège est de multiplier par $\\dfrac{3}{2}$, ce qui reviendrait à prendre $GM$ pour $AG$.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-13 pour mobiliser « communiquer ». L'ancienne
             question calculait le milieu d'un segment, ce qui ne relève même pas
             de ce chapitre. Ici l'élève doit expliquer la différence entre
             médiane et médiatrice, qui est LA confusion du chapitre, et dire à
             quelle condition les deux coïncident. */
          statement: 'Un élève affirme : « la médiane issue de $A$ et la médiatrice de $[BC]$ sont la même droite, puisque toutes les deux passent par le milieu de $[BC]$. » Quelle explication corrige le mieux son raisonnement ?',
          type: 'multiple-choice',
          options: [
            'Il a raison : deux droites qui passent par le même point sont confondues.',
            'Il a tort : passer par le milieu de $[BC]$ ne suffit pas à définir une droite. La médiane y passe ET par le sommet $A$ ; la médiatrice y passe ET perpendiculairement à $[BC]$. Elles ne coïncident que si le triangle est isocèle en $A$.',
            'Il a tort : la médiatrice de $[BC]$ ne passe pas par le milieu de $[BC]$.',
            'Il a tort : la médiane issue de $A$ ne passe pas par le milieu de $[BC]$, mais par celui de $[AB]$.'
          ],
          answer: 1,
          points: 2,
          correction: 'Les deux droites passent bien par le milieu de $[BC]$, mais un seul point ne détermine pas une droite : il en faut deux, ou un point et une direction.<br/><br/>' +
            'La <strong>médiane</strong> issue de $A$ est définie par deux points : le sommet $A$ et le milieu de $[BC]$.<br/><br/>' +
            'La <strong>médiatrice</strong> de $[BC]$ est définie par un point et une direction : le milieu de $[BC]$, et la perpendicularité à $[BC]$. Rien ne l\'oblige à passer par $A$.<br/><br/>' +
            'Les deux ne se confondent que lorsque $AB = AC$, c\'est-à-dire dans un triangle <strong>isocèle en $A$</strong> — cas particulier qui explique sans doute la confusion de l\'élève, s\'il a surtout vu des figures isocèles.'
        }
      ]
    }
  }
);
