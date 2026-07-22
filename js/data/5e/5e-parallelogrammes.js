/* =========================================================
   Spark Learning – data/5e/5e-parallelogrammes.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-parallelogrammes',
    level: 1, subject: 'maths',
    icon: '▱',
    title: 'Parallélogrammes et propriétés',
    subtitle: 'Parallélogramme, rectangle, losange, carré',
    keywords: ['Parallélogramme', 'Rectangle', 'Losange', 'Carré', 'Diagonales', 'Côtés parallèles'],
    physics: false,

    cours: {
      intro: 'Un parallélogramme est un quadrilatère avec <strong>deux paires de côtés parallèles</strong>. De cette propriété découlent toutes les autres : les côtés opposés sont égaux, les angles opposés sont égaux, et les diagonales se coupent en leur milieu.<br/><br/>' +
        '<strong>Hiérarchie :</strong> tout carré est un rectangle et un losange ; tout rectangle est un parallélogramme ; tout losange est un parallélogramme — mais l\'inverse n\'est pas vrai.<br/><br/>' +
        'Pour <strong>identifier</strong> un parallélogramme, il suffit de vérifier <em>une</em> des conditions : côtés opposés parallèles, ou côtés opposés égaux, ou diagonales se coupant en leur milieu.<br/><br/>' +
        'L\'<strong>aire d\'un parallélogramme</strong> est base × hauteur. Attention : la hauteur est perpendiculaire à la base, pas le côté latéral. L\'aire d\'un losange se calcule avec ses diagonales : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$.',
      definitions: [
        { term: 'Parallélogramme', def: 'Quadrilatère dont les côtés opposés sont parallèles et de même longueur. Les diagonales se coupent en leur milieu.' },
        { term: 'Rectangle', def: 'Parallélogramme ayant 4 angles droits. Ses diagonales sont de même longueur.' },
        { term: 'Losange', def: 'Parallélogramme ayant 4 côtés de même longueur. Ses diagonales sont perpendiculaires.' },
        { term: 'Carré', def: 'Quadrilatère qui est à la fois rectangle ET losange : 4 angles droits et 4 côtés égaux.' }
      ],
      example: {
        statement: 'Un losange a des diagonales de $8$ cm et $6$ cm. Calcule son aire et le demi-côté.',
        steps: [
          'Aire : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{8 \\times 6}{2} = 24$ cm².',
          'Les diagonales se coupent perpendiculairement en leur milieu → demi-diagonales : $4$ et $3$ cm.',
          'Par Pythagore : côté $= \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5$ cm.'
        ],
        answer: 'Aire = $24$ cm², côté = $5$ cm'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Quadrilatères particuliers',
        title: 'Parallélogramme, rectangle, losange, carré : quelles propriétés en plus ?',
        description: 'Les tics identiques marquent des longueurs égales (côtés ou demi-diagonales), les petits carrés marquent des angles droits. Le panneau losange reprend l\'exemple du cours : diagonales de $8$ cm et $6$ cm, côté de $5$ cm.',
        svg: `
          <svg viewBox="0 0 480 440" role="img" aria-labelledby="parallelo-title parallelo-desc">
            <title id="parallelo-title">Parallelogramme, rectangle, losange et carre avec diagonales codees</title>
            <desc id="parallelo-desc">Quatre quadrilateres avec leurs diagonales et des tics d'egalite : un parallelogramme quelconque, un rectangle avec ses quatre angles droits, un losange aux diagonales de 8 centimetres et 6 centimetres perpendiculaires, et un carre qui cumule angles droits et cotes egaux.</desc>

            <polygon points="50,160 190,160 250,100 110,100" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="50" y1="160" x2="190" y2="160"></line>
            <line class="frame-line" x1="110" y1="100" x2="250" y2="100"></line>
            <line class="frame-line" x1="50" y1="160" x2="110" y2="100"></line>
            <line class="frame-line" x1="190" y1="160" x2="250" y2="100"></line>
            <line class="guide-line" x1="50" y1="160" x2="250" y2="100"></line>
            <line class="guide-line" x1="190" y1="160" x2="110" y2="100"></line>
            <circle class="plot-point" cx="150" cy="130" r="4"></circle>
            <line class="frame-line" x1="120" y1="154" x2="120" y2="166"></line>
            <line class="frame-line" x1="180" y1="94" x2="180" y2="106"></line>
            <line class="frame-line" x1="72" y1="130" x2="80" y2="138"></line>
            <line class="frame-line" x1="80" y1="122" x2="88" y2="130"></line>
            <line class="frame-line" x1="212" y1="130" x2="220" y2="138"></line>
            <line class="frame-line" x1="220" y1="122" x2="228" y2="130"></line>
            <line class="frame-line" x1="98" y1="139" x2="102" y2="151"></line>
            <line class="frame-line" x1="198" y1="109" x2="202" y2="121"></line>
            <line class="frame-line" x1="171" y1="154" x2="179" y2="144"></line>
            <line class="frame-line" x1="161" y1="146" x2="169" y2="136"></line>
            <line class="frame-line" x1="131" y1="124" x2="139" y2="114"></line>
            <line class="frame-line" x1="121" y1="116" x2="129" y2="106"></line>
            <text class="label-soft" x="75" y="198">Parallélogramme</text>

            <polygon points="310,160 450,160 450,60 310,60" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="310" y1="160" x2="450" y2="160"></line>
            <line class="frame-line" x1="310" y1="60" x2="450" y2="60"></line>
            <line class="frame-line" x1="310" y1="160" x2="310" y2="60"></line>
            <line class="frame-line" x1="450" y1="160" x2="450" y2="60"></line>
            <line class="guide-line" x1="310" y1="160" x2="450" y2="60"></line>
            <line class="guide-line" x1="450" y1="160" x2="310" y2="60"></line>
            <circle class="plot-point" cx="380" cy="110" r="4"></circle>
            <line class="frame-line" x1="380" y1="154" x2="380" y2="166"></line>
            <line class="frame-line" x1="380" y1="54" x2="380" y2="66"></line>
            <line class="frame-line" x1="304" y1="107" x2="316" y2="107"></line>
            <line class="frame-line" x1="304" y1="113" x2="316" y2="113"></line>
            <line class="frame-line" x1="444" y1="107" x2="456" y2="107"></line>
            <line class="frame-line" x1="444" y1="113" x2="456" y2="113"></line>
            <line class="frame-line" x1="341" y1="130" x2="349" y2="140"></line>
            <line class="frame-line" x1="411" y1="80" x2="419" y2="90"></line>
            <line class="frame-line" x1="411" y1="140" x2="419" y2="130"></line>
            <line class="frame-line" x1="341" y1="90" x2="349" y2="80"></line>
            <path class="axis" d="M310 152 L318 152 L318 160"></path>
            <path class="axis" d="M442 160 L442 152 L450 152"></path>
            <path class="axis" d="M442 60 L442 68 L450 68"></path>
            <path class="axis" d="M310 68 L318 68 L318 60"></path>
            <text class="label-soft" x="345" y="198">Rectangle</text>

            <polygon points="60,325 120,280 180,325 120,370" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="60" y1="325" x2="120" y2="280"></line>
            <line class="frame-line" x1="120" y1="280" x2="180" y2="325"></line>
            <line class="frame-line" x1="180" y1="325" x2="120" y2="370"></line>
            <line class="frame-line" x1="120" y1="370" x2="60" y2="325"></line>
            <line class="guide-line" x1="60" y1="325" x2="180" y2="325"></line>
            <line class="guide-line" x1="120" y1="280" x2="120" y2="370"></line>
            <circle class="plot-point" cx="120" cy="325" r="4"></circle>
            <line class="frame-line" x1="86" y1="298" x2="94" y2="308"></line>
            <line class="frame-line" x1="146" y1="298" x2="154" y2="308"></line>
            <line class="frame-line" x1="146" y1="343" x2="154" y2="353"></line>
            <line class="frame-line" x1="86" y1="343" x2="94" y2="353"></line>
            <line class="frame-line" x1="90" y1="319" x2="90" y2="331"></line>
            <line class="frame-line" x1="150" y1="319" x2="150" y2="331"></line>
            <line class="frame-line" x1="114" y1="301" x2="126" y2="301"></line>
            <line class="frame-line" x1="114" y1="305" x2="126" y2="305"></line>
            <line class="frame-line" x1="114" y1="346" x2="126" y2="346"></line>
            <line class="frame-line" x1="114" y1="350" x2="126" y2="350"></line>
            <path class="axis" d="M116 325 L116 321 L120 321"></path>
            <text class="annotation-label" x="188" y="320">d1 = 8 cm</text>
            <text class="annotation-label" x="188" y="335">d2 = 6 cm</text>
            <text class="annotation-label" x="188" y="350">côté = 5 cm</text>
            <text class="label-soft" x="95" y="415">Losange</text>

            <polygon points="330,380 430,380 430,280 330,280" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="330" y1="380" x2="430" y2="380"></line>
            <line class="frame-line" x1="330" y1="280" x2="430" y2="280"></line>
            <line class="frame-line" x1="330" y1="380" x2="330" y2="280"></line>
            <line class="frame-line" x1="430" y1="380" x2="430" y2="280"></line>
            <line class="guide-line" x1="330" y1="380" x2="430" y2="280"></line>
            <line class="guide-line" x1="430" y1="380" x2="330" y2="280"></line>
            <circle class="plot-point" cx="380" cy="330" r="4"></circle>
            <line class="frame-line" x1="380" y1="374" x2="380" y2="386"></line>
            <line class="frame-line" x1="380" y1="274" x2="380" y2="286"></line>
            <line class="frame-line" x1="324" y1="330" x2="336" y2="330"></line>
            <line class="frame-line" x1="424" y1="330" x2="436" y2="330"></line>
            <line class="frame-line" x1="351" y1="351" x2="359" y2="359"></line>
            <line class="frame-line" x1="401" y1="301" x2="409" y2="309"></line>
            <line class="frame-line" x1="401" y1="359" x2="409" y2="351"></line>
            <line class="frame-line" x1="351" y1="309" x2="359" y2="301"></line>
            <path class="axis" d="M376 330 L376 326 L380 326"></path>
            <path class="axis" d="M330 372 L338 372 L338 380"></path>
            <path class="axis" d="M422 380 L422 372 L430 372"></path>
            <path class="axis" d="M422 280 L422 288 L430 288"></path>
            <path class="axis" d="M330 288 L338 288 L338 280"></path>
            <text class="label-soft" x="360" y="415">Carré</text>
          </svg>
        `,
        notes: [
          'Dans les $4$ figures, les diagonales se coupent en leur milieu : c\'est justement la propriété qui définit un parallélogramme — les tics sur chaque moitié de diagonale montrent l\'égalité des deux moitiés.',
          'Le rectangle ajoute $4$ angles droits (petits carrés) ET des diagonales de même longueur : toutes les demi-diagonales portent le même tic.',
          'Le losange ajoute $4$ côtés égaux (même tic sur les $4$ côtés) ET des diagonales perpendiculaires (petit carré au centre). Avec des diagonales de $8$ cm et $6$ cm, les demi-diagonales mesurent $4$ cm et $3$ cm : par Pythagore, le côté vaut $\\sqrt{4^2 + 3^2} = 5$ cm — exactement l\'exemple du cours.',
          'Le carré cumule tout : $4$ angles droits, $4$ côtés égaux, diagonales égales ET perpendiculaires.'
        ],
        reading: 'Pour identifier une figure, une seule propriété codée ne suffit pas si elle n\'est pas vraie partout : il faut que la propriété (angle droit, longueur égale...) se vérifie sur les $4$ côtés ou les $4$ demi-diagonales, pas sur un seul.',
        caption: 'Codage des figures : tics identiques = longueurs égales, petits carrés = angles droits. Le losange reprend les valeurs de l\'exemple du cours (diagonales $8$ cm et $6$ cm, côté $5$ cm).'
      },
      method: {
        title: 'Méthode : identifier et utiliser les propriétés',
        steps: [
          '<strong>Parallélogramme</strong> : côtés opposés parallèles ET égaux ; diagonales qui se coupent en leur milieu.',
          '<strong>Rectangle</strong> : parallélogramme avec 4 angles droits ; diagonales égales.',
          '<strong>Losange</strong> : parallélogramme avec 4 côtés égaux ; diagonales perpendiculaires.',
          '<strong>Carré</strong> : rectangle ET losange (4 angles droits + 4 côtés égaux).'
        ]
      },
      formulas: [
        'Parallélogramme $ABCD$ : $\\vec{AB} = \\vec{DC}$ (vecteurs égaux)',
        'Diagonales d\'un parallélogramme : milieu de $[AC]$ = milieu de $[BD]$',
        'Aire du parallélogramme : $\\mathcal{A} = b \\times h$ (base $\\times$ hauteur)',
        'Aire du losange : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$ (demi-produit des diagonales)'
      ],
      recap: [
        'Les diagonales d\'un parallélogramme se coupent en leur milieu.',
        'Rectangle = parallélogramme + angles droits. Losange = parallélogramme + côtés égaux.',
        'Carré = rectangle + losange.',
        'Aire du losange : $\\dfrac{d_1 \\times d_2}{2}$.'
      ],
      piege: 'Piège : un rectangle est TOUJOURS un parallélogramme, mais un parallélogramme n\'est pas forcément un rectangle. Hiérarchie : carré ⊂ rectangle ⊂ parallélogramme et carré ⊂ losange ⊂ parallélogramme.'
    },

    quiz: [
      {
        q: 'Dans un parallélogramme $ABCD$, les diagonales $[AC]$ et $[BD]$ :',
        options: [
          'Se coupent à angle droit',
          'Sont égales',
          'Se coupent en leur milieu commun',
          'Ne se coupent pas'
        ],
        answer: 2,
        correction: 'Les diagonales d\'un parallélogramme se coupent en leur milieu. Ce n\'est qu\'en plus pour un rectangle qu\'elles sont égales, et pour un losange qu\'elles sont perpendiculaires.'
      },
      {
        q: 'Un losange a ses diagonales mesurant $6$ cm et $8$ cm. Quelle est son aire ?',
        options: ['$48$ cm²', '$24$ cm²', '$14$ cm²', '$12$ cm²'],
        answer: 1,
        correction: '$\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{6 \\times 8}{2} = 24$ cm².'
      },
      {
        q: 'Un élève dit : « Si $ABCD$ est un parallélogramme et que $AB = BC$, alors c\'est forcément un carré ». Est-ce vrai ?',
        options: [
          'Oui : côtés opposés égaux + côtés adjacents égaux → tous les côtés égaux → carré.',
          'Non : si tous les côtés sont égaux, c\'est un losange, pas forcément un carré. Il faudrait aussi un angle droit.',
          'Oui, car un parallélogramme avec un côté supplémentaire égal est toujours un carré.',
          'Non, ça dépend du nombre de côtés égaux.'
        ],
        answer: 1,
        correction: 'Si dans un parallélogramme $AB = BC$, alors tous les côtés sont égaux → c\'est un <em>losange</em>. Pour que ce soit un carré, il faudrait en plus un angle droit.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { shape: 'carreau de mosaïque', emoji: '🔷' },
          { shape: 'logo en forme de losange', emoji: '💎' },
          { shape: 'panneau routier losange', emoji: '🔶' },
          { shape: 'vitrail en losange', emoji: '🪟' }
        ]);
        const d1 = rand(3, 12);
        const d2 = rand(3, 12);
        const aire = (d1 * d2) / 2;
        return {
          statement: `${ctx.emoji} Un ${ctx.shape} a des diagonales mesurant $${d1}$ cm et $${d2}$ cm. Calcule son aire en cm².`,
          answer: aire,
          tolerance: 0,
          unit: 'cm²',
          hint: `Aire d'un losange : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{${d1} \\times ${d2}}{2}$.`,
          solution: [
            `Formule : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$`,
            `$\\mathcal{A} = \\dfrac{${d1} \\times ${d2}}{2} = \\dfrac{${d1 * d2}}{2} = ${aire}$ cm²`
          ]
        };
      }
    },

    probleme: {
      context: 'Un carreleur pose du carrelage en forme de losange dans un couloir. Chaque losange a ses diagonales mesurant $20$ cm et $30$ cm. Le couloir a une superficie de $6$ m².',
      tasks: [
        'Calcule l\'aire d\'un carreau losange en cm².',
        'Convertis cette aire en m².',
        'Combien de carreaux faut-il pour couvrir le couloir (sans tenir compte des chutes) ?'
      ],
      solutions: [
        '$\\mathcal{A} = \\dfrac{20 \\times 30}{2} = 300$ cm².',
        '$300$ cm² $= 0{,}03$ m² (car $1$ m² $= 10\\,000$ cm²).',
        '$6 \\div 0{,}03 = 200$ carreaux.'
      ],
      finalAnswer: 'Il faut $200$ carreaux losange pour couvrir le couloir.'
    },

    evaluation: {
      title: 'Évaluation — Parallélogrammes et propriétés',
      duration: '25 min',
      questions: [
        {
          statement: 'Un losange a des diagonales de $10$ cm et $14$ cm. Quelle est son aire en cm² ?',
          type: 'numeric',
          answer: 70,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{10 \\times 14}{2} = \\dfrac{140}{2} = 70$ cm².'
        },
        {
          statement: 'Un parallélogramme $ABCD$ a une base $AB = 9$ cm et une hauteur $h = 6$ cm. Quelle est son aire en cm² ?',
          type: 'numeric',
          answer: 54,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = b \\times h = 9 \\times 6 = 54$ cm².'
        },
        {
          statement: 'Les diagonales d\'un parallélogramme :',
          type: 'multiple-choice',
          options: [
            'Sont toujours perpendiculaires.',
            'Sont toujours de même longueur.',
            'Se coupent toujours en leur milieu.',
            'Ne se coupent jamais.'
          ],
          answer: 2,
          points: 2,
          correction: 'Les diagonales d\'un parallélogramme se coupent en leur milieu. Elles ne sont perpendiculaires que pour un losange, et de même longueur que pour un rectangle.'
        },
        {
          statement: 'Parmi ces affirmations, laquelle est vraie ?',
          type: 'multiple-choice',
          options: [
            'Tout losange est un rectangle.',
            'Tout rectangle est un carré.',
            'Tout carré est un losange.',
            'Tout parallélogramme est un rectangle.'
          ],
          answer: 2,
          points: 2,
          correction: 'Un carré a $4$ côtés égaux et $4$ angles droits. Puisqu\'il a $4$ côtés égaux, c\'est un losange.'
        },
        {
          statement: 'Les diagonales d\'un rectangle $ABCD$ mesurent $AC = BD = 12$ cm. Elles se coupent en $O$. Quelle est la longueur $OA$ en cm ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Les diagonales d\'un rectangle se coupent en leur milieu $O$. Donc $OA = \\dfrac{AC}{2} = \\dfrac{12}{2} = 6$ cm.'
        }
      ]
    }
  });
