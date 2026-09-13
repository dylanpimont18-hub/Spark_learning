/* =========================================================
   Spark Learning – data/3e/3e-volumes.js
   Module : Volumes : sphère et solides composés (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-volumes',
    level: 1, subject: 'maths',
    icon: '🌐',
    title: 'Volumes : sphère et solides composés',
    subtitle: 'Formule de la sphère, assemblages',
    keywords: ['Sphère', 'Boule', 'Volume', 'Solides composés', 'Rayon'],
    physics: 'Calcul du volume d\'un réservoir sphérique, d\'une planète, d\'une bulle de gaz',
    cours: {
      intro: 'Une boule de glace de $3$ cm de rayon, ce n\'est pas énorme. Le vendeur te propose, pour le double du prix, une boule de $6$ cm de rayon — « deux fois plus grosse », annonce-t-il.<br/><br/>' +
        '<strong>Est-ce une bonne affaire ?</strong><br/><br/>' +
        'Presque tout le monde répond que c\'est équitable : rayon doublé, glace doublée, prix doublé. C\'est faux, et largement. Le volume d\'une boule vaut $V = \\dfrac{4}{3}\\pi r^3$ : le rayon y figure <strong>au cube</strong>. En doublant $r$, on multiplie $r^3$ par $2^3 = 8$. La grosse boule contient <strong>huit fois</strong> plus de glace que la petite, pas deux. Au double du prix, c\'est une excellente affaire.<br/><br/>' +
        'Ce décalage entre l\'intuition et le calcul est tout le chapitre : dans l\'espace, les <strong>longueurs</strong> se multiplient par $k$, mais les <strong>volumes</strong> se multiplient par $k^3$. Aucune estimation à l\'œil ne rattrape ce facteur — seul le calcul tranche.<br/><br/>' +
        'La <strong>sphère</strong> est la surface des points situés à distance $r$ d\'un centre ; la <strong>boule</strong> est le volume plein qu\'elle délimite. Les deux mots désignent des objets différents, et l\'énoncé d\'un exercice choisit toujours l\'un ou l\'autre pour une bonne raison.<br/><br/>' +
        'Cette sensibilité au rayon explique pourquoi les cellules biologiques ne dépassent pas une certaine taille : leur surface (en $r^2$) ne peut plus suffire aux échanges si le volume (en $r^3$) croît trop vite. C\'est aussi pourquoi un gros animal se refroidit bien plus lentement qu\'une souris.<br/><br/>' +
        'Pour les <strong>solides composés</strong> : décomposer en formes simples (boule, cylindre, cône, pyramide), calculer chaque volume, puis <strong>additionner</strong> — ou <strong>soustraire</strong> si un solide est creusé dans un autre.',
      definitions: [
        { term: 'Sphère', def: 'La <strong>surface</strong> formée par tous les points situés à la même distance $r$ d\'un point central. La sphère est « creuse » : elle n\'inclut que la surface.' },
        { term: 'Boule', def: 'Le <strong>volume</strong> délimité par une sphère : la boule contient tous les points à distance $\\leq r$ du centre. C\'est la sphère « pleine ».' },
        { term: 'Rayon', def: 'La distance $r$ du centre à n\'importe quel point de la sphère. <strong>Attention</strong> : si l\'énoncé donne le diamètre $d$, il faut calculer $r = \\dfrac{d}{2}$ avant d\'appliquer les formules.' },
        { term: 'Solide composé', def: 'Solide formé par <strong>assemblage de solides simples</strong> (cylindre + cône, boule creusée, etc.). Son volume se calcule par addition ou soustraction des volumes des parties.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Étape 1 : Identifier</strong> les composantes du solide (boule, cône, cylindre, pyramide…).<br/><em>Exemple :</em> une figurine = cylindre + demi-sphère.',
          '<strong>Étape 2 : Calculer</strong> le volume de chaque partie avec la formule adaptée.<br/><em>Exemple :</em> $V_{\\text{boule}} = \\dfrac{4}{3}\\pi r^3$, $V_{\\text{cylindre}} = \\pi r^2 h$.',
          '<strong>Étape 3 : Combiner</strong> — additionner les volumes si juxtaposés, <strong>soustraire</strong> si un solide est creusé dans un autre.'
        ]
      },
      example: {
        statement: 'Calculer le volume d\'une boule de rayon $r = 6$ cm. On prendra $\\pi \\approx 3{,}14$.',
        steps: [
          '<strong>Formule</strong> : $V = \\dfrac{4}{3}\\pi r^3$.',
          '<strong>Calcul de $r^3$</strong> : $6^3 = 216$. Puis $V = \\dfrac{4}{3} \\times 3{,}14 \\times 216 = \\dfrac{4 \\times 3{,}14 \\times 216}{3}$.',
          '<strong>Résultat</strong> : $V = \\dfrac{2\\,713{,}44}{3} \\approx 904{,}32$ cm³.'
        ],
        answer: '$V \\approx 904{,}32$ cm³.'
      },
      formulas: [
        'Boule : $V = \\dfrac{4}{3}\\pi r^3$',
        'Surface d\'une sphère : $S = 4\\pi r^2$',
        'Hémisphère : $V = \\dfrac{2}{3}\\pi r^3$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Puissance du rayon',
        title: 'Comparer deux sphères : quand le rayon double, le volume est multiplié par 8',
        description: 'Le rayon passe de $r$ à $2r$ : chaque longueur double, mais le volume dépend du <strong>cube</strong> du rayon, donc $V\' = 2^3 \\times V = 8V$.',
        svg: `
          <svg viewBox="0 0 380 290" role="img" aria-labelledby="volumes-graph-title volumes-graph-desc">
            <title id="volumes-graph-title">Deux spheres de rayons r et 2r</title>
            <desc id="volumes-graph-desc">Le schema montre deux spheres, l'une de rayon r = 3 cm et l'autre de rayon double 2r = 6 cm, avec leurs volumes V = 113,04 cm3 et V' = 904,32 cm3, dans un rapport de 8.</desc>
            <rect x="20" y="8" width="340" height="30" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 7%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))"></rect>
            <text class="annotation-label" x="32" y="28">Rayon × 2 → Volume × 2³ = 8</text>
            <circle cx="110" cy="200" r="36" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></circle>
            <circle class="frame-line" cx="110" cy="200" r="36" fill="none"></circle>
            <circle cx="270" cy="160" r="72" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)" stroke="none"></circle>
            <circle class="curve-main" cx="270" cy="160" r="72" fill="none"></circle>
            <line class="guide-line" x1="110" y1="200" x2="146" y2="200"></line>
            <line class="guide-line" x1="270" y1="160" x2="342" y2="160"></line>
            <circle class="plot-point-alt" cx="110" cy="200" r="4"></circle>
            <circle class="plot-point-alt" cx="270" cy="160" r="4"></circle>
            <circle class="plot-point" cx="146" cy="200" r="4"></circle>
            <circle class="plot-point" cx="342" cy="160" r="4"></circle>
            <text class="annotation-label" x="118" y="190">r = 3 cm</text>
            <text class="annotation-label" x="278" y="148">2r = 6 cm</text>
            <text class="label-soft" x="110" y="150" text-anchor="middle">Sphere 1</text>
            <text class="label-soft" x="270" y="74" text-anchor="middle">Sphere 2</text>
            <text class="annotation-label" x="110" y="254" text-anchor="middle">V = 113,04 cm3</text>
            <text class="annotation-label" x="270" y="254" text-anchor="middle">V' = 904,32 cm3</text>
          </svg>
        `,
        notes: [
          'Ici $r = 3$ cm et $2r = 6$ cm : ce sont les mêmes valeurs que dans l\'exemple du cours, pour vérifier la cohérence des deux calculs.',
          '$V = \\dfrac{4}{3}\\pi r^3 \\approx 113{,}04$ cm³ pour la petite sphère, avec $\\pi \\approx 3{,}14$.',
          '$V\' = \\dfrac{4}{3}\\pi (2r)^3 = 2^3 \\times \\dfrac{4}{3}\\pi r^3 = 8V \\approx 904{,}32$ cm³ : on vérifie $904{,}32 \\div 113{,}04 = 8$.'
        ],
        reading: 'Ne confonds pas facteur de longueur et facteur de volume : le rayon double (facteur $2$) mais le volume est multiplié par $2^3 = 8$, pas par $2$.',
        caption: 'Deux sphères de rayons $r = 3$ cm et $2r = 6$ cm : leurs volumes sont dans un rapport de $8 = 2^3$.'
      },
      /* SCHÉMAS SECONDAIRES, ajoutés le 2026-09-13.

         Principe du cahier des charges, section 9 : une figure par MALENTENDU,
         pas une figure par formule. Le schéma principal AFFIRME déjà le facteur
         huit en juxtaposant deux sphères, mais il ne le DÉMONTRE pas : l'élève
         doit croire le nombre écrit sous chaque boule. Les trois malentendus
         retenus sont donc :

           1. « doubler le rayon double le volume » — il faut le réfuter en
              faisant COMPTER, ce qu'aucune sphère ne permet ; d'où le cube,
              seul solide qui se pave par lui-même ;
           2. « le rayon, le diamètre, c'est pareil » — l'erreur coûte
              exactement le même facteur huit, ce qui la rend indétectable si
              l'élève ne sait pas déjà que le facteur huit existe ;
           3. « un solide bizarre, je ne sais pas par où commencer » — le
              découpage en morceaux simples n'est pas évident tant qu'on n'a
              pas vu le trait de séparation.

         TOUTES LES COORDONNÉES SONT CALCULÉES, jamais posées à vue :

         Schéma 1 : petit cube d'arête 34 unités de viewBox, grand cube d'arête
         68, soit exactement le double. Vérifié : 34³ = 39 304 et 68³ = 314 432,
         de rapport 8,000000, et huit petits cubes totalisent 8 × 39 304 =
         314 432, c'est-à-dire EXACTEMENT le volume du grand. Le pavage est donc
         exact, pas approché. Le vecteur de fuite du grand cube (40 ; -28) est
         le double de celui du petit (20 ; -14), pour que la perspective elle
         aussi respecte le facteur deux.

         Schéma 2 : boule de diamètre 10 cm. Avec pi ≈ 3,14, le volume juste
         vaut 4/3 × 3,14 × 5³ = 523,33 cm³ et le volume fautif (diamètre pris
         pour rayon) 4/3 × 3,14 × 10³ = 4 186,67 cm³. Vérifié : leur rapport
         vaut exactement 8, le même facteur que celui du schéma précédent — ce
         qui est le point du schéma.

         Schéma 3 : cylindre de rayon 3 cm et de hauteur 8 cm surmonté d'une
         demi-boule de rayon 3 cm, à 14 unités de viewBox par centimètre.
         Vérifié : le rayon dessiné 42 et la hauteur dessinée 112 donnent bien
         3 cm et 8 cm ; la hauteur totale dessinée 112 + 42 = 154 vaut
         11 cm = 8 + 3. Volumes : 3,14 × 9 × 8 = 226,08 cm³ pour le cylindre,
         2/3 × 3,14 × 27 = 56,52 cm³ pour la demi-boule, total 282,60 cm³. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Piège',
          title: 'Doubler une arête range huit cubes, pas deux',
          description: 'Le schéma précédent l\'<strong>affirme</strong> avec deux sphères ; celui-ci te laisse le <strong>compter</strong>. Un cube dont l\'arête double se remplit exactement par <strong>huit</strong> copies du petit — quatre devant, quatre derrière. Rien à croire sur parole : les cases sont là.',
          svg: `
            <svg viewBox="0 0 400 152" role="img" aria-labelledby="vol-huit-title vol-huit-desc">
              <title id="vol-huit-title">Un cube d'arete doublee contient huit petits cubes</title>
              <desc id="vol-huit-desc">A gauche, un petit cube dessine en perspective, dont l'arete est notee a. A droite, un cube dont l'arete vaut exactement le double : ses trois faces visibles sont partagees en quatre par un trait vertical et un trait horizontal, si bien que le grand cube apparait decoupe en huit cubes de la taille du petit, quatre devant et quatre derriere. Le lecteur peut donc compter huit copies du petit cube dans le grand, alors que l'arete n'a ete multipliee que par deux.</desc>

              <!-- GAUCHE : le petit cube, arete 34, fuite (20 ; -14).
                   Face avant de (34 ; 180) a (68 ; 146). -->
              <text class="annotation-label" x="61" y="28" text-anchor="middle">arête a</text>
              <line class="guide-line" x1="54" y1="74" x2="88" y2="74"></line>
              <line class="guide-line" x1="54" y1="74" x2="54" y2="40"></line>
              <line class="guide-line" x1="34" y1="88" x2="54" y2="74"></line>
              <line class="frame-line" x1="34" y1="88" x2="68" y2="88"></line>
              <line class="frame-line" x1="68" y1="88" x2="68" y2="54"></line>
              <line class="frame-line" x1="68" y1="54" x2="34" y2="54"></line>
              <line class="frame-line" x1="34" y1="54" x2="34" y2="88"></line>
              <line class="frame-line" x1="34" y1="54" x2="54" y2="40"></line>
              <line class="frame-line" x1="68" y1="54" x2="88" y2="40"></line>
              <line class="frame-line" x1="68" y1="88" x2="88" y2="74"></line>
              <line class="frame-line" x1="54" y1="40" x2="88" y2="40"></line>
              <line class="frame-line" x1="88" y1="40" x2="88" y2="74"></line>
              <text class="tick-label" x="61" y="108" text-anchor="middle">le petit cube</text>
              <text class="label-soft" x="61" y="128" text-anchor="middle">une seule case</text>

              <!-- MILIEU : le passage d'un cube a l'autre. -->
              <text class="annotation-label" x="146" y="60" text-anchor="middle">arête × 2</text>
              <line class="guide-line" x1="112" y1="72" x2="180" y2="72"></line>

              <!-- DROITE : le grand cube, arete 68 = 2 × 34, fuite (40 ; -28)
                   = 2 × (20 ; -14). Face avant de (208 ; 212) a (276 ; 144).
                   Les medianes des trois faces visibles decoupent le solide en
                   huit cubes d'arete 34. VERIFIE : 68³ = 314 432 et
                   8 × 34³ = 8 × 39 304 = 314 432, egalite exacte. -->
              <text class="annotation-label" x="262" y="12" text-anchor="middle">arête 2a</text>
              <line class="frame-line" x1="208" y1="120" x2="276" y2="120"></line>
              <line class="frame-line" x1="276" y1="120" x2="276" y2="52"></line>
              <line class="frame-line" x1="276" y1="52" x2="208" y2="52"></line>
              <line class="frame-line" x1="208" y1="52" x2="208" y2="120"></line>
              <line class="frame-line" x1="208" y1="52" x2="248" y2="24"></line>
              <line class="frame-line" x1="276" y1="52" x2="316" y2="24"></line>
              <line class="frame-line" x1="276" y1="120" x2="316" y2="92"></line>
              <line class="frame-line" x1="248" y1="24" x2="316" y2="24"></line>
              <line class="frame-line" x1="316" y1="24" x2="316" y2="92"></line>
              <line class="guide-line" x1="208" y1="120" x2="248" y2="92"></line>
              <line class="guide-line" x1="248" y1="92" x2="316" y2="92"></line>
              <line class="guide-line" x1="248" y1="92" x2="248" y2="24"></line>
              <line class="curve-main" x1="242" y1="120" x2="242" y2="52"></line>
              <line class="curve-main" x1="208" y1="86" x2="276" y2="86"></line>
              <line class="curve-main" x1="242" y1="52" x2="282" y2="24"></line>
              <line class="curve-main" x1="228" y1="38" x2="296" y2="38"></line>
              <line class="curve-main" x1="296" y1="106" x2="296" y2="38"></line>
              <line class="curve-main" x1="276" y1="86" x2="316" y2="58"></line>
              <text class="tick-label" x="225" y="74" text-anchor="middle">1</text>
              <text class="tick-label" x="259" y="74" text-anchor="middle">2</text>
              <text class="tick-label" x="225" y="108" text-anchor="middle">3</text>
              <text class="tick-label" x="259" y="108" text-anchor="middle">4</text>
              <text class="tick-label" x="262" y="140" text-anchor="middle">quatre cases devant</text>
              <text class="annotation-label" x="370" y="74" text-anchor="middle">et quatre</text>
              <text class="annotation-label" x="370" y="92" text-anchor="middle">derrière</text>
              <text class="annotation-label" x="370" y="120" text-anchor="middle">huit en tout</text>
            </svg>
          `,
          notes: [
            'Le grand cube contient <strong>quatre</strong> cases visibles devant et <strong>quatre</strong> cachées derrière : huit en tout, jamais deux.',
            'Le calcul le confirme : $(2a)^3 = 2^3 \\times a^3 = 8a^3$. L\'exposant $3$ vient des trois directions de l\'espace, et chacune double.',
            'Le même raisonnement vaut pour une boule, un cône ou n\'importe quel solide : agrandir toutes les longueurs d\'un facteur $k$ multiplie le volume par $k^3$.',
            'Une aire, elle, serait multipliée par $k^2$ seulement — c\'est ce qu\'on voit sur une face du cube, découpée en quatre cases et non en huit.',
            '<strong>Le réflexe utile</strong> : pour une longueur, $k$ ; pour une aire, $k^2$ ; pour un volume, $k^3$. L\'exposant est le nombre de dimensions de la grandeur.'
          ],
          reading: 'Compte les cases dessinées sur la face avant du grand cube : il y en a quatre. Ajoute-leur les quatre qui se cachent derrière, marquées par les traits en pointillés. Chacune a la taille du petit cube de gauche.',
          caption: 'Un cube d\'arête $a$ et son agrandissement d\'arête $2a$, découpé en huit cubes de la taille du premier.'
        },
        {
          theme: 'maths',
          kicker: 'Piège',
          title: 'Prendre le diamètre pour le rayon multiplie le résultat par huit',
          description: 'Une boule de <strong>diamètre</strong> $10$ cm. Utiliser $10$ dans la formule au lieu de $5$ ne fait pas « un peu trop » : cela donne <strong>huit fois</strong> le vrai volume, exactement le facteur du schéma précédent. Et rien dans le résultat ne signale l\'erreur, puisque les deux nombres sont plausibles.',
          svg: `
            <svg viewBox="0 0 400 236" role="img" aria-labelledby="vol-rayon-title vol-rayon-desc">
              <title id="vol-rayon-title">Le rayon et le diametre d'une meme boule</title>
              <desc id="vol-rayon-desc">A gauche, une boule vue de face avec deux cotes tracees : le rayon, qui va du centre au bord et mesure cinq centimetres, et le diametre, qui traverse toute la boule d'un bord a l'autre et mesure dix centimetres. A droite, deux calculs superposes. Celui du haut, en teinte accentuee, utilise le rayon cinq et donne environ cinq cent vingt-trois centimetres cubes. Celui du bas, en trait tirete et en teinte plus faible, utilise le diametre dix a la place du rayon et donne environ quatre mille cent quatre-vingt-sept centimetres cubes, soit huit fois trop.</desc>

              <!-- GAUCHE : la boule, rayon dessine 52. La cote du rayon part du
                   centre (84 ; 118) vers le bord droit (136 ; 118) ; celle du
                   diametre traverse de (32 ; 118) a (136 ; 118). Les deux cotes
                   sont ecrites HORS du disque, sous et sur la figure. -->
              <circle class="frame-line" cx="84" cy="118" r="52"
                      fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></circle>
              <line class="curve-main" x1="84" y1="118" x2="136" y2="118"></line>
              <line class="guide-line" x1="32" y1="118" x2="84" y2="118"></line>
              <circle class="plot-point-alt" cx="84" cy="118" r="4"></circle>
              <text class="tick-label" x="110" y="110" text-anchor="middle">rayon 5</text>
              <text class="tick-label" x="84" y="190" text-anchor="middle">diamètre 10 cm</text>
              <line class="guide-line" x1="32" y1="178" x2="136" y2="178"></line>
              <line class="guide-line" x1="32" y1="170" x2="32" y2="186"></line>
              <line class="guide-line" x1="136" y1="170" x2="136" y2="186"></line>
              <text class="label-soft" x="84" y="216" text-anchor="middle">l'énoncé donne souvent</text>
              <text class="label-soft" x="84" y="232" text-anchor="middle">le diamètre</text>

              <!-- DROITE : le calcul juste au-dessus, l'erreur en dessous.
                   VERIFIE avec pi ≈ 3,14 : 4/3 × 3,14 × 125 = 523,33 et
                   4/3 × 3,14 × 1 000 = 4 186,67, de rapport exactement 8. -->
              <rect x="176" y="36" width="212" height="76" rx="10"
                    fill="color-mix(in srgb, var(--diagram-accent) 9%, var(--bg-card))"
                    stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
              <text class="annotation-label" x="190" y="58">le rayon vaut 5</text>
              <text class="tick-label" x="190" y="80">V = 4/3 × 3,14 × 5³</text>
              <text class="annotation-label" x="190" y="102">V ≈ 523 cm cubes</text>

              <rect x="176" y="130" width="212" height="76" rx="10" fill="none"
                    stroke="color-mix(in srgb, var(--text-muted) 34%, transparent)"
                    stroke-dasharray="6 4"></rect>
              <text class="label-soft" x="190" y="152">le diamètre pris pour le rayon</text>
              <text class="label-soft" x="190" y="174">V = 4/3 × 3,14 × 10³</text>
              <text class="label-soft" x="190" y="196">V ≈ 4 187 cm cubes</text>

              <text class="annotation-label" x="282" y="226" text-anchor="middle">huit fois trop</text>
            </svg>
          `,
          notes: [
            'Données : une boule de diamètre $d = 10$ cm, donc de rayon $r = \\dfrac{d}{2} = 5$ cm. On prend $\\pi \\approx 3{,}14$.',
            'Calcul juste : $V = \\dfrac{4}{3} \\times 3{,}14 \\times 5^3 \\approx 523$ cm³.',
            'Calcul fautif : $V = \\dfrac{4}{3} \\times 3{,}14 \\times 10^3 \\approx 4\\,187$ cm³, soit exactement <strong>huit fois</strong> le bon résultat — parce qu\'on a doublé le rayon sans le vouloir.',
            'Aucun des deux nombres n\'a l\'air absurde. C\'est ce qui rend cette erreur si coûteuse : elle ne se voit pas dans le résultat, seulement dans la donnée de départ.',
            '<strong>Le geste qui sauve</strong> : souligne dans l\'énoncé le mot « rayon » ou « diamètre » avant d\'écrire quoi que ce soit, et note $r = \\dfrac{d}{2}$ sur ta copie dès que c\'est le diamètre qui est donné.'
          ],
          reading: 'Compare les deux traits sur la boule de gauche : le court va du centre au bord, le long traverse tout. Regarde ensuite lequel des deux nombres a servi dans chacun des deux calculs de droite.',
          caption: 'Une boule de diamètre $10$ cm : le calcul juste avec $r = 5$ et le calcul fautif avec $r = 10$, huit fois trop grand.'
        },
        {
          theme: 'maths',
          kicker: 'Méthode',
          title: 'Un solide composé se découpe avant de se calculer',
          description: 'Ce réservoir n\'a pas de formule à lui. Trace le <strong>trait de séparation</strong> à l\'endroit où la forme change, et tu obtiens deux solides que tu sais déjà traiter : un <strong>cylindre</strong> et une <strong>demi-boule</strong>. Il ne reste qu\'à additionner.',
          svg: `
            <svg viewBox="0 0 400 260" role="img" aria-labelledby="vol-compose-title vol-compose-desc">
              <title id="vol-compose-title">Un reservoir decoupe en un cylindre et une demi-boule</title>
              <desc id="vol-compose-desc">A gauche, un reservoir dessine de face : un cylindre de rayon trois centimetres et de hauteur huit centimetres, surmonte d'une demi-boule de meme rayon. Un trait horizontal marque bien visiblement l'endroit ou la forme change, c'est-a-dire le haut du cylindre. A droite, les deux morceaux sont traites separement : le volume du cylindre vaut environ deux cent vingt-six centimetres cubes, celui de la demi-boule environ cinquante-sept centimetres cubes, et leur somme donne le volume total du reservoir, environ deux cent quatre-vingt-trois centimetres cubes.</desc>

              <!-- GAUCHE : le reservoir, a 14 unites de viewBox par centimetre.
                   Rayon 3 cm = 42 ; hauteur du cylindre 8 cm = 112. Axe en
                   x = 90. Base du cylindre a y = 222, haut du cylindre a
                   y = 222 - 112 = 110. La demi-boule de rayon 42 culmine donc
                   a y = 110 - 42 = 68, soit une hauteur totale de 154 unites,
                   c'est-a-dire 11 cm = 8 + 3. VERIFIE. -->
              <path class="frame-line" d="M48 110 A42 42 0 0 1 132 110" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></path>
              <line class="frame-line" x1="48" y1="110" x2="48" y2="222"></line>
              <line class="frame-line" x1="132" y1="110" x2="132" y2="222"></line>
              <ellipse class="frame-line" cx="90" cy="222" rx="42" ry="13"
                       fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)"></ellipse>
              <line class="curve-main" x1="34" y1="110" x2="146" y2="110"></line>
              <text class="annotation-label" x="152" y="106" text-anchor="start">ici la</text>
              <text class="annotation-label" x="152" y="124" text-anchor="start">forme change</text>
              <line class="guide-line" x1="90" y1="110" x2="132" y2="110"></line>
              <text class="tick-label" x="111" y="102" text-anchor="middle">3 cm</text>
              <text class="tick-label" x="90" y="176" text-anchor="middle">hauteur 8 cm</text>
              <text class="tick-label" x="90" y="250" text-anchor="middle">le réservoir entier</text>

              <!-- DROITE : les deux morceaux et leur somme. Volumes calcules
                   avec pi ≈ 3,14 : cylindre 3,14 × 3² × 8 = 226,08 ;
                   demi-boule 2/3 × 3,14 × 3³ = 56,52 ; total 282,60. -->
              <rect x="204" y="36" width="184" height="60" rx="10"
                    fill="color-mix(in srgb, var(--diagram-accent) 8%, var(--bg-card))"
                    stroke="color-mix(in srgb, var(--diagram-accent) 26%, var(--border))"></rect>
              <text class="annotation-label" x="216" y="58">morceau du haut</text>
              <text class="tick-label" x="216" y="78">demi-boule : 2/3 × 3,14 × 3³</text>
              <text class="tick-label" x="216" y="92">soit 56,52 cm cubes</text>

              <rect x="204" y="110" width="184" height="60" rx="10"
                    fill="color-mix(in srgb, var(--diagram-accent) 8%, var(--bg-card))"
                    stroke="color-mix(in srgb, var(--diagram-accent) 26%, var(--border))"></rect>
              <text class="annotation-label" x="216" y="132">morceau du bas</text>
              <text class="tick-label" x="216" y="152">cylindre : 3,14 × 3² × 8</text>
              <text class="tick-label" x="216" y="166">soit 226,08 cm cubes</text>

              <line class="grid-line" x1="204" y1="186" x2="388" y2="186"></line>
              <text class="annotation-label" x="216" y="212">total : 282,60 cm cubes</text>
              <text class="label-soft" x="216" y="234">on additionne, car les deux</text>
              <text class="label-soft" x="216" y="250">morceaux sont posés l'un sur l'autre</text>
            </svg>
          `,
          notes: [
            'Le trait de séparation se pose là où la forme <strong>change</strong> : ici au sommet du cylindre, qui est aussi le plat de la demi-boule.',
            'Volume du cylindre : $V = \\pi r^2 h = 3{,}14 \\times 3^2 \\times 8 = 226{,}08$ cm³.',
            'Volume de la demi-boule : $V = \\dfrac{2}{3}\\pi r^3 = \\dfrac{2}{3} \\times 3{,}14 \\times 3^3 = 56{,}52$ cm³.',
            'Total : $226{,}08 + 56{,}52 = 282{,}60$ cm³. On <strong>additionne</strong> parce que les deux morceaux sont posés l\'un sur l\'autre.',
            '<strong>Quand soustraire</strong> : si un solide est <strong>creusé</strong> dans un autre — un trou cylindrique dans un pavé, par exemple — on retire le volume du creux au lieu de l\'ajouter. Le découpage est le même, seul le signe change.'
          ],
          reading: 'Repère d\'abord le trait qui traverse le réservoir : il sépare les deux morceaux. Retrouve ensuite chacun d\'eux dans les deux cadres de droite, avec sa formule et son volume.',
          caption: 'Un réservoir découpé en un cylindre de rayon $3$ cm et de hauteur $8$ cm surmonté d\'une demi-boule de même rayon, avec le détail des deux volumes.'
        }
      ],
      recap: [
        'La formule de la boule est $V = \\dfrac{4}{3}\\pi r^3$ — le volume dépend du <strong>cube</strong> du rayon.',
        'Doubler le rayon multiplie le volume par $2^3 = 8$ — pas par $2$ ! C\'est la principale source d\'erreur.',
        'Toujours vérifier si l\'énoncé donne le <strong>rayon</strong> ou le <strong>diamètre</strong> ($r = d/2$).',
        'Pour un solide composé : <strong>décomposer</strong> en formes simples, calculer chaque volume, puis additionner (ou soustraire).'
      ],
      piege: 'Piège : $V = \\frac{4}{3}\\pi r^3$ — c\'est le RAYON au cube, pas le diamètre ! Si on donne le diamètre $d$, ne pas oublier $r = d/2$ avant de calculer $r^3$.'
    },
    quiz: [
      {
        q: 'On double le rayon d\'une boule. Par quel facteur son volume est-il multiplié ?',
        options: ['$2$', '$4$', '$8$', '$6$'],
        answer: 2,
        correction: '$V = \\frac{4}{3}\\pi r^3$. Avec $2r$ : $V\' = \\frac{4}{3}\\pi (2r)^3 = \\frac{4}{3}\\pi \\times 8r^3 = 8V$. Le volume est multiplié par $8 = 2^3$. L\'erreur courante est de répondre $\\times 2$ (confusion avec les longueurs) ou $\\times 4$ (confusion avec les aires).'
      },
      {
        q: 'Une boule de diamètre $6$ cm a un volume de :',
        options: ['$904{,}32$ cm³', '$113{,}04$ cm³', '$56{,}52$ cm³', '$452{,}16$ cm³'],
        answer: 1,
        correction: 'Rayon $r = 3$ cm. $V = \\frac{4}{3} \\times 3{,}14 \\times 27 = 113{,}04$ cm³.'
      },
      {
        q: 'Une figurine est formée d\'un cylindre surmonté d\'une demi-sphère de même rayon $r = 2$ cm. Le cylindre a une hauteur de $5$ cm. Quel est le volume total (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$79{,}55$ cm³', '$62{,}8$ cm³', '$96{,}97$ cm³', '$45{,}73$ cm³'],
        answer: 0,
        correction: 'Cylindre : $3{,}14 \\times 4 \\times 5 = 62{,}8$ cm³. Demi-sphère : $\\frac{2}{3} \\times 3{,}14 \\times 8 = 16{,}75$ cm³. Total : $\\approx 79{,}55$ cm³.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13.

         AVANT : un seul moule de tâche — « on donne le rayon, applique
         $\frac{4}{3}\pi r^3$ » — habillé de six contextes tirés par pick().
         Mesure à 60 tirages : 6 moules d'énoncé, mais **1 seule tâche
         distincte**.

         Le manque le plus net : le chapitre s'appelle « sphère ET SOLIDES
         COMPOSÉS », et aucun solide composé n'était jamais tiré. La moitié du
         titre n'était pas entraînée. Le DIAMÈTRE non plus n'apparaissait
         jamais, alors que diviser par deux avant de cuber est l'erreur que tous
         les énoncés de brevet tendent.

         APRÈS : sept familles de tâches, toutes au programme de troisième.
           - 'boule'     : la tâche d'origine, conservée ;
           - 'diametre'  : le rayon n'est pas donné, il faut le déduire —
                           l'élève cube le diamètre et se trompe d'un facteur 8 ;
           - 'compose'   : cylindre surmonté d'une demi-sphère, c'est-à-dire la
                           moitié du titre du chapitre, jamais entraînée ;
           - 'demi'      : une demi-boule seule, où l'oubli du facteur 2 est
                           immédiat ;
           - 'rayonInverse' : remonter du volume au rayon, par une racine
                           cubique — le chemin retour, jamais posé ;
           - 'facteur'   : doubler le rayon multiplie le volume par 8, la
                           propriété que le cours annonce et que rien ne
                           faisait manipuler ;
           - 'creux'     : une coquille entre deux rayons, où il faut
                           SOUSTRAIRE deux volumes.

         Aucune figure : la bibliothèque n'a pas de helper de solide de
         révolution, et un dessin de boule n'apprend rien de plus que le mot
         « boule ». Plutôt aucune figure qu'une figure décorative (section 9). */
      generate() {
        const tache = pick(['boule', 'diametre', 'compose', 'demi',
                            'rayonInverse', 'facteur', 'creux']);
        const PI = 3.14;

        if (tache === 'boule') {
          const r = rand(2, 8);
          const v = parseFloat((4 / 3 * PI * r * r * r).toFixed(1));
          const ctx = pick([
            { o: 'Un <strong>ballon de basket</strong>', q: 'le volume d\'air qu\'il contient' },
            { o: 'Une <strong>boule de pétanque</strong> en acier', q: 'son volume de métal' },
            { o: 'Une <strong>boule de bowling</strong>', q: 'son volume' },
            { o: 'Une <strong>perle</strong> destinée à un collier', q: 'son volume de matière' }
          ]);
          return {
            statement: `${ctx.o} a un rayon de $${r}$ cm.<br/><br/>Calcule <strong>${ctx.q}</strong>. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.`,
            answer: v, tolerance: 1, unit: 'cm³',
            hint: `La formule de la boule est $V = \\dfrac{4}{3}\\pi r^3$.<br/><br/>Commence par cuber le rayon : $${r}^3 = ${r * r * r}$.`,
            solution: [
              `$V = \\dfrac{4}{3}\\pi r^3$ avec $r = ${r}$ cm.`,
              `$r^3 = ${r}^3 = ${r * r * r}$, donc $V = \\dfrac{4 \\times 3{,}14 \\times ${r * r * r}}{3}$.`,
              `$V \\approx ${fr(v)}$ cm³.`
            ]
          };
        }

        if (tache === 'diametre') {
          /* LE DIAMÈTRE, jamais tiré par l'ancienne banque. L'élève qui cube le
             diamètre au lieu du rayon se trompe d'un facteur 8 : la solution le
             nomme explicitement, parce que c'est le piège que tendent tous les
             énoncés de brevet. */
          const r = rand(2, 7), d = 2 * r;
          const v = parseFloat((4 / 3 * PI * r * r * r).toFixed(1));
          const ctx = pick([
            { o: 'Une <strong>balle de tennis</strong>', q: 'son volume' },
            { o: 'Un <strong>ballon de handball</strong>', q: 'le volume d\'air qu\'il contient' },
            { o: 'Une <strong>bille</strong> de verre', q: 'son volume de verre' }
          ]);
          return {
            statement: `${ctx.o} a un <strong>diamètre</strong> de $${d}$ cm.<br/><br/>Calcule <strong>${ctx.q}</strong>. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.`,
            answer: v, tolerance: 1, unit: 'cm³',
            hint: `Attention : la formule $V = \\dfrac{4}{3}\\pi r^3$ utilise le <strong>rayon</strong>, et l'énoncé donne le diamètre.<br/><br/>Commence donc par calculer $r = ${d} \\div 2$.`,
            solution: [
              `L'énoncé donne le <strong>diamètre</strong>, mais la formule demande le <strong>rayon</strong> : $r = \\dfrac{${d}}{2} = ${r}$ cm.`,
              `$V = \\dfrac{4 \\times 3{,}14 \\times ${r}^3}{3} = \\dfrac{4 \\times 3{,}14 \\times ${r * r * r}}{3} \\approx ${fr(v)}$ cm³.`,
              `<strong>Le piège à éviter</strong> : cuber le diamètre au lieu du rayon multiplie le résultat par $2^3 = 8$. Un volume huit fois trop grand vient presque toujours de là.`
            ]
          };
        }

        if (tache === 'compose') {
          /* LE SOLIDE COMPOSÉ, c'est-à-dire la moitié du titre du chapitre, que
             l'ancienne banque n'abordait jamais. */
          const r = rand(2, 6), h = rand(6, 14);
          const vCyl = PI * r * r * h;
          const vDemi = 2 / 3 * PI * r * r * r;
          const v = parseFloat((vCyl + vDemi).toFixed(1));
          const ctx = pick([
            { o: 'Un <strong>silo à grain</strong>', d: 'un cylindre surmonté d\'une demi-sphère de même rayon' },
            { o: 'Un <strong>réservoir</strong>', d: 'un cylindre fermé en haut par une demi-sphère de même rayon' },
            { o: 'Une <strong>niche de jardin</strong>', d: 'un cylindre coiffé d\'une demi-sphère de même rayon' }
          ]);
          return {
            statement: `${ctx.o} a la forme d'${ctx.d}.<br/><br/>Le rayon vaut $${r}$ cm et la hauteur de la partie cylindrique $${h}$ cm.<br/><br/>Calcule le <strong>volume total</strong>. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.`,
            answer: v, tolerance: 1.5, unit: 'cm³',
            hint: `Un solide composé se calcule <strong>morceau par morceau</strong>, puis on additionne.<br/><br/>Cylindre : $\\pi r^2 h$. Demi-boule : la moitié de $\\dfrac{4}{3}\\pi r^3$, soit $\\dfrac{2}{3}\\pi r^3$.`,
            solution: [
              `On découpe le solide en deux morceaux dont on connaît chacun la formule, puis on additionne.`,
              `Cylindre : $V_1 = \\pi r^2 h = 3{,}14 \\times ${r * r} \\times ${h} \\approx ${fr(parseFloat(vCyl.toFixed(1)))}$ cm³.`,
              `Demi-boule : $V_2 = \\dfrac{2}{3}\\pi r^3 = \\dfrac{2 \\times 3{,}14 \\times ${r * r * r}}{3} \\approx ${fr(parseFloat(vDemi.toFixed(1)))}$ cm³.<br/><br/>Total : $V = ${fr(parseFloat(vCyl.toFixed(1)))} + ${fr(parseFloat(vDemi.toFixed(1)))} \\approx ${fr(v)}$ cm³.`
            ]
          };
        }

        if (tache === 'demi') {
          const r = rand(3, 9);
          const v = parseFloat((2 / 3 * PI * r * r * r).toFixed(1));
          const ctx = pick([
            { o: 'Un <strong>bol</strong> hémisphérique', q: 'le volume de soupe qu\'il peut contenir' },
            { o: 'Une <strong>coupole</strong> hémisphérique', q: 'le volume d\'air qu\'elle abrite' },
            { o: 'Un <strong>dôme</strong> de présentation hémisphérique', q: 'son volume intérieur' }
          ]);
          return {
            statement: `${ctx.o} a un rayon intérieur de $${r}$ cm.<br/><br/>Calcule <strong>${ctx.q}</strong>. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.`,
            answer: v, tolerance: 1, unit: 'cm³',
            hint: `Une demi-boule, c'est la moitié d'une boule : calcule $\\dfrac{4}{3}\\pi r^3$, puis divise par $2$.<br/><br/>Cela revient à $\\dfrac{2}{3}\\pi r^3$.`,
            solution: [
              `Une demi-boule vaut la moitié de la boule de même rayon.`,
              `$V = \\dfrac{1}{2} \\times \\dfrac{4}{3}\\pi r^3 = \\dfrac{2}{3}\\pi r^3 = \\dfrac{2 \\times 3{,}14 \\times ${r * r * r}}{3}$.`,
              `$V \\approx ${fr(v)}$ cm³.<br/><br/>Contrôle : ce résultat doit être exactement la moitié du volume de la boule entière de rayon $${r}$ cm.`
            ]
          };
        }

        if (tache === 'rayonInverse') {
          /* LE CHEMIN RETOUR : du volume au rayon, par une racine cubique. On
             tire un rayon entier pour que la réponse reste ronde. */
          const r = rand(2, 6);
          const v = parseFloat((4 / 3 * PI * r * r * r).toFixed(1));
          return {
            statement: `Une boule a un volume de $${fr(v)}$ cm³.<br/><br/>Quel est son <strong>rayon</strong>, en centimètres ? (On prendra $\\pi \\approx 3{,}14$, et le rayon est un nombre entier.)`,
            answer: r, tolerance: 0.15, unit: 'cm',
            hint: `Pars de $V = \\dfrac{4}{3}\\pi r^3$ et isole $r^3$ : $r^3 = \\dfrac{3V}{4\\pi}$.<br/><br/>Il te restera à trouver le nombre dont le cube vaut ce résultat.`,
            solution: [
              `On remonte la formule : de $V = \\dfrac{4}{3}\\pi r^3$ on tire $r^3 = \\dfrac{3V}{4\\pi}$.`,
              `$r^3 = \\dfrac{3 \\times ${fr(v)}}{4 \\times 3{,}14} \\approx ${r * r * r}$.`,
              `Il reste à trouver le nombre dont le cube vaut $${r * r * r}$ : c'est $${r}$, car $${r} \\times ${r} \\times ${r} = ${r * r * r}$.<br/><br/>Le rayon vaut donc $${r}$ cm.`
            ]
          };
        }

        if (tache === 'facteur') {
          /* LA PROPRIÉTÉ QUE LE COURS ANNONCE et que rien ne faisait manipuler :
             le volume varie comme le CUBE du rayon. */
          const f = pick([2, 3, 4]);
          return {
            statement: `Le cours affirme qu'un volume dépend du <strong>cube</strong> du rayon.<br/><br/>` +
              `On multiplie le rayon d'une boule par $${f}$, sans rien changer d'autre.<br/><br/>` +
              `Par quel <strong>facteur</strong> son volume est-il multiplié ?`,
            answer: f * f * f, tolerance: 0.01, unit: '',
            hint: `Dans $V = \\dfrac{4}{3}\\pi r^3$, le rayon est élevé au <strong>cube</strong>.<br/><br/>Si $r$ devient $${f}r$, alors $r^3$ devient $(${f}r)^3 = ${f}^3 \\times r^3$.`,
            solution: [
              `Le rayon intervient à la puissance $3$ : c'est donc $${f}^3$, et non $${f}$, qui multiplie le volume.`,
              `$(${f}r)^3 = ${f}^3 \\times r^3 = ${f * f * f} \\, r^3$`,
              `Le volume est multiplié par $${f * f * f}$.<br/><br/>C'est pour cela qu'une petite variation de rayon change énormément un volume : doubler le rayon d'un ballon le rend huit fois plus volumineux, pas deux.`
            ]
          };
        }

        /* tache === 'creux' : une coquille entre deux rayons. Il faut
           SOUSTRAIRE deux volumes, et l'élève soustrait souvent les rayons
           avant de cuber — ce que la solution prend à revers. */
        const rInt = rand(2, 5), ep = pick([1, 2]);
        const rExt = rInt + ep;
        const vExt = 4 / 3 * PI * rExt * rExt * rExt;
        const vInt = 4 / 3 * PI * rInt * rInt * rInt;
        const v = parseFloat((vExt - vInt).toFixed(1));
        const ctx = pick([
          { o: 'Une <strong>balle creuse</strong> en plastique', q: 'le volume de plastique utilisé' },
          { o: 'Une <strong>coque</strong> sphérique en métal', q: 'le volume de métal utilisé' },
          { o: 'Un <strong>ballon</strong> à paroi épaisse', q: 'le volume de matière de la paroi' }
        ]);
        return {
          statement: `${ctx.o} a un rayon extérieur de $${rExt}$ cm et un rayon intérieur de $${rInt}$ cm.<br/><br/>Calcule <strong>${ctx.q}</strong>. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.`,
          answer: v, tolerance: 1.5, unit: 'cm³',
          hint: `La matière occupe l'espace entre les deux sphères : calcule le volume de la grande boule, puis <strong>retire</strong> celui de la petite.<br/><br/>Attention : il faut cuber chaque rayon séparément, jamais soustraire les rayons d'abord.`,
          solution: [
            `La matière est ce qui reste quand on retire la boule intérieure de la boule extérieure : on calcule chaque volume, puis on soustrait.`,
            `Grande boule : $\\dfrac{4 \\times 3{,}14 \\times ${rExt * rExt * rExt}}{3} \\approx ${fr(parseFloat(vExt.toFixed(1)))}$ cm³. Petite boule : $\\dfrac{4 \\times 3{,}14 \\times ${rInt * rInt * rInt}}{3} \\approx ${fr(parseFloat(vInt.toFixed(1)))}$ cm³.`,
            `$V \\approx ${fr(parseFloat(vExt.toFixed(1)))} - ${fr(parseFloat(vInt.toFixed(1)))} = ${fr(v)}$ cm³.<br/><br/><strong>Le piège à éviter</strong> : soustraire les rayons puis cuber donnerait $(${rExt} - ${rInt})^3 = ${ep * ep * ep}$, un résultat sans aucun rapport. Chaque rayon se cube séparément.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une bougie est fabriquée en forme de cylindre surmonté d\'un cône. Le cylindre a rayon $2$ cm et hauteur $8$ cm. Le cône a même rayon et hauteur $3$ cm.',
      tasks: [
        'Calculer le volume du cylindre.',
        'Calculer le volume du cône.',
        'Calculer le volume total de la bougie.'
      ],
      solutions: [
        '$V_{\\text{cyl}} = 3{,}14 \\times 4 \\times 8 = 100{,}48$ cm³.',
        '$V_{\\text{cône}} = \\frac{1}{3} \\times 3{,}14 \\times 4 \\times 3 = 12{,}56$ cm³.',
        '$V_{\\text{total}} = 100{,}48 + 12{,}56 = 113{,}04$ cm³.'
      ],
      finalAnswer: 'La bougie a un volume de $113{,}04$ cm³.'
    },

    evaluation: {
      title: 'Évaluation — Volumes : sphère et solides composés',
      duration: '30 min',
      questions: [
        /* Q1 RÉÉCRITE le 2026-09-13. Elle demandait le volume d'une boule de
           rayon 5 cm, soit l'application nue de la formule — et la Q2 demandait
           exactement la même chose sur une balle de tennis, à ceci près qu'elle
           donnait le diamètre. Deux questions pour une seule tâche, en ouverture
           d'évaluation.

           Elle demande maintenant d'EXPLIQUER l'erreur d'un élève qui a cubé le
           diamètre : produire un argument, non un nombre. C'est « communiquer »,
           la compétence la moins évaluée de l'ouvrage. L'erreur soumise au
           jugement est celle que la fiche professeur de ce chapitre traite en
           premier, et le facteur 8 qu'elle produit est un contrôle de
           vraisemblance que l'élève peut réutiliser partout.

           La Q2 conserve le calcul direct : la tâche calculatoire reste évaluée
           une fois, ce qui suffit. */
        {
          statement: 'Une boule a un <strong>diamètre</strong> de $10$ cm. Pour calculer son volume, Léa écrit :<br/><br/>' +
            '« $V = \\dfrac{4}{3} \\times 3{,}14 \\times 10^3 = 4\\,186{,}67$ cm³ ».<br/><br/>' +
            'Son résultat est faux. Quelle affirmation explique le mieux pourquoi, et quel est le bon ordre de grandeur ?',
          type: 'multiple-choice',
          options: [
            'Elle a utilisé le <strong>diamètre</strong> là où la formule demande le <strong>rayon</strong>. Comme le rayon est deux fois plus petit et qu\'il est élevé au cube, son résultat est $2^3 = 8$ fois trop grand : le volume réel vaut environ $523$ cm³.',
            'Elle a oublié de diviser par $3$ : il fallait écrire $\\dfrac{4}{3}$ et non $4$, et le volume réel vaut environ $1\\,396$ cm³.',
            'Elle a confondu le volume et l\'aire : la formule correcte est $4\\pi r^2$, et le résultat vaut environ $314$ cm³.',
            'Son calcul est juste, mais elle a oublié d\'arrondir : le volume vaut exactement $4\\,186$ cm³.'
          ],
          answer: 0,
          points: 2,
          correction: 'La formule $V = \\dfrac{4}{3}\\pi r^3$ fait intervenir le <strong>rayon</strong>, et l\'énoncé donne le <strong>diamètre</strong>. Il fallait donc commencer par $r = \\dfrac{10}{2} = 5$ cm.<br/><br/>' +
            'Le calcul correct est $V = \\dfrac{4}{3} \\times 3{,}14 \\times 5^3 = \\dfrac{4}{3} \\times 3{,}14 \\times 125 \\approx 523{,}33$ cm³.<br/><br/>' +
            '<strong>Pourquoi exactement $8$ fois trop grand</strong> : le rayon est élevé au cube. Utiliser $10$ au lieu de $5$, c\'est doubler le nombre qu\'on cube, donc multiplier le résultat par $2^3 = 8$. Et l\'on vérifie : $523{,}33 \\times 8 = 4\\,186{,}67$, le résultat de Léa.<br/><br/>' +
            '<strong>Le contrôle qui sauve</strong> : un volume huit fois trop grand vient presque toujours d\'un diamètre pris pour un rayon. Devant tout énoncé, demande-toi d\'abord laquelle des deux longueurs on te donne.'
        },
        {
          statement: 'Une balle de tennis a un diamètre de $6{,}8$ cm. Quel est son volume ? ($\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³)',
          type: 'numeric',
          answer: 164.6,
          tolerance: 1,
          unit: 'cm³',
          points: 2,
          correction: 'Rayon $r = \\dfrac{6{,}8}{2} = 3{,}4$ cm. $V = \\dfrac{4}{3} \\times 3{,}14 \\times 3{,}4^3 = \\dfrac{4}{3} \\times 3{,}14 \\times 39{,}304 \\approx 164{,}6$ cm³. Attention à bien prendre le rayon et non le diamètre.'
        },
        {
          statement: 'On triple le rayon d\'une boule. Par quel facteur son volume est-il multiplié ?',
          type: 'multiple-choice',
          options: ['$3$', '$9$', '$27$', '$6$'],
          answer: 2,
          points: 2,
          correction: '$V = \\dfrac{4}{3}\\pi r^3$. Avec $3r$ : $V\' = \\dfrac{4}{3}\\pi (3r)^3 = \\dfrac{4}{3}\\pi \\times 27r^3 = 27V$. Le volume est multiplié par $3^3 = 27$.'
        },
        {
          statement: 'Un solide est composé d\'un cylindre de rayon $3$ cm et de hauteur $10$ cm surmonté d\'une demi-sphère de même rayon. Quel est le volume total ? ($\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³)',
          type: 'numeric',
          answer: 339.1,
          tolerance: 2,
          unit: 'cm³',
          points: 2,
          correction: 'Cylindre : $V_c = 3{,}14 \\times 9 \\times 10 = 282{,}6$ cm³. Demi-sphère : $V_s = \\dfrac{2}{3} \\times 3{,}14 \\times 27 = 56{,}52$ cm³. Total : $282{,}6 + 56{,}52 = 339{,}12 \\approx 339{,}1$ cm³.'
        },
        {
          statement: 'Un récipient sphérique de diamètre $20$ cm est rempli d\'eau à moitié. Quel volume d\'eau contient-il ? ($\\pi \\approx 3{,}14$)',
          type: 'multiple-choice',
          options: ['$4\\,186{,}67$ cm³', '$2\\,093{,}33$ cm³', '$1\\,046{,}67$ cm³', '$523{,}33$ cm³'],
          answer: 1,
          points: 2,
          correction: 'Rayon $r = 10$ cm. Volume total : $V = \\dfrac{4}{3} \\times 3{,}14 \\times 10^3 = \\dfrac{4}{3} \\times 3\\,140 \\approx 4\\,186{,}67$ cm³. Moitié : $\\dfrac{4\\,186{,}67}{2} \\approx 2\\,093{,}33$ cm³.'
        }
      ]
    }
  }
);
