/* =========================================================
   Spark Learning – data/3e/3e-fonctions.js
   Module : Fonctions – notions de base (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-fonctions',
    level: 1, subject: 'maths',
    icon: '📉',
    title: 'Fonctions – notions de base',
    subtitle: 'Image, antécédent, représentation graphique',
    keywords: ['Fonction', 'Image', 'Antécédent', 'Tableau de valeurs', 'Courbe'],
    physics: 'Lecture de graphiques physiques : évolution de la température, distance parcourue en fonction du temps',
    cours: {
      /* « Découvrir » réécrit le 2026-09-13.

         L'ancienne version ouvrait sur « Une fonction est une règle qui
         associe… », c'est-à-dire sur la DÉFINITION elle-même. Le test du
         cahier des charges (section 10) est sans appel : on pouvait lire
         l'ouverture sans jamais rencontrer de question.

         La nouvelle ouverture pose un problème de tarif où la SEULE réponse
         possible est « ça dépend de $x$ », c'est-à-dire où le résultat n'est
         pas un nombre mais une règle. Aucun calcul unique ne répond, et c'est
         exactement ce qui force l'idée de fonction : on ne cherche plus UNE
         valeur, on cherche le procédé qui les donne toutes.

         L'entrée choisie porte aussi la difficulté réelle du chapitre — la
         distinction image / antécédent — puisqu'elle fait circuler la
         question dans les deux sens : « combien pour 12 photos ? » (image)
         et « combien de photos pour 20 € ? » (antécédent). L'élève rencontre
         donc les deux lectures avant qu'on les nomme. */
      intro: 'Un photographe imprime tes photos. Il facture $5$ € de frais de dossier, puis $1$ € par photo tirée.<br/><br/>' +
        'Question simple : <strong>combien coûte ta commande ?</strong><br/><br/>' +
        'Impossible de répondre par un nombre. Pour $12$ photos, on paie $17$ € ; pour $30$ photos, $35$ € ; pour $100$ photos, $105$ €. Il n\'y a pas <em>un</em> prix, il y a un prix <strong>par nombre de photos</strong>.<br/><br/>' +
        'Ce qu\'on peut donner, en revanche, c\'est la <strong>règle</strong> : « prends le nombre de photos, ajoute $5$ ». Cette règle-là répond à toutes les commandes d\'un coup, y compris à celles qu\'on n\'a pas encore imaginées. C\'est ce que les mathématiques appellent une <strong>fonction</strong>, et on l\'écrit $f(x) = x + 5$.<br/><br/>' +
        'Remarque maintenant que la question se pose dans les <strong>deux sens</strong>. « Combien pour $12$ photos ? » part du nombre de photos et cherche le prix : le prix est l\'<strong>image</strong> de $12$. Mais « avec $20$ €, combien de photos puis-je faire tirer ? » part du prix et remonte vers le nombre de photos : on cherche alors un <strong>antécédent</strong> de $20$.<br/><br/>' +
        'Ces deux lectures sont les deux seules choses que ce chapitre demande de savoir faire — et les confondre est l\'erreur qui coûte le plus de points.<br/><br/>' +
        'Une <strong>fonction</strong> associe donc à chaque valeur d\'entrée $x$ une valeur de sortie $f(x)$, <strong>et une seule</strong> : une même commande ne peut pas avoir deux prix. L\'inverse, lui, est permis — deux entrées différentes peuvent très bien donner la même sortie.<br/><br/>' +
        'Graphiquement : l\'<strong>image</strong> se lit sur l\'axe vertical (ordonnée), l\'<strong>antécédent</strong> sur l\'axe horizontal (abscisse).<br/><br/>' +
        'En physique, toutes les formules ($v = d/t$, $U = RI$) sont des <strong>fonctions de variables</strong> — la notion est universelle.',
      definitions: [
        { term: 'Fonction', def: 'Règle qui associe à chaque valeur $x$ d\'un ensemble de départ <strong>une unique</strong> valeur $f(x)$ dans l\'ensemble d\'arrivée. On note $f : x \\mapsto f(x)$.' },
        { term: 'Image', def: 'La valeur $f(a)$ obtenue en remplaçant $x$ par $a$ dans l\'expression de $f$. On dit que $f(a)$ est l\'<strong>image de $a$</strong> par $f$.' },
        { term: 'Antécédent', def: 'Un nombre $a$ tel que $f(a) = b$. On dit que $a$ est un <strong>antécédent de $b$</strong> par $f$. Il peut y en avoir $0$, $1$ ou plusieurs.' },
        { term: 'Domaine de définition', def: 'Ensemble des valeurs de $x$ pour lesquelles $f(x)$ existe. Par exemple, $f(x) = \\dfrac{1}{x}$ n\'est pas définie pour $x = 0$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Calculer une image</strong> : remplacer $x$ par la valeur donnée dans l\'expression de $f(x)$.<br/><em>Exemple :</em> $f(x) = 2x + 1$, image de $3$ : $f(3) = 2 \\times 3 + 1 = 7$.',
          '<strong>Trouver un antécédent</strong> : résoudre l\'équation $f(x) = y$, puis exprimer $x$.<br/><em>Exemple :</em> antécédent de $7$ : $2x + 1 = 7 \\Rightarrow x = 3$.',
          '<strong>Lire sur un graphe</strong> : image → lire l\'ordonnée (axe vertical) ; antécédent → lire l\'abscisse (axe horizontal).'
        ]
      },
      example: {
        statement: 'Soit $f(x) = 2x^2 - 3$. Calculer l\'image de $4$ par $f$, puis trouver le(s) antécédent(s) de $5$ par $f$.',
        steps: [
          '<strong>Image de $4$</strong> : on remplace $x$ par $4$ dans l\'expression.<br/>$f(4) = 2 \\times 4^2 - 3 = 2 \\times 16 - 3 = 32 - 3 = 29$.',
          '<strong>Antécédent(s) de $5$</strong> : on résout $f(x) = 5$.<br/>$2x^2 - 3 = 5 \\Rightarrow 2x^2 = 8 \\Rightarrow x^2 = 4$.',
          'Donc $x = 2$ ou $x = -2$. Les deux antécédents de $5$ par $f$ sont $2$ et $-2$.'
        ],
        answer: '$f(4) = 29$ ; les antécédents de $5$ sont $x = 2$ et $x = -2$.'
      },
      formulas: [
        '$f(x) = $ expression en $x$ (définition de la fonction)',
        'Image de $a$ : calculer $f(a)$',
        'Antécédent de $b$ : résoudre $f(x) = b$',
        'Notation : $x \\mapsto f(x)$ (on lit « $x$ a pour image $f(x)$ »)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Lecture graphique',
        title: 'Lire une image et des antécédents sur une courbe',
        description: 'Exemple visuel pour $f(x) = 2x^2 - 3$. Les pointillés montrent comment lire $f(2) = 5$ et pourquoi $5$ admet deux antécédents.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="fonctions-graph-title fonctions-graph-desc">
            <title id="fonctions-graph-title">Courbe de la fonction f(x)=2x²-3</title>
            <desc id="fonctions-graph-desc">Le graphique met en évidence l'image de 2, égale à 5, et les deux antécédents de 5 : -2 et 2.</desc>
            <rect x="26" y="18" width="308" height="176" rx="18" fill="transparent"></rect>
            <line class="grid-line" x1="42" y1="28.5" x2="318" y2="28.5"></line>
            <line class="grid-line" x1="42" y1="71" x2="318" y2="71"></line>
            <line class="grid-line" x1="42" y1="113.5" x2="318" y2="113.5"></line>
            <line class="grid-line" x1="42" y1="156" x2="318" y2="156"></line>
            <line class="grid-line" x1="42" y1="181.5" x2="318" y2="181.5"></line>
            <line class="grid-line" x1="42" y1="28.5" x2="42" y2="190"></line>
            <line class="grid-line" x1="88" y1="28.5" x2="88" y2="190"></line>
            <line class="grid-line" x1="134" y1="28.5" x2="134" y2="190"></line>
            <line class="grid-line" x1="180" y1="28.5" x2="180" y2="190"></line>
            <line class="grid-line" x1="226" y1="28.5" x2="226" y2="190"></line>
            <line class="grid-line" x1="272" y1="28.5" x2="272" y2="190"></line>
            <line class="grid-line" x1="318" y1="28.5" x2="318" y2="190"></line>
            <line class="axis" x1="42" y1="156" x2="326" y2="156"></line>
            <line class="axis" x1="180" y1="190" x2="180" y2="20"></line>
            <polyline class="curve-main" points="42,28.5 65,75.25 88,113.5 111,143.25 134,164.5 157,177.25 180,181.5 203,177.25 226,164.5 249,143.25 272,113.5 295,75.25 318,28.5"></polyline>
            <line class="focus-line" x1="88" y1="113.5" x2="272" y2="113.5"></line>
            <line class="guide-line" x1="88" y1="113.5" x2="88" y2="156"></line>
            <line class="guide-line" x1="272" y1="113.5" x2="272" y2="156"></line>
            <line class="guide-line" x1="272" y1="156" x2="272" y2="113.5"></line>
            <circle class="plot-point-alt" cx="88" cy="113.5" r="6"></circle>
            <circle class="plot-point" cx="272" cy="113.5" r="6"></circle>
            <circle class="plot-point-alt" cx="180" cy="181.5" r="6"></circle>
            <text class="axis-label" x="330" y="160">x</text>
            <text class="axis-label" x="186" y="24">f(x)</text>
            <text class="tick-label" x="37" y="160">-3</text>
            <text class="tick-label" x="82" y="160">-2</text>
            <text class="tick-label" x="129" y="160">-1</text>
            <text class="tick-label" x="176" y="160">0</text>
            <text class="tick-label" x="222" y="160">1</text>
            <text class="tick-label" x="268" y="160">2</text>
            <text class="tick-label" x="314" y="160">3</text>
            <text class="tick-label" x="148" y="186">-3</text>
            <text class="tick-label" x="160" y="160">0</text>
            <text class="tick-label" x="158" y="118">5</text>
            <text class="tick-label" x="154" y="75">10</text>
            <text class="tick-label" x="154" y="33">15</text>
            <text class="annotation-label" x="283" y="104">f(2) = 5</text>
            <text class="annotation-label" x="197" y="204">Sommet (0 ; -3)</text>
            <text class="annotation-label" x="108" y="99">y = 5</text>
          </svg>
        `,
        notes: [
          'On part de $x = 2$ sur l’axe horizontal, on monte jusqu’à la courbe, puis on lit l’ordonnée : $f(2) = 5$.',
          'La droite horizontale $y = 5$ coupe la courbe en deux points : les antécédents de $5$ sont donc $-2$ et $2$.',
          'Le sommet $(0 ; -3)$ aide à comprendre pourquoi la courbe redescend puis remonte : une même valeur de sortie peut avoir deux antécédents.'
        ],
        reading: 'Pour une image, on part de $x$. Pour un antécédent, on part de la valeur $y$ et on revient vers l’axe des abscisses.',
        caption: 'Courbe de $f(x) = 2x^2 - 3$ avec lecture guidée de l’image de $2$ et des antécédents de $5$.'
      },
      /* SCHÉMAS SECONDAIRES, ajoutés le 2026-09-13.

         Principe du cahier des charges (section 9) : une figure par
         MALENTENDU, pas une figure par formule. Les trois malentendus retenus
         sont ceux qui font effectivement perdre des points, dans cet ordre :

           1. « image et antécédent, c'est pareil » — le sens de lecture est
              inversé, et l'élève lit une abscisse quand on demande une
              ordonnée. C'est de loin l'erreur la plus fréquente du chapitre ;
           2. « une courbe, c'est une fonction » — le test de la droite
              verticale n'a jamais été formulé, si bien que rien ne distingue
              une fonction d'une courbe quelconque ;
           3. « la machine me rend ce que je lui donne » — l'élève applique
              la règle à l'envers pour chercher un antécédent, au lieu de
              résoudre une équation.

         TOUTES LES COORDONNÉES SONT CALCULÉES. Les courbes sont produites par
         un script node qui échantillonne la fonction et convertit par
         X(x) = 170 + 36x, Y(y) = 176 - 15y pour le premier schéma ; les points
         marqués sont vérifiés présents dans la polyline elle-même, à l'unité
         d'écriture près (vérifié : écart nul). */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Piège',
          title: 'Une image se lit vers le haut, un antécédent vers le bas',
          description: 'Sur la courbe de $f(x) = x^2 - 1$, les deux questions utilisent les <strong>mêmes</strong> points et les <strong>mêmes</strong> traits — seul le sens de parcours change. Chercher une image part de la graduation horizontale ; chercher un antécédent part de la graduation verticale.',
          svg: `
            <svg viewBox="0 0 300 226" role="img" aria-labelledby="fonc-img-title fonc-img-desc">
              <title id="fonc-img-title">Lecture d'une image et lecture d'un antecedent</title>
              <desc id="fonc-img-desc">Une courbe en forme de vallee passe par le point le plus bas situe a l'abscisse zero et a l'ordonnee moins un, puis remonte des deux cotes. Une droite horizontale tracee a la hauteur trois coupe la courbe en deux points, l'un a l'abscisse moins deux et l'autre a l'abscisse deux. Deux traits verticaux descendent de ces deux points vers la graduation horizontale. En partant de l'abscisse deux et en montant jusqu'a la courbe on lit la hauteur trois, qui est l'image de deux ; en partant de la hauteur trois et en redescendant vers la graduation horizontale on trouve les deux abscisses moins deux et deux, qui sont les antecedents de trois.</desc>

              <line class="grid-line" x1="62" y1="56" x2="278" y2="56"></line>
              <line class="grid-line" x1="62" y1="131" x2="278" y2="131"></line>
              <line class="grid-line" x1="62" y1="56" x2="62" y2="206"></line>
              <line class="grid-line" x1="98" y1="56" x2="98" y2="206"></line>
              <line class="grid-line" x1="134" y1="56" x2="134" y2="206"></line>
              <line class="grid-line" x1="206" y1="56" x2="206" y2="206"></line>
              <line class="grid-line" x1="242" y1="56" x2="242" y2="206"></line>
              <line class="grid-line" x1="278" y1="56" x2="278" y2="206"></line>

              <line class="axis" x1="62" y1="176" x2="286" y2="176"></line>
              <line class="axis" x1="170" y1="206" x2="170" y2="48"></line>

              <polyline class="curve-main" points="62,56 69.2,73.4 76.4,89.6 83.6,104.6 90.8,118.4 98,131 105.2,142.4 112.4,152.6 119.6,161.6 126.8,169.4 134,176 141.2,181.4 148.4,185.6 155.6,188.6 162.8,190.4 170,191 177.2,190.4 184.4,188.6 191.6,185.6 198.8,181.4 206,176 213.2,169.4 220.4,161.6 227.6,152.6 234.8,142.4 242,131 249.2,118.4 256.4,104.6 263.6,89.6 270.8,73.4 278,56"></polyline>

              <line class="focus-line" x1="62" y1="131" x2="278" y2="131"></line>
              <line class="guide-line" x1="242" y1="131" x2="242" y2="176"></line>
              <line class="guide-line" x1="98" y1="131" x2="98" y2="176"></line>

              <circle class="plot-point" cx="242" cy="131" r="5"></circle>
              <circle class="plot-point-alt" cx="98" cy="131" r="5"></circle>

              <text class="tick-label" x="94" y="188" text-anchor="middle">-2</text>
              <text class="tick-label" x="238" y="188" text-anchor="middle">2</text>
              <text class="tick-label" x="164" y="188" text-anchor="end">0</text>
              <text class="tick-label" x="164" y="135" text-anchor="end">3</text>
              <text class="axis-label" x="290" y="180" text-anchor="start">x</text>
              <text class="axis-label" x="176" y="46" text-anchor="start">f(x)</text>

              <text class="annotation-label" x="250" y="124" text-anchor="start">image de 2</text>
              <text class="label-soft" x="66" y="124" text-anchor="start">antécédents de 3</text>
              <text class="label-soft" x="150" y="218" text-anchor="middle">deux antécédents, une seule image</text>
            </svg>
          `,
          notes: [
            '<strong>Chercher une image</strong> : tu pars de $2$ sur la graduation horizontale, tu montes jusqu\'à la courbe, tu lis $3$ sur la graduation verticale. Une image est <strong>toujours unique</strong>.',
            '<strong>Chercher un antécédent</strong> : tu pars de $3$ sur la graduation verticale, tu vas horizontalement jusqu\'à la courbe, tu redescends. Ici tu trouves $-2$ et $2$ : un nombre peut avoir <strong>plusieurs</strong> antécédents.',
            'C\'est là que se joue toute la différence : $f(2) = 3$ se lit en montant, tandis que $f(x) = 3$ se résout en redescendant.',
            '<strong>Le contrôle qui sauve</strong> : demande-toi toujours ce qu\'on te donne. Si on te donne un $x$, la réponse est une image. Si on te donne une valeur de $f(x)$, la réponse est un antécédent.'
          ],
          reading: 'Suis les flèches du regard : pour une image tu montes, pour un antécédent tu redescends. Les traits sont les mêmes, le sens de parcours ne l\'est pas.',
          caption: 'Lecture de l\'image de $2$ et des deux antécédents de $3$ sur la courbe de $f(x) = x^2 - 1$.'
        },
        {
          theme: 'maths',
          kicker: 'Reconnaître une fonction',
          title: 'Le test de la droite verticale',
          description: 'Toute courbe ne représente pas une fonction. La règle est visuelle et tient en une phrase : si une droite <strong>verticale</strong> coupe la courbe en <strong>deux points ou plus</strong>, alors une même entrée aurait deux sorties — ce n\'est pas une fonction.',
          svg: `
            <svg viewBox="0 0 380 192" role="img" aria-labelledby="fonc-vert-title fonc-vert-desc">
              <title id="fonc-vert-title">Test de la droite verticale sur deux courbes</title>
              <desc id="fonc-vert-desc">A gauche, une courbe qui monte regulierement de la gauche vers la droite ; une droite verticale tracee en pointilles la coupe en un seul point, donc chaque entree possede une seule sortie et il s'agit bien d'une fonction. A droite, un cercle ; une droite verticale tracee au meme titre le coupe en deux points distincts, un en haut et un en bas, donc une meme entree donnerait deux sorties differentes et le cercle ne represente pas une fonction.</desc>

              <text class="annotation-label" x="100" y="20" text-anchor="middle">une seule intersection</text>
              <line class="axis" x1="52" y1="160" x2="152" y2="160"></line>
              <line class="axis" x1="52" y1="160" x2="52" y2="40"></line>
              <polyline class="curve-main" points="62,139.92 66,138.55 70,136.76 74,134.46 78,131.56 82,127.98 86,123.67 90,118.67 94,113.07 98,107.07 102,100.93 106,94.93 110,89.33 114,84.33 118,80.02 122,76.44 126,73.54 130,71.24 134,69.45 138,68.08"></polyline>
              <line class="guide-line" x1="112" y1="160" x2="112" y2="60"></line>
              <circle class="plot-point" cx="112" cy="86.75" r="5"></circle>
              <text class="label-soft" x="100" y="178" text-anchor="middle">c'est une fonction</text>

              <text class="annotation-label" x="300" y="20" text-anchor="middle">deux intersections</text>
              <line class="axis" x1="240" y1="160" x2="352" y2="160"></line>
              <line class="axis" x1="240" y1="160" x2="240" y2="40"></line>
              <circle class="curve-main" cx="300" cy="104" r="44" fill="none"></circle>
              <line class="guide-line" x1="314" y1="160" x2="314" y2="50"></line>
              <circle class="plot-point" cx="314" cy="62.29" r="5"></circle>
              <circle class="plot-point" cx="314" cy="145.71" r="5"></circle>
              <text class="label-soft" x="300" y="178" text-anchor="middle">ce n'est pas une fonction</text>
            </svg>
          `,
          notes: [
            'À gauche, où que tu places la droite verticale, elle ne rencontre la courbe qu\'<strong>une fois</strong> : chaque entrée reçoit une sortie et une seule.',
            'À droite, la même droite verticale rencontre le cercle <strong>deux fois</strong>. La même entrée donnerait deux sorties différentes, ce qu\'une fonction ne permet pas.',
            'Attention à ne pas confondre les deux sens : plusieurs <strong>antécédents</strong> pour une même image sont autorisés (c\'est le cas de la vallée du schéma précédent), mais deux <strong>images</strong> pour un même nombre ne le sont jamais.',
            'C\'est exactement pour cela que le test se fait avec une droite <strong>verticale</strong>, et non horizontale : la verticale interroge les sorties d\'une même entrée.'
          ],
          reading: 'Fais glisser une règle bien verticale sur chaque dessin. À gauche elle touche toujours un point ; à droite il existe des positions où elle en touche deux, et cela suffit à conclure.',
          caption: 'Le test de la droite verticale : une intersection unique à gauche, deux intersections à droite.'
        },
        {
          theme: 'maths',
          kicker: 'Piège',
          title: 'Un antécédent ne se calcule pas, il se résout',
          description: 'Pour trouver l\'antécédent de $17$ par $f(x) = 3x + 2$, beaucoup d\'élèves appliquent la fonction au nombre donné et écrivent $f(17)$. Le calcul est juste, mais il répond à une <strong>autre question</strong>.',
          svg: `
            <svg viewBox="0 0 400 186" role="img" aria-labelledby="fonc-ant-title fonc-ant-desc">
              <title id="fonc-ant-title">Chercher un antecedent par une equation</title>
              <desc id="fonc-ant-desc">En haut, la demarche correcte : on pose l'equation trois x plus deux egale dix-sept, on retire deux des deux cotes pour obtenir trois x egale quinze, puis on divise par trois et on trouve x egale cinq ; la verification montre que trois fois cinq plus deux redonne bien dix-sept. En dessous, en trait tirete et en teinte plus faible, la demarche fautive : l'eleve applique la fonction au nombre donne et calcule trois fois dix-sept plus deux, ce qui donne cinquante-trois ; il a repondu a la question de l'image de dix-sept au lieu de la question de l'antecedent de dix-sept.</desc>

              <rect x="14" y="12" width="372" height="76" rx="10"
                    fill="color-mix(in srgb, var(--diagram-accent) 9%, var(--bg-card))"
                    stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
              <text class="annotation-label" x="28" y="34" text-anchor="start">antécédent de 17 : on résout une équation</text>
              <text class="annotation-label" x="28" y="58" text-anchor="start">3x + 2 = 17     donc     3x = 15     donc     x = 5</text>
              <text class="annotation-label" x="28" y="78" text-anchor="start">contrôle : 3 × 5 + 2 = 17</text>

              <rect x="14" y="102" width="372" height="70" rx="10" fill="none"
                    stroke="color-mix(in srgb, var(--text-muted) 34%, transparent)"
                    stroke-dasharray="6 4"></rect>
              <text class="label-soft" x="28" y="124" text-anchor="start">la fonction appliquée au nombre donné</text>
              <text class="label-soft" x="28" y="148" text-anchor="start">3 × 17 + 2 = 53</text>
              <text class="label-soft" x="28" y="166" text-anchor="start">ceci répond à la question de l'image de 17</text>
            </svg>
          `,
          notes: [
            'Chercher une <strong>image</strong>, c\'est <strong>remplacer</strong> : on connaît $x$, on calcule $f(x)$.',
            'Chercher un <strong>antécédent</strong>, c\'est <strong>résoudre</strong> : on connaît $f(x)$, on cherche $x$. L\'inconnue n\'est plus au même endroit, et c\'est pourquoi il faut une équation.',
            'Le calcul fautif ci-dessus n\'a rien d\'absurde : $3 \\times 17 + 2 = 53$ est exact. Il répond simplement à la question de l\'image, alors qu\'on demandait celle de l\'antécédent.',
            'Le <strong>contrôle</strong> ferme le débat en une ligne : remplace ta réponse dans la fonction. Si tu retrouves le nombre de départ, l\'antécédent est bon.'
          ],
          reading: 'Compare les deux encadrés : les mêmes nombres, deux questions différentes. Celui du haut termine par une vérification, celui du bas n\'en a aucune à proposer.',
          caption: 'La recherche d\'un antécédent par une équation, au-dessus, et le calcul d\'image auquel on la confond, en dessous.'
        }
      ],
      recap: [
        'Une fonction associe à chaque entrée $x$ <strong>une seule sortie</strong> $f(x)$ — c\'est la règle fondamentale.',
        'L\'<strong>image</strong> se lit sur l\'axe des ordonnées : on part de $x$, on monte jusqu\'à la courbe, on lit $f(x)$.',
        'L\'<strong>antécédent</strong> se trouve en résolvant $f(x) = y$ ; il peut y avoir $0$, $1$ ou plusieurs solutions.',
        'Sur un graphique, les antécédents de $y$ correspondent aux abscisses des points d\'intersection de la courbe avec la droite $y = b$.'
      ],
      piege: 'Piège : une fonction peut avoir plusieurs antécédents pour un même y, mais un seul image pour chaque x. Par exemple, $f(x) = x^2$ : $f(2) = 4$ et $f(-2) = 4$, donc $4$ a deux antécédents ($2$ et $-2$).'
    },
    quiz: [
      {
        q: 'Si $f(x) = 2x - 3$, quelle est l\'image de $5$ par $f$ ?',
        options: ['$7$', '$13$', '$-3$', '$4$'],
        answer: 0,
        correction: '$f(5) = 2 \\times 5 - 3 = 10 - 3 = 7$.'
      },
      {
        q: 'Si $g(x) = x^2 + 1$, quel est l\'antécédent de $10$ par $g$ ?',
        options: ['$3$ seulement', '$-3$ seulement', '$3$ et $-3$', '$9$'],
        answer: 2,
        correction: '$g(x) = 10 \\Rightarrow x^2 + 1 = 10 \\Rightarrow x^2 = 9 \\Rightarrow x = 3$ ou $x = -3$.'
      },
      {
        q: 'Peut-on avoir $f(2) = 5$ et $f(2) = 7$ en même temps pour une même fonction $f$ ?',
        options: [
          'Non : une fonction associe une image unique à chaque valeur de $x$',
          'Oui, si $f$ est une fonction du second degré',
          'Oui, si $f$ est définie par morceaux',
          'Cela dépend du domaine de définition'
        ],
        answer: 0,
        correction: 'Par définition, une fonction associe à chaque $x$ une image UNIQUE. $f(2) = 5$ et $f(2) = 7$ simultanément est impossible pour une fonction — ce serait une relation multivoque. En revanche, deux $x$ différents peuvent avoir la même image : $f(3) = f(-3) = 9$ pour $f(x) = x^2$ est tout à fait valide.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13.

         AVANT : la mesure du cahier des charges (section 11) annonçait
         6 tâches, ce qui aurait dispensé ce chapitre de tout travail. C'était
         un ARTEFACT DE MESURE, et il valait la peine d'être vu : le squelette
         de tâche est calculé sur la première ligne de solution, où figurait le
         NOM de la fonction ($T$, $A$, $P$, $v$, $U$, $D$). Six décors donnaient
         donc six squelettes pour un seul et même calcul. Vérifié en listant les
         squelettes : tous de la forme « $?(#) = # \times # + (#) = … », c'est-à-
         dire une unique tâche — « calculer une image d'expression affine » —
         habillée six fois. Le chapitre était en réalité au même niveau que les
         deux autres du lot : 1 tâche.

         Leçon pour les chapitres suivants : quand le générateur fait varier un
         SYMBOLE dans la solution, la mesure automatique surestime la diversité.
         Il faut alors lire les squelettes, pas seulement les compter.

         APRÈS : sept familles de tâches, toutes au programme de troisième.
           - 'image'      : la tâche directe, calculer $f(a)$ ;
           - 'antecedent' : résoudre $f(x) = b$, là où l'élève applique la
                            fonction au lieu de résoudre (erreur 2 de la fiche) ;
           - 'tableau'    : compléter un tableau de valeurs, donc passer de
                            l'expression à une autre représentation ;
           - 'lecture'    : lire image et antécédent sur un tableau déjà donné,
                            sans aucun calcul — c'est « représenter » ;
           - 'carre'      : une fonction non affine, où l'antécédent est double
                            ou inexistant ; c'est ce qui empêche de croire
                            qu'un antécédent est toujours unique ;
           - 'appartient' : le point est-il sur la courbe ? La question se
                            ramène à une comparaison, pas à un tracé ;
           - 'programme'  : un programme de calcul en français, à traduire en
                            expression puis à évaluer. C'est la tâche qui fait
                            le lien avec le chapitre d'algorithmique.

         BUG CORRIGÉ AU PASSAGE : l'ancien générateur tirait $b$ entre $-5$ et
         $5$ et l'écrivait sans condition, ce qui imprimait « $T(x) = 2x + -5$ »
         une fois sur deux dans le livre. Les expressions passent désormais par
         `ecrire()`, qui choisit le signe. */
      generate() {
        // Écrit « 2x + 5 », « 2x - 5 » ou « 2x » selon le signe de b : jamais
        // « + -5 », qui figurait tel quel dans les énoncés imprimés.
        const ecrire = (a, b) => b === 0 ? `${a}x` : (b > 0 ? `${a}x + ${b}` : `${a}x - ${-b}`);

        const tache = pick(['image', 'image', 'antecedent', 'tableau', 'lecture', 'carre', 'appartient', 'programme']);

        if (tache === 'image') {
          const a = rand(2, 5), b = rand(-6, 8), x = rand(-4, 9);
          const val = a * x + b;
          const ctx = pick([
            { fn: 'T', d: `La <strong>température</strong> d'un four (en °C) suit $T(x) = ${ecrire(a, b)}$, où $x$ est le nombre de minutes depuis le lancement d'une recette.`, q: `Calcule <strong>$T(${x})$</strong>.` },
            { fn: 'A', d: `L'<strong>altitude</strong> d'un drone (en m) suit $A(x) = ${ecrire(a, b)}$, où $x$ est le temps en secondes depuis le décollage.`, q: `Calcule <strong>$A(${x})$</strong>.` },
            { fn: 'P', d: `La <strong>profondeur</strong> d'un sous-marin (en m, comptée négativement sous la surface) suit $P(x) = ${ecrire(a, b)}$, où $x$ est le temps en minutes.`, q: `Calcule <strong>$P(${x})$</strong>.` },
            { fn: 'U', d: `La <strong>tension</strong> aux bornes d'un condensateur (en V) suit $U(x) = ${ecrire(a, b)}$, où $x$ est le temps en millisecondes.`, q: `Calcule <strong>$U(${x})$</strong>.` },
            { fn: 'D', d: `La <strong>distance</strong> parcourue par un cycliste (en km) suit $D(x) = ${ecrire(a, b)}$, où $x$ est le temps en heures depuis un point de contrôle.`, q: `Calcule <strong>$D(${x})$</strong>.` }
          ]);
          return {
            statement: `${ctx.d}<br/><br/>${ctx.q}`,
            answer: val,
            tolerance: 0,
            unit: '',
            hint: `Calculer une image, c'est <strong>remplacer</strong> : mets $${x}$ à la place de $x$ dans l'expression.`,
            solution: [
              `On remplace $x$ par $${x}$ dans $${ecrire(a, b)}$.`,
              `$${ctx.fn}(${x}) = ${a} \\times (${x}) ${b < 0 ? '-' : '+'} ${Math.abs(b)} = ${a * x} ${b < 0 ? '-' : '+'} ${Math.abs(b)} = ${val}$.`
            ]
          };
        }

        if (tache === 'antecedent') {
          /* La tâche qui prend à revers l'erreur la plus coûteuse du chapitre :
             on demande un ANTÉCÉDENT, et l'élève qui applique la fonction au
             nombre donné trouve un résultat que la vérification écrite dans la
             solution contredit immédiatement. */
          const a = rand(2, 6), x = rand(2, 9), b = rand(-5, 7);
          const cible = a * x + b;
          const ctx = pick([
            { fn: 'C', d: `Le <strong>coût</strong> d'une commande (en €) est donné par $C(x) = ${ecrire(a, b)}$, où $x$ est le nombre d'articles.`, q: `Combien d'articles peut-on commander pour exactement $${cible}$ € ?` },
            { fn: 'h', d: `La <strong>hauteur</strong> d'une plante (en cm) suit $h(x) = ${ecrire(a, b)}$, où $x$ est le nombre de semaines depuis la plantation.`, q: `Au bout de combien de semaines la plante mesure-t-elle $${cible}$ cm ?` },
            { fn: 'N', d: `Le <strong>nombre de vues</strong> d'une vidéo (en milliers) suit $N(x) = ${ecrire(a, b)}$, où $x$ est le nombre de jours depuis sa mise en ligne.`, q: `Au bout de combien de jours atteint-elle $${cible}$ milliers de vues ?` }
          ]);
          return {
            statement: `${ctx.d}<br/><br/>${ctx.q}`,
            answer: x,
            tolerance: 0,
            unit: '',
            hint: `Ici on te donne la <strong>sortie</strong> et on te demande l'entrée : c'est un antécédent.<br/><br/>Il ne se calcule pas, il se résout. Pose l'équation $${ecrire(a, b)} = ${cible}$.`,
            solution: [
              `On cherche un <strong>antécédent</strong> : on connaît la valeur d'arrivée, on remonte vers $x$. Il faut donc résoudre une équation, et non appliquer la fonction à $${cible}$.`,
              `$${ecrire(a, b)} = ${cible}$, donc $${a}x = ${cible - b}$.`,
              `$x = \\dfrac{${cible - b}}{${a}} = ${x}$.<br/><br/>Contrôle : $${ctx.fn}(${x}) = ${a} \\times ${x} ${b < 0 ? '-' : '+'} ${Math.abs(b)} = ${cible}$. On retrouve bien la valeur de départ.`
            ]
          };
        }

        if (tache === 'tableau') {
          // Passer de l'expression à un tableau de valeurs : même fonction,
          // autre représentation. On ne demande qu'UNE case, celle du bout.
          const a = rand(2, 5), b = rand(-4, 6);
          const xs = [-2, -1, 0, 1, 2, 3];
          const xCible = pick([2, 3]);
          const val = a * xCible + b;
          const cellules = xs.map(v => v === xCible ? '?' : String(a * v + b));
          const ctx = pick([
            `Un tableur affiche les valeurs de la fonction $f(x) = ${ecrire(a, b)}$, mais une cellule n'a pas été recopiée.`,
            `Pour tracer la courbe de $f(x) = ${ecrire(a, b)}$, tu commences par dresser un tableau de valeurs. Une case reste à remplir.`,
            `Un logiciel de géométrie a calculé quelques valeurs de $f(x) = ${ecrire(a, b)}$ avant de s'interrompre.`
          ]);
          return {
            statement: `${ctx}<br/><br/>` +
              `$x$ : ${xs.join(' ; ')}<br/><br/>` +
              `$f(x)$ : ${cellules.join(' ; ')}<br/><br/>` +
              `Quelle valeur doit remplacer le point d'interrogation, c'est-à-dire <strong>$f(${xCible})$</strong> ?`,
            answer: val,
            tolerance: 0,
            unit: '',
            hint: `Un tableau de valeurs ne contient rien d'autre que des images. La case manquante est l'image de $${xCible}$.`,
            solution: [
              `Chaque colonne du tableau donne l'image d'un nombre : la case cherchée est donc $f(${xCible})$.`,
              `$f(${xCible}) = ${a} \\times ${xCible} ${b < 0 ? '-' : '+'} ${Math.abs(b)} = ${val}$.`,
              `Contrôle : d'une colonne à la suivante, $f(x)$ augmente toujours de $${a}$, et c'est bien le cas entre la case précédente et celle-ci.`
            ]
          };
        }

        if (tache === 'lecture') {
          /* AUCUN calcul : on lit un tableau déjà rempli. La difficulté est
             entièrement dans le SENS de lecture — image ou antécédent — et
             l'élève qui les confond répond avec l'autre ligne du tableau. */
          const xs = [0, 1, 2, 3, 4, 5];
          const ys = [];
          let v = rand(3, 9);
          for (let i = 0; i < xs.length; i++) { ys.push(v); v += rand(2, 6); }
          const i = rand(2, 5);
          const cherche = pick(['image', 'antecedent']);
          const ctx = pick([
            { d: 'Un relevé donne la <strong>hauteur d\'eau</strong> (en cm) dans une cuve au fil des heures.', ligne1: 'heures $x$', ligne2: 'hauteur $f(x)$' },
            { d: 'Un compteur relève la <strong>consommation</strong> (en kWh) d\'un appareil au fil des jours.', ligne1: 'jours $x$', ligne2: 'consommation $f(x)$' },
            { d: 'Un carnet note la <strong>taille d\'un plant</strong> (en cm) au fil des semaines.', ligne1: 'semaines $x$', ligne2: 'taille $f(x)$' }
          ]);
          const question = cherche === 'image'
            ? `Quelle est <strong>l'image de $${xs[i]}$</strong> par $f$ ?`
            : `Quel est <strong>l'antécédent de $${ys[i]}$</strong> par $f$ ?`;
          return {
            statement: `${ctx.d} Aucun calcul n'est nécessaire : tout se lit dans le tableau.<br/><br/>` +
              `${ctx.ligne1} : ${xs.join(' ; ')}<br/><br/>` +
              `${ctx.ligne2} : ${ys.join(' ; ')}<br/><br/>${question}`,
            answer: cherche === 'image' ? ys[i] : xs[i],
            tolerance: 0,
            unit: '',
            hint: cherche === 'image'
              ? `L'image se lit sur la ligne du bas : tu pars de $${xs[i]}$ en haut et tu descends.`
              : `L'antécédent se lit sur la ligne du haut : tu pars de $${ys[i]}$ en bas et tu remontes.`,
            solution: cherche === 'image'
              ? [
                  `On te donne une valeur de $x$ : la réponse est donc une <strong>image</strong>.`,
                  `On repère $${xs[i]}$ sur la ligne du haut, puis on lit en dessous : $f(${xs[i]}) = ${ys[i]}$.`
                ]
              : [
                  `On te donne une valeur de $f(x)$ : la réponse est donc un <strong>antécédent</strong>, et il se lit sur la ligne du haut.`,
                  `On repère $${ys[i]}$ sur la ligne du bas, puis on remonte : l'antécédent de $${ys[i]}$ est $${xs[i]}$.`,
                  `Contrôle : on vérifie bien $f(${xs[i]}) = ${ys[i]}$.`
                ]
          };
        }

        if (tache === 'carre') {
          /* Une fonction NON affine : c'est la seule tâche du chapitre où
             l'antécédent peut être double ou ne pas exister. Sans elle, l'élève
             sort de troisième en croyant qu'un antécédent est toujours unique,
             ce qui le gênera dès la seconde. */
          const r = rand(2, 7), c = rand(-6, 6);
          const cible = r * r + c;
          const ctx = pick([
            `L'<strong>aire</strong> d'un motif carré de côté $x$, augmentée d'une bordure fixe, est donnée par $f(x) = x^2 ${c < 0 ? '-' : '+'} ${Math.abs(c)}$.`,
            `Un logiciel de dessin calcule un indicateur par la formule $f(x) = x^2 ${c < 0 ? '-' : '+'} ${Math.abs(c)}$.`,
            `La fonction $f$ est définie par $f(x) = x^2 ${c < 0 ? '-' : '+'} ${Math.abs(c)}$.`
          ]);
          return {
            statement: `${ctx}<br/><br/>On cherche les antécédents de $${cible}$ par $f$.<br/><br/>` +
              `Cette valeur admet en réalité <strong>deux</strong> antécédents, opposés l'un de l'autre.<br/><br/>` +
              `Donne le <strong>plus grand</strong> des deux.`,
            answer: r,
            tolerance: 0,
            unit: '',
            hint: `Résous $x^2 ${c < 0 ? '-' : '+'} ${Math.abs(c)} = ${cible}$.<br/><br/>Tu arriveras à $x^2 = ${r * r}$, et un carré connu se retrouve de <strong>deux</strong> façons : avec un nombre positif et son opposé.`,
            solution: [
              `On résout $x^2 ${c < 0 ? '-' : '+'} ${Math.abs(c)} = ${cible}$, donc $x^2 = ${r * r}$.`,
              `Deux nombres ont pour carré $${r * r}$ : $${r}$ et $${-r}$. Les deux sont donc des antécédents de $${cible}$.`,
              `Le plus grand est $${r}$.<br/><br/>Retiens l'essentiel : une image est toujours unique, mais un antécédent peut être multiple — ici ils sont deux.`
            ]
          };
        }

        if (tache === 'appartient') {
          /* Le point est-il sur la courbe ? La question a l'air graphique, mais
             elle se règle par un calcul d'image et une comparaison. C'est ce
             qui prépare la lecture graphique du chapitre suivant. */
          const a = rand(2, 5), b = rand(-4, 7), x = rand(1, 6);
          const juste = Math.random() > 0.5;
          const y = a * x + b + (juste ? 0 : pick([-3, -2, 2, 3]));
          const ctx = pick([
            `On a tracé la courbe de la fonction $f(x) = ${ecrire(a, b)}$ dans un repère.`,
            `Un logiciel affiche la courbe de $f(x) = ${ecrire(a, b)}$.`,
            `Sur son cahier, Nora a tracé la représentation graphique de $f(x) = ${ecrire(a, b)}$.`
          ]);
          return {
            statement: `${ctx}<br/><br/>Le point de coordonnées $(${x}\\,;\\,${y})$ appartient-il à cette courbe ?<br/><br/>` +
              `Réponds par $1$ pour oui, $0$ pour non.`,
            answer: juste ? 1 : 0,
            tolerance: 0,
            unit: '',
            hint: `Inutile de tracer quoi que ce soit. Un point appartient à la courbe si son ordonnée est exactement l'image de son abscisse.<br/><br/>Calcule $f(${x})$ et compare à $${y}$.`,
            solution: [
              `Un point appartient à la courbe de $f$ lorsque son ordonnée est <strong>l'image</strong> de son abscisse. La question se règle donc par un calcul, sans tracé.`,
              `$f(${x}) = ${a} \\times ${x} ${b < 0 ? '-' : '+'} ${Math.abs(b)} = ${a * x + b}$.`,
              juste
                ? `On trouve exactement $${y}$ : le point appartient à la courbe. Réponse : $1$.`
                : `On trouve $${a * x + b}$, et l'ordonnée annoncée est $${y}$ : les deux diffèrent, donc le point n'est pas sur la courbe. Réponse : $0$.`
            ]
          };
        }

        /* tache === 'programme' : un programme de calcul rédigé en français,
           à traduire en expression avant d'être évalué. C'est la tâche qui
           fait le pont avec le chapitre d'algorithmique, où le même objet
           s'écrit en suite d'instructions. */
        const m = rand(2, 6), p = rand(1, 9), depart = rand(2, 9);
        const resultat = (depart + p) * m;
        const ctx = pick([
          { d: 'Ton professeur écrit au tableau un <strong>programme de calcul</strong>.', n: 'Choisis un nombre' },
          { d: 'Une <strong>fiche de jeu</strong> propose le tour de magie suivant.', n: 'Pense à un nombre' },
          { d: 'Une <strong>application</strong> applique le programme de calcul suivant au nombre que tu saisis.', n: 'Saisis un nombre' }
        ]);
        return {
          statement: `${ctx.d}<br/><br/>` +
            `<strong>1.</strong> ${ctx.n}.<br/><br/>` +
            `<strong>2.</strong> Ajoute $${p}$.<br/><br/>` +
            `<strong>3.</strong> Multiplie le résultat par $${m}$.<br/><br/>` +
            `Quel nombre obtient-on en partant de $${depart}$ ?`,
          answer: resultat,
          tolerance: 0,
          unit: '',
          hint: `Suis les étapes dans l'ordre, sans en sauter : d'abord l'addition, ensuite la multiplication.<br/><br/>En une seule écriture, ce programme est la fonction $f(x) = ${m}(x + ${p})$.`,
          solution: [
            `Un programme de calcul est une fonction déguisée : il transforme chaque nombre de départ en un nombre d'arrivée, toujours de la même façon.`,
            `Étape par étape : on part de $${depart}$, on ajoute $${p}$ et on obtient $${depart + p}$, puis on multiplie par $${m}$.`,
            `$(${depart} + ${p}) \\times ${m} = ${depart + p} \\times ${m} = ${resultat}$.<br/><br/>Écrit en une seule ligne, ce programme est la fonction $f(x) = ${m}(x + ${p})$, et le nombre cherché est $f(${depart})$.`
          ]
        };
      }
    },
    probleme: {
      context: 'La température $T$ (en °C) dans une salle en fonction de l\'heure $h$ (depuis l\'allumage du chauffage) est modélisée par $T(h) = 3h + 16$.',
      tasks: [
        'Calculer la température après $2$ heures.',
        'Après combien d\'heures atteint-on $25°C$ (trouver l\'antécédent) ?',
        'Quelle est la température initiale (à $h = 0$) ?'
      ],
      solutions: [
        '$T(2) = 3 \\times 2 + 16 = 22°C$.',
        '$3h + 16 = 25 \\Rightarrow 3h = 9 \\Rightarrow h = 3$ heures.',
        '$T(0) = 16°C$.'
      ],
      finalAnswer: 'La salle part de $16°C$ et atteint $25°C$ au bout de $3$ heures.'
    },

    evaluation: {
      title: 'Évaluation — Fonctions : notions de base',
      duration: '25 min',
      questions: [
        {
          statement: 'Soit $f(x) = 3x - 7$. Calculer l\'image de $4$ par $f$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$f(4) = 3 \\times 4 - 7 = 12 - 7 = 5$.'
        },
        /* Q2 RÉÉCRITE le 2026-09-13. Elle demandait « trouver les antécédents
           de 0 par $g(x) = x^2 - 4$ », soit une troisième résolution d'équation
           dans une évaluation qui en comptait déjà deux. Elle demande maintenant
           de passer d'une représentation à une AUTRE — d'un tableau de valeurs
           à la question posée — sans produire aucun calcul nouveau : toutes les
           valeurs utiles sont imprimées. C'est « représenter », et c'était une
           compétence que rien n'évaluait dans ce chapitre alors que la grille
           en imprimait la colonne. */
        {
          statement: 'Un capteur relève la <strong>température</strong> d\'une pièce (en °C) toutes les heures. Voici le tableau de valeurs de la fonction $f$ obtenue.<br/><br/>' +
            'heure $x$ : $0$ ; $1$ ; $2$ ; $3$ ; $4$ ; $5$<br/><br/>' +
            'température $f(x)$ : $14$ ; $16$ ; $19$ ; $19$ ; $22$ ; $25$<br/><br/>' +
            'Ce tableau suffit à répondre, sans aucun calcul. Laquelle de ces affirmations est <strong>exacte</strong> ?',
          type: 'multiple-choice',
          options: [
            'L\'image de $4$ est $22$, et $19$ possède deux antécédents : $2$ et $3$.',
            'L\'image de $19$ est $2$, et $22$ est un antécédent de $4$.',
            'L\'image de $4$ est $22$, et $19$ possède un seul antécédent : $2$.',
            'Le tableau ne peut pas décrire une fonction, car la valeur $19$ y figure deux fois.'
          ],
          answer: 0,
          points: 2,
          correction: 'Tout se lit dans le tableau, dans un sens ou dans l\'autre.<br/><br/>' +
            '<strong>Image de $4$</strong> : on cherche $4$ sur la ligne du haut, on lit en dessous $22$. Donc $f(4) = 22$.<br/><br/>' +
            '<strong>Antécédents de $19$</strong> : on cherche $19$ sur la ligne du bas, et on le trouve <strong>deux fois</strong>, sous les heures $2$ et $3$. La température est restée stable pendant une heure, ce qui est parfaitement possible.<br/><br/>' +
            'La dernière proposition inverse la règle : une fonction interdit deux <strong>images</strong> pour une même heure, mais autorise très bien deux <strong>antécédents</strong> pour une même température.'
        },
        /* Q3 RÉÉCRITE le 2026-09-13. Elle demandait de résoudre $-2x + 10 = 0$,
           un calcul de plus. Elle demande maintenant de décider si une
           information suffit à conclure, et de le justifier — l'élève doit
           raisonner sur la DÉFINITION de fonction, pas appliquer un procédé.
           La bonne réponse exige de comprendre pourquoi l'unicité porte sur
           l'image et non sur l'antécédent. C'est « raisonner ». */
        {
          statement: 'Deux élèves étudient la même fonction $f$.<br/><br/>' +
            'Malo affirme : « J\'ai trouvé $f(3) = 8$ et $f(7) = 8$. »<br/><br/>' +
            'Sarah affirme : « J\'ai trouvé $f(3) = 8$ et $f(3) = 11$. »<br/><br/>' +
            'L\'un des deux relevés est <strong>impossible</strong> pour une fonction. Lequel, et pourquoi ?',
          type: 'multiple-choice',
          options: [
            'Celui de Sarah : le nombre $3$ y reçoit deux images différentes, alors qu\'une fonction n\'en attribue qu\'une seule à chaque nombre.',
            'Celui de Malo : deux nombres différents ne peuvent pas avoir la même image.',
            'Les deux sont impossibles : une fonction associe un seul nombre à un seul autre.',
            'Aucun des deux : une fonction peut prendre n\'importe quelle valeur en n\'importe quel point.'
          ],
          answer: 0,
          points: 2,
          correction: 'La règle porte sur un seul sens, et c\'est tout l\'enjeu de la question.<br/><br/>' +
            '<strong>Le relevé de Sarah est impossible.</strong> Elle attribue à un même nombre, $3$, deux images différentes : $8$ et $11$. Or une fonction associe à chaque entrée une sortie <strong>et une seule</strong> — sinon, la question « combien vaut $f(3)$ ? » n\'aurait pas de réponse.<br/><br/>' +
            '<strong>Le relevé de Malo est possible.</strong> Deux nombres différents, $3$ et $7$, y ont la même image $8$. Rien ne l\'interdit : cela signifie simplement que $8$ possède deux antécédents. C\'est le cas de $f(x) = x^2$, où $3$ et $-3$ ont tous deux pour image $9$.<br/><br/>' +
            'À retenir : <strong>une seule image par nombre, mais autant d\'antécédents qu\'on veut.</strong>'
        },
        /* Q4 RÉÉCRITE le 2026-09-13. Elle posait une question de cours à
           quatre affirmations, où la bonne se reconnaissait par sa formulation
           plutôt que par un raisonnement. Elle demande maintenant une réponse
           que RIEN dans l'énoncé ne désigne : la donnée utile n'est pas celle
           qu'on croit, puisqu'il faut d'abord remonter à un antécédent, puis
           s'en servir pour calculer une image. Aucune étape n'est annoncée.
           C'est « chercher », au sens du modèle de Q4 de 3e-thales.js. */
        {
          statement: 'Une fonction $f$ est définie par $f(x) = 4x - 5$.<br/><br/>' +
            'On sait que le nombre $a$ a pour image $23$ par $f$.<br/><br/>' +
            'Quelle est alors l\'image de $a + 2$ par $f$ ?',
          type: 'numeric',
          answer: 31,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Rien dans l\'énoncé ne donne $a$ : il faut commencer par le trouver, alors que la question porte sur un autre nombre.<br/><br/>' +
            '<strong>Première étape, non signalée : retrouver $a$.</strong> Dire que $a$ a pour image $23$, c\'est dire que $a$ est un antécédent de $23$. On résout donc $4a - 5 = 23$, soit $4a = 28$, donc $a = 7$.<br/><br/>' +
            '<strong>Seconde étape : calculer l\'image demandée.</strong> On cherche l\'image de $a + 2 = 9$ : $f(9) = 4 \\times 9 - 5 = 36 - 5 = 31$.<br/><br/>' +
            'Contrôle : entre $7$ et $9$, l\'entrée augmente de $2$ ; comme chaque unité ajoute $4$, la sortie devait augmenter de $8$. Et $23 + 8 = 31$.'
        },
        /* Q5 RÉÉCRITE le 2026-09-13. Elle demandait de calculer $f(-3)$, soit
           la troisième application numérique de l'évaluation. Elle demande
           maintenant d'expliquer pourquoi le raisonnement CHIFFRÉ d'un élève
           nommé échoue : produire une explication, pas un nombre. C'est
           « communiquer », sur le modèle de Q5 de 3e-thales.js. L'erreur
           soumise au jugement est celle que la fiche professeur traite en
           premier, et le schéma « un antécédent ne se calcule pas, il se
           résout » sert de remédiation : la boucle est fermée entre le
           diagnostic, la figure et l'évaluation. */
        {
          statement: 'La fonction $f$ est définie par $f(x) = 3x + 2$. On demande à Yanis l\'<strong>antécédent de $17$</strong> par $f$.<br/><br/>' +
            'Il écrit : « $f(17) = 3 \\times 17 + 2 = 53$, donc l\'antécédent de $17$ est $53$. »<br/><br/>' +
            'Sa réponse est incorrecte. Quelle affirmation explique le mieux pourquoi ?',
          type: 'multiple-choice',
          options: [
            'Il a calculé une image au lieu de résoudre une équation : il fallait chercher $x$ tel que $3x + 2 = 17$, ce qui donne $5$. Remplacer sa réponse dans la fonction l\'aurait alerté, car $f(53)$ ne vaut pas $17$.',
            'Il a fait une erreur de calcul : $3 \\times 17 + 2$ ne vaut pas $53$.',
            'Le nombre $17$ n\'a pas d\'antécédent par cette fonction, car il est impair.',
            'Il aurait dû diviser $17$ par $3$, puis retirer $2$, ce qui donne environ $3{,}67$.'
          ],
          answer: 0,
          points: 2,
          correction: 'Le calcul de Yanis est exact ligne à ligne : $3 \\times 17 + 2$ vaut bien $53$. C\'est la <strong>question à laquelle il répond</strong> qui n\'est pas la bonne.<br/><br/>' +
            'Chercher une <strong>image</strong>, c\'est remplacer : on connaît $x$, on calcule. Chercher un <strong>antécédent</strong>, c\'est résoudre : on connaît la sortie, on remonte vers l\'entrée. Yanis a appliqué la fonction au nombre donné, donc il a calculé l\'image de $17$.<br/><br/>' +
            'La bonne démarche : $3x + 2 = 17$, donc $3x = 15$, donc $x = 5$. L\'antécédent de $17$ est $5$.<br/><br/>' +
            '<strong>Le contrôle qui aurait suffi</strong> : remplacer sa réponse dans la fonction. $f(53) = 161$, et non $17$ — l\'erreur se voyait en une ligne, sans relire le raisonnement.'
        }
      ]
    }
  }
);
