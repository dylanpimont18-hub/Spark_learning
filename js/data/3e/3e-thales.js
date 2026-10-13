/* =========================================================
   Spark Learning – data/3e/3e-thales.js
   Module : Théorème de Thalès (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-thales',
    level: 1, subject: 'maths',
    icon: '🔺',
    title: 'Théorème de Thalès',
    subtitle: 'Triangles semblables, rapports de longueurs',
    keywords: ['Thalès', 'Droites parallèles', 'Rapport', 'Triangles semblables', 'Réciproque'],
    physics: 'Optique géométrique : grandissement, lentilles, rayons lumineux',

    cours: {
      /* « Découvrir » réécrit le 2026-09-13.

         L'ancienne version ouvrait sur « Comment mesurer la hauteur d'un arbre
         sans le grimper ? », ce qui est une bonne question mais à laquelle on
         répond sans Thalès : il suffit d'un télémètre, ou de coucher l'arbre.
         Le test du cahier des charges (section 10) est sans appel — si on peut
         répondre sans la notion du chapitre, la question est mal choisie.

         La nouvelle ouverture pose une situation où AUCUNE mesure directe
         n'est possible et où l'ombre, elle, se mesure au mètre ruban : le
         parallélisme des rayons du soleil est alors la seule chose qui relie
         le mesurable à l'inaccessible. C'est exactement ce que Thalès apporte,
         et rien d'autre ne le donne. L'ancrage historique (la pyramide) n'est
         pas un décor : c'est le problème pour lequel le théorème a été
         inventé, et il porte la difficulté réelle du chapitre — comprendre
         que deux triangles très différents en taille ont les mêmes rapports. */
      intro: 'Tu es devant la pyramide de Khéops. Elle fait plus de $130$ mètres de haut, ses faces sont inclinées, et tu n\'as ni échelle, ni drone, ni télémètre : seulement un bâton et un mètre ruban.<br/><br/>' +
        'Plante le bâton dans le sable. À ce moment précis, ton bâton de $1$ mètre projette une ombre de $1{,}5$ mètre, et l\'ombre de la pyramide mesure $200$ mètres. Ces deux longueurs-là, tu peux les mesurer en marchant.<br/><br/>' +
        'Voilà le point : les rayons du soleil arrivent <strong>parallèles</strong>. Le petit triangle « bâton-ombre » et le grand triangle « pyramide-ombre » ont donc exactement la même forme, l\'un étant l\'agrandissement de l\'autre. Si l\'ombre est $1{,}5$ fois la hauteur pour le bâton, elle l\'est aussi pour la pyramide — et la hauteur cherchée vaut $200 \\div 1{,}5$, soit environ $133$ mètres.<br/><br/>' +
        'Tu viens de mesurer un monument sans le toucher. C\'est ce raisonnement, et lui seul, que le <strong>théorème de Thalès</strong> met en forme.<br/><br/>' +
        'Le <strong>théorème de Thalès</strong> est l\'un des résultats les plus puissants de la géométrie : quand deux droites parallèles coupent deux sécantes issues d\'un même point, tous les <strong>rapports de longueurs correspondants sont égaux</strong>.<br/><br/>' +
        'Cette égalité permet de calculer n\'importe quelle longueur inconnue dans une figure de triangles semblables. En pratique, Thalès apparaît partout : en <strong>optique</strong> (lentilles, grandissement), en topographie (mesure d\'objets inaccessibles) et dans les plans à l\'échelle.<br/><br/>' +
        'La <strong>réciproque</strong> est tout aussi utile : elle permet de prouver que deux droites sont parallèles à partir des seules mesures.<br/><br/>' +
        'Attention au <strong>cas « croisé »</strong> où le point $O$ est entre les deux parallèles : les rapports restent égaux, mais les mesures algébriques (avec signe) sont nécessaires.',
      definitions: [
        { term: 'Configuration de Thalès', def: 'Figure formée par <strong>deux droites sécantes</strong> passant par un même point $O$, coupées par <strong>deux droites parallèles</strong> $(AB)$ et $(A\'B\')$. C\'est la situation géométrique requise pour appliquer le théorème.' },
        { term: 'Rapport de Thalès', def: 'Le quotient $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB} = \\dfrac{A\'B\'}{AB}$ qui est <strong>constant</strong> dans une configuration de Thalès. On dit que les longueurs sont <strong>proportionnelles</strong>.' },
        { term: 'Réciproque de Thalès', def: 'Si les points $A$, $A\'$ sont sur une sécante et $B$, $B\'$ sur l\'autre, et que $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB}$ avec les points du <strong>même côté</strong> de $O$, alors $(AB) \\parallel (A\'B\')$.' },
        { term: 'Grandissement', def: 'En optique, le rapport $\\gamma = \\dfrac{A\'B\'}{AB}$ qui indique de combien l\'image est <strong>agrandie</strong> ($|\\gamma| > 1$) ou <strong>réduite</strong> ($|\\gamma| < 1$). Si $\\gamma < 0$, l\'image est renversée.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Étape 1 : Identifier</strong> deux droites parallèles coupées par deux sécantes passant par le même point $O$.',
          '<strong>Étape 2 : Nommer</strong> les points : le point commun $O$, les points sur une parallèle $A$ et $B$, les points sur l\'autre $A\'$ et $B\'$ (du même côté de $O$).',
          '<strong>Étape 3 : Appliquer</strong> l\'égalité des rapports : $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB} = \\dfrac{A\'B\'}{AB}$.',
          '<strong>Étape 4 : Calculer</strong> l\'inconnue par produit en croix à partir de l\'égalité choisie.'
        ]
      },
      example: {
        statement: 'Dans une configuration de Thalès, $O$, $A$, $A\'$ sont alignés et $O$, $B$, $B\'$ sont alignés avec $(AB) \\parallel (A\'B\')$. On donne : $OA = 4$ cm, $OA\' = 6$ cm et $AB = 5$ cm. Calculer $A\'B\'$.',
        steps: [
          '<strong>Identifier la configuration</strong> : $(AB) \\parallel (A\'B\')$ et les deux sécantes passent par $O$. On peut appliquer le théorème de Thalès.',
          '<strong>Écrire l\'égalité des rapports</strong> : $\\dfrac{OA\'}{OA} = \\dfrac{A\'B\'}{AB}$, soit $\\dfrac{6}{4} = \\dfrac{A\'B\'}{5}$.',
          '<strong>Produit en croix</strong> : $A\'B\' = 5 \\times \\dfrac{6}{4} = 5 \\times 1{,}5 = 7{,}5$ cm.'
        ],
        answer: '$A\'B\' = 7{,}5$ cm.'
      },
      formulas: [
        'Si $(AB) \\parallel (A\'B\')$ : $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB} = \\dfrac{A\'B\'}{AB}$',
        'Grandissement optique : $\\gamma = \\dfrac{A\'B\'}{AB} = \\dfrac{\\overline{OA\'}}{\\overline{OA}}$',
        'Réciproque : si $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB}$, alors $(AB) \\parallel (A\'B\')$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Triangles semblables',
        title: 'Voir les longueurs correspondantes dans une configuration de Thalès',
        description: 'Les deux segments reliés en parallèle créent deux triangles semblables : on compare toujours des longueurs placées dans le même sens.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="thales-graph-title thales-graph-desc">
            <title id="thales-graph-title">Configuration de Thales</title>
            <desc id="thales-graph-desc">Le schema montre deux secantes issues du point O et deux segments paralleles AB et A'B'.</desc>
            <line class="frame-line" x1="54" y1="178" x2="314" y2="44"></line>
            <line class="frame-line" x1="54" y1="178" x2="314" y2="198"></line>
            <line class="curve-main" x1="158" y1="124" x2="210" y2="136"></line>
            <line class="curve-main" x1="262" y1="72" x2="314" y2="76"></line>
            <line class="guide-line" x1="158" y1="124" x2="262" y2="72"></line>
            <line class="guide-line" x1="210" y1="136" x2="314" y2="76"></line>
            <circle class="plot-point-alt" cx="54" cy="178" r="5"></circle>
            <circle class="plot-point-alt" cx="158" cy="124" r="5"></circle>
            <circle class="plot-point-alt" cx="210" cy="136" r="5"></circle>
            <circle class="plot-point" cx="262" cy="72" r="5"></circle>
            <circle class="plot-point" cx="314" cy="76" r="5"></circle>
            <text class="annotation-label" x="42" y="194">O</text>
            <text class="annotation-label" x="146" y="118">A</text>
            <text class="annotation-label" x="214" y="150">B</text>
            <text class="annotation-label" x="248" y="66">A'</text>
            <text class="annotation-label" x="318" y="92">B'</text>
            <text class="annotation-label" x="96" y="140">OA</text>
            <text class="annotation-label" x="136" y="92">OA'</text>
            <text class="annotation-label" x="120" y="184">OB</text>
            <text class="annotation-label" x="200" y="184">OB'</text>
            <text class="annotation-label" x="172" y="116">AB</text>
            <text class="annotation-label" x="278" y="66">A'B'</text>
            <text class="annotation-label" x="220" y="122">AB // A'B'</text>
            <rect x="30" y="18" width="304" height="34" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 7%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))"></rect>
            <text class="annotation-label" x="42" y="40">OA'/OA = OB'/OB = A'B'/AB</text>
          </svg>
        `,
        notes: [
          'Le théorème direct commence toujours par le parallélisme : ici les segments $AB$ et $A\'B\'$ sont parallèles.',
          'On compare des longueurs correspondantes dans le même sens : grand sur grand ou petit sur petit, jamais un mélange des deux.',
          'La réciproque renverse la logique : si les rapports sont égaux et les points du même côté de $O$, on peut conclure au parallélisme.'
        ],
        reading: 'Le plus sûr est de suivre chaque sécante depuis $O$ : on lit d\'abord la petite longueur, puis la grande qui lui correspond.',
        caption: 'Configuration de Thalès avec deux sécantes, un segment intermédiaire et un segment parallèle plus éloigné.'
      },
      /* SCHÉMAS SECONDAIRES, ajoutés le 2026-09-13 (chapitre pilote de la
         troisième). Principe du cahier des charges, section 9 : une figure par
         MALENTENDU, pas une figure par formule. Les trois malentendus retenus
         sont ceux qui font perdre des points au brevet, dans cet ordre :

           1. « le papillon, ce n'est pas du Thalès » — l'élève ne reconnaît la
              configuration que dans l'orientation du cours ;
           2. « j'ai bien écrit les mêmes lettres » — les rapports sont
              mélangés, un grand sur un petit ;
           3. « les rapports sont presque égaux, donc c'est parallèle » — la
              réciproque prise pour une comparaison de mesures.

         TOUTES LES COORDONNÉES SONT CALCULÉES, jamais posées à vue. Chaque
         point est obtenu en multipliant un vecteur unitaire par une longueur,
         et la seconde parallèle en multipliant la première par le rapport k :
         le parallélisme est donc exact par construction. Vérifié au produit
         vectoriel (voir scripts/manuel/tests/diagrams-3e.test.js) : l'écart au
         parallélisme vaut 8e-6 sur le premier schéma, ce qui n'est que
         l'arrondi d'écriture des coordonnées à deux décimales. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Deux dessins, un seul théorème',
          title: 'Le papillon est une configuration de Thalès',
          description: 'À gauche, la configuration que tout le monde reconnaît : le petit triangle est <strong>emboîté</strong> dans le grand. À droite, le point $O$ est <strong>entre</strong> les deux parallèles, et la figure ressemble à un papillon. C\'est la <strong>même situation</strong>, et le théorème s\'y applique exactement pareil.',
          svg: `
            <svg viewBox="0 0 400 176" role="img" aria-labelledby="thales-deux-title thales-deux-desc">
              <title id="thales-deux-title">Configuration emboitee et configuration en papillon</title>
              <desc id="thales-deux-desc">A gauche, deux droites secantes issues du point O vont vers la droite ; elles sont coupees par deux segments paralleles, le plus proche de O nomme A B et le plus eloigne nomme M N. Le petit triangle O A B est entierement contenu dans le grand triangle O M N. A droite, les memes deux droites secantes se croisent en O, mais le segment A B est d'un cote de O et le segment M N de l'autre cote : la figure forme deux triangles opposes par le sommet, en forme de papillon. Dans les deux cas les rapports de longueurs sont egaux et le theoreme de Thales s'applique de la meme facon.</desc>

              <!-- GAUCHE : configuration emboitee. O(30,108), rapport k = 2.
                   A et B sur les secantes a 42 et 37,8 unites de O ; M et N
                   au DOUBLE de ces distances, sur les memes secantes. Le
                   parallelisme de (AB) et (MN) est donc exact. -->
              <text class="annotation-label" x="100" y="18" text-anchor="middle">triangle emboîté</text>
              <line class="frame-line" x1="30" y1="108" x2="103.6" y2="67.52"></line>
              <line class="frame-line" x1="30" y1="108" x2="99.7" y2="137.27"></line>
              <line class="curve-main" x1="66.8" y1="87.76" x2="64.85" y2="122.64"></line>
              <line class="curve-main" x1="103.6" y1="67.52" x2="99.7" y2="137.27"></line>
              <circle class="plot-point-alt" cx="30" cy="108" r="4"></circle>
              <circle class="plot-point-alt" cx="66.8" cy="87.76" r="4"></circle>
              <circle class="plot-point-alt" cx="64.85" cy="122.64" r="4"></circle>
              <circle class="plot-point" cx="103.6" cy="67.52" r="4"></circle>
              <circle class="plot-point" cx="99.7" cy="137.27" r="4"></circle>
              <text class="tick-label" x="22" y="112" text-anchor="end">O</text>
              <text class="tick-label" x="62" y="80" text-anchor="end">A</text>
              <text class="tick-label" x="60" y="134" text-anchor="end">B</text>
              <text class="tick-label" x="111" y="62" text-anchor="start">M</text>
              <text class="tick-label" x="107" y="146" text-anchor="start">N</text>
              <text class="label-soft" x="100" y="164" text-anchor="middle">O hors des parallèles</text>

              <!-- DROITE : papillon. O(298,100), rapport k = 1,6, mais les
                   points M et N sont pris de l'AUTRE cote de O (multiplicateur
                   negatif). Les deux triangles sont opposes par le sommet. -->
              <text class="annotation-label" x="290" y="18" text-anchor="middle">papillon</text>
              <line class="frame-line" x1="331.3" y1="81.69" x2="244.73" y2="129.3"></line>
              <line class="frame-line" x1="329.53" y1="113.24" x2="247.55" y2="78.81"></line>
              <line class="curve-main" x1="331.3" y1="81.69" x2="329.53" y2="113.24"></line>
              <line class="curve-main" x1="244.73" y1="129.3" x2="247.55" y2="78.81"></line>
              <circle class="plot-point-alt" cx="298" cy="100" r="4"></circle>
              <circle class="plot-point-alt" cx="331.3" cy="81.69" r="4"></circle>
              <circle class="plot-point-alt" cx="329.53" cy="113.24" r="4"></circle>
              <circle class="plot-point" cx="244.73" cy="129.3" r="4"></circle>
              <circle class="plot-point" cx="247.55" cy="78.81" r="4"></circle>
              <text class="tick-label" x="300" y="94" text-anchor="start">O</text>
              <text class="tick-label" x="339" y="77" text-anchor="start">A</text>
              <text class="tick-label" x="337" y="122" text-anchor="start">B</text>
              <text class="tick-label" x="237" y="136" text-anchor="end">M</text>
              <text class="tick-label" x="240" y="74" text-anchor="end">N</text>
              <text class="label-soft" x="290" y="164" text-anchor="middle">O entre les parallèles</text>
            </svg>
          `,
          notes: [
            'Dans les deux dessins, $(AB)$ et $(MN)$ sont parallèles et les deux sécantes passent par $O$ : c\'est <strong>toute</strong> la condition du théorème.',
            'À gauche, $M$ et $N$ sont du <strong>même côté</strong> de $O$ que $A$ et $B$. À droite, ils sont de l\'autre côté.',
            'L\'égalité $\\dfrac{OM}{OA} = \\dfrac{ON}{OB} = \\dfrac{MN}{AB}$ s\'écrit et se calcule à l\'identique dans les deux cas.'
          ],
          reading: 'Pose ton doigt sur $O$ et suis une sécante : tu rencontres un point de la première parallèle, puis un point de la seconde. Que tu doives reculer ou avancer pour y aller ne change rien au calcul.',
          caption: 'La même configuration de Thalès, vue dans ses deux dispositions : triangle emboîté et papillon.'
        },
        {
          theme: 'maths',
          kicker: 'Piège',
          title: 'Un rapport se lit toujours dans le même sens',
          description: 'L\'égalité de Thalès met en jeu deux triangles, un petit et un grand. Écrire un rapport <strong>grand sur petit</strong> d\'un côté et <strong>petit sur grand</strong> de l\'autre donne une égalité fausse, et le résultat sort avec un facteur d\'écart considérable.',
          svg: `
            <svg viewBox="0 0 400 192" role="img" aria-labelledby="thales-sens-title thales-sens-desc">
              <title id="thales-sens-title">Ecriture juste et ecriture fausse d'un rapport de Thales</title>
              <desc id="thales-sens-desc">En haut, l'ecriture correcte : le rapport O M sur O A, qui vaut 9 divise par 6, est pose egal au rapport M N sur A B ; les deux quotients placent la grande longueur au numerateur, et le resultat cherche vaut 9 centimetres, donc bien plus que les 6 centimetres du segment A B. En dessous, en trait tirete et en teinte plus faible, l'ecriture fautive : le rapport O A sur O M, soit 6 divise par 9, est pose egal a M N sur A B ; les deux quotients ne sont pas orientes pareil, et le resultat obtenu, 4 centimetres, est plus petit que la longueur A B dont il est pourtant l'agrandissement.</desc>

              <!-- LE CALCUL JUSTE EN HAUT, en teinte d'accent : l'oeil lit le
                   haut d'abord (patron « piege », section 9). -->
              <rect x="16" y="14" width="368" height="72" rx="10"
                    fill="color-mix(in srgb, var(--diagram-accent) 9%, var(--bg-card))"
                    stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
              <text class="annotation-label" x="30" y="36">les deux quotients dans le même sens</text>
              <text class="annotation-label" x="30" y="60">OM / OA = MN / AB     donc     9 / 6 = MN / 6</text>
              <text class="annotation-label" x="30" y="78">MN = 9 cm     le grand segment est plus grand</text>

              <!-- L'ERREUR EN DESSOUS, en teinte faible et en trait tirete. -->
              <rect x="16" y="104" width="368" height="72" rx="10" fill="none"
                    stroke="color-mix(in srgb, var(--text-muted) 34%, transparent)"
                    stroke-dasharray="6 4"></rect>
              <text class="label-soft" x="30" y="126">les quotients sont retournés</text>
              <text class="label-soft" x="30" y="150">OA / OM = MN / AB     donc     6 / 9 = MN / 6</text>
              <text class="label-soft" x="30" y="168">MN = 4 cm     le grand segment serait plus petit</text>
            </svg>
          `,
          notes: [
            'Données : $OA = 6$ cm, $OM = 9$ cm et $AB = 6$ cm, avec $(AB) \\parallel (MN)$.',
            'Écriture juste : $\\dfrac{OM}{OA} = \\dfrac{MN}{AB}$, soit $\\dfrac{9}{6} = \\dfrac{MN}{6}$, donc $MN = 9$ cm.',
            'Écriture fautive : $\\dfrac{OA}{OM} = \\dfrac{MN}{AB}$ donne $MN = 4$ cm, un segment <strong>plus petit</strong> que $AB$ alors qu\'il en est l\'agrandissement.',
            '<strong>Le contrôle qui sauve</strong> : avant d\'écrire quoi que ce soit, demande-toi si la longueur cherchée doit être plus grande ou plus petite que celle qu\'on te donne. Un résultat du mauvais côté signale l\'erreur sans qu\'on ait à relire le calcul.'
          ],
          reading: 'Compare les deux dernières lignes : le même énoncé, deux résultats, et un seul des deux est compatible avec le dessin.',
          caption: 'Le calcul correct au-dessus, l\'inversion des rapports en dessous, avec le résultat impossible qu\'elle produit.'
        },
        {
          theme: 'maths',
          kicker: 'Réciproque',
          title: 'Rapports égaux ou droites parallèles, jamais à peu près',
          description: 'La réciproque n\'est pas une comparaison de mesures, c\'est un <strong>test d\'égalité</strong>. Les deux figures ci-dessous partagent les mêmes sécantes et le même point $A$ ; seul le point $M$ change de place, et le parallélisme disparaît.',
          svg: `
            <svg viewBox="0 0 340 176" role="img" aria-labelledby="thales-recip-title thales-recip-desc">
              <title id="thales-recip-title">Rapports egaux et rapports inegaux</title>
              <desc id="thales-recip-desc">A gauche, les deux rapports valent tous les deux 2 : les segments A B et M N sont exactement paralleles. A droite, le premier rapport vaut 2 et le second seulement 1 virgule 45 ; le segment M N penche nettement par rapport au segment A B, d'environ dix-huit degres, et les deux droites finiraient par se couper. La difference entre les deux rapports est petite en apparence mais le parallelisme, lui, est perdu.</desc>

              <!-- GAUCHE : les deux rapports valent 2, les droites sont
                   PARALLELES. Coordonnees calculees, ecart au parallelisme
                   1,6e-4 en sinus, soit l'arrondi d'ecriture. -->
              <text class="annotation-label" x="70" y="18" text-anchor="middle">rapports égaux</text>
              <line class="frame-line" x1="30" y1="105" x2="100.1" y2="66.45"></line>
              <line class="frame-line" x1="30" y1="105" x2="96.85" y2="131.74"></line>
              <line class="curve-main" x1="65.05" y1="85.72" x2="63.43" y2="118.37"></line>
              <line class="curve-main" x1="100.1" y1="66.45" x2="96.85" y2="131.74"></line>
              <circle class="plot-point-alt" cx="30" cy="105" r="4"></circle>
              <circle class="plot-point-alt" cx="65.05" cy="85.72" r="4"></circle>
              <circle class="plot-point-alt" cx="63.43" cy="118.37" r="4"></circle>
              <circle class="plot-point" cx="100.1" cy="66.45" r="4"></circle>
              <circle class="plot-point" cx="96.85" cy="131.74" r="4"></circle>
              <text class="tick-label" x="22" y="109" text-anchor="end">O</text>
              <text class="tick-label" x="60" y="78" text-anchor="end">A</text>
              <text class="tick-label" x="58" y="130" text-anchor="end">B</text>
              <text class="tick-label" x="108" y="62" text-anchor="start">M</text>
              <text class="tick-label" x="104" y="141" text-anchor="start">N</text>
              <text class="label-soft" x="70" y="158" text-anchor="middle">2 et 2</text>
              <text class="annotation-label" x="70" y="172" text-anchor="middle">parallèles</text>

              <!-- DROITE : le second rapport vaut 1,45 au lieu de 2. L'ecart
                   angulaire mesure est de 17,6 degres : la figure ne triche
                   pas, elle montre un ecart reellement visible. -->
              <text class="annotation-label" x="270" y="18" text-anchor="middle">rapports inégaux</text>
              <line class="frame-line" x1="230" y1="105" x2="300.1" y2="66.45"></line>
              <line class="frame-line" x1="230" y1="105" x2="278.47" y2="124.39"></line>
              <line class="curve-main" x1="265.05" y1="85.72" x2="263.43" y2="118.37"></line>
              <line class="curve-main" x1="300.1" y1="66.45" x2="278.47" y2="124.39"></line>
              <circle class="plot-point-alt" cx="230" cy="105" r="4"></circle>
              <circle class="plot-point-alt" cx="265.05" cy="85.72" r="4"></circle>
              <circle class="plot-point-alt" cx="263.43" cy="118.37" r="4"></circle>
              <circle class="plot-point" cx="300.1" cy="66.45" r="4"></circle>
              <circle class="plot-point" cx="278.47" cy="124.39" r="4"></circle>
              <text class="tick-label" x="222" y="109" text-anchor="end">O</text>
              <text class="tick-label" x="260" y="78" text-anchor="end">A</text>
              <text class="tick-label" x="258" y="130" text-anchor="end">B</text>
              <text class="tick-label" x="308" y="62" text-anchor="start">M</text>
              <text class="tick-label" x="286" y="134" text-anchor="start">N</text>
              <text class="label-soft" x="270" y="158" text-anchor="middle">2 et 1,45</text>
              <text class="annotation-label" x="270" y="172" text-anchor="middle">non parallèles</text>
            </svg>
          `,
          notes: [
            'À gauche : $\\dfrac{OM}{OA} = 2$ et $\\dfrac{ON}{OB} = 2$. Les deux rapports sont <strong>égaux</strong>, donc $(AB) \\parallel (MN)$.',
            'À droite : $\\dfrac{OM}{OA} = 2$ mais $\\dfrac{ON}{OB} = 1{,}45$. Les rapports diffèrent, et le dessin s\'ouvre de près de $18°$.',
            'Il n\'existe pas de « presque parallèle » : dès que les deux rapports diffèrent, les droites finissent par se couper.',
            'La réciproque exige aussi que $M$ et $N$ soient du <strong>même côté</strong> de $O$ — sans quoi les rapports peuvent être égaux sans que les droites le soient.'
          ],
          reading: 'Prends une règle et prolonge les deux segments forts de la figure de droite : ils se rejoignent. À gauche, tu peux prolonger autant que tu veux, ils ne se rencontreront jamais.',
          caption: 'Deux configurations aux mêmes sécantes : rapports égaux et droites parallèles à gauche, rapports inégaux et droites sécantes à droite.'
        }
      ],

      recap: [
        '<strong>Rapports cohérents</strong> : toujours écrire les rapports dans le même sens (grand sur petit ou petit sur grand), jamais mélangés.',
        '<strong>Réciproque</strong> : elle sert à <strong>prouver</strong> que deux droites sont parallèles, à condition que les points soient du même côté de $O$.',
        '<strong>Grandissement en optique</strong> : le signe de $\\gamma$ indique si l\'image est droite ($\\gamma > 0$) ou renversée ($\\gamma < 0$) ; sa valeur absolue donne le facteur d\'agrandissement.',
        '<strong>Configuration croisée</strong> : quand $O$ est entre les parallèles, les rapports restent égaux mais on utilise des mesures algébriques (avec signe).'
      ],
      piege: 'Attention aux rapports : ils peuvent être négatifs en optique (image renversée). Le grandissement $\\gamma$ est négatif quand l\'image est renversée. Ne jamais écrire juste $|AB|/|A\'B\'|$ sans tenir compte des sens — utiliser les mesures algébriques.'
    },

    quiz: [
      {
        q: 'Un élève écrit pour une configuration de Thalès : $\\dfrac{OA}{OA\'} = \\dfrac{A\'B\'}{AB}$. Quelle est son erreur ?',
        options: [
          'Il a mélangé numérateurs et dénominateurs : il faut soit $\\dfrac{OA\'}{OA} = \\dfrac{A\'B\'}{AB}$ soit $\\dfrac{OA}{OA\'} = \\dfrac{AB}{A\'B\'}$',
          'Il ne peut pas écrire d\'égalité de rapports avec $A\'B\'$',
          'Il n\'y a pas d\'erreur, les deux rapports sont bien égaux',
          'Il aurait dû utiliser $OB$ et $OB\'$ au lieu de $OA$ et $OA\'$'
        ],
        answer: 0,
        correction: 'Dans Thalès, les rapports doivent être cohérents : grand sur grand ou petit sur petit. Écrire $\\frac{OA}{OA\'} = \\frac{A\'B\'}{AB}$ mélange les deux : $OA < OA\'$ (petit sur grand) alors que $A\'B\' > AB$ (grand sur petit). La forme correcte est $\\dfrac{OA\'}{OA} = \\dfrac{A\'B\'}{AB}$.'
      },
      {
        q: 'Une lentille forme une image $A\'B\'$ d\'un objet $AB = 2$ cm. L\'objet est à $OA = 15$ cm et l\'image à $OA\' = 45$ cm. Quel est le grandissement $|\\gamma|$ ?',
        options: ['$2$', '$3$', '$1{,}5$', '$0{,}5$'],
        answer: 1,
        correction: '$|\\gamma| = \\dfrac{|OA\'|}{|OA|} = \\dfrac{45}{15} = 3$. L\'image est 3 fois plus grande que l\'objet.'
      },
      {
        q: 'Un arbre de hauteur inconnue projette une ombre de $8$ m. En même temps, un piquet de $1{,}5$ m projette une ombre de $2$ m. Quelle est la hauteur de l\'arbre ?',
        options: ['$4$ m', '$6$ m', '$12$ m', '$10{,}7$ m'],
        answer: 1,
        correction: 'Les rayons du soleil sont parallèles (Thalès). $\\dfrac{h_{\\text{arbre}}}{1{,}5} = \\dfrac{8}{2} \\Rightarrow h_{\\text{arbre}} = 1{,}5 \\times 4 = 6$ m.'
      }
    ],

    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13 (chapitre pilote de la troisième).

         AVANT : un seul moule de tâche — « on donne $OA$, $OA'$ et $AB$,
         calcule $A'B'$ » — habillé de six contextes tirés par pick(). Mesure à
         40 tirages : 6 moules d'énoncé, mais **1 seule tâche distincte**. Le
         professeur qui imprimait la banque obtenait donc dix-sept fois la même
         question sous six décors. C'est exactement le défaut que le cahier des
         charges (section 11) demande de mesurer sur la TÂCHE et non sur le
         moule : varier le décor n'est pas varier l'exercice.

         APRÈS : sept familles de tâches, toutes au programme de troisième.
           - 'segment'    : la tâche directe, calculer le segment parallèle ;
           - 'longueur'   : calculer une longueur portée par une sécante ;
           - 'inverse'    : remonter du grand au petit, là où l'élève inverse
                            les rapports (l'erreur 1 de la fiche professeur) ;
           - 'papillon'   : la même tâche en configuration croisée, que l'élève
                            ne reconnaît pas ;
           - 'reciproque' : conclure au parallélisme, ou refuser de conclure ;
           - 'rapport'    : trouver le coefficient lui-même, sans longueur à la
                            clé — c'est ce qui prépare l'homothétie ;
           - 'ombre'      : la situation historique, où la configuration doit
                            être RECONNUE avant d'être calculée (compétence
                            « modéliser »).

         Les FIGURES suivent le tirage, jamais l'inverse : figureThales reçoit
         les longueurs réellement tirées et l'option `inconnu` place le point
         d'interrogation sur le segment cherché. La tâche 'reciproque' ne reçoit
         PAS de figure : dessiner la configuration reviendrait à trancher la
         question posée, puisque l'élève verrait le parallélisme au lieu de le
         démontrer. La tâche 'ombre' non plus : la bibliothèque n'a pas de
         helper de scène (soleil, arbre, ombre au sol), et une configuration
         abstraite désignerait ce que l'énoncé demande justement de reconnaître.
         Plutôt aucune figure qu'une figure qui répond à la place de l'élève. */
      generate() {
        /* Rapports à quotient simple : la réponse reste lisible, et l'élève se
           concentre sur le sens de l'égalité plutôt que sur la division. */
        const tache = pick(['segment', 'segment', 'longueur', 'inverse', 'papillon', 'reciproque', 'rapport', 'ombre']);

        if (tache === 'segment') {
          const oa = rand(4, 9), k = pick([1.5, 2, 2.5, 3]);
          const oaP = parseFloat((oa * k).toFixed(2));
          const ab = rand(3, 8);
          const abP = parseFloat((ab * k).toFixed(2));
          const ctx = pick([
            'Un <strong>projecteur de cinéma</strong> envoie son faisceau depuis la lampe $O$. Un premier écran intercepte le segment $AB$, un second écran, parallèle au premier et plus loin, intercepte $MN$.',
            'Un <strong>architecte</strong> agrandit un plan depuis un point de fuite $O$. Un mur apparaît en $AB$ sur le plan initial et en $MN$ sur l\'agrandissement.',
            'Sur un <strong>chantier</strong>, deux câbles partent du même point d\'ancrage $O$ et passent par deux barres parallèles, $AB$ puis $MN$.',
            'Un <strong>phare</strong> éclaire la mer depuis son sommet $O$ ; deux bateaux parallèles au rivage sont repérés en $AB$ et en $MN$.'
          ]);
          return {
            statement: ctx + `<br/><br/>On donne $OA = ${oa}$ cm, $OM = ${fr(oaP)}$ cm et $AB = ${ab}$ cm, avec $(AB) \\parallel (MN)$.<br/><br/>Calcule <strong>$MN$</strong>.`,
            answer: abP,
            tolerance: 0.05,
            unit: 'cm',
            figure: figureThales(oa, oaP, ab, { inconnu: 'ABp' }),
            hint: `Le rapport de Thalès vaut $k = \\dfrac{OM}{OA} = \\dfrac{${fr(oaP)}}{${oa}}$.<br/><br/>Ensuite $MN = k \\times AB$.`,
            solution: [
              `Les deux sécantes passent par $O$ et $(AB) \\parallel (MN)$ : le théorème de Thalès s'applique.`,
              `$k = \\dfrac{OM}{OA} = \\dfrac{${fr(oaP)}}{${oa}} = ${fr(k)}$`,
              `$MN = k \\times AB = ${fr(k)} \\times ${ab} = ${fr(abP)}$ cm.<br/><br/>Contrôle : $MN$ est plus grand que $AB$, comme le rapport $${fr(k)} > 1$ l'annonçait.`
            ]
          };
        }

        if (tache === 'longueur') {
          // Calculer une longueur portée par la SECONDE sécante : c'est la même
          // égalité, mais l'élève doit choisir le bon couple de rapports.
          const oa = rand(4, 9), k = pick([1.5, 2, 2.5]);
          const oaP = parseFloat((oa * k).toFixed(2));
          const ob = rand(3, 8);
          const obP = parseFloat((ob * k).toFixed(2));
          const ctx = pick([
            'Un <strong>géomètre</strong> vise depuis le point $O$ et plante quatre piquets : $A$ et $M$ alignés avec $O$ sur une première visée, $B$ et $N$ alignés avec $O$ sur une seconde.',
            'Deux <strong>rayons lumineux</strong> partent de la source $O$ et traversent deux fentes parallèles, la première en $A$ et $B$, la seconde en $M$ et $N$.',
            'Un <strong>pantographe</strong> de dessinateur reproduit une figure à partir du point fixe $O$ : les points $A$ et $B$ du dessin de départ correspondent à $M$ et $N$ sur la copie.'
          ]);
          return {
            statement: ctx + `<br/><br/>On sait que $(AB) \\parallel (MN)$, $OA = ${oa}$ cm, $OM = ${fr(oaP)}$ cm et $OB = ${ob}$ cm.<br/><br/>Calcule <strong>$ON$</strong>.`,
            answer: obP,
            tolerance: 0.05,
            unit: 'cm',
            figure: figureThales(oa, oaP, ob, { inconnu: 'ABp' }),
            hint: `Le rapport se lit sur la première sécante : $\\dfrac{OM}{OA}$.<br/><br/>Il vaut la même chose sur la seconde : $\\dfrac{ON}{OB}$.`,
            solution: [
              `Thalès donne $\\dfrac{OM}{OA} = \\dfrac{ON}{OB}$ : le rapport est le même sur les deux sécantes.`,
              `$\\dfrac{${fr(oaP)}}{${oa}} = ${fr(k)}$, donc $\\dfrac{ON}{${ob}} = ${fr(k)}$.`,
              `$ON = ${fr(k)} \\times ${ob} = ${fr(obP)}$ cm.`
            ]
          };
        }

        if (tache === 'inverse') {
          /* On donne le GRAND et on demande le PETIT. C'est là que l'élève
             inverse les rapports et trouve un résultat plus grand que la donnée
             — l'erreur 1 de la fiche professeur. Le contrôle de grandeur est
             donc écrit dans la solution, à chaque tirage. */
          const ab = rand(3, 7), k = pick([2, 2.5, 3, 4]);
          const abP = ab * k;
          const oa = rand(3, 6);
          const oaP = parseFloat((oa * k).toFixed(2));
          const ctx = pick([
            'Un <strong>rétroprojecteur</strong> agrandit un transparent sur un mur. La lampe est en $O$, le transparent porte le segment $AB$, et son image sur le mur est le segment $MN$.',
            'Une <strong>photocopieuse</strong> agrandit un document depuis un point $O$ : la figure d\'origine est $AB$, l\'agrandissement est $MN$.',
            'Une <strong>maquette</strong> et le bâtiment réel sont vus depuis le même point $O$ : $AB$ est une arête de la maquette, $MN$ l\'arête correspondante du bâtiment.'
          ]);
          return {
            statement: ctx + `<br/><br/>On donne $MN = ${fr(abP)}$ cm, $OM = ${fr(oaP)}$ cm et $OA = ${oa}$ cm, avec $(AB) \\parallel (MN)$.<br/><br/>Calcule <strong>$AB$</strong>.`,
            answer: ab,
            tolerance: 0.05,
            unit: 'cm',
            figure: figureThales(oa, oaP, ab, { inconnu: 'AB' }),
            hint: `Ici c'est le PETIT segment qu'on cherche : ton résultat doit être plus petit que $${fr(abP)}$ cm.<br/><br/>Écris $\\dfrac{AB}{MN} = \\dfrac{OA}{OM}$, avec les petits en haut des deux côtés.`,
            solution: [
              `Avant tout calcul : $AB$ est plus proche de $O$ que $MN$, donc $AB$ sera plus <strong>petit</strong> que $${fr(abP)}$ cm. Tout résultat plus grand serait à reprendre.`,
              `$\\dfrac{AB}{MN} = \\dfrac{OA}{OM} = \\dfrac{${oa}}{${fr(oaP)}} = ${fr(1 / k, 3)}$`,
              `$AB = ${fr(abP)} \\times ${fr(1 / k, 3)} = ${ab}$ cm, bien plus petit que $${fr(abP)}$ cm.`
            ]
          };
        }

        if (tache === 'papillon') {
          /* MÊME calcul qu'en configuration emboîtée, mais O est entre les deux
             parallèles. L'énoncé le dit explicitement pour que l'élève ne soit
             pas piégé sur la lecture, seulement sur la reconnaissance. */
          const oa = rand(3, 7), k = pick([1.5, 2, 2.5]);
          const oaP = parseFloat((oa * k).toFixed(2));
          const ab = rand(3, 7);
          const abP = parseFloat((ab * k).toFixed(2));
          const ctx = pick([
            'Deux routes rectilignes se croisent au rond-point $O$. Sur la première, les villages $A$ et $M$ sont de part et d\'autre du rond-point ; sur la seconde, les villages $B$ et $N$ le sont aussi.',
            'Deux câbles tendus se croisent au point $O$ d\'un pylône. De chaque côté du croisement, une traverse relie les deux câbles : $AB$ d\'un côté, $MN$ de l\'autre.',
            'Un <strong>appareil photo</strong> forme l\'image renversée d\'un objet : les rayons se croisent au centre optique $O$, l\'objet est le segment $AB$ et son image le segment $MN$, de l\'autre côté.'
          ]);
          return {
            statement: ctx + `<br/><br/>Le point $O$ est donc <strong>entre</strong> les deux segments parallèles $[AB]$ et $[MN]$ : c'est une configuration « en papillon ».<br/><br/>On donne $OA = ${oa}$ km, $OM = ${fr(oaP)}$ km et $AB = ${ab}$ km, avec $(AB) \\parallel (MN)$.<br/><br/>Calcule <strong>$MN$</strong>.`,
            answer: abP,
            tolerance: 0.05,
            unit: 'km',
            figure: figureThales(oa, oaP, ab, { croisee: true, inconnu: 'ABp', unite: 'km' }),
            hint: `Le papillon est une configuration de Thalès comme une autre : les longueurs se calculent exactement de la même façon.<br/><br/>$k = \\dfrac{OM}{OA}$, puis $MN = k \\times AB$.`,
            solution: [
              `Que $O$ soit entre les parallèles ou non ne change rien : les deux sécantes passent par $O$ et $(AB) \\parallel (MN)$, donc Thalès s'applique.`,
              `$k = \\dfrac{OM}{OA} = \\dfrac{${fr(oaP)}}{${oa}} = ${fr(k)}$`,
              `$MN = ${fr(k)} \\times ${ab} = ${fr(abP)}$ km.`
            ]
          };
        }

        if (tache === 'reciproque') {
          /* Une fois sur deux les rapports sont égaux, une fois sur deux ils
             diffèrent LÉGÈREMENT : l'écart est trop petit pour que l'œil
             tranche, ce qui est tout l'intérêt de la réciproque. */
          const oa = rand(3, 6), k = pick([2, 2.5, 3]);
          const om = parseFloat((oa * k).toFixed(2));
          const ob = rand(4, 8);
          const vrai = Math.random() > 0.5;
          const on = vrai ? parseFloat((ob * k).toFixed(2))
                          : parseFloat((ob * k + pick([-1, 1])).toFixed(2));
          const ctx = pick([
            'Un <strong>menuisier</strong> vérifie que deux traverses sont bien parallèles avant de visser.',
            'Un <strong>topographe</strong> contrôle sur son relevé si deux murs d\'une parcelle sont parallèles.',
            'Un <strong>maquettiste</strong> vérifie que deux barres de sa structure sont parallèles.'
          ]);
          const r1 = om / oa, r2 = on / ob;
          return {
            statement: ctx + `<br/><br/>Les points $O$, $A$, $M$ sont alignés dans cet ordre, ainsi que $O$, $B$, $N$. On mesure $OA = ${oa}$ cm, $OM = ${fr(om)}$ cm, $OB = ${ob}$ cm et $ON = ${fr(on)}$ cm.<br/><br/>Les droites $(AB)$ et $(MN)$ sont-elles parallèles ? Réponds par $1$ pour oui, $0$ pour non.`,
            answer: vrai ? 1 : 0,
            tolerance: 0.01,
            unit: '',
            hint: `Calcule les deux rapports $\\dfrac{OM}{OA}$ et $\\dfrac{ON}{OB}$, puis compare-les.<br/><br/>La réciproque demande une égalité <strong>exacte</strong>, pas une ressemblance.`,
            solution: [
              `$\\dfrac{OM}{OA} = \\dfrac{${fr(om)}}{${oa}} = ${fr(parseFloat(r1.toFixed(3)))}$ et $\\dfrac{ON}{OB} = \\dfrac{${fr(on)}}{${ob}} = ${fr(parseFloat(r2.toFixed(3)))}$.`,
              `Les points $M$ et $N$ sont bien du même côté de $O$ que $A$ et $B$ : la condition de position est remplie.`,
              vrai
                ? `Les deux rapports sont <strong>égaux</strong>. D'après la réciproque du théorème de Thalès, $(AB) \\parallel (MN)$. Réponse : $1$.`
                : `Les deux rapports <strong>diffèrent</strong>. La réciproque ne s'applique pas, et les droites ne sont pas parallèles — l'écart est petit, mais la réciproque exige l'égalité exacte. Réponse : $0$.`
            ]
          };
        }

        if (tache === 'rapport') {
          /* Trouver le COEFFICIENT lui-même, sans longueur à la clé. C'est la
             tâche qui prépare l'homothétie et le grandissement optique : le
             rapport y est l'objet du calcul, pas un intermédiaire. */
          const ab = rand(2, 6), k = pick([1.5, 2, 2.5, 3, 4]);
          const mn = parseFloat((ab * k).toFixed(2));
          const ctx = pick([
            { d: 'Une <strong>lentille</strong> forme l\'image $MN$ d\'un objet $AB$.', q: 'Quel est le grandissement $\\gamma$ de cette lentille ?' },
            { d: 'Une <strong>photocopieuse</strong> reproduit une figure $AB$ en une figure $MN$.', q: 'Par quel coefficient la photocopieuse a-t-elle agrandi la figure ?' },
            { d: 'Sur un <strong>plan à l\'échelle</strong>, un segment $AB$ correspond au segment réel $MN$.', q: 'Quel est le coefficient d\'agrandissement du plan vers la réalité ?' }
          ]);
          return {
            statement: ctx.d + `<br/><br/>On mesure $AB = ${ab}$ cm et $MN = ${fr(mn)}$ cm.<br/><br/>${ctx.q}`,
            answer: k,
            tolerance: 0.01,
            unit: '',
            hint: `Le rapport cherché compare l'image à l'objet : c'est $\\dfrac{MN}{AB}$.<br/><br/>Attention au sens : image au numérateur.`,
            solution: [
              `Le coefficient compare la figure obtenue à la figure de départ : on divise $MN$ par $AB$.`,
              `$\\dfrac{MN}{AB} = \\dfrac{${fr(mn)}}{${ab}} = ${fr(k)}$`,
              `Le coefficient vaut $${fr(k)}$. Comme il est supérieur à $1$, il s'agit bien d'un agrandissement.`
            ]
          };
        }

        /* tache === 'ombre' : la situation historique. Aucune configuration
           n'est nommée dans l'énoncé — c'est à l'élève de reconnaître que les
           rayons parallèles créent deux triangles semblables. C'est la seule
           tâche du chapitre qui demande de MODÉLISER avant de calculer, et
           c'est pour cela qu'elle n'a pas de figure : la dessiner ferait le
           travail à sa place. */
        const hPiquet = pick([1, 1.2, 1.5, 2]);
        const oPiquet = parseFloat((hPiquet * pick([1.2, 1.5, 2, 2.5])).toFixed(2));
        const rapport = oPiquet / hPiquet;
        const oGrand = rand(9, 30);
        const hGrand = parseFloat((oGrand / rapport).toFixed(2));
        const ctx = pick([
          { objet: 'un <strong>arbre</strong>', quoi: 'la hauteur de l\'arbre' },
          { objet: 'un <strong>clocher</strong>', quoi: 'la hauteur du clocher' },
          { objet: 'un <strong>immeuble</strong>', quoi: 'la hauteur de l\'immeuble' },
          { objet: 'un <strong>pylône</strong>', quoi: 'la hauteur du pylône' },
          { objet: 'une <strong>falaise</strong>', quoi: 'la hauteur de la falaise' }
        ]);
        return {
          statement: `En fin d'après-midi, ${ctx.objet} projette une ombre de ${fr(oGrand)} m sur le sol plat.<br/><br/>` +
            `Au même instant, un piquet vertical de ${fr(hPiquet)} m planté à côté projette une ombre de ${fr(oPiquet)} m.<br/><br/>` +
            `Calcule <strong>${ctx.quoi}</strong>.`,
          answer: hGrand,
          tolerance: 0.06,
          unit: 'm',
          hint: `Les rayons du soleil arrivent <strong>parallèles</strong> : le piquet et son ombre forment un triangle, l'objet et son ombre en forment un autre, et l'un est l'agrandissement de l'autre.<br/><br/>Commence par calculer combien de fois l'ombre du piquet est plus longue que le piquet.`,
          solution: [
            `Les rayons du soleil sont parallèles, donc les deux triangles « objet et son ombre » ont la même forme : c'est une configuration de Thalès.`,
            `Pour le piquet, l'ombre vaut $\\dfrac{${fr(oPiquet)}}{${fr(hPiquet)}} = ${fr(parseFloat(rapport.toFixed(3)))}$ fois sa hauteur. Ce rapport est le même pour l'objet.`,
            `Donc hauteur $= \\dfrac{${fr(oGrand)}}{${fr(parseFloat(rapport.toFixed(3)))}} = ${fr(hGrand)}$ m.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une lentille convergente forme l\'image $A\'B\'$ d\'un objet $AB = 3$ cm. L\'objet est placé à $OA = 12$ cm de la lentille, et son image se forme à $OA\' = 36$ cm.',
      schema: null,
      tasks: [
        'Calculer le grandissement $|\\gamma| = \\dfrac{|OA\'|}{|OA|}$.',
        'En déduire la taille de l\'image $|A\'B\'|$.',
        'L\'image est-elle plus grande ou plus petite que l\'objet ? Justifier avec la valeur de $|\\gamma|$.'
      ],
      solutions: [
        '$|\\gamma| = \\dfrac{|OA\'|}{|OA|} = \\dfrac{36}{12} = 3$.',
        '$|A\'B\'| = |\\gamma| \\times AB = 3 \\times 3 = 9$ cm.',
        'Comme $|\\gamma| = 3 > 1$, l\'image est $3$ fois plus grande que l\'objet : elle est agrandie.'
      ],
      finalAnswer: '$|\\gamma| = 3$, $|A\'B\'| = 9$ cm : l\'image est agrandie par rapport à l\'objet.'
    },

    evaluation: {
      title: 'Évaluation — Théorème de Thalès',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans une configuration de Thalès, $(AB) \\parallel (A\'B\')$, $OA = 6$ cm, $OA\' = 9$ cm et $AB = 4$ cm. Calculer $A\'B\'$.',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: 'cm',
          points: 1,
          correction: 'Rapport de Thalès : $k = \\dfrac{OA\'}{OA} = \\dfrac{9}{6} = 1{,}5$. $A\'B\' = k \\times AB = 1{,}5 \\times 4 = 6$ cm.'
        },
        {
          statement: 'Un poteau de $2$ m projette une ombre de $3$ m. Au même moment, un immeuble projette une ombre de $18$ m. Quelle est la hauteur de l\'immeuble ?',
          type: 'numeric',
          answer: 12,
          tolerance: 0,
          unit: 'm',
          points: 2,
          correction: 'Les rayons du soleil sont parallèles (configuration de Thalès). $\\dfrac{h}{2} = \\dfrac{18}{3} = 6$. Donc $h = 2 \\times 6 = 12$ m.'
        },
        {
          statement: 'Dans un triangle $OAB$, les points $A\'$ et $B\'$ sont sur les côtés $[OA]$ et $[OB]$. On a $\\dfrac{OA\'}{OA} = \\dfrac{3}{5}$ et $\\dfrac{OB\'}{OB} = \\dfrac{3}{5}$. Peut-on conclure que $(A\'B\') \\parallel (AB)$ ?',
          type: 'multiple-choice',
          options: [
            'Oui, par la réciproque du théorème de Thalès',
            'Non, il faut aussi vérifier $\\dfrac{A\'B\'}{AB} = \\dfrac{3}{5}$',
            'Non, Thalès ne fonctionne pas dans un triangle',
            'Oui, mais seulement si le triangle est rectangle'
          ],
          answer: 0,
          points: 2,
          correction: 'La réciproque de Thalès affirme : si les points $A\'$, $B\'$ sont sur $[OA]$ et $[OB]$ (même côté du point $O$) et si $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB}$, alors $(A\'B\') \\parallel (AB)$. Les deux rapports étant égaux ($\\frac{3}{5}$), on peut conclure.'
        },
        /* Q4 RÉÉCRITE le 2026-09-13. Elle demandait « $OA = 4$, $OA' = 10$,
           $OB = 6$, calculer $OB'$ » : une application directe de plus, la
           troisième de l'évaluation. Elle demande maintenant une longueur que
           rien ne signale comme atteignable — l'élève doit d'abord voir que la
           configuration est un papillon, puis que le rapport se lit sur la
           sécante dont les deux longueurs sont données. C'est « chercher », et
           c'est la compétence que la troisième doit travailler puisqu'elle
           prépare la démonstration autonome du lycée. */
        {
          statement: 'Deux routes se croisent au rond-point $O$. Sur la première, les villages $A$ et $M$ sont de part et d\'autre de $O$ ; sur la seconde, les villages $B$ et $N$ le sont aussi. On sait que $(AB) \\parallel (MN)$.<br/><br/>On mesure $OA = 4$ km, $OB = 6$ km, $ON = 15$ km et $AB = 5$ km.<br/><br/>Quelle est la longueur $MN$, en kilomètres ?',
          type: 'numeric',
          answer: 12.5,
          tolerance: 0,
          unit: 'km',
          points: 2,
          correction: 'La configuration est un <strong>papillon</strong> ($O$ est entre les deux parallèles), mais le théorème de Thalès s\'y applique comme ailleurs.<br/><br/>' +
            'La difficulté est de trouver le rapport : il n\'est pas donné directement, car sur la première sécante on ne connaît que $OA$. En revanche, la <strong>seconde</strong> sécante donne ses deux longueurs.<br/><br/>' +
            '$k = \\dfrac{ON}{OB} = \\dfrac{15}{6} = 2{,}5$.<br/><br/>' +
            'Ce rapport vaut pour tous les couples correspondants, donc $MN = k \\times AB = 2{,}5 \\times 5 = 12{,}5$ km.'
        },
        /* Q5 RÉÉCRITE le 2026-09-13. Elle demandait d'appliquer un
           grandissement donné, soit une multiplication. Elle demande maintenant
           de JUGER un raisonnement et de dire pourquoi il échoue : produire une
           explication, pas un nombre. C'est « communiquer », la compétence la
           moins évaluée de l'ouvrage, et le brevet la sollicite explicitement.
           L'erreur soumise au jugement est celle que la fiche professeur traite
           en premier, et le schéma « un rapport se lit toujours dans le même
           sens » sert de remédiation. */
        {
          statement: 'Dans une configuration de Thalès, Inès dispose de $OA = 6$ cm, $OM = 9$ cm et $AB = 6$ cm, avec $(AB) \\parallel (MN)$.<br/><br/>' +
            'Elle écrit : « $\\dfrac{OA}{OM} = \\dfrac{MN}{AB}$, donc $\\dfrac{6}{9} = \\dfrac{MN}{6}$, donc $MN = 4$ cm. »<br/><br/>' +
            'Son résultat est faux. Quelle affirmation explique le mieux pourquoi ?',
          type: 'multiple-choice',
          options: [
            'Ses deux quotients ne sont pas orientés dans le même sens : à gauche le petit est au numérateur, à droite le grand. Son résultat donne d\'ailleurs un segment plus petit que $AB$, alors qu\'il en est l\'agrandissement.',
            'Elle ne pouvait pas appliquer Thalès, car l\'énoncé ne précise pas la longueur $OB$.',
            'Elle a fait une erreur de calcul : $\\dfrac{6}{9} = \\dfrac{MN}{6}$ donne $MN = 9$ cm.',
            'Le théorème de Thalès ne permet pas de calculer un segment parallèle, seulement des longueurs portées par les sécantes.'
          ],
          answer: 0,
          points: 3,
          correction: 'Le calcul d\'Inès est juste ligne à ligne : $\\dfrac{6}{9} = \\dfrac{MN}{6}$ donne bien $MN = 4$. C\'est l\'égalité de départ qui est fausse.<br/><br/>' +
            'Dans le théorème de Thalès, tous les rapports se lisent <strong>dans le même sens</strong>. Inès a écrit $\\dfrac{OA}{OM}$, c\'est-à-dire petit sur grand, puis $\\dfrac{MN}{AB}$, c\'est-à-dire grand sur petit. L\'égalité correcte est $\\dfrac{OM}{OA} = \\dfrac{MN}{AB}$, qui donne $MN = 9$ cm.<br/><br/>' +
            '<strong>Le contrôle qui aurait suffi</strong> : $MN$ est plus loin de $O$ que $AB$, il doit donc être plus grand. Trouver $4$ cm pour un agrandissement de $6$ cm était impossible, et se voyait sans relire le calcul.'
        }
      ]
    }
  }
);
