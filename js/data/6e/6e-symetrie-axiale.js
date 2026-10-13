/* =========================================================
   Spark Learning – data/6e/6e-symetrie-axiale.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-symetrie-axiale',
    level: 1, subject: 'maths',
    icon: '🪞',
    title: 'Symétrie axiale',
    subtitle: 'Axe de symétrie, construction du symétrique',
    keywords: ['Symétrie', 'Axe', 'Réflexion', 'Figure symétrique', 'Milieu', 'Perpendiculaire'],
    physics: false,

    cours: {
      /* « Decouvrir » reecrit le 2026-09-13. L'ancienne intro donnait deja le
         pliage, mais comme DEFINITION. Ici le pliage devient une tache (le
         pochoir decoupe), et le besoin nait de son impossibilite : sur un
         cahier on ne plie pas, il faut donc construire. C'est ce manque qui
         rend la mediatrice utile. Les formules de coordonnees, tres denses,
         quittent l'intro — elles restent dans Definitions et dans la methode,
         aucun trou pedagogique n'est cree. */
      intro: 'Plie une feuille en deux, découpe une forme quelconque le long du pli, puis déplie : tu obtiens un motif dont les deux moitiés se correspondent exactement. C\'est ainsi que l\'on découpe un cœur, un sapin ou un papillon sans avoir à dessiner deux fois la même chose.<br/><br/>' +
        'Une figure est <strong>symétrique</strong> par rapport à un axe lorsque, pliée le long de cet axe, ses deux parties se superposent. Le pli est l\'axe, et le pliage fait tout le travail.<br/><br/>' +
        'Seulement voilà : on ne peut pas toujours plier. Sur un cahier, sur un plan, sur un écran, la feuille reste à plat — et il faut pourtant savoir où atterrit chaque point. Comment placer le symétrique d\'un point sans jamais replier la feuille ?<br/><br/>' +
        'Il suffit d\'observer ce que le pli fait à un point $A$. Son image $A\'$ se retrouve juste en face, de l\'autre côté, à la même distance de l\'axe, et le segment $[AA\']$ traverse l\'axe perpendiculairement. Autrement dit, l\'axe est la <strong>médiatrice</strong> de $[AA\']$ : il le coupe en son milieu et à angle droit.<br/><br/>' +
        'Cette seule propriété remplace le pliage et permet de tout construire à la règle et à l\'équerre. Et comme le pliage ne déforme rien, la symétrie axiale conserve les longueurs, les angles et les aires : les figures sont identiques, simplement retournées.',

      definitions: [
        { term: 'Axe de symétrie', def: 'Droite $d$ telle que la réflexion de la figure par rapport à $d$ donne la même figure.' },
        { term: 'Conservation des longueurs', def: 'La symétrie axiale ne déforme rien : une figure et son symétrique ont les mêmes longueurs, les mêmes angles et la même aire.<br/><br/>Elles sont <strong>superposables par pliage</strong>.' },
        { term: 'Médiatrice', def: 'Droite perpendiculaire au segment $[AA\']$ passant par son milieu. L\'axe est la médiatrice de $[AA\']$.' },
        { term: 'Symétrique', def: '$A\'$ est le symétrique de $A$ si l\'axe est la médiatrice de $[AA\']$ : $AH = HA\'$ et $(AA\') \\perp d$.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Tracer la perpendiculaire</strong> à l\'axe $d$ passant par le point $A$.',
          '<strong>Trouver le pied $H$</strong> (intersection avec l\'axe).',
          '<strong>Reporter la même distance</strong> de l\'autre côté : $A\'$ tel que $AH = HA\'$.',
          '<strong>Pour une figure entière</strong> : construire le symétrique de chaque sommet, puis relier.'
        ]
      },
      example: {
        statement: 'Sur un quadrillage, le point $A(5 ; 2)$ a pour symétrique $A\'$ par rapport à la droite verticale $d$ passant par l\'abscisse $3$. Trouver $A\'$.',
        steps: [
          'La perpendiculaire à $d$ passant par $A$ est horizontale : elle coupe $d$ au <strong>pied</strong> $H(3 ; 2)$.',
          '$A$ est à $5 - 3 = 2$ carreaux à droite de $H$.',
          'On reporte la <strong>même distance</strong> à gauche : $3 - 2 = 1$. L\'ordonnée ne change pas.',
          'Donc $A\'(1 ; 2)$.<br/><br/>Vérification : $H$ est bien le milieu de $[AA\']$, à $2$ carreaux de chacun ✓'
        ],
        answer: '$A\'(1 ; 2)$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Construction du symétrique',
        title: 'Réfléchir un point par rapport à un axe',
        description: 'Le point $A(5 ; 2)$ a pour symétrique $A\'$ par rapport à la droite verticale $d$ passant par l\'abscisse $3$. On trace la perpendiculaire à $d$ passant par $A$, on repère son pied $H$, puis on reporte la même distance de l\'autre côté pour obtenir $A\'(1 ; 2)$.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="symaxiale-title symaxiale-desc">
            <title id="symaxiale-title">Symétrique d'un point par rapport à un axe vertical</title>
            <desc id="symaxiale-desc">Le point A en 5 ; 2 est réfléchi par rapport à l'axe d, droite verticale passant par l'abscisse 3. Le pied H est en 3 ; 2 et le symétrique A' est en 1 ; 2, à la même distance de l'axe que A.</desc>
            <line class="grid-line" x1="50" y1="30" x2="50" y2="194"></line>
            <line class="grid-line" x1="90" y1="30" x2="90" y2="194"></line>
            <line class="grid-line" x1="130" y1="30" x2="130" y2="194"></line>
            <line class="grid-line" x1="210" y1="30" x2="210" y2="194"></line>
            <line class="grid-line" x1="250" y1="30" x2="250" y2="194"></line>
            <line class="grid-line" x1="290" y1="30" x2="290" y2="194"></line>
            <line class="grid-line" x1="50" y1="194" x2="290" y2="194"></line>
            <line class="grid-line" x1="50" y1="153" x2="290" y2="153"></line>
            <line class="grid-line" x1="50" y1="112" x2="290" y2="112"></line>
            <line class="grid-line" x1="50" y1="71" x2="290" y2="71"></line>
            <line class="grid-line" x1="50" y1="30" x2="290" y2="30"></line>
            <line class="axis" x1="170" y1="20" x2="170" y2="204"></line>
            <line class="guide-line" x1="90" y1="112" x2="250" y2="112"></line>
            <polyline class="frame-line" points="170,104 178,104 178,112" fill="none"></polyline>
            <line class="frame-line" x1="210" y1="106" x2="210" y2="118"></line>
            <line class="frame-line" x1="130" y1="106" x2="130" y2="118"></line>
            <circle class="plot-point-alt" cx="250" cy="112" r="6"></circle>
            <circle class="plot-point-alt" cx="170" cy="112" r="5"></circle>
            <circle class="plot-point" cx="90" cy="112" r="6"></circle>
            <text class="annotation-label" x="252" y="100">A(5 ; 2)</text>
            <text class="annotation-label" x="94" y="96">H(3 ; 2)</text>
            <text class="annotation-label" x="56" y="132">A'(1 ; 2)</text>
            <text class="axis-label" x="176" y="18">d</text>
            <text class="tick-label" x="46" y="206">0</text>
            <text class="tick-label" x="86" y="206">1</text>
            <text class="tick-label" x="126" y="206">2</text>
            <text class="tick-label" x="166" y="206">3</text>
            <text class="tick-label" x="206" y="206">4</text>
            <text class="tick-label" x="246" y="206">5</text>
            <text class="tick-label" x="286" y="206">6</text>
            <text class="tick-label" x="36" y="198">0</text>
            <text class="tick-label" x="36" y="157">1</text>
            <text class="tick-label" x="36" y="116">2</text>
            <text class="tick-label" x="36" y="75">3</text>
            <text class="tick-label" x="36" y="34">4</text>
          </svg>
        `,
        notes: [
          'On trace la perpendiculaire à l\'axe $d$ passant par $A$ : ici elle est horizontale, donc perpendiculaire à l\'axe vertical $d$.',
          'Le pied $H(3 ; 2)$ est le point où cette perpendiculaire coupe $d$ — l\'angle marqué en $H$ est droit.',
          'On reporte la même distance de l\'autre côté de $H$ : $AH = HA\' = 2$, donc $A\'(1 ; 2)$.'
        ],
        reading: 'L\'axe $d$ est la médiatrice de $[AA\']$ : il coupe le segment $[AA\']$ perpendiculairement, exactement en son milieu $H$.',
        caption: 'Construction du symétrique de $A(5 ; 2)$ par rapport à la droite verticale $d$ passant par l\'abscisse $3$ — pied $H(3 ; 2)$ et symétrique $A\'(1 ; 2)$.'
      },
      /* Schemas secondaires (2026-09-12). La figure principale montre le
         RESULTAT de la reflexion d'un point dans un repere ; elle ne montre ni
         le GESTE de construction (l'equerre, le report de distance), ni ce que
         devient une figure entiere, ni comment on reconnait un axe de symetrie
         sur un objet. Or en sixieme la symetrie s'evalue au compas et a
         l'equerre bien avant de s'evaluer par une formule de coordonnees.

         CONVENTION reprise du chapitre pilote : une figure par malentendu. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le geste de construction',
          title: 'Construire le symétrique d\'un point, étape par étape',
          description: 'Trois gestes : on trace la <strong>perpendiculaire</strong> à l\'axe passant par le point, on marque son <strong>pied $H$</strong>, puis on <strong>reporte la même distance</strong> de l\'autre côté.',
          svg: `
            <svg viewBox="0 0 400 190" role="img" aria-labelledby="sym-construct-title sym-construct-desc">
              <title id="sym-construct-title">Les trois etapes de la construction du symetrique d'un point</title>
              <desc id="sym-construct-desc">Trois vignettes se lisent de gauche a droite. Dans la premiere, un point A est place a cote d'un axe vertical et l'on trace la perpendiculaire a l'axe passant par A. Dans la deuxieme, le pied H est marque a l'intersection de cette perpendiculaire et de l'axe, et la distance de A a H est reportee. Dans la troisieme, le point A prime est place de l'autre cote de l'axe, a la meme distance H A prime que A H, ce qui acheve la construction. L'axe est alors la mediatrice du segment A A prime.</desc>

              <!-- TROIS VIGNETTES EN BANDE. Convention retenue pour toute
                   figure « pas a pas » du manuel : les etapes se lisent de
                   gauche a droite, chaque vignette rejoue la precedente a
                   l'IDENTIQUE et n'ajoute qu'un seul element nouveau, en trait
                   d'accent. Ce qui est deja acquis reste en trait normal. -->

              <!-- ETAPE 1 : la perpendiculaire. -->
              <text class="tick-label" x="66" y="18" text-anchor="middle">1. la perpendiculaire</text>
              <line class="frame-line" x1="66" y1="38" x2="66" y2="150"></line>
              <circle class="plot-point" cx="26" cy="96" r="4"></circle>
              <text class="annotation-label" x="14" y="88">A</text>
              <line class="curve-main" x1="26" y1="96" x2="110" y2="96"></line>
              <path class="grid-line" fill="none" d="M66 84 L78 84 L78 96"></path>
              <text class="label-soft" x="66" y="168" text-anchor="middle">d</text>

              <!-- ETAPE 2 : le pied H. -->
              <text class="tick-label" x="200" y="18" text-anchor="middle">2. le pied noté H</text>
              <line class="frame-line" x1="200" y1="38" x2="200" y2="150"></line>
              <line class="frame-line" x1="160" y1="96" x2="244" y2="96"></line>
              <circle class="plot-point" cx="160" cy="96" r="4"></circle>
              <text class="annotation-label" x="148" y="88">A</text>
              <path class="grid-line" fill="none" d="M200 84 L212 84 L212 96"></path>
              <circle class="plot-point-alt" cx="200" cy="96" r="4"></circle>
              <text class="annotation-label" x="204" y="86">H</text>
              <text class="tick-label" x="180" y="114" text-anchor="middle">AH</text>
              <text class="label-soft" x="200" y="168" text-anchor="middle">d</text>

              <!-- ETAPE 3 : le report. Les deux distances portent la MEME
                   etiquette de longueur : c'est l'egalite AH = HA' qui est le
                   coeur de la construction, elle doit se voir sans lire. -->
              <text class="tick-label" x="334" y="18" text-anchor="middle">3. report de AH</text>
              <line class="frame-line" x1="334" y1="38" x2="334" y2="150"></line>
              <line class="frame-line" x1="294" y1="96" x2="374" y2="96"></line>
              <circle class="plot-point" cx="294" cy="96" r="4"></circle>
              <text class="annotation-label" x="282" y="88">A</text>
              <circle class="plot-point-alt" cx="334" cy="96" r="4"></circle>
              <text class="annotation-label" x="338" y="86">H</text>
              <circle class="plot-point" cx="374" cy="96" r="4"></circle>
              <text class="annotation-label" x="378" y="88">A'</text>
              <text class="tick-label" x="314" y="114" text-anchor="middle">AH</text>
              <text class="tick-label" x="354" y="114" text-anchor="middle">HA'</text>
              <text class="label-soft" x="334" y="168" text-anchor="middle">d</text>

              <text class="label-soft" x="200" y="186" text-anchor="middle">axe d : médiatrice de [AA'], coupe le segment en son milieu à angle droit</text>
            </svg>
          `,
          notes: [
            'Étape $1$ : la droite $(AA\')$ doit être <strong>perpendiculaire</strong> à l\'axe — c\'est l\'équerre qui le garantit, pas le coup d\'œil.',
            'Étape $2$ : le pied $H$ est le point où cette perpendiculaire rencontre l\'axe.',
            'Étape $3$ : on reporte $AH$ de l\'autre côté, au compas, pour obtenir $HA\' = AH$.'
          ],
          reading: 'Les deux conditions doivent être vraies <strong>en même temps</strong> : même distance de part et d\'autre, <strong>et</strong> angle droit avec l\'axe. Un point à la bonne distance mais posé de travers n\'est pas le symétrique.',
          caption: 'Construction du symétrique d\'un point en trois gestes : perpendiculaire, pied $H$, report de $AH$.'
        },
        {
          theme: 'maths',
          kicker: 'Une figure entière',
          title: 'On réfléchit les sommets, puis on relie',
          description: 'Pour une figure, on ne réfléchit jamais les côtés : on construit le symétrique de <strong>chaque sommet</strong>, puis on relie les points obtenus dans le même ordre.',
          svg: `
            <svg viewBox="0 0 400 200" role="img" aria-labelledby="sym-figure-title sym-figure-desc">
              <title id="sym-figure-title">Symetrique d'un triangle par rapport a un axe vertical</title>
              <desc id="sym-figure-desc">Un triangle A B C est dessine a gauche d'un axe vertical. Chacun de ses trois sommets est relie horizontalement a son symetrique de l'autre cote de l'axe, a egale distance. Les trois points obtenus, A prime, B prime et C prime, sont relies dans le meme ordre et forment un triangle identique au premier, mais retourne. Les longueurs et les angles sont conserves : seule l'orientation change.</desc>

              <line class="frame-line" x1="200" y1="16" x2="200" y2="176"></line>
              <text class="label-soft" x="206" y="28">axe d</text>

              <!-- Triangle d'origine. -->
              <polygon points="60,150 130,150 92,64" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)" stroke="none"></polygon>
              <line class="frame-line" x1="60" y1="150" x2="130" y2="150"></line>
              <line class="frame-line" x1="130" y1="150" x2="92" y2="64"></line>
              <line class="frame-line" x1="92" y1="64" x2="60" y2="150"></line>
              <circle class="plot-point" cx="92" cy="64" r="4"></circle>
              <circle class="plot-point" cx="60" cy="150" r="4"></circle>
              <circle class="plot-point" cx="130" cy="150" r="4"></circle>
              <text class="annotation-label" x="82" y="56">A</text>
              <text class="annotation-label" x="48" y="166">B</text>
              <text class="annotation-label" x="122" y="166">C</text>

              <!-- Les traits de report, un par sommet : ce sont eux qui
                   montrent que la construction se fait POINT PAR POINT. Ils
                   restent en guide-line, sous les figures. -->
              <line class="guide-line" x1="92" y1="64" x2="308" y2="64"></line>
              <line class="guide-line" x1="60" y1="150" x2="340" y2="150"></line>
              <line class="guide-line" x1="130" y1="150" x2="270" y2="150"></line>

              <!-- Triangle image. -->
              <polygon points="340,150 270,150 308,64" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)" stroke="none"></polygon>
              <line class="frame-line" x1="340" y1="150" x2="270" y2="150"></line>
              <line class="frame-line" x1="270" y1="150" x2="308" y2="64"></line>
              <line class="frame-line" x1="308" y1="64" x2="340" y2="150"></line>
              <circle class="plot-point" cx="308" cy="64" r="4"></circle>
              <circle class="plot-point" cx="340" cy="150" r="4"></circle>
              <circle class="plot-point" cx="270" cy="150" r="4"></circle>
              <text class="annotation-label" x="312" y="56">A'</text>
              <text class="annotation-label" x="344" y="166">B'</text>
              <text class="annotation-label" x="256" y="166">C'</text>

              <text class="label-soft" x="200" y="194" text-anchor="middle">même forme, mêmes longueurs, mêmes angles : seule la position change</text>
            </svg>
          `,
          notes: [
            'Chaque sommet se construit séparément, avec les trois gestes de la figure précédente.',
            'On relie ensuite $A\'$, $B\'$, $C\'$ dans le <strong>même ordre</strong> que $A$, $B$, $C$.',
            'La symétrie <strong>conserve les longueurs</strong> : $A\'B\' = AB$, et tous les angles sont conservés. La figure image est superposable à la figure de départ après pliage.'
          ],
          reading: 'Remarque que $B$, le sommet le plus éloigné de l\'axe, donne $B\'$ le plus éloigné lui aussi : chaque point garde sa distance à l\'axe. C\'est le moyen le plus rapide de repérer une construction fausse.',
          caption: 'Symétrique d\'un triangle : on réfléchit les trois sommets, puis on relie.'
        },
        {
          theme: 'maths',
          kicker: 'Compter les axes',
          title: 'Combien d\'axes de symétrie ?',
          description: 'Un axe de symétrie est un pli qui superpose exactement la figure sur elle-même. Certaines figures en ont plusieurs, d\'autres aucun — et un rectangle en a <strong>deux</strong>, pas quatre.',
          svg: `
            <svg viewBox="0 0 400 168" role="img" aria-labelledby="sym-axes-title sym-axes-desc">
              <title id="sym-axes-title">Nombre d'axes de symetrie de quatre figures usuelles</title>
              <desc id="sym-axes-desc">Quatre figures sont presentees cote a cote avec leurs axes de symetrie en pointilles. Le carre possede quatre axes : les deux medianes et les deux diagonales. Le rectangle n'en possede que deux, les deux medianes, car ses diagonales ne sont pas des axes de symetrie. Le triangle equilateral en possede trois. Le parallelogramme quelconque n'en possede aucun. Un rappel indique que les diagonales d'un rectangle ne sont pas des axes de symetrie, ce qui est l'erreur la plus frequente.</desc>

              <!-- CONVENTION : l'axe de symetrie se dessine TOUJOURS en
                   guide-line (tirets), la figure en frame-line. Le lecteur
                   distingue ainsi d'un coup d'oeil l'objet et la droite qui
                   le decrit — y compris quand l'axe passe sur une diagonale,
                   qui est elle-meme un trait de la figure. -->

              <!-- Carre : 4 axes. -->
              <rect class="frame-line" x="26" y="42" width="72" height="72" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></rect>
              <line class="guide-line" x1="62" y1="34" x2="62" y2="122"></line>
              <line class="guide-line" x1="18" y1="78" x2="106" y2="78"></line>
              <line class="guide-line" x1="20" y1="36" x2="104" y2="120"></line>
              <line class="guide-line" x1="104" y1="36" x2="20" y2="120"></line>
              <text class="tick-label" x="62" y="140" text-anchor="middle">carré</text>
              <text class="annotation-label" x="62" y="158" text-anchor="middle">4 axes</text>

              <!-- Rectangle : 2 axes seulement. C'est LE contre-exemple du
                   chapitre, il est place juste apres le carre pour que la
                   difference saute aux yeux. -->
              <rect class="frame-line" x="130" y="54" width="96" height="48" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></rect>
              <line class="guide-line" x1="178" y1="44" x2="178" y2="112"></line>
              <line class="guide-line" x1="120" y1="78" x2="236" y2="78"></line>
              <text class="tick-label" x="178" y="140" text-anchor="middle">rectangle</text>
              <text class="annotation-label" x="178" y="158" text-anchor="middle">2 axes</text>

              <!-- Triangle equilateral : 3 axes. -->
              <polygon class="frame-line" points="252,114 320,114 286,55" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></polygon>
              <!-- 2026-09-12 : les deux axes obliques etaient traces de
                   (247,72) a (311,121) et de (325,72) a (261,121). Aucun des
                   deux ne passait par un sommet : ils manquaient le sommet de
                   la base de 11 unites (3,5 mm a l'impression) et le milieu du
                   cote oppose de 3,5 unites. Or un axe de symetrie du triangle
                   equilateral est exactement une mediane — il joint un sommet
                   au milieu du cote oppose. La figure montrait donc trois
                   droites dont deux ne superposent pas la figure sur
                   elle-meme, alors qu'elle sert precisement a faire compter
                   les axes valides (et a distinguer le rectangle, dont les
                   diagonales n'en sont pas). Medianes recalculees :
                   sommet (252,114) -> milieu [D,S] = (303 ; 84,5) et
                   sommet (320,114) -> milieu [G,S] = (269 ; 84,5), chacune
                   prolongee de 8 unites de part et d'autre comme l'axe
                   vertical. -->
              <line class="guide-line" x1="286" y1="47" x2="286" y2="122"></line>
              <line class="guide-line" x1="245.1" y1="118" x2="309.9" y2="80.5"></line>
              <line class="guide-line" x1="326.9" y1="118" x2="262.1" y2="80.5"></line>
              <text class="tick-label" x="286" y="140" text-anchor="middle">triangle équilatéral</text>
              <text class="annotation-label" x="286" y="158" text-anchor="middle">3 axes</text>

              <!-- Parallelogramme : aucun axe. -->
              <polygon class="frame-line" points="340,110 384,110 400,58 356,58" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></polygon>
              <text class="tick-label" x="370" y="140" text-anchor="middle">parallélogramme</text>
              <text class="annotation-label" x="370" y="158" text-anchor="middle">0 axe</text>

              <text class="label-soft" x="200" y="22" text-anchor="middle">un axe de symétrie est un pli qui superpose la figure sur elle-même</text>
            </svg>
          `,
          notes: [
            'Le carré a $4$ axes : ses deux médianes <strong>et</strong> ses deux diagonales.',
            'Le rectangle n\'en a que <strong>$2$</strong> : ses médianes. Pliée le long d\'une diagonale, une moitié du rectangle ne recouvre pas l\'autre — c\'est l\'erreur classique du chapitre.',
            'Le parallélogramme quelconque n\'a <strong>aucun</strong> axe de symétrie, même s\'il a un centre de symétrie (notion vue plus tard).'
          ],
          reading: 'Pour tester un axe, imagine le pli : si un sommet ne tombe pas exactement sur un autre sommet, la droite n\'est pas un axe. Essaie mentalement de plier le rectangle sur sa diagonale — les deux coins ne se rejoignent pas.',
          caption: 'Nombre d\'axes de symétrie : carré ($4$), rectangle ($2$), triangle équilatéral ($3$), parallélogramme ($0$).'
        }
      ],
      formulas: [
        '$H = $ milieu de $[AA\']$ (pied de la perpendiculaire)',
        '$AH = HA\'$',
        'Axe vertical passant par l\'abscisse $k$ : $A\'$ garde l\'ordonnée de $A$, et $k$ est au milieu des deux abscisses',
        'Axe horizontal passant par l\'ordonnée $k$ : $A\'$ garde l\'abscisse de $A$, et $k$ est au milieu des deux ordonnées',
        'La symétrie conserve : distances, angles, aires.',
        'L\'axe est la médiatrice de $[AA\']$'
      ],
      recap: [
        'La symétrie axiale conserve distances, angles et aires : une figure et son symétrique sont superposables par pliage.',
        'Sur un quadrillage : on compte les carreaux entre $A$ et l\'axe, puis on reporte le même nombre de carreaux de l\'autre côté, perpendiculairement à l\'axe.',
        'Si l\'axe est vertical, l\'ordonnée ne change pas ; s\'il est horizontal, c\'est l\'abscisse qui ne change pas.',
        'Un point situé sur l\'axe est son propre symétrique.',
        'Un triangle équilatéral a $3$ axes, un carré en a $4$, un cercle en a une infinité.'
      ],
      piege: 'Piège : l\'axe de symétrie n\'est pas forcément vertical ou horizontal. Toujours tracer la perpendiculaire depuis le point jusqu\'à l\'axe, puis reporter la même distance de l\'autre côté.'
    },

    quiz: [
      { q: 'Le point $A(5 ; 2)$ a pour symétrique $A\'$ par rapport à la droite verticale passant par l\'abscisse $3$. Un élève répond $A\'(3 ; 2)$. Quelle est son erreur ?', options: ['Il n\'y a pas d\'erreur.', 'Il a posé $A\'$ sur l\'axe : il faut reporter les $2$ carreaux de l\'autre côté, $A\'(1 ; 2)$.', 'Il fallait changer l\'ordonnée : $A\'(5 ; 4)$.', 'Il fallait doubler l\'abscisse : $A\'(10 ; 2)$.'], answer: 1, correction: '$A$ est à $5 - 3 = 2$ carreaux à droite de l\'axe. Son symétrique est à $2$ carreaux à <strong>gauche</strong> : $3 - 2 = 1$, donc $A\'(1 ; 2)$.<br/><br/>Le point $(3 ; 2)$ est le pied $H$ sur l\'axe, pas le symétrique.<br/><br/>L\'ordonnée ne bouge pas quand l\'axe est vertical, et « doubler » n\'a aucun sens ici : la symétrie conserve la <strong>distance à l\'axe</strong>.' },
      { q: 'Le point $A(3 ; 1)$ a pour symétrique $A\'$ par rapport à la droite verticale passant par l\'abscisse $5$. Quelles sont les coordonnées de $A\'$ ?', options: ['$(7 ; 1)$', '$(5 ; 1)$', '$(3 ; 9)$', '$(1 ; 3)$'], answer: 0, correction: '$A$ est à $5 - 3 = 2$ carreaux à gauche de l\'axe, donc $A\'$ est à $2$ carreaux à droite : $5 + 2 = 7$. L\'ordonnée est conservée : <strong>$A\'(7 ; 1)$</strong>.<br/><br/>$(5 ; 1)$ est le point de l\'axe en face de $A$ ; $(3 ; 9)$ a changé l\'ordonnée alors que l\'axe est vertical ; $(1 ; 3)$ a échangé les deux coordonnées.' },
      { q: 'Un triangle équilatéral possède combien d\'axes de symétrie ?', options: ['$1$', '$2$', '$3$', '$6$'], answer: 2, correction: '$3$ axes, chacun passant par un sommet et le milieu du côté opposé.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const axType = pick(['vertical', 'horizontal']);
        const varSym = axType === 'vertical' ? 'x' : 'y';
        const coord = axType === 'vertical' ? 'abscisse' : 'ordonnée';
        const sens = axType === 'vertical' ? ['à droite', 'à gauche'] : ['au-dessus', 'en dessous'];
        const k = rand(3, 9);
        /* 2026-10-13 : l'ancien tirage (axe en 2 a 8, A au-dela de l'axe
           d'au plus 6) donnait des symetriques NEGATIFS, et la seule methode
           offerte etait la formule 2k - x. Les nombres negatifs ne sont vus
           qu'en 5e : l'ecart entre A et l'axe est borne par k - 1, si bien que
           le symetrique k - ecart reste strictement positif, et l'eleve
           l'obtient par le geste du cours (compter les carreaux, reporter). */
        const ecart = rand(1, Math.min(6, k - 1));
        const pointVal = k + ecart;
        const symVal = k - ecart;
        const axe = axType === 'vertical'
          ? `la droite verticale passant par l'abscisse $${k}$`
          : `la droite horizontale passant par l'ordonnée $${k}$`;
        const carreaux = ecart > 1 ? 'carreaux' : 'carreau';

        const contextes = [
          { build: () => `Le point $A$ a pour ${coord} $${varSym}_A = ${pointVal}$. L'axe de symétrie est ${axe}.<br/>Quelle est l'${coord} de $A'$, le <strong>symétrique</strong> de $A$ ?` },
          { build: () => `En pliant une feuille quadrillée le long de ${axe}, un point $A$ (${coord} $${varSym}_A = ${pointVal}$) se superpose exactement à son symétrique $A'$.<br/>Quelle est l'${coord} de $A'$ ?` },
          { build: () => `Un carreleur pose un motif <strong>symétrique</strong> par rapport à ${axe}. Un point $A$ du motif a pour ${coord} $${varSym}_A = ${pointVal}$.<br/>Quelle est l'${coord} du point symétrique $A'$ qu'il doit tracer ?` },
          { build: () => `Sur un logo, un point $A$ (${coord} $${varSym}_A = ${pointVal}$) doit être reproduit par symétrie par rapport à ${axe} pour obtenir $A'$.<br/>Quelle est l'${coord} de $A'$ ?` }
        ];
        // Le miroir se tient debout (axe vertical), le lac est a plat (axe
        // horizontal) : chaque decor ne vaut que pour un sens d'axe.
        if (axType === 'vertical') {
          contextes.push({ build: () => `Le reflet d'un point $A$ dans un miroir posé debout le long de ${axe} donne un point $A'$. Le point $A$ a pour abscisse $x_A = ${pointVal}$.<br/>Quelle est l'abscisse du reflet $A'$ ?` });
        } else {
          contextes.push({ build: () => `Le reflet d'un point $A$ à la surface d'un lac (${axe}) donne un point $A'$ sous l'eau. Le point $A$ a pour ordonnée $y_A = ${pointVal}$.<br/>Quelle est l'ordonnée du reflet $A'$ ?` });
        }
        const ctx = pick(contextes);

        return {
          statement: ctx.build(),
          /* Droite graduee aux VRAIES valeurs du tirage (2026-09-12) : le point
             A tombe reellement sur son abscisse et l'axe sur la sienne. La
             symetrie est une notion visuelle avant d'etre une formule ; sans
             figure, l'eleve applique une recette sans jamais voir la pliure.
             Le symetrique est marque d'un cercle vide et d'un « ? » : la figure
             montre OU il se trouve, jamais sa valeur. */
          figure: figureSymetrie(pointVal, k, { variable: varSym }),
          answer: symVal,
          tolerance: 0,
          unit: '',
          hint: `Compte de combien de carreaux $A$ est ${sens[0]} de l'axe : $${pointVal} - ${k} = ${ecart}$. Le symétrique $A'$ est à la <strong>même distance</strong>, mais ${sens[1]}.`,
          solution: [
            `L'axe passe par $${k}$ et $A$ est en $${pointVal}$ : $A$ est à $${pointVal} - ${k} = ${ecart}$ ${carreaux} ${sens[0]} de l'axe.`,
            `Par pliage, $A'$ tombe à la <strong>même distance</strong> de l'autre côté, soit $${ecart}$ ${carreaux} ${sens[1]}.`,
            `$${varSym}_{A'} = ${k} - ${ecart} = ${symVal}$`,
            `Vérification : l'axe est bien au milieu de $[AA']$, car $\\dfrac{${pointVal} + ${symVal}}{2} = ${k}$ ✓`
          ]
        };
      }
    },

    probleme: {
      context: 'Un designer crée un logo symétrique. La moitié gauche est un triangle de sommets $A(0 ; 0)$, $B(0 ; 4)$ et $C(3 ; 2)$. Il veut tracer la partie droite par symétrie par rapport à la droite verticale passant par l\'abscisse $3$.',
      tasks: [
        'Calculer les coordonnées de $A\'$, symétrique de $A$ par rapport à cet axe.',
        'Calculer les coordonnées de $B\'$ et $C\'$.',
        'Expliquer pourquoi $C\' = C$.'
      ],
      solutions: [
        '$A$ est à $3 - 0 = 3$ carreaux à gauche de l\'axe : $A\'$ est à $3$ carreaux à droite, en $3 + 3 = 6$. L\'axe est vertical, l\'ordonnée ne change pas.<br/><br/>Donc <strong>$A\'(6 ; 0)$</strong>.',
        '$B$ est lui aussi à $3$ carreaux à gauche de l\'axe : <strong>$B\'(6 ; 4)$</strong>.<br/><br/>$C$ est à $0$ carreau de l\'axe : <strong>$C\'(3 ; 2)$</strong>.',
        '$C$ a pour abscisse $3$, qui est l\'axe. Un point sur l\'axe est son propre symétrique.'
      ],
      finalAnswer: 'Le logo a les sommets $A(0;0)$, $B(0;4)$, $C(3;2)$, $B\'(6;4)$, $A\'(6;0)$.'
    },

    evaluation: {
      title: 'Évaluation — Symétrie axiale',
      duration: '20 min',
      questions: [
        { statement: 'Le point $A(7 ; 3)$ a pour symétrique $A\'$ par rapport à la droite horizontale passant par l\'ordonnée $5$. Quelle est l\'ordonnée de $A\'$ ?', type: 'numeric', answer: 7, tolerance: 0, unit: '', points: 2, correction: '$A$ est à $5 - 3 = 2$ carreaux <strong>en dessous</strong> de l\'axe ; $A\'$ est donc à $2$ carreaux au-dessus : $5 + 2 = 7$.<br/><br/>L\'abscisse ne change pas : $A\'(7 ; 7)$.' },
        { statement: 'Le point $B(2 ; 5)$ a pour symétrique $B\'$ par rapport à la droite verticale passant par l\'abscisse $4$. Quelle est l\'abscisse de $B\'$ ?', type: 'numeric', answer: 6, tolerance: 0, unit: '', points: 2, correction: '$B$ est à $4 - 2 = 2$ carreaux à gauche de l\'axe ; $B\'$ est à $2$ carreaux à droite : $4 + 2 = 6$.<br/><br/>L\'ordonnée ne change pas : $B\'(6 ; 5)$.' },
        // Competence « chercher » (2026-09-12). Le nombre d'axes d'un carre est un
        // resultat qui se retient ; pose tel quel, il ne notait qu'une memoire. La
        // consigne demande desormais de TROUVER ce nombre en essayant les plis un par
        // un, et de comparer avec une autre figure — la demarche d'essais et de
        // comparaison que « chercher » designe. La reponse reste un nombre.
        { statement: 'Prends une feuille carrée et cherche <strong>tous</strong> les plis qui superposent exactement les deux moitiés : essaie les plis horizontaux, verticaux, puis en diagonale.<br/><br/>Combien d\'axes de symétrie trouves-tu en tout ?', type: 'multiple-choice', options: ['$1$', '$2$', '$4$', '$8$'], answer: 2, points: 2, correction: 'En essayant les plis un par un, on en trouve quatre qui fonctionnent.<br/><br/>Deux <strong>médianes</strong> : le pli horizontal et le pli vertical, chacun passant par le milieu de deux côtés opposés.<br/><br/>Deux <strong>diagonales</strong> : les plis qui joignent deux sommets opposés.<br/><br/>Cela fait $2 + 2 = 4$ axes. À titre de comparaison, un rectangle qui n\'est pas un carré n\'en a que deux : les diagonales n\'y superposent pas les deux moitiés.' },
        // Competence « communiquer » (2026-09-12). L'ancienne version se tranchait au
        // mot « isometrie », terme non exigible en sixieme, les trois autres options
        // etant visiblement fausses. Les quatre options repondent desormais « oui » :
        // seule la justification les separe, et elle doit tenir dans les mots du
        // programme (pliage, superposition), pas dans un mot savant.
        { statement: 'Tu construis le symétrique d\'une figure par rapport à une droite, puis tu affirmes que les <strong>longueurs sont conservées</strong>.<br/><br/>Quelle justification est la mieux formulée pour une classe de sixième ?', type: 'multiple-choice', options: ['« Oui, parce que c\'est une isométrie. »', '« Oui : en pliant la feuille le long de l\'axe, la figure et son symétrique se superposent exactement, donc chaque longueur retrouve la même longueur. »', '« Oui, parce qu\'un miroir ne change jamais rien à ce qu\'il reflète. »', '« Oui, parce que le symétrique est toujours de l\'autre côté de l\'axe. »'], answer: 1, points: 2, correction: 'Les quatre réponses concluent « oui » : c\'est la <strong>justification</strong> qui est évaluée.<br/><br/>La première se contente d\'un mot savant, qui n\'explique rien tant qu\'on ne l\'a pas défini.<br/><br/>La troisième s\'appuie sur l\'expérience des miroirs, qui déforment parfois : ce n\'est pas un argument mathématique.<br/><br/>La quatrième dit vrai, mais ne parle pas de longueurs : être de l\'autre côté de l\'axe ne dit rien sur les distances.<br/><br/>Seule la deuxième donne l\'argument du programme : la <strong>superposition par pliage</strong>, que chacun peut vérifier avec une feuille.' },
        { statement: 'Un point $P$ est situé sur l\'axe $d$. Quel est son symétrique ?', type: 'multiple-choice', options: ['Le point au double.', 'Le point opposé.', 'Le point $P$ lui-même.', 'Pas de symétrique.'], answer: 2, points: 2, correction: 'Distance à l\'axe $= 0$, donc $P\' = P$.' }
      ]
    }
  });
