/* =========================================================
   Spark Learning – data/3e/3e-sections-solides.js
   Module : Sections de solides (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-sections-solides',
    level: 1, subject: 'maths',
    icon: '🔪',
    title: 'Sections de solides',
    subtitle: 'Plans de coupe, sections parallèles et perpendiculaires',
    keywords: ['Section', 'Plan de coupe', 'Pavé', 'Cône', 'Cylindre', 'Pyramide'],
    physics: false,
    cours: {
      /* « Découvrir » réécrit le 2026-09-13.

         L'ancienne version ouvrait sur « Couper un solide par un plan donne une
         section plane... », c'est-à-dire sur la DÉFINITION du chapitre. Le test
         du cahier des charges (section 10) est sans appel : si on peut répondre
         à la question d'ouverture sans la notion du chapitre, la question est
         mal choisie — et une définition ne pose même pas de question.

         La nouvelle ouverture part d'une difficulté RÉELLE, et non d'une
         anecdote plaquée : on demande à l'élève de PRÉVOIR une forme avant de
         la voir. Or c'est exactement ce qu'il ne sait pas faire, et c'est le
         malentendu central du chapitre : il croit qu'on « aplatit » le solide,
         donc il répond « un cylindre coupé donne un rectangle » ou « un cercle »
         selon le dessin qu'il a en tête. La question ne peut se trancher que
         par la notion de plan de coupe.

         L'ancrage (le saucisson, puis le scanner) n'est pas décoratif : la
         tomographie médicale EST la reconstruction d'un solide à partir de ses
         sections, et c'est le seul métier où l'on fait exactement cela. */
      intro: 'Prends un saucisson et un couteau. Coupe-le droit, perpendiculairement à sa longueur : tu obtiens une rondelle, un <strong>disque</strong>. Maintenant coupe-le dans l\'autre sens, tout du long : tu obtiens une bande allongée, un <strong>rectangle</strong>.<br/><br/>' +
        'Même saucisson, même couteau, deux formes qui n\'ont rien à voir. Et si tu coupes de biais, tu obtiens encore autre chose : une forme ovale, étirée.<br/><br/>' +
        'Voilà la question du chapitre : <strong>qu\'est-ce qui a changé ?</strong> Pas le solide — il est resté le même. Ce qui a changé, c\'est l\'<strong>orientation du plan de coupe</strong>. La forme que tu vois n\'appartient donc pas au solide seul, elle appartient au couple « solide + plan ».<br/><br/>' +
        'C\'est un point qui résiste, parce qu\'on est tenté de croire qu\'on « aplatit » le solide ou qu\'on rabat une de ses faces. Il n\'en est rien : la section est une figure <strong>nouvelle</strong>, qui vit dans le plan de coupe et nulle part ailleurs.<br/><br/>' +
        'Un scanner médical fait exactement ce travail, des centaines de fois par examen : il produit des sections du corps, coupe après coupe, et un ordinateur reconstruit ensuite le volume à partir d\'elles. Sans la géométrie des sections, aucune image médicale en trois dimensions n\'existerait.<br/><br/>' +
        'Deux régularités vont te servir tout au long du chapitre. Une <strong>section parallèle à une base</strong> conserve la forme de cette base, en plus petit : c\'est le théorème de Thalès, transporté dans l\'espace. Et une <strong>coupe oblique</strong> d\'un cylindre donne une <strong>ellipse</strong>, jamais un cercle ni un rectangle.<br/><br/>' +
        'Pour les pyramides et les cônes, le <strong>rapport de similitude</strong> entre la section et la base est le rapport des hauteurs.',
      definitions: [
        { term: 'Section', def: 'Figure plane obtenue en <strong>coupant un solide par un plan</strong>. Sa forme dépend du type de solide et de l\'orientation du plan de coupe.' },
        { term: 'Plan de coupe', def: 'Le plan qui <strong>intersecte le solide</strong>. Il peut être parallèle à la base, perpendiculaire à l\'axe ou oblique — chaque orientation produit une section différente.' },
        { term: 'Similitude dans l\'espace', def: 'Quand un plan coupe une pyramide ou un cône <strong>parallèlement à la base</strong>, la section est une figure <strong>semblable</strong> à la base (mêmes angles, proportions conservées).' },
        { term: 'Rapport de réduction', def: 'Le quotient $k = \\dfrac{h\'}{h}$ entre la distance du sommet au plan de coupe ($h\'$) et la hauteur totale ($h$). Les dimensions de la section sont multipliées par $k$.' }
      ],
      method: {
        title: 'Méthode selon le type de solide',
        steps: [
          '<strong>Pavé droit</strong> : section parallèle à une face → rectangle (ou carré).<br/>Section oblique → parallélogramme.',
          '<strong>Cylindre</strong> : section parallèle aux bases → disque (même rayon).<br/>Section par un plan contenant l\'axe → rectangle.<br/>Section oblique → ellipse.',
          '<strong>Cône</strong> : section parallèle à la base → disque (rayon réduit, rapport $= h\'/h$).<br/>Section par un plan passant par le sommet et l\'axe → triangle isocèle.',
          '<strong>Pyramide</strong> : section parallèle à la base → figure semblable à la base.<br/>Rapport de similitude $= k = h\'/h$ (Thalès dans l\'espace).'
        ]
      },
      example: {
        statement: 'Une pyramide à base carrée de côté $8$ cm et de hauteur $12$ cm est coupée par un plan parallèle à la base, situé à $4$ cm du sommet. Déterminer le côté et l\'aire de la section.',
        steps: [
          '<strong>Rapport de réduction</strong> : $k = \\dfrac{h\'}{h} = \\dfrac{4}{12} = \\dfrac{1}{3}$.',
          '<strong>Côté de la section</strong> : $c\' = 8 \\times \\dfrac{1}{3} = \\dfrac{8}{3} \\approx 2{,}67$ cm. La section est un carré semblable à la base.',
          '<strong>Aire de la section</strong> : $\\mathcal{A} = c\'^2 = \\left(\\dfrac{8}{3}\\right)^2 = \\dfrac{64}{9} \\approx 7{,}11$ cm². On vérifie : $\\dfrac{\\mathcal{A}_{\\text{section}}}{\\mathcal{A}_{\\text{base}}} = \\dfrac{7{,}11}{64} \\approx \\dfrac{1}{9} = k^2$ ✓.'
        ],
        answer: 'La section est un carré de côté $\\dfrac{8}{3} \\approx 2{,}67$ cm et d\'aire $\\approx 7{,}11$ cm².'
      },
      formulas: [
        'Section parallèle à la base d\'un cône ou pyramide : rapport de similitude $= \\dfrac{h\'}{h}$',
        'Côté de la section : $c\' = c \\times \\dfrac{h\'}{h}$ (homothétie)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Thalès dans l\'espace',
        title: 'Section d\'une pyramide par un plan parallèle à la base',
        description: 'Pyramide à base carrée de côté $8$ cm et de hauteur $12$ cm, coupée à $4$ cm du sommet — reprise exacte de l\'exemple du cours.',
        svg: `
          <svg viewBox="0 0 640 300" role="img" aria-labelledby="section-graph-title section-graph-desc">
            <title id="section-graph-title">Section d'une pyramide par un plan parallele a la base</title>
            <desc id="section-graph-desc">A gauche, une pyramide a base carree en perspective avec un plan de coupe parallele a la base pres du sommet. A droite, la coupe de profil montrant deux triangles emboites semblables : le grand triangle (sommet-base) et le petit triangle (sommet-section), dans le rapport 1/3.</desc>

            <!-- separation entre les deux vues -->
            <line class="grid-line" x1="320" y1="10" x2="320" y2="290"></line>

            <!-- ===================== VUE 1 : pyramide en perspective ===================== -->
            <!-- petite pyramide (pointe) mise en evidence -->
            <polygon points="160,30 125,97 160,106 195,97" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)" stroke="none"></polygon>

            <!-- aretes cachees (pointilles) -->
            <line class="guide-line" x1="55" y1="230" x2="160" y2="202"></line>
            <line class="guide-line" x1="160" y1="202" x2="265" y2="230"></line>
            <line class="guide-line" x1="160" y1="30" x2="160" y2="202"></line>
            <line class="guide-line" x1="125" y1="97" x2="160" y2="87"></line>
            <line class="guide-line" x1="160" y1="87" x2="195" y2="97"></line>

            <!-- aretes visibles de la pyramide -->
            <line class="frame-line" x1="160" y1="30" x2="55" y2="230"></line>
            <line class="frame-line" x1="160" y1="30" x2="265" y2="230"></line>
            <line class="frame-line" x1="160" y1="30" x2="160" y2="258"></line>
            <line class="frame-line" x1="55" y1="230" x2="160" y2="258"></line>
            <line class="frame-line" x1="160" y1="258" x2="265" y2="230"></line>

            <!-- plan de coupe (section), face visible, mis en valeur -->
            <line class="curve-main" x1="125" y1="97" x2="160" y2="106"></line>
            <line class="curve-main" x1="160" y1="106" x2="195" y2="97"></line>

            <!-- reperes sur l'axe sommet-base -->
            <circle class="plot-point-alt" cx="160" cy="30" r="5"></circle>
            <circle class="plot-point-alt" cx="160" cy="97" r="4"></circle>
            <circle class="plot-point-alt" cx="160" cy="230" r="4"></circle>

            <text class="annotation-label" x="160" y="18" text-anchor="middle">S (sommet)</text>
            <text class="label-soft" x="200" y="80" text-anchor="start">côté ≈ 2,67 cm</text>
            <text class="label-soft" x="160" y="278" text-anchor="middle">base : côté 8 cm</text>

            <!-- ===================== VUE 2 : coupe de profil (triangles semblables) ===================== -->
            <line class="guide-line" x1="460" y1="40" x2="460" y2="220"></line>
            <line class="frame-line" x1="460" y1="40" x2="550" y2="220"></line>
            <line class="frame-line" x1="460" y1="100" x2="490" y2="100"></line>
            <line class="frame-line" x1="460" y1="220" x2="550" y2="220"></line>

            <circle class="plot-point-alt" cx="460" cy="40" r="5"></circle>
            <circle class="plot-point-alt" cx="490" cy="100" r="5"></circle>
            <circle class="plot-point" cx="460" cy="220" r="5"></circle>
            <circle class="plot-point" cx="550" cy="220" r="5"></circle>

            <text class="annotation-label" x="460" y="26" text-anchor="middle">S</text>
            <text class="annotation-label" x="468" y="58" text-anchor="start">k = 1/3</text>
            <text class="annotation-label" x="445" y="74" text-anchor="end">h' = 4 cm</text>
            <text class="annotation-label" x="475" y="90" text-anchor="middle">c'/2 ≈ 1,33 cm</text>
            <text class="annotation-label" x="505" y="236" text-anchor="middle">c/2 = 4 cm</text>
            <text class="label-soft" x="505" y="76" text-anchor="start">petit triangle</text>
            <text class="label-soft" x="535" y="165" text-anchor="start">grand triangle</text>
          </svg>
        `,
        notes: [
          'Le plan de coupe est parallèle à la base, à $h\' = 4$ cm du sommet $S$ (hauteur totale $h = 12$ cm) : le rapport de réduction est $k = \\dfrac{h\'}{h} = \\dfrac{4}{12} = \\dfrac{1}{3}$.',
          'La base est un carré de côté $8$ cm ; la section, semblable à la base (Thalès dans l\'espace), a pour côté $c\' = 8 \\times \\dfrac{1}{3} = \\dfrac{8}{3} \\approx 2{,}67$ cm.',
          'Les aires suivent le carré du rapport : $\\dfrac{\\mathcal{A}_{\\text{section}}}{\\mathcal{A}_{\\text{base}}} = k^2 = \\dfrac{1}{9}$, soit $\\dfrac{7{,}11}{64} \\approx 0{,}11$ — cohérent avec l\'exemple du cours.',
          'La vue de profil (à droite) est la coupe passant par le sommet et les milieux de deux côtés opposés de la base : on y retrouve la configuration de Thalès en 2D, avec le petit triangle (section) semblable au grand triangle (base).'
        ],
        reading: 'Repère d\'abord le sommet $S$ et l\'axe pointillé sommet-base : la section (à gauche) est la figure semblable à la base, réduite selon le même rapport $k$ que sur la vue de profil (à droite).',
        caption: 'Pyramide à base carrée (côté $8$ cm, hauteur $12$ cm) coupée à $4$ cm du sommet, parallèlement à la base — exemple du cours, avec vérification du rapport $k = 1/3$ sur les longueurs et $k^2 = 1/9$ sur les aires.'
      },
      /* SCHÉMAS SECONDAIRES, ajoutés le 2026-09-13.

         Principe du cahier des charges, section 9 : une figure par MALENTENDU,
         pas une figure par formule. Les trois malentendus retenus sont ceux
         qui font effectivement perdre des points au brevet :

           1. « la section, c'est la face qu'on voit » — l'élève rabat une face
              ou dessine l'ombre du solide au lieu de la trace du couteau ;
           2. « couper, ça rétrécit » — il applique au cylindre la réduction
              qui ne vaut que pour le cône, et invente un disque plus petit ;
           3. « l'aire est réduite du même facteur que les longueurs » —
              il multiplie l'aire par k au lieu de k².

         TOUTES LES COORDONNÉES SONT CALCULÉES, jamais posées à vue :

         Schéma 1 : la section oblique du pavé est construite comme l'image de
         deux points d'arêtes par la translation de fuite (34 ; -24). Vérifié :
         les vecteurs P1P2 et P4P3 sont égaux à l'unité près, ainsi que P1P4 et
         P2P3 — c'est donc un vrai parallélogramme, et pas un quadrilatère posé
         à vue qui ressemblerait à l'un.

         Schéma 2 : cylindre et cône ont la MÊME base (rayon dessiné 44) et la
         MÊME hauteur (108), coupés à la MÊME hauteur (mi-hauteur, y = 152).
         Vérifié : le rayon de la section du cône vaut 44 × 0,5 = 22, et le
         point d'abscisse 228 (soit 250 - 22) tombe EXACTEMENT sur l'arête du
         cône, écart 0. La figure ne peut donc pas mentir sur la réduction.

         Schéma 3 : k = 1/2 sur une pyramide de base carrée de côté 8 cm, à
         12 unités de viewBox par centimètre. Base 96 × 96, section 48 × 48 ;
         le pavage compte (96/48)² = 4 cases exactement, et le rapport des
         aires dessinées vaut 2 304 / 9 216 = 0,25 = k². L'élève COMPTE les
         cases, il ne croit pas la formule sur parole. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Piège',
          title: 'Une section est la trace du couteau, pas une face rabattue',
          description: 'Le même pavé, deux fois. À gauche, ce que l\'élève dessine souvent : il <strong>rabat une face</strong> du solide, ou il en trace l\'ombre. À droite, la vraie section : le plan traverse le pavé <strong>de part en part</strong>, et la figure obtenue est un <strong>parallélogramme penché</strong> qui n\'est aucune des six faces.',
          svg: `
            <svg viewBox="0 0 400 232" role="img" aria-labelledby="sect-trace-title sect-trace-desc">
              <title id="sect-trace-title">Face rabattue et vraie section d'un pave</title>
              <desc id="sect-trace-desc">A gauche, un pave droit dessine en perspective, dont la face avant, un rectangle bien droit, est mise en valeur : c'est la face du solide, et non une section. A droite, le meme pave traverse par un plan de coupe oblique ; la figure obtenue est un parallelogramme penche qui entre par l'arete verticale de gauche a un tiers de hauteur et ressort par l'arete verticale de droite aux deux tiers de hauteur, en passant a l'interieur du solide. Ce parallelogramme ne coincide avec aucune des six faces du pave et ne peut donc pas etre obtenu en rabattant une face.</desc>

              <!-- GAUCHE : LE PAVE ET SA FACE AVANT. Face avant (40,70) a
                   (130,140) ; vecteur de fuite (34 ; -24) pour la perspective
                   cavaliere, appliqué a chaque sommet. -->
              <text class="annotation-label" x="102" y="20" text-anchor="middle">ce que ce n'est pas</text>
              <line class="guide-line" x1="74" y1="46" x2="164" y2="46"></line>
              <line class="guide-line" x1="74" y1="46" x2="74" y2="116"></line>
              <line class="guide-line" x1="74" y1="116" x2="164" y2="116"></line>
              <line class="guide-line" x1="164" y1="46" x2="164" y2="116"></line>
              <line class="guide-line" x1="40" y1="70" x2="74" y2="46"></line>
              <line class="guide-line" x1="130" y1="70" x2="164" y2="46"></line>
              <line class="guide-line" x1="130" y1="140" x2="164" y2="116"></line>
              <line class="guide-line" x1="40" y1="140" x2="74" y2="116"></line>
              <polygon class="curve-main" points="40,70 130,70 130,140 40,140"
                       fill="color-mix(in srgb, var(--text-muted) 12%, transparent)"></polygon>
              <text class="label-soft" x="85" y="110" text-anchor="middle">face avant</text>
              <text class="label-soft" x="102" y="176" text-anchor="middle">rectangle bien droit</text>
              <text class="label-soft" x="102" y="196" text-anchor="middle">déjà dans le solide</text>
              <text class="annotation-label" x="102" y="218" text-anchor="middle">ce n'est pas une section</text>

              <!-- DROITE : LA VRAIE SECTION. Meme pave translaté de 200 vers la
                   droite. Le plan entre en (240 ; 91), soit a 30 pour cent de
                   l'arete verticale gauche avant, et sort en (330 ; 119), soit
                   a 70 pour cent de l'arete droite avant. Les deux autres
                   sommets sont les images par la fuite (34 ; -24).
                   VERIFIE : P1P2 = (90 ; 28) = P4P3 et P1P4 = (34 ; -24) =
                   P2P3, donc parallelogramme exact. -->
              <text class="annotation-label" x="302" y="20" text-anchor="middle">la vraie section</text>
              <line class="guide-line" x1="274" y1="46" x2="364" y2="46"></line>
              <line class="guide-line" x1="274" y1="46" x2="274" y2="116"></line>
              <line class="guide-line" x1="274" y1="116" x2="364" y2="116"></line>
              <line class="guide-line" x1="364" y1="46" x2="364" y2="116"></line>
              <line class="frame-line" x1="240" y1="70" x2="330" y2="70"></line>
              <line class="frame-line" x1="240" y1="70" x2="240" y2="140"></line>
              <line class="frame-line" x1="240" y1="140" x2="330" y2="140"></line>
              <line class="frame-line" x1="330" y1="70" x2="330" y2="140"></line>
              <line class="guide-line" x1="240" y1="70" x2="274" y2="46"></line>
              <line class="guide-line" x1="330" y1="70" x2="364" y2="46"></line>
              <line class="guide-line" x1="330" y1="140" x2="364" y2="116"></line>
              <line class="guide-line" x1="240" y1="140" x2="274" y2="116"></line>
              <polygon class="curve-main" points="240,91 330,119 364,95 274,67"
                       fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></polygon>
              <circle class="plot-point" cx="240" cy="91" r="4"></circle>
              <circle class="plot-point" cx="330" cy="119" r="4"></circle>
              <text class="annotation-label" x="302" y="176" text-anchor="middle">parallélogramme penché</text>
              <text class="label-soft" x="302" y="196" text-anchor="middle">figure nouvelle</text>
              <text class="annotation-label" x="302" y="218" text-anchor="middle">voilà une section</text>
            </svg>
          `,
          notes: [
            'À gauche, le rectangle mis en valeur <strong>existait déjà</strong> : c\'est une face du pavé. Aucun couteau n\'est passé, donc ce n\'est pas une section.',
            'À droite, le plan entre par une arête verticale et ressort par l\'autre, <strong>à une hauteur différente</strong>. C\'est ce décalage qui penche la figure.',
            'Le parallélogramme obtenu ne coïncide avec aucune des six faces : on ne peut donc pas l\'obtenir en rabattant quoi que ce soit.',
            '<strong>Le test qui tranche</strong> : une section n\'apparaît que si le plan <strong>traverse l\'intérieur</strong> du solide. Si ton dessin longe une face sans entrer dedans, tu as dessiné la face, pas la coupe.'
          ],
          reading: 'Pose ton doigt sur le point marqué à gauche du pavé de droite, puis suis le bord épais : tu passes à l\'intérieur du solide avant de ressortir plus bas de l\'autre côté. C\'est ce trajet-là qui est la section.',
          caption: 'Le même pavé : à gauche une face mise en valeur, à droite la vraie section par un plan oblique, un parallélogramme qui n\'est aucune des faces.'
        },
        {
          theme: 'maths',
          kicker: 'Piège',
          title: 'Le cylindre ne rétrécit pas, le cône si',
          description: 'Même rayon de base, même hauteur, <strong>même hauteur de coupe</strong> : et pourtant les deux disques obtenus n\'ont rien à voir. Le cylindre donne un disque de <strong>rayon identique</strong> à sa base, le cône un disque <strong>réduit de moitié</strong>. La différence ne vient pas de la coupe, elle vient du solide.',
          svg: `
            <svg viewBox="0 0 400 264" role="img" aria-labelledby="sect-cylcone-title sect-cylcone-desc">
              <title id="sect-cylcone-title">Coupe parallele a la base d'un cylindre et d'un cone</title>
              <desc id="sect-cylcone-desc">A gauche, un cylindre coupe a mi-hauteur par un plan parallele a ses bases : le disque obtenu a exactement le meme rayon que la base du cylindre, et il touche les deux cotes verticaux du solide. A droite, un cone de meme rayon de base et de meme hauteur, coupe a la meme hauteur : le disque obtenu n'a plus que la moitie du rayon de la base, car les aretes du cone se rapprochent en montant vers le sommet. Les deux coupes sont faites au meme endroit, mais elles ne donnent pas la meme figure.</desc>

              <!-- Base commune : rayon dessine 44, hauteur 108, base basse a
                   y = 206, sommet ou couvercle a y = 98. Coupe a mi-hauteur,
                   y = 152 : le rapport vaut h'/h = 54/108 = 0,5. -->

              <!-- GAUCHE : CYLINDRE, axe x = 76. La section a le rayon 44,
                   IDENTIQUE a celui de la base. -->
              <text class="annotation-label" x="76" y="22" text-anchor="middle">cylindre</text>
              <line class="frame-line" x1="32" y1="98" x2="32" y2="206"></line>
              <line class="frame-line" x1="120" y1="98" x2="120" y2="206"></line>
              <ellipse class="frame-line" cx="76" cy="98" rx="44" ry="14" fill="none"></ellipse>
              <ellipse class="frame-line" cx="76" cy="206" rx="44" ry="14" fill="none"></ellipse>
              <ellipse class="curve-main" cx="76" cy="152" rx="44" ry="14"
                       fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></ellipse>
              <line class="guide-line" x1="76" y1="152" x2="120" y2="152"></line>
              <circle class="plot-point" cx="76" cy="152" r="4"></circle>
              <text class="annotation-label" x="76" y="240" text-anchor="middle">rayon inchangé</text>
              <text class="label-soft" x="76" y="258" text-anchor="middle">le disque touche les bords</text>

              <!-- DROITE : CONE, axe x = 250, meme rayon de base 44, meme
                   hauteur, sommet en (250 ; 98). Section a y = 152 : rayon
                   44 × 0,5 = 22. VERIFIE : l'arete gauche du cone, tracee de
                   (250 ; 98) a (206 ; 206), passe par l'abscisse 228 a la
                   hauteur 152, et 250 - 22 = 228. Ecart 0. -->
              <text class="annotation-label" x="250" y="22" text-anchor="middle">cône</text>
              <line class="frame-line" x1="250" y1="98" x2="206" y2="206"></line>
              <line class="frame-line" x1="250" y1="98" x2="294" y2="206"></line>
              <ellipse class="frame-line" cx="250" cy="206" rx="44" ry="14" fill="none"></ellipse>
              <ellipse class="curve-main" cx="250" cy="152" rx="22" ry="7"
                       fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></ellipse>
              <line class="guide-line" x1="250" y1="152" x2="272" y2="152"></line>
              <circle class="plot-point" cx="250" cy="152" r="4"></circle>
              <circle class="plot-point-alt" cx="250" cy="98" r="4"></circle>
              <text class="annotation-label" x="250" y="240" text-anchor="middle">rayon divisé par deux</text>
              <text class="label-soft" x="250" y="258" text-anchor="middle">les arêtes se rapprochent</text>

              <!-- Le trait de coupe COMMUN, qui montre que la hauteur est la
                   meme des deux cotes : c'est tout l'argument du schema. -->
              <line class="grid-line" x1="20" y1="152" x2="380" y2="152"></line>
              <text class="tick-label" x="380" y="146" text-anchor="end">même hauteur de coupe</text>
              <text class="label-soft" x="163" y="112" text-anchor="middle">même base</text>
              <text class="label-soft" x="163" y="212" text-anchor="middle">même hauteur</text>
            </svg>
          `,
          notes: [
            'Le cylindre a des côtés <strong>verticaux</strong> : à n\'importe quelle hauteur, le disque obtenu garde le rayon de la base. Couper un cylindre parallèlement aux bases ne réduit rien.',
            'Le cône a des arêtes qui <strong>convergent vers le sommet</strong> : plus on coupe haut, plus le disque est petit. Ici la coupe est à mi-hauteur, donc le rayon est divisé par $2$.',
            'Le rapport de réduction vaut $k = \\dfrac{h\'}{h}$ pour le cône, et $k = 1$ pour le cylindre à toute hauteur.',
            '<strong>Le réflexe utile</strong> : avant de réduire quoi que ce soit, regarde si les côtés du solide sont parallèles ou s\'ils se rejoignent. Ce sont eux qui décident, pas le plan de coupe.'
          ],
          reading: 'Suis la ligne de coupe horizontale d\'un solide à l\'autre : elle est à la même hauteur des deux côtés. Compare ensuite la largeur des deux disques colorés, puis celle des deux bases.',
          caption: 'Un cylindre et un cône de même base et de même hauteur, coupés à la même hauteur : disque de même rayon à gauche, disque de rayon moitié à droite.'
        },
        {
          theme: 'maths',
          kicker: 'Longueurs et aires',
          title: 'Les longueurs sont divisées par deux, mais l\'aire par quatre',
          description: 'Une pyramide de base carrée coupée à <strong>mi-hauteur</strong> : $k = \\dfrac{1}{2}$. Le côté de la section passe bien de $8$ cm à $4$ cm. Mais le carré de la base se pave <strong>exactement</strong> par quatre copies de la section, et pas par deux : les aires suivent $k^2$.',
          svg: `
            <svg viewBox="0 0 400 216" role="img" aria-labelledby="sect-aire-title sect-aire-desc">
              <title id="sect-aire-title">Section a mi-hauteur d'une pyramide et comparaison des aires</title>
              <desc id="sect-aire-desc">A gauche, la coupe de profil d'une pyramide a base carree : le plan de coupe est a mi-hauteur du sommet, le rapport de reduction vaut donc un demi. A droite, les deux carres vus de dessus, superposes par un coin : le carre de la base mesure huit centimetres de cote, le carre de la section quatre centimetres. Le grand carre est partage par un trait vertical et un trait horizontal en quatre cases identiques, chacune ayant exactement la taille du carre de la section. Le lecteur compte donc quatre sections dans la base, alors que les cotes n'ont ete divises que par deux.</desc>

              <!-- GAUCHE : coupe de profil. Sommet (72 ; 34), base de (26 ; 178)
                   a (118 ; 178). La coupe est a mi-hauteur : y = (34+178)/2 =
                   106, et la demi-largeur y vaut 46 × 0,5 = 23, donc de
                   (49 ; 106) a (95 ; 106). VERIFIE : l'arete gauche, de
                   (72 ; 34) a (26 ; 178), passe par l'abscisse 49 a la hauteur
                   106 ; ecart 0. -->
              <line class="frame-line" x1="72" y1="34" x2="26" y2="178"></line>
              <line class="frame-line" x1="72" y1="34" x2="118" y2="178"></line>
              <line class="frame-line" x1="26" y1="178" x2="118" y2="178"></line>
              <line class="guide-line" x1="72" y1="34" x2="72" y2="178"></line>
              <line class="curve-main" x1="49" y1="106" x2="95" y2="106"></line>
              <circle class="plot-point-alt" cx="72" cy="34" r="4"></circle>
              <text class="tick-label" x="72" y="26" text-anchor="middle">S</text>
              <text class="label-soft" x="104" y="100" text-anchor="start">k = 1/2</text>
              <text class="tick-label" x="72" y="196" text-anchor="middle">côté 8 cm</text>
              <text class="tick-label" x="72" y="210" text-anchor="middle">coupe à mi-hauteur</text>

              <!-- DROITE : les deux carres vus de dessus, a 12 unites de
                   viewBox par centimetre. Base 8 cm = 96 ; section 4 cm = 48.
                   VERIFIE : (96/48)² = 4 cases exactement, et les aires
                   dessinees valent 9 216 et 2 304, de rapport 0,25 = k². -->
              <rect class="frame-line" x="200" y="52" width="96" height="96"
                    fill="color-mix(in srgb, var(--diagram-accent) 7%, transparent)"></rect>
              <line class="grid-line" x1="248" y1="52" x2="248" y2="148"></line>
              <line class="grid-line" x1="200" y1="100" x2="296" y2="100"></line>
              <rect class="curve-main" x="200" y="52" width="48" height="48"
                    fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)"></rect>
              <text class="tick-label" x="224" y="82" text-anchor="middle">1</text>
              <text class="tick-label" x="272" y="82" text-anchor="middle">2</text>
              <text class="tick-label" x="224" y="130" text-anchor="middle">3</text>
              <text class="tick-label" x="272" y="130" text-anchor="middle">4</text>
              <text class="tick-label" x="248" y="166" text-anchor="middle">base : 8 cm de côté</text>
              <text class="annotation-label" x="248" y="184" text-anchor="middle">aire 64 cm carrés</text>

              <text class="annotation-label" x="352" y="76" text-anchor="middle">section</text>
              <text class="tick-label" x="352" y="94" text-anchor="middle">4 cm de côté</text>
              <text class="annotation-label" x="352" y="114" text-anchor="middle">aire 16</text>
              <text class="tick-label" x="352" y="132" text-anchor="middle">cm carrés</text>
              <text class="label-soft" x="352" y="160" text-anchor="middle">quatre fois</text>
              <text class="label-soft" x="352" y="176" text-anchor="middle">moins, pas deux</text>
            </svg>
          `,
          notes: [
            'La coupe est à mi-hauteur, donc $k = \\dfrac{h\'}{h} = \\dfrac{1}{2}$ : le côté passe de $8$ cm à $8 \\times \\dfrac{1}{2} = 4$ cm.',
            'L\'aire, elle, passe de $8^2 = 64$ cm² à $4^2 = 16$ cm². Le rapport vaut $\\dfrac{16}{64} = \\dfrac{1}{4} = k^2$, pas $k$.',
            'Le grand carré contient <strong>quatre</strong> cases de la taille de la section : on peut les compter, il n\'y a rien à croire sur parole.',
            'Avec $k = \\dfrac{1}{3}$, le pavage compterait $9$ cases ; avec $k = \\dfrac{1}{4}$, il en compterait $16$. Le nombre de cases vaut toujours $\\dfrac{1}{k^2}$.',
            '<strong>Le réflexe utile</strong> : dès qu\'un énoncé parle d\'aire, de surface ou de peinture, le facteur est $k^2$. Pour un volume, ce serait $k^3$.'
          ],
          reading: 'Compte les cases du grand carré à droite : il y en a quatre, et la case colorée en haut à gauche a exactement la taille de la section. Reviens ensuite au profil de gauche pour voir que la coupe est bien à mi-hauteur.',
          caption: 'Pyramide coupée à mi-hauteur : le côté est divisé par deux, mais la base se pave par quatre copies de la section.'
        }
      ],
      recap: [
        'Une coupe <strong>parallèle à la base</strong> donne toujours une figure <strong>semblable</strong> à la base (même forme, dimensions réduites).',
        'Le <strong>rapport de réduction</strong> est $k = \\dfrac{h\'}{h}$ — les longueurs sont multipliées par $k$, les aires par $k^2$.',
        'Une coupe <strong>oblique</strong> d\'un cylindre ou d\'un cône produit une <strong>ellipse</strong>, pas un cercle.',
        'Pour calculer une section : identifier le solide, le type de coupe, appliquer le rapport de similitude si parallèle.'
      ],
      piege: 'Piège : la section d\'un cylindre PAR un plan oblique (ni perpendiculaire ni contenant l\'axe) est une ELLIPSE, pas un rectangle ni un cercle. Souvent négligé mais important !'
    },
    quiz: [
      {
        q: 'On coupe un cylindre par un plan oblique (ni parallèle ni perpendiculaire à l\'axe). Quelle est la forme de la section ?',
        options: ['Une ellipse', 'Un rectangle', 'Un cercle de plus petit rayon', 'Un ovale quelconque (pas une ellipse)'],
        answer: 0,
        correction: 'La section oblique d\'un cylindre est une ellipse — pas un rectangle ni un cercle. Le rectangle s\'obtient uniquement quand le plan de coupe contient l\'axe. La confusion vient souvent du dessin en perspective, où le cylindre semble « fait de rectangles ».'
      },
      {
        q: 'Une pyramide carrée de base $6$ cm et hauteur $9$ cm est coupée à $3$ cm du sommet (parallèlement à la base). Quel est le côté de la section ?',
        options: ['$3$ cm', '$2$ cm', '$6$ cm', '$4{,}5$ cm'],
        answer: 1,
        correction: 'Rapport : $\\frac{h\'}{h} = \\frac{3}{9} = \\frac{1}{3}$. Côté de la section : $6 \\times \\frac{1}{3} = 2$ cm.'
      },
      {
        q: 'La section d\'un cône par un plan passant par son sommet et l\'axe est :',
        options: ['Un cercle', 'Un trapèze', 'Un triangle isocèle', 'Un rectangle'],
        answer: 2,
        correction: 'Ce plan contient l\'axe du cône. Il coupe le cône selon un triangle isocèle dont la base est un diamètre de la base du cône.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13.

         AVANT : un seul moule de tâche — « pyramide coupée parallèlement à la
         base, calcule le côté de la section » — habillé de six contextes tirés
         par pick(). Mesure à 60 tirages : 6 moules d'énoncé, mais **1 seule
         tâche distincte**.

         Le manque décisif : la NATURE de la section n'était jamais demandée.
         Or c'est exactement là qu'est la difficulté du chapitre — un élève
         confond une section avec une projection ou avec une face, et aucun
         calcul de côté ne corrige cette confusion. La banque entraînait donc
         une proportionnalité, pas une vision dans l'espace.

         APRÈS : sept familles de tâches, toutes au programme de troisième.
           - 'cotePyramide' : la tâche d'origine, conservée ;
           - 'nature'    : reconnaître la FORME de la section, ce qui est la
                           vraie question du chapitre ;
           - 'rayonCone' : la même réduction sur un cône, où c'est le rayon qui
                           se réduit ;
           - 'aireSection' : l'aire de la section, dans le rapport $k^2$ et non
                           $k$ — le pendant exact de l'erreur d'homothétie ;
           - 'pave'      : la section d'un pavé, où AUCUNE réduction n'a lieu,
                           ce que l'élève applique pourtant par habitude ;
           - 'cylindre'  : la section d'un cylindre selon l'orientation du plan ;
           - 'hauteurInverse' : à quelle hauteur couper pour obtenir une section
                           donnée, c'est-à-dire le chemin retour.

         Les figures emploient figureSection, qui place la section DANS le
         solide et non à côté : c'est précisément ce qui distingue une section
         d'une projection. Les tâches sur la pyramide et le cône n'en reçoivent
         pas, le helper ne traitant que le pavé et le cylindre — plutôt aucune
         figure qu'une figure qui montre un autre solide que celui de
         l'énoncé. */
      generate() {
        const tache = pick(['cotePyramide', 'nature', 'rayonCone', 'aireSection',
                            'pave', 'cylindre', 'hauteurInverse']);

        if (tache === 'cotePyramide') {
          /* On tire d'abord le rapport, puis les longueurs : la réponse reste
             ainsi un nombre simple, et l'élève travaille la proportionnalité
             plutôt que la division décimale. */
          const h = pick([8, 10, 12, 15, 16, 20]);
          const hp = pick([h / 4, h / 2, (3 * h) / 4]);
          const base = rand(6, 16);
          const cp = parseFloat((base * hp / h).toFixed(2));
          const ctx = pick([
            { o: 'Une <strong>pyramide souvenir</strong> à base carrée', s: 'le côté de la section' },
            { o: 'Une <strong>tente</strong> pyramidale à base carrée', s: 'le côté de la moustiquaire tendue à ce niveau' },
            { o: 'Un <strong>abat-jour</strong> pyramidal à base carrée', s: 'le côté de la section' },
            { o: 'Une <strong>trémie de silo</strong> pyramidale à base carrée', s: 'le côté de la section de grain' }
          ]);
          return {
            statement: `${ctx.o} a une base de côté $${base}$ cm et une hauteur de $${h}$ cm.<br/><br/>On la coupe à $${fr(hp)}$ cm du <strong>sommet</strong>, parallèlement à la base.<br/><br/>Quel est <strong>${ctx.s}</strong> ?`,
            answer: cp, tolerance: 0.05, unit: 'cm',
            hint: `Couper parallèlement à la base donne une figure de <strong>même forme</strong>, réduite.<br/><br/>Le rapport de réduction se lit sur les hauteurs comptées <strong>depuis le sommet</strong> : $k = \\dfrac{${fr(hp)}}{${h}}$.`,
            solution: [
              `Un plan parallèle à la base donne une section de <strong>même forme</strong> que la base : ici un carré, réduit dans un rapport $k$.`,
              `Le rapport se compte depuis le <strong>sommet</strong> : $k = \\dfrac{${fr(hp)}}{${h}} = ${fr(parseFloat((hp / h).toFixed(3)))}$.`,
              `Côté de la section $= ${base} \\times ${fr(parseFloat((hp / h).toFixed(3)))} = ${fr(cp)}$ cm.<br/><br/>Contrôle : la section est plus proche du sommet que la base, elle doit donc être plus petite que $${base}$ cm.`
            ]
          };
        }

        if (tache === 'nature') {
          /* LA VRAIE QUESTION DU CHAPITRE : quelle FORME obtient-on ? Aucun
             calcul, seulement une vision dans l'espace. Réponse codée en
             chiffre pour rester numérique. */
          const cas = pick([
            { s: 'un <strong>cylindre</strong>', p: 'parallèlement à ses bases', bon: 2, nom: 'un disque',
              pourquoi: 'le plan rencontre la surface courbe à distance constante de l\'axe, donc en un cercle' },
            { s: 'un <strong>cylindre</strong>', p: 'par un plan contenant son axe', bon: 1, nom: 'un rectangle',
              pourquoi: 'le plan coupe les deux bases selon deux diamètres et la surface courbe selon deux droites verticales' },
            { s: 'une <strong>pyramide à base carrée</strong>', p: 'parallèlement à sa base', bon: 3, nom: 'un carré',
              pourquoi: 'une section parallèle à la base a toujours la même forme que la base, en plus petit' },
            { s: 'un <strong>cône</strong>', p: 'parallèlement à sa base', bon: 2, nom: 'un disque',
              pourquoi: 'la base est un disque, et une section parallèle garde la même forme' },
            { s: 'un <strong>pavé droit</strong>', p: 'parallèlement à une face', bon: 1, nom: 'un rectangle',
              pourquoi: 'la section est identique à la face à laquelle le plan est parallèle' }
          ]);
          return {
            statement: `On coupe ${cas.s} ${cas.p}.<br/><br/>Quelle est la <strong>nature</strong> de la section obtenue ?<br/><br/>` +
              `Réponds par $1$ pour un <strong>rectangle</strong>, $2$ pour un <strong>disque</strong>, $3$ pour un <strong>carré</strong>.`,
            answer: cas.bon, tolerance: 0.01, unit: '',
            hint: `Imagine le couteau qui traverse le solide, et demande-toi quelle trace il laisse <strong>dans</strong> la matière.<br/><br/>Une section n'est ni une face ni une ombre : c'est ce qu'on voit à l'endroit exact de la coupe.`,
            solution: [
              `Une section est la figure obtenue <strong>à l'endroit de la coupe</strong>, dans le solide — ce n'est ni une face existante, ni l'ombre du solide.`,
              `Ici, ${cas.pourquoi}.`,
              `La section est donc <strong>${cas.nom}</strong>. Réponse : $${cas.bon}$.`
            ]
          };
        }

        if (tache === 'rayonCone') {
          const h = pick([8, 10, 12, 16, 20]);
          const hp = pick([h / 4, h / 2, (3 * h) / 4]);
          const r = rand(4, 12);
          const rp = parseFloat((r * hp / h).toFixed(2));
          return {
            statement: `Un <strong>cône</strong> a un rayon de base de $${r}$ cm et une hauteur de $${h}$ cm.<br/><br/>On le coupe à $${fr(hp)}$ cm du <strong>sommet</strong>, parallèlement à la base.<br/><br/>Quel est le <strong>rayon</strong> de la section obtenue ?`,
            answer: rp, tolerance: 0.05, unit: 'cm',
            hint: `La section d'un cône par un plan parallèle à la base est un <strong>disque</strong> réduit.<br/><br/>Le rapport se lit sur les hauteurs depuis le sommet : $k = \\dfrac{${fr(hp)}}{${h}}$.`,
            solution: [
              `La section est un disque, de même forme que la base, réduit dans le rapport $k$.`,
              `$k = \\dfrac{${fr(hp)}}{${h}} = ${fr(parseFloat((hp / h).toFixed(3)))}$, compté depuis le sommet.`,
              `Rayon de la section $= ${r} \\times ${fr(parseFloat((hp / h).toFixed(3)))} = ${fr(rp)}$ cm.`
            ]
          };
        }

        if (tache === 'aireSection') {
          /* LE FACTEUR k² DANS L'ESPACE : pendant exact de l'erreur
             d'homothétie, et le programme l'évalue. */
          const h = pick([8, 10, 12, 16, 20]);
          const hp = pick([h / 4, h / 2]);
          const base = pick([6, 8, 10, 12]);
          const k = hp / h;
          const aire = parseFloat((base * base * k * k).toFixed(2));
          return {
            statement: `Une <strong>pyramide</strong> à base carrée a un côté de base de $${base}$ cm et une hauteur de $${h}$ cm.<br/><br/>` +
              `On la coupe à $${fr(hp)}$ cm du <strong>sommet</strong>, parallèlement à la base.<br/><br/>` +
              `Quelle est l'<strong>aire</strong> de la section obtenue, en cm² ?`,
            answer: aire, tolerance: 0.1, unit: 'cm²',
            hint: `Le rapport de réduction vaut $k = \\dfrac{${fr(hp)}}{${h}}$, mais une <strong>aire</strong> ne se réduit pas dans le rapport $k$ : elle se réduit dans le rapport $k^2$.<br/><br/>Tu peux aussi calculer le côté de la section, puis l'élever au carré.`,
            solution: [
              `Le rapport de réduction des <strong>longueurs</strong> vaut $k = \\dfrac{${fr(hp)}}{${h}} = ${fr(parseFloat(k.toFixed(3)))}$.`,
              `Une aire a deux dimensions : elle est donc multipliée par $k^2 = ${fr(parseFloat((k * k).toFixed(4)))}$, et non par $k$.`,
              `Aire de la base $= ${base}^2 = ${base * base}$ cm², donc aire de la section $= ${base * base} \\times ${fr(parseFloat((k * k).toFixed(4)))} = ${fr(aire)}$ cm².<br/><br/>Vérification : le côté de la section vaut $${fr(parseFloat((base * k).toFixed(2)))}$ cm, et son carré donne bien le même résultat.`
            ]
          };
        }

        if (tache === 'pave') {
          /* AUCUNE RÉDUCTION ICI. L'élève applique la proportionnalité par
             habitude, alors que les faces d'un pavé sont toutes identiques :
             couper un pavé parallèlement à une face redonne cette face. */
          const L = rand(5, 14), l = rand(4, 10), H = rand(5, 12);
          const d = rand(1, H - 1);
          return {
            statement: `Un <strong>pavé droit</strong> mesure $${L}$ cm de long, $${l}$ cm de large et $${H}$ cm de haut.<br/><br/>` +
              `On le coupe par un plan <strong>parallèle à la base</strong>, à $${d}$ cm du dessus.<br/><br/>` +
              `Quelle est l'<strong>aire</strong> de la section obtenue, en cm² ?`,
            answer: L * l, tolerance: 0.01, unit: 'cm²',
            figure: figureSection('pave-horizontal', L, H, l),
            hint: `Attention : un pavé n'est pas une pyramide. Ses faces ne rétrécissent pas quand on monte.<br/><br/>Demande-toi de quelle forme et de quelles dimensions est la trace laissée par le couteau.`,
            solution: [
              `Un pavé droit a des faces <strong>parallèles et identiques</strong> : contrairement à une pyramide, il ne rétrécit pas vers le haut.`,
              `La section parallèle à la base est donc un rectangle de <strong>mêmes dimensions</strong> que la base : $${L}$ cm sur $${l}$ cm, quelle que soit la hauteur de coupe.`,
              `Aire $= ${L} \\times ${l} = ${L * l}$ cm².<br/><br/>La distance $${d}$ cm ne sert à rien ici : c'est une donnée inutile, et savoir l'ignorer fait partie de l'exercice.`
            ]
          };
        }

        if (tache === 'cylindre') {
          const r = rand(3, 9), h = rand(6, 15);
          const parallele = Math.random() > 0.5;
          const aire = parallele ? parseFloat((3.14 * r * r).toFixed(2)) : 2 * r * h;
          return {
            statement: `Un <strong>cylindre</strong> a un rayon de $${r}$ cm et une hauteur de $${h}$ cm.<br/><br/>` +
              (parallele
                ? `On le coupe <strong>parallèlement à ses bases</strong>.<br/><br/>Quelle est l'<strong>aire</strong> de la section, en cm² ? (On prendra $\\pi \\approx 3{,}14$.)`
                : `On le coupe par un plan <strong>contenant son axe</strong>.<br/><br/>Quelle est l'<strong>aire</strong> de la section, en cm² ?`),
            answer: aire, tolerance: 0.1, unit: 'cm²',
            figure: parallele ? figureSection('cylindre-horizontal', r, h) : '',
            hint: parallele
              ? `Une coupe parallèle aux bases donne un <strong>disque</strong>, exactement de même rayon que la base : le cylindre ne rétrécit pas.<br/><br/>Aire d'un disque : $\\pi r^2$.`
              : `Un plan qui contient l'axe coupe le cylindre de part en part : la section est un <strong>rectangle</strong>.<br/><br/>Sa largeur est le <strong>diamètre</strong>, pas le rayon.`,
            solution: parallele
              ? [
                  `Un cylindre a la même section sur toute sa hauteur : couper parallèlement aux bases redonne un <strong>disque de même rayon</strong> que la base.`,
                  `Aire $= \\pi r^2 = 3{,}14 \\times ${r}^2 = 3{,}14 \\times ${r * r}$.`,
                  `Aire $\\approx ${fr(aire)}$ cm².`
                ]
              : [
                  `Un plan contenant l'axe traverse le cylindre de part en part : la section est un <strong>rectangle</strong>.`,
                  `Sa hauteur est celle du cylindre, $${h}$ cm, et sa largeur est le <strong>diamètre</strong>, soit $2 \\times ${r} = ${2 * r}$ cm — c'est le piège, beaucoup écrivent le rayon.`,
                  `Aire $= ${2 * r} \\times ${h} = ${aire}$ cm².`
                ]
          };
        }

        /* tache === 'hauteurInverse' : à quelle hauteur couper pour obtenir une
           section donnée. C'est le chemin retour de la tâche d'origine, et il
           demande de résoudre une proportion au lieu de l'appliquer. */
        const h = pick([12, 16, 20, 24]);
        const base = pick([8, 12, 16]);
        const k = pick([0.25, 0.5, 0.75]);
        const cp = base * k;
        const hp = h * k;
        return {
          statement: `Une <strong>pyramide</strong> à base carrée a un côté de base de $${base}$ cm et une hauteur de $${h}$ cm.<br/><br/>` +
            `On veut obtenir, par une coupe parallèle à la base, une section carrée de côté $${fr(cp)}$ cm.<br/><br/>` +
            `À quelle <strong>distance du sommet</strong> faut-il couper, en centimètres ?`,
          answer: hp, tolerance: 0.05, unit: 'cm',
          hint: `Le rapport de réduction se lit indifféremment sur les côtés ou sur les hauteurs : $\\dfrac{\\text{côté section}}{\\text{côté base}} = \\dfrac{\\text{hauteur de coupe}}{\\text{hauteur totale}}$.<br/><br/>Commence par calculer le rapport à partir des côtés.`,
          solution: [
            `Les côtés et les hauteurs se réduisent dans le <strong>même rapport</strong> : c'est ce qui permet de passer des uns aux autres.`,
            `$k = \\dfrac{${fr(cp)}}{${base}} = ${fr(k)}$`,
            `La hauteur de coupe vaut donc $${h} \\times ${fr(k)} = ${fr(hp)}$ cm, comptés depuis le <strong>sommet</strong>.<br/><br/>Contrôle : la section demandée est plus petite que la base, la coupe doit donc être plus proche du sommet que ne l'est la base.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un architecte coupe une maquette en forme de cône (rayon $12$ cm, hauteur $18$ cm) par un plan horizontal à $6$ cm du sommet.',
      tasks: [
        'Calculer le rapport de similitude entre la section et la base.',
        'Calculer le rayon de la section circulaire.',
        'Calculer l\'aire de cette section (avec $\\pi \\approx 3{,}14$).'
      ],
      solutions: [
        'Rapport $= \\dfrac{6}{18} = \\dfrac{1}{3}$.',
        'Rayon section $= 12 \\times \\dfrac{1}{3} = 4$ cm.',
        'Aire $= 3{,}14 \\times 4^2 = 3{,}14 \\times 16 = 50{,}24$ cm².'
      ],
      finalAnswer: 'La section est un disque de rayon $4$ cm et d\'aire $50{,}24$ cm².'
    },

    evaluation: {
      title: 'Évaluation — Sections de solides',
      duration: '25 min',
      questions: [
        {
          statement: 'Une pyramide régulière à base carrée de côté $10$ cm et de hauteur $15$ cm est coupée par un plan parallèle à la base, à $5$ cm du sommet. Quel est le côté de la section obtenue ?',
          type: 'numeric',
          answer: 3.33,
          tolerance: 0.05,
          unit: 'cm',
          points: 2,
          correction: 'Rapport de similitude : $k = \\dfrac{h\'}{h} = \\dfrac{5}{15} = \\dfrac{1}{3}$. Côté de la section : $10 \\times \\dfrac{1}{3} \\approx 3{,}33$ cm.'
        },
        {
          statement: 'On coupe un cylindre par un plan parallèle à ses bases. La section obtenue est :',
          type: 'multiple-choice',
          options: ['Un rectangle', 'Une ellipse', 'Un disque de même rayon que la base', 'Un disque de rayon plus petit'],
          answer: 2,
          points: 2,
          correction: 'Toute section d\'un cylindre par un plan parallèle aux bases est un disque de même rayon que les bases. Le rayon ne change pas car les génératrices sont toutes parallèles et à la même distance de l\'axe.'
        },
        {
          statement: 'Un cône de rayon de base $9$ cm et de hauteur $12$ cm est coupé à $8$ cm du sommet. Calculer l\'aire de la section circulaire obtenue ($\\pi \\approx 3{,}14$, arrondir à $0{,}01$ cm²).',
          type: 'numeric',
          answer: 113.04,
          tolerance: 0.5,
          unit: 'cm²',
          points: 3,
          correction: 'Rapport : $k = \\dfrac{8}{12} = \\dfrac{2}{3}$. Rayon section : $r\' = 9 \\times \\dfrac{2}{3} = 6$ cm. Aire : $\\pi r\'^2 = 3{,}14 \\times 36 = 113{,}04$ cm².'
        },
        {
          statement: 'On coupe un pavé droit par un plan contenant une diagonale d\'une face et perpendiculaire à cette face. La section obtenue est :',
          type: 'multiple-choice',
          options: ['Un triangle', 'Un rectangle', 'Un parallélogramme', 'Un trapèze'],
          answer: 1,
          points: 1,
          correction: 'Dans un pavé droit, un plan perpendiculaire à une face et contenant une diagonale de celle-ci donne une section rectangulaire. Les arêtes du pavé étant perpendiculaires entre elles, la section conserve des angles droits.'
        },
        {
          statement: 'Une pyramide à base triangulaire (tétraèdre) de hauteur $20$ cm est coupée à $10$ cm du sommet. Quel est le rapport entre l\'aire de la section et l\'aire de la base ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{4}$', '$\\dfrac{1}{8}$', '$\\dfrac{1}{3}$'],
          answer: 1,
          points: 2,
          correction: 'Le rapport de similitude est $k = \\dfrac{10}{20} = \\dfrac{1}{2}$. Les aires sont dans le rapport $k^2 = \\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$. L\'aire de la section est le quart de l\'aire de la base.'
        }
      ]
    }
  }
);
