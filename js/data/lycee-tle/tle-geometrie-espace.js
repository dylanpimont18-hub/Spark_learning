/* =========================================================
   Spark Learning – data/lycee-tle/tle-geometrie-espace.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-geometrie-espace',
    level: 2, subject: 'maths',
    icon: '🧊',
    title: 'Géométrie dans l\'espace',
    subtitle: 'Vecteurs, droites et plans de l\'espace',
    keywords: ['Espace', 'Vecteur', 'Plan', 'Droite', 'Coplanaire', 'Position relative'],
    physics: 'Modélisation de trajectoires et de forces dans l\'espace, robotique et conception assistée par ordinateur (CAO)',
    cours: {
      intro: 'Dans la charpente d\'un toit, deux poutres peuvent passer l\'une au-dessus de l\'autre sans jamais se toucher ni être parallèles : une configuration impossible à représenter sur une feuille en géométrie plane, et qui n\'existe qu\'en trois dimensions.<br/><br/>En 3D, les droites et plans se comportent de façon plus riche qu\'en 2D. <strong>Deux droites peuvent être</strong> : sécantes (se croisent), parallèles, ou <strong>GAUCHES</strong> — ni parallèles ni sécantes, passant "l\'une au-dessus de l\'autre".<br/><br/><strong>Les droites gauches n\'existent pas en 2D</strong> : c\'est le principal piège de la géométrie spatiale. Deux droites croisant le même point n\'en définissent pas toujours un plan unique.<br/><br/>Un <strong>plan</strong> est défini par son <strong>vecteur NORMAL</strong> $\\vec{n}(a;b;c)$ (perpendiculaire au plan) et son équation $ax+by+cz+d=0$. Une droite est perpendiculaire à un plan si son vecteur directeur est colinéaire au vecteur normal.<br/><br/><strong>Cas fondamental</strong> : vérifier si deux droites se croisent nécessite de résoudre le système paramétrique et d\'examiner la cohérence des solutions.',
      definitions: [
        { term: 'Vecteur normal à un plan', def: 'Vecteur $\\vec{n}(a;b;c)$ perpendiculaire au plan d\'équation $ax+by+cz+d=0$. Il est orthogonal à tout vecteur contenu dans le plan.' },
        { term: 'Droites gauches', def: 'Deux droites de l\'espace qui ne sont <strong>ni parallèles ni sécantes</strong>. Elles ne se croisent pas et ne sont pas dans le même plan. Ce cas n\'existe qu\'en dimension $\\geq 3$.' },
        { term: 'Représentation paramétrique', def: 'Une droite passant par $A(x_A;y_A;z_A)$ de vecteur directeur $\\vec{u}(a;b;c)$ s\'écrit : $\\begin{cases} x = x_A + at \\\\ y = y_A + bt \\\\ z = z_A + ct \\end{cases}$, $t \\in \\mathbb{R}$.' },
        { term: 'Produit scalaire en 3D', def: '$\\vec{u} \\cdot \\vec{v} = x_u x_v + y_u y_v + z_u z_v$. Il vérifie aussi $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\| \\cos(\\theta)$ où $\\theta$ est l\'angle entre les vecteurs.' }
      ],
      method: {
        title: 'Positions relatives et équations',
        steps: [
          '<strong>Positions relatives des droites</strong> : sécantes, parallèles, ou gauches (ni l\'un ni l\'autre).',
          '<strong>Équation d\'un plan</strong> : $ax+by+cz+d=0$, vecteur normal $\\vec{n}(a;b;c)$.',
          '<strong>Parallélisme droite-plan</strong> : vecteur directeur orthogonal à $\\vec{n}$.',
          '<strong>Perpendicularité droite-plan</strong> : vecteur directeur colinéaire à $\\vec{n}$.'
        ]
      },
      example: {
        statement: 'Soit le plan $\\mathcal{P}$ d\'équation $2x - y + 3z - 6 = 0$ et la droite $\\mathcal{D}$ de représentation paramétrique $\\begin{cases} x = 1 + 2t \\\\ y = -1 - t \\\\ z = 2 + 3t \\end{cases}$. Montrer que $\\mathcal{D}$ est perpendiculaire à $\\mathcal{P}$.',
        steps: [
          'Le <strong>vecteur normal</strong> au plan est $\\vec{n}(2;-1;3)$ (coefficients de $x$, $y$, $z$).',
          'Le <strong>vecteur directeur</strong> de la droite est $\\vec{u}(2;-1;3)$ (coefficients de $t$).',
          'On compare : $\\vec{u} = \\vec{n}$, ils sont <strong>colinéaires</strong> (rapport $1$).',
          'Puisque le vecteur directeur de la droite est colinéaire au vecteur normal du plan, la droite est <strong>perpendiculaire</strong> au plan $\\mathcal{P}$.'
        ],
        answer: '$\\vec{u} = \\vec{n} = (2;-1;3)$ : la droite $\\mathcal{D}$ est bien perpendiculaire au plan $\\mathcal{P}$.'
      },
      formulas: [
        'Plan : $ax+by+cz+d=0$, $\\vec{n}(a;b;c)$ normal',
        '$\\vec{u}\\cdot\\vec{v}=x_ux_v+y_uy_v+z_uz_v$',
        '$\\vec{u}\\perp\\vec{v} \\Leftrightarrow \\vec{u}\\cdot\\vec{v}=0$',
        '$\\|\\vec{u}\\|=\\sqrt{x^2+y^2+z^2}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Positions relatives dans l\'espace',
        title: 'Sécantes, parallèles ou gauches : trois arêtes d\'un même cube',
        description: 'Sur un cube $ABCDEFGH$, l\'arête $(AB)$ est comparée successivement à $(BC)$, à $(EF)$ puis à $(CG)$ pour illustrer les trois positions relatives possibles de deux droites dans l\'espace.',
        svg: `
          <svg viewBox="0 0 780 330" role="img" aria-labelledby="espace-diagram-title espace-diagram-desc">
            <title id="espace-diagram-title">Trois positions relatives de droites dans l'espace, sur un cube</title>
            <desc id="espace-diagram-desc">Trois cubes identiques en perspective cavaliere ABCDEFGH. Panneau 1 : les aretes (AB) et (BC) sont secantes, elles se croisent au sommet B. Panneau 2 : les aretes (AB) et (EF) sont paralleles, meme direction horizontale a des hauteurs differentes, elles ne se rencontrent jamais. Panneau 3 : les aretes (AB) et (CG) sont gauches, ni paralleles ni secantes, non coplanaires.</desc>

            <!-- separateurs entre panneaux -->
            <line class="grid-line" x1="245" y1="25" x2="245" y2="290"></line>
            <line class="grid-line" x1="515" y1="25" x2="515" y2="290"></line>

            <!-- ===================== PANNEAU 1 : SECANTES ===================== -->
            <text class="annotation-label" x="110" y="40" text-anchor="middle">1. Sécantes</text>
            <!-- aretes cachees -->
            <line class="guide-line" x1="85" y1="225" x2="60" y2="250"></line>
            <line class="guide-line" x1="155" y1="225" x2="85" y2="225"></line>
            <line class="guide-line" x1="85" y1="225" x2="85" y2="155"></line>
            <!-- aretes visibles non mises en evidence -->
            <line class="frame-line" x1="130" y1="250" x2="130" y2="180"></line>
            <line class="frame-line" x1="60" y1="250" x2="60" y2="180"></line>
            <line class="frame-line" x1="60" y1="180" x2="130" y2="180"></line>
            <line class="frame-line" x1="85" y1="155" x2="60" y2="180"></line>
            <line class="frame-line" x1="130" y1="180" x2="155" y2="155"></line>
            <line class="frame-line" x1="155" y1="155" x2="85" y2="155"></line>
            <line class="frame-line" x1="155" y1="225" x2="155" y2="155"></line>
            <!-- paire etudiee : (AB) et (BC), secantes en B -->
            <line class="curve-main" x1="60" y1="250" x2="130" y2="250"></line>
            <line class="curve-main" x1="130" y1="250" x2="155" y2="225"></line>
            <circle class="plot-point-alt" cx="60" cy="250" r="4"></circle>
            <circle class="plot-point" cx="130" cy="250" r="5"></circle>
            <circle class="plot-point-alt" cx="155" cy="225" r="4"></circle>
            <text class="label-soft" x="48" y="266" text-anchor="middle">A</text>
            <text class="annotation-label" x="140" y="266" text-anchor="start">B</text>
            <text class="label-soft" x="168" y="220" text-anchor="start">C</text>
            <text class="label-soft" x="110" y="282" text-anchor="middle">(AB) et (BC)</text>

            <!-- ===================== PANNEAU 2 : PARALLELES ===================== -->
            <text class="annotation-label" x="380" y="40" text-anchor="middle">2. Parallèles</text>
            <line class="guide-line" x1="355" y1="225" x2="330" y2="250"></line>
            <line class="guide-line" x1="425" y1="225" x2="355" y2="225"></line>
            <line class="guide-line" x1="355" y1="225" x2="355" y2="155"></line>
            <line class="frame-line" x1="400" y1="250" x2="425" y2="225"></line>
            <line class="frame-line" x1="400" y1="250" x2="400" y2="180"></line>
            <line class="frame-line" x1="330" y1="250" x2="330" y2="180"></line>
            <line class="frame-line" x1="425" y1="225" x2="425" y2="155"></line>
            <line class="frame-line" x1="400" y1="180" x2="425" y2="155"></line>
            <line class="frame-line" x1="425" y1="155" x2="355" y2="155"></line>
            <line class="frame-line" x1="355" y1="155" x2="330" y2="180"></line>
            <!-- paire etudiee : (AB) et (EF), paralleles -->
            <line class="curve-main" x1="330" y1="250" x2="400" y2="250"></line>
            <line class="curve-main" x1="330" y1="180" x2="400" y2="180"></line>
            <circle class="plot-point-alt" cx="330" cy="250" r="4"></circle>
            <circle class="plot-point-alt" cx="400" cy="250" r="4"></circle>
            <circle class="plot-point-alt" cx="330" cy="180" r="4"></circle>
            <circle class="plot-point-alt" cx="400" cy="180" r="4"></circle>
            <text class="label-soft" x="318" y="266" text-anchor="middle">A</text>
            <text class="label-soft" x="412" y="266" text-anchor="start">B</text>
            <text class="label-soft" x="316" y="176" text-anchor="end">E</text>
            <text class="label-soft" x="414" y="176" text-anchor="start">F</text>
            <text class="label-soft" x="380" y="282" text-anchor="middle">(AB) et (EF)</text>

            <!-- ===================== PANNEAU 3 : GAUCHES ===================== -->
            <text class="annotation-label" x="650" y="40" text-anchor="middle">3. Gauches (non coplanaires)</text>
            <line class="guide-line" x1="625" y1="225" x2="600" y2="250"></line>
            <line class="guide-line" x1="695" y1="225" x2="625" y2="225"></line>
            <line class="guide-line" x1="625" y1="225" x2="625" y2="155"></line>
            <line class="frame-line" x1="670" y1="250" x2="695" y2="225"></line>
            <line class="frame-line" x1="670" y1="250" x2="670" y2="180"></line>
            <line class="frame-line" x1="600" y1="250" x2="600" y2="180"></line>
            <line class="frame-line" x1="600" y1="180" x2="670" y2="180"></line>
            <line class="frame-line" x1="625" y1="155" x2="600" y2="180"></line>
            <line class="frame-line" x1="670" y1="180" x2="695" y2="155"></line>
            <line class="frame-line" x1="695" y1="155" x2="625" y2="155"></line>
            <!-- paire etudiee : (AB) et (CG), gauches -->
            <line class="curve-main" x1="600" y1="250" x2="670" y2="250"></line>
            <line class="curve-main" x1="695" y1="225" x2="695" y2="155"></line>
            <circle class="plot-point-alt" cx="600" cy="250" r="4"></circle>
            <circle class="plot-point-alt" cx="670" cy="250" r="4"></circle>
            <circle class="plot-point-alt" cx="695" cy="225" r="4"></circle>
            <circle class="plot-point-alt" cx="695" cy="155" r="4"></circle>
            <text class="label-soft" x="588" y="266" text-anchor="middle">A</text>
            <text class="label-soft" x="682" y="266" text-anchor="start">B</text>
            <text class="label-soft" x="710" y="220" text-anchor="start">C</text>
            <text class="label-soft" x="712" y="150" text-anchor="start">G</text>
            <text class="label-soft" x="650" y="282" text-anchor="middle">(AB) et (CG)</text>

            <text class="label-soft" x="390" y="312" text-anchor="middle">trait fin = arête visible du cube · pointillé = arête cachée · trait épais = paire de droites étudiée</text>
          </svg>
        `,
        notes: [
          'Sur le cube $ABCDEFGH$, les arêtes $(AB)$ et $(BC)$ sont <strong>sécantes</strong> : elles partagent le sommet $B$, leur unique point commun.',
          'Les arêtes $(AB)$ et $(EF)$ sont <strong>parallèles</strong> : même direction (arêtes horizontales du cube), mais situées à des hauteurs différentes — elles ne se rencontrent donc jamais.',
          'Les arêtes $(AB)$ et $(CG)$ sont <strong>gauches</strong> (non coplanaires) : $(AB)$ est horizontale et $(CG)$ est verticale — deux directions non colinéaires — et pourtant ces deux droites ne se croisent à aucun endroit.',
          'Piège classique : $(AB)$ et $(CG)$ ne sont pas parallèles, mais l\'absence de parallélisme ne suffit pas à conclure qu\'elles sont sécantes — c\'est exactement la définition de deux droites gauches, un cas qui n\'existe qu\'à partir de la dimension $3$.'
        ],
        reading: 'Repère d\'abord l\'arête commune $(AB)$, présente dans les trois panneaux : elle sert de référence pour comparer sa position par rapport à $(BC)$, puis $(EF)$, puis $(CG)$.',
        caption: 'Trois positions relatives de deux droites dans l\'espace, illustrées sur un même cube $ABCDEFGH$ : $(AB)$/$(BC)$ sécantes en $B$, $(AB)$/$(EF)$ parallèles, $(AB)$/$(CG)$ gauches (non coplanaires).'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14.

         La géométrie dans l'espace est le point faible structurel du niveau :
         il faut représenter en deux dimensions un objet qui n'en a pas deux.
         Une perspective cavalière fausse — des arêtes parallèles qui cessent
         de l'être sur le dessin, un angle droit qui ne se lit nulle part —
         rend le chapitre inutilisable, et personne ne s'en aperçoit à la
         relecture.

         PROJECTION EMPLOYÉE, la même dans les deux chapitres d'espace :
         perspective cavalière de convention scolaire française, $x$ vers la
         droite, $z$ vers le haut, fuyante $y$ à $45°$ avec un coefficient de
         réduction $0{,}5$. C'est une projection AFFINE, ce qui garantit par
         construction que deux arêtes parallèles dans l'espace se projettent
         sur deux vecteurs colinéaires. Garantie vérifiée quand même
         numériquement dans scripts/manuel/tests/diagrams-tle.test.js, sur les
         NEUF paires d'arêtes parallèles du cube : une seule coordonnée tapée
         à la main suffirait à casser la propriété sans alerte.

         Les trois malentendus retenus :
           1. deux droites qui ne se coupent pas ne sont pas parallèles pour
              autant — les droites GAUCHES n'existent pas dans le plan, et
              c'est le seul objet vraiment nouveau du chapitre ;
           2. un vecteur normal n'est pas « dans » le plan, il lui est
              perpendiculaire, et c'est lui qui porte toute l'équation ;
           3. sur le dessin, deux droites peuvent sembler se couper alors
              qu'elles passent l'une devant l'autre : le dessin ment, seul le
              calcul tranche. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le seul objet nouveau du chapitre',
          title: 'Deux droites qui ne se coupent pas, et qui ne sont pas parallèles',
          description: 'Dans le plan, deux droites qui ne se coupent pas sont parallèles — il n\'y a pas d\'autre cas. Dans l\'espace, il y en a un troisième : les droites <strong>gauches</strong>. Ici $(AB)$ et $(DH)$ ne se rencontrent jamais, et pourtant leurs directions n\'ont rien de commun.',
          svg: `
            <svg viewBox="0 0 320 250" role="img" aria-labelledby="tle-gauches-title tle-gauches-desc">
              <title id="tle-gauches-title">Deux aretes gauches sur un cube en perspective cavaliere</title>
              <desc id="tle-gauches-desc">Un cube est dessine en perspective cavaliere. Ses aretes cachees sont en pointilles. Deux aretes sont mises en valeur : celle qui va du sommet A au sommet B, sur le bord avant du bas, et celle qui va du sommet D au sommet H, sur le bord arriere gauche et verticale. Ces deux aretes ne se rencontrent en aucun point et leurs directions sont differentes : l'une est horizontale vers la droite, l'autre est verticale. Ce sont donc deux droites gauches, une situation qui ne peut pas se produire dans un plan.</desc>

              <!-- CUBE en perspective cavaliere, arete 3 unites, une unite
                   valant 42 unites de viewBox. Sommets CALCULES par la
                   projection affine, jamais poses a l'oeil. -->

              <!-- Aretes cachees, en pointilles : celles qui partent de D. -->
              <line class="guide-line" x1="114.5" y1="160.5" x2="70" y2="205"></line>
              <line class="guide-line" x1="114.5" y1="160.5" x2="240.5" y2="160.5"></line>

              <!-- Face avant du cube. -->
              <line class="frame-line" x1="70" y1="205" x2="196" y2="205"></line>
              <line class="frame-line" x1="196" y1="205" x2="196" y2="79"></line>
              <line class="frame-line" x1="196" y1="79" x2="70" y2="79"></line>
              <line class="frame-line" x1="70" y1="79" x2="70" y2="205"></line>

              <!-- Face arriere. -->
              <line class="frame-line" x1="240.5" y1="160.5" x2="240.5" y2="34.5"></line>
              <line class="frame-line" x1="240.5" y1="34.5" x2="114.5" y2="34.5"></line>
              <line class="frame-line" x1="114.5" y1="34.5" x2="114.5" y2="160.5"></line>

              <!-- Fuyantes visibles. -->
              <line class="frame-line" x1="196" y1="205" x2="240.5" y2="160.5"></line>
              <line class="frame-line" x1="196" y1="79" x2="240.5" y2="34.5"></line>
              <line class="frame-line" x1="70" y1="79" x2="114.5" y2="34.5"></line>

              <!-- LES DEUX DROITES GAUCHES, en teinte forte : ce sont les
                   seuls objets que la figure isole. -->
              <line class="curve-main" x1="70" y1="205" x2="196" y2="205"></line>
              <line class="curve-main" x1="114.5" y1="160.5" x2="114.5" y2="34.5"></line>

              <circle class="plot-point" cx="70" cy="205" r="4"></circle>
              <circle class="plot-point" cx="196" cy="205" r="4"></circle>
              <circle class="plot-point" cx="114.5" cy="160.5" r="4"></circle>
              <circle class="plot-point" cx="114.5" cy="34.5" r="4"></circle>

              <text class="tick-label" x="62" y="218" text-anchor="end">A</text>
              <text class="tick-label" x="204" y="218" text-anchor="start">B</text>
              <text class="tick-label" x="106" y="174" text-anchor="end">D</text>
              <text class="tick-label" x="106" y="30" text-anchor="end">H</text>
              <text class="tick-label" x="248" y="170" text-anchor="start">C</text>
              <text class="tick-label" x="62" y="74" text-anchor="end">E</text>
              <text class="tick-label" x="204" y="74" text-anchor="start">F</text>
              <text class="tick-label" x="248" y="30" text-anchor="start">G</text>

              <text class="annotation-label" x="133" y="228" text-anchor="middle">deux droites gauches</text>
            </svg>
          `,
          notes: [
            'La droite $(AB)$ est dirigée par $\\vec{u}\\,(3\\,;\\,0\\,;\\,0)$ et la droite $(DH)$ par $\\vec{v}\\,(0\\,;\\,0\\,;\\,3)$ : ces deux vecteurs ne sont pas colinéaires, donc les droites ne sont <strong>pas parallèles</strong>.',
            'Elles ne se coupent pas non plus : tous les points de $(AB)$ ont pour ordonnée $y = 0$, tous ceux de $(DH)$ ont $y = 3$. Aucun point ne peut vérifier les deux à la fois.',
            'Ni parallèles, ni sécantes : elles sont <strong>gauches</strong>. Dans un plan, cette situation est impossible — c\'est précisément ce que la troisième dimension ajoute.'
          ],
          reading: 'Suis l\'arête $AB$ du doigt, puis l\'arête $DH$ : à aucun moment ton doigt ne passe deux fois au même endroit de l\'espace. Pour te convaincre qu\'elles ne sont pas parallèles non plus, compare leurs directions — l\'une longe le sol, l\'autre monte. Retiens le test, il servira toute l\'année : deux droites sont gauches quand leurs vecteurs directeurs ne sont <strong>pas colinéaires</strong> et que le système formé par leurs représentations paramétriques n\'a <strong>aucune</strong> solution.',
          caption: 'Les arêtes $(AB)$ et $(DH)$ d\'un cube : deux droites gauches en perspective cavalière.'
        },
        {
          theme: 'maths',
          kicker: 'Ce que le dessin ne peut pas dire',
          title: 'Le vecteur normal sort du plan',
          description: 'Un plan a une infinité de vecteurs qui lui appartiennent, mais une seule direction perpendiculaire. C\'est cette direction — le vecteur <strong>normal</strong> — qui donne au plan son équation $ax + by + cz + d = 0$ : les trois nombres $a$, $b$, $c$ ne sont rien d\'autre que les coordonnées de $\\vec{n}$.',
          svg: `
            <svg viewBox="0 0 340 230" role="img" aria-labelledby="tle-normale-title tle-normale-desc">
              <title id="tle-normale-title">Un vecteur normal perpendiculaire a un plan, et deux vecteurs du plan</title>
              <desc id="tle-normale-desc">Un plan est represente par un parallelogramme dessine en perspective cavaliere. Deux vecteurs partant du meme point sont traces a l'interieur de ce parallelogramme : ils appartiennent au plan. Un troisieme vecteur part du meme point mais s'eleve verticalement, hors du parallelogramme : c'est le vecteur normal. Un petit carre place a sa base code l'angle droit entre le vecteur normal et le plan. Le produit scalaire du vecteur normal avec chacun des deux vecteurs du plan vaut zero.</desc>

              <defs>
                <marker id="fl-tle-normale" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- Le plan, parallelogramme en perspective cavaliere.
                   Coordonnees calculees par la meme projection affine. -->
              <polygon class="frame-line" points="98.3,195.7 250.3,195.7 298.4,147.6 146.4,147.6" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></polygon>

              <!-- Deux vecteurs DU plan, en teinte faible : ce sont le decor,
                   pas l'objet a isoler. Ils partent du point H. -->
              <line class="guide-line" x1="201" y1="173" x2="252" y2="173" marker-end="url(#fl-tle-normale)"></line>
              <line class="guide-line" x1="201" y1="173" x2="228.5" y2="145.5" marker-end="url(#fl-tle-normale)"></line>

              <!-- Carre codant l'angle droit, dans le plan vertical contenant
                   la normale. Un angle droit se code par un CARRE, jamais par
                   un arc. -->
              <polyline class="frame-line" points="213.8,173 213.8,160.2 201,160.2" fill="none"></polyline>

              <!-- LE VECTEUR NORMAL, seul objet en teinte forte. -->
              <line class="curve-main" x1="201" y1="173" x2="201" y2="73" marker-end="url(#fl-tle-normale)"></line>
              <circle class="plot-point" cx="201" cy="173" r="4"></circle>

              <text class="annotation-label" x="209" y="110" text-anchor="start">vecteur normal</text>
              <text class="label-soft" x="258" y="178" text-anchor="start">vecteurs du plan</text>
              <text class="tick-label" x="193" y="188" text-anchor="end">H</text>
              <text class="tick-label" x="120" y="212" text-anchor="middle">le plan</text>
            </svg>
          `,
          notes: [
            'Les deux flèches claires appartiennent au plan : on peut les tracer sans jamais le quitter. Il y en a une infinité, dans toutes les directions du plan.',
            'La flèche foncée n\'appartient pas au plan : elle en sort perpendiculairement. Son produit scalaire avec <strong>n\'importe quel</strong> vecteur du plan vaut $0$ — par exemple $\\vec{n}\\,(0\\,;\\,0\\,;\\,1) \\cdot \\vec{u}\\,(1\\,;\\,0\\,;\\,0) = 0$.',
            'Dans l\'équation $ax + by + cz + d = 0$, le triplet $(a\\,;\\,b\\,;\\,c)$ <strong>est</strong> le vecteur normal. Lire une équation de plan, c\'est donc lire d\'abord la direction perpendiculaire.'
          ],
          reading: 'Le petit carré à la base de la flèche foncée code l\'angle droit : c\'est la notation du collège, et elle vaut encore ici. Retiens surtout le renversement : pour décrire un plan, on ne donne pas ce qu\'il contient, on donne la direction qu\'il évite. C\'est plus économique — une direction au lieu d\'une infinité — et c\'est ce qui rend l\'équation si courte.',
          caption: 'Un vecteur normal $\\vec{n}$ et deux vecteurs du plan : le produit scalaire de $\\vec{n}$ avec chacun vaut $0$.'
        },
        {
          theme: 'maths',
          kicker: 'Quand le dessin trompe',
          title: 'Un croisement qui n\'existe pas',
          description: 'Les deux droites ci-dessous se croisent visiblement sur la feuille, exactement au milieu de chacune. Dans l\'espace, elles ne se touchent nulle part : $(d_1)$ reste à la cote $z = 0$, $(d_2)$ à la cote $z = 2$. Une perspective écrase trois dimensions sur deux, et cet écrasement fabrique des intersections qui n\'existent pas.',
          svg: `
            <svg viewBox="0 0 241 182" role="img" aria-labelledby="tle-illusion-title tle-illusion-desc">
              <title id="tle-illusion-title">Deux droites qui semblent se couper sur le dessin sans se rencontrer dans l espace</title>
              <desc id="tle-illusion-desc">Deux segments traces en perspective cavaliere se croisent au milieu de l'image. Le point ou ils semblent se rencontrer porte un point d'interrogation. Sous le second segment, une ombre en pointilles montre ou il se projetterait sur le sol : elle est nettement plus bas que le premier segment, ce qui rend visible la difference de hauteur. Le premier segment est a la cote zero, le second a la cote deux : ils ne partagent donc aucun point, et le croisement visible n'est qu'un effet de la projection sur la feuille.</desc>

              <!-- (d1) est au SOL, cote z = 0. -->
              <line class="curve-main" x1="50.4" y1="39.1" x2="190.3" y2="58.8"></line>
              <circle class="plot-point" cx="50.4" cy="39.1" r="4"></circle>
              <circle class="plot-point" cx="190.3" cy="58.8" r="4"></circle>

              <!-- (d2) est a la cote z = 2, CONSTANTE : elle ne peut donc
                   rencontrer aucun point de (d1), qui est a z = 0. Les deux
                   segments ont ete calcules pour que leurs projections se
                   coupent tres exactement en leur MILIEU (parametres 0,500 et
                   0,500), ce que verifie le test du niveau. -->
              <line class="curve-main" x1="30" y1="67.9" x2="210.7" y2="30"></line>
              <circle class="plot-point-alt" cx="30" cy="67.9" r="4"></circle>
              <circle class="plot-point-alt" cx="210.7" cy="30" r="4"></circle>

              <!-- Ombre de (d2) au sol : memes abscisse et ordonnee, cote
                   ramenee a zero. C'est elle qui rend la hauteur LISIBLE. -->
              <line class="guide-line" x1="30" y1="151.9" x2="210.7" y2="114"></line>
              <line class="guide-line" x1="30" y1="67.9" x2="30" y2="151.9"></line>
              <line class="guide-line" x1="210.7" y1="30" x2="210.7" y2="114"></line>

              <!-- Le faux point d'intersection. Il porte un point
                   d'interrogation : la figure POSE la question, elle ne la
                   resout pas. -->
              <circle class="plot-point-alt" cx="120.3" cy="48.9" r="6"></circle>
              <text class="annotation-label" x="128" y="42" text-anchor="start">?</text>

              <text class="tick-label" x="44" y="34" text-anchor="end">d1</text>
              <text class="tick-label" x="24" y="72" text-anchor="end">d2</text>
              <text class="label-soft" x="120" y="146" text-anchor="middle">ombre de d2 au sol</text>
            </svg>
          `,
          notes: [
            'La droite $(d_1)$ est posée au sol : tous ses points ont pour cote $z = 0$.',
            'La droite $(d_2)$ garde la cote $z = 2$ sur toute sa longueur. Aucun de ses points ne peut donc coïncider avec un point de $(d_1)$ : les deux droites sont <strong>gauches</strong>.',
            'Les traits en pointillés donnent l\'ombre de $(d_2)$ au sol, à la verticale de chacune de ses extrémités. C\'est le seul indice visuel de la hauteur — et il manque sur la plupart des figures de manuel, ce qui rend le croisement apparent très convaincant.',
            'Le croisement qu\'on voit au milieu est un artefact de la <strong>projection</strong> : deux points situés à des hauteurs différentes tombent au même endroit sur la feuille. C\'est exactement ce qui se passe quand tu regardes deux avions se croiser dans le ciel.'
          ],
          reading: 'Ne conclus jamais d\'un dessin en perspective que deux droites sont sécantes. La seule preuve acceptable est un <strong>calcul</strong> : écris les deux représentations paramétriques, puis cherche un couple de paramètres qui donne le même point. S\'il n\'en existe aucun, les droites sont gauches — quoi que montre la figure.',
          caption: 'Deux droites gauches, aux cotes $z = 0$ et $z = 2$, dont les projections se coupent au milieu de la feuille.'
        }
      ],

      recap: [
        'Un plan est défini par son <strong>vecteur normal</strong> $\\vec{n}(a;b;c)$ et son équation $ax+by+cz+d=0$.',
        'En 3D, deux droites non parallèles peuvent être <strong>gauches</strong> : ni parallèles, ni sécantes. Toujours vérifier l\'existence d\'une intersection.',
        'Le <strong>produit scalaire</strong> en 3D : $\\vec{u} \\cdot \\vec{v} = x_u x_v + y_u y_v + z_u z_v$. Deux vecteurs sont orthogonaux si et seulement si $\\vec{u} \\cdot \\vec{v} = 0$.',
        'Une droite est perpendiculaire à un plan si son vecteur directeur est <strong>colinéaire</strong> au vecteur normal du plan.'
      ],
      piege: 'En 3D, deux droites non parallèles peuvent être gauches (elles ne se croisent pas).<br/><br/>Avant de conclure qu\'elles sont sécantes, il faut résoudre le système et vérifier qu\'il admet une solution.'
    },
    quiz: [
      { q: 'Dans l\'espace, deux droites non parallèles se croisent forcément. Cette affirmation est :', options: ['FAUSSE : deux droites non parallèles peuvent être "gauches" (ni parallèles ni sécantes, elles passent l\'une au-dessus de l\'autre)', 'Vraie : si deux droites ne sont pas parallèles, elles ont forcément un point commun', 'Vraie seulement si les deux droites sont dans le même plan', 'Vraie en 3D, fausse en 2D'], answer: 0, correction: 'En 3D, deux droites non parallèles peuvent être GAUCHES : elles ne sont pas parallèles (directions distinctes) mais ne se croisent pas non plus. Exemple simple : l\'axe $x$ ($y=0$, $z=0$, direction $(1;0;0)$) et la droite $x=0$, $z=1$ (direction $(0;1;0)$) ont des directions distinctes mais ne se rencontrent jamais, car $z$ vaut $0$ sur l\'une et $1$ sur l\'autre. En 2D, ce cas n\'existe pas car deux droites non parallèles se croisent toujours en un point.' },
      { q: '$\\vec{u}(1;2;-1)\\cdot\\vec{v}(2;-1;0)=$ ?', options: ['$0$', '$3$', '$-3$', '$1$'], answer: 0, correction: '$1\\times2+2\\times(-1)+(-1)\\times0=2-2+0=0$. Les vecteurs sont orthogonaux !' },
      { q: 'La norme de $\\vec{u}(3;0;4)$ est :', options: ['$7$', '$5$', '$25$', '$\\sqrt{7}$'], answer: 1, correction: '$\\|\\vec{u}\\|=\\sqrt{9+0+16}=\\sqrt{25}=5$.<br/><br/>On applique la formule $\\|\\vec{u}\\| = \\sqrt{x^2+y^2+z^2}$ en additionnant les carrés des trois coordonnées.' },
      { q: 'Le plan $\\mathcal{P}$ a pour équation $3x - y + 2z + 5 = 0$. Son vecteur normal est :', options: ['$\\vec{n}(3;-1;2)$', '$\\vec{n}(3;1;2)$', '$\\vec{n}(3;-1;5)$', '$\\vec{n}(5;-1;2)$'], answer: 0, correction: 'Le vecteur normal au plan $ax+by+cz+d=0$ est $\\vec{n}(a;b;c)$.<br/><br/>On lit directement les coefficients de $x$, $y$ et $z$ : ici $a=3$, $b=-1$, $c=2$. La constante $d=5$ ne fait pas partie du vecteur normal.' },
      { q: 'La droite $\\mathcal{D}$ passe par $A(1;2;3)$ avec le vecteur directeur $\\vec{u}(0;0;1)$. Quelle est la nature de cette droite ?', options: ['Parallèle au plan $xOy$', 'Perpendiculaire au plan $xOy$ (elle est verticale, parallèle à l\'axe $z$)', 'Perpendiculaire à l\'axe $z$', 'Confondue avec l\'axe $z$'], answer: 1, correction: 'Le vecteur directeur $\\vec{u}(0;0;1)$ est colinéaire au vecteur normal du plan $xOy$ (dont l\'équation est $z=0$ et le vecteur normal $\\vec{k}(0;0;1)$).<br/><br/>La droite est donc <strong>perpendiculaire</strong> au plan $xOy$ : elle est verticale, parallèle à l\'axe $z$, passant par le point $(1;2;3)$.' }
    ],
    /* BANQUE D'EXERCICES — élargie le 2026-09-14.

       AVANT : une seule tâche distincte (la norme d'un vecteur de l'espace),
       habillée de six décors par pick(). Mesuré sur 400 tirages : 313 moules
       d'énoncé, mais UNE tâche. Le chiffre de 313 est trompeur — il vient de
       la combinatoire des coordonnées, pas de la variété des questions. Le
       professeur qui feuilletait la banque y voyait soixante fois la même
       question.

       APRÈS : sept tâches, qui couvrent réellement le chapitre — norme,
       colinéarité, produit scalaire, appartenance à un plan, équation de
       plan par un point et une normale, position relative de deux droites,
       et milieu d'un segment.

       Notation décimale : par fr(), jamais par un .replace() écrit à la main.
       Le générateur d'origine en contenait un (`norm.toFixed(2).replace(...)`),
       corrigé ce jour — c'est le bug récurrent du corpus, signalé au moins
       deux fois en 2026. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['norme', 'colineaires', 'scalaire', 'appartient',
                            'equationPlan', 'milieu', 'orthogonal']);

        /* TÂCHE 1 — norme d'un vecteur de l'espace. La tâche historique,
           conservée : c'est Pythagore en trois dimensions, et il en faut une. */
        if (tache === 'norme') {
          const ctx = pick([
            { qui: 'Un drone décolle du point', quoi: 'la distance parcourue' },
            { qui: 'Le bras d\'un robot part du point', quoi: 'la longueur du déplacement' },
            { qui: 'Un avion amorce sa trajectoire au point', quoi: 'la distance franchie' },
            { qui: 'Une panne de charpente part du point', quoi: 'la longueur de la panne' }
          ]);
          const ax = rand(-4, 4), ay = rand(-4, 4), az = rand(-4, 4);
          let x = rand(-3, 3), y = rand(-3, 3), z = rand(-3, 3);
          if (x === 0 && y === 0 && z === 0) x = 2;
          const s = x * x + y * y + z * z;
          const res = parseFloat(Math.sqrt(s).toFixed(2));
          return {
            statement: `${ctx.qui} $A(${ax};${ay};${az})$ et suit le vecteur $\\vec{u}(${x};${y};${z})$ jusqu'au point $B(${ax + x};${ay + y};${az + z})$.<br/><br/>Calculer ${ctx.quoi}, c'est-à-dire $\\|\\vec{u}\\|$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: '',
            hint: `Seul le vecteur $\\vec{u}$ compte : le point de départ ne change pas la norme. C'est Pythagore en trois dimensions, $\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$.`,
            solution: [
              `Norme d'un vecteur de l'espace : $\\|\\vec{u}\\| = \\sqrt{(${x})^2 + (${y})^2 + (${z})^2}$`,
              `$= \\sqrt{${x * x} + ${y * y} + ${z * z}} = \\sqrt{${s}}$`,
              `$\\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 2 — colinéarité. L'élève doit trouver le coefficient, ou
           conclure qu'il n'en existe pas. C'est le test de parallélisme de
           deux droites, et il précède toute étude de position relative. */
        if (tache === 'colineaires') {
          const ctx = pick([
            { d1: 'une conduite', d2: 'une gaine électrique' },
            { d1: 'une poutre', d2: 'un câble de haubanage' },
            { d1: 'la trajectoire d\'un drone', d2: 'celle d\'un second drone' }
          ]);
          const x = rand(1, 4), y = rand(-4, 4), z = rand(1, 4);
          const k = rand(2, 4);
          return {
            statement: `Dans l'espace, ${ctx.d1} est dirigée par $\\vec{u}(${x};${y};${z})$ et ${ctx.d2} par $\\vec{v}(${k * x};${k * y};${k * z})$.<br/><br/>Ces deux vecteurs sont colinéaires : déterminer le réel $k$ tel que $\\vec{v} = k\\,\\vec{u}$.`,
            answer: k, tolerance: 0, unit: '',
            hint: `Compare les coordonnées une à une : $${k * x} = k \\times ${x}$. Vérifie ensuite que le MÊME $k$ convient pour les deux autres coordonnées — c'est cette vérification qui fait la preuve.`,
            solution: [
              `Colinéarité : il existe $k$ tel que chaque coordonnée de $\\vec{v}$ soit $k$ fois celle de $\\vec{u}$`,
              `Première coordonnée : $k = \\dfrac{${k * x}}{${x}} = ${k}$`,
              `Vérification sur les deux autres : $${k} \\times ${y} = ${k * y}$ et $${k} \\times ${z} = ${k * z}$ — le même $k$ convient partout, donc $k = ${k}$`
            ]
          };
        }

        /* TÂCHE 3 — produit scalaire en 3D. Trois produits et une somme :
           c'est l'outil qui sert à tout le reste du chapitre. */
        if (tache === 'scalaire') {
          const ctx = pick([
            { intro: 'Deux forces appliquées en un même point ont pour coordonnées' },
            { intro: 'Deux arêtes issues d\'un même sommet sont dirigées par' },
            { intro: 'Deux vecteurs vitesse sont donnés par' }
          ]);
          const a = [rand(-4, 4), rand(-4, 4), rand(-4, 4)];
          const b = [rand(-4, 4), rand(-4, 4), rand(-4, 4)];
          const res = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
          return {
            statement: `${ctx.intro} $\\vec{u}(${a[0]};${a[1]};${a[2]})$ et $\\vec{v}(${b[0]};${b[1]};${b[2]})$.<br/><br/>Calculer le produit scalaire $\\vec{u} \\cdot \\vec{v}$.`,
            answer: res, tolerance: 0, unit: '',
            hint: `En coordonnées, le produit scalaire est la somme des produits terme à terme : $x_u x_v + y_u y_v + z_u z_v$. Attention aux signes des coordonnées négatives.`,
            solution: [
              `$\\vec{u} \\cdot \\vec{v} = (${a[0]}) \\times (${b[0]}) + (${a[1]}) \\times (${b[1]}) + (${a[2]}) \\times (${b[2]})$`,
              `$= ${a[0] * b[0]} + ${a[1] * b[1]} + ${a[2] * b[2]}$`,
              `$= ${res}$${res === 0 ? ' — le produit scalaire est nul, donc les deux vecteurs sont orthogonaux.' : ''}`
            ]
          };
        }

        /* TÂCHE 4 — appartenance d'un point à un plan. On substitue, et on
           regarde si l'équation est vérifiée. La tâche la plus simple du
           chapitre, et celle qui ancre le sens d'une équation de plan. */
        if (tache === 'appartient') {
          const ctx = pick([
            { quoi: 'un capteur', ou: 'la façade' },
            { quoi: 'un point de fixation', ou: 'le pan de toiture' },
            { quoi: 'un repère de chantier', ou: 'la dalle' }
          ]);
          const a = rand(1, 3), b = rand(1, 3), c = rand(1, 3);
          const px = rand(-3, 3), py = rand(-3, 3), pz = rand(-3, 3);
          // On construit d pour que le point appartienne au plan, puis on
          // demande la valeur du premier membre : elle vaut donc 0.
          const d = -(a * px + b * py + c * pz);
          const res = a * px + b * py + c * pz + d;
          return {
            statement: `La position de ${ctx.quoi} est $M(${px};${py};${pz})$ et ${ctx.ou} a pour équation $${a}x + ${b}y + ${c}z ${d >= 0 ? '+ ' + d : d} = 0$.<br/><br/>Calculer la valeur du premier membre $${a}x + ${b}y + ${c}z ${d >= 0 ? '+ ' + d : d}$ pour le point $M$. (Si elle est nulle, le point appartient au plan.)`,
            answer: res, tolerance: 0, unit: '',
            hint: `Remplace $x$, $y$ et $z$ par les coordonnées de $M$, puis calcule. Un point appartient au plan exactement quand cette valeur vaut $0$.`,
            solution: [
              `On remplace : $${a} \\times (${px}) + ${b} \\times (${py}) + ${c} \\times (${pz}) ${d >= 0 ? '+ ' + d : d}$`,
              `$= ${a * px} + ${b * py} + ${c * pz} ${d >= 0 ? '+ ' + d : d}$`,
              `$= ${res}$, donc $M$ appartient bien au plan.`
            ]
          };
        }

        /* TÂCHE 5 — équation de plan à partir d'un point et d'une normale.
           C'est la tâche qui fait comprendre que a, b, c SONT la normale :
           l'élève les recopie, puis ne cherche plus que d. */
        if (tache === 'equationPlan') {
          const ctx = pick([
            { quoi: 'd\'une plaque à souder' },
            { quoi: 'd\'un pan de toiture' },
            { quoi: 'du sol d\'une scène 3D' }
          ]);
          const n = [rand(1, 4), rand(-4, 4), rand(1, 4)];
          const p = [rand(-3, 3), rand(-3, 3), rand(-3, 3)];
          const d = -(n[0] * p[0] + n[1] * p[1] + n[2] * p[2]);
          return {
            // 2026-09-14 : « une équation de le plan... » sortait de la
            // concatenation directe. Le decor porte desormais un COMPLEMENT
            // (« d'une plaque a souder »), et l'article est dans la phrase.
            statement: `On cherche une équation du plan ${ctx.quoi}, qui passe par le point $A(${p[0]};${p[1]};${p[2]})$ et admet $\\vec{n}(${n[0]};${n[1]};${n[2]})$ pour vecteur normal.<br/><br/>L'équation s'écrit $${n[0]}x ${n[1] >= 0 ? '+ ' + n[1] : n[1]}y + ${n[2]}z + d = 0$. Déterminer $d$.`,
            answer: d, tolerance: 0, unit: '',
            hint: `Les coefficients de $x$, $y$ et $z$ sont DÉJÀ les coordonnées du vecteur normal : il n'y a rien à chercher de ce côté. Écris que le point $A$ vérifie l'équation, et isole $d$.`,
            solution: [
              `Le vecteur normal donne directement les trois premiers coefficients : $${n[0]}x ${n[1] >= 0 ? '+ ' + n[1] : n[1]}y + ${n[2]}z + d = 0$`,
              `Le point $A$ appartient au plan, donc ses coordonnées vérifient l'équation : $${n[0]} \\times (${p[0]}) + (${n[1]}) \\times (${p[1]}) + ${n[2]} \\times (${p[2]}) + d = 0$`,
              `$${n[0] * p[0] + n[1] * p[1] + n[2] * p[2]} + d = 0$, donc $d = ${d}$`
            ]
          };
        }

        /* TÂCHE 6 — milieu d'un segment de l'espace. La formule du plan se
           prolonge sans surprise ; c'est justement ce qu'il faut faire
           constater, plutôt que de la réénoncer. */
        if (tache === 'milieu') {
          const ctx = pick([
            { quoi: 'le point d\'accrochage central d\'un câble' },
            { quoi: 'le centre de gravité approché d\'une barre' },
            { quoi: 'le point de relais à mi-parcours d\'un drone' }
          ]);
          // On force des sommes paires pour que la coordonnee demandee tombe juste.
          const ax = rand(-4, 4), bx = ax + 2 * rand(1, 4);
          const ay = rand(-4, 4), by = ay + 2 * rand(-3, 3);
          const az = rand(-4, 4), bz = az + 2 * rand(1, 4);
          const res = (az + bz) / 2;
          return {
            statement: `On cherche ${ctx.quoi}, milieu $I$ du segment $[AB]$ avec $A(${ax};${ay};${az})$ et $B(${bx};${by};${bz})$.<br/><br/>Calculer la <strong>cote</strong> $z_I$ du point $I$.`,
            answer: res, tolerance: 0, unit: '',
            hint: `La formule du milieu est la même qu'en géométrie plane, avec une coordonnée de plus : chaque coordonnée de $I$ est la moyenne des deux coordonnées correspondantes.`,
            solution: [
              `Milieu d'un segment de l'espace : $z_I = \\dfrac{z_A + z_B}{2}$`,
              `$z_I = \\dfrac{${az} + ${bz}}{2} = \\dfrac{${az + bz}}{2}$`,
              `$z_I = ${res}$`
            ]
          };
        }

        /* TÂCHE 7 — trouver le paramètre qui rend deux vecteurs orthogonaux.
           L'élève doit poser le produit scalaire ÉGAL À ZÉRO, ce qui n'est
           plus un calcul mais une équation. C'est la tâche qui sépare
           « appliquer une formule » de « s'en servir ». */
        const ctx = pick([
          { quoi: 'deux tirants d\'une charpente' },
          { quoi: 'deux axes d\'un bras robotisé' },
          { quoi: 'deux arêtes issues d\'un même sommet' }
        ]);
        const p = rand(1, 4), q = rand(1, 4), r = rand(1, 4), s = rand(1, 4);
        // u(a ; p ; q) et v(r ; s ; -p*s/q)... on fixe plutot : u(a;p;q), v(r;s;t)
        // produit = a*r + p*s + q*t = 0 => a = -(p*s + q*t)/r. On choisit r=1.
        const t = rand(1, 3);
        const aInc = -(p * s + q * t);
        return {
          statement: `On veut que ${ctx.quoi} soient perpendiculaires. Ils sont dirigés par $\\vec{u}(a;${p};${q})$ et $\\vec{v}(1;${s};${t})$.<br/><br/>Déterminer la valeur de $a$ pour laquelle $\\vec{u}$ et $\\vec{v}$ sont orthogonaux.`,
          answer: aInc, tolerance: 0, unit: '',
          hint: `Deux vecteurs sont orthogonaux exactement quand leur produit scalaire est NUL. Écris ce produit scalaire en fonction de $a$, puis résous l'équation obtenue.`,
          solution: [
            `Orthogonalité : $\\vec{u} \\cdot \\vec{v} = 0$`,
            `$a \\times 1 + ${p} \\times ${s} + ${q} \\times ${t} = 0$, soit $a + ${p * s + q * t} = 0$`,
            `$a = ${aInc}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Dans le repère orthonormé de l\'espace, on donne $A(1;0;0)$, $B(0;2;0)$, $C(0;0;3)$.',
      tasks: [
        'Donner les vecteurs $\\vec{AB}$ et $\\vec{AC}$.',
        'Calculer $\\vec{AB}\\cdot\\vec{AC}$.',
        'Déterminer l\'équation du plan $ABC$ sachant que le vecteur normal est $\\vec{n}(6;3;2)$ (admis).'
      ],
      solutions: [
        '$\\vec{AB}(-1;2;0)$ ; $\\vec{AC}(-1;0;3)$.',
        '$\\vec{AB}\\cdot\\vec{AC}=(-1)(-1)+(2)(0)+(0)(3)=1$.',
        'Plan contenant $A(1;0;0)$, normal $\\vec{n}(6;3;2)$ : $6(x-1)+3(y-0)+2(z-0)=0 \\Rightarrow 6x+3y+2z=6$.'
      ],
      finalAnswer: '$\\vec{AB}\\cdot\\vec{AC}=1$ ; équation du plan : $6x+3y+2z=6$.'
    },

    evaluation: {
      title: 'Évaluation — Géométrie dans l\'espace',
      duration: '35 min',
      questions: [
        {
          statement: 'Soit $A(2;1;-1)$ et $B(4;-1;3)$. Calculer la norme du vecteur $\\vec{AB}$.',
          type: 'numeric',
          answer: 4.90,
          tolerance: 0.05,
          unit: '',
          points: 2,
          correction: '$\\vec{AB}(2;-2;4)$. $\\|\\vec{AB}\\| = \\sqrt{4+4+16} = \\sqrt{24} = 2\\sqrt{6} \\approx 4{,}90$.'
        },
        {
          statement: 'Deux droites de l\'espace ont des vecteurs directeurs non colinéaires. Peut-on conclure qu\'elles sont sécantes ?',
          type: 'multiple-choice',
          options: ['Oui, deux droites non parallèles se croisent toujours', 'Non, elles pourraient être gauches (ni parallèles ni sécantes)', 'Oui, si elles ne sont pas parallèles, elles ont un point commun', 'Non, mais elles sont forcément perpendiculaires'],
          answer: 1,
          points: 2,
          correction: 'En 3D, deux droites non parallèles peuvent être GAUCHES : elles n\'ont pas de point d\'intersection bien qu\'elles ne soient pas parallèles. Il faut résoudre le système pour vérifier l\'existence d\'un point commun.'
        },
        {
          statement: 'Calculer $\\vec{u}(1;3;-2)\\cdot\\vec{v}(2;-1;4)$.',
          type: 'numeric',
          answer: -9,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 1 \\times 2 + 3 \\times (-1) + (-2) \\times 4 = 2 - 3 - 8 = -9$.'
        },
        {
          statement: 'L\'équation du plan passant par $A(1;0;0)$ de vecteur normal $\\vec{n}(2;3;-1)$ est :',
          type: 'multiple-choice',
          options: ['$2x+3y-z-2=0$', '$2x+3y-z+2=0$', '$x+y+z-1=0$', '$2x+3y-z=0$'],
          answer: 0,
          points: 2,
          correction: 'Plan : $2(x-1)+3(y-0)+(-1)(z-0)=0$, soit $2x-2+3y-z=0$, d\'où $2x+3y-z-2=0$.'
        },
        {
          statement: 'Soit $\\vec{u}(a;1;2)$ et $\\vec{v}(3;-6;a)$. Trouver la valeur de $a$ pour que $\\vec{u} \\perp \\vec{v}$.',
          type: 'numeric',
          answer: 1.2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 3a + 1 \\times (-6) + 2a = 3a - 6 + 2a = 5a - 6 = 0$. Donc $a = \\dfrac{6}{5} = 1{,}2$.'
        }
      ]
    }
  });
