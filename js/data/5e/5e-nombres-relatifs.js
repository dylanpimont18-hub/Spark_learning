/* =========================================================
   Spark Learning – data/5e/5e-nombres-relatifs.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-nombres-relatifs',
    level: 1, subject: 'maths',
    icon: '±',
    title: 'Nombres relatifs',
    subtitle: 'Addition, soustraction, repérage',
    keywords: ['Positif', 'Négatif', 'Valeur absolue', 'Opposé', 'Droite graduée'],
    physics: 'Coordonnées de vecteurs, températures, altitudes, potentiel électrique',

    cours: {
      /* DECOUVRIR REECRIT LE 2026-09-13. L'intro ouvrait sur « Les nombres
         relatifs etendent la droite numerique » : une definition, a laquelle
         l'eleve n'a rien a repondre. Test du cahier des charges : si l'on peut
         repondre a la question d'ouverture SANS la notion du chapitre, la
         question est mal choisie. Ici l'ecart entre deux temperatures dont
         l'une est negative n'est calculable par AUCUN outil de sixieme — la
         soustraction d'entiers positifs donne 3, ce qui est faux. */
      intro: 'Ce matin il fait $-4$ °C ; cet après-midi, $7$ °C. De combien la température a-t-elle monté ?<br/><br/>' +
        'La réponse n\'est ni $3$ ni $7$ : il faut d\'abord remonter les $4$ degrés qui séparent $-4$ de zéro, puis les $7$ suivants — soit $11$ degrés en tout. Aucun outil de sixième ne donne ce résultat, parce que les nombres s\'y arrêtaient à zéro. Il en faut de nouveaux.<br/><br/>' +
        'Les nombres relatifs étendent la droite numérique dans les deux sens. Un nombre négatif n\'est pas « moins que zéro » de façon mystérieuse : c\'est une <strong>direction opposée</strong>, un manque, un écart vers le bas.<br/><br/>' +
        'En physique, le signe porte une information physique : $-5$ N signifie une force vers la gauche si l\'on a choisi la droite comme sens positif. $-120$ m signifie 120 m sous la surface de la mer.<br/><br/>' +
        '<strong>Règle d\'or de la soustraction :</strong> $a - b = a + (-b)$ — soustraire un nombre revient à ajouter son opposé. Ainsi $3 - (-5) = 3 + 5 = 8$ : soustraire un négatif augmente la valeur.<br/><br/>' +
        'La <strong>valeur absolue</strong> $|a|$ mesure la distance à zéro, indépendamment du signe : $|-7| = |+7| = 7$. La distance entre deux points $A$ et $B$ sur une droite graduée vaut $|x_B - x_A|$.',
      definitions: [
        { term: 'Nombre relatif', def: 'Nombre muni d\'un signe : positif ($+$) ou négatif ($-$). Zéro n\'est ni positif ni négatif.' },
        { term: 'Opposé', def: 'L\'opposé de $a$ est $-a$. Leur somme est nulle : $a + (-a) = 0$. L\'opposé de $-5$ est $+5$.' },
        { term: 'Valeur absolue', def: 'Distance d\'un nombre à zéro, notée $|a|$. Toujours positive : $|-7| = |+7| = 7$.' },
        { term: 'Droite graduée', def: 'Droite munie d\'une origine $O$, d\'un sens positif et d\'une unité. Chaque point correspond à un unique nombre relatif.' }
      ],
      example: {
        statement: 'Calculer $(-8) - (-3) + (+5)$.',
        steps: [
          'Transformer la soustraction : $(-8) - (-3) = (-8) + (+3)$.',
          'Calculer étape par étape : $(-8) + (+3) = -5$.',
          'Puis : $-5 + (+5) = 0$.'
        ],
        answer: '$0$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Droite graduée',
        title: 'Suivre des déplacements sur une droite graduée : la profondeur d’un sous-marin',
        description: 'Le sous-marin part de $-120\\,\\text{m}$, remonte de $45\\,\\text{m}$ puis redescend de $80\\,\\text{m}$. Chaque déplacement est un saut sur la droite graduée : vers la droite pour une remontée, vers la gauche pour une descente.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="relatifs-graph-title relatifs-graph-desc">
            <title id="relatifs-graph-title">Droite graduée : profondeur d'un sous-marin</title>
            <desc id="relatifs-graph-desc">Droite graduée horizontale allant de moins 160 à 0. Le sous-marin part de moins 120, remonte de 45 jusqu'à moins 75, puis descend de 80 jusqu'à moins 155.</desc>
            <text class="axis-label" x="130" y="26">Profondeur (m)</text>
            <line class="axis" x1="15" y1="140" x2="335" y2="140"></line>
            <line class="grid-line" x1="30" y1="136" x2="30" y2="144"></line>
            <line class="grid-line" x1="65" y1="136" x2="65" y2="144"></line>
            <line class="grid-line" x1="135" y1="136" x2="135" y2="144"></line>
            <line class="grid-line" x1="170" y1="136" x2="170" y2="144"></line>
            <line class="grid-line" x1="205" y1="136" x2="205" y2="144"></line>
            <line class="grid-line" x1="240" y1="136" x2="240" y2="144"></line>
            <line class="grid-line" x1="275" y1="136" x2="275" y2="144"></line>
            <text class="tick-label" x="20" y="156">-160</text>
            <text class="tick-label" x="55" y="156">-140</text>
            <text class="tick-label" x="125" y="156">-100</text>
            <text class="tick-label" x="161" y="156">-80</text>
            <text class="tick-label" x="196" y="156">-60</text>
            <text class="tick-label" x="231" y="156">-40</text>
            <text class="tick-label" x="266" y="156">-20</text>
            <line class="frame-line" x1="38.75" y1="122" x2="38.75" y2="158"></line>
            <line class="frame-line" x1="100" y1="122" x2="100" y2="158"></line>
            <line class="frame-line" x1="178.75" y1="122" x2="178.75" y2="158"></line>
            <line class="frame-line" x1="310" y1="122" x2="310" y2="158"></line>
            <text class="annotation-label" x="27" y="112">-155</text>
            <text class="annotation-label" x="90" y="112">-120</text>
            <text class="annotation-label" x="169" y="112">-75</text>
            <text class="annotation-label" x="306" y="112">0</text>
            <path class="curve-main" d="M100,140 Q139.375,95 178.75,140" fill="none"></path>
            <polygon class="plot-point" points="174,131 183,131 178.75,140"></polygon>
            <text class="annotation-label" x="90" y="80">+45 m (remonte)</text>
            <path class="guide-line" d="M178.75,140 Q108.75,185 38.75,140" fill="none"></path>
            <polygon class="plot-point-alt" points="34,149 43,149 38.75,140"></polygon>
            <text class="annotation-label" x="60" y="207">-80 m (descend)</text>
            <circle class="plot-point-alt" cx="100" cy="140" r="6"></circle>
            <circle class="plot-point-alt" cx="178.75" cy="140" r="6"></circle>
            <circle class="plot-point" cx="38.75" cy="140" r="6"></circle>
          </svg>
        `,
        notes: [
          'Position de départ : le sous-marin est à $-120\\,\\text{m}$ (120 m sous la surface, repérée par 0).',
          'Il remonte de $45\\,\\text{m}$ : $-120 + 45 = -75$. Sur la droite, ce déplacement est un saut vers la droite (vers les valeurs plus grandes).',
          'Il descend ensuite de $80\\,\\text{m}$ : $-75 - 80 = -155$. Ce saut se lit vers la gauche (vers les valeurs plus petites).',
          'Déplacement net entre le départ et l’arrivée : $-155 - (-120) = -35\\,\\text{m}$ (le sous-marin termine 35 m plus bas qu’au départ).'
        ],
        reading: 'Sur une droite graduée, additionner un nombre positif fait avancer vers la droite ; soustraire un nombre positif (ou additionner un négatif) fait reculer vers la gauche.',
        caption: 'Droite graduée horizontale représentant la profondeur d’un sous-marin : départ à $-120\\,\\text{m}$, remontée de $45\\,\\text{m}$ jusqu’à $-75\\,\\text{m}$, puis descente de $80\\,\\text{m}$ jusqu’à $-155\\,\\text{m}$.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13) — une figure par MALENTENDU.
         Un chapitre de calcul n'a pas moins besoin de figures qu'un chapitre de
         geometrie : ses malentendus sont simplement d'un autre ordre. Les trois
         retenus se lisent TOUS sur la droite graduee, qui est le seul objet
         capable de les trancher sans passer par une regle a retenir :
           1. l'ordre s'inverse chez les negatifs ($-8 < -3$ alors que $8 > 3$) ;
           2. soustraire, c'est ajouter l'oppose — un DEPLACEMENT, pas un signe
              a manipuler ;
           3. deux nombres opposes sont a egale distance de zero, ce qui donne
              sa raison d'etre a la valeur absolue.

         Toutes les positions sont CALCULEES a partir d'une echelle explicite,
         jamais posees a l'oeil. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'L\'ordre s\'inverse',
          title: 'Chez les négatifs, le plus grand nombre est le plus petit',
          description: '$8$ est plus grand que $3$, mais $-8$ est plus <strong>petit</strong> que $-3$. Aucune règle à retenir : sur la droite graduée, le plus petit est toujours celui qui est <strong>le plus à gauche</strong>, et $-8$ y est bien à gauche de $-3$.',
          svg: `
            <svg viewBox="0 0 400 194" role="img" aria-labelledby="rel-ordre-title rel-ordre-desc">
              <title id="rel-ordre-title">Comparaison de deux nombres positifs et de leurs opposes sur la droite graduee</title>
              <desc id="rel-ordre-desc">Une droite graduee de moins 10 a 10 est tracee. Les nombres 3 et 8 sont marques a droite de zero : 8 est plus a droite que 3, il est donc plus grand. Leurs opposes moins 3 et moins 8 sont marques a gauche de zero : moins 8 est plus a gauche que moins 3, il est donc plus petit. En passant aux opposes, l'ordre s'est donc inverse. Deux fleches, une de chaque cote, indiquent le sens de lecture : vers la droite les nombres augmentent, vers la gauche ils diminuent.</desc>

              <!-- Droite de -10 a 10, de x=30 a x=370 : 17 unites d'ecran par
                   unite. Zero est donc a x = 30 + 17 x 10 = 200. Positions
                   CALCULEES : -8 -> 64, -3 -> 149, 3 -> 251, 8 -> 336. -->
              <line class="axis" x1="24" y1="104" x2="382" y2="104"></line>
              <path class="axis" fill="none" d="M374 98 L382 104 L374 110"></path>

              <line class="frame-line" x1="200" y1="98" x2="200" y2="110"></line>
              <text class="tick-label" x="200" y="126" text-anchor="middle">0</text>

              <circle class="plot-point" cx="336" cy="104" r="5"></circle>
              <text class="annotation-label" x="336" y="88" text-anchor="middle">8</text>
              <circle class="plot-point" cx="251" cy="104" r="5"></circle>
              <text class="annotation-label" x="251" y="88" text-anchor="middle">3</text>
              <circle class="plot-point-alt" cx="64" cy="104" r="5"></circle>
              <text class="annotation-label" x="64" y="88" text-anchor="middle">−8</text>
              <circle class="plot-point-alt" cx="149" cy="104" r="5"></circle>
              <text class="annotation-label" x="149" y="88" text-anchor="middle">−3</text>

              <text class="tick-label" x="293" y="144" text-anchor="middle">8 &gt; 3</text>
              <text class="tick-label" x="106" y="144" text-anchor="middle">−8 &lt; −3</text>

              <text class="label-soft" x="200" y="170" text-anchor="middle">le plus petit est toujours le plus à gauche</text>
              <text class="tick-label" x="200" y="188" text-anchor="middle">passer aux opposés retourne la comparaison</text>
            </svg>
          `,
          notes: [
            'À droite de zéro, plus le nombre est grand, plus il est loin : $8 > 3$.',
            'À gauche de zéro, c\'est l\'inverse : $-8$ est plus loin, donc plus <strong>bas</strong> dans l\'ordre, et $-8 < -3$.',
            'La comparaison ne se joue jamais sur le nombre <strong>sans son signe</strong> : elle se lit sur la position, et une seule règle suffit — le plus à gauche est le plus petit.'
          ],
          reading: 'Place les deux nombres sur la droite avant de comparer, même de tête. Un thermomètre dit la même chose : $-8$ degrés est plus froid que $-3$ degrés, alors que $8$ est plus chaud que $3$.',
          caption: 'Deux nombres positifs et leurs opposés sur la droite graduée : $8 > 3$ mais $-8 < -3$.'
        },
        {
          theme: 'maths',
          kicker: 'Soustraire, c\'est ajouter l\'opposé',
          title: 'Retirer un négatif fait avancer vers la droite',
          description: '$5 - (-3)$ donne $8$, et cela déroute : on soustrait, et pourtant le résultat <strong>augmente</strong>. Sur la droite, tout devient clair : soustraire, c\'est parcourir le déplacement <strong>en sens inverse</strong>. Inverser un déplacement vers la gauche, c\'est aller vers la droite.',
          svg: `
            <svg viewBox="0 0 400 206" role="img" aria-labelledby="rel-soustr-title rel-soustr-desc">
              <title id="rel-soustr-title">Retirer moins trois revient a avancer de trois vers la droite</title>
              <desc id="rel-soustr-desc">Sur une droite graduee de 0 a 10, deux calculs sont compares. En haut, ajouter moins trois a partir de 5 : la fleche part de 5 et va vers la gauche jusqu'a 2. En bas, retirer moins trois a partir de 5 : la fleche part de 5 et va vers la droite jusqu'a 8, car retirer un deplacement revient a le parcourir en sens inverse. Les deux fleches ont exactement la meme longueur, trois unites, et ne different que par leur sens. Les deux calculs partent du meme point 5 et sont traces sur deux droites identiques.</desc>

              <!-- Deux droites IDENTIQUES, de 0 a 10, de x=40 a x=360 :
                   32 unites d'ecran par unite. 5 -> 200, 2 -> 104, 8 -> 296. -->
              <text class="tick-label" x="200" y="24" text-anchor="middle">ajouter −3 : on recule</text>
              <line class="axis" x1="34" y1="56" x2="366" y2="56"></line>
              <line class="frame-line" x1="200" y1="50" x2="200" y2="62"></line>
              <text class="tick-label" x="200" y="76" text-anchor="middle">5</text>
              <path class="curve-main" fill="none" d="M200 42 L104 42"></path>
              <path class="curve-main" fill="none" d="M112 36 L104 42 L112 48"></path>
              <circle class="plot-point" cx="104" cy="56" r="5"></circle>
              <text class="annotation-label" x="104" y="76" text-anchor="middle">2</text>
              <text class="tick-label" x="152" y="32" text-anchor="middle">3 vers la gauche</text>

              <text class="tick-label" x="200" y="118" text-anchor="middle">retirer −3 : on avance</text>
              <line class="axis" x1="34" y1="150" x2="366" y2="150"></line>
              <line class="frame-line" x1="200" y1="144" x2="200" y2="156"></line>
              <text class="tick-label" x="200" y="170" text-anchor="middle">5</text>
              <path class="curve-main" fill="none" d="M200 136 L296 136"></path>
              <path class="curve-main" fill="none" d="M288 130 L296 136 L288 142"></path>
              <circle class="plot-point" cx="296" cy="150" r="5"></circle>
              <text class="annotation-label" x="296" y="170" text-anchor="middle">8</text>
              <text class="tick-label" x="248" y="126" text-anchor="middle">3 vers la droite</text>

              <text class="label-soft" x="200" y="196" text-anchor="middle">même longueur de trajet, sens opposé</text>
            </svg>
          `,
          notes: [
            '$5 + (-3) = 2$ : ajouter $-3$, c\'est se déplacer de $3$ vers la <strong>gauche</strong>.',
            '$5 - (-3) = 5 + 3 = 8$ : retirer ce même déplacement, c\'est le parcourir <strong>en sens inverse</strong>, donc vers la droite.',
            'Les deux flèches ont la même longueur, $3$ unités : seul leur sens change. C\'est tout ce que dit la règle « soustraire revient à ajouter l\'opposé ».'
          ],
          reading: 'Ne cherche pas à appliquer une règle de signes de mémoire : demande-toi dans quel sens tu te déplaces. Ajouter un négatif recule, retirer un négatif avance.',
          caption: 'Deux déplacements de même longueur et de sens opposés : $5 + (-3) = 2$ et $5 - (-3) = 8$.'
        },
        {
          theme: 'maths',
          kicker: 'À égale distance de zéro',
          title: 'Deux opposés, une seule distance',
          description: '$-6$ et $6$ sont <strong>aussi loin</strong> de zéro l\'un que l\'autre : c\'est ce que mesure la <strong>distance à zéro</strong>. Elle ne remplace pas le nombre, elle en oublie volontairement le signe — d\'où le fait que deux nombres différents puissent partager la même.',
          svg: `
            <svg viewBox="0 0 400 176" role="img" aria-labelledby="rel-dist-title rel-dist-desc">
              <title id="rel-dist-title">Deux nombres opposes a egale distance de zero</title>
              <desc id="rel-dist-desc">Sur une droite graduee, les nombres moins 6 et 6 sont places de part et d'autre de zero. Deux accolades de longueur strictement identique relient chacun d'eux a zero, ce qui montre qu'ils sont a la meme distance, six unites. Les deux nombres sont pourtant differents : l'un est negatif, l'autre positif. La distance a zero est donc la meme pour un nombre et pour son oppose, et elle vaut toujours six ici.</desc>

              <!-- Droite de -8 a 8, de x=40 a x=360 : 20 unites par unite.
                   Zero -> 200 ; -6 -> 80 ; 6 -> 320. Les deux accolades font
                   donc EXACTEMENT 120 unites chacune, ce qui est le propos. -->
              <line class="axis" x1="34" y1="94" x2="366" y2="94"></line>
              <line class="frame-line" x1="200" y1="88" x2="200" y2="100"></line>
              <text class="tick-label" x="200" y="114" text-anchor="middle">0</text>

              <circle class="plot-point" cx="80" cy="94" r="5"></circle>
              <text class="annotation-label" x="80" y="114" text-anchor="middle">−6</text>
              <circle class="plot-point" cx="320" cy="94" r="5"></circle>
              <text class="annotation-label" x="320" y="114" text-anchor="middle">6</text>

              <path class="guide-line" fill="none" d="M80 76 L80 62 L200 62 L200 76"></path>
              <text class="tick-label" x="140" y="54" text-anchor="middle">6 unités</text>
              <path class="guide-line" fill="none" d="M200 76 L200 62 L320 62 L320 76"></path>
              <text class="tick-label" x="260" y="54" text-anchor="middle">6 unités</text>

              <text class="annotation-label" x="200" y="30" text-anchor="middle">même distance à zéro</text>
              <text class="label-soft" x="200" y="146" text-anchor="middle">la distance oublie le signe, elle ne le supprime pas</text>
              <text class="tick-label" x="200" y="166" text-anchor="middle">−6 et 6 restent deux nombres différents</text>
            </svg>
          `,
          notes: [
            '$-6$ et $6$ sont les <strong>opposés</strong> l\'un de l\'autre : leur somme vaut $0$.',
            'Leur distance à zéro est la même, $6$ : les deux accolades du dessin ont exactement la même longueur.',
            'Cette distance sert à mesurer un écart, jamais à comparer : $-6$ reste plus petit que $6$, même si les deux sont « à $6$ de zéro ».'
          ],
          reading: 'Mesure les deux accolades avec ta règle : elles sont identiques. C\'est utile pour dire de combien on s\'écarte d\'un repère — une température de $-6$ degrés s\'écarte autant de zéro qu\'une de $6$ degrés, mais l\'une gèle et l\'autre non.',
          caption: '$-6$ et $6$, opposés l\'un de l\'autre, à la même distance de zéro ($6$ unités).'
        }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Addition de relatifs</strong> : si même signe → additionner les valeurs absolues et garder le signe. Si signes opposés → soustraire les valeurs absolues et prendre le signe du plus grand.',
          '<strong>Soustraction</strong> : transformer en addition de l\'opposé. $a - b = a + (-b)$. Ex : $3 - (-5) = 3 + 5 = 8$.',
          '<strong>Valeur absolue $|a|$</strong> = distance à zéro, toujours positive. $|-7| = 7$, $|+7| = 7$.'
        ]
      },
      formulas: [
        '$a - b = a + (-b)$',
        '$-(-a) = a$',
        '$|a| \\geq 0$ et $|-a| = |a|$',
        '$|a - b|$ = distance entre $a$ et $b$ sur la droite graduée'
      ],
      recap: [
        'Soustraire revient à additionner l\'opposé : $a - b = a + (-b)$.',
        'Même signe → on additionne les valeurs absolues. Signes opposés → on soustrait.',
        'La valeur absolue donne la distance à zéro (toujours positive).',
        '$-(a - b) = -a + b$ : le signe $-$ change TOUS les signes dans la parenthèse.'
      ],
      piege: 'Le signe $-$ devant une parenthèse change TOUS les signes à l\'intérieur : $-(a - b) = -a + b$. Piège fréquent : écrire $-(3 - 5) = -3 - 5$ en oubliant de changer le second signe. La bonne méthode donne $-3 + 5 = 2$.'
    },

    quiz: [
      {
        q: 'Calculer $(-8) + (+3)$.',
        options: ['$+11$', '$-11$', '$-5$', '$+5$'],
        answer: 2,
        correction: 'Signes opposés : on soustrait les valeurs absolues $8 - 3 = 5$ et on garde le signe du plus grand (le $-8$). Résultat : $-5$.'
      },
      {
        q: 'Calculer $(-4) - (-9)$.',
        options: ['$-13$', '$-5$', '$+5$', '$+13$'],
        answer: 2,
        correction: '$(-4) - (-9) = (-4) + (+9) = +5$. Soustraire un négatif revient à additionner son opposé.'
      },
      {
        q: 'Un élève calcule $-(3 - 5)$ et trouve $-3 - 5 = -8$. Quelle est son erreur ?',
        options: [
          'Il a raison : $-(3-5) = -3-5 = -8$.',
          'Le signe $-$ devant la parenthèse change TOUS les signes à l\'intérieur : $-(3-5) = -3+5 = 2$.',
          'Il fallait calculer $3 - 5 = -2$ d\'abord, donc $-(-2) = 2$, mais $-2$ est la bonne réponse.',
          'Le résultat est $-(3-5) = -3+5 = -8$.'
        ],
        answer: 1,
        correction: 'Le signe $-$ devant une parenthèse distribue sur tous les termes à l\'intérieur : $-(3 - 5) = -3 + (+5) = 2$. Ou plus simplement : calcule d\'abord l\'intérieur : $3 - 5 = -2$, puis applique le $-$ devant : $-(-2) = +2$.'
      }
    ],

    /* CORRECTIONS DU 2026-09-13, quatre defauts mesures sur 3 000 tirages.

       Ils etaient invisibles jusqu'ici parce que l'edition eleve n'imprimait
       qu'une poignee d'enonces ; en elargir la banque les a fait remonter, ce
       qui est exactement l'effet annonce par le cahier des charges. Aucun n'est
       une faute de calcul : ce sont des enonces qui ne veulent pas dire ce
       qu'ils calculent.

       1. VARIATION NULLE (32 tirages sur 3 000). « La temperature a augmente de
          0 °C », « l'ascenseur monte de 0 etages » : un enonce vide de sens, et
          un exercice qui n'apprend rien. `b` ne peut plus valoir 0 dans les
          situations de variation.

       2. « ECART » NEGATIF (140 tirages). « Quel est l'ecart de profondeur entre
          les deux ? » pour une reponse de -17 : un ecart est une distance, donc
          positif. L'enonce demandait un ecart et corrigeait une difference
          signee. On demande desormais explicitement la difference ORIENTEE
          (« de A a B »), ce qui rend le signe attendu, ou bien la distance, et
          alors la reponse est positive.

       3. « DIFFERENCE » NEGATIVE (276 tirages). Meme faute sur les temperatures
          et les comptes : « la difference entre ce matin et la nuit derniere »
          valait -19. Le sens de lecture est maintenant dit dans l'enonce.

       4. PROFONDEUR ECRITE POSITIVE (299 tirages). « Un sous-marin se trouve a
          20 m de profondeur » : en relatifs, une profondeur s'ecrit NEGATIVE,
          et c'est tout l'interet du chapitre. Le mot « profondeur » portait
          deja le signe, si bien que l'enonce doublait le signe ou le perdait.
          Les situations sous-marines parlent desormais d'ALTITUDE, negative sous
          la surface, ce qui est l'ecriture du chapitre et ne double plus le
          signe. On ne derive aucune valeur : l'enonce affiche le meme nombre
          que la correction, ce qui est la premiere chose a garantir. */
    exercice: {
      type: 'numeric',
      /* BANQUE ELARGIE LE 2026-09-13.

         Le generateur ne portait que DEUX taches (ajouter, soustraire) pour
         cinq decors, si bien que la banque du professeur imprimait la meme
         question 21 fois de suite sous des habillages differents. Mesure du
         jour, avant/apres : 2 taches -> 4, la repetition maximale par tache
         tombant de 21 a 12.

         Les deux taches ajoutees prennent le chapitre par des entrees que
         l'evaluation mobilise et que rien n'entrainait :
           - COMPARER deux relatifs, ou l'ordre s'inverse chez les negatifs
             (l'erreur numero un du chapitre, et l'objet d'un des schemas) ;
           - lire une DISTANCE A ZERO, qui fonde la notion d'ecart et que le
             cours enonce sans la faire travailler. */
      generate() {
        const tache = pick(['calcul', 'calcul', 'calcul', 'comparer', 'distance']);

        /* TACHE 3 — comparer. Reponse 1 / 0, format du projet pour une question
           a trancher. On evite l'egalite, qui ne trancherait rien. */
        if (tache === 'comparer') {
          let p = rand(-25, 25), q = rand(-25, 25);
          if (p === q) q = p + pick([-1, 1]) * rand(1, 9);
          const ctx = pick([
            { intro: `Deux villes relèvent leur température du matin : $${p}$ °C à Oslo et $${q}$ °C à Helsinki.`, quoi: `Fait-il plus chaud à Oslo` },
            { intro: `Deux plongeurs sont aux altitudes $${p}$ m et $${q}$ m.`, quoi: `Le premier est-il plus haut que le second` },
            { intro: `Deux comptes affichent $${p}$ € et $${q}$ €.`, quoi: `Le premier est-il mieux garni que le second` }
          ]);
          return {
            statement: `${ctx.intro}<br/><br/>${ctx.quoi} ? Réponds par $1$ pour oui, $0$ pour non.`,
            answer: p > q ? 1 : 0,
            tolerance: 0,
            unit: '',
            hint: `Ne compare pas les nombres sans leur signe : chez les négatifs, l'ordre s'inverse.<br/><br/>Place-les mentalement sur une droite graduée — le plus grand est celui qui se trouve <strong>le plus à droite</strong>.`,
            solution: [
              `Sur une droite graduée, le plus grand est toujours celui qui est le plus à droite.`,
              `On place $${p}$ et $${q}$ : ${p > q ? `$${p}$ est à droite de $${q}$` : `$${p}$ est à gauche de $${q}$`}.`,
              p > q
                ? `Donc $${p} > ${q}$ : la réponse est oui.`
                : `Donc $${p} < ${q}$ : la réponse est non.`,
              `Attention au réflexe des entiers positifs : $-25$ est plus petit que $-3$, bien que $25$ soit plus grand que $3$.`
            ]
          };
        }

        /* TACHE 4 — distance a zero. Le cours la definit, aucun exercice ne la
           demandait. On la formule comme un ECART a un repere, qui est son
           usage reel, plutot que comme une notation a appliquer. */
        if (tache === 'distance') {
          const v = pick([-1, 1]) * rand(2, 30);
          const ctx = pick([
            { intro: `Un thermomètre indique $${v}$ °C.`, quoi: `De combien de degrés cette température s'écarte-t-elle de $0$ °C` },
            { intro: `Un point se trouve à l'altitude $${v}$ m.`, quoi: `À quelle distance du niveau de la mer se trouve-t-il, en mètres` },
            { intro: `Un compte affiche un solde de $${v}$ €.`, quoi: `De combien d'euros ce solde s'écarte-t-il de l'équilibre, c'est-à-dire de $0$ €` }
          ]);
          return {
            statement: `${ctx.intro}<br/><br/>${ctx.quoi} ?`,
            answer: Math.abs(v),
            tolerance: 0,
            unit: '',
            hint: `Une distance ne peut pas être négative : c'est une longueur, et elle se lit sur la droite graduée entre le nombre et zéro.<br/><br/>Un nombre et son opposé sont donc à la même distance de zéro.`,
            solution: [
              `La distance à zéro est une longueur : elle ne porte jamais de signe.`,
              v < 0
                ? `Le nombre $${v}$ est à gauche de zéro, à $${Math.abs(v)}$ unités de lui.`
                : `Le nombre $${v}$ est à droite de zéro, à $${Math.abs(v)}$ unités de lui.`,
              `L'écart cherché vaut donc $${Math.abs(v)}$.`,
              `Le nombre opposé, $${-v}$, est exactement à la même distance de zéro — c'est ce qui distingue la distance de la comparaison.`
            ]
          };
        }

        /* `a` reste libre sur tout l'intervalle ; `b` ne peut plus etre nul
           (defaut 1). Pour les situations de variation, `b` est le deplacement,
           et un deplacement nul ne constitue pas un exercice. */
        const a = rand(-20, 20);
        let b = rand(-20, 20);
        if (b === 0) b = pick([-1, 1]) * rand(1, 20);
        const op = pick(['+', '-']);
        const answer = op === '+' ? a + b : a - b;
        const bStr = b < 0 ? `(${b})` : `${b}`;
        const absB = Math.abs(b);

        const ctx = pick([
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Ce matin, le thermomètre affichait $${a}°C$. La température a <strong>augmenté</strong> de $${absB}°C$ dans la journée.<br/>Quelle est la température maintenant ?`
                : `Ce matin, le thermomètre affichait $${a}°C$. La température a <strong>baissé</strong> de $${absB}°C$ dans la journée.<br/>Quelle est la température maintenant ?`)
              // Defaut 3 : le sens de lecture est dit, donc le signe est attendu.
              : `La nuit dernière il faisait $${bStr}°C$ et ce matin il fait $${a}°C$.<br/>De combien la température a-t-elle <strong>varié</strong> de la nuit au matin (réponse signée) ?`
          },
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Un sous-marin est à l'altitude $${a}\\,\\text{m}$. Il <strong>remonte</strong> de $${absB}\\,\\text{m}$.<br/>À quelle altitude se trouve-t-il maintenant ?`
                : `Un sous-marin est à l'altitude $${a}\\,\\text{m}$. Il <strong>descend</strong> de $${absB}\\,\\text{m}$.<br/>À quelle altitude se trouve-t-il maintenant ?`)
              // Defaut 2 : on demande la difference ORIENTEE, pas un « ecart ».
              : `Un sous-marin est à l'altitude $${a}\\,\\text{m}$ et un plongeur à l'altitude $${bStr}\\,\\text{m}$.<br/>Quelle est la différence d'altitude <strong>du plongeur au sous-marin</strong> (réponse signée) ?`
          },
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Le solde d'un compte en banque est de $${a}$ €. On y <strong>dépose</strong> $${absB}$ €.<br/>Quel est le nouveau solde ?`
                : `Le solde d'un compte en banque est de $${a}$ €. On en <strong>retire</strong> $${absB}$ €.<br/>Quel est le nouveau solde ?`)
              : `Le compte de Tom affiche $${bStr}$ € et celui de Léa $${a}$ €.<br/>Combien Léa a-t-elle de plus que Tom (réponse signée) ?`
          },
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Un ascenseur se trouve à l'étage $${a}$ d'un immeuble. Il <strong>monte</strong> de $${absB}$ étages.<br/>À quel étage arrive-t-il ?`
                : `Un ascenseur se trouve à l'étage $${a}$. Il <strong>descend</strong> de $${absB}$ étages.<br/>À quel étage arrive-t-il ?`)
              : `Un ascenseur part de l'étage $${bStr}$ pour aller à l'étage $${a}$.<br/>De combien d'étages s'est-il <strong>déplacé</strong> (réponse signée) ?`
          },
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Un randonneur est à l'altitude $${a}\\,\\text{m}$ (négative sous le niveau de la mer). Il <strong>grimpe</strong> de $${absB}\\,\\text{m}$.<br/>Quelle est sa nouvelle altitude ?`
                : `Un randonneur est à $${a}\\,\\text{m}$ d'altitude. Il <strong>descend</strong> de $${absB}\\,\\text{m}$.<br/>Quelle est sa nouvelle altitude ?`)
              : `Le point $B$ est à l'altitude $${bStr}\\,\\text{m}$ et le point $A$ à l'altitude $${a}\\,\\text{m}$.<br/>Quel est le <strong>dénivelé de $B$ vers $A$</strong> (réponse signée) ?`
          }
        ]);

        return {
          statement: ctx.build(),
          answer,
          tolerance: 0,
          unit: '',
          hint: op === '-'
            ? `Rappel : soustraire revient à additionner l'opposé. $${a} - ${bStr} = ${a} + (${-b})$.`
            : (b < 0 ? `Ajouter un nombre négatif revient à soustraire sa valeur absolue.` : `Même signe ou signes opposés ? Applique la règle.`),
          /* 2026-09-13 : la premiere ligne etait UNIQUEMENT une formule. Or
             l'intertitre de la banque du professeur se derive de cette ligne,
             formules retirees (titreDeGroupe, scripts/manuel/chapitre.js) : le
             groupe s'imprimait donc sous un titre VIDE. Le defaut etait
             preexistant mais invisible tant que la banque ne comptait pas assez
             d'enonces pour etre groupee.

             On nomme donc la methode en premiere ligne, et les deux cas de
             figure y sont distingues — ce qui donne au passage deux groupes
             utiles a l'enseignant plutot qu'un seul fourre-tout. */
          solution: [
            op === '-'
              ? `Soustraire un nombre revient à ajouter son opposé.`
              : `On additionne deux nombres relatifs.`,
            op === '-'
              ? `$${a} - ${bStr} = ${a} + (${-b}) = ${answer}$`
              : `$${a} + ${bStr} = ${answer}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Un sous-marin se trouve à $-120\\,\\text{m}$ (120 m sous la surface). Il monte de $45\\,\\text{m}$, puis descend de $80\\,\\text{m}$.',
      schema: null,
      tasks: [
        'Calculer la nouvelle profondeur après la montée.',
        'Calculer la profondeur finale après la descente.',
        'Quel déplacement net (positif = montée) le sous-marin a-t-il effectué au total ?'
      ],
      solutions: [
        'Après montée : $-120 + 45 = -75\\,\\text{m}$ (à 75 m sous la surface).',
        'Après descente : $-75 - 80 = -155\\,\\text{m}$ (à 155 m sous la surface).',
        'Déplacement net : $-155 - (-120) = -155 + 120 = -35\\,\\text{m}$ (il s\'est enfoncé de 35 m au total).'
      ],
      finalAnswer: 'Profondeur finale : $-155\\,\\text{m}$, déplacement net : $-35\\,\\text{m}$'
    },

    evaluation: {
      title: 'Évaluation — Nombres relatifs',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer $(-7) + (+12)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Signes opposés : on soustrait les valeurs absolues $12 - 7 = 5$ et on garde le signe du plus grand en valeur absolue (le $+12$). Résultat : $+5$.'
        },
        {
          statement: 'Calculer $(-6) - (-11)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(-6) - (-11) = (-6) + (+11) = +5$. Soustraire un nombre négatif revient à additionner son opposé.'
        },
        {
        /* QUESTION REECRITE LE 2026-09-13.

           Elle demandait « Calculer $(-3) + (-8) - (-2)$ », soit un TROISIEME
           calcul de signes sur cinq questions. Sur l'ouvrage entier, « calculer »
           pesait 45,7 % des questions, bien au-dela du plafond de 35 %.

           La nouvelle question est un PROBLEME INVERSE : on donne le resultat et
           l'on cherche le nombre manquant. Aucune formule ne s'applique, il faut
           essayer puis verifier — c'est « chercher ». Elle est en outre un bon
           revelateur : un eleve qui maitrise « soustraire revient a ajouter
           l'oppose » trouve vite, un eleve qui recite la regle sans la comprendre
           reste bloque. */
          statement: 'Trouver le nombre manquant : $(-5) + \\ldots = -2$.',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On part de $-5$ et on veut arriver à $-2$ : sur la droite graduée, il faut donc ' +
            'se déplacer vers la DROITE (vers les plus grands nombres), de $3$ unités. Le nombre manquant est $+3$. ' +
            'Vérification : $(-5) + (+3) = -2$ ✓. ' +
            'Piège à éviter : le résultat $-2$ est négatif, ce qui laisse croire que le nombre ajouté ' +
            'l\'est aussi — or ajouter un nombre négatif à $-5$ l\'éloignerait encore de zéro.'
        },
        {
          statement: 'Quelle est la distance entre les points $A(-4)$ et $B(+7)$ sur une droite graduée ?',
          type: 'numeric',
          answer: 11,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Distance $= |x_B - x_A| = |7 - (-4)| = |7 + 4| = |11| = 11$.'
        },
        {
          statement: 'Que vaut $-(5 - 8)$ ?',
          type: 'multiple-choice',
          options: [
            '$-5 - 8 = -13$',
            '$-5 + 8 = 3$',
            '$5 - 8 = -3$',
            '$5 + 8 = 13$'
          ],
          answer: 1,
          points: 2,
          correction: 'Méthode 1 : calcul intérieur d\'abord : $5 - 8 = -3$, puis $-(-3) = +3$. Méthode 2 : le signe $-$ devant la parenthèse change tous les signes : $-(5 - 8) = -5 + 8 = 3$.'
        }
      ]
    }
  });
