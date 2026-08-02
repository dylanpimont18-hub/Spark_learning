/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-a7-acoustique.js
   BTS FED — S8-A7 Acoustique appliquée (addition de niveaux, atténuation)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-a7-acoustique',
    level: 3, subject: 'fed',
    icon: '🔊',
    title: 'Acoustique appliquée',
    subtitle: 'Addition de niveaux sonores et atténuation acoustique',
    keywords: ['Décibel', 'Addition de niveaux', 'Atténuation', 'Silencieux', 'Bruit'],
    physics: 'Le décibel est une échelle <strong>logarithmique</strong> : on n\'additionne jamais deux niveaux sonores comme deux nombres ordinaires. Deux ventilateurs identiques qui tournent ensemble ne font pas deux fois plus de bruit qu\'un seul — ils font seulement <strong>3 dB de plus</strong>. Savoir manier cette logique est indispensable pour évaluer le bruit d\'une installation CVC multi-sources, ou l\'effet d\'un silencieux.',

    cours: {
      intro: 'Le niveau sonore, exprimé en <strong>décibels (dB)</strong>, est construit sur une échelle logarithmique. Concrètement, cela signifie qu\'on ne peut <strong>jamais additionner directement deux niveaux en dB</strong> : $70$ dB $+\\, 70$ dB ne fait pas $140$ dB.<br/><br/>Pour combiner plusieurs sources sonores, il faut repasser par leurs énergies relatives (qui, elles, s\'additionnent normalement), puis reconvertir la somme en dB. C\'est ce qu\'on appelle l\'<strong>addition logarithmique de niveaux sonores</strong>.<br/><br/>À l\'inverse, un <strong>silencieux</strong> ou un atténuateur acoustique agit directement en <strong>soustrayant</strong> son atténuation du niveau en dB, car il agit lui aussi sur cette même échelle logarithmique.',
      definitions: [
        { term: 'Niveau de pression acoustique $L$', def: 'Grandeur logarithmique exprimée en décibels (dB), qui compare l\'énergie acoustique d\'un son à une référence. Deux sons perçus comme « deux fois plus forts » ne correspondent pas à deux fois plus de dB.' },
        { term: 'Addition de deux niveaux sonores', def: 'Pour combiner deux sources de niveaux $L_1$ et $L_2$ : $L_{\\text{total}} = 10 \\log_{10}\\!\\left(10^{L_1/10} + 10^{L_2/10}\\right)$, en dB.' },
        { term: 'Addition de $n$ sources identiques', def: 'Si $n$ sources ont toutes le même niveau $L$ : $L_{\\text{total}} = L + 10 \\log_{10}(n)$. Pour $n=2$, cela donne $L + 3$ dB (arrondi) — jamais $2L$.' },
        { term: 'Atténuation d\'un silencieux $\\Delta L$', def: 'Réduction de niveau sonore apportée par un silencieux ou un atténuateur, exprimée en dB. Comme l\'échelle est déjà logarithmique, elle se <strong>soustrait directement</strong> : $L_{\\text{sortie}} = L_{\\text{entrée}} - \\Delta L$.' }
      ],
      method: {
        title: 'Combiner des niveaux sonores et appliquer une atténuation',
        steps: [
          '<strong>Convertir chaque niveau</strong> $L_i$ (dB) en énergie relative $10^{L_i/10}$ : c\'est cette grandeur qui s\'additionne réellement entre sources.',
          '<strong>Sommer les énergies relatives</strong> de toutes les sources actives simultanément.',
          '<strong>Reconvertir la somme en dB</strong> : $L_{\\text{total}} = 10 \\log_{10}(\\text{somme})$.',
          '<strong>Cas particulier de $n$ sources identiques</strong> de niveau $L$ : $L_{\\text{total}} = L + 10\\log_{10}(n)$, un raccourci à connaître par cœur.',
          '<strong>Pour un silencieux</strong>, soustraire directement son atténuation $\\Delta L$ (en dB) du niveau d\'entrée : $L_{\\text{sortie}} = L_{\\text{entrée}} - \\Delta L$.'
        ]
      },
      example: {
        statement: 'Deux ventilateurs identiques, chacun émettant un niveau sonore $L = 70$ dB, fonctionnent simultanément dans une centrale de traitement d\'air.<br/><br/>Calculer le niveau sonore total $L_{\\text{total}}$ produit par les deux ventilateurs ensemble.',
        steps: [
          'Il s\'agit de $n = 2$ sources identiques de niveau $L = 70$ dB : $L_{\\text{total}} = L + 10\\log_{10}(n) = 70 + 10\\log_{10}(2)$.',
          '$\\log_{10}(2) \\approx 0{,}301$, donc $10\\log_{10}(2) \\approx 3{,}0$ dB.',
          '$L_{\\text{total}} \\approx 70 + 3{,}0 = 73{,}0$ dB.'
        ],
        answer: '$L_{\\text{total}} \\approx 73$ dB : deux sources identiques ajoutent seulement $3$ dB au niveau d\'une seule, jamais le double — c\'est la conséquence directe de l\'échelle logarithmique du décibel.'
      },
      formulas: [
        '$L_{\\text{total}} = 10 \\log_{10}\\!\\left(10^{L_1/10} + 10^{L_2/10}\\right)$ (addition de deux niveaux sonores, en dB)',
        '$L_{\\text{total}} = L + 10\\log_{10}(n)$ ($n$ sources identiques de niveau $L$, en dB)',
        '$L_{\\text{sortie}} = L_{\\text{entrée}} - \\Delta L$ (atténuation d\'un silencieux, en dB)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Addition logarithmique et atténuation',
        title: 'Deux sources → somme logarithmique → silencieux',
        description: 'Deux sources sonores de niveaux L1 et L2 se combinent par addition logarithmique en un niveau total Ltotal, qui traverse ensuite un silencieux dont l\'atténuation ΔL se soustrait directement en dB.',
        svg: `
          <svg viewBox="0 0 560 260" role="img" aria-labelledby="acou-graph-title acou-graph-desc">
            <title id="acou-graph-title">Chaine addition de niveaux sonores puis attenuation par silencieux</title>
            <desc id="acou-graph-desc">Deux boites source 1 et source 2 envoient chacune une fleche vers une boite centrale d'addition logarithmique, qui produit un niveau total. Une fleche part de cette boite vers une boite silencieux qui soustrait son attenuation pour donner le niveau de sortie.</desc>

            <defs>
              <marker id="arrow-fed-acou" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- source 1 -->
            <rect class="frame-line" x="20" y="30" width="120" height="50" fill="none"></rect>
            <text class="label-soft" x="80" y="60" text-anchor="middle">Source 1 : L1</text>

            <!-- source 2 -->
            <rect class="frame-line" x="20" y="150" width="120" height="50" fill="none"></rect>
            <text class="label-soft" x="80" y="180" text-anchor="middle">Source 2 : L2</text>

            <!-- somme logarithmique -->
            <rect class="frame-line" x="190" y="85" width="140" height="80" fill="none"></rect>
            <text class="label-soft" x="260" y="115" text-anchor="middle">Somme</text>
            <text class="label-soft" x="260" y="135" text-anchor="middle">logarithmique</text>
            <text class="annotation-label" x="260" y="155" text-anchor="middle">Ltotal</text>

            <!-- silencieux -->
            <rect class="frame-line" x="380" y="85" width="140" height="80" fill="none"></rect>
            <text class="label-soft" x="450" y="115" text-anchor="middle">Silencieux</text>
            <text class="annotation-label" x="450" y="140" text-anchor="middle">-ΔL</text>
            <text class="annotation-label" x="450" y="158" text-anchor="middle">Lsortie</text>

            <!-- fleches sources -> somme -->
            <line class="curve-main" x1="140" y1="55" x2="190" y2="105" marker-end="url(#arrow-fed-acou)"></line>
            <line class="curve-main" x1="140" y1="175" x2="190" y2="145" marker-end="url(#arrow-fed-acou)"></line>

            <!-- fleche somme -> silencieux -->
            <line class="curve-main" x1="330" y1="125" x2="380" y2="125" marker-end="url(#arrow-fed-acou)"></line>

            <text class="label-soft" x="280" y="235" text-anchor="middle">Ltotal = 10 log(10^(L1/10) + 10^(L2/10))     Lsortie = Ltotal - ΔL</text>
          </svg>
        `,
        notes: [
          'Les deux flèches issues des sources convergent vers la boîte de <strong>somme logarithmique</strong> : c\'est là qu\'on reconvertit la somme des énergies relatives en un niveau $L_{\\text{total}}$ unique.',
          'La flèche suivante traverse le <strong>silencieux</strong>, qui soustrait directement son atténuation $\\Delta L$ (en dB) au niveau reçu.',
          'Chaque étape reste sur l\'échelle logarithmique du décibel : on ne revient jamais à une simple addition ou soustraction arithmétique des puissances sonores.'
        ],
        reading: 'Suis les deux flèches partant des sources vers la boîte de somme logarithmique, puis la flèche unique qui traverse le silencieux : le niveau final Lsortie est inférieur à Ltotal de ΔL.',
        caption: 'Chaîne acoustique : addition logarithmique de deux sources puis atténuation par un silencieux.'
      },
      recap: [
        'Le décibel est une échelle <strong>logarithmique</strong> : on ne peut jamais additionner deux niveaux en dB directement.',
        'Pour combiner des sources, on repasse par les énergies relatives $10^{L_i/10}$, on les additionne, puis on reconvertit : $L_{\\text{total}} = 10\\log_{10}(\\sum 10^{L_i/10})$.',
        'Cas marquant à retenir : <strong>deux sources identiques</strong> de niveau $L$ donnent $L + 3$ dB, jamais $2L$.',
        'Plus généralement, $n$ sources identiques donnent $L + 10\\log_{10}(n)$.',
        'Un silencieux agit directement par soustraction en dB : $L_{\\text{sortie}} = L_{\\text{entrée}} - \\Delta L$, car il opère sur la même échelle logarithmique.'
      ],
      piege: 'Le piège classique est d\'additionner arithmétiquement deux niveaux sonores : $70$ dB $+\\, 70$ dB $\\neq 140$ dB (ce serait un niveau absurde, largement au-delà du seuil de la douleur). La bonne réponse, $73$ dB, surprend souvent car elle semble « trop petite » — mais elle traduit fidèlement le fait que l\'oreille perçoit les niveaux sonores sur une échelle logarithmique, où chaque tranche de $+10$ dB correspond à une énergie $10$ fois plus grande.'
    },

    quiz: [
      {
        q: 'Deux ventilateurs identiques émettant chacun $70$ dB fonctionnent simultanément. Le niveau sonore total est d\'environ :',
        options: [
          '$140$ dB',
          '$70$ dB',
          '$73$ dB',
          '$35$ dB'
        ],
        answer: 2,
        correction: 'Pour $n=2$ sources identiques : $L_{\\text{total}} = L + 10\\log_{10}(2) \\approx 70 + 3 = 73$ dB. On n\'additionne jamais les dB arithmétiquement.'
      },
      {
        q: 'Un silencieux d\'atténuation $\\Delta L = 10$ dB est installé après une source de $85$ dB. Le niveau en sortie est :',
        options: [
          '$8{,}5$ dB',
          '$95$ dB',
          '$75$ dB',
          '$850$ dB'
        ],
        answer: 2,
        correction: 'L\'atténuation d\'un silencieux se soustrait directement du niveau en dB : $L_{\\text{sortie}} = L_{\\text{entrée}} - \\Delta L = 85 - 10 = 75$ dB.'
      },
      {
        q: 'Pourquoi ne peut-on pas additionner directement deux niveaux sonores exprimés en dB ?',
        options: [
          'Parce que le décibel est une unité imaginaire sans réalité physique',
          'Parce que le décibel est construit sur une échelle logarithmique, il faut repasser par les énergies relatives avant de sommer',
          'Parce que les niveaux sonores ne peuvent jamais dépasser $100$ dB',
          'Parce que seuls les silencieux permettent d\'additionner des niveaux'
        ],
        answer: 1,
        correction: 'Le dB est une échelle logarithmique : il faut convertir chaque niveau en énergie relative $10^{L_i/10}$, additionner ces énergies, puis reconvertir la somme en dB.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une salle de machines regroupant plusieurs compresseurs identiques',
          'une toiture technique avec plusieurs unités extérieures de PAC identiques',
          'une centrale de traitement d\'air avec plusieurs ventilateurs identiques',
          'un local technique regroupant plusieurs pompes identiques'
        ]);
        const n = pick([2, 3, 4]);
        const L = rand(60, 90);
        const Ltotal = parseFloat((L + 10 * Math.log10(n)).toFixed(1));
        return {
          statement: `Dans ${contexte}, $n = ${n}$ appareils identiques fonctionnent simultanément, chacun émettant un niveau sonore $L = ${L}$ dB.<br/><br/>Calcule le niveau sonore total $L_{\\text{total}}$ produit par l'ensemble (en dB, arrondi au dixième).`,
          answer: Ltotal,
          tolerance: 0.3,
          unit: 'dB',
          hint: 'Utilise le raccourci pour $n$ sources identiques : $L_{\\text{total}} = L + 10\\log_{10}(n)$.',
          solution: [
            `$L_{\\text{total}} = L + 10\\log_{10}(n) = ${L} + 10\\log_{10}(${n})$.`,
            `$10\\log_{10}(${n}) \\approx ${fr(parseFloat((10 * Math.log10(n)).toFixed(2)), 2)}$ dB.`,
            `$L_{\\text{total}} \\approx ${L} + ${fr(parseFloat((10 * Math.log10(n)).toFixed(2)), 2)} \\approx ${fr(Ltotal, 1)}$ dB.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une centrale de traitement d\'air comporte deux ventilateurs identiques, chacun émettant un niveau sonore $L = 78$ dB en fonctionnement. Un silencieux d\'atténuation $\\Delta L = 15$ dB est installé en sortie de la centrale, avant le rejet vers l\'extérieur.',
      tasks: [
        'Calculer le niveau sonore total $L_{\\text{total}}$ produit par les deux ventilateurs fonctionnant simultanément.',
        'Calculer le niveau sonore $L_{\\text{sortie}}$ après passage dans le silencieux.',
        'Un troisième ventilateur identique est ajouté (les trois fonctionnent ensemble). Recalculer le niveau total $L_{\\text{total},3}$ avant silencieux.',
        'Comparer l\'écart de niveau entre $1$, $2$ puis $3$ ventilateurs, et commenter l\'évolution.'
      ],
      solutions: [
        '$n=2$ sources identiques de $78$ dB : $L_{\\text{total}} = 78 + 10\\log_{10}(2) \\approx 78 + 3{,}0 = 81{,}0$ dB.',
        '$L_{\\text{sortie}} = L_{\\text{total}} - \\Delta L = 81{,}0 - 15 = 66{,}0$ dB.',
        '$n=3$ sources identiques de $78$ dB : $L_{\\text{total},3} = 78 + 10\\log_{10}(3) \\approx 78 + 4{,}8 = 82{,}8$ dB.',
        'Passer de $1$ à $2$ ventilateurs ajoute $+3{,}0$ dB ($78 \\to 81{,}0$), mais passer de $2$ à $3$ ventilateurs n\'ajoute que $+1{,}8$ dB supplémentaires ($81{,}0 \\to 82{,}8$). Chaque source ajoutée pèse de moins en moins sur le niveau total : c\'est la signature de l\'échelle logarithmique, où l\'effet des sources supplémentaires diminue progressivement.'
      ],
      finalAnswer: '$L_{\\text{total}} \\approx 81{,}0$ dB pour deux ventilateurs, $L_{\\text{sortie}} \\approx 66{,}0$ dB après silencieux, et $L_{\\text{total},3} \\approx 82{,}8$ dB avec un troisième ventilateur — l\'écart apporté par chaque source supplémentaire diminue à mesure que leur nombre augmente.'
    },

    evaluation: {
      title: 'Évaluation — Acoustique appliquée',
      duration: '20 min',
      questions: [
        {
          statement: 'Deux sources identiques de $65$ dB fonctionnent simultanément. Calculer le niveau sonore total (en dB, arrondi à l\'unité).',
          type: 'numeric',
          answer: 68,
          tolerance: 1,
          unit: 'dB',
          points: 2,
          correction: '$L_{\\text{total}} = 65 + 10\\log_{10}(2) \\approx 65 + 3 = 68$ dB.'
        },
        {
          statement: 'Un silencieux d\'atténuation $\\Delta L = 8$ dB est installé après une source de $92$ dB. Calculer le niveau en sortie (en dB).',
          type: 'numeric',
          answer: 84,
          tolerance: 1,
          unit: 'dB',
          points: 2,
          correction: '$L_{\\text{sortie}} = L_{\\text{entrée}} - \\Delta L = 92 - 8 = 84$ dB.'
        },
        {
          statement: 'Quatre sources identiques de niveau $L = 60$ dB fonctionnent ensemble. Calculer le niveau total (en dB, arrondi à l\'unité).',
          type: 'numeric',
          answer: 66,
          tolerance: 1,
          unit: 'dB',
          points: 3,
          correction: '$L_{\\text{total}} = L + 10\\log_{10}(4) \\approx 60 + 6{,}0 = 66$ dB.'
        },
        {
          statement: 'Additionner arithmétiquement deux niveaux sonores exprimés en dB (par exemple $60+60=120$ dB) est :',
          type: 'multiple-choice',
          options: [
            'Correct, c\'est la méthode officielle',
            'Incorrect : le dB est une échelle logarithmique, il faut passer par les énergies relatives avant de sommer',
            'Correct uniquement si les deux sources sont identiques',
            'Correct uniquement en présence d\'un silencieux'
          ],
          answer: 1,
          points: 2,
          correction: 'Le décibel est une échelle logarithmique : additionner directement deux niveaux en dB n\'a pas de sens physique. Il faut repasser par les énergies relatives $10^{L_i/10}$.'
        },
        {
          statement: 'En passant de $1$ à $2$ sources identiques, puis de $2$ à $4$ sources identiques (même niveau $L$ chacune), l\'augmentation de niveau sonore observée à chaque doublement du nombre de sources est :',
          type: 'multiple-choice',
          options: [
            'Toujours la même, environ $+3$ dB à chaque doublement',
            'De plus en plus grande à chaque doublement',
            'Nulle après le premier doublement',
            'Toujours égale à $+10$ dB'
          ],
          answer: 0,
          points: 3,
          correction: 'Doubler le nombre de sources identiques multiplie par $2$ l\'énergie totale, ce qui ajoute systématiquement $10\\log_{10}(2) \\approx 3$ dB, quel que soit le nombre de départ : $1 \\to 2$ ajoute $+3$ dB, et $2 \\to 4$ ajoute également $+3$ dB.'
        }
      ]
    }
  });
