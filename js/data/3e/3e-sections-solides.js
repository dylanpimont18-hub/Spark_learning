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
