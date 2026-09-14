/* =========================================================
   Spark Learning – data/lycee-1re/1re-geometrie-reperee.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-geometrie-reperee',
    level: 2, subject: 'maths',
    icon: '📌',
    title: 'Géométrie repérée',
    subtitle: 'Vecteurs colinéaires, équations de droites',
    keywords: ['Vecteur', 'Colinéarité', 'Équation de droite', 'Droite cartésienne'],
    physics: false,
    cours: {
      intro: 'Voici trois points : $A(0\\,;\\,1)$, $B(3\\,;\\,3)$ et $C(6\\,;\\,6)$. Sont-ils alignés ?<br/><br/>Place-les sur un quadrillage et regarde : ils <strong>semblent</strong> l\'être. Trace la droite au crayon, elle passe à un cheveu du troisième point. Mais « à un cheveu » n\'est pas une réponse mathématique, et l\'épaisseur de ton trait suffirait à cacher l\'écart.<br/><br/>Reprends alors avec $C(6\\,;\\,5)$ : le dessin est presque identique, et cette fois les points sont vraiment alignés. <strong>Deux figures que l\'œil ne distingue pas, et deux réponses opposées.</strong><br/><br/>Aucun dessin, si soigné soit-il, ne tranchera jamais cette question. Il faut un calcul qui réponde par oui ou par non — et qui, en prime, dise de <strong>combien</strong> on s\'écarte de l\'alignement. C\'est tout l\'objet de ce chapitre.',
      definitions: [
        { term: 'Vecteurs colinéaires', def: 'Deux vecteurs $\\vec{u}(a\\,;\\,b)$ et $\\vec{v}(c\\,;\\,d)$ sont <strong>colinéaires</strong> si $ad - bc = 0$ (déterminant nul). Ils sont alors parallèles (même direction).' },
        { term: 'Déterminant', def: 'Le <strong>déterminant</strong> de $\\vec{u}(a\\,;\\,b)$ et $\\vec{v}(c\\,;\\,d)$ est $\\det(\\vec{u},\\vec{v}) = ad - bc$. Il est nul si et seulement si les vecteurs sont colinéaires.' },
        { term: 'Vecteur directeur', def: 'Un <strong>vecteur directeur</strong> d\'une droite est un vecteur parallèle à cette droite. Pour $ax + by + c = 0$, un vecteur directeur est $(-b\\,;\\,a)$.' },
        { term: 'Vecteur normal', def: 'Un <strong>vecteur normal</strong> à une droite est perpendiculaire à celle-ci. Pour $ax + by + c = 0$, le vecteur normal est $(a\\,;\\,b)$ (les coefficients de $x$ et $y$).' }
      ],
      method: {
        title: 'Tester la colinéarité et écrire l\'équation d\'une droite',
        steps: [
          '<strong>Colinéarité</strong> : $\\vec{u}(x;y)$ et $\\vec{v}(x\';y\')$ colinéaires $\\Leftrightarrow xy\'-x\'y=0$ (déterminant nul).',
          '<strong>Équation de droite</strong> passant par $A(x_0;y_0)$ de vecteur directeur $\\vec{u}(a;b)$ : $b(x-x_0)-a(y-y_0)=0$.',
          '<strong>Forme simple</strong> : utiliser $y=mx+p$ si la droite n\'est pas verticale.',
          '<strong>Alignement</strong> : trois points $A$, $B$, $C$ sont alignés si $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires.'
        ]
      },
      example: {
        statement: 'Déterminer l\'équation de la droite passant par $A(1\\,;\\,3)$ et $B(4\\,;\\,-1)$ sous la forme $ax + by + c = 0$.',
        steps: [
          'Vecteur directeur : $\\vec{AB} = (4-1\\,;\\,-1-3) = (3\\,;\\,-4)$.',
          'Un vecteur normal est $(4\\,;\\,3)$ (on échange et on change un signe). L\'équation est $4x + 3y + c = 0$.',
          'On remplace par $A(1\\,;\\,3)$ : $4 \\times 1 + 3 \\times 3 + c = 0$, soit $13 + c = 0$, d\'où $c = -13$.'
        ],
        answer: 'L\'équation de la droite $(AB)$ est $4x + 3y - 13 = 0$. Vérification en $B$ : $4 \\times 4 + 3 \\times (-1) - 13 = 16 - 3 - 13 = 0$ ✓.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Droite, vecteur normal et vecteur directeur',
        title: 'La droite $4x + 3y - 13 = 0$ : vecteur normal $\\vec{n}$ et vecteur directeur $\\vec{u}$ (exemple du cours)',
        description: 'La droite $(AB)$ d\'équation $4x+3y-13=0$ (exemple du cours) passe par $A(1\\,;\\,3)$ et $B(4\\,;\\,-1)$.<br/>Son vecteur normal $\\vec{n}(4\\,;\\,3)$ et son vecteur directeur $\\vec{u}(-3\\,;\\,4)$ sont tracés depuis $A$, perpendiculaires entre eux.',
        svg: `
          <svg viewBox="0 0 300 340" role="img" aria-labelledby="geored-diagram-title geored-diagram-desc">
            <title id="geored-diagram-title">Droite avec vecteur normal et vecteur directeur</title>
            <desc id="geored-diagram-desc">Repere orthonorme montrant la droite d'equation 4x + 3y - 13 = 0, passant par les points A(1;3) et B(4;-1). Le vecteur normal n(4;3) et le vecteur directeur u(-3;4) sont traces depuis A, perpendiculaires entre eux, avec un marqueur d'angle droit.</desc>
            <defs>
              <marker id="arrow-1re-geored" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <line class="grid-line" x1="10" y1="10" x2="10" y2="310"></line>
            <line class="grid-line" x1="40" y1="10" x2="40" y2="310"></line>
            <line class="grid-line" x1="100" y1="10" x2="100" y2="310"></line>
            <line class="grid-line" x1="130" y1="10" x2="130" y2="310"></line>
            <line class="grid-line" x1="160" y1="10" x2="160" y2="310"></line>
            <line class="grid-line" x1="190" y1="10" x2="190" y2="310"></line>
            <line class="grid-line" x1="220" y1="10" x2="220" y2="310"></line>
            <line class="grid-line" x1="10" y1="310" x2="220" y2="310"></line>
            <line class="grid-line" x1="10" y1="280" x2="220" y2="280"></line>
            <line class="grid-line" x1="10" y1="220" x2="220" y2="220"></line>
            <line class="grid-line" x1="10" y1="190" x2="220" y2="190"></line>
            <line class="grid-line" x1="10" y1="160" x2="220" y2="160"></line>
            <line class="grid-line" x1="10" y1="130" x2="220" y2="130"></line>
            <line class="grid-line" x1="10" y1="100" x2="220" y2="100"></line>
            <line class="grid-line" x1="10" y1="70" x2="220" y2="70"></line>
            <line class="grid-line" x1="10" y1="40" x2="220" y2="40"></line>
            <line class="grid-line" x1="10" y1="10" x2="220" y2="10"></line>

            <line class="axis" x1="5" y1="250" x2="280" y2="250" marker-end="url(#arrow-1re-geored)"></line>
            <line class="axis" x1="70" y1="325" x2="70" y2="8" marker-end="url(#arrow-1re-geored)"></line>
            <text class="axis-label" x="284" y="254">x</text>
            <text class="axis-label" x="76" y="14">y</text>
            <text class="tick-label" x="58" y="264" text-anchor="middle">O</text>
            <text class="tick-label" x="10" y="266" text-anchor="middle">-2</text>
            <text class="tick-label" x="220" y="266" text-anchor="middle">5</text>
            <text class="tick-label" x="50" y="313" text-anchor="middle">-2</text>
            <text class="tick-label" x="50" y="18" text-anchor="middle">8</text>

            <line class="frame-line" x1="37.0" y1="76.0" x2="226.0" y2="328.0"></line>
            <text class="annotation-label" x="128" y="205" text-anchor="middle">(d) : 4x + 3y − 13 = 0</text>

            <circle class="plot-point" cx="100" cy="160" r="4"></circle>
            <text class="tick-label" x="108" y="172">A (1 ; 3)</text>
            <circle class="plot-point" cx="190" cy="280" r="4"></circle>
            <text class="tick-label" x="150" y="272">B (4 ; -1)</text>

            <line class="curve-main" x1="100" y1="160" x2="220" y2="70" marker-end="url(#arrow-1re-geored)"></line>
            <circle class="plot-point-alt" cx="220" cy="70" r="3"></circle>
            <text class="annotation-label" x="224" y="66">n (4 ; 3)</text>

            <line class="curve-main" x1="100" y1="160" x2="10" y2="40" marker-end="url(#arrow-1re-geored)"></line>
            <circle class="plot-point-alt" cx="10" cy="40" r="3"></circle>
            <text class="annotation-label" x="14" y="34" text-anchor="start">u (-3 ; 4)</text>

            <path class="guide-line" d="M111.2,151.6 L102.8,140.4 L91.6,148.8" fill="none"></path>
            <text class="label-soft" x="100" y="132" text-anchor="middle">90°</text>
          </svg>
        `,
        notes: [
          '$\\vec{n} \\cdot \\vec{u} = 4 \\times (-3) + 3 \\times 4 = -12 + 12 = 0$ : le vecteur normal et le vecteur directeur sont bien <strong>orthogonaux</strong>, comme pour toute droite $ax+by+c=0$.',
          'Le vecteur directeur $\\vec{u}(-3\\,;\\,4)$ est bien parallèle à la droite : en partant de $A(1\\,;\\,3)$ et en ajoutant $\\vec{u}$, on obtient $(-2\\,;\\,7)$, qui vérifie $4\\times(-2)+3\\times7-13 = -8+21-13 = 0$ ✓.',
          'On retrouve aussi $\\vec{AB}(3\\,;\\,-4) = -\\vec{u}$ : $\\vec{AB}$ et $\\vec{u}$ sont colinéaires (même direction, sens opposé), ce qui confirme que $\\vec{u}$ dirige bien la droite $(AB)$.',
          'Le vecteur normal $\\vec{n}(4\\,;\\,3)$ correspond exactement aux coefficients de $x$ et $y$ dans l\'équation $4x+3y-13=0$ — c\'est la lecture directe évoquée dans le cours.'
        ],
        reading: 'Repère l\'angle droit marqué en $A$ : c\'est la signature visuelle que $\\vec{n}$ (perpendiculaire à la droite) et $\\vec{u}$ (parallèle à la droite) jouent des rôles opposés.',
        caption: 'Droite $(AB)$ d\'équation $4x+3y-13=0$ (exemple du cours), avec son vecteur normal $\\vec{n}(4\\,;\\,3)$ et son vecteur directeur $\\vec{u}(-3\\,;\\,4)$.'
      },
      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14.

         Principe du cahier des charges (section 9) : une figure par
         MALENTENDU, pas une figure par formule.

         Le schéma d'ouverture du chapitre traite déjà le piège nommé dans le
         cours (normal contre directeur). Les trois schémas ci-dessous prennent
         donc les trois AUTRES malentendus du chapitre :
           1. le déterminant, appris comme un critère magique : on montre ce
              qu'il mesure, en comparant deux triplets que l'œil ne sépare pas ;
           2. le CERCLE, dont l'équation est récitée sans que l'élève voie
              qu'elle ne dit qu'une chose — la distance au centre vaut le rayon ;
           3. la DROITE, dont les deux écritures ($y = mx+p$ et $ax+by+c=0$)
              sont vécues comme deux objets sans rapport.

         Le cercle et la droite sont les deux figures explicitement attendues
         pour ce chapitre.

         TOUTES les coordonnées sont CALCULÉES et vérifiées par
         scripts/manuel/tests/diagrams-1re.test.js : les points annoncés sur le
         cercle y sont à distance EXACTEMENT égale au rayon, et les points
         annoncés sur la droite vérifient son équation au flottant près. Un
         point à $4{,}998$ d'un centre de rayon $5$ est invisible à la
         relecture et faux dans le livre. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Ce que mesure le déterminant',
          title: 'Alignés ou presque : ce que l\'œil ne voit pas',
          description: 'Le critère « $\\det = 0$ donc alignés » s\'apprend vite et ne veut rien dire tant qu\'on n\'a pas vu ce que le déterminant <strong>mesure</strong>.<br/><br/>Les deux dessins ci-dessous partagent les mêmes points $A$ et $B$. Seul $C$ change, et d\'un seul carreau. À gauche les trois points sont alignés, à droite ils ne le sont pas — et c\'est le calcul, pas le coup d\'œil, qui permet de le dire.',
          svg: `
            <svg viewBox="0 0 430 236" role="img" aria-labelledby="geo-det-title geo-det-desc">
              <title id="geo-det-title">Deux triplets de points, alignes a gauche et non alignes a droite</title>
              <desc id="geo-det-desc">Deux dessins cote a cote, a la meme echelle. A gauche, les points A, B et C ont pour coordonnees zero et un, trois et trois, six et cinq : ils sont exactement alignes sur une droite, et le determinant des vecteurs AB et AC vaut zero. A droite, A et B sont les memes mais C se trouve en six et six, soit un carreau plus haut : le point sort legerement de la droite passant par A et B, le determinant vaut trois, et les trois points ne sont pas alignes. L'ecart est trop faible pour se voir avec certitude.</desc>

              <!-- Dessin de gauche : alignes, determinant nul. -->
              <line class="grid-line" x1="14" y1="52" x2="190" y2="52"></line>
              <line class="grid-line" x1="14" y1="96" x2="190" y2="96"></line>
              <line class="grid-line" x1="14" y1="140" x2="190" y2="140"></line>
              <line class="grid-line" x1="14" y1="184" x2="190" y2="184"></line>
              <line class="grid-line" x1="36" y1="42" x2="36" y2="194"></line>
              <line class="grid-line" x1="80" y1="42" x2="80" y2="194"></line>
              <line class="grid-line" x1="124" y1="42" x2="124" y2="194"></line>
              <line class="grid-line" x1="168" y1="42" x2="168" y2="194"></line>

              <line class="curve-main" x1="22.8" y1="182.8" x2="190" y2="71.3"></line>
              <circle class="plot-point" cx="36" cy="174" r="5"></circle>
              <circle class="plot-point" cx="102" cy="130" r="5"></circle>
              <circle class="plot-point" cx="168" cy="86" r="5"></circle>
              <text class="tick-label" x="28" y="192" text-anchor="middle">A</text>
              <text class="tick-label" x="94" y="148" text-anchor="middle">B</text>
              <text class="tick-label" x="176" y="80" text-anchor="middle">C</text>
              <text class="annotation-label" x="102" y="216" text-anchor="middle">determinant nul</text>
              <text class="tick-label" x="102" y="232" text-anchor="middle">points alignes</text>

              <!-- Dessin de droite : NON alignes, determinant 3. Memes A et B. -->
              <line class="grid-line" x1="226" y1="52" x2="402" y2="52"></line>
              <line class="grid-line" x1="226" y1="96" x2="402" y2="96"></line>
              <line class="grid-line" x1="226" y1="140" x2="402" y2="140"></line>
              <line class="grid-line" x1="226" y1="184" x2="402" y2="184"></line>
              <line class="grid-line" x1="248" y1="42" x2="248" y2="194"></line>
              <line class="grid-line" x1="292" y1="42" x2="292" y2="194"></line>
              <line class="grid-line" x1="336" y1="42" x2="336" y2="194"></line>
              <line class="grid-line" x1="380" y1="42" x2="380" y2="194"></line>

              <!-- La droite (AB) prolongee : elle passe SOUS le point C. -->
              <line class="guide-line" x1="234.8" y1="182.8" x2="402" y2="71.3"></line>
              <circle class="plot-point" cx="248" cy="174" r="5"></circle>
              <circle class="plot-point" cx="314" cy="130" r="5"></circle>
              <circle class="plot-point-alt" cx="380" cy="64" r="5"></circle>
              <text class="tick-label" x="240" y="192" text-anchor="middle">A</text>
              <text class="tick-label" x="306" y="148" text-anchor="middle">B</text>
              <text class="tick-label" x="388" y="58" text-anchor="middle">C</text>
              <text class="annotation-label" x="314" y="216" text-anchor="middle">determinant 3</text>
              <text class="tick-label" x="314" y="232" text-anchor="middle">points non alignes</text>
            </svg>
          `,
          notes: [
            'À gauche : $A(0\\,;\\,1)$, $B(3\\,;\\,3)$, $C(6\\,;\\,5)$, donc $\\vec{AB}(3\\,;\\,2)$ et $\\vec{AC}(6\\,;\\,4)$.',
            'Le déterminant vaut $\\det(\\vec{AB},\\vec{AC}) = 3 \\times 4 - 2 \\times 6 = 12 - 12 = 0$ : les points sont <strong>alignés</strong>.',
            'À droite, seul $C$ change : il passe en $(6\\,;\\,6)$, donc $\\vec{AC}(6\\,;\\,5)$.',
            'Le déterminant vaut alors $3 \\times 5 - 2 \\times 6 = 15 - 12 = 3 \\neq 0$ : les points ne sont <strong>pas</strong> alignés.',
            'Un déterminant de $3$ pour un écart d\'un seul carreau : c\'est peu sur le dessin, et pourtant parfaitement net dans le calcul. <strong>Le déterminant mesure l\'écart à l\'alignement</strong>, il ne se contente pas de le signaler.'
          ],
          reading: 'Regarde d\'abord les deux dessins sans lire les légendes, et essaie de dire lequel est aligné : tu ne peux pas en être sûr. Puis suis la droite en pointillés du dessin de droite — elle passe juste en dessous du point $C$. C\'est précisément pour ces cas-là que le déterminant existe : l\'œil hésite, le calcul tranche.',
          caption: 'Mêmes points $A(0\\,;\\,1)$ et $B(3\\,;\\,3)$ ; à gauche $C(6\\,;\\,5)$ donne $\\det = 0$ (alignés), à droite $C(6\\,;\\,6)$ donne $\\det = 3$ (non alignés).'
        },
        {
          theme: 'maths',
          kicker: 'Le cercle',
          title: 'L\'équation d\'un cercle ne dit qu\'une chose : une distance',
          description: 'L\'écriture $(x-a)^2 + (y-b)^2 = r^2$ s\'apprend souvent comme une formule de plus. Elle n\'est pourtant que le théorème de Pythagore appliqué à un point courant : <strong>la distance au centre vaut le rayon</strong>.<br/><br/>Sur le cercle de centre $\\Omega(3\\,;\\,2)$ et de rayon $5$, quatre points à coordonnées entières permettent de le vérifier de tête, sans aucune racine carrée à poser.',
          svg: `
            <svg viewBox="0 0 400 300" role="img" aria-labelledby="geo-cercle-title geo-cercle-desc">
              <title id="geo-cercle-title">Cercle de centre trois et deux, de rayon cinq</title>
              <desc id="geo-cercle-desc">Repere gradue portant un cercle de centre omega, de coordonnees trois et deux, et de rayon cinq. Quatre points a coordonnees entieres sont marques sur ce cercle : huit et deux, trois et sept, moins un et cinq, six et moins deux. Pour chacun, l'ecart horizontal et l'ecart vertical au centre forment un triangle rectangle dont l'hypotenuse est le rayon. Un rayon horizontal est trace du centre vers le point huit et deux, cote cinq.</desc>

              <line class="grid-line" x1="29" y1="46" x2="299" y2="46"></line>
              <line class="grid-line" x1="29" y1="67" x2="299" y2="67"></line>
              <line class="grid-line" x1="29" y1="88" x2="299" y2="88"></line>
              <line class="grid-line" x1="29" y1="109" x2="299" y2="109"></line>
              <line class="grid-line" x1="29" y1="130" x2="299" y2="130"></line>
              <line class="grid-line" x1="29" y1="151" x2="299" y2="151"></line>
              <line class="grid-line" x1="29" y1="172" x2="299" y2="172"></line>
              <line class="grid-line" x1="29" y1="193" x2="299" y2="193"></line>
              <line class="grid-line" x1="29" y1="214" x2="299" y2="214"></line>
              <line class="grid-line" x1="29" y1="235" x2="299" y2="235"></line>
              <line class="grid-line" x1="29" y1="256" x2="299" y2="256"></line>
              <line class="grid-line" x1="29" y1="277" x2="299" y2="277"></line>
              <line class="grid-line" x1="50" y1="46" x2="50" y2="277"></line>
              <line class="grid-line" x1="71" y1="46" x2="71" y2="277"></line>
              <line class="grid-line" x1="113" y1="46" x2="113" y2="277"></line>
              <line class="grid-line" x1="134" y1="46" x2="134" y2="277"></line>
              <line class="grid-line" x1="176" y1="46" x2="176" y2="277"></line>
              <line class="grid-line" x1="197" y1="46" x2="197" y2="277"></line>
              <line class="grid-line" x1="218" y1="46" x2="218" y2="277"></line>
              <line class="grid-line" x1="239" y1="46" x2="239" y2="277"></line>
              <line class="grid-line" x1="281" y1="46" x2="281" y2="277"></line>

              <line class="axis" x1="29" y1="214" x2="310" y2="214"></line>
              <line class="axis" x1="92" y1="290" x2="92" y2="40"></line>
              <text class="axis-label" x="316" y="218">x</text>
              <text class="axis-label" x="98" y="36">y</text>
              <text class="tick-label" x="84" y="228" text-anchor="end">0</text>

              <circle class="frame-line" cx="155" cy="172" r="105" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></circle>
              <circle class="plot-point" cx="155" cy="172" r="5"></circle>
              <text class="tick-label" x="155" y="192" text-anchor="middle">centre</text>

              <!-- Rayon horizontal, cote hors de la zone remplie. -->
              <line class="focus-line" x1="155" y1="172" x2="260" y2="172"></line>
              <text class="annotation-label" x="207" y="164" text-anchor="middle">5</text>

              <circle class="plot-point-alt" cx="260" cy="172" r="4"></circle>
              <circle class="plot-point-alt" cx="155" cy="67" r="4"></circle>
              <circle class="plot-point-alt" cx="71" cy="109" r="4"></circle>
              <circle class="plot-point-alt" cx="218" cy="256" r="4"></circle>
              <text class="tick-label" x="268" y="168" text-anchor="start">8 ; 2</text>
              <text class="tick-label" x="155" y="58" text-anchor="middle">3 ; 7</text>
              <text class="tick-label" x="63" y="104" text-anchor="end">-1 ; 5</text>
              <text class="tick-label" x="226" y="272" text-anchor="start">6 ; -2</text>
            </svg>
          `,
          notes: [
            'L\'équation du cercle s\'écrit $(x-3)^2 + (y-2)^2 = 25$, puisque le centre est $\\Omega(3\\,;\\,2)$ et le rayon $r = 5$.',
            'Pour $(8\\,;\\,2)$ : $(8-3)^2 + (2-2)^2 = 25 + 0 = 25$ ✓. L\'écart est purement horizontal.',
            'Pour $(3\\,;\\,7)$ : $(3-3)^2 + (7-2)^2 = 0 + 25 = 25$ ✓. L\'écart est purement vertical.',
            'Pour $(-1\\,;\\,5)$ : $(-4)^2 + 3^2 = 16 + 9 = 25$ ✓, et pour $(6\\,;\\,-2)$ : $3^2 + (-4)^2 = 9 + 16 = 25$ ✓.',
            'Ces deux derniers sont le triangle $3$-$4$-$5$ : c\'est pour cela qu\'ils tombent sur des nœuds du quadrillage. <strong>Tester si un point appartient au cercle, c\'est simplement calculer une distance.</strong>'
          ],
          reading: 'Choisis un des quatre points marqués, puis compte les carreaux jusqu\'au centre : d\'abord horizontalement, puis verticalement. Élève ces deux nombres au carré, additionne : tu trouves toujours $25$, soit $5^2$. Tu viens d\'appliquer le théorème de Pythagore, et c\'est exactement ce que l\'équation du cercle écrit.',
          caption: 'Cercle de centre $\\Omega(3\\,;\\,2)$ et de rayon $5$, d\'équation $(x-3)^2+(y-2)^2=25$, avec quatre de ses points à coordonnées entières.'
        },
        {
          theme: 'maths',
          kicker: 'La droite',
          title: 'Une seule droite, deux écritures',
          description: 'La forme $y = mx + p$ vient de la seconde, la forme $ax + by + c = 0$ arrive en première, et beaucoup d\'élèves les rangent comme deux objets différents.<br/><br/>C\'est la <strong>même droite</strong>, et ses points le prouvent : ils vérifient les deux équations. La forme générale a seulement l\'avantage de savoir décrire aussi les droites verticales, que $y = mx+p$ ne peut pas écrire.',
          svg: `
            <svg viewBox="0 0 400 290" role="img" aria-labelledby="geo-droite-title geo-droite-desc">
              <title id="geo-droite-title">Une droite et ses points a coordonnees entieres</title>
              <desc id="geo-droite-desc">Repere gradue portant une droite descendante qui passe par les points zero et quatre, trois et deux, six et zero. Un vecteur normal, de coordonnees deux et trois, est trace depuis le point zero et quatre, perpendiculairement a la droite ; un petit carre marque cet angle droit. La droite a pour equation generale deux x plus trois y moins douze egale zero, et pour equation reduite y egale moins deux tiers x plus quatre.</desc>

              <line class="grid-line" x1="40" y1="28" x2="320" y2="28"></line>
              <line class="grid-line" x1="40" y1="56" x2="320" y2="56"></line>
              <line class="grid-line" x1="40" y1="84" x2="320" y2="84"></line>
              <line class="grid-line" x1="40" y1="112" x2="320" y2="112"></line>
              <line class="grid-line" x1="40" y1="140" x2="320" y2="140"></line>
              <line class="grid-line" x1="40" y1="168" x2="320" y2="168"></line>
              <line class="grid-line" x1="40" y1="196" x2="320" y2="196"></line>
              <line class="grid-line" x1="40" y1="252" x2="320" y2="252"></line>
              <line class="grid-line" x1="40" y1="28" x2="40" y2="252"></line>
              <line class="grid-line" x1="68" y1="28" x2="68" y2="252"></line>
              <line class="grid-line" x1="124" y1="28" x2="124" y2="252"></line>
              <line class="grid-line" x1="152" y1="28" x2="152" y2="252"></line>
              <line class="grid-line" x1="208" y1="28" x2="208" y2="252"></line>
              <line class="grid-line" x1="236" y1="28" x2="236" y2="252"></line>
              <line class="grid-line" x1="292" y1="28" x2="292" y2="252"></line>
              <line class="grid-line" x1="320" y1="28" x2="320" y2="252"></line>

              <line class="axis" x1="40" y1="224" x2="330" y2="224"></line>
              <line class="axis" x1="96" y1="262" x2="96" y2="24"></line>
              <text class="axis-label" x="336" y="228">x</text>
              <text class="axis-label" x="102" y="20">y</text>
              <text class="tick-label" x="88" y="238" text-anchor="end">0</text>

              <!-- La droite 2x + 3y - 12 = 0, tracee d'un bord a l'autre. -->
              <line class="curve-main" x1="54" y1="84" x2="306" y2="252"></line>

              <circle class="plot-point" cx="96" cy="112" r="5"></circle>
              <circle class="plot-point" cx="180" cy="168" r="5"></circle>
              <circle class="plot-point" cx="264" cy="224" r="5"></circle>
              <text class="tick-label" x="88" y="106" text-anchor="end">0 ; 4</text>
              <text class="tick-label" x="188" y="186" text-anchor="start">3 ; 2</text>
              <text class="tick-label" x="272" y="240" text-anchor="start">6 ; 0</text>

              <!-- Vecteur normal, trace depuis le point (0 ; 4). -->
              <line class="focus-line" x1="96" y1="112" x2="152" y2="28"></line>
              <polygon class="plot-point" points="152,28 145.4,35.5 153.1,35.7"></polygon>
              <text class="annotation-label" x="158" y="34" text-anchor="start">normal (2 ; 3)</text>

              <!-- Angle droit, code par un carre. -->
              <path class="grid-line" fill="none" d="M106,118.7 L112.6,108.7 L102.7,102"></path>

              <text class="annotation-label" x="212" y="118" text-anchor="middle">2x + 3y − 12 = 0</text>
              <text class="tick-label" x="212" y="138" text-anchor="middle">soit y = −2/3 x + 4</text>
            </svg>
          `,
          notes: [
            'Les trois points marqués vérifient la forme générale : pour $(0\\,;\\,4)$, $2 \\times 0 + 3 \\times 4 - 12 = 0$ ✓ ; pour $(3\\,;\\,2)$, $6 + 6 - 12 = 0$ ✓ ; pour $(6\\,;\\,0)$, $12 + 0 - 12 = 0$ ✓.',
            'Ils vérifient aussi la forme réduite : $-\\dfrac{2}{3} \\times 3 + 4 = 2$ ✓, et $-\\dfrac{2}{3} \\times 6 + 4 = 0$ ✓.',
            'Pour passer de l\'une à l\'autre, on isole $y$ : $3y = -2x + 12$, donc $y = -\\dfrac{2}{3}x + 4$. La pente $m = -\\dfrac{2}{3}$ et l\'ordonnée à l\'origine $p = 4$ se lisent alors directement.',
            'Le vecteur normal $\\vec{n}(2\\,;\\,3)$ se lit sur les coefficients de la forme générale, et un vecteur directeur est $\\vec{u}(-3\\,;\\,2)$.',
            'Contrôle : $\\vec{n} \\cdot \\vec{u} = 2 \\times (-3) + 3 \\times 2 = 0$ — ils sont bien perpendiculaires, comme le marque le carré de l\'angle droit.'
          ],
          reading: 'Prends un des trois points marqués et teste-le dans les deux équations écrites sur la figure : les deux sont vérifiées. C\'est la preuve qu\'il n\'y a qu\'une droite, décrite de deux façons. Choisis ensuite l\'écriture selon ce que tu cherches : la forme réduite si tu veux la pente, la forme générale si tu veux un vecteur normal.',
          caption: 'La droite $2x+3y-12=0$, c\'est-à-dire $y = -\\frac{2}{3}x + 4$, avec trois de ses points et son vecteur normal $\\vec{n}(2\\,;\\,3)$.'
        }
      ],
      formulas: [
        '$\\vec{u}(a;b)$ et $\\vec{v}(c;d)$ colinéaires $\\Leftrightarrow ad-bc=0$',
        'Droite de vecteur directeur $(a;b)$ passant par $(x_0;y_0)$ : $b(x-x_0)=a(y-y_0)$'
      ],
      recap: [
        'Colinéarité : $\\det(\\vec{u},\\vec{v}) = ad - bc = 0$. C\'est le test d\'alignement de trois points.',
        'Dans $ax + by + c = 0$ : $(a\\,;\\,b)$ est le vecteur <strong>normal</strong>, $(-b\\,;\\,a)$ est le vecteur <strong>directeur</strong>.',
        'Pour écrire l\'équation d\'une droite : trouver un vecteur directeur $\\vec{AB}$, en déduire le normal, puis utiliser un point.',
        'Pente $m = \\dfrac{y_B - y_A}{x_B - x_A}$ (si la droite n\'est pas verticale). Droite : $y = mx + p$.'
      ],
      piege: 'Dans $ax + by + c = 0$, le vecteur $(a\\,;\\,b)$ est le <strong>vecteur normal</strong> (perpendiculaire à la droite), pas le vecteur directeur !<br/><br/>Le <strong>vecteur directeur</strong> est $(-b\\,;\\,a)$ (parallèle à la droite). Ne pas les confondre dans l\'équation.'
    },
    quiz: [
      { q: '$\\vec{u}(2;3)$ et $\\vec{v}(4;6)$ sont-ils colinéaires ?', options: ['Non', 'Oui', 'Seulement si norme égale', 'Impossible à dire'], answer: 1, correction: 'On calcule le déterminant : $2 \\times 6 - 3 \\times 4 = 12 - 12 = 0$.<br/><br/>Le déterminant est nul, donc les vecteurs sont <strong>colinéaires</strong> (même direction). On remarque d\'ailleurs que $\\vec{v} = 2\\vec{u}$.' },
      { q: 'La droite $(d)$ a pour équation $3x + 2y - 6 = 0$. Un élève dit : "le vecteur directeur est $\\vec{u}(3\\,;\\,2)$." Quelle est son erreur ?', options: ['$(3\\,;\\,2)$ est le vecteur NORMAL ; le vecteur directeur est $(-2\\,;\\,3)$ ou $(2\\,;\\,-3)$', 'L\'élève a raison : les coefficients de $x$ et $y$ donnent toujours le vecteur directeur', 'Le vecteur directeur est $(3\\,;\\,-2)$ car le coefficient de $y$ change de signe', 'Il n\'existe pas de vecteur directeur car la droite n\'est pas verticale'], answer: 0, correction: 'Dans $ax + by + c = 0$, le vecteur $\\vec{n}(a\\,;\\,b)$ est le vecteur <strong>normal</strong> (perpendiculaire à la droite). Le vecteur directeur est $\\vec{u}(-b\\,;\\,a)$.<br/><br/>Ici $\\vec{n}(3\\,;\\,2)$ est le vecteur normal, et le vecteur directeur est $\\vec{u}(-2\\,;\\,3)$.<br/><br/>On vérifie : $\\vec{n} \\cdot \\vec{u} = 3 \\times (-2) + 2 \\times 3 = 0$. Bien perpendiculaires !' },
      { q: 'Trois points $A(0;0)$, $B(2;3)$, $C(4;6)$ sont-ils alignés ?', options: ['Non', 'Oui', 'Seulement deux à deux', 'Impossible à déterminer'], answer: 1, correction: 'On calcule $\\vec{AB}(2\\,;\\,3)$ et $\\vec{AC}(4\\,;\\,6)$. On remarque que $\\vec{AC} = 2\\vec{AB}$.<br/><br/>Les vecteurs sont <strong>colinéaires</strong>, donc les points $A$, $B$, $C$ sont alignés.' },
      { q: 'La droite $5x - 2y + 7 = 0$ a pour pente :', options: ['$m = \\dfrac{5}{2}$', '$m = -\\dfrac{5}{2}$', '$m = \\dfrac{2}{5}$', '$m = -\\dfrac{2}{5}$'], answer: 0, correction: 'On isole $y$ pour obtenir la forme $y = mx + p$ : $2y = 5x + 7$, soit $y = \\dfrac{5}{2}x + \\dfrac{7}{2}$.<br/><br/>La pente est $m = \\dfrac{5}{2}$. Elle correspond au coefficient de $x$ dans l\'écriture réduite.' },
      { q: 'Le milieu de $A(2\\,;\\,5)$ et $B(6\\,;\\,-1)$ est :', options: ['$(4\\,;\\,2)$', '$(8\\,;\\,4)$', '$(4\\,;\\,3)$', '$(2\\,;\\,3)$'], answer: 0, correction: 'Le milieu se calcule en faisant la moyenne des coordonnées : $M = \\left(\\dfrac{2+6}{2}\\,;\\,\\dfrac{5+(-1)}{2}\\right)$.<br/><br/>On obtient $M = (4\\,;\\,2)$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const mode = pick(['colinearite', 'equation']);
        if (mode === 'colinearite') {
          const xA = rand(0, 3), yA = rand(0, 3);
          const xB = rand(xA + 1, xA + 4), yB = rand(yA + 1, yA + 4);
          const xC = rand(xB + 1, xB + 3), yC = rand(yB - 2, yB + 5);
          const det = (xB - xA) * (yC - yA) - (yB - yA) * (xC - xA);
          const ctx = pick([
            `En cartographie, trois balises sont placées en $A(${xA}\\,;\\,${yA})$, $B(${xB}\\,;\\,${yB})$ et $C(${xC}\\,;\\,${yC})$.`,
            `Trois capteurs sont positionnés en $A(${xA}\\,;\\,${yA})$, $B(${xB}\\,;\\,${yB})$ et $C(${xC}\\,;\\,${yC})$.`,
            `On considère les points $A(${xA}\\,;\\,${yA})$, $B(${xB}\\,;\\,${yB})$ et $C(${xC}\\,;\\,${yC})$.`
          ]);
          return {
            statement: `${ctx}<br/><br/>1) Calculer les coordonnées de $\\vec{AB}$ et $\\vec{AC}$.<br/>2) Calculer le déterminant $\\det(\\vec{AB}, \\vec{AC})$.<br/>3) En déduire si les points sont alignés.<br/><br/>Donner la valeur du déterminant.`,
            answer: det,
            tolerance: 0,
            unit: '',
            hint: `$\\vec{AB}(${xB-xA}\\,;\\,${yB-yA})$ et $\\vec{AC}(${xC-xA}\\,;\\,${yC-yA})$. Le déterminant est $ad - bc$.`,
            solution: [
              `$\\vec{AB}(${xB-xA}\\,;\\,${yB-yA})$ et $\\vec{AC}(${xC-xA}\\,;\\,${yC-yA})$.`,
              /* Les facteurs négatifs sont parenthésés : sans cela le corrigé
                 imprimait « $\det = 1 \times -1 - 1 \times 2$ », où le signe
                 moins se lit comme une soustraction. Sept tirages du livre
                 étaient concernés. Trouvé au contrôle de la banque
                 (2026-09-14) ; aucun test ne lit la syntaxe d'une formule. */
              `$\\det = ${xB-xA} \\times ${(yC-yA) < 0 ? '(' + (yC-yA) + ')' : (yC-yA)} - ${yB-yA} \\times ${(xC-xA) < 0 ? '(' + (xC-xA) + ')' : (xC-xA)} = ${(xB-xA)*(yC-yA)} - ${(yB-yA)*(xC-xA)} = ${det}$.`,
              `${det === 0 ? 'Le déterminant est nul : les points sont alignés.' : 'Le déterminant est non nul : les points ne sont pas alignés.'}`
            ]
          };
        } else {
          const xA = rand(0, 4), yA = rand(0, 4);
          const xB = rand(xA + 1, xA + 5), yB = rand(yA - 3, yA + 5);
          const dx = xB - xA, dy = yB - yA;
          const m = dy / dx;
          const p = yA - m * xA;
          const answer = parseFloat(p.toFixed(2));
          const ctx = pick([
            `Une route rectiligne passe par les points $A(${xA}\\,;\\,${yA})$ et $B(${xB}\\,;\\,${yB})$.`,
            `Un laser suit une trajectoire passant par $A(${xA}\\,;\\,${yA})$ et $B(${xB}\\,;\\,${yB})$.`,
            `On considère la droite passant par $A(${xA}\\,;\\,${yA})$ et $B(${xB}\\,;\\,${yB})$.`
          ]);
          return {
            statement: `${ctx}<br/><br/>1) Calculer la pente $m$ de la droite $(AB)$.<br/>2) Déterminer l'ordonnée à l'origine $p$.<br/><br/>Donner la valeur de $p$.`,
            answer: answer,
            tolerance: 0.01,
            unit: '',
            hint: `$m = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{${dy}}{${dx}}$. Puis $p = y_A - m \\times x_A$.`,
            solution: [
              `$m = \\dfrac{${yB} - ${yA}}{${xB} - ${xA}} = \\dfrac{${dy}}{${dx}}${Number.isInteger(m) ? ' = ' + m : ''}$.`,
              `$p = ${yA} - ${fr(m, 2)} \\times ${xA} = ${fr(answer)}$.`,
              /* Le signe est choisi selon celui de l'ordonnée à l'origine, et
                 la valeur absolue écrite ensuite : sans cela, l'équation
                 s'imprimait « $y = 1{,}00x + -2$ », deux signes à la suite.
                 Quatre tirages du livre étaient concernés. Trouvé au contrôle
                 de la banque (2026-09-14). */
              `Droite : $y = ${fr(m, 2)}x ${answer < 0 ? '-' : '+'} ${fr(Math.abs(answer))}$.`
            ]
          };
        }
      }
    },
    probleme: {
      context: 'Dans un repère, on a les points $A(1;2)$, $B(3;5)$, $C(5;8)$ et $D(2;4)$.',
      tasks: [
        'Montrer que $A$, $B$, $C$ sont alignés.',
        'Écrire l\'équation de la droite $(AB)$.',
        'Le point $D$ est-il sur la droite $(AB)$ ?'
      ],
      solutions: [
        '$\\vec{AB}(2;3)$, $\\vec{AC}(4;6)=2\\vec{AB}$ : colinéaires → $A$, $B$, $C$ alignés.',
        'Pente $m=\\frac{3}{2}$, ordonnée à l\'origine : $2=\\frac{3}{2}\\times1+p \\Rightarrow p=\\frac{1}{2}$. Droite : $y=\\frac{3}{2}x+\\frac{1}{2}$.',
        '$\\frac{3}{2}\\times2+\\frac{1}{2}=3+\\frac{1}{2}=\\frac{7}{2}\\ne4$ : $D$ n\'est pas sur $(AB)$.'
      ],
      finalAnswer: '$A$, $B$, $C$ alignés. Droite : $y=\\frac{3}{2}x+\\frac{1}{2}$. $D$ n\'est pas sur cette droite.'
    },

    evaluation: {
      title: 'Évaluation — Géométrie repérée',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le déterminant de $\\vec{u}(3\\,;\\,5)$ et $\\vec{v}(6\\,;\\,10)$. Les vecteurs sont-ils colinéaires ? Donner la valeur du déterminant.',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On applique la formule du déterminant : $\\det(\\vec{u},\\vec{v}) = 3 \\times 10 - 5 \\times 6 = 30 - 30 = 0$.<br/><br/>Le déterminant est nul, donc les vecteurs sont <strong>colinéaires</strong> (même direction).'
        },
        {
          statement: 'La droite $(d)$ a pour équation $2x - 3y + 6 = 0$. Un vecteur directeur de $(d)$ est :',
          type: 'multiple-choice',
          options: ['$(2\\,;\\,-3)$', '$(3\\,;\\,2)$', '$(-3\\,;\\,2)$', '$(2\\,;\\,3)$'],
          answer: 1,
          points: 2,
          correction: 'Dans $ax + by + c = 0$, le vecteur <strong>normal</strong> est $(a\\,;\\,b) = (2\\,;\\,-3)$.<br/><br/>Le vecteur <strong>directeur</strong> est $(-b\\,;\\,a) = (3\\,;\\,2)$. On vérifie : $2 \\times 3 + (-3) \\times 2 = 0$, bien perpendiculaires.'
        },
        {
          /* QUESTION 3 RÉÉCRITE le 2026-09-14, pour deux raisons.

             Sur le fond : elle demandait l'ordonnée à l'origine d'une droite
             donnée par deux points, soit un calcul déjà travaillé par la
             banque et déjà présent dans l'esprit de la question 1. Le contexte
             était purement abstrait.

             Sur l'équilibre : mesuré sur les cinquante questions du niveau,
             « calculer » dépassait le plafond de 35 % du cahier des charges.
             La nouvelle question garde exactement le même calcul, mais le fait
             précéder d'une TRADUCTION : l'élève doit décider lui-même ce que
             « repère », « abscisse » et « ordonnée » désignent dans la
             situation, puis interpréter le nombre trouvé. C'est « modéliser »,
             et l'étiquette suit l'énoncé. */
          statement: 'Une entreprise loue des vélos. Pour $2$ heures, un client paie $5$ € ; pour $4$ heures, il paie $11$ €.<br/><br/>Le tarif est affine : il se compose d\'un forfait fixe payé à l\'entrée, plus un prix par heure.<br/><br/>Quel est le montant du <strong>forfait fixe</strong>, en euros ?',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '€',
          points: 2,
          correction: 'On place la durée en abscisse et le prix en ordonnée : les deux informations donnent les points $A(2\\,;\\,5)$ et $B(4\\,;\\,11)$, et le forfait fixe est l\'<strong>ordonnée à l\'origine</strong>, c\'est-à-dire le prix pour une durée nulle.<br/><br/>Le prix horaire est la pente : $m = \\dfrac{11 - 5}{4 - 2} = \\dfrac{6}{2} = 3$ € par heure.<br/><br/>L\'équation s\'écrit $y = 3x + p$, et le point $A$ donne $5 = 3 \\times 2 + p$, soit $p = -1$.<br/><br/>Le forfait vaut donc $-1$ €, autrement dit une <strong>réduction</strong> de $1$ € accordée à l\'entrée. C\'est mathématiquement correct et commercialement plausible — le tarif revient à $3$ € par heure avec $1$ € offert — mais cela méritait d\'être interprété plutôt que laissé en l\'état : un nombre négatif pour un « forfait » doit toujours faire relire l\'énoncé avant d\'être accepté.'
        },
        {
          statement: 'Les points $A(1\\,;\\,3)$, $B(3\\,;\\,7)$ et $C(5\\,;\\,12)$ sont-ils alignés ?',
          type: 'multiple-choice',
          options: ['Oui, car $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires', 'Non, car le déterminant de $\\vec{AB}$ et $\\vec{AC}$ est non nul', 'Oui, car les trois points sont sur la droite $y = 2x + 1$', 'Non, car $A$ et $C$ ont des abscisses impaires'],
          answer: 1,
          points: 2,
          correction: 'On calcule $\\vec{AB}(2\\,;\\,4)$ et $\\vec{AC}(4\\,;\\,9)$.<br/><br/>Le déterminant vaut $\\det = 2 \\times 9 - 4 \\times 4 = 18 - 16 = 2 \\neq 0$.<br/><br/>Les vecteurs ne sont pas colinéaires, donc les points ne sont <strong>pas alignés</strong>.'
        },
        {
          statement: 'Écrire l\'équation de la droite passant par $M(1\\,;\\,2)$ et de vecteur directeur $\\vec{u}(2\\,;\\,-1)$ sous la forme $ax + by + c = 0$ avec $a > 0$. Donner la valeur de $c$.',
          type: 'numeric',
          answer: -5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le vecteur directeur est $(2\\,;\\,-1)$, donc un vecteur normal est $(1\\,;\\,2)$ (on échange et on change un signe).<br/><br/>L\'équation s\'écrit : $1(x-1) + 2(y-2) = 0$, soit $x + 2y - 5 = 0$.<br/><br/>On identifie $c = -5$.'
        }
      ]
    }
  });
