/* =========================================================
   Spark Learning – data/6e/6e-multiplication.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-multiplication',
    level: 1, subject: 'maths',
    icon: '✖️',
    title: 'Multiplication des entiers et décimaux',
    subtitle: 'Technique posée, placement de la virgule',
    keywords: ['Multiplication', 'Produit', 'Décimaux', 'Calcul posé', 'Retenue'],
    physics: false,

    cours: {
      /* « Decouvrir » reecrit le 2026-09-13. Entree retenue : le placement de la
         virgule, seul endroit ou l'eleve se trompe vraiment — et ou l'erreur
         vaut un facteur 10 ou 100, donc se voit. L'ordre de grandeur denonce
         l'absurdite (32 € de pommes) avant que la regle ne l'explique. La
         demonstration par les fractions de l'ancienne intro est conservee :
         elle etait bonne, elle justifie la regle au lieu de l'asserter. */
      intro: 'Au marché, $2{,}3$ kg de pommes à $1{,}4$ € le kilo. La caissière annonce $32{,}2$ €. Faut-il payer ?<br/><br/>' +
        'Sûrement pas. Un rapide coup d\'œil suffit : un peu plus de $2$ kg à un peu plus de $1$ € le kilo, cela doit faire environ $2$ € — pas $32$. Quelqu\'un a bien multiplié $23$ par $14$, mais a oublié de replacer la virgule. Le résultat juste est $3{,}22$ €.<br/><br/>' +
        'Voilà toute la difficulté de ce chapitre. Multiplier des décimaux revient à <strong>multiplier des entiers</strong>, ce que tu sais déjà faire — puis à replacer la virgule au bon endroit. Et c\'est cette dernière étape, en apparence anodine, qui fait la différence entre $3$ € et $32$ €.<br/><br/>' +
        '<strong>Pourquoi la virgule tombe-t-elle là ?</strong> Parce que $2{,}3 \\times 1{,}4 = \\dfrac{23}{10} \\times \\dfrac{14}{10} = \\dfrac{23 \\times 14}{100} = \\dfrac{322}{100} = 3{,}22$. Les deux dénominateurs se multiplient, d\'où la règle : le nombre de décimales du produit est la <strong>somme</strong> des décimales des deux facteurs.<br/><br/>' +
        'Gardez donc le réflexe de la caissière démasquée : <strong>estimer avant de conclure</strong>. Ici $2{,}3 \\times 1{,}4 \\approx 2 \\times 1 = 2$, le résultat doit être proche de $2$ — ni $0{,}2$, ni $20$.',

      definitions: [
        { term: 'Produit', def: 'Résultat d\'une multiplication. Le produit de $a$ et $b$ est $a \\times b$.' },
        { term: 'Commutativité', def: '$a \\times b = b \\times a$ : l\'ordre des facteurs n\'a pas d\'importance.' },
        { term: 'Distributivité', def: '$a \\times (b + c) = a \\times b + a \\times c$ : on peut « développer » un produit.' },
        { term: 'Règle des décimales', def: 'Le nombre de décimales du produit = somme des décimales des deux facteurs.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Ignorer les virgules</strong> et multiplier comme des entiers. <em>Exemple :</em> $2{,}3 \\times 1{,}4$ → calculer $23 \\times 14 = 322$.',
          '<strong>Compter les décimales</strong> dans les deux facteurs : $2{,}3$ a $1$ décimale et $1{,}4$ a $1$ décimale → total $= 2$.',
          '<strong>Placer la virgule</strong> : $322$ avec $2$ décimales → $3{,}22$.',
          '<strong>Vérifier l\'ordre de grandeur</strong> : $2 \\times 1 = 2$, et $3{,}22 \\approx 2$ ✓'
        ]
      },
      example: {
        statement: 'Calculer $0{,}6 \\times 0{,}7$.',
        steps: [
          'On calcule $6 \\times 7 = 42$.',
          'Nombre de décimales : $1 + 1 = 2$.',
          'On place la virgule : $0{,}42$.',
          'Vérification : $0{,}6 \\times 0{,}7 < 1$ car les deux facteurs sont $< 1$. $0{,}42 < 1$ ✓'
        ],
        answer: '$0{,}6 \\times 0{,}7 = 0{,}42$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Multiplication et distributivité',
        title: 'Découper un rectangle d\'aire pour voir la distributivité',
        description: 'Sur l\'exemple du cours $7 \\times 5{,}2 = 7 \\times 5 + 7 \\times 0{,}2$, l\'aire totale se calcule en additionnant celle des deux morceaux du rectangle.',
        svg: `
          <svg viewBox="0 0 360 260" role="img" aria-labelledby="multiplication-graph-title multiplication-graph-desc">
            <title id="multiplication-graph-title">Rectangle d'aire decoupe pour 7 fois 5,2</title>
            <desc id="multiplication-graph-desc">Le schema montre un rectangle de largeur 5,2 et de hauteur 7 decoupe en deux parties, largeur 5 et largeur 0,2, pour illustrer la distributivite.</desc>
            <line class="frame-line" x1="70" y1="20" x2="70" y2="26"></line>
            <line class="frame-line" x1="220" y1="20" x2="220" y2="26"></line>
            <line class="frame-line" x1="70" y1="20" x2="220" y2="20"></line>
            <text class="axis-label" x="132" y="14">5,2</text>
            <rect x="70" y="30" width="120" height="150" fill="color-mix(in srgb, var(--diagram-accent) 8%, var(--bg-card))"></rect>
            <rect x="190" y="30" width="30" height="150" fill="color-mix(in srgb, var(--accent) 16%, var(--bg-card))"></rect>
            <rect x="70" y="30" width="150" height="150" fill="none" class="frame-line"></rect>
            <line class="guide-line" x1="190" y1="30" x2="190" y2="180"></line>
            <line class="frame-line" x1="52" y1="30" x2="64" y2="30"></line>
            <line class="frame-line" x1="52" y1="180" x2="64" y2="180"></line>
            <line class="frame-line" x1="58" y1="30" x2="58" y2="180"></line>
            <text class="axis-label" x="36" y="108">7</text>
            <text class="axis-label" x="118" y="50">5</text>
            <text class="axis-label" x="193" y="46">0,2</text>
            <text class="annotation-label" x="90" y="112">7 × 5 = 35</text>
            <line class="guide-line" x1="220" y1="105" x2="248" y2="90"></line>
            <text class="annotation-label" x="224" y="86">7 × 0,2 = 1,4</text>
            <rect x="50" y="200" width="270" height="34" rx="12" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="annotation-label" x="64" y="222">Total : 35 + 1,4 = 36,4</text>
          </svg>
        `,
        notes: [
          'Le rectangle représente l\'aire $7 \\times 5{,}2$ : on découpe la largeur $5{,}2$ en $5 + 0{,}2$ pour retrouver un calcul plus simple.',
          'Grand rectangle : $7 \\times 5 = 35$.',
          'Petit rectangle (largeur $0{,}2$ agrandie sur le schéma pour rester lisible) : $7 \\times 0{,}2 = 1{,}4$.',
          'On additionne les deux aires : $35 + 1{,}4 = 36{,}4$, donc $7 \\times 5{,}2 = 36{,}4$.'
        ],
        reading: 'La distributivité $a \\times (b + c) = a \\times b + a \\times c$ se voit directement : l\'aire totale est la somme des deux aires du découpage.',
        caption: 'Découpage d\'aire illustrant $7 \\times 5{,}2 = 7 \\times 5 + 7 \\times 0{,}2 = 36{,}4$ (bande $0{,}2$ non à l\'échelle, agrandie pour la lisibilité).'
      },
      // Schemas secondaires (2026-09-12). La figure principale traite deja la
      // DISTRIBUTIVITE par decoupage d'aire : la redoubler ici n'apprendrait
      // rien. Les trois figures ci-dessous couvrent ce que le chapitre enseigne
      // sans jamais le montrer — la disposition rectangulaire, qui rend la
      // commutativite evidente au lieu de la faire admettre ; la regle des
      // decimales, qui est le coeur du chapitre et son piege ; et la
      // multiplication par 10, 100, 1000, qui est une variante d'exercice a
      // part entiere et l'erreur la plus tenace (« on ajoute un zero »).
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Pourquoi 4 × 6 = 6 × 4',
          title: 'Un seul rectangle, deux lectures',
          description: 'Une multiplication se range en rectangle. En tournant la tête, le <strong>même</strong> rectangle se lit $4$ rangées de $6$ ou $6$ colonnes de $4$ : les jetons n\'ont pas bougé, donc le total non plus. C\'est toute la <strong>commutativité</strong>.',
          svg: `
            <svg viewBox="0 4 382 174" role="img" aria-labelledby="mul-commut-title mul-commut-desc">
              <title id="mul-commut-title">La disposition rectangulaire et la commutativite</title>
              <desc id="mul-commut-desc">Un rectangle de jetons comporte 4 rangees de 6 jetons, soit 24 jetons en tout. A gauche du rectangle, une accolade verticale designe les 4 rangees ; au-dessus, une accolade horizontale designe les 6 colonnes. En lisant par rangees on compte 4 fois 6, en lisant par colonnes on compte 6 fois 4, et les deux lectures portent sur exactement les memes 24 jetons : le total est donc le meme. La conclusion est ecrite a droite : 4 fois 6 egale 6 fois 4 egale 24.</desc>

              <!-- Un SEUL rectangle et non deux : dessiner « 4 par 6 » puis
                   « 6 par 4 » cote a cote laisserait croire a deux collections
                   d'objets differentes, alors que la demonstration tient
                   precisement a ce que ce soient LES MEMES jetons. Ce sont les
                   deux lectures qui changent, pas la figure. -->

              <!-- Reperes des colonnes, en trait le plus fin : ils expliquent le
                   comptage sans concurrencer les jetons, qui sont l'objet. -->
              <line class="grid-line" x1="112" y1="52" x2="112" y2="164"></line>
              <line class="grid-line" x1="146" y1="52" x2="146" y2="164"></line>
              <line class="grid-line" x1="180" y1="52" x2="180" y2="164"></line>
              <line class="grid-line" x1="214" y1="52" x2="214" y2="164"></line>
              <line class="grid-line" x1="248" y1="52" x2="248" y2="164"></line>

              <rect x="95" y="49" width="204" height="118" fill="color-mix(in srgb, var(--diagram-accent) 7%, var(--bg-card))" class="frame-line"></rect>

              <circle class="plot-point" cx="112" cy="66" r="5"></circle>
              <circle class="plot-point" cx="146" cy="66" r="5"></circle>
              <circle class="plot-point" cx="180" cy="66" r="5"></circle>
              <circle class="plot-point" cx="214" cy="66" r="5"></circle>
              <circle class="plot-point" cx="248" cy="66" r="5"></circle>
              <circle class="plot-point" cx="282" cy="66" r="5"></circle>

              <circle class="plot-point" cx="112" cy="94" r="5"></circle>
              <circle class="plot-point" cx="146" cy="94" r="5"></circle>
              <circle class="plot-point" cx="180" cy="94" r="5"></circle>
              <circle class="plot-point" cx="214" cy="94" r="5"></circle>
              <circle class="plot-point" cx="248" cy="94" r="5"></circle>
              <circle class="plot-point" cx="282" cy="94" r="5"></circle>

              <circle class="plot-point" cx="112" cy="122" r="5"></circle>
              <circle class="plot-point" cx="146" cy="122" r="5"></circle>
              <circle class="plot-point" cx="180" cy="122" r="5"></circle>
              <circle class="plot-point" cx="214" cy="122" r="5"></circle>
              <circle class="plot-point" cx="248" cy="122" r="5"></circle>
              <circle class="plot-point" cx="282" cy="122" r="5"></circle>

              <circle class="plot-point" cx="112" cy="150" r="5"></circle>
              <circle class="plot-point" cx="146" cy="150" r="5"></circle>
              <circle class="plot-point" cx="180" cy="150" r="5"></circle>
              <circle class="plot-point" cx="214" cy="150" r="5"></circle>
              <circle class="plot-point" cx="248" cy="150" r="5"></circle>
              <circle class="plot-point" cx="282" cy="150" r="5"></circle>

              <!-- Les deux lectures sont marquees par deux traits d'aide
                   PERPENDICULAIRES, un par sens : c'est le seul indice qui dit a
                   l'oeil qu'il faut regarder deux fois le meme dessin. -->
              <line class="guide-line" x1="95" y1="42" x2="299" y2="42"></line>
              <line class="frame-line" x1="95" y1="36" x2="95" y2="48"></line>
              <line class="frame-line" x1="299" y1="36" x2="299" y2="48"></line>
              <text class="annotation-label" x="197" y="30" text-anchor="middle">6 colonnes</text>

              <line class="guide-line" x1="82" y1="52" x2="82" y2="164"></line>
              <line class="frame-line" x1="76" y1="52" x2="88" y2="52"></line>
              <line class="frame-line" x1="76" y1="164" x2="88" y2="164"></line>
              <text class="annotation-label" x="70" y="112" text-anchor="end">4 rangées</text>

              <text class="tick-label" x="308" y="76">4 fois 6</text>
              <text class="tick-label" x="308" y="96">ou 6 fois 4</text>
              <text class="annotation-label" x="308" y="130">4 × 6</text>
              <text class="annotation-label" x="308" y="152">= 6 × 4</text>
              <text class="annotation-label" x="308" y="174">= 24</text>
            </svg>
          `,
          notes: [
            'Ranger une multiplication en rectangle transforme un calcul en <strong>collection d\'objets</strong> : on peut la compter, donc la vérifier.',
            'Compter par rangées donne $4 \\times 6$, compter par colonnes donne $6 \\times 4$ — sur les mêmes jetons, donc avec le même total $24$.',
            'La commutativité $a \\times b = b \\times a$ n\'est donc pas une règle à retenir : c\'est la conséquence du fait qu\'un rectangle se regarde dans les deux sens.',
            'C\'est aussi ce qui permet de choisir l\'ordre le plus commode : pour $25 \\times 4$, mieux vaut voir $4$ paquets de $25$.'
          ],
          reading: 'Compte une rangée : $6$ jetons. Il y en a $4$ : cela fait $4 \\times 6$. Maintenant compte une colonne : $4$ jetons, et il y a $6$ colonnes, soit $6 \\times 4$. Aucun jeton n\'a été ajouté ni retiré entre les deux comptages, le total est forcément le même.',
          caption: 'Disposition rectangulaire de $24$ jetons : $4 \\times 6 = 6 \\times 4$.'
        },
        {
          theme: 'maths',
          kicker: 'La règle des décimales',
          title: 'Où se place la virgule dans $0{,}6 \\times 0{,}7$',
          description: 'On multiplie d\'abord <strong>sans les virgules</strong>, puis on les compte. L\'exemple du cours donne $6 \\times 7 = 42$, avec $1 + 1 = 2$ décimales : le résultat est $0{,}42$, et non $4{,}2$.',
          svg: `
            <svg viewBox="0 0 400 218" role="img" aria-labelledby="mul-virgule-title mul-virgule-desc">
              <title id="mul-virgule-title">Placement de la virgule dans le produit 0,6 fois 0,7</title>
              <desc id="mul-virgule-desc">La demarche est presentee en trois etapes de gauche a droite. Premiere etape : on met les virgules de cote et on multiplie 6 par 7, ce qui donne 42. Deuxieme etape : on compte les chiffres apres la virgule, un dans 0,6 et un dans 0,7, ce qui fait deux au total. Troisieme etape : on repart de 42 et on recule la virgule de deux rangs vers la gauche, ce qui donne 0,42. Un controle est rappele en bas : les deux facteurs sont inferieurs a 1, donc le produit doit lui aussi etre inferieur a 1, ce que 0,42 verifie alors que 4,2 ne le verifierait pas.</desc>

              <defs>
                <marker id="mul-virgule-pointe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- PAS A PAS de gauche a droite : chaque vignette rejoue la
                   precedente et n'ajoute qu'UN element nouveau. Le nombre 42 est
                   present dans les trois, a la meme hauteur, pour que l'oeil
                   suive le meme objet d'une etape a l'autre. -->

              <rect x="16" y="30" width="112" height="104" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 6%, var(--bg-card))" class="frame-line"></rect>
              <text class="tick-label" x="72" y="24" text-anchor="middle">1. sans les virgules</text>
              <text class="annotation-label" x="72" y="66" text-anchor="middle">6 × 7</text>
              <line class="frame-line" x1="40" y1="80" x2="104" y2="80"></line>
              <text class="annotation-label" x="72" y="110" text-anchor="middle">42</text>

              <rect x="144" y="30" width="112" height="104" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 6%, var(--bg-card))" class="frame-line"></rect>
              <text class="tick-label" x="200" y="24" text-anchor="middle">2. compter</text>
              <text class="tick-label" x="200" y="56" text-anchor="middle">0,6 : 1 décimale</text>
              <text class="tick-label" x="200" y="78" text-anchor="middle">0,7 : 1 décimale</text>
              <line class="frame-line" x1="168" y1="90" x2="232" y2="90"></line>
              <text class="annotation-label" x="200" y="116" text-anchor="middle">2 en tout</text>

              <rect x="272" y="30" width="112" height="104" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 14%, var(--bg-card))" class="frame-line"></rect>
              <text class="tick-label" x="328" y="24" text-anchor="middle">3. reculer de 2 rangs</text>
              <text class="annotation-label" x="328" y="66" text-anchor="middle">42</text>
              <!-- La fleche pointe vers la GAUCHE : multiplier deux nombres
                   plus petits que 1 rend le resultat plus petit, la virgule
                   recule. C'est le sens que le convertisseur pose en pointe
                   TikZ a partir du seul attribut marker-end. -->
              <line class="curve-main" x1="356" y1="86" x2="300" y2="86" marker-end="url(#mul-virgule-pointe)"></line>
              <text class="annotation-label" x="328" y="116" text-anchor="middle">0,42</text>

              <!-- Le controle d'ordre de grandeur est pose SUR la figure : sans
                   lui, la regle des decimales reste une recette, et c'est lui
                   seul qui permet a l'eleve de detecter 4,2 tout seul. -->
              <rect x="16" y="154" width="368" height="50" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
              <text class="annotation-label" x="32" y="176">Contrôle : 0,6 et 0,7 sont plus petits que 1</text>
              <text class="tick-label" x="32" y="196">donc le produit aussi. 0,42 convient, 4,2 serait trop grand.</text>
            </svg>
          `,
          notes: [
            'Étape $1$ — on oublie complètement les virgules et on multiplie les entiers : $6 \\times 7 = 42$.',
            'Étape $2$ — on compte les décimales des <strong>deux facteurs</strong> et on les additionne : $1 + 1 = 2$.',
            'Étape $3$ — on repart du résultat entier et on recule la virgule d\'autant de rangs : $42$ devient $0{,}42$.',
            'Le contrôle vient toujours en dernier : deux facteurs inférieurs à $1$ donnent forcément un produit inférieur à $1$. C\'est ce qui élimine la réponse $4{,}2$.'
          ],
          reading: 'Suis le nombre $42$ d\'une vignette à l\'autre : il ne change jamais de valeur, seule sa virgule se déplace. La deuxième vignette ne calcule rien, elle ne fait que compter — et c\'est pourtant elle qui décide du résultat.',
          caption: 'Les trois temps du placement de la virgule : $6 \\times 7 = 42$, puis $1 + 1 = 2$ décimales, donc $0{,}6 \\times 0{,}7 = 0{,}42$.'
        },
        {
          theme: 'maths',
          kicker: 'Le piège du zéro ajouté',
          title: 'Multiplier par $10$, ce n\'est pas ajouter un zéro',
          description: '« On ajoute un zéro » ne marche que sur les entiers, par accident. Sur un décimal, cette recette donne un résultat <strong>faux</strong>. La règle vraie est ailleurs : la virgule <strong>avance d\'un rang</strong> vers la gauche du nombre.',
          svg: `
            <svg viewBox="0 0 400 214" role="img" aria-labelledby="mul-dix-title mul-dix-desc">
              <title id="mul-dix-title">Multiplier 3,45 par 10 : la bonne methode et l'erreur frequente</title>
              <desc id="mul-dix-desc">La bonne methode est presentee en haut : pour multiplier 3,45 par 10, chaque chiffre change de rang et la virgule se retrouve decalee d'un rang, ce qui donne 34,5. Un tableau de rangs, des dizaines aux centiemes, montre le 3, le 4 et le 5 glisser chacun d'une case vers la gauche. En dessous, en trait tirete et en teinte faible, figure l'erreur frequente qui consiste a ajouter un zero a la fin : elle donne 3,450, qui est simplement egal a 3,45 et n'a donc pas ete multiplie du tout. La conclusion rappelle que ajouter un zero a la fin d'un decimal ne change pas sa valeur.</desc>

              <defs>
                <marker id="mul-dix-pointe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- FIGURE PIEGE : la forme JUSTE en haut et en teinte d'accent,
                   l'erreur en dessous, en tirets et en teinte faible. L'oeil lit
                   le haut d'abord : c'est la bonne forme qui doit rester. -->

              <text class="tick-label" x="20" y="18">Rangs :</text>
              <text class="tick-label" x="96" y="18" text-anchor="middle">diz.</text>
              <text class="tick-label" x="148" y="18" text-anchor="middle">unités</text>
              <text class="tick-label" x="212" y="18" text-anchor="middle">dixièmes</text>
              <text class="tick-label" x="276" y="18" text-anchor="middle">centièmes</text>

              <line class="grid-line" x1="70" y1="26" x2="70" y2="122"></line>
              <line class="grid-line" x1="122" y1="26" x2="122" y2="122"></line>
              <line class="grid-line" x1="180" y1="26" x2="180" y2="122"></line>
              <line class="grid-line" x1="244" y1="26" x2="244" y2="122"></line>
              <line class="grid-line" x1="308" y1="26" x2="308" y2="122"></line>

              <text class="tick-label" x="20" y="52">3,45</text>
              <text class="annotation-label" x="148" y="52" text-anchor="middle">3</text>
              <text class="annotation-label" x="164" y="52" text-anchor="middle">,</text>
              <text class="annotation-label" x="212" y="52" text-anchor="middle">4</text>
              <text class="annotation-label" x="276" y="52" text-anchor="middle">5</text>

              <!-- Une seule fleche pour les trois chiffres : trois fleches
                   paralleles se liraient comme trois deplacements independants,
                   alors que le nombre entier glisse d'un bloc. -->
              <line class="curve-main" x1="240" y1="72" x2="140" y2="72" marker-end="url(#mul-dix-pointe)"></line>
              <text class="tick-label" x="190" y="88" text-anchor="middle">chaque chiffre monte de un rang</text>

              <text class="tick-label" x="20" y="106">× 10</text>
              <text class="annotation-label" x="96" y="106" text-anchor="middle">3</text>
              <text class="annotation-label" x="148" y="106" text-anchor="middle">4</text>
              <text class="annotation-label" x="164" y="106" text-anchor="middle">,</text>
              <text class="annotation-label" x="212" y="106" text-anchor="middle">5</text>
              <text class="annotation-label" x="330" y="106">= 34,5</text>

              <!-- L'erreur : meme nombre de depart, meme mise en page, seule la
                   methode change. Trait tirete et teinte faible pour qu'elle ne
                   puisse pas etre prise pour le modele. -->
              <rect x="16" y="136" width="368" height="62" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 5%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))" stroke-dasharray="6 4"></rect>
              <text class="label-soft" x="32" y="158">Recette fausse : ajouter un zéro à la fin</text>
              <text class="label-soft" x="32" y="182">3,45 donnerait 3,450 — or 3,450 = 3,45 : rien ne change.</text>
            </svg>
          `,
          notes: [
            'Multiplier par $10$ fait <strong>changer chaque chiffre de rang</strong> : les dixièmes deviennent des unités, les unités des dizaines. Sur le papier, cela se voit comme un décalage de la virgule d\'un rang.',
            '$3{,}45 \\times 10 = 34{,}5$ — et non $3{,}450$.',
            'Ajouter un zéro à la fin d\'un décimal ne change absolument pas sa valeur : $3{,}450 = 3{,}45$. La recette du zéro ne « marche » sur les entiers que parce que, chez eux, ce zéro tombe justement au rang des unités.',
            'Par $100$, la virgule se décale de deux rangs ; par $1\\,000$, de trois rangs.'
          ],
          reading: 'Regarde le tableau de rangs plutôt que le nombre : le $3$ passe des unités aux dizaines, le $4$ des dixièmes aux unités, le $5$ des centièmes aux dixièmes. Ce sont les chiffres qui se déplacent ; dire que « la virgule recule » est simplement une façon plus rapide de décrire le même mouvement.',
          caption: '$3{,}45 \\times 10 = 34{,}5$ : chaque chiffre change de rang. La recette « ajouter un zéro » donnerait $3{,}450$, qui vaut toujours $3{,}45$.'
        }
      ],
      formulas: [
        '$a \\times b = b \\times a$ (commutativité)',
        '$a \\times (b + c) = a \\times b + a \\times c$ (distributivité)',
        'Décimales : $\\underbrace{x{,}ab}_{2\\text{ déc.}} \\times \\underbrace{y{,}c}_{1\\text{ déc.}} \\Rightarrow$ résultat avec $3$ décimales'
      ],
      recap: [
        'On multiplie d\'abord comme des entiers, puis on replace la virgule.',
        'Nombre de décimales du résultat = somme des décimales des facteurs.',
        'Toujours vérifier l\'ordre de grandeur pour détecter une erreur de placement de virgule.',
        'La distributivité permet le calcul mental : $7 \\times 5{,}2 = 7 \\times 5 + 7 \\times 0{,}2 = 36{,}4$.'
      ],
      piege: 'Piège : pour $0{,}4 \\times 0{,}3$, on calcule $4 \\times 3 = 12$, puis $1 + 1 = 2$ décimales → $0{,}12$. Pas $1{,}2$ ! Vérifier : les deux facteurs sont $< 1$, donc le produit est $< 1$.'
    },

    quiz: [
      { q: 'Combien vaut $3{,}5 \\times 4{,}2$ ?', options: ['$14{,}70$', '$14{,}07$', '$1{,}470$', '$147{,}0$'], answer: 0, correction: '$35 \\times 42 = 1470$. $1 + 1 = 2$ décimales → $14{,}70$.' },
      { q: 'En calculant $0{,}4 \\times 0{,}3$, un élève trouve $1{,}2$. Quelle erreur a-t-il commise ?', options: ['Il a bien calculé.', 'Il a oublié de compter les décimales : résultat $= 0{,}12$.', 'Il aurait dû additionner.', 'Il a mal multiplié.'], answer: 1, correction: '$4 \\times 3 = 12$ mais $1 + 1 = 2$ décimales → $0{,}12$.' },
      { q: 'Un livre coûte $7{,}50$ €. Quel est le prix de $6$ exemplaires ?', options: ['$43{,}0$ €', '$45{,}00$ €', '$44{,}0$ €', '$42{,}00$ €'], answer: 1, correction: '$750 \\times 6 = 4500$, $2$ décimales : $45{,}00$ €.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        // Quatre TACHES distinctes (2026-09-08) : avant, les huit scenarios
        // (peintre, marche, recette...) posaient tous un PRODUIT de deux
        // nombres, si bien que le manuel imprimait trois fois la meme
        // multiplication.
        const variante = pick(['produit', 'parDixDix', 'facteur', 'aire']);

        if (variante === 'produit') {
          const scenario = pick([
            { emoji: '🧮', intro: 'Calcule', aLabel: '', bLabel: '', unit: '' },
            { emoji: '🎨', intro: 'Un peintre a besoin de', aLabel: 'pots de peinture à', bLabel: '€ chacun. Quel est le prix total ?', unit: '€', useInt: true },
            { emoji: '⚖️', intro: 'Au marché, on achète', aLabel: 'kg de pommes à', bLabel: '€ le kilo. Quel est le prix total ?', unit: '€' },
            { emoji: '🏫', intro: 'Une école a', aLabel: 'classes de', bLabel: 'élèves. Combien d\'élèves en tout ?', unit: 'élèves', useInt: true },
            { emoji: '🧱', intro: 'Un mur nécessite', aLabel: 'rangées de', bLabel: 'briques. Combien de briques en tout ?', unit: 'briques', useInt: true }
          ]);
          let a, b, prod, statement;
          if (scenario.useInt) {
            a = rand(2, 9); b = rand(2, 9); prod = a * b;
            statement = scenario.aLabel
              ? `${scenario.emoji} ${scenario.intro} $${a}$ ${scenario.aLabel} $${b}$ ${scenario.bLabel}`
              : `${scenario.emoji} ${scenario.intro} $${a} \\times ${b}$.`;
          } else {
            a = randFloat(1, 9, 1); b = randFloat(1, 9, 1);
            prod = parseFloat((a * b).toFixed(2));
            statement = scenario.aLabel
              ? `${scenario.emoji} ${scenario.intro} $${fr(a)}$ ${scenario.aLabel} $${fr(b)}$ ${scenario.bLabel}`
              : `${scenario.emoji} ${scenario.intro} $${fr(a)} \\times ${fr(b)}$.`;
          }
          return {
            statement,
            answer: prod,
            tolerance: 0.01,
            unit: scenario.unit,
            hint: `Multiplie sans t'occuper des virgules, puis place la virgule dans le résultat.`,
            solution: [
              `On multiplie d'abord sans les virgules.`,
              `On compte ensuite le nombre total de chiffres après la virgule dans les deux facteurs.`,
              `Résultat : $${fr(prod)}$ ${scenario.unit}`
            ]
          };
        }

        if (variante === 'parDixDix') {
          // Multiplier par 10, 100, 1000 : regle propre du chapitre, et
          // erreur classique (« on ajoute un zero »).
          const mult = pick([10, 100, 1000]);
          const a = randFloat(1, 40, 2);
          const prod = parseFloat((a * mult).toFixed(2));
          const rangs = mult === 10 ? 'un rang' : mult === 100 ? 'deux rangs' : 'trois rangs';
          return {
            statement: `Calcule $${fr(a)} \\times ${mult}$.`,
            answer: prod,
            tolerance: 0.01,
            unit: '',
            hint: `Multiplier par $${mult}$ décale la virgule de ${rangs} vers la droite — on n'ajoute pas de zéro à la fin.`,
            solution: [
              `Multiplier par $${mult}$, c'est décaler la virgule de ${rangs} vers la droite.`,
              `$${fr(a)} \\times ${mult} = ${fr(prod)}$`,
              `Attention : « ajouter un zéro » ne marche que pour les nombres entiers.`
            ]
          };
        }

        if (variante === 'facteur') {
          // Facteur manquant : la multiplication vue comme reversible.
          const a = rand(3, 12);
          const b = rand(3, 12);
          const prod = a * b;
          // `contenant` doit suivre le sujet de la phrase : « des sachets…
          // combien y a-t-il de boites ? » melangeait les deux.
          const ctx = pick([
            { s: 'Des boîtes contiennent chacune', u: 'crayons', t: 'crayons en tout', contenant: 'boîtes' },
            { s: 'Des sachets contiennent chacun', u: 'billes', t: 'billes en tout', contenant: 'sachets' },
            { s: 'Des cartons contiennent chacun', u: 'livres', t: 'livres en tout', contenant: 'cartons' }
          ]);
          return {
            statement: `${ctx.s} $${a}$ ${ctx.u}. Il y a $${prod}$ ${ctx.t}. Combien y a-t-il de ${ctx.contenant} ?`,
            answer: b,
            tolerance: 0,
            unit: '',
            hint: `On cherche le nombre qui, multiplié par $${a}$, donne $${prod}$ : c'est une division.`,
            solution: [
              `On cherche $n$ tel que $${a} \\times n = ${prod}$.`,
              `Une multiplication se « défait » par une division : $n = ${prod} \\div ${a}$.`,
              `$n = ${b}$`,
              `Vérification : $${a} \\times ${b} = ${prod}$ ✓`
            ]
          };
        }

        // « aire » : le produit applique a une grandeur, avec une unite au
        // carre — l'occasion de distinguer nombre et grandeur.
        const L = randFloat(2, 12, 1);
        const l = randFloat(2, 9, 1);
        const aire = parseFloat((L * l).toFixed(2));
        return {
          statement: `📏 Un rectangle mesure $${fr(L)}$ cm de long et $${fr(l)}$ cm de large. Quelle est son aire, en cm² ?`,
          // Seule tache GEOMETRIQUE d'un chapitre d'arithmetique : elle merite
          // sa figure au meme titre que celles de perimetres-aires (2026-09-12).
          // Les trois autres taches du chapitre (produit, x10ⁿ, facteur
          // manquant) sont du calcul pur et n'en recoivent pas — on n'ajoute
          // pas de figure pour faire du chiffre.
          figure: figureRectangle(L, l),
          answer: aire,
          tolerance: 0.01,
          unit: 'cm²',
          hint: `L'aire d'un rectangle vaut longueur $\\times$ largeur. L'unité devient des cm².`,
          solution: [
            `Aire d'un rectangle : $\\mathcal{A} = L \\times l$.`,
            `$\\mathcal{A} = ${fr(L)} \\times ${fr(l)} = ${fr(aire)}$`,
            `L'unité est le cm² : on multiplie des cm par des cm.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une piscine rectangulaire mesure $12{,}5$ m de long et $6{,}4$ m de large. Un carreleur pose de la mosaïque sur toute la surface du fond.',
      tasks: [
        'Calcule l\'aire du fond de la piscine.',
        'La mosaïque coûte $28{,}50$ € le m². Quel est le coût total ?',
        'Arrondi le coût total à l\'euro près.'
      ],
      solutions: [
        'Aire : $12{,}5 \\times 6{,}4 = 80$ m².',
        'Coût : $80 \\times 28{,}50 = 2280$ €.',
        'Déjà un nombre entier : $2280$ €.'
      ],
      finalAnswer: 'Le coût total de la mosaïque est $2280$ €.'
    },

    evaluation: {
      title: 'Évaluation — Multiplication',
      duration: '20 min',
      questions: [
        { statement: 'Calcule $4{,}6 \\times 3{,}5$.', type: 'numeric', answer: 16.1, tolerance: 0.01, unit: '', points: 2, correction: '$46 \\times 35 = 1610$. $1+1=2$ décimales : $16{,}10$.' },
        { statement: 'Combien de décimales doit avoir le résultat de $2{,}75 \\times 1{,}3$ ?', type: 'numeric', answer: 3, tolerance: 0, unit: '', points: 2, correction: '$2$ déc. + $1$ déc. $= 3$ décimales.' },
        // Competence « communiquer » (2026-09-12). L'ancienne version se tranchait au
        // seul resultat $0{,}42$ : c'etait un calcul de plus. Les quatre options
        // annoncent desormais ce meme resultat juste, et seule la formulation les
        // separe — l'eleve doit juger une explication, pas refaire le produit.
        { statement: 'Un élève calcule $0{,}6 \\times 0{,}7$ et trouve $4{,}2$. Tu corriges sa copie.<br/><br/>Quel commentaire lui écris-tu ?', type: 'multiple-choice', options: ['« Attention, la bonne réponse est $0{,}42$. »', '« Tu as bien trouvé $6 \\times 7 = 42$, mais il faut ensuite <em>autant</em> de décimales que les deux facteurs réunis, soit $1 + 1 = 2$ : le résultat est $0{,}42$. »', '« Tu as oublié de multiplier les virgules entre elles ; le résultat est $0{,}42$. »', '« Il fallait additionner les deux nombres avant de placer la virgule ; le résultat est $0{,}42$. »'], answer: 1, points: 2, correction: 'Les quatre commentaires donnent le même résultat $0{,}42$ : c\'est la <strong>qualité de l\'explication</strong> qui compte ici.<br/><br/>Le premier corrige sans expliquer : l\'élève refera l\'erreur.<br/><br/>Le troisième invente une règle qui n\'existe pas (on ne multiplie pas des virgules).<br/><br/>Le quatrième confond multiplication et addition.<br/><br/>Seul le deuxième <strong>valide ce qui était juste</strong> ($6 \\times 7 = 42$) puis <strong>énonce la règle</strong> qui manquait : on additionne le nombre de décimales des deux facteurs.' },
        { statement: 'Un lot de $12$ cahiers coûte $2{,}35$ € l\'unité. Quel est le prix total ?', type: 'numeric', answer: 28.2, tolerance: 0.01, unit: '€', points: 2, correction: '$12 \\times 235 = 2820$, $2$ décimales : $28{,}20$ €.' },
        { statement: 'Utilise la distributivité pour calculer $7 \\times 5{,}2$. Quelle décomposition est correcte ?', type: 'multiple-choice', options: ['$7 \\times 5 + 7 \\times 2 = 49$', '$7 \\times 5 + 7 \\times 0{,}2 = 36{,}4$', '$7 \\times 5 \\times 0{,}2 = 7$', '$5{,}2 \\times 5{,}2 = 27{,}04$'], answer: 1, points: 2, correction: '$7 \\times (5 + 0{,}2) = 35 + 1{,}4 = 36{,}4$.' }
      ]
    }
  });
