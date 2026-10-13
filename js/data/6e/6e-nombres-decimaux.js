/* =========================================================
   Spark Learning – data/6e/6e-nombres-decimaux.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-nombres-decimaux',
    level: 1, subject: 'maths',
    icon: '🔢',
    title: 'Nombres entiers et décimaux',
    subtitle: 'Lire, écrire, comparer, ranger',
    keywords: ['Chiffre', 'Décimal', 'Valeur positionnelle', 'Comparer', 'Ranger'],
    physics: false,

    cours: {
      /* « Decouvrir » reecrit le 2026-09-13. Chapitre technique : pas d'anecdote
         plaquee. Entree retenue = la difficulte REELLE qui a fait inventer les
         decimaux, mesurer entre deux graduations. Le double decimetre est dans
         la trousse de l'eleve, la question se pose donc vraiment, et aucun
         entier n'y repond. L'erreur 1,12 > 1,9, qui etait le point fort de
         l'ancienne intro, est conservee telle quelle. */
      intro: 'Mesure la longueur de ta trousse avec une règle graduée. Il y a de fortes chances qu\'elle ne tombe pas pile sur une graduation : elle fait plus de $18$ cm, moins de $19$ cm. Que répondre alors ?<br/><br/>' +
        'Dire « environ $18$ » est insuffisant dès qu\'il faut découper une planche ou commander une pièce. C\'est le problème qu\'ont rencontré, pendant des siècles, tous ceux qui mesuraient : les entiers ne suffisent pas, parce que le monde ne se laisse pas mesurer en nombres ronds.<br/><br/>' +
        'La solution trouvée est d\'une simplicité redoutable : on continue de couper en dix. Chaque centimètre est partagé en $10$ millimètres, et l\'on écrit ce qui dépasse à droite d\'une virgule. Votre trousse mesure $18{,}4$ cm — c\'est-à-dire $18$ centimètres et $4$ dixièmes.<br/><br/>' +
        'Un <strong>nombre décimal</strong> a donc une partie entière (à gauche de la virgule) et une partie décimale (à droite). Ainsi $3{,}75$, c\'est $3$ unités $+$ $7$ dixièmes $+$ $5$ centièmes.<br/><br/>' +
        '<strong>Une vigilance s\'impose aussitôt</strong> : on croit souvent que $1{,}12 > 1{,}9$ parce que « $12 > 9$ ». Ce raisonnement d\'entier ne fonctionne plus ici. Il faut comparer position par position en partant de la gauche : les dixièmes ($1$ contre $9$) tranchent déjà, et $1{,}9 > 1{,}12$.<br/><br/>' +
        'Tout repose sur la <strong>valeur positionnelle</strong> : la valeur d\'un chiffre dépend de sa place. Avoir plus de chiffres ne veut pas dire être plus grand.',

      definitions: [
        { term: 'Partie entière', def: 'Les chiffres à gauche de la virgule. Pour $47{,}35$, la partie entière est $47$.' },
        { term: 'Partie décimale', def: 'Les chiffres à droite de la virgule. Pour $47{,}35$, la partie décimale est $35$ (3 dixièmes et 5 centièmes).' },
        { term: 'Valeur positionnelle', def: 'La valeur d\'un chiffre dépend de sa position : dixièmes ($\\times \\frac{1}{10}$), centièmes ($\\times \\frac{1}{100}$), millièmes ($\\times \\frac{1}{1000}$).' },
        { term: 'Encadrement', def: 'Placer un nombre entre les deux entiers consécutifs qui l\'entourent : $7 < 7{,}83 < 8$. On dit que $7$ et $8$ encadrent $7{,}83$ à l\'unité près.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Identifier</strong> la partie entière et la partie décimale. <em>Exemple :</em> $56{,}709$ → partie entière = $56$, dixièmes = $7$, centièmes = $0$, millièmes = $9$.',
          '<strong>Repérer la valeur positionnelle</strong> de chaque chiffre. <em>Exemple :</em> dans $3{,}75$, le $7$ vaut $7 \\times 0{,}1 = 0{,}7$ et le $5$ vaut $5 \\times 0{,}01 = 0{,}05$.',
          '<strong>Comparer</strong> : aligner les virgules et comparer chiffre par chiffre en partant de la gauche. <em>Exemple :</em> $2{,}9 > 2{,}50$ car les dixièmes ($9 > 5$) suffisent.',
          '<strong>Ranger</strong> : du plus petit au plus grand (croissant) ou l\'inverse (décroissant).'
        ]
      },
      example: {
        statement: 'Ranger dans l\'ordre croissant : $5{,}07$ ; $5{,}7$ ; $5{,}007$ ; $5{,}70$.',
        steps: [
          'Parties entières toutes égales à $5$.',
          'Dixièmes : $5{,}007$ a $0$ dixième, $5{,}07$ a $0$ dixième, $5{,}7$ et $5{,}70$ ont $7$ dixièmes.',
          'Pour $5{,}007$ vs $5{,}07$ : centièmes $0 < 7$, donc $5{,}007 < 5{,}07$.',
          '$5{,}7 = 5{,}70$ (même valeur).'
        ],
        answer: '$5{,}007 < 5{,}07 < 5{,}7 = 5{,}70$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Nombres décimaux',
        title: 'Positionner des décimaux proches sur une droite graduée',
        description: 'Sur l\'exemple du cours, $5{,}007$, $5{,}07$ et $5{,}7$ ($= 5{,}70$) se comparent en regardant les dixièmes, puis les centièmes.',
        svg: `
          <svg viewBox="0 0 360 220" role="img" aria-labelledby="decimaux-graph-title decimaux-graph-desc">
            <title id="decimaux-graph-title">Droite graduee comparant 5,007 ; 5,07 et 5,7</title>
            <desc id="decimaux-graph-desc">Le schema montre une droite graduee de 5,0 a 5,8 avec les points 5,007 ; 5,07 et 5,7 places selon leur valeur, 5,7 et 5,70 etant le meme point.</desc>
            <rect x="35" y="14" width="290" height="30" rx="12" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="annotation-label" x="48" y="34">Ordre : 5,007 &lt; 5,07 &lt; 5,7 = 5,70</text>
            <line class="grid-line" x1="40" y1="132" x2="40" y2="148"></line>
            <line class="grid-line" x1="75" y1="132" x2="75" y2="148"></line>
            <line class="grid-line" x1="110" y1="132" x2="110" y2="148"></line>
            <line class="grid-line" x1="145" y1="132" x2="145" y2="148"></line>
            <line class="grid-line" x1="180" y1="132" x2="180" y2="148"></line>
            <line class="grid-line" x1="215" y1="132" x2="215" y2="148"></line>
            <line class="grid-line" x1="250" y1="132" x2="250" y2="148"></line>
            <line class="grid-line" x1="285" y1="132" x2="285" y2="148"></line>
            <line class="grid-line" x1="320" y1="132" x2="320" y2="148"></line>
            <line class="axis" x1="30" y1="140" x2="330" y2="140"></line>
            <text class="tick-label" x="32" y="162">5,0</text>
            <text class="tick-label" x="67" y="162">5,1</text>
            <text class="tick-label" x="102" y="162">5,2</text>
            <text class="tick-label" x="137" y="162">5,3</text>
            <text class="tick-label" x="172" y="162">5,4</text>
            <text class="tick-label" x="207" y="162">5,5</text>
            <text class="tick-label" x="242" y="162">5,6</text>
            <text class="tick-label" x="277" y="162">5,7</text>
            <text class="tick-label" x="312" y="162">5,8</text>
            <line class="guide-line" x1="42" y1="140" x2="42" y2="100"></line>
            <circle class="plot-point-alt" cx="42" cy="140" r="5"></circle>
            <text class="annotation-label" x="14" y="92">5,007</text>
            <line class="guide-line" x1="65" y1="140" x2="65" y2="178"></line>
            <circle class="plot-point-alt" cx="65" cy="140" r="5"></circle>
            <text class="annotation-label" x="50" y="196">5,07</text>
            <line class="guide-line" x1="285" y1="140" x2="285" y2="100"></line>
            <circle class="plot-point" cx="285" cy="140" r="6"></circle>
            <text class="annotation-label" x="246" y="92">5,7 = 5,70</text>
          </svg>
        `,
        notes: [
          'Les parties entières valent toutes $5$ : on compare donc les dixièmes en premier.',
          '$5{,}007$ et $5{,}07$ ont $0$ dixième ; on compare alors les centièmes : $0 < 7$, donc $5{,}007 < 5{,}07$.',
          '$5{,}7$ a $7$ dixièmes, largement plus que les deux précédents : c\'est le plus grand des trois valeurs distinctes.',
          'Ajouter un zéro à droite ne change pas la valeur : $5{,}7 = 5{,}70$, ils occupent donc le même point sur la droite.'
        ],
        reading: 'Plus de chiffres après la virgule ne signifie pas « plus grand » : $5{,}007$ a trois décimales mais reste le plus petit des quatre nombres.',
        caption: 'Droite graduée positionnant $5{,}007$, $5{,}07$ et $5{,}7$ ($= 5{,}70$) selon l\'exemple du cours.'
      },
      /* Schemas secondaires (2026-09-12). La figure principale place trois
         decimaux sur une droite graduee : elle montre le RESULTAT de la
         comparaison, une fois qu'on sait comparer. Elle ne dit ni d'ou vient
         la valeur d'un chiffre selon sa colonne, ni pourquoi le raisonnement
         « 12 > 9 donc 1,12 > 1,9 » echoue — l'erreur que l'intro du chapitre
         designe explicitement comme la plus frequente. Les trois figures
         ci-dessous prennent le probleme dans cet ordre : d'abord ce que vaut
         un chiffre, puis le piege lui-meme, enfin l'encadrement entier qui
         redonne un ordre de grandeur quand le detail des decimales embrouille. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Valeur positionnelle',
          title: 'Ce que vaut chaque chiffre de $3{,}75$',
          description: 'Un chiffre ne vaut pas ce qu\'il est écrit, il vaut ce que sa <strong>colonne</strong> lui donne : dans $3{,}75$, le $7$ ne vaut pas sept, il vaut $0{,}7$, et le $5$ ne vaut pas cinq, il vaut $0{,}05$.',
          svg: `
            <svg viewBox="0 0 400 186" role="img" aria-labelledby="decimaux-numeration-title decimaux-numeration-desc">
              <title id="decimaux-numeration-title">Tableau de numeration decomposant le nombre 3,75</title>
              <desc id="decimaux-numeration-desc">Un tableau de numeration a trois colonnes est dessine : unites, dixiemes et centiemes. Le chiffre 3 est place dans la colonne des unites, le chiffre 7 dans la colonne des dixiemes et le chiffre 5 dans la colonne des centiemes. Une virgule separe la colonne des unites des deux colonnes suivantes. Sous chaque colonne est indiquee la valeur reelle du chiffre qui s y trouve : le 3 vaut 3, le 7 vaut 0,7 et le 5 vaut 0,05. Une derniere ligne rappelle que la somme de ces trois valeurs, 3 plus 0,7 plus 0,05, redonne bien le nombre 3,75. Chaque colonne vaut dix fois moins que celle placee immediatement a sa gauche.</desc>

              <text class="tick-label" x="200" y="16" text-anchor="middle">Le nombre 3,75 rangé dans son tableau de numération</text>

              <!-- EN-TETES puis CHIFFRES puis VALEURS : trois bandes horizontales
                   alignees sur les memes colonnes. Le tableau est le sujet de la
                   figure, il reste donc en frame-line ; les separateurs internes
                   descendent en grid-line pour ne pas concurrencer le cadre. -->
              <text class="tick-label" x="88" y="38" text-anchor="middle">unités</text>
              <text class="tick-label" x="200" y="38" text-anchor="middle">dixièmes</text>
              <text class="tick-label" x="312" y="38" text-anchor="middle">centièmes</text>

              <rect class="frame-line" x="32" y="46" width="336" height="46" fill="none"></rect>
              <line class="grid-line" x1="144" y1="46" x2="144" y2="92"></line>
              <line class="grid-line" x1="256" y1="46" x2="256" y2="92"></line>

              <text class="annotation-label" x="88" y="79" text-anchor="middle" font-size="26">3</text>
              <text class="annotation-label" x="200" y="79" text-anchor="middle" font-size="26">7</text>
              <text class="annotation-label" x="312" y="79" text-anchor="middle" font-size="26">5</text>

              <!-- La virgule se pose SUR le trait de separation unites/dixiemes :
                   c'est exactement ce que fait la virgule dans le nombre ecrit,
                   et le rapprochement doit etre visible sans etiquette. -->
              <text class="annotation-label" x="144" y="88" text-anchor="middle" font-size="26">,</text>

              <!-- Fleches de descente vers la valeur reelle. Une par colonne, en
                   trait d'aide : elles portent le raisonnement, pas le dessin. -->
              <line class="guide-line" x1="88" y1="96" x2="88" y2="118"></line>
              <line class="guide-line" x1="200" y1="96" x2="200" y2="118"></line>
              <line class="guide-line" x1="312" y1="96" x2="312" y2="118"></line>

              <text class="annotation-label" x="88" y="136" text-anchor="middle">vaut 3</text>
              <text class="annotation-label" x="200" y="136" text-anchor="middle">vaut 0,7</text>
              <text class="annotation-label" x="312" y="136" text-anchor="middle">vaut 0,05</text>

              <line class="guide-line" x1="32" y1="150" x2="368" y2="150"></line>
              <text class="tick-label" x="200" y="176" text-anchor="middle">3 + 0,7 + 0,05 = 3,75</text>
            </svg>
          `,
          notes: [
            'Chaque colonne vaut <strong>dix fois moins</strong> que celle qui la précède : unités, puis dixièmes ($\\times 0{,}1$), puis centièmes ($\\times 0{,}01$).',
            'Le $7$ occupe la colonne des dixièmes, il vaut donc $7 \\times 0{,}1 = 0{,}7$ ; le $5$ occupe celle des centièmes, il vaut $5 \\times 0{,}01 = 0{,}05$.',
            'En additionnant les valeurs réelles on retrouve le nombre entier de départ : $3 + 0{,}7 + 0{,}05 = 3{,}75$. C\'est la vérification qui prouve qu\'on a bien lu le tableau.'
          ],
          reading: 'Lis le tableau de haut en bas, colonne par colonne. La ligne du milieu donne le chiffre écrit, la ligne du bas donne ce qu\'il vaut vraiment. Un même chiffre $7$ vaudrait $70$ dans la colonne des dizaines et $0{,}07$ dans celle des centièmes : seule la position décide.',
          caption: 'Décomposition positionnelle de $3{,}75$ : $3$ unités, $7$ dixièmes et $5$ centièmes.'
        },
        {
          theme: 'maths',
          kicker: 'Le piège du chapitre',
          title: 'Pourquoi $1{,}9$ est plus grand que $1{,}12$',
          description: 'Comparer deux décimaux, ce n\'est <strong>jamais</strong> comparer les parties décimales comme des entiers. On aligne les virgules et on descend colonne par colonne : la première différence tranche, et ici les dixièmes suffisent.',
          svg: `
            <svg viewBox="0 0 400 214" role="img" aria-labelledby="decimaux-piege-title decimaux-piege-desc">
              <title id="decimaux-piege-title">Comparaison colonne par colonne de 1,9 et 1,12</title>
              <desc id="decimaux-piege-desc">Deux nombres sont ecrits l un sous l autre, alignes sur leur virgule : 1,9 en haut et 1,12 en dessous. Trois colonnes sont marquees : les unites, les dixiemes et les centiemes. Dans la colonne des unites les deux nombres portent le meme chiffre 1, la comparaison ne tranche donc pas et on passe a la colonne suivante. Dans la colonne des dixiemes, le premier nombre porte un 9 et le second un 1 : neuf est plus grand que un, la comparaison est terminee et le premier nombre est le plus grand. La colonne des centiemes est barree car on ne la lit meme pas. En bas figure la conclusion correcte, 1,9 est superieur a 1,12, puis en dessous, en trait plus faible et tirete, le raisonnement errone qui consiste a dire douze est plus grand que neuf donc 1,12 serait le plus grand.</desc>

              <text class="tick-label" x="200" y="16" text-anchor="middle">On aligne les virgules, puis on descend colonne par colonne</text>

              <!-- COLONNES avant les nombres : la comparaison se joue sur
                   l'alignement, il doit exister avant les chiffres qu'on y pose.
                   Chaque colonne est une bande verticale en grid-line. -->
              <rect x="152" y="28" width="72" height="84" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="none"></rect>
              <line class="grid-line" x1="152" y1="28" x2="152" y2="112"></line>
              <line class="grid-line" x1="224" y1="28" x2="224" y2="112"></line>
              <line class="grid-line" x1="296" y1="28" x2="296" y2="112"></line>

              <text class="tick-label" x="116" y="40" text-anchor="middle">unités</text>
              <text class="tick-label" x="188" y="40" text-anchor="middle">dixièmes</text>
              <text class="tick-label" x="260" y="40" text-anchor="middle">centièmes</text>

              <!-- Les deux nombres sur la MEME grille de colonnes et a la meme
                   taille : toute autre difference se lirait comme un argument. -->
              <text class="annotation-label" x="116" y="72" text-anchor="middle" font-size="24">1</text>
              <text class="annotation-label" x="188" y="72" text-anchor="middle" font-size="24">9</text>
              <text class="label-soft" x="260" y="72" text-anchor="middle" font-size="24">0</text>

              <text class="annotation-label" x="116" y="106" text-anchor="middle" font-size="24">1</text>
              <text class="annotation-label" x="188" y="106" text-anchor="middle" font-size="24">1</text>
              <text class="label-soft" x="260" y="106" text-anchor="middle" font-size="24">2</text>

              <text class="tick-label" x="76" y="72" text-anchor="end">1,9</text>
              <text class="tick-label" x="76" y="106" text-anchor="end">1,12</text>

              <!-- Verdict de chaque colonne, lu de gauche a droite. La colonne
                   qui tranche porte l'aplat d'accent pose plus haut ; celle
                   qu'on ne lit pas est barree, pas seulement effacee. -->
              <text class="tick-label" x="116" y="130" text-anchor="middle">égaux</text>
              <text class="annotation-label" x="188" y="130" text-anchor="middle">9 &gt; 1</text>
              <line class="guide-line" x1="238" y1="126" x2="282" y2="126"></line>
              <text class="label-soft" x="260" y="142" text-anchor="middle">jamais lue</text>

              <text class="annotation-label" x="200" y="168" text-anchor="middle">1,9 &gt; 1,12</text>

              <!-- L'ERREUR sous la conclusion juste, en teinte faible et cadre
                   tirete : l'oeil rencontre la bonne forme en premier. -->
              <line class="guide-line" x1="24" y1="180" x2="376" y2="180"></line>
              <text class="label-soft" x="200" y="202" text-anchor="middle">à éviter : dire 12 &gt; 9 donc 1,12 serait le plus grand</text>
            </svg>
          `,
          notes: [
            'Les parties entières sont égales ($1$ et $1$) : cette colonne ne tranche pas, on passe à la suivante.',
            'Les dixièmes tranchent immédiatement : $9 > 1$, donc $1{,}9 > 1{,}12$. <strong>La comparaison s\'arrête là</strong>, les centièmes ne sont même pas lus.',
            'Le raisonnement « $12 > 9$ » compare $12$ centièmes à $9$ dixièmes, c\'est-à-dire deux grandeurs qui n\'ont pas la même unité. Pour les comparer honnêtement il faudrait écrire $1{,}90$ et $1{,}12$, et alors $90 > 12$.'
          ],
          reading: 'Descends les colonnes de gauche à droite et arrête-toi à la <strong>première</strong> où les chiffres diffèrent : c\'est elle qui décide, tout ce qui suit est inutile. Si une écriture a moins de décimales que l\'autre, complète-la par des zéros à droite ($1{,}9 = 1{,}90$) pour que les colonnes se correspondent.',
          caption: 'Comparaison position par position : les dixièmes suffisent à conclure que $1{,}9 > 1{,}12$.'
        },
        {
          theme: 'maths',
          kicker: 'Encadrement',
          title: 'Entre quels entiers se trouve $7{,}83$ ?',
          description: 'Tout décimal est coincé entre <strong>deux entiers consécutifs</strong>. Les lire sur la droite graduée donne un ordre de grandeur immédiat, avant même de regarder le détail des décimales.',
          svg: `
            <svg viewBox="0 0 400 152" role="img" aria-labelledby="decimaux-encadrement-title decimaux-encadrement-desc">
              <title id="decimaux-encadrement-title">Encadrement de 7,83 entre les entiers 7 et 8</title>
              <desc id="decimaux-encadrement-desc">Une droite graduee va de l entier 7 a l entier 8. L intervalle entre ces deux entiers est partage en dix graduations egales qui correspondent aux dixiemes. Le nombre 7,83 est place par un point plein entre la huitieme et la neuvieme graduation, donc nettement plus pres de 8 que de 7. Deux traits verticaux marquent les bornes 7 et 8 et une bande coloree couvre l intervalle qui va de 7 jusqu au point. On lit ainsi l encadrement 7 inferieur a 7,83 inferieur a 8. Une mention indique que le point est plus proche de 8, donc que l arrondi a l unite vaut 8.</desc>

              <!-- La bande d'accent part de la borne basse et s'arrete AU POINT :
                   elle materialise « ce qui depasse 7 », pas l'intervalle entier,
                   sinon la position du nombre dedans ne se lirait plus. -->
              <!-- 2026-09-12 : la bande s'arretait a 303 et le point etait pose
                   au meme endroit. Or l'intervalle [7 ; 8] mesure 320 unites,
                   donc 7,83 se place a 46 + 0,83 x 320 = 311,6 — pas a 303, qui
                   correspond a 7,803. Le point tombait donc a 1 unite de la
                   graduation 7,8 (0,3 mm a l'impression) au lieu de 9,6 unites
                   (3,1 mm) : les 3 centiemes annonces par la note 2 (« a la 8e
                   graduation, plus un peu ») etaient litteralement invisibles,
                   dans le chapitre meme qui enseigne que le rang d'une decimale
                   change la valeur. Bande et point ramenes a 311,6. -->
              <rect x="46" y="70" width="265.6" height="9" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" stroke="none"></rect>

              <line class="grid-line" x1="78" y1="63" x2="78" y2="75"></line>
              <line class="grid-line" x1="110" y1="63" x2="110" y2="75"></line>
              <line class="grid-line" x1="142" y1="63" x2="142" y2="75"></line>
              <line class="grid-line" x1="174" y1="63" x2="174" y2="75"></line>
              <line class="grid-line" x1="206" y1="63" x2="206" y2="75"></line>
              <line class="grid-line" x1="238" y1="63" x2="238" y2="75"></line>
              <line class="grid-line" x1="270" y1="63" x2="270" y2="75"></line>
              <line class="grid-line" x1="302" y1="63" x2="302" y2="75"></line>
              <line class="grid-line" x1="334" y1="63" x2="334" y2="75"></line>

              <line class="frame-line" x1="30" y1="69" x2="382" y2="69"></line>

              <!-- Les deux bornes entieres en trait fort et pleine hauteur : ce
                   sont elles le sujet, les dixiemes ne sont qu'un quadrillage. -->
              <line class="frame-line" x1="46" y1="54" x2="46" y2="84"></line>
              <line class="frame-line" x1="366" y1="54" x2="366" y2="84"></line>
              <text class="annotation-label" x="46" y="106" text-anchor="middle">7</text>
              <text class="annotation-label" x="366" y="106" text-anchor="middle">8</text>

              <line class="guide-line" x1="311.6" y1="69" x2="311.6" y2="36"></line>
              <circle class="plot-point" cx="311.6" cy="69" r="6"></circle>
              <text class="annotation-label" x="311.6" y="28" text-anchor="middle">7,83</text>

              <text class="tick-label" x="200" y="128" text-anchor="middle">7 &lt; 7,83 &lt; 8</text>
              <text class="label-soft" x="200" y="146" text-anchor="middle">le point tombe après le milieu : arrondi à une unité, 8</text>
            </svg>
          `,
          notes: [
            'Les deux entiers qui encadrent un décimal se lisent directement dans son écriture : la partie entière de $7{,}83$ est $7$, donc $7 < 7{,}83 < 8$.',
            'L\'intervalle est coupé en $10$ graduations : chacune vaut $0{,}1$. Le point se place à la $8^{\\text{e}}$ graduation, plus un peu, puisque $7{,}83$ compte $8$ dixièmes et $3$ centièmes.',
            'Le milieu de l\'intervalle est $7{,}5$. Le point tombe <strong>après</strong> ce milieu, donc l\'arrondi à l\'unité est $8$ et non $7$.'
          ],
          reading: 'Repère d\'abord les deux entiers, c\'est-à-dire les deux traits forts. Compte ensuite les petites graduations depuis celui de gauche : chacune vaut un dixième. Cette lecture grossière suffit souvent pour vérifier qu\'un résultat de calcul est plausible.',
          caption: 'Encadrement à l\'unité : $7 < 7{,}83 < 8$, avec un arrondi à $8$.'
        }
      ],
      formulas: [
        '$3{,}75 = 3 + \\dfrac{7}{10} + \\dfrac{5}{100} = 3 + 0{,}7 + 0{,}05$',
        'Comparer : $a{,}bc < a{,}bd$ si $c < d$ (à partie entière égale)',
        'Encadrement entier : tout décimal est compris entre deux entiers consécutifs, par exemple $7 < 7{,}83 < 8$'
      ],
      recap: [
        'Un nombre décimal a une partie entière et une partie décimale séparées par une virgule.',
        'On compare chiffre par chiffre de gauche à droite : les dixièmes d\'abord, puis les centièmes.',
        'Plus de chiffres après la virgule ne signifie pas « plus grand » ($2{,}9 > 2{,}50$).',
        'Ajouter des zéros à droite ne change pas la valeur : $2{,}5 = 2{,}50 = 2{,}500$.'
      ],
      piege: 'Piège classique : affirmer que $1{,}12 > 1{,}9$ parce que $12 > 9$. Ce raisonnement ne fonctionne pas pour les décimaux : il faut comparer les dixièmes d\'abord : $9 > 1$, donc $1{,}9 > 1{,}12$.'
    },

    quiz: [
      { q: 'Quel est le chiffre des centièmes dans le nombre $47{,}356$ ?', options: ['$4$', '$7$', '$3$', '$5$'], answer: 3, correction: 'Dans $47{,}356$ : $3$ = dixièmes, $5$ = centièmes, $6$ = millièmes. Le chiffre des centièmes est $5$.' },
      { q: 'Quel est le plus grand parmi : $2{,}45$ ; $2{,}9$ ; $2{,}09$ ; $2{,}50$ ?', options: ['$2{,}45$', '$2{,}9$', '$2{,}09$', '$2{,}50$'], answer: 1, correction: 'Dixièmes : $2{,}9$ a $9$ dixièmes. $2{,}9$ est le plus grand.' },
      { q: 'Un élève affirme que $2{,}50 > 2{,}9$ car « $50 > 9$ ». Quelle réponse corrige cette erreur ?', options: ['Il a raison car $50 > 9$.', 'Il se trompe : on compare les dixièmes d\'abord — $9 > 5$, donc $2{,}9 > 2{,}50$.', 'Il se trompe : il faut comparer les centièmes.', 'Il se trompe car $2{,}50 = 2{,}5$ et $2{,}5 = 2{,}9$.'], answer: 1, correction: 'Dixièmes : $9 > 5$, donc $2{,}9 > 2{,}50$.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        // Quatre TACHES distinctes (2026-09-08) : avant, les quatre contextes
        // rehabillaient tous « range ces quatre nombres et donne le plus
        // petit », si bien que le manuel imprimait trois fois le meme tri.
        const variante = pick(['comparer', 'encadrer', 'arrondir', 'chiffreDeRang']);

        if (variante === 'comparer') {
          const context = pick([
            'En classe de sport, les performances au saut en longueur sont',
            'Les résultats d\'une expérience en laboratoire sont',
            'Les prix relevés dans quatre magasins sont',
            'Les temps de course (en secondes) sont'
          ]);
          const a = randFloat(1, 9, 1);
          const b = randFloat(1, 9, 2);
          const c = randFloat(1, 9, 1);
          const d = randFloat(1, 9, 2);
          const nums = [a, b, c, d];
          nums.sort((x, y) => x - y);
          const minVal = nums[0];
          return {
            statement: `${context} $${fr(a)}$ ; $${fr(b)}$ ; $${fr(c)}$ ; $${fr(d)}$. Lequel est le plus petit ?`,
            answer: minVal,
            tolerance: 0.001,
            unit: '',
            hint: 'Compare d\'abord les parties entières. Si elles sont égales, compare les dixièmes, puis les centièmes.',
            solution: [
              `Rangement croissant : ${nums.map(n => `$${fr(n)}$`).join(' < ')}.`,
              `Le plus petit est $${fr(minVal)}$.`
            ]
          };
        }

        if (variante === 'encadrer') {
          // Encadrement entre deux entiers consecutifs : attendu explicite du
          // programme, et tache differente du simple rangement.
          const v = randFloat(2, 18, 2);
          const bas = Math.floor(v);
          // Chaque contexte porte son unite : sans elle, « le prix d'un livre
          // est de 7,58 » n'a pas de sens (releve sur le PDF du 2026-09-08).
          const objet = pick([
            { s: 'La masse d\'un colis est de', u: 'kg' },
            { s: 'La longueur d\'une planche est de', u: 'm' },
            { s: 'Le prix d\'un livre est de', u: '€' },
            { s: 'La taille d\'un plant est de', u: 'cm' }
          ]);
          return {
            statement: `${objet.s} $${fr(v)}$ ${objet.u}. Encadre ce nombre entre deux entiers consécutifs : ` +
              `quel est le plus <strong>petit</strong> des deux ?`,
            answer: bas,
            tolerance: 0,
            unit: '',
            hint: `L'entier juste en dessous, c'est la partie entière : le nombre qui précède la virgule.`,
            solution: [
              `On lit la partie entière de $${fr(v)}$ : c'est $${bas}$.`,
              `L'entier suivant est $${bas + 1}$.`,
              `L'encadrement s'écrit donc $${bas} < ${fr(v)} < ${bas + 1}$.`,
              `Le plus petit des deux entiers est $${bas}$.`
            ]
          };
        }

        if (variante === 'arrondir') {
          const v = randFloat(1, 40, 2);
          const rang = pick(['unité', 'dixième']);
          const arrondi = rang === 'unité'
            ? Math.round(v)
            : parseFloat(v.toFixed(1));
          return {
            // « à l'<strong>dixième</strong> » : élision fautive relevée sur le
            // PDF. L'article dépend du rang, il est donc porté par la variante.
            statement: `Arrondis $${fr(v)}$ ${rang === 'unité' ? "à l'<strong>unité</strong> la plus proche" : 'au <strong>dixième</strong> le plus proche'}.`,
            answer: arrondi,
            tolerance: 0.001,
            unit: '',
            hint: rang === 'unité'
              ? `Regarde le chiffre des dixièmes : s'il vaut $5$ ou plus, on arrondit à l'entier supérieur.`
              : `Regarde le chiffre des centièmes : s'il vaut $5$ ou plus, on augmente le chiffre des dixièmes de $1$.`,
            solution: [
              rang === 'unité'
                ? `Pour arrondir à l'unité, on observe le chiffre des dixièmes de $${fr(v)}$.`
                : `Pour arrondir au dixième, on observe le chiffre des centièmes de $${fr(v)}$.`,
              `S'il vaut $5$ ou plus, on arrondit au-dessus ; sinon, on garde la valeur.`,
              `Résultat : $${fr(arrondi)}$.`
            ]
          };
        }

        // « chiffreDeRang » : lire la position d'un chiffre. Tache de lecture
        // et non de calcul, souvent la vraie difficulte du chapitre.
        const ent = rand(10, 99);
        const dix = rand(1, 9);
        const cent = rand(1, 9);
        const v = parseFloat(`${ent}.${dix}${cent}`);
        const rang = pick(['dixièmes', 'centièmes']);
        const reponse = rang === 'dixièmes' ? dix : cent;
        return {
          statement: `Dans le nombre $${fr(v)}$, quel est le chiffre des <strong>${rang}</strong> ?`,
          answer: reponse,
          tolerance: 0,
          unit: '',
          hint: `Après la virgule viennent d'abord les dixièmes, puis les centièmes.`,
          solution: [
            `On écrit $${fr(v)}$ et on repère la virgule.`,
            `Juste après la virgule : le chiffre des dixièmes, ici $${dix}$.`,
            `Ensuite : le chiffre des centièmes, ici $${cent}$.`,
            `Le chiffre des ${rang} est donc $${reponse}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Lors d\'une compétition de saut en longueur, quatre élèves réalisent : Léa $4{,}35$ m, Tom $4{,}8$ m, Inès $4{,}09$ m et Rayan $4{,}50$ m.',
      tasks: [
        'Range ces quatre performances dans l\'ordre croissant.',
        'Quelle est la différence entre la meilleure et la moins bonne performance ?',
        'Tom affirme avoir sauté « plus de 4 mètres et demi ». Est-ce exact ?'
      ],
      solutions: [
        'Ordre croissant : $4{,}09 < 4{,}35 < 4{,}50 < 4{,}8$.',
        'Différence : $4{,}8 - 4{,}09 = 0{,}71$ m.',
        '$4{,}8 > 4{,}5$, donc oui, Tom a bien sauté plus de $4$ m et demi.'
      ],
      finalAnswer: 'Tom est premier avec $4{,}8$ m ; Inès est dernière avec $4{,}09$ m.'
    },

    evaluation: {
      title: 'Évaluation — Nombres entiers et décimaux',
      duration: '15 min',
      questions: [
        { statement: 'Dans le nombre $56{,}709$, quel est le chiffre des dixièmes ?', type: 'numeric', answer: 7, tolerance: 0, unit: '', points: 2, correction: 'Le chiffre des dixièmes est $7$.' },
        { statement: 'Range dans l\'ordre croissant : $3{,}07$ ; $3{,}7$ ; $3{,}007$ ; $3{,}70$. Quel nombre est le plus petit ?', type: 'multiple-choice', options: ['$3{,}07$', '$3{,}7$', '$3{,}007$', '$3{,}70$'], answer: 2, points: 2, correction: '$3{,}007 < 3{,}07 < 3{,}7 = 3{,}70$.' },
        { statement: 'Encadre $7{,}83$ entre deux entiers consécutifs. Donne l\'entier inférieur.', type: 'numeric', answer: 7, tolerance: 0, unit: '', points: 2, correction: '$7 < 7{,}83 < 8$.' },
        { statement: 'Quelle est la décomposition correcte de $4{,}065$ ?', type: 'multiple-choice', options: ['$4 + 0{,}6 + 0{,}05$', '$4 + 0{,}06 + 0{,}005$', '$4 + 0{,}6 + 0{,}005$', '$4 + 0{,}065$'], answer: 1, points: 2, correction: '$4{,}065 = 4 + 0{,}06 + 0{,}005$.' },
        { statement: 'Combien y a-t-il d\'entiers entre $5{,}3$ et $5{,}4$ ?', type: 'numeric', answer: 0, tolerance: 0, unit: '', points: 2, correction: 'Aucun entier entre $5{,}3$ et $5{,}4$.' }
      ]
    }
  });
