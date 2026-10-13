window.MODULES.push(
    {
    id: '4e-translations',
    level: 1, subject: 'maths',
    icon: '➡️',
    title: 'Translations et rotations',
    subtitle: 'Image d\'un point, vecteur de translation',
    keywords: ['Translation', 'Rotation', 'Vecteur', 'Image', 'Isométrie'],
    physics: false,
    cours: {
      /* DECOUVRIR reecrit le 2026-09-13. L'intro definissait la translation et
         disait ce qu'elle n'est pas. On ouvre sur un besoin d'ECRITURE : deux
         deplacements decrits en mots (« trois cases a droite, deux en haut »)
         que rien, dans les outils de cinquieme, ne permet d'additionner. Le
         vecteur apparait comme la notation qui manque, pas comme un objet
         tombe du cours. */
      intro: 'Un robot d\'entrepôt reçoit deux consignes : « avance de $5$ cases vers la droite et de $1$ case vers le bas », puis « avance de $2$ cases vers la gauche et de $3$ cases vers le haut ». Où arrive-t-il ?<br/><br/>' +
        'Tu peux le suivre case par case sur un quadrillage, et tu trouveras. Mais s\'il reçoit trente consignes, ou si tu dois programmer la machine, dessiner ne suffit plus : il faut pouvoir <strong>calculer</strong> le déplacement total.<br/><br/>' +
        'Pour cela, il faut d\'abord une façon d\'écrire un déplacement comme un objet unique, qu\'on puisse additionner à un autre. C\'est ce que ce chapitre introduit.<br/><br/>' +
        'Une translation déplace tous les points du plan du <strong>même vecteur</strong> $\\vec{v}$ — même direction, même sens, même longueur. Ce n\'est pas une rotation ni une symétrie : l\'orientation reste identique, les figures ne sont pas retournées.' +
        '<br/><br/>' +
        'Une rotation de centre $O$ et d\'angle $\\theta$ tourne chaque point autour de $O$, en conservant la distance $OA$. Ces deux transformations sont des <strong>isométries directes</strong> : elles conservent distances, angles, aires, et l\'orientation (sens des sommets).' +
        '<br/><br/>' +
        'La translation et la rotation sont omniprésentes en physique : déplacement d\'un solide en translation pure (toutes les parties ont la même vitesse), rotation d\'une roue, mouvement orbital.' +
        '<br/><br/>' +
        'Composition de deux translations = une translation (les vecteurs s\'additionnent). C\'est un outil puissant pour enchaîner des déplacements.',
      definitions: [
        { term: 'Translation', def: 'Transformation qui déplace chaque point du plan d\'un même vecteur $\\vec{v}$. La figure glisse sans tourner ni se déformer.' },
        { term: 'Vecteur de translation', def: 'Caractérisé par sa direction, son sens et sa longueur (norme). Noté $\\vec{v}(a ; b)$ en coordonnées.' },
        { term: 'Rotation', def: 'Transformation qui fait tourner chaque point autour d\'un centre $O$ d\'un angle $\\theta$, en conservant la distance au centre.' },
        { term: 'Isométrie', def: 'Transformation qui conserve les distances. La translation et la rotation sont des isométries directes (elles conservent aussi l\'orientation).' }
      ],
      method: {
        title: 'Méthode',
        steps: [
          '<strong>Translation</strong> de vecteur $\\vec{v}(a ; b)$ : image de $A(x ; y)$ → $A\'(x + a ; y + b)$. <strong>Exemple :</strong> $A(3 ; 1)$ et $\\vec{v}(2 ; -4)$ → $A\'(3+2 ; 1+(-4)) = A\'(5 ; -3)$.',
          '<strong>Rotation</strong> de centre $O$ et d\'angle $\\theta$ : l\'image $A\'$ est telle que $OA\' = OA$ et l\'angle $\\widehat{AOA\'} = \\theta$. <strong>Exemple :</strong> rotation de $180°$ autour de l\'origine : $A(2 ; 3)$ → $A\'(-2 ; -3)$.',
          '<strong>Propriété d\'isométrie</strong> : les deux transformations conservent longueurs, angles et aires (isométries directes). <strong>Exemple :</strong> un carré de côté $5$ cm translaté reste un carré de côté $5$ cm.'
        ]
      },
      example: {
        statement: 'Sur un plan quadrillé, un bateau $B$ est en $(1 ; 3)$. Le courant le déplace selon le vecteur $\\vec{v}(4 ; -2)$. Où se trouve le bateau après ce déplacement ?',
        steps: [
          'On applique la formule de la translation : $B\'(x_B + a \\,;\\, y_B + b)$.',
          '$B\'(1 + 4 \\,;\\, 3 + (-2)) = B\'(5 \\,;\\, 1)$.',
          'Vérification : la distance parcourue est $\\|\\vec{v}\\| = \\sqrt{4^2 + (-2)^2} = \\sqrt{20} \\approx 4{,}5$ unités.'
        ],
        answer: 'Le bateau arrive en $B\'(5 ; 1)$, ayant parcouru environ $4{,}5$ unités.'
      },
      formulas: [
        'Translation $\\vec{v}(a;b)$ : $A(x;y) \\to A\'(x+a\\,;\\,y+b)$',
        'Rotation de $180°$ autour de $O$ : $A(x;y) \\to A\'(2x_O - x\\,;\\,2y_O - y)$',
        '$|OA\'| = |OA|$ (rotation conserve les distances)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Translation dans le plan',
        title: 'Construire l\'image d\'un point par une translation de vecteur $\\vec{v}(a\\,;\\,b)$',
        description: 'Reprise de l\'exemple du cours : $A(3\\,;\\,1)$ et $\\vec{v}(2\\,;\\,-4)$ donnent $A\'(3+2\\,;\\,1+(-4)) = A\'(5\\,;\\,-3)$.',
        svg: `
          <svg viewBox="0 0 360 300" role="img" aria-labelledby="translation-graph-title translation-graph-desc">
            <title id="translation-graph-title">Translation du point A par le vecteur v</title>
            <desc id="translation-graph-desc">Repere avec le point A en 3 ; 1 et son image A prime en 5 ; -3 par la translation de vecteur v de coordonnées 2 ; -4, avec la fleche du vecteur tracee entre les deux points.</desc>

            <line class="grid-line" x1="50" y1="20" x2="50" y2="272"></line>
            <line class="grid-line" x1="86" y1="20" x2="86" y2="272"></line>
            <line class="grid-line" x1="122" y1="20" x2="122" y2="272"></line>
            <line class="grid-line" x1="158" y1="20" x2="158" y2="272"></line>
            <line class="grid-line" x1="194" y1="20" x2="194" y2="272"></line>
            <line class="grid-line" x1="230" y1="20" x2="230" y2="272"></line>
            <line class="grid-line" x1="266" y1="20" x2="266" y2="272"></line>
            <line class="grid-line" x1="302" y1="20" x2="302" y2="272"></line>
            <line class="grid-line" x1="50" y1="272" x2="302" y2="272"></line>
            <line class="grid-line" x1="50" y1="236" x2="302" y2="236"></line>
            <line class="grid-line" x1="50" y1="200" x2="302" y2="200"></line>
            <line class="grid-line" x1="50" y1="164" x2="302" y2="164"></line>
            <line class="grid-line" x1="50" y1="128" x2="302" y2="128"></line>
            <line class="grid-line" x1="50" y1="92" x2="302" y2="92"></line>
            <line class="grid-line" x1="50" y1="56" x2="302" y2="56"></line>
            <line class="grid-line" x1="50" y1="20" x2="302" y2="20"></line>

            <line class="axis" x1="44" y1="128" x2="312" y2="128"></line>
            <line class="axis" x1="86" y1="280" x2="86" y2="12"></line>
            <text class="axis-label" x="316" y="132">x</text>
            <text class="axis-label" x="92" y="16">y</text>

            <text class="tick-label" x="82" y="146">0</text>
            <text class="tick-label" x="118" y="146">1</text>
            <text class="tick-label" x="154" y="146">2</text>
            <text class="tick-label" x="190" y="146">3</text>
            <text class="tick-label" x="226" y="146">4</text>
            <text class="tick-label" x="262" y="146">5</text>
            <text class="tick-label" x="60" y="276">-4</text>
            <text class="tick-label" x="64" y="240">-3</text>
            <text class="tick-label" x="64" y="204">-2</text>
            <text class="tick-label" x="64" y="168">-1</text>
            <text class="tick-label" x="72" y="96">1</text>
            <text class="tick-label" x="72" y="60">2</text>

            <line class="guide-line" x1="194" y1="92" x2="266" y2="92"></line>
            <line class="guide-line" x1="266" y1="92" x2="266" y2="236"></line>
            <text class="annotation-label" x="210" y="82">a = 2</text>
            <text class="annotation-label" x="272" y="168">b = -4</text>

            <line class="curve-main" x1="194" y1="92" x2="260" y2="223"></line>
            <polygon points="266,236 254,226 265,221" fill="var(--diagram-accent)" stroke="none"></polygon>
            <text class="annotation-label" x="150" y="192">v(2 ; -4)</text>

            <circle class="plot-point-alt" cx="194" cy="92" r="6"></circle>
            <circle class="plot-point" cx="266" cy="236" r="6"></circle>
            <text class="annotation-label" x="138" y="80">A(3 ; 1)</text>
            <text class="annotation-label" x="252" y="256">A'(5 ; -3)</text>
          </svg>
        `,
        notes: [
          'Le vecteur $\\vec{v}(2\\,;\\,-4)$ donne le déplacement : on avance de $2$ vers la droite (abscisse) puis de $4$ vers le bas (ordonnée négative).',
          'La flèche relie directement $A$ à son image $A\'$ : c\'est le même vecteur $\\vec{v}$ qui déplacerait n\'importe quel autre point du plan.',
          'Vérification par coordonnées : $A\'(3+2\\,;\\,1+(-4)) = A\'(5\\,;\\,-3)$, exactement le point marqué sur le graphique.'
        ],
        reading: 'Le trajet en escalier (pointillés) montre séparément l\'effet de $a$ puis de $b$ ; la flèche pleine montre le vecteur réel $\\vec{v}$ qui va directement de $A$ à $A\'$.',
        caption: 'Translation du point $A(3\\,;\\,1)$ par le vecteur $\\vec{v}(2\\,;\\,-4)$, donnant l\'image $A\'(5\\,;\\,-3)$ — exemple repris de la méthode du cours.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13). Une figure par MALENTENDU :
         1. un vecteur n'est pas un point : le meme vecteur se dessine
            n'importe ou, ce qui deroute l'eleve habitue aux coordonnees ;
         2. enchainer deux translations revient a UNE seule, dont le vecteur
            s'obtient en ajoutant les coordonnees (repond a l'intro) ;
         3. une translation conserve les longueurs, les angles et l'aire :
            ce n'est ni une rotation ni un agrandissement.
         Coordonnees verifiees : u(5;-1) puis v(-2;3) donne bien (3;2), et
         A(-2;3) arrive en (1;5) par les deux chemins (scratchpad geo-all.js). */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Un vecteur n\'est pas un point',
          title: 'Le même vecteur peut se dessiner n\'importe où',
          description: 'Un point a une place unique sur le quadrillage. Un vecteur, lui, ne dit qu\'une chose : <strong>de combien on se déplace</strong>. Les trois flèches ci-dessous sont donc <strong>le même vecteur</strong>, malgré des positions différentes.',
          svg: `
            <svg viewBox="0 0 400 200" role="img" aria-labelledby="trans-vect-title trans-vect-desc">
              <title id="trans-vect-title">Trois representations du meme vecteur sur un quadrillage</title>
              <desc id="trans-vect-desc">Sur un quadrillage, trois fleches sont tracees a des endroits differents. Chacune avance de trois carreaux vers la droite et monte de deux carreaux. Comme elles ont la meme direction, le meme sens et la meme longueur, elles representent toutes le meme vecteur, meme si leurs points de depart et d'arrivee sont differents.</desc>

              <!-- Quadrillage au pas de 24. Les trois fleches ont TOUTES le
                   meme deplacement (+3 ; -2 en coordonnees ecran, soit 3
                   carreaux a droite et 2 vers le haut) : c'est verifiable a la
                   regle sur la figure imprimee. -->
              <line class="grid-line" x1="28" y1="40" x2="364" y2="40"></line>
              <line class="grid-line" x1="28" y1="64" x2="364" y2="64"></line>
              <line class="grid-line" x1="28" y1="88" x2="364" y2="88"></line>
              <line class="grid-line" x1="28" y1="112" x2="364" y2="112"></line>
              <line class="grid-line" x1="28" y1="136" x2="364" y2="136"></line>
              <line class="grid-line" x1="28" y1="160" x2="364" y2="160"></line>
              <line class="grid-line" x1="52" y1="34" x2="52" y2="166"></line>
              <line class="grid-line" x1="100" y1="34" x2="100" y2="166"></line>
              <line class="grid-line" x1="148" y1="34" x2="148" y2="166"></line>
              <line class="grid-line" x1="196" y1="34" x2="196" y2="166"></line>
              <line class="grid-line" x1="244" y1="34" x2="244" y2="166"></line>
              <line class="grid-line" x1="292" y1="34" x2="292" y2="166"></line>
              <line class="grid-line" x1="340" y1="34" x2="340" y2="166"></line>

              <line class="curve-main" x1="52" y1="160" x2="124" y2="112"></line>
              <polygon class="plot-point" points="124,112 113,114 118,121"></polygon>

              <line class="curve-main" x1="148" y1="136" x2="220" y2="88"></line>
              <polygon class="plot-point" points="220,88 209,90 214,97"></polygon>

              <line class="curve-main" x1="244" y1="112" x2="316" y2="64"></line>
              <polygon class="plot-point" points="316,64 305,66 310,73"></polygon>

              <text class="tick-label" x="200" y="188" text-anchor="middle">trois flèches, un seul vecteur : 3 carreaux à droite, 2 vers le haut</text>
            </svg>
          `,
          notes: [
            'Ce qui définit un vecteur, ce sont trois choses : sa <strong>direction</strong>, son <strong>sens</strong> et sa <strong>longueur</strong>. Jamais sa position.',
            'Les trois flèches ont les mêmes coordonnées, ici $(3\\,;\\,2)$ en carreaux : elles sont donc égales, au sens des vecteurs.',
            'C\'est ce qui rend la translation utile : un seul vecteur suffit à déplacer <strong>tous</strong> les points de la figure d\'un coup.'
          ],
          reading: 'Compte les carreaux pour chaque flèche : trois à droite, deux vers le haut, à chaque fois. Le point de départ n\'entre pas dans la définition.',
          caption: 'Trois flèches de même direction, même sens et même longueur : c\'est un seul et même vecteur.'
        },
        {
          theme: 'maths',
          kicker: 'La réponse à la question d\'ouverture',
          title: 'Deux translations enchaînées en font une seule',
          description: 'Le robot de l\'introduction reçoit deux consignes. Plutôt que de le suivre case par case, on peut <strong>additionner les deux vecteurs</strong> : le résultat est un unique vecteur qui mène directement à l\'arrivée.',
          svg: `
            <svg viewBox="0 0 400 196" role="img" aria-labelledby="trans-somme-title trans-somme-desc">
              <title id="trans-somme-title">Somme de deux vecteurs par la relation de Chasles</title>
              <desc id="trans-somme-desc">Un point de depart A est relie a un point intermediaire par un premier vecteur qui avance de cinq carreaux vers la droite et descend d'un carreau. Depuis ce point intermediaire, un second vecteur recule de deux carreaux et monte de trois carreaux, menant au point d'arrivee. Une troisieme fleche, tracee en trait plein, relie directement A au point d'arrivee : elle avance de trois carreaux et monte de deux, ce qui correspond a la somme des coordonnees des deux premiers vecteurs.</desc>

              <!-- Pas de 24. A = (64,140). u(5;-1) -> ecran (+120 ; +24) donne
                   (184,164)... trop bas : on prend u(5;-1) avec l'axe des y
                   MATHEMATIQUE (vers le haut), donc ecran = (+120 ; -(-24)).
                   A' = (184, 164) serait sous le cadre : on translate tout le
                   dessin vers le haut. A = (64,116), A' = (184,140),
                   A'' = (136,68). Verifie : u+v = (3;2) et A'' - A en carreaux
                   = ((136-64)/24 ; (116-68)/24) = (3 ; 2). -->
              <line class="grid-line" x1="40" y1="44" x2="376" y2="44"></line>
              <line class="grid-line" x1="40" y1="68" x2="376" y2="68"></line>
              <line class="grid-line" x1="40" y1="92" x2="376" y2="92"></line>
              <line class="grid-line" x1="40" y1="116" x2="376" y2="116"></line>
              <line class="grid-line" x1="40" y1="140" x2="376" y2="140"></line>
              <line class="grid-line" x1="64" y1="38" x2="64" y2="146"></line>
              <line class="grid-line" x1="88" y1="38" x2="88" y2="146"></line>
              <line class="grid-line" x1="112" y1="38" x2="112" y2="146"></line>
              <line class="grid-line" x1="136" y1="38" x2="136" y2="146"></line>
              <line class="grid-line" x1="160" y1="38" x2="160" y2="146"></line>
              <line class="grid-line" x1="184" y1="38" x2="184" y2="146"></line>

              <line class="guide-line" x1="64" y1="116" x2="184" y2="140"></line>
              <polygon class="plot-point-alt" points="184,140 173,137 175,145"></polygon>
              <text class="tick-label" x="124" y="158" text-anchor="middle">1re consigne</text>

              <line class="guide-line" x1="184" y1="140" x2="136" y2="68"></line>
              <polygon class="plot-point-alt" points="136,68 139,79 146,74"></polygon>
              <text class="tick-label" x="196" y="100" text-anchor="start">2e consigne</text>

              <line class="curve-main" x1="64" y1="116" x2="136" y2="68"></line>
              <polygon class="plot-point" points="136,68 125,70 130,77"></polygon>
              <text class="annotation-label" x="72" y="86" text-anchor="start">tout droit</text>

              <circle class="plot-point" cx="64" cy="116" r="4"></circle>
              <circle class="plot-point" cx="136" cy="68" r="4"></circle>
              <text class="annotation-label" x="56" y="128" text-anchor="end">départ</text>
              <text class="annotation-label" x="130" y="60" text-anchor="end">arrivée</text>
              <text class="tick-label" x="200" y="186" text-anchor="middle">le trait plein remplace les deux pointillés</text>
            </svg>
          `,
          notes: [
            'Première consigne $\\vec{u}(5\\,;\\,-1)$, seconde $\\vec{v}(-2\\,;\\,3)$ : on additionne <strong>abscisse avec abscisse</strong> et <strong>ordonnée avec ordonnée</strong>.',
            '$\\vec{u} + \\vec{v} = (5 + (-2)\\,;\\,-1 + 3) = (3\\,;\\,2)$ : c\'est exactement la flèche en trait plein.',
            'Peu importe le chemin suivi : seul compte le point d\'arrivée. Trente consignes se résument encore à une seule addition.'
          ],
          reading: 'Suis d\'abord les deux pointillés, puis le trait plein. Ils aboutissent au même endroit — mais le trait plein s\'obtient par un calcul, sans rien dessiner.',
          caption: 'Deux translations enchaînées équivalent à une seule, de vecteur la somme des deux.'
        },
        {
          theme: 'maths',
          kicker: 'Ce qui ne change pas',
          title: 'La figure glisse sans se déformer',
          description: 'Une translation <strong>ne change ni les longueurs, ni les angles, ni l\'aire</strong>. La figure ne tourne pas, ne se retourne pas et ne grandit pas : elle glisse, c\'est tout.',
          svg: `
            <svg viewBox="0 0 400 180" role="img" aria-labelledby="trans-conserve-title trans-conserve-desc">
              <title id="trans-conserve-title">Un triangle et son image par translation</title>
              <desc id="trans-conserve-desc">Un triangle est dessine a gauche et son image par translation a droite. Les deux triangles sont rigoureusement identiques : memes longueurs de cotes, memes angles, meme aire, et meme orientation. Trois fleches paralleles de meme longueur relient chaque sommet a son image, ce qui montre que tous les points ont subi exactement le meme deplacement.</desc>

              <!-- Le triangle image est le triangle de depart translate de
                   (+160 ; -20) EXACTEMENT sur les trois sommets : c'est ce qui
                   fait qu'il est superposable, et les trois fleches de liaison
                   sont donc rigoureusement paralleles et de meme longueur. -->
              <polygon class="frame-line" points="40,140 128,140 76,72" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></polygon>
              <polygon class="frame-line" points="200,120 288,120 236,52" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></polygon>

              <line class="guide-line" x1="40" y1="140" x2="200" y2="120"></line>
              <line class="guide-line" x1="128" y1="140" x2="288" y2="120"></line>
              <line class="guide-line" x1="76" y1="72" x2="236" y2="52"></line>
              <polygon class="plot-point-alt" points="200,120 189,119 191,126"></polygon>
              <polygon class="plot-point-alt" points="288,120 277,119 279,126"></polygon>
              <polygon class="plot-point-alt" points="236,52 225,51 227,58"></polygon>

              <text class="tick-label" x="84" y="164" text-anchor="middle">figure de départ</text>
              <text class="tick-label" x="244" y="164" text-anchor="middle">son image</text>
              <text class="tick-label" x="200" y="26" text-anchor="middle">les trois flèches sont parallèles et de même longueur</text>
            </svg>
          `,
          notes: [
            'Les deux triangles sont <strong>superposables</strong> : on passe de l\'un à l\'autre en glissant, sans tourner ni retourner.',
            'Les trois flèches de liaison sont parallèles et de même longueur — c\'est la signature d\'une translation, et ce qui la distingue d\'une rotation.',
            'Conséquence directe : si la figure de départ a une aire de $24$ cm², son image a <strong>exactement</strong> la même aire.'
          ],
          reading: 'Vérifie sur la figure que les trois flèches sont parallèles. Si l\'une d\'elles penchait autrement, il ne s\'agirait plus d\'une translation.',
          caption: 'Une translation conserve les longueurs, les angles et l\'aire : la figure glisse sans se déformer.'
        }
      ],
      recap: [
        'Translation : chaque point se déplace du même vecteur $\\vec{v}(a ; b)$ → on ajoute $a$ à l\'abscisse et $b$ à l\'ordonnée.',
        'Rotation : chaque point tourne autour d\'un centre $O$ en conservant sa distance à $O$.',
        'Ces deux transformations sont des isométries : elles conservent distances, angles et aires.',
        'La composition de deux translations est une translation dont le vecteur est la somme des deux vecteurs.'
      ],
      piege: 'Piège : lors d\'une translation, tous les points se déplacent du MÊME vecteur. On ne tourne pas, on ne dilate pas. Le vecteur $\\vec{v}$ a une direction, un sens ET une longueur.'
    },
    quiz: [
      {
        q: 'Le point $A(2 ; 3)$ subit une translation de vecteur $\\vec{v}(4 ; -1)$. Quelle est l\'image $A\'$ ?',
        options: ['$(6 ; 2)$', '$(-2 ; 4)$', '$(6 ; -3)$', '$(8 ; -3)$'],
        answer: 0,
        correction: '$A\'(2 + 4 \\,;\\, 3 + (-1)) = A\'(6 \\,;\\, 2)$.'
      },
      {
        q: 'Une rotation conserve-t-elle les aires des figures ?',
        options: ['Non, elle les agrandit', 'Non, elle les réduit', 'Oui, c\'est une isométrie', 'Seulement pour les cercles'],
        answer: 2,
        correction: 'La rotation est une isométrie directe : elle conserve toutes les distances, les angles, et donc les aires.'
      },
      {
        q: 'Un triangle $ABC$ subit une rotation de $90°$ autour de l\'origine. L\'élève affirme que les longueurs des côtés changent car le triangle « pivote ». A-t-il raison ?',
        options: [
          'Oui : tourner un triangle modifie ses proportions.',
          'Non : la rotation est une isométrie — elle conserve exactement toutes les distances et tous les angles.',
          'Oui, mais seulement si l\'angle de rotation est supérieur à $90°$.',
          'Cela dépend de la position du centre de rotation.'
        ],
        answer: 1,
        correction: 'La rotation est une isométrie : distances, angles et aires sont rigoureusement conservés, quelle que soit l\'amplitude de la rotation ou la position du centre. Le triangle conserve sa forme exacte — il est seulement « orienté » différemment dans le plan. C\'est la même propriété que pour la symétrie axiale et la translation.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          {intro:'Un drone se déplace sur une carte', emoji:'🛸'},
          {intro:'Un robot avance dans un entrepôt', emoji:'🤖'},
          {intro:'Un pion se déplace sur un plateau de jeu', emoji:'🎲'},
          {intro:'Un navire change de cap sur la carte marine', emoji:'🚢'},
          {intro:'Un satellite se repositionne en orbite', emoji:'🛰️'}
        ]);
        const ax = rand(-5, 5), ay = rand(-5, 5);
        const vx = rand(-4, 4), vy = rand(-4, 4);
        return {
          statement: `${ctx.emoji} ${ctx.intro}. Le point $A(${ax} ; ${ay})$ subit une translation de vecteur $\\vec{v}(${vx} ; ${vy})$. Quelle est l'abscisse de l'image $A'$ ?`,
          answer: ax + vx,
          tolerance: 0,
          unit: '',
          hint: `$x_{A'} = x_A + v_x = ${ax} + (${vx})$.`,
          solution: [`$x_{A'} = ${ax} + (${vx}) = ${ax + vx}$ et $y_{A'} = ${ay} + (${vy}) = ${ay + vy}$.`]
        };
      }
    },
    probleme: {
      context: 'Sur un plan de ville, le parc $P$ est en $(1 ; 2)$, la mairie $M$ est en $(5 ; 4)$. Une nouvelle fontaine $F$ sera placée par translation de $\\vec{PM}$ à partir du marché $C(3 ; 1)$.',
      tasks: [
        'Calculer le vecteur $\\vec{PM}$.',
        'Calculer les coordonnées de la fontaine $F$ (image de $C$ par la translation $\\vec{PM}$).',
        'Vérifier que $CF = PM$ (la translation conserve les distances).'
      ],
      solutions: [
        '$\\vec{PM}(5-1 \\,;\\, 4-2) = \\vec{PM}(4 ; 2)$.',
        '$F(3+4 \\,;\\, 1+2) = F(7 ; 3)$.',
        '$CF = \\sqrt{(7-3)^2+(3-1)^2} = \\sqrt{16+4} = \\sqrt{20}$ et $PM = \\sqrt{4^2+2^2} = \\sqrt{20}$ ✓.'
      ],
      finalAnswer: 'La fontaine est placée en $F(7 ; 3)$.'
    },

    evaluation: {
      title: 'Évaluation — Translations et Rotations',
      duration: '25 min',
      questions: [
        {
          statement: 'Le point $A(3 ; -2)$ subit une translation de vecteur $\\vec{v}(-5 ; 4)$. Quelles sont les coordonnées de l\'image $A\'$ ?',
          type: 'multiple-choice',
          options: ['$(-2 ; 2)$', '$(8 ; -6)$', '$(-2 ; -6)$', '$(8 ; 2)$'],
          answer: 0,
          points: 2,
          correction: '$A\'(3 + (-5) \\;;\\; -2 + 4) = A\'(-2 \\;;\\; 2)$.'
        },
        {
          statement: 'Le point $B(-1 ; 5)$ a pour image $B\'(2 ; 1)$ par une translation de vecteur $\\vec{v}(a ; b)$. Calculer $a$.',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$a = x_{B\'} - x_B = 2 - (-1) = 3$.'
        },
        {
          statement: 'Le point $B(-1 ; 5)$ a pour image $B\'(2 ; 1)$ par une translation de vecteur $\\vec{v}(a ; b)$. Calculer $b$.',
          type: 'numeric',
          answer: -4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$b = y_{B\'} - y_B = 1 - 5 = -4$.'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-13 pour mobiliser « chercher ». L'ancien
             énoncé appliquait une rotation de 180° à un point, ce que le cours
             donne tel quel. Ici l'élève doit COMPOSER deux translations et
             comprendre qu'une seule suffit à décrire le trajet entier — rien dans
             l'énoncé ne le suggère. */
          statement: 'Un robot part du point $A(-2 ; 3)$. Il subit d\'abord une translation de vecteur $\\vec{u}(5 ; -1)$, puis une translation de vecteur $\\vec{v}(-3 ; 4)$. Une seule translation mène directement de $A$ à son image finale : quelle est son abscisse ?',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Deux translations enchaînées équivalent à une seule, dont le vecteur est la somme des deux.<br/><br/>' +
            'Abscisse du vecteur résultant : $5 + (-3) = 2$. Ordonnée : $-1 + 4 = 3$.<br/><br/>' +
            'La translation unique a donc pour vecteur $\\vec{w}(2 ; 3)$, et son abscisse vaut $2$.<br/><br/>' +
            'Contrôle par le trajet complet : $A(-2 ; 3)$ devient $(3 ; 2)$, puis $(0 ; 6)$. Et $(-2) + 2 = 0$ : on retombe bien sur la même image finale. ✓'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-13 pour mobiliser « communiquer ». L'ancienne
             question demandait une longueur que son propre corrigé donnait en une
             ligne (« la translation conserve les distances »), donc du calcul
             déguisé. Ici l'élève doit expliquer POURQUOI une aire est conservée,
             ce qui suppose d'articuler conservation des longueurs et conservation
             de la forme. */
          statement: 'Un triangle d\'aire $24\\,\\text{cm}^2$ subit une translation. Un élève affirme que son image a aussi une aire de $24\\,\\text{cm}^2$. Quelle explication justifie le mieux son affirmation ?',
          type: 'multiple-choice',
          options: [
            'Il se trompe : une translation déplace la figure, donc son aire change selon la longueur du déplacement.',
            'Il a raison : une translation conserve toutes les longueurs, donc la figure image a exactement les mêmes côtés et la même forme que l\'originale — c\'est la même figure, simplement ailleurs.',
            'Il a raison, mais uniquement parce que le vecteur de translation est horizontal.',
            'Il a raison parce qu\'une translation conserve les aires alors qu\'elle ne conserve pas les longueurs.'
          ],
          answer: 1,
          points: 2,
          correction: 'Une translation est une <strong>isométrie</strong> : elle conserve toutes les distances. L\'image d\'un segment est un segment de même longueur.<br/><br/>' +
            'Les trois côtés de l\'image ont donc les mêmes longueurs que ceux de l\'originale : c\'est le même triangle, simplement déplacé. Son aire est nécessairement la même, $24\\,\\text{cm}^2$.<br/><br/>' +
            'La proposition 3 est fausse : la direction du vecteur ne change rien. La proposition 4 inverse le raisonnement — c\'est parce que les longueurs sont conservées que l\'aire l\'est, et non l\'inverse.'
        }
      ]
    }
  }
);
