/* =========================================================
   Spark Learning – data/6e/6e-angles.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-angles',
    level: 1, subject: 'maths',
    icon: '📐',
    title: 'Angles',
    subtitle: 'Mesurer, construire, types d\'angles',
    keywords: ['Angle aigu', 'Angle obtus', 'Angle droit', 'Degré', 'Angles supplémentaires', 'Angles complémentaires'],
    // 2026-09-12 : ce champ annoncait « angle d'incidence et de refraction
    // (Snell-Descartes), decomposition de forces », deux notions de lycee que le
    // manuel imprimait sous « Prolongement possible » d'un chapitre de sixieme.
    // Remplace par le prolongement reel : les angles alternes-internes et
    // correspondants du cycle 4, qui reutilisent directement la mesure installee ici.
    physics: 'Au cycle 4, ces mesures servent à démontrer : deux droites coupées par une sécante forment des angles alternes-internes et correspondants, dont l\'égalité prouve le parallélisme. La somme des angles du triangle, vue ici, s\'étend alors à tous les polygones.',

    cours: {
      /* « Decouvrir » reecrit le 2026-09-13. L'ancienne version ouvrait sur la
         definition (« un angle mesure l'ecartement… »). Entree retenue : la
         porte entrouverte, dont AUCUNE longueur ne decrit l'ouverture — ni sa
         largeur, ni l'ecart au mur qui varie selon l'endroit mesure. C'est
         l'echec des longueurs qui cree le besoin d'une grandeur d'un autre
         type, donc du degre. */
      intro: 'Poussez une porte : elle s\'entrouvre à peine, puis à moitié, puis complètement. Comment dire à quelqu\'un, au téléphone, de quelle « quantité » exactement la porte est ouverte ?<br/><br/>' +
        'Donner sa largeur ne sert à rien : la porte a toujours la même largeur, ouverte ou fermée. Mesurer l\'écart entre son bord et le mur ne marche pas mieux, car cet écart change selon qu\'on le mesure en haut de la porte ou près des gonds. Aucune longueur ne répond à la question.<br/><br/>' +
        'C\'est qu\'il s\'agit d\'une grandeur d\'une autre nature : un <strong>angle</strong>, c\'est-à-dire l\'écartement entre deux demi-droites parties d\'un même sommet. Sa grande propriété est justement de ne pas dépendre de la longueur des côtés : un angle de $60°$ reste un angle de $60°$ que les côtés mesurent $1$ cm ou $1$ km.<br/><br/>' +
        'On le mesure en <strong>degrés</strong> (°) avec un rapporteur, en se raccrochant à trois repères familiers : un tour complet fait $360°$, un demi-tour $180°$, un quart de tour $90°$.<br/><br/>' +
        'Une fois cette mesure en main, on peut raisonner sans rien tracer : deux angles <strong>complémentaires</strong> ont pour somme $90°$, deux angles <strong>supplémentaires</strong> $180°$. On retrouvera ces angles partout, jusqu\'en physique — angle d\'incidence en optique, inclinaison d\'un plan en mécanique.',

      definitions: [
        { term: 'Angle aigu', def: 'Angle dont la mesure est comprise entre $0°$ et $90°$ (exclu).' },
        { term: 'Angle droit', def: 'Angle mesurant exactement $90°$. Symbolisé par un petit carré.' },
        { term: 'Angle obtus', def: 'Angle dont la mesure est comprise entre $90°$ (exclu) et $180°$ (exclu).' },
        { term: 'Angles complémentaires', def: 'Deux angles dont la somme vaut $90°$. Exemple : $35°$ et $55°$.' },
        { term: 'Angles supplémentaires', def: 'Deux angles dont la somme vaut $180°$. Exemple : $120°$ et $60°$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier le type d\'angle</strong> : aigu ($0° < \\alpha < 90°$), droit ($= 90°$), obtus ($90° < \\alpha < 180°$), plat ($= 180°$). <em>Exemple :</em> $\\alpha = 115°$ est obtus car $90° < 115° < 180°$.',
          '<strong>Utiliser les relations d\'angles</strong> : complémentaires (somme $= 90°$), supplémentaires (somme $= 180°$), triangle (somme $= 180°$). <em>Exemple :</em> dans un triangle avec $47°$ et $68°$, le troisième angle $= 180° - 47° - 68° = 65°$.',
          '<strong>Angles et droites parallèles</strong> : quand une droite coupe deux parallèles, les angles alternes-internes sont égaux et les angles correspondants sont égaux.'
        ]
      },
      example: {
        statement: 'Dans un triangle rectangle, un angle aigu mesure $37°$. Calculer l\'autre angle aigu.',
        steps: [
          'Un triangle rectangle a un angle de $90°$.',
          'La somme des trois angles d\'un triangle vaut $180°$.',
          '$\\alpha = 180° - 90° - 37° = 53°$.',
          'Vérification : $90° + 37° + 53° = 180°$ ✓'
        ],
        answer: 'L\'autre angle aigu mesure $53°$.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Types d\'angles et somme d\'un triangle',
        title: 'Reconnaître aigu, droit, obtus, plat — et retrouver les 180° d\'un triangle',
        description: 'Le même sommet, un écartement différent : c\'est la seule chose qui distingue un angle aigu, droit, obtus ou plat. Dans un triangle, les trois angles s\'additionnent toujours à $180°$.',
        svg: `
          <svg viewBox="0 0 460 340" role="img" aria-labelledby="angles-diagram-title angles-diagram-desc">
            <title id="angles-diagram-title">Quatre types d'angles et un triangle rectangle</title>
            <desc id="angles-diagram-desc">Quatre secteurs angulaires (45°, 90°, 120°, 180°) et un triangle rectangle dont les angles mesurent 37°, 53° et 90°, soit une somme de 180°.</desc>
            <line class="grid-line" x1="121" y1="15" x2="121" y2="165"></line>
            <line class="grid-line" x1="235" y1="15" x2="235" y2="165"></line>
            <line class="grid-line" x1="350" y1="15" x2="350" y2="165"></line>
            <line class="grid-line" x1="10" y1="170" x2="450" y2="170"></line>

            <text class="label-soft" x="14" y="34">Aigu</text>
            <line class="frame-line" x1="30" y1="132" x2="100" y2="132"></line>
            <line class="frame-line" x1="30" y1="132" x2="79.5" y2="82.5"></line>
            <path class="guide-line" d="M52 132 L51.3 126.3 L49.1 121.0 L45.6 116.5" fill="none"></path>
            <circle class="plot-point" cx="30" cy="132" r="3.5"></circle>
            <text class="annotation-label" x="56" y="118">45°</text>

            <text class="label-soft" x="129" y="34">Droit</text>
            <line class="frame-line" x1="145" y1="132" x2="215" y2="132"></line>
            <line class="frame-line" x1="145" y1="132" x2="145" y2="62"></line>
            <path class="frame-line" d="M160 132 L160 117 L145 117" fill="none"></path>
            <circle class="plot-point" cx="145" cy="132" r="3.5"></circle>
            <text class="annotation-label" x="168" y="112">90°</text>

            <text class="label-soft" x="244" y="34">Obtus</text>
            <line class="frame-line" x1="278" y1="132" x2="333" y2="132"></line>
            <line class="frame-line" x1="278" y1="132" x2="250.5" y2="84.4"></line>
            <path class="guide-line" d="M298 132 L297.3 126.8 L295.3 122.0 L292.1 117.9 L288.0 114.7 L283.2 112.7 L278.0 112.0 L272.8 112.7 L268.0 114.7" fill="none"></path>
            <circle class="plot-point" cx="278" cy="132" r="3.5"></circle>
            <text class="annotation-label" x="292" y="100">120°</text>

            <text class="label-soft" x="359" y="34">Plat</text>
            <line class="frame-line" x1="407" y1="132" x2="433" y2="132"></line>
            <line class="frame-line" x1="407" y1="132" x2="381" y2="132"></line>
            <path class="guide-line" d="M433 132 L429.5 119.0 L420.0 109.5 L407.0 106.0 L394.0 109.5 L384.5 119.0 L381.0 132" fill="none"></path>
            <circle class="plot-point" cx="407" cy="132" r="3.5"></circle>
            <text class="annotation-label" x="396" y="97">180°</text>

            <text class="label-soft" x="20" y="205">Triangle — la somme des angles vaut 180°</text>
            <polygon points="170,234 170,300 258,300" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="170" y1="234" x2="170" y2="300"></line>
            <line class="frame-line" x1="170" y1="300" x2="258" y2="300"></line>
            <line class="curve-main" x1="170" y1="234" x2="258" y2="300"></line>
            <path class="frame-line" d="M185 300 L185 285 L170 285" fill="none"></path>
            <path class="guide-line" d="M243.6 289.2 L242.4 291.0 L241.1 293.8 L240.3 296.9 L240.0 300.0" fill="none"></path>
            <path class="guide-line" d="M186 246 L184.1 248.1 L181.5 250.4 L178.5 252.1 L175.2 253.3 L170 254" fill="none"></path>
            <circle class="plot-point" cx="170" cy="234" r="4"></circle>
            <circle class="plot-point" cx="258" cy="300" r="4"></circle>
            <circle class="plot-point" cx="170" cy="300" r="4"></circle>
            <text class="annotation-label" x="152" y="224">A</text>
            <text class="annotation-label" x="262" y="315">B</text>
            <text class="annotation-label" x="148" y="315">C</text>
            <text class="annotation-label" x="222" y="290">37°</text>
            <text class="annotation-label" x="180" y="244">53°</text>
            <text class="annotation-label" x="191" y="297">90°</text>
            <rect x="295" y="188" width="150" height="30" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
            <text class="tick-label" x="305" y="207">37° + 53° + 90° = 180°</text>
          </svg>
        `,
        notes: [
          'Angle aigu (ici $45°$) : strictement compris entre $0°$ et $90°$.',
          'Angle droit ($90°$) : repéré par le petit carré au sommet, jamais par un arc.',
          'Angle obtus (ici $120°$) : strictement compris entre $90°$ et $180°$.',
          'Angle plat ($180°$) : les deux côtés forment une ligne droite.',
          'Dans le triangle rectangle de l\'exemple du cours, les trois angles vérifient $37° + 53° + 90° = 180°$.'
        ],
        reading: 'Repère d\'abord le sommet, le point où les deux côtés se rejoignent : c\'est entre ces deux côtés que se mesure l\'angle, jamais le long d\'un seul côté.',
        caption: 'Les quatre types d\'angles (aigu, droit, obtus, plat) et le triangle rectangle de l\'exemple du cours, où $37° + 53° + 90° = 180°$.'
      },
      /* Schemas secondaires (2026-09-12). La figure principale classe les
         angles et donne la somme du triangle, mais elle passe sous silence LA
         difficulte materielle de la sixieme : se servir d'un rapporteur. Un
         eleve qui sait qu'un angle obtus depasse 90° lit malgre tout « 60° »
         au lieu de « 120° » parce qu'il suit la mauvaise graduation. Aucun
         texte ne repare cela, seul un dessin de l'instrument le repare.

         On ajoute donc : le mode d'emploi du rapporteur, le piege des deux
         graduations, et la paire complementaires / supplementaires que la
         figure principale n'illustre pas. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Mode d\'emploi',
          title: 'Placer le rapporteur pour mesurer un angle',
          description: 'Trois gestes, toujours les mêmes : le <strong>centre</strong> du rapporteur sur le sommet, le <strong>zéro</strong> sur un côté, puis on lit où passe l\'autre côté.',
          svg: `
            <svg viewBox="0 0 400 216" role="img" aria-labelledby="angles-rapporteur-title angles-rapporteur-desc">
              <title id="angles-rapporteur-title">Un rapporteur pose sur un angle de 50 degres</title>
              <desc id="angles-rapporteur-desc">Un rapporteur demi-circulaire est pose sur un angle a mesurer. Le centre du rapporteur, marque par un point, est place exactement sur le sommet de l'angle. Le trait du zero est aligne sur le cote horizontal de l'angle. Le second cote de l'angle traverse le bord gradue du rapporteur en face de la graduation 50, ce qui donne la mesure de l'angle : 50 degres. Trois reperes numerotes rappellent les trois gestes : poser le centre sur le sommet, aligner le zero sur un cote, puis lire la graduation traversee par l'autre cote.</desc>

              <!-- Le rapporteur : demi-disque de rayon 92, centre en (150,158).
                   INSTRUMENT DESSINE EN TEINTE FAIBLE, angle mesure en trait
                   fort. Convention retenue pour toutes les figures « geste
                   technique » du manuel : l'outil est un decor, l'objet
                   mathematique reste au premier plan. Sans cela le rapporteur,
                   qui est la forme la plus grosse du dessin, capte tout l'oeil. -->
              <path d="M58 158 A92 92 0 0 1 242 158 Z" fill="color-mix(in srgb, var(--diagram-accent) 8%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></path>

              <!-- Graduations principales, tous les 10°, tracees vers
                   l'interieur depuis le bord du demi-disque. -->
              <line class="grid-line" x1="58" y1="158" x2="72" y2="158"></line>
              <line class="grid-line" x1="59.4" y1="142.1" x2="73.2" y2="139.7"></line>
              <line class="grid-line" x1="63.7" y1="126.8" x2="76.8" y2="122"></line>
              <line class="grid-line" x1="70.7" y1="112.6" x2="82.7" y2="105.6"></line>
              <line class="grid-line" x1="80.2" y1="99.9" x2="90.7" y2="90.9"></line>
              <line class="grid-line" x1="92" y1="89.3" x2="100.7" y2="78.6"></line>
              <line class="grid-line" x1="105.6" y1="81" x2="112.3" y2="68.9"></line>
              <line class="grid-line" x1="120.5" y1="75.4" x2="125" y2="62.3"></line>
              <line class="grid-line" x1="134.1" y1="72.4" x2="138.4" y2="59.2"></line>
              <line class="grid-line" x1="150" y1="66" x2="150" y2="80"></line>
              <line class="grid-line" x1="165.9" y1="72.4" x2="161.6" y2="59.2"></line>
              <line class="grid-line" x1="179.5" y1="75.4" x2="175" y2="62.3"></line>
              <line class="grid-line" x1="194.4" y1="81" x2="187.7" y2="68.9"></line>
              <line class="grid-line" x1="208" y1="89.3" x2="199.3" y2="78.6"></line>
              <line class="grid-line" x1="219.8" y1="99.9" x2="209.3" y2="90.9"></line>
              <line class="grid-line" x1="229.3" y1="112.6" x2="217.3" y2="105.6"></line>
              <line class="grid-line" x1="236.3" y1="126.8" x2="223.2" y2="122"></line>
              <line class="grid-line" x1="240.6" y1="142.1" x2="226.8" y2="139.7"></line>
              <line class="grid-line" x1="242" y1="158" x2="228" y2="158"></line>

              <!-- L'angle mesure : 50°, cotes en trait fort. -->
              <line class="frame-line" x1="150" y1="158" x2="266" y2="158"></line>
              <line class="frame-line" x1="150" y1="158" x2="224.6" y2="69.1"></line>
              <path class="curve-main" fill="none" d="M188 158 A38 38 0 0 0 174.4 128.9"></path>
              <circle class="plot-point" cx="150" cy="158" r="4"></circle>
              <text class="annotation-label" x="196" y="140">50°</text>

              <!-- Les trois gestes, numerotes dans l'ordre d'execution. -->
              <text class="tick-label" x="150" y="174" text-anchor="middle">centre sur le sommet</text>
              <text class="tick-label" x="272" y="174">zéro sur ce côté</text>
              <text class="tick-label" x="252" y="60">on lit ici</text>
              <line class="guide-line" x1="250" y1="66" x2="230" y2="76"></line>

              <text class="label-soft" x="14" y="194">1 — poser le centre sur le sommet</text>
              <text class="label-soft" x="14" y="208">2 — aligner le 0 sur un côté</text>
              <text class="label-soft" x="196" y="194">3 — lire la graduation du second côté</text>

              <text class="tick-label" x="52" y="172" text-anchor="middle">0</text>
              <text class="tick-label" x="248" y="172" text-anchor="middle">180</text>
              <text class="tick-label" x="150" y="54" text-anchor="middle">90</text>
            </svg>
          `,
          notes: [
            'Geste 1 : le <strong>centre</strong> du rapporteur (le petit repère au milieu du bord droit) se pose exactement sur le <strong>sommet</strong> de l\'angle.',
            'Geste 2 : le <strong>$0$</strong> se place sur l\'un des deux côtés — peu importe lequel, mais il faut ensuite lire sur la graduation qui part de ce $0$.',
            'Geste 3 : on lit la graduation traversée par le second côté. Ici l\'angle mesure $50°$.'
          ],
          reading: 'Si le sommet n\'est pas exactement sous le centre du rapporteur, toute la mesure est fausse, même si la lecture est soignée : c\'est le geste $1$ qui décide de la précision, pas le geste $3$.',
          caption: 'Les trois gestes de la mesure au rapporteur, sur un angle de $50°$.'
        },
        {
          theme: 'maths',
          kicker: 'Le piège du rapporteur',
          title: 'Deux graduations : $50°$ ou $130°$ ?',
          description: 'Un rapporteur porte <strong>deux séries de nombres</strong> qui vont en sens contraires. Sur le même trait on lit à la fois $50$ et $130$ : c\'est la forme de l\'angle, et elle seule, qui dit lequel est le bon.',
          svg: `
            <svg viewBox="0 0 400 200" role="img" aria-labelledby="angles-piege-title angles-piege-desc">
              <title id="angles-piege-title">Les deux graduations opposees d'un rapporteur</title>
              <desc id="angles-piege-desc">Un meme trait de rapporteur porte deux nombres : cinquante sur la graduation exterieure qui se lit de gauche a droite, et cent trente sur la graduation interieure qui se lit de droite a gauche. A gauche du schema, un angle aigu nettement plus ferme qu'un angle droit doit se lire cinquante degres. A droite, un angle obtus nettement plus ouvert qu'un angle droit doit se lire cent trente degres. La regle de controle est rappelee : un angle plus ferme que le droit mesure moins de quatre-vingt-dix degres, un angle plus ouvert mesure plus de quatre-vingt-dix degres.</desc>

              <text class="annotation-label" x="200" y="18" text-anchor="middle">Sur le même trait on lit 50 et 130</text>

              <!-- Cas 1 : angle aigu -> 50°. Le controle visuel (comparaison a
                   angle droit, en tirets) est POSE SUR LA FIGURE et non
                   renvoye au texte : c'est lui qui tranche, il doit etre vu en
                   meme temps que l'angle. -->
              <line class="frame-line" x1="60" y1="140" x2="164" y2="140"></line>
              <line class="frame-line" x1="60" y1="140" x2="126.9" y2="60.3"></line>
              <line class="guide-line" x1="60" y1="140" x2="60" y2="62"></line>
              <path class="frame-line" fill="none" d="M74 140 L74 126 L60 126"></path>
              <path class="curve-main" fill="none" d="M96 140 A36 36 0 0 0 83.1 112.4"></path>
              <circle class="plot-point" cx="60" cy="140" r="3.5"></circle>
              <text class="annotation-label" x="100" y="124">50°</text>
              <text class="tick-label" x="64" y="56">angle droit</text>
              <text class="label-soft" x="112" y="164" text-anchor="middle">plus fermé que le droit</text>
              <text class="tick-label" x="112" y="182" text-anchor="middle">donc moins de 90° : on lit 50°</text>

              <!-- Cas 2 : angle obtus -> 130°, meme rayon d'arc et meme
                   longueur de cotes que le cas 1 (convention de comparaison du
                   manuel : seule la grandeur etudiee change). -->
              <!-- 2026-09-12 : ce cote allait jusqu'a x = 404 alors que le
                   viewBox s'arrete a 400. Le trait etait donc coupe net par le
                   bord du cadre a l'impression (1,3 mm ampute sur 128 mm), ce
                   qui donne a un cote de l'angle l'aspect d'un segment tronque
                   au lieu d'une demi-droite. Ramene a 396 : les deux cas
                   gardent des cotes de meme longueur apparente et l'angle
                   obtus reste entierement dans le cadre. -->
              <line class="frame-line" x1="300" y1="140" x2="396" y2="140"></line>
              <line class="frame-line" x1="300" y1="140" x2="233.1" y2="60.3"></line>
              <line class="guide-line" x1="300" y1="140" x2="300" y2="62"></line>
              <path class="frame-line" fill="none" d="M286 140 L286 126 L300 126"></path>
              <path class="curve-main" fill="none" d="M336 140 A36 36 0 0 0 276.9 112.4"></path>
              <circle class="plot-point" cx="300" cy="140" r="3.5"></circle>
              <text class="annotation-label" x="286" y="96" text-anchor="end">130°</text>
              <text class="label-soft" x="300" y="164" text-anchor="middle">plus ouvert que le droit</text>
              <text class="tick-label" x="300" y="182" text-anchor="middle">donc plus de 90° : on lit 130°</text>
            </svg>
          `,
          notes: [
            'Les deux graduations sont <strong>complémentaires à $180°$</strong> : $50 + 130 = 180$. C\'est pourquoi une erreur de graduation donne toujours le supplémentaire de la bonne réponse.',
            'Le seul contrôle fiable est visuel : comparer l\'angle à l\'angle droit <strong>avant</strong> de lire le nombre.',
            'Plus fermé que l\'angle droit $\\Rightarrow$ moins de $90°$ ; plus ouvert $\\Rightarrow$ plus de $90°$.'
          ],
          reading: 'Prends l\'habitude d\'annoncer la réponse <strong>avant</strong> de lire le rapporteur : « cet angle est aigu, je m\'attends à moins de $90°$ ». Si le nombre lu contredit l\'annonce, c\'est la graduation qui est mauvaise, pas l\'annonce.',
          caption: 'Le piège des deux graduations : le même trait porte $50$ et $130$.'
        },
        {
          theme: 'maths',
          kicker: 'Deux mots à ne pas confondre',
          title: 'Complémentaires ($90°$) et supplémentaires ($180°$)',
          description: 'Deux angles <strong>complémentaires</strong> forment ensemble un angle droit ; deux angles <strong>supplémentaires</strong> forment un angle plat. La figure donne le moyen de ne plus les intervertir.',
          svg: `
            <svg viewBox="0 0 400 176" role="img" aria-labelledby="angles-comp-title angles-comp-desc">
              <title id="angles-comp-title">Angles complementaires et angles supplementaires</title>
              <desc id="angles-comp-desc">A gauche, deux angles de 35 et 55 degres sont accoles au meme sommet : ensemble ils forment un angle droit de 90 degres, ce sont des angles complementaires. A droite, deux angles de 120 et 60 degres sont accoles au meme sommet le long d'une droite : ensemble ils forment un angle plat de 180 degres, ce sont des angles supplementaires. Les deux exemples reprennent les valeurs des definitions du cours.</desc>

              <!-- COMPLEMENTAIRES : 35 + 55 = 90. Les deux angles accoles se
                   distinguent par la teinte de leur secteur, jamais par
                   l'epaisseur de leur trait : deux objets de meme nature
                   gardent le meme trait, sinon l'eleve croit a une hierarchie.

                   2026-09-12 : le cote median etait trace vers (117,7 ; 74,4)
                   et le bord de secteur vers (92,6 ; 92,6), soit 36,03° et
                   36,07° mesures — la figure dessinait donc 36°/54° la ou les
                   etiquettes, la note et le desc annoncent 35°/55°. L'ecart est
                   petit (0,34 mm d'arc a l'impression) mais cette figure existe
                   pour faire constater l'egalite 35 + 55 = 90 : ce qui est
                   dessine doit etre exactement ce qui est annonce, sinon un
                   eleve qui verifie au rapporteur sur le livre lit 36°.
                   Coordonnees recalculees a 35° exactement :
                   cote a r = 90 -> (117,7 ; 76,4) ; bord de secteur a
                   r = 60 -> (93,1 ; 93,6). -->
              <text class="annotation-label" x="96" y="20" text-anchor="middle">COMPLÉMENTAIRES : 90°</text>
              <path d="M44 128 L104 128 A60 60 0 0 0 93.1 93.6 Z" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)" stroke="none"></path>
              <path d="M44 128 L93.1 93.6 A60 60 0 0 0 44 68 Z" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)" stroke="none"></path>
              <line class="frame-line" x1="44" y1="128" x2="134" y2="128"></line>
              <line class="frame-line" x1="44" y1="128" x2="117.7" y2="76.4"></line>
              <line class="frame-line" x1="44" y1="128" x2="44" y2="48"></line>
              <path class="frame-line" fill="none" d="M60 128 L60 112 L44 112"></path>
              <circle class="plot-point" cx="44" cy="128" r="3.5"></circle>
              <text class="annotation-label" x="78" y="122">35°</text>
              <text class="annotation-label" x="52" y="94">55°</text>
              <text class="tick-label" x="96" y="152" text-anchor="middle">35 + 55 = 90 : un angle droit</text>
              

              <!-- SUPPLEMENTAIRES : 120 + 60 = 180. -->
              <text class="annotation-label" x="296" y="20" text-anchor="middle">SUPPLÉMENTAIRES : 180°</text>
              <path d="M296 128 L356 128 A60 60 0 0 0 326 76 Z" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)" stroke="none"></path>
              <path d="M296 128 L326 76 A60 60 0 0 0 236 128 Z" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)" stroke="none"></path>
              <line class="frame-line" x1="226" y1="128" x2="376" y2="128"></line>
              <line class="frame-line" x1="296" y1="128" x2="341" y2="50"></line>
              <circle class="plot-point" cx="296" cy="128" r="3.5"></circle>
              <text class="annotation-label" x="332" y="118">60°</text>
              <text class="annotation-label" x="266" y="96" text-anchor="end">120°</text>
              <text class="tick-label" x="296" y="152" text-anchor="middle">120 + 60 = 180 : un angle plat</text>
              <text class="label-soft" x="200" y="172" text-anchor="middle">le mot le plus court va avec le nombre le plus petit</text>
            </svg>
          `,
          notes: [
            'Complémentaires : $35° + 55° = 90°$, les deux côtés extérieurs forment un <strong>angle droit</strong>.',
            'Supplémentaires : $120° + 60° = 180°$, les deux côtés extérieurs sont <strong>alignés</strong> et forment une droite.',
            'Moyen mnémotechnique : le mot le plus <strong>court</strong> (complémentaires) va avec le nombre le plus <strong>petit</strong> ($90°$).'
          ],
          reading: 'Cherche toujours ce que forment les deux côtés extérieurs : s\'ils dessinent un coin, les angles sont complémentaires ; s\'ils dessinent une droite, ils sont supplémentaires. Le nom se déduit du dessin, il n\'y a rien à apprendre par cœur.',
          caption: 'Angles complémentaires ($35° + 55° = 90°$) et supplémentaires ($120° + 60° = 180°$).'
        }
      ],
      formulas: [
        '$\\alpha + \\beta = 90°$ (angles complémentaires)',
        '$\\alpha + \\beta = 180°$ (angles supplémentaires)',
        '$\\hat{A} + \\hat{B} + \\hat{C} = 180°$ (triangle)',
        'Un tour complet mesure $360°$, un demi-tour $180°$, un quart de tour $90°$'
      ],
      recap: [
        'Un angle mesure l\'écartement entre deux demi-droites, indépendamment de leur longueur.',
        'Complémentaires : somme $= 90°$. Supplémentaires : somme $= 180°$.',
        'La somme des angles d\'un triangle vaut toujours $180°$.',
        'Ne pas confondre la mesure d\'un angle avec la longueur d\'un côté.'
      ],
      piege: 'Ne pas confondre la mesure d\'un angle et la longueur d\'un côté. Un angle ne dépend pas de la longueur des segments qui le forment — il mesure uniquement l\'écartement entre les deux demi-droites.'
    },

    quiz: [
      { q: 'Dans un triangle, deux angles mesurent $47°$ et $68°$. Quelle est la mesure du troisième angle ?', options: ['$55°$', '$65°$', '$75°$', '$85°$'], answer: 1, correction: 'La somme des angles d\'un triangle est $180°$. Troisième angle $= 180° - 47° - 68° = 65°$.' },
      { q: 'Deux angles sont complémentaires et leur différence est $20°$. Quelle est la valeur du plus grand ?', options: ['$35°$', '$45°$', '$55°$', '$65°$'], answer: 2, correction: 'Soit $x$ le plus petit et $x + 20°$ le plus grand. $x + (x+20°) = 90°$ → $2x = 70°$ → $x = 35°$. Le plus grand vaut $55°$.' },
      { q: 'Deux angles sont supplémentaires. L\'un vaut $3x + 10°$ et l\'autre $x + 30°$. Quelle est la valeur de $x$ ?', options: ['$25°$', '$35°$', '$28°$', '$30°$'], answer: 1, correction: '$(3x+10) + (x+30) = 180 \\Rightarrow 4x + 40 = 180 \\Rightarrow x = 35°$.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        // Quatre TACHES distinctes (2026-09-08) : avant, les sept contextes
        // (architecte, prisme, charpentier, voile...) rehabillaient tous le
        // meme calcul « 180 - a - b », si bien que le manuel imprimait trois
        // fois le troisieme angle d'un triangle.
        const variante = pick(['triangle', 'complementaire', 'supplementaire', 'isocele']);

        if (variante === 'triangle') {
          const a1 = rand(20, 70), a2 = rand(20, 70);
          const a3 = 180 - a1 - a2;
          const ctx = pick([
            `Dans un triangle, deux angles mesurent $${a1}°$ et $${a2}°$.`,
            `Sur un plan de construction, un architecte trace un triangle dont deux angles mesurent $${a1}°$ et $${a2}°$.`,
            `En optique, la section d'un prisme a la forme d'un triangle dont deux angles mesurent $${a1}°$ et $${a2}°$.`,
            `Un charpentier construit une ferme de toit triangulaire dont deux angles mesurent $${a1}°$ et $${a2}°$.`,
            `La voile triangulaire d'un petit voilier a deux angles qui mesurent $${a1}°$ et $${a2}°$.`
          ]);
          return {
            statement: `${ctx}<br/>Quelle est la mesure du <strong>troisième angle</strong> (en degrés) ?`,
            // Le triangle est construit AUX VRAIS ANGLES du tirage (2026-09-12) :
            // l'eleve peut verifier sa reponse au rapporteur. Le troisieme angle
            // porte « ? » et n'est jamais chiffre — la figure pose la question,
            // elle ne la resout pas.
            figure: figureTriangleAngles(a1, a2),
            answer: a3,
            tolerance: 0,
            unit: '°',
            hint: `La somme des angles d'un triangle vaut toujours $180°$.`,
            solution: [
              `Propriété : la somme des angles d'un triangle vaut toujours $180°$.`,
              `$\\alpha = 180° - ${a1}° - ${a2}° = ${a3}°$`,
              `Vérification : $${a1}° + ${a2}° + ${a3}° = 180°$ ✓`
            ]
          };
        }

        if (variante === 'complementaire') {
          const a = rand(10, 80);
          const b = 90 - a;
          return {
            statement: `Deux angles sont <strong>complémentaires</strong> : ensemble, ils forment un angle droit. ` +
              `Le premier mesure $${a}°$.<br/>Quelle est la mesure du second (en degrés) ?`,
            // « Complementaires » est un mot, pas une image : la figure montre
            // les deux angles remplissant ensemble un angle droit, ce que le
            // mot seul ne dit pas a un eleve de sixieme.
            figure: figureAnglesAdjacents(a, 90),
            answer: b,
            tolerance: 0,
            unit: '°',
            hint: `Deux angles complémentaires forment un angle droit : leur somme vaut $90°$.`,
            solution: [
              `Complémentaires signifie que leur somme vaut $90°$ (un angle droit).`,
              `Le second mesure donc $90° - ${a}° = ${b}°$.`,
              `Vérification : $${a}° + ${b}° = 90°$ ✓`
            ]
          };
        }

        if (variante === 'supplementaire') {
          const a = rand(20, 160);
          const b = 180 - a;
          const ctx = pick([
            `Deux angles <strong>supplémentaires</strong> forment ensemble un angle plat.`,
            `Sur une droite, un angle et son voisin forment un angle plat : ils sont <strong>supplémentaires</strong>.`
          ]);
          return {
            statement: `${ctx} Le premier mesure $${a}°$.<br/>Quelle est la mesure du second (en degrés) ?`,
            // Meme raison qu'au complementaire, sur l'angle plat : les deux
            // demi-droites alignees rendent le « 180° » evident.
            figure: figureAnglesAdjacents(a, 180),
            answer: b,
            tolerance: 0,
            unit: '°',
            hint: `Deux angles supplémentaires forment un angle plat : leur somme vaut $180°$.`,
            solution: [
              `Supplémentaires signifie que leur somme vaut $180°$ (un angle plat).`,
              `Le second mesure donc $180° - ${a}° = ${b}°$.`,
              `Vérification : $${a}° + ${b}° = 180°$ ✓`
            ]
          };
        }

        // « isocele » : deux angles egaux, un seul connu. L'eleve doit
        // combiner la propriete du triangle isocele et la somme a 180°.
        const sommet = rand(20, 100);
        // Angle au sommet de meme parite que 180 : sinon les deux angles a la
        // base tomberaient sur un demi-degre, hors programme de sixieme.
        const sommetPair = (180 - sommet) % 2 === 0 ? sommet : sommet + 1;
        const baseEntiere = (180 - sommetPair) / 2;
        return {
          statement: `Un triangle <strong>isocèle</strong> a un angle au sommet de $${sommetPair}°$. ` +
            `Ses deux angles à la base sont égaux.<br/>Quelle est la mesure de chacun d'eux (en degrés) ?`,
          /* Triangle isocele reellement isocele : les deux angles a la base
             valent la meme chose sur le dessin, ce qui EST la propriete a
             mobiliser. Ce sont eux qui sont cherches, ils portent donc « ? » et
             seul l'angle au sommet est chiffre (option `cherche: 'base'`). */
          figure: figureTriangleAngles(baseEntiere, baseEntiere, { cherche: 'base' }),
          answer: baseEntiere,
          tolerance: 0,
          unit: '°',
          hint: `Retire d'abord l'angle au sommet des $180°$ : ce qui reste se partage en deux parts égales.`,
          solution: [
            `La somme des angles du triangle vaut $180°$.`,
            `Les deux angles à la base se partagent $180° - ${sommetPair}° = ${180 - sommetPair}°$.`,
            `Comme ils sont égaux : $${180 - sommetPair}° \\div 2 = ${baseEntiere}°$.`,
            `Vérification : $${sommetPair}° + ${baseEntiere}° + ${baseEntiere}° = 180°$ ✓`
          ]
        };
      }
    },
    probleme: {
      context: 'Un rayon lumineux passe de l\'air dans l\'eau : c\'est la <strong>réfraction</strong>, il change de direction en traversant la surface.<br/><br/>En arrivant à la surface, il fait un angle d\'incidence $i_1 = 30°$ avec la normale (la droite perpendiculaire à la surface). En entrant dans l\'eau, il ressort avec un angle de réfraction $i_2 = 22°$.',
      schema: null,
      tasks: [
        'Comparer les deux angles $i_1$ et $i_2$ : lequel est le plus grand ?',
        'Ranger les trois angles $i_1 = 30°$, $i_2 = 22°$ et un angle droit ($90°$) du plus petit au plus grand.',
        'Le rayon s\'est-il rapproché ou éloigné de la normale en entrant dans l\'eau ?'
      ],
      solutions: [
        '$i_1 = 30°$ est plus grand que $i_2 = 22°$.',
        '$i_2 = 22° < i_1 = 30° < 90°$ (angle droit).',
        'Le rayon se rapproche de la normale : son angle a diminué en passant de l\'air à l\'eau.'
      ],
      finalAnswer: 'Le rayon lumineux se rapproche de la normale en entrant dans l\'eau, car $i_2 = 22°$ est plus petit que $i_1 = 30°$.'
    },

    evaluation: {
      title: 'Évaluation — Angles',
      duration: '20 min',
      questions: [
        { statement: 'Dans un triangle, les trois angles mesurent $52°$, $73°$ et $\\alpha$. Calcule $\\alpha$ (en degrés).', type: 'numeric', answer: 55, tolerance: 0, unit: '°', points: 2, correction: '$\\alpha = 180° - 52° - 73° = 55°$.' },
        // Competence « communiquer » (2026-09-12). L'ancienne question etait une
        // soustraction de plus ($180 - 118$) dans un chapitre qui en comptait deja
        // une. Elle demande desormais de choisir la phrase qui JUSTIFIE correctement
        // la reponse : les quatre options donnent le meme resultat $62°$, seul le
        // raisonnement ecrit les separe. L'eleve doit reperer la justification qui
        // nomme la bonne propriete — c'est bien « communiquer » et non « calculer ».
        { statement: 'Deux angles sont <strong>supplémentaires</strong> et l\'un mesure $118°$. Un camarade répond $62°$ et te demande de vérifier sa justification.<br/><br/>Laquelle de ces phrases justifie correctement ce résultat ?', type: 'multiple-choice', options: ['« $62°$, parce que $180 - 118 = 62$. »', '« Deux angles supplémentaires forment ensemble un angle plat, soit $180°$ ; le second mesure donc $180° - 118° = 62°$. »', '« Deux angles supplémentaires forment ensemble un angle droit, soit $90°$ ; le second mesure donc $62°$. »', '« $62°$, parce que $118°$ est obtus et que son supplémentaire est forcément aigu. »'], answer: 1, points: 2, correction: 'Les quatre phrases avancent la même valeur $62°$ : c\'est la <strong>justification</strong> qui est évaluée ici, pas le calcul.<br/><br/>La première donne le calcul sans dire d\'où vient le $180$ : le lecteur doit deviner la propriété utilisée.<br/><br/>La troisième nomme une propriété fausse (l\'angle droit vaut $90°$, pas $180°$) et arrive au bon résultat par hasard.<br/><br/>La quatrième constate seulement que l\'angle est aigu, ce qui ne suffit pas à donner sa mesure.<br/><br/>Seule la deuxième <strong>nomme la propriété</strong> (l\'angle plat, $180°$) <strong>puis</strong> en déduit le calcul : c\'est la rédaction attendue.' },
        { statement: 'Un angle mesure $37°$. Comment le classe-t-on ?', type: 'multiple-choice', options: ['Angle droit', 'Angle obtus', 'Angle aigu', 'Angle plat'], answer: 2, points: 2, correction: '$0° < 37° < 90°$ → angle aigu.' },
        { statement: 'Deux angles complémentaires ont pour mesures $2x + 5°$ et $3x - 10°$. Calcule la valeur de $x$ (en degrés).', type: 'numeric', answer: 19, tolerance: 0, unit: '°', points: 2, correction: '$(2x + 5) + (3x - 10) = 90$, $5x - 5 = 90$, $x = 19°$.' },
        { statement: 'Quel est l\'angle formé par les aiguilles d\'une horloge à $15\\text{h}00$ ?', type: 'multiple-choice', options: ['$180°$', '$90°$', '$60°$', '$120°$'], answer: 1, points: 2, correction: 'De $12$ à $3$ : $3 \\times 30° = 90°$.' }
      ]
    }
  });
