/* =========================================================
   Spark Learning – data/6e/6e-volumes.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-volumes',
    level: 1, subject: 'maths',
    icon: '📦',
    title: 'Volumes',
    subtitle: 'Cube, pavé droit, unités (L, mL, m³)',
    keywords: ['Volume', 'Pavé droit', 'Cube', 'Litre', 'Conversion'],
    physics: 'Contenance et débit en technologie ; masse volumique au cycle 4',

    cours: {
      /* « Decouvrir » reecrit le 2026-09-13. Entree retenue : deux recipients
         de FORMES differentes, dont l'oeil ne sait pas dire lequel contient le
         plus. Le volume apparait comme le nombre qui rend comparables deux
         objets sans rapport — c'est sa fonction reelle. La question des unites
         multiples, qui ouvrait l'ancienne intro, est conservee mais passe en
         consequence et non en preambule. */
      intro: 'Devant deux récipients, l\'un haut et étroit, l\'autre large et plat, laquelle des deux contient le plus d\'eau ? L\'œil ne suffit pas : le plus haut n\'est pas forcément le plus rempli, et beaucoup de gens se trompent en le jugeant du regard.<br/><br/>' +
        'Le seul moyen d\'être sûr serait de verser le contenu de l\'un dans l\'autre. Mais si les deux récipients sont pleins, ou s\'ils sont trop loin l\'un de l\'autre, comment faire ? Il faudrait pouvoir attribuer à chacun un <strong>nombre</strong>, puis comparer les deux nombres.<br/><br/>' +
        'C\'est le rôle du <strong>volume</strong> : il mesure l\'espace occupé, quelle que soit la forme. On choisit un cube témoin de $1$ cm de côté — son volume vaut $1$ cm³ — et l\'on compte combien de fois il rentre dans le récipient. Deux objets qui n\'ont rien à voir deviennent alors comparables.<br/><br/>' +
        'Reste une difficulté bien réelle : les ordres de grandeur sont énormes. Une goutte fait $0{,}05$ mL, une piscine olympique $2500$ m³. D\'où plusieurs unités selon la situation — litres, m³, mL — reliées par un pont à retenir : $1$ cm³ $= 1$ mL exactement.<br/><br/>' +
        '<strong>Maîtriser les conversions</strong> entre ces unités, c\'est pouvoir passer de la bouteille à la dalle de béton sans se tromper d\'un facteur $1000$.',

      definitions: [
        { term: 'Volume', def: 'Mesure de l\'espace occupé par un objet en 3D. Unité SI : le mètre cube (m³).' },
        { term: 'Pavé droit', def: 'Solide à 6 faces rectangulaires. Volume : $V = L \\times l \\times h$.' },
        { term: 'Cube', def: 'Cas particulier du pavé droit où toutes les arêtes sont égales. Volume : $V = a^3$.' },
        { term: 'Conversion', def: '$1\\,\\text{m}^3 = 1000\\,\\text{L}$ et $1\\,\\text{L} = 1000\\,\\text{mL} = 1000\\,\\text{cm}^3$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Calculer le volume</strong> : identifier la forme (pavé ou cube), puis appliquer la formule. <em>Exemple pavé :</em> une boîte de $5$ cm × $3$ cm × $4$ cm → $V = 5 \\times 3 \\times 4 = 60$ cm³. <em>Exemple cube :</em> un sucre de $2$ cm de côté → $V = 2^3 = 8$ cm³.',
          '<strong>Convertir les unités</strong> : $1\\,\\text{m}^3 = 1000\\,\\text{L}$ et $1\\,\\text{L} = 1000\\,\\text{mL} = 1000\\,\\text{cm}^3$. <em>Exemple :</em> $240\\,\\text{cm}^3 \\div 1000 = 0{,}240\\,\\text{L}$.',
          '<strong>Vérifier l\'homogénéité</strong> : les trois dimensions doivent être dans la même unité avant de multiplier. <em>Exemple :</em> si L = $2$ m, l = $50$ cm → convertir d\'abord : $l = 0{,}50$ m.'
        ]
      },
      example: {
        statement: 'Un aquarium mesure $60$ cm de long, $30$ cm de large et $40$ cm de haut. Calculer son volume en litres.',
        steps: [
          'Les trois dimensions sont en cm ✓',
          '$V = 60 \\times 30 \\times 40 = 72\\,000$ cm³',
          'Conversion : $72\\,000 \\div 1000 = 72$ L'
        ],
        answer: '$V = 72\\,000$ cm³ $= 72$ L'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Pavé droit et cube',
        title: 'Le cube unité et le pavé droit de l\'aquarium, en perspective',
        description: 'Le petit cube de $1$ cm d\'arête rappelle que $1\\,\\text{cm}^3 = 1\\,\\text{mL}$ ; le pavé droit reprend l\'exemple de l\'aquarium du cours.',
        svg: `
          <svg viewBox="0 0 430 260" role="img" aria-labelledby="volumes-diagram-title volumes-diagram-desc">
            <title id="volumes-diagram-title">Cube unite et pave droit en perspective</title>
            <desc id="volumes-diagram-desc">Un petit cube de 1 cm d'arete illustre l'egalite 1 cm cube egale 1 mL. Un pave droit represente l'aquarium de 60 cm sur 30 cm sur 40 cm du cours, de volume 72000 cm cube soit 72 L.</desc>
            <rect x="60" y="14" width="160" height="52" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 9%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 26%, var(--border))"></rect>
            <text class="annotation-label" x="74" y="38">1 cm³ = 1 mL</text>
            <text class="tick-label" x="74" y="56">1 000 cm³ = 1 L</text>
            <line class="guide-line" x1="130" y1="66" x2="90" y2="118"></line>
            <path fill="color-mix(in srgb, var(--diagram-accent) 22%, var(--bg-card))" class="frame-line" d="M50 190 L100 190 L100 140 L50 140 Z"></path>
            <path fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" class="frame-line" d="M50 140 L100 140 L126 120 L76 120 Z"></path>
            <path fill="color-mix(in srgb, var(--diagram-accent) 38%, var(--bg-card))" class="frame-line" d="M100 190 L100 140 L126 120 L126 170 Z"></path>
            <text class="annotation-label" x="75" y="210" text-anchor="middle">1 cm³</text>
            <path fill="color-mix(in srgb, var(--diagram-accent) 22%, var(--bg-card))" class="frame-line" d="M230 190 L380 190 L380 90 L230 90 Z"></path>
            <path fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" class="frame-line" d="M230 90 L380 90 L415 62 L265 62 Z"></path>
            <path fill="color-mix(in srgb, var(--diagram-accent) 38%, var(--bg-card))" class="frame-line" d="M380 190 L380 90 L415 62 L415 162 Z"></path>
            <text class="annotation-label" x="215" y="145">h = 40 cm</text>
            <text class="annotation-label" x="305" y="208" text-anchor="middle">L = 60 cm</text>
            <text class="annotation-label" x="340" y="72">l = 30 cm</text>
            <text class="annotation-label" x="305" y="226" text-anchor="middle">V = 60 × 30 × 40 cm³</text>
            <text class="tick-label" x="305" y="240" text-anchor="middle">= 72 000 cm³ = 72 L</text>
          </svg>
        `,
        notes: [
          'Un cube de $1$ cm d\'arête a un volume de $1$ cm³, et $1$ cm³ $= 1$ mL exactement — c\'est le lien fondamental entre les unités de volume et de contenance.',
          'Le pavé droit reprend l\'exemple du cours (l\'aquarium) : $L = 60$ cm, $l = 30$ cm, $h = 40$ cm, donc $V = 60 \\times 30 \\times 40 = 72\\,000$ cm³.',
          'Conversion : $72\\,000$ cm³ $\\div 1000 = 72$ L, car $1000$ cm³ $= 1$ L.'
        ],
        reading: 'Le petit cube donne l\'unité de référence ($1$ cm³ $= 1$ mL) ; le grand pavé montre comment cette unité s\'accumule pour donner un volume en litres.',
        caption: 'Cube unité ($1$ cm³ $= 1$ mL) et pavé droit de l\'aquarium ($60 \\times 30 \\times 40$ cm $= 72$ L), en perspective cavalière schématique.'
      },
      /* Schemas secondaires (2026-09-12). Le chapitre portait tout son poids
         sur une seule figure en perspective, qui montre BIEN les solides mais
         n'explique NI d'ou vient le facteur 1000 entre deux unites de volume,
         NI pourquoi on multiplie trois longueurs. Or c'est precisement la que
         les eleves de 6e decrochent : ils retiennent « x1000 » sans savoir
         pourquoi, et se trompent des qu'on change d'unite.

         CONVENTION reprise du chapitre pilote : une figure par malentendu.
         Ici trois — l'empilement qui fabrique le litre, le pavage qui fabrique
         la formule, et l'escalier des conversions. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'D\'où vient le litre',
          title: 'Le cube de $10$ cm de côté contient exactement $1$ litre',
          description: 'Le lien $1$ L $= 1000$ cm³ n\'est pas une convention arbitraire : c\'est le nombre de petits cubes de $1$ cm³ que l\'on peut ranger dans un cube de $10$ cm d\'arête, soit $10 \\times 10 \\times 10$.',
          svg: `
            <svg viewBox="0 0 400 210" role="img" aria-labelledby="volumes-litre-title volumes-litre-desc">
              <title id="volumes-litre-title">Un cube de 10 centimetres d'arete rempli de cubes de 1 centimetre cube</title>
              <desc id="volumes-litre-desc">Un grand cube dessine en perspective mesure 10 centimetres d'arete, soit 1 decimetre. Sa face avant est quadrillee en 10 colonnes et 10 rangees, ce qui fait 100 petits carres visibles. Comme il y a egalement 10 couches en profondeur, le grand cube contient 10 fois 10 fois 10, c'est-a-dire 1000 petits cubes de 1 centimetre cube chacun. Son volume vaut donc 1000 centimetres cubes, soit 1 decimetre cube, soit exactement 1 litre.</desc>

              <!-- Cube de 10 cm d'arete, echelle 13 unites de viewBox par cm.
                   PERSPECTIVE CAVALIERE : on reprend exactement le decalage de
                   la figure principale du chapitre (fuyante vers le haut-droite)
                   pour que les deux solides du chapitre se lisent dans le meme
                   espace. Une perspective differente d'une figure a l'autre
                   ferait croire a deux objets de natures differentes. -->
              <path fill="color-mix(in srgb, var(--diagram-accent) 18%, var(--bg-card))" class="frame-line" d="M40 180 L170 180 L170 50 L40 50 Z"></path>
              <path fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" class="frame-line" d="M40 50 L170 50 L204 24 L74 24 Z"></path>
              <path fill="color-mix(in srgb, var(--diagram-accent) 32%, var(--bg-card))" class="frame-line" d="M170 180 L170 50 L204 24 L204 154 Z"></path>

              <!-- Quadrillage de la face avant : 10 x 10 petits cubes. Il porte
                   toute la demonstration, mais reste en grid-line pour ne pas
                   ecraser les aretes du solide. -->
              <line class="grid-line" x1="53" y1="180" x2="53" y2="50"></line>
              <line class="grid-line" x1="66" y1="180" x2="66" y2="50"></line>
              <line class="grid-line" x1="79" y1="180" x2="79" y2="50"></line>
              <line class="grid-line" x1="92" y1="180" x2="92" y2="50"></line>
              <line class="grid-line" x1="105" y1="180" x2="105" y2="50"></line>
              <line class="grid-line" x1="118" y1="180" x2="118" y2="50"></line>
              <line class="grid-line" x1="131" y1="180" x2="131" y2="50"></line>
              <line class="grid-line" x1="144" y1="180" x2="144" y2="50"></line>
              <line class="grid-line" x1="157" y1="180" x2="157" y2="50"></line>
              <line class="grid-line" x1="40" y1="63" x2="170" y2="63"></line>
              <line class="grid-line" x1="40" y1="76" x2="170" y2="76"></line>
              <line class="grid-line" x1="40" y1="89" x2="170" y2="89"></line>
              <line class="grid-line" x1="40" y1="102" x2="170" y2="102"></line>
              <line class="grid-line" x1="40" y1="115" x2="170" y2="115"></line>
              <line class="grid-line" x1="40" y1="128" x2="170" y2="128"></line>
              <line class="grid-line" x1="40" y1="141" x2="170" y2="141"></line>
              <line class="grid-line" x1="40" y1="154" x2="170" y2="154"></line>
              <line class="grid-line" x1="40" y1="167" x2="170" y2="167"></line>

              <!-- Le cube unite, seul objet fortement teinte : c'est le module
                   de comptage, l'eleve doit pouvoir l'isoler d'un coup d'oeil. -->
              <rect x="40" y="167" width="13" height="13" fill="color-mix(in srgb, var(--diagram-accent) 46%, transparent)" stroke="none"></rect>

              <text class="tick-label" x="105" y="198" text-anchor="middle">10 cm</text>
              <text class="tick-label" x="32" y="118" text-anchor="end">10 cm</text>

              <text class="annotation-label" x="224" y="64">10 × 10 × 10</text>
              <text class="annotation-label" x="224" y="86">= 1 000 cubes</text>
              <text class="tick-label" x="224" y="112">de 1 cm³ chacun</text>
              <text class="annotation-label" x="224" y="146">1 dm³ = 1 000 cm³</text>
              <text class="annotation-label" x="224" y="168">= 1 L</text>
            </svg>
          `,
          notes: [
            'Un cube de $10$ cm d\'arête est aussi un cube de $1$ dm d\'arête : son volume vaut $1$ dm³.',
            'Il contient $10 \\times 10 \\times 10 = 1\\,000$ petits cubes de $1$ cm³ chacun, donc $1$ dm³ $= 1\\,000$ cm³.',
            'Et ce cube-là est précisément la contenance d\'<strong>un litre</strong> : $1$ L $= 1$ dm³ $= 1\\,000$ cm³ $= 1\\,000$ mL.'
          ],
          reading: 'Compte les petits carrés sur la face avant : il y en a $10$ par rangée et $10$ rangées, soit $100$. Il y a maintenant $10$ couches de $100$ cubes les unes derrière les autres : $1\\,000$ cubes en tout. Le facteur $1\\,000$ entre le litre et le centimètre cube ne s\'apprend donc pas par cœur, il se compte.',
          caption: 'Le litre expliqué : un cube de $10$ cm d\'arête contient $1\\,000$ cubes de $1$ cm³.'
        },
        {
          theme: 'maths',
          kicker: 'Pourquoi trois longueurs',
          title: 'Le volume se construit couche par couche',
          description: 'La formule $V = L \\times l \\times h$ n\'est pas trois multiplications au hasard : on compte d\'abord les cubes d\'<strong>une couche</strong>, puis on compte les <strong>couches</strong>.',
          svg: `
            <svg viewBox="0 0 400 200" role="img" aria-labelledby="volumes-couches-title volumes-couches-desc">
              <title id="volumes-couches-title">Un pave droit construit couche par couche</title>
              <desc id="volumes-couches-desc">Un pave droit de 5 cubes de long sur 3 cubes de large et 4 cubes de haut est presente en deux temps. A gauche, une seule couche est dessinee : elle contient 5 fois 3, soit 15 cubes. A droite, le pave complet empile 4 de ces couches identiques, ce qui donne 15 multiplie par 4, soit 60 cubes au total. La formule longueur fois largeur fois hauteur ne fait donc que compter d'abord les cubes d'une couche, puis le nombre de couches.</desc>

              <text class="tick-label" x="86" y="16" text-anchor="middle">une couche</text>
              <text class="tick-label" x="286" y="16" text-anchor="middle">4 couches empilées</text>

              <!-- ETAPE 1 : la couche seule. -->
              <path fill="color-mix(in srgb, var(--diagram-accent) 20%, var(--bg-card))" class="frame-line" d="M28 140 L128 140 L128 120 L28 120 Z"></path>
              <path fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" class="frame-line" d="M28 120 L128 120 L158 94 L58 94 Z"></path>
              <path fill="color-mix(in srgb, var(--diagram-accent) 34%, var(--bg-card))" class="frame-line" d="M128 140 L128 120 L158 94 L158 114 Z"></path>
              <line class="grid-line" x1="48" y1="140" x2="48" y2="120"></line>
              <line class="grid-line" x1="68" y1="140" x2="68" y2="120"></line>
              <line class="grid-line" x1="88" y1="140" x2="88" y2="120"></line>
              <line class="grid-line" x1="108" y1="140" x2="108" y2="120"></line>
              <line class="grid-line" x1="48" y1="120" x2="78" y2="94"></line>
              <line class="grid-line" x1="68" y1="120" x2="98" y2="94"></line>
              <line class="grid-line" x1="88" y1="120" x2="118" y2="94"></line>
              <line class="grid-line" x1="108" y1="120" x2="138" y2="94"></line>
              <text class="tick-label" x="86" y="160" text-anchor="middle">5 × 3 = 15 cubes</text>

              <!-- ETAPE 2 : le pave complet, MEME echelle et MEME perspective
                   que l'etape 1 — c'est ce qui rend l'empilement lisible comme
                   une repetition de la couche, et non comme un autre objet. -->
              <path fill="color-mix(in srgb, var(--diagram-accent) 20%, var(--bg-card))" class="frame-line" d="M228 140 L328 140 L328 60 L228 60 Z"></path>
              <path fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" class="frame-line" d="M228 60 L328 60 L358 34 L258 34 Z"></path>
              <path fill="color-mix(in srgb, var(--diagram-accent) 34%, var(--bg-card))" class="frame-line" d="M328 140 L328 60 L358 34 L358 114 Z"></path>
              <line class="grid-line" x1="228" y1="120" x2="328" y2="120"></line>
              <line class="grid-line" x1="228" y1="100" x2="328" y2="100"></line>
              <line class="grid-line" x1="228" y1="80" x2="328" y2="80"></line>
              <line class="grid-line" x1="248" y1="140" x2="248" y2="60"></line>
              <line class="grid-line" x1="268" y1="140" x2="268" y2="60"></line>
              <line class="grid-line" x1="288" y1="140" x2="288" y2="60"></line>
              <line class="grid-line" x1="308" y1="140" x2="308" y2="60"></line>
              <text class="tick-label" x="286" y="160" text-anchor="middle">15 × 4 = 60 cubes</text>

              <text class="annotation-label" x="200" y="186" text-anchor="middle">V = 5 × 3 × 4 = 60 cm³</text>
            </svg>
          `,
          notes: [
            'Une couche du bas contient $5 \\times 3 = 15$ cubes : c\'est l\'aire de la base, comptée en cubes.',
            'Le pavé empile $4$ couches identiques : $15 \\times 4 = 60$ cubes.',
            'D\'où $V = 5 \\times 3 \\times 4 = 60$ cm³ : la formule fait en une ligne ce que l\'empilement fait en deux temps.'
          ],
          reading: 'Une longueur seule donne une ligne de cubes, deux longueurs donnent une couche, trois longueurs donnent le solide. C\'est aussi pourquoi un volume s\'exprime en cm³ : il a fallu trois longueurs pour l\'obtenir.',
          caption: 'Le pavé droit couche par couche : $5 \\times 3 = 15$ cubes par couche, $4$ couches, soit $60$ cm³.'
        },
        {
          theme: 'maths',
          kicker: 'Ne plus se tromper de facteur 1000',
          title: 'L\'escalier des unités de volume',
          description: 'Entre deux unités de volume voisines, le facteur n\'est pas $10$ mais <strong>$1000$</strong> — parce qu\'un volume met en jeu trois longueurs à la fois. C\'est l\'erreur de conversion la plus coûteuse du chapitre.',
          svg: `
            <svg viewBox="0 0 400 190" role="img" aria-labelledby="volumes-escalier-title volumes-escalier-desc">
              <title id="volumes-escalier-title">Escalier de conversion des unites de volume</title>
              <desc id="volumes-escalier-desc">Un escalier descendant relie les unites de volume du metre cube au centimetre cube. Chaque marche descendue multiplie par mille et chaque marche montee divise par mille. On lit successivement le metre cube, puis le decimetre cube qui vaut aussi le litre, puis le centimetre cube qui vaut aussi le millilitre. Un metre cube vaut donc mille litres et un litre vaut mille millilitres. Le facteur entre deux marches voisines est toujours mille et jamais dix, parce qu'un volume met en jeu trois longueurs a la fois.</desc>

              <!-- ESCALIER : convention de lecture standard des tableaux de
                   conversion — on DESCEND vers la petite unite en multipliant.
                   Les marches sont a la meme hauteur et a la meme largeur : la
                   regularite du dessin dit que le facteur est le meme partout,
                   ce qui est exactement le message. -->
              <path class="frame-line" fill="none" d="M40 44 L152 44 L152 96 L264 96 L264 148 L376 148"></path>

              <rect x="52" y="18" width="88" height="24" rx="7" fill="color-mix(in srgb, var(--diagram-accent) 20%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 34%, var(--border))"></rect>
              <text class="annotation-label" x="96" y="35" text-anchor="middle">1 m³</text>

              <rect x="164" y="70" width="88" height="24" rx="7" fill="color-mix(in srgb, var(--diagram-accent) 20%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 34%, var(--border))"></rect>
              <text class="annotation-label" x="208" y="87" text-anchor="middle">1 dm³ = 1 L</text>

              <rect x="276" y="122" width="94" height="24" rx="7" fill="color-mix(in srgb, var(--diagram-accent) 20%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 34%, var(--border))"></rect>
              <text class="annotation-label" x="323" y="139" text-anchor="middle">1 cm³ = 1 mL</text>

              <!-- Les deux sens de lecture sur la meme marche : descendre
                   multiplie, monter divise. Les poser tous les deux evite
                   l'erreur d'inversion, qui est l'autre moitie du probleme. -->
              <text class="tick-label" x="158" y="60">× 1 000</text>
              <text class="tick-label" x="270" y="112">× 1 000</text>
              <text class="label-soft" x="146" y="60" text-anchor="end">÷ 1 000</text>
              <text class="label-soft" x="258" y="112" text-anchor="end">÷ 1 000</text>

              <text class="label-soft" x="200" y="176" text-anchor="middle">une marche = 1 000, jamais 10 : un volume met en jeu 3 longueurs</text>
            </svg>
          `,
          notes: [
            'De haut en bas on <strong>multiplie</strong> par $1\\,000$ : $1$ m³ $= 1\\,000$ dm³ $= 1\\,000\\,000$ cm³.',
            'De bas en haut on <strong>divise</strong> par $1\\,000$ : $72\\,000$ cm³ $= 72$ dm³ $= 72$ L, comme l\'aquarium du cours.',
            'Le facteur vaut $1\\,000$ et non $10$ parce que passer du dm au cm divise <strong>chacune</strong> des trois dimensions par $10$ : $10 \\times 10 \\times 10 = 1\\,000$.'
          ],
          reading: 'Pose le doigt sur l\'unité de départ, puis compte les marches jusqu\'à l\'unité d\'arrivée : une marche vers le bas, un $\\times 1\\,000$ ; une marche vers le haut, un $\\div 1\\,000$. Deux marches vers le bas font donc $\\times 1\\,000\\,000$, pas $\\times 2\\,000$.',
          caption: 'L\'escalier des unités de volume : une marche vaut toujours un facteur $1\\,000$.'
        }
      ],
      formulas: [
        '$V_{\\text{pavé}} = L \\times l \\times h$',
        '$V_{\\text{cube}} = a^3$',
        '$1\\,\\text{m}^3 = 1000\\,\\text{L} = 1\\,000\\,000\\,\\text{cm}^3$',
        '$1\\,\\text{L} = 1\\,\\text{dm}^3 = 1000\\,\\text{mL} = 1000\\,\\text{cm}^3$'
      ],
      recap: [
        'Le volume d\'un pavé droit est $V = L \\times l \\times h$, celui d\'un cube $V = a^3$.',
        '$1$ cm³ $= 1$ mL exactement. $1$ m³ $= 1000$ L.',
        'Entre deux unités de volume voisines (m³, dm³ $=$ L, cm³ $=$ mL), on multiplie ou on divise par $1000$, jamais par $10$.',
        'Toutes les dimensions doivent être dans la même unité avant de multiplier.'
      ],
      piege: 'Piège du facteur $1000$ : entre deux unités de volume voisines, on ne multiplie pas par $10$ mais par <strong>$1000$</strong>.<br/><br/>Pour passer des cm³ aux litres, on divise par $1000$ : $5040$ cm³ $= 5{,}04$ L, et non $504$ L.<br/><br/>Pourquoi $1000$ ? Parce qu\'un volume met en jeu <strong>trois longueurs</strong> : $10 \\times 10 \\times 10 = 1000$.'
    },

    quiz: [
      {
        q: 'Un aquarium a des dimensions $80\\,\\text{cm} \\times 40\\,\\text{cm} \\times 50\\,\\text{cm}$. Quel est son volume en litres ?',
        options: ['$16\\,\\text{L}$', '$160\\,\\text{L}$', '$1{,}6\\,\\text{L}$', '$16000\\,\\text{L}$'],
        answer: 1,
        correction: '$V = 80 \\times 40 \\times 50 = 160\\,000\\,\\text{cm}^3 = 160\\,000\\,\\text{mL} = 160\\,\\text{L}$.'
      },
      {
        q: 'Un élève convertit $2500\\,\\text{cm}^3$ en litres et écrit « $2500 \\div 10 = 250\\,\\text{L}$ ». Quelle est son erreur ?',
        options: [
          'Il n\'y a pas d\'erreur : $250$ L est juste.',
          'Il fallait multiplier : $2500 \\times 10 = 25\\,000$ L.',
          'Il a divisé par $10$ au lieu de $1000$ : $2500 \\div 1000 = 2{,}5$ L.',
          'Il fallait diviser par $100$ : $2500 \\div 100 = 25$ L.'
        ],
        answer: 2,
        correction: '$1$ L $= 1000$ cm³ : des cm³ vers les litres, on divise par <strong>$1000$</strong>.<br/><br/>$2500 \\div 1000 = 2{,}5$ L, et l\'ordre de grandeur confirme : une grande bouteille de $2{,}5$ L est crédible, $250$ L (une baignoire) ne l\'est pas pour $2500$ cm³.<br/><br/>Diviser par $10$ ou par $100$ est le réflexe des unités de <strong>longueur</strong> ; pour un volume, chaque marche vaut $1000$ car trois longueurs sont en jeu. Multiplier par $10$ donnerait $25\\,000$ L, encore plus absurde.'
      },
      {
        q: 'Une boîte a la forme d\'un pavé droit de $4\\,\\text{cm} \\times 3\\,\\text{cm} \\times 2\\,\\text{cm}$. Combien de cubes de $1\\,\\text{cm}^3$ faut-il pour la remplir complètement ?',
        options: ['$9$ cubes', '$12$ cubes', '$18$ cubes', '$24$ cubes'],
        answer: 3,
        correction: 'Le volume de la boîte est $V = 4 \\times 3 \\times 2 = 24\\,\\text{cm}^3$. Comme chaque cube fait $1\\,\\text{cm}^3$, il faut exactement $24$ cubes pour la remplir complètement.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        // Quatre TACHES distinctes (2026-09-08), et non quatre habillages du
        // meme calcul : le manuel appelle generate() en boucle et imprimait
        // sinon trois fois le volume d'un pave. Toutes restent au programme de
        // sixieme (volume du pave droit et du cube, unites de contenance).
        const variante = pick(['pave', 'cube', 'convertir', 'hauteur']);

        if (variante === 'pave') {
          const scenario = pick([
            { name: 'un coffre de rangement', Lrange: [20, 60], lrange: [15, 40], hrange: [10, 30] },
            { name: 'un bac à poissons', Lrange: [30, 80], lrange: [20, 40], hrange: [20, 50] },
            { name: 'une boîte à chaussures', Lrange: [25, 35], lrange: [12, 20], hrange: [8, 15] },
            { name: 'un réservoir', Lrange: [40, 100], lrange: [20, 50], hrange: [15, 40] }
          ]);
          const L = rand(scenario.Lrange[0], scenario.Lrange[1]);
          const l = rand(scenario.lrange[0], scenario.lrange[1]);
          const h = rand(scenario.hrange[0], scenario.hrange[1]);
          const vcm3 = L * l * h;
          const vL = parseFloat((vcm3 / 1000).toFixed(2));
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} mesure $${L}\\,\\text{cm}$ de long, $${l}\\,\\text{cm}$ de large et $${h}\\,\\text{cm}$ de haut. Calcule son volume en litres.`,
            // Perspective cavaliere aux dimensions du tirage (2026-09-12).
            // Trois longueurs enoncees a la file sont difficiles a tenir en
            // tete pour un eleve de sixieme : la figure les repartit sur les
            // trois aretes et rend visible ce qu'est « le volume ».
            figure: figurePave(L, l, h),
            answer: vL,
            tolerance: 0.01,
            unit: 'L',
            hint: `Calcule d'abord le volume en cm³ : $V = L \\times l \\times h$. Puis convertis : $1\\,\\text{L} = 1000\\,\\text{cm}^3$.`,
            solution: [
              `Vérifie l'homogénéité : toutes les dimensions sont en cm ✓`,
              `Calcul du volume : $V = ${L} \\times ${l} \\times ${h}$`,
              `$V = ${L * l} \\times ${h} = ${vcm3}\\,\\text{cm}^3$`,
              `Conversion cm³ → L : on divise par 1000 car $1\\,\\text{L} = 1000\\,\\text{cm}^3$`,
              `$V = \\dfrac{${vcm3}}{1000} = ${fr(vL)}\\,\\text{L}$`
            ]
          };
        }

        if (variante === 'cube') {
          const objet = pick(['un cube de rangement', 'un dé géant en mousse', 'un carton cubique', 'un aquarium cubique']);
          const c = rand(5, 20);
          const v = c * c * c;
          return {
            statement: `${objet.charAt(0).toUpperCase() + objet.slice(1)} a une arête de $${c}\\,\\text{cm}$. Calcule son volume en cm³.`,
            // Cube : une seule cote, celle de l'arete. La figure montre les
            // TROIS dimensions egales, qui est tout le contenu de l'exercice.
            figure: figurePave(c, c, c, { cube: true }),
            answer: v,
            tolerance: 0,
            unit: 'cm³',
            hint: `Dans un cube, les trois dimensions sont égales : $V = c \\times c \\times c$.`,
            solution: [
              `Un cube a ses trois arêtes de même longueur : $c = ${c}\\,\\text{cm}$.`,
              `$V = c \\times c \\times c = ${c} \\times ${c} \\times ${c}$`,
              `$V = ${c * c} \\times ${c} = ${v}\\,\\text{cm}^3$`
            ]
          };
        }

        if (variante === 'convertir') {
          // Conversion seule, sans calcul de volume : c'est la difficulte
          // propre du chapitre (1 L = 1 dm3 = 1000 cm3), souvent masquee
          // quand elle n'arrive qu'en fin de calcul.
          const sens = pick(['versL', 'versCm3']);
          if (sens === 'versL') {
            const vcm3 = rand(2, 45) * 500;
            const vL = parseFloat((vcm3 / 1000).toFixed(2));
            return {
              statement: `Une bouteille contient $${vcm3}\\,\\text{cm}^3$ de liquide. Exprime ce volume en litres.`,
              answer: vL,
              tolerance: 0.01,
              unit: 'L',
              hint: `$1\\,\\text{L} = 1000\\,\\text{cm}^3$ : pour passer des cm³ aux litres, on divise par $1000$.`,
              solution: [
                `On sait que $1\\,\\text{L} = 1000\\,\\text{cm}^3$.`,
                `Des cm³ vers les litres, on divise donc par $1000$ : $${vcm3} \\div 1000$.`,
                `$V = ${fr(vL)}\\,\\text{L}$`
              ]
            };
          }
          const vL = rand(1, 40) * 0.5;
          const vcm3 = Math.round(vL * 1000);
          return {
            statement: `Un arrosoir contient $${fr(vL)}\\,\\text{L}$ d'eau. Exprime ce volume en cm³.`,
            answer: vcm3,
            tolerance: 0,
            unit: 'cm³',
            hint: `$1\\,\\text{L} = 1000\\,\\text{cm}^3$ : pour passer des litres aux cm³, on multiplie par $1000$.`,
            solution: [
              `On sait que $1\\,\\text{L} = 1000\\,\\text{cm}^3$.`,
              `Des litres vers les cm³, on multiplie donc par $1000$ : $${fr(vL)} \\times 1000$.`,
              `$V = ${vcm3}\\,\\text{cm}^3$`
            ]
          };
        }

        // « hauteur » : le calcul inverse. On connait le volume et deux
        // dimensions, on cherche la troisieme — l'eleve doit voir la
        // multiplication comme reversible.
        const L = rand(4, 12), l = rand(3, 10), h = rand(2, 9);
        const v = L * l * h;
        // Volume d'au plus 1080 cm3 (un litre) : des objets qui tiennent dans
        // la main, pour que le contexte reste credible (2026-10-13).
        const objet = pick(['une boîte à bijoux', 'un étui à lunettes', 'une petite brique de jus', 'une boîte de craies']);
        return {
          statement: `${objet.charAt(0).toUpperCase() + objet.slice(1)} en forme de pavé droit a un volume de $${v}\\,\\text{cm}^3$. ` +
            `Sa longueur est de $${L}\\,\\text{cm}$ et sa largeur de $${l}\\,\\text{cm}$. Quelle est sa hauteur, en cm ?`,
          // Calcul inverse : la hauteur est la REPONSE, la figure ne la chiffre
          // donc pas (« h = ? »). Elle montre quelle arete est cherchee, ce qui
          // est precisement la difficulte — l'eleve confond souvent la hauteur
          // avec la largeur quand rien n'est dessine.
          figure: figurePave(L, l, h, { hauteurInconnue: true }),
          answer: h,
          tolerance: 0,
          unit: 'cm',
          hint: `Le volume vaut $L \\times l \\times h$. Commence par calculer l'aire de la base $${L} \\times ${l}$, puis remonte à $h$.`,
          solution: [
            `Le volume d'un pavé droit s'écrit $V = L \\times l \\times h$.`,
            `Aire de la base : $${L} \\times ${l} = ${L * l}\\,\\text{cm}^2$.`,
            `On cherche $h$ tel que $${L * l} \\times h = ${v}$, donc $h = ${v} \\div ${L * l}$.`,
            `$h = ${h}\\,\\text{cm}$`,
            `Vérification : $${L} \\times ${l} \\times ${h} = ${v}\\,\\text{cm}^3$ ✓`
          ]
        };
      }
    },
    probleme: {
      context: 'Un flacon a la forme d\'un pavé droit de dimensions $6\\,\\text{cm} \\times 4\\,\\text{cm} \\times 12\\,\\text{cm}$.',
      schema: null,
      tasks: [
        'Calculer le volume du flacon en cm³, puis le convertir en mL et en L.',
        'Le flacon est rempli aux trois quarts. Quel volume de liquide (en mL) contient-il ?',
        'Combien de flacons identiques, entièrement remplis, faut-il pour obtenir au moins $1$ L de liquide ?'
      ],
      solutions: [
        '$V = 6 \\times 4 \\times 12 = 288\\,\\text{cm}^3 = 288\\,\\text{mL} = 0{,}288\\,\\text{L}$.',
        'Trois quarts de $288$ mL : $\\dfrac{3}{4} \\times 288 = 216\\,\\text{mL}$.',
        'Avec $3$ flacons pleins : $3 \\times 288 = 864$ mL, ce qui ne suffit pas. Avec $4$ flacons : $4 \\times 288 = 1152$ mL $> 1$ L. Il faut donc $4$ flacons.'
      ],
      finalAnswer: '$V = 288\\,\\text{mL}$ par flacon plein, $216\\,\\text{mL}$ rempli aux trois quarts, et $4$ flacons suffisent pour dépasser $1$ L.'
    },

    evaluation: {
      title: 'Évaluation — Volumes',
      duration: '20 min',
      questions: [
        { statement: 'Un pavé droit mesure $15\\,\\text{cm}$ de long, $8\\,\\text{cm}$ de large et $6\\,\\text{cm}$ de haut. Calcule son volume en cm³.', type: 'numeric', answer: 720, tolerance: 0, unit: 'cm³', points: 2, correction: '$V = L \\times l \\times h = 15 \\times 8 \\times 6 = 720\\,\\text{cm}^3$.' },
        { statement: 'Convertis $3{,}5\\,\\text{L}$ en cm³.', type: 'numeric', answer: 3500, tolerance: 0, unit: 'cm³', points: 2, correction: '$1\\,\\text{L} = 1000\\,\\text{cm}^3$, donc $3{,}5\\,\\text{L} = 3{,}5 \\times 1000 = 3500\\,\\text{cm}^3$.' },
        { statement: 'Quelle est la relation correcte ?', type: 'multiple-choice', options: ['$1\\,\\text{m}^3 = 100\\,\\text{L}$', '$1\\,\\text{m}^3 = 1000\\,\\text{L}$', '$1\\,\\text{m}^3 = 10\\,000\\,\\text{L}$', '$1\\,\\text{m}^3 = 10\\,\\text{L}$'], answer: 1, points: 2, correction: '$1\\,\\text{m}^3 = 1000\\,\\text{L}$.' },
        // Competence « chercher » (2026-09-12). La correction invoquait une racine
        // cubique ($\sqrt[3]{125}$), notion du lycee, alors que l'eleve de sixieme
        // resout cette question par ESSAIS : il teste $4$, puis $5$, jusqu'a tomber
        // sur $125$. La consigne et la correction disent desormais cette demarche,
        // qui est celle que « chercher » designe au referentiel.
        { statement: 'Un cube a un volume de $125\\,\\text{cm}^3$.<br/><br/>Cherche la longueur de son arête, en cm, en essayant plusieurs valeurs.', type: 'numeric', answer: 5, tolerance: 0, unit: 'cm', points: 2, correction: 'Le volume d\'un cube d\'arête $a$ vaut $a \\times a \\times a$. Il n\'y a pas de formule à appliquer directement en sixième : on <strong>essaie</strong>.<br/><br/>Avec $a = 4$ : $4 \\times 4 \\times 4 = 64$, c\'est trop peu.<br/><br/>Avec $a = 5$ : $5 \\times 5 \\times 5 = 125$ ✓<br/><br/>Avec $a = 6$ : $6 \\times 6 \\times 6 = 216$, c\'est déjà trop.<br/><br/>L\'arête mesure donc $5$ cm. Deux ou trois essais bien menés suffisent : chaque essai indique s\'il faut monter ou descendre.' },
        { statement: 'Un bac de jardinage mesure $1\\,\\text{m}$ de long, $40\\,\\text{cm}$ de large et $25\\,\\text{cm}$ de haut. Calcule son volume en litres.', type: 'numeric', answer: 100, tolerance: 0, unit: 'L', points: 2, correction: 'Les dimensions ne sont pas dans la même unité : on convertit d\'abord <strong>$1\\,\\text{m} = 100\\,\\text{cm}$</strong>.<br/><br/>$V = 100 \\times 40 \\times 25 = 100\\,000\\,\\text{cm}^3$.<br/><br/>$1\\,\\text{L} = 1000\\,\\text{cm}^3$, donc $V = 100\\,000 \\div 1000 = 100\\,\\text{L}$.' }
      ]
    }
  });
