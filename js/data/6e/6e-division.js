/* =========================================================
   Spark Learning – data/6e/6e-division.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-division',
    level: 1, subject: 'maths',
    icon: '➗',
    title: 'Division euclidienne et décimale',
    subtitle: 'Quotient, reste, division posée',
    keywords: ['Division', 'Quotient', 'Reste', 'Dividende', 'Diviseur', 'Décimale'],
    physics: false,

    cours: {
      /* « Decouvrir » reecrit le 2026-09-13. L'ancienne intro posait deja une
         question, mais une question de cours. Entree retenue : le partage a
         reste (17 billes entre 5 joueurs). Le reste n'est pas un detail
         technique, c'est le probleme concret — que fait-on de ce qui reste ?
         Il appelle la division euclidienne, puis la division decimale quand on
         remplace les billes par un liquide, qui lui se partage. */
      intro: 'Dix-sept billes à partager équitablement entre cinq joueurs. Chacun en reçoit trois, et il en reste deux sur la table. Que fait-on de ces deux billes ?<br/><br/>' +
        'On ne peut pas les couper : une demi-bille ne se joue pas. Le partage s\'arrête donc là, et le résultat honnête comporte deux nombres, pas un seul — trois billes chacun, et deux qui restent.<br/><br/>' +
        'C\'est ce que dit la <strong>division euclidienne</strong>, qui répond à la question « combien de fois $5$ tient-il dans $17$ ? » en donnant un quotient entier et un reste. On l\'écrit $17 = 5 \\times 3 + 2$, et plus généralement $a = b \\times q + r$ avec $0 \\leq r < b$. Le reste est toujours plus petit que le diviseur : sinon, on pourrait encore distribuer un tour.<br/><br/>' +
        'Reprends maintenant la même situation avec $17$ litres de jus au lieu des billes. Le jus, lui, se partage : rien n\'oblige à s\'arrêter à un reste. En prolongeant le calcul au-delà de la virgule, la <strong>division décimale</strong> donne $3{,}4$ litres par personne, sans rien laisser sur la table.<br/><br/>' +
        '<strong>Une mise en garde pour finir :</strong> contrairement à l\'addition, la division n\'est <strong>pas commutative</strong>. Partager $12$ entre $4$ n\'a rien à voir avec partager $4$ entre $12$ : $12 \\div 4 \\neq 4 \\div 12$.',

      definitions: [
        { term: 'Dividende', def: 'Le nombre que l\'on divise. Dans $a \\div b$, $a$ est le dividende.' },
        { term: 'Diviseur', def: 'Le nombre par lequel on divise. Dans $a \\div b$, $b$ est le diviseur.' },
        { term: 'Quotient', def: 'Résultat de la division. En division euclidienne, c\'est un entier.' },
        { term: 'Reste', def: 'Ce qui reste après la division euclidienne. Il vérifie $0 \\leq r < b$.' }
      ],
      method: {
        title: 'Méthode en 6 étapes',
        steps: [
          '<strong>Identifier</strong> le dividende et le diviseur.',
          '<strong>Chercher</strong> combien de fois le diviseur « tient » dans les premiers chiffres. <em>Exemple :</em> $87 \\div 5$ → $5$ tient $17$ fois dans $87$.',
          '<strong>Multiplier et soustraire</strong> pour trouver le reste partiel.',
          '<strong>Abaisser</strong> le chiffre suivant et recommencer.',
          '<strong>Vérifier</strong> : $b \\times q + r = a$. <em>Exemple :</em> $5 \\times 17 + 2 = 87$ ✓',
          '<strong>Prolonger après la virgule</strong> (division décimale) : si le reste n\'est pas nul et que la grandeur se partage (longueur, litres, euros), on pose une virgule au quotient, on abaisse un $0$ et on continue.<br/><br/><em>Exemple :</em> $17 \\div 5$ → $5$ tient $3$ fois, reste $2$ ; on écrit la virgule, on abaisse un $0$ : $20 \\div 5 = 4$. D\'où <strong>$17 \\div 5 = 3{,}4$</strong>.'
        ]
      },
      example: {
        statement: 'Effectuer la division euclidienne de $157$ par $12$.',
        steps: [
          '$12 \\times 13 = 156$ (le plus grand multiple de $12$ inférieur ou égal à $157$).',
          'Reste : $157 - 156 = 1$.',
          'Donc $157 = 12 \\times 13 + 1$.',
          'Vérification : $12 \\times 13 + 1 = 156 + 1 = 157$ ✓'
        ],
        answer: 'Quotient $= 13$, reste $= 1$.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Division euclidienne',
        title: 'Poser une division « en potence »',
        description: 'Sur l\'exemple du cours, $157 = 12 \\times 13 + 1$ : le quotient et le reste s\'obtiennent en descendant les chiffres du dividende un à un.',
        svg: `
          <svg viewBox="0 0 360 280" role="img" aria-labelledby="division-graph-title division-graph-desc">
            <title id="division-graph-title">Division posee de 157 par 12</title>
            <desc id="division-graph-desc">Le schema montre la division posee en potence de 157 par 12, avec les etapes de soustraction menant au quotient 13 et au reste 1.</desc>
            <text class="tick-label" x="42" y="30">Dividende</text>
            <text class="tick-label" x="138" y="30">Diviseur</text>
            <text class="annotation-label" x="50" y="70">1</text>
            <text class="annotation-label" x="75" y="70">5</text>
            <text class="annotation-label" x="100" y="70">7</text>
            <line class="frame-line" x1="125" y1="45" x2="125" y2="230"></line>
            <text class="annotation-label" x="145" y="70">12</text>
            <line class="frame-line" x1="138" y1="85" x2="210" y2="85"></line>
            <rect x="138" y="95" width="60" height="35" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
            <text class="annotation-label" x="155" y="118">13</text>
            <text class="annotation-label" x="30" y="110">-</text>
            <text class="annotation-label" x="50" y="110">1</text>
            <text class="annotation-label" x="75" y="110">2</text>
            <line class="frame-line" x1="35" y1="122" x2="100" y2="122"></line>
            <text class="annotation-label" x="75" y="150">3</text>
            <text class="annotation-label" x="100" y="150">7</text>
            <text class="annotation-label" x="55" y="185">-</text>
            <text class="annotation-label" x="75" y="185">3</text>
            <text class="annotation-label" x="100" y="185">6</text>
            <line class="frame-line" x1="60" y1="197" x2="115" y2="197"></line>
            <rect x="88" y="204" width="32" height="28" rx="8" fill="color-mix(in srgb, var(--accent) 16%, var(--bg-card))" stroke="color-mix(in srgb, var(--accent) 36%, var(--border))"></rect>
            <text class="annotation-label" x="98" y="224">1</text>
            <rect x="30" y="244" width="300" height="28" rx="10" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="annotation-label" x="42" y="263">Vérification : 12 × 13 + 1 = 157</text>
          </svg>
        `,
        notes: [
          '$12$ ne « tient » pas dans $1$, donc on regarde les deux premiers chiffres : $12$ tient une fois dans $15$ ($1 \\times 12 = 12$), reste $3$.',
          'On abaisse le chiffre suivant, le $7$ : on obtient $37$.',
          '$12$ tient trois fois dans $37$ ($3 \\times 12 = 36$), reste $37 - 36 = 1$.',
          'Il n\'y a plus de chiffre à abaisser : le reste final est $1$, et $1 < 12$ comme l\'exige la division euclidienne.'
        ],
        reading: 'Le quotient se construit chiffre par chiffre au-dessus de la barre, dans le même ordre que les chiffres abaissés du dividende.',
        caption: 'Division posée de $157$ par $12$ : quotient $13$, reste $1$, vérifiée par $12 \\times 13 + 1 = 157$.'
      },
      /* Schemas secondaires (2026-09-12). La figure principale montre la
         division POSEE, c'est-a-dire la technique. Elle ne dit pas ce que la
         division SIGNIFIE (un partage qui laisse un reste), ni pourquoi le
         reste doit rester plus petit que le diviseur — la condition que les
         eleves oublient le plus souvent, et qui est pourtant celle qui rend le
         quotient unique. On ajoute donc le sens avant la technique. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Ce que veut dire diviser',
          title: 'Partager $17$ objets en groupes de $5$',
          description: 'La division euclidienne, c\'est faire des <strong>paquets égaux</strong> et regarder ce qui ne rentre dans aucun paquet : $17 = 5 \\times 3 + 2$.',
          svg: `
            <svg viewBox="0 0 400 168" role="img" aria-labelledby="division-partage-title division-partage-desc">
              <title id="division-partage-title">Dix-sept jetons repartis en trois groupes de cinq avec un reste de deux</title>
              <desc id="division-partage-desc">Dix-sept jetons sont ranges de gauche a droite. Les quinze premiers sont regroupes dans trois paquets encadres de cinq jetons chacun, ce qui correspond au quotient trois. Les deux jetons restants sont poses a part, en dehors des paquets : ils forment le reste, qui vaut deux. On lit ainsi l'egalite dix-sept egale cinq fois trois plus deux. Le reste vaut deux et il est bien plus petit que cinq, sinon on pourrait former un paquet de plus.</desc>

              <text class="tick-label" x="200" y="16" text-anchor="middle">17 jetons à ranger par paquets de 5</text>

              <!-- TROIS PAQUETS COMPLETS. Chaque paquet est un cadre : le
                   groupement doit etre une FORME fermee, pas seulement un
                   espacement, sinon l'oeil ne separe pas les paquets du reste. -->
              <rect x="18" y="34" width="104" height="46" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 32%, var(--border))"></rect>
              <circle cx="34" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="53" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="72" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="91" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="110" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>

              <rect x="132" y="34" width="104" height="46" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 32%, var(--border))"></rect>
              <circle cx="148" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="167" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="186" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="205" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="224" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>

              <rect x="246" y="34" width="104" height="46" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 32%, var(--border))"></rect>
              <circle cx="262" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="281" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="300" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="319" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="338" cy="57" r="7" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>

              <text class="tick-label" x="184" y="98" text-anchor="middle">3 paquets de 5 : le quotient est 3</text>

              <!-- LE RESTE, hors des cadres et en trait tirete : il n'appartient
                   a aucun paquet, le dessin doit le dire avant le texte. -->
              <rect x="18" y="112" width="66" height="40" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 6%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))" stroke-dasharray="5 4"></rect>
              <circle cx="38" cy="132" r="7" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 60%, var(--border))"></circle>
              <circle cx="64" cy="132" r="7" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 60%, var(--border))"></circle>
              <text class="tick-label" x="94" y="128">il reste 2 jetons :</text>
              <text class="tick-label" x="94" y="146">pas assez pour un paquet de 5</text>

              <text class="annotation-label" x="256" y="140">17 = 5 × 3 + 2</text>
            </svg>
          `,
          notes: [
            'Le <strong>diviseur</strong> $5$ est la taille d\'un paquet ; le <strong>quotient</strong> $3$ est le nombre de paquets complets.',
            'Le <strong>reste</strong> $2$ est ce qui ne suffit pas à faire un paquet de plus.',
            'D\'où l\'égalité fondamentale $a = b \\times q + r$, ici $17 = 5 \\times 3 + 2$.'
          ],
          reading: 'Le quotient répond à « combien de paquets entiers ? » et le reste à « combien en trop ? ». Si tu peux encore former un paquet avec le reste, c\'est que le quotient n\'est pas fini.',
          caption: 'Division euclidienne de $17$ par $5$ : $3$ paquets complets et un reste de $2$.'
        },
        {
          theme: 'maths',
          kicker: 'La condition oubliée',
          title: 'Pourquoi le reste est toujours plus petit que le diviseur',
          description: 'La condition $0 \\leqslant r < b$ n\'est pas un détail de cours : si le reste atteint le diviseur, c\'est qu\'un paquet a été oublié et que le quotient est faux.',
          svg: `
            <svg viewBox="0 0 400 176" role="img" aria-labelledby="division-reste-title division-reste-desc">
              <title id="division-reste-title">Un reste trop grand signale un quotient incomplet</title>
              <desc id="division-reste-desc">Deux ecritures de dix-sept sont comparees. En haut, l'ecriture correcte : cinq fois trois plus deux, avec un reste de deux qui est bien inferieur au diviseur cinq. En bas, une ecriture incorrecte : cinq fois deux plus sept, ou le reste sept est superieur au diviseur cinq. Le dessin montre que dans ce second cas les sept jetons restants permettent encore de former un paquet complet de cinq, donc le quotient deux est trop petit. Seule la premiere ecriture est une division euclidienne valide.</desc>

              <!-- CORRECT en haut, FAUX en dessous : meme parti pris que la
                   figure « piege » du chapitre perimetres-aires, la bonne forme
                   se lit la premiere et reste en memoire. -->
              <text class="annotation-label" x="16" y="22">17 = 5 × 3 + 2</text>
              <text class="tick-label" x="150" y="22">reste 2 &lt; 5 : correct</text>
              <rect x="16" y="32" width="52" height="30" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 16%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 32%, var(--border))"></rect>
              <circle cx="24" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="33" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="42" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="51" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="60" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <rect x="74" y="32" width="52" height="30" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 16%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 32%, var(--border))"></rect>
              <circle cx="82" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="91" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="100" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="109" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="118" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <rect x="132" y="32" width="52" height="30" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 16%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 32%, var(--border))"></rect>
              <circle cx="140" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="149" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="158" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="167" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="176" cy="47" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="200" cy="47" r="6" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 60%, var(--border))"></circle>
              <circle cx="216" cy="47" r="6" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 60%, var(--border))"></circle>
              <text class="tick-label" x="232" y="51">reste</text>

              <line class="guide-line" x1="16" y1="82" x2="384" y2="82"></line>

              <text class="tick-label" x="16" y="106">17 = 5 × 2 + 7</text>
              <text class="label-soft" x="150" y="106">reste 7 &gt; 5 : le quotient est trop petit</text>
              <rect x="16" y="116" width="52" height="30" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))"></rect>
              <circle cx="24" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="33" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="42" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="51" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="60" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <rect x="74" y="116" width="52" height="30" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))"></rect>
              <circle cx="82" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="91" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="100" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="109" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="118" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <!-- Le paquet qu'on aurait encore pu former, en tirets : c'est
                   l'argument de la figure, il doit etre visible comme un
                   manque, pas comme un objet de plus. -->
              <!-- 2026-09-12 : le cadre en tirets etait VIDE et la ligne basse
                   ne portait que 12 jetons (2 paquets de 5 + 2 isoles), alors
                   que son ecriture annonce 17 = 5 x 2 + 7. Il manquait donc 5
                   jetons, et le reste DESSINE valait 2 au lieu des 7 annonces —
                   exactement le reste de la ligne du haut. La figure ne pouvait
                   pas soutenir son propre argument : un eleve qui COMPTE les
                   jetons ne voyait aucun reste trop grand, et le paquet
                   « encore formable » n'avait rien a contenir. Les 5 jetons
                   manquants sont replaces dans le cadre en tirets, aux memes
                   abscisses relatives que dans les paquets pleins (offsets 8,
                   17, 26, 35, 44) : la ligne porte alors 10 + 5 + 2 = 17 jetons
                   et le reste visible vaut bien 5 + 2 = 7 > 5. L'etiquette
                   descend sous le cadre, qui n'est plus vide. -->
              <rect x="132" y="116" width="52" height="30" rx="6" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 34%, var(--border))" stroke-dasharray="5 4"></rect>
              <circle cx="140" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="149" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="158" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="167" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="176" cy="131" r="4" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <text class="label-soft" x="158" y="158" text-anchor="middle">encore un paquet</text>
              <circle cx="200" cy="131" r="6" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 60%, var(--border))"></circle>
              <circle cx="216" cy="131" r="6" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 60%, var(--border))"></circle>
              <text class="tick-label" x="232" y="135">reste</text>

              <text class="label-soft" x="200" y="168" text-anchor="middle">tant que le reste atteint le diviseur, on peut encore former un paquet</text>
            </svg>
          `,
          notes: [
            'Une division euclidienne n\'est correcte que si $0 \\leqslant r < b$ : ici $r = 2$ et $b = 5$, la condition est vérifiée.',
            'L\'écriture $17 = 5 \\times 2 + 7$ est <strong>vraie comme égalité</strong> mais ce n\'est pas une division euclidienne : le reste $7$ dépasse le diviseur $5$.',
            'C\'est cette condition qui rend le quotient et le reste <strong>uniques</strong> : sans elle, on pourrait écrire $17$ d\'une infinité de façons.'
          ],
          reading: 'Après chaque division, compare le reste au diviseur. Si le reste est plus grand ou égal, augmente le quotient de $1$ et recommence : il restait un paquet à faire.',
          caption: 'La condition $r < b$ : un reste trop grand signale un quotient incomplet.'
        },
        {
          theme: 'maths',
          kicker: 'Un ordre qui compte',
          title: 'La division n\'est pas commutative',
          description: 'On peut échanger les deux nombres d\'une addition ou d\'une multiplication sans rien changer. Avec une division, <strong>c\'est faux</strong> : $12 \\div 4$ et $4 \\div 12$ ne décrivent pas la même situation.',
          svg: `
            <svg viewBox="0 0 400 158" role="img" aria-labelledby="division-ordre-title division-ordre-desc">
              <title id="division-ordre-title">Comparaison de douze divise par quatre et de quatre divise par douze</title>
              <desc id="division-ordre-desc">A gauche, douze jetons repartis en quatre paquets de trois : douze divise par quatre donne trois. A droite, quatre jetons que l'on cherche a repartir en douze paquets : chaque paquet ne recoit qu'un tiers de jeton, donc quatre divise par douze donne un tiers, un nombre inferieur a un. Les deux resultats sont completement differents, ce qui montre que l'ordre des nombres dans une division ne peut pas etre echange.</desc>

              <text class="annotation-label" x="100" y="20" text-anchor="middle">12 ÷ 4 = 3</text>
              <text class="annotation-label" x="300" y="20" text-anchor="middle">4 ÷ 12 = 0,333…</text>

              <!-- 12 jetons en 4 paquets de 3. -->
              <rect x="24" y="36" width="34" height="66" rx="7" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
              <circle cx="41" cy="52" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="41" cy="69" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="41" cy="86" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <rect x="66" y="36" width="34" height="66" rx="7" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
              <circle cx="83" cy="52" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="83" cy="69" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="83" cy="86" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <rect x="108" y="36" width="34" height="66" rx="7" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
              <circle cx="125" cy="52" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="125" cy="69" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="125" cy="86" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <rect x="150" y="36" width="34" height="66" rx="7" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
              <circle cx="167" cy="52" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="167" cy="69" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="167" cy="86" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <text class="tick-label" x="104" y="120" text-anchor="middle">4 paquets, 3 jetons chacun</text>

              <!-- 4 jetons pour 12 paquets : chaque paquet recoit moins d'un
                   jeton. On dessine un seul jeton decoupe en trois, plutot que
                   douze paquets vides : c'est le TIERS qui est le resultat. -->
              <circle cx="230" cy="56" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="252" cy="56" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="274" cy="56" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <circle cx="296" cy="56" r="6" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="color-mix(in srgb, var(--diagram-accent) 75%, var(--border))"></circle>
              <text class="tick-label" x="316" y="60">4 jetons</text>
              <text class="tick-label" x="222" y="82">à partager entre 12 parts :</text>
              <rect x="224" y="90" width="13" height="16" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 28%, var(--border))"></rect>
              <rect x="237" y="90" width="13" height="16" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 28%, var(--border))"></rect>
              <rect x="250" y="90" width="13" height="16" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 28%, var(--border))"></rect>
              <rect x="263" y="90" width="13" height="16" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 28%, var(--border))"></rect>
              <rect x="276" y="90" width="13" height="16" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 28%, var(--border))"></rect>
              <rect x="289" y="90" width="13" height="16" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 28%, var(--border))"></rect>
              <rect x="302" y="90" width="13" height="16" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 28%, var(--border))"></rect>
              <rect x="315" y="90" width="13" height="16" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 28%, var(--border))"></rect>
              <rect x="328" y="90" width="13" height="16" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 28%, var(--border))"></rect>
              <rect x="341" y="90" width="13" height="16" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 28%, var(--border))"></rect>
              <rect x="354" y="90" width="13" height="16" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 28%, var(--border))"></rect>
              <rect x="367" y="90" width="13" height="16" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 28%, var(--border))"></rect>
              <text class="tick-label" x="224" y="122">une part agrandie :</text>
              <rect x="310" y="110" width="66" height="16" fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 40%, var(--border))"></rect>
              <rect x="310" y="110" width="22" height="16" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)" stroke="none"></rect>
              <text class="tick-label" x="321" y="138" text-anchor="middle">un tiers</text>

              <text class="label-soft" x="200" y="152" text-anchor="middle">changer les nombres de place change le résultat</text>
            </svg>
          `,
          notes: [
            '$12 \\div 4 = 3$ : on partage $12$ objets en $4$ parts, chaque part vaut $3$.',
            '$4 \\div 12 \\approx 0{,}33$ : on partage $4$ objets en $12$ parts, chaque part vaut moins d\'un objet.',
            'Contrairement à l\'addition ($3 + 5 = 5 + 3$) et à la multiplication ($3 \\times 5 = 5 \\times 3$), la division n\'est <strong>pas commutative</strong>.'
          ],
          reading: 'Retiens le sens de la phrase : « on partage le premier nombre en autant de parts que le second ». Si le résultat d\'une division est plus petit que $1$, c\'est que l\'on partageait un petit nombre entre beaucoup de parts.',
          caption: 'La division n\'est pas commutative : $12 \\div 4 = 3$ mais $4 \\div 12 \\approx 0{,}33$.'
        }
      ],
      formulas: [
        'Division euclidienne : $a = b \\times q + r$ avec $0 \\leq r < b$',
        'Vérification : $b \\times q + r = a$',
        'Division exacte : $r = 0 \\Rightarrow a = b \\times q$'
      ],
      recap: [
        'La division euclidienne de $a$ par $b$ donne : $a = b \\times q + r$ avec $0 \\leq r < b$.',
        'Pour vérifier, on recalcule $b \\times q + r$ et on vérifie qu\'on retrouve $a$.',
        'La division n\'est pas commutative : $a \\div b \\neq b \\div a$ en général.',
        'La division décimale prolonge le calcul en ajoutant des zéros au reste.'
      ],
      piege: 'Piège du reste trop grand : si ton reste est <strong>supérieur ou égal au diviseur</strong>, il restait un paquet à faire — augmente le quotient de $1$ et recommence. $17 = 5 \\times 2 + 7$ est vrai, mais ce n\'est pas une division euclidienne : $17 = 5 \\times 3 + 2$.<br/><br/>Et dans tous les cas, vérifie en multipliant : diviseur $\\times$ quotient $+$ reste $=$ dividende.'
    },

    quiz: [
      { q: 'Dans la division euclidienne de $87$ par $5$, quel est le reste ?', options: ['$2$', '$1$', '$3$', '$0$'], answer: 0, correction: '$87 = 5 \\times 17 + 2$. Le reste est $2$.' },
      { q: 'Combien vaut $13{,}5 \\div 4$ ?', options: ['$3{,}275$', '$3{,}375$', '$3{,}475$', '$3{,}125$'], answer: 1, correction: '$13{,}5 \\div 4 = 3{,}375$.' },
      { q: 'Un élève obtient quotient $= 8$ et reste $= 5$ pour $43 \\div 6$. Comment vérifier ?', options: ['$43 \\div 8$', '$6 + 8 + 5 = 19 \\neq 43$ → faux', '$43 - 6 = 37$', '$6 \\times 8 + 5 = 53 \\neq 43$ → faux'], answer: 3, correction: 'On vérifie toujours avec <strong>diviseur $\\times$ quotient $+$ reste</strong> : $6 \\times 8 + 5 = 53 \\neq 43$, donc le résultat est faux. Correct : $43 = 6 \\times 7 + 1$.<br/><br/>Additionner les trois nombres ($6 + 8 + 5$) ne vérifie rien, même si la conclusion tombe juste par hasard ; $43 \\div 8$ et $43 - 6$ ne font pas intervenir le quotient et le reste ensemble.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        // Quatre TACHES distinctes (2026-09-08) : avant, les huit scenarios
        // (gateau, bonbons, equipes...) demandaient tous le QUOTIENT ENTIER
        // d'une division euclidienne, si bien que le manuel imprimait trois
        // fois le meme partage. Le chapitre couvre aussi le reste, la
        // division decimale et la division par 10, 100, 1000.
        const variante = pick(['quotient', 'reste', 'decimale', 'parDixDix']);

        const scenario = pick([
          { emoji: '🍰', intro: 'On partage', objet: 'parts de gâteau', action: 'entre', groupeLabel: 'convives' },
          { emoji: '🍬', intro: 'On distribue', objet: 'bonbons', action: 'à', groupeLabel: 'enfants' },
          { emoji: '📚', intro: 'Le bibliothécaire range', objet: 'livres', action: 'sur', groupeLabel: 'étagères' },
          { emoji: '🧁', intro: 'Un pâtissier répartit', objet: 'cupcakes', action: 'dans', groupeLabel: 'boîtes' },
          { emoji: '🪴', intro: 'Un jardinier plante', objet: 'graines', action: 'en', groupeLabel: 'rangées égales' }
        ]);

        if (variante === 'quotient' || variante === 'reste') {
          const b = rand(2, 9);
          const q = rand(5, 20);
          // Reste non nul quand on interroge le reste : sinon la question
          // n'apprend rien (« il reste 0 »).
          const r = variante === 'reste' ? rand(1, b - 1) : rand(0, b - 1);
          const a = b * q + r;
          const debut = `${scenario.emoji} ${scenario.intro} $${a}$ ${scenario.objet} ${scenario.action} $${b}$ ${scenario.groupeLabel}`.trim();
          if (variante === 'quotient') {
            return {
              statement: `${debut}. Quel est le <strong>quotient entier</strong> ?`,
              answer: q,
              tolerance: 0,
              unit: '',
              hint: `Cherche combien de fois $${b}$ « tient » dans $${a}$. Essaie $${b} \\times ${q}$.`,
              solution: [
                `On cherche combien de fois $${b}$ tient dans $${a}$.`,
                `$${a} = ${b} \\times ${q} + ${r}$`,
                `Le quotient entier est $${q}$ et le reste est $${r}$.`
              ]
            };
          }
          return {
            statement: `${debut}. Combien en <strong>reste-t-il</strong> ?`,
            answer: r,
            tolerance: 0,
            unit: '',
            hint: `Trouve d'abord le quotient entier, multiplie-le par $${b}$, puis compare à $${a}$.`,
            solution: [
              `On cherche combien de fois $${b}$ tient dans $${a}$ : c'est $${q}$ fois.`,
              `$${b} \\times ${q} = ${b * q}$.`,
              `Il reste $${a} - ${b * q} = ${r}$.`,
              `Le reste est toujours plus petit que $${b}$ ✓`
            ]
          };
        }

        if (variante === 'decimale') {
          // Division qui « tombe juste » : quotient decimal exact, pour
          // distinguer division euclidienne et division decimale.
          const b = pick([2, 4, 5, 8]);
          const q = parseFloat((rand(11, 60) / 4).toFixed(2));
          const a = parseFloat((b * q).toFixed(2));
          return {
            statement: `${scenario.emoji} On partage équitablement $${fr(a)}$ € entre $${b}$ personnes. ` +
              `Combien reçoit chacune, en euros ?`,
            answer: q,
            tolerance: 0.01,
            unit: '€',
            hint: `Ici le partage tombe juste : poursuis la division après la virgule au lieu de t'arrêter à un reste.`,
            solution: [
              `On pose la division de $${fr(a)}$ par $${b}$.`,
              `Quand il reste quelque chose, on abaisse un zéro et on continue après la virgule.`,
              `Chacune reçoit $${fr(q)}$ €.`,
              `Vérification : $${fr(q)} \\times ${b} = ${fr(a)}$ ✓`
            ]
          };
        }

        // « parDixDix » : diviser par 10, 100, 1000 — la virgule se decale
        // vers la gauche. Erreur classique : « on enleve un zero ».
        const div = pick([10, 100, 1000]);
        const q = randFloat(1, 40, 2);
        const a = parseFloat((q * div).toFixed(2));
        const rangs = div === 10 ? 'un rang' : div === 100 ? 'deux rangs' : 'trois rangs';
        return {
          statement: `Calcule $${fr(a)} \\div ${div}$.`,
          answer: q,
          tolerance: 0.01,
          unit: '',
          hint: `Diviser par $${div}$ décale la virgule de ${rangs} vers la gauche.`,
          solution: [
            `Diviser par $${div}$, c'est décaler la virgule de ${rangs} vers la gauche.`,
            `$${fr(a)} \\div ${div} = ${fr(q)}$`,
            `Attention : « enlever un zéro » ne marche que pour les nombres entiers qui en ont un.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une école organise un voyage scolaire pour $157$ élèves. Chaque car peut transporter au maximum $45$ élèves.',
      tasks: [
        'Effectue la division euclidienne de $157$ par $45$.',
        'Combien de cars complets peut-on remplir ? Combien d\'élèves restent ?',
        'Combien de cars faut-il réserver au total pour que tous les élèves partent ?'
      ],
      solutions: [
        '$157 = 45 \\times 3 + 22$.',
        '$3$ cars complets, $22$ élèves restants.',
        '$3 + 1 = 4$ cars au total.'
      ],
      finalAnswer: 'Il faut réserver $4$ cars.'
    },

    evaluation: {
      title: 'Évaluation — Division',
      duration: '20 min',
      questions: [
        { statement: 'Effectue la division euclidienne de $97$ par $6$. Quel est le quotient entier ?', type: 'numeric', answer: 16, tolerance: 0, unit: '', points: 2, correction: '$97 = 6 \\times 16 + 1$. Quotient $= 16$.' },
        { statement: 'Quel est le reste de la division euclidienne de $97$ par $6$ ?', type: 'numeric', answer: 1, tolerance: 0, unit: '', points: 2, correction: '$97 = 6 \\times 16 + 1$. Reste $= 1$.' },
        // Competence « chercher » (2026-09-12). L'ancienne question etait un troisieme
        // calcul d'affilee ($17{,}5 \div 4$) dans une evaluation qui en comptait deja
        // deux. Elle demande desormais de TROUVER le plus petit nombre de boites qui
        // convient : l'eleve essaie, constate qu'une division exacte ne suffit pas et
        // ajoute une boite pour le reste. La demarche d'essais et l'interpretation du
        // reste sont exactement ce que « chercher » designe au referentiel.
        { statement: 'Un club range $17$ ballons dans des caisses qui en contiennent <strong>$4$ au maximum</strong>. Toutes les caisses doivent être utilisées au mieux, mais aucun ballon ne doit rester dehors.<br/><br/>Cherche le <strong>plus petit</strong> nombre de caisses possible.', type: 'numeric', answer: 5, tolerance: 0, unit: 'caisses', points: 2, correction: 'On essaie : avec $4$ caisses, on range au plus $4 \\times 4 = 16$ ballons — il en resterait un dehors.<br/><br/>La division euclidienne le dit d\'un coup : $17 = 4 \\times 4 + 1$. Le quotient $4$ donne les caisses pleines, et le <strong>reste $1$</strong> oblige à en ouvrir une de plus.<br/><br/>Il faut donc $4 + 1 = 5$ caisses. La dernière ne contiendra qu\'un seul ballon, et c\'est très bien ainsi : ici, le reste ne se jette pas, il s\'ajoute.' },
        { statement: 'Dans la formule $a = b \\times q + r$, que représente $r$ ?', type: 'multiple-choice', options: ['Le quotient', 'Le diviseur', 'Le reste', 'Le dividende'], answer: 2, points: 2, correction: '$r$ est le reste.' },
        { statement: 'On partage $250$ billes entre $8$ enfants. Combien chacun et combien de reste ?', type: 'multiple-choice', options: ['$31$ chacun, reste $2$', '$30$ chacun, reste $10$', '$32$ chacun, reste $0$', '$31$ chacun, reste $0$'], answer: 0, points: 2, correction: '$250 = 8 \\times 31 + 2$.' }
      ]
    }
  });
