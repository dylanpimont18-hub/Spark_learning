/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-lewis.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-lewis',
    level: 2, subject: 'physique',
    icon: '🔗',
    title: 'Structure des entités chimiques : Lewis et géométrie VSEPR',
    subtitle: 'Doublets liants et non liants, règle de l\'octet et du duet, prévision de la géométrie moléculaire (modèle VSEPR)',
    keywords: ['Lewis', 'VSEPR', 'Doublets', 'Géométrie moléculaire', 'Octet'],
    physics: 'La géométrie d\'une molécule, prévue par le modèle VSEPR à partir de sa formule de Lewis, conditionne directement ses propriétés physiques : polarité, solubilité, odeur, point d\'ébullition. C\'est ce raisonnement qui explique pourquoi l\'eau est un solvant polaire, pourquoi certains gaz sont inodores, ou comment sont conçues les molécules de nombreux médicaments et matériaux.',

    cours: {
      intro: 'La <strong>formule de Lewis</strong> d\'une molécule représente la façon dont les atomes partagent leurs électrons de valence pour former des liaisons. Chaque atome cherche à saturer sa couche externe : <strong>règle du duet</strong> (2 électrons, pour l\'hydrogène) ou <strong>règle de l\'octet</strong> (8 électrons, pour la plupart des autres atomes).<br/><br/>Les électrons de valence se répartissent en <strong>doublets liants</strong> (partagés entre deux atomes, représentés par un trait entre eux) et en <strong>doublets non liants</strong> (propres à un seul atome, représentés par un trait sur cet atome).<br/><br/>Une fois la formule de Lewis établie, le <strong>modèle VSEPR</strong> (répulsion des doublets de la couche de valence) permet de prévoir la géométrie 3D de la molécule : les doublets (liants ou non liants) autour de l\'atome central se repoussent et s\'orientent pour être aussi éloignés que possible les uns des autres.',
      definitions: [
        { term: 'Doublet liant', def: 'Paire d\'électrons partagée entre deux atomes, formant une liaison covalente. Représenté par un trait entre les deux atomes liés dans la formule de Lewis.' },
        { term: 'Doublet non liant', def: 'Paire d\'électrons de valence propre à un seul atome, non engagée dans une liaison. Représenté par un trait porté par cet atome seul.' },
        { term: 'Règle de l\'octet / du duet', def: 'Chaque atome (sauf l\'hydrogène) tend à s\'entourer de $8$ électrons (octet) dans ses liaisons et doublets non liants ; l\'hydrogène se limite à $2$ électrons (duet).' },
        { term: 'Modèle VSEPR (formule $AX_nE_m$)', def: 'Modèle prévoyant la géométrie 3D d\'une molécule à partir du nombre $n$ de doublets liants et $m$ de doublets non liants portés par l\'atome central $A$. Une liaison double ou triple compte pour <strong>une seule direction</strong> $X$, au même titre qu\'une liaison simple.' }
      ],
      method: {
        title: 'Prévoir la géométrie d\'une molécule en 3 étapes',
        steps: [
          '<strong>Compter les électrons de valence</strong> de la molécule : additionner le nombre d\'électrons de valence de chaque atome (en tenant compte d\'une éventuelle charge), puis diviser par $2$ pour obtenir le nombre total de doublets.',
          '<strong>Construire la formule de Lewis</strong> : répartir les doublets en doublets liants (une liaison entre chaque atome périphérique et l\'atome central) et doublets non liants, en respectant la règle de l\'octet ou du duet sur chaque atome.',
          '<strong>Appliquer le modèle VSEPR</strong> : compter le nombre $n$ de directions liantes et $m$ de doublets non liants portés par l\'atome central (une liaison multiple ne compte que pour une seule direction), identifier la formule $AX_nE_m$, puis lire la géométrie et l\'angle associés dans le tableau de référence.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Modèle VSEPR — géométries de référence',
        title: 'Des doublets à la géométrie moléculaire : quatre cas de référence',
        description: 'Représentation en perspective (traits pleins dans le plan, triangle plein vers l\'avant, hachures vers l\'arrière) des quatre géométries les plus courantes prévues par le modèle VSEPR, selon le nombre de doublets liants ($X$) et non liants ($E$) portés par l\'atome central $A$.',
        svg: `
          <svg viewBox="0 0 600 300" role="img" aria-labelledby="lewis1re-title lewis1re-desc">
            <title id="lewis1re-title">Quatre geometries moleculaires de reference du modele VSEPR</title>
            <desc id="lewis1re-desc">Quatre schemas presentent, de gauche a droite, les geometries lineaire, trigonale plane, tetraedrique et pyramidale d'une molecule autour d'un atome central A. Le premier schema montre deux liaisons opposees formant un angle de 180 degres. Le deuxieme montre trois liaisons dans un plan formant des angles de 120 degres entre elles. Le troisieme montre quatre liaisons dont deux traits pleins vers le haut, un triangle plein vers le bas-gauche representant une liaison vers l'avant, et une liaison hachuree vers le bas-droite representant une liaison vers l'arriere, formant un angle caracteristique de 109,5 degres. Le quatrieme schema est similaire au troisieme mais une des quatre directions est remplacee par un doublet non liant represente par deux points au-dessus de l'atome central, donnant une geometrie pyramidale d'angle voisin de 107 degres.</desc>

            <!-- separateurs -->
            <line class="grid-line" x1="170" y1="20" x2="170" y2="260"></line>
            <line class="grid-line" x1="310" y1="20" x2="310" y2="260"></line>
            <line class="grid-line" x1="450" y1="20" x2="450" y2="260"></line>

            <!-- ===== Panel 1 : lineaire AX2 ===== -->
            <text class="annotation-label" x="100" y="34" text-anchor="middle">AX₂</text>
            <line class="frame-line" x1="60" y1="110" x2="140" y2="110"></line>
            <circle class="plot-point-alt" cx="60" cy="110" r="5"></circle>
            <circle class="plot-point" cx="100" cy="110" r="5"></circle>
            <circle class="plot-point-alt" cx="140" cy="110" r="5"></circle>
            <text class="tick-label" x="60" y="128" text-anchor="middle">X</text>
            <text class="tick-label" x="140" y="128" text-anchor="middle">X</text>
            <text class="label-soft" x="100" y="94" text-anchor="middle">A</text>
            <text class="tick-label" x="100" y="186" text-anchor="middle">Linéaire</text>
            <text class="annotation-label" x="100" y="206" text-anchor="middle">180°</text>
            <text class="label-soft" x="100" y="224" text-anchor="middle">ex. CO₂</text>

            <!-- ===== Panel 2 : trigonale plane AX3 ===== -->
            <text class="annotation-label" x="240" y="34" text-anchor="middle">AX₃</text>
            <line class="frame-line" x1="240" y1="110" x2="240" y2="72"></line>
            <line class="frame-line" x1="240" y1="110" x2="207.1" y2="129"></line>
            <line class="frame-line" x1="240" y1="110" x2="272.9" y2="129"></line>
            <circle class="plot-point" cx="240" cy="110" r="5"></circle>
            <circle class="plot-point-alt" cx="240" cy="72" r="5"></circle>
            <circle class="plot-point-alt" cx="207.1" cy="129" r="5"></circle>
            <circle class="plot-point-alt" cx="272.9" cy="129" r="5"></circle>
            <text class="tick-label" x="240" y="60" text-anchor="middle">X</text>
            <text class="tick-label" x="195" y="140" text-anchor="middle">X</text>
            <text class="tick-label" x="285" y="140" text-anchor="middle">X</text>
            <text class="label-soft" x="252" y="105" text-anchor="middle">A</text>
            <text class="tick-label" x="240" y="186" text-anchor="middle">Trigonale plane</text>
            <text class="annotation-label" x="240" y="206" text-anchor="middle">120°</text>
            <text class="label-soft" x="240" y="224" text-anchor="middle">ex. BF₃</text>

            <!-- ===== Panel 3 : tetraedrique AX4 ===== -->
            <text class="annotation-label" x="380" y="34" text-anchor="middle">AX₄</text>
            <line class="frame-line" x1="380" y1="110" x2="350" y2="85"></line>
            <line class="frame-line" x1="380" y1="110" x2="410" y2="85"></line>
            <path class="curve-main" fill="var(--diagram-accent)" stroke="none" d="M380,110 L359.9,150.6 L369.3,154.0 Z"></path>
            <path class="frame-line" fill="none" d="M383.0,125.7 L387.8,123.9 M385.5,134.3 L391.4,132.2 M388.0,143.0 L395.1,140.4 M390.5,151.7 L398.7,148.7"></path>
            <line class="guide-line" x1="380" y1="110" x2="395.4" y2="152.3" stroke-width="1.2"></line>
            <circle class="plot-point" cx="380" cy="110" r="5"></circle>
            <circle class="plot-point-alt" cx="350" cy="85" r="5"></circle>
            <circle class="plot-point-alt" cx="410" cy="85" r="5"></circle>
            <circle class="plot-point-alt" cx="364.6" cy="152.3" r="5"></circle>
            <circle class="plot-point-alt" cx="395.4" cy="152.3" r="5"></circle>
            <text class="tick-label" x="345" y="76" text-anchor="middle">X</text>
            <text class="tick-label" x="415" y="76" text-anchor="middle">X</text>
            <text class="tick-label" x="356" y="168" text-anchor="middle">X</text>
            <text class="tick-label" x="404" y="168" text-anchor="middle">X</text>
            <text class="label-soft" x="392" y="105" text-anchor="middle">A</text>
            <text class="tick-label" x="380" y="186" text-anchor="middle">Tétraédrique</text>
            <text class="annotation-label" x="380" y="206" text-anchor="middle">109,5°</text>
            <text class="label-soft" x="380" y="224" text-anchor="middle">ex. CH₄</text>

            <!-- ===== Panel 4 : pyramidale AX3E ===== -->
            <text class="annotation-label" x="520" y="34" text-anchor="middle">AX₃E</text>
            <line class="frame-line" x1="520" y1="110" x2="490" y2="80"></line>
            <line class="frame-line" x1="520" y1="110" x2="550" y2="80"></line>
            <path class="curve-main" fill="var(--diagram-accent)" stroke="none" d="M520,110 L515,155 L525,155 Z"></path>
            <circle class="label-soft" cx="514" cy="95" r="2.6"></circle>
            <circle class="label-soft" cx="526" cy="95" r="2.6"></circle>
            <circle class="plot-point" cx="520" cy="110" r="5"></circle>
            <circle class="plot-point-alt" cx="490" cy="80" r="5"></circle>
            <circle class="plot-point-alt" cx="550" cy="80" r="5"></circle>
            <circle class="plot-point-alt" cx="520" cy="155" r="5"></circle>
            <text class="label-soft" x="532" y="116" text-anchor="start">A</text>
            <text class="tick-label" x="484" y="72" text-anchor="middle">X</text>
            <text class="tick-label" x="556" y="72" text-anchor="middle">X</text>
            <text class="tick-label" x="520" y="172" text-anchor="middle">X</text>
            <text class="tick-label" x="530" y="95" text-anchor="start">E</text>
            <text class="tick-label" x="520" y="186" text-anchor="middle">Pyramidale</text>
            <text class="annotation-label" x="520" y="206" text-anchor="middle">≈ 107°</text>
            <text class="label-soft" x="520" y="224" text-anchor="middle">ex. NH₃</text>

            <text class="label-soft" x="300" y="252" text-anchor="middle">A : atome central — X : direction liante — E : doublet non liant — triangle plein : vers l'avant — hachures : vers l'arrière</text>
          </svg>
        `,
        notes: [
          'Chaque <strong>doublet liant</strong> (une liaison, simple ou multiple) et chaque <strong>doublet non liant</strong> compte pour une direction dans le décompte VSEPR : c\'est leur nombre total autour de l\'atome central qui fixe la géométrie.',
          'Passer de $AX_4$ (tétraédrique) à $AX_3E$ (pyramidale) revient à remplacer une direction liante par un doublet non liant : la géométrie se déforme légèrement, l\'angle diminuant de $109{,}5°$ à environ $107°$ car un doublet non liant repousse davantage les autres doublets qu\'une liaison.',
          'Le triangle plein représente une liaison qui sort du plan vers l\'avant (vers l\'observateur), les hachures une liaison qui recule vers l\'arrière : c\'est la convention de représentation en perspective (représentation de Cram).'
        ],
        reading: 'Compare les quatre schémas de gauche à droite : plus l\'atome central porte de directions (liantes ou non liantes), plus la géométrie s\'éloigne d\'un simple alignement, jusqu\'à l\'arrangement tétraédrique à $4$ directions.',
        caption: 'Les quatre géométries moléculaires de référence prévues par le modèle VSEPR, selon le nombre de doublets liants ($X$) et non liants ($E$) autour de l\'atome central $A$.'
      },
      example: {
        statement: 'Déterminer la géométrie de la molécule d\'eau $\\text{H}_2\\text{O}$ à partir de sa formule de Lewis (numéro atomique de l\'oxygène $Z=8$, électrons de valence de l\'oxygène : $6$, de l\'hydrogène : $1$).',
        steps: [
          'Nombre total d\'électrons de valence de la molécule : $6$ (oxygène) $+ 2 \\times 1$ (deux hydrogènes) $= 8$ électrons, soit $4$ doublets.',
          'Construction de la formule de Lewis : l\'oxygène forme $2$ liaisons O–H (donc $2$ doublets liants), et conserve les $4$ électrons restants sous forme de $2$ doublets non liants. L\'octet de l\'oxygène est ainsi respecté ($2$ liants $\\times 2 + 2$ non liants $\\times 2 = 8$ électrons).',
          'Application du modèle VSEPR : l\'atome central (oxygène) porte $n = 2$ directions liantes et $m = 2$ doublets non liants, soit une formule $AX_2E_2$.',
          'D\'après le tableau de référence, $AX_2E_2$ correspond à une géométrie <strong>coudée</strong> (angle $\\hat{\\text{HOH}} \\approx 104{,}5°$, légèrement inférieur à l\'angle tétraédrique $109{,}5°$ car les deux doublets non liants repoussent davantage les liaisons O–H).'
        ],
        answer: 'La molécule d\'eau adopte une géométrie <strong>coudée</strong>, avec un angle $\\hat{\\text{HOH}} \\approx 104{,}5°$. C\'est cette géométrie non alignée, combinée à la différence d\'électronégativité entre O et H, qui rend la molécule d\'eau polaire.'
      },
      formulas: [
        'Nombre total de doublets autour de l\'atome central : $n + m$ (doublets liants $+$ doublets non liants)',
        '$AX_2$ : géométrie linéaire, angle $180°$',
        '$AX_3$ : géométrie trigonale plane, angle $120°$',
        '$AX_4$ : géométrie tétraédrique, angle $109{,}5°$',
        '$AX_3E$ : géométrie pyramidale, angle $\\approx 107°$',
        '$AX_2E_2$ : géométrie coudée, angle $\\approx 104{,}5°$'
      ],
      recap: [
        'La formule de Lewis répartit les électrons de valence en doublets <strong>liants</strong> (partagés) et <strong>non liants</strong> (propres à un atome), en respectant la règle de l\'octet (ou du duet pour l\'hydrogène).',
        'Le modèle VSEPR prévoit la géométrie 3D à partir du nombre $n$ de directions liantes et $m$ de doublets non liants portés par l\'atome central : formule $AX_nE_m$.',
        'Une liaison double ou triple ne compte que pour <strong>une seule direction</strong> dans le décompte VSEPR, au même titre qu\'une liaison simple.',
        'Un doublet non liant occupe plus de place qu\'un doublet liant : sa présence <strong>referme légèrement</strong> les angles entre les liaisons voisines (ex. $109{,}5°$ pour $AX_4$ contre $\\approx 107°$ pour $AX_3E$).'
      ],
      piege: 'Une erreur fréquente consiste à compter une liaison double ou triple comme deux ou trois directions distinctes dans le modèle VSEPR, par exemple à considérer que le dioxyde de carbone $\\text{CO}_2$ est de type $AX_4$. Attention, dans le modèle VSEPR une liaison multiple ne compte que pour <strong>une seule direction</strong> $X$ : $\\text{CO}_2$ est bien de type $AX_2$ (deux doubles liaisons C=O), d\'où sa géométrie linéaire à $180°$.'
    },

    quiz: [
      {
        q: 'Dans la molécule d\'ammoniac $\\text{NH}_3$, l\'atome d\'azote porte $3$ doublets liants et $1$ doublet non liant. Quelle est sa formule VSEPR et sa géométrie ?',
        options: [
          '$AX_4$, géométrie tétraédrique',
          '$AX_3E$, géométrie pyramidale',
          '$AX_3$, géométrie trigonale plane',
          '$AX_2E_2$, géométrie coudée'
        ],
        answer: 1,
        correction: 'Avec $3$ directions liantes ($n=3$) et $1$ doublet non liant ($m=1$), la formule est $AX_3E$, ce qui correspond à une géométrie <strong>pyramidale</strong> (angle $\\approx 107°$).'
      },
      {
        q: 'Combien de directions représente une liaison double (par exemple $\\text{C}=\\text{O}$) dans le décompte du modèle VSEPR ?',
        options: [
          'Une seule direction',
          'Deux directions distinctes',
          'Cela dépend de la molécule',
          'Aucune, une liaison double n\'est jamais comptée'
        ],
        answer: 0,
        correction: 'Dans le modèle VSEPR, une liaison multiple (double ou triple) ne compte que pour <strong>une seule direction</strong> $X$, exactement comme une liaison simple. C\'est le nombre de directions, pas le nombre de doublets, qui détermine la géométrie.'
      },
      {
        q: 'La molécule de méthane $\\text{CH}_4$ (formule $AX_4$) a une géométrie tétraédrique avec un angle $\\hat{\\text{HCH}} \\approx 109{,}5°$. Pourquoi cet angle diminue-t-il à environ $107°$ dans l\'ammoniac $\\text{NH}_3$ (formule $AX_3E$) ?',
        options: [
          'Parce que l\'azote est plus petit que le carbone',
          'Parce qu\'un doublet non liant occupe plus de place et repousse davantage les liaisons voisines',
          'Parce que l\'ammoniac contient moins d\'électrons de valence',
          'Il n\'y a en réalité aucune différence d\'angle'
        ],
        answer: 1,
        correction: 'Un doublet non liant, moins localisé qu\'un doublet liant, exerce une répulsion plus forte sur les doublets voisins. Il \"referme\" donc légèrement l\'angle entre les liaisons restantes par rapport à la géométrie tétraédrique idéale.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['doublets', 'angle']);

        if (typeExo === 'doublets') {
          var molecules = [
            { nom: 'eau', formule: '\\text{H}_2\\text{O}', total: 8 },
            { nom: 'ammoniac', formule: '\\text{NH}_3', total: 8 },
            { nom: 'méthane', formule: '\\text{CH}_4', total: 8 },
            { nom: 'sulfure d\'hydrogène', formule: '\\text{H}_2\\text{S}', total: 8 },
            { nom: 'dioxyde de carbone', formule: '\\text{CO}_2', total: 16 },
            { nom: 'trifluorure de bore', formule: '\\text{BF}_3', total: 24 },
            { nom: 'trichlorure de phosphore', formule: '\\text{PCl}_3', total: 26 }
          ];
          var mol = pick(molecules);
          var doublets = mol.total / 2;
          var contexte = pick([
            'un exercice de construction de formule de Lewis',
            'une fiche de révision de chimie',
            'un contrôle de première spécialité',
            'une séance de travaux pratiques'
          ]);
          return {
            statement: 'Dans le cadre de ' + contexte + ', la molécule de ' + mol.nom + ' ($' + mol.formule + '$) possède un total de $' + mol.total + '$ électrons de valence à répartir dans sa formule de Lewis.<br/><br/>Calcule le nombre total de doublets (liants et non liants) que compte cette molécule.',
            answer: doublets,
            tolerance: 0,
            unit: '',
            hint: 'Chaque doublet regroupe $2$ électrons : le nombre de doublets s\'obtient en divisant le nombre total d\'électrons de valence par $2$.',
            solution: [
              'Un doublet (liant ou non liant) regroupe toujours $2$ électrons.',
              'Nombre de doublets $= \\dfrac{' + mol.total + '}{2}$.',
              'Résultat : ' + doublets + ' doublets au total dans la molécule.'
            ]
          };
        } else {
          var cas = [
            { formule: 'AX_2', nom: 'linéaire', angle: 180, exemple: 'dioxyde de carbone $\\text{CO}_2$' },
            { formule: 'AX_3', nom: 'trigonale plane', angle: 120, exemple: 'trifluorure de bore $\\text{BF}_3$' },
            { formule: 'AX_4', nom: 'tétraédrique', angle: 109.5, exemple: 'méthane $\\text{CH}_4$' }
          ];
          var c = pick(cas);
          var contexte2 = pick([
            'un tableau de géométries VSEPR à compléter',
            'une fiche de synthèse de chimie',
            'un exercice d\'application directe du cours'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', on considère une molécule de type $' + c.formule + '$ (géométrie ' + c.nom + '), comme la molécule de ' + c.exemple + '.<br/><br/>Indique la valeur de l\'angle caractéristique de cette géométrie (en degrés).',
            answer: c.angle,
            tolerance: 0.3,
            unit: '°',
            hint: 'Chaque géométrie VSEPR de référence ($AX_2$, $AX_3$, $AX_4$…) est associée à un angle caractéristique fixe, à connaître par cœur.',
            solution: [
              'La géométrie ' + c.nom + ' (formule $' + c.formule + '$) est une géométrie de référence du modèle VSEPR.',
              'Son angle caractéristique vaut $' + fr(c.angle, c.angle % 1 === 0 ? 0 : 1) + '°$.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On souhaite déterminer la géométrie de la molécule d\'ammoniac $\\text{NH}_3$, très utilisée dans l\'industrie (engrais, réfrigération). Données : électrons de valence de l\'azote $\\text{N}$ : $5$ ; électrons de valence de l\'hydrogène $\\text{H}$ : $1$.',
      tasks: [
        'Calculer le nombre total d\'électrons de valence de la molécule $\\text{NH}_3$, puis le nombre total de doublets.',
        'Construire la formule de Lewis de $\\text{NH}_3$ : préciser le nombre de doublets liants et de doublets non liants portés par l\'atome d\'azote, en vérifiant la règle de l\'octet.',
        'En déduire la formule VSEPR $AX_nE_m$ de la molécule, sa géométrie, et la valeur approchée de son angle $\\hat{\\text{HNH}}$.'
      ],
      solutions: [
        'Électrons de valence : $5$ (azote) $+ 3 \\times 1$ (trois hydrogènes) $= 8$ électrons, soit $\\dfrac{8}{2} = 4$ doublets.',
        'L\'azote forme $3$ liaisons N–H (donc $3$ doublets liants), ce qui utilise $3$ doublets sur les $4$ disponibles. Il lui reste $1$ doublet non liant. Vérification de l\'octet de l\'azote : $3$ doublets liants $+ 1$ doublet non liant $= 4$ doublets, soit $8$ électrons : l\'octet est respecté.',
        'L\'atome central (azote) porte $n = 3$ directions liantes et $m = 1$ doublet non liant : formule $AX_3E$. D\'après le tableau de référence, cette formule correspond à une géométrie <strong>pyramidale</strong>, d\'angle $\\hat{\\text{HNH}} \\approx 107°$.'
      ],
      finalAnswer: 'La molécule $\\text{NH}_3$ a une géométrie <strong>pyramidale</strong> ($AX_3E$), d\'angle $\\hat{\\text{HNH}} \\approx 107°$, légèrement inférieur à l\'angle tétraédrique idéal $109{,}5°$ à cause de la répulsion plus forte exercée par le doublet non liant de l\'azote.'
    },

    evaluation: {
      title: 'Évaluation — Structure des entités chimiques (Lewis, VSEPR)',
      duration: '30 min',
      questions: [
        {
          statement: 'La molécule de méthane $\\text{CH}_4$ compte $8$ électrons de valence. Calculer le nombre total de doublets de cette molécule.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Nombre de doublets $= \\dfrac{8}{2} = 4$ doublets (ici, $4$ doublets liants : les $4$ liaisons C–H).'
        },
        {
          statement: 'Un doublet non liant est :',
          type: 'multiple-choice',
          options: [
            'Une paire d\'électrons partagée entre deux atomes',
            'Une paire d\'électrons propre à un seul atome, non engagée dans une liaison',
            'Un électron célibataire',
            'Une liaison double'
          ],
          answer: 1,
          points: 2,
          correction: 'Un doublet non liant regroupe $2$ électrons de valence appartenant à un seul atome, qui ne participent à aucune liaison. Il occupe une direction dans le décompte VSEPR, comme un doublet liant.'
        },
        {
          statement: 'Une molécule de formule $AX_4$ a une géométrie tétraédrique. Quelle est la valeur de son angle caractéristique (en degrés, arrondie au dixième) ?',
          type: 'numeric',
          answer: 109.5,
          tolerance: 0.2,
          unit: '°',
          points: 2,
          correction: 'La géométrie tétraédrique ($AX_4$) a un angle caractéristique de $109{,}5°$, à connaître comme valeur de référence.'
        },
        {
          statement: 'Dans le modèle VSEPR, une liaison triple (par exemple dans $\\text{N}_2$) compte pour :',
          type: 'multiple-choice',
          options: [
            'Trois directions distinctes',
            'Une seule direction, comme une liaison simple',
            'Deux directions',
            'Aucune direction'
          ],
          answer: 1,
          points: 2,
          correction: 'Qu\'elle soit simple, double ou triple, une liaison ne compte toujours que pour <strong>une seule direction</strong> dans le décompte VSEPR, car les doublets qui la composent occupent la même région de l\'espace.'
        },
        {
          statement: 'Une molécule de formule $AX_3E$ (géométrie pyramidale, comme $\\text{NH}_3$) a un angle caractéristique voisin de (en degrés, arrondi à l\'unité) :',
          type: 'numeric',
          answer: 107,
          tolerance: 1,
          unit: '°',
          points: 2,
          correction: 'La géométrie pyramidale ($AX_3E$) a un angle caractéristique voisin de $107°$, inférieur à l\'angle tétraédrique $109{,}5°$ à cause de la répulsion plus forte exercée par le doublet non liant.'
        }
      ]
    }
  });
