/* =========================================================
   Spark Learning – data/5e/5e-angles-parallelisme.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-angles-parallelisme',
    level: 1, subject: 'maths',
    icon: '📏',
    title: 'Angles et parallélisme',
    subtitle: 'Alternes-internes, correspondants, internes de même côté',
    keywords: ['Angle', 'Parallèles', 'Sécante', 'Alternes-internes', 'Correspondants'],
    physics: false,

    cours: {
      /* DECOUVRIR REECRIT LE 2026-09-13. L'intro ouvrait sur l'enonce des
         proprietes, donc sur la reponse. La question retenue est celle du
         menuisier : verifier un parallelisme SANS pouvoir prolonger les droites
         jusqu'a leur intersection eventuelle, ce qui est le seul cas ou les
         angles deviennent indispensables — partout ailleurs, la regle suffit. */
      intro: 'Deux planches doivent être parfaitement parallèles. Elles font trois mètres de long, tu n\'as qu\'un rapporteur, et tu ne peux pas les prolonger pour voir si elles finissent par se croiser. Comment t\'en assurer ?<br/><br/>' +
        'Mesurer l\'écart en deux endroits ne suffit pas tout à fait : rien ne dit qu\'il ne varie pas ailleurs. Il existe pourtant une vérification qui se fait en un seul point, avec un seul trait tracé en travers — et elle, elle est certaine.<br/><br/>' +
        'Quand une <strong>sécante</strong> coupe deux droites parallèles, elle crée des paires d\'angles avec des relations précises.<br/><br/>' +
        'Les <strong>alternes-internes</strong> (configuration en Z) sont <strong>égaux</strong>. Les <strong>correspondants</strong> (configuration en F) sont <strong>égaux</strong>. Les <strong>angles internes du même côté</strong> de la sécante (configuration en U) sont <strong>supplémentaires</strong> (somme = $180°$).<br/><br/>' +
        '<strong>Point clé :</strong> ces propriétés ne valent que si les droites sont parallèles — et réciproquement, si ces propriétés sont vérifiées, alors les droites sont forcément parallèles. C\'est une façon de <em>démontrer</em> le parallélisme.<br/><br/>' +
        'En optique, les rayons parallèles incidents sur un miroir vérifient ces propriétés angulaires, ce qui explique la construction des images dans les miroirs plans.',
      definitions: [
        { term: 'Sécante', def: 'Droite qui coupe deux autres droites. Elle crée des angles à chaque point d\'intersection.' },
        { term: 'Angles alternes-internes', def: 'Paire d\'angles situés de part et d\'autre de la sécante, entre les deux droites (configuration en Z). Égaux si les droites sont parallèles.' },
        { term: 'Angles correspondants', def: 'Paire d\'angles situés du même côté de la sécante, l\'un entre les droites et l\'autre à l\'extérieur (configuration en F). Égaux si parallèles.' },
        { term: 'Angles supplémentaires', def: 'Deux angles dont la somme vaut $180°$. Les angles internes du même côté de la sécante sont supplémentaires si les droites sont parallèles.' }
      ],
      example: {
        statement: 'Deux droites parallèles sont coupées par une sécante. Un angle mesure $72°$. Trouver l\'angle alterne-interne, l\'angle interne du même côté et l\'angle correspondant.',
        steps: [
          'Angle alterne-interne : même mesure → $72°$ (car droites parallèles, configuration en Z).',
          'Angle interne du même côté : supplémentaire → $180° - 72° = 108°$ (configuration en U).',
          'Angle correspondant : même mesure → $72°$ (configuration en F).'
        ],
        answer: 'Alterne-interne : $72°$, interne (même côté) : $108°$, correspondant : $72°$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Angles et parallélisme',
        title: 'Les 8 angles formés par une sécante coupant deux parallèles',
        description: 'Deux droites parallèles $(d_1)$ et $(d_2)$ sont coupées par une sécante : quatre angles se forment à chaque point d’intersection, soit huit angles au total, numérotés de 1 à 8.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="angles-graph-title angles-graph-desc">
            <title id="angles-graph-title">Huit angles formés par une sécante coupant deux droites parallèles</title>
            <desc id="angles-graph-desc">Deux droites parallèles d1 et d2 sont coupées par une sécante. Quatre angles se forment à chaque intersection, numérotés de 1 à 8. Les angles 3, 5 et 7 sont égaux entre eux ; l'angle 6 est supplémentaire à l'angle 3.</desc>
            <line class="frame-line" x1="30" y1="70" x2="330" y2="70"></line>
            <line class="frame-line" x1="30" y1="170" x2="330" y2="170"></line>
            <line class="frame-line" x1="48" y1="10" x2="312" y2="230"></line>
            <polyline class="frame-line" points="85,64 93,70 85,76" fill="none"></polyline>
            <polyline class="frame-line" points="85,164 93,170 85,176" fill="none"></polyline>
            <path class="grid-line" d="M102,70 A18,18 0 0,1 106.17,58.48" fill="none"></path>
            <path class="grid-line" d="M106.17,58.48 A18,18 0 0,1 138,70" fill="none"></path>
            <path class="grid-line" d="M133.83,81.52 A18,18 0 0,1 102,70" fill="none"></path>
            <path class="grid-line" d="M253.83,181.52 A18,18 0 0,1 222,170" fill="none"></path>
            <path class="curve-main" d="M144,70 A24,24 0 0,1 138.44,85.36" fill="none"></path>
            <path class="curve-main" d="M216,170 A24,24 0 0,1 221.56,154.64" fill="none"></path>
            <path class="axis" d="M221.56,154.64 A24,24 0 0,1 264,170" fill="none"></path>
            <path class="curve-main" d="M264,170 A24,24 0 0,1 258.44,185.36" fill="none"></path>
            <circle class="plot-point" cx="120" cy="70" r="5"></circle>
            <circle class="plot-point" cx="240" cy="170" r="5"></circle>
            <text class="axis-label" x="30" y="60">d1</text>
            <text class="axis-label" x="30" y="188">d2</text>
            <text class="annotation-label" x="52" y="20">sécante</text>
            <text class="tick-label" x="84" y="62">1</text>
            <text class="tick-label" x="128" y="42">2</text>
            <text class="annotation-label" x="148" y="86">3</text>
            <text class="tick-label" x="104" y="106">4</text>
            <text class="annotation-label" x="204" y="162">5</text>
            <text class="annotation-label" x="248" y="142">6</text>
            <text class="annotation-label" x="268" y="186">7</text>
            <text class="tick-label" x="224" y="206">8</text>
          </svg>
        `,
        notes: [
          'Les angles <strong>3</strong> et <strong>7</strong> sont <strong>correspondants</strong> (même position par rapport à la sécante, arcs pleins) : ils sont égaux.',
          'Les angles <strong>3</strong> et <strong>5</strong> sont <strong>alternes-internes</strong> (configuration en Z : entre les deux parallèles, de part et d’autre de la sécante) : ils sont égaux.',
          'Les angles <strong>3</strong> et <strong>6</strong> sont <strong>internes du même côté</strong> de la sécante (configuration en U : entre les deux parallèles, arc plus sombre) : leur somme vaut $180°$, ils sont supplémentaires.',
          'Les angles 1, 2, 4 et 8 ferment la figure : chacun est soit vertical (égal à l’angle opposé par le sommet), soit supplémentaire à ses voisins immédiats.'
        ],
        reading: 'Repère d’abord la sécante (la droite oblique), puis regarde si les deux angles à comparer sont entre les deux parallèles (internes) ou à l’extérieur, et s’ils sont du même côté ou de part et d’autre de la sécante.',
        caption: 'Deux droites parallèles coupées par une sécante : huit angles numérotés, avec le trio 3-5-7 égal (arcs pleins) et l’angle 6 supplémentaire à l’angle 3 (arc plus sombre).'
      },
      /* SCHEMAS SECONDAIRES — 2026-09-13. Une figure par malentendu : le cote
         de la secante comme seul critere de decision, la condition de
         parallelisme sans laquelle la regle tombe, et la demonstration de la
         somme des angles du triangle — qui est la promesse faite au chapitre
         des triangles et tenue ici. Conventions de la section 9 du cahier des
         charges ; proportions et angles verifies par le calcul.

         Toutes les figures partagent la meme construction : deux horizontales
         parallelles et une secante de pente connue, ce qui rend les mesures
         d'angles exactement calculables et donc verifiables. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le seul critère à retenir',
          title: 'De quel côté de la sécante ?',
          description: 'Pas besoin de retenir trois noms. <strong>De part et d\'autre</strong> de la sécante, les angles sont <strong>égaux</strong> ; du <strong>même côté</strong>, ils sont <strong>supplémentaires</strong>. Le côté se voit, les noms s\'oublient.',
          svg: `
            <svg viewBox="0 0 420 230" role="img" aria-labelledby="angles-cote-title angles-cote-desc">
              <title id="angles-cote-title">Angles de part et d'autre de la secante, puis du meme cote</title>
              <desc id="angles-cote-desc">Deux droites parallelles horizontales sont coupees par une secante oblique. A gauche de la secante et a droite de la secante, deux angles alternes-internes de 45 degres chacun sont marques : ils sont egaux. Du meme cote de la secante, deux angles internes de 45 et 135 degres sont marques : leur somme fait 180 degres, ils sont supplementaires. La secante est tracee en trait plein et les deux parallelles portent chacune une fleche unique indiquant leur direction commune.</desc>

              <!-- Les deux parallelles, y = 70 et y = 170. La secante passe par
                   (120,70) et (220,170) : sa pente vaut donc 100/100 = 1, soit
                   45 degres avec l'horizontale. Les angles entre secante et
                   parallelles valent ainsi exactement 45 et 135 degres — des
                   valeurs CALCULEES, verifiables par produit scalaire, et non
                   choisies a l'oeil. Les etiquettes portent ces valeurs. -->
              <line class="frame-line" x1="30" y1="70" x2="390" y2="70"></line>
              <line class="frame-line" x1="30" y1="170" x2="390" y2="170"></line>
              <line class="guide-line" x1="70" y1="20" x2="270" y2="220"></line>

              <!-- Marques de parallelisme : une seule pointe de fleche par
                   trait, comme l'impose le convertisseur. -->
              <path class="grid-line" fill="none" d="M350 64 L358 70 L350 76"></path>
              <path class="grid-line" fill="none" d="M350 164 L358 170 L350 176"></path>

              <circle class="plot-point" cx="120" cy="70" r="3"></circle>
              <circle class="plot-point" cx="220" cy="170" r="3"></circle>

              <!-- Les deux alternes-internes, de part et d'autre de la secante.
                   Etiquettes posees du bon cote de chaque intersection. -->
              <text class="annotation-label" x="148" y="92" text-anchor="middle">45°</text>
              <text class="annotation-label" x="192" y="156" text-anchor="middle">45°</text>
              <text class="label-soft" x="272" y="108" text-anchor="start">de part et d\'autre</text>
              <text class="label-soft" x="272" y="124" text-anchor="start">donc égaux</text>

              <!-- Les deux internes du meme cote (a droite de la secante) -->
              <text class="annotation-label" x="252" y="196" text-anchor="middle">135°</text>
              <text class="label-soft" x="60" y="200" text-anchor="start">même côté : 45° + 135° = 180°</text>
            </svg>
          `,
          notes: [
            'De part et d\'autre de la sécante : les deux angles sont <strong>égaux</strong> ($45°$ et $45°$).',
            'Du même côté de la sécante : les deux angles sont <strong>supplémentaires</strong> ($45° + 135° = 180°$).',
            'Contrôle de vraisemblance : deux angles égaux sont tous deux aigus ou tous deux obtus ; deux angles supplémentaires sont l\'un aigu et l\'autre obtus (sauf deux angles droits).'
          ],
          reading: 'Avant de chercher le nom de la configuration, pose ton doigt sur la sécante : les deux angles sont-ils du même côté de ton doigt, ou de part et d\'autre ? Cette seule question décide entre « égaux » et « supplémentaires ».',
          caption: 'Le côté de la sécante suffit à décider : de part et d\'autre, égaux ; du même côté, supplémentaires.'
        },
        {
          theme: 'maths',
          kicker: 'La condition qu\'on oublie',
          title: 'Sans parallèles, la règle tombe',
          description: 'Ces propriétés ne valent <strong>que si les droites sont parallèles</strong>. Dès qu\'elles ne le sont pas, les angles « alternes-internes » n\'ont plus aucune raison d\'être égaux — et ils ne le sont pas.',
          svg: `
            <svg viewBox="0 0 420 206" role="img" aria-labelledby="angles-cond-title angles-cond-desc">
              <title id="angles-cond-title">Deux droites non parallelles coupees par une secante</title>
              <desc id="angles-cond-desc">A gauche, deux droites parallelles coupees par une secante : les deux angles alternes-internes mesurent 45 degres chacun et sont donc egaux. A droite, deux droites non parallelles coupees par la meme secante : les angles alternes-internes mesurent 45 et 59 degres, ils ne sont pas egaux. Les deux dessins sont a la meme echelle et la secante y a la meme inclinaison, si bien que la seule difference est le parallelisme des deux droites.</desc>

              <!-- GAUCHE : deux parallelles (y=50 et y=130), secante de pente 1.
                   Angles alternes-internes : 45 et 45 degres. -->
              <line class="frame-line" x1="20" y1="50" x2="180" y2="50"></line>
              <line class="frame-line" x1="20" y1="130" x2="180" y2="130"></line>
              <line class="guide-line" x1="60" y1="20" x2="160" y2="120"></line>
              <path class="grid-line" fill="none" d="M160 44 L168 50 L160 56"></path>
              <path class="grid-line" fill="none" d="M160 124 L168 130 L160 136"></path>
              <text class="annotation-label" x="112" y="70" text-anchor="middle">45°</text>
              <text class="annotation-label" x="100" y="120" text-anchor="middle">45°</text>
              <text class="label-soft" x="100" y="160" text-anchor="middle">parallèles</text>
              <text class="tick-label" x="100" y="178" text-anchor="middle">égaux, la règle vaut</text>

              <!-- DROITE : la seconde droite est INCLINEE (de (240,130) a
                   (400,90)), donc non parallelle a la premiere. Sa pente vaut
                   -40/160 = -0,25. L'angle que la secante (pente 1) fait avec
                   elle vaut arctan(1) - arctan(-0,25) = 45 + 14,04 = 59,04
                   degres ; l'angle alterne-interne correspondant vaut donc
                   59 degres et non 45. Valeur CALCULEE, verifiee par produit
                   scalaire dans le script de recette. -->
              <line class="frame-line" x1="240" y1="50" x2="400" y2="50"></line>
              <line class="frame-line" x1="240" y1="130" x2="400" y2="90"></line>
              <line class="guide-line" x1="280" y1="20" x2="380" y2="120"></line>
              <text class="annotation-label" x="332" y="70" text-anchor="middle">45°</text>
              <text class="annotation-label" x="316" y="122" text-anchor="middle">59°</text>
              <text class="label-soft" x="320" y="160" text-anchor="middle">non parallèles</text>
              <text class="tick-label" x="320" y="178" text-anchor="middle">inégaux, la règle tombe</text>
            </svg>
          `,
          notes: [
            'À gauche, les droites sont parallèles : les alternes-internes valent $45°$ tous les deux.',
            'À droite, elles ne le sont pas : les mêmes positions donnent $45°$ et $59°$.',
            'Toute justification doit donc commencer par l\'hypothèse : « <strong>les droites étant parallèles</strong>, alors… »'
          ],
          reading: 'Mesure les deux angles marqués de chaque côté au rapporteur. À gauche tu trouves deux fois la même valeur, à droite deux valeurs différentes — pourtant la sécante est inclinée pareil. C\'est donc bien le parallélisme, et lui seul, qui fait la règle.',
          caption: 'La même configuration, avec et sans parallélisme : les alternes-internes ne sont égaux que dans le premier cas.'
        },
        {
          theme: 'maths',
          kicker: 'La promesse tenue',
          title: 'Pourquoi la somme des angles d\'un triangle fait $180°$',
          description: 'Voici la démonstration annoncée au chapitre des triangles. On trace la <strong>parallèle à la base</strong> passant par le sommet : les trois angles du triangle se retrouvent alignés et forment un <strong>angle plat</strong>.',
          svg: `
            <svg viewBox="0 0 420 196" role="img" aria-labelledby="angles-somme-title angles-somme-desc">
              <title id="angles-somme-title">Demonstration de la somme des angles d'un triangle</title>
              <desc id="angles-somme-desc">Un triangle est pose sur une base horizontale. Par son sommet passe une droite parallele a cette base. Les deux angles de la base du triangle se retrouvent reportes de part et d'autre du sommet, sur la parallele, parce qu'ils sont alternes-internes avec eux. Les trois angles au sommet se suivent alors sans trou ni chevauchement le long de la parallele et forment un angle plat de 180 degres, ce qui demontre que la somme des angles du triangle vaut 180 degres.</desc>

              <!-- Triangle de base de (90,150) a (330,150) et de sommet
                   (170,60). La parallele a la base passe par le sommet, donc
                   y=60. Les deux angles de base sont reportes au sommet par
                   alternes-internes : c'est EXACTEMENT la propriete du chapitre,
                   appliquee a la demonstration promise au chapitre 8. -->
              <line class="frame-line" x1="40" y1="60" x2="390" y2="60"></line>
              <path class="grid-line" fill="none" d="M368 54 L376 60 L368 66"></path>
              <line class="frame-line" x1="40" y1="150" x2="390" y2="150"></line>
              <path class="grid-line" fill="none" d="M368 144 L376 150 L368 156"></path>

              <polygon class="frame-line" points="170,60 330,150 90,150" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></polygon>

              <circle class="plot-point" cx="170" cy="60" r="3"></circle>

              <!-- Les trois angles, reperes par des teintes d'intensite
                   differente dans le texte plutot que par des couleurs en dur :
                   on les nomme 1, 2 et 3 et on les retrouve au sommet. -->
              <text class="annotation-label" x="108" y="142" text-anchor="middle">1</text>
              <text class="annotation-label" x="312" y="142" text-anchor="middle">2</text>
              <text class="annotation-label" x="170" y="84" text-anchor="middle">3</text>

              <text class="annotation-label" x="140" y="52" text-anchor="middle">1</text>
              <text class="annotation-label" x="200" y="52" text-anchor="middle">2</text>

              <text class="label-soft" x="210" y="182" text-anchor="middle">au sommet : 1 + 3 + 2 forment un angle plat, donc 180°</text>
            </svg>
          `,
          notes: [
            'L\'angle 1 se retrouve au sommet : il est <strong>alterne-interne</strong> avec lui, les deux droites étant parallèles.',
            'Même raison pour l\'angle 2, de l\'autre côté.',
            'Au sommet, les trois angles se suivent le long d\'une droite : leur somme est donc $180°$. <strong>La somme des angles d\'un triangle vaut $180°$.</strong>'
          ],
          reading: 'Suis l\'angle marqué 1 en bas à gauche, puis retrouve-le en haut, à gauche du sommet : c\'est le même, parce que les deux droites sont parallèles. Fais de même avec l\'angle 2. Il ne reste alors, en haut, que les trois angles du triangle posés côte à côte sur une droite.',
          caption: 'La parallèle à la base reporte les deux angles de base au sommet : les trois angles forment un angle plat.'
        }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier la sécante</strong> (droite qui coupe les deux parallèles) et les deux parallèles.',
          '<strong>Repérer la configuration</strong> : alternes-internes (en Z), correspondants (en F), ou internes de même côté (en U).',
          '<strong>Appliquer la propriété</strong> : alternes-internes → égaux ; correspondants → égaux ; internes de même côté → supplémentaires.'
        ]
      },
      formulas: [
        'Alternes-internes : $\\hat{a} = \\hat{b}$ (configuration en Z)',
        'Correspondants : $\\hat{a} = \\hat{c}$ (configuration en F)',
        'Internes de même côté : $\\hat{a} + \\hat{d} = 180°$ (configuration en U)',
        'Angles supplémentaires : $\\hat{a} + \\hat{b} = 180°$'
      ],
      recap: [
        'Alternes-internes (Z) et correspondants (F) sont ÉGAUX si les droites sont parallèles.',
        'Internes de même côté (U) sont SUPPLÉMENTAIRES ($+ = 180°$) si les droites sont parallèles.',
        'La réciproque est vraie : si ces relations sont vérifiées, les droites sont parallèles.',
        'Si les angles ne vérifient pas ces relations, les droites ne sont PAS parallèles.'
      ],
      piege: 'Piège : ces propriétés ne sont valables QUE si les deux droites sont parallèles. Si elles ne le sont pas, les angles alternes-internes ne sont plus égaux. C\'est aussi une façon de prouver que deux droites sont parallèles !'
    },

    quiz: [
      {
        q: 'Deux droites parallèles sont coupées par une sécante. Un angle alterne-interne mesure $65°$. Quel est l\'autre angle alterne-interne ?',
        options: ['$115°$', '$65°$', '$25°$', '$130°$'],
        answer: 1,
        correction: 'Les angles alternes-internes sont égaux quand les droites sont parallèles. L\'autre angle vaut donc $65°$.'
      },
      {
        q: 'Deux angles internes sont situés du même côté d\'une sécante qui coupe deux droites parallèles. L\'un mesure $110°$. Quel est l\'autre ?',
        options: ['$110°$', '$80°$', '$70°$', '$55°$'],
        answer: 2,
        correction: 'Deux angles internes du même côté de la sécante sont supplémentaires : $180° - 110° = 70°$.'
      },
      {
        q: 'Une sécante coupe deux droites. Les angles alternes-internes valent $70°$ et $75°$. Que peut-on conclure ?',
        options: [
          'Les droites sont parallèles car les deux angles sont proches.',
          'Les droites ne sont pas parallèles : si elles l\'étaient, les alternes-internes seraient égaux ($70° = 75°$ est faux).',
          'Les droites sont perpendiculaires car $70° + 75° \\approx 145°$.',
          'On ne peut rien conclure sans connaître le troisième angle.'
        ],
        answer: 1,
        correction: 'Les alternes-internes sont égaux <em>si et seulement si</em> les droites sont parallèles. Ici $70° \\neq 75°$, donc les droites ne sont pas parallèles.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const type = pick([
          { name: 'interne (même côté)', relation: 'supplémentaire', calc: (a) => 180 - a },
          { name: 'correspondant', relation: 'égal', calc: (a) => a },
          { name: 'alterne-interne', relation: 'égal', calc: (a) => a }
        ]);
        const a = rand(30, 150);
        const answer = type.calc(a);

        const ctx = pick([
          { build: () => `Deux droites parallèles sont coupées par une <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` },
          { build: () => `Deux rails de chemin de fer parallèles sont coupés par une traverse oblique, la <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` },
          { build: () => `Sur un plan d'architecte, deux murs parallèles sont coupés par une cloison oblique, la <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` },
          { build: () => `Deux barreaux parallèles d'une échelle sont coupés par un montant oblique, la <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` },
          { build: () => `Sur un cahier, deux lignes parallèles sont coupées par un trait tracé en diagonale, la <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` },
          { build: () => `Deux câbles électriques parallèles sont coupés par un poteau incliné, la <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` },
          { build: () => `Deux mains courantes parallèles d'un escalier sont coupées par une rampe oblique, la <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` }
        ]);

        return {
          statement: ctx.build(),
          answer,
          tolerance: 0,
          unit: '°',
          /* FIGURE AJOUTEE LE 2026-09-13. L'enonce nommait la position de
             l'angle (« alterne-interne », « correspondant ») sans la montrer :
             l'eleve devait reconstituer de tete une configuration a huit
             angles, ce qui EST la difficulte du chapitre. La figure donne
             l'angle connu et marque d'un point d'interrogation celui qu'on
             cherche — elle pose la question sans la resoudre.
             L'inclinaison de la secante est calculee a partir de l'angle tire,
             verifiee au centieme de degre pour 30, 47, 60, 90, 120 et 150. */
          figure: figureSecanteParalleles(a, type.name === 'interne (même côté)' ? 'interne' : type.name),
          hint: type.relation === 'supplémentaire'
            ? 'Les angles internes du même côté de la sécante sont supplémentaires : leur somme vaut $180°$.'
            : `Les angles ${type.name}s sont égaux quand les droites sont parallèles.`,
          solution: [
            type.relation === 'supplémentaire'
              ? `Angles internes du même côté, supplémentaires : $180 - ${a} = ${answer}°$.`
              : `Angles ${type.name}s égaux (droites parallèles) : $${answer}°$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un menuisier pose des lattes de parquet parallèles. Une règle posée en travers forme un angle de $52°$ avec la première latte.',
      tasks: [
        'Quel angle la règle fait-elle avec la deuxième latte (angle correspondant) ?',
        'Quel est l\'angle interne du même côté, associé à $52°$ ?',
        'Le menuisier veut poser une troisième latte perpendiculaire aux premières. Quel angle fait-elle avec la règle ?'
      ],
      solutions: [
        'Angle correspondant = $52°$ (droites parallèles).',
        'Interne (même côté) : $180 - 52 = 128°$.',
        'Perpendiculaire → angle de $90°$ avec les lattes. Avec la règle : $90 - 52 = 38°$.'
      ],
      finalAnswer: 'La troisième latte fait $38°$ avec la règle.'
    },

    evaluation: {
      title: 'Évaluation — Angles et parallélisme',
      duration: '20 min',
      questions: [
        {
          statement: 'Deux droites parallèles sont coupées par une sécante. Un angle alterne-interne mesure $74°$. Quel est l\'autre angle alterne-interne (en degrés) ?',
          type: 'numeric',
          answer: 74,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Les angles alternes-internes formés par deux droites parallèles coupées par une sécante sont égaux. L\'autre angle vaut donc $74°$.'
        },
        /* QUESTION REECRITE LE 2026-09-13.

           Elle demandait le supplementaire d'un angle donne, soit la meme
           mecanique que la question 1 (lire une relation dans une configuration
           nommee, puis appliquer) et un DEUXIEME « calculer » sur cinq questions
           — dans un ouvrage ou cette competence pesait 38,6 % du total, au-dela
           du plafond de 35 %. Le quiz du chapitre pose d'ailleurs deja exactement
           cette question, avec d'autres nombres.

           La nouvelle question demande a l'eleve de NOMMER la configuration
           avant toute relation, ce qui est la difficulte reelle du chapitre : les
           trois configurations se ressemblent, et l'erreur vient presque toujours
           de l'identification, jamais de la soustraction. C'est « representer » —
           lire une figure et la rattacher a un cas connu. */
        {
          statement: 'Deux droites parallèles sont coupées par une sécante. Deux angles mesurent chacun $68°$ et se trouvent <strong>de part et d\'autre</strong> de la sécante, entre les deux parallèles. De quels angles s\'agit-il ?',
          type: 'multiple-choice',
          options: [
            'Des angles internes du même côté de la sécante.',
            'Des angles alternes-internes.',
            'Des angles correspondants.',
            'Des angles opposés par le sommet.'
          ],
          answer: 1,
          points: 2,
          correction: 'Deux angles situés <strong>entre</strong> les parallèles (donc « internes ») et ' +
            '<strong>de part et d\'autre</strong> de la sécante (donc « alternes ») sont des angles ' +
            '<strong>alternes-internes</strong> : ils sont égaux, ce que confirment les deux mesures de $68°$. ' +
            'Les angles internes du même côté seraient, eux, supplémentaires — ils ne pourraient pas être égaux à $68°$ tous les deux. ' +
            'Les angles correspondants ne sont pas tous les deux entre les parallèles : l\'un est au-dessus, l\'autre en dessous. ' +
            'Les angles opposés par le sommet partagent un même point d\'intersection, ce qui n\'est pas le cas ici.'
        },
        {
          statement: 'Une sécante coupe deux droites. Les angles correspondants mesurent $62°$ et $62°$. Que peut-on en conclure ?',
          type: 'multiple-choice',
          options: [
            'Les droites sont perpendiculaires.',
            'Les droites sont parallèles.',
            'Les droites sont sécantes.',
            'On ne peut rien conclure.'
          ],
          answer: 1,
          points: 2,
          correction: 'Si les angles correspondants sont égaux, alors les droites sont parallèles (réciproque de la propriété des angles correspondants).'
        },
        {
          statement: 'Deux angles supplémentaires ont pour mesures $x$ et $3x$. Quelle est la valeur de $x$ (en degrés) ?',
          type: 'numeric',
          answer: 45,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Deux angles supplémentaires ont pour somme $180°$ : $x + 3x = 180$, soit $4x = 180$, donc $x = 45°$.'
        },
        {
          statement: 'Deux droites sont coupées par une sécante. Les alternes-internes mesurent $50°$ et $55°$. Les droites sont-elles parallèles ?',
          type: 'multiple-choice',
          options: [
            'Oui, car les angles sont proches.',
            'Non, car $50° \\neq 55°$ : les alternes-internes ne sont pas égaux.',
            'Oui, car $50° + 55° \\approx 105°$.',
            'On ne peut pas conclure.'
          ],
          answer: 1,
          points: 2,
          correction: 'Les alternes-internes doivent être exactement égaux pour que les droites soient parallèles. Ici $50° \\neq 55°$, donc les droites ne sont pas parallèles.'
        }
      ]
    }
  });
