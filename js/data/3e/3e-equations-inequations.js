/* =========================================================
   Spark Learning – data/3e/3e-equations-inequations.js
   Module : Équations et inéquations (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-equations-inequations',
    level: 1, subject: 'maths',
    icon: '⚖️',
    title: 'Équations et inéquations',
    subtitle: 'Résolution, ensemble solution, représentation',
    keywords: ['Équation', 'Inéquation', 'Inconnue', 'Solution', 'Intervalle'],
    physics: 'Résolution d\'équations horaires du mouvement, calcul de seuils de tension ou d\'intensité en électricité',
    cours: {
      intro: 'Tu veux t\'abonner à une salle d\'escalade. Deux formules sont affichées à l\'entrée.<br/><br/>' +
        'La formule A : $12$ € la séance, sans rien payer d\'avance. La formule B : $60$ € de carte à l\'année, puis $6$ € la séance.<br/><br/>' +
        '<strong>Laquelle est la moins chère ?</strong><br/><br/>' +
        'La question n\'a pas de réponse. Pour trois séances, A coûte $36$ € et B en coûte $78$ : A gagne largement. Pour vingt séances, A coûte $240$ € et B seulement $180$ € : B gagne largement. Aucune des deux formules n\'est <strong>toujours</strong> la meilleure, et aucun coup d\'œil au tarif ne dit à partir de quand la seconde prend l\'avantage.<br/><br/>' +
        'Ce moment de bascule, on ne le devine pas : on le <strong>calcule</strong>. Les deux formules coûtent pareil quand $12x = 60 + 6x$, c\'est-à-dire quand $6x = 60$, donc pour $x = 10$ séances. Voilà le <strong>seuil</strong>.<br/><br/>' +
        'Mais savoir où les deux prix se croisent ne suffit pas encore : ce que tu veux savoir, c\'est <em>de quel côté</em> tu te trouves. « À partir de combien de séances B devient-elle plus avantageuse ? » ne se répond pas par un nombre isolé, mais par $12x > 60 + 6x$, donc $x > 10$ : <strong>toutes</strong> les valeurs au-delà de $10$ conviennent.<br/><br/>' +
        'Tu tiens là les deux outils du chapitre. Une <strong>équation</strong> fixe une condition d\'égalité : on cherche les valeurs de $x$ qui la rendent vraie, et il y en a en général une poignée. Une <strong>inéquation</strong> fixe une condition d\'ordre : la solution est un <strong>intervalle</strong> tout entier, pas un point isolé.<br/><br/>' +
        'Les deux se résolvent par les mêmes opérations — avec une <strong>différence cruciale</strong> : multiplier ou diviser par un nombre <strong>négatif inverse le sens de l\'inégalité</strong>.<br/>Intuition : si $-x < 3$, alors $x > -3$.<br/><br/>' +
        'En physique, les inéquations apparaissent dans les <strong>conditions de validité</strong> des modèles : une distance est positive, une probabilité reste entre $0$ et $1$.<br/><br/>' +
        'Règle d\'or : <strong>toujours vérifier</strong> la solution en la substituant dans l\'expression de départ.',
      definitions: [
        { term: 'Équation', def: 'Égalité comportant une <strong>inconnue</strong> $x$. Résoudre une équation, c\'est trouver la (ou les) valeur(s) de $x$ qui rendent l\'égalité vraie.<br/><br/>Exemple : $2x + 3 = 7$ a pour solution $x = 2$.' },
        { term: 'Inéquation', def: 'Inégalité comportant une inconnue $x$ (avec $<$, $>$, $\\leq$ ou $\\geq$). La solution est généralement un <strong>intervalle</strong> de valeurs, pas un nombre unique.<br/><br/>Exemple : $x + 1 > 3$ a pour solution $x > 2$.' },
        { term: 'Solution', def: 'Valeur de l\'inconnue qui rend l\'équation ou l\'inéquation <strong>vraie</strong>. Pour une équation du 1er degré, il y a en général <strong>une seule solution</strong> ; pour une inéquation, c\'est un <strong>ensemble</strong> de valeurs.' },
        { term: 'Intervalle', def: 'Ensemble de nombres compris entre deux bornes. Notation : $[2\\,;\\,5]$ (bornes incluses), $]2\\,;\\,5[$ (bornes exclues), $]-\\infty\\,;\\,3[$ (tous les nombres inférieurs à $3$).' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Étape 1 : Développer</strong> et réduire les deux membres de l\'équation ou inéquation.',
          '<strong>Étape 2 : Regrouper</strong> les termes en $x$ d\'un côté, les constantes de l\'autre.',
          '<strong>Étape 3 : Isoler $x$</strong> en divisant par le coefficient de $x$.<br/><strong>Attention :</strong> si ce coefficient est <strong>négatif</strong>, inverser le sens de l\'inégalité.',
          '<strong>Étape 4 : Vérifier</strong> en substituant la solution trouvée dans l\'expression de départ.'
        ]
      },
      example: {
        statement: 'Résoudre l\'inéquation $3(x - 2) > 2x + 1$.',
        steps: [
          '<strong>Développer</strong> le membre de gauche : $3x - 6 > 2x + 1$.',
          '<strong>Regrouper</strong> : on soustrait $2x$ des deux côtés : $x - 6 > 1$, puis on ajoute $6$ : $x > 7$.',
          '<strong>Vérification</strong> : pour $x = 10$ : $3(10-2) = 24$ et $2(10)+1 = 21$, or $24 > 21$ ✓. Pour $x = 5$ : $3(5-2) = 9$ et $2(5)+1 = 11$, or $9 \\not> 11$ ✓ (hors solution).'
        ],
        answer: '$x > 7$, soit $x \\in ]7\\,;\\,+\\infty[$.'
      },
      formulas: [
        'Si $ax = b$ : $x = \\dfrac{b}{a}$ (avec $a \\neq 0$)',
        'Inéquation : si $a < 0$ et $ax < b$, alors $x > \\dfrac{b}{a}$ (sens inversé !)',
        'Notation intervalle : $x > 2 \\Leftrightarrow x \\in ]2 ; +\\infty[$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Droite graduée',
        title: 'L\'ensemble solution de 3(x − 2) > 2x + 1',
        description: 'La solution de l\'inéquation résolue dans l\'exemple du cours ($x > 7$) représentée sur une droite graduée : cercle non rempli en $7$ (borne exclue) et zone hachurée vers $+\\infty$.',
        svg: `
          <svg viewBox="0 0 400 150" role="img" aria-labelledby="ineq3e-title ineq3e-desc">
            <title id="ineq3e-title">Droite graduée : ensemble solution de l'inéquation</title>
            <desc id="ineq3e-desc">Droite graduee de 4 a 10, avec un cercle non rempli au point 7 car l'inegalite est stricte, et une portion hachuree partant de 7 vers la droite jusqu'a plus l'infini, representant l'ensemble des solutions x strictement superieur a 7.</desc>
            <defs>
              <marker id="arrow-3e-eq-ineq" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <line class="axis" x1="15" y1="80" x2="385" y2="80" marker-start="url(#arrow-3e-eq-ineq)" marker-end="url(#arrow-3e-eq-ineq)"></line>

            <line class="grid-line" x1="45" y1="75" x2="45" y2="85"></line>
            <text class="tick-label" x="45" y="102" text-anchor="middle">4</text>
            <line class="grid-line" x1="90" y1="75" x2="90" y2="85"></line>
            <text class="tick-label" x="90" y="102" text-anchor="middle">5</text>
            <line class="grid-line" x1="135" y1="75" x2="135" y2="85"></line>
            <text class="tick-label" x="135" y="102" text-anchor="middle">6</text>
            <line class="grid-line" x1="180" y1="75" x2="180" y2="85"></line>
            <text class="annotation-label" x="180" y="102" text-anchor="middle">7</text>
            <line class="grid-line" x1="225" y1="75" x2="225" y2="85"></line>
            <text class="tick-label" x="225" y="102" text-anchor="middle">8</text>
            <line class="grid-line" x1="270" y1="75" x2="270" y2="85"></line>
            <text class="tick-label" x="270" y="102" text-anchor="middle">9</text>
            <line class="grid-line" x1="315" y1="75" x2="315" y2="85"></line>
            <text class="tick-label" x="315" y="102" text-anchor="middle">10</text>

            <line class="curve-main" x1="186" y1="80" x2="345" y2="80" marker-end="url(#arrow-3e-eq-ineq)"></line>
            <line x1="200" y1="72" x2="212" y2="88" stroke="var(--diagram-accent)" stroke-width="2" stroke-linecap="round"></line>
            <line x1="220" y1="72" x2="232" y2="88" stroke="var(--diagram-accent)" stroke-width="2" stroke-linecap="round"></line>
            <line x1="240" y1="72" x2="252" y2="88" stroke="var(--diagram-accent)" stroke-width="2" stroke-linecap="round"></line>
            <line x1="260" y1="72" x2="272" y2="88" stroke="var(--diagram-accent)" stroke-width="2" stroke-linecap="round"></line>
            <line x1="280" y1="72" x2="292" y2="88" stroke="var(--diagram-accent)" stroke-width="2" stroke-linecap="round"></line>
            <line x1="300" y1="72" x2="312" y2="88" stroke="var(--diagram-accent)" stroke-width="2" stroke-linecap="round"></line>
            <line x1="320" y1="72" x2="332" y2="88" stroke="var(--diagram-accent)" stroke-width="2" stroke-linecap="round"></line>

            <circle class="plot-point-alt" cx="180" cy="80" r="6"></circle>

            <text class="annotation-label" x="255" y="55" text-anchor="middle">x > 7</text>
            <text class="label-soft" x="355" y="60" text-anchor="middle">+∞</text>
            <text class="axis-label" x="368" y="70">x</text>
          </svg>
        `,
        notes: [
          'Le cercle est <strong>ouvert</strong> (non rempli) en $7$ car l\'inégalité est stricte ($>$) : $7$ lui-même n\'est pas solution.',
          'Les hachures et la flèche s\'étendent vers la droite ($+\\infty$) car $x$ doit être strictement plus grand que $7$.',
          'Notation : $x \\in\\, ]7\\,;\\,+\\infty[$ — le crochet est tourné vers l\'extérieur car la borne $7$ est exclue.'
        ],
        reading: 'Repère le cercle non rempli en $7$ : il signale une borne exclue. La zone hachurée à sa droite représente toutes les valeurs solutions.',
        caption: 'Ensemble solution de l\'inéquation $3(x-2) > 2x+1$ résolue dans l\'exemple du cours, soit $x \\in\\, ]7\\,;\\,+\\infty[$.'
      },
      /* SCHÉMAS SECONDAIRES, ajoutés le 2026-09-13.
         Principe du cahier des charges, section 9 : une figure par MALENTENDU,
         pas une figure par formule. La figure principale montre DÉJÀ un
         ensemble solution sur une droite graduée ; inutile d'en redessiner un.
         Les deux malentendus qui restent sont les deux qui coûtent réellement
         des points, et ils sont de nature différente :

           1. « pourquoi le sens s'inverse » — l'élève apprend la règle par
              cœur, l'applique une fois sur deux, et ne peut pas la retrouver
              quand il l'a oubliée parce que rien ne la lui EXPLIQUE. Or elle
              s'explique en une image : multiplier par un nombre négatif, c'est
              retourner la droite graduée autour de zéro, et un retournement
              échange forcément le plus grand et le plus petit ;
           2. « le crochet, c'est au hasard » — l'élève sait qu'il y a deux
              écritures et choisit celle qui lui vient. Le schéma les met côte
              à côte sur la MÊME borne, pour que la seule différence visible
              soit celle qui compte.

         Le patron employé pour le premier est celui de la « comparaison » du
         cahier des charges : même ligne de base, même échelle, une seule
         chose qui change. Les positions sont CALCULÉES par symétrie exacte
         autour de zéro — c'est l'objet du schéma, et c'est vérifié par le
         calcul dans scripts/manuel/tests/diagrams-3e.test.js. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Pourquoi le sens s\'inverse',
          title: 'Multiplier par un nombre négatif retourne la droite graduée',
          description: 'La règle n\'est pas un caprice : elle se voit. En haut, $2$ est à gauche de $5$, donc $2 < 5$. En bas, on a multiplié les deux par $-1$ — et les deux nombres ont <strong>changé de côté</strong>. Celui qui était le plus petit est maintenant le plus grand.',
          svg: `
            <svg viewBox="0 0 400 214" role="img" aria-labelledby="ineq-renv-title ineq-renv-desc">
              <title id="ineq-renv-title">Deux nombres avant et apres multiplication par moins un</title>
              <desc id="ineq-renv-desc">Deux droites graduees identiques sont tracees l'une au-dessus de l'autre, avec le zero au meme endroit et le meme pas. Sur celle du haut sont marques les nombres deux et cinq, tous deux a droite du zero, deux etant le plus proche du zero : deux est donc a gauche de cinq et deux est plus petit que cinq. Sur celle du bas sont marques les nombres moins deux et moins cinq, obtenus en multipliant les precedents par moins un ; ils sont tous deux a gauche du zero, a la meme distance du zero que leurs correspondants du haut mais de l'autre cote. Moins cinq est desormais a gauche de moins deux, si bien que moins deux est le plus grand des deux. L'ordre des deux nombres a ete echange par la multiplication.</desc>

              <text class="tick-label" x="16" y="46" text-anchor="start">avant</text>
              <line class="axis" x1="68" y1="56" x2="332" y2="56"></line>
              <line class="grid-line" x1="200" y1="48" x2="200" y2="64"></line>
              <text class="tick-label" x="200" y="78" text-anchor="middle">0</text>
              <circle class="plot-point" cx="244" cy="56" r="5"></circle>
              <circle class="plot-point-alt" cx="310" cy="56" r="5"></circle>
              <text class="annotation-label" x="244" y="42" text-anchor="middle">2</text>
              <text class="annotation-label" x="310" y="42" text-anchor="middle">5</text>
              <text class="label-soft" x="120" y="34" text-anchor="middle">2 est a gauche de 5</text>

              <text class="tick-label" x="16" y="150" text-anchor="start">apres</text>
              <line class="axis" x1="68" y1="160" x2="332" y2="160"></line>
              <line class="grid-line" x1="200" y1="152" x2="200" y2="168"></line>
              <text class="tick-label" x="200" y="182" text-anchor="middle">0</text>
              <circle class="plot-point" cx="156" cy="160" r="5"></circle>
              <circle class="plot-point-alt" cx="90" cy="160" r="5"></circle>
              <text class="annotation-label" x="156" y="146" text-anchor="middle">-2</text>
              <text class="annotation-label" x="90" y="146" text-anchor="middle">-5</text>
              <text class="label-soft" x="282" y="182" text-anchor="middle">-5 est a gauche de -2</text>

              <line class="guide-line" x1="244" y1="64" x2="156" y2="152"></line>
              <line class="guide-line" x1="310" y1="64" x2="90" y2="152"></line>

              <text class="annotation-label" x="200" y="206" text-anchor="middle">2 plus petit que 5 devient -2 plus grand que -5</text>
            </svg>
          `,
          notes: [
            'Multiplier par $-1$, c\'est envoyer chaque nombre <strong>de l\'autre côté de zéro</strong>, à la même distance. Les deux traits obliques suivent ce déplacement.',
            'Le $5$, qui était le plus <strong>éloigné</strong> de zéro à droite, devient le plus éloigné à <strong>gauche</strong> — donc le plus <strong>petit</strong>. C\'est cela, et rien d\'autre, qui retourne l\'inégalité.',
            'La règle complète : <strong>ajouter ou soustraire</strong> ne change jamais le sens (on décale les deux nombres du même côté). <strong>Multiplier ou diviser par un positif</strong> ne le change pas non plus. Seul un facteur <strong>négatif</strong> le retourne.',
            'Et si tu as un doute au contrôle : teste une valeur. $-2x < 6$ avec $x = -5$ donne $10 < 6$, ce qui est faux ; donc $-5$ n\'est pas solution, donc la réponse n\'est pas $x < -3$ mais $x > -3$.'
          ],
          reading: 'Compare les deux droites graduées : le zéro est au même endroit et le pas est le même. Seule la position des deux points a changé, et elle a changé de telle façon que leur ordre est échangé.',
          caption: 'Les nombres $2$ et $5$ multipliés par $-1$ : le retournement autour de zéro échange leur ordre, ce qui inverse le sens de l\'inégalité.'
        },
        {
          theme: 'maths',
          kicker: 'Le crochet',
          title: 'Le crochet dit si la borne fait partie des solutions',
          description: 'Deux inéquations qui ne diffèrent que par un trait sous le symbole. La borne est la <strong>même</strong>, l\'ensemble est presque le même — et pourtant $3$ appartient à l\'un et pas à l\'autre. C\'est tout ce que code le sens du crochet.',
          svg: `
            <svg viewBox="0 0 400 196" role="img" aria-labelledby="ineq-crochet-title ineq-crochet-desc">
              <title id="ineq-crochet-title">Borne exclue et borne incluse sur la meme valeur</title>
              <desc id="ineq-crochet-desc">Deux droites graduees identiques sont tracees l'une sous l'autre, graduees de zero a six, avec la valeur trois au meme endroit sur les deux. Sur celle du haut, qui represente les nombres strictement superieurs a trois, un cercle vide est place en trois et un trait epais part de trois vers la droite : la valeur trois elle-meme n'appartient pas aux solutions. Sur celle du bas, qui represente les nombres superieurs ou egaux a trois, un cercle plein est place en trois et le meme trait epais part de trois vers la droite : cette fois la valeur trois appartient aux solutions. Les deux ensembles ne different que par ce seul point.</desc>

              <text class="tick-label" x="16" y="40" text-anchor="start">x superieur a 3</text>
              <line class="axis" x1="120" y1="56" x2="368" y2="56"></line>
              <line class="grid-line" x1="160" y1="50" x2="160" y2="62"></line>
              <text class="tick-label" x="160" y="76" text-anchor="middle">2</text>
              <line class="grid-line" x1="200" y1="50" x2="200" y2="62"></line>
              <text class="annotation-label" x="200" y="76" text-anchor="middle">3</text>
              <line class="grid-line" x1="240" y1="50" x2="240" y2="62"></line>
              <text class="tick-label" x="240" y="76" text-anchor="middle">4</text>
              <line class="curve-main" x1="206" y1="56" x2="356" y2="56"></line>
              <circle class="plot-point-alt" cx="200" cy="56" r="6"></circle>
              <text class="label-soft" x="290" y="42" text-anchor="middle">3 est exclu</text>

              <text class="tick-label" x="16" y="128" text-anchor="start">x superieur ou egal a 3</text>
              <line class="axis" x1="120" y1="144" x2="368" y2="144"></line>
              <line class="grid-line" x1="160" y1="138" x2="160" y2="150"></line>
              <text class="tick-label" x="160" y="164" text-anchor="middle">2</text>
              <line class="grid-line" x1="200" y1="138" x2="200" y2="150"></line>
              <text class="annotation-label" x="200" y="164" text-anchor="middle">3</text>
              <line class="grid-line" x1="240" y1="138" x2="240" y2="150"></line>
              <text class="tick-label" x="240" y="164" text-anchor="middle">4</text>
              <line class="curve-main" x1="200" y1="144" x2="356" y2="144"></line>
              <circle class="plot-point" cx="200" cy="144" r="6"></circle>
              <text class="label-soft" x="290" y="130" text-anchor="middle">3 est inclus</text>

              <text class="annotation-label" x="200" y="188" text-anchor="middle">le crochet se tourne vers ce qui est pris</text>
            </svg>
          `,
          notes: [
            'Le cercle <strong>vide</strong> se lit « je m\'arrête juste après » : la borne est exclue, et l\'intervalle s\'écrit $]3\\,;\\,+\\infty[$.',
            'Le cercle <strong>plein</strong> se lit « je pars de là, celui-ci compris » : la borne est incluse, et l\'intervalle s\'écrit $[3\\,;\\,+\\infty[$.',
            'Le moyen sûr de ne pas hésiter : le crochet <strong>s\'ouvre vers les nombres que tu gardes</strong>. Vers $+\\infty$ il est donc toujours ouvert, puisqu\'on ne peut pas atteindre l\'infini.',
            'Et le lien avec le symbole : une barre sous l\'inégalité ($\\leq$, $\\geq$) veut dire « ou égal », donc borne <strong>incluse</strong>, donc cercle plein et crochet fermé. Sans barre ($<$, $>$), tout l\'inverse.',
            '<strong>Le contrôle qui sauve</strong> : remplace $x$ par la borne elle-même dans l\'inéquation de départ. Si tu obtiens quelque chose de vrai, la borne est dedans.'
          ],
          reading: 'Les deux droites sont identiques, le trait épais part du même endroit. Ne regarde que le cercle posé sur le $3$ : vide, la valeur est dehors ; plein, elle est dedans.',
          caption: 'Les ensembles $x > 3$ et $x \\geq 3$ sur la même droite graduée : seul le cercle posé sur la borne les distingue.'
        }
      ],
      recap: [
        '<strong>Principe de la balance</strong> : on effectue la même opération des deux côtés de l\'égalité (ou inégalité) pour isoler $x$.',
        '<strong>Inversion du sens</strong> : multiplier ou diviser par un nombre <strong>négatif</strong> inverse le sens de l\'inégalité. C\'est LA différence majeure entre équation et inéquation.',
        '<strong>Vérification</strong> : toujours substituer la solution trouvée dans l\'expression initiale pour confirmer le résultat.',
        '<strong>Notation intervalle</strong> : $x > a$ s\'écrit $x \\in ]a\\,;\\,+\\infty[$, $x \\leq a$ s\'écrit $x \\in ]-\\infty\\,;\\,a]$. Les crochets sont tournés vers l\'extérieur pour les bornes exclues.'
      ],
      piege: 'Piège : multiplier ou diviser une inéquation par un nombre NÉGATIF inverse le sens ! $-2x < 6 \\Rightarrow x > -3$ (pas $x < -3$). C\'est la différence clé entre équation et inéquation.'
    },
    quiz: [
      {
        q: 'Résoudre $3x - 7 = 11$.',
        options: ['$x = 4$', '$x = 6$', '$x = \\frac{4}{3}$', '$x = -6$'],
        answer: 1,
        correction: '$3x - 7 = 11 \\Rightarrow 3x = 18 \\Rightarrow x = 6$. Vérif : $3 \\times 6 - 7 = 11$ ✓.'
      },
      {
        q: 'Résoudre $-2x + 5 > 1$.',
        options: ['$x > 2$', '$x < 2$', '$x > -2$', '$x < -2$'],
        answer: 1,
        correction: '$-2x > -4 \\Rightarrow x < 2$ (sens inversé car on divise par $-2$).'
      },
      {
        q: 'Un élève résout $-3x > 12$ et écrit $x > -4$. Quelle est son erreur ?',
        options: [
          'Il doit inverser l\'inégalité en divisant par un négatif : la solution est $x < -4$',
          'Il a mal calculé $12 \\div 3 = 4$',
          'Il n\'y a pas d\'erreur, $x > -4$ est correct',
          'Il fallait ajouter $3$ des deux membres, pas diviser'
        ],
        answer: 0,
        correction: 'Diviser les deux membres par $-3$ (négatif) inverse le sens de l\'inégalité : $-3x > 12 \\Rightarrow x < \\dfrac{12}{-3} \\Rightarrow x < -4$. L\'ensemble solution est $]-\\infty\\,;\\,-4[$. Oublier d\'inverser $>$ en $<$ est l\'erreur la plus classique des inéquations.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13.

         AVANT : un seul moule de tâche — « on pose $ax + b = c$, trouve $x$ »
         — habillé de six contextes tirés par pick(). Mesure à 60 tirages :
         6 moules d'énoncé, mais **1 seule tâche distincte**.

         Le manque est le même qu'en volumes, et aussi visible : le chapitre
         s'appelle « équations ET INÉQUATIONS », et aucune inéquation n'était
         jamais tirée. La moitié du titre n'était pas entraînée — et c'est la
         moitié difficile, celle où multiplier par un nombre négatif renverse
         le sens de l'inégalité.

         Pire, l'énoncé DONNAIT l'équation à résoudre (« On pose $3x + 5 =
         20$ »), ce qui supprimait le travail de mise en équation : la tâche se
         réduisait à deux lignes de calcul. Le seul exercice du chapitre ne
         demandait donc jamais de MODÉLISER.

         APRÈS : sept familles de tâches, toutes au programme de troisième.
           - 'miseEnEquation' : la situation est donnée, l'équation NON — c'est
                           à l'élève de la poser ;
           - 'equationNue' : résoudre pour résoudre, avec l'inconnue des DEUX
                           côtés, ce que l'ancienne banque ne produisait pas ;
           - 'quotient'  : une équation à dénominateur, résolue par produit en
                           croix ;
           - 'inequation' : la moitié manquante du chapitre ;
           - 'inequationNegative' : le cas où le sens de l'inégalité s'inverse,
                           qui est LA difficulté du chapitre ;
           - 'verifier'  : tester si une valeur est solution, sans rien
                           résoudre — ce qui installe la définition ;
           - 'comparer'  : le seuil à partir duquel une offre devient plus
                           avantageuse, tâche typique du brevet.

         Aucune figure : ce chapitre est du calcul pur, et le cahier des
         charges (section 9) est explicite — on n'ajoute pas de figure pour
         faire du chiffre. */
      generate() {
        const tache = pick(['miseEnEquation', 'equationNue', 'quotient', 'inequation',
                            'inequationNegative', 'verifier', 'comparer']);

        if (tache === 'miseEnEquation') {
          /* L'ÉQUATION N'EST PLUS DONNÉE : c'est à l'élève de la poser. C'est
             la compétence « modéliser », que l'ancienne banque court-circuitait
             en écrivant l'équation dans l'énoncé. */
          const a = rand(2, 9), x = rand(3, 15), b = rand(5, 40);
          const c = a * x + b;
          /* L'ÉLISION est portée par le contexte (« de » ou « d' »), jamais
             déduite de la première lettre du mot : « Combien de heures » est
             sorti d'une première version qui écrivait « de » en dur. Une
             élision se transporte avec son nom, elle ne se devine pas — même
             remarque que pour l'accord du pronom dans le chapitre de
             trigonométrie, corrigé le même jour. */
          const ctx = pick([
            { d: `Une compagnie de <strong>taxi</strong> facture $${b}$ € de prise en charge, puis $${a}$ € par kilomètre.`, e: 'de', q: 'kilomètres ont été parcourus', t: 'La course a coûté' , u: '€' },
            { d: `Un loueur de <strong>vélos</strong> demande $${b}$ € de caution, puis $${a}$ € par heure.`, e: 'd\'', q: 'heures le vélo a-t-il été loué', t: 'La facture s\'élève à', u: '€' },
            { d: `Un <strong>réservoir</strong> contient déjà $${b}$ litres et se remplit de $${a}$ litres par minute.`, e: 'de', q: 'minutes se sont écoulées', t: 'Il contient maintenant', u: 'litres' },
            { d: `Un <strong>randonneur</strong> part de $${b}$ m d'altitude et grimpe de $${a}$ m par heure.`, e: 'd\'', q: 'heures a duré son ascension', t: 'Il se trouve maintenant à', u: 'm' }
          ]);
          return {
            statement: ctx.d + `<br/><br/>${ctx.t} $${c}$ ${ctx.u}.<br/><br/>Combien ${ctx.e}<strong>${ctx.q}</strong> ?<br/><br/><em>Pose d'abord l'équation, puis résous-la.</em>`,
            answer: x, tolerance: 0.01, unit: '',
            hint: `Appelle $x$ la quantité cherchée, puis traduis la phrase en équation.<br/><br/>Ce qui ne dépend pas de $x$ s'ajoute une seule fois ; ce qui se répète se multiplie par $x$.`,
            solution: [
              `On appelle $x$ la quantité cherchée. La partie fixe vaut $${b}$, et la partie qui se répète vaut $${a}$ par unité : l'équation est $${a}x + ${b} = ${c}$.`,
              `$${a}x = ${c} - ${b} = ${a * x}$`,
              `$x = \\dfrac{${a * x}}{${a}} = ${x}$.<br/><br/>Contrôle : $${a} \\times ${x} + ${b} = ${c}$, on retrouve bien l'énoncé.`
            ]
          };
        }

        if (tache === 'equationNue') {
          /* L'INCONNUE DES DEUX CÔTÉS, que l'ancienne banque ne produisait
             jamais : c'est pourtant la forme que prend toute équation issue
             d'une comparaison. */
          const x = rand(2, 12), a = rand(3, 9), b = rand(1, 4);
          const c = rand(2, 15), d = (a - b) * x + c;
          return {
            statement: `Résous l'équation suivante :<br/><br/>$$${a}x + ${c} = ${b}x + ${d}$$<br/>Donne la valeur de $x$.`,
            answer: x, tolerance: 0.01, unit: '',
            hint: `L'inconnue est présente des <strong>deux</strong> côtés : commence par rassembler les $x$ d'un seul côté.<br/><br/>Retire $${b}x$ aux deux membres.`,
            solution: [
              `On rassemble les termes en $x$ d'un côté et les nombres de l'autre. En retirant $${b}x$ aux deux membres : $${a - b}x + ${c} = ${d}$.`,
              `En retirant $${c}$ aux deux membres : $${a - b}x = ${d - c}$.`,
              `$x = \\dfrac{${d - c}}{${a - b}} = ${x}$.<br/><br/>Contrôle : à gauche $${a} \\times ${x} + ${c} = ${a * x + c}$, à droite $${b} \\times ${x} + ${d} = ${b * x + d}$. Les deux membres sont égaux.`
            ]
          };
        }

        if (tache === 'quotient') {
          /* LE MEMBRE DE DROITE EST TIRÉ ENTIER, et $x$ en est DÉDUIT — jamais
             l'inverse. Une première version tirait $x$ puis calculait le
             quotient, qui sortait décimal et devait être arrondi : l'équation
             imprimée n'était alors plus exacte (« $\frac{x+4}{3} = 3{,}333$ »
             n'a pas 6 pour solution). Une équation dont l'énoncé est arrondi
             est une équation fausse, et l'élève qui vérifie le constate. */
          const d = pick([2, 3, 4, 5]);
          const res = rand(2, 9);          // membre de droite, entier
          const b = rand(1, 9);
          const x = d * res - b;           // exact par construction
          return {
            statement: `Résous l'équation suivante :<br/><br/>$$\\dfrac{x + ${b}}{${d}} = ${res}$$<br/>Donne la valeur de $x$.`,
            answer: x, tolerance: 0.01, unit: '',
            hint: `Pour faire disparaître le dénominateur, multiplie les <strong>deux</strong> membres par $${d}$.<br/><br/>Tu obtiendras $x + ${b} = ${d} \\times ${res}$.`,
            solution: [
              `On multiplie les deux membres par $${d}$ pour supprimer le dénominateur : $x + ${b} = ${d} \\times ${res} = ${d * res}$.`,
              `On retire ensuite $${b}$ aux deux membres.`,
              `$x = ${d * res} - ${b} = ${x}$.<br/><br/>Contrôle : $\\dfrac{${x} + ${b}}{${d}} = \\dfrac{${d * res}}{${d}} = ${res}$, on retrouve bien le membre de droite.`
            ]
          };
        }

        if (tache === 'inequation') {
          /* LA MOITIÉ MANQUANTE DU CHAPITRE. Coefficient POSITIF ici : le sens
             ne change pas, et c'est le cas de référence auquel comparer. */
          const a = rand(2, 8), x = rand(2, 12), b = rand(1, 20);
          const c = a * x + b;
          const sens = pick(['\\leq', '\\geq']);
          return {
            statement: `Résous l'inéquation suivante :<br/><br/>$$${a}x + ${b} ${sens} ${c}$$<br/>` +
              `Quelle est la valeur <strong>limite</strong> de $x$, c'est-à-dire la borne de l'ensemble solution ?`,
            answer: x, tolerance: 0.01, unit: '',
            hint: `Une inéquation se résout comme une équation, avec une seule précaution : le sens ne change que si l'on multiplie ou divise par un nombre <strong>négatif</strong>.<br/><br/>Ici le coefficient $${a}$ est positif, donc le sens est conservé.`,
            solution: [
              `On isole $x$ exactement comme dans une équation : $${a}x ${sens} ${c} - ${b}$, soit $${a}x ${sens} ${a * x}$.`,
              `On divise par $${a}$, qui est <strong>positif</strong> : le sens de l'inégalité est donc <strong>conservé</strong>.`,
              `$x ${sens} ${x}$. La borne de l'ensemble solution est $${x}$, et elle en fait partie puisque l'inégalité est large.`
            ]
          };
        }

        if (tache === 'inequationNegative') {
          /* LA DIFFICULTÉ DU CHAPITRE : diviser par un négatif RENVERSE le
             sens. La solution l'explique par un exemple numérique, parce que la
             règle apprise par coeur est celle qu'on oublie le jour de
             l'épreuve. */
          const a = rand(2, 7), x = rand(2, 10), b = rand(5, 30);
          const c = -a * x + b;
          const sensDepart = pick(['<', '>']);
          const sensArrivee = sensDepart === '<' ? '>' : '<';
          return {
            statement: `Résous l'inéquation suivante :<br/><br/>$$-${a}x + ${b} ${sensDepart} ${c}$$<br/>` +
              `Quelle est la valeur <strong>limite</strong> de $x$ ?`,
            answer: x, tolerance: 0.01, unit: '',
            hint: `Isole $-${a}x$, puis divise par $-${a}$.<br/><br/>Attention : diviser par un nombre <strong>négatif</strong> renverse le sens de l'inégalité.`,
            solution: [
              `On isole d'abord le terme en $x$ : $-${a}x ${sensDepart} ${c} - ${b}$, soit $-${a}x ${sensDepart} ${-a * x}$.`,
              `On divise maintenant par $-${a}$, qui est <strong>négatif</strong> : le sens de l'inégalité s'<strong>inverse</strong>.`,
              `$x ${sensArrivee} ${x}$.<br/><br/>Pourquoi le sens change : $2 < 5$ est vrai, mais en multipliant par $-1$ on obtient $-2$ et $-5$, et $-2 > -5$. Multiplier par un négatif retourne l'ordre des nombres, donc retourne l'inégalité.`
            ]
          };
        }

        if (tache === 'verifier') {
          /* TESTER UNE VALEUR sans rien résoudre. C'est ce qui installe la
             DÉFINITION d'une solution, et rien ne le travaillait. */
          const a = rand(2, 7), b = rand(1, 12), x = rand(2, 9);
          const c = a * x + b;
          const estSolution = Math.random() > 0.5;
          const test = estSolution ? x : x + pick([-2, -1, 1, 2]);
          return {
            statement: `On considère l'équation $${a}x + ${b} = ${c}$.<br/><br/>` +
              `Le nombre $${test}$ est-il <strong>solution</strong> de cette équation ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
            answer: (a * test + b === c) ? 1 : 0, tolerance: 0.01, unit: '',
            hint: `Pour savoir si un nombre est solution, il n'y a rien à résoudre : il suffit de le <strong>remplacer</strong> dans l'équation et de regarder si l'égalité est vraie.<br/><br/>Calcule $${a} \\times ${test} + ${b}$ et compare à $${c}$.`,
            solution: [
              `Un nombre est solution d'une équation lorsqu'il la rend <strong>vraie</strong>. On le remplace donc dans le membre de gauche, sans rien résoudre.`,
              `$${a} \\times ${test} + ${b} = ${a * test} + ${b} = ${a * test + b}$`,
              (a * test + b === c)
                ? `On obtient $${c}$, c'est-à-dire exactement le membre de droite : l'égalité est vraie, donc $${test}$ <strong>est</strong> solution. Réponse : $1$.`
                : `On obtient $${a * test + b}$, alors que le membre de droite vaut $${c}$ : l'égalité est fausse, donc $${test}$ <strong>n'est pas</strong> solution. Réponse : $0$.`
            ]
          };
        }

        /* tache === 'comparer' : le seuil à partir duquel une offre devient
           plus avantageuse. C'est la tâche que le brevet pose le plus souvent,
           et elle demande une INÉQUATION issue d'une situation. */
        const fixeA = 0, parUniteA = rand(6, 12);
        const fixeB = rand(15, 40);
        const parUniteB = rand(2, parUniteA - 2);
        const seuil = fixeB / (parUniteA - parUniteB);
        const seuilEntier = Math.ceil(seuil);
        const ctx = pick([
          { o: 'films', a: 'payer chaque film à l\'unité', b: 'prendre un abonnement' },
          { o: 'séances', a: 'payer chaque séance à l\'unité', b: 'prendre une carte' },
          { o: 'trajets', a: 'payer chaque trajet au prix plein', b: 'acheter un abonnement' }
        ]);
        return {
          statement: `Deux formules sont proposées.<br/><br/>` +
            `<strong>Formule A</strong> : ${ctx.a}, $${parUniteA}$ € par ${ctx.o.replace(/s$/, '')}.<br/><br/>` +
            `<strong>Formule B</strong> : ${ctx.b} à $${fixeB}$ €, puis $${parUniteB}$ € par ${ctx.o.replace(/s$/, '')}.<br/><br/>` +
            `À partir de combien de <strong>${ctx.o}</strong> la formule B devient-elle <strong>strictement</strong> plus avantageuse ?`,
          answer: seuilEntier, tolerance: 0.01, unit: '',
          hint: `Appelle $x$ le nombre de ${ctx.o} et écris le prix de chaque formule en fonction de $x$.<br/><br/>« B plus avantageuse » se traduit par une <strong>inéquation</strong> : prix de B $<$ prix de A.`,
          solution: [
            `On note $x$ le nombre de ${ctx.o}. Formule A : $${parUniteA}x$. Formule B : $${fixeB} + ${parUniteB}x$.`,
            `« B strictement plus avantageuse » s'écrit $${fixeB} + ${parUniteB}x < ${parUniteA}x$, soit $${fixeB} < ${parUniteA - parUniteB}x$, donc $x > \\dfrac{${fixeB}}{${parUniteA - parUniteB}} \\approx ${fr(parseFloat(seuil.toFixed(2)))}$.`,
            `Un nombre de ${ctx.o} est un <strong>entier</strong> : la formule B devient donc plus avantageuse à partir de $${seuilEntier}$ ${ctx.o}.<br/><br/>C'est le dernier pas qui compte : la résolution donne un nombre décimal, mais la situation impose de revenir à un entier.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un plombier facture $40$ € de déplacement plus $35$ € par heure de travail. Un électricien facture $20$ € de déplacement plus $45$ € par heure.',
      tasks: [
        'Écrire le coût de chacun en fonction du nombre d\'heures $h$.',
        'Pour quelle valeur de $h$ les deux factures sont-elles égales (résoudre l\'équation) ?',
        'Pour $h < 2$, lequel est le moins cher ?'
      ],
      solutions: [
        'Plombier : $40 + 35h$ €. Électricien : $20 + 45h$ €.',
        '$40 + 35h = 20 + 45h \\Rightarrow 20 = 10h \\Rightarrow h = 2$ heures.',
        'Pour $h = 1$ : le plombier facture $40 + 35 = 75$ € et l\'électricien facture $20 + 45 = 65$ €, donc l\'électricien est moins cher. C\'est vrai pour toute valeur $h < 2$.'
      ],
      finalAnswer: 'Les deux factures sont égales pour $h = 2$ h. L\'électricien est moins cher pour moins de $2$ heures.'
    },

    evaluation: {
      title: 'Évaluation — Équations et inéquations',
      duration: '30 min',
      questions: [
        {
          statement: 'Résoudre l\'équation $5x - 3 = 2x + 9$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$5x - 3 = 2x + 9 \\Rightarrow 5x - 2x = 9 + 3 \\Rightarrow 3x = 12 \\Rightarrow x = 4$. Vérification : $5 \\times 4 - 3 = 17$ et $2 \\times 4 + 9 = 17$ ✓.'
        },
        {
          statement: 'Résoudre l\'inéquation $-4x + 8 \\leq 0$. L\'ensemble solution est :',
          type: 'multiple-choice',
          options: ['$x \\leq 2$', '$x \\geq 2$', '$x \\leq -2$', '$x \\geq -2$'],
          answer: 1,
          points: 2,
          correction: '$-4x + 8 \\leq 0 \\Rightarrow -4x \\leq -8 \\Rightarrow x \\geq 2$ (on divise par $-4 < 0$, le sens de l\'inégalité s\'inverse). L\'ensemble solution est $[2\\,;\\,+\\infty[$.'
        },
        {
          statement: 'Résoudre $\\dfrac{2x + 1}{3} = 5$.',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\dfrac{2x + 1}{3} = 5 \\Rightarrow 2x + 1 = 15 \\Rightarrow 2x = 14 \\Rightarrow x = 7$. Vérification : $\\dfrac{2 \\times 7 + 1}{3} = \\dfrac{15}{3} = 5$ ✓.'
        },
        {
          statement: 'Un cinéma propose deux formules. Formule A : $8$ € par film. Formule B : un abonnement de $20$ € puis $3$ € par film. À partir de combien de films la formule B est-elle plus avantageuse ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: 'films',
          points: 2,
          correction: 'Coût A : $8n$. Coût B : $20 + 3n$. B plus avantageuse quand $20 + 3n < 8n \\Rightarrow 20 < 5n \\Rightarrow n > 4$. À partir de $5$ films, la formule B est moins chère.'
        },
        {
          statement: 'L\'inéquation $3(x - 2) > 2(x + 1)$ a pour ensemble solution :',
          type: 'multiple-choice',
          options: ['$x > 8$', '$x > 4$', '$x < 8$', '$x > -8$'],
          answer: 0,
          points: 2,
          correction: '$3(x - 2) > 2(x + 1) \\Rightarrow 3x - 6 > 2x + 2 \\Rightarrow 3x - 2x > 2 + 6 \\Rightarrow x > 8$. L\'ensemble solution est $]8\\,;\\,+\\infty[$.'
        }
      ]
    }
  }
);
