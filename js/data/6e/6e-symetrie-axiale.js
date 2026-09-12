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
        { term: 'Isométrie', def: 'Transformation qui conserve les distances. La symétrie axiale en est une.' },
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
        statement: 'Le point $A(5 ; 2)$ est réfléchi par rapport à la droite $x = 3$. Trouver $A\'$.',
        steps: [
          'Formule : $x_{A\'} = 2k - x_A = 2 \\times 3 - 5 = 1$.',
          'L\'ordonnée ne change pas : $y_{A\'} = 2$.',
          'Donc $A\'(1 ; 2)$.',
          'Vérification : le milieu de $[AA\']$ est $(\\dfrac{5+1}{2} ; 2) = (3 ; 2)$, qui est bien sur $x = 3$ ✓'
        ],
        answer: '$A\'(1 ; 2)$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Construction du symétrique',
        title: 'Réfléchir un point par rapport à un axe',
        description: 'Le point $A(5 ; 2)$ est réfléchi par rapport à l\'axe $d$ d\'équation $x = 3$. On trace la perpendiculaire à $d$ passant par $A$, on repère son pied $H$, puis on reporte la même distance de l\'autre côté pour obtenir $A\'(1 ; 2)$.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="symaxiale-title symaxiale-desc">
            <title id="symaxiale-title">Symétrique d'un point par rapport à un axe vertical</title>
            <desc id="symaxiale-desc">Le point A en 5 ; 2 est réfléchi par rapport à l'axe d d'équation x égale 3. Le pied H est en 3 ; 2 et le symétrique A' est en 1 ; 2, à la même distance de l'axe que A.</desc>
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
        caption: 'Construction du symétrique de $A(5 ; 2)$ par rapport à l\'axe $d : x = 3$ — pied $H(3 ; 2)$ et symétrique $A\'(1 ; 2)$.'
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
            'La symétrie est une <strong>isométrie</strong> : $A\'B\' = AB$, et tous les angles sont conservés. La figure image est superposable à la figure de départ après pliage.'
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
        'Axe vertical $x = k$ : $x_{A\'} = 2k - x_A$, $y_{A\'} = y_A$',
        'Axe horizontal $y = k$ : $y_{A\'} = 2k - y_A$, $x_{A\'} = x_A$',
        'La symétrie conserve : distances, angles, aires.',
        'L\'axe est la médiatrice de $[AA\']$'
      ],
      recap: [
        'La symétrie axiale conserve distances, angles et aires (c\'est une isométrie).',
        'Le symétrique de $A$ par rapport à $x = k$ (axe vertical) a pour abscisse $x\' = 2k - x$ ; par rapport à $y = k$ (axe horizontal), pour ordonnée $y\' = 2k - y$.',
        'Cas particuliers : axe des ordonnées ($x=0$) → $x\' = -x$ ; axe des abscisses ($y=0$) → $y\' = -y$.',
        'Un point situé sur l\'axe est son propre symétrique.',
        'Un triangle équilatéral a $3$ axes, un carré en a $4$, un cercle en a une infinité.'
      ],
      piege: 'Piège : l\'axe de symétrie n\'est pas forcément vertical ou horizontal. Toujours tracer la perpendiculaire depuis le point jusqu\'à l\'axe, puis reporter la même distance de l\'autre côté.'
    },

    quiz: [
      { q: 'Le point $A(5 ; 2)$ est réfléchi par rapport à $x = 3$. Un élève trouve $A\'(-5 ; 2)$. Quelle est son erreur ?', options: ['Correct.', 'Il a confondu avec $x = 0$ : il faut $x\' = 2 \\times 3 - 5 = 1$, donc $A\'(1 ; 2)$.', 'Il faut changer $y$.', 'Pas d\'erreur car $-5$ est le symétrique de $5$.'], answer: 1, correction: '$x\' = 2 \\times 3 - 5 = 1$. $A\'(1 ; 2)$.' },
      { q: 'Le point $A(3 ; 1)$ est réfléchi par rapport à l\'axe des ordonnées. Coordonnées de $A\'$ ?', options: ['$(3 ; -1)$', '$(-3 ; 1)$', '$(-3 ; -1)$', '$(1 ; 3)$'], answer: 1, correction: 'Axe $x = 0$ : $x\' = -x = -3$, $y\' = y = 1$.' },
      { q: 'Un triangle équilatéral possède combien d\'axes de symétrie ?', options: ['$1$', '$2$', '$3$', '$6$'], answer: 2, correction: '$3$ axes, chacun passant par un sommet et le milieu du côté opposé.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const axType = pick(['vertical', 'horizontal']);
        const varSym = axType === 'vertical' ? 'x' : 'y';
        const coord = axType === 'vertical' ? 'abscisse' : 'ordonnée';
        const k = rand(2, 8);
        const pointVal = rand(k + 1, k + 6);
        const symVal = 2 * k - pointVal;
        const axisEq = `${varSym} = ${k}`;

        const ctx = pick([
          { build: () => `Le point $A$ a pour ${coord} $${varSym}_A = ${pointVal}$. L'axe de symétrie est $${axisEq}$.<br/>Quelle est l'${coord} de $A'$, le <strong>symétrique</strong> de $A$ ?` },
          { build: () => `En pliant une feuille le long de la droite $${axisEq}$, un point $A$ (${coord} $${varSym}_A = ${pointVal}$) se superpose exactement à son symétrique $A'$.<br/>Quelle est l'${coord} de $A'$ ?` },
          { build: () => `Le reflet d'un point $A$ dans un miroir plan d'axe $${axisEq}$ donne un point $A'$. Le point $A$ a pour ${coord} $${varSym}_A = ${pointVal}$.<br/>Quelle est l'${coord} du reflet $A'$ ?` },
          { build: () => `Un carreleur pose un motif <strong>symétrique</strong> par rapport à la ligne $${axisEq}$. Un point $A$ du motif a pour ${coord} $${varSym}_A = ${pointVal}$.<br/>Quelle est l'${coord} du point symétrique $A'$ qu'il doit tracer ?` },
          { build: () => `Sur un logo, un point $A$ (${coord} $${varSym}_A = ${pointVal}$) doit être reproduit par symétrie par rapport à l'axe $${axisEq}$ pour obtenir $A'$.<br/>Quelle est l'${coord} de $A'$ ?` },
          { build: () => `Le reflet d'un point $A$ à la surface d'un lac (axe $${axisEq}$) donne un point $A'$ sous l'eau. Le point $A$ a pour ${coord} $${varSym}_A = ${pointVal}$.<br/>Quelle est l'${coord} du reflet $A'$ ?` }
        ]);

        return {
          statement: ctx.build(),
          /* Droite graduee aux VRAIES valeurs du tirage (2026-09-12) : le point
             A tombe reellement sur son abscisse et l'axe sur la sienne. La
             symetrie est une notion visuelle avant d'etre une formule ; sans
             figure, l'eleve applique « 2k - x » sans jamais voir la pliure.
             Le symetrique est marque d'un cercle vide et d'un « ? » : la figure
             montre OU il se trouve, jamais sa valeur. */
          figure: figureSymetrie(pointVal, k, { variable: varSym }),
          answer: symVal,
          tolerance: 0,
          unit: '',
          hint: `$${varSym}_{A'} = 2k - ${varSym}_A = 2 \\times ${k} - ${pointVal}$.`,
          solution: [`$${varSym}_{A'} = 2 \\times ${k} - ${pointVal} = ${symVal}$`]
        };
      }
    },

    probleme: {
      context: 'Un designer crée un logo symétrique. La moitié gauche est un triangle de sommets $A(0 ; 0)$, $B(0 ; 4)$ et $C(3 ; 2)$. Il veut tracer la partie droite par symétrie d\'axe $x = 3$.',
      tasks: [
        'Calculer les coordonnées de $A\'$, symétrique de $A$ par rapport à $x = 3$.',
        'Calculer les coordonnées de $B\'$ et $C\'$.',
        'Expliquer pourquoi $C\' = C$.'
      ],
      solutions: [
        '$x_{A\'} = 2 \\times 3 - 0 = 6$, $y_{A\'} = 0$. Donc $A\'(6 ; 0)$.',
        '$B\'(6 ; 4)$ et $C\'(3 ; 2)$.',
        '$C$ a pour abscisse $3$, qui est l\'axe. Un point sur l\'axe est son propre symétrique.'
      ],
      finalAnswer: 'Le logo a les sommets $A(0;0)$, $B(0;4)$, $C(3;2)$, $B\'(6;4)$, $A\'(6;0)$.'
    },

    evaluation: {
      title: 'Évaluation — Symétrie axiale',
      duration: '20 min',
      questions: [
        { statement: 'Le point $A(7 ; 3)$ est réfléchi par rapport à $x = 0$. Abscisse de $A\'$ ?', type: 'numeric', answer: -7, tolerance: 0, unit: '', points: 2, correction: '$x\' = -7$.' },
        { statement: 'Le point $B(2 ; 5)$ est réfléchi par rapport à $x = 4$. Abscisse de $B\'$ ?', type: 'numeric', answer: 6, tolerance: 0, unit: '', points: 2, correction: '$x\' = 2 \\times 4 - 2 = 6$.' },
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
        { statement: 'Tu construis le symétrique d\'une figure par rapport à une droite, puis tu affirmes que les <strong>longueurs sont conservées</strong>.<br/><br/>Quelle justification est la mieux formulée pour une classe de sixième ?', type: 'multiple-choice', options: ['« Oui, parce que c\'est une isométrie. »', '« Oui : en pliant la feuille le long de l\'axe, la figure et son symétrique se superposent exactement, donc chaque longueur retrouve la même longueur. »', '« Oui, parce qu\'un miroir ne change jamais rien à ce qu\'il reflète. »', '« Oui, parce que la formule $x\' = 2k - x$ ne modifie pas les nombres. »'], answer: 1, points: 2, correction: 'Les quatre réponses concluent « oui » : c\'est la <strong>justification</strong> qui est évaluée.<br/><br/>La première se contente d\'un mot savant, qui n\'explique rien tant qu\'on ne l\'a pas défini.<br/><br/>La troisième s\'appuie sur l\'expérience des miroirs, qui déforment parfois : ce n\'est pas un argument mathématique.<br/><br/>La quatrième est fausse : la formule modifie bien les coordonnées, c\'est l\'écart entre deux points qu\'elle préserve.<br/><br/>Seule la deuxième donne l\'argument du programme : la <strong>superposition par pliage</strong>, que chacun peut vérifier avec une feuille.' },
        { statement: 'Un point $P$ est situé sur l\'axe $d$. Quel est son symétrique ?', type: 'multiple-choice', options: ['Le point au double.', 'Le point opposé.', 'Le point $P$ lui-même.', 'Pas de symétrique.'], answer: 2, points: 2, correction: 'Distance à l\'axe $= 0$, donc $P\' = P$.' }
      ]
    }
  });
