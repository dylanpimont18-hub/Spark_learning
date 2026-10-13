/* =========================================================
   Spark Learning – data/6e/6e-figures-geometriques.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-figures-geometriques',
    level: 1, subject: 'maths',
    icon: '📐',
    title: 'Figures géométriques de base',
    subtitle: 'Droites, segments, demi-droites, cercles',
    keywords: ['Droite', 'Segment', 'Demi-droite', 'Cercle', 'Rayon', 'Diamètre'],
    physics: false,

    cours: {
      /* « Decouvrir » NON reecrit le 2026-09-13, volontairement : c'est le seul
         chapitre du manuel qui tenait deja la promesse de l'avant-propos, et il a
         servi de modele aux neuf autres. Ce qui le fait fonctionner : il ne decrit
         pas une situation, il nomme un GESTE que quelqu'un accomplit reellement (le
         macon qui tend un fil, la pointe du compas qu'on plante) puis identifie ce
         geste a l'objet mathematique dans la meme phrase — « c'est l'image concrete
         d'une droite ». Pas de « imagine que… » : l'abstraction est presentee comme
         la forme epuree d'un acte concret. A ne pas modifier sans raison forte. */
      intro: 'Pour tracer le mur d\'une maison bien droit, un maçon tend un fil entre deux piquets : c\'est l\'image concrète d\'une <strong>droite</strong>. Pour dessiner une roue de vélo, on plante la pointe d\'un compas en un point fixe et on trace tous les points à la même distance : c\'est un <strong>cercle</strong>.<br/><br/>' +
        'En géométrie, tout repose sur quelques objets de base : le <strong>point</strong> (position sans dimension), le <strong>segment</strong> (longueur finie entre deux points), la <strong>droite</strong> (infinie dans les deux sens) et le <strong>cercle</strong> (ensemble de points à égale distance d\'un centre).<br/><br/>' +
        '<strong>Distinction importante :</strong> le segment $[AB]$ a une longueur mesurable ; la droite $(AB)$ est infinie et on la dessine avec des flèches aux extrémités. La demi-droite $[AB)$ est infinie dans un seul sens.<br/><br/>' +
        'Le <strong>cercle</strong> de centre $O$ et de rayon $r$ contient tous les points $M$ tels que $OM = r$. Le diamètre est $d = 2r$.',
      definitions: [
        { term: 'Droite $(AB)$', def: 'Ligne infinie dans les deux sens passant par $A$ et $B$. Dessinée avec des flèches.' },
        { term: 'Segment $[AB]$', def: 'Portion de droite limitée par deux extrémités $A$ et $B$. A une longueur mesurable.' },
        { term: 'Demi-droite $[AB)$', def: 'Portion de droite ayant une origine $A$ et infinie dans la direction de $B$.' },
        { term: 'Cercle', def: 'Ensemble des points $M$ tels que $OM = r$ (rayon). Le diamètre est $d = 2r$.' },
        { term: 'Disque', def: 'Surface entourée par un cercle : tous les points $M$ tels que $OM \\leq r$.<br/><br/>Le <strong>cercle</strong> est la ligne tracée au compas, le <strong>disque</strong> est la surface qu\'elle délimite.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Identifier</strong> le type d\'objet : un point ($A$), une droite $(AB)$ ou $d$, un segment $[AB]$, une demi-droite $[AB)$.',
          '<strong>Distinguer</strong> : droite (infinie, flèches), demi-droite (infinie d\'un côté), segment (fini).',
          '<strong>Pour un cercle</strong> : identifier le centre $O$ et le rayon $r$. Diamètre $= 2r$.',
          '<strong>Construire</strong> avec la règle (segments, droites) ou le compas (cercles, reports de longueur).'
        ]
      },
      example: {
        statement: 'Un cercle a un diamètre de $8{,}4$ cm. Calculer le rayon. Un point $P$ est à $5$ cm du centre. Où se trouve-t-il ?',
        steps: [
          'Rayon : $r = \\dfrac{d}{2} = \\dfrac{8{,}4}{2} = 4{,}2$ cm.',
          '$OP = 5$ cm et $r = 4{,}2$ cm.',
          '$OP > r$, donc $P$ est à l\'extérieur du cercle.'
        ],
        answer: '$r = 4{,}2$ cm. $P$ est à l\'extérieur du cercle.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Objets de base de la géométrie',
        title: 'Distinguer droite, segment, demi-droite et cercle',
        description: 'Les mêmes points $A$ et $B$ donnent trois figures différentes selon qu\'on prolonge la ligne des deux côtés, d\'un seul côté, ou pas du tout.',
        svg: `
          <svg viewBox="0 0 440 320" role="img" aria-labelledby="figures-diagram-title figures-diagram-desc">
            <title id="figures-diagram-title">Droite, segment, demi-droite et cercle</title>
            <desc id="figures-diagram-desc">Quatre figures : une droite infinie passant par A et B, un segment fini AB, une demi-droite d'origine A passant par B, et un cercle de centre O et de rayon r.</desc>
            <line class="grid-line" x1="220" y1="20" x2="220" y2="300"></line>
            <line class="grid-line" x1="20" y1="160" x2="420" y2="160"></line>

            <text class="label-soft" x="30" y="34">Droite (AB) — infinie</text>
            <line class="curve-main" x1="40" y1="85" x2="190" y2="85"></line>
            <path class="frame-line" d="M46 79 L40 85 L46 91" fill="none"></path>
            <path class="frame-line" d="M184 79 L190 85 L184 91" fill="none"></path>
            <circle class="plot-point-alt" cx="80" cy="85" r="4"></circle>
            <circle class="plot-point-alt" cx="150" cy="85" r="4"></circle>
            <text class="annotation-label" x="76" y="72">A</text>
            <text class="annotation-label" x="146" y="72">B</text>
            <text class="annotation-label" x="92" y="112">(AB)</text>

            <text class="label-soft" x="240" y="34">Segment [AB] — finie</text>
            <line class="curve-main" x1="260" y1="85" x2="380" y2="85"></line>
            <path class="frame-line" d="M260 78 L260 92" fill="none"></path>
            <path class="frame-line" d="M380 78 L380 92" fill="none"></path>
            <circle class="plot-point" cx="260" cy="85" r="4"></circle>
            <circle class="plot-point" cx="380" cy="85" r="4"></circle>
            <text class="annotation-label" x="250" y="72">A</text>
            <text class="annotation-label" x="376" y="72">B</text>
            <text class="annotation-label" x="304" y="112">[AB]</text>

            <text class="label-soft" x="30" y="178">Demi-droite [AB) — 1 sens</text>
            <line class="curve-main" x1="55" y1="235" x2="190" y2="235"></line>
            <path class="frame-line" d="M184 229 L190 235 L184 241" fill="none"></path>
            <circle class="plot-point" cx="55" cy="235" r="4"></circle>
            <circle class="plot-point-alt" cx="150" cy="235" r="4"></circle>
            <text class="annotation-label" x="45" y="222">A</text>
            <text class="annotation-label" x="146" y="222">B</text>
            <text class="annotation-label" x="85" y="262">[AB)</text>

            <text class="label-soft" x="240" y="178">Cercle (O, r)</text>
            <circle cx="325" cy="238" r="50" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></circle>
            <circle class="frame-line" cx="325" cy="238" r="50" fill="none"></circle>
            <line class="guide-line" x1="325" y1="238" x2="363.3" y2="205.9"></line>
            <circle class="plot-point" cx="325" cy="238" r="4"></circle>
            <circle class="plot-point-alt" cx="363.3" cy="205.9" r="4"></circle>
            <text class="annotation-label" x="312" y="255">O</text>
            <text class="annotation-label" x="338" y="216">r</text>
            <text class="tick-label" x="252" y="294">OM = r</text>
          </svg>
        `,
        notes: [
          'La droite $(AB)$ est infinie des deux côtés — elle se dessine toujours avec des flèches aux extrémités.',
          'Le segment $[AB]$ est fini : ses deux extrémités $A$ et $B$ sont marquées, et lui seul a une longueur mesurable.',
          'La demi-droite $[AB)$ a une seule origine ($A$) et continue à l\'infini dans la direction de $B$.',
          'Le cercle de centre $O$ et de rayon $r$ contient tous les points $M$ tels que $OM = r$. Exemple du cours : diamètre $8{,}4$ cm $\\Rightarrow$ rayon $r = 4{,}2$ cm.'
        ],
        reading: 'Cherche d\'abord combien d\'extrémités la ligne possède : zéro pour une droite, une pour une demi-droite, deux pour un segment.',
        caption: 'Segment $[AB]$, droite $(AB)$ et demi-droite $[AB)$ construits à partir des mêmes points, et cercle de centre $O$ et de rayon $r$.'
      },
      // Schemas secondaires (2026-09-12). La figure principale montre les quatre
      // objets du chapitre COTE A COTE, ce qui les fait reconnaitre mais ne les
      // fait pas comparer : ses trois lignes n'ont ni la meme longueur ni la meme
      // origine, si bien que l'oeil attribue la difference au dessin plutot qu'a
      // la terminaison. Les figures ci-dessous reprennent chacune un seul point
      // du chapitre et le poussent jusqu'au bout : la comparaison stricte des
      // trois notations, la propriete qui definit le cercle, et la position d'un
      // point par rapport au cercle — cette derniere porte l'exemple resolu, une
      // question du quiz et une question de l'evaluation, sans aucune figure
      // jusqu'ici.
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Trois objets, un seul trait',
          title: 'Droite, segment, demi-droite : seule la terminaison change',
          description: 'Les trois lignes ci-dessous ont <strong>exactement la même longueur tracée</strong> et passent par les <strong>mêmes points</strong> $A$ et $B$. Tout ce qui les distingue tient à ce qui se passe aux bouts — et à la notation qui le dit : $(AB)$, $[AB]$, $[AB)$.',
          svg: `
            <svg viewBox="56 8 336 218" role="img" aria-labelledby="geo-notation-title geo-notation-desc">
              <title id="geo-notation-title">Comparaison de la droite, du segment et de la demi-droite</title>
              <desc id="geo-notation-desc">Trois lignes horizontales sont posees l'une sous l'autre, toutes de meme longueur et portant les memes points A et B aux memes endroits. La premiere ligne se termine par une pointe de fleche a chaque bout : c'est la droite AB, qui se note entre parentheses. La deuxieme ligne s'arrete net a chaque bout sur un petit trait vertical : c'est le segment AB, qui se note entre crochets. La troisieme ligne part d'un bout ferme par un trait vertical et se termine a l'autre bout par une pointe de fleche : c'est la demi-droite d'origine A passant par B, qui se note avec un crochet ouvrant et une parenthese fermante. En face de chaque ligne, une mention rappelle le nombre de bouts fermes : aucun pour la droite, deux pour le segment, un seul pour la demi-droite.</desc>

              <!-- CONVENTION DE COMPARAISON : les trois traces partagent x=70 et
                   x=250, et leurs points A et B tombent aux memes abscisses. Toute
                   difference de longueur ou de position serait lue par l'eleve
                   comme faisant partie de la demonstration, alors que la seule
                   variable etudiee ici est la TERMINAISON. -->

              <!-- Droite (AB) : deux pointes. Les chevrons sont traces a la main
                   plutot que par un marker : le convertisseur du manuel ne pose
                   qu'une seule pointe TikZ par trait, jamais deux. -->
              <line class="curve-main" x1="70" y1="44" x2="250" y2="44"></line>
              <path class="frame-line" fill="none" d="M78 37 L70 44 L78 51"></path>
              <path class="frame-line" fill="none" d="M242 37 L250 44 L242 51"></path>
              <circle class="plot-point" cx="115" cy="44" r="4"></circle>
              <circle class="plot-point" cx="205" cy="44" r="4"></circle>
              <text class="tick-label" x="111" y="32">A</text>
              <text class="tick-label" x="201" y="32">B</text>
              <text class="annotation-label" x="268" y="40">Droite (AB)</text>
              <text class="label-soft" x="268" y="58">aucun bout fermé</text>

              <!-- Segment [AB] : les bouts sont marques par un tiret vertical,
                   le meme signe que sur la figure principale du chapitre. -->
              <line class="curve-main" x1="70" y1="110" x2="250" y2="110"></line>
              <line class="frame-line" x1="70" y1="103" x2="70" y2="117"></line>
              <line class="frame-line" x1="250" y1="103" x2="250" y2="117"></line>
              <circle class="plot-point" cx="115" cy="110" r="4"></circle>
              <circle class="plot-point" cx="205" cy="110" r="4"></circle>
              <text class="tick-label" x="111" y="98">A</text>
              <text class="tick-label" x="201" y="98">B</text>
              <text class="annotation-label" x="268" y="106">Segment [AB]</text>
              <text class="label-soft" x="268" y="124">deux bouts fermés</text>

              <!-- Demi-droite [AB) : un seul bout ferme, du cote de A. C'est
                   l'ORIGINE, et la notation la designe par son crochet. -->
              <line class="curve-main" x1="70" y1="176" x2="250" y2="176"></line>
              <line class="frame-line" x1="70" y1="169" x2="70" y2="183"></line>
              <path class="frame-line" fill="none" d="M242 169 L250 176 L242 183"></path>
              <circle class="plot-point" cx="115" cy="176" r="4"></circle>
              <circle class="plot-point" cx="205" cy="176" r="4"></circle>
              <text class="tick-label" x="111" y="164">A</text>
              <text class="tick-label" x="201" y="164">B</text>
              <text class="annotation-label" x="268" y="172">Demi-droite [AB)</text>
              <text class="label-soft" x="268" y="190">un seul bout fermé</text>

              <!-- La cle de lecture est POSEE SUR LA FIGURE et non renvoyee au
                   texte : la notation n'est pas arbitraire, elle dessine la
                   terminaison, et cela doit se lire en meme temps que les traits. -->
              <text class="tick-label" x="70" y="206">Le crochet ferme le bout,</text>
              <text class="tick-label" x="70" y="222">la parenthèse le laisse filer</text>
            </svg>
          `,
          notes: [
            'Les trois lignes sont dessinées de la même longueur : cette longueur ne veut donc rien dire. Seule la <strong>terminaison</strong> porte l\'information.',
            'Le crochet dit « ce bout est fermé, il y a une extrémité ici ». La parenthèse dit « ça continue de ce côté-là ».',
            'D\'où les trois notations : $(AB)$ ouverte des deux côtés, $[AB]$ fermée des deux côtés, $[AB)$ fermée en $A$ seulement.',
            'Un seul de ces objets a une <strong>longueur mesurable</strong> : le segment $[AB]$. On ne peut mesurer ni une droite ni une demi-droite.'
          ],
          reading: 'Ne regarde pas le milieu de la ligne, il est identique dans les trois cas : regarde uniquement les deux bouts, puis compte combien sont fermés. Deux bouts fermés donnent un segment, un seul donne une demi-droite, aucun donne une droite. La notation se déduit ensuite du comptage, elle ne s\'apprend pas par cœur.',
          caption: 'Les mêmes points $A$ et $B$, la même longueur tracée : seule la terminaison distingue $(AB)$, $[AB]$ et $[AB)$.'
        },
        {
          theme: 'maths',
          kicker: 'Ce que fait le compas',
          title: 'Tous les points du cercle sont à la même distance du centre',
          description: 'Un compas garde le même écartement pendant tout le tracé. C\'est pour cette raison — et non par convention — que <strong>tous</strong> les points du cercle sont à la distance $r$ du centre $O$. Le diamètre, lui, vaut deux rayons bout à bout : $d = 2r$.',
          svg: `
            <svg viewBox="50 24 340 216" role="img" aria-labelledby="geo-compas-title geo-compas-desc">
              <title id="geo-compas-title">Le cercle trace au compas : six rayons de meme longueur</title>
              <desc id="geo-compas-desc">Un cercle de centre O est trace. Six segments partent du centre vers six points differents repartis tout autour du bord, et ces six segments ont exactement la meme longueur, qui est le rayon r. Cette egalite est ce que garantit l'ecartement fixe du compas. Sous le cercle, une longueur est reportee deux fois de suite bout a bout : elle montre que le diametre vaut deux rayons, donc le double du rayon. A droite figurent la propriete OM egale r pour tout point M du cercle, la relation d egale deux r, et l'exemple du cours ou un diametre de 8,4 centimetres correspond a un rayon de 4,2 centimetres.</desc>

              <!-- Le disque reste en teinte tres faible : c'est le CERCLE (la
                   ligne) qui est l'objet du chapitre, pas la surface. Un aplat
                   fort ferait croire que le cercle est le disque, confusion que
                   l'evaluation du chapitre sanctionne explicitement. -->
              <circle cx="150" cy="123" r="86" fill="color-mix(in srgb, var(--diagram-accent) 8%, var(--bg-card))" stroke="none"></circle>
              <circle class="frame-line" cx="150" cy="123" r="86" fill="none"></circle>

              <!-- Six rayons vers des directions quelconques, y compris obliques :
                   des rayons uniquement horizontaux et verticaux laisseraient
                   croire que la propriete ne vaut que pour quatre points. -->
              <line class="curve-main" x1="150" y1="123" x2="236" y2="123"></line>
              <line class="curve-main" x1="150" y1="123" x2="193" y2="48.5"></line>
              <line class="curve-main" x1="150" y1="123" x2="107" y2="48.5"></line>
              <line class="curve-main" x1="150" y1="123" x2="83.5" y2="177.4"></line>
              <line class="curve-main" x1="150" y1="123" x2="150" y2="209"></line>
              <line class="curve-main" x1="150" y1="123" x2="216.5" y2="177.4"></line>

              <circle class="plot-point-alt" cx="236" cy="123" r="4"></circle>
              <circle class="plot-point-alt" cx="193" cy="48.5" r="4"></circle>
              <circle class="plot-point-alt" cx="107" cy="48.5" r="4"></circle>
              <circle class="plot-point-alt" cx="83.5" cy="177.4" r="4"></circle>
              <circle class="plot-point-alt" cx="150" cy="209" r="4"></circle>
              <circle class="plot-point-alt" cx="216.5" cy="177.4" r="4"></circle>

              <circle class="plot-point" cx="150" cy="123" r="4.5"></circle>
              <text class="annotation-label" x="134" y="118">O</text>

              <!-- Une seule des six longueurs est etiquetee : les six portent la
                   meme information, et six etiquettes « r » se marcheraient dessus
                   a 128 mm de large tout en donnant l'impression de six grandeurs
                   distinctes. -->
              <text class="annotation-label" x="188" y="116">r</text>

              <!-- Le report du diametre est pose SOUS le cercle, hors du faisceau
                   de rayons ou il se confondrait avec eux. La marque centrale est
                   ce qui rend visible que d vaut deux fois r. -->
              <line class="guide-line" x1="64" y1="232" x2="236" y2="232"></line>
              <line class="frame-line" x1="64" y1="225" x2="64" y2="239"></line>
              <line class="frame-line" x1="150" y1="225" x2="150" y2="239"></line>
              <line class="frame-line" x1="236" y1="225" x2="236" y2="239"></line>
              <text class="tick-label" x="103" y="225">r</text>
              <text class="tick-label" x="191" y="225">r</text>

              <text class="annotation-label" x="262" y="84">OM = r</text>
              <text class="tick-label" x="262" y="106">pour tout point M</text>
              <text class="tick-label" x="262" y="124">du cercle</text>
              <text class="annotation-label" x="262" y="162">d = 2r</text>
              <text class="tick-label" x="262" y="184">8,4 cm de diamètre</text>
              <text class="tick-label" x="262" y="202">donne 4,2 cm de rayon</text>
            </svg>
          `,
          notes: [
            'Les six segments tracés depuis $O$ ont tous la même longueur $r$ : c\'est <strong>la</strong> propriété du cercle, et elle vaut pour <strong>tous</strong> ses points, pas seulement pour ces six-là.',
            'Le compas ne fait rien d\'autre que garantir cette égalité : son écartement <strong>est</strong> le rayon.',
            'Le diamètre traverse le cercle en passant par le centre. Il est donc fait de deux rayons bout à bout : $d = 2r$, et inversement $r = \\dfrac{d}{2}$.',
            'Sur l\'exemple du cours : un diamètre de $8{,}4$ cm donne un rayon $r = \\dfrac{8{,}4}{2} = 4{,}2$ cm.'
          ],
          reading: 'Prends la mesure de n\'importe lequel des six traits partant du centre : tu trouveras toujours la même longueur. C\'est ce que veut dire l\'écriture $OM = r$ — quel que soit le point $M$ choisi sur le cercle, la distance $OM$ ne change pas. Sous la figure, cette même longueur $r$ est reportée deux fois de suite : elle forme le diamètre.',
          caption: 'Cercle de centre $O$ : six rayons de même longueur $r$, et le diamètre $d = 2r$ reporté sous la figure.'
        },
        {
          theme: 'maths',
          kicker: 'Où se trouve le point',
          title: 'Intérieur, sur le cercle, extérieur : il suffit de comparer',
          description: 'Pour savoir où se trouve un point $P$ par rapport à un cercle, on ne se fie pas au dessin : on <strong>compare deux nombres</strong>, la distance $OP$ et le rayon $r$. Trois cas, trois comparaisons.',
          svg: `
            <svg viewBox="30 18 340 202" role="img" aria-labelledby="geo-position-title geo-position-desc">
              <title id="geo-position-title">Position d'un point par rapport a un cercle</title>
              <desc id="geo-position-desc">Un cercle de centre O et de rayon 4,2 centimetres est trace. Trois points sont places dans trois directions differentes. Le premier point, a 3 centimetres du centre, tombe a l'interieur du cercle car 3 est plus petit que 4,2. Le deuxieme point, a exactement 4,2 centimetres du centre, tombe sur le trace du cercle car sa distance est egale au rayon. Le troisieme point, a 5 centimetres du centre, tombe a l'exterieur du cercle car 5 est plus grand que 4,2 : le segment qui le relie au centre franchit le bord. Chaque segment porte sa longueur. A droite, les trois comparaisons sont ecrites l'une sous l'autre avec leur conclusion.</desc>

              <!-- Les trois points sont poses dans TROIS directions differentes
                   pour eviter qu'ils s'alignent : alignes, l'eleve lirait une
                   progression le long d'un axe alors que la propriete ne depend
                   que de la DISTANCE au centre, jamais de la direction. -->
              <circle cx="128" cy="116" r="84" fill="color-mix(in srgb, var(--diagram-accent) 8%, var(--bg-card))" stroke="none"></circle>
              <circle class="frame-line" cx="128" cy="116" r="84" fill="none"></circle>

              <circle class="plot-point" cx="128" cy="116" r="4.5"></circle>
              <text class="annotation-label" x="112" y="111">O</text>

              <!-- Cas 1, interieur : le trait s'arrete AVANT le bord. -->
              <line class="guide-line" x1="128" y1="116" x2="80" y2="79"></line>
              <circle class="plot-point" cx="80" cy="79" r="4"></circle>
              <text class="annotation-label" x="58" y="71">P1</text>
              <text class="tick-label" x="84" y="106">3 cm</text>

              <!-- Cas 2, sur le cercle : le point est pose exactement sur le
                   trace, a la distance du rayon. -->
              <line class="guide-line" x1="128" y1="116" x2="194" y2="64"></line>
              <circle class="plot-point" cx="194" cy="64" r="4"></circle>
              <text class="annotation-label" x="200" y="56">P2</text>
              <text class="tick-label" x="146" y="80">4,2 cm</text>

              <!-- Cas 3, exterieur : le trait FRANCHIT le bord, et ce
                   franchissement est l'indice visuel que OP depasse le rayon. -->
              <!-- 2026-09-12 : P3 etait place en (228,166), soit 111,8 unites
                   du centre. A l'echelle de la figure (84 u pour 4,2 cm, donc
                   20 u/cm) cela represente 5,59 cm et non les 5 cm inscrits sur
                   le trait — 11,8 % d'erreur, 4,4 mm a l'impression. Or P1 et
                   P2 sont exacts a 0,03 cm pres, et cette figure enseigne
                   precisement de se fier aux nombres portes sur les traits :
                   un eleve qui verifie a la regle sur le livre trouvait un
                   ecart sur le seul point cense illustrer OP > r. Point ramene
                   a 100 unites du centre (= 5,00 cm) dans la meme direction :
                   il reste franchement a l'exterieur, le trait franchissant le
                   bord sur 16 unites (6 mm). -->
              <line class="guide-line" x1="128" y1="116" x2="217.4" y2="160.7"></line>
              <circle class="plot-point" cx="217.4" cy="160.7" r="4"></circle>
              <text class="annotation-label" x="223" y="169">P3</text>
              <text class="tick-label" x="154" y="150">5 cm</text>

              <text class="tick-label" x="128" y="216" text-anchor="middle">rayon r = 4,2 cm</text>

              <!-- Un tableau de decision, une ligne par cas, pose a droite : hors
                   du cercle il ne peut chevaucher aucune etiquette de longueur, et
                   les trois comparaisons alignees se lisent comme une regle. -->
              <text class="annotation-label" x="270" y="66">3 &lt; 4,2</text>
              <text class="tick-label" x="270" y="86">P1 dedans</text>
              <text class="annotation-label" x="270" y="120">4,2 = 4,2</text>
              <text class="tick-label" x="270" y="140">P2 sur le cercle</text>
              <text class="annotation-label" x="270" y="174">5 &gt; 4,2</text>
              <text class="tick-label" x="270" y="194">P3 dehors</text>
            </svg>
          `,
          notes: [
            'La question « où se trouve le point ? » se ramène toujours à une comparaison de deux longueurs : $OP$ et $r$.',
            '$OP < r$ : le point est à l\'<strong>intérieur</strong> du cercle. $OP = r$ : le point est <strong>sur</strong> le cercle. $OP > r$ : le point est à l\'<strong>extérieur</strong>.',
            'C\'est exactement l\'exemple du cours : un cercle de diamètre $8{,}4$ cm a pour rayon $4{,}2$ cm ; un point situé à $5$ cm du centre vérifie $5 > 4{,}2$, il est donc à l\'extérieur.',
            'Attention : c\'est bien la distance <strong>au centre</strong> que l\'on compare au rayon, jamais la distance au bord.'
          ],
          reading: 'Les trois points sont volontairement placés dans trois directions différentes : la direction n\'entre pas dans la règle, seule la distance au centre compte. Lis le nombre écrit sur chaque trait, compare-le à $4{,}2$, et la réponse tombe sans avoir à juger le dessin à l\'œil.',
          caption: 'Position de trois points par rapport à un cercle de rayon $4{,}2$ cm : $OP < r$, $OP = r$ et $OP > r$.'
        }
      ],
      formulas: [
        '$(AB)$ = droite passant par $A$ et $B$ (infinie)',
        '$[AB]$ = segment d\'extrémités $A$ et $B$',
        'Cercle de centre $O$ et rayon $r$ : $OM = r$ pour tout point $M$ du cercle',
        'Diamètre : $d = 2r$'
      ],
      recap: [
        'Droite $(AB)$ : infinie, flèches aux 2 bouts. Segment $[AB]$ : fini, 2 extrémités.',
        'Cercle : tous les points à distance $r$ du centre. Diamètre $= 2r$.',
        'Point sur le cercle : $OP = r$. Intérieur : $OP < r$. Extérieur : $OP > r$.',
        'Demi-droite $[AB)$ : origine $A$, infinie vers $B$.'
      ],
      piege: 'Piège : confondre segment et droite. Un segment $[AB]$ a une longueur mesurable ; une droite $(AB)$ est infinie. Sur une figure, une droite se dessine toujours avec des flèches aux deux extrémités.'
    },

    quiz: [
      { q: 'Un cercle a un rayon de $5$ cm. Quel est son diamètre ?', options: ['$5$ cm', '$10$ cm', '$15$ cm', '$25$ cm'], answer: 1, correction: '$d = 2r = 10$ cm.' },
      { q: 'Quelle figure est infinie dans les deux sens ?', options: ['Un segment', 'Une demi-droite', 'Une droite', 'Un arc de cercle'], answer: 2, correction: 'La droite $(AB)$ est infinie dans les deux sens.' },
      { q: 'Un point $P$ est à $3{,}5$ cm du centre $O$ d\'un cercle de rayon $3$ cm. Où se trouve $P$ ?', options: ['Sur le cercle', 'À l\'intérieur', 'À l\'extérieur', 'Au centre'], answer: 2, correction: '$3{,}5 > 3 = r$, donc $P$ est à l\'extérieur.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        /* 2026-10-13 : chaque objet tire son rayon dans une plage REALISTE (on
           tirait un pneu de voiture de rayon 12 cm, un cerceau de diametre
           14 cm), et l'article est elide (« d'une horloge », pas « de une
           horloge »). Le diametre decoule du rayon. */
        const objet = pick([
          { emoji: '🕰️', nom: 'une horloge', unite: 'cm', rmin: 8, rmax: 20 },
          { emoji: '🍕', nom: 'une pizza', unite: 'cm', rmin: 12, rmax: 20 },
          { emoji: '🚲', nom: 'une roue de vélo', unite: 'cm', rmin: 25, rmax: 36 },
          { emoji: '💿', nom: 'un CD', unite: 'cm', rmin: 6, rmax: 6 },
          { emoji: '🎯', nom: 'une cible de fléchettes', unite: 'cm', rmin: 20, rmax: 25 },
          { emoji: '⭕', nom: 'un cerceau de gymnastique', unite: 'cm', rmin: 35, rmax: 45 },
          { emoji: '🏀', nom: 'un ballon de basket (vu du dessus)', unite: 'cm', rmin: 11, rmax: 13 },
          { emoji: '🛞', nom: 'un pneu de voiture', unite: 'cm', rmin: 28, rmax: 36 }
        ]);
        const askFor = pick(['rayon', 'diametre']);
        const r = rand(objet.rmin, objet.rmax);
        const d = 2 * r;
        if (askFor === 'rayon') {
          return {
            statement: `${objet.emoji} Le diamètre d'${objet.nom} est de $${d}$ ${objet.unite}. Quel est son rayon (en ${objet.unite}) ?`,
            // On donne le DIAMETRE : la figure trace donc le diametre, de bord
            // a bord en passant par le centre (2026-09-12). Voir le trait
            // traverser le cercle entier est ce qui rend evident que le rayon
            // en est la moitie — c'est la confusion centrale du chapitre.
            figure: figureDisque(r, { unite: objet.unite, diametre: true }),
            answer: r,
            tolerance: 0,
            unit: objet.unite,
            hint: `Le rayon est la moitié du diamètre : $r = \\dfrac{d}{2}$.`,
            solution: [`$r = \\dfrac{${d}}{2} = ${r}$ ${objet.unite}`]
          };
        }
        return {
          statement: `${objet.emoji} Le rayon d'${objet.nom} est de $${r}$ ${objet.unite}. Quel est son diamètre (en ${objet.unite}) ?`,
          // Cas symetrique : on donne le RAYON, la figure trace le rayon, du
          // centre au bord.
          figure: figureDisque(r, { unite: objet.unite }),
          answer: d,
          tolerance: 0,
          unit: objet.unite,
          hint: `Le diamètre est le double du rayon : $d = 2r$.`,
          solution: [`$d = 2 \\times ${r} = ${d}$ ${objet.unite}`]
        };
      }
    },

    probleme: {
      context: 'Un architecte dessine un plan de fontaine circulaire. Le bassin central a un diamètre de $4{,}8$ m, et une allée de $0{,}6$ m de large l\'entoure.',
      tasks: [
        'Quel est le rayon du bassin central ?',
        'Quel est le rayon total (bassin + allée) ?',
        'Quel est le diamètre total de la fontaine ?'
      ],
      solutions: [
        'Rayon du bassin : $r = 4{,}8 \\div 2 = 2{,}4$ m.',
        'Rayon total : $2{,}4 + 0{,}6 = 3$ m.',
        'Diamètre total : $2 \\times 3 = 6$ m.'
      ],
      finalAnswer: 'Le diamètre total de la fontaine est $6$ m.'
    },

    evaluation: {
      title: 'Évaluation — Figures géométriques',
      duration: '15 min',
      questions: [
        { statement: 'Un cercle a un diamètre de $18$ cm. Quel est son rayon en cm ?', type: 'numeric', answer: 9, tolerance: 0, unit: 'cm', points: 2, correction: '$r = 18 \\div 2 = 9$ cm.' },
        { statement: 'Quelle notation désigne une droite passant par les points $A$ et $B$ ?', type: 'multiple-choice', options: ['$[AB]$', '$(AB)$', '$[AB)$', '$AB$'], answer: 1, points: 2, correction: '$(AB)$ est la <strong>droite</strong>.<br/><br/>$[AB]$ est le segment, $[AB)$ la demi-droite d\'origine $A$, et $AB$ sans crochets ni parenthèses désigne une <strong>longueur</strong>, pas une ligne.' },
        { statement: 'Un point $M$ est situé à $5{,}2$ cm du centre $O$ d\'un cercle de rayon $5{,}2$ cm. Où se trouve $M$ ?', type: 'multiple-choice', options: ['À l\'intérieur', 'À l\'extérieur', 'Sur le cercle', 'Au centre'], answer: 2, points: 2, correction: '$OM = r$, donc $M$ est sur le cercle.' },
        // Competence « chercher » (2026-09-12). L'ancienne question doublait la Q1
        // (meme relation rayon/diametre, sens inverse) et faisait deux « calculer »
        // dans une evaluation de cinq questions. La version actuelle donne la
        // contrainte a l'envers : l'eleve doit trouver le rayon qui la satisfait,
        // par essais ou en remontant le raisonnement. C'est la demarche que
        // « chercher » designe, et la reponse reste un nombre.
        { statement: 'On veut tracer un cercle qui tienne <strong>tout juste</strong> dans un carré de $12$ cm de côté, en touchant les quatre côtés.<br/><br/>Cherche le rayon, en cm, qu\'il faut donner au compas.', type: 'numeric', answer: 6, tolerance: 0, unit: 'cm', points: 2, correction: 'On peut essayer : un rayon de $12$ cm donnerait un cercle bien trop grand, un rayon de $3$ cm un cercle qui flotte au milieu.<br/><br/>Le bon repère est le <strong>diamètre</strong> : pour toucher deux côtés opposés, le cercle doit les traverser de part en part, donc son diamètre vaut exactement le côté du carré, soit $12$ cm.<br/><br/>Le rayon est la moitié du diamètre : $12 \\div 2 = 6$ cm.' },
        // Competence « communiquer » (2026-09-12). L'ancienne version melangeait
        // quatre affirmations sans rapport, dont trois grossierement fausses : elle
        // se tranchait par elimination. Les quatre options portent desormais sur le
        // MEME objet (le cercle) et disent toutes quelque chose de vrai ou presque ;
        // seule l'une d'elles emploie le vocabulaire exact. L'eleve doit juger une
        // formulation, ce que « communiquer » designe.
        { statement: 'Quatre élèves définissent le cercle de centre $O$ et de rayon $r$.<br/><br/>Quelle définition est <strong>correctement formulée</strong> ?', type: 'multiple-choice', options: ['« C\'est le rond que l\'on trace avec un compas ouvert de $r$. »', '« C\'est l\'ensemble des points situés à une distance de $O$ inférieure ou égale à $r$. »', '« C\'est l\'ensemble des points situés à la distance $r$ du point $O$. »', '« C\'est la surface intérieure délimitée par le tracé du compas. »'], answer: 2, points: 2, correction: 'Les quatre phrases parlent bien du même dessin : c\'est la <strong>précision du langage</strong> qui les départage.<br/><br/>La première décrit un geste, pas un objet mathématique : elle ne dit ni le centre ni ce qu\'est le tracé.<br/><br/>La deuxième et la quatrième décrivent le <strong>disque</strong> (la surface), pas le cercle (la ligne).<br/><br/>Seule la troisième dit exactement ce qu\'est le cercle : <strong>tous les points</strong> à la distance $r$ de $O$, ni plus près, ni plus loin.' }
      ]
    }
  });
