window.MODULES.push(
    {
    id: '4e-relatifs-mult-div',
    level: 1, subject: 'maths',
    icon: '±',
    title: 'Relatifs : multiplication et division',
    subtitle: 'Règle des signes, produit, quotient',
    keywords: ['Nombres relatifs', 'Règle des signes', 'Produit', 'Quotient', 'Négatif'],
    physics: 'Calcul de variations de température, produit de charges électriques de signes opposés',
    cours: {
      /* DECOUVRIR reecrit le 2026-09-13. L'intro donnait la regle des signes
         puis la justifiait : l'eleve n'avait plus rien a chercher. On ouvre sur
         la dette, ou le resultat se DEDUIT du sens (retirer trois dettes de
         50 euros enrichit de 150 euros) alors qu'aucune regle de sixieme ne le
         donne. « Moins par moins fait plus » cesse d'etre arbitraire : c'est ce
         que la situation impose. */
      intro: 'Tu dois $50$ € à trois personnes : ta situation vaut $3 \\times (-50) = -150$ €. Maintenant, ces trois dettes sont annulées. Que devient ta situation ?<br/><br/>' +
        'Tu retires trois fois une dette de $50$ €, ce qui s\'écrit $(-3) \\times (-50)$. Et sans faire aucun calcul, tu sais déjà que tu es <strong>plus riche de $150$ €</strong> qu\'avant : la situation impose que le résultat soit positif.<br/><br/>' +
        'C\'est la seule justification honnête de « moins par moins fait plus » : ce n\'est pas une convention à retenir, c\'est ce que la réalité oblige à écrire.<br/><br/>' +
        'La règle des signes pour la multiplication est intuitive si on pense aux opposés : multiplier par $-1$ inverse le signe. Donc $(-1) \\times (-1) = 1$ car « l\'opposé de l\'opposé ». Règle générale : pair de $-$ → $+$, impair de $-$ → $-$.' +
        '<br/><br/>' +
        '<strong>Piège classique avec les exposants :</strong> $(-3)^2 = (-3) \\times (-3) = +9$ (le $-$ est dans la base), mais $-3^2 = -(3 \\times 3) = -9$ (l\'exposant s\'applique uniquement au $3$). Les parenthèses sont essentielles.' +
        '<br/><br/>' +
        'En physique, les grandeurs algébriques (tension, position, vitesse) peuvent être négatives — le signe indique un sens (opposé à la convention positive choisie). Par exemple, une vitesse de $-5$ m/s signifie un déplacement dans le sens opposé à l\'axe choisi.',
      definitions: [
        { term: 'Nombre relatif', def: 'Nombre muni d\'un signe ($+$ ou $-$) et d\'une distance à zéro. Exemples : $+7$, $-3{,}5$.' },
        { term: 'Distance à zéro', def: 'Distance entre le nombre et $0$ sur la droite graduée, toujours positive : la distance à zéro de $-5$ est $5$, celle de $+5$ aussi. (Au lycée, on l\'appellera « valeur absolue ».)' },
        { term: 'Règle des signes', def: 'Deux facteurs de même signe donnent un produit positif ; deux facteurs de signes contraires donnent un produit négatif.' },
        { term: 'Opposé d\'un nombre', def: 'L\'opposé de $a$ est $-a$. Leur somme vaut $0$ : $a + (-a) = 0$.' }
      ],
      method: {
        title: 'Règle des signes',
        steps: [
          '<strong>Distance à zéro</strong> : calculer d\'abord le résultat comme si les nombres étaient positifs. <strong>Exemple :</strong> pour $(-6) \\times (+4)$, on calcule $6 \\times 4 = 24$.',
          '<strong>Déterminer le signe</strong> : $(+) \\times (+) = (+)$, $(-) \\times (-) = (+)$, $(+) \\times (-) = (-)$, $(-) \\times (+) = (-)$. <strong>Exemple :</strong> $(-6) \\times (+4)$ → signes contraires → résultat négatif → $-24$.',
          '<strong>Suite de multiplications</strong> : compter le nombre de facteurs négatifs. Pair → positif ; impair → négatif. <strong>Exemple :</strong> $(-2) \\times (-3) \\times (-1)$ → $3$ facteurs négatifs (impair) → résultat négatif → $-6$.',
          '<strong>Division</strong> : suit les mêmes règles de signes que la multiplication. <strong>Exemple :</strong> $(-15) \\div (-3) = +5$ (deux négatifs → positif).'
        ]
      },
      example: {
        statement: 'Un sous-marin plonge de $8$ m par minute pendant $5$ minutes, puis remonte de $3$ m par minute pendant $4$ minutes. Quelle est la variation totale de profondeur ?',
        steps: [
          'Descente : $(-8) \\times 5 = -40$ m (le signe $-$ indique qu\'on descend).',
          'Remontée : $(+3) \\times 4 = +12$ m (le signe $+$ indique qu\'on remonte).',
          'Variation totale : $(-40) + (+12) = -28$ m.'
        ],
        answer: 'Le sous-marin a une variation totale de $-28$ m (il est $28$ m plus profond qu\'au départ).'
      },
      formulas: [
        '$(+a) \\times (+b) = +ab$',
        '$(-a) \\times (-b) = +ab$',
        '$(+a) \\times (-b) = -ab$',
        '$(-a) \\div (+b) = -\\dfrac{a}{b}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Droite graduée — sauts et changement de sens',
        title: 'Multiplier par un relatif : une histoire de sens',
        description: 'La longueur du saut ne change pas, mais quand on multiplie par un nombre <strong>négatif</strong>, on inverse le sens de la répétition.' +
          '<br/><br/>' +
          'Comparons $(-2) \\times 3$ et $(-2) \\times (-3)$ sur deux droites graduées superposées.',
        svg: `
          <svg viewBox="0 0 640 300" role="img" aria-labelledby="relatifs-multdiv-title relatifs-multdiv-desc">
            <title id="relatifs-multdiv-title">Deux droites graduées comparant (-2) x 3 et (-2) x (-3)</title>
            <desc id="relatifs-multdiv-desc">En haut, une droite graduée de -8 a 8 montre trois sauts de -2 vers la gauche partant de 0 et arrivant a -6, illustrant (-2) x 3 = -6. En bas, une deuxième droite graduee identique montre trois sauts de +2 vers la droite partant de 0 et arrivant a +6, illustrant (-2) x (-3) = +6 : le sens des sauts s'est inverse.</desc>

            <text class="annotation-label" x="320" y="22" text-anchor="middle">(-2) x 3 = -6</text>
            <text class="label-soft" x="320" y="40" text-anchor="middle">3 sauts de -2, vers la gauche</text>

            <line class="graph-line" x1="316" y1="90" x2="260" y2="90"></line>
            <polygon class="plot-point" points="250,90 260,84 260,96"></polygon>
            <text class="annotation-label" x="285" y="78" text-anchor="middle">-2</text>
            <line class="guide-line" x1="250" y1="96" x2="250" y2="104"></line>

            <line class="graph-line" x1="246" y1="90" x2="190" y2="90"></line>
            <polygon class="plot-point" points="180,90 190,84 190,96"></polygon>
            <text class="annotation-label" x="215" y="78" text-anchor="middle">-2</text>
            <line class="guide-line" x1="180" y1="96" x2="180" y2="104"></line>

            <line class="graph-line" x1="176" y1="90" x2="120" y2="90"></line>
            <polygon class="plot-point" points="110,90 120,84 120,96"></polygon>
            <text class="annotation-label" x="145" y="78" text-anchor="middle">-2</text>
            <line class="guide-line" x1="110" y1="96" x2="110" y2="104"></line>

            <line class="axis" x1="40" y1="110" x2="600" y2="110"></line>
            <line class="grid-line" x1="40" y1="104" x2="40" y2="116"></line>
            <line class="grid-line" x1="75" y1="104" x2="75" y2="116"></line>
            <line class="grid-line" x1="110" y1="104" x2="110" y2="116"></line>
            <line class="grid-line" x1="145" y1="104" x2="145" y2="116"></line>
            <line class="grid-line" x1="180" y1="104" x2="180" y2="116"></line>
            <line class="grid-line" x1="215" y1="104" x2="215" y2="116"></line>
            <line class="grid-line" x1="250" y1="104" x2="250" y2="116"></line>
            <line class="grid-line" x1="285" y1="104" x2="285" y2="116"></line>
            <line class="grid-line" x1="320" y1="104" x2="320" y2="116"></line>
            <line class="grid-line" x1="355" y1="104" x2="355" y2="116"></line>
            <line class="grid-line" x1="390" y1="104" x2="390" y2="116"></line>
            <line class="grid-line" x1="425" y1="104" x2="425" y2="116"></line>
            <line class="grid-line" x1="460" y1="104" x2="460" y2="116"></line>
            <line class="grid-line" x1="495" y1="104" x2="495" y2="116"></line>
            <line class="grid-line" x1="530" y1="104" x2="530" y2="116"></line>
            <line class="grid-line" x1="565" y1="104" x2="565" y2="116"></line>
            <line class="grid-line" x1="600" y1="104" x2="600" y2="116"></line>

            <text class="tick-label" x="40" y="132" text-anchor="middle">-8</text>
            <text class="tick-label" x="180" y="132" text-anchor="middle">-4</text>
            <text class="tick-label" x="250" y="132" text-anchor="middle">-2</text>
            <text class="axis-label" x="110" y="132" text-anchor="middle">-6</text>
            <text class="axis-label" x="320" y="132" text-anchor="middle">0</text>
            <text class="tick-label" x="390" y="132" text-anchor="middle">+2</text>
            <text class="tick-label" x="460" y="132" text-anchor="middle">+4</text>
            <text class="tick-label" x="530" y="132" text-anchor="middle">+6</text>
            <text class="tick-label" x="600" y="132" text-anchor="middle">+8</text>

            <circle class="plot-point-alt" cx="320" cy="110" r="5"></circle>
            <circle class="plot-point" cx="110" cy="110" r="5"></circle>

            <text class="annotation-label" x="320" y="168" text-anchor="middle">(-2) x (-3) = +6</text>
            <text class="label-soft" x="320" y="186" text-anchor="middle">3 sauts de +2, vers la droite (sens inverse !)</text>

            <line class="graph-line" x1="324" y1="236" x2="380" y2="236"></line>
            <polygon class="plot-point" points="390,236 380,230 380,242"></polygon>
            <text class="annotation-label" x="355" y="224" text-anchor="middle">+2</text>
            <line class="guide-line" x1="390" y1="242" x2="390" y2="250"></line>

            <line class="graph-line" x1="394" y1="236" x2="450" y2="236"></line>
            <polygon class="plot-point" points="460,236 450,230 450,242"></polygon>
            <text class="annotation-label" x="425" y="224" text-anchor="middle">+2</text>
            <line class="guide-line" x1="460" y1="242" x2="460" y2="250"></line>

            <line class="graph-line" x1="464" y1="236" x2="520" y2="236"></line>
            <polygon class="plot-point" points="530,236 520,230 520,242"></polygon>
            <text class="annotation-label" x="495" y="224" text-anchor="middle">+2</text>
            <line class="guide-line" x1="530" y1="242" x2="530" y2="250"></line>

            <line class="axis" x1="40" y1="256" x2="600" y2="256"></line>
            <line class="grid-line" x1="40" y1="250" x2="40" y2="262"></line>
            <line class="grid-line" x1="75" y1="250" x2="75" y2="262"></line>
            <line class="grid-line" x1="110" y1="250" x2="110" y2="262"></line>
            <line class="grid-line" x1="145" y1="250" x2="145" y2="262"></line>
            <line class="grid-line" x1="180" y1="250" x2="180" y2="262"></line>
            <line class="grid-line" x1="215" y1="250" x2="215" y2="262"></line>
            <line class="grid-line" x1="250" y1="250" x2="250" y2="262"></line>
            <line class="grid-line" x1="285" y1="250" x2="285" y2="262"></line>
            <line class="grid-line" x1="320" y1="250" x2="320" y2="262"></line>
            <line class="grid-line" x1="355" y1="250" x2="355" y2="262"></line>
            <line class="grid-line" x1="390" y1="250" x2="390" y2="262"></line>
            <line class="grid-line" x1="425" y1="250" x2="425" y2="262"></line>
            <line class="grid-line" x1="460" y1="250" x2="460" y2="262"></line>
            <line class="grid-line" x1="495" y1="250" x2="495" y2="262"></line>
            <line class="grid-line" x1="530" y1="250" x2="530" y2="262"></line>
            <line class="grid-line" x1="565" y1="250" x2="565" y2="262"></line>
            <line class="grid-line" x1="600" y1="250" x2="600" y2="262"></line>

            <text class="tick-label" x="40" y="278" text-anchor="middle">-8</text>
            <text class="tick-label" x="110" y="278" text-anchor="middle">-6</text>
            <text class="tick-label" x="180" y="278" text-anchor="middle">-4</text>
            <text class="tick-label" x="250" y="278" text-anchor="middle">-2</text>
            <text class="axis-label" x="320" y="278" text-anchor="middle">0</text>
            <text class="tick-label" x="390" y="278" text-anchor="middle">+2</text>
            <text class="tick-label" x="460" y="278" text-anchor="middle">+4</text>
            <text class="axis-label" x="530" y="278" text-anchor="middle">+6</text>
            <text class="tick-label" x="600" y="278" text-anchor="middle">+8</text>

            <circle class="plot-point-alt" cx="320" cy="256" r="5"></circle>
            <circle class="plot-point" cx="530" cy="256" r="5"></circle>
          </svg>
        `,
        notes: [
          '<strong>Ligne du haut — $(-2) \\times 3$ :</strong> on répète $3$ fois le saut de $-2$, toujours dans le même sens (vers la gauche), comme une addition répétée. On part de $0$ et on arrive à $-6$.',
          '<strong>Ligne du bas — $(-2) \\times (-3)$ :</strong> multiplier par $-3$ revient à faire l\'opposé de « $3$ sauts de $-2$ ». Le sens s\'inverse : ce sont désormais $3$ sauts de $+2$ vers la droite. On part de $0$ et on arrive à $+6$.',
          '<strong>Ce qui ne change pas :</strong> la longueur du saut reste $2$ dans les deux cas — seul le signe du deuxième facteur décide de la direction.',
          '<strong>Règle des signes retrouvée :</strong> $(-) \\times (+) = (-)$ (même sens → résultat négatif) et $(-) \\times (-) = (+)$ (sens inversé → résultat positif).'
        ],
        reading: 'Multiplier par un nombre négatif <strong>inverse le sens</strong> des sauts sur la droite graduée : $(-2) \\times 3 = -6$ (vers la gauche) devient $(-2) \\times (-3) = +6$ (mêmes sauts, mais vers la droite).',
        caption: 'Deux droites graduées superposées : en haut $(-2) \\times 3 = -6$, en bas $(-2) \\times (-3) = +6$, pour visualiser le renversement de sens.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13). Une figure par MALENTENDU :
         1. compter les facteurs negatifs plutot que les traiter deux par deux,
            ce qui rate les produits a trois facteurs ;
         2. (-5)^2 et -5^2 : la parenthese change TOUT, et c'est l'erreur la
            plus couteuse du chapitre ;
         3. la regle des signes vaut aussi pour la DIVISION, ce que les eleves
            n'appliquent pas spontanement. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Compter, pas apparier',
          title: 'C\'est le nombre de facteurs négatifs qui décide',
          description: 'La règle « moins par moins fait plus » suffit pour deux facteurs. Au-delà, elle égare : ce qu\'il faut, c\'est <strong>compter</strong> les facteurs négatifs et regarder si ce nombre est pair ou impair.',
          svg: `
            <svg viewBox="0 0 400 176" role="img" aria-labelledby="rel-compte-title rel-compte-desc">
              <title id="rel-compte-title">Signe d'un produit selon le nombre de facteurs negatifs</title>
              <desc id="rel-compte-desc">Trois produits sont compares. Le premier comporte deux facteurs negatifs, un nombre pair, et son resultat est positif. Le deuxieme en comporte trois, un nombre impair, et son resultat est negatif. Le troisieme en comporte quatre, un nombre pair, et son resultat redevient positif. Le signe du resultat ne depend donc que de la parite du nombre de facteurs negatifs.</desc>

              <text class="tick-label" x="24" y="46" text-anchor="start">(−2) × (−3)</text>
              <text class="tick-label" x="170" y="46" text-anchor="start">2 facteurs négatifs</text>
              <text class="annotation-label" x="300" y="46" text-anchor="start">pair : résultat +6</text>

              <text class="tick-label" x="24" y="90" text-anchor="start">(−2) × (−3) × (−1)</text>
              <text class="tick-label" x="170" y="90" text-anchor="start">3 facteurs négatifs</text>
              <text class="annotation-label" x="300" y="90" text-anchor="start">impair : résultat −6</text>

              <text class="tick-label" x="24" y="134" text-anchor="start">(−1) × (−2) × (−3) × (−1)</text>
              <text class="tick-label" x="170" y="134" text-anchor="start">4 facteurs négatifs</text>
              <text class="annotation-label" x="300" y="134" text-anchor="start">pair : résultat +6</text>

              <line class="grid-line" x1="24" y1="60" x2="376" y2="60"></line>
              <line class="grid-line" x1="24" y1="104" x2="376" y2="104"></line>
              <text class="tick-label" x="200" y="164" text-anchor="middle">seule la parité du compte change le signe</text>
            </svg>
          `,
          notes: [
            'La valeur du produit ne change pas d\'une ligne à l\'autre : c\'est toujours $6$. Seul le <strong>signe</strong> varie.',
            'Nombre <strong>pair</strong> de facteurs négatifs : résultat positif. Nombre <strong>impair</strong> : résultat négatif.',
            'Méthode sûre : calcule d\'abord le produit des valeurs sans les signes, puis compte les moins pour décider du signe final.'
          ],
          reading: 'Entoure les facteurs négatifs et compte-les. Tu n\'as plus qu\'une question à te poser : ce nombre est-il pair ou impair ?',
          caption: 'Le signe d\'un produit dépend uniquement de la parité du nombre de facteurs négatifs.'
        },
        {
          theme: 'maths',
          kicker: 'La parenthèse change tout',
          title: 'Moins cinq au carré n\'est pas moins cinq, au carré',
          description: 'Dans $(-5)^2$, l\'exposant porte sur $-5$ tout entier. Dans $-5^2$, il ne porte que sur le $5$, et le signe moins reste devant. Les deux écritures se ressemblent et donnent des résultats <strong>opposés</strong>.',
          svg: `
            <svg viewBox="0 0 400 172" role="img" aria-labelledby="rel-carre-title rel-carre-desc">
              <title id="rel-carre-title">Comparaison entre moins cinq entre parentheses au carre et moins cinq au carre</title>
              <desc id="rel-carre-desc">A gauche, l'ecriture avec parentheses : l'exposant porte sur le nombre negatif tout entier, ce qui revient a multiplier moins cinq par moins cinq et donne plus vingt-cinq. A droite, l'ecriture sans parentheses : l'exposant ne porte que sur le cinq, le signe moins reste en dehors, ce qui donne l'oppose de vingt-cinq, soit moins vingt-cinq. Les deux resultats sont opposes.</desc>

              <text class="annotation-label" x="100" y="46" text-anchor="middle">(−5)²</text>
              <text class="tick-label" x="100" y="76" text-anchor="middle">exposant porté par −5 entier</text>
              <text class="tick-label" x="100" y="98" text-anchor="middle">(−5) × (−5)</text>
              <text class="annotation-label" x="100" y="126" text-anchor="middle">= +25</text>

              <line class="grid-line" x1="200" y1="30" x2="200" y2="140"></line>

              <text class="annotation-label" x="300" y="46" text-anchor="middle">−5²</text>
              <text class="tick-label" x="300" y="76" text-anchor="middle">exposant porté par le 5 seul</text>
              <text class="tick-label" x="300" y="98" text-anchor="middle">opposé de 5 × 5</text>
              <text class="annotation-label" x="300" y="126" text-anchor="middle">= −25</text>

              <text class="tick-label" x="200" y="162" text-anchor="middle">deux écritures voisines, deux résultats opposés</text>
            </svg>
          `,
          notes: [
            '$(-5)^2 = (-5) \\times (-5) = +25$ : deux facteurs négatifs, nombre pair, résultat positif.',
            '$-5^2 = -(5 \\times 5) = -25$ : le signe moins n\'entre jamais dans le carré, il attend dehors.',
            'À la calculatrice, la même distinction existe : taper $-5$ puis le carré ne donne pas la même chose que taper la parenthèse.'
          ],
          reading: 'Cherche la parenthèse avant tout calcul. Si le signe moins est <strong>dedans</strong>, il est élevé au carré ; s\'il est dehors, il reste dehors.',
          caption: 'La parenthèse décide si le signe moins est élevé au carré : $(-5)^2 = 25$ mais $-5^2 = -25$.'
        },
        {
          theme: 'maths',
          kicker: 'La division aussi',
          title: 'La règle des signes vaut pour la division',
          description: 'Les élèves apprennent la règle sur la multiplication et hésitent devant un quotient. C\'est pourtant <strong>exactement la même règle</strong>, parce que diviser revient à multiplier par l\'inverse.',
          svg: `
            <svg viewBox="0 0 400 176" role="img" aria-labelledby="rel-div-title rel-div-desc">
              <title id="rel-div-title">Regle des signes appliquee a la multiplication puis a la division</title>
              <desc id="rel-div-desc">Un tableau compare quatre cas. Pour la multiplication : plus par plus donne plus, moins par moins donne plus, plus par moins donne moins. Pour la division, les memes combinaisons donnent exactement les memes signes : quinze divise par trois donne cinq, moins quinze divise par moins trois donne cinq, et moins quinze divise par trois donne moins cinq. La regle est donc identique dans les deux cas.</desc>

              <text class="annotation-label" x="110" y="40" text-anchor="middle">multiplication</text>
              <text class="annotation-label" x="290" y="40" text-anchor="middle">division</text>
              <line class="frame-line" x1="24" y1="52" x2="376" y2="52"></line>
              <line class="grid-line" x1="200" y1="30" x2="200" y2="150"></line>

              <text class="tick-label" x="110" y="78" text-anchor="middle">(+3) × (+5) = +15</text>
              <text class="tick-label" x="290" y="78" text-anchor="middle">(+15) ÷ (+3) = +5</text>

              <text class="tick-label" x="110" y="106" text-anchor="middle">(−3) × (−5) = +15</text>
              <text class="tick-label" x="290" y="106" text-anchor="middle">(−15) ÷ (−3) = +5</text>

              <text class="tick-label" x="110" y="134" text-anchor="middle">(−3) × (+5) = −15</text>
              <text class="tick-label" x="290" y="134" text-anchor="middle">(−15) ÷ (+3) = −5</text>

              <text class="tick-label" x="200" y="166" text-anchor="middle">mêmes signes au départ, mêmes signes à la fin</text>
            </svg>
          `,
          notes: [
            'Ligne par ligne, les signes de gauche et de droite <strong>coïncident</strong> : la règle ne fait aucune différence entre les deux opérations.',
            'La raison est simple : diviser par $-3$, c\'est multiplier par $-\\dfrac{1}{3}$, donc on retombe sur une multiplication.',
            'Une seule règle à retenir pour les deux opérations, et elle se résume au comptage des signes négatifs.'
          ],
          reading: 'Lis le tableau ligne par ligne plutôt que colonne par colonne : à chaque fois, le signe du résultat est le même des deux côtés.',
          caption: 'La règle des signes est identique pour la multiplication et pour la division.'
        }
      ],
      recap: [
        'Mêmes signes → produit positif ; signes contraires → produit négatif.',
        'La division suit exactement les mêmes règles de signes que la multiplication.',
        'Pour un produit de plusieurs facteurs : compter les facteurs négatifs. Pair → $+$, impair → $-$.',
        'Attention aux parenthèses : $(-3)^2 = +9$ mais $-3^2 = -9$.'
      ],
      piege: 'Piège : $(-3)^2 = (-3) \\times (-3) = +9$, mais $-3^2 = -(3 \\times 3) = -9$. Les parenthèses changent tout ! Sans parenthèses, l\'exposant s\'applique uniquement au $3$, pas au signe.'
    },
    quiz: [
      {
        q: 'Quel est le résultat de $(-4) \\times (-5)$ ?',
        options: ['$-20$', '$-9$', '$+20$', '$+9$'],
        answer: 2,
        correction: 'Deux facteurs négatifs → produit <strong>positif</strong> : $(-4) \\times (-5) = +20$.<br/><br/>$-20$ applique la règle de l\'addition (« deux négatifs donnent du négatif ») à une multiplication ; $-9$ et $+9$ additionnent $4$ et $5$ au lieu de les multiplier.'
      },
      {
        q: 'Calculer $(-2) \\times (+3) \\times (-1) \\times (-4)$.',
        options: ['$-24$', '$+24$', '$-4$', '$+4$'],
        answer: 0,
        correction: 'On compte les facteurs négatifs : $(-2)$, $(-1)$, $(-4)$, soit $3$ — un nombre <strong>impair</strong>, donc le produit est négatif.<br/><br/>Valeur : $2 \\times 3 \\times 1 \\times 4 = 24$. Résultat : $-24$.<br/><br/>$+24$ vient de « moins par moins fait plus » appliqué à deux facteurs seulement, en oubliant le troisième ; $-4$ et $+4$ sont la somme des quatre nombres, pas leur produit.'
      },
      {
        q: 'Quel est le signe de $(-2)^3$ ? Et de $(-2)^4$ ?',
        options: [
          '$(-2)^3 > 0$ et $(-2)^4 > 0$ : les exposants impairs et pairs donnent tous des positifs.',
          '$(-2)^3 < 0$ et $(-2)^4 > 0$ : exposant impair → négatif, exposant pair → positif.',
          '$(-2)^3 > 0$ et $(-2)^4 < 0$ : l\'inverse.',
          'Les deux sont négatifs car la base est négative.'
        ],
        answer: 1,
        correction: '$(-2)^3 = (-2) \\times (-2) \\times (-2) = 4 \\times (-2) = -8 < 0$ (3 facteurs négatifs = nombre impair de $-$). $(-2)^4 = (-2)^3 \\times (-2) = (-8) \\times (-2) = +16 > 0$ (4 facteurs = pair). Règle : $(-a)^n$ est positif si $n$ est pair, négatif si $n$ est impair.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = pick([-7,-6,-5,-4,-3,3,4,5,6,7]);
        const b = pick([-6,-5,-4,-3,3,4,5,6]);
        const sg = v => (v > 0 ? '+' + v : String(v)); // (+6) plutôt que (6)
        // Une fois sur trois : un quotient (la division est enseignée, elle doit être exercée).
        if (Math.random() < 0.3) {
          const q = a * b;
          const memes = (q < 0) === (b < 0);
          return {
            statement: `🧮 Calcule $(${sg(q)}) \\div (${sg(b)})$.`,
            answer: a,
            tolerance: 0,
            unit: '',
            hint: `La division suit la même règle des signes que la multiplication : ${memes ? 'mêmes signes → quotient positif' : 'signes contraires → quotient négatif'}.`,
            solution: [
              `Sans les signes : $${Math.abs(q)} \\div ${Math.abs(b)} = ${Math.abs(a)}$.`,
              `Signe : ${memes ? 'mêmes signes → positif' : 'signes contraires → négatif'}.`,
              `Résultat : $${a}$. Contrôle : $(${sg(a)}) \\times (${sg(b)}) = ${q}$.`
            ]
          };
        }
        const result = a * b;
        /* Une durée ne peut pas être négative : quand b < 0, le contexte
           remonte dans le passé (« il y a n heures »), ce qui est exactement
           le sens d'une multiplication par un nombre négatif. */
        const n = Math.abs(b), va = Math.abs(a), futur = b > 0;
        const calc = ` <br/><em>Calcul : $(${sg(a)}) \\times (${sg(b)})$</em>`;
        const scenario = pick([
          { emoji: '🧮', statement: `Calcule $(${sg(a)}) \\times (${sg(b)})$.` },
          { emoji: '🌡️', statement: `La température varie de $(${sg(a)})$ °C par heure. ${futur ? `Quelle sera la variation totale dans $${n}$ heures ?` : `Il y a $${n}$ heures, de combien la température différait-elle de celle de maintenant ? (Nombre relatif : positif s'il faisait plus chaud.) Remonter de $${n}$ heures, c'est multiplier par $(${sg(b)})$.`}` + calc },
          { emoji: '🤿', statement: `Un plongeur ${a < 0 ? 'descend' : 'remonte'} de $${va}$ m par minute. ${futur ? `Quelle sera la variation de sa position verticale dans $${n}$ minutes ? (Nombre relatif : positif s'il monte.)` : `Il y a $${n}$ minutes, où était-il par rapport à sa position actuelle ? (Nombre relatif : positif s'il était plus haut.)`}` + calc },
          { emoji: '💰', statement: `Un compte varie de $(${sg(a)})$ € par jour. ${futur ? `Quelle sera la variation totale dans $${n}$ jours ?` : `Il y a $${n}$ jours, de combien le solde différait-il du solde actuel ? (Nombre relatif : positif s'il était plus élevé.)`}` + calc },
          { emoji: '🚰', statement: `Un réservoir ${a < 0 ? 'perd' : 'gagne'} $${va}$ litres par minute. ${futur ? `Quelle sera la variation de volume dans $${n}$ minutes ?` : `Il y a $${n}$ minutes, de combien le volume différait-il du volume actuel ? (Nombre relatif : positif s'il y avait plus d'eau.)`}` + calc }
        ]);
        return {
          statement: `${scenario.emoji} ${scenario.statement}`,
          answer: result,
          tolerance: 0,
          unit: '',
          hint: `Règle des signes : les signes sont ${a < 0 && b < 0 ? 'identiques (deux négatifs) → résultat positif' : a > 0 && b > 0 ? 'identiques (deux positifs) → résultat positif' : 'contraires → résultat négatif'}.`,
          solution: [
            `Sans les signes : $${Math.abs(a)} \\times ${Math.abs(b)} = ${Math.abs(result)}$.`,
            `Signe : ${(a < 0) === (b < 0) ? 'mêmes signes → positif' : 'signes contraires → négatif'}.`,
            `Résultat : $${result}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'La température dans une ville chute de $3°C$ par heure pendant $5$ heures consécutives, puis remonte de $2°C$ par heure pendant $3$ heures.',
      tasks: [
        'Calculer la variation totale de température durant la baisse.',
        'Calculer la variation totale durant la remontée.',
        'Si la température initiale était $4°C$, quelle est la température finale ?'
      ],
      solutions: [
        'Baisse : $(-3) \\times 5 = -15°C$.',
        'Remontée : $(+2) \\times 3 = +6°C$.',
        'Température finale : $4 + (-15) + 6 = -5°C$.'
      ],
      finalAnswer: 'La température finale est $-5°C$.'
    },

    evaluation: {
      title: 'Évaluation — Relatifs : Multiplication et Division',
      duration: '25 min',
      questions: [
        {
          statement: 'Calculer $(-7) \\times (+8)$.',
          type: 'numeric',
          answer: -56,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Signes contraires → résultat négatif. $7 \\times 8 = 56$. Donc $(-7) \\times (+8) = -56$.'
        },
        {
          statement: 'Calculer $(-3) \\times (-4) \\times (-2)$.',
          type: 'numeric',
          answer: -24,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On compte les facteurs négatifs : $3$ (nombre impair) → résultat négatif. Valeur : $3 \\times 4 \\times 2 = 24$. Résultat : $-24$.'
        },
        {
          statement: 'Quelle est la différence entre $(-5)^2$ et $-5^2$ ?',
          type: 'multiple-choice',
          options: [
            'Les deux valent $25$',
            'Les deux valent $-25$',
            '$(-5)^2 = 25$ et $-5^2 = -25$',
            '$(-5)^2 = -25$ et $-5^2 = 25$'
          ],
          answer: 2,
          points: 2,
          correction: '$(-5)^2 = (-5) \\times (-5) = 25$ (le $-$ est dans la base, élevé au carré). $-5^2 = -(5 \\times 5) = -25$ (l\'exposant s\'applique uniquement au $5$, puis on applique le signe $-$). Les parenthèses changent tout !'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-13 pour mobiliser « chercher ». L'ancien
             énoncé était un quotient à poser, $\dfrac{-36}{+9}$. Ici l'énoncé
             ne parle que d'un PRODUIT : l'élève doit comprendre de lui-même
             qu'un facteur manquant se retrouve par une division. */
          statement: 'Un produit de deux facteurs vaut $-72$. L\'un des deux facteurs est $+9$. Quel est l\'autre facteur ?',
          type: 'numeric',
          answer: -8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'L\'énoncé parle d\'un produit, mais c\'est une <strong>division</strong> qui retrouve un facteur manquant : si $9 \\times a = -72$, alors $a = \\dfrac{-72}{9}$.<br/><br/>' +
            'Signes contraires, donc résultat négatif, et $72 \\div 9 = 8$ : le facteur cherché vaut $-8$.<br/><br/>' +
            'Contrôle indispensable : $(+9) \\times (-8) = -72$. On retombe bien sur le produit donné.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-13 pour mobiliser « communiquer ». L'ancien
             énoncé (un sous-marin) était un calcul de variation en situation.
             Celui-ci demande de distinguer une erreur de SIGNE d'une erreur de
             VALEUR, et de nommer la règle mal appliquée. */
          statement: 'Pour calculer $(-2) \\times (-3) \\times (-5)$, Tom écrit : « moins par moins donne plus, donc le résultat est positif ; $2 \\times 3 \\times 5 = 30$, la réponse est $+30$. » Quelle explication corrige le mieux son raisonnement ?',
          type: 'multiple-choice',
          options: [
            'Son produit de valeurs est faux : $2 \\times 3 \\times 5$ ne vaut pas $30$.',
            'Il a appliqué la règle à deux facteurs alors qu\'il y en a trois : c\'est le <strong>nombre</strong> de facteurs négatifs qui décide, et $3$ est impair, donc le résultat est négatif, $-30$.',
            'La règle « moins par moins donne plus » est fausse : un produit de nombres négatifs est toujours négatif.',
            'Il aurait dû additionner les trois nombres avant de s\'occuper du signe.'
          ],
          answer: 1,
          points: 2,
          correction: 'Le produit des valeurs est juste : $2 \\times 3 \\times 5 = 30$. C\'est le <strong>signe</strong> qui est faux.<br/><br/>' +
            'Tom a appliqué « moins par moins donne plus » aux deux premiers facteurs et s\'est arrêté là. Avec trois facteurs négatifs, il faut compter : un nombre <strong>pair</strong> de facteurs négatifs donne un résultat positif, un nombre <strong>impair</strong> un résultat négatif. Ici $3$ facteurs négatifs, donc $-30$.<br/><br/>' +
            'Déclarer fausse la règle « moins par moins donne plus » ne tient pas — $(-2) \\times (-3) = +6$ est bien positif — et additionner les trois nombres confond produit et somme.'
        }
      ]
    }
  }
);
