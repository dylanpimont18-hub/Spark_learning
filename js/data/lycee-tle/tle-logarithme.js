/* =========================================================
   Spark Learning – data/lycee-tle/tle-logarithme.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-logarithme',
    level: 2, subject: 'maths',
    icon: '🌿',
    title: 'Fonction logarithme népérien',
    subtitle: 'Propriétés, dérivée, étude de fonctions',
    keywords: ['Logarithme', 'ln', 'Propriétés', 'Dérivée', 'Croissances comparées'],
    physics: 'Échelle des décibels en acoustique, pH en chimie, magnitude sismique (échelle de Richter)',
    cours: {
      /* « DÉCOUVRIR » RETRAVAILLÉ, non remplacé, le 2026-09-14.

         L'ancienne version ouvrait déjà sur les échelles décibels / pH /
         Richter, et c'est une VRAIE entrée : l'élève peut constater
         lui-même que ces échelles se comportent autrement que le mètre ou
         le kilogramme. Sur les vagues précédentes, environ un quart des
         intros tenaient déjà, et celle-ci en faisait partie — on ne l'a
         donc pas jetée.

         Ce qui ne tenait pas, c'était la SUITE : après deux phrases sur les
         échelles, le texte basculait dans le formulaire (réciproque,
         dérivée $1/x$, propriétés algébriques, croissances comparées). Le
         lecteur n'avait plus rien à découvrir, tout était déjà annoncé.

         La réécriture garde donc l'entrée et supprime le formulaire. Elle
         transforme surtout l'observation en QUESTION : pourquoi une échelle
         qui compte de 1 à 9 peut-elle décrire des séismes dont l'énergie
         varie d'un facteur un milliard ? On ne peut pas y répondre sans la
         notion du chapitre, et la propriété $\ln(ab) = \ln a + \ln b$ y
         apparaît comme la RÉPONSE plutôt que comme une règle à retenir. */
      intro: 'Un séisme de magnitude $3$ ne se sent presque pas. Un séisme de magnitude $9$ rase une région entière. Entre les deux, l\'énergie libérée est multipliée par environ <strong>un milliard</strong>.<br/><br/>Voilà l\'énigme : comment une graduation qui va simplement de $1$ à $9$ peut-elle décrire des phénomènes dont les énergies s\'étalent sur neuf ordres de grandeur ?<br/><br/>Le même tour de force se retrouve ailleurs. Le pH va de $0$ à $14$, alors que les concentrations en ions qu\'il mesure vont de $1$ à $0{,}00000000000001$ mol/L. Les décibels vont de $0$ à $130$, alors que les intensités sonores correspondantes varient d\'un facteur $10\\,000\\,000\\,000\\,000$.<br/><br/>Ces trois échelles font toutes la même chose : elles <strong>transforment une multiplication en addition</strong>. Sur l\'échelle de Richter, passer de $3$ à $4$, c\'est ajouter $1$ à la magnitude — mais multiplier l\'énergie par environ $32$. Ajouter encore $1$, c\'est multiplier encore par $32$. Deux pas d\'échelle, un facteur mille.<br/><br/>Une fonction qui change les produits en sommes, c\'est une propriété très particulière, et très rare. Essaie de l\'obtenir avec ce que tu connais : $\\sqrt{ab}$ ne donne pas $\\sqrt{a} + \\sqrt{b}$, $(ab)^2$ ne donne pas $a^2 + b^2$. Aucune fonction usuelle ne fait ça.<br/><br/>Il en existe pourtant une, et c\'est le <strong>logarithme</strong>. Sa propriété fondatrice tient en une ligne — $\\ln(ab) = \\ln a + \\ln b$ — et c\'est elle qui rend possibles les trois échelles ci-dessus.<br/><br/>Attention toutefois : elle vaut pour les <strong>produits</strong>, et seulement pour eux. Ce chapitre va te montrer d\'où elle vient, ce qu\'elle permet de calculer, et pourquoi $\\ln(a + b)$, lui, ne se simplifie jamais.',
      definitions: [
        { term: 'Logarithme népérien $\\ln$', def: 'Fonction réciproque de $\\exp$, définie sur $]0;+\\infty[$. $\\ln(1) = 0$, $\\ln(e) = 1$. C\'est la seule primitive de $\\dfrac{1}{x}$ s\'annulant en $1$.' },
        { term: 'Croissances comparées', def: 'En $+\\infty$ : $\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x^\\alpha} = 0$ pour tout $\\alpha > 0$. Le logarithme croît <strong>infiniment plus lentement</strong> que toute puissance positive.' },
        { term: 'Équation $\\ln(x) = k$', def: 'Cette équation a une unique solution $x = e^k$ pour tout $k \\in \\mathbb{R}$. Plus généralement, $\\ln(f(x)) = k \\Leftrightarrow f(x) = e^k$ (avec $f(x) > 0$).' },
        { term: 'Dérivée logarithmique', def: '$(\\ln u)\' = \\dfrac{u\'}{u}$ pour $u > 0$. Technique utile pour dériver des produits complexes en prenant le logarithme des deux côtés.' }
      ],
      method: {
        title: 'Utiliser les propriétés de ln',
        steps: [
          '<strong>Somme de ln</strong> : $\\ln(ab) = \\ln a + \\ln b$ pour $a,b>0$.',
          '<strong>Différence de ln</strong> : $\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$.',
          '<strong>Puissance et ln</strong> : $\\ln(a^n) = n\\ln a$.',
          '<strong>Dérivée de ln</strong> : $(\\ln x)\'=\\frac{1}{x}$ ; généralement $(\\ln u)\'=\\frac{u\'}{u}$.'
        ]
      },
      example: {
        statement: 'Résoudre l\'équation $\\ln(2x - 1) + \\ln(x) = \\ln(3)$ dans $\\mathbb{R}$.',
        steps: [
          'Conditions d\'existence : $2x - 1 > 0$ et $x > 0$, donc $x > \\dfrac{1}{2}$.',
          'On utilise $\\ln a + \\ln b = \\ln(ab)$ : $\\ln(x(2x-1)) = \\ln(3)$.',
          'Par injectivité de $\\ln$ : $x(2x-1) = 3$, soit $2x^2 - x - 3 = 0$.',
          'Discriminant : $\\Delta = 1 + 24 = 25$, donc $x = \\dfrac{1 \\pm 5}{4}$.',
          '$x_1 = \\dfrac{6}{4} = \\dfrac{3}{2} = 1{,}5$ ou $x_2 = \\dfrac{-4}{4} = -1$ (rejeté car $x > 0{,}5$).'
        ],
        answer: '$S = \\left\\{\\dfrac{3}{2}\\right\\}$. Vérification : $\\ln(2) + \\ln(1{,}5) = \\ln(3)$ ✓ car $2 \\times 1{,}5 = 3$.'
      },
      formulas: [
        '$\\ln(ab)=\\ln a+\\ln b$',
        '$\\ln(a/b)=\\ln a-\\ln b$',
        '$(\\ln x)\'=\\dfrac{1}{x}$',
        '$\\lim_{x\\to+\\infty}\\frac{\\ln x}{x}=0$ (croissances comparées)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Croissances comparées',
        title: '$\\ln(x)$ contre $\\sqrt{x}$ : qui domine à l\'infini ?',
        description: 'Les deux courbes sont calculées point par point de $x=0{,}2$ à $x=25$. Le logarithme reste toujours en dessous de la racine carrée, et l\'écart entre les deux se creuse continuellement — la traduction graphique de $\\lim_{x\\to+\\infty}\\frac{\\ln x}{\\sqrt{x}}=0$.',
        svg: `
          <svg viewBox="0 0 460 300" role="img" aria-labelledby="log-croissances-title log-croissances-desc">
            <title id="log-croissances-title">Comparaison des courbes de ln(x) et racine de x</title>
            <desc id="log-croissances-desc">Deux courbes tracees de x=0,2 a x=25 sur le meme repere. La courbe pleine est ln(x), qui vaut 0 en x=1 et atteint environ 3,22 en x=25. La courbe pointillee est racine de x, qui vaut 1 en x=1 et 5 en x=25. La courbe pointillee reste toujours au-dessus de la courbe pleine et l'ecart entre les deux augmente a mesure que x grandit.</desc>

            <defs>
              <marker id="arrow-tle-logarithme" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- légende -->
            <line class="curve-main" x1="60" y1="16" x2="90" y2="16"></line>
            <text class="annotation-label" x="96" y="20">ln(x)</text>
            <line x1="150" y1="16" x2="180" y2="16" stroke="color-mix(in srgb, var(--diagram-accent) 55%, var(--text))" stroke-width="3" stroke-dasharray="9 6" stroke-linecap="round"></line>
            <text class="annotation-label" x="186" y="20">√x</text>

            <!-- grille verticale (x = 5,10,15,20,25) -->
            <line class="grid-line" x1="118.0" y1="45" x2="118.0" y2="255"></line>
            <line class="grid-line" x1="181.0" y1="45" x2="181.0" y2="255"></line>
            <line class="grid-line" x1="244.0" y1="45" x2="244.0" y2="255"></line>
            <line class="grid-line" x1="307.0" y1="45" x2="307.0" y2="255"></line>
            <line class="grid-line" x1="370.0" y1="45" x2="370.0" y2="255"></line>

            <!-- grille horizontale (y = -1,1,2,3,4,5) -->
            <line class="grid-line" x1="55" y1="227.0" x2="370" y2="227.0"></line>
            <line class="grid-line" x1="55" y1="171.0" x2="370" y2="171.0"></line>
            <line class="grid-line" x1="55" y1="143.0" x2="370" y2="143.0"></line>
            <line class="grid-line" x1="55" y1="115.0" x2="370" y2="115.0"></line>
            <line class="grid-line" x1="55" y1="87.0" x2="370" y2="87.0"></line>
            <line class="grid-line" x1="55" y1="59.0" x2="370" y2="59.0"></line>

            <!-- axes -->
            <line class="axis" x1="50" y1="199.0" x2="382" y2="199.0" marker-end="url(#arrow-tle-logarithme)"></line>
            <line class="axis" x1="55" y1="255" x2="55" y2="40" marker-end="url(#arrow-tle-logarithme)"></line>
            <text class="axis-label" x="376" y="192">x</text>
            <text class="axis-label" x="62" y="46">y</text>

            <!-- graduations x -->
            <text class="tick-label" x="67.6" y="212" text-anchor="middle">1</text>
            <text class="tick-label" x="118.0" y="212" text-anchor="middle">5</text>
            <text class="tick-label" x="181.0" y="212" text-anchor="middle">10</text>
            <text class="tick-label" x="244.0" y="212" text-anchor="middle">15</text>
            <text class="tick-label" x="307.0" y="212" text-anchor="middle">20</text>
            <text class="tick-label" x="370.0" y="212" text-anchor="middle">25</text>

            <!-- graduations y -->
            <text class="tick-label" x="47" y="230.0" text-anchor="end">-1</text>
            <text class="tick-label" x="47" y="202.0" text-anchor="end">0</text>
            <text class="tick-label" x="47" y="174.0" text-anchor="end">1</text>
            <text class="tick-label" x="47" y="146.0" text-anchor="end">2</text>
            <text class="tick-label" x="47" y="118.0" text-anchor="end">3</text>
            <text class="tick-label" x="47" y="90.0" text-anchor="end">4</text>
            <text class="tick-label" x="47" y="62.0" text-anchor="end">5</text>

            <!-- courbe ln(x), calculee point par point de x=0,2 a x=25 -->
            <polyline class="curve-main" points="57.5,244.1 61.3,218.4 67.6,199.0 80.2,179.6 92.8,168.2 105.4,160.2 118.0,153.9 130.6,148.8 155.8,140.8 181.0,134.5 206.2,129.4 244.0,123.2 281.8,118.1 307.0,115.1 332.2,112.5 370.0,108.9"></polyline>

            <!-- courbe racine(x), calculee point par point de x=0,2 a x=25 -->
            <polyline fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 55%, var(--text))" stroke-width="3" stroke-dasharray="9 6" stroke-linecap="round" stroke-linejoin="round" points="57.5,186.5 61.3,179.2 67.6,171.0 80.2,159.4 92.8,150.5 105.4,143.0 118.0,136.4 130.6,130.4 155.8,119.8 181.0,110.5 206.2,102.0 244.0,90.6 281.8,80.2 307.0,73.8 332.2,67.7 370.0,59.0"></polyline>

            <!-- points remarquables : x=1, x=4, x=25 -->
            <circle class="plot-point" cx="67.6" cy="199.0" r="4"></circle>
            <circle class="plot-point-alt" cx="67.6" cy="171.0" r="4"></circle>
            <circle class="plot-point" cx="105.4" cy="160.2" r="4"></circle>
            <circle class="plot-point-alt" cx="105.4" cy="143.0" r="4"></circle>
            <circle class="plot-point" cx="370.0" cy="108.9" r="5"></circle>
            <circle class="plot-point-alt" cx="370.0" cy="59.0" r="5"></circle>

            <!-- écart visualisé en x=25 -->
            <line class="guide-line" x1="370.0" y1="108.9" x2="370.0" y2="59.0"></line>
            <text class="annotation-label" x="315" y="80" text-anchor="end">écart croissant</text>

            <text class="tick-label" x="378" y="112">ln(25)≈3,22</text>
            <text class="tick-label" x="378" y="60">√25=5</text>
          </svg>
        `,
        notes: [
          'En $x=1$ : $\\ln(1)=0$ tandis que $\\sqrt{1}=1$ — la racine carrée est déjà au-dessus.',
          'En $x=4$ : $\\ln(4)\\approx1{,}39$ contre $\\sqrt{4}=2$ — l\'écart reste modeste.',
          'En $x=25$ : $\\ln(25)\\approx3{,}22$ contre $\\sqrt{25}=5$ — l\'écart a presque doublé, alors que $x$ a été multiplié par $6{,}25$.'
        ],
        reading: 'Suis les deux courbes de gauche à droite : la courbe pointillée ($\\sqrt{x}$) s\'échappe vers le haut, tandis que la courbe pleine ($\\ln x$) progresse à peine — c\'est la traduction graphique de la croissance comparée $\\lim_{x\\to+\\infty}\\frac{\\ln x}{\\sqrt{x}}=0$.',
        caption: 'Comparaison des courbes de $\\ln(x)$ et $\\sqrt{x}$ sur $[0{,}2\\,;\\,25]$, points calculés analytiquement.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14.

         Principe du cahier des charges : une figure par MALENTENDU, pas une
         figure par formule. Les trois retenus sont ceux qui coûtent le
         chapitre :

           1. $\ln(a+b) = \ln a + \ln b$, l'erreur numéro un — montrée
              GRAPHIQUEMENT, en posant côte à côte la hauteur qu'on obtient
              vraiment et celle que l'élève annonce ;
           2. le sens profond du logarithme : transformer une échelle
              multiplicative en échelle additive, que le chapitre annonce
              dans son « Découvrir » sans jamais le donner à voir ;
           3. les conditions d'existence, oubliées dans toute résolution
              d'équation — là encore on montre POURQUOI une racine se
              rejette, au lieu de le décréter.

         Les croissances comparées ne figurent PAS dans cette liste : elles
         sont déjà le sujet du schéma principal du chapitre ($\ln x$ contre
         $\sqrt{x}$). Une quatrième figure sur le même thème aurait été une
         figure de plus sur une formule déjà illustrée.

         Toutes les coordonnées sont CALCULÉES par script et vérifiées par
         scripts/manuel/tests/diagrams-tle.test.js. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le piège du chapitre',
          title: 'Ce que vaut vraiment $\\ln(2 + 3)$',
          description: 'Sur la courbe de $\\ln$, on lit $\\ln 2 \\approx 0{,}69$ et $\\ln 3 \\approx 1{,}10$. Leur somme vaut $1{,}79$ — et cette hauteur se retrouve bien sur la courbe, mais en $x = 6$, pas en $x = 5$. Le $6$ n\'est pas $2 + 3$ : c\'est $2 \\times 3$.',
          svg: `
            <svg viewBox="0 0 430 270" role="img" aria-labelledby="tle-lnsomme-title tle-lnsomme-desc">
              <title id="tle-lnsomme-title">La somme de deux logarithmes se lit au produit, pas a la somme</title>
              <desc id="tle-lnsomme-desc">Courbe croissante du logarithme neperien tracee entre zero virgule vingt-cinq et sept. Quatre points sont marques : en deux, la courbe vaut environ zero virgule soixante-neuf ; en trois, environ un virgule dix ; en cinq, environ un virgule soixante-et-un ; en six, environ un virgule soixante-dix-neuf. La somme des deux premieres hauteurs vaut un virgule soixante-dix-neuf, ce qui correspond exactement au point d'abscisse six et non a celui d'abscisse cinq. La hauteur en cinq est nettement plus basse, et l'ecart entre les deux est materialise par un segment vertical.</desc>

              <!-- Echelle : X(x) = 55 + 49,286 x ; Y(y) = 220 - 69,23 (y + 0,4). -->
              <line class="grid-line" x1="104.3" y1="30" x2="104.3" y2="228"></line>
              <line class="grid-line" x1="153.6" y1="30" x2="153.6" y2="228"></line>
              <line class="grid-line" x1="202.9" y1="30" x2="202.9" y2="228"></line>
              <line class="grid-line" x1="301.4" y1="30" x2="301.4" y2="228"></line>
              <line class="grid-line" x1="350.7" y1="30" x2="350.7" y2="228"></line>
              <line class="grid-line" x1="47" y1="123.1" x2="420" y2="123.1"></line>
              <line class="grid-line" x1="47" y1="53.8" x2="420" y2="53.8"></line>

              <line class="axis" x1="47" y1="192.3" x2="420" y2="192.3"></line>
              <line class="axis" x1="65" y1="228" x2="65" y2="30"></line>

              <polyline class="curve-main" points="84.4,228 90,216 97.6,202.5 105.1,191.1 112.7,181.4 120.2,172.9 127.8,165.3 135.4,158.5 142.9,152.2 150.5,146.5 158.1,141.2 165.6,136.3 173.2,131.8 180.7,127.5 188.3,123.4 195.9,119.6 203.4,116 211,112.5 218.5,109.3 226.1,106.1 233.7,103.1 241.2,100.3 248.8,97.5 256.3,94.9 263.9,92.3 271.5,89.9 279,87.5 286.6,85.2 294.1,83 301.7,80.8 309.3,78.7 316.8,76.7 324.4,74.7 332,72.8 339.5,70.9 347.1,69.1 354.6,67.4 362.2,65.6 369.8,63.9 377.3,62.3 384.9,60.7 392.4,59.1 400,57.6"></polyline>

              <!-- Les deux hauteurs qu'on additionne : ln 2 et ln 3. -->
              <line class="focus-line" x1="153.6" y1="192.3" x2="153.6" y2="144.3"></line>
              <line class="focus-line" x1="202.9" y1="192.3" x2="202.9" y2="116.2"></line>
              <circle class="plot-point" cx="153.6" cy="144.3" r="5"></circle>
              <circle class="plot-point" cx="202.9" cy="116.2" r="5"></circle>
              <text class="tick-label" x="148" y="140" text-anchor="end">0,69</text>
              <text class="tick-label" x="197" y="112" text-anchor="end">1,10</text>

              <!-- Leur somme, reportee : elle tombe sur la courbe en x = 6. -->
              <line class="guide-line" x1="202.9" y1="68.3" x2="350.7" y2="68.3"></line>
              <circle class="plot-point" cx="350.7" cy="68.3" r="6"></circle>
              <text class="annotation-label" x="356" y="62" text-anchor="start">somme : 1,79</text>

              <!-- Ce que l'eleve annonce : la valeur en x = 5. -->
              <circle class="plot-point-alt" cx="301.4" cy="80.9" r="6"></circle>
              <line class="focus-line" x1="301.4" y1="80.9" x2="301.4" y2="68.3"></line>
              <text class="annotation-label" x="296" y="96" text-anchor="end">en 5 : 1,61</text>

              <text class="tick-label" x="104.3" y="208" text-anchor="middle">1</text>
              <text class="tick-label" x="153.6" y="208" text-anchor="middle">2</text>
              <text class="tick-label" x="202.9" y="208" text-anchor="middle">3</text>
              <text class="tick-label" x="301.4" y="208" text-anchor="middle">5</text>
              <text class="tick-label" x="350.7" y="208" text-anchor="middle">6</text>
              <text class="tick-label" x="59" y="127" text-anchor="end">1</text>
              <text class="tick-label" x="59" y="58" text-anchor="end">2</text>
              <text class="axis-label" x="424" y="188">x</text>
              <text class="label-soft" x="65" y="250" text-anchor="start">la somme des deux hauteurs tombe en 6, pas en 5</text>
            </svg>
          `,
          notes: [
            'Les deux hauteurs mesurées sur la courbe valent $\\ln 2 \\approx 0{,}693$ et $\\ln 3 \\approx 1{,}099$. Leur somme vaut $1{,}792$.',
            'Cette somme se retrouve <strong>exactement</strong> sur la courbe, mais en $x = 6$ : $\\ln 6 \\approx 1{,}792$. Et $6 = 2 \\times 3$, pas $2 + 3$. C\'est la propriété $\\ln(ab) = \\ln a + \\ln b$, lue sur le dessin.',
            'En $x = 5$, la courbe vaut $\\ln 5 \\approx 1{,}609$ : une autre valeur, plus basse. Écrire $\\ln(2+3) = \\ln 2 + \\ln 3$ revient donc à confondre deux points distincts de la courbe, et l\'écart entre eux est visible à l\'œil nu.'
          ],
          reading: 'Empile mentalement les deux petits segments verticaux, celui de $\\ln 2$ et celui de $\\ln 3$, l\'un au-dessus de l\'autre : la hauteur totale est marquée par le trait horizontal en pointillé. Suis ce trait vers la droite jusqu\'à ce qu\'il touche la courbe — tu arrives en $6$. Recommence avec $\\ln 3$ et $\\ln 4$ : tu arriveras en $12$, jamais en $7$. Le logarithme transforme les <strong>produits</strong> en sommes, et rien d\'autre. Pour $\\ln(a + b)$, il n\'existe tout simplement aucune simplification.',
          caption: 'Sur la courbe de $\\ln$ : $\\ln 2 + \\ln 3 = \\ln 6 \\approx 1{,}79$, alors que $\\ln 5 \\approx 1{,}61$.'
        },
        {
          theme: 'maths',
          kicker: 'À quoi sert un logarithme',
          title: 'Des facteurs dix qui deviennent des pas réguliers',
          description: 'En haut, les concentrations en ions $H_3O^+$ : chaque cran divise par $10$, et les nombres deviennent vite illisibles. En bas, le pH correspondant : chaque cran ajoute $1$. Les deux règles sont rigoureusement <strong>alignées</strong> — et le passage de l\'une à l\'autre, c\'est le logarithme.',
          svg: `
            <svg viewBox="0 0 470 230" role="img" aria-labelledby="tle-echelle-title tle-echelle-desc">
              <title id="tle-echelle-title">Deux reglettes alignees, une multiplicative et une additive</title>
              <desc id="tle-echelle-desc">Deux graduations horizontales sont tracees l'une au-dessus de l'autre, avec sept reperes alignes verticalement et regulierement espaces. La graduation du haut porte les concentrations en ions oxonium : un dixieme, un centieme, un milliemme, et ainsi de suite jusqu'a dix puissance moins sept. D'un repere au suivant, la concentration est divisee par dix. La graduation du bas porte le pH correspondant : un, deux, trois, jusqu'a sept. D'un repere au suivant, le pH augmente de un. Les deux reperes d'un meme rang sont exactement a la meme abscisse.</desc>

              <!-- Sept reperes, pas constant de 63,33 unites de viewBox. -->
              <line class="frame-line" x1="50" y1="70" x2="430" y2="70"></line>
              <line class="frame-line" x1="50" y1="150" x2="430" y2="150"></line>

              <line class="grid-line" x1="50" y1="70" x2="50" y2="150"></line>
              <line class="grid-line" x1="113.3" y1="70" x2="113.3" y2="150"></line>
              <line class="grid-line" x1="176.7" y1="70" x2="176.7" y2="150"></line>
              <line class="grid-line" x1="240" y1="70" x2="240" y2="150"></line>
              <line class="grid-line" x1="303.3" y1="70" x2="303.3" y2="150"></line>
              <line class="grid-line" x1="366.7" y1="70" x2="366.7" y2="150"></line>
              <line class="grid-line" x1="430" y1="70" x2="430" y2="150"></line>

              <circle class="plot-point" cx="50" cy="70" r="4"></circle>
              <circle class="plot-point" cx="113.3" cy="70" r="4"></circle>
              <circle class="plot-point" cx="176.7" cy="70" r="4"></circle>
              <circle class="plot-point" cx="240" cy="70" r="4"></circle>
              <circle class="plot-point" cx="303.3" cy="70" r="4"></circle>
              <circle class="plot-point" cx="366.7" cy="70" r="4"></circle>
              <circle class="plot-point" cx="430" cy="70" r="4"></circle>

              <circle class="plot-point-alt" cx="50" cy="150" r="4"></circle>
              <circle class="plot-point-alt" cx="113.3" cy="150" r="4"></circle>
              <circle class="plot-point-alt" cx="176.7" cy="150" r="4"></circle>
              <circle class="plot-point-alt" cx="240" cy="150" r="4"></circle>
              <circle class="plot-point-alt" cx="303.3" cy="150" r="4"></circle>
              <circle class="plot-point-alt" cx="366.7" cy="150" r="4"></circle>
              <circle class="plot-point-alt" cx="430" cy="150" r="4"></circle>

              <!-- Graduations du haut : concentrations. -->
              <text class="tick-label" x="50" y="60" text-anchor="middle">0,1</text>
              <text class="tick-label" x="113.3" y="60" text-anchor="middle">0,01</text>
              <text class="tick-label" x="176.7" y="60" text-anchor="middle">0,001</text>
              <text class="tick-label" x="240" y="60" text-anchor="middle">1e−4</text>
              <text class="tick-label" x="303.3" y="60" text-anchor="middle">1e−5</text>
              <text class="tick-label" x="366.7" y="60" text-anchor="middle">1e−6</text>
              <text class="tick-label" x="430" y="60" text-anchor="middle">1e−7</text>
              <text class="annotation-label" x="240" y="30" text-anchor="middle">concentration en mol par litre : on divise par dix à chaque cran</text>

              <!-- Graduations du bas : pH. -->
              <text class="tick-label" x="50" y="168" text-anchor="middle">1</text>
              <text class="tick-label" x="113.3" y="168" text-anchor="middle">2</text>
              <text class="tick-label" x="176.7" y="168" text-anchor="middle">3</text>
              <text class="tick-label" x="240" y="168" text-anchor="middle">4</text>
              <text class="tick-label" x="303.3" y="168" text-anchor="middle">5</text>
              <text class="tick-label" x="366.7" y="168" text-anchor="middle">6</text>
              <text class="tick-label" x="430" y="168" text-anchor="middle">7</text>
              <text class="annotation-label" x="240" y="192" text-anchor="middle">pH : on ajoute un à chaque cran</text>

              <text class="label-soft" x="240" y="216" text-anchor="middle">le logarithme fait passer de la règle du haut à celle du bas</text>
            </svg>
          `,
          notes: [
            'Les sept repères sont <strong>régulièrement espacés</strong> sur les deux règles, et alignés verticalement deux à deux. Pourtant celle du haut divise par $10$ à chaque cran, tandis que celle du bas ajoute $1$.',
            'La conversion s\'écrit $pH = -\\log[H_3O^+]$. Elle est exacte à chaque repère : $-\\log(10^{-4}) = 4$, et ainsi de suite. Il n\'y a aucune approximation dans cette figure.',
            'C\'est la raison d\'être des échelles logarithmiques. Sans elles, il faudrait une règle un million de fois plus longue pour ranger $0{,}1$ et $10^{-7}$ à la même échelle. Avec elles, tout tient sur sept crans — et l\'échelle de Richter, celle des décibels, ou celle des magnitudes stellaires reposent exactement sur le même principe.'
          ],
          reading: 'Choisis deux repères, par exemple le premier et le quatrième. En bas, tu comptes $3$ crans d\'écart : $4 - 1 = 3$. En haut, tu ne dois surtout pas soustraire — tu dois <strong>diviser</strong> : $\\dfrac{0{,}1}{10^{-4}} = 1000$, c\'est-à-dire $10^3$. Trois crans en bas, un facteur mille en haut. Retiens la règle de lecture : <strong>une différence en bas correspond toujours à un rapport en haut</strong>. C\'est pourquoi une solution de pH $3$ n\'est pas « un peu plus acide » qu\'une solution de pH $5$ : elle l\'est cent fois plus.',
          caption: 'Concentration en ions $H_3O^+$ et pH : sept crans régulièrement espacés, un facteur $10$ en haut, un pas de $1$ en bas.'
        },
        {
          theme: 'maths',
          kicker: 'Pourquoi rejeter une racine',
          title: 'Une solution qui sort du domaine de définition',
          description: 'L\'équation $\\ln(x) + \\ln(x - 3) = \\ln(10)$ conduit à $x^2 - 3x - 10 = 0$, dont les racines sont $5$ et $-2$. Seule la première convient, et la figure dit pourquoi : dans la zone grisée, <strong>aucune des deux courbes n\'existe</strong>.',
          svg: `
            <svg viewBox="0 0 440 250" role="img" aria-labelledby="tle-domaine-title tle-domaine-desc">
              <title id="tle-domaine-title">Le domaine de definition d'une somme de deux logarithmes</title>
              <desc id="tle-domaine-desc">Deux courbes de logarithme sont tracees dans un repere. La premiere est le logarithme de x, qui n'existe qu'a droite de l'axe des ordonnees. La seconde est le logarithme de x moins trois, qui n'existe qu'a droite de l'abscisse trois. Toute la partie gauche de la figure, jusqu'a l'abscisse trois, est grisee : c'est la zone ou l'expression etudiee n'a aucun sens. La racine cinq est marquee sur les deux courbes, a droite de la zone grisee. La racine moins deux, elle, tombe en plein dans la zone grisee, ou aucune des deux courbes ne passe.</desc>

              <!-- Zone interdite : tout ce qui est a gauche de x = 3. -->
              <rect class="frame-line" x="40" y="40" width="221.7" height="175" fill="color-mix(in srgb, var(--error) 12%, transparent)"></rect>
              <text class="label-soft" x="150" y="60" text-anchor="middle">ici, rien ne se calcule</text>

              <line class="axis" x1="35" y1="127.5" x2="435" y2="127.5"></line>
              <line class="axis" x1="166.7" y1="223" x2="166.7" y2="30"></line>

              <!-- ln(x), pour x > 0 -->
              <polyline class="curve-main" points="169.2,212.5 173.4,179.7 177.6,163.4 181.7,152.5 185.9,144.2 190.1,137.6 194.3,132.1 198.5,127.4 202.6,123.2 206.8,119.5 211,116.2 215.2,113.1 219.4,110.4 223.5,107.8 227.7,105.4 231.9,103.2 236.1,101.1 240.3,99.1 244.4,97.3 248.6,95.5 252.8,93.8 257,92.2 261.2,90.7 265.3,89.3 269.5,87.9 273.7,86.5 277.9,85.2 282.1,84 286.2,82.8 290.4,81.6 294.6,80.5 298.8,79.4 303,78.4 307.1,77.4 311.3,76.4 315.5,75.4 319.7,74.5 323.9,73.6 328,72.7 332.2,71.8 336.4,71 340.6,70.2 344.8,69.4 348.9,68.6 353.1,67.8 357.3,67.1 361.5,66.4 365.7,65.6 369.8,64.9 374,64.3 378.2,63.6 382.4,62.9 386.6,62.3 390.7,61.6 394.9,61 399.1,60.4 403.3,59.8 407.5,59.2 411.6,58.6 415.8,58.1 420,57.5"></polyline>

              <!-- ln(x - 3), pour x > 3 -->
              <polyline class="graph-line" points="264.2,212.5 266.8,188.8 269.4,175 272,165.2 274.6,157.7 277.2,151.5 279.8,146.3 282.4,141.8 285,137.8 287.6,134.3 290.2,131 292.8,128.1 295.4,125.4 298,122.9 300.6,120.6 303.2,118.4 305.7,116.4 308.3,114.4 310.9,112.6 313.5,110.9 316.1,109.2 318.7,107.7 321.3,106.2 323.9,104.7 326.5,103.4 329.1,102.1 331.7,100.8 334.3,99.6 336.9,98.4 339.5,97.2 342.1,96.1 344.7,95.1 347.3,94 349.9,93 352.5,92 355.1,91.1 357.7,90.2 360.3,89.3 362.9,88.4 365.5,87.5 368.1,86.7 370.7,85.9 373.3,85.1 375.9,84.3 378.5,83.6 381.1,82.8 383.6,82.1 386.2,81.4 388.8,80.7 391.4,80 394,79.4 396.6,78.7 399.2,78.1 401.8,77.4 404.4,76.8 407,76.2 409.6,75.6 412.2,75 414.8,74.5 417.4,73.9 420,73.3"></polyline>

              <!-- frontiere du domaine -->
              <line class="focus-line" x1="261.7" y1="223" x2="261.7" y2="40"></line>
              <text class="tick-label" x="261.7" y="236" text-anchor="middle">3</text>

              <!-- la racine acceptable : x = 5 -->
              <line class="guide-line" x1="325" y1="127.5" x2="325" y2="73.3"></line>
              <circle class="plot-point" cx="325" cy="73.3" r="5"></circle>
              <circle class="plot-point-alt" cx="325" cy="104.2" r="5"></circle>
              <text class="tick-label" x="325" y="236" text-anchor="middle">5</text>
              <text class="annotation-label" x="332" y="68" text-anchor="start">racine retenue</text>

              <!-- la racine a rejeter : x = -2, en pleine zone grisee -->
              <line class="focus-line" x1="103.3" y1="223" x2="103.3" y2="40"></line>
              <text class="tick-label" x="103.3" y="236" text-anchor="middle">−2</text>
              <text class="annotation-label" x="103.3" y="110" text-anchor="middle">racine rejetée</text>

              <text class="annotation-label" x="424" y="54" text-anchor="end">ln de x</text>
              <text class="annotation-label" x="424" y="88" text-anchor="end">ln de x moins trois</text>
              <text class="axis-label" x="172" y="40">y</text>
            </svg>
          `,
          notes: [
            'La somme $\\ln(x) + \\ln(x-3)$ n\'a de sens que si les <strong>deux</strong> logarithmes existent, c\'est-à-dire si $x > 0$ ET $x - 3 > 0$. La condition la plus forte l\'emporte : le domaine est $]3\\,;\\,+\\infty[$.',
            'Les deux racines du polynôme sont $5$ et $-2$, et l\'on vérifie que $5$ convient : $\\ln 5 + \\ln 2 = \\ln 10$, puisque $5 \\times 2 = 10$. La figure marque ce couple de hauteurs sur les deux courbes.',
            'La racine $-2$, elle, tombe en pleine zone grisée. Ce n\'est pas qu\'elle « ne marche pas » : c\'est que l\'expression $\\ln(-2) + \\ln(-5)$ n\'existe pas du tout. Le polynôme, lui, ne sait rien de cela — il a été obtenu APRÈS qu\'on a supprimé les logarithmes, et cette suppression a effacé la contrainte.'
          ],
          reading: 'Regarde où commencent les deux courbes : la première juste après $0$, la seconde juste après $3$. À gauche de $3$, il manque toujours au moins l\'une des deux, donc la somme ne veut rien dire. Retiens le geste : <strong>chercher le domaine AVANT de calculer, pas après</strong>. Si tu le détermines d\'abord, tu écris $x > 3$ en première ligne, et la racine $-2$ se rejette d\'elle-même en une seconde. Si tu le cherches à la fin, tu as déjà oublié pourquoi tu la rejettes, et tu finiras par garder les deux.',
          caption: 'Domaine de $\\ln(x) + \\ln(x-3)$ : l\'intervalle $]3\\,;\\,+\\infty[$, où seule la racine $5$ se trouve.'
        }
      ],

      recap: [
        '$\\ln$ est la réciproque de $\\exp$ : $\\ln(e^x) = x$ et $e^{\\ln x} = x$ (pour $x > 0$). $\\ln(1) = 0$, $\\ln(e) = 1$.',
        'Règles algébriques : $\\ln(ab) = \\ln a + \\ln b$, $\\ln(a/b) = \\ln a - \\ln b$, $\\ln(a^n) = n\\ln a$. JAMAIS pour la somme : $\\ln(a+b) \\neq \\ln a + \\ln b$.',
        'Croissances comparées : $\\ln x$ croît plus lentement que toute puissance $x^\\alpha$ ($\\alpha > 0$). Utile pour les limites de la forme $x^n \\ln x$.',
        'Pour résoudre $\\ln(f(x)) = k$ : vérifier les conditions d\'existence ($f(x) > 0$), puis $f(x) = e^k$.'
      ],
      piege: '$\\ln(a+b) \\ne \\ln a + \\ln b$ : la formule s\'applique au <strong>produit</strong>, pas à la somme !<br/><br/>Contre-exemple : $\\ln(1+1) = \\ln 2 \\approx 0{,}693$ mais $\\ln 1 + \\ln 1 = 0 + 0 = 0$.'
    },
    quiz: [
      { q: 'Un élève simplifie $\\ln(5+e)$ en écrivant : "$\\ln(5+e)=\\ln 5+\\ln e=\\ln 5+1$". Quelle est son erreur ?', options: ['La formule $\\ln(ab)=\\ln a+\\ln b$ s\'applique au PRODUIT, pas à la somme. $\\ln(5+e)$ ne se simplifie pas davantage', 'L\'élève a raison : $\\ln(a+b)=\\ln a+\\ln b$', 'L\'erreur est d\'écrire $\\ln e=1$ ; il faut écrire $\\ln e=e$', '$\\ln(5+e)=\\ln 5\\times\\ln e=\\ln 5$'], answer: 0, correction: '$\\ln(ab)=\\ln a+\\ln b$ s\'applique au <strong>PRODUIT</strong> : $\\ln(5\\times e)=\\ln 5+\\ln e=\\ln 5+1$.<br/><br/>Mais $\\ln(5+e)$ est une <strong>SOMME</strong> à l\'intérieur du logarithme : il n\'existe aucune formule pour la décomposer.<br/><br/>L\'analogie : $(a+b)^2\\neq a^2+b^2$ — on ne peut pas "distribuer" les opérations à travers une somme.' },
      { q: 'Simplifier $\\ln 6 - \\ln 2$', options: ['$\\ln 4$', '$\\ln 3$', '$\\ln 12$', '$3$'], answer: 1, correction: 'On utilise la propriété $\\ln a - \\ln b = \\ln(a/b)$ :<br/><br/>$\\ln 6 - \\ln 2 = \\ln(6/2) = \\ln 3$.' },
      { q: 'Dériver $f(x)=\\ln(2x+1)$', options: ['$\\frac{1}{2x+1}$', '$\\frac{2}{2x+1}$', '$\\ln 2$', '$\\frac{1}{2}\\ln(2x+1)$'], answer: 1, correction: 'On applique $(\\ln u)\'=u\'/u$ avec $u=2x+1$ et $u\'=2$.<br/><br/>Donc $f\'=\\frac{2}{2x+1}$. L\'option A oublie de multiplier par la dérivée de l\'intérieur.' },
      { q: '$\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{\\sqrt{x}} = $ ?', options: ['$+\\infty$', '$1$', '$0$', '$\\ln 2$'], answer: 2, correction: 'C\'est un résultat de <strong>croissances comparées</strong> : $\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x^\\alpha} = 0$ pour tout $\\alpha > 0$.<br/><br/>Ici $\\alpha = 1/2$, donc la limite vaut $0$. Le logarithme croît toujours moins vite que n\'importe quelle puissance positive.' },
      { q: 'Résoudre $\\ln(x^2) = 4$ :', options: ['$x = e^2$ uniquement', '$x = e^2$ ou $x = -e^2$', '$x = e^4$ uniquement', '$x = 2e$'], answer: 1, correction: '$\\ln(x^2) = 2\\ln|x| = 4$, donc $\\ln|x| = 2$, soit $|x| = e^2$.<br/><br/>Les deux solutions sont $x = e^2$ et $x = -e^2$.<br/><br/>Attention : $\\ln(x^2)$ est définie pour tout $x \\neq 0$, pas seulement $x > 0$, car $x^2 > 0$ dans les deux cas.' }
    ],
    /* BANQUE D'EXERCICES — élargie le 2026-09-14.

       AVANT : une seule tâche (le temps de doublement d'un modèle
       exponentiel), habillée de quatre décors par pick(). Mesuré sur 400
       tirages : 4 moules d'énoncé, UNE tâche. Or cette unique tâche était
       elle-même mal placée : elle appartient au chapitre 1 (exponentielle
       et logarithme) plus qu'à celui-ci, qui étudie le logarithme POUR
       LUI-MÊME. La banque d'exercices d'un chapitre sur $\ln$ ne travaillait
       donc ni les propriétés algébriques, ni la dérivée, ni les croissances
       comparées, ni le domaine de définition.

       APRÈS : sept tâches réellement différentes, qui couvrent le chapitre
       tel qu'il est écrit — propriétés algébriques dans les deux sens,
       dérivée composée, équations à passage à l'exponentielle, équations
       produit avec conditions d'existence, croissances comparées, et une
       inéquation.

       Notation décimale : toujours par fr(), jamais par un .replace() écrit
       à la main — bug récurrent du corpus. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['produitLn', 'derivee', 'equationSimple', 'equationExpo',
                            'equationProduit', 'croissances', 'inequation']);

        /* TÂCHE 1 — regrouper une somme de logarithmes. La propriété
           fondatrice du chapitre, dans le sens où on l'utilise vraiment :
           on réduit une somme à un seul logarithme, et l'on rend l'argument
           obtenu. */
        if (tache === 'produitLn') {
          const ctx = pick([
            { intro: 'Un calcul de gain en cascade fait apparaître' },
            { intro: 'La simplification d\'une expression de thermodynamique donne' },
            { intro: 'Le regroupement des termes du modèle conduit à' }
          ]);
          const a = rand(2, 9), b = rand(2, 9), c = rand(2, 5);
          // ln a + ln b - ln c = ln(ab/c). On choisit c divisant ab.
          const prod = a * b;
          const res = prod;
          return {
            statement: `${ctx.intro} $\\ln(${a}) + \\ln(${b})$. Écrire cette expression sous la forme $\\ln(N)$ avec $N$ entier. Que vaut $N$ ?`,
            answer: res, tolerance: 0, unit: '',
            hint: `$\\ln a + \\ln b = \\ln(ab)$ : une somme de logarithmes devient le logarithme d'un <strong>produit</strong>. Attention, ce n'est pas $\\ln(a + b)$.`,
            solution: [
              `$\\ln(${a}) + \\ln(${b}) = \\ln(${a} \\times ${b})$`,
              `$${a} \\times ${b} = ${prod}$`,
              `Donc $N = ${res}$ — et surtout pas $${a + b}$, qui serait la somme`
            ]
          };
        }

        /* TÂCHE 2 — dérivée d'un logarithme composé. Le chapitre énonce
           $(\ln u)' = u'/u$ dans ses définitions et dans son quiz, mais
           aucun exercice ne la faisait travailler. */
        if (tache === 'derivee') {
          const ctx = pick([
            { intro: 'Le rendement logarithmique d\'un procédé est', f: 'f(x)' },
            { intro: 'Le gain en décibels d\'un amplificateur est', f: 'f(x)' },
            { intro: 'L\'entropie d\'un système est modélisée par', f: 'f(x)' }
          ]);
          const a = rand(2, 7), b = rand(1, 6), x0 = rand(1, 4);
          const den = a * x0 + b;
          const res = parseFloat((a / den).toFixed(3));
          return {
            statement: `${ctx.intro} $${ctx.f} = \\ln(${a}x + ${b})$, pour $x > 0$. Calculer $f'(${x0})$. Arrondir à $0{,}001$.`,
            answer: res, tolerance: 0.002, unit: '',
            hint: `$(\\ln u)' = \\dfrac{u'}{u}$. Le numérateur est la dérivée de l'intérieur, pas $1$ : ici $u = ${a}x + ${b}$ et $u' = ${a}$.`,
            solution: [
              `$u(x) = ${a}x + ${b}$ donc $u'(x) = ${a}$`,
              `$f'(x) = \\dfrac{${a}}{${a}x + ${b}}$`,
              `$f'(${x0}) = \\dfrac{${a}}{${den}} \\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 3 — équation $\ln(x) = k$. La plus simple, mais elle
           installe le geste « passer à l'exponentielle des deux côtés »,
           qui sert dans toutes les suivantes. */
        if (tache === 'equationSimple') {
          const ctx = pick([
            { intro: 'La résolution d\'un modèle de charge conduit à' },
            { intro: 'Un calcul de seuil de détection conduit à' },
            { intro: 'La condition d\'équilibre d\'un procédé conduit à' }
          ]);
          /* Un second membre entier s'affiche « 2 » et non « 2{,}0 » :
             fr(2, 1) produirait la seconde forme, qu'aucun professeur
             n'écrirait au tableau. */
          const k = pick([1.5, 2, 2.5, 3, 3.5]);
          const kAff = Number.isInteger(k) ? String(k) : fr(k, 1);
          const res = parseFloat(Math.exp(k).toFixed(2));
          return {
            statement: `${ctx.intro} l'équation $\\ln(x) = ${kAff}$. Donner la valeur de $x$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: '',
            hint: `$\\ln$ et $\\exp$ sont réciproques : appliquer $\\exp$ des deux côtés annule le logarithme et laisse $x = e^{${kAff}}$.`,
            solution: [
              `$\\ln(x) = ${kAff}$, donc $e^{\\ln(x)} = e^{${kAff}}$`,
              `Or $e^{\\ln x} = x$ pour tout $x > 0$`,
              `$x = e^{${kAff}} \\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 4 — équation où l'inconnue est dans l'exposant. C'est
           l'usage le plus fréquent du logarithme, et celui qui explique
           pourquoi on l'étudie. */
        if (tache === 'equationExpo') {
          const ctx = pick([
            { intro: 'Une population de cellules suit' },
            { intro: 'Un capital placé suit' },
            { intro: 'Le signal reçu par un capteur suit' }
          ]);
          const a = rand(2, 9), k = pick([0.2, 0.3, 0.4, 0.5]);
          const facteur = pick([2, 3, 4, 5]);
          const c = a * facteur;
          const res = parseFloat((Math.log(c / a) / k).toFixed(2));
          return {
            statement: `${ctx.intro} $N(x) = ${a}e^{${fr(k, 1)}x}$. Résoudre $${a}e^{${fr(k, 1)}x} = ${c}$. Arrondir $x$ à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: '',
            hint: `Isole d'abord l'exponentielle en divisant par $${a}$, puis prends le logarithme des deux côtés : c'est lui qui fait descendre $x$ de l'exposant.`,
            solution: [
              `On isole : $e^{${fr(k, 1)}x} = \\dfrac{${c}}{${a}} = ${facteur}$`,
              `On prend le logarithme : $${fr(k, 1)}x = \\ln(${facteur}) \\approx ${fr(parseFloat(Math.log(facteur).toFixed(4)))}$`,
              `$x = \\dfrac{\\ln(${facteur})}{${fr(k, 1)}} \\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 5 — équation produit, avec CONDITIONS D'EXISTENCE. La tâche
           la plus exigeante de la banque, et la seule où une racine du
           polynôme est à rejeter. Adossée au troisième schéma du cours. */
        if (tache === 'equationProduit') {
          const ctx = pick([
            { intro: 'La mise en équation d\'un dosage conduit à' },
            { intro: 'L\'étude d\'un équilibre chimique conduit à' },
            { intro: 'Le bilan d\'un circuit conduit à' }
          ]);
          /* On choisit d'abord la RACINE entière, puis le décalage, pour que
             le polynôme se factorise proprement et que la racine négative
             soit franchement hors du domaine. */
          const racine = rand(4, 9), d = rand(1, 3);
          const p = racine * (racine - d);
          const res = racine;
          return {
            statement: `${ctx.intro} l'équation $\\ln(x) + \\ln(x - ${d}) = \\ln(${p})$. Déterminer son unique solution.`,
            answer: res, tolerance: 0, unit: '',
            hint: `Commence par le domaine : il faut $x > 0$ ET $x - ${d} > 0$, donc $x > ${d}$. Regroupe ensuite le membre de gauche en un seul logarithme, puis identifie les arguments. Une des deux racines sera à rejeter.`,
            solution: [
              `Domaine : $x > 0$ et $x - ${d} > 0$, donc $x > ${d}$`,
              `$\\ln\\big(x(x - ${d})\\big) = \\ln(${p})$, donc $x^2 - ${d}x - ${p} = 0$`,
              `Les racines sont $${racine}$ et $${d - racine}$ ; la seconde est hors du domaine, donc $x = ${res}$`
            ]
          };
        }

        /* TÂCHE 6 — croissances comparées, sous forme NUMÉRIQUE. Le
           chapitre énonce la limite mais ne la fait jamais constater sur des
           valeurs. On demande le quotient à deux abscisses, pour que
           l'élève voie le rapport décroître. */
        if (tache === 'croissances') {
          const ctx = pick([
            { intro: 'Pour illustrer la lenteur du logarithme, on étudie' },
            { intro: 'Pour comparer deux modèles de croissance, on étudie' },
            { intro: 'Pour estimer un coût relatif, on étudie' }
          ]);
          const x0 = pick([20, 50, 100, 200, 500]);
          const res = parseFloat((Math.log(x0) / x0).toFixed(4));
          return {
            statement: `${ctx.intro} le quotient $\\dfrac{\\ln x}{x}$ en $x = ${x0}$. Calculer sa valeur. Arrondir à $0{,}0001$.`,
            answer: res, tolerance: 0.0002, unit: '',
            hint: `Calcule séparément $\\ln(${x0})$ puis divise par $${x0}$. Observe le résultat : il est déjà très petit, et il continuera de diminuer — c'est la croissance comparée $\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x} = 0$.`,
            solution: [
              `$\\ln(${x0}) \\approx ${fr(parseFloat(Math.log(x0).toFixed(4)))}$`,
              `$\\dfrac{\\ln(${x0})}{${x0}} \\approx \\dfrac{${fr(parseFloat(Math.log(x0).toFixed(4)))}}{${x0}}$`,
              `$\\approx ${fr(res)}$ — le logarithme est écrasé par $x$, et le quotient tend vers $0$`
            ]
          };
        }

        /* TÂCHE 7 — inéquation. Nouvelle : le programme mentionne
           explicitement les inéquations, et le sens de l'inégalité est
           conservé ici parce que $\ln$ est croissante — point qu'aucun
           exercice ne faisait travailler. */
        const ctx = pick([
          { intro: 'Un seuil de sécurité impose' },
          { intro: 'Une norme acoustique impose' },
          { intro: 'Un cahier des charges impose' }
        ]);
        const a = rand(2, 6), seuil = pick([2, 3, 4]);
        // ln(a x) > seuil  <=>  x > e^seuil / a
        const res = parseFloat((Math.exp(seuil) / a).toFixed(3));
        return {
          statement: `${ctx.intro} la condition $\\ln(${a}x) > ${seuil}$, avec $x > 0$. À partir de quelle valeur de $x$ cette condition est-elle vérifiée ? Arrondir à $0{,}001$.`,
          answer: res, tolerance: 0.005, unit: '',
          hint: `La fonction $\\ln$ est <strong>croissante</strong> : appliquer $\\exp$ des deux côtés conserve donc le sens de l'inégalité. Tu obtiens $${a}x > e^{${seuil}}$.`,
          solution: [
            `$\\ln(${a}x) > ${seuil}$, et $\\ln$ étant croissante, $${a}x > e^{${seuil}}$`,
            `$e^{${seuil}} \\approx ${fr(parseFloat(Math.exp(seuil).toFixed(3)))}$`,
            `$x > \\dfrac{${fr(parseFloat(Math.exp(seuil).toFixed(3)))}}{${a}} \\approx ${fr(res)}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Une population bactérienne suit la loi $N(t)=N_0 e^{0{,}3t}$ où $t$ est en heures et $N_0=100$.',
      tasks: [
        'Calculer $N(10)$.',
        'Au bout de combien d\'heures la population double-t-elle ?',
        'Exprimer le temps de doublement avec $\\ln 2$.'
      ],
      solutions: [
        '$N(10)=100e^3\\approx100\\times20{,}09\\approx2009$ bactéries.',
        '$100e^{0{,}3t}=200 \\Rightarrow e^{0{,}3t}=2 \\Rightarrow 0{,}3t=\\ln 2 \\Rightarrow t=\\frac{\\ln 2}{0{,}3}\\approx2{,}31$ h.',
        '$t_{double}=\\frac{\\ln 2}{0{,}3}\\approx2{,}31$ h.'
      ],
      finalAnswer: 'La population double toutes les $\\frac{\\ln 2}{0{,}3}\\approx2{,}3$ heures.'
    },

    evaluation: {
      title: 'Évaluation — Fonction logarithme népérien',
      duration: '30 min',
      questions: [
        {
          statement: 'Simplifier $\\ln(e^5)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\ln(e^5) = 5$ car $\\ln$ et $\\exp$ sont des fonctions <strong>réciproques</strong> : $\\ln(e^n) = n$ pour tout $n$.'
        },
        {
          /* Q2 RÉÉCRITE le 2026-09-14. Elle demandait de simplifier
             $\ln 12 - \ln 4$ : application immédiate d'une propriété, donc
             un deuxième calcul.

             La nouvelle question ne demande AUCUN calcul de logarithme :
             on donne le signe d'une expression et l'élève doit en déduire
             une inégalité sur les nombres eux-mêmes, en s'appuyant sur la
             stricte croissance de $\ln$. Passer d'une propriété de la
             fonction à une conclusion sur ses arguments, c'est
             « raisonner ». */
          statement: 'On sait que $\\ln a - \\ln b > 0$, avec $a > 0$ et $b > 0$. <strong>Sans calculer aucun logarithme</strong>, que peut-on en déduire sur $a$ et $b$ ?',
          type: 'multiple-choice',
          options: [
            'On a $a > b$ : la différence s\'écrit $\\ln\\left(\\dfrac{a}{b}\\right)$, et ce logarithme est positif exactement quand son argument dépasse $1$',
            'On a $a > b + 1$, car il faut que la différence dépasse $1$',
            'On a $a - b > 0$ seulement si $a$ et $b$ sont tous deux supérieurs à $e$',
            'On ne peut rien en déduire : le signe d\'un logarithme ne dit rien de son argument'
          ],
          answer: 0,
          points: 2,
          correction: 'Deux propriétés suffisent, et aucune ne demande de calculer quoi que ce soit.<br/><br/>D\'abord, une différence de logarithmes est le logarithme d\'un quotient : $\\ln a - \\ln b = \\ln\\left(\\dfrac{a}{b}\\right)$.<br/><br/>Ensuite, $\\ln$ est <strong>strictement croissante</strong> et s\'annule en $1$. Elle est donc négative sur $]0\\,;\\,1[$ et positive sur $]1\\,;\\,+\\infty[$. Dire qu\'un logarithme est strictement positif, c\'est exactement dire que son argument dépasse $1$.<br/><br/>Ici : $\\ln\\left(\\dfrac{a}{b}\\right) > 0$ donne $\\dfrac{a}{b} > 1$, donc $a > b$ puisque $b > 0$.<br/><br/>L\'option B confond une <strong>différence</strong> de logarithmes avec une différence de nombres. C\'est le même glissement que dans les échelles logarithmiques : $1$ unité de pH d\'écart ne veut pas dire $1$ mol/L d\'écart, mais un facteur $10$.<br/><br/>L\'option D est la plus instructive à écarter : le signe d\'un logarithme dit au contraire beaucoup, puisque $\\ln$ change de signe en un point unique et connu.'
        },
        {
          statement: 'Dériver $f(x) = \\ln(3x + 2)$ pour $x > -\\frac{2}{3}$. Que vaut $f\'(0)$ ?',
          type: 'numeric',
          answer: 1.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On applique $(\\ln u)\' = u\'/u$ avec $u = 3x+2$ et $u\' = 3$ :<br/><br/>$f\'(x) = \\dfrac{3}{3x+2}$. Donc $f\'(0) = \\dfrac{3}{2} = 1{,}5$.'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-14. Elle demandait si
             $\ln(a+b) = \ln a + \ln b$ est vraie : la bonne réponse était
             devinable sans comprendre, puisque c'était la seule option
             commençant par « Fausse » et la seule à contenir une
             justification.

             La nouvelle question ne fournit AUCUNE méthode : elle demande
             de trouver un couple $(a\,;\,b)$ pour lequel l'égalité fautive
             serait, par accident, vraie. Rien dans le cours n'y prépare,
             et il faut explorer — poser l'équation $ab = a + b$, essayer des
             valeurs, ou remarquer que $a = b = 2$ convient. Explorer une
             piste sans méthode donnée, c'est « chercher ». */
          statement: 'On sait que $\\ln(a + b) = \\ln a + \\ln b$ est <strong>fausse</strong> en général. Mais il existe un couple de nombres entiers $a$ et $b$, tous deux strictement positifs, pour lequel les deux membres sont malgré tout égaux. Aucune méthode n\'est imposée : trouve la valeur commune de $a$ et $b$ dans ce cas.',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Écrivons ce que l\'égalité exige. Le membre de droite se regroupe : $\\ln a + \\ln b = \\ln(ab)$. L\'égalité demandée devient donc $\\ln(a + b) = \\ln(ab)$.<br/><br/>Comme $\\ln$ est <strong>strictement croissante</strong>, elle ne prend jamais deux fois la même valeur : deux logarithmes sont égaux si et seulement si leurs arguments le sont. La condition se réduit donc à $a + b = ab$.<br/><br/>C\'est une équation qu\'on peut attaquer de plusieurs façons.<br/><br/>Par essais, avec des entiers : $a = b = 1$ donne $2$ contre $1$ ; $a = b = 2$ donne $4$ contre $4$, et c\'est gagné ; $a = b = 3$ donne $6$ contre $9$.<br/><br/>Par le calcul : $a + b = ab$ se réécrit $a = \\dfrac{b}{b - 1}$, et l\'on cherche les $b$ entiers pour lesquels $b - 1$ divise $b$. Comme $b - 1$ divise aussi $b - 1$, il doit diviser leur différence, c\'est-à-dire $1$. D\'où $b - 1 = 1$ et $b = 2$, puis $a = 2$.<br/><br/>Vérification : $\\ln(2 + 2) = \\ln 4$, et $\\ln 2 + \\ln 2 = \\ln(2 \\times 2) = \\ln 4$. Les deux membres coïncident.<br/><br/>Ce qu\'il faut en retenir : une formule fausse peut tomber juste par accident sur un cas particulier. C\'est précisément pourquoi vérifier une règle sur un exemple ne prouve <strong>rien</strong>, alors qu\'un seul contre-exemple suffit à la réfuter.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-14. Elle demandait de résoudre
             $\ln(x) = 3$ : un troisième calcul, et le plus simple des
             trois.

             La nouvelle question donne une copie d'élève complète, dont
             chaque ligne de calcul est exacte, mais dont la conclusion est
             fausse parce qu'une étape de vérification manque. L'élève ne
             produit aucun nombre : il doit localiser ce qui manque et le
             formuler. C'est « communiquer ».

             Le cas retenu est celui du troisième schéma secondaire du cours
             (domaine de définition), pour que la figure et l'évaluation se
             répondent. */
          statement: 'Un camarade résout $\\ln(x) + \\ln(x - 3) = \\ln(10)$ et rend cette copie : « $\\ln\\big(x(x-3)\\big) = \\ln(10)$, donc $x^2 - 3x - 10 = 0$, de discriminant $49$, donc $x = 5$ ou $x = -2$. Les solutions sont $5$ et $-2$. » Chacune de ses lignes de calcul est exacte. Sa conclusion ne l\'est pas. Que faut-il lui dire ?',
          type: 'multiple-choice',
          options: [
            'Il manque l\'étude du domaine : $\\ln(x)$ et $\\ln(x-3)$ n\'existent que pour $x > 3$, donc $-2$ est à rejeter et la seule solution est $5$',
            'Son discriminant est faux : il vaut $9 + 10 = 19$, donc les racines ne sont pas celles-là',
            'Il n\'avait pas le droit de regrouper les deux logarithmes en un seul',
            'Les deux solutions conviennent, il faut seulement préciser que $-2$ est négative'
          ],
          answer: 0,
          points: 2,
          correction: 'Tout son calcul est juste, et c\'est ce qui rend l\'erreur difficile à voir : elle n\'est dans aucune ligne, elle est dans une ligne <strong>absente</strong>.<br/><br/>Dès la première étape, il a remplacé $\\ln(x) + \\ln(x-3)$ par $\\ln\\big(x(x-3)\\big)$. Ce regroupement est légitime, mais il n\'est valable que là où les deux logarithmes existent — c\'est-à-dire pour $x > 0$ ET $x - 3 > 0$, donc pour $x > 3$.<br/><br/>Or l\'expression $x(x-3)$, elle, a parfaitement un sens en $x = -2$ : elle y vaut $10$. En passant aux arguments, il a donc perdu la contrainte sans s\'en apercevoir, et le polynôme lui a rendu une racine que l\'équation de départ ne pouvait pas avoir.<br/><br/>Le test qui tranche : reporter $-2$ dans l\'équation <strong>initiale</strong> donne $\\ln(-2) + \\ln(-5)$, qui n\'existe pas. Ce n\'est pas une solution « négative donc gênante » (option D) : ce n\'est pas une solution du tout.<br/><br/>Le conseil à lui donner tient en une phrase : <strong>écrire le domaine en première ligne, avant tout calcul</strong>. S\'il avait posé « $x > 3$ » d\'entrée, la racine $-2$ se serait éliminée d\'elle-même, sans qu\'il ait à se souvenir pourquoi.'
        }
      ]
    }
  });
