/* =========================================================
   Spark Learning – data/physique-4e/physique-4e-lumiere.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-4e-lumiere',
    level: 1, subject: 'physique',
    icon: '🌈',
    title: 'La lumière : propagation et couleur',
    subtitle: 'Propagation rectiligne, vitesse de la lumière, décomposition, synthèse additive, couleur des objets',
    keywords: ['Propagation rectiligne', 'Vitesse de la lumière', 'Décomposition', 'Spectre', 'Couleur', 'Diffusion'],
    physics: 'Comprendre la propagation rectiligne explique la formation des ombres portées (cadran solaire, éclipses) ; comprendre la diffusion de la couleur explique pourquoi un même vêtement peut sembler changer de couleur sous un éclairage artificiel (magasin, scène) par rapport à la lumière du jour.',

    cours: {
      intro: 'La lumière se propage en <strong>ligne droite</strong> dans un milieu transparent et homogène (comme l\'air) : c\'est la <strong>propagation rectiligne</strong>, que l\'on représente par des rayons lumineux. Elle voyage extrêmement vite — environ $300\\,000$ km/s dans le vide — une vitesse si grande qu\'elle semble instantanée à notre échelle, mais qui devient mesurable sur des distances astronomiques.<br/><br/>La lumière du Soleil ou d\'une lampe, dite <strong>lumière blanche</strong>, n\'est pas une couleur « pure » : elle est en réalité la superposition de <strong>toutes les couleurs</strong> de l\'arc-en-ciel. Un prisme (ou des gouttes d\'eau) peut la <strong>décomposer</strong> en un spectre continu allant du rouge au violet.<br/><br/>Un objet qui n\'émet pas sa propre lumière (comme un pull ou un mur) ne fait que <strong>diffuser</strong> une partie de la lumière qu\'il reçoit, et absorber le reste : la couleur perçue d\'un objet dépend donc à la fois de sa nature et de la couleur de la lumière qui l\'éclaire.',
      definitions: [
        { term: 'Rayon lumineux', def: 'Représentation graphique, sous forme de ligne droite fléchée, du trajet suivi par la lumière dans un milieu transparent et homogène.' },
        { term: 'Propagation rectiligne', def: 'Principe selon lequel la lumière se propage en <strong>ligne droite</strong> dans un milieu transparent et homogène, à une vitesse d\'environ $300\\,000$ km/s dans le vide.' },
        { term: 'Lumière blanche', def: 'Lumière (comme celle du Soleil) qui est en réalité la superposition de toutes les couleurs du spectre visible. Un prisme peut la <strong>décomposer</strong> en un spectre continu du rouge au violet.' },
        { term: 'Synthèse additive', def: 'Recomposition de la lumière blanche (ou d\'une autre couleur) par superposition de lumières colorées. Les trois couleurs primaires de la lumière sont le rouge, le vert et le bleu.' },
        { term: 'Diffusion (couleur d\'un objet)', def: 'Un objet non lumineux renvoie (diffuse) une partie de la lumière qu\'il reçoit et absorbe le reste. La couleur perçue dépend donc à la fois de l\'objet et de la lumière qui l\'éclaire.' }
      ],
      method: {
        title: 'Analyser un phénomène lumineux en 3 étapes',
        steps: [
          '<strong>Identifier la nature du problème</strong> : s\'agit-il de <strong>propagation</strong> (trajet de la lumière, ombre) ou de <strong>couleur</strong> (diffusion, absorption, décomposition) ?',
          'Pour un problème de <strong>propagation</strong> : tracer les rayons lumineux en lignes droites depuis chaque source, jusqu\'à l\'objet ou l\'écran concerné.',
          'Pour un problème de <strong>couleur</strong> : déterminer quelle(s) couleur(s) composent la lumière reçue par l\'objet, en déduire ce qu\'il peut diffuser (= couleur perçue) et ce qu\'il absorbe forcément.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Décomposition de la lumière',
        title: 'La lumière blanche : un mélange de toutes les couleurs',
        description: 'Un prisme ne « colore » pas la lumière : il révèle les couleurs qu\'elle contenait déjà, en les déviant chacune un peu différemment (le rouge est le moins dévié, le violet le plus dévié).',
        svg: `
          <svg viewBox="0 0 600 310" role="img" aria-labelledby="lumiere-prisme-title lumiere-prisme-desc">
            <title id="lumiere-prisme-title">Decomposition de la lumiere blanche par un prisme</title>
            <desc id="lumiere-prisme-desc">Un rayon de lumiere blanche se propage en ligne droite horizontale et penetre dans un prisme triangulaire en verre. A l'interieur du prisme, le rayon change legerement de direction, puis ressort par la face opposee en se separant en sept rayons colores qui divergent : rouge, orange, jaune, vert, bleu, indigo et violet, du moins devie au plus devie. Une ligne pointillee prolonge la direction du rayon interne pour montrer que le rayon rouge est le moins ecarte de cette direction et le rayon violet le plus ecarte, conformement a la decomposition reelle de la lumiere blanche.</desc>

            <defs>
              <marker id="arrow-phys4e-lumiere" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- prisme -->
            <polygon class="frame-line" points="320,60 260,220 400,220" fill="var(--diagram-soft)"></polygon>
            <text class="label-soft" x="320" y="45" text-anchor="middle">Prisme (en verre)</text>

            <!-- rayon incident (lumiere blanche) -->
            <line class="curve-main" x1="100" y1="140" x2="286" y2="140" marker-end="url(#arrow-phys4e-lumiere)"></line>
            <text class="label-soft" x="100" y="126" text-anchor="start">Lumière blanche</text>

            <!-- rayon interne -->
            <line class="curve-main" x1="290" y1="140" x2="364" y2="148"></line>

            <!-- direction non deviee (reference) -->
            <line class="guide-line" x1="364" y1="148" x2="519" y2="165"></line>

            <!-- spectre : 7 rayons, du moins devie (rouge) au plus devie (violet) -->
            <line x1="364" y1="148" x2="520" y2="170" style="stroke:#e63946;stroke-width:3.5;stroke-linecap:round"></line>
            <line x1="364" y1="148" x2="520" y2="184" style="stroke:#f3722c;stroke-width:3.5;stroke-linecap:round"></line>
            <line x1="364" y1="148" x2="520" y2="198" style="stroke:#e0b400;stroke-width:3.5;stroke-linecap:round"></line>
            <line x1="364" y1="148" x2="520" y2="212" style="stroke:#43a047;stroke-width:3.5;stroke-linecap:round"></line>
            <line x1="364" y1="148" x2="520" y2="226" style="stroke:#2f6fed;stroke-width:3.5;stroke-linecap:round"></line>
            <line x1="364" y1="148" x2="520" y2="240" style="stroke:#3f37c9;stroke-width:3.5;stroke-linecap:round"></line>
            <line x1="364" y1="148" x2="520" y2="254" style="stroke:#8e24aa;stroke-width:3.5;stroke-linecap:round"></line>

            <text class="tick-label" x="528" y="174" style="fill:#e63946">Rouge</text>
            <text class="tick-label" x="528" y="188" style="fill:#f3722c">Orange</text>
            <text class="tick-label" x="528" y="202" style="fill:#e0b400">Jaune</text>
            <text class="tick-label" x="528" y="216" style="fill:#43a047">Vert</text>
            <text class="tick-label" x="528" y="230" style="fill:#2f6fed">Bleu</text>
            <text class="tick-label" x="528" y="244" style="fill:#3f37c9">Indigo</text>
            <text class="tick-label" x="528" y="258" style="fill:#8e24aa">Violet</text>

            <text class="annotation-label" x="300" y="288" text-anchor="middle">Décomposition en un spectre continu de couleurs</text>
          </svg>
        `,
        notes: [
          'Le rayon de <strong>lumière blanche</strong> se propage en ligne droite jusqu\'au prisme, où il change légèrement de direction (réfraction), puis ressort par la face opposée.',
          'En ressortant, la lumière blanche se sépare en un <strong>spectre continu</strong> de couleurs, toujours dans le même ordre : rouge, orange, jaune, vert, bleu, indigo, violet.',
          'Comparé à la ligne pointillée (direction non déviée), le <strong>rouge</strong> est la couleur la <strong>moins déviée</strong>, le <strong>violet</strong> la <strong>plus déviée</strong> : chaque couleur est légèrement plus ou moins « freinée » par le verre.'
        ],
        reading: 'Suis le rayon horizontal jusqu\'au prisme, repère le léger changement de direction à l\'intérieur, puis observe l\'éventail des sept couleurs qui en ressortent, toujours dans le même ordre.',
        caption: 'Décomposition de la lumière blanche par un prisme : un spectre continu de sept couleurs apparaît, du rouge (le moins dévié) au violet (le plus dévié).'
      },
      diagrams: [
        {
          theme: 'physique',
          kicker: 'Couleur des objets',
          title: 'Pourquoi un pull vert peut sembler noir',
          description: 'Un objet non lumineux ne fait que <strong>diffuser</strong> une partie de la lumière reçue : sous lumière blanche, le pull vert diffuse sa composante verte ; sous lumière rouge pure, il n\'a aucun vert à diffuser.',
          svg: `
            <svg viewBox="0 0 680 210" role="img" aria-labelledby="lumiere-diffusion-title lumiere-diffusion-desc">
              <title id="lumiere-diffusion-title">Diffusion de la couleur d'un pull vert sous deux eclairages</title>
              <desc id="lumiere-diffusion-desc">A gauche, une source de lumiere blanche eclaire un pull vert : un rayon vert sort du pull vers un oeil, qui percoit du vert. A droite, la meme source emet de la lumiere rouge pure vers le meme pull vert : aucun rayon colore ne sort du pull, une croix indique qu'il n'a rien a diffuser, et l'oeil percoit du noir. Une ligne pointillee verticale separe les deux scenes.</desc>

              <defs>
                <marker id="arrow-phys4e-diffusion" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
                <marker id="arrow-phys4e-diffusion-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="#e63946"></path>
                </marker>
              </defs>

              <text class="annotation-label" x="174" y="20" text-anchor="middle">LUMIÈRE BLANCHE</text>
              <text class="annotation-label" x="484" y="20" text-anchor="middle">LUMIÈRE ROUGE PURE</text>
              <line class="guide-line" x1="329" y1="32" x2="329" y2="195"></line>

              <!-- ===== PANNEAU A : lumiere blanche ===== -->
              <circle class="plot-point-alt" cx="60" cy="117" r="9"></circle>
              <text class="label-soft" x="60" y="140" text-anchor="middle">Source</text>
              <line class="curve-main" x1="74" y1="117" x2="132" y2="117" marker-end="url(#arrow-phys4e-diffusion)"></line>

              <rect class="frame-line" x="138" y="78" width="72" height="78" rx="12" fill="var(--diagram-soft)"></rect>
              <text class="label" x="174" y="121" text-anchor="middle">Pull vert</text>

              <line x1="210" y1="117" x2="272" y2="117" style="stroke:#43a047;stroke-width:3.5;stroke-linecap:round"></line>
              <text class="tick-label" x="241" y="101" text-anchor="middle" style="fill:#43a047">Vert</text>

              <circle class="plot-point-alt" cx="288" cy="117" r="9"></circle>
              <circle class="plot-point" cx="288" cy="117" r="3"></circle>
              <text class="label-soft" x="288" y="140" text-anchor="middle">Perçu : vert</text>

              <text class="label-soft" x="174" y="178" text-anchor="middle">absorbe le rouge et le bleu</text>

              <!-- ===== PANNEAU B : lumiere rouge pure ===== -->
              <circle class="plot-point-alt" cx="370" cy="117" r="9"></circle>
              <text class="label-soft" x="370" y="140" text-anchor="middle">Source</text>
              <line x1="384" y1="117" x2="442" y2="117" style="stroke:#e63946;stroke-width:4;stroke-linecap:round" marker-end="url(#arrow-phys4e-diffusion-red)"></line>

              <rect class="frame-line" x="448" y="78" width="72" height="78" rx="12" fill="var(--diagram-soft)"></rect>
              <text class="label" x="484" y="121" text-anchor="middle">Pull vert</text>

              <text class="label-soft" x="555" y="124" text-anchor="middle" style="font-size:20px;font-weight:700">✕</text>
              <text class="tick-label" x="555" y="101" text-anchor="middle">Absorbé</text>

              <circle class="plot-point-alt" cx="598" cy="117" r="9"></circle>
              <circle class="plot-point" cx="598" cy="117" r="3"></circle>
              <text class="label-soft" x="598" y="140" text-anchor="middle">Perçu : noir</text>

              <text class="label-soft" x="484" y="178" text-anchor="middle">absorbe presque tout</text>
            </svg>
          `,
          notes: [
            'Sous <strong>lumière blanche</strong> (à gauche), qui contient toutes les couleurs, le pull vert diffuse la composante verte qu\'il reçoit et absorbe le reste : il est perçu <strong>vert</strong>.',
            'Sous <strong>lumière rouge pure</strong> (à droite), la lumière reçue ne contient aucune composante verte. Le pull n\'a rien à diffuser : il absorbe presque toute la lumière reçue et apparaît <strong>noir</strong>, ou très sombre.',
            'Le pull est physiquement <strong>le même objet</strong> dans les deux cas : seule la lumière qui l\'éclaire change, ce qui change entièrement sa couleur perçue — la couleur d\'un objet n\'est jamais une propriété fixe et absolue.'
          ],
          reading: 'Compare les deux panneaux : à gauche la lumière blanche qui arrive contient du vert, donc le pull peut en diffuser vers l\'œil ; à droite la lumière rouge pure n\'en contient pas, donc le pull ne diffuse rien et paraît noir.',
          caption: 'Le même pull vert, éclairé successivement en lumière blanche puis en lumière rouge pure : sa couleur perçue dépend entièrement de la lumière qui l\'éclaire, pas seulement de sa propre nature.'
        }
      ],
      example: {
        statement: 'Un pull est vert. On l\'éclaire d\'abord en lumière blanche, puis en lumière rouge pure.<br/><br/>Décris et explique sa couleur apparente dans chacun des deux cas.',
        steps: [
          'En lumière blanche (qui contient toutes les couleurs, dont le vert), le pull diffuse la composante verte qu\'il reçoit et absorbe les autres composantes : il apparaît <strong>vert</strong>.',
          'En lumière rouge pure, la lumière reçue par le pull ne contient <strong>aucune</strong> composante verte à diffuser.',
          'N\'ayant rien à diffuser (il ne peut pas « inventer » du vert), le pull absorbe presque toute la lumière rouge reçue : il apparaît <strong>noir</strong> (ou très sombre).'
        ],
        answer: 'Le pull apparaît vert sous lumière blanche, mais noir sous lumière rouge pure : la couleur perçue d\'un objet dépend à la fois de sa nature et de la lumière qui l\'éclaire, pas seulement de l\'objet lui-même.'
      },
      formulas: [
        'Vitesse de la lumière (dans le vide) : $c \\approx 300\\,000$ km/s',
        'Durée de propagation : $t = \\dfrac{d}{c}$',
        'Couleurs primaires de la lumière (synthèse additive) : rouge, vert, bleu',
        'Lumière blanche = superposition de toutes les couleurs du spectre visible',
        'Couleur perçue d\'un objet = couleur de la lumière qu\'il diffuse'
      ],
      recap: [
        'La lumière se propage en <strong>ligne droite</strong> (propagation rectiligne) dans un milieu transparent et homogène, à environ $300\\,000$ km/s dans le vide.',
        'La <strong>lumière blanche</strong> est un mélange de toutes les couleurs du spectre visible ; un prisme la <strong>décompose</strong> sans en changer la nature.',
        'Un objet non lumineux ne fait que <strong>diffuser</strong> une partie de la lumière reçue (et absorber le reste) : sa couleur apparente dépend donc de la lumière qui l\'éclaire, pas seulement de l\'objet.',
        'La propagation rectiligne permet aussi de calculer une ombre portée (triangles semblables) ou une durée de propagation ($t = d/c$) sur de grandes distances.'
      ],
      piege: 'Une erreur fréquente est de croire qu\'un objet coloré « contient » ou « produit » sa propre couleur, par exemple qu\'un pull rouge émettrait de la lumière rouge. Attention : un objet non lumineux ne fait que <strong>diffuser</strong> une partie de la lumière qu\'il reçoit (et absorber le reste) — un pull rouge éclairé en lumière blanche diffuse le rouge reçu, mais éclairé en lumière verte pure, sans aucun rouge à diffuser, il apparaît noir.'
    },

    quiz: [
      {
        q: 'Un prisme reçoit un rayon de lumière blanche et le décompose en un spectre de couleurs. Que peut-on en conclure ?',
        options: [
          'Le prisme fabrique lui-même les couleurs',
          'La lumière blanche est un mélange de toutes les couleurs du spectre, que le prisme se contente de séparer',
          'La lumière blanche n\'a aucun rapport avec les couleurs visibles',
          'Le prisme colore la lumière en fonction de sa forme'
        ],
        answer: 1,
        correction: 'Un prisme ne <strong>crée</strong> aucune couleur : il révèle celles qui composaient déjà la lumière blanche, en les déviant chacune différemment selon la couleur.'
      },
      {
        q: 'Un T-shirt bleu est éclairé uniquement par une lumière rouge pure (sans aucune autre couleur). Quelle est sa couleur apparente ?',
        options: [
          'Bleu, comme d\'habitude',
          'Rouge',
          'Noir (ou très sombre), car il n\'y a pas de bleu à diffuser',
          'Violet, mélange du bleu et du rouge'
        ],
        answer: 2,
        correction: 'Le T-shirt ne peut diffuser que les couleurs qu\'il <strong>reçoit</strong>. En l\'absence totale de bleu dans la lumière reçue, il n\'a rien à diffuser : il apparaît noir, ou très sombre.'
      },
      {
        q: 'La lumière met environ $8$ minutes pour parcourir la distance Terre-Soleil. Que peut-on en déduire sur sa vitesse à notre échelle quotidienne ?',
        options: [
          'Elle est très lente, comparable à celle d\'une voiture',
          'Elle est si grande qu\'elle paraît instantanée sur les distances de la vie quotidienne, mais devient mesurable à l\'échelle astronomique',
          'Elle varie selon la couleur de la lumière observée à l\'œil nu',
          'Elle est infinie, aucun temps de trajet n\'existe jamais'
        ],
        answer: 1,
        correction: 'La vitesse de la lumière ($300\\,000$ km/s) est immense : sur quelques mètres ou kilomètres, le temps de trajet est totalement imperceptible. Ce n\'est que sur des distances astronomiques, comme Terre-Soleil, que ce temps devient mesurable (ici, environ $8$ minutes).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var mode = pick(['vitesse_lumiere', 'ombre']);

        if (mode === 'vitesse_lumiere') {
          var cibles = [
            { nom: 'la Lune', distanceKm: 384400, distanceTxte: '384\\,400' },
            { nom: 'le Soleil', distanceKm: 150000000, distanceTxte: '150\\,000\\,000' },
            { nom: 'Mars (à sa distance moyenne)', distanceKm: 225000000, distanceTxte: '225\\,000\\,000' },
            { nom: 'Jupiter (à sa distance moyenne)', distanceKm: 778000000, distanceTxte: '778\\,000\\,000' }
          ];
          var cible = pick(cibles);
          var t = parseFloat((cible.distanceKm / 300000).toFixed(2));
          var tol = Math.max(0.5, parseFloat((t * 0.02).toFixed(2)));
          return {
            statement: 'La distance moyenne entre la Terre et ' + cible.nom + ' est d\'environ $' + cible.distanceTxte + '$ km. On prend une vitesse de la lumière $c = 300\\,000$ km/s.<br/><br/>Calcule la durée $t$ mise par la lumière pour parcourir cette distance (en s, arrondie au centième).',
            answer: t,
            tolerance: tol,
            unit: 's',
            hint: 'La lumière se propage à vitesse constante : utilise $t = \\dfrac{d}{c}$, comme pour tout calcul de durée à partir d\'une distance et d\'une vitesse.',
            solution: [
              'La lumière se propage en ligne droite à vitesse constante : $t = \\dfrac{d}{c}$.',
              'Application numérique : $t = \\dfrac{' + cible.distanceTxte + '}{300\\,000}$.',
              'Résultat : $t \\approx ' + fr(t, 2) + '$ s.'
            ]
          };
        } else {
          var sources = [
            { nom: 'un lampadaire', article: 'du lampadaire' },
            { nom: 'un projecteur de scène', article: 'du projecteur' },
            { nom: 'un phare de voiture à l\'arrêt', article: 'du phare' },
            { nom: 'une lanterne de chantier', article: 'de la lanterne' }
          ];
          var source = pick(sources);
          var H = rand(3, 8);
          var h = randFloat(1, H - 0.5, 1);
          var d = rand(1, 8);
          var x = parseFloat((h * d / (H - h)).toFixed(2));
          var tol2 = Math.max(0.05, parseFloat((x * 0.05).toFixed(2)));
          var nomMaj = source.nom.charAt(0).toUpperCase() + source.nom.slice(1);
          return {
            statement: nomMaj + ', de hauteur $H = ' + H + '$ m, éclaire un poteau vertical de hauteur $h = ' + fr(h, 1) + '$ m, situé à une distance $d = ' + d + '$ m au pied ' + source.article + '.<br/><br/>Sachant que la lumière se propage en ligne droite depuis la source, calcule la longueur $x$ de l\'ombre portée du poteau, au-delà de son pied (en m, arrondie au centième).',
            answer: x,
            tolerance: tol2,
            unit: 'm',
            hint: 'Les rayons lumineux issus de la source rasent le sommet du poteau puis rejoignent le sol : cela forme deux triangles semblables. Utilise la proportionnalité $\\dfrac{H}{d + x} = \\dfrac{h}{x}$.',
            solution: [
              'La propagation rectiligne de la lumière crée deux triangles semblables : $\\dfrac{H}{d+x} = \\dfrac{h}{x}$.',
              'En multipliant en croix puis en isolant $x$, on obtient $x = \\dfrac{h \\times d}{H - h}$.',
              'Application numérique : $x = \\dfrac{' + fr(h, 1) + ' \\times ' + d + '}{' + H + ' - ' + fr(h, 1) + '}$.',
              'Résultat : $x \\approx ' + fr(x, 2) + '$ m.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Lors d\'une sortie scolaire, des élèves observent qu\'un lampadaire de hauteur $H = 5$ m projette l\'ombre d\'un poteau de signalisation de hauteur $h = 2$ m, situé à $d = 3$ m du pied du lampadaire. Le même jour, ils observent aussi qu\'un panneau rouge semble devenir noir sous l\'éclairage orangé d\'un vieux lampadaire au sodium, qui n\'émet quasiment aucune lumière rouge.',
      tasks: [
        'Calculer la longueur $x$ de l\'ombre portée du poteau, au-delà de son pied, à l\'aide de la propagation rectiligne de la lumière (triangles semblables).',
        'Expliquer pourquoi le panneau rouge apparaît noir sous l\'éclairage orangé du lampadaire au sodium.',
        'Le lendemain, en plein jour (lumière blanche du Soleil), quelle couleur ce même panneau retrouve-t-il ? Justifier.'
      ],
      solutions: [
        'Triangles semblables (propagation rectiligne) : $\\dfrac{H}{d+x} = \\dfrac{h}{x}$, soit $x = \\dfrac{h \\times d}{H-h} = \\dfrac{2 \\times 3}{5-2} = \\dfrac{6}{3} = 2$ m.',
        'La lumière orangée d\'un lampadaire au sodium ne contient quasiment aucune composante rouge. Le panneau rouge ne peut diffuser que les couleurs qu\'il reçoit : n\'ayant pas de rouge à diffuser, il absorbe presque toute la lumière reçue et apparaît noir, ou très sombre.',
        'En plein jour, le panneau est éclairé par la lumière blanche du Soleil, qui contient <strong>toutes</strong> les couleurs, dont le rouge. Le panneau peut alors diffuser sa composante rouge normalement : il retrouve sa couleur rouge habituelle.'
      ],
      finalAnswer: 'L\'ombre du poteau mesure $2$ m au-delà de son pied. Le panneau rouge apparaît noir sous un éclairage orangé pauvre en rouge, mais retrouve sa couleur rouge en lumière blanche (riche en toutes les couleurs) : la couleur perçue d\'un objet dépend toujours de la lumière qui l\'éclaire, pas seulement de l\'objet lui-même.'
    },

    evaluation: {
      title: 'Évaluation — La lumière : propagation et couleur',
      duration: '20 min',
      questions: [
        {
          statement: 'Un lampadaire de hauteur $H = 6$ m éclaire un poteau de hauteur $h = 1{,}5$ m situé à $d = 2$ m de son pied. Calculer la longueur $x$ de l\'ombre portée au-delà du pied du poteau (en m).',
          type: 'numeric',
          answer: 0.67,
          tolerance: 0.05,
          unit: 'm',
          points: 3,
          correction: '$x = \\dfrac{h \\times d}{H-h} = \\dfrac{1{,}5 \\times 2}{6 - 1{,}5} = \\dfrac{3}{4{,}5} \\approx 0{,}67$ m.'
        },
        {
          statement: 'La lumière blanche est :',
          type: 'multiple-choice',
          options: [
            'Une couleur pure, différente des autres',
            'Le résultat du mélange de toutes les couleurs du spectre visible',
            'Une lumière sans aucune couleur',
            'Toujours produite uniquement par le Soleil'
          ],
          answer: 1,
          points: 1,
          correction: 'La lumière blanche est la superposition de toutes les couleurs du spectre visible, comme le révèle sa décomposition par un prisme.'
        },
        {
          statement: 'Sachant que $c = 300\\,000$ km/s et que la distance Terre-Lune est d\'environ $384\\,000$ km, calculer la durée mise par la lumière pour parcourir cette distance (en s).',
          type: 'numeric',
          answer: 1.28,
          tolerance: 0.1,
          unit: 's',
          points: 2,
          correction: '$t = \\dfrac{d}{c} = \\dfrac{384\\,000}{300\\,000} = 1{,}28$ s.'
        },
        {
          statement: 'Un pull vert est éclairé uniquement par une lumière bleue pure. Quelle est sa couleur apparente ?',
          type: 'multiple-choice',
          options: [
            'Vert, comme toujours',
            'Bleu',
            'Noir, ou très sombre',
            'Blanc'
          ],
          answer: 2,
          points: 2,
          correction: 'Le pull ne peut diffuser que ce qu\'il reçoit. Sans aucune composante verte dans la lumière reçue (uniquement bleue), il n\'a rien à diffuser : il apparaît noir ou très sombre.'
        },
        {
          statement: 'Dans la décomposition de la lumière blanche par un prisme, quelle couleur est la moins déviée ?',
          type: 'multiple-choice',
          options: [
            'Le violet',
            'Le rouge',
            'Le vert',
            'Toutes les couleurs sont déviées de la même façon'
          ],
          answer: 1,
          points: 2,
          correction: 'Dans un prisme, le rouge est la couleur la moins déviée du spectre visible, tandis que le violet est la plus déviée.'
        }
      ]
    }
  });
