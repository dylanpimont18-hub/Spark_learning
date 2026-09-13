/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-probabilites.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-probabilites',
    level: 2, subject: 'maths',
    icon: '🎲',
    title: 'Probabilités',
    subtitle: 'Modèle, loi, événements',
    keywords: ['Probabilité', 'Événement', 'Univers', 'Équiprobabilité', 'Complémentaire'],
    physics: false,
    cours: {
      /* « Découvrir » RÉÉCRIT le 2026-09-13.

         L'ancienne version ouvrait sur « Une expérience aléatoire est une
         expérience dont le résultat ne peut pas être prédit » : une
         définition, donc l'entrée que le cahier des charges proscrit.

         La situation retenue est celle où l'INTUITION DONNE UNE RÉPONSE
         FAUSSE, ce qui est la marque de ce chapitre : ailleurs l'élève
         ignore, ici il croit savoir. Le sophisme du joueur est la croyance
         la plus répandue sur le hasard, elle est forgée hors de l'école, et
         aucun énoncé de définition ne la déloge.

         Le test tient : on ne peut pas répondre « la pièce est-elle en
         retard ? » sans la notion d'indépendance — et la réponse contredit
         ce que presque tout le monde répond spontanément. Entrée non
         décorative : c'est la difficulté centrale du chapitre. */
      intro: 'Tu lances une pièce équilibrée. Elle tombe sur pile. Tu recommences : pile. Encore : pile.<br/><br/>' +
        'Neuf fois de suite, pile.<br/><br/>' +
        'Au dixième lancer, quelle est la probabilité d\'obtenir face ?<br/><br/>' +
        'Presque tout le monde répond « plus d\'une chance sur deux », parce que face <strong>est en retard</strong>. C\'est faux, et c\'est sans doute la croyance la plus répandue au monde sur le hasard.<br/><br/>' +
        'La réponse est exactement $\\dfrac{1}{2}$, comme au premier lancer. La raison tient en une question : <strong>la pièce se souvient-elle des neuf lancers précédents ?</strong> Elle n\'a ni mémoire, ni mécanisme pour rattraper quoi que ce soit. Chaque lancer recommence à zéro.<br/><br/>' +
        'Alors pourquoi dit-on que les fréquences finissent par s\'équilibrer ? Parce que sur dix mille lancers, une avance de neuf piles devient <strong>négligeable</strong> — pas parce qu\'elle est compensée. C\'est une dilution, jamais un rattrapage, et toute la différence est là.<br/><br/>' +
        'Ce chapitre te donne de quoi raisonner sur l\'aléatoire au lieu de te fier à ton intuition, qui te trompera encore souvent cette année. Tu apprendras à décrire toutes les issues possibles, à calculer une probabilité, et à combiner deux événements sans compter deux fois ce qui leur est commun.',
      definitions: [
        { term: 'Expérience aléatoire', def: 'Expérience dont le résultat ne peut pas être prédit à l\'avance (ex. : lancer un dé, tirer une carte).' },
        { term: 'Univers $\\Omega$', def: 'Ensemble de toutes les issues possibles d\'une expérience aléatoire. Ex. : dé à $6$ faces → $\\Omega = \\{1;2;3;4;5;6\\}$.' },
        { term: 'Événement', def: 'Sous-ensemble de $\\Omega$. Ex. : « obtenir un nombre pair » $= \\{2;4;6\\}$.' },
        { term: 'Événement contraire', def: '$\\bar{A}$ contient toutes les issues de $\\Omega$ qui ne sont pas dans $A$. On a $P(\\bar{A}) = 1 - P(A)$.' }
      ],
      method: {
        title: 'Calculer une probabilité',
        steps: [
          '<strong>Définir l\'univers $\\Omega$</strong> et vérifier si les issues sont équiprobables. <strong>Exemple :</strong> Dé équilibré à $6$ faces → $\\Omega = \\{1;2;3;4;5;6\\}$, équiprobabilité.',
          '<strong>Compter les issues favorables</strong> à $A$. <strong>Exemple :</strong> $A$ = « obtenir un multiple de $3$ » → $A = \\{3;6\\}$, soit $2$ issues.',
          '<strong>Appliquer la formule</strong> $P(A) = \\frac{\\text{nombre d\'issues favorables}}{\\text{nombre total d\'issues}}$ si équiprobabilité. <strong>Exemple :</strong> $P(A) = \\frac{2}{6} = \\frac{1}{3}$.',
          '<strong>Événement contraire</strong> : utiliser $P(\\bar{A}) = 1 - P(A)$. <strong>Exemple :</strong> $P(\\bar{A}) = 1 - \\frac{1}{3} = \\frac{2}{3}$ (ne pas obtenir un multiple de $3$).'
        ]
      },
      example: {
        statement: 'Dans une classe de $30$ élèves, $12$ pratiquent le basketball ($B$), $10$ font de la natation ($N$), et $4$ font les deux. On choisit un élève au hasard. Calculer $P(B \\cup N)$.',
        steps: [
          'On identifie : $P(B) = \\frac{12}{30}$, $P(N) = \\frac{10}{30}$, $P(B \\cap N) = \\frac{4}{30}$.',
          'Formule d\'addition : $P(B \\cup N) = P(B) + P(N) - P(B \\cap N) = \\frac{12}{30} + \\frac{10}{30} - \\frac{4}{30} = \\frac{18}{30} = 0{,}6$.',
          'Vérification : $18$ élèves font au moins un des deux sports (parmi $30$).'
        ],
        answer: '$P(B \\cup N) = 0{,}6$ : la probabilité qu\'un élève pratique au moins l\'un des deux sports est $60\\%$.'
      },
      formulas: [
        '$P(A) = \\dfrac{|A|}{|\\Omega|}$ (cas équiprobable)',
        '$P(\\bar{A}) = 1 - P(A)$',
        '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$',
        '$0 \\le P(A) \\le 1$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Diagramme de Venn',
        title: 'Union et intersection sur l\'exemple de la classe de 30 élèves',
        description: 'Dans une classe de $30$ élèves : $B$ = « pratiquer le basketball » ($12$ élèves), $N$ = « faire de la natation » ($10$ élèves), et $4$ élèves pratiquent les deux. La zone ombrée est l\'intersection $B \\cap N$, comptée une seule fois dans $P(B \\cup N)$.',
        svg: `
          <svg viewBox="0 0 440 320" role="img" aria-labelledby="proba2nde-venn-title proba2nde-venn-desc">
            <title id="proba2nde-venn-title">Diagramme de Venn pour le choix d'un eleve parmi 30</title>
            <desc id="proba2nde-venn-desc">Deux ensembles se chevauchent dans l'univers des 30 eleves d'une classe : B regroupe les 12 eleves qui pratiquent le basketball, N regroupe les 10 eleves qui font de la natation, et leur intersection ombree, les 4 eleves qui pratiquent les deux, ne compte qu'une seule fois dans l'union.</desc>
            <defs>
              <clipPath id="proba2ndeVennClip">
                <circle cx="290" cy="195" r="90"></circle>
              </clipPath>
            </defs>
            <rect class="frame-line" x="20" y="40" width="400" height="250" rx="10" fill="none"></rect>
            <text class="label-soft" x="34" y="60">Univers : 30 élèves</text>
            <circle class="axis" cx="170" cy="195" r="90" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></circle>
            <circle class="axis" cx="290" cy="195" r="90" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></circle>
            <circle cx="170" cy="195" r="90" clip-path="url(#proba2ndeVennClip)" fill="color-mix(in srgb, var(--diagram-accent) 34%, transparent)" stroke="none"></circle>
            <text class="annotation-label" x="170" y="96" text-anchor="middle">B : Basket</text>
            <text class="tick-label" x="170" y="112" text-anchor="middle">12 élèves</text>
            <text class="annotation-label" x="290" y="96" text-anchor="middle">N : Natation</text>
            <text class="tick-label" x="290" y="112" text-anchor="middle">10 élèves</text>
            <text class="annotation-label" x="135" y="200" text-anchor="middle">8</text>
            <text class="annotation-label" x="230" y="200" text-anchor="middle">4</text>
            <text class="annotation-label" x="325" y="200" text-anchor="middle">6</text>
            <text class="tick-label" x="25" y="272">12 élèves</text>
            <text class="tick-label" x="25" y="286">ni basket ni natation</text>
            <rect x="105" y="8" width="230" height="30" rx="10" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="tick-label" x="117" y="28">Zone ombrée = B ∩ N = 4 élèves</text>
            <line class="guide-line" x1="230" y1="38" x2="230" y2="160"></line>
          </svg>
        `,
        notes: [
          'L\'ensemble $B$ = « pratiquer le basketball » regroupe $12$ élèves sur $30$ : $P(B) = \\dfrac{12}{30} = 0{,}4$.',
          'L\'ensemble $N$ = « faire de la natation » regroupe $10$ élèves sur $30$ : $P(N) = \\dfrac{10}{30} \\approx 0{,}33$.',
          'La zone ombrée (l\'intersection) représente les $4$ élèves qui pratiquent les deux activités : $P(B \\cap N) = \\dfrac{4}{30} \\approx 0{,}13$.',
          'En dehors des deux cercles : $30 - 18 = 12$ élèves qui ne pratiquent ni l\'un ni l\'autre.'
        ],
        reading: 'La zone ombrée n\'est comptée qu\'une seule fois : $P(B \\cup N) = P(B) + P(N) - P(B \\cap N) = \\dfrac{12+10-4}{30} = \\dfrac{18}{30} = 0{,}6$.',
        caption: 'Diagramme de Venn pour le choix d\'un élève au hasard dans une classe de $30$ : $B$ = basketball, $N$ = natation, intersection ombrée = pratique les deux.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-13.
         Chapitre où l'intuition trompe systématiquement : c'est ici que les
         figures valent des paragraphes, et l'effort de la vague y a été
         concentré. Une figure par MALENTENDU (cahier des charges, section 9),
         et les trois retenus sont les trois premiers de la fiche professeur :
           1. le double comptage de l'intersection quand on additionne ;
           2. le sophisme du joueur (« le hasard se corrige de lui-même ») ;
           3. la confusion entre incompatible et indépendant.

         Le schéma principal du chapitre étant DÉJÀ un diagramme de Venn, le
         schéma 1 ne le redouble pas : il traduit le même comptage en barres
         de LONGUEUR proportionnelle aux effectifs, ce qui rend le doublon
         mesurable et non plus seulement suggéré.

         ÉCHELLES, toutes calculées :
           - schéma 1 : 1 élève = 12 unités de viewBox. La somme naïve mesure
             donc 22 × 12 = 264, la réunion vraie 18 × 12 = 216, et l'excédent
             exactement 48, soit les 4 élèves comptés deux fois.
           - schéma 2 : abscisse LOGARITHMIQUE (20 à 2000 lancers), sans quoi
             la convergence ne serait pas visible sur une seule figure ;
             ordonnée linéaire, fréquence 0,40 en y=240 et 300 unités par
             unité de fréquence. La courbe est calculée point par point à
             partir de sa définition f(N) = (20 + (N-20)/2) / N.
           - schéma 3 : grille des 36 issues de deux dés, 1 issue = 34 × 30. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le malentendu fondateur',
          title: 'Pourquoi on retranche l\'intersection',
          description: 'Dans la classe du cours : $12$ élèves font du basket, $10$ font de la natation, et $4$ font les deux.<br/><br/>La barre du haut additionne simplement $12 + 10$. La barre du bas compte les élèves qui pratiquent <strong>au moins un</strong> des deux sports. Les deux barres sont à la même échelle : un élève y occupe toujours la même longueur.',
          svg: `
            <svg viewBox="0 0 400 250" role="img" aria-labelledby="proba-double-title proba-double-desc">
              <title id="proba-double-title">Le double comptage de l intersection</title>
              <desc id="proba-double-desc">Deux barres horizontales sont comparees a la meme echelle, ou chaque eleve occupe la meme longueur. La barre du haut represente douze plus dix, soit vingt-deux eleves comptes. La barre du bas represente les dix-huit eleves qui pratiquent au moins un des deux sports. La barre du haut depasse celle du bas d'une longueur qui vaut exactement quatre eleves : ce sont les quatre eleves qui pratiquent les deux sports et qui ont ete comptes deux fois.</desc>

              <!-- BARRE DU HAUT : la somme naive, 12 + 10 = 22 eleves.
                   Elle est decoupee en trois morceaux pour que l'oeil voie
                   OU se trouve le doublon : basket seul (8), les deux (4),
                   les deux encore (4), natation seule (6). -->
              <text class="annotation-label" x="60" y="40" text-anchor="start">on additionne : 12 + 10 = 22</text>

              <rect x="60" y="52" width="96" height="34" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="60" y="52" width="96" height="34" fill="none"></rect>
              <text class="tick-label" x="108" y="74" text-anchor="middle">basket seul</text>

              <rect x="156" y="52" width="48" height="34" fill="color-mix(in srgb, var(--secondary) 30%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="156" y="52" width="48" height="34" fill="none"></rect>
              <text class="tick-label" x="180" y="74" text-anchor="middle">les 2</text>

              <rect x="204" y="52" width="48" height="34" fill="color-mix(in srgb, var(--secondary) 30%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="204" y="52" width="48" height="34" fill="none"></rect>
              <text class="tick-label" x="228" y="74" text-anchor="middle">les 2</text>

              <rect x="252" y="52" width="72" height="34" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="252" y="52" width="72" height="34" fill="none"></rect>
              <text class="tick-label" x="288" y="74" text-anchor="middle">natation</text>

              <!-- BARRE DU BAS : la reunion reelle, 18 eleves. Meme origine
                   x=60, meme echelle : elle s'arrete 48 unites plus tot. -->
              <text class="annotation-label" x="60" y="140" text-anchor="start">élèves réellement concernés : 18</text>

              <rect x="60" y="152" width="96" height="34" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="60" y="152" width="96" height="34" fill="none"></rect>
              <text class="tick-label" x="108" y="174" text-anchor="middle">basket seul</text>

              <rect x="156" y="152" width="48" height="34" fill="color-mix(in srgb, var(--secondary) 30%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="156" y="152" width="48" height="34" fill="none"></rect>
              <text class="tick-label" x="180" y="174" text-anchor="middle">les 2</text>

              <rect x="204" y="152" width="72" height="34" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="204" y="152" width="72" height="34" fill="none"></rect>
              <text class="tick-label" x="240" y="174" text-anchor="middle">natation</text>

              <!-- La COTE de l'excedent, posee HORS des zones remplies
                   (contrainte du cahier des charges) : entre les deux barres,
                   de 276 a 324, soit 48 unites = 4 eleves exactement. -->
              <line class="guide-line" x1="276" y1="86" x2="276" y2="152"></line>
              <line class="guide-line" x1="324" y1="86" x2="324" y2="122"></line>
              <line class="curve-main" x1="276" y1="112" x2="324" y2="112"></line>
              <text class="annotation-label" x="334" y="116" text-anchor="start">4 élèves en trop</text>
              <text class="label-soft" x="60" y="228" text-anchor="start">les 4 élèves des deux clubs ont été comptés deux fois</text>
            </svg>
          `,
          notes: [
            'La barre du haut mesure $22$ élèves, la barre du bas $18$. L\'écart vaut $4$, exactement l\'effectif de l\'intersection.',
            'En probabilités : $P(B) + P(N) = \\dfrac{12}{30} + \\dfrac{10}{30} = \\dfrac{22}{30}$, alors que $P(B \\cup N) = \\dfrac{18}{30}$.',
            'La formule $P(B \\cup N) = P(B) + P(N) - P(B \\cap N)$ ne fait rien d\'autre que retirer le morceau dessiné deux fois. Ce n\'est pas une bizarrerie à mémoriser, c\'est une correction de comptage.'
          ],
          reading: 'Compte les cases foncées sur la barre du haut : il y en a deux, alors que ces élèves n\'existent qu\'une fois dans la classe. En les additionnant, tu les as fait exister en double.<br/><br/>Retiens le test : dès que deux événements peuvent se produire <strong>ensemble</strong>, additionner leurs probabilités donne trop. Si au contraire ils ne peuvent jamais arriver ensemble, il n\'y a rien à retrancher et l\'addition est correcte.',
          caption: 'Comptage des $30$ élèves : $12 + 10 = 22$ contre $18$ élèves réels, soit $4$ comptés deux fois.'
        },
        {
          theme: 'maths',
          kicker: 'Le piège du chapitre',
          title: 'Le hasard ne rattrape rien, il dilue',
          description: 'Imagine que les $20$ premiers lancers soient tous tombés sur pile. Beaucoup de joueurs annoncent alors que face « est en retard » et va se rattraper.<br/><br/>Voici ce qui se passe réellement si la pièce est équilibrée et que tu continues à lancer : la courbe suit la <strong>fréquence</strong> de pile, la barre du bas suit l\'<strong>écart brut</strong> entre le nombre de piles et le nombre de faces.',
          svg: `
            <svg viewBox="0 0 480 330" role="img" aria-labelledby="proba-joueur-title proba-joueur-desc">
              <title id="proba-joueur-title">La frequence converge par dilution</title>
              <desc id="proba-joueur-desc">Un graphique montre la frequence de pile en fonction du nombre total de lancers, porte sur une echelle logarithmique de vingt a deux mille lancers. La courbe part de un, car les vingt premiers lancers sont tous des piles, puis elle descend regulierement et se rapproche de la valeur un demi sans jamais passer en dessous. Sous le graphique, une bande rappelle que l'ecart brut entre le nombre de piles et le nombre de faces reste egal a vingt tout du long : il ne diminue jamais. C'est la frequence qui se rapproche d'un demi, parce que l'avance de vingt devient negligeable devant un nombre de lancers de plus en plus grand.</desc>

              <!-- Axes. Ordonnee : frequence 0,40 en y=240, 300 unites de
                   viewBox par unite de frequence. Abscisse LOGARITHMIQUE :
                   20 lancers en x=60, 2000 en x=440. -->
              <line class="grid-line" x1="60" y1="210" x2="450" y2="210"></line>
              <line class="axis" x1="60" y1="240" x2="450" y2="240"></line>
              <line class="axis" x1="60" y1="240" x2="60" y2="50"></line>

              <text class="tick-label" x="54" y="214" text-anchor="end">0,5</text>
              <text class="tick-label" x="54" y="64" text-anchor="end">1</text>
              <text class="tick-label" x="54" y="244" text-anchor="end">0,4</text>
              <text class="axis-label" x="20" y="140" text-anchor="middle">fréquence de pile</text>

              <line class="axis" x1="60" y1="240" x2="60" y2="246"></line>
              <line class="axis" x1="192.8" y1="240" x2="192.8" y2="246"></line>
              <line class="axis" x1="250" y1="240" x2="250" y2="246"></line>
              <line class="axis" x1="325.61" y1="240" x2="325.61" y2="246"></line>
              <line class="axis" x1="440" y1="240" x2="440" y2="246"></line>
              <text class="tick-label" x="60" y="260" text-anchor="middle">20</text>
              <text class="tick-label" x="192.8" y="260" text-anchor="middle">100</text>
              <text class="tick-label" x="250" y="260" text-anchor="middle">200</text>
              <text class="tick-label" x="325.61" y="260" text-anchor="middle">500</text>
              <text class="tick-label" x="440" y="260" text-anchor="middle">2000</text>
              <text class="axis-label" x="255" y="280" text-anchor="middle">nombre total de lancers</text>

              <!-- COURBE calculee point par point a partir de sa definition
                   f(N) = (20 + (N-20)/2) / N, et non tracee a la main. -->
              <polyline class="curve-main" fill="none" points="60.00,60.00 66.33,71.08 72.67,81.35 79.00,90.85 85.33,99.65 91.67,107.81 98.00,115.36 104.33,122.35 110.67,128.82 117.00,134.82 123.33,140.38 129.67,145.52 136.00,150.28 142.33,154.70 148.67,158.78 155.00,162.57 161.33,166.07 167.67,169.32 174.00,172.32 180.33,175.11 186.67,177.68 193.00,180.07 199.33,182.28 205.67,184.33 212.00,186.23 218.33,187.98 224.67,189.61 231.00,191.12 237.33,192.51 243.67,193.80 250.00,195.00 256.33,196.11 262.67,197.13 269.00,198.09 275.33,198.97 281.67,199.78 288.00,200.54 294.33,201.23 300.67,201.88 307.00,202.48 313.33,203.04 319.67,203.55 326.00,204.03 332.33,204.47 338.67,204.88 345.00,205.26 351.33,205.61 357.67,205.93 364.00,206.23 370.33,206.51 376.67,206.77 383.00,207.01 389.33,207.23 395.67,207.43 402.00,207.62 408.33,207.80 414.67,207.96 421.00,208.11 427.33,208.25 433.67,208.38 440.00,208.50"></polyline>

              <circle class="plot-point" cx="60" cy="60" r="4"></circle>
              <text class="annotation-label" x="72" y="56" text-anchor="start">20 piles sur 20</text>
              <text class="label-soft" x="450" y="204" text-anchor="end">la courbe s'approche de 0,5 sans jamais l'atteindre</text>

              <!-- L'ecart BRUT, qui ne bouge jamais. C'est la moitie de la
                   demonstration : sans lui, l'eleve croit que la courbe
                   descend parce que les faces rattrapent les piles. -->
              <rect x="60" y="292" width="390" height="30" fill="color-mix(in srgb, var(--secondary) 16%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="60" y="292" width="390" height="30" fill="none"></rect>
              <text class="tick-label" x="255" y="312" text-anchor="middle">écart brut piles moins faces : 20, puis 20, puis 20... il ne bouge jamais</text>
            </svg>
          `,
          notes: [
            'Après $100$ lancers au total, la fréquence de pile vaut $\\dfrac{20 + 40}{100} = 0{,}60$. Après $2000$ lancers, elle vaut $\\dfrac{20 + 990}{2000} = 0{,}505$.',
            'Pendant tout ce temps, il y a toujours $20$ piles de plus que de faces. Rien n\'a été « rattrapé » : l\'avance initiale est intacte.',
            'Ce qui change, c\'est le dénominateur. Une avance de $20$ pèse lourd sur $20$ lancers, et presque rien sur $2000$. La fréquence se rapproche de $0{,}5$ par <strong>dilution</strong>, jamais par compensation.'
          ],
          reading: 'Pose-toi la question qui tranche : la pièce se souvient-elle des lancers précédents ? Elle n\'a ni mémoire, ni mécanisme pour se rattraper. Au lancer suivant, pile et face valent $0{,}5$ chacun, exactement comme au tout premier.<br/><br/>Cette erreur porte un nom, le <strong>sophisme du joueur</strong>, et elle est partagée par des millions de personnes. La connaître, c\'est déjà s\'en méfier.',
          caption: 'Après $20$ piles consécutifs : la fréquence tend vers $0{,}5$, l\'écart brut reste bloqué à $20$.'
        },
        {
          theme: 'maths',
          kicker: 'Deux mots à ne pas confondre',
          title: 'Incompatibles ou indépendants, ce n\'est pas la même chose',
          description: 'Ces deux mots se ressemblent et désignent pourtant des situations sans aucun rapport.<br/><br/>À gauche, un seul lancer de dé. À droite, deux lancers successifs, dont les $36$ issues sont représentées par une case chacune.',
          svg: `
            <!-- viewBox porte de 290 a 315 de haut le 2026-09-13 : l'etiquette
                 « une case commune sur 36 » est ancree a l'ordonnee 300, sous
                 une grille qui descend deja jusqu'a 280. Elle sortait donc du
                 cadre de dix unites, ce qui s'imprime PAR-DESSUS le texte
                 voisin sans que LaTeX n'emette le moindre avertissement :
                 svg2tikz fige la boite TikZ sur le viewBox declare. Defaut
                 introduit par le commit e0b0c09, jamais passe au build. -->
            <svg viewBox="0 0 480 315" role="img" aria-labelledby="proba-incomp-title proba-incomp-desc">
              <title id="proba-incomp-title">Evenements incompatibles contre evenements independants</title>
              <desc id="proba-incomp-desc">A gauche, les six issues d'un lancer de de sont alignees. L'evenement obtenir six et l'evenement obtenir trois occupent deux cases separees, sans aucune case commune : ils sont incompatibles, ils ne peuvent pas se produire ensemble. A droite, les trente-six issues de deux lancers successifs forment un carre de six cases sur six. L'evenement six au premier lancer occupe une ligne entiere, l'evenement six au second lancer occupe une colonne entiere, et ces deux zones se croisent en exactement une case. Ces deux evenements peuvent donc se produire ensemble : ils ne sont pas incompatibles, ils sont independants.</desc>

              <!-- VIGNETTE GAUCHE : un lancer, 6 issues alignees.
                   1 issue = 30 x 30 unites. -->
              <text class="annotation-label" x="105" y="34" text-anchor="middle">incompatibles</text>
              <text class="label-soft" x="105" y="54" text-anchor="middle">un seul lancer de dé</text>

              <rect class="frame-line" x="30" y="70" width="30" height="30" fill="none"></rect>
              <rect class="frame-line" x="60" y="70" width="30" height="30" fill="none"></rect>
              <rect x="90" y="70" width="30" height="30" fill="color-mix(in srgb, var(--secondary) 30%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="90" y="70" width="30" height="30" fill="none"></rect>
              <rect class="frame-line" x="120" y="70" width="30" height="30" fill="none"></rect>
              <rect class="frame-line" x="150" y="70" width="30" height="30" fill="none"></rect>
              <rect x="180" y="70" width="30" height="30" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="180" y="70" width="30" height="30" fill="none"></rect>

              <text class="tick-label" x="45" y="90" text-anchor="middle">1</text>
              <text class="tick-label" x="75" y="90" text-anchor="middle">2</text>
              <text class="tick-label" x="105" y="90" text-anchor="middle">3</text>
              <text class="tick-label" x="135" y="90" text-anchor="middle">4</text>
              <text class="tick-label" x="165" y="90" text-anchor="middle">5</text>
              <text class="tick-label" x="195" y="90" text-anchor="middle">6</text>

              <text class="tick-label" x="105" y="124" text-anchor="middle">obtenir 3</text>
              <text class="tick-label" x="195" y="146" text-anchor="middle">obtenir 6</text>
              <line class="guide-line" x1="105" y1="100" x2="105" y2="112"></line>
              <line class="guide-line" x1="195" y1="100" x2="195" y2="134"></line>
              <text class="label-soft" x="105" y="200" text-anchor="middle">aucune case commune</text>
              <text class="label-soft" x="105" y="222" text-anchor="middle">ils ne peuvent pas</text>
              <text class="label-soft" x="105" y="242" text-anchor="middle">arriver ensemble</text>

              <!-- VIGNETTE DROITE : deux lancers, grille 6 x 6 = 36 issues.
                   Meme taille de case qu'a gauche : l'echelle est commune.
                   La ligne du 6 au premier lance et la colonne du 6 au second
                   se CROISENT en exactement une case, et 1/36 = 1/6 x 1/6.
                   C'est la definition de l'independance, lisible sur le
                   dessin. -->
              <text class="annotation-label" x="345" y="34" text-anchor="middle">indépendants</text>
              <text class="label-soft" x="345" y="54" text-anchor="middle">deux lancers successifs</text>

              <rect x="270" y="250" width="150" height="30" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)" stroke="none"></rect>
              <rect x="420" y="70" width="30" height="180" fill="color-mix(in srgb, var(--secondary) 18%, transparent)" stroke="none"></rect>
              <rect x="420" y="250" width="30" height="30" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)" stroke="none"></rect>

              <line class="frame-line" x1="270" y1="70" x2="450" y2="70"></line>
              <line class="frame-line" x1="270" y1="100" x2="450" y2="100"></line>
              <line class="frame-line" x1="270" y1="130" x2="450" y2="130"></line>
              <line class="frame-line" x1="270" y1="160" x2="450" y2="160"></line>
              <line class="frame-line" x1="270" y1="190" x2="450" y2="190"></line>
              <line class="frame-line" x1="270" y1="220" x2="450" y2="220"></line>
              <line class="frame-line" x1="270" y1="250" x2="450" y2="250"></line>
              <line class="frame-line" x1="270" y1="280" x2="450" y2="280"></line>
              <line class="frame-line" x1="270" y1="70" x2="270" y2="280"></line>
              <line class="frame-line" x1="300" y1="70" x2="300" y2="280"></line>
              <line class="frame-line" x1="330" y1="70" x2="330" y2="280"></line>
              <line class="frame-line" x1="360" y1="70" x2="360" y2="280"></line>
              <line class="frame-line" x1="390" y1="70" x2="390" y2="280"></line>
              <line class="frame-line" x1="420" y1="70" x2="420" y2="280"></line>
              <line class="frame-line" x1="450" y1="70" x2="450" y2="280"></line>

              <text class="tick-label" x="262" y="270" text-anchor="end">6</text>
              <text class="tick-label" x="435" y="64" text-anchor="middle">6</text>
              <text class="annotation-label" x="262" y="240" text-anchor="end">6 au premier</text>
              <text class="annotation-label" x="450" y="50" text-anchor="end">6 au second</text>
              <text class="label-soft" x="345" y="300" text-anchor="middle">une case commune sur 36</text>
            </svg>
          `,
          notes: [
            'À gauche : « obtenir $3$ » et « obtenir $6$ » au <strong>même</strong> lancer n\'ont aucune issue commune. Ils sont <strong>incompatibles</strong>, et $P(A \\cap B) = 0$.',
            'À droite : « obtenir $6$ au premier lancer » et « obtenir $6$ au second » ont bien une issue commune, la case du coin. Ils ne sont donc pas incompatibles du tout.',
            'Ils sont en revanche <strong>indépendants</strong> : $P(A \\cap B) = \\dfrac{1}{36}$, et c\'est exactement $\\dfrac{1}{6} \\times \\dfrac{1}{6}$. Le premier lancer ne change rien aux chances du second.'
          ],
          reading: 'Le test le plus sûr est visuel. Incompatibles : les deux zones ne se touchent pas. Indépendants : les deux zones se <strong>croisent</strong>, et la case d\'intersection représente exactement le produit des deux probabilités.<br/><br/>Deux événements incompatibles de probabilités non nulles ne sont d\'ailleurs jamais indépendants : si l\'un se produit, l\'autre devient impossible, donc le premier renseigne bel et bien sur le second.',
          caption: 'Incompatibles : deux cases disjointes sur $6$ issues. Indépendants : une ligne et une colonne qui se croisent sur $36$ issues.'
        }
      ],
      recap: [
        'Probabilité = nombre entre $0$ et $1$ ; la somme des probabilités de tous les événements vaut $1$.',
        'En cas d\'équiprobabilité : $P(A) = \\frac{\\text{cas favorables}}{\\text{cas possibles}}$.',
        'Événement contraire : $P(\\bar{A}) = 1 - P(A)$, souvent plus rapide que de compter directement.',
        'Formule d\'addition : toujours soustraire $P(A \\cap B)$ pour éviter de compter deux fois l\'intersection.'
      ],
      piege: 'Ne pas confondre $P(A\\cup B)$ et $P(A)+P(B)$ : la formule d\'addition doit soustraire $P(A\\cap B)$ pour ne pas compter deux fois l\'intersection.'
    },
    quiz: [
      { q: 'On lance une pièce équilibrée $10$ fois et on obtient $10$ fois « pile ». Quelle est la probabilité d\'obtenir « face » au $11^e$ lancer ?', options: ['$\\frac{1}{2}$ — chaque lancer est indépendant du passé', 'Plus grande que $\\frac{1}{2}$ — la « face » est en retard', 'Plus petite que $\\frac{1}{2}$ — la pièce semble biaisée', '$\\frac{1}{11}$ — il y a déjà eu $10$ piles'], answer: 0, correction: 'Les lancers sont des épreuves indépendantes : la pièce n\'a pas de mémoire. $P(\\text{face}) = \\frac{1}{2}$ à chaque lancer, quel que soit le passé. Croire que la « face est en retard » est le sophisme du joueur (gambler\'s fallacy).' },
      { q: 'Si $P(A)=0{,}3$, alors $P(\\bar{A})=$ ?', options: ['$0{,}3$', '$0{,}7$', '$1{,}3$', '$-0{,}3$'], answer: 1, correction: '$P(\\bar{A})=1-0{,}3=0{,}7$.' },
      { q: 'Si $A$ et $B$ sont incompatibles, $P(A)=0{,}2$, $P(B)=0{,}5$. Alors $P(A\\cup B)=$ ?', options: ['$0{,}1$', '$0{,}3$', '$0{,}7$', '$1{,}0$'], answer: 2, correction: 'Incompatibles : $P(A\\cap B)=0$. Donc $P(A\\cup B)=0{,}2+0{,}5=0{,}7$.' },
      { q: '$P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}3$. Calculer $P(A \\cup B)$ :', options: ['$0{,}8$', '$1{,}1$', '$0{,}3$', '$0{,}5$'], answer: 0, correction: '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0{,}6 + 0{,}5 - 0{,}3 = 0{,}8$. Sans soustraire $P(A \\cap B)$, on obtiendrait $1{,}1 > 1$, ce qui est impossible pour une probabilité. La soustraction de l\'intersection corrige le double comptage.' },
      { q: 'On lance un dé à $6$ faces. Calculer la probabilité de NE PAS obtenir un $6$. Quelle méthode est la plus efficace ?', options: ['$P(\\bar{A}) = 1 - P(A) = 1 - \\frac{1}{6} = \\frac{5}{6}$ — le complémentaire est plus rapide que de compter les $5$ issues favorables', '$P = \\frac{5}{6}$ en comptant $\\{1;2;3;4;5\\}$, c\'est la seule méthode', '$P = \\frac{1}{6}$ car il y a $1$ chance sur $6$', '$P = \\frac{6}{5}$'], answer: 0, correction: 'Les deux méthodes donnent le même résultat, mais le passage par le complémentaire ($1 - P(A)$) est souvent plus rapide, surtout quand l\'événement contraire est plus simple à dénombrer que l\'événement lui-même. Ici $P(A) = P(\\{6\\}) = 1/6$, donc $P(\\bar{A}) = 5/6$.' }
    ],
    /* GÉNÉRATEUR ÉLARGI le 2026-09-13.
       Mesure AVANT : 9 énoncés tirés, 3 moules, **1 seule tâche distincte** —
       une réunion de deux événements, habillée trois fois (une classe, un
       club, une option). L'équiprobabilité, l'événement contraire et
       l'indépendance des tirages successifs — c'est-à-dire l'essentiel du
       chapitre, et le sophisme du joueur que l'évaluation interroge —
       n'étaient travaillés par aucun exercice.

       Cinq tâches maintenant. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['reunion', 'equiprobable', 'contraire', 'independance', 'incompatible']);

        /* Tâche 2 — l'équiprobabilité, le modèle de base. */
        if (tache === 'equiprobable') {
          const cas = pick([
            { obj: 'un dé équilibré à $6$ faces', tot: 6, evt: 'un nombre pair', fav: 3, detail: '$\\{2 ; 4 ; 6\\}$' },
            { obj: 'un dé équilibré à $6$ faces', tot: 6, evt: 'un nombre strictement supérieur à $4$', fav: 2, detail: '$\\{5 ; 6\\}$' },
            { obj: 'une urne contenant $10$ boules numérotées de $1$ à $10$', tot: 10, evt: 'un multiple de $3$', fav: 3, detail: '$\\{3 ; 6 ; 9\\}$' },
            { obj: 'un jeu de $32$ cartes', tot: 32, evt: 'un cœur', fav: 8, detail: 'les $8$ cartes de la couleur cœur' }
          ]);
          const p = parseFloat((cas.fav / cas.tot).toFixed(4));
          return {
            statement: `On tire au hasard dans ${cas.obj}. Toutes les issues ont la même probabilité.<br/><br/>Calcule la probabilité d'obtenir ${cas.evt} (sous forme décimale, arrondie à $0{,}01$).`,
            answer: parseFloat(p.toFixed(2)), tolerance: 0.02, unit: '',
            hint: `En situation d'équiprobabilité, $P = \\dfrac{\\text{nombre d'issues favorables}}{\\text{nombre total d'issues}}$. Compte d'abord les issues favorables.`,
            solution: [
              `Les issues favorables sont ${cas.detail}, soit $${cas.fav}$ issues.`,
              `Le nombre total d'issues est $${cas.tot}$, et toutes ont la même probabilité.`,
              `$P = \\dfrac{${cas.fav}}{${cas.tot}} = ${fr(parseFloat(p.toFixed(2)))}$.`
            ]
          };
        }

        /* Tâche 3 — l'événement contraire, et le réflexe « au moins ». */
        if (tache === 'contraire') {
          const p = parseFloat((rand(15, 85) / 100).toFixed(2));
          const q = parseFloat((1 - p).toFixed(2));
          return {
            statement: `Un événement $A$ a pour probabilité $P(A) = ${fr(p)}$.<br/><br/>Calcule la probabilité de l'événement contraire $\\overline{A}$.`,
            answer: q, tolerance: 0.01, unit: '',
            hint: `Un événement et son contraire couvrent à eux deux toutes les issues possibles, sans se chevaucher : leurs probabilités ont donc pour somme $1$.`,
            solution: [
              `L'événement $A$ et son contraire $\\overline{A}$ se partagent la totalité des issues.`,
              `Leurs probabilités ont donc pour somme $1$ : $P(\\overline{A}) = 1 - P(A)$.`,
              `$P(\\overline{A}) = 1 - ${fr(p)} = ${fr(q)}$.`
            ]
          };
        }

        /* Tâche 4 — l'indépendance des tirages successifs.
           C'est le sophisme du joueur, que l'évaluation interroge et qu'aucun
           exercice ne préparait. Réponse : la probabilité, inchangée. */
        if (tache === 'independance') {
          const n = rand(5, 20);
          const cas = pick([
            { obj: 'une pièce équilibrée', res: 'pile', suite: 'face', p: 0.5 },
            { obj: 'un dé équilibré à $6$ faces', res: 'le $6$', suite: 'un $6$', p: parseFloat((1 / 6).toFixed(4)) }
          ]);
          return {
            statement: `On lance ${cas.obj} $${n}$ fois de suite, et on obtient $${n}$ fois ${cas.res}.<br/><br/>Quelle est la probabilité d'obtenir ${cas.suite} au lancer suivant ? (Arrondis à $0{,}01$.)`,
            answer: parseFloat(cas.p.toFixed(2)), tolerance: 0.02, unit: '',
            hint: `L'objet lancé n'a pas de mémoire : chaque lancer est indépendant des précédents. Ce qui s'est produit avant ne change rien à ce qui vient.`,
            solution: [
              `Les lancers successifs sont <strong>indépendants</strong> : le résultat d'un lancer n'influence pas le suivant.`,
              `La probabilité reste donc la même qu'au premier lancer : $${fr(parseFloat(cas.p.toFixed(2)))}$.`,
              `Croire qu'un résultat est « en retard » après une longue série est le <strong>sophisme du joueur</strong>. La série passée est déjà réalisée ; elle ne pèse d'aucun poids sur le lancer à venir.`
            ]
          };
        }

        /* Tâche 5 — événements incompatibles, où la formule se simplifie. */
        if (tache === 'incompatible') {
          const pA = parseFloat((rand(15, 40) / 100).toFixed(2));
          const pB = parseFloat((rand(15, 40) / 100).toFixed(2));
          const pU = parseFloat((pA + pB).toFixed(2));
          return {
            statement: `Deux événements $A$ et $B$ sont <strong>incompatibles</strong> : ils ne peuvent pas se produire en même temps.<br/><br/>On donne $P(A) = ${fr(pA)}$ et $P(B) = ${fr(pB)}$.<br/><br/>Calcule $P(A \\cup B)$.`,
            answer: pU, tolerance: 0.01, unit: '',
            hint: `La formule générale est $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Que vaut $P(A \\cap B)$ quand les deux événements ne peuvent pas se produire ensemble ?`,
            solution: [
              `Deux événements incompatibles ne se produisent jamais ensemble : $A \\cap B$ est impossible, donc $P(A \\cap B) = 0$.`,
              `La formule générale $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ se simplifie donc en une simple addition.`,
              `$P(A \\cup B) = ${fr(pA)} + ${fr(pB)} = ${fr(pU)}$.`
            ]
          };
        }

        /* Tâche 1 — la réunion de deux événements (la tâche historique). */
        const contexts = [
          { intro: 'Dans une classe de', total: rand(25, 35), traitA: 'pratiquent un sport', traitB: 'jouent d\'un instrument', both: 'les deux' },
          { intro: 'Dans un club de', total: rand(40, 60), traitA: 'participent au cours de peinture', traitB: 'participent au cours de musique', both: 'les deux activités' },
          { intro: 'Parmi les', total: rand(30, 50), traitA: 'suivent l\'option maths', traitB: 'suivent l\'option SVT', both: 'les deux options' }
        ];
        const ctx = pick(contexts);
        const n = ctx.total;
        const nA = rand(Math.floor(n * 0.3), Math.floor(n * 0.6));
        const nB = rand(Math.floor(n * 0.2), Math.floor(n * 0.5));
        const maxInter = Math.min(nA, nB);
        const nAB = rand(Math.max(1, nA + nB - n), Math.floor(maxInter * 0.6));
        const nAuB = nA + nB - nAB;
        const pAuB = parseFloat((nAuB / n).toFixed(4));
        const pNi = parseFloat((1 - pAuB).toFixed(4));
        return {
          statement: `${ctx.intro} $${n}$ élèves, $${nA}$ ${ctx.traitA} ($A$), $${nB}$ ${ctx.traitB} ($B$) et $${nAB}$ font ${ctx.both} ($A \\cap B$).<br/><br/><strong>1.</strong> Calculer $P(A \\cup B)$ (probabilité qu'un élève choisi au hasard fasse au moins l'une des deux activités).<br/><strong>2.</strong> En déduire $P(\\overline{A \\cup B})$ (probabilité de ne faire ni l'une ni l'autre).<br/><br/>Donne $P(\\overline{A \\cup B})$ en décimal (arrondi à $0{,}01$).`,
          answer: pNi,
          tolerance: 0.02,
          unit: '',
          hint: `$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\frac{${nA}}{${n}} + \\frac{${nB}}{${n}} - \\frac{${nAB}}{${n}}$. Puis $P(\\overline{A \\cup B}) = 1 - P(A \\cup B)$.`,
          solution: [
            `$P(A \\cup B) = \\frac{${nA} + ${nB} - ${nAB}}{${n}} = \\frac{${nAuB}}{${n}} \\approx ${fr(pAuB)}$`,
            `$P(\\overline{A \\cup B}) = 1 - ${fr(pAuB)} = ${fr(pNi)}$`,
            `Il y a environ $${fr(pNi * 100, 1)}\\%$ de chances que l'élève ne fasse aucune des deux activités.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un lycée a $200$ élèves : $80$ pratiquent le sport, $60$ jouent d\'un instrument, $30$ font les deux.',
      tasks: [
        'Calculer la probabilité qu\'un élève choisi au hasard pratique le sport.',
        'Calculer $P(S\\cup M)$ où $S$ = sport et $M$ = musique.',
        'Calculer la probabilité de ne pratiquer ni l\'un ni l\'autre.'
      ],
      solutions: [
        '$P(S)=\\frac{80}{200}=0{,}4$.',
        '$P(S\\cup M)=\\frac{80+60-30}{200}=\\frac{110}{200}=0{,}55$.',
        '$P(\\overline{S\\cup M})=1-0{,}55=0{,}45$.'
      ],
      finalAnswer: '$P(S\\cup M)=0{,}55$ ; probabilité de ne faire ni l\'un ni l\'autre : $0{,}45$.'
    },

    evaluation: {
      title: 'Évaluation — Probabilités',
      duration: '30 min',
      questions: [
        {
          statement: 'On lance un dé équilibré à $6$ faces. Calculer la probabilité d\'obtenir un nombre pair. Donner le résultat sous forme décimale.',
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Les issues paires sont $\\{2 ; 4 ; 6\\}$, soit $3$ issues sur $6$. $P = \\dfrac{3}{6} = 0{,}5$.'
        },
        {
          /* Q2 RÉÉCRITE le 2026-09-13. L'ancienne, « si $P(A) = 0{,}35$, que
             vaut $P(\bar{A})$ ? », était l'application immédiate de
             $1 - P(A)$ : « calculer », déjà porté par Q1 et Q4 du même devoir.
             La nouvelle ne donne PAS la probabilité de l'événement contraire
             en clair : l'élève doit d'abord comprendre que « au moins une
             fois » a pour contraire « aucune fois », ce que rien ne lui
             signale. C'est « chercher » — trouver la porte d'entrée du
             problème, le calcul ne venant qu'ensuite. */
          statement: 'On tire au hasard une carte dans un jeu de $20$ cartes, on la remet, puis on en tire une seconde.<br/><br/>La probabilité de n\'obtenir <strong>aucun as</strong> sur les deux tirages vaut $0{,}64$.<br/><br/>Quelle est la probabilité d\'obtenir <strong>au moins un as</strong> ?',
          type: 'numeric',
          answer: 0.36,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'La difficulté n\'est pas le calcul, c\'est de <strong>trouver par où entrer</strong>.<br/><br/>Dénombrer directement « au moins un as » obligerait à distinguer plusieurs cas : un as au premier tirage, un as au second, ou un as aux deux. C\'est long et on en oublie facilement.<br/><br/>L\'événement contraire de « au moins un as » est « <strong>aucun as</strong> » — et sa probabilité est justement donnée.<br/><br/>D\'où $P(\\text{au moins un as}) = 1 - P(\\text{aucun as}) = 1 - 0{,}64 = 0{,}36$.<br/><br/>Retiens ce réflexe : dès qu\'un énoncé dit « au moins », regarde d\'abord son contraire.'
        },
        {
          statement: 'On lance une pièce équilibrée $20$ fois et on obtient $20$ fois « pile ». La probabilité d\'obtenir « face » au $21^e$ lancer est :',
          type: 'multiple-choice',
          options: ['Supérieure à $\\frac{1}{2}$ car « face » est en retard', '$\\frac{1}{2}$ car les lancers sont indépendants', 'Inférieure à $\\frac{1}{2}$ car la pièce semble biaisée', '$\\frac{1}{21}$'],
          answer: 1,
          points: 2,
          correction: 'Chaque lancer est une épreuve indépendante : le résultat passé n\'influence pas le suivant. $P(\\text{face}) = \\frac{1}{2}$ à chaque lancer. Croire que « face est en retard » est le sophisme du joueur.'
        },
        {
          statement: 'Dans une classe de $30$ élèves, $18$ pratiquent un sport et $12$ jouent d\'un instrument. $6$ font les deux. Calculer $P(S \\cup M)$ (sport ou musique). Donner le résultat sous forme décimale.',
          type: 'numeric',
          answer: 0.8,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(S \\cup M) = P(S) + P(M) - P(S \\cap M) = \\dfrac{18}{30} + \\dfrac{12}{30} - \\dfrac{6}{30} = \\dfrac{24}{30} = 0{,}8$.'
        },
        {
          statement: 'Deux événements $A$ et $B$ sont incompatibles. Cela signifie que :',
          type: 'multiple-choice',
          options: ['$P(A \\cap B) = 1$', '$P(A \\cup B) = 0$', '$P(A \\cap B) = 0$', '$P(A) + P(B) = 1$'],
          answer: 2,
          points: 2,
          correction: 'Deux événements sont incompatibles (ou mutuellement exclusifs) s\'ils ne peuvent pas se produire en même temps : $A \\cap B = \\varnothing$, donc $P(A \\cap B) = 0$. Dans ce cas, $P(A \\cup B) = P(A) + P(B)$.'
        }
      ]
    }
  });
