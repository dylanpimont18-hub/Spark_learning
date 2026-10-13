/* =========================================================
   Spark Learning – data/5e/5e-statistiques.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-statistiques',
    level: 1, subject: 'maths',
    icon: '📈',
    title: 'Statistiques descriptives',
    subtitle: 'Moyenne, étendue, effectifs, fréquences',
    keywords: ['Moyenne', 'Étendue', 'Effectif', 'Fréquence', 'Tableau', 'Diagramme'],
    physics: false,

    cours: {
      /* DECOUVRIR REECRIT LE 2026-09-13. L'intro annoncait « les statistiques
         resument une serie », une definition. La question retenue met l'eleve
         devant une moyenne JUSTE et pourtant trompeuse, ce qu'aucun calcul ne
         resout : il faut la notion de dispersion pour en sortir.
         Moyenne VERIFIEE : (9 x 10 + 100) / 10 = 19. */
      intro: 'Dans un groupe de dix personnes, neuf gagnent $10$ € par jour et la dixième $100$ €. Le revenu moyen est donc de $19$ € par jour. Cette phrase est-elle honnête ?<br/><br/>' +
        'Le calcul est exact : $19$ € est bien la moyenne. Mais <strong>personne</strong> dans ce groupe ne gagne $19$ € — neuf gagnent bien moins, une gagne bien plus. Un nombre parfaitement juste peut donc donner une idée fausse de ce qu\'il résume.<br/><br/>' +
        'Les statistiques résument une série de données par quelques <strong>indicateurs clés</strong>.<br/><br/>' +
        'La <strong>moyenne</strong> donne une valeur « typique », mais une seule valeur extrême suffit à la tirer loin de presque toutes les données — c\'est ce que montre l\'exemple ci-dessus.<br/><br/>' +
        'L\'<strong>étendue</strong> mesure la dispersion (différence max − min) mais ne dit rien sur la répartition des valeurs entre les deux extrêmes.<br/><br/>' +
        'Pour calculer une <strong>moyenne pondérée</strong> : multiplier chaque valeur par son effectif (ou coefficient), sommer, diviser par l\'effectif total. Ne pas faire la moyenne des valeurs sans tenir compte des effectifs !',
      definitions: [
        { term: 'Moyenne', def: 'Somme de toutes les valeurs divisée par le nombre de valeurs : $\\bar{x} = \\dfrac{\\sum x_i}{n}$.' },
        { term: 'Étendue', def: 'Différence entre la plus grande et la plus petite valeur de la série : $e = x_{\\max} - x_{\\min}$.' },
        { term: 'Effectif', def: 'Nombre de fois qu\'une valeur apparaît dans la série. L\'effectif total $N$ est la somme de tous les effectifs.' },
        { term: 'Fréquence', def: 'Proportion d\'une valeur dans la série : $f = \\dfrac{n_i}{N}$ (entre 0 et 1) ou $\\times 100$ pour un pourcentage.' }
      ],
      example: {
        statement: 'Dans une classe, $4$ élèves ont $8$/20, $6$ ont $12$/20 et $5$ ont $16$/20. Calcule la moyenne.',
        steps: [
          'Effectif total : $N = 4 + 6 + 5 = 15$.',
          'Somme pondérée : $4 \\times 8 + 6 \\times 12 + 5 \\times 16 = 32 + 72 + 80 = 184$.',
          'Moyenne : $\\bar{x} = \\dfrac{184}{15} \\approx 12{,}27$.'
        ],
        answer: '$\\bar{x} \\approx 12{,}27$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Série statistique',
        title: 'Notes de la classe et moyenne',
        description: 'Diagramme en bâtons de la série $7, 9, 12, 14, 14, 15, 16, 8, 11, 10$ du problème du cours, classée par ordre croissant, avec la moyenne $\\bar{x} \\approx 11{,}6$ tracée en pointillé.',
        svg: `
          <svg viewBox="0 0 600 320" role="img" aria-labelledby="stats5e-title stats5e-desc">
            <title id="stats5e-title">Diagramme en batons des notes de la classe</title>
            <desc id="stats5e-desc">Diagramme en batons des dix notes 7, 8, 9, 10, 11, 12, 14, 14, 15, 16 classees par ordre croissant, avec une ligne pointillee marquant la moyenne 11,6.</desc>
            <text class="axis-label" x="20" y="26" text-anchor="start">Note /20</text>
            <line class="axis" x1="50" y1="40" x2="50" y2="260"></line>
            <line class="axis" x1="50" y1="260" x2="530" y2="260"></line>
            <line class="grid-line" x1="50" y1="205" x2="530" y2="205"></line>
            <line class="grid-line" x1="50" y1="150" x2="530" y2="150"></line>
            <line class="grid-line" x1="50" y1="95" x2="530" y2="95"></line>
            <line class="grid-line" x1="50" y1="40" x2="530" y2="40"></line>
            <text class="tick-label" x="42" y="264" text-anchor="end">0</text>
            <text class="tick-label" x="42" y="209" text-anchor="end">5</text>
            <text class="tick-label" x="42" y="154" text-anchor="end">10</text>
            <text class="tick-label" x="42" y="99" text-anchor="end">15</text>
            <text class="tick-label" x="42" y="44" text-anchor="end">20</text>
            <rect x="69" y="183" width="30" height="77" fill="color-mix(in srgb, var(--diagram-accent) 28%, transparent)" stroke="none"></rect>
            <rect x="117" y="172" width="30" height="88" fill="color-mix(in srgb, var(--diagram-accent) 28%, transparent)" stroke="none"></rect>
            <rect x="165" y="161" width="30" height="99" fill="color-mix(in srgb, var(--diagram-accent) 28%, transparent)" stroke="none"></rect>
            <rect x="213" y="150" width="30" height="110" fill="color-mix(in srgb, var(--diagram-accent) 28%, transparent)" stroke="none"></rect>
            <rect x="261" y="139" width="30" height="121" fill="color-mix(in srgb, var(--diagram-accent) 28%, transparent)" stroke="none"></rect>
            <rect x="309" y="128" width="30" height="132" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></rect>
            <rect x="357" y="106" width="30" height="154" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></rect>
            <rect x="405" y="106" width="30" height="154" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></rect>
            <rect x="453" y="95" width="30" height="165" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></rect>
            <rect x="501" y="84" width="30" height="176" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></rect>
            <text class="tick-label" x="84" y="175" text-anchor="middle">7</text>
            <text class="tick-label" x="132" y="164" text-anchor="middle">8</text>
            <text class="tick-label" x="180" y="153" text-anchor="middle">9</text>
            <text class="tick-label" x="228" y="142" text-anchor="middle">10</text>
            <text class="tick-label" x="276" y="131" text-anchor="middle">11</text>
            <text class="tick-label" x="324" y="120" text-anchor="middle">12</text>
            <text class="tick-label" x="372" y="98" text-anchor="middle">14</text>
            <text class="tick-label" x="420" y="98" text-anchor="middle">14</text>
            <text class="tick-label" x="468" y="87" text-anchor="middle">15</text>
            <text class="tick-label" x="516" y="76" text-anchor="middle">16</text>
            <line class="guide-line" x1="50" y1="132.4" x2="530" y2="132.4"></line>
            <text class="annotation-label" x="534" y="128" text-anchor="start">moyenne</text>
            <text class="annotation-label" x="534" y="142" text-anchor="start">≈ 11,6</text>
            <text class="axis-label" x="290" y="298" text-anchor="middle">Élèves classés par note croissante</text>
          </svg>
        `,
        notes: [
          '<strong>Moyenne</strong> : $\\bar{x} = \\dfrac{7+9+12+14+14+15+16+8+11+10}{10} = \\dfrac{116}{10} = 11{,}6$.',
          '<strong>Étendue</strong> : $16 - 7 = 9$.',
          'Les $5$ bâtons foncés ($12, 14, 14, 15, 16$) correspondent aux notes $\\geq \\bar{x}$ : ce sont les $5$ élèves au-dessus de la moyenne, comme calculé dans le problème du cours.',
          'Les $5$ bâtons clairs ($7, 8, 9, 10, 11$) correspondent aux notes $< \\bar{x}$.'
        ],
        reading: 'Ce qu\'il faut lire : la moyenne ($11{,}6$) ne partage pas les bâtons en deux groupes de tailles visuellement égales, car les notes ne sont pas réparties symétriquement autour d\'elle — un exemple concret du piège du cours : la moyenne peut être « tirée » par la répartition réelle des valeurs.',
        caption: 'Diagramme en bâtons de la série de notes du problème du cours ($\\bar{x} = 11{,}6$, recalculée indépendamment à partir des $10$ valeurs brutes).'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13) — une figure par MALENTENDU.
         Les trois retenus :
           1. la moyenne prise pour « la valeur typique », alors qu'une seule
              valeur extreme suffit a la rendre absurde — c'est l'exemple que
              l'intro du cours donne, sans le montrer ;
           2. la moyenne de groupes calculee comme la moyenne des moyennes,
              sans tenir compte des effectifs ;
           3. l'etendue confondue avec une mesure de dispersion complete.

         Valeurs VERIFIEES : la serie 9,10,10,10,10,10,10,10,10,100 a pour
         moyenne 18,9 alors que neuf de ses dix valeurs valent 10 ou moins ;
         sans la valeur extreme, la moyenne tombe a 9,89. Pour la ponderation,
         5 eleves a 8 et 25 a 16 donnent 14,67 et non 12. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Une seule valeur suffit',
          title: 'La moyenne se laisse emporter par un extrême',
          description: 'Dans cette série, <strong>neuf valeurs sur dix</strong> valent $10$ ou moins. La moyenne, elle, vaut $18{,}9$ : elle est plus grande que presque toutes les données qu\'elle prétend résumer. Une seule valeur extrême a suffi.',
          svg: `
            <svg viewBox="0 0 400 218" role="img" aria-labelledby="stat-extreme-title stat-extreme-desc">
              <title id="stat-extreme-title">Une serie de dix valeurs dont une extreme, et sa moyenne</title>
              <desc id="stat-extreme-desc">Dix batons representent dix valeurs : un baton de 9 puis huit batons de 10, tous courts et de meme hauteur, et enfin un dixieme baton de 100, beaucoup plus haut que les autres. Un trait horizontal marque la moyenne de la serie, qui vaut 18 virgule 9. Ce trait passe nettement au-dessus des neuf premiers batons, alors qu'ils representent la quasi-totalite des donnees. Un second trait, en tirets, marque la moyenne des neuf premieres valeurs seulement, qui vaut 9 virgule 89 et passe, elle, au niveau des batons. La comparaison montre qu'une seule valeur extreme deplace la moyenne de 9 virgule 89 a 18 virgule 9.</desc>

              <!-- Echelle : 1,5 unite d'ecran par point, base y = 176.
                   La valeur 100 sort du cadre a cette echelle ; on la CASSE
                   explicitement plutot que de comprimer l'echelle, ce qui
                   ecraserait les neuf autres batons a un trait invisible.
                   La cassure est signalee, la figure ne ment donc pas. -->
              <line class="axis" x1="34" y1="176" x2="384" y2="176"></line>

              <rect class="frame-line" x="44" y="162.5" width="20" height="13.5" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)"></rect>
              <rect class="frame-line" x="74" y="161" width="20" height="15" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)"></rect>
              <rect class="frame-line" x="104" y="161" width="20" height="15" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)"></rect>
              <rect class="frame-line" x="134" y="161" width="20" height="15" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)"></rect>
              <rect class="frame-line" x="164" y="161" width="20" height="15" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)"></rect>
              <rect class="frame-line" x="194" y="161" width="20" height="15" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)"></rect>
              <rect class="frame-line" x="224" y="161" width="20" height="15" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)"></rect>
              <rect class="frame-line" x="254" y="161" width="20" height="15" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)"></rect>
              <rect class="frame-line" x="284" y="161" width="20" height="15" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)"></rect>

              <!-- Le baton extreme, teinte forte : c'est le seul objet a isoler.
                   Sa hauteur est CASSEE et la cassure est dite. -->
              <rect class="frame-line" x="314" y="46" width="20" height="130" fill="color-mix(in srgb, var(--diagram-accent) 44%, transparent)"></rect>
              <line class="guide-line" x1="310" y1="62" x2="338" y2="56"></line>
              <line class="guide-line" x1="310" y1="68" x2="338" y2="62"></line>
              <text class="annotation-label" x="340" y="44" text-anchor="start">100</text>
              <text class="tick-label" x="340" y="78" text-anchor="start">échelle</text>
              <text class="tick-label" x="340" y="92" text-anchor="start">coupée</text>

              <!-- Moyenne AVEC l'extreme : 18,9 -> y = 176 - 1,5 x 18,9 = 147,65 -->
              <line class="curve-main" x1="34" y1="147.65" x2="304" y2="147.65"></line>
              <text class="annotation-label" x="30" y="144" text-anchor="end">18,9</text>

              <!-- Moyenne SANS l'extreme : 9,89 -> y = 176 - 1,5 x 9,89 = 161,17 -->
              <line class="guide-line" x1="34" y1="161.17" x2="304" y2="161.17" stroke-dasharray="5 4"></line>
              <text class="tick-label" x="30" y="170" text-anchor="end">9,89</text>

              <text class="tick-label" x="174" y="196" text-anchor="middle">neuf valeurs à 10 ou moins</text>
              <text class="label-soft" x="200" y="214" text-anchor="middle">la moyenne passe au-dessus de presque toutes les données</text>
            </svg>
          `,
          notes: [
            'Série : $9$, puis huit fois $10$, puis $100$. Somme $= 189$, donc moyenne $= 189 \\div 10 = 18{,}9$.',
            'Sans la valeur extrême, la moyenne des neuf premières vaut $89 \\div 9 \\approx 9{,}89$ : elle décrit bien la série.',
            'Une seule donnée sur dix a donc <strong>doublé</strong> la moyenne. C\'est pourquoi on ne commente jamais une moyenne sans avoir regardé les valeurs elles-mêmes.'
          ],
          reading: 'Repère le trait plein de la moyenne, puis compare-le à la hauteur des bâtons : il les dépasse tous sauf un. Une moyenne qui ne ressemble à aucune donnée est un signal — cherche la valeur extrême qui la tire.',
          caption: 'Une série de dix valeurs dont neuf à $10$ ou moins : la moyenne vaut $18{,}9$ à cause de la seule valeur $100$, contre $9{,}89$ sans elle.'
        },
        {
          theme: 'maths',
          kicker: 'Pondérer, pas moyenner',
          title: 'La moyenne de deux groupes n\'est pas la moyenne des deux moyennes',
          description: 'Un petit groupe à $8$ et un grand groupe à $16$ : la moyenne de l\'ensemble n\'est pas $12$. Elle est <strong>tirée vers le grand groupe</strong>, parce que chaque élève compte pour un, et qu\'il y en a bien plus d\'un côté que de l\'autre.',
          svg: `
            <svg viewBox="0 0 400 212" role="img" aria-labelledby="stat-pond-title stat-pond-desc">
              <title id="stat-pond-title">Deux groupes d'effectifs differents et la moyenne de l'ensemble</title>
              <desc id="stat-pond-desc">Un groupe de 5 eleves ayant obtenu 8 sur 20 est represente par 5 pastilles, et un groupe de 25 eleves ayant obtenu 16 sur 20 est represente par 25 pastilles de meme taille. Une regle graduee de 8 a 16 est tracee sous les deux groupes. La moyenne de l'ensemble, qui vaut 14 virgule 67, est marquee par un trait plein : elle se situe nettement plus pres de 16 que de 8, car le groupe a 16 est cinq fois plus nombreux. La moyenne des deux moyennes, qui vaudrait 12, est marquee par un trait tirete a mi-chemin : c'est la reponse erronee, et le dessin montre qu'elle ne correspond a rien.</desc>

              <text class="tick-label" x="76" y="34" text-anchor="middle">5 élèves à 8</text>
              <circle class="plot-point" cx="48" cy="52" r="6"></circle>
              <circle class="plot-point" cx="64" cy="52" r="6"></circle>
              <circle class="plot-point" cx="80" cy="52" r="6"></circle>
              <circle class="plot-point" cx="96" cy="52" r="6"></circle>
              <circle class="plot-point" cx="112" cy="52" r="6"></circle>

              <text class="tick-label" x="278" y="34" text-anchor="middle">25 élèves à 16</text>
              <circle class="plot-point" cx="196" cy="46" r="6"></circle>
              <circle class="plot-point" cx="212" cy="46" r="6"></circle>
              <circle class="plot-point" cx="228" cy="46" r="6"></circle>
              <circle class="plot-point" cx="244" cy="46" r="6"></circle>
              <circle class="plot-point" cx="260" cy="46" r="6"></circle>
              <circle class="plot-point" cx="276" cy="46" r="6"></circle>
              <circle class="plot-point" cx="292" cy="46" r="6"></circle>
              <circle class="plot-point" cx="308" cy="46" r="6"></circle>
              <circle class="plot-point" cx="324" cy="46" r="6"></circle>
              <circle class="plot-point" cx="340" cy="46" r="6"></circle>
              <circle class="plot-point" cx="356" cy="46" r="6"></circle>
              <circle class="plot-point" cx="372" cy="46" r="6"></circle>
              <circle class="plot-point" cx="196" cy="64" r="6"></circle>
              <circle class="plot-point" cx="212" cy="64" r="6"></circle>
              <circle class="plot-point" cx="228" cy="64" r="6"></circle>
              <circle class="plot-point" cx="244" cy="64" r="6"></circle>
              <circle class="plot-point" cx="260" cy="64" r="6"></circle>
              <circle class="plot-point" cx="276" cy="64" r="6"></circle>
              <circle class="plot-point" cx="292" cy="64" r="6"></circle>
              <circle class="plot-point" cx="308" cy="64" r="6"></circle>
              <circle class="plot-point" cx="324" cy="64" r="6"></circle>
              <circle class="plot-point" cx="340" cy="64" r="6"></circle>
              <circle class="plot-point" cx="356" cy="64" r="6"></circle>
              <circle class="plot-point" cx="372" cy="64" r="6"></circle>
              <circle class="plot-point" cx="196" cy="82" r="6"></circle>

              <!-- Regle graduee de 8 a 16, de x=48 a x=372 : 40,5 unites par
                   point. La moyenne ponderee 14,67 tombe donc a
                   48 + 40,5 x (14,67 - 8) = 318,1 ; la fausse moyenne 12 a
                   48 + 40,5 x 4 = 210. Positions CALCULEES. -->
              <line class="axis" x1="48" y1="132" x2="372" y2="132"></line>
              <line class="frame-line" x1="48" y1="126" x2="48" y2="138"></line>
              <text class="tick-label" x="48" y="152" text-anchor="middle">8</text>
              <line class="frame-line" x1="372" y1="126" x2="372" y2="138"></line>
              <text class="tick-label" x="372" y="152" text-anchor="middle">16</text>

              <line class="curve-main" x1="318.1" y1="112" x2="318.1" y2="148"></line>
              <text class="annotation-label" x="318.1" y="106" text-anchor="middle">14,67</text>
              <text class="tick-label" x="318.1" y="168" text-anchor="middle">la vraie moyenne</text>

              <line class="guide-line" x1="210" y1="118" x2="210" y2="146" stroke-dasharray="5 4"></line>
              <text class="label-soft" x="210" y="112" text-anchor="middle">12</text>
              <text class="tick-label" x="210" y="168" text-anchor="middle">la réponse fausse</text>

              <text class="label-soft" x="200" y="196" text-anchor="middle">la moyenne penche du côté du groupe le plus nombreux</text>
            </svg>
          `,
          notes: [
            'Total des points : $5 \\times 8 + 25 \\times 16 = 40 + 400 = 440$.',
            'Nombre d\'élèves : $5 + 25 = 30$, donc moyenne $= 440 \\div 30 \\approx 14{,}67$.',
            'La moyenne des deux moyennes donnerait $\\dfrac{8 + 16}{2} = 12$, ce qui reviendrait à traiter $5$ élèves et $25$ élèves comme s\'ils étaient aussi nombreux.'
          ],
          reading: 'Compare le nombre de pastilles des deux groupes, puis regarde où tombe le trait plein : il est bien plus près de $16$ que de $8$. La moyenne se calcule toujours sur les <strong>individus</strong>, jamais sur les groupes.',
          caption: '$5$ élèves à $8$ et $25$ élèves à $16$ : la moyenne de l\'ensemble vaut $14{,}67$, et non $12$ comme le donnerait la moyenne des deux moyennes.'
        },
        {
          theme: 'maths',
          kicker: 'Ce que l\'étendue ignore',
          title: 'Deux séries de même étendue, très différentes',
          description: 'Ces deux séries ont le <strong>même minimum</strong>, le <strong>même maximum</strong>, donc la <strong>même étendue</strong>. Elles n\'ont pourtant rien à voir : l\'une est groupée, l\'autre étalée. L\'étendue ne regarde que les deux bouts, jamais ce qu\'il y a entre.',
          svg: `
            <svg viewBox="0 0 400 200" role="img" aria-labelledby="stat-etendue-title stat-etendue-desc">
              <title id="stat-etendue-title">Deux series de meme etendue mais de repartitions differentes</title>
              <desc id="stat-etendue-desc">Deux axes gradues identiques, de 4 a 16, sont traces l'un au-dessus de l'autre. Sur le premier, les valeurs sont groupees autour de 10, avec un seul point isole tout a gauche a 4 et un seul tout a droite a 16. Sur le second, les valeurs sont reparties regulierement de 4 jusqu'a 16. Les deux series ont donc le meme minimum, le meme maximum et la meme etendue de 12, alors que leurs repartitions n'ont rien de comparable. Une accolade tracee sous chaque axe indique la meme etendue dans les deux cas.</desc>

              <!-- Deux axes IDENTIQUES : de x=50 a x=350 pour les valeurs 4 a
                   16, soit 25 unites d'ecran par point. Positions CALCULEES. -->
              <text class="tick-label" x="200" y="24" text-anchor="middle">série groupée</text>
              <line class="axis" x1="50" y1="56" x2="360" y2="56"></line>
              <circle class="plot-point" cx="50" cy="56" r="5"></circle>
              <circle class="plot-point" cx="175" cy="56" r="5"></circle>
              <circle class="plot-point" cx="190" cy="56" r="5"></circle>
              <circle class="plot-point" cx="200" cy="56" r="5"></circle>
              <circle class="plot-point" cx="210" cy="56" r="5"></circle>
              <circle class="plot-point" cx="225" cy="56" r="5"></circle>
              <circle class="plot-point" cx="350" cy="56" r="5"></circle>

              <text class="tick-label" x="200" y="112" text-anchor="middle">série étalée</text>
              <line class="axis" x1="50" y1="144" x2="360" y2="144"></line>
              <circle class="plot-point" cx="50" cy="144" r="5"></circle>
              <circle class="plot-point" cx="100" cy="144" r="5"></circle>
              <circle class="plot-point" cx="150" cy="144" r="5"></circle>
              <circle class="plot-point" cx="200" cy="144" r="5"></circle>
              <circle class="plot-point" cx="250" cy="144" r="5"></circle>
              <circle class="plot-point" cx="300" cy="144" r="5"></circle>
              <circle class="plot-point" cx="350" cy="144" r="5"></circle>

              <text class="tick-label" x="50" y="76" text-anchor="middle">4</text>
              <text class="tick-label" x="350" y="76" text-anchor="middle">16</text>
              <text class="tick-label" x="50" y="164" text-anchor="middle">4</text>
              <text class="tick-label" x="350" y="164" text-anchor="middle">16</text>

              <path class="guide-line" fill="none" d="M50 178 L50 186 L350 186 L350 178"></path>
              <text class="annotation-label" x="200" y="196" text-anchor="middle">même étendue : 16 − 4 = 12</text>
            </svg>
          `,
          notes: [
            'Les deux séries ont pour minimum $4$ et pour maximum $16$ : leur étendue vaut $16 - 4 = 12$ dans les deux cas.',
            'La première est concentrée autour de $10$, avec deux valeurs isolées aux extrémités ; la seconde est régulièrement répartie.',
            'L\'étendue mesure la <strong>largeur</strong> de la série, jamais la façon dont les valeurs s\'y répartissent. Elle se lit sur deux valeurs et ignore toutes les autres.'
          ],
          reading: 'Cache mentalement les deux points des extrémités : les deux séries deviennent alors très différentes. C\'est exactement ce que l\'étendue ne voit pas, et pourquoi on la donne toujours avec la moyenne, jamais seule.',
          caption: 'Deux séries de même minimum ($4$), même maximum ($16$) et donc même étendue ($12$), mais de répartitions très différentes.'
        }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Organiser</strong> les données dans un tableau : une ligne pour les valeurs, une ligne pour les effectifs.',
          '<strong>Calculer la moyenne</strong> : $\\bar{x} = \\dfrac{\\text{somme de toutes les valeurs}}{\\text{nombre de valeurs}} = \\dfrac{\\sum x_i \\cdot n_i}{\\sum n_i}$.',
          '<strong>Calculer l\'étendue</strong> : $e = x_{\\max} - x_{\\min}$.',
          '<strong>Calculer les fréquences</strong> : $f_i = \\dfrac{n_i}{N} \\times 100\\%$.'
        ]
      },
      formulas: [
        '$\\bar{x} = \\dfrac{\\sum x_i \\cdot n_i}{N}$ (moyenne pondérée)',
        'Étendue : $e = x_{\\max} - x_{\\min}$',
        'Fréquence : $f_i = \\dfrac{n_i}{N}$ (entre $0$ et $1$) ou $\\dfrac{n_i}{N} \\times 100$ (en %)'
      ],
      recap: [
        'Moyenne = somme des valeurs ÷ nombre de valeurs (attention aux coefficients !).',
        'L\'étendue ne mesure que la « largeur » de la série, pas sa répartition.',
        'La moyenne n\'est pas forcément une valeur présente dans la série.',
        'Fréquence en % = effectif de la valeur ÷ effectif total × 100.'
      ],
      piege: 'Piège : quand des notes ont des effectifs (ou des coefficients) différents, on ne fait pas simplement la moyenne des notes.<br/><br/>$5$ élèves à $8$ et $25$ élèves à $16$ : la moyenne n\'est pas $\\dfrac{8 + 16}{2} = 12$, mais $\\dfrac{5 \\times 8 + 25 \\times 16}{30} = \\dfrac{440}{30} \\approx 14{,}67$.<br/><br/>Chaque note compte <strong>autant de fois</strong> qu\'il y a d\'élèves qui l\'ont obtenue.'
    },

    quiz: [
      {
        q: 'Les notes d\'une élève sont : $12, 15, 8, 14, 11$. Quelle est sa moyenne ?',
        options: ['$12$', '$11$', '$11{,}5$', '$12{,}5$'],
        answer: 0,
        correction: '$\\bar{x} = \\dfrac{12 + 15 + 8 + 14 + 11}{5} = \\dfrac{60}{5} = 12$.'
      },
      {
        q: 'Dans une classe, les tailles (en cm) varient de $148$ à $182$. Quelle est l\'étendue ?',
        options: ['$164$ cm', '$34$ cm', '$30$ cm', '$182$ cm'],
        answer: 1,
        correction: 'Étendue $= x_{\\max} - x_{\\min} = 182 - 148 = 34$ cm.'
      },
      {
        q: 'Un élève a les notes $10, 12, 14$ en mathématiques (coeff. 1) et $8$ en sport (coeff. 3). Il calcule sa moyenne générale comme $\\dfrac{10+12+14+8}{4} = 11$. Quelle est son erreur ?',
        options: [
          'Il n\'a pas fait d\'erreur : la moyenne vaut $11$.',
          'La bonne méthode est de multiplier la moyenne des maths par $3$ et celle du sport par $1$.',
          'Il a oublié les coefficients : $\\bar{x} = \\dfrac{10 \\times 1 + 12 \\times 1 + 14 \\times 1 + 8 \\times 3}{1+1+1+3} = \\dfrac{60}{6} = 10$.',
          'Il faut diviser par le nombre de matières, pas par la somme des coefficients.'
        ],
        answer: 2,
        correction: 'Une moyenne pondérée tient compte des coefficients : $\\bar{x} = \\dfrac{10 + 12 + 14 + 8 \\times 3}{1+1+1+3} = \\dfrac{36+24}{6} = \\dfrac{60}{6} = 10$.'
      }
    ],

    /* ELARGISSEMENT ET CORRECTIONS DU 2026-09-13.

       DEFAUT DE VRAISEMBLANCE, corrige d'abord : les quatre themes partageaient
       le meme intervalle de tirage, rand(5, 18). Des notes sur 20 et des scores
       de match y sont plausibles, mais le theme « tailles des eleves (en cm) »
       produisait des enonces du genre « calcule la moyenne de ces tailles :
       13, 13, 5, 11 » — des collegiens de 5 a 18 CENTIMETRES. Chaque theme
       porte desormais son propre intervalle, coherent avec la grandeur qu'il
       mesure.

       ETAT DE DEPART : le generateur ne rendait QU'UNE tache, la moyenne simple
       — 12 moules, 24 enonces de banque (le chapitre etait donc l'un des mieux
       pourvus de l'ouvrage en VOLUME, mais sur une seule competence).
       L'evaluation teste pourtant l'etendue (Q2), la moyenne ponderee (Q3) et la
       frequence en pourcentage (Q4) : trois questions sur cinq sans exercice
       d'entrainement, et deux remediations sans renvoi possible.

       On ajoute ces trois taches, chacune adossee a une erreur frequente. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['moyenne', 'etendue', 'ponderee', 'frequence']);

        /* Chaque theme avec SON intervalle : c'est la correction du defaut de
           vraisemblance. La grandeur mesuree impose l'ordre de grandeur. */
        const themes = [
          { theme: 'notes d\'un contrôle de maths', emoji: '📝', min: 5, max: 18, unite: '' },
          { theme: 'températures de la semaine (en °C)', emoji: '🌡️', min: 2, max: 28, unite: '°C' },
          { theme: 'scores au dernier match', emoji: '⚽', min: 0, max: 6, unite: '' },
          { theme: 'tailles des élèves (en cm)', emoji: '📏', min: 140, max: 180, unite: 'cm' }
        ];

        if (tache === 'etendue') {
          const ctx = pick(themes);
          const n = rand(5, 7);
          const vals = Array.from({ length: n }, () => rand(ctx.min, ctx.max));
          const mini = Math.min.apply(null, vals);
          const maxi = Math.max.apply(null, vals);
          return {
            statement: `${ctx.emoji} Voici des ${ctx.theme} : $${vals.join(', ')}$.<br/>Quelle est l'<strong>étendue</strong> de cette série ?`,
            answer: maxi - mini,
            tolerance: 0,
            unit: ctx.unite,
            hint: `L'étendue mesure de combien la série « s'étend » : c'est une <strong>soustraction</strong>, du plus grand au plus petit.<br/><br/>Repère d'abord le minimum et le maximum ; les autres valeurs ne servent pas.`,
            solution: [
              `L'étendue est la différence entre le maximum et le minimum.`,
              `Plus petite valeur : $${mini}$. Plus grande valeur : $${maxi}$.`,
              `Étendue : $${maxi} - ${mini} = ${maxi - mini}$.`,
              `Contrairement à la moyenne, l'étendue n'utilise que ces deux valeurs : elle ne dit rien de ce qui se passe entre les deux.`
            ]
          };
        }

        if (tache === 'ponderee') {
          /* Moyenne PONDEREE par des effectifs : c'est la tache ou l'eleve fait
             la moyenne des deux notes en ignorant les effectifs. Les valeurs
             sont choisies pour que la moyenne tombe a une decimale au plus, et
             les deux effectifs sont DIFFERENTS — sans quoi l'erreur donnerait
             par hasard le bon resultat. */
          const n1 = rand(2, 9);
          let n2 = rand(2, 9);
          if (n2 === n1) n2 = n1 + 1;
          const v1 = rand(5, 12);
          const v2 = rand(13, 19);
          const moy = parseFloat(((n1 * v1 + n2 * v2) / (n1 + n2)).toFixed(2));
          return {
            statement: `📊 Dans un groupe, $${n1}$ élèves ont obtenu $${v1}$/20 et $${n2}$ élèves ont obtenu $${v2}$/20.<br/>Quelle est la moyenne du groupe ? Arrondis à $0{,}01$.`,
            answer: moy,
            tolerance: 0.01,
            unit: '',
            hint: `Attention : la moyenne du groupe n'est pas la moyenne des deux notes.<br/><br/>Chaque note compte autant de fois qu'il y a d'élèves qui l'ont obtenue.`,
            solution: [
              `Une moyenne pondérée tient compte de l'effectif de chaque note.`,
              `Total des points : $${n1} \\times ${v1} + ${n2} \\times ${v2} = ${n1 * v1} + ${n2 * v2} = ${n1 * v1 + n2 * v2}$.`,
              `Nombre d'élèves : $${n1} + ${n2} = ${n1 + n2}$.`,
              `Moyenne : $${n1 * v1 + n2 * v2} \\div ${n1 + n2} = ${fr(moy)}$.`,
              `Contrôle : la moyenne se rapproche de la note du groupe le plus nombreux, ici $${n2 > n1 ? v2 : v1}$.`
            ]
          };
        }

        if (tache === 'frequence') {
          /* Frequence en POURCENTAGE : le lien explicite avec le chapitre de
             proportionnalite. Le pourcentage est ENTIER PAR CONSTRUCTION : on
             tire d'abord le pourcentage, puis on en deduit l'effectif, plutot
             que l'inverse. C'est ce qui evite tout arrondi — le chapitre porte
             sur la frequence, pas sur l'arrondi. */
          const total = pick([20, 25, 40, 50]);
          // Les multiples de 100/total donnent un pourcentage entier.
          const pasPourcent = 100 / total;          // 5, 4, 2,5 ou 2
          const k = rand(1, total - 1);             // effectif, strictement entre 0 et total
          const part = k;
          const freq = parseFloat((part * pasPourcent).toFixed(2));
          const choix = pick(['le football', 'la natation', 'le basket', 'la danse', 'le judo']);
          return {
            statement: `📊 Sur $${total}$ élèves interrogés, $${part}$ ont choisi ${choix}.<br/>Quelle est la fréquence de ce choix, en pourcentage ?`,
            answer: freq,
            tolerance: 0.01,
            unit: '%',
            hint: `Une fréquence est la part d'un effectif dans le total.<br/><br/>Divise l'effectif par le total, puis multiplie par $100$ pour l'exprimer en pourcentage.`,
            solution: [
              `Une fréquence est la part d'un effectif dans le total.`,
              `Fréquence : $\\dfrac{${part}}{${total}} = ${fr(part / total)}$.`,
              `En pourcentage : $${fr(part / total)} \\times 100 = ${fr(freq)}\\%$.`,
              `Contrôle : la fréquence est toujours comprise entre $0\\%$ et $100\\%$.`
            ]
          };
        }

        // Tache d'origine, avec l'intervalle propre a chaque theme.
        const ctx = pick(themes);
        const n = rand(4, 6);
        const vals = Array.from({ length: n }, () => rand(ctx.min, ctx.max));
        const sum = vals.reduce((a, b) => a + b, 0);
        const mean = parseFloat((sum / n).toFixed(1));
        return {
          statement: `${ctx.emoji} Calcule la moyenne de ces ${ctx.theme} : $${vals.join(', ')}$. Arrondis au dixième si nécessaire.`,
          answer: mean,
          tolerance: 0.1,
          unit: ctx.unite,
          hint: `Additionne toutes les valeurs, puis divise par le nombre de valeurs.<br/><br/>Ici il y a $${n}$ valeurs : compte-les bien, une valeur répétée compte plusieurs fois.`,
          solution: [
            `La moyenne est la somme des valeurs divisée par leur nombre.`,
            `Somme : $${vals.join(' + ')} = ${sum}$.`,
            `Il y a $${n}$ valeurs.`,
            `Moyenne : $${sum} \\div ${n} ${Math.abs(sum / n - mean) < 1e-9 ? '=' : '\\approx'} ${fr(mean)}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un professeur relève les scores (sur 20) de sa classe lors d\'un contrôle. Résultats : $7, 9, 12, 14, 14, 15, 16, 8, 11, 10$.',
      tasks: [
        'Calcule la moyenne de la classe.',
        'Calcule l\'étendue.',
        'Combien d\'élèves ont une note supérieure ou égale à la moyenne ? Quelle est leur fréquence ?'
      ],
      solutions: [
        '$\\bar{x} = \\dfrac{7+9+12+14+14+15+16+8+11+10}{10} = \\dfrac{116}{10} = 11{,}6$.',
        'Étendue : $16 - 7 = 9$.',
        'Notes $\\geq 11{,}6$ : $12, 14, 14, 15, 16$ → $5$ élèves. Fréquence : $\\dfrac{5}{10} = 50\\%$.'
      ],
      finalAnswer: 'Moyenne $11{,}6$/20 ; étendue $9$ ; $50\\%$ des élèves sont au-dessus de la moyenne.'
    },

    evaluation: {
      title: 'Évaluation — Statistiques descriptives',
      duration: '25 min',
      questions: [
        {
          statement: 'Les notes d\'un contrôle sont : $8, 11, 13, 15, 9, 14$. Quelle est la moyenne ?',
          type: 'numeric',
          answer: 11.67,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\bar{x} = \\dfrac{8 + 11 + 13 + 15 + 9 + 14}{6} = \\dfrac{70}{6} \\approx 11{,}67$.'
        },
        {
          statement: 'Les tailles (en cm) de $5$ élèves sont : $152, 148, 165, 170, 155$. Quelle est l\'étendue ?',
          type: 'numeric',
          answer: 22,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Étendue $= x_{\\max} - x_{\\min} = 170 - 148 = 22$ cm.'
        },
        {
          statement: 'Dans un groupe, $4$ élèves ont $12$/20 et $6$ élèves ont $16$/20. Quelle est la moyenne du groupe ?',
          type: 'numeric',
          answer: 14.4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Moyenne pondérée : $\\bar{x} = \\dfrac{4 \\times 12 + 6 \\times 16}{4 + 6} = \\dfrac{48 + 96}{10} = \\dfrac{144}{10} = 14{,}4$.'
        },
        {
          statement: 'Sur $25$ élèves, $10$ ont choisi le football. Quelle est la fréquence du football en pourcentage ?',
          type: 'numeric',
          answer: 40,
          tolerance: 0,
          unit: '%',
          points: 2,
          correction: 'Fréquence $= \\dfrac{10}{25} \\times 100 = 40\\%$.'
        },
        {
          statement: 'Un élève affirme : « la moyenne de $3, 7$ et $11$ est forcément l\'une de ces trois valeurs ». A-t-il raison ?',
          type: 'multiple-choice',
          options: [
            'Oui : la moyenne est toujours l\'une des valeurs de la série.',
            'Non : ici la moyenne vaut $7$ et se trouve dans la série, mais c\'est un hasard.',
            'Non : la moyenne vaut $21$, et $21$ n\'est pas dans la série.',
            'Oui : la moyenne est toujours la valeur du milieu de la série.'
          ],
          answer: 1,
          points: 2,
          correction: '$\\bar{x} = \\dfrac{3 + 7 + 11}{3} = \\dfrac{21}{3} = 7$. Ici $7$ est dans la série, mais c\'est un hasard. Avec $3, 8, 11$ : $\\bar{x} = \\dfrac{22}{3} \\approx 7{,}33$, qui n\'est pas une valeur de la série.'
        }
      ]
    }
  });
