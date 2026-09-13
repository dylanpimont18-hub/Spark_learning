/* =========================================================
   Spark Learning – data/5e/5e-parallelogrammes.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-parallelogrammes',
    level: 1, subject: 'maths',
    icon: '▱',
    title: 'Parallélogrammes et propriétés',
    subtitle: 'Parallélogramme, rectangle, losange, carré',
    keywords: ['Parallélogramme', 'Rectangle', 'Losange', 'Carré', 'Diagonales', 'Côtés parallèles'],
    physics: false,

    cours: {
      /* « DECOUVRIR » REECRIT LE 2026-09-13 (chapitre pilote de cinquieme).

         L'ancienne entree citait un cerf-volant, une table pliante et une
         grille de portail, puis enchainait aussitot sur la definition. Elle
         echouait au test du cahier des charges : « les cotes opposes restent
         paralleles » se comprend sans rien savoir du chapitre, et l'eleve
         n'avait donc aucune question a se poser.

         La nouvelle entree part d'une difficulte REELLE et verifiable a la
         main : deux quadrilateres dont on connait les memes longueurs de cotes
         n'ont pas la meme forme, et aucune mesure de cote ne permet de les
         distinguer. Il faut regarder ailleurs — les diagonales —, ce qui est
         exactement l'objet du chapitre. On ne peut pas y repondre sans la
         notion, ce qui est le critere retenu.

         Ce n'est pas non plus une mise en situation decorative : la question
         du portail qui se deforme est le probleme d'ingenierie qui a fait
         etudier ces quadrilateres, et elle se tranche par le calcul. */
      intro: 'Prends quatre baguettes : deux de $8$ cm et deux de $5$ cm, et assemble-les bout à bout pour former un quadrilatère. Ton voisin fait exactement la même chose, avec les mêmes longueurs. Pourtant, vos deux figures peuvent ne pas se superposer du tout : la sienne est presque un rectangle, la tienne est complètement aplatie.<br/><br/>' +
        'Les <strong>quatre côtés</strong> sont pourtant identiques. Alors qu\'est-ce qui a changé ? Et surtout : que faudrait-il mesurer pour décrire la différence, puisque les côtés ne la voient pas ?<br/><br/>' +
        'La réponse est dans les <strong>diagonales</strong>. Ce sont elles qui distinguent un rectangle d\'un parallélogramme aplati, et un losange d\'un carré — alors même qu\'elles ne font pas partie du contour. C\'est aussi pour cela qu\'un portail qui se déforme se répare en ajoutant une barre en diagonale.<br/><br/>' +
        'Un parallélogramme est un quadrilatère avec <strong>deux paires de côtés parallèles</strong>. De cette propriété découlent toutes les autres : les côtés opposés sont égaux, les angles opposés sont égaux, et les diagonales se coupent en leur milieu.<br/><br/>' +
        '<strong>Hiérarchie :</strong> tout carré est un rectangle et un losange ; tout rectangle est un parallélogramme ; tout losange est un parallélogramme — mais l\'inverse n\'est pas vrai.<br/><br/>' +
        'Pour <strong>identifier</strong> un parallélogramme, il suffit de vérifier <em>une</em> des conditions : côtés opposés parallèles, ou côtés opposés égaux, ou diagonales se coupant en leur milieu.<br/><br/>' +
        'L\'<strong>aire d\'un parallélogramme</strong> est base × hauteur. Attention : la hauteur est perpendiculaire à la base, pas le côté latéral. L\'aire d\'un losange se calcule avec ses diagonales : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$.',
      definitions: [
        { term: 'Parallélogramme', def: 'Quadrilatère dont les côtés opposés sont parallèles et de même longueur. Les diagonales se coupent en leur milieu.' },
        { term: 'Rectangle', def: 'Parallélogramme ayant 4 angles droits. Ses diagonales sont de même longueur.' },
        { term: 'Losange', def: 'Parallélogramme ayant 4 côtés de même longueur. Ses diagonales sont perpendiculaires.' },
        { term: 'Carré', def: 'Quadrilatère qui est à la fois rectangle ET losange : 4 angles droits et 4 côtés égaux.' }
      ],
      example: {
        statement: 'Un losange a des diagonales de $8$ cm et $6$ cm, et un côté de $5$ cm. Calcule son aire.',
        steps: [
          'Aire : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{8 \\times 6}{2} = 24$ cm².',
          'Les diagonales se coupent perpendiculairement en leur milieu → demi-diagonales : $4$ et $3$ cm.'
        ],
        answer: 'Aire = $24$ cm²'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Quadrilatères particuliers',
        title: 'Parallélogramme, rectangle, losange, carré : quelles propriétés en plus ?',
        description: 'Les tics identiques marquent des longueurs égales (côtés ou demi-diagonales), les petits carrés marquent des angles droits. Le panneau losange reprend l\'exemple du cours : diagonales de $8$ cm et $6$ cm, côté de $5$ cm.',
        svg: `
          <svg viewBox="0 0 480 440" role="img" aria-labelledby="parallelo-title parallelo-desc">
            <title id="parallelo-title">Parallelogramme, rectangle, losange et carre avec diagonales codees</title>
            <desc id="parallelo-desc">Quatre quadrilateres avec leurs diagonales et des tics d'egalite : un parallelogramme quelconque, un rectangle avec ses quatre angles droits, un losange aux diagonales de 8 centimetres et 6 centimetres perpendiculaires, et un carre qui cumule angles droits et cotes egaux.</desc>

            <polygon points="50,160 190,160 250,100 110,100" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="50" y1="160" x2="190" y2="160"></line>
            <line class="frame-line" x1="110" y1="100" x2="250" y2="100"></line>
            <line class="frame-line" x1="50" y1="160" x2="110" y2="100"></line>
            <line class="frame-line" x1="190" y1="160" x2="250" y2="100"></line>
            <line class="guide-line" x1="50" y1="160" x2="250" y2="100"></line>
            <line class="guide-line" x1="190" y1="160" x2="110" y2="100"></line>
            <circle class="plot-point" cx="150" cy="130" r="4"></circle>
            <line class="frame-line" x1="120" y1="154" x2="120" y2="166"></line>
            <line class="frame-line" x1="180" y1="94" x2="180" y2="106"></line>
            <line class="frame-line" x1="72" y1="130" x2="80" y2="138"></line>
            <line class="frame-line" x1="80" y1="122" x2="88" y2="130"></line>
            <line class="frame-line" x1="212" y1="130" x2="220" y2="138"></line>
            <line class="frame-line" x1="220" y1="122" x2="228" y2="130"></line>
            <line class="frame-line" x1="98" y1="139" x2="102" y2="151"></line>
            <line class="frame-line" x1="198" y1="109" x2="202" y2="121"></line>
            <line class="frame-line" x1="171" y1="154" x2="179" y2="144"></line>
            <line class="frame-line" x1="161" y1="146" x2="169" y2="136"></line>
            <line class="frame-line" x1="131" y1="124" x2="139" y2="114"></line>
            <line class="frame-line" x1="121" y1="116" x2="129" y2="106"></line>
            <text class="label-soft" x="75" y="198">Parallélogramme</text>

            <polygon points="310,160 450,160 450,60 310,60" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="310" y1="160" x2="450" y2="160"></line>
            <line class="frame-line" x1="310" y1="60" x2="450" y2="60"></line>
            <line class="frame-line" x1="310" y1="160" x2="310" y2="60"></line>
            <line class="frame-line" x1="450" y1="160" x2="450" y2="60"></line>
            <line class="guide-line" x1="310" y1="160" x2="450" y2="60"></line>
            <line class="guide-line" x1="450" y1="160" x2="310" y2="60"></line>
            <circle class="plot-point" cx="380" cy="110" r="4"></circle>
            <line class="frame-line" x1="380" y1="154" x2="380" y2="166"></line>
            <line class="frame-line" x1="380" y1="54" x2="380" y2="66"></line>
            <line class="frame-line" x1="304" y1="107" x2="316" y2="107"></line>
            <line class="frame-line" x1="304" y1="113" x2="316" y2="113"></line>
            <line class="frame-line" x1="444" y1="107" x2="456" y2="107"></line>
            <line class="frame-line" x1="444" y1="113" x2="456" y2="113"></line>
            <line class="frame-line" x1="341" y1="130" x2="349" y2="140"></line>
            <line class="frame-line" x1="411" y1="80" x2="419" y2="90"></line>
            <line class="frame-line" x1="411" y1="140" x2="419" y2="130"></line>
            <line class="frame-line" x1="341" y1="90" x2="349" y2="80"></line>
            <path class="axis" d="M310 152 L318 152 L318 160"></path>
            <path class="axis" d="M442 160 L442 152 L450 152"></path>
            <path class="axis" d="M442 60 L442 68 L450 68"></path>
            <path class="axis" d="M310 68 L318 68 L318 60"></path>
            <text class="label-soft" x="345" y="198">Rectangle</text>

            <polygon points="60,325 120,280 180,325 120,370" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="60" y1="325" x2="120" y2="280"></line>
            <line class="frame-line" x1="120" y1="280" x2="180" y2="325"></line>
            <line class="frame-line" x1="180" y1="325" x2="120" y2="370"></line>
            <line class="frame-line" x1="120" y1="370" x2="60" y2="325"></line>
            <line class="guide-line" x1="60" y1="325" x2="180" y2="325"></line>
            <line class="guide-line" x1="120" y1="280" x2="120" y2="370"></line>
            <circle class="plot-point" cx="120" cy="325" r="4"></circle>
            <line class="frame-line" x1="86" y1="298" x2="94" y2="308"></line>
            <line class="frame-line" x1="146" y1="298" x2="154" y2="308"></line>
            <line class="frame-line" x1="146" y1="343" x2="154" y2="353"></line>
            <line class="frame-line" x1="86" y1="343" x2="94" y2="353"></line>
            <line class="frame-line" x1="90" y1="319" x2="90" y2="331"></line>
            <line class="frame-line" x1="150" y1="319" x2="150" y2="331"></line>
            <line class="frame-line" x1="114" y1="301" x2="126" y2="301"></line>
            <line class="frame-line" x1="114" y1="305" x2="126" y2="305"></line>
            <line class="frame-line" x1="114" y1="346" x2="126" y2="346"></line>
            <line class="frame-line" x1="114" y1="350" x2="126" y2="350"></line>
            <path class="axis" d="M116 325 L116 321 L120 321"></path>
            <text class="annotation-label" x="188" y="320">d1 = 8 cm</text>
            <text class="annotation-label" x="188" y="335">d2 = 6 cm</text>
            <text class="annotation-label" x="188" y="350">côté = 5 cm</text>
            <text class="label-soft" x="95" y="415">Losange</text>

            <polygon points="330,380 430,380 430,280 330,280" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="330" y1="380" x2="430" y2="380"></line>
            <line class="frame-line" x1="330" y1="280" x2="430" y2="280"></line>
            <line class="frame-line" x1="330" y1="380" x2="330" y2="280"></line>
            <line class="frame-line" x1="430" y1="380" x2="430" y2="280"></line>
            <line class="guide-line" x1="330" y1="380" x2="430" y2="280"></line>
            <line class="guide-line" x1="430" y1="380" x2="330" y2="280"></line>
            <circle class="plot-point" cx="380" cy="330" r="4"></circle>
            <line class="frame-line" x1="380" y1="374" x2="380" y2="386"></line>
            <line class="frame-line" x1="380" y1="274" x2="380" y2="286"></line>
            <line class="frame-line" x1="324" y1="330" x2="336" y2="330"></line>
            <line class="frame-line" x1="424" y1="330" x2="436" y2="330"></line>
            <line class="frame-line" x1="351" y1="351" x2="359" y2="359"></line>
            <line class="frame-line" x1="401" y1="301" x2="409" y2="309"></line>
            <line class="frame-line" x1="401" y1="359" x2="409" y2="351"></line>
            <line class="frame-line" x1="351" y1="309" x2="359" y2="301"></line>
            <path class="axis" d="M376 330 L376 326 L380 326"></path>
            <path class="axis" d="M330 372 L338 372 L338 380"></path>
            <path class="axis" d="M422 380 L422 372 L430 372"></path>
            <path class="axis" d="M422 280 L422 288 L430 288"></path>
            <path class="axis" d="M330 288 L338 288 L338 280"></path>
            <text class="label-soft" x="360" y="415">Carré</text>
          </svg>
        `,
        notes: [
          'Dans les $4$ figures, les diagonales se coupent en leur milieu : c\'est justement la propriété qui définit un parallélogramme — les tics sur chaque moitié de diagonale montrent l\'égalité des deux moitiés.',
          'Le rectangle ajoute $4$ angles droits (petits carrés) ET des diagonales de même longueur : toutes les demi-diagonales portent le même tic.',
          'Le losange ajoute $4$ côtés égaux (même tic sur les $4$ côtés) ET des diagonales perpendiculaires (petit carré au centre). Avec des diagonales de $8$ cm et $6$ cm, les demi-diagonales mesurent $4$ cm et $3$ cm, pour un côté de $5$ cm — exactement l\'exemple du cours.',
          'Le carré cumule tout : $4$ angles droits, $4$ côtés égaux, diagonales égales ET perpendiculaires.'
        ],
        reading: 'Pour identifier une figure, une seule propriété codée ne suffit pas si elle n\'est pas vraie partout : il faut que la propriété (angle droit, longueur égale...) se vérifie sur les $4$ côtés ou les $4$ demi-diagonales, pas sur un seul.',
        caption: 'Codage des figures : tics identiques = longueurs égales, petits carrés = angles droits. Le losange reprend les valeurs de l\'exemple du cours (diagonales $8$ cm et $6$ cm, côté $5$ cm).'
      },
      /* SCHEMAS SECONDAIRES — ajoutes le 2026-09-13 (chapitre pilote de la
         cinquieme). UNE FIGURE PAR MALENTENDU, jamais une figure par formule :
         les trois erreurs frequentes de la fiche professeur ont chacune la
         leur, et aucune quatrieme figure n'a ete ajoutee pour faire du nombre.

         Conventions appliquees (section 9 du cahier des charges) : aucune
         couleur en dur, uniquement les variables du projet ; angle droit code
         par un carre, jamais par un arc ; etiquettes sans article elide, sans
         lettre isolee et sans capitales ; structure plate en coordonnees
         absolues ; une seule pointe de fleche par trait ; viewBox cadre serre
         sur le dessin, toute bande vide se payant en blanc imprime.

         Toutes les proportions de ces trois figures sont VERIFIEES PAR LE
         CALCUL (aires, rapports, produits scalaires, longueurs), et non a
         l'oeil : voir le script de recette du chantier. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le piege de la hauteur',
          title: 'La hauteur n\'est pas le côté oblique',
          description: 'Pour l\'aire d\'un parallélogramme, il faut la <strong>hauteur</strong>, c\'est-à-dire le trait perpendiculaire à la base. Le côté oblique est toujours <strong>plus long</strong> que la hauteur : l\'utiliser donne une aire trop grande.',
          svg: `
            <svg viewBox="0 0 400 200" role="img" aria-labelledby="parallelo-haut-title parallelo-haut-desc">
              <title id="parallelo-haut-title">Parallelogramme avec sa hauteur et son cote oblique distingues</title>
              <desc id="parallelo-haut-desc">Un parallelogramme de base 8 centimetres. La hauteur, tracee en trait de construction du sommet superieur gauche perpendiculairement a la base, mesure 5 centimetres et porte le codage de l'angle droit. Le cote oblique part du meme sommet vers le bas a gauche et mesure environ 5,83 centimetres. Les deux traits joignent le meme sommet a la meme base, mais le cote oblique, penche, est visiblement le plus long des deux.</desc>

              <!-- Echelle : 25 unites de viewBox par centimetre. Base 8 cm donc
                   200 unites, hauteur 5 cm donc 125 unites, decalage oblique de
                   3 cm donc 75 unites. Le cote oblique vaut ainsi la racine de
                   (3 au carre + 5 au carre), soit environ 5,83 cm : il est bien
                   le plus long, ce que la figure doit MONTRER sans l'ecrire. -->
              <polygon class="frame-line" points="90,160 290,160 365,35 165,35" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></polygon>

              <!-- La hauteur, en trait de construction, angle droit code par un
                   carre (jamais par un arc). -->
              <line class="guide-line" x1="165" y1="35" x2="165" y2="160"></line>
              <path class="grid-line" fill="none" d="M172 160 L172 153 L165 153"></path>
              <text class="annotation-label" x="155" y="102" text-anchor="end">hauteur = 5 cm</text>

              <!-- Le cote oblique, en tirete pour le distinguer de la hauteur.
                   Il n'est PAS cote : le chiffrer inviterait a s'en servir, ce
                   qui est exactement l'erreur que la figure combat. -->
              <line class="frame-line" x1="90" y1="160" x2="165" y2="35" stroke-dasharray="6 4"></line>
              <text class="label-soft" x="100" y="88" text-anchor="start">côté oblique</text>
              <text class="label-soft" x="100" y="104" text-anchor="start">plus long</text>

              <text class="annotation-label" x="190" y="184" text-anchor="middle">base = 8 cm</text>
            </svg>
          `,
          notes: [
            'Aire juste : $\\mathcal{A} = b \\times h = 8 \\times 5 = 40$ cm².',
            'Avec le côté oblique ($\\approx 5{,}83$ cm) on obtiendrait $\\approx 46{,}6$ cm², soit <strong>trop</strong>.',
            'La hauteur est le <strong>plus court</strong> chemin du sommet à la base : c\'est pour cela qu\'elle est perpendiculaire.'
          ],
          reading: 'Pose ton équerre sur la base : le seul trait qui suit l\'équerre est la hauteur. Le côté oblique, lui, est penché — et un trait penché qui joint les deux mêmes droites est forcément plus long.',
          caption: 'La hauteur ($5$ cm) est perpendiculaire à la base ; le côté oblique ($\\approx 5{,}83$ cm) ne l\'est pas.'
        },
        {
          theme: 'maths',
          kicker: 'Pourquoi diviser par deux',
          title: 'L\'aire du losange, vue comme un rectangle',
          description: 'La formule $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$ n\'est pas tombée du ciel : le losange occupe <strong>exactement la moitié</strong> du rectangle construit sur ses deux diagonales.',
          svg: `
            <svg viewBox="0 0 400 212" role="img" aria-labelledby="losange-moitie-title losange-moitie-desc">
              <title id="losange-moitie-title">Un losange inscrit dans le rectangle de ses diagonales</title>
              <desc id="losange-moitie-desc">Un losange dont les diagonales mesurent 8 centimetres horizontalement et 6 centimetres verticalement est inscrit dans un rectangle de 8 centimetres sur 6 centimetres. Les quatre sommets du losange sont les milieux des quatre cotes du rectangle. Les quatre triangles rectangles laisses libres entre le losange et le rectangle ont chacun la meme aire que le triangle voisin appartenant au losange, si bien que le losange remplit exactement la moitie du rectangle.</desc>

              <!-- Echelle : 25 unites par centimetre. Rectangle 8x6 cm, soit
                   200x150 unites. Les sommets du losange sont les MILIEUX des
                   cotes du rectangle, ce qui garantit que ses diagonales valent
                   exactement 8 et 6 cm. -->
              <rect class="grid-line" x="100" y="30" width="200" height="150" fill="none"></rect>

              <!-- Les quatre triangles laisses libres, en aplat DISCRET : c'est
                   le decor. L'intensite encode la hierarchie. -->
              <polygon points="100,30 200,30 100,105" fill="color-mix(in srgb, var(--diagram-accent) 7%, transparent)" stroke="none"></polygon>
              <polygon points="200,30 300,30 300,105" fill="color-mix(in srgb, var(--diagram-accent) 7%, transparent)" stroke="none"></polygon>
              <polygon points="100,180 200,180 100,105" fill="color-mix(in srgb, var(--diagram-accent) 7%, transparent)" stroke="none"></polygon>
              <polygon points="200,180 300,180 300,105" fill="color-mix(in srgb, var(--diagram-accent) 7%, transparent)" stroke="none"></polygon>

              <!-- Le losange : l'unique objet a isoler, donc l'aplat le plus
                   fort de la figure. -->
              <polygon class="frame-line" points="100,105 200,30 300,105 200,180" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)"></polygon>

              <line class="guide-line" x1="100" y1="105" x2="300" y2="105"></line>
              <line class="guide-line" x1="200" y1="30" x2="200" y2="180"></line>
              <path class="grid-line" fill="none" d="M207 105 L207 98 L200 98"></path>
              <text class="annotation-label" x="200" y="202" text-anchor="middle">d1 = 8 cm</text>
              <text class="annotation-label" x="92" y="109" text-anchor="end">d2 = 6 cm</text>
              <text class="label-soft" x="308" y="26" text-anchor="start">moitié libre</text>
            </svg>
          `,
          notes: [
            'Rectangle des diagonales : $8 \\times 6 = 48$ cm².',
            'Losange : $\\mathcal{A} = \\dfrac{8 \\times 6}{2} = 24$ cm², soit bien la <strong>moitié</strong>.',
            'Les quatre triangles laissés libres se recollent deux à deux : ils remplissent l\'autre moitié.'
          ],
          reading: 'Regarde un seul quart du dessin : le triangle qui appartient au losange et le triangle resté libre ont la même base et la même hauteur, donc la même aire. Cela vaut pour les quatre quarts, donc le losange occupe la moitié du rectangle.',
          caption: 'Le losange de diagonales $8$ cm et $6$ cm occupe la moitié du rectangle $8 \\times 6$.'
        },
        {
          theme: 'maths',
          kicker: 'Ce que les diagonales disent',
          title: 'Trois quadrilatères, trois comportements des diagonales',
          description: 'Les diagonales d\'un parallélogramme se coupent <strong>toujours</strong> en leur milieu. Qu\'elles soient en plus <strong>égales</strong> ou <strong>perpendiculaires</strong> dépend du quadrilatère, et c\'est justement ce qui permet de le reconnaître.',
          svg: `
            <svg viewBox="0 0 470 182" role="img" aria-labelledby="diago-title diago-desc">
              <title id="diago-title">Diagonales d'un parallelogramme, d'un rectangle et d'un losange</title>
              <desc id="diago-desc">Trois quadrilateres poses sur la meme ligne de base et a la meme echelle. A gauche un parallelogramme quelconque : ses diagonales se coupent en leur milieu mais sont inegales et non perpendiculaires. Au centre un rectangle : ses diagonales se coupent en leur milieu et sont de meme longueur, ce qui est code par un tic sur chacune. A droite un losange : ses diagonales se coupent en leur milieu et sont perpendiculaires, ce qui est code par un petit carre. Le point d'intersection est marque sur les trois figures.</desc>

              <!-- Meme ligne de base (y = 130) et meme echelle pour les trois :
                   la seule difference visible doit etre le comportement des
                   diagonales, toute autre serait lue comme faisant partie de la
                   demonstration (patron « comparaison »). -->

              <!-- Parallelogramme quelconque : diagonales inegales et non
                   perpendiculaires, donc AUCUN codage d'egalite ni d'angle
                   droit — c'est precisement ce que la figure montre. -->
              <polygon class="frame-line" points="20,130 120,130 150,60 50,60" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></polygon>
              <line class="guide-line" x1="20" y1="130" x2="150" y2="60"></line>
              <line class="guide-line" x1="120" y1="130" x2="50" y2="60"></line>
              <circle class="plot-point" cx="85" cy="95" r="3.5"></circle>
              <text class="label-soft" x="85" y="156" text-anchor="middle">parallélogramme</text>
              <text class="tick-label" x="85" y="172" text-anchor="middle">milieu seulement</text>

              <!-- Rectangle : diagonales EGALES, codees par un tic chacune. -->
              <polygon class="frame-line" points="185,130 300,130 300,60 185,60" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></polygon>
              <line class="guide-line" x1="185" y1="130" x2="300" y2="60"></line>
              <line class="guide-line" x1="300" y1="130" x2="185" y2="60"></line>
              <circle class="plot-point" cx="242.5" cy="95" r="3.5"></circle>
              <line class="frame-line" x1="210" y1="112" x2="218" y2="120"></line>
              <line class="frame-line" x1="267" y1="120" x2="275" y2="112"></line>
              <text class="label-soft" x="242" y="156" text-anchor="middle">rectangle</text>
              <text class="tick-label" x="242" y="172" text-anchor="middle">en plus égales</text>

              <!-- Losange : diagonales PERPENDICULAIRES, codees par un carre. -->
              <polygon class="frame-line" points="340,95 395,60 450,95 395,130" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></polygon>
              <line class="guide-line" x1="340" y1="95" x2="450" y2="95"></line>
              <line class="guide-line" x1="395" y1="60" x2="395" y2="130"></line>
              <circle class="plot-point" cx="395" cy="95" r="3.5"></circle>
              <path class="grid-line" fill="none" d="M402 95 L402 88 L395 88"></path>
              <text class="label-soft" x="395" y="156" text-anchor="middle">losange</text>
              <text class="tick-label" x="395" y="172" text-anchor="middle">en plus perpendiculaires</text>
            </svg>
          `,
          notes: [
            'Les trois ont leurs diagonales qui se coupent en leur <strong>milieu</strong> : c\'est la propriété du parallélogramme.',
            'Diagonales <strong>de même longueur</strong> $\\Rightarrow$ rectangle.',
            'Diagonales <strong>perpendiculaires</strong> $\\Rightarrow$ losange. Les deux à la fois $\\Rightarrow$ carré.'
          ],
          reading: 'Mesure les deux diagonales de chaque figure, puis vérifie leur croisement à l\'équerre. Ces deux gestes suffisent à distinguer les trois quadrilatères, sans mesurer un seul côté.',
          caption: 'Diagonales : milieu commun partout, égales dans le rectangle, perpendiculaires dans le losange.'
        }
      ],
      method: {
        title: 'Méthode : identifier et utiliser les propriétés',
        steps: [
          '<strong>Parallélogramme</strong> : côtés opposés parallèles ET égaux ; diagonales qui se coupent en leur milieu.',
          '<strong>Rectangle</strong> : parallélogramme avec 4 angles droits ; diagonales égales.',
          '<strong>Losange</strong> : parallélogramme avec 4 côtés égaux ; diagonales perpendiculaires.',
          '<strong>Carré</strong> : rectangle ET losange (4 angles droits + 4 côtés égaux).'
        ]
      },
      formulas: [
        'Parallélogramme $ABCD$ : $\\vec{AB} = \\vec{DC}$ (vecteurs égaux)',
        'Diagonales d\'un parallélogramme : milieu de $[AC]$ = milieu de $[BD]$',
        'Aire du parallélogramme : $\\mathcal{A} = b \\times h$ (base $\\times$ hauteur)',
        'Aire du losange : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$ (demi-produit des diagonales)'
      ],
      recap: [
        'Les diagonales d\'un parallélogramme se coupent en leur milieu.',
        'Rectangle = parallélogramme + angles droits. Losange = parallélogramme + côtés égaux.',
        'Carré = rectangle + losange.',
        'Aire du losange : $\\dfrac{d_1 \\times d_2}{2}$.'
      ],
      piege: 'Piège : un rectangle est TOUJOURS un parallélogramme, mais un parallélogramme n\'est pas forcément un rectangle. Hiérarchie : carré ⊂ rectangle ⊂ parallélogramme et carré ⊂ losange ⊂ parallélogramme.'
    },

    quiz: [
      {
        q: 'Dans un parallélogramme $ABCD$, les diagonales $[AC]$ et $[BD]$ :',
        options: [
          'Se coupent à angle droit',
          'Sont égales',
          'Se coupent en leur milieu commun',
          'Ne se coupent pas'
        ],
        answer: 2,
        correction: 'Les diagonales d\'un parallélogramme se coupent en leur milieu. Ce n\'est qu\'en plus pour un rectangle qu\'elles sont égales, et pour un losange qu\'elles sont perpendiculaires.'
      },
      {
        q: 'Un losange a ses diagonales mesurant $6$ cm et $8$ cm. Quelle est son aire ?',
        options: ['$48$ cm²', '$24$ cm²', '$14$ cm²', '$12$ cm²'],
        answer: 1,
        correction: '$\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{6 \\times 8}{2} = 24$ cm².'
      },
      {
        q: 'Un élève dit : « Si $ABCD$ est un parallélogramme et que $AB = BC$, alors c\'est forcément un carré ». Est-ce vrai ?',
        options: [
          'Oui : côtés opposés égaux + côtés adjacents égaux → tous les côtés égaux → carré.',
          'Non : si tous les côtés sont égaux, c\'est un losange, pas forcément un carré. Il faudrait aussi un angle droit.',
          'Oui, car un parallélogramme avec un côté supplémentaire égal est toujours un carré.',
          'Non, ça dépend du nombre de côtés égaux.'
        ],
        answer: 1,
        correction: 'Si dans un parallélogramme $AB = BC$, alors tous les côtés sont égaux → c\'est un <em>losange</em>. Pour que ce soit un carré, il faudrait en plus un angle droit.'
      }
    ],

    /* ELARGISSEMENT DU 2026-09-13 (chapitre pilote de cinquieme).

       ETAT DE DEPART MESURE : le generateur ne rendait QUE des aires de
       losange a partir des deux diagonales, soit 4 moules (un par contexte) et
       12 enonces tires — donc AUCUNE banque supplementaire pour le professeur,
       la banque etant ce qui reste apres les 12 exercices numerotes du corps du
       chapitre.

       Surtout, l'evaluation du chapitre teste CINQ choses (aire du losange,
       aire du parallelogramme par base x hauteur, propriete des diagonales,
       hierarchie des quadrilateres, demi-diagonale d'un rectangle) quand les
       exercices n'en travaillaient QU'UNE. Les remediations de la fiche
       professeur n'avaient donc nulle part ou renvoyer, et le cahier des
       charges interdit de combler un tel trou par un renvoi approximatif :
       c'est le generateur qu'il faut elargir, pas le renvoi qu'il faut forcer.

       On ajoute donc deux taches qui manquaient, chacune choisie pour repondre
       a une erreur frequente reelle et non pour faire du chiffre :
         - l'aire du parallelogramme par base x hauteur, ou l'eleve prend le
           cote oblique pour la hauteur ;
         - la demi-diagonale d'un rectangle, ou l'eleve oublie que le point
           d'intersection des diagonales en est le MILIEU. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['losange', 'parallelogramme', 'demiDiagonale']);

        if (tache === 'parallelogramme') {
          const ctx = pick([
            { shape: 'panneau de chantier incliné', emoji: '🚧' },
            { shape: 'cerf-volant tendu en parallélogramme', emoji: '🪁' },
            { shape: 'store à lames obliques', emoji: '🪟' },
            { shape: 'motif de carrelage en biais', emoji: '🧱' }
          ]);
          const base = rand(4, 12);
          const h = rand(3, 9);
          return {
            statement: `${ctx.emoji} Un ${ctx.shape} a une base de $${base}$ cm et une hauteur de $${h}$ cm.<br/>Calcule son aire en cm².`,
            /* La figure trace la hauteur en trait de construction et NE COTE
               PAS le cote oblique : c'est precisement le trait que l'eleve
               confond avec la hauteur, le chiffrer l'inviterait a s'en servir. */
            figure: figureParallelogramme(base, h),
            answer: base * h,
            tolerance: 0,
            unit: 'cm²',
            hint: `Aire d'un parallélogramme : $\\mathcal{A} = b \\times h$.<br/><br/>La hauteur est le trait <strong>perpendiculaire</strong> à la base, jamais le côté oblique.`,
            solution: [
              `L'aire d'un parallélogramme est le produit de la base par la hauteur.`,
              `Formule : $\\mathcal{A} = b \\times h$`,
              `$\\mathcal{A} = ${base} \\times ${h} = ${fr(base * h)}$ cm²`
            ]
          };
        }

        if (tache === 'demiDiagonale') {
          const ctx = pick([
            { shape: 'écran rectangulaire', emoji: '🖥️' },
            { shape: 'porte rectangulaire', emoji: '🚪' },
            { shape: 'cadre photo rectangulaire', emoji: '🖼️' },
            { shape: 'terrain rectangulaire', emoji: '🏟️' }
          ]);
          /* Diagonale PAIRE, pour que la demi-diagonale reste entiere : le
             chapitre porte sur les proprietes des quadrilateres, pas sur la
             division decimale, et un reste compliquerait l'enonce sans rien
             apprendre de plus sur le milieu des diagonales. */
          const diag = 2 * rand(3, 12);
          return {
            statement: `${ctx.emoji} Les diagonales d'un ${ctx.shape} mesurent $${diag}$ cm et se coupent en $O$.<br/>Quelle est la longueur $OA$, de $O$ jusqu'à un sommet, en cm ?`,
            answer: diag / 2,
            tolerance: 0,
            unit: 'cm',
            hint: `Dans un rectangle, les diagonales se coupent en leur <strong>milieu</strong>.<br/><br/>$O$ est donc le milieu de chaque diagonale.`,
            solution: [
              `Les diagonales d'un rectangle se coupent en leur milieu.`,
              `$OA = \\dfrac{${diag}}{2} = ${fr(diag / 2)}$ cm`
            ]
          };
        }

        const ctx = pick([
          { shape: 'carreau de mosaïque', emoji: '🔷' },
          { shape: 'logo en forme de losange', emoji: '💎' },
          { shape: 'panneau routier losange', emoji: '🔶' },
          { shape: 'vitrail en losange', emoji: '🪟' }
        ]);
        const d1 = rand(3, 12);
        const d2 = rand(3, 12);
        const aire = (d1 * d2) / 2;
        return {
          statement: `${ctx.emoji} Un ${ctx.shape} a des diagonales mesurant $${d1}$ cm et $${d2}$ cm.<br/>Calcule son aire en cm².`,
          /* Les deux diagonales sont dessinees A L'INTERIEUR du quadrilatere et
             cotees, les cotes ne le sont pas : l'erreur du chapitre est de
             prendre les nombres de l'enonce pour des cotes et de multiplier
             cote par cote. */
          figure: figureLosange(d1, d2),
          answer: aire,
          tolerance: 0,
          unit: 'cm²',
          hint: `Aire d'un losange : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{${d1} \\times ${d2}}{2}$.`,
          solution: [
            `L'aire d'un losange est le demi-produit de ses diagonales.`,
            `Formule : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$`,
            `$\\mathcal{A} = \\dfrac{${d1} \\times ${d2}}{2} = \\dfrac{${d1 * d2}}{2} = ${fr(aire)}$ cm²`
          ]
        };
      }
    },

    probleme: {
      context: 'Un carreleur pose du carrelage en forme de losange dans un couloir. Chaque losange a ses diagonales mesurant $20$ cm et $30$ cm. Le couloir a une superficie de $6$ m².',
      tasks: [
        'Calcule l\'aire d\'un carreau losange en cm².',
        'Convertis cette aire en m².',
        'Combien de carreaux faut-il pour couvrir le couloir (sans tenir compte des chutes) ?'
      ],
      solutions: [
        '$\\mathcal{A} = \\dfrac{20 \\times 30}{2} = 300$ cm².',
        '$300$ cm² $= 0{,}03$ m² (car $1$ m² $= 10\\,000$ cm²).',
        '$6 \\div 0{,}03 = 200$ carreaux.'
      ],
      finalAnswer: 'Il faut $200$ carreaux losange pour couvrir le couloir.'
    },

    evaluation: {
      title: 'Évaluation — Parallélogrammes et propriétés',
      duration: '25 min',
      questions: [
        {
          statement: 'Un losange a des diagonales de $10$ cm et $14$ cm. Quelle est son aire en cm² ?',
          type: 'numeric',
          answer: 70,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{10 \\times 14}{2} = \\dfrac{140}{2} = 70$ cm².'
        },
        /* QUESTION REECRITE LE 2026-09-13.

           Elle demandait l'aire d'un parallelogramme dont la base et la hauteur
           etaient toutes deux donnees : l'application la plus directe possible
           de la formule, et un DEUXIEME calcul d'aire sur cinq questions apres
           celui du losange en Q1. Sur l'ouvrage entier, « calculer » pesait
           38,6 % des soixante-dix questions, au-dela du plafond de 35 %.

           Surtout, cette question ne testait PAS l'erreur du chapitre : en
           donnant explicitement la hauteur, elle escamotait le choix entre
           hauteur et cote oblique, qui est toute la difficulte.

           La nouvelle question est un PROBLEME INVERSE : l'aire est donnee, la
           hauteur est cherchee. Elle exige de comprendre la formule plutot que
           de l'appliquer, et le cote oblique y figure comme donnee inutile —
           l'eleve doit donc trier ce qui sert. C'est « chercher ». */
        {
          statement: 'Un parallélogramme a une base de $9$ cm, un côté oblique de $7$ cm et une aire de $54$ cm². Quelle est sa hauteur, en cm ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'L\'aire d\'un parallélogramme vaut $\\mathcal{A} = b \\times h$. ' +
            'On connaît l\'aire et la base, donc la hauteur s\'obtient en <strong>divisant</strong> : ' +
            '$h = \\dfrac{54}{9} = 6$ cm. ' +
            'Le côté oblique de $7$ cm ne sert à rien ici : c\'est une donnée inutile, placée là exprès. ' +
            'Remarque utile pour vérifier : la hauteur trouvée ($6$ cm) est bien plus petite que le côté ' +
            'oblique ($7$ cm), comme elle doit toujours l\'être.'
        },
        {
          statement: 'Les diagonales d\'un parallélogramme :',
          type: 'multiple-choice',
          options: [
            'Sont toujours perpendiculaires.',
            'Sont toujours de même longueur.',
            'Se coupent toujours en leur milieu.',
            'Ne se coupent jamais.'
          ],
          answer: 2,
          points: 2,
          correction: 'Les diagonales d\'un parallélogramme se coupent en leur milieu. Elles ne sont perpendiculaires que pour un losange, et de même longueur que pour un rectangle.'
        },
        {
          statement: 'Parmi ces affirmations, laquelle est vraie ?',
          type: 'multiple-choice',
          options: [
            'Tout losange est un rectangle.',
            'Tout rectangle est un carré.',
            'Tout carré est un losange.',
            'Tout parallélogramme est un rectangle.'
          ],
          answer: 2,
          points: 2,
          correction: 'Un carré a $4$ côtés égaux et $4$ angles droits. Puisqu\'il a $4$ côtés égaux, c\'est un losange.'
        },
        /* QUESTION REECRITE LE 2026-09-13 (chapitre pilote de cinquieme).

           Elle demandait la longueur $OA$ a partir d'une diagonale de 12 cm,
           soit une division par deux. Deux raisons de la reecrire, et aucune
           n'est un caprice de forme.

           1. La grille de suivi photocopiable imprime les SIX colonnes du
              referentiel. Avec l'ancienne question, ce chapitre declarait trois
              « calculer » sur cinq questions et n'evaluait jamais
              « communiquer » — la colonne serait restee vide toute l'annee.
              C'est le defaut corrige sur la sixieme, ou il avait fallu
              reecrire onze enonces : on ne renomme pas une etiquette, on change
              ce que la question demande vraiment de faire.

           2. Depuis l'elargissement du generateur, la demi-diagonale est
              devenue une tache d'EXERCICE du chapitre. La garder aussi en
              evaluation en faisait un doublon exact du travail deja fait, et
              privait surtout la remediation correspondante de son renvoi :
              une remediation ne renvoie jamais au devoir note.

           La question porte donc desormais sur le raisonnement d'un camarade,
           qu'il faut juger et corriger. La reponse attendue nomme l'erreur (le
           cote oblique pris pour la hauteur), ce qui mobilise reellement
           « communiquer ». Le distracteur 2 est le piege symetrique : il
           approuve le calcul en se trompant de justification. */
        {
          statement: 'Lisa calcule l\'aire d\'un parallélogramme dont la base mesure $8$ cm, la hauteur $5$ cm et le côté oblique $6$ cm. Elle écrit : « $\\mathcal{A} = 8 \\times 6 = 48$ cm², parce qu\'il faut multiplier les deux côtés. » Que lui répondrais-tu ?',
          type: 'multiple-choice',
          options: [
            'Son calcul est juste : dans un parallélogramme, on multiplie bien les deux côtés.',
            'Son résultat est faux : il faut la <strong>hauteur</strong> ($5$ cm), pas le côté oblique, donc $\\mathcal{A} = 8 \\times 5 = 40$ cm².',
            'Son résultat est faux : il fallait diviser par $2$, donc $\\mathcal{A} = 24$ cm².',
            'On ne peut pas répondre sans connaître la longueur des diagonales.'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'aire d\'un parallélogramme est $\\mathcal{A} = b \\times h$, où $h$ est la <strong>hauteur</strong>, ' +
            'c\'est-à-dire le trait perpendiculaire à la base. Lisa a utilisé le côté oblique ($6$ cm) à la place de la ' +
            'hauteur ($5$ cm). Le côté oblique étant toujours plus long que la hauteur, son aire est trop grande : ' +
            'la bonne réponse est $\\mathcal{A} = 8 \\times 5 = 40$ cm². Le $\\div 2$ de la réponse 3 est celui du losange ' +
            'à partir de ses diagonales, une autre formule pour une autre donnée.'
        }
      ]
    }
  });
