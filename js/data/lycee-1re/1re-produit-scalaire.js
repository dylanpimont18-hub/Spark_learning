/* =========================================================
   Spark Learning – data/lycee-1re/1re-produit-scalaire.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-produit-scalaire',
    level: 2, subject: 'maths',
    icon: '⋅',
    title: 'Produit scalaire',
    subtitle: 'Définition, calcul, travail d\'une force',
    keywords: ['Produit scalaire', 'Angle', 'Norme', 'Travail', 'Orthogonalité'],
    physics: 'Travail d\'une force $W = \\vec{F} \\cdot \\vec{d}$, puissance $P = \\vec{F} \\cdot \\vec{v}$',

    cours: {
      intro: 'Tu sais additionner deux vecteurs, et tu sais en multiplier un par un nombre. Mais peux-tu multiplier deux vecteurs <strong>entre eux</strong> ?<br/><br/>La question n\'a rien d\'artificiel. Un traîneau est tiré par une corde oblique : la force ne pointe pas dans la direction du déplacement, et pourtant elle le fait avancer. De combien ? Une partie seulement de cette force sert à avancer, l\'autre tire vers le haut et ne sert à rien. <strong>Comment séparer les deux ?</strong><br/><br/>Autre impasse, purement géométrique cette fois : deux rues partent d\'un même carrefour, tu connais les coordonnées de leurs extrémités, et tu voudrais savoir si elles sont perpendiculaires. Avec les seuls outils de seconde, tu n\'as aucun moyen de trancher sans sortir un rapporteur.<br/><br/>Ces deux questions — quelle part d\'une force travaille, et quel angle font deux directions — n\'en font qu\'une. Le <strong>produit scalaire</strong> y répond d\'un seul calcul, et il rend un <strong>nombre</strong>, jamais un vecteur.',
      definitions: [
        { term: 'Produit scalaire', def: 'Le <strong>produit scalaire</strong> de $\\vec{u}$ et $\\vec{v}$ est le nombre réel $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$. C\'est un <strong>scalaire</strong> (nombre), jamais un vecteur.' },
        { term: 'Norme d\'un vecteur', def: 'La <strong>norme</strong> de $\\vec{u}(x\\,;\\,y)$ est $\\|\\vec{u}\\| = \\sqrt{x^2 + y^2}$. On la retrouve via $\\|\\vec{u}\\|^2 = \\vec{u} \\cdot \\vec{u}$.' },
        { term: 'Orthogonalité', def: 'Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont <strong>orthogonaux</strong> ($\\vec{u} \\perp \\vec{v}$) si et seulement si $\\vec{u} \\cdot \\vec{v} = 0$. C\'est le critère algébrique de la perpendicularité.' },
        { term: 'Travail d\'une force', def: 'Le <strong>travail</strong> d\'une force $\\vec{F}$ sur un déplacement $\\vec{d}$ est $W = \\vec{F} \\cdot \\vec{d} = Fd\\cos\\theta$. Il peut être positif (moteur), nul (perpendiculaire) ou négatif (résistant).' }
      ],
      method: {
        title: 'Méthode',
        steps: [
          '<strong>Définition angulaire</strong> : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\theta)$.',
          '<strong>Définition par coordonnées</strong> : si $\\vec{u}(x_1, y_1)$ et $\\vec{v}(x_2, y_2)$, alors $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$.',
          '<strong>Orthogonalité</strong> : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$. Auto-produit : $\\vec{u} \\cdot \\vec{u} = \\|\\vec{u}\\|^2$.'
        ]
      },
      example: {
        statement: 'Soit $\\vec{u}(3\\,;\\,-1)$ et $\\vec{v}(2\\,;\\,6)$. Calculer $\\vec{u} \\cdot \\vec{v}$, puis déterminer si les vecteurs sont orthogonaux.',
        steps: [
          '$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = 3 \\times 2 + (-1) \\times 6 = 6 - 6 = 0$.',
          'Puisque $\\vec{u} \\cdot \\vec{v} = 0$, les vecteurs sont <strong>orthogonaux</strong> : $\\vec{u} \\perp \\vec{v}$.',
          'Vérification géométrique : $\\|\\vec{u}\\| = \\sqrt{10}$, $\\|\\vec{v}\\| = \\sqrt{40}$, $\\cos\\theta = 0/(\\sqrt{10}\\sqrt{40}) = 0$ donc $\\theta = 90°$.'
        ],
        answer: '$\\vec{u} \\cdot \\vec{v} = 0$ : les vecteurs $\\vec{u}(3\\,;\\,-1)$ et $\\vec{v}(2\\,;\\,6)$ sont bien orthogonaux.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Deux vecteurs orthogonaux',
        title: 'Le produit scalaire de $\\vec{u}$ et $\\vec{v}$ (exemple du cours) : une projection nulle',
        description: 'Les vecteurs $\\vec{u}(3\\,;\\,-1)$ et $\\vec{v}(2\\,;\\,6)$ (exemple du cours) sont tracés depuis l\'origine $O$.<br/><br/>Le petit carré en $O$ marque l\'angle droit entre eux ; le cercle en pointillés autour de $O$ représente la projection orthogonale de $\\vec{u}$ sur $\\vec{v}$, réduite au point $O$.',
        svg: `
          <svg viewBox="0 0 300 345" role="img" aria-labelledby="prodscal-diagram-title prodscal-diagram-desc">
            <title id="prodscal-diagram-title">Deux vecteurs orthogonaux et leur projection nulle</title>
            <desc id="prodscal-diagram-desc">Repere orthonorme montrant les vecteurs u(3;-1) et v(2;6) traces depuis l'origine O. Un marqueur d'angle droit en O indique leur perpendicularite. La projection orthogonale de u sur v est marquee par un cercle en pointilles autour de O, car elle est le vecteur nul.</desc>
            <defs>
              <marker id="arrow-1re-prodscal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <line class="grid-line" x1="58" y1="60" x2="58" y2="325"></line>
            <line class="grid-line" x1="122" y1="60" x2="122" y2="325"></line>
            <line class="grid-line" x1="154" y1="60" x2="154" y2="325"></line>
            <line class="grid-line" x1="186" y1="60" x2="186" y2="325"></line>
            <line class="grid-line" x1="218" y1="60" x2="218" y2="325"></line>
            <line class="grid-line" x1="55" y1="322" x2="225" y2="322"></line>
            <line class="grid-line" x1="55" y1="258" x2="225" y2="258"></line>
            <line class="grid-line" x1="55" y1="226" x2="225" y2="226"></line>
            <line class="grid-line" x1="55" y1="194" x2="225" y2="194"></line>
            <line class="grid-line" x1="55" y1="162" x2="225" y2="162"></line>
            <line class="grid-line" x1="55" y1="130" x2="225" y2="130"></line>
            <line class="grid-line" x1="55" y1="98" x2="225" y2="98"></line>
            <line class="grid-line" x1="55" y1="66" x2="225" y2="66"></line>

            <line class="axis" x1="45" y1="290" x2="245" y2="290" marker-end="url(#arrow-1re-prodscal)"></line>
            <line class="axis" x1="90" y1="335" x2="90" y2="45" marker-end="url(#arrow-1re-prodscal)"></line>
            <text class="axis-label" x="249" y="294">x</text>
            <text class="axis-label" x="96" y="50">y</text>
            <text class="tick-label" x="58" y="304" text-anchor="middle">-1</text>
            <text class="tick-label" x="218" y="304" text-anchor="middle">4</text>
            <text class="tick-label" x="78" y="326" text-anchor="end">-1</text>
            <text class="tick-label" x="78" y="70" text-anchor="end">7</text>
            <text class="tick-label" x="78" y="282" text-anchor="end">O</text>

            <line class="curve-main" x1="90" y1="290" x2="154" y2="98" marker-end="url(#arrow-1re-prodscal)"></line>
            <circle class="plot-point-alt" cx="154" cy="98" r="3"></circle>
            <text class="annotation-label" x="158" y="92">v (2 ; 6)</text>

            <line class="curve-main" x1="90" y1="290" x2="186" y2="322" marker-end="url(#arrow-1re-prodscal)"></line>
            <circle class="plot-point-alt" cx="186" cy="322" r="3"></circle>
            <text class="annotation-label" x="190" y="334">u (3 ; -1)</text>

            <path class="guide-line" d="M103.3,294.4 L107.7,281.2 L94.4,276.7" fill="none"></path>
            <text class="label-soft" x="118" y="272">90°</text>

            <circle class="guide-line" cx="90" cy="290" r="9" fill="none"></circle>
            <circle class="plot-point" cx="90" cy="290" r="3"></circle>
            <text class="label-soft" x="55" y="342">projection reduite au point O</text>
          </svg>
        `,
        notes: [
          '$\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2 = 3\\times2 + (-1)\\times6 = 6 - 6 = 0$ : le produit scalaire est nul, donc $\\vec{u} \\perp \\vec{v}$.',
          'Le projeté orthogonal de $\\vec{u}$ sur la droite portée par $\\vec{v}$ est le point $H$ tel que $\\overrightarrow{OH} = \\dfrac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{v}\\|^2}\\vec{v} = \\dfrac{0}{40}\\vec{v} = \\vec{0}$ : $H$ coïncide avec $O$, c\'est le cercle en pointillés.',
          'Vérification géométrique du cours : $\\|\\vec{u}\\| = \\sqrt{10}$, $\\|\\vec{v}\\| = \\sqrt{40}$, donc $\\cos\\theta = \\dfrac{0}{\\sqrt{10}\\times\\sqrt{40}} = 0$ et $\\theta = 90°$.',
          'Une projection nulle est la signature géométrique de l\'orthogonalité : c\'est le cas particulier où le « pied » de la projection remonte jusqu\'à l\'origine du vecteur projeté.'
        ],
        reading: 'Le carré à angle droit en $O$ et le cercle en pointillés se lisent ensemble : la projection de $\\vec{u}$ sur $\\vec{v}$ n\'a littéralement aucune longueur, car les deux vecteurs sont perpendiculaires.',
        caption: 'Vecteurs $\\vec{u}(3\\,;\\,-1)$ et $\\vec{v}(2\\,;\\,6)$ (exemple du cours) : orthogonaux, donc de projection nulle l\'un sur l\'autre.'
      },
      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14.

         Principe du cahier des charges (section 9) : une figure par
         MALENTENDU, pas une figure par formule.

         Les trois malentendus retenus sont ceux qui font échouer le chapitre,
         et ils s'enchaînent :
           1. ce que le produit scalaire MESURE — la projection orthogonale,
              que le schéma principal ne montre que dans son cas dégénéré
              (projection nulle, vecteurs perpendiculaires) ;
           2. ce que son SIGNE raconte — le pied de projection passe de l'autre
              côté de l'origine, et rien d'autre ne change ;
           3. pourquoi les DEUX FORMULES donnent le même nombre, alors que
              l'élève croit sincèrement à deux produits scalaires différents.

         TOUTES les coordonnées ci-dessous sont CALCULÉES et vérifiées par
         scripts/manuel/tests/diagrams-1re.test.js : les projections tombent à
         angle droit au produit scalaire nul, les normes annoncées sont les
         normes dessinées, et les deux chemins de calcul rendent bien le même
         nombre. Un angle droit dessiné à 89 degrés est invisible à la
         relecture et faux dans le livre. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Ce que le produit scalaire mesure',
          title: 'La projection orthogonale, la vraie définition du produit scalaire',
          description: 'Le schéma d\'ouverture du chapitre montre une projection <strong>nulle</strong>, parce que les deux vecteurs y sont perpendiculaires. C\'est le cas particulier, pas le cas général : on ne voit pas ce qui est projeté.<br/><br/>Ici, $\\vec{u}(-2\\,;\\,6)$ et $\\vec{v}(4\\,;\\,3)$ ne sont pas perpendiculaires. Le point $H$ est l\'<strong>ombre</strong> de la pointe de $\\vec{u}$ sur la droite portée par $\\vec{v}$, et c\'est la longueur $OH$ qui fait tout le produit scalaire.',
          svg: `
            <svg viewBox="0 0 430 260" role="img" aria-labelledby="ps-proj-title ps-proj-desc">
              <title id="ps-proj-title">Projection orthogonale de u sur la direction de v</title>
              <desc id="ps-proj-desc">Repere gradue. Deux vecteurs partent de l'origine : u va vers le haut a gauche, jusqu'au point de coordonnees moins deux et six ; v va vers le haut a droite, jusqu'au point quatre et trois. La droite portee par v est prolongee en pointilles. Depuis la pointe de u, un trait descend perpendiculairement jusqu'a cette droite et la rencontre au point H, de coordonnees un virgule six et un virgule deux. Un petit carre marque l'angle droit en H. La longueur du segment allant de l'origine a H vaut deux unites, et la norme de v vaut cinq : leur produit, dix, est exactement le produit scalaire de u par v.</desc>

              <line class="grid-line" x1="56" y1="26" x2="56" y2="250"></line>
              <line class="grid-line" x1="84" y1="26" x2="84" y2="250"></line>
              <line class="grid-line" x1="112" y1="26" x2="112" y2="250"></line>
              <line class="grid-line" x1="168" y1="26" x2="168" y2="250"></line>
              <line class="grid-line" x1="196" y1="26" x2="196" y2="250"></line>
              <line class="grid-line" x1="224" y1="26" x2="224" y2="250"></line>
              <line class="grid-line" x1="252" y1="26" x2="252" y2="250"></line>
              <line class="grid-line" x1="280" y1="26" x2="280" y2="250"></line>
              <line class="grid-line" x1="56" y1="250" x2="280" y2="250"></line>
              <line class="grid-line" x1="56" y1="194" x2="280" y2="194"></line>
              <line class="grid-line" x1="56" y1="166" x2="280" y2="166"></line>
              <line class="grid-line" x1="56" y1="138" x2="280" y2="138"></line>
              <line class="grid-line" x1="56" y1="110" x2="280" y2="110"></line>
              <line class="grid-line" x1="56" y1="82" x2="280" y2="82"></line>
              <line class="grid-line" x1="56" y1="54" x2="280" y2="54"></line>
              <line class="grid-line" x1="56" y1="26" x2="280" y2="26"></line>

              <line class="axis" x1="56" y1="222" x2="292" y2="222"></line>
              <line class="axis" x1="140" y1="250" x2="140" y2="26"></line>
              <text class="axis-label" x="298" y="226">x</text>
              <text class="axis-label" x="146" y="32">y</text>
              <text class="tick-label" x="132" y="238" text-anchor="end">0</text>

              <!-- Droite portee par v, prolongee : la projection se lit SUR
                   elle, et l'eleve doit voir qu'elle depasse le vecteur. -->
              <line class="guide-line" x1="112" y1="243" x2="315" y2="90"></line>

              <!-- Les deux vecteurs. Une seule pointe de fleche par trait. -->
              <line class="curve-main" x1="140" y1="222" x2="252" y2="138"></line>
              <polygon class="plot-point" points="252,138 242,137 246.5,144"></polygon>
              <line class="curve-main" x1="140" y1="222" x2="84" y2="54"></line>
              <polygon class="plot-point" points="84,54 82.5,64 90.5,60.5"></polygon>

              <!-- Trait de projection, de la pointe de u jusqu'a son pied H.
                   Orthogonal a v au flottant pres, verifie par le test. -->
              <line class="focus-line" x1="84" y1="54" x2="184.8" y2="188.4"></line>

              <!-- Angle droit en H, code par un CARRE et jamais par un arc. -->
              <path class="grid-line" fill="none" d="M177.6,194.4 L171.6,186.4 L179.6,180.4"></path>

              <!-- Le segment OH, qui porte toute la mesure. -->
              <line class="focus-line" x1="140" y1="222" x2="184.8" y2="188.4"></line>
              <circle class="plot-point" cx="184.8" cy="188.4" r="5"></circle>

              <circle class="plot-point-alt" cx="252" cy="138" r="3"></circle>
              <circle class="plot-point-alt" cx="84" cy="54" r="3"></circle>

              <text class="annotation-label" x="76" y="46" text-anchor="start">vecteur u</text>
              <text class="annotation-label" x="258" y="132" text-anchor="start">vecteur v</text>
              <!-- ETIQUETTES DE OH ET DU PIED, REPLACEES le 2026-09-14.
                   Elles se chevauchaient : « longueur 2 » ancrée en x=150 et
                   « pied » en x=192, sur la même ligne de base, s'imprimaient
                   l'une par-dessus l'autre. Le défaut n'était visible qu'à
                   l'épreuve — aucun test ne mesure la boîte d'un texte, et les
                   deux étiquettes restaient dans le cadre.
                   « longueur 2 » descend sous le segment OH, dont le milieu est
                   en (162,4 ; 205,2), et « pied » passe à droite du point H
                   (184,8 ; 188,4), là où rien n'est tracé. -->
              <text class="annotation-label" x="146" y="228" text-anchor="start">longueur 2</text>
              <text class="tick-label" x="196" y="184" text-anchor="start">pied</text>
            </svg>
          `,
          notes: [
            'Le calcul par les coordonnées donne $\\vec{u} \\cdot \\vec{v} = (-2) \\times 4 + 6 \\times 3 = -8 + 18 = 10$.',
            'La norme de $\\vec{v}$ vaut $\\|\\vec{v}\\| = \\sqrt{4^2+3^2} = \\sqrt{25} = 5$ : c\'est le triangle $3$-$4$-$5$, donc une longueur exacte.',
            'Le pied de la projection est $H\\left(1{,}6\\,;\\,1{,}2\\right)$, et la longueur $OH$ vaut exactement $2$.',
            'On retrouve alors le produit scalaire comme un simple produit de deux longueurs : $OH \\times \\|\\vec{v}\\| = 2 \\times 5 = 10$. <strong>C\'est la même valeur que par les coordonnées.</strong>',
            'Le produit scalaire ne mesure donc rien d\'autre que ceci : <strong>la longueur de l\'ombre de $\\vec{u}$ sur $\\vec{v}$, multipliée par la longueur de $\\vec{v}$.</strong>'
          ],
          reading: 'Suis le trait qui descend de la pointe de $\\vec{u}$ : il tombe à angle droit sur la droite de $\\vec{v}$, et c\'est cet angle droit qui définit la projection. Le morceau qui va de l\'origine jusqu\'au pied est tout ce que $\\vec{v}$ « voit » de $\\vec{u}$. Le reste de $\\vec{u}$, la partie perpendiculaire, ne compte pour rien dans le produit scalaire.',
          caption: 'Projection orthogonale de $\\vec{u}(-2\\,;\\,6)$ sur la direction de $\\vec{v}(4\\,;\\,3)$ : $OH = 2$, $\\|\\vec{v}\\| = 5$, et $\\vec{u} \\cdot \\vec{v} = 2 \\times 5 = 10$.'
        },
        {
          theme: 'maths',
          kicker: 'Ce que dit le signe',
          title: 'Le signe du produit scalaire, lu sur la projection',
          description: 'Une règle apprise par cœur — « positif si l\'angle est aigu, négatif s\'il est obtus » — ne se retient pas, parce qu\'elle ne s\'appuie sur rien.<br/><br/>Les trois dessins ci-dessous ont la <strong>même</strong> longueur de $\\vec{u}$, la <strong>même</strong> longueur de $\\vec{v}$, et la même origine. Seul l\'angle change. Regarde où tombe le pied de la projection : c\'est lui, et lui seul, qui donne le signe.',
          svg: `
            <svg viewBox="0 0 430 228" role="img" aria-labelledby="ps-signe-title ps-signe-desc">
              <title id="ps-signe-title">Trois angles, trois signes du produit scalaire</title>
              <desc id="ps-signe-desc">Trois dessins cote a cote, a la meme echelle. Dans chacun, un vecteur v est horizontal vers la droite et un vecteur u part de la meme origine avec la meme longueur. A gauche l'angle est aigu, de trente-cinq degres : le pied de la projection tombe a droite de l'origine, sur le vecteur v, et le produit scalaire est positif. Au milieu l'angle est droit : le pied se confond avec l'origine, la projection est nulle et le produit scalaire aussi. A droite l'angle est obtus, de cent quarante degres : le pied tombe a gauche de l'origine, du cote oppose a v, et le produit scalaire est negatif.</desc>

              <!-- Panneau 1 : angle aigu, produit scalaire positif. -->
              <line class="axis" x1="20" y1="158" x2="140" y2="158"></line>
              <line class="curve-main" x1="46" y1="158" x2="128.8" y2="158"></line>
              <polygon class="plot-point" points="128.8,158 120.8,153.5 120.8,162.5"></polygon>
              <line class="curve-main" x1="46" y1="158" x2="107.9" y2="114.6"></line>
              <polygon class="plot-point" points="107.9,114.6 99.6,117.6 105.5,123"></polygon>
              <line class="focus-line" x1="107.9" y1="114.6" x2="107.9" y2="158"></line>
              <path class="grid-line" fill="none" d="M99.9,158 L99.9,150 L107.9,150"></path>
              <line class="focus-line" x1="46" y1="158" x2="107.9" y2="158"></line>
              <circle class="plot-point" cx="107.9" cy="158" r="4"></circle>
              <circle class="plot-point-alt" cx="46" cy="158" r="3"></circle>
              <text class="tick-label" x="46" y="176" text-anchor="middle">origine</text>
              <text class="annotation-label" x="70" y="146" text-anchor="middle">35°</text>
              <text class="annotation-label" x="80" y="196" text-anchor="middle">pied a droite</text>
              <text class="annotation-label" x="80" y="216" text-anchor="middle">produit positif</text>

              <!-- Panneau 2 : angle droit, produit scalaire nul. -->
              <line class="axis" x1="160" y1="158" x2="280" y2="158"></line>
              <line class="curve-main" x1="186" y1="158" x2="268.8" y2="158"></line>
              <polygon class="plot-point" points="268.8,158 260.8,153.5 260.8,162.5"></polygon>
              <line class="curve-main" x1="186" y1="158" x2="186" y2="82.4"></line>
              <polygon class="plot-point" points="186,82.4 181.5,90.4 190.5,90.4"></polygon>
              <path class="grid-line" fill="none" d="M194,158 L194,150 L186,150"></path>
              <circle class="plot-point" cx="186" cy="158" r="4"></circle>
              <text class="tick-label" x="186" y="176" text-anchor="middle">origine</text>
              <text class="annotation-label" x="212" y="146" text-anchor="middle">90°</text>
              <text class="annotation-label" x="220" y="196" text-anchor="middle">pied sur origine</text>
              <text class="annotation-label" x="220" y="216" text-anchor="middle">produit nul</text>

              <!-- Panneau 3 : angle obtus, produit scalaire negatif. -->
              <line class="axis" x1="256" y1="158" x2="420" y2="158"></line>
              <line class="curve-main" x1="326" y1="158" x2="408.8" y2="158"></line>
              <polygon class="plot-point" points="408.8,158 400.8,153.5 400.8,162.5"></polygon>
              <line class="curve-main" x1="326" y1="158" x2="268.1" y2="109.4"></line>
              <polygon class="plot-point" points="268.1,109.4 272.3,117.1 277.1,110.7"></polygon>
              <line class="focus-line" x1="268.1" y1="109.4" x2="268.1" y2="158"></line>
              <path class="grid-line" fill="none" d="M276.1,158 L276.1,150 L268.1,150"></path>
              <line class="focus-line" x1="326" y1="158" x2="268.1" y2="158"></line>
              <circle class="plot-point" cx="268.1" cy="158" r="4"></circle>
              <circle class="plot-point-alt" cx="326" cy="158" r="3"></circle>
              <text class="tick-label" x="330" y="176" text-anchor="start">origine</text>
              <text class="annotation-label" x="310" y="132" text-anchor="middle">140°</text>
              <text class="annotation-label" x="340" y="196" text-anchor="middle">pied a gauche</text>
              <text class="annotation-label" x="340" y="216" text-anchor="middle">produit negatif</text>
            </svg>
          `,
          notes: [
            'Dans les trois dessins, $\\|\\vec{u}\\|$ et $\\|\\vec{v}\\|$ sont <strong>identiques</strong> : les longueurs ne changent jamais, seul l\'angle change.',
            'À gauche, l\'angle vaut $35°$ : $\\cos(35°) > 0$, le pied tombe du même côté que $\\vec{v}$, et $\\vec{u} \\cdot \\vec{v} > 0$.',
            'Au milieu, l\'angle vaut $90°$ : $\\cos(90°) = 0$, le pied remonte jusqu\'à l\'origine, et $\\vec{u} \\cdot \\vec{v} = 0$. C\'est exactement le critère d\'orthogonalité.',
            'À droite, l\'angle vaut $140°$ : $\\cos(140°) < 0$, le pied passe de l\'<strong>autre côté</strong> de l\'origine, et $\\vec{u} \\cdot \\vec{v} < 0$.',
            'En physique, c\'est la même lecture : une force qui tire vers l\'avant travaille positivement, une force de frottement, qui tire vers l\'arrière, travaille négativement.'
          ],
          reading: 'Ne regarde ni les flèches ni l\'angle : regarde uniquement le gros point, le pied de la projection. S\'il est du côté de $\\vec{v}$, le produit scalaire est positif. S\'il est sur l\'origine, il est nul. S\'il est de l\'autre côté, il est négatif. Tu n\'as aucune règle à retenir — il suffit de voir de quel côté tombe l\'ombre.',
          caption: 'Même $\\|\\vec{u}\\|$ et même $\\|\\vec{v}\\|$, trois angles : le pied de la projection passe à droite, sur l\'origine, puis à gauche — et le produit scalaire change de signe avec lui.'
        },
        {
          theme: 'maths',
          kicker: 'Pourquoi les deux formules se valent',
          title: 'Deux chemins, un seul nombre',
          description: 'Beaucoup d\'élèves traversent le chapitre en croyant à <strong>deux</strong> produits scalaires : « celui avec les coordonnées » et « celui avec le cosinus ». Ils appliquent l\'un ou l\'autre selon ce que l\'énoncé leur donne, sans savoir que c\'est le même objet.<br/><br/>Sur un seul couple de vecteurs, $\\vec{u}(3\\,;\\,4)$ et $\\vec{v}(8\\,;\\,6)$, les deux chemins sont parcourus jusqu\'au bout. Ils aboutissent au même nombre, et ce n\'est pas une coïncidence : c\'est un théorème.',
          svg: `
            <svg viewBox="0 0 430 250" role="img" aria-labelledby="ps-deux-title ps-deux-desc">
              <title id="ps-deux-title">Un seul couple de vecteurs, deux calculs concordants</title>
              <desc id="ps-deux-desc">Repere gradue montrant deux vecteurs partant de l'origine. Le premier va au point de coordonnees trois et quatre, sa norme vaut cinq. Le second va au point huit et six, sa norme vaut dix. L'angle entre eux est marque par un arc, son cosinus vaut zero virgule quatre-vin>-seize. Deux encadres rappellent les deux calculs : par les coordonnees, trois fois huit plus quatre fois six egale quarante-huit ; par la formule angulaire, cinq fois dix fois zero virgule quatre-vin>-seize egale aussi quarante-huit.</desc>

              <line class="grid-line" x1="60" y1="58" x2="60" y2="212"></line>
              <line class="grid-line" x1="82" y1="58" x2="82" y2="212"></line>
              <line class="grid-line" x1="104" y1="58" x2="104" y2="212"></line>
              <line class="grid-line" x1="126" y1="58" x2="126" y2="212"></line>
              <line class="grid-line" x1="148" y1="58" x2="148" y2="212"></line>
              <line class="grid-line" x1="170" y1="58" x2="170" y2="212"></line>
              <line class="grid-line" x1="192" y1="58" x2="192" y2="212"></line>
              <line class="grid-line" x1="214" y1="58" x2="214" y2="212"></line>
              <line class="grid-line" x1="236" y1="58" x2="236" y2="212"></line>
              <line class="grid-line" x1="60" y1="212" x2="236" y2="212"></line>
              <line class="grid-line" x1="60" y1="190" x2="236" y2="190"></line>
              <line class="grid-line" x1="60" y1="168" x2="236" y2="168"></line>
              <line class="grid-line" x1="60" y1="146" x2="236" y2="146"></line>
              <line class="grid-line" x1="60" y1="124" x2="236" y2="124"></line>
              <line class="grid-line" x1="60" y1="102" x2="236" y2="102"></line>
              <line class="grid-line" x1="60" y1="80" x2="236" y2="80"></line>
              <line class="grid-line" x1="60" y1="58" x2="236" y2="58"></line>

              <line class="axis" x1="60" y1="212" x2="250" y2="212"></line>
              <line class="axis" x1="60" y1="212" x2="60" y2="52"></line>
              <text class="axis-label" x="256" y="216">x</text>
              <text class="axis-label" x="66" y="48">y</text>
              <text class="tick-label" x="52" y="224" text-anchor="end">0</text>

              <line class="curve-main" x1="60" y1="212" x2="236" y2="80"></line>
              <polygon class="plot-point" points="236,80 227.4,82.4 232.8,86.6"></polygon>
              <line class="curve-main" x1="60" y1="212" x2="126" y2="124"></line>
              <polygon class="plot-point" points="126,124 119.6,130 126.8,133.4"></polygon>
              <circle class="plot-point-alt" cx="236" cy="80" r="3"></circle>
              <circle class="plot-point-alt" cx="126" cy="124" r="3"></circle>

              <!-- Arc de l'angle, etiquette posee SUR LA BISSECTRICE. -->
              <polyline class="guide-line" fill="none" points="96.8,184.4 96.1,183.5 95.5,182.7 94.8,181.9 94,181 93.3,180.3 92.5,179.5 91.7,178.7 91,178 90.1,177.2 89.3,176.5 88.5,175.9 87.6,175.2"></polyline>
              <text class="annotation-label" x="108.1" y="167.9" text-anchor="start">angle</text>

              <text class="annotation-label" x="132" y="118" text-anchor="start">vecteur u (3 ; 4)</text>
              <text class="annotation-label" x="180" y="70" text-anchor="start">vecteur v (8 ; 6)</text>

              <!-- Les deux chemins de calcul, en vis-a-vis. -->
              <line class="frame-line" x1="272" y1="72" x2="418" y2="72"></line>
              <line class="frame-line" x1="272" y1="122" x2="418" y2="122"></line>
              <line class="frame-line" x1="272" y1="72" x2="272" y2="122"></line>
              <line class="frame-line" x1="418" y1="72" x2="418" y2="122"></line>
              <text class="tick-label" x="345" y="90" text-anchor="middle">par les coordonnees</text>
              <text class="annotation-label" x="345" y="112" text-anchor="middle">3×8 + 4×6 = 48</text>

              <line class="frame-line" x1="272" y1="150" x2="418" y2="150"></line>
              <line class="frame-line" x1="272" y1="200" x2="418" y2="200"></line>
              <line class="frame-line" x1="272" y1="150" x2="272" y2="200"></line>
              <line class="frame-line" x1="418" y1="150" x2="418" y2="200"></line>
              <text class="tick-label" x="345" y="168" text-anchor="middle">par les normes</text>
              <text class="annotation-label" x="345" y="190" text-anchor="middle">5 × 10 × 0,96 = 48</text>

              <text class="tick-label" x="345" y="228" text-anchor="middle">le meme nombre</text>
            </svg>
          `,
          notes: [
            'Par les coordonnées : $\\vec{u} \\cdot \\vec{v} = 3 \\times 8 + 4 \\times 6 = 24 + 24 = 48$.',
            'Les deux normes sont exactes, car ce sont des triangles $3$-$4$-$5$ : $\\|\\vec{u}\\| = \\sqrt{9+16} = 5$ et $\\|\\vec{v}\\| = \\sqrt{64+36} = 10$.',
            'On en déduit $\\cos\\theta = \\dfrac{48}{5 \\times 10} = 0{,}96$, ce qui correspond à un angle d\'environ $16{,}3°$ — les deux vecteurs pointent effectivement dans des directions voisines.',
            'Par la formule angulaire : $\\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta = 5 \\times 10 \\times 0{,}96 = 48$. <strong>Le même nombre, au chiffre près.</strong>',
            'On choisit donc la formule d\'après ce que l\'énoncé <strong>donne</strong> : des coordonnées, ou des normes et un angle. Jamais d\'après le résultat souhaité, puisqu\'il est le même.'
          ],
          reading: 'Lis les deux encadrés l\'un après l\'autre. Le premier n\'utilise que les quatre coordonnées, le second n\'utilise que deux longueurs et un angle : ils ne partagent aucun nombre de départ, et pourtant ils finissent tous les deux sur $48$. C\'est ce qui autorise à passer librement d\'une écriture à l\'autre, par exemple pour trouver un angle quand on ne connaît que des coordonnées.',
          caption: 'Pour $\\vec{u}(3\\,;\\,4)$ et $\\vec{v}(8\\,;\\,6)$ : $3 \\times 8 + 4 \\times 6 = 48$ et $5 \\times 10 \\times 0{,}96 = 48$ — les deux formules du cours donnent le même produit scalaire.'
        }
      ],
      formulas: [
        '$\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\| \\cdot \\cos\\theta$',
        '$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$',
        '$W = \\vec{F} \\cdot \\vec{d} = F d \\cos\\theta$ (travail d\'une force)',
        '$\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$'
      ],
      recap: [
        'Le produit scalaire est un <strong>nombre réel</strong> (jamais un vecteur). Il peut être positif, négatif ou nul.',
        'Deux formules : $\\|\\vec{u}\\| \\|\\vec{v}\\| \\cos\\theta$ (angulaire) et $x_1 x_2 + y_1 y_2$ (coordonnées).',
        'Test d\'orthogonalité : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.',
        'En physique : $W = \\vec{F} \\cdot \\vec{d}$. Travail nul si force perpendiculaire au déplacement.'
      ],
      piege: 'Le produit scalaire est un <strong>nombre</strong> (scalaire), pas un vecteur : $\\vec{u} \\cdot \\vec{v} \\in \\mathbb{R}$.<br/><br/>Il peut être négatif (angle obtus), nul (vecteurs orthogonaux) ou positif (angle aigu).<br/><br/>Un travail négatif signifie que la force s\'oppose au déplacement (force de frottement par exemple).'
    },

    quiz: [
      {
        q: 'Une force $\\vec{F}$ de norme $10\\,\\text{N}$ est appliquée selon un angle de $60°$ par rapport au déplacement $\\vec{d}$ de norme $5\\,\\text{m}$. Quel est le travail ?',
        options: ['$50\\,\\text{J}$', '$25\\,\\text{J}$', '$43{,}3\\,\\text{J}$', '$0\\,\\text{J}$'],
        answer: 1,
        correction: 'On applique la formule du travail : $W = F \\times d \\times \\cos(\\theta)$.<br/><br/>$W = 10 \\times 5 \\times \\cos(60°) = 10 \\times 5 \\times 0{,}5 = 25\\,\\text{J}$.'
      },
      {
        q: 'Soit $\\vec{u}(3\\,;\\,4)$ et $\\vec{v}(4\\,;\\,-3)$. Un élève calcule $3 \\times 4 + 4 \\times (-3) = 12 - 12 = 0$ et conclut "$\\vec{u} \\perp \\vec{v}$". A-t-il raison ?',
        options: [
          'Oui : le calcul est exact et $\\vec{u} \\cdot \\vec{v} = 0$ prouve bien que $\\vec{u} \\perp \\vec{v}$',
          'Non : le produit scalaire doit être un vecteur, pas un scalaire, donc le résultat est $(7\\,;\\,1)$',
          'Non : $3 \\times 4 + 4 \\times (-3) = 12 + 12 = 24 \\neq 0$',
          'Non : pour tester l\'orthogonalité, il faut utiliser la formule $\\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$, pas les coordonnées'
        ],
        answer: 0,
        correction: 'L\'élève a parfaitement raison. $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = 3 \\times 4 + 4 \\times (-3) = 0$.<br/><br/>Par définition, $\\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow \\vec{u} \\perp \\vec{v}$. Le produit scalaire est bien un <strong>scalaire</strong> (un nombre réel) — pas un vecteur.<br/><br/>L\'option "$(7\\,;\\,1)$" est l\'erreur classique de confondre produit scalaire et addition de vecteurs.'
      },
      {
        q: 'La réaction normale $\\vec{N}$ d\'un sol horizontal est verticale. Le déplacement $\\vec{d}$ est horizontal. Quel est le travail de $\\vec{N}$ ?',
        options: ['$W = N \\times d$', '$W = 0$', '$W = -N \\times d$', 'Dépend de la masse'],
        answer: 1,
        correction: 'La réaction normale est perpendiculaire au déplacement : $\\vec{N} \\perp \\vec{d}$, donc $\\theta = 90°$.<br/><br/>On obtient $W = F d \\cos(90°) = F d \\times 0 = 0\\,\\text{J}$. Une force perpendiculaire au déplacement ne travaille jamais.'
      },
      {
        q: 'La norme de $\\vec{w}(5\\,;\\,12)$ vaut :',
        options: ['$7$', '$17$', '$13$', '$\\sqrt{17}$'],
        answer: 2,
        correction: 'On applique la formule de la norme : $\\|\\vec{w}\\| = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.<br/><br/>On peut aussi utiliser l\'auto-produit scalaire : $\\|\\vec{w}\\|^2 = \\vec{w} \\cdot \\vec{w} = 25 + 144 = 169$.'
      },
      {
        q: 'Si $\\vec{u} \\cdot \\vec{v} < 0$, cela signifie que :',
        options: ['Les vecteurs sont orthogonaux', 'L\'angle entre les vecteurs est obtus ($> 90°$)', 'Les normes sont négatives', 'Les vecteurs sont colinéaires'],
        answer: 1,
        correction: 'On part de la formule angulaire : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos\\theta$.<br/><br/>Comme les normes sont toujours positives, $\\vec{u} \\cdot \\vec{v} < 0$ implique nécessairement $\\cos\\theta < 0$, donc $\\theta > 90°$ (angle obtus).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const mode = pick(['coord', 'travail']);
        if (mode === 'coord') {
          const x1 = rand(-5, 5), y1 = rand(-5, 5);
          const x2 = rand(-5, 5), y2 = rand(-5, 5);
          const ps = x1 * x2 + y1 * y2;
          const ctx = pick([
            'Dans un plan muni d\'un repère orthonormé, on considère les vecteurs',
            'Un ingénieur modélise deux forces par les vecteurs',
            'En robotique, deux capteurs mesurent des déplacements représentés par'
          ]);
          return {
            statement: `${ctx} $\\vec{u}(${x1}\\,;\\,${y1})$ et $\\vec{v}(${x2}\\,;\\,${y2})$.<br/><br/>1) Calculer $\\vec{u} \\cdot \\vec{v}$.<br/>2) Les vecteurs sont-ils orthogonaux ?<br/><br/>Donner la valeur de $\\vec{u} \\cdot \\vec{v}$.`,
            answer: ps,
            tolerance: 0,
            unit: '',
            /* y1 est parenthésé lui aussi quand il est négatif : placé juste
               après le « + », il imprimait sinon « + -5 \times 4 », deux
               signes à la suite. x2 et y2 l'étaient déjà, y1 avait été oublié.
               Trouvé au contrôle visuel de la banque (2026-09-14). */
            hint: `$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = ${x1} \\times ${x2 < 0 ? '(' + x2 + ')' : x2} + ${y1 < 0 ? '(' + y1 + ')' : y1} \\times ${y2 < 0 ? '(' + y2 + ')' : y2}$.`,
            solution: [
              `$\\vec{u} \\cdot \\vec{v} = ${x1} \\times ${x2 < 0 ? '(' + x2 + ')' : x2} + ${y1 < 0 ? '(' + y1 + ')' : y1} \\times ${y2 < 0 ? '(' + y2 + ')' : y2} = ${x1*x2} + (${y1*y2}) = ${ps}$.`,
              `${ps === 0 ? 'Comme $\\vec{u} \\cdot \\vec{v} = 0$, les vecteurs sont orthogonaux.' : 'Comme $\\vec{u} \\cdot \\vec{v} \\neq 0$, les vecteurs ne sont pas orthogonaux.'}`
            ]
          };
        } else {
          const F = rand(5, 20), d = rand(3, 10), angleDeg = pick([0, 30, 45, 60]);
          const cosVal = Math.cos(angleDeg * Math.PI / 180);
          const answer = parseFloat((F * d * cosVal).toFixed(2));
          const ctx = pick([
            `Un ouvrier tire une caisse avec une force de $${F}\\,\\text{N}$`,
            `Un chien tire sa laisse avec une force de $${F}\\,\\text{N}$`,
            `Un tracteur exerce une force de $${F}\\,\\text{N}$ sur une remorque`
          ]);
          return {
            statement: `${ctx} selon un angle de $${angleDeg}°$ par rapport à l'horizontale. Le déplacement est de $${d}\\,\\text{m}$.<br/><br/>Calculer le travail $W$ en joules.`,
            answer,
            tolerance: 0.1,
            unit: 'J',
            hint: `$W = F \\times d \\times \\cos(${angleDeg}°) = ${F} \\times ${d} \\times \\cos(${angleDeg}°)$.`,
            solution: [
              `$W = ${F} \\times ${d} \\times \\cos(${angleDeg}°)$`,
              `$= ${F} \\times ${d} \\times ${fr(cosVal, 4)}$`,
              `$= ${fr(answer)}\\,\\text{J}$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un ouvrier tire une caisse de $50\\,\\text{kg}$ sur $10\\,\\text{m}$ avec une corde faisant un angle $\\alpha = 30°$ avec l\'horizontale. La force de traction vaut $T = 200\\,\\text{N}$. La force de frottement est $f = 50\\,\\text{N}$ (horizontale, opposée au déplacement). $g = 10\\,\\text{m/s}^2$.',
      schema: null,
      tasks: [
        'Calculer le travail de la traction $W_T = T \\times d \\times \\cos(30°)$.',
        'Calculer le travail du poids $W_P$ et de la réaction normale $W_N$ (horizontale).',
        'Calculer le travail de la force de frottement $W_f$ et le travail total $W_{\\text{total}}$.'
      ],
      solutions: [
        '$W_T = 200 \\times 10 \\times \\cos(30°) = 2000 \\times \\dfrac{\\sqrt{3}}{2} \\approx 1732\\,\\text{J}$.',
        'Le poids est vertical, le déplacement horizontal : $W_P = P \\times d \\times \\cos(90°) = 0$. Idem pour $\\vec{N}$ : $W_N = 0$.',
        '$W_f = f \\times d \\times \\cos(180°) = 50 \\times 10 \\times (-1) = -500\\,\\text{J}$. $W_{\\text{total}} = 1732 + 0 + 0 - 500 = 1232\\,\\text{J}$.'
      ],
      finalAnswer: '$W_{\\text{total}} \\approx 1232\\,\\text{J}$'
    },

    evaluation: {
      title: 'Évaluation — Produit scalaire',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le produit scalaire $\\vec{u} \\cdot \\vec{v}$ avec $\\vec{u}(3\\,;\\,-2)$ et $\\vec{v}(4\\,;\\,5)$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On utilise la formule par coordonnées : $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$.<br/><br/>$\\vec{u} \\cdot \\vec{v} = 3 \\times 4 + (-2) \\times 5 = 12 - 10 = 2$. Le résultat est positif, donc l\'angle entre les vecteurs est aigu.'
        },
        {
          statement: 'Deux vecteurs $\\vec{a}$ et $\\vec{b}$ vérifient $\\|\\vec{a}\\| = 6$, $\\|\\vec{b}\\| = 4$ et l\'angle entre eux est $\\theta = 60°$. Calculer $\\vec{a} \\cdot \\vec{b}$.',
          type: 'numeric',
          answer: 12,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On applique la formule angulaire du produit scalaire : $\\vec{a} \\cdot \\vec{b} = \\|\\vec{a}\\| \\times \\|\\vec{b}\\| \\times \\cos(\\theta)$.<br/><br/>$\\vec{a} \\cdot \\vec{b} = 6 \\times 4 \\times \\cos(60°) = 6 \\times 4 \\times 0{,}5 = 12$.'
        },
        {
          statement: 'Pour quels vecteurs $\\vec{u}(2\\,;\\,k)$ et $\\vec{v}(3\\,;\\,-6)$ a-t-on $\\vec{u} \\perp \\vec{v}$ ?',
          type: 'multiple-choice',
          options: ['$k = -4$', '$k = 1$', '$k = 4$', '$k = -1$'],
          answer: 1,
          points: 2,
          correction: 'Le critère d\'orthogonalité est $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.<br/><br/>On écrit : $2 \\times 3 + k \\times (-6) = 0$, soit $6 - 6k = 0$, d\'où $k = 1$.'
        },
        {
          statement: 'Une force $\\vec{F}$ de norme $15\\,\\text{N}$ est appliquée selon un angle de $45°$ par rapport au déplacement de $8\\,\\text{m}$. Calculer le travail $W$ en joules (arrondi à $0{,}1$ J).',
          type: 'numeric',
          answer: 84.85,
          tolerance: 0.1,
          unit: 'J',
          points: 2,
          correction: 'On applique la formule du travail : $W = F \\times d \\times \\cos(\\theta)$.<br/><br/>$W = 15 \\times 8 \\times \\cos(45°) = 120 \\times \\dfrac{\\sqrt{2}}{2} = 120 \\times 0{,}7071 \\approx 84{,}85$ J.'
        },
        {
          /* QUESTION 5 RÉÉCRITE le 2026-09-14. Elle demandait la norme de
             $\vec{w}(5\,;\,-12)$, soit une troisième application de formule
             après les questions 1 et 2 : ce devoir comptait alors trois
             « calculer » sur cinq. Mesuré sur les cinquante questions du
             niveau, « calculer » atteignait 50 %, très au-delà du plafond de
             35 % du cahier des charges, tandis que « communiquer » restait
             sous les 6 %.

             La nouvelle question porte sur le SENS du signe du produit
             scalaire — un malentendu que la fiche professeur diagnostique
             comme durable — et demande d'expliquer plutôt que de calculer.
             Elle reste corrigeable objectivement, l'explication attendue
             étant l'une des quatre propositions. */
          statement: 'Un camarade calcule $\\vec{u} \\cdot \\vec{v} = -20$ et déclare : « j\'ai dû me tromper, un produit ne peut pas être négatif ».<br/><br/>Que lui réponds-tu ?',
          type: 'multiple-choice',
          options: [
            'Son calcul peut être juste : un produit scalaire est un nombre réel quelconque, et un résultat négatif signifie que l\'angle entre les deux vecteurs est obtus',
            'Il a raison : un produit scalaire est toujours positif, le calcul est donc à refaire',
            'Il faut prendre la valeur absolue et répondre $20$, car on ne garde jamais le signe',
            'C\'est impossible : un produit scalaire négatif signifierait que les vecteurs sont perpendiculaires'
          ],
          answer: 0,
          points: 2,
          correction: 'Le produit scalaire n\'est pas une longueur : c\'est un <strong>nombre réel</strong>, qui peut être positif, négatif ou nul. Rien n\'oblige donc à refaire le calcul.<br/><br/>Son signe se lit sur la formule $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$ : les deux normes sont toujours positives, donc le signe du produit scalaire est exactement celui de $\\cos\\theta$.<br/><br/>Un résultat <strong>négatif</strong> signifie $\\cos\\theta < 0$, c\'est-à-dire un angle <strong>obtus</strong> : les deux vecteurs pointent grossièrement en sens contraires. Un résultat <strong>nul</strong> signifie des vecteurs perpendiculaires, et c\'est d\'ailleurs le critère d\'orthogonalité du cours.<br/><br/>En physique, ce signe a un sens très concret : un travail négatif est celui d\'une force qui <strong>freine</strong> le mouvement, comme un frottement.'
        }
      ]
    }
  });
