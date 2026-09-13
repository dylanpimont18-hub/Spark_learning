/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-geometrie-plane.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-geometrie-plane',
    level: 2, subject: 'maths',
    icon: '📏',
    title: 'Géométrie plane',
    subtitle: 'Configurations, triangles, parallélisme',
    keywords: ['Triangle', 'Parallélisme', 'Thalès', 'Médiane', 'Hauteur'],
    physics: false,
    cours: {
      /* « Découvrir » RÉÉCRIT le 2026-09-13.

         L'ancienne version ouvrait sur « La géométrie plane combine
         raisonnement logique et calcul pour prouver des propriétés » : une
         définition, donc l'entrée que le cahier des charges proscrit.

         DIFFICULTÉ PROPRE À CE CHAPITRE : c'est le chapitre de reprise le
         plus complet de l'année — Thalès, Pythagore, les aires et les
         droites remarquables viennent tous du collège. Ouvrir sur « à quoi
         sert la géométrie » serait donc creux, puisque l'élève sait déjà
         s'en servir.

         Ce qui est réellement neuf en seconde, c'est l'EXIGENCE DE
         DÉMONSTRATION : citer le théorème, vérifier ses hypothèses,
         conclure. L'ouverture vise donc exactement cela, en montrant une
         mesure IMPOSSIBLE à prendre — on ne peut pas tendre un décamètre
         jusqu'au sommet d'une pyramide, il faut raisonner. Thalès l'a fait
         il y a vingt-six siècles, et c'est la meilleure justification qui
         soit du fait qu'un raisonnement remplace une mesure.

         Le test tient : on ne peut pas répondre « quelle est la hauteur ? »
         sans une configuration géométrique. */
      intro: 'Tu es au pied de la pyramide de Khéops. Quelle est sa hauteur ?<br/><br/>' +
        'Tu ne peux pas la mesurer : il faudrait grimper dessus en tenant un décamètre, et le sommet est à cent quarante mètres. Aucun instrument posé au sol ne te donnera ce nombre directement.<br/><br/>' +
        'Thalès, il y a vingt-six siècles, a pourtant trouvé la réponse sans quitter le sable. Il a planté un bâton, mesuré <strong>son</strong> ombre, mesuré <strong>l\'ombre de la pyramide</strong>, et comparé les deux rapports. Le soleil éclairant les deux objets sous le même angle, la pyramide est à son ombre ce que le bâton est à la sienne.<br/><br/>' +
        'Quatre longueurs, dont trois mesurables au sol, et la quatrième s\'en déduit.<br/><br/>' +
        'C\'est le cœur de ce chapitre : une <strong>configuration</strong> géométrique permet d\'atteindre ce qu\'aucune mesure directe ne donne. Tu connais déjà Thalès et Pythagore depuis le collège, et ils n\'ont pas changé.<br/><br/>' +
        'Ce que la seconde ajoute, c\'est l\'exigence de <strong>démontrer</strong> : nommer le théorème que tu emploies, vérifier que ses conditions sont bien réunies, puis conclure. Appliquer une formule ne suffit plus — il faut pouvoir dire pourquoi tu as le droit de l\'appliquer.',
      definitions: [
        { term: 'Théorème de Thalès', def: 'Si $(MN) \\parallel (BC)$ dans un triangle $ABC$ avec $M \\in [AB]$ et $N \\in [AC]$, alors $\\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{MN}{BC}$.' },
        { term: 'Médiane', def: 'Droite joignant un sommet au milieu du côté opposé. Les trois médianes se coupent au centre de gravité.' },
        { term: 'Hauteur', def: 'Droite passant par un sommet, perpendiculaire au côté opposé. Attention : elle ne passe pas nécessairement par le milieu du côté.' },
        { term: 'Médiatrice', def: 'Droite perpendiculaire à un segment en son milieu. Les trois médiatrices d\'un triangle se coupent au centre du cercle circonscrit.' }
      ],
      method: {
        title: 'Appliquer le théorème de Thalès',
        steps: [
          '<strong>Identifier la configuration</strong> : deux droites sécantes et deux droites parallèles coupant ces sécantes. <strong>Exemple :</strong> Dans le triangle $ABC$, si $M \\in [AB]$ et $N \\in [AC]$ avec $(MN) \\parallel (BC)$, la configuration est valide.',
          '<strong>Écrire les rapports égaux</strong> : $\\frac{AM}{AB}=\\frac{AN}{AC}=\\frac{MN}{BC}$. <strong>Exemple :</strong> Si $AM = 3$, $AB = 9$ → le rapport est $\\frac{3}{9} = \\frac{1}{3}$.',
          '<strong>Calculer la longueur inconnue</strong> par produit en croix. <strong>Exemple :</strong> $\\frac{1}{3} = \\frac{MN}{12}$ → $MN = \\frac{12}{3} = 4$.',
          '<strong>Vérifier la cohérence</strong> (la longueur partielle est inférieure à la totale). <strong>Exemple :</strong> $MN = 4 < BC = 12$ ✓ (le petit triangle est plus petit).'
        ]
      },
      example: {
        statement: 'Dans un triangle $ABC$, $(MN) \\parallel (BC)$ avec $AM = 4$ cm, $MB = 8$ cm, $AN = 3$ cm. Calculer $NC$ et $MN$ sachant que $BC = 15$ cm.',
        steps: [
          '$AB = AM + MB = 4 + 8 = 12$ cm. Le rapport de réduction est $k = \\dfrac{AM}{AB} = \\dfrac{4}{12} = \\dfrac{1}{3}$.',
          '$\\dfrac{AN}{AC} = \\dfrac{1}{3}$ → $AC = 3 \\times 3 = 9$ cm, donc $NC = AC - AN = 9 - 3 = 6$ cm.',
          '$\\dfrac{MN}{BC} = \\dfrac{1}{3}$ → $MN = \\dfrac{15}{3} = 5$ cm.'
        ],
        answer: '$NC = 6$ cm et $MN = 5$ cm.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Configuration de Thalès',
        title: 'Voir le rapport 1/3 entre les deux triangles emboîtés',
        description: 'Le petit triangle $AMN$ et le grand triangle $ABC$ partagent le sommet $A$. Comme $(MN) \\parallel (BC)$, les longueurs correspondantes sont proportionnelles : $AM = 4$, $AB = 12$, et $MN = 5$, $BC = 15$.',
        svg: `
          <svg viewBox="0 0 380 280" role="img" aria-labelledby="geomplane-thales-title geomplane-thales-desc">
            <title id="geomplane-thales-title">Configuration de Thales dans le triangle ABC</title>
            <desc id="geomplane-thales-desc">Triangle ABC avec un petit triangle AMN emboite au sommet A, cote MN parallele au cote BC.</desc>
            <rect x="20" y="10" width="340" height="32" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 7%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))"></rect>
            <text class="annotation-label" x="32" y="31">AM/AB = AN/AC = MN/BC = 1/3</text>
            <line class="frame-line" x1="190" y1="58" x2="60" y2="248"></line>
            <line class="frame-line" x1="190" y1="58" x2="320" y2="248"></line>
            <line class="curve-main" x1="147" y1="121" x2="233" y2="121"></line>
            <line class="curve-main" x1="60" y1="248" x2="320" y2="248"></line>
            <line class="frame-line" x1="183" y1="115" x2="195" y2="121"></line>
            <line class="frame-line" x1="183" y1="127" x2="195" y2="121"></line>
            <line class="frame-line" x1="238" y1="242" x2="250" y2="248"></line>
            <line class="frame-line" x1="238" y1="254" x2="250" y2="248"></line>
            <circle class="plot-point-alt" cx="190" cy="58" r="5"></circle>
            <circle class="plot-point-alt" cx="147" cy="121" r="5"></circle>
            <circle class="plot-point-alt" cx="233" cy="121" r="5"></circle>
            <circle class="plot-point" cx="60" cy="248" r="5"></circle>
            <circle class="plot-point" cx="320" cy="248" r="5"></circle>
            <text class="annotation-label" x="186" y="50">A</text>
            <text class="annotation-label" x="118" y="125">M</text>
            <text class="annotation-label" x="240" y="125">N</text>
            <text class="annotation-label" x="44" y="264">B</text>
            <text class="annotation-label" x="324" y="264">C</text>
            <text class="label-soft" x="95" y="88">AM = 4</text>
            <text class="label-soft" x="38" y="188">MB = 8</text>
            <text class="label-soft" x="248" y="88">AN = 3</text>
            <text class="label-soft" x="300" y="188">NC = 6</text>
            <text class="annotation-label" x="168" y="138">MN = 5</text>
            <text class="annotation-label" x="150" y="232">BC = 15</text>
          </svg>
        `,
        notes: [
          'Le triangle $AMN$ est emboîté dans le triangle $ABC$ : ils partagent le sommet $A$, et $(MN)$ est parallèle à $(BC)$ — c\'est la configuration de Thalès.',
          'Les petits chevrons dessinés sur $MN$ et sur $BC$ indiquent que ces deux segments sont parallèles : c\'est la condition indispensable pour appliquer le théorème.',
          'Le rapport $k = \\dfrac{AM}{AB} = \\dfrac{4}{12} = \\dfrac{1}{3}$ se retrouve identique sur les trois paires de côtés : $\\dfrac{AN}{AC} = \\dfrac{3}{9} = \\dfrac{1}{3}$ et $\\dfrac{MN}{BC} = \\dfrac{5}{15} = \\dfrac{1}{3}$.'
        ],
        reading: 'Suivre chaque côté depuis le sommet commun $A$ : on lit d\'abord la petite longueur ($AM$ ou $AN$), puis la longueur totale ($AB$ ou $AC$).',
        caption: 'Triangle $ABC$ avec le petit triangle $AMN$ emboîté au sommet $A$ ; $(MN) \\parallel (BC)$ dans un rapport de $\\dfrac{1}{3}$, conformément à l\'exemple du cours.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-13.
         Principe du cahier des charges (section 9) : une figure par
         MALENTENDU, pas une figure par formule. La figure PRINCIPALE du
         chapitre montre déjà la configuration de Thalès et le rapport des
         longueurs ; on ne la redouble donc pas. Les trois malentendus
         retenus sont les trois premiers de la fiche professeur, dans l'ordre
         où ils coûtent le plus cher :

           1. le rapport k sur les longueurs MAIS k² sur les aires (erreur
              n°1 de la fiche) — la fiche recommande explicitement le dessin
              du carré réduit où il en tient QUATRE dans le grand ;
           2. les quatre droites remarquables, qui se confondent sur
              l'équilatéral et que l'élève n'a donc jamais vues séparées
              (erreur n°2) ;
           3. la hauteur relative à une base, et le cas où le pied tombe HORS
              du triangle (erreur n°4).

         TOUTES les coordonnées sont CALCULÉES. Le triangle du schéma 2 a été
         choisi par recherche exhaustive pour que les quatre pieds tombent
         sur des abscisses ENTIÈRES : le triangle 100-160-156 est le seul de
         sa taille dont le pied de bissectrice soit exact, ce qui évite
         d'arrondir une droite remarquable — un arrondi de 0,15 pixel sur une
         bissectrice est exactement le genre de faute qu'aucune relecture
         n'attrape. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le piège des agrandissements',
          title: 'Les longueurs sont divisées par deux, les aires par quatre',
          description: 'Réduis un carré de côté $10$ au rapport $k = \\dfrac{1}{2}$ : tu obtiens un carré de côté $5$. La longueur a bien été divisée par $2$.<br/><br/>' +
            'Mais regarde l\'aire. Le grand carré mesure $10 \\times 10 = 100$, le petit $5 \\times 5 = 25$. L\'aire a été divisée par $\\mathbf{4}$, pas par $2$.<br/><br/>' +
            'La figure de gauche te montre pourquoi en un coup d\'œil : dans le grand carré, il tient exactement <strong>quatre</strong> petits carrés. Deux en largeur, deux en hauteur — et $2 \\times 2 = 4$. C\'est de là que sort le carré du rapport.',
          svg: `
            <svg viewBox="0 0 300 240" role="img" aria-labelledby="geo-aires-title geo-aires-desc">
              <title id="geo-aires-title">Un carre reduit de moitie tient quatre fois dans le grand</title>
              <desc id="geo-aires-desc">A gauche, un grand carre de cote dix est partage par une ligne verticale et une ligne horizontale en quatre carres identiques de cote cinq. L'un de ces quatre carres, celui du bas a gauche, est mis en evidence. A droite, sur un dessin de meme echelle et pose sur la meme ligne de base, le meme carre de cote cinq est dessine seul. Les longueurs sont dans le rapport un demi, mais les aires sont dans le rapport un quart, car il faut quatre petits carres pour remplir le grand.</desc>

              <!-- Patron « comparaison » (section 9) : les deux vignettes
                   partagent la MEME ligne de base (y = 200) et la MEME
                   echelle (12 unites de viewBox par unite de longueur). La
                   seule difference visible est donc la taille de la figure,
                   qui est precisement ce que le schema compare.
                   Cote 10 -> 120 pixels ; cote 5 -> 60 pixels. -->

              <!-- Vignette GAUCHE : le grand carre, x de 30 a 150. -->
              <line class="frame-line" x1="30" y1="80" x2="150" y2="80"></line>
              <line class="frame-line" x1="150" y1="80" x2="150" y2="200"></line>
              <line class="frame-line" x1="150" y1="200" x2="30" y2="200"></line>
              <line class="frame-line" x1="30" y1="200" x2="30" y2="80"></line>

              <!-- Les deux traits de partage, exactement a mi-cote : 90 est
                   la moyenne de 30 et 150, 140 celle de 80 et 200. Ce sont
                   eux qui rendent le facteur quatre VISIBLE plutot que
                   simplement annonce. -->
              <line class="guide-line" x1="90" y1="80" x2="90" y2="200"></line>
              <line class="guide-line" x1="30" y1="140" x2="150" y2="140"></line>

              <!-- Le quart mis en evidence, en bas a gauche. Il a rigoureusement
                   la meme taille que le carre isole de droite : 60 par 60. -->
              <rect x="30" y="140" width="60" height="60" fill="color-mix(in srgb, var(--diagram-accent) 16%, var(--bg-card))" stroke="var(--diagram-accent)" stroke-width="2"></rect>

              <text class="tick-label" x="90" y="72" text-anchor="middle">cote 10</text>
              <text class="label-soft" x="60" y="176" text-anchor="middle">1</text>
              <text class="label-soft" x="120" y="176" text-anchor="middle">2</text>
              <text class="label-soft" x="60" y="116" text-anchor="middle">3</text>
              <text class="label-soft" x="120" y="116" text-anchor="middle">4</text>
              <text class="annotation-label" x="90" y="222" text-anchor="middle">aire 100</text>

              <!-- Vignette DROITE : le carre reduit seul, MEME ligne de base
                   (y = 200), x de 210 a 270. Cote 60 pixels, identique au
                   quart mis en evidence a gauche : le test le verifie. -->
              <rect x="210" y="140" width="60" height="60" fill="color-mix(in srgb, var(--diagram-accent) 16%, var(--bg-card))" stroke="var(--diagram-accent)" stroke-width="2"></rect>
              <text class="tick-label" x="240" y="132" text-anchor="middle">cote 5</text>
              <text class="annotation-label" x="240" y="222" text-anchor="middle">aire 25</text>
              <text class="label-soft" x="240" y="92" text-anchor="middle">le carre reduit</text>
            </svg>
          `,
          notes: [
            'Le rapport des <strong>longueurs</strong> vaut $k = \\dfrac{5}{10} = \\dfrac{1}{2}$ : chaque côté du petit carré mesure la moitié du côté du grand.',
            'Le rapport des <strong>aires</strong> vaut $\\dfrac{25}{100} = \\dfrac{1}{4} = k^2$ : il faut quatre petits carrés pour remplir le grand, et les quatre sont numérotés sur la figure.',
            'La raison est dans les unités : une longueur se mesure en mètres, une aire en mètres carrés. Si les longueurs sont multipliées par $k$, les aires le sont par $k^2$ — et, l\'an prochain, les volumes par $k^3$.',
            'La règle ne dépend pas de la forme : pour une réduction de rapport $k = \\dfrac{2}{5}$, les aires seront multipliées par $\\left(\\dfrac{2}{5}\\right)^2 = \\dfrac{4}{25}$, que la figure soit un carré, un triangle ou un disque.'
          ],
          reading: 'Compte les petits carrés à gauche : il y en a $1$, $2$, $3$, $4$. Tu viens de fabriquer toi-même le facteur $4$, sans appliquer aucune formule.<br/><br/>Retiens le mécanisme plutôt que le résultat : réduire de moitié agit <strong>deux fois</strong>, une fois en largeur et une fois en hauteur. C\'est ce doublement de l\'effet qui produit le carré du rapport, et c\'est pour cela que ta règle « je multiplie par $k$ » avait raison à moitié.',
          caption: 'Réduction de rapport $k = \\dfrac{1}{2}$ : le côté passe de $10$ à $5$, mais l\'aire passe de $100$ à $25$, soit $k^2 = \\dfrac{1}{4}$.'
        },
        {
          theme: 'maths',
          kicker: 'Quatre noms, quatre objets',
          title: 'Sur un triangle quelconque, les droites remarquables se séparent',
          description: 'Si tu confonds médiane, hauteur, bissectrice et médiatrice, ce n\'est pas ta faute : sur le triangle équilatéral, celui que tout le monde dessine, ces quatre droites sont <strong>confondues</strong>. Ton expérience visuelle ne les a jamais séparées.<br/><br/>' +
            'Voici donc un triangle franchement quelconque. Les trois droites issues de $A$ arrivent sur $[BC]$ à trois endroits <strong>différents</strong>, et la médiatrice, elle, ne part même pas d\'un sommet.<br/><br/>' +
            'Chaque nom contient ce qui le distingue : la médiane va au <strong>milieu</strong>, la hauteur tombe <strong>perpendiculairement</strong>, la bissectrice coupe l\'<strong>angle</strong> en deux, la médiatrice est perpendiculaire à un côté <strong>en son milieu</strong>.',
          svg: `
            <svg viewBox="0 0 300 200" role="img" aria-labelledby="geo-droites-title geo-droites-desc">
              <title id="geo-droites-title">Les quatre droites remarquables separees</title>
              <desc id="geo-droites-desc">Un triangle quelconque ABC dont les cotes mesurent cent, cent soixante et cent cinquante-six. Depuis le sommet A partent trois droites qui rejoignent le cote BC en trois points distincts. La hauteur tombe perpendiculairement sur BC, marquee par un petit carre d'angle droit. La bissectrice coupe l'angle en A en deux parties egales. La mediane rejoint le milieu du cote BC. Une quatrieme droite, la mediatrice du cote AB, ne part d'aucun sommet : elle coupe le cote AB perpendiculairement en son milieu.</desc>

              <!-- Triangle CHOISI par recherche exhaustive (2026-09-13) pour
                   que les quatre pieds tombent sur des coordonnees ENTIERES :
                   A(88 ; 40), B(60 ; 136), C(216 ; 136).
                   AB = 100, AC = 160, BC = 156 exactement.
                   Le cote BC est horizontal, ce qui rend la perpendicularite
                   de la hauteur verifiable a l'oeil autant qu'au calcul.
                   Angles : 69,4 en A, 73,7 en B, 36,9 en C — franchement
                   scalene, aucune symetrie parasite. -->
              <line class="frame-line" x1="88" y1="40" x2="60" y2="136"></line>
              <line class="frame-line" x1="88" y1="40" x2="216" y2="136"></line>
              <line class="frame-line" x1="60" y1="136" x2="216" y2="136"></line>

              <!-- HAUTEUR : pied a l'abscisse de A, soit 88, puisque (BC) est
                   horizontale. Angle droit code par un CARRE, jamais par un
                   arc (section 9). -->
              <line class="curve-main" x1="88" y1="40" x2="88" y2="136"></line>
              <line class="frame-line" x1="88" y1="126" x2="98" y2="126"></line>
              <line class="frame-line" x1="98" y1="126" x2="98" y2="136"></line>

              <!-- BISSECTRICE : le pied P verifie BP / PC = AB / AC = 100/160.
                   Avec BC = 156, on obtient BP = 60 exactement, donc P a
                   l'abscisse 60 + 60 = 120. Aucun arrondi. -->
              <line class="curve-main" x1="88" y1="40" x2="120" y2="136"></line>

              <!-- MEDIANE : pied au milieu de [BC], soit (60+216)/2 = 138. -->
              <line class="curve-main" x1="88" y1="40" x2="138" y2="136"></line>

              <!-- MEDIATRICE de [AB] : passe par le milieu de [AB], en
                   (74 ; 88), et suit la direction (24 ; 7), orthogonale au
                   vecteur AB = (-28 ; 96) puisque -28x24 + 96x7 = 0 tout
                   juste. Tracee en tirets : elle ne part d'aucun sommet, et
                   c'est ce qui la distingue de la mediane. -->
              <line class="guide-line" x1="26" y1="74" x2="146" y2="109"></line>
              <line class="frame-line" x1="74" y1="88" x2="81" y2="90"></line>
              <line class="frame-line" x1="81" y1="90" x2="79" y2="97"></line>
              <circle class="plot-point-alt" cx="74" cy="88" r="3"></circle>

              <circle class="plot-point" cx="88" cy="40" r="5"></circle>
              <circle class="plot-point" cx="60" cy="136" r="5"></circle>
              <circle class="plot-point" cx="216" cy="136" r="5"></circle>
              <circle class="plot-point-alt" cx="138" cy="136" r="3"></circle>

              <text class="annotation-label" x="82" y="32" text-anchor="middle">A</text>
              <text class="annotation-label" x="52" y="150" text-anchor="middle">B</text>
              <text class="annotation-label" x="222" y="150" text-anchor="middle">C</text>

              <text class="tick-label" x="86" y="154" text-anchor="middle">hauteur</text>
              <text class="tick-label" x="126" y="166" text-anchor="middle">bissectrice</text>
              <text class="tick-label" x="176" y="152" text-anchor="middle">mediane</text>
              <text class="label-soft" x="152" y="114" text-anchor="start">mediatrice de AB</text>
              <text class="label-soft" x="234" y="120" text-anchor="start">AB = 100</text>
              <text class="label-soft" x="234" y="136" text-anchor="start">AC = 160</text>
              <text class="label-soft" x="234" y="152" text-anchor="start">BC = 156</text>
            </svg>
          `,
          notes: [
            'La <strong>hauteur</strong> issue de $A$ tombe perpendiculairement sur $(BC)$ : elle forme un angle droit, codé ici par le petit carré. Elle ne vise aucun milieu.',
            'La <strong>bissectrice</strong> issue de $A$ partage l\'angle $\\widehat{BAC}$ en deux angles égaux. Son pied découpe $[BC]$ dans le rapport des côtés : $\\dfrac{BP}{PC} = \\dfrac{AB}{AC} = \\dfrac{100}{160}$.',
            'La <strong>médiane</strong> issue de $A$ rejoint le milieu de $[BC]$. C\'est la seule des trois dont le pied soit un milieu, et elle n\'a aucune raison d\'être perpendiculaire.',
            'La <strong>médiatrice</strong> de $[AB]$ est le seul objet des quatre qui ne parte d\'aucun sommet : elle coupe $[AB]$ perpendiculairement en son milieu. Tous ses points sont à égale distance de $A$ et de $B$.'
          ],
          reading: 'Redessine maintenant ce triangle en équilatéral et refais les quatre tracés : les quatre droites se superposent en une seule. C\'est exactement ce qui t\'a induit en erreur, et tu peux le constater toi-même en dix secondes.<br/><br/>Le réflexe à prendre : dès qu\'un énoncé parle d\'une droite remarquable, demande-toi <strong>ce qu\'elle fait</strong> — va-t-elle au milieu, tombe-t-elle à angle droit, coupe-t-elle un angle ? La définition suffit à trancher, et tu n\'as plus quatre mots à mémoriser.',
          caption: 'Triangle quelconque $ABC$ ($AB = 100$, $AC = 160$, $BC = 156$) : hauteur, bissectrice et médiane issues de $A$ arrivent en trois points distincts de $[BC]$, et la médiatrice de $[AB]$ ne part d\'aucun sommet.'
        },
        {
          theme: 'maths',
          kicker: 'La hauteur dépend de la base',
          title: 'Quand le pied de la hauteur sort du triangle',
          description: 'Une hauteur n\'existe pas toute seule : elle est toujours <strong>relative à une base</strong>. Change de base, et tu changes de hauteur.<br/><br/>' +
            'Les deux triangles ci-dessous ont la <strong>même base</strong> et la <strong>même hauteur</strong>, donc exactement la même aire. Mais à droite, le sommet est si décalé que le pied de la hauteur tombe <strong>en dehors</strong> du triangle. Beaucoup d\'élèves refusent alors de la voir comme une hauteur : elle en est pourtant une, et le calcul d\'aire ne change pas d\'un iota.',
          svg: `
            <svg viewBox="0 0 380 230" role="img" aria-labelledby="geo-hauteur-title geo-hauteur-desc">
              <title id="geo-hauteur-title">Une hauteur dont le pied tombe hors du triangle</title>
              <desc id="geo-hauteur-desc">Deux triangles sont poses sur la meme ligne de base et dessines a la meme echelle. Leurs bases mesurent toutes deux cent trente. A gauche, le sommet est au-dessus de la base et le pied de la hauteur tombe a l'interieur du segment de base. A droite, le sommet est decale vers la gauche et le pied de la hauteur tombe a l'exterieur, au-dela de l'extremite gauche de la base : il faut prolonger la base par un trait en tirets pour l'atteindre. Les deux hauteurs mesurent exactement cent quatre, et les deux aires sont donc egales.</desc>

              <!-- Patron « comparaison » (section 9) : les deux triangles
                   partagent la MEME ligne de base (y = 190), la MEME longueur
                   de base (130 pixels) et la MEME hauteur (104 pixels). La
                   seule difference est la POSITION du sommet, donc la seule
                   chose que le schema compare. Toute autre difference serait
                   lue comme faisant partie de la demonstration. -->

              <!-- Vignette GAUCHE : pied a l'interieur. B(26 ; 190),
                   C(156 ; 190), sommet A(90 ; 86). Pied en (90 ; 190), qui
                   est bien compris entre 26 et 156. -->
              <line class="frame-line" x1="26" y1="190" x2="156" y2="190"></line>
              <line class="frame-line" x1="26" y1="190" x2="90" y2="86"></line>
              <line class="frame-line" x1="90" y1="86" x2="156" y2="190"></line>
              <line class="curve-main" x1="90" y1="86" x2="90" y2="190"></line>
              <line class="frame-line" x1="90" y1="180" x2="100" y2="180"></line>
              <line class="frame-line" x1="100" y1="180" x2="100" y2="190"></line>
              <circle class="plot-point" cx="90" cy="86" r="4"></circle>
              <text class="tick-label" x="98" y="140" text-anchor="start">h = 104</text>
              <text class="tick-label" x="91" y="208" text-anchor="middle">base = 130</text>
              <text class="label-soft" x="91" y="226" text-anchor="middle">le pied tombe dedans</text>

              <!-- Vignette DROITE : pied a l'exterieur. B(214 ; 190),
                   C(344 ; 190), sommet A(180 ; 86). Le pied tombe en
                   (180 ; 190), soit A GAUCHE de B : il faut prolonger la
                   base, ce que fait le trait en tirets. L'angle en B vaut
                   108,1 degres, le triangle est donc franchement obtusangle
                   et le debordement est visible, pas suggere. -->
              <line class="frame-line" x1="214" y1="190" x2="344" y2="190"></line>
              <line class="frame-line" x1="214" y1="190" x2="180" y2="86"></line>
              <line class="frame-line" x1="180" y1="86" x2="344" y2="190"></line>
              <line class="guide-line" x1="214" y1="190" x2="176" y2="190"></line>
              <line class="curve-main" x1="180" y1="86" x2="180" y2="190"></line>
              <line class="frame-line" x1="180" y1="180" x2="190" y2="180"></line>
              <line class="frame-line" x1="190" y1="180" x2="190" y2="190"></line>
              <circle class="plot-point" cx="180" cy="86" r="4"></circle>
              <text class="tick-label" x="188" y="140" text-anchor="start">h = 104</text>
              <text class="tick-label" x="279" y="208" text-anchor="middle">base = 130</text>
              <text class="label-soft" x="279" y="226" text-anchor="middle">le pied tombe dehors</text>
            </svg>
          `,
          notes: [
            'Les deux bases mesurent $130$ et les deux hauteurs $104$ : les deux triangles ont donc la <strong>même aire</strong>, $\\dfrac{130 \\times 104}{2} = 6\\,760$.',
            'À droite, l\'angle en $B$ dépasse $90°$ (il vaut environ $108°$). Le sommet est alors « en arrière » de la base, et le pied de la hauteur sort du segment : c\'est le cas du triangle <strong>obtusangle</strong>.',
            'Le trait en tirets est le <strong>prolongement</strong> de la base. Il ne fait pas partie du triangle, mais la hauteur a bien le droit de le rencontrer : la définition dit « perpendiculaire à la droite $(BC)$ », pas « au segment $[BC]$ ».',
            'Dans les deux cas, la formule est la même : $\\mathcal{A} = \\dfrac{\\text{base} \\times \\text{hauteur}}{2}$. Ce qui change est le dessin, jamais le calcul.'
          ],
          reading: 'Le réflexe à prendre est simple : avant de calculer une aire, dis à voix haute quelle base tu as choisie. La hauteur qui va avec est celle qui part du sommet <strong>opposé</strong> à cette base, et elle tombe à angle droit — dedans ou dehors, peu importe.<br/><br/>Si tu prends une autre base, tu devras prendre une autre hauteur. Mélanger la base de l\'une avec la hauteur de l\'autre est l\'erreur la plus fréquente sur les aires, et elle donne un résultat qui peut sembler tout à fait raisonnable.',
          caption: 'Deux triangles de même base ($130$) et de même hauteur ($104$), donc de même aire : à droite, le pied de la hauteur tombe hors du triangle.'
        }
      ],
      formulas: [
        'Thalès : $\\dfrac{AM}{AB}=\\dfrac{AN}{AC}=\\dfrac{MN}{BC}$',
        'Aire triangle : $\\mathcal{A}=\\dfrac{\\text{base}\\times\\text{hauteur}}{2}$',
        'Somme des angles d\'un triangle : $180°$'
      ],
      recap: [
        'Thalès lie les rapports de longueurs quand une droite est parallèle à un côté du triangle.',
        'Le rapport des aires de deux triangles en configuration de Thalès est le carré du rapport de réduction : $k^2$.',
        'Quatre droites remarquables : médiane, hauteur, médiatrice, bissectrice — ne pas les confondre.',
        'La somme des angles d\'un triangle vaut toujours $180°$.'
      ],
      piege: 'Thalès s\'applique uniquement si $M\\in[AB]$ et $N\\in[AC]$ ET que $(MN)\\parallel(BC)$. Vérifier les conditions avant d\'écrire les rapports.'
    },
    quiz: [
      { q: 'Dans un triangle, deux angles mesurent $60°$ et $80°$. Le troisième mesure :', options: ['$40°$', '$50°$', '$60°$', '$120°$'], answer: 0, correction: '$180-60-80=40°$.' },
      { q: 'Dans un triangle $ABC$, $M\\in[AB]$ et $N\\in[AC]$ avec $(MN)\\parallel(BC)$. Si $AM=3$, $MB=6$, $AN=2$, alors $NC=$ ?', options: ['$2$', '$4$', '$6$', '$3$'], answer: 1, correction: '$\\frac{AM}{AB}=\\frac{AN}{AC} \\Rightarrow \\frac{3}{9}=\\frac{2}{AC} \\Rightarrow AC=6$. Donc $NC=AC-AN=6-2=4$.' },
      { q: 'La hauteur issue de $A$ dans un triangle $ABC$ est :', options: ['La droite issue de $A$, perpendiculaire au côté $BC$', 'La droite issue de $A$, passant par le milieu de $BC$', 'La droite perpendiculaire à $BC$ par son milieu', 'La droite qui partage l\'angle $\\hat{A}$ en deux parties égales'], answer: 0, correction: 'La hauteur issue de $A$ est perpendiculaire à $BC$ — mais pas nécessairement par le milieu de $BC$. Le milieu de $BC$ est utilisé par la médiane (option B) et la médiatrice (option C). La bissectrice (option D) divise l\'angle. Ces quatre droites sont distinctes !' },
      { q: 'Le rapport de réduction entre deux triangles en configuration de Thalès est $k = \\frac{1}{3}$. Le rapport de leurs aires est :', options: ['$\\frac{1}{3}$', '$\\frac{1}{9}$', '$\\frac{1}{6}$', '$\\frac{2}{3}$'], answer: 1, correction: 'Le rapport des aires est le carré du rapport de réduction : $k^2 = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$. L\'aire varie comme le carré des longueurs — une erreur fréquente est de confondre rapport de longueurs et rapport d\'aires.' },
      { q: 'Un triangle a des angles de $90°$, $45°$ et $45°$. Quels types de droites remarquables sont confondues pour le côté face à l\'angle de $90°$ ?', options: ['Médiane et hauteur issues de l\'angle droit sont confondues car le triangle est isocèle rectangle', 'Toutes les droites remarquables sont distinctes', 'Médiatrice et bissectrice sont confondues', 'Hauteur et médiatrice sont confondues'], answer: 0, correction: 'Dans un triangle isocèle rectangle, la médiane issue de l\'angle droit rejoint le milieu de l\'hypoténuse ET est perpendiculaire à l\'hypoténuse (c\'est aussi la hauteur). Les deux droites sont confondues. C\'est un cas particulier — en général, médiane et hauteur sont distinctes.' }
    ],
    /* GÉNÉRATEUR ÉLARGI le 2026-09-13.
       Mesure AVANT : 9 énoncés tirés, 3 moules, **1 seule tâche distincte** —
       un calcul de longueur par Thalès, habillé trois fois (un géomètre, un
       architecte, un cartographe). Les droites remarquables du triangle, la
       somme des angles et le rapport des aires, tous au programme du chapitre,
       n'étaient travaillés par aucun exercice.

       Cinq tâches maintenant. Les figures paramétriques sont posées sur les
       tâches qui le méritent (Thalès, aire du triangle) : un chapitre de
       géométrie est exactement le cas où une figure vaut un paragraphe. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['thales', 'angles', 'aire', 'aires-rapport', 'droites']);

        /* Tâche 1 — Thalès, calcul d'une longueur (la tâche historique). */
        if (tache === 'thales') {
          const ctx = pick([
            'Un géomètre mesure un terrain triangulaire et trace une clôture parallèle à la base',
            'Un architecte réduit un plan triangulaire par une coupe parallèle à la base',
            'Un cartographe étudie deux routes parallèles coupées par deux sentiers'
          ]);
          const am = rand(2, 6);
          const ratio = rand(2, 4);
          const ab = am * ratio;
          const bc = rand(3, 8) * ratio;
          const mn = bc / ratio;
          return {
            statement: `${ctx}, dans un triangle $ABC$. On sait que $(MN) \\parallel (BC)$, avec $AM = ${am}$, $AB = ${ab}$ et $BC = ${bc}$.<br/><br/>Calcule la longueur $MN$.`,
            answer: mn, tolerance: 0, unit: '',
            hint: `Commence par le rapport de réduction $k = \\dfrac{AM}{AB}$. Le théorème de Thalès dit que TOUTES les longueurs du petit triangle sont dans ce même rapport, donc $\\dfrac{MN}{BC} = k$.`,
            solution: [
              `Le rapport de réduction vaut $k = \\dfrac{AM}{AB} = \\dfrac{${am}}{${ab}} = \\dfrac{1}{${ratio}}$.`,
              `Par le théorème de Thalès, $MN = k \\times BC = \\dfrac{1}{${ratio}} \\times ${bc} = ${mn}$.`,
              `Contrôle de bon sens : $MN$ doit être plus petit que $BC$, puisque le triangle $AMN$ est une réduction de $ABC$.`
            ],
            figure: figureThalesTriangle(am, ab, bc)
          };
        }

        /* Tâche 2 — somme des angles d'un triangle. */
        if (tache === 'angles') {
          const a1 = rand(25, 80);
          const a2 = rand(25, Math.max(26, 175 - a1 - 20));
          const a3 = 180 - a1 - a2;
          return {
            statement: `Dans un triangle, deux angles mesurent $${a1}°$ et $${a2}°$.<br/><br/>Calcule la mesure du troisième angle, en degrés.`,
            answer: a3, tolerance: 0, unit: '°',
            hint: `Dans n'importe quel triangle, la somme des trois angles vaut toujours $180°$.`,
            solution: [
              `La somme des angles d'un triangle vaut $180°$.`,
              `Le troisième angle mesure donc $180 - ${a1} - ${a2} = ${a3}°$.`,
              `Vérification : $${a1} + ${a2} + ${a3} = 180$. Le triangle est ${a3 === 90 || a1 === 90 || a2 === 90 ? 'rectangle' : (a1 > 90 || a2 > 90 || a3 > 90 ? 'obtusangle' : 'acutangle')}.`
            ],
            figure: figureTriangleAngles(a1, a2)
          };
        }

        /* Tâche 3 — aire d'un triangle. */
        if (tache === 'aire') {
          const b = rand(4, 14);
          const h = rand(3, 12);
          const aire = (b * h) / 2;
          return {
            statement: `Un triangle a pour base $b = ${b}$ cm et pour hauteur relative à cette base $h = ${h}$ cm.<br/><br/>Calcule son aire, en cm².`,
            answer: aire, tolerance: 0, unit: 'cm²',
            hint: `L'aire d'un triangle vaut $\\dfrac{b \\times h}{2}$. La division par deux vient de ce qu'un triangle est la moitié d'un rectangle de mêmes base et hauteur.`,
            solution: [
              `L'aire d'un triangle se calcule par $\\mathcal{A} = \\dfrac{b \\times h}{2}$.`,
              `$\\mathcal{A} = \\dfrac{${b} \\times ${h}}{2} = \\dfrac{${b * h}}{2} = ${fr(aire)}$ cm².`,
              `N'oublie pas la division par $2$ : sans elle, tu calculerais l'aire du rectangle entier.`
            ],
            figure: figureTriangle(b, h, { unite: 'cm' })
          };
        }

        /* Tâche 4 — le rapport des AIRES, qui est le carré du rapport des
           longueurs. C'est le piège du chapitre, et aucun exercice ne le
           travaillait avant ce jour. */
        if (tache === 'aires-rapport') {
          const k = pick([2, 3, 4, 5]);
          const aireGrande = rand(4, 20) * k * k;
          const airePetite = aireGrande / (k * k);
          return {
            statement: `Deux triangles sont en configuration de Thalès. Le petit est une réduction du grand dans le rapport $k = \\dfrac{1}{${k}}$.<br/><br/>L'aire du grand triangle vaut $${aireGrande}$ cm².<br/><br/>Calcule l'aire du petit, en cm².`,
            answer: airePetite, tolerance: 0, unit: 'cm²',
            hint: `Attention : les aires ne sont PAS dans le rapport $k$, mais dans le rapport $k^2$. Une réduction de moitié divise les longueurs par $2$, mais l'aire par $4$.`,
            solution: [
              `Les longueurs sont dans le rapport $k = \\dfrac{1}{${k}}$, mais une aire fait intervenir DEUX longueurs.`,
              `Le rapport des aires vaut donc $k^2 = \\dfrac{1}{${k * k}}$.`,
              `L'aire du petit triangle vaut $${aireGrande} \\times \\dfrac{1}{${k * k}} = ${airePetite}$ cm².`
            ]
          };
        }

        /* Tâche 5 — reconnaître une droite remarquable du triangle.
           Réponse codée par un numéro, pour rester en type numeric. */
        const cas = pick([
          { def: 'joint un sommet au milieu du côté opposé', nom: 'la médiane', n: 1 },
          { def: 'passe par un sommet et est perpendiculaire au côté opposé', nom: 'la hauteur', n: 2 },
          { def: 'coupe un côté perpendiculairement en son milieu', nom: 'la médiatrice', n: 3 },
          { def: 'partage un angle du triangle en deux angles égaux', nom: 'la bissectrice', n: 4 }
        ]);
        return {
          statement: `Dans un triangle, quelle droite remarquable ${cas.def} ?<br/><br/>Réponds par son numéro : $1$ la médiane, $2$ la hauteur, $3$ la médiatrice, $4$ la bissectrice.`,
          answer: cas.n, tolerance: 0, unit: '',
          hint: `Reviens à ce que chaque nom dit : « médiane » et « médiatrice » parlent d'un MILIEU, « hauteur » d'une perpendiculaire issue d'un sommet, « bissectrice » d'un angle coupé en deux.`,
          solution: [
            `La droite qui ${cas.def} est <strong>${cas.nom}</strong>.`,
            `Le piège classique est de confondre médiane et médiatrice : la médiane part d'un SOMMET et vise le milieu, la médiatrice ne passe par aucun sommet mais coupe un côté à angle droit en son milieu.`,
            `Réponse : $${cas.n}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un architecte trace un plan. Il sait que $(DE)\\parallel(BC)$ dans le triangle $ABC$ avec $AD=4$ m, $DB=6$ m et $DE=3$ m.',
      tasks: [
        'Calculer $BC$ par le théorème de Thalès.',
        'Calculer l\'aire du triangle $ADE$ si la hauteur depuis $A$ sur $DE$ vaut $2$ m.',
        'Quel est le rapport des aires des triangles $ADE$ et $ABC$ ?'
      ],
      solutions: [
        '$\\frac{AD}{AB}=\\frac{DE}{BC} \\Rightarrow \\frac{4}{10}=\\frac{3}{BC} \\Rightarrow BC=7{,}5$ m.',
        '$\\mathcal{A}_{ADE}=\\frac{3\\times 2}{2}=3$ m².',
        'Rapport $=\\left(\\frac{AD}{AB}\\right)^2=\\left(\\frac{4}{10}\\right)^2=\\frac{16}{100}=0{,}16$.'
      ],
      finalAnswer: '$BC=7{,}5$ m ; rapport des aires $= 0{,}16$.'
    },

    evaluation: {
      title: 'Évaluation — Géométrie plane',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans un triangle, deux angles mesurent $45°$ et $75°$. Calculer le troisième angle (en degrés).',
          type: 'numeric',
          answer: 60,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'La somme des angles d\'un triangle vaut $180°$. Troisième angle $= 180 - 45 - 75 = 60°$.'
        },
        {
          statement: 'Dans un triangle $ABC$, $(MN) \\parallel (BC)$ avec $M \\in [AB]$ et $N \\in [AC]$. On a $AM = 5$, $AB = 15$ et $BC = 12$. Calculer $MN$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: 'Par le théorème de Thalès : $\\dfrac{AM}{AB} = \\dfrac{MN}{BC} \\Rightarrow \\dfrac{5}{15} = \\dfrac{MN}{12} \\Rightarrow MN = \\dfrac{5 \\times 12}{15} = 4$.'
        },
        {
          statement: 'La hauteur issue de $A$ dans un triangle $ABC$ est :',
          type: 'multiple-choice',
          options: ['La droite passant par $A$ et le milieu de $[BC]$', 'La droite passant par $A$, perpendiculaire à $(BC)$', 'La perpendiculaire à $[BC]$ passant par son milieu', 'La droite qui divise l\'angle $\\hat{A}$ en deux'],
          answer: 1,
          points: 2,
          correction: 'La hauteur issue de $A$ est la droite passant par $A$ et perpendiculaire au côté opposé $[BC]$. L\'option A décrit la médiane, C la médiatrice, et D la bissectrice.'
        },
        {
          statement: 'Calculer l\'aire d\'un triangle de base $b = 8$ cm et de hauteur $h = 5$ cm.',
          type: 'numeric',
          answer: 20,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = \\dfrac{b \\times h}{2} = \\dfrac{8 \\times 5}{2} = 20$ cm².'
        },
        {
          statement: 'Deux triangles sont en configuration de Thalès avec un rapport de réduction $k = \\dfrac{2}{5}$. Le rapport de leurs aires est :',
          type: 'multiple-choice',
          options: ['$\\dfrac{2}{5}$', '$\\dfrac{4}{25}$', '$\\dfrac{4}{5}$', '$\\dfrac{2}{25}$'],
          answer: 1,
          points: 1,
          correction: 'Le rapport des aires est le carré du rapport de réduction : $k^2 = \\left(\\dfrac{2}{5}\\right)^2 = \\dfrac{4}{25}$.'
        }
      ]
    }
  });
