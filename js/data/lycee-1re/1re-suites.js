/* =========================================================
   Spark Learning – data/lycee-1re/1re-suites.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-suites',
    level: 2, subject: 'maths',
    icon: '🔄',
    title: 'Suites numériques',
    subtitle: 'Suites arithmétiques et géométriques',
    keywords: ['Suite arithmétique', 'Suite géométrique', 'Raison', 'Terme général', 'Somme'],
    physics: 'Décroissance radioactive (suite géométrique), intérêts composés, signal numérique',

    cours: {
      /* DECOUVRIR reecrit le 2026-09-14.
         L'ancienne ouverture definissait la suite, puis les deux natures, puis
         le piege du comptage : trois definitions avant la premiere question. Le
         remplacement pose un choix concret ou les deux propositions sont
         volontairement indiscernables au depart, et ou l'intuition se trompe.
         C'est une entree par une difficulte reelle, pas une anecdote plaquee :
         l'ecart entre les deux offres EST la difference entre les deux natures
         de suite, et c'est tout le chapitre. */
      intro: 'On te propose un travail d\'été de $25$ jours, payé selon l\'une de ces deux formules, à toi de choisir.<br/><br/><strong>Formule A</strong> : $100$ € le premier jour, puis $100$ € de plus chaque jour que la veille.<br/><br/><strong>Formule B</strong> : $1$ centime le premier jour, puis le <strong>double</strong> de la veille chaque jour.<br/><br/>La formule B a l\'air ridicule, et elle l\'est longtemps. Au bout de dix jours, elle ne t\'a rapporté que $10{,}23$ € en tout, pendant que la formule A t\'en a versé $5\\,500$.<br/><br/>Puis quelque chose bascule. Au dix-neuvième jour, la formule B te verse $2\\,621{,}44$ € pour cette seule journée, contre $1\\,900$ € à la formule A : elle vient de passer devant. Trois jours plus tard, c\'est son <strong>total</strong> qui dépasse celui de la formule A. Et au vingt-cinquième jour, la formule B a rapporté plus de $335\\,000$ € quand la formule A en est à $32\\,500$.<br/><br/>Ce renversement n\'est pas une curiosité de calcul : c\'est toute la différence entre <strong>ajouter</strong> chaque fois la même chose et <strong>multiplier</strong> chaque fois par la même chose. Les deux formules avancent régulièrement, mais pas du tout de la même manière — et rien dans les premiers jours ne permet de le deviner.<br/><br/>Ce chapitre te donne de quoi trancher un tel choix sans écrire les vingt-cinq lignes : reconnaître laquelle des deux régularités on a sous les yeux, calculer directement le versement d\'un jour donné, et additionner tous les versements d\'un coup.',
      definitions: [
        { term: 'Suite arithmétique', def: 'Une suite $(u_n)$ est <strong>arithmétique</strong> de raison $r$ si $u_{n+1} = u_n + r$ pour tout $n$. La différence entre deux termes consécutifs est <strong>constante</strong>.' },
        { term: 'Suite géométrique', def: 'Une suite $(u_n)$ est <strong>géométrique</strong> de raison $q$ si $u_{n+1} = u_n \\times q$ pour tout $n$ (avec $u_0 \\neq 0$). Le quotient entre deux termes consécutifs est <strong>constant</strong>.' },
        { term: 'Raison', def: 'La <strong>raison</strong> est le nombre qui caractérise la régularité : $r = u_{n+1} - u_n$ (arithmétique) ou $q = u_{n+1}/u_n$ (géométrique).' },
        { term: 'Terme général', def: 'Le <strong>terme général</strong> donne $u_n$ directement en fonction de $n$ : $u_n = u_0 + nr$ (arithmétique) ou $u_n = u_0 \\times q^n$ (géométrique).' }
      ],
      method: {
        title: 'Méthode',
        steps: [
          '<strong>Identifier la nature</strong> de la suite : si $u_{n+1} - u_n$ est constant, elle est <strong>arithmétique</strong> ; si $u_{n+1} / u_n$ est constant, elle est <strong>géométrique</strong>.<br/><br/>Teste toujours les différences d\'abord, puis les quotients.',
          '<strong>Suite arithmétique</strong> (raison $r$) : $u_n = u_0 + n \\times r$. Terme suivant = terme précédent $+ r$ (variation constante).',
          '<strong>Suite géométrique</strong> (raison $q$) : $u_n = u_0 \\times q^n$. Terme suivant = terme précédent $\\times q$ (taux de variation constant).',
          '<strong>Sommer les premiers termes</strong> : compte d\'abord les termes — de $u_0$ à $u_n$, il y en a $n+1$.<br/><br/>Puis $S = \\dfrac{(u_0 + u_n)(n+1)}{2}$ pour une arithmétique, $S = u_0 \\times \\dfrac{1 - q^{n+1}}{1 - q}$ pour une géométrique.<br/><br/><strong>Exemple :</strong> pour $u_n = 2 \\times 3^n$, la somme $u_0 + u_1 + u_2 + u_3$ compte $4$ termes : $S = 2 \\times \\dfrac{1 - 3^4}{1 - 3} = 2 \\times \\dfrac{-80}{-2} = 80$.<br/><br/>Vérification terme à terme : $2 + 6 + 18 + 54 = 80$.'
        ]
      },
      example: {
        statement: 'Un capital de $1\\,000$ € est placé à un taux annuel de $3\\%$ à intérêts composés. Exprimer le capital $C_n$ après $n$ années et calculer $C_5$.',
        steps: [
          'Chaque année, le capital est multiplié par $1{,}03$ : c\'est une suite géométrique de raison $q = 1{,}03$ et de premier terme $C_0 = 1\\,000$.',
          'Terme général : $C_n = C_0 \\times q^n = 1\\,000 \\times 1{,}03^n$.',
          '$C_5 = 1\\,000 \\times 1{,}03^5 = 1\\,000 \\times 1{,}15927\\ldots \\approx 1\\,159{,}27$ €.'
        ],
        answer: 'Après $5$ ans, le capital vaut environ $1\\,159{,}27$ €. La suite $(C_n)$ est géométrique de raison $1{,}03$.'
      },
      formulas: [
        '$u_n^{\\text{arith}} = u_0 + n \\cdot r$',
        '$u_n^{\\text{géom}} = u_0 \\times q^n$',
        '$S_n^{\\text{arith}} = \\dfrac{(u_0 + u_n)(n+1)}{2}$',
        '$S_n^{\\text{géom}} = u_0 \\times \\dfrac{1 - q^{n+1}}{1 - q}$ (si $q \\neq 1$)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Nuage de points $(n\\,;\\,u_n)$',
        title: 'Même point de départ, deux croissances : $u_n = 2+3n$ contre $u_n = 2\\times3^n$',
        description: 'Reprise de deux exemples déjà utilisés dans le quiz du module : une suite arithmétique $u_0=2$, $r=3$ (dont on a vérifié $u_5=17$) et une suite géométrique $u_0=2$, $q=3$ (dont on a vérifié $u_3=54$).<br/><br/>Les deux nuages sont tracés côte à côte, avec des <strong>échelles verticales différentes</strong> : à l\'échelle de la suite géométrique, la suite arithmétique serait totalement écrasée contre l\'axe.',
        svg: `
          <svg viewBox="0 0 480 300" role="img" aria-labelledby="suites-cmp-title suites-cmp-desc">
            <title id="suites-cmp-title">Comparaison suite arithmetique et suite geometrique de meme depart</title>
            <desc id="suites-cmp-desc">Deux nuages de points cote a cote. A gauche, la suite arithmetique u(n)=2+3n croit de facon reguliere de 2 a 17 pour n de 0 a 5. A droite, la suite geometrique u(n)=2 fois 3 puissance n croit de 2 a 486 sur le meme intervalle, avec une echelle verticale plus grande et une forme qui s'envole en fin de parcours.</desc>

            <!-- Panel A : suite arithmetique u_n = 2 + 3n -->
            <rect class="frame-line" x="50" y="20" width="155" height="210" fill="none"></rect>
            <line class="grid-line" x1="50" y1="160" x2="205" y2="160"></line>
            <line class="grid-line" x1="50" y1="90" x2="205" y2="90"></line>

            <polyline class="guide-line" points="50,206.67 81,171.67 112,136.67 143,101.67 174,66.67 205,31.67" fill="none"></polyline>

            <circle class="plot-point" cx="50" cy="206.67" r="5"></circle>
            <circle class="plot-point-alt" cx="81" cy="171.67" r="4"></circle>
            <circle class="plot-point-alt" cx="112" cy="136.67" r="4"></circle>
            <circle class="plot-point-alt" cx="143" cy="101.67" r="4"></circle>
            <circle class="plot-point-alt" cx="174" cy="66.67" r="4"></circle>
            <circle class="plot-point" cx="205" cy="31.67" r="5.5"></circle>

            <text class="tick-label" x="40" y="234" text-anchor="end">0</text>
            <text class="tick-label" x="40" y="164" text-anchor="end">6</text>
            <text class="tick-label" x="40" y="94" text-anchor="end">12</text>
            <text class="tick-label" x="40" y="24" text-anchor="end">18</text>

            <text class="tick-label" x="50" y="248" text-anchor="middle">0</text>
            <text class="tick-label" x="81" y="248" text-anchor="middle">1</text>
            <text class="tick-label" x="112" y="248" text-anchor="middle">2</text>
            <text class="tick-label" x="143" y="248" text-anchor="middle">3</text>
            <text class="tick-label" x="174" y="248" text-anchor="middle">4</text>
            <text class="tick-label" x="205" y="248" text-anchor="middle">5</text>

            <text class="annotation-label" x="127" y="14" text-anchor="middle">Arithmétique : u(n) = 2 + 3n</text>
            <text class="axis-label" x="127" y="264" text-anchor="middle">n</text>
            <text class="label-soft" x="15" y="125" text-anchor="middle" transform="rotate(-90 15 125)">u(n)</text>
            <text class="annotation-label" x="55" y="200">u0 = 2</text>
            <text class="annotation-label" x="200" y="45" text-anchor="end">u5 = 17</text>

            <!-- Panel B : suite geometrique u_n = 2 x 3^n -->
            <rect class="frame-line" x="290" y="20" width="155" height="210" fill="none"></rect>
            <line class="grid-line" x1="290" y1="188" x2="445" y2="188"></line>
            <line class="grid-line" x1="290" y1="146" x2="445" y2="146"></line>
            <line class="grid-line" x1="290" y1="104" x2="445" y2="104"></line>
            <line class="grid-line" x1="290" y1="62" x2="445" y2="62"></line>

            <polyline class="guide-line" points="290,229.16 321,227.48 352,222.44 383,207.32 414,161.96 445,25.88" fill="none"></polyline>

            <circle class="plot-point" cx="290" cy="229.16" r="5"></circle>
            <circle class="plot-point-alt" cx="321" cy="227.48" r="4"></circle>
            <circle class="plot-point-alt" cx="352" cy="222.44" r="4"></circle>
            <circle class="plot-point-alt" cx="383" cy="207.32" r="4"></circle>
            <circle class="plot-point-alt" cx="414" cy="161.96" r="4"></circle>
            <circle class="plot-point" cx="445" cy="25.88" r="5.5"></circle>

            <text class="tick-label" x="280" y="234" text-anchor="end">0</text>
            <text class="tick-label" x="280" y="192" text-anchor="end">100</text>
            <text class="tick-label" x="280" y="150" text-anchor="end">200</text>
            <text class="tick-label" x="280" y="108" text-anchor="end">300</text>
            <text class="tick-label" x="280" y="66" text-anchor="end">400</text>
            <text class="tick-label" x="280" y="24" text-anchor="end">500</text>

            <text class="tick-label" x="290" y="248" text-anchor="middle">0</text>
            <text class="tick-label" x="321" y="248" text-anchor="middle">1</text>
            <text class="tick-label" x="352" y="248" text-anchor="middle">2</text>
            <text class="tick-label" x="383" y="248" text-anchor="middle">3</text>
            <text class="tick-label" x="414" y="248" text-anchor="middle">4</text>
            <text class="tick-label" x="445" y="248" text-anchor="middle">5</text>

            <text class="annotation-label" x="367" y="14" text-anchor="middle">Géométrique : u(n) = 2 × 3ⁿ</text>
            <text class="axis-label" x="367" y="264" text-anchor="middle">n</text>
            <text class="label-soft" x="255" y="125" text-anchor="middle" transform="rotate(-90 255 125)">u(n)</text>
            <text class="annotation-label" x="295" y="222">u0 = 2</text>
            <text class="annotation-label" x="440" y="40" text-anchor="end">u5 = 486</text>
          </svg>
        `,
        notes: [
          'Suite arithmétique $u_n=2+3n$ : $2, 5, 8, 11, 14, 17$ pour $n=0$ à $5$. Chaque terme ajoute $3$ au précédent — la pente du nuage de points est constante.',
          'Suite géométrique $u_n=2\\times3^n$ : $2, 6, 18, 54, 162, 486$ pour $n=0$ à $5$. Chaque terme multiplie le précédent par $3$ — l\'écart entre deux termes grossit lui-même à chaque étape.',
          'Sur $5$ pas, l\'arithmétique est multipliée par $8{,}5$ (soit $17/2$) alors que la géométrique est multipliée par $243$ (soit $486/2=3^5$) : c\'est la signature d\'une croissance exponentielle.'
        ],
        reading: 'Les deux suites partent du même $u_0=2$ et utilisent le même nombre $3$ (comme raison $r$ ou comme raison $q$) — pourtant leurs profils sont radicalement différents : alignement régulier de points sur une <strong>droite</strong> (arithmétique) contre courbe qui <strong>s\'envole</strong> (géométrique).<br/><br/>Sur un même graphique à échelle unique, les $6$ points de la suite arithmétique seraient quasiment collés à l\'axe des abscisses tant $486$ écrase $17$ : c\'est pourquoi les deux nuages utilisent des échelles verticales différentes.',
        caption: 'Comparaison à $u_0=2$ identique : $u_n=2+3n$ (gauche) contre $u_n=2\\times3^n$ (droite), pour $n=0$ à $5$.'
      },

      /* SCHEMAS SECONDAIRES ajoutes le 2026-09-14.
         DEUX schemas seulement, et c'est deliberé. Ce chapitre est peu
         demandeur en figures : ses deux notions centrales — la raison et le
         terme general — sont des relations arithmetiques, pas des objets
         geometriques, et le schema principal du module couvre deja la
         comparaison arithmetique/geometrique. Une troisieme figure aurait ete
         une figure de plus, pas un malentendu de plus.

         Les deux retenues portent chacune un malentendu que le cours signale
         explicitement dans sa rubrique « piege » :
         1. le decalage rang / nombre de termes ($u_0$ a $u_n$ fait $n+1$
            termes), qui fausse toutes les sommes ;
         2. une suite geometrique de raison entre 0 et 1 decroit indefiniment
            sans jamais atteindre zero.
         Coordonnees calculees et verifiees par script : le nombre de jetons et
         le nombre de pas sont comptes, et la hauteur de chaque barre de la
         seconde figure est verifiee strictement positive. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le décalage qui fausse les sommes',
          title: 'De $u_0$ à $u_5$, il y a six termes et cinq pas',
          description: 'C\'est l\'erreur la plus coûteuse du chapitre, parce qu\'elle ne se voit pas : elle ne fait pas échouer le calcul, elle donne un résultat <strong>presque</strong> juste.<br/><br/>Le rang compte les <strong>pas</strong> effectués depuis le départ ; la somme, elle, compte les <strong>termes</strong>. Or il y a toujours un terme de plus que de pas, parce que le premier terme est là avant qu\'aucun pas n\'ait été fait.',
          svg: `
            <svg viewBox="0 0 440 230" role="img" aria-labelledby="su-rang-title su-rang-desc">
              <title id="su-rang-title">Six termes mais cinq pas entre eux</title>
              <desc id="su-rang-desc">Six ronds alignes horizontalement representent les termes de rang 0 a 5 d'une suite. Entre deux ronds consecutifs, une fleche represente le passage d'un terme au suivant : il y a cinq fleches pour six ronds. Le compte des ronds donne six termes, celui des fleches donne cinq pas, et la figure montre que ces deux nombres ne sont pas les memes.</desc>

              <line class="axis" x1="40.0" y1="80" x2="390.0" y2="80"></line>

              <circle class="plot-point" cx="70.0" cy="80" r="9"></circle>
              <circle class="plot-point" cx="128.0" cy="80" r="9"></circle>
              <circle class="plot-point" cx="186.0" cy="80" r="9"></circle>
              <circle class="plot-point" cx="244.0" cy="80" r="9"></circle>
              <circle class="plot-point" cx="302.0" cy="80" r="9"></circle>
              <circle class="plot-point" cx="360.0" cy="80" r="9"></circle>

              <text class="tick-label" x="70.0" y="60" text-anchor="middle">u0</text>
              <text class="tick-label" x="128.0" y="60" text-anchor="middle">u1</text>
              <text class="tick-label" x="186.0" y="60" text-anchor="middle">u2</text>
              <text class="tick-label" x="244.0" y="60" text-anchor="middle">u3</text>
              <text class="tick-label" x="302.0" y="60" text-anchor="middle">u4</text>
              <text class="tick-label" x="360.0" y="60" text-anchor="middle">u5</text>

              <line class="focus-line" x1="70.0" y1="130" x2="128.0" y2="130"></line>
              <line class="focus-line" x1="128.0" y1="130" x2="186.0" y2="130"></line>
              <line class="focus-line" x1="186.0" y1="130" x2="244.0" y2="130"></line>
              <line class="focus-line" x1="244.0" y1="130" x2="302.0" y2="130"></line>
              <line class="focus-line" x1="302.0" y1="130" x2="360.0" y2="130"></line>

              <line class="guide-line" x1="70.0" y1="90" x2="70.0" y2="130"></line>
              <line class="guide-line" x1="128.0" y1="90" x2="128.0" y2="130"></line>
              <line class="guide-line" x1="186.0" y1="90" x2="186.0" y2="130"></line>
              <line class="guide-line" x1="244.0" y1="90" x2="244.0" y2="130"></line>
              <line class="guide-line" x1="302.0" y1="90" x2="302.0" y2="130"></line>
              <line class="guide-line" x1="360.0" y1="90" x2="360.0" y2="130"></line>

              <text class="tick-label" x="99.0" y="150" text-anchor="middle">1</text>
              <text class="tick-label" x="157.0" y="150" text-anchor="middle">2</text>
              <text class="tick-label" x="215.0" y="150" text-anchor="middle">3</text>
              <text class="tick-label" x="273.0" y="150" text-anchor="middle">4</text>
              <text class="tick-label" x="331.0" y="150" text-anchor="middle">5</text>

              <text class="annotation-label" x="400" y="84" text-anchor="start">six</text>
              <text class="annotation-label" x="400" y="134" text-anchor="start">cinq</text>
              <text class="label-soft" x="215" y="184" text-anchor="middle">six ronds à compter, cinq écarts entre eux</text>
              <text class="label-soft" x="215" y="208" text-anchor="middle">le rang compte les écarts, la somme compte les ronds</text>
            </svg>
          `,
          notes: [
            'Les six ronds sont les termes $u_0$, $u_1$, $u_2$, $u_3$, $u_4$ et $u_5$ : ils se comptent en commençant à <strong>zéro</strong>, ce qui est toute la source du décalage.',
            'Les cinq traits du bas sont les passages d\'un terme au suivant. Chacun ajoute une fois la raison $r$ — d\'où $u_5 = u_0 + 5r$, avec bien un $5$.',
            'Dans la formule de somme $S = \\dfrac{(u_0 + u_n)(n+1)}{2}$, le facteur $n+1$ n\'est donc pas une correction arbitraire : c\'est le <strong>nombre de ronds</strong>.',
            'Vérification sur $u_n = 2 + 3n$ : les six termes sont $2, 5, 8, 11, 14, 17$, de somme $57$, et la formule donne $\\dfrac{(2+17)\\times 6}{2} = 57$. Avec un facteur $5$ au lieu de $6$, on aurait obtenu $47{,}5$ — un nombre plausible, et faux.',
            'Le même décalage vaut pour une suite qui commence à $u_1$ : de $u_1$ à $u_n$, il y a alors $n$ termes. Ce qui compte n\'est jamais le rang seul, mais l\'écart des rangs augmenté de un.'
          ],
          reading: 'Compte les ronds à voix haute, puis compte les traits. Tu trouves six d\'un côté et cinq de l\'autre, et pourtant tu as parcouru la même ligne. C\'est ce léger décalage qu\'il faut avoir en tête chaque fois qu\'une somme apparaît : demande-toi toujours si le nombre que tu écris compte des ronds ou des traits.',
          caption: 'Les termes $u_0$ à $u_5$ : six termes séparés par cinq pas, d\'où le facteur $n+1$ dans la formule de somme.'
        },
        {
          theme: 'maths',
          kicker: 'Décroître sans jamais s\'annuler',
          title: 'Une raison entre $0$ et $1$ : la suite diminue toujours et n\'atteint jamais zéro',
          description: 'Quand la raison $q$ vaut $\\dfrac{1}{2}$, chaque terme est la moitié du précédent. La suite diminue donc à chaque étape — mais <strong>diviser par deux ne donne jamais zéro</strong>, aussi longtemps qu\'on recommence.<br/><br/>C\'est ce que dit le cours à propos de la demi-vie : il reste toujours quelque chose, en théorie.',
          svg: `
            <svg viewBox="0 0 440 270" role="img" aria-labelledby="su-demi-title su-demi-desc">
              <title id="su-demi-title">Une suite geometrique de raison un demi qui n atteint jamais zero</title>
              <desc id="su-demi-desc">Huit barres verticales de hauteurs decroissantes sont posees sur une meme ligne horizontale. La premiere mesure 64 unites, la deuxieme 32, puis 16, 8, 4, 2, 1 et enfin un demi : chaque barre fait exactement la moitie de la precedente. Les dernieres barres deviennent tres basses mais aucune ne disparait : leur sommet reste au-dessus de la ligne.</desc>

              <line class="axis" x1="26.0" y1="210" x2="420.0" y2="210"></line>

              <line class="focus-line" x1="60.0" y1="30.8" x2="60.0" y2="210"></line>
              <line class="focus-line" x1="108.0" y1="120.4" x2="108.0" y2="210"></line>
              <line class="focus-line" x1="156.0" y1="165.2" x2="156.0" y2="210"></line>
              <line class="focus-line" x1="204.0" y1="187.6" x2="204.0" y2="210"></line>
              <line class="focus-line" x1="252.0" y1="198.8" x2="252.0" y2="210"></line>
              <line class="focus-line" x1="300.0" y1="204.4" x2="300.0" y2="210"></line>
              <line class="focus-line" x1="348.0" y1="207.2" x2="348.0" y2="210"></line>
              <line class="focus-line" x1="396.0" y1="208.6" x2="396.0" y2="210"></line>

              <polyline class="guide-line" points="60.0,30.8 108.0,120.4 156.0,165.2 204.0,187.6 252.0,198.8 300.0,204.4 348.0,207.2 396.0,208.6" fill="none"></polyline>

              <circle class="plot-point" cx="60.0" cy="30.8" r="5"></circle>
              <circle class="plot-point-alt" cx="108.0" cy="120.4" r="4"></circle>
              <circle class="plot-point-alt" cx="156.0" cy="165.2" r="4"></circle>
              <circle class="plot-point-alt" cx="204.0" cy="187.6" r="4"></circle>
              <circle class="plot-point-alt" cx="252.0" cy="198.8" r="4"></circle>
              <circle class="plot-point-alt" cx="300.0" cy="204.4" r="4"></circle>
              <circle class="plot-point-alt" cx="348.0" cy="207.2" r="4"></circle>
              <circle class="plot-point" cx="396.0" cy="208.6" r="5"></circle>

              <text class="annotation-label" x="60.0" y="22" text-anchor="middle">64</text>
              <text class="tick-label" x="108.0" y="112" text-anchor="middle">32</text>
              <text class="tick-label" x="156.0" y="157" text-anchor="middle">16</text>
              <text class="tick-label" x="204.0" y="180" text-anchor="middle">8</text>
              <text class="tick-label" x="252.0" y="191" text-anchor="middle">4</text>
              <text class="tick-label" x="300.0" y="197" text-anchor="middle">2</text>
              <text class="tick-label" x="348.0" y="200" text-anchor="middle">1</text>
              <text class="annotation-label" x="396.0" y="201" text-anchor="middle">0,5</text>

              <text class="tick-label" x="60.0" y="228" text-anchor="middle">0</text>
              <text class="tick-label" x="108.0" y="228" text-anchor="middle">1</text>
              <text class="tick-label" x="156.0" y="228" text-anchor="middle">2</text>
              <text class="tick-label" x="204.0" y="228" text-anchor="middle">3</text>
              <text class="tick-label" x="252.0" y="228" text-anchor="middle">4</text>
              <text class="tick-label" x="300.0" y="228" text-anchor="middle">5</text>
              <text class="tick-label" x="348.0" y="228" text-anchor="middle">6</text>
              <text class="tick-label" x="396.0" y="228" text-anchor="middle">7</text>
              <text class="axis-label" x="220" y="248" text-anchor="middle">rang</text>
              <text class="label-soft" x="220" y="266" text-anchor="middle">chaque barre vaut la moitié de la précédente</text>
            </svg>
          `,
          notes: [
            'La suite est $u_n = 64 \\times \\left(\\dfrac{1}{2}\\right)^n$, donc $u_0 = 64$, $u_1 = 32$, $u_2 = 16$, et ainsi de suite jusqu\'à $u_7 = 0{,}5$.',
            'Le quotient de deux barres consécutives vaut toujours $\\dfrac{1}{2}$ : c\'est bien une suite <strong>géométrique</strong>, même si elle décroît.',
            'Une raison peut donc être plus petite que $1$ sans être négative : $0 < q < 1$ donne une suite qui diminue, et c\'est le cas de toute décroissance radioactive.',
            'Les dernières barres sont très basses, mais aucune n\'est nulle : la moitié d\'un nombre strictement positif reste strictement positive, <strong>à chaque étape, sans exception</strong>.',
            'C\'est pourquoi on dit que la suite <strong>tend vers</strong> $0$ sans l\'atteindre. Le mot « tend vers » sera défini précisément en terminale ; ici, la figure en montre déjà le sens.'
          ],
          reading: 'Parcours les barres de la gauche vers la droite et regarde à chaque fois de combien la hauteur a diminué : la chute est énorme au début, minuscule à la fin. Cherche maintenant la première barre de hauteur nulle : il n\'y en a pas. La suite s\'approche de la ligne autant qu\'on veut, mais elle ne s\'y pose jamais.',
          caption: 'Suite géométrique $u_n = 64\\times\\left(\\frac{1}{2}\\right)^n$ : chaque terme vaut la moitié du précédent et reste strictement positif.'
        }
      ],

      recap: [
        'Arithmétique : on <strong>ajoute</strong> toujours la même quantité $r$. Formule : $u_n = u_0 + nr$.',
        'Géométrique : on <strong>multiplie</strong> toujours par le même facteur $q$. Formule : $u_n = u_0 \\times q^n$.',
        'De $u_0$ à $u_n$, il y a $n+1$ termes (piège classique : ne pas confondre rang et nombre de termes).',
        'Les sommes utilisent des formules spécifiques : ne jamais additionner terme par terme si $n$ est grand !'
      ],
      piege: 'Confondre le <strong>rang</strong> et le <strong>nombre de termes</strong> est l\'erreur la plus fréquente. $u_0, u_1, \\ldots, u_n$ contient $n+1$ termes (pas $n$).<br/><br/>Pour la demi-vie : après $k$ demi-vies, il reste $N_0 \\times (1/2)^k$ — c\'est un exposant $k$, pas $k-1$ !'
    },

    quiz: [
      {
        q: 'Une suite a pour premiers termes $1, 3, 9, 27, 81$. Un élève dit : "c\'est une suite arithmétique de raison $2$" (car $3 - 1 = 2$). Quelle est son erreur ?',
        options: [
          'C\'est une suite géométrique de raison $3$ (car $3/1 = 9/3 = 27/9 = 3$), pas arithmétique',
          'L\'élève a raison, c\'est bien arithmétique mais la raison est $3$, pas $2$',
          'Ce n\'est ni arithmétique ni géométrique car les différences ne sont pas constantes et les quotients non plus',
          'La raison $2$ est correcte : on prend la différence entre le 1er et le 2e terme'
        ],
        answer: 0,
        correction: 'Dans une suite arithmétique, la différence entre deux termes consécutifs est constante. Ici $3-1=2$, $9-3=6$, $27-9=18$ : les différences ne sont <strong>pas</strong> constantes.<br/><br/>En revanche, les quotients $3/1=3$, $9/3=3$, $27/9=3$ sont constants : c\'est une <strong>suite géométrique</strong> de raison $q=3$.'
      },
      {
        q: 'Un noyau radioactif a une demi-vie de $8$ jours. Il en reste $100$ g initialement. Combien en reste-t-il après $24$ jours ?',
        options: ['$50$ g', '$25$ g', '$12{,}5$ g', '$6{,}25$ g'],
        answer: 2,
        correction: 'On commence par déterminer le nombre de demi-vies écoulées : $24$ jours $= 3 \\times 8$ jours $= 3$ demi-vies.<br/><br/>On applique la formule : $N = 100 \\times \\left(\\dfrac{1}{2}\\right)^3 = 100 \\times \\dfrac{1}{8} = 12{,}5$ g.'
      },
      {
        q: 'Une suite géométrique a $u_0 = 2$ et $q = 3$. Quel est le terme $u_3$ ?',
        options: ['$18$', '$54$', '$27$', '$6$'],
        answer: 1,
        correction: 'On utilise la formule du terme général : $u_n = u_0 \\times q^n$.<br/><br/>Donc $u_3 = u_0 \\times q^3 = 2 \\times 3^3 = 2 \\times 27 = 54$.'
      },
      {
        q: 'La somme $u_0 + u_1 + \\cdots + u_5$ d\'une suite arithmétique avec $u_0 = 2$ et $r = 3$ vaut :',
        options: ['$47{,}5$', '$114$', '$17$', '$57$'],
        answer: 3,
        correction: 'On calcule d\'abord le dernier terme : $u_5 = 2 + 5 \\times 3 = 17$.<br/><br/>De $u_0$ à $u_5$, il y a $6$ termes (attention, pas $5$).<br/><br/>On applique la formule de somme : $S = \\dfrac{(u_0 + u_5) \\times 6}{2} = \\dfrac{(2 + 17) \\times 6}{2} = \\dfrac{114}{2} = 57$.<br/><br/>Si tu as trouvé $47{,}5$, tu as compté $5$ termes au lieu de $6$ : c\'est le décalage entre <strong>rang</strong> et <strong>nombre de termes</strong>.<br/><br/>Si tu as trouvé $114$, il manque la division par $2$. Et $17$ n\'est que le dernier terme, pas la somme.'
      },
      {
        q: 'Une suite vérifie $u_0 = 5$ et $u_n = 5 + 2n$. Sa nature est :',
        options: ['Géométrique de raison $2$', 'Arithmétique de raison $2$', 'Ni arithmétique ni géométrique', 'Arithmétique de raison $5$'],
        answer: 1,
        correction: 'On calcule la différence entre deux termes consécutifs : $u_{n+1} - u_n = (5 + 2(n+1)) - (5 + 2n) = 2$.<br/><br/>La différence est constante et vaut $2$ : c\'est bien une <strong>suite arithmétique</strong> de raison $r = 2$.'
      }
    ],

    exercice: {
      type: 'numeric',
      /* BANQUE ELARGIE le 2026-09-14.
         Avant : deux tâches (terme et somme d'une arithmétique d'un côté, terme
         d'une géométrique de l'autre), tirées dix-huit fois.

         Sept tâches désormais. Les cinq ajoutées travaillent ce que le chapitre
         demande et que la banque ne demandait jamais : reconnaître la NATURE
         d'une suite (le geste premier du chapitre, et l'objet du quiz), retrouver
         une raison à partir de deux termes non consécutifs, sommer une
         géométrique, franchir un seuil par recherche du premier rang, et lire
         une décroissance géométrique dans un contexte de demi-vie.

         Toutes les valeurs décimales passent par fr() : c'est la règle du projet
         et le bug qui revient le plus souvent dans ce dossier. */
      generate() {
        const type = pick(['arith', 'geom', 'nature', 'raison', 'sommegeom', 'seuil', 'demivie']);

        if (type === 'nature') {
          /* Reconnaître la nature d'une suite à partir de ses premiers termes.
             C'est le premier geste du chapitre, présent au quiz mais absent de la
             banque. On propose les trois cas, y compris « ni l'une ni l'autre »,
             parce qu'un élève qui n'a jamais rencontré ce troisième cas classe
             tout dans les deux premiers. */
          const cas = pick(['arith', 'geom', 'ni']);
          const u0 = rand(2, 6);
          let termes, rep, just;
          if (cas === 'arith') {
            const r = rand(3, 9);
            termes = [0, 1, 2, 3, 4].map(n => u0 + n * r);
            rep = 1;
            just = `Les différences successives valent toutes $${r}$ : $${termes[1]} - ${termes[0]} = ${r}$, $${termes[2]} - ${termes[1]} = ${r}$, et ainsi de suite. La suite est <strong>arithmétique</strong> de raison $r = ${r}$.`;
          } else if (cas === 'geom') {
            const q = pick([2, 3]);
            termes = [0, 1, 2, 3, 4].map(n => u0 * Math.pow(q, n));
            rep = 2;
            just = `Les différences ne sont pas constantes ($${termes[1]} - ${termes[0]} = ${termes[1] - termes[0]}$ puis $${termes[2]} - ${termes[1]} = ${termes[2] - termes[1]}$), mais les quotients le sont : $${termes[1]} \\div ${termes[0]} = ${q}$ et $${termes[2]} \\div ${termes[1]} = ${q}$. La suite est <strong>géométrique</strong> de raison $q = ${q}$.`;
          } else {
            termes = [0, 1, 2, 3, 4].map(n => u0 + n * n);   // carrés : ni l'un ni l'autre
            rep = 3;
            just = `Les différences valent $1$, $3$, $5$, $7$ : elles ne sont pas constantes, donc la suite n'est pas arithmétique. Les quotients $${termes[1]}/${termes[0]}$ et $${termes[2]}/${termes[1]}$ ne le sont pas non plus, donc elle n'est pas géométrique. Cette suite n'est <strong>ni l'une ni l'autre</strong> : chaque terme s'obtient en ajoutant un nombre impair au précédent.`;
          }
          return {
            statement: `Une suite a pour cinq premiers termes : $${termes.join('$, $')}$.<br/><br/>Déterminer sa nature en testant d'abord les différences, puis les quotients.<br/><br/>Répondre $1$ si la suite est arithmétique, $2$ si elle est géométrique, $3$ si elle n'est ni l'une ni l'autre.`,
            answer: rep, tolerance: 0, unit: '',
            hint: `Calcule d'abord $u_1 - u_0$ puis $u_2 - u_1$ : si ces deux différences sont égales, la piste arithmétique tient. Sinon, essaie les quotients $u_1 \\div u_0$ et $u_2 \\div u_1$.`,
            solution: [
              `On commence par les différences entre termes consécutifs, puis, si elles ne sont pas constantes, par les quotients.`,
              just,
              `La réponse attendue est donc $${rep}$.`
            ]
          };
        }

        if (type === 'raison') {
          /* Retrouver la raison à partir de DEUX TERMES NON CONSÉCUTIFS. L'élève
             ne peut pas se contenter de soustraire : il doit voir que l'écart
             couvre plusieurs pas et diviser par le nombre de pas. C'est
             exactement l'erreur « je divise par le rang au lieu de l'écart de
             rangs », que rien dans la banque d'origine ne venait déranger. */
          const p = rand(2, 4), n = p + rand(3, 6);
          const r = rand(3, 9);
          const u0 = rand(1, 8);
          const up = u0 + p * r, un = u0 + n * r;
          const ctx = pick([
            { quoi: 'Le nombre de places de parking d\'un quartier augmente chaque année de la même quantité', v: 'places' },
            { quoi: 'La longueur d\'une digue s\'allonge chaque mois de la même quantité', v: 'mètres' },
            { quoi: 'Le nombre d\'abonnés d\'une revue croît chaque trimestre de la même quantité', v: 'abonnés' }
          ]);
          return {
            statement: `${ctx.quoi}, ce qui en fait une suite arithmétique $(u_n)$.<br/><br/>On sait que $u_{${p}} = ${up}$ et $u_{${n}} = ${un}$ (en ${ctx.v}).<br/><br/>Déterminer la raison $r$ de cette suite.`,
            answer: r, tolerance: 0.001, unit: '',
            hint: `De $u_{${p}}$ à $u_{${n}}$, il s'écoule $${n} - ${p} = ${n - p}$ pas, et non $${n}$. L'écart total se partage donc en $${n - p}$ parts égales.`,
            solution: [
              `Entre le rang $${p}$ et le rang $${n}$, la suite fait $${n} - ${p} = ${n - p}$ pas, et chacun de ces pas ajoute la même raison $r$.`,
              `L'écart total vaut $u_{${n}} - u_{${p}} = ${un} - ${up} = ${un - up}$, qui se répartit sur ces $${n - p}$ pas.`,
              `Donc $r = \\dfrac{${un - up}}{${n - p}} = ${r}$. On peut vérifier : $u_{${p}} + ${n - p} \\times ${r} = ${up} + ${(n - p) * r} = ${un}$.`
            ]
          };
        }

        if (type === 'sommegeom') {
          /* La somme d'une suite géométrique : donnée en formule dans le cours et
             demandée à l'évaluation, mais jamais travaillée dans la banque. On
             tire $q$ entier pour que la somme reste entière. */
          const u0 = rand(1, 5), q = pick([2, 3]), n = rand(4, 7);
          const somme = u0 * (Math.pow(q, n + 1) - 1) / (q - 1);
          const ctx = pick([
            { quoi: 'Un défi solidaire démarre avec', unite: 'participants', mot: `Chaque jour, le nombre de nouveaux participants est multiplié par $${q}$` },
            { quoi: 'Un tournoi de dominos aligne d\'abord', unite: 'pièces', mot: `Chaque rangée suivante compte $${q}$ fois plus de pièces que la précédente` }
          ]);
          return {
            statement: `${ctx.quoi} $${u0}$ ${ctx.unite}. ${ctx.mot}.<br/><br/>1) Justifier que la suite $(u_n)$ est géométrique et donner sa raison.<br/>2) Calculer le <strong>total cumulé</strong> $S = u_0 + u_1 + \\cdots + u_{${n}}$.<br/><br/>Donner la valeur de $S$.`,
            answer: somme, tolerance: 0.01, unit: '',
            hint: `La formule est $S = u_0 \\times \\dfrac{1 - q^{n+1}}{1 - q}$. Attention à l'exposant : de $u_0$ à $u_{${n}}$ il y a $${n + 1}$ termes, donc l'exposant vaut $${n + 1}$ et non $${n}$.`,
            solution: [
              `Chaque terme s'obtient en multipliant le précédent par $${q}$ : la suite est <strong>géométrique</strong> de raison $q = ${q}$ et de premier terme $u_0 = ${u0}$.`,
              `De $u_0$ à $u_{${n}}$, il y a $${n + 1}$ termes, donc $S = ${u0} \\times \\dfrac{1 - ${q}^{${n + 1}}}{1 - ${q}} = ${u0} \\times \\dfrac{1 - ${Math.pow(q, n + 1)}}{${1 - q}}$.`,
              `On obtient $S = ${u0} \\times ${(Math.pow(q, n + 1) - 1) / (q - 1)} = ${somme}$.`
            ]
          };
        }

        if (type === 'seuil') {
          /* Le premier rang qui franchit un seuil. On ne dispose pas du
             logarithme en première : la recherche se fait de proche en proche,
             ce qui est précisément la méthode attendue au programme. */
          const u0 = rand(2, 6), q = pick([2, 3]);
          const N = rand(3, 6);
          const seuil = u0 * Math.pow(q, N) - rand(1, Math.max(1, Math.floor(u0 * Math.pow(q, N - 1))));
          const ctx = pick([
            { quoi: 'Une colonie de bactéries compte', unite: 'individus', mot: `Leur nombre est multiplié par $${q}$ à chaque heure`, seuilMot: 'heures' },
            /* « Un forum compte au départ ... messages au départ » : le gabarit
               ajoute lui-meme « au départ » apres l'unite, d'ou la repetition.
               Corrige le 2026-09-14 en relisant le tirage reel du livre. */
            { quoi: 'Un forum héberge', unite: 'messages', mot: `Le nombre de messages est multiplié par $${q}$ chaque semaine`, seuilMot: 'semaines' }
          ]);
          return {
            statement: `${ctx.quoi} $${u0}$ ${ctx.unite} au départ. ${ctx.mot}.<br/><br/>Déterminer le <strong>premier rang $n$</strong> à partir duquel $u_n$ dépasse $${seuil}$.<br/><br/>Donner ce rang $n$, en ${ctx.seuilMot}.`,
            answer: N, tolerance: 0, unit: '',
            hint: `Calcule les termes un par un — $u_0$, $u_1$, $u_2$… — et arrête-toi au premier qui dépasse $${seuil}$. En première, on ne dispose pas encore d'outil pour résoudre directement une inéquation avec un exposant.`,
            solution: [
              `La suite est géométrique : $u_n = ${u0} \\times ${q}^n$. On calcule les termes successifs jusqu'à franchir le seuil.`,
              `$u_{${N - 1}} = ${u0} \\times ${q}^{${N - 1}} = ${u0 * Math.pow(q, N - 1)}$, qui ne dépasse pas $${seuil}$, alors que $u_{${N}} = ${u0} \\times ${q}^{${N}} = ${u0 * Math.pow(q, N)}$, qui le dépasse.`,
              `Le premier rang cherché est donc $n = ${N}$.`
            ]
          };
        }

        if (type === 'demivie') {
          /* Une suite géométrique DÉCROISSANTE, de raison $1/2$. La banque
             d'origine ne tirait que des raisons entières, donc l'élève n'y
             rencontrait jamais une suite qui diminue — alors que c'est le
             contexte physique annoncé par le module (décroissance radioactive).
             Le résultat est décimal : il passe par fr(). */
          const N0 = pick([200, 400, 800, 1600]);
          const t = pick([4, 5, 8, 10]);
          const k = rand(2, 4);
          const reste = N0 / Math.pow(2, k);
          return {
            statement: `Un échantillon radioactif contient $${N0}$ mg de matière active. Sa demi-vie est de $${t}$ jours : à chaque période de $${t}$ jours, la masse restante est divisée par $2$.<br/><br/>1) Justifier que la masse restante forme une suite géométrique et donner sa raison.<br/>2) Calculer la masse restante après $${k * t}$ jours.<br/><br/>Donner cette masse, en mg.`,
            answer: reste, tolerance: 0.01, unit: 'mg',
            hint: `Commence par compter le nombre de demi-vies écoulées : $${k * t} \\div ${t}$. La raison de la suite est $q = \\dfrac{1}{2}$, donc chaque demi-vie divise la masse par $2$.`,
            solution: [
              `À chaque période, la masse est <strong>multipliée</strong> par $\\dfrac{1}{2}$ : la suite des masses est géométrique de raison $q = ${fr(0.5)}$ et de premier terme $N_0 = ${N0}$ mg.`,
              `En $${k * t}$ jours, il s'écoule $${k * t} \\div ${t} = ${k}$ demi-vies, donc la masse restante vaut $N_0 \\times \\left(\\dfrac{1}{2}\\right)^{${k}} = ${N0} \\times \\dfrac{1}{${Math.pow(2, k)}}$.`,
              `Il reste donc $${fr(reste)}$ mg. La masse diminue à chaque étape mais ne s'annule jamais : c'est la signature d'une suite géométrique de raison strictement comprise entre $0$ et $1$.`
            ]
          };
        }

        if (type === 'arith') {
          /* Contextes revus le 2026-10-13 : un salaire de 7 € n'était pas
             crédible, et pour un randonneur ou une citerne la somme des termes
             (somme d'altitudes, de contenus) ne représentait rien. Dans les
             trois décors retenus, la somme S est un vrai total cumulé. */
          const u0 = rand(5, 12);
          const r = rand(2, 8);
          const n = rand(5, 15);
          const ctx = pick([
            { intro: 'Un théâtre de verdure compte', unit: 'sièges au premier rang', mot: 'Chaque rang suivant a', motFin: 'sièges de plus que le précédent' },
            { intro: 'Le jour de son ouverture, une librairie vend', unit: 'livres', mot: 'Elle en vend chaque jour', motFin: 'de plus que la veille' },
            { intro: 'Une tirelire reçoit', unit: '€ le premier jour', mot: 'Chaque jour, on y dépose', motFin: '€ de plus que la veille' }
          ]);
          const un = u0 + n * r;
          const somme = (u0 + un) * (n + 1) / 2;
          return {
            statement: `${ctx.intro} $${u0}$ ${ctx.unit}. ${ctx.mot} $${r}$ ${ctx.motFin}.<br/><br/>1) Exprimer $u_n$ en fonction de $n$.<br/>2) Calculer $u_{${n}}$.<br/>3) Calculer la somme $S = u_0 + u_1 + \\cdots + u_{${n}}$.<br/><br/>Donner la valeur de $S$.`,
            answer: somme,
            tolerance: 0.01,
            unit: '',
            hint: `C'est une suite arithmétique : $u_n = ${u0} + ${r}n$. Pour la somme, utilise $S = \\dfrac{(u_0 + u_n)(n+1)}{2}$.`,
            solution: [
              `Suite arithmétique : $u_n = ${u0} + ${r}n$.`,
              `$u_{${n}} = ${u0} + ${r} \\times ${n} = ${un}$.`,
              `$S = \\dfrac{(${u0} + ${un}) \\times ${n+1}}{2} = \\dfrac{${u0+un} \\times ${n+1}}{2} = ${somme}$.`
            ]
          };
        } else {
          /* u0 part de 2 et non de 1 : avec 1, le gabarit imprimait
             « 1 individus », « 1 personnes au départ ». Corrige le 2026-09-14
             sur lecture du tirage reel. */
          const u0 = rand(2, 5);
          const q = pick([2, 3]);
          const n = rand(3, 6);
          const ctx = pick([
            { intro: 'Une colonie de bactéries compte initialement', unit: 'individus', mot: `La population est multipliée par $${q}$ à chaque heure` },
            { intro: 'Un message viral est partagé par', unit: 'personnes au départ', mot: `Chaque personne le partage avec $${q}$ nouvelles personnes à chaque étape` },
            /* Libelle corrige le 2026-09-14 : l'unite disait « € est placé avec
               un facteur multiplicateur de », phrase que le gabarit refermait
               aussitot par un point, ce qui imprimait « ... multiplicateur de. »
               Defaut ancien, revele par l'elargissement de la banque. */
            { intro: 'Un nénuphar couvre', unit: 'm² d\'un étang', mot: `La surface couverte est multipliée par $${q}$ chaque semaine` }
          ]);
          const un = u0 * Math.pow(q, n);
          return {
            statement: `${ctx.intro} $${u0}$ ${ctx.unit}. ${ctx.mot}.<br/><br/>1) Identifier la nature de la suite et sa raison.<br/>2) Calculer $u_{${n}}$.<br/><br/>Donner la valeur de $u_{${n}}$.`,
            answer: un,
            tolerance: 0.01,
            unit: '',
            hint: `Suite géométrique de raison $q = ${q}$ : $u_n = ${u0} \\times ${q}^n$.`,
            solution: [
              `Suite géométrique de raison $q = ${q}$ et $u_0 = ${u0}$.`,
              `$u_{${n}} = ${u0} \\times ${q}^{${n}} = ${u0} \\times ${Math.pow(q, n)} = ${un}$.`
            ]
          };
        }
      }
    },

    probleme: {
      /* PROBLÈME RÉÉCRIT le 2026-10-13 (audit maths, phase 4). L'ancienne
         version partait de 37,5 % : (1/2)^k = 0,375 n'a pas de solution
         entière, et la solution passait par ln et log2, outils de terminale,
         en contradiction avec la tâche « seuil » du même module. Le nouveau
         pourcentage, 12,5 %, est une puissance exacte de 1/2, et la dernière
         question fait chercher un seuil par calcul successif des termes,
         c'est-à-dire avec les seuls outils de première. */
      context: 'Le carbone 14 ($^{14}\\text{C}$) utilisé en datation archéologique a une demi-vie $t_{1/2} = 5730$ ans : tous les $5730$ ans, la quantité de $^{14}\\text{C}$ d\'un échantillon est <strong>divisée par $2$</strong>.<br/><br/>Un fragment de bois ancien contient $12{,}5\\,\\%$ de la quantité de $^{14}\\text{C}$ d\'un morceau de bois vivant actuel.<br/><br/>Par ailleurs, les laboratoires considèrent qu\'en dessous de $1\\,\\%$ de la quantité initiale, la mesure n\'est plus fiable.',
      schema: null,
      tasks: [
        'On note $N_0$ la quantité de $^{14}\\text{C}$ du bois vivant et $N(k)$ celle qui reste après $k$ demi-vies. Justifier que $(N(k))$ est une suite géométrique et exprimer $N(k)$ en fonction de $N_0$ et de $k$.',
        'Écrire $12{,}5\\,\\%$ sous la forme d\'une fraction, puis sous la forme d\'une puissance de $\\dfrac{1}{2}$. En déduire le nombre $k$ de demi-vies écoulées.',
        'En déduire l\'âge du fragment, en années.',
        'En calculant les termes $\\left(\\dfrac{1}{2}\\right)^k$ les uns après les autres, déterminer le plus petit nombre entier $k$ de demi-vies au bout duquel il reste moins de $1\\,\\%$ du $^{14}\\text{C}$ initial. En déduire l\'âge à partir duquel la datation n\'est plus fiable.'
      ],
      solutions: [
        'À chaque demi-vie, la quantité restante est <strong>multipliée par $\\dfrac{1}{2}$</strong> : la suite $(N(k))$ est géométrique de raison $q = \\dfrac{1}{2}$ et de premier terme $N_0$.<br/><br/>Son terme général est donc $N(k) = N_0 \\times \\left(\\dfrac{1}{2}\\right)^k$.',
        'On cherche $k$ tel que $\\dfrac{N(k)}{N_0} = 12{,}5\\,\\% = 0{,}125$.<br/><br/>Or $0{,}125 = \\dfrac{125}{1000} = \\dfrac{1}{8}$, et $\\dfrac{1}{8} = \\dfrac{1}{2 \\times 2 \\times 2} = \\left(\\dfrac{1}{2}\\right)^3$.<br/><br/>On peut aussi avancer de proche en proche : $\\left(\\dfrac{1}{2}\\right)^1 = 0{,}5$, puis $\\left(\\dfrac{1}{2}\\right)^2 = 0{,}25$, puis $\\left(\\dfrac{1}{2}\\right)^3 = 0{,}125$.<br/><br/>Il s\'est donc écoulé <strong>$k = 3$ demi-vies</strong>.',
        'Chaque demi-vie dure $5730$ ans, donc l\'âge du fragment vaut $3 \\times 5730 = 17\\,190$ ans.',
        'On cherche le premier rang $k$ tel que $\\left(\\dfrac{1}{2}\\right)^k < 0{,}01$. On calcule les termes successifs en divisant chaque fois par $2$, à partir de $\\left(\\dfrac{1}{2}\\right)^3 = 0{,}125$ :<br/><br/>$\\left(\\dfrac{1}{2}\\right)^4 = 0{,}0625$, puis $\\left(\\dfrac{1}{2}\\right)^5 = 0{,}03125$, puis $\\left(\\dfrac{1}{2}\\right)^6 = 0{,}015625$ : il reste encore plus de $1\\,\\%$.<br/><br/>$\\left(\\dfrac{1}{2}\\right)^7 = 0{,}0078125$, soit environ $0{,}78\\,\\%$ : c\'est le <strong>premier terme sous le seuil</strong>, donc $k = 7$.<br/><br/>La datation n\'est plus fiable au-delà de $7 \\times 5730 = 40\\,110$ ans environ.<br/><br/>Remarque : quand le pourcentage mesuré n\'est pas une puissance exacte de $\\dfrac{1}{2}$, on l\'encadre de la même façon entre deux termes consécutifs. L\'outil qui donne $k$ exactement dans ce cas, le logarithme, sera vu en terminale.'
      ],
      finalAnswer: 'Le fragment a $3$ demi-vies, soit $17\\,190$ ans. Il faut $7$ demi-vies pour passer sous $1\\,\\%$ : la datation n\'est plus fiable au-delà d\'environ $40\\,110$ ans.'
    },

    evaluation: {
      title: 'Évaluation — Suites numériques',
      duration: '35 min',
      questions: [
        {
          statement: 'Une suite arithmétique a pour premier terme $u_0 = 3$ et pour raison $r = 5$. Calculer $u_{20}$.',
          type: 'numeric',
          answer: 103,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On applique la formule du terme général : $u_n = u_0 + n \\times r$.<br/><br/>Donc $u_{20} = 3 + 20 \\times 5 = 3 + 100 = 103$.'
        },
        {
          statement: 'On considère la suite $(v_n)$ définie par $v_0 = 2$ et $v_{n+1} = 3 v_n$. Quelle est la nature de cette suite ?',
          type: 'multiple-choice',
          options: ['Arithmétique de raison $3$', 'Géométrique de raison $3$', 'Géométrique de raison $2$', 'Ni arithmétique, ni géométrique'],
          answer: 1,
          points: 1,
          correction: 'La relation $v_{n+1} = 3 v_n$ signifie que chaque terme est obtenu en <strong>multipliant</strong> le précédent par $3$.<br/><br/>C\'est donc une suite géométrique de raison $q = 3$. Le quotient de deux termes consécutifs est bien constant.'
        },
        {
          statement: 'Calculer la somme $S = u_0 + u_1 + \\cdots + u_{10}$ pour la suite arithmétique $u_n = 2 + 4n$.',
          type: 'numeric',
          answer: 242,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: 'On identifie les bornes : $u_0 = 2$ et $u_{10} = 2 + 4 \\times 10 = 42$.<br/><br/>De $u_0$ à $u_{10}$, il y a $11$ termes. On applique la formule : $S = \\dfrac{(u_0 + u_{10}) \\times 11}{2} = \\dfrac{(2 + 42) \\times 11}{2} = \\dfrac{44 \\times 11}{2} = 242$.'
        },
        {
          statement: 'Un capital de $1000$ € est placé à un taux annuel de $5\\%$ à intérêts composés. Au bout de $n$ années, le capital est $C_n = 1000 \\times 1{,}05^n$. Calculer $C_3$ (arrondi au centime).',
          type: 'numeric',
          answer: 1157.63,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: 'On applique la formule du terme général de la suite géométrique : $C_3 = 1000 \\times (1{,}05)^3$.<br/><br/>$C_3 = 1000 \\times 1{,}157625 = 1157{,}63$ € (arrondi au centime).'
        },
        {
          /* QUESTION 5 RÉÉCRITE le 2026-09-14. Elle demandait une troisième
             somme après les questions 1 et 3 : ce devoir comptait trois
             « calculer » sur cinq, et sur les cinquante questions du niveau
             « calculer » atteignait 50 %, très au-delà du plafond de 35 % du
             cahier des charges.

             La nouvelle question demande de comparer deux croissances et
             d'EXPLIQUER pourquoi l'une finit par dépasser l'autre. C'est le
             fait le plus utile du chapitre pour la terminale — la croissance
             géométrique l'emporte toujours sur l'arithmétique — et il n'était
             évalué nulle part. L'étiquette suit l'énoncé. */
          statement: 'Deux placements partent de $100$ € :<br/><br/>le placement A rapporte $30$ € par an (suite arithmétique de raison $30$) ;<br/>le placement B rapporte $10\\%$ par an (suite géométrique de raison $1{,}1$).<br/><br/>Au bout de $5$ ans, A vaut $250$ € et B vaut environ $161$ €. Un camarade conclut : « le placement A est meilleur, c\'est démontré ».<br/><br/>Que lui réponds-tu ?',
          type: 'multiple-choice',
          options: [
            'Sa conclusion ne vaut que pour les premières années : B augmente d\'un pourcentage sur une somme qui grossit, donc son gain annuel augmente sans cesse et finit toujours par dépasser celui de A',
            'Il a raison : une suite arithmétique de raison $30$ dépasse toujours une suite géométrique de raison $1{,}1$',
            'Les deux placements donneront exactement la même somme à partir de la dixième année',
            'On ne peut pas comparer une suite arithmétique et une suite géométrique'
          ],
          answer: 0,
          points: 2,
          correction: 'Le constat de ton camarade est exact à $5$ ans, mais sa conclusion générale ne l\'est pas.<br/><br/>La différence tient à la <strong>nature</strong> du gain annuel. Le placement A rapporte toujours $30$ € : son gain est <strong>constant</strong>. Le placement B rapporte $10\\%$ d\'une somme qui grossit chaque année : son gain annuel <strong>augmente</strong>, de $10$ € la première année à plus de $30$ € dès que le capital dépasse $300$ €.<br/><br/>À partir de ce moment-là, B gagne plus vite que A chaque année, et l\'écart accumulé finit nécessairement par se combler. Le calcul le confirme : à $30$ ans, A vaut $1000$ € et B environ $1745$ €.<br/><br/>C\'est un fait général, qu\'il te faudra retenir pour la terminale : <strong>une croissance géométrique de raison strictement supérieure à $1$ finit toujours par dépasser n\'importe quelle croissance arithmétique</strong>, aussi grande soit sa raison. Il faut parfois attendre longtemps, mais cela arrive toujours.'
        }
      ]
    }
  });
