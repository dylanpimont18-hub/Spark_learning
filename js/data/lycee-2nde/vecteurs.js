/* =========================================================
   Spark Learning – data/lycee-2nde/vecteurs.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'vecteurs',
    level: 2, subject: 'maths',
    icon: '🎯',
    title: 'Vecteurs 2D et Projection Orthogonale',
    subtitle: 'Composantes, projection, signe et sens',
    keywords: ['Norme', 'Projection', 'Coordonnées', 'Bilan des forces'],
    physics: '2ème loi de Newton, plan incliné, bilan des forces',

    cours: {
      /* « Découvrir » RÉÉCRIT le 2026-09-13 (chapitre pilote de la seconde).
         L'ancienne version ouvrait sur « Un vecteur possède à la fois une
         valeur, une direction et un sens » : c'est la DÉFINITION, donc
         exactement ce que le cahier des charges (section 10) proscrit en
         ouverture. Le test appliqué : « peut-on répondre à la question
         d'ouverture sans la notion du chapitre ? » — ici on ne le pouvait même
         pas, faute de question.

         La situation retenue est celle où un nombre seul ÉCHOUE, ce qui est la
         raison d'être du vecteur : deux randonneurs qui marchent la même
         distance depuis le même point n'arrivent pas au même endroit. Aucune
         longueur ne distingue leurs trajets ; il faut donc un objet qui porte
         AUSSI la direction et le sens. La notion est la seule réponse
         possible, et l'entrée n'est pas décorative : c'est la difficulté
         réelle du chapitre. */
      intro: 'Deux randonneurs partent du même refuge et marchent chacun exactement $4$ km. Le soir, ils sont à $6$ km l\'un de l\'autre.<br/><br/>' +
        'Leurs deux déplacements ont pourtant la même longueur. Si tu ne notes que « $4$ km », tu perds définitivement ce qui les sépare : la <strong>direction</strong> suivie et le <strong>sens</strong> dans lequel elle est parcourue. Un nombre seul ne peut pas décrire un déplacement.<br/><br/>' +
        'C\'est précisément ce qu\'un <strong>vecteur</strong> vient combler. Il retient trois informations à la fois — une direction, un sens et une longueur appelée <strong>norme</strong> — là où un nombre n\'en retenait qu\'une.<br/><br/>' +
        'Et voici ce qui surprend le plus au début : un vecteur ne dit <strong>pas où l\'on est</strong>, il dit <strong>comment on se déplace</strong>. Deux randonneurs partis d\'endroits différents mais qui marchent dans la même direction, dans le même sens et sur la même distance effectuent le <strong>même</strong> déplacement, donc portent le même vecteur. C\'est le point qui déroute toute l\'année, et tout le chapitre consiste à s\'y habituer.<br/><br/>' +
        'Une fois l\'objet en main, on apprend à le lire en <strong>composantes</strong> dans un repère, ce qui transforme chaque question de géométrie en calcul — et, en physique, permet de projeter forces et vitesses sur des axes.',
      definitions: [
        { term: 'Vecteur', def: 'Objet mathématique caractérisé par une direction, un sens et une norme (valeur). Notation : $\\vec{F}$.' },
        { term: 'Norme', def: 'Valeur (longueur) du vecteur : $\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$. Toujours positive ou nulle.' },
        { term: 'Composante', def: 'Projection d\'un vecteur sur un axe. $F_x$ est la composante horizontale, $F_y$ la composante verticale.' },
        { term: 'Projection orthogonale', def: 'Opération qui décompose un vecteur oblique en deux composantes perpendiculaires, une sur chaque axe du repère.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Le signe</strong> : regarder le sens du vecteur par rapport à l\'axe. S\'il pointe dans le sens positif de l\'axe, la composante est positive. S\'il pointe en sens inverse, elle est négative. <strong>Exemple :</strong> Une force $\\vec{F}$ pointe vers la gauche (sens négatif de $Ox$) → $F_x < 0$.',
          '<strong>L\'angle</strong> : repérer l\'angle $\\theta$ entre le vecteur et l\'axe de référence. Le côté "qui touche" l\'angle $\\theta$ est adjacent (lié au cosinus). L\'autre est opposé (lié au sinus). <strong>Exemple :</strong> Si $\\theta = 30°$ entre $\\vec{F}$ et $Ox$, le côté le long de $Ox$ est adjacent → on utilise $\\cos(30°)$ pour $F_x$.',
          '<strong>La formule</strong> : $F_x = \\pm F \\cdot \\cos(\\theta)$ et $F_y = \\pm F \\cdot \\sin(\\theta)$ si $\\theta$ est l\'angle avec l\'axe $Ox$. <strong>Exemple :</strong> $F = 10$ N, $\\theta = 60°$ → $F_x = 10\\cos(60°) = 5$ N, $F_y = 10\\sin(60°) \\approx 8{,}66$ N.'
        ]
      },
      example: {
        statement: 'Un câble tire un traîneau avec une force $\\vec{T}$ de norme $T = 50$ N, inclinée de $\\theta = 30°$ au-dessus de l\'horizontale. Déterminer les composantes $T_x$ et $T_y$.',
        steps: [
          'Le vecteur pointe vers la droite et le haut → les deux composantes sont positives.',
          '$T_x = T \\cos(\\theta) = 50 \\times \\cos(30°) = 50 \\times 0{,}866 \\approx 43{,}3$ N (composante horizontale qui fait avancer le traîneau).',
          '$T_y = T \\sin(\\theta) = 50 \\times \\sin(30°) = 50 \\times 0{,}5 = 25$ N (composante verticale qui allège le traîneau).'
        ],
        answer: '$T_x \\approx 43{,}3$ N et $T_y = 25$ N.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Projection d\'une force inclinée',
        title: 'Le câble tire le traîneau : $T = 50$ N à $30°$ (exemple du cours)',
        description: 'Décomposition du vecteur $\\vec{T}$ en ses composantes $T_x$ et $T_y$, tracées en pointillés jusqu\'aux axes.',
        svg: `
          <svg viewBox="0 0 320 240" role="img" aria-labelledby="vecteurs-diagram-title vecteurs-diagram-desc">
            <title id="vecteurs-diagram-title">Vecteur force incline avec projections</title>
            <desc id="vecteurs-diagram-desc">Vecteur T de norme 50 newtons incline de 30 degres au-dessus de l'horizontale, avec ses projections Tx = 43,3 N et Ty = 25 N tracees en pointilles jusqu'aux axes.</desc>
            <defs>
              <marker id="arrow-2nde-vecteurs" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <line class="axis" x1="30" y1="200" x2="280" y2="200" marker-end="url(#arrow-2nde-vecteurs)"></line>
            <line class="axis" x1="60" y1="220" x2="60" y2="30" marker-end="url(#arrow-2nde-vecteurs)"></line>
            <text class="axis-label" x="284" y="204">x</text>
            <text class="axis-label" x="50" y="26" text-anchor="end">y</text>
            <text class="tick-label" x="52" y="214" text-anchor="middle">O</text>

            <line class="guide-line" x1="190" y1="125" x2="190" y2="200"></line>
            <line class="guide-line" x1="190" y1="125" x2="60" y2="125"></line>

            <path class="guide-line" d="M90 200 A 30 30 0 0 0 86 185" fill="none"></path>
            <text class="annotation-label" x="96" y="192">θ = 30°</text>

            <line class="curve-main" x1="60" y1="200" x2="190" y2="125" marker-end="url(#arrow-2nde-vecteurs)"></line>
            <circle class="plot-point" cx="190" cy="125" r="4"></circle>
            <text class="annotation-label" x="196" y="116">T = 50 N</text>

            <circle class="plot-point-alt" cx="190" cy="200" r="3"></circle>
            <circle class="plot-point-alt" cx="60" cy="125" r="3"></circle>
            <text class="tick-label" x="125" y="215" text-anchor="middle">Tx = 43,3 N</text>
            <text class="tick-label" x="10" y="121" text-anchor="start">Ty = 25 N</text>
          </svg>
        `,
        notes: [
          'La composante horizontale $T_x = T\\cos(\\theta) = 50 \\times \\cos(30°) \\approx 43{,}3$ N est le côté adjacent à l\'angle $\\theta$.',
          'La composante verticale $T_y = T\\sin(\\theta) = 50 \\times \\sin(30°) = 25$ N est le côté opposé à l\'angle $\\theta$.',
          'Vérification par Pythagore : $\\sqrt{T_x^2+T_y^2} = \\sqrt{43{,}3^2+25^2} \\approx 50$ N $= T$ ✓',
          'Le signe des composantes dépend du quadrant visé par le vecteur : I (haut-droite) → $+,+$ ; II (haut-gauche) → $-,+$ ; III (bas-gauche) → $-,-$ ; IV (bas-droite) → $+,-$.'
        ],
        reading: 'Les pointillés horizontaux et verticaux montrent comment le vecteur incliné se « range » sur les deux axes : c\'est la projection orthogonale.',
        caption: 'Câble tirant un traîneau : $\\vec{T}$ de norme $50$ N, incliné de $30°$ au-dessus de l\'horizontale (exemple du cours).'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-13 (chapitre pilote de la
         seconde). Principe directeur du cahier des charges (section 9) : une
         figure par MALENTENDU, pas une figure par formule.

         Les trois malentendus retenus sont ceux qui coûtent l'année entière :
           1. un vecteur n'est pas attaché à un point de départ ;
           2. un vecteur n'est ni un point ni un segment ;
           3. additionner deux vecteurs, ce n'est pas additionner deux nombres.

         TOUTES les coordonnées ci-dessous sont CALCULÉES, jamais posées à
         l'œil, et vérifiées par scripts/manuel/tests/diagrams-2nde.test.js :
         composantes strictement égales pour les représentants d'un même
         vecteur, relation de Chasles exacte, non-alignement des points, et
         appartenance au viewBox. Le calcul a d'ailleurs rattrapé une faute
         invisible pendant la rédaction : le point B du schéma 2 tombait à
         l'abscisse 344 dans un viewBox large de 320, donc hors cadre. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le malentendu fondateur',
          title: 'Un même vecteur, trois endroits différents',
          description: 'Ces trois flèches représentent le <strong>même</strong> vecteur $\\vec{u}$. Elles ne partent pourtant pas du même point. Un vecteur décrit un <strong>déplacement</strong>, pas une position : le lieu d\'où on le dessine ne fait pas partie de l\'information.',
          svg: `
            <svg viewBox="0 0 320 240" role="img" aria-labelledby="vect-repr-title vect-repr-desc">
              <title id="vect-repr-title">Trois representants du meme vecteur</title>
              <desc id="vect-repr-desc">Un quadrillage porte trois fleches identiques. Chacune avance de trois graduations vers la droite et descend de deux graduations. Elles partent de trois endroits differents du quadrillage, mais elles ont exactement la meme longueur, la meme direction et le meme sens. Ce sont donc trois representants d'un seul et meme vecteur, dont les composantes valent trois et moins deux.</desc>
              <defs>
                <marker id="fl-vect-repr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- Quadrillage de reference, pas de 30 unites = 1 graduation.
                   Il sert a LIRE les composantes : sans lui, « trois a droite,
                   deux en bas » ne serait pas verifiable par l'eleve. -->
              <line class="grid-line" x1="20" y1="20" x2="20" y2="230"></line>
              <line class="grid-line" x1="50" y1="20" x2="50" y2="230"></line>
              <line class="grid-line" x1="80" y1="20" x2="80" y2="230"></line>
              <line class="grid-line" x1="110" y1="20" x2="110" y2="230"></line>
              <line class="grid-line" x1="140" y1="20" x2="140" y2="230"></line>
              <line class="grid-line" x1="170" y1="20" x2="170" y2="230"></line>
              <line class="grid-line" x1="200" y1="20" x2="200" y2="230"></line>
              <line class="grid-line" x1="230" y1="20" x2="230" y2="230"></line>
              <line class="grid-line" x1="260" y1="20" x2="260" y2="230"></line>
              <line class="grid-line" x1="20" y1="20" x2="290" y2="20"></line>
              <line class="grid-line" x1="20" y1="50" x2="290" y2="50"></line>
              <line class="grid-line" x1="20" y1="80" x2="290" y2="80"></line>
              <line class="grid-line" x1="20" y1="110" x2="290" y2="110"></line>
              <line class="grid-line" x1="20" y1="140" x2="290" y2="140"></line>
              <line class="grid-line" x1="20" y1="170" x2="290" y2="170"></line>
              <line class="grid-line" x1="20" y1="200" x2="290" y2="200"></line>
              <line class="grid-line" x1="20" y1="230" x2="290" y2="230"></line>

              <!-- Les trois representants. Origines distinctes, composantes
                   RIGOUREUSEMENT identiques : +90 en x, +60 en y de viewBox,
                   soit (3 ; -2) a l'echelle de 30 unites par graduation. -->
              <line class="curve-main" x1="50" y1="170" x2="140" y2="230" marker-end="url(#fl-vect-repr)"></line>
              <line class="curve-main" x1="170" y1="80" x2="260" y2="140" marker-end="url(#fl-vect-repr)"></line>
              <line class="curve-main" x1="80" y1="50" x2="170" y2="110" marker-end="url(#fl-vect-repr)"></line>

              <text class="annotation-label" x="88" y="196">u</text>
              <text class="annotation-label" x="208" y="106">u</text>
              <text class="annotation-label" x="118" y="76">u</text>
            </svg>
          `,
          notes: [
            'Chaque flèche avance de $3$ graduations vers la droite et descend de $2$ graduations : ses composantes sont $\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$.',
            'Les trois flèches ont la même <strong>direction</strong>, le même <strong>sens</strong> et la même <strong>norme</strong> : par définition, elles représentent le même vecteur.',
            'Le point de départ n\'apparaît nulle part dans les composantes — c\'est bien qu\'il ne fait pas partie du vecteur.'
          ],
          reading: 'Pose ton doigt au départ de chaque flèche et compte : $3$ carreaux vers la droite, puis $2$ carreaux vers le bas. Tu comptes la même chose trois fois, alors que tu es parti de trois endroits différents. Voilà pourquoi on dit que c\'est <strong>un seul</strong> vecteur, et non trois.',
          caption: 'Trois représentants du même vecteur $\\vec{u}$ de composantes $(3\\,;\\,-2)$.'
        },
        {
          theme: 'maths',
          kicker: 'Le piège du chapitre',
          title: 'Un point dit où ; un vecteur dit comment on bouge',
          description: 'L\'erreur la plus coûteuse de l\'année consiste à confondre le point $A$ et le vecteur $\\vec{AB}$. Les deux vignettes sont à la <strong>même échelle</strong> et $A$ y occupe la <strong>même place</strong> : la seule différence visible est la nature de l\'objet.',
          svg: `
            <svg viewBox="0 0 320 176" role="img" aria-labelledby="vect-piege-title vect-piege-desc">
              <title id="vect-piege-title">Un point compare a un vecteur</title>
              <desc id="vect-piege-desc">A gauche, le point A de coordonnees quatre et trois est marque par un simple rond : il indique une position dans le plan. A droite, sur un dessin de meme echelle et ou le point A occupe la meme hauteur, une fleche part de A et rejoint le point B de coordonnees sept et un. Cette fleche est le vecteur AB. Elle ne designe aucune position : elle decrit le deplacement qui mene de A vers B, soit trois graduations vers la droite et deux graduations vers le bas.</desc>
              <defs>
                <marker id="fl-vect-piege" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- Vignette GAUCHE : le point. Echelle 18 unites par graduation,
                   identique a droite (patron « comparaison » : l'echelle ne
                   doit jamais etre une des differences visibles). -->
              <text class="annotation-label" x="80" y="24" text-anchor="middle">une position</text>
              <line class="axis" x1="26" y1="150" x2="140" y2="150"></line>
              <line class="axis" x1="26" y1="150" x2="26" y2="42"></line>
              <circle class="plot-point" cx="98" cy="96" r="4"></circle>
              <text class="tick-label" x="106" y="90" text-anchor="start">A</text>
              <text class="label-soft" x="80" y="170" text-anchor="middle">le point A</text>

              <!-- Vignette DROITE : le vecteur. Meme echelle, A a la MEME
                   ordonnee (96) qu'a gauche. -->
              <text class="annotation-label" x="240" y="24" text-anchor="middle">un deplacement</text>
              <line class="axis" x1="186" y1="150" x2="300" y2="150"></line>
              <line class="axis" x1="186" y1="150" x2="186" y2="42"></line>
              <circle class="plot-point-alt" cx="258" cy="96" r="3"></circle>
              <circle class="plot-point-alt" cx="312" cy="132" r="3"></circle>
              <line class="curve-main" x1="258" y1="96" x2="312" y2="132" marker-end="url(#fl-vect-piege)"></line>
              <text class="tick-label" x="250" y="90" text-anchor="end">A</text>
              <text class="tick-label" x="308" y="126" text-anchor="end">B</text>
              <text class="label-soft" x="240" y="170" text-anchor="middle">le vecteur AB</text>
            </svg>
          `,
          notes: [
            'À gauche, $A(4\\,;\\,3)$ : deux nombres qui disent <strong>où</strong> se trouve un point.',
            'À droite, $\\vec{AB}$ de composantes $\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$ : deux nombres qui disent <strong>de combien</strong> on se déplace.',
            'Les deux objets s\'écrivent avec deux nombres, et c\'est exactement ce qui rend la confusion si facile. Ce ne sont pourtant pas les mêmes deux nombres, et ils ne répondent pas à la même question.'
          ],
          reading: 'Déplace mentalement la flèche de droite ailleurs dans le plan : elle reste le même vecteur. Déplace maintenant le rond de gauche : il devient un <strong>autre</strong> point. C\'est là toute la différence, et tu peux t\'en servir comme test chaque fois que tu hésites.',
          caption: 'Le point $A(4\\,;\\,3)$ et le vecteur $\\vec{AB}$ de composantes $(3\\,;\\,-2)$, à la même échelle.'
        },
        {
          theme: 'maths',
          kicker: 'Enchaîner deux déplacements',
          title: 'La relation de Chasles se lit sur le dessin',
          description: 'Aller de $A$ à $B$, puis de $B$ à $C$, revient à aller directement de $A$ à $C$. C\'est tout ce que dit la relation $\\vec{AB} + \\vec{BC} = \\vec{AC}$ — et elle se vérifie ici en comptant des carreaux.',
          svg: `
            <svg viewBox="0 0 320 240" role="img" aria-labelledby="vect-chasles-title vect-chasles-desc">
              <title id="vect-chasles-title">La relation de Chasles sur trois points</title>
              <desc id="vect-chasles-desc">Trois points A, B et C ne sont pas alignes. Une fleche va de A vers B en avancant de quatre graduations vers la droite et deux vers le haut. Une deuxieme fleche va de B vers C en avancant de deux graduations vers la droite et trois vers le haut. Une troisieme fleche, tracee en tirets, joint directement A a C en avancant de six graduations vers la droite et cinq vers le haut. Les composantes de la troisieme fleche sont exactement la somme des composantes des deux premieres.</desc>
              <defs>
                <marker id="fl-vect-chasles" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- Quadrillage, pas de 26 unites = 1 graduation. -->
              <line class="grid-line" x1="30" y1="28" x2="30" y2="210"></line>
              <line class="grid-line" x1="82" y1="28" x2="82" y2="210"></line>
              <line class="grid-line" x1="134" y1="28" x2="134" y2="210"></line>
              <line class="grid-line" x1="186" y1="28" x2="186" y2="210"></line>
              <line class="grid-line" x1="238" y1="28" x2="238" y2="210"></line>
              <line class="grid-line" x1="30" y1="210" x2="290" y2="210"></line>
              <line class="grid-line" x1="30" y1="158" x2="290" y2="158"></line>
              <line class="grid-line" x1="30" y1="106" x2="290" y2="106"></line>
              <line class="grid-line" x1="30" y1="54" x2="290" y2="54"></line>

              <!-- Les deux etapes, en trait plein et teinte d'accent : c'est le
                   chemin reellement parcouru. -->
              <line class="curve-main" x1="56" y1="184" x2="160" y2="132" marker-end="url(#fl-vect-chasles)"></line>
              <line class="curve-main" x1="160" y1="132" x2="212" y2="54" marker-end="url(#fl-vect-chasles)"></line>

              <!-- Le raccourci, en TIRETS et en teinte faible : il n'est pas
                   parcouru, il est le resultat. La hierarchie de trait dit
                   lequel des deux est le chemin et lequel est la somme. -->
              <line class="guide-line" x1="56" y1="184" x2="212" y2="54" marker-end="url(#fl-vect-chasles)"></line>

              <circle class="plot-point" cx="56" cy="184" r="4"></circle>
              <circle class="plot-point" cx="160" cy="132" r="4"></circle>
              <circle class="plot-point" cx="212" cy="54" r="4"></circle>
              <text class="tick-label" x="48" y="198" text-anchor="end">A</text>
              <text class="tick-label" x="166" y="146" text-anchor="start">B</text>
              <text class="tick-label" x="220" y="48" text-anchor="start">C</text>

              <text class="annotation-label" x="96" y="146">AB</text>
              <text class="annotation-label" x="192" y="100">BC</text>
              <text class="label-soft" x="112" y="106" text-anchor="middle">AC</text>
            </svg>
          `,
          notes: [
            '$\\vec{AB}$ a pour composantes $\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$ et $\\vec{BC}$ a pour composantes $\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$.',
            'Leur somme vaut $\\begin{pmatrix} 4+2 \\\\ 2+3 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 5 \\end{pmatrix}$, qui est exactement le couple de composantes de $\\vec{AC}$.',
            'Remarque la lettre qui disparaît : dans $\\vec{AB} + \\vec{BC} = \\vec{AC}$, le $B$ d\'arrivée du premier et le $B$ de départ du second s\'annulent. C\'est le repère le plus sûr pour appliquer la relation sans se tromper.'
          ],
          reading: 'Suis le chemin plein : tu passes par $B$. Suis maintenant le chemin en tirets : tu vas droit au but. Tu arrives au même endroit dans les deux cas, et c\'est pour cela que les composantes s\'additionnent. Attention cependant : les <strong>longueurs</strong>, elles, ne s\'additionnent pas — le détour par $B$ est plus long que le trajet direct.',
          caption: 'Relation de Chasles : $\\vec{AB} + \\vec{BC} = \\vec{AC}$, vérifiée sur les composantes.'
        }
      ],
      formulas: [
        '$F_x = F \\cdot \\cos(\\theta)$ (si $\\theta$ est l\'angle avec $Ox$)',
        '$F_y = F \\cdot \\sin(\\theta)$ (si $\\theta$ est l\'angle avec $Ox$)',
        '$\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$ (norme = théorème de Pythagore)',
        '$\\theta = \\arctan\\left(\\dfrac{F_y}{F_x}\\right)$ (retrouver l\'angle depuis les composantes)'
      ],
      recap: [
        'Un vecteur se décompose en deux composantes perpendiculaires via la projection orthogonale.',
        'Côté adjacent à $\\theta$ → cosinus ; côté opposé → sinus. Le signe dépend du sens par rapport à l\'axe.',
        'Sur un plan incliné d\'angle $\\alpha$ : composante parallèle $= P\\sin(\\alpha)$, perpendiculaire $= P\\cos(\\alpha)$.',
        'La norme se retrouve par Pythagore : $\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$.'
      ],
      piege: 'Piège du plan incliné : si l\'angle du plan est $\\alpha$ (avec l\'horizontale), et que le poids est vertical, alors la composante du poids PARALLÈLE au plan est $P \\cdot \\sin(\\alpha)$ et PERPENDICULAIRE au plan est $P \\cdot \\cos(\\alpha)$. L\'angle "se retourne" par rapport à l\'intuition !'
    },

    quiz: [
      {
        q: 'Une force $\\vec{F}$ de norme $20$ N est dirigée vers le haut, à $30°$ par rapport à la verticale. Sa composante horizontale $F_x$ est :',
        options: [
          '$F_x = 20\\sin(30°) = 10$ N',
          '$F_x = 20\\cos(30°) \\approx 17{,}3$ N',
          '$F_x = 20\\tan(30°) \\approx 11{,}5$ N',
          '$F_x = 0$ N (force quasi-verticale)'
        ],
        answer: 0,
        correction: 'L\'angle $30°$ est mesuré par rapport à la verticale. La composante horizontale est le côté OPPOSÉ à cet angle, donc $F_x = F\\sin(30°) = 20 \\times 0{,}5 = 10$ N. Si l\'angle était par rapport à l\'horizontale, on utiliserait $\\cos$. La règle : l\'angle de référence détermine si on utilise sinus (opposé) ou cosinus (adjacent).'
      },
      {
        q: 'Un vecteur pointe vers le bas et la gauche (3ème quadrant). Ses composantes $F_x$ et $F_y$ sont :',
        options: [
          'Toutes deux positives',
          'Toutes deux négatives',
          '$F_x$ positive, $F_y$ négative',
          '$F_x$ négative, $F_y$ positive'
        ],
        answer: 1,
        correction: 'Un vecteur pointant vers le bas-gauche va dans le sens contraire de l\'axe $Ox$ (positif = droite) et de l\'axe $Oy$ (positif = haut). Donc $F_x < 0$ et $F_y < 0$.'
      },
      {
        q: 'Un skieur sur un plan incliné à $\\alpha = 30°$. La composante du poids $\\vec{P}$ parallèle au plan (vers le bas du plan) vaut :',
        options: [
          '$P \\cdot \\cos(30°)$',
          '$P \\cdot \\sin(30°)$',
          '$P \\cdot \\tan(30°)$',
          '$P / \\cos(30°)$'
        ],
        answer: 1,
        correction: 'En prenant l\'axe $Ox$ parallèle au plan, l\'angle entre le poids (vertical) et l\'axe $Oy$ (normal au plan) est $\\alpha$. Donc la composante parallèle au plan est $P \\cdot \\sin(\\alpha)$.'
      },
      {
        q: 'Un objet de poids $\\vec{P}$ est sur un plan incliné à $\\alpha = 45°$. On a $P_{\\parallel} = P\\sin(45°)$ et $P_{\\perp} = P\\cos(45°)$. Que peut-on en déduire ?',
        options: [
          '$P_{\\parallel} = P_{\\perp}$ car $\\sin(45°) = \\cos(45°)$',
          '$P_{\\parallel} > P_{\\perp}$ car le sinus est toujours plus grand',
          '$P_{\\parallel} < P_{\\perp}$ car le cosinus est toujours plus grand',
          'On ne peut pas comparer sans connaître la valeur de $P$'
        ],
        answer: 0,
        correction: '$\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2}$, donc $P_{\\parallel} = P_{\\perp}$. C\'est le seul angle où les deux composantes sont égales. Pour $\\alpha < 45°$, la composante perpendiculaire domine ; pour $\\alpha > 45°$, c\'est la composante parallèle.'
      },
      {
        q: 'On donne $F_x = 8$ N et $F_y = -6$ N. Dans quel quadrant pointe le vecteur $\\vec{F}$ et quelle est sa norme ?',
        options: [
          '4ème quadrant (bas-droite), $\\|\\vec{F}\\| = 10$ N',
          '2ème quadrant (haut-gauche), $\\|\\vec{F}\\| = 10$ N',
          '4ème quadrant (bas-droite), $\\|\\vec{F}\\| = 14$ N',
          '1er quadrant (haut-droite), $\\|\\vec{F}\\| = 2$ N'
        ],
        answer: 0,
        correction: '$F_x > 0$ (droite) et $F_y < 0$ (bas) → 4ème quadrant. $\\|\\vec{F}\\| = \\sqrt{8^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$ N. Attention : la norme utilise Pythagore, pas la somme simple des composantes.'
      }
    ],

    /* GÉNÉRATEUR ÉLARGI le 2026-09-13 (chapitre pilote de la seconde).
       Mesure AVANT : 12 énoncés tirés, 4 moules, mais **1 seule tâche
       distincte** — les quatre moules ne différaient que par l'habillage
       (« un câble tire un chariot », « un hélicoptère exerce une traction »),
       et tous posaient mot pour mot la même question. C'est exactement le
       défaut que le cahier des charges (section 11) demande de mesurer sur la
       TÂCHE et non sur le moule : six décors d'une même question donnent six
       moules et un seul exercice réel.

       DEUX ERREURS DE CONTENU corrigées au passage, révélées par cet
       élargissement (le défaut existait, il était invisible) :

       1. Les contextes « par rapport à la verticale » donnaient une réponse
          FAUSSE. Quand l'angle est mesuré depuis la VERTICALE, la composante
          horizontale vaut $F\\sin(\\theta)$, pas $F\\cos(\\theta)$ — c'est le
          côté opposé à l'angle. Le générateur appliquait le cosinus dans tous
          les cas, donc un énoncé sur quatre était corrigé à l'envers. Le quiz
          du chapitre enseigne d'ailleurs le contraire (question 1), ce qui
          rendait le manuel contradictoire avec lui-même.

       2. « sous l'horizontale » décrit un vecteur pointant vers le BAS, donc
          de composante verticale NÉGATIVE. L'ancienne solution affichait
          toujours $F_y$ positif.

       Les six tâches ci-dessous se distinguent par ce qu'on DEMANDE, pas par
       le décor : projeter depuis l'horizontale, projeter depuis la verticale,
       remonter des composantes à la norme, remonter à l'angle, projeter un
       poids sur un plan incliné, reconnaître le quadrant. */
    exercice: {
      type: 'numeric',
      generate() {
        const angles = [30, 45, 60];
        const COS = { 30: Math.sqrt(3) / 2, 45: Math.sqrt(2) / 2, 60: 0.5 };
        const SIN = { 30: 0.5, 45: Math.sqrt(2) / 2, 60: Math.sqrt(3) / 2 };
        const r2 = (v) => parseFloat(v.toFixed(2));

        const tache = pick(['horizontale', 'verticale', 'norme', 'angle', 'incline', 'quadrant']);

        /* Tâche 1 — projeter quand l'angle part de l'HORIZONTALE.
           La composante horizontale est alors le côté ADJACENT : cosinus. */
        if (tache === 'horizontale') {
          const ctx = pick([
            'Un câble tire un chariot',
            'Un remorqueur tracte un bateau',
            'Un cerf-volant tire sur sa ligne'
          ]);
          const angle = pick(angles);
          const F = rand(10, 50);
          const Fx = r2(F * COS[angle]);
          const Fy = r2(F * SIN[angle]);
          return {
            statement: `${ctx} avec une force $\\vec{F}$ de norme $F = ${F}$ N, inclinée de $\\theta = ${angle}°$ <strong>au-dessus de l\'horizontale</strong>.<br/><br/>Calcule la composante horizontale $F_x$ (arrondie au centième).`,
            answer: Fx, tolerance: 0.1, unit: 'N',
            hint: `L\'angle est mesuré depuis l\'horizontale : la composante horizontale est le côté <em>adjacent</em>, donc $F_x = F\\cos(\\theta)$. Rappel : $\\cos(${angle}°) \\approx ${fr(COS[angle], 3)}$.`,
            solution: [
              `L\'angle part de l\'horizontale, donc $F_x$ est le côté adjacent : $F_x = F\\cos(\\theta)$.`,
              `$F_x = ${F} \\times \\cos(${angle}°) = ${F} \\times ${fr(COS[angle], 3)} \\approx ${fr(Fx)}$ N`,
              `Au passage, la composante verticale vaut $F_y = F\\sin(\\theta) \\approx ${fr(Fy)}$ N.`
            ]
          };
        }

        /* Tâche 2 — projeter quand l'angle part de la VERTICALE.
           Les rôles s'échangent : la composante horizontale devient le côté
           OPPOSÉ, donc le sinus. C'est le piège le plus fréquent du chapitre,
           et c'est celui que l'ancien générateur corrigeait à l'envers. */
        if (tache === 'verticale') {
          const ctx = pick([
            'Une grue soulève une poutre',
            'Un hauban de mât retient un voilier',
            'Un pendule est écarté de sa position d\'équilibre'
          ]);
          const angle = pick(angles);
          const F = rand(10, 50);
          const Fx = r2(F * SIN[angle]);
          const Fy = r2(F * COS[angle]);
          return {
            statement: `${ctx} avec une force $\\vec{F}$ de norme $F = ${F}$ N, faisant un angle $\\theta = ${angle}°$ <strong>avec la verticale</strong>.<br/><br/>Calcule la composante horizontale $F_x$ (arrondie au centième).`,
            answer: Fx, tolerance: 0.1, unit: 'N',
            hint: `Attention : l\'angle part ici de la <em>verticale</em>. La composante horizontale est donc le côté <em>opposé</em> à $\\theta$, et c\'est le sinus qui s\'applique : $F_x = F\\sin(\\theta)$.`,
            solution: [
              `L\'angle part de la verticale, donc les rôles du sinus et du cosinus s\'échangent : $F_x$ est le côté opposé à $\\theta$.`,
              `$F_x = F\\sin(\\theta) = ${F} \\times ${fr(SIN[angle], 3)} \\approx ${fr(Fx)}$ N`,
              `La composante verticale, elle, est le côté adjacent : $F_y = F\\cos(\\theta) \\approx ${fr(Fy)}$ N.`
            ]
          };
        }

        /* Tâche 3 — le chemin INVERSE : des composantes vers la norme.
           On tire dans des triplets pythagoriciens pour que la norme tombe
           juste : l'élève doit reconnaître Pythagore, pas peiner sur la
           racine. */
        if (tache === 'norme') {
          const triplets = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17]];
          const t = pick(triplets);
          const signeX = pick([1, -1]), signeY = pick([1, -1]);
          const Fx = signeX * t[0], Fy = signeY * t[1];
          return {
            statement: `Un vecteur $\\vec{F}$ a pour composantes $F_x = ${Fx}$ N et $F_y = ${Fy}$ N.<br/><br/>Calcule sa norme $\\|\\vec{F}\\|$ (en N).`,
            answer: t[2], tolerance: 0.01, unit: 'N',
            hint: `La norme se calcule par Pythagore : $\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$. Un carré est toujours positif, le signe des composantes disparaît donc du calcul.`,
            solution: [
              `La norme se calcule par Pythagore : $\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$.`,
              `$\\|\\vec{F}\\| = \\sqrt{(${Fx})^2 + (${Fy})^2} = \\sqrt{${t[0] * t[0]} + ${t[1] * t[1]}} = \\sqrt{${t[2] * t[2]}} = ${t[2]}$ N`,
              `Remarque : la norme est toujours positive, même quand les deux composantes sont négatives.`
            ]
          };
        }

        /* Tâche 4 — retrouver l'ANGLE à partir des composantes. */
        if (tache === 'angle') {
          const angle = pick(angles);
          const F = rand(20, 60);
          const Fx = r2(F * COS[angle]);
          const Fy = r2(F * SIN[angle]);
          return {
            statement: `Un vecteur $\\vec{F}$ du premier quadrant a pour composantes $F_x = ${fr(Fx)}$ N et $F_y = ${fr(Fy)}$ N.<br/><br/>Calcule l\'angle $\\theta$ que ce vecteur fait avec l\'axe horizontal (en degrés, arrondi au degré).`,
            answer: angle, tolerance: 1, unit: '°',
            hint: `Le rapport $\\dfrac{F_y}{F_x}$ est la tangente de l\'angle cherché. On remonte ensuite à $\\theta$ par $\\arctan$.`,
            solution: [
              `On utilise la tangente : $\\tan(\\theta) = \\dfrac{F_y}{F_x} = \\dfrac{${fr(Fy)}}{${fr(Fx)}} \\approx ${fr(r2(Fy / Fx), 3)}$.`,
              `D\'où $\\theta = \\arctan(${fr(r2(Fy / Fx), 3)}) \\approx ${angle}°$.`,
              `Contrôle de bon sens : ici $F_y ${Fy > Fx ? '>' : '<'} F_x$, donc l\'angle devait être ${Fy > Fx ? 'supérieur' : 'inférieur'} à $45°$ — ce qui est bien le cas.`
            ]
          };
        }

        /* Tâche 5 — le plan incliné, où l'angle « se retourne ».
           Composante du poids PARALLÈLE au plan : $P\\sin(\\alpha)$. */
        if (tache === 'incline') {
          /* L'accord se joue sur le SUPPORT, pas sur le sujet : « une piste
             inclinée », « une rampe inclinée », « un plan incliné ». On tire
             donc la phrase entière plutôt qu'un sujet recollé à une queue
             figée — l'ancienne construction produisait « un plan incliné
             inclinée », faute visible en page. */
          const ctx = pick([
            `Un skieur descend une piste inclinée d'un angle $\\alpha = ${'%ANGLE%'}°$ par rapport à l'horizontale`,
            `Une caisse est posée sur une rampe inclinée d'un angle $\\alpha = ${'%ANGLE%'}°$ par rapport à l'horizontale`,
            `Un chariot repose sur un plan incliné d'un angle $\\alpha = ${'%ANGLE%'}°$ par rapport à l'horizontale`
          ]);
          const alpha = pick(angles);
          const P = rand(10, 40) * 10;
          const Ppar = r2(P * SIN[alpha]);
          const Pperp = r2(P * COS[alpha]);
          return {
            statement: `${ctx.replace('%ANGLE%', alpha)}. Le poids vaut $P = ${P}$ N (vertical, vers le bas).<br/><br/>Calcule la composante du poids <strong>parallèle au plan</strong> (en N, arrondie au centième).`,
            answer: Ppar, tolerance: 0.5, unit: 'N',
            hint: `Sur un plan incliné d\'angle $\\alpha$, la composante du poids parallèle au plan vaut $P\\sin(\\alpha)$ et la composante perpendiculaire $P\\cos(\\alpha)$. L\'angle « se retourne » par rapport à l\'intuition.`,
            solution: [
              `Les axes sont inclinés, mais le poids reste vertical : c\'est là que l\'angle se retourne.`,
              `Composante parallèle au plan : $P_{\\parallel} = P\\sin(\\alpha) = ${P} \\times ${fr(SIN[alpha], 3)} \\approx ${fr(Ppar)}$ N`,
              `Composante perpendiculaire : $P_{\\perp} = P\\cos(\\alpha) \\approx ${fr(Pperp)}$ N. C\'est elle qui presse l\'objet contre le support.`
            ]
          };
        }

        /* Tâche 6 — lire le QUADRANT à partir des signes, puis la norme.
           Réponse numérique = le numéro du quadrant : une tâche de lecture,
           sans aucun calcul trigonométrique. */
        const triplets = [[3, 4, 5], [6, 8, 10], [5, 12, 13]];
        const t = pick(triplets);
        const sx = pick([1, -1]), sy = pick([1, -1]);
        const Fx = sx * t[0], Fy = sy * t[1];
        const quadrant = sx > 0 ? (sy > 0 ? 1 : 4) : (sy > 0 ? 2 : 3);
        const nomQuadrant = { 1: 'haut-droite', 2: 'haut-gauche', 3: 'bas-gauche', 4: 'bas-droite' }[quadrant];
        return {
          statement: `Un vecteur $\\vec{F}$ a pour composantes $F_x = ${Fx}$ N et $F_y = ${Fy}$ N.<br/><br/>Dans quel quadrant pointe-t-il ? Réponds par son numéro ($1$, $2$, $3$ ou $4$), en numérotant dans le sens trigonométrique à partir du quadrant haut-droite.`,
          answer: quadrant, tolerance: 0.01, unit: '',
          hint: `Le signe de $F_x$ dit gauche ou droite, le signe de $F_y$ dit haut ou bas. Les quadrants se numérotent $1$ en haut à droite, puis $2$, $3$, $4$ dans le sens inverse des aiguilles d\'une montre.`,
          solution: [
            `$F_x = ${Fx}$ est ${Fx > 0 ? 'positif, donc le vecteur pointe vers la droite' : 'négatif, donc le vecteur pointe vers la gauche'}.`,
            `$F_y = ${Fy}$ est ${Fy > 0 ? 'positif, donc il pointe vers le haut' : 'négatif, donc il pointe vers le bas'}.`,
            `Le vecteur va donc vers le ${nomQuadrant} : c\'est le quadrant $${quadrant}$. Sa norme vaut par ailleurs $\\sqrt{${t[0] * t[0]} + ${t[1] * t[1]}} = ${t[2]}$ N.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un skieur de masse $m = 75$ kg descend une piste rectiligne inclinée d\'un angle $\\beta = 25°$ par rapport à l\'horizontale. On néglige les frottements. On prend $g = 9{,}81$ m/s². On choisit un repère avec $Ox$ parallèle à la pente (sens positif vers le bas) et $Oy$ perpendiculaire à la pente (sens positif vers l\'extérieur de la piste).',
      schema: 'Plan incliné à β=25°. Forces : poids P (vertical, vers le bas) ; réaction normale R (perpendiculaire au plan, vers le haut). Axes : Ox (le long du plan, vers le bas) ; Oy (perpendiculaire au plan).',
      tasks: [
        'Faire le bilan des forces. Projeter le poids $\\vec{P}$ sur les axes $Ox$ et $Oy$.',
        'Appliquer la 2ème loi de Newton en projection sur $Ox$ : $\\sum F_x = m a_x$.',
        'Calculer numériquement l\'accélération $a_x$ du skieur.'
      ],
      solutions: [
        'Bilan : $\\vec{P}$ (vertical, bas) et $\\vec{R}$ (normal au plan, haut). Projections du poids : $P_x = +P \\sin(\\beta) = mg\\sin(\\beta)$ et $P_y = -P\\cos(\\beta)$. Projection de $\\vec{R}$ : $R_x = 0$, $R_y = +R$.',
        'Newton sur $Ox$ : $P_x + R_x = ma_x \\Rightarrow mg\\sin(\\beta) + 0 = ma_x \\Rightarrow a_x = g\\sin(\\beta)$.',
        '$a_x = 9{,}81 \\times \\sin(25°) = 9{,}81 \\times 0{,}423 \\approx 4{,}14$ m/s².'
      ],
      finalAnswer: '$a_x \\approx 4{,}14$ m/s² (le long du plan, vers le bas)'
    },

    evaluation: {
      title: 'Évaluation — Vecteurs 2D et Projection Orthogonale',
      duration: '30 min',
      questions: [
        {
          statement: 'Une force $\\vec{F}$ de norme $F = 50$ N fait un angle $\\theta = 60°$ avec l\'axe horizontal $Ox$. Calculer la composante verticale $F_y$ (en N).',
          type: 'numeric',
          answer: 43.30,
          tolerance: 0.1,
          unit: 'N',
          points: 2,
          correction: '$F_y = F \\sin(\\theta) = 50 \\times \\sin(60°) = 50 \\times \\dfrac{\\sqrt{3}}{2} \\approx 43{,}30$ N.'
        },
        {
          statement: 'Un objet est sur un plan incliné à $\\alpha = 30°$. Son poids vaut $P = 100$ N (vertical, vers le bas). Calculer la composante du poids parallèle au plan (en N).',
          type: 'numeric',
          answer: 50,
          tolerance: 0.5,
          unit: 'N',
          points: 3,
          correction: 'La composante du poids parallèle au plan incliné est $P_{\\parallel} = P \\sin(\\alpha) = 100 \\times \\sin(30°) = 100 \\times 0{,}5 = 50$ N. Attention : on utilise le sinus (et non le cosinus) car l\'angle $\\alpha$ est mesuré entre le plan et l\'horizontale.'
        },
        {
          statement: 'Un vecteur a pour composantes $F_x = -6$ N et $F_y = 8$ N. Calculer sa norme $\\|\\vec{F}\\|$ (en N).',
          type: 'numeric',
          answer: 10,
          tolerance: 0.01,
          unit: 'N',
          points: 2,
          correction: '$\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2} = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ N.'
        },
        {
          statement: 'Un vecteur $\\vec{F}$ pointe vers la droite et le bas (4ème quadrant). Quel est le signe de ses composantes ?',
          type: 'multiple-choice',
          options: ['$F_x > 0$ et $F_y > 0$', '$F_x < 0$ et $F_y < 0$', '$F_x > 0$ et $F_y < 0$', '$F_x < 0$ et $F_y > 0$'],
          answer: 2,
          points: 1,
          correction: 'Le vecteur pointe vers la droite → même sens que $Ox$ positif → $F_x > 0$. Il pointe vers le bas → sens contraire de $Oy$ positif → $F_y < 0$.'
        },
        {
          statement: 'Sur un plan incliné, la composante du poids perpendiculaire au plan utilise :',
          type: 'multiple-choice',
          options: ['$P \\sin(\\alpha)$', '$P \\cos(\\alpha)$', '$P \\tan(\\alpha)$', '$P / \\sin(\\alpha)$'],
          answer: 1,
          points: 2,
          correction: 'La composante perpendiculaire au plan est $P_{\\perp} = P \\cos(\\alpha)$, où $\\alpha$ est l\'angle du plan avec l\'horizontale. Le cosinus est utilisé pour la composante adjacente à l\'angle.'
        }
      ]
    }
  });
