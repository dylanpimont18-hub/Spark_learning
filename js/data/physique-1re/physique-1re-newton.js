/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-newton.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-newton',
    level: 2, subject: 'physique',
    icon: '🍎',
    title: 'Lois de Newton',
    subtitle: 'Principe d\'inertie, principe fondamental de la dynamique, principe des actions réciproques',
    keywords: ['Newton', 'Inertie', 'PFD', 'Actions réciproques', 'Dynamique'],
    physics: 'Les lois de Newton expliquent pourquoi un passager est projeté vers l\'avant lors d\'un freinage brusque, permettent de calculer la force de traction nécessaire pour déplacer une charge à vitesse constante, justifient le port de la ceinture de sécurité, et sont à la base du dimensionnement de tous les systèmes mécaniques en mouvement (convoyeurs, ascenseurs, véhicules).',

    cours: {
      intro: 'Isaac Newton a fondé la mécanique classique sur <strong>trois lois</strong>, valables dans un <strong>référentiel galiléen</strong> (un référentiel dans lequel elles s\'appliquent sans correction ; le référentiel terrestre en est une très bonne approximation pour la plupart des mouvements étudiés au lycée).<br/><br/>La <strong>première loi</strong>, ou <strong>principe d\'inertie</strong>, énonce que, dans un référentiel galiléen, un système soumis à des forces qui se compensent exactement ($\\sum \\vec{F} = \\vec{0}$) est soit au repos, soit animé d\'un <strong>mouvement rectiligne uniforme</strong> — et réciproquement. La <strong>deuxième loi</strong>, ou <strong>principe fondamental de la dynamique</strong> (PFD), prend le relais dès que les forces ne se compensent plus : $\\sum \\vec{F} = m\\vec{a}$.<br/><br/>La <strong>troisième loi</strong>, ou <strong>principe des actions réciproques</strong>, s\'applique à toute interaction, qu\'elle s\'exerce à distance (gravitation, électrique) ou par contact : si un système A exerce une force $\\vec{F}(A\\to B)$ sur un système B, alors B exerce sur A une force $\\vec{F}(B\\to A) = -\\vec{F}(A\\to B)$, de même norme et de sens opposé.',
      definitions: [
        { term: 'Référentiel galiléen', def: 'Référentiel dans lequel les lois de Newton s\'appliquent telles quelles. Le référentiel terrestre constitue une très bonne approximation d\'un référentiel galiléen pour la majorité des mouvements étudiés en 1ère.' },
        { term: 'Principe d\'inertie (1ère loi)', def: 'Dans un référentiel galiléen, un système soumis à des forces qui se compensent ($\\sum \\vec{F} = \\vec{0}$) est soit au repos, soit en <strong>mouvement rectiligne uniforme</strong> — et réciproquement, si son mouvement est rectiligne uniforme (ou s\'il est au repos), alors les forces se compensent.' },
        { term: 'Principe fondamental de la dynamique (2ème loi, PFD)', def: 'Dans un référentiel galiléen, la résultante des forces appliquées à un système de masse $m$ est égale au produit de cette masse par son vecteur accélération : $\\sum \\vec{F} = m\\vec{a}$.' },
        { term: 'Principe des actions réciproques (3ème loi)', def: 'Si un système A exerce une force $\\vec{F}(A\\to B)$ sur un système B, alors B exerce sur A une force $\\vec{F}(B\\to A) = -\\vec{F}(A\\to B)$ : même norme, même direction, sens opposé — quelles que soient les masses de A et B.' }
      ],
      method: {
        title: 'Analyser une situation mécanique avec les lois de Newton en 3 étapes',
        steps: [
          '<strong>Vérifier que le référentiel est galiléen</strong> (le référentiel terrestre, sauf mention contraire) et faire le <strong>bilan des forces</strong> qui s\'exercent sur le système étudié (poids, réaction du support, force motrice, frottements...).',
          '<strong>Comparer la résultante des forces à zéro</strong> : si les forces se compensent ($\\sum \\vec{F} = \\vec{0}$), le mouvement est rectiligne uniforme ou le système est au repos (principe d\'inertie). Sinon, appliquer le <strong>PFD</strong> $\\sum \\vec{F} = m\\vec{a}$, projeté sur un axe, pour calculer l\'accélération.',
          '<strong>Ne pas oublier le principe des actions réciproques</strong> : chaque force du bilan appartient à une paire — la force qu\'exerce le support sur l\'objet a pour réaction la force que l\'objet exerce sur le support, mais ces deux forces d\'une même paire ne s\'appliquent <strong>jamais</strong> sur le même système.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Principe d\'inertie (bilan des forces)',
        title: 'Caisse tractée à vitesse constante : les forces se compensent',
        description: 'Une caisse se déplace en <strong>mouvement rectiligne uniforme</strong> sur un sol horizontal. D\'après le principe d\'inertie, la résultante des forces qui s\'exercent sur elle est nulle : le poids $\\vec{P}$ compense la réaction normale $\\vec{N}$, et la force motrice $\\vec{F}$ compense le frottement $\\vec{f}$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="newton-title newton-desc">
            <title id="newton-title">Bilan des forces sur une caisse tractee a vitesse constante</title>
            <desc id="newton-desc">Une caisse rectangulaire posee sur un sol horizontal est representee avec quatre forces issues de son centre : le poids P vertical vers le bas, la reaction normale N vertical vers le haut et de meme longueur que P, la force motrice F horizontale vers la droite, et le frottement f horizontal vers la gauche et de meme longueur que F. Les deux paires de forces, verticale et horizontale, s'equilibrent exactement, illustrant le principe d'inertie pour un mouvement rectiligne uniforme.</desc>

            <defs>
              <marker id="arrow-phy1re-newton" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- sol -->
            <line class="frame-line" x1="80" y1="175" x2="480" y2="175"></line>

            <!-- caisse -->
            <rect class="frame-line" x="240" y="125" width="80" height="50" fill="none"></rect>
            <circle class="plot-point" cx="280" cy="150" r="3"></circle>

            <!-- poids P (vers le bas) -->
            <line class="curve-main" x1="280" y1="150" x2="280" y2="210" marker-end="url(#arrow-phy1re-newton)"></line>
            <text class="annotation-label" x="280" y="228" text-anchor="middle">P</text>

            <!-- reaction normale N (vers le haut) -->
            <line class="curve-main" x1="280" y1="150" x2="280" y2="90" marker-end="url(#arrow-phy1re-newton)"></line>
            <text class="annotation-label" x="280" y="76" text-anchor="middle">N</text>

            <!-- force motrice F (vers la droite) -->
            <line class="curve-main" x1="280" y1="150" x2="360" y2="150" marker-end="url(#arrow-phy1re-newton)"></line>
            <text class="annotation-label" x="368" y="154" text-anchor="start">F</text>

            <!-- frottement f (vers la gauche) -->
            <line class="curve-main" x1="280" y1="150" x2="200" y2="150" marker-end="url(#arrow-phy1re-newton)"></line>
            <text class="annotation-label" x="192" y="154" text-anchor="end">f</text>
          </svg>
        `,
        notes: [
          'Les forces verticales $\\vec{P}$ (poids) et $\\vec{N}$ (réaction normale du sol) ont la <strong>même norme</strong> et des sens opposés : elles se compensent exactement.',
          'Les forces horizontales $\\vec{F}$ (force motrice) et $\\vec{f}$ (frottement) ont également la <strong>même norme</strong> et des sens opposés.',
          'La résultante des quatre forces est donc <strong>nulle</strong> : d\'après le principe d\'inertie, la caisse est nécessairement soit au repos, soit en mouvement rectiligne uniforme — jamais accélérée tant que cet équilibre persiste.'
        ],
        reading: 'Repère les quatre flèches issues du centre de la caisse : la paire verticale $\\vec{P}$/$\\vec{N}$ et la paire horizontale $\\vec{F}$/$\\vec{f}$ ont chacune la même longueur, signe que ces forces se compensent deux à deux.',
        caption: 'Bilan des forces sur une caisse en mouvement rectiligne uniforme : le poids $\\vec{P}$ compense la réaction $\\vec{N}$, la force motrice $\\vec{F}$ compense le frottement $\\vec{f}$ — la résultante est nulle (principe d\'inertie).'
      },
      diagrams: [
        {
          theme: 'physique',
          kicker: 'Principe fondamental de la dynamique (résultante non nulle)',
          title: 'Caisse accélérée : la force motrice l\'emporte sur le frottement',
          description: 'La même caisse est reprise, mais avec $F = 200$ N $>$ $f = 150$ N (les valeurs de <strong>l\'exemple résolu</strong> ci-dessous) : la résultante horizontale n\'est plus nulle. D\'après le <strong>PFD</strong>, la caisse accélère dans le sens de $\\vec{F}$, avec $a = 1{,}25$ m/s².',
          svg: `
            <svg viewBox="0 0 560 300" role="img" aria-labelledby="newton-pfd-title newton-pfd-desc">
              <title id="newton-pfd-title">Bilan des forces sur une caisse acceleree, force motrice superieure au frottement</title>
              <desc id="newton-pfd-desc">La meme caisse que precedemment est representee avec quatre forces issues de son centre : le poids P vertical vers le bas et la reaction normale N vertical vers le haut, de meme longueur l'une que l'autre. Horizontalement, la force motrice F, plus longue, pointe vers la droite, et le frottement f, plus court, pointe vers la gauche : les deux longueurs sont dans un rapport de quatre pour trois, comme les valeurs de deux cents newtons et cent cinquante newtons qu'elles representent. Sous la caisse, un vecteur en pointilles designe l'acceleration a, dans le meme sens que la force motrice qui l'emporte.</desc>

              <defs>
                <marker id="arrow-phy1re-newton-pfd" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- sol -->
              <line class="frame-line" x1="80" y1="175" x2="480" y2="175"></line>

              <!-- caisse -->
              <rect class="frame-line" x="240" y="125" width="80" height="50" fill="none"></rect>
              <circle class="plot-point" cx="280" cy="150" r="3"></circle>

              <!-- poids P (vers le bas) -->
              <line class="curve-main" x1="280" y1="150" x2="280" y2="210" marker-end="url(#arrow-phy1re-newton-pfd)"></line>
              <text class="annotation-label" x="280" y="228" text-anchor="middle">P</text>

              <!-- reaction normale N (vers le haut) -->
              <line class="curve-main" x1="280" y1="150" x2="280" y2="90" marker-end="url(#arrow-phy1re-newton-pfd)"></line>
              <text class="annotation-label" x="280" y="76" text-anchor="middle">N</text>

              <!-- force motrice F = 200 N (80 px vers la droite) -->
              <line class="curve-main" x1="280" y1="150" x2="360" y2="150" marker-end="url(#arrow-phy1re-newton-pfd)"></line>
              <text class="annotation-label" x="368" y="154" text-anchor="start">F</text>

              <!-- frottement f = 150 N (60 px vers la gauche) -->
              <line class="curve-main" x1="280" y1="150" x2="220" y2="150" marker-end="url(#arrow-phy1re-newton-pfd)"></line>
              <text class="annotation-label" x="212" y="154" text-anchor="end">f</text>

              <!-- acceleration a (resultante, non a l'echelle des forces) -->
              <line class="guide-line" x1="280" y1="200" x2="325" y2="200" marker-end="url(#arrow-phy1re-newton-pfd)"></line>
              <text class="annotation-label" x="333" y="204" text-anchor="start">a</text>

              <text class="label-soft" x="280" y="288" text-anchor="middle">PFD : résultante horizontale non nulle</text>
            </svg>
          `,
          notes: [
            'Verticalement, $\\vec{P}$ et $\\vec{N}$ restent égales et opposées : l\'équilibre vertical n\'est pas remis en cause, seul l\'axe horizontal change.',
            'Horizontalement, $F = 200$ N l\'emporte désormais sur $f = 150$ N : la résultante $\\sum\\vec{F} = \\vec{F}+\\vec{f}$ vaut $200-150=50$ N dans le sens de $\\vec{F}$, elle n\'est plus nulle.',
            'D\'après le <strong>PFD</strong>, $\\vec{a}$ (en pointillés) est colinéaire à cette résultante : $a = \\dfrac{F-f}{m} = \\dfrac{50}{40} = 1{,}25$ m/s². Ce vecteur n\'est pas à la même échelle que les forces, il indique uniquement le sens de l\'accélération.'
          ],
          reading: 'Compare les longueurs de $\\vec{F}$ et $\\vec{f}$ : contrairement au premier schéma où elles étaient égales, $\\vec{F}$ est ici plus longue — cette différence de longueur signale une résultante non nulle, donc une accélération $\\vec{a}$ dans le sens de $\\vec{F}$.',
          caption: 'Dès que $F$ dépasse $f$ ($200$ N contre $150$ N), le principe fondamental de la dynamique s\'applique : $\\sum\\vec{F} = m\\vec{a}$, avec $a = 1{,}25$ m/s² dans le sens du mouvement.'
        },
        {
          theme: 'physique',
          kicker: 'Principe des actions réciproques (3ème loi de Newton)',
          title: 'Deux systèmes distincts : la caisse et le sol',
          description: 'Contrairement aux bilans précédents, où <strong>quatre</strong> forces s\'exerçaient sur la <strong>seule</strong> caisse, le principe des actions réciproques met en jeu <strong>deux systèmes distincts</strong> : ici, la caisse et le sol, qui échangent une paire de forces à leur point de contact.',
          svg: `
            <svg viewBox="0 0 560 300" role="img" aria-labelledby="newton-reaction-title newton-reaction-desc">
              <title id="newton-reaction-title">Paire action reaction entre la caisse et le sol au point de contact</title>
              <desc id="newton-reaction-desc">Deux systemes distincts sont representes l'un au-dessus de l'autre : un rectangle etroit figurant la caisse en haut, et un rectangle large figurant le sol en bas, se touchant en un point de contact commun. Depuis ce point, une fleche pointe vers le haut, dans la caisse, representant la force exercee par le sol sur la caisse, et une fleche de meme longueur pointe vers le bas, dans le sol, representant la force exercee par la caisse sur le sol : les deux fleches ont une longueur strictement egale mais des sens opposes.</desc>

              <defs>
                <marker id="arrow-phy1re-newton-reaction" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- systeme 1 : la caisse -->
              <rect class="frame-line" x="230" y="70" width="100" height="70" fill="none"></rect>
              <text class="label-soft" x="345" y="108" text-anchor="start">Caisse</text>

              <!-- systeme 2 : le sol -->
              <rect class="frame-line" x="140" y="140" width="280" height="90" fill="none"></rect>
              <text class="label-soft" x="345" y="188" text-anchor="start">Sol</text>

              <!-- point de contact -->
              <!-- F(sol -> caisse), appliquee a la caisse -->
              <line class="curve-main" x1="280" y1="140" x2="280" y2="60" marker-end="url(#arrow-phy1re-newton-reaction)"></line>
              <text class="annotation-label" x="280" y="46" text-anchor="middle">F(sol→caisse)</text>

              <!-- F(caisse -> sol), appliquee au sol -->
              <line class="curve-main" x1="280" y1="140" x2="280" y2="220" marker-end="url(#arrow-phy1re-newton-reaction)"></line>
              <text class="annotation-label" x="280" y="236" text-anchor="middle">F(caisse→sol)</text>

              <!-- point de contact (dessine apres les fleches pour rester visible au-dessus) -->
              <circle class="plot-point" cx="280" cy="140" r="4"></circle>

              <text class="label-soft" x="280" y="288" text-anchor="middle">Actions réciproques : deux systèmes distincts</text>
            </svg>
          `,
          notes: [
            'Contrairement aux bilans précédents (toutes les forces réunies sur la <strong>seule</strong> caisse), ce schéma sépare volontairement <strong>deux systèmes</strong> : la caisse et le sol, en contact l\'un avec l\'autre.',
            'La caisse exerce sur le sol la force $\\vec{F}(caisse\\to sol)$ ; en retour, le sol exerce sur la caisse la force $\\vec{F}(sol\\to caisse)$ — même norme, même direction, sens opposé : c\'est le <strong>principe des actions réciproques</strong>.',
            'Piège classique : $\\vec{N} = \\vec{F}(sol\\to caisse)$ n\'est <strong>pas</strong> la réaction de $\\vec{P}$ (le poids) — $\\vec{P}$ est exercé par la Terre à distance, tandis que $\\vec{N}$ est exercé par le sol au contact. Ce sont deux interactions différentes ; la vraie réaction de $\\vec{N}$ est $\\vec{F}(caisse\\to sol)$, dessinée ici.'
          ],
          reading: 'Repère le point de contact entre la caisse et le sol : les deux flèches qui en partent, de même longueur mais de sens opposés, relient deux systèmes différents — contrairement aux 4 forces d\'un même bilan dans les schémas précédents.',
          caption: 'La caisse et le sol échangent une paire de forces $\\vec{F}(caisse\\to sol)$ et $\\vec{F}(sol\\to caisse)$, de même norme et de sens opposés (principe des actions réciproques), appliquées à deux systèmes distincts.'
        }
      ],
      example: {
        statement: 'Une caisse de masse $m = 40$ kg est tirée par une force horizontale $F$ le long d\'un sol horizontal, avec une force de frottement $f = 150$ N qui s\'oppose au mouvement. Dans un premier temps, la caisse se déplace à <strong>vitesse constante</strong>.<br/><br/>D\'après le principe d\'inertie, déterminer la valeur de $F$. Puis, si $F$ passe soudainement à $200$ N (le frottement restant $f = 150$ N), calculer la nouvelle accélération $a$ de la caisse.',
        steps: [
          'Vitesse constante ⟹ système pseudo-isolé (le poids et la réaction normale se compensent verticalement) : d\'après le <strong>principe d\'inertie</strong>, la résultante des forces horizontales est nulle, donc $F = f = 150$ N.',
          'Lorsque $F$ passe à $200$ N, les forces horizontales ne se compensent plus : $F - f = 200 - 150 = 50$ N (résultante non nulle).',
          'Le principe fondamental de la dynamique, projeté sur l\'axe horizontal, donne $F - f = m \\times a$, donc $a = \\dfrac{F-f}{m} = \\dfrac{50}{40}$.',
          'Résultat : $a = 1{,}25$ m/s² : la caisse accélère désormais dans le sens du mouvement.'
        ],
        answer: 'Tant que la caisse roule à vitesse constante, $F = f = 150$ N (principe d\'inertie). Dès que $F$ dépasse $f$, la caisse accélère avec $a = 1{,}25$ m/s² (principe fondamental de la dynamique).'
      },
      formulas: [
        'Principe d\'inertie (référentiel galiléen) : $\\sum \\vec{F} = \\vec{0} \\Leftrightarrow$ repos ou mouvement rectiligne uniforme',
        'Principe fondamental de la dynamique : $\\sum \\vec{F} = m\\vec{a}$',
        'Principe des actions réciproques : $\\vec{F}(A\\to B) = -\\vec{F}(B\\to A)$',
        'Cas particulier utile : à vitesse constante, les forces motrices et résistantes se compensent exactement'
      ],
      recap: [
        'Le principe d\'inertie s\'applique aussi bien à un objet <strong>au repos</strong> qu\'à un objet en <strong>mouvement rectiligne uniforme</strong> : dans les deux cas, $\\sum\\vec{F}=\\vec{0}$.',
        'Réciproquement, si $\\sum\\vec{F}=\\vec{0}$, le mouvement est nécessairement rectiligne uniforme (ou le système reste au repos) — jamais accéléré.',
        'Si les forces ne se compensent pas, le PFD $\\sum\\vec{F}=m\\vec{a}$ permet de calculer l\'accélération résultante.',
        'Chaque force d\'un bilan appartient à une <strong>paire d\'actions réciproques</strong> : la Terre exerce le poids sur un objet, l\'objet exerce en retour une force égale et opposée sur la Terre.'
      ],
      piege: 'Une erreur fréquente est de croire qu\'un objet en mouvement est nécessairement soumis à une résultante des forces non nulle, comme si tout mouvement exigeait une force motrice active pour se maintenir. Attention : un mouvement <strong>rectiligne uniforme</strong> correspond au contraire à des forces qui se compensent exactement ($\\sum\\vec{F}=\\vec{0}$) ; seule une variation de la vitesse (accélération, décélération, changement de direction) révèle une résultante non nulle.'
    },

    quiz: [
      {
        q: 'Un traîneau glisse à vitesse constante sur une piste horizontale légèrement rugueuse, tiré par une force horizontale $F$. Que peut-on dire de la résultante des forces qui s\'exercent sur lui ?',
        options: [
          'Elle est nulle, d\'après le principe d\'inertie',
          'Elle est égale à $F$ seule',
          'Elle est nécessairement dirigée vers l\'avant',
          'Elle augmente avec la vitesse'
        ],
        answer: 0,
        correction: 'Vitesse constante signifie mouvement rectiligne uniforme, ce qui équivaut, d\'après le principe d\'inertie, à une résultante des forces nulle — même si le traîneau est bel et bien en mouvement.'
      },
      {
        q: 'D\'après le principe fondamental de la dynamique, un objet de masse $m = 8$ kg soumis à une résultante des forces $\\sum F = 24$ N a pour accélération :',
        options: [
          '$a = 3$ m/s²',
          '$a = 192$ m/s²',
          '$a = 0{,}33$ m/s²',
          '$a = 16$ m/s²'
        ],
        answer: 0,
        correction: '$a = \\dfrac{\\sum F}{m} = \\dfrac{24}{8} = 3$ m/s². Attention à ne pas inverser la division (option $0{,}33$) ni à multiplier ou additionner $F$ et $m$.'
      },
      {
        q: 'Un patineur A pousse un patineur B, initialement immobile sur la glace (frottements négligés). D\'après le principe des actions réciproques, la force qu\'exerce A sur B est :',
        options: [
          'De même norme et de sens opposé à la force exercée par B sur A',
          'Plus grande si A est plus lourd que B',
          'Nulle si B ne pousse pas activement en retour',
          'Dépendante de la vitesse initiale de A'
        ],
        answer: 0,
        correction: 'Le principe des actions réciproques garantit l\'égalité des normes et l\'opposition des sens, quelles que soient les masses respectives de A et B : B exerce toujours une force en retour sur A, même s\'il ne « pousse » pas activement — c\'est une conséquence du contact, pas d\'une action volontaire.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['inertie', 'pfd']);

        if (typeExo === 'inertie') {
          var f = pick([50, 80, 100, 120, 150, 180, 200, 250, 300]);
          var contexte = pick([
            'une caisse tirée sur un quai de chargement',
            'un traîneau tracté sur la neige',
            'un chariot poussé dans un entrepôt',
            'une remorque tractée sur un parking',
            'un container déplacé au sol'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte + ', une force horizontale $F$ compense exactement une force de frottement $f = ' + f + '$ N : le système se déplace à <strong>vitesse constante</strong>.<br/><br/>D\'après le principe d\'inertie, détermine la valeur de la force $F$ (en N).',
            answer: f,
            tolerance: 1,
            unit: 'N',
            hint: 'Vitesse constante entraîne une résultante des forces nulle (principe d\'inertie) : les forces horizontales se compensent exactement.',
            solution: [
              'Vitesse constante ⟹ mouvement rectiligne uniforme ⟹ $\\sum F = 0$ (principe d\'inertie).',
              'Les seules forces horizontales sont $F$ (motrice) et $f$ (frottement, opposée) : $F - f = 0$.',
              'Résultat : $F = f = ' + f + '$ N.'
            ]
          };
        } else {
          var m2 = pick([20, 30, 40, 50, 60, 80, 100, 150]);
          var F2 = pick([100, 150, 200, 250, 300, 400, 500]);
          var f2 = pick([50, 80, 100, 120, 150, 180, 200]);
          var a2 = parseFloat(((F2 - f2) / m2).toFixed(2));
          var tol2 = parseFloat(Math.max(0.05, Math.abs(a2) * 0.05).toFixed(2));
          var contexte2 = pick([
            'un chariot de manutention motorisé',
            'une voiturette électrique de site industriel',
            'un traîneau tracté par un moteur',
            'un wagonnet sur rail'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte2 + ', de masse $m = ' + m2 + '$ kg, une force motrice $F = ' + F2 + '$ N s\'exerce dans le sens du mouvement, avec un frottement $f = ' + f2 + '$ N qui s\'y oppose.<br/><br/>D\'après le principe fondamental de la dynamique, calcule l\'accélération $a$ du système (en m/s², arrondie au centième).',
            answer: a2,
            tolerance: tol2,
            unit: 'm/s²',
            hint: 'Projette le PFD sur l\'axe du mouvement : $F - f = m \\times a$.',
            solution: [
              'Principe fondamental de la dynamique, projeté sur l\'axe du mouvement : $F - f = m \\times a$.',
              'On isole $a$ : $a = \\dfrac{F-f}{m} = \\dfrac{' + F2 + '-' + f2 + '}{' + m2 + '}$.',
              'Résultat : $a \\approx ' + fr(a2, 2) + '$ m/s².'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un traîneau de masse $m = 25$ kg, tiré par une corde horizontale, se déplace d\'abord à <strong>vitesse constante</strong> $v_0 = 2{,}0$ m/s sur la neige, la tension de la corde valant alors $F_1 = 60$ N. Le frottement de la neige sur le traîneau reste constant tout au long du mouvement. À un instant choisi comme origine des temps, la tension de la corde passe soudainement à $F_2 = 100$ N.',
      tasks: [
        'D\'après le principe d\'inertie, déterminer la valeur de la force de frottement $f$ exercée par la neige sur le traîneau pendant la phase à vitesse constante.',
        'Calculer la nouvelle accélération $a$ du traîneau une fois que la tension est passée à $F_2 = 100$ N (le frottement $f$ restant inchangé).',
        'En supposant cette accélération constante, calculer la vitesse $v$ du traîneau $4{,}0$ s après le changement de tension.'
      ],
      solutions: [
        'Vitesse constante ⟹ $\\sum F = 0$ (principe d\'inertie) : $F_1 - f = 0$, donc $f = F_1 = 60$ N.',
        'PFD projeté sur l\'axe du mouvement : $F_2 - f = m\\times a$, donc $a = \\dfrac{F_2-f}{m} = \\dfrac{100-60}{25} = \\dfrac{40}{25} = 1{,}6$ m/s².',
        'Loi horaire de la vitesse (mouvement rectiligne uniformément varié) : $v = v_0 + a\\times t = 2{,}0 + 1{,}6\\times4{,}0 = 2{,}0+6{,}4 = 8{,}4$ m/s.'
      ],
      finalAnswer: '$f = 60$ N, $a = 1{,}6$ m/s², $v = 8{,}4$ m/s après $4{,}0$ s. Cet exemple illustre l\'articulation des trois lois de Newton : le principe d\'inertie permet de déterminer une force inconnue (le frottement) à partir d\'un mouvement uniforme, puis le PFD permet de calculer l\'accélération dès que l\'équilibre est rompu.'
    },

    evaluation: {
      title: 'Évaluation — Lois de Newton',
      duration: '30 min',
      questions: [
        {
          statement: 'Un système est en mouvement rectiligne uniforme dans un référentiel galiléen. D\'après le principe d\'inertie, on peut affirmer que :',
          type: 'multiple-choice',
          options: [
            'La résultante des forces qui s\'exercent sur lui est nulle',
            'Il n\'est soumis à aucune force',
            'Une force motrice unique agit sur lui',
            'Son accélération est constante et non nulle'
          ],
          answer: 0,
          points: 2,
          correction: 'Mouvement rectiligne uniforme équivaut à $\\sum\\vec{F}=\\vec{0}$ : les forces peuvent être plusieurs et se compenser exactement, ce n\'est pas nécessairement une absence totale de force.'
        },
        {
          statement: 'Un objet de masse $m = 15$ kg est soumis à une résultante des forces $\\sum F = 45$ N. Calculer son accélération $a$ (en m/s²).',
          type: 'numeric',
          answer: 3,
          tolerance: 0.1,
          unit: 'm/s²',
          points: 2,
          correction: '$a = \\dfrac{\\sum F}{m} = \\dfrac{45}{15} = 3$ m/s².'
        },
        {
          statement: 'Une caisse se déplace à vitesse constante, tirée par une force horizontale $F$, avec un frottement $f = 90$ N. D\'après le principe d\'inertie, calculer $F$ (en N).',
          type: 'numeric',
          answer: 90,
          tolerance: 1,
          unit: 'N',
          points: 2,
          correction: 'Vitesse constante ⟹ $\\sum F = 0$ ⟹ $F = f = 90$ N.'
        },
        {
          statement: 'Deux véhicules entrent en collision. D\'après le principe des actions réciproques, la force exercée par le véhicule A sur le véhicule B pendant le choc :',
          type: 'multiple-choice',
          options: [
            'A la même norme que la force exercée par B sur A, quelles que soient leurs masses respectives',
            'Est plus grande si A est plus lourd que B',
            'Est nulle si B était à l\'arrêt',
            'Dépend uniquement de la vitesse de A'
          ],
          answer: 0,
          points: 2,
          correction: 'Le principe des actions réciproques garantit l\'égalité des normes indépendamment des masses ou des vitesses ; en revanche, les effets (accélérations, dégâts) diffèrent bien selon la masse de chaque véhicule, via $a = F/m$.'
        },
        {
          statement: 'Un chariot de masse $m = 60$ kg, soumis à une force motrice $F$ et à un frottement $f = 80$ N, accélère à $a = 0{,}5$ m/s². Calculer la valeur de $F$ (en N).',
          type: 'numeric',
          answer: 110,
          tolerance: 2,
          unit: 'N',
          points: 2,
          correction: 'PFD : $F - f = m\\times a$, donc $F = m\\times a + f = 60\\times0{,}5+80 = 30+80 = 110$ N.'
        }
      ]
    }
  });
