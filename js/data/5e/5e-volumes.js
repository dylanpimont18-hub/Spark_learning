/* =========================================================
   Spark Learning – data/5e/5e-volumes.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-volumes',
    level: 1, subject: 'maths',
    icon: '📦',
    title: 'Volumes (prismes et cylindres)',
    subtitle: 'Formule de base, conversions',
    keywords: ['Volume', 'Prisme', 'Cylindre', 'Aire de base', 'Hauteur', 'Litre'],
    physics: 'Calcul du volume d\'une canalisation cylindrique, d\'un réservoir ou d\'une citerne',

    cours: {
      intro: 'La formule universelle $V = \\mathcal{A}_{\\text{base}} \\times h$ s\'applique à tout <strong>prisme</strong> et tout <strong>cylindre</strong>. L\'intuition : le volume est la surface de la base « empilée » sur une hauteur $h$.<br/><br/>' +
        '<strong>Point clé sur la hauteur :</strong> la hauteur est toujours perpendiculaire aux bases — si le prisme est « incliné », la hauteur est différente du côté latéral.<br/><br/>' +
        'Pour un <strong>cylindre</strong>, la base est un disque : $V = \\pi r^2 h$. Attention à ne pas confondre rayon et diamètre !<br/><br/>' +
        '<strong>Conversion :</strong> $1$ dm³ $= 1$ L exactement, et $1$ m³ $= 1000$ L. En chimie, le volume d\'une fiole jaugée est en mL, et la conversion vers cm³ est immédiate ($1$ mL $= 1$ cm³).',
      definitions: [
        { term: 'Prisme droit', def: 'Solide dont les deux bases sont des polygones identiques et parallèles, reliés par des faces rectangulaires. Volume = aire de la base × hauteur.' },
        { term: 'Cylindre', def: 'Solide dont les deux bases sont des disques identiques et parallèles. Volume = $\\pi r^2 \\times h$.' },
        { term: 'Pavé droit', def: 'Prisme dont les bases sont des rectangles. Volume = $L \\times l \\times h$. Cas particulier : le cube ($L = l = h$).' },
        { term: 'Hauteur d\'un solide', def: 'Distance perpendiculaire entre les deux bases. Ne pas confondre avec un côté latéral si le prisme est incliné.' }
      ],
      example: {
        statement: 'Un cylindre a un rayon de $5$ cm et une hauteur de $12$ cm. Calcule son volume.',
        steps: [
          'Aire de la base (disque) : $\\pi r^2 = 3{,}14 \\times 25 = 78{,}5$ cm².',
          'Volume : $V = 78{,}5 \\times 12 = 942$ cm³.',
          'Conversion : $942$ cm³ $= 0{,}942$ L.'
        ],
        answer: '$942$ cm³ $\\approx 0{,}94$ L'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Prismes et cylindres',
        title: 'Volume = aire de la base × hauteur, hauteur toujours perpendiculaire',
        description: 'Le pavé droit et le cylindre partagent la même formule $V = \\mathcal{A}_{\\text{base}} \\times h$. Sur le cylindre de l\'exemple du cours ($r = 5$ cm, $h = 12$ cm), l\'angle droit rappelle que la hauteur est perpendiculaire à la base — jamais un côté incliné.',
        svg: `
          <svg viewBox="0 0 420 240" role="img" aria-labelledby="volumes-title volumes-desc">
            <title id="volumes-title">Pave droit et cylindre avec hauteur perpendiculaire a la base</title>
            <desc id="volumes-desc">A gauche un pave droit de longueur L, largeur l et hauteur h. A droite le cylindre de l'exemple du cours, de rayon 5 centimetres et de hauteur 12 centimetres, avec sa base en disque mise en evidence et sa hauteur perpendiculaire marquee par un angle droit.</desc>
            <rect x="15" y="14" width="185" height="34" rx="10" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="annotation-label" x="26" y="36">Pavé droit :</text>
            <text class="tick-label" x="108" y="36">V = L × l × h</text>
            <rect x="215" y="14" width="190" height="34" rx="10" fill="color-mix(in srgb, var(--accent) 14%, var(--bg-card))" stroke="color-mix(in srgb, var(--accent) 38%, var(--border))"></rect>
            <text class="annotation-label" x="226" y="36">Cylindre :</text>
            <text class="tick-label" x="296" y="36">V = π × r² × h</text>
            <polygon points="30,105 120,105 150,80 60,80" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)" stroke="none"></polygon>
            <polygon points="120,195 120,105 150,80 150,170" fill="color-mix(in srgb, var(--diagram-accent) 4%, transparent)" stroke="none"></polygon>
            <polygon points="30,195 120,195 120,105 30,105" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="30" y1="195" x2="120" y2="195"></line>
            <line class="frame-line" x1="120" y1="195" x2="120" y2="105"></line>
            <line class="frame-line" x1="120" y1="105" x2="30" y2="105"></line>
            <line class="frame-line" x1="30" y1="105" x2="30" y2="195"></line>
            <line class="frame-line" x1="30" y1="105" x2="60" y2="80"></line>
            <line class="frame-line" x1="120" y1="105" x2="150" y2="80"></line>
            <line class="frame-line" x1="60" y1="80" x2="150" y2="80"></line>
            <line class="frame-line" x1="120" y1="195" x2="150" y2="170"></line>
            <line class="frame-line" x1="150" y1="170" x2="150" y2="80"></line>
            <path class="axis" d="M30 183 L42 183 L42 195"></path>
            <text class="annotation-label" x="68" y="213">L</text>
            <text class="annotation-label" x="34" y="74">l</text>
            <text class="annotation-label" x="10" y="153">h</text>
            <text class="label-soft" x="88" y="66">Base</text>
            <ellipse class="frame-line" cx="280" cy="200" rx="50" ry="16" fill="color-mix(in srgb, var(--diagram-accent) 4%, transparent)"></ellipse>
            <line class="frame-line" x1="230" y1="80" x2="230" y2="200"></line>
            <line class="frame-line" x1="330" y1="80" x2="330" y2="200"></line>
            <ellipse class="frame-line" cx="280" cy="80" rx="50" ry="16" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></ellipse>
            <line class="guide-line" x1="280" y1="80" x2="330" y2="80"></line>
            <circle class="plot-point" cx="280" cy="80" r="4"></circle>
            <circle class="plot-point-alt" cx="330" cy="80" r="4"></circle>
            <line class="guide-line" x1="280" y1="200" x2="345" y2="200"></line>
            <line class="guide-line" x1="345" y1="80" x2="345" y2="200"></line>
            <line class="frame-line" x1="340" y1="80" x2="350" y2="80"></line>
            <line class="frame-line" x1="340" y1="200" x2="350" y2="200"></line>
            <path class="axis" d="M333 200 L333 188 L345 188"></path>
            <text class="label-soft" x="264" y="58">Base</text>
            <text class="annotation-label" x="334" y="72">r = 5 cm</text>
            <text class="annotation-label" x="352" y="143">h = 12 cm</text>
          </svg>
        `,
        notes: [
          'Le pavé droit a pour base un rectangle $L \\times l$ ; sa hauteur $h$ est perpendiculaire à cette base : $V = L \\times l \\times h$.',
          'Le cylindre a pour base un disque de rayon $r = 5$ cm ; son aire de base vaut $\\pi \\times 5^2 \\approx 78{,}5$ cm² (avec $\\pi \\approx 3{,}14$).',
          'Avec une hauteur $h = 12$ cm, le volume du cylindre est $V = 78{,}5 \\times 12 = 942$ cm³, soit environ $0{,}94$ L.'
        ],
        reading: 'Repère toujours d\'abord la base et sa forme, puis mesure la hauteur perpendiculairement à cette base — pas le long d\'une arête inclinée.',
        caption: 'Pavé droit (formule générale $V = L \\times l \\times h$) et cylindre de rayon $5$ cm et hauteur $12$ cm — l\'exemple du cours donne $V = 942$ cm³. Dans les deux cas, la hauteur est perpendiculaire à la base.'
      },
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier la base</strong> et calculer son aire $\\mathcal{A}_{\\text{base}}$.',
          '<strong>Appliquer</strong> : $V = \\mathcal{A}_{\\text{base}} \\times h$.',
          '<strong>Convertir</strong> si nécessaire : $1\\,\\text{L} = 1\\,\\text{dm}^3 = 1000\\,\\text{cm}^3$.'
        ]
      },
      formulas: [
        'Prisme/cylindre : $V = \\mathcal{A}_{\\text{base}} \\times h$',
        'Pavé droit : $V = L \\times l \\times h$',
        'Cylindre : $V = \\pi r^2 \\times h$',
        '$1\\,\\text{L} = 1\\,\\text{dm}^3 = 1000\\,\\text{cm}^3$, $1\\,\\text{m}^3 = 1000\\,\\text{L}$'
      ],
      recap: [
        'Volume = aire de la base × hauteur (pour tout prisme et cylindre).',
        'Cylindre : utiliser le RAYON (pas le diamètre) dans $\\pi r^2 h$.',
        '$1$ L $= 1$ dm³ $= 1000$ cm³.',
        'La hauteur est perpendiculaire aux bases (pas un côté latéral).'
      ],
      piege: 'Piège : la hauteur d\'un prisme est la distance entre les deux bases, perpendiculaire à celles-ci — pas nécessairement un côté latéral. Si le prisme est « penché », la hauteur est différente du côté.'
    },

    quiz: [
      {
        q: 'Un cylindre a un rayon de $3$ cm et une hauteur de $10$ cm. Quel est son volume (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$94{,}2$ cm³', '$282{,}6$ cm³', '$188{,}4$ cm³', '$942$ cm³'],
        answer: 1,
        correction: '$V = \\pi r^2 h = 3{,}14 \\times 9 \\times 10 = 282{,}6$ cm³.'
      },
      {
        q: 'Un aquarium (pavé droit) mesure $60\\,\\text{cm} \\times 30\\,\\text{cm} \\times 40\\,\\text{cm}$. Quelle est sa capacité en litres ?',
        options: ['$7{,}2$ L', '$72$ L', '$720$ L', '$7200$ L'],
        answer: 1,
        correction: '$V = 60 \\times 30 \\times 40 = 72\\,000$ cm³. Comme $1\\,\\text{L} = 1000\\,\\text{cm}^3$, cela fait $72$ L.'
      },
      {
        q: 'Un cylindre a un diamètre de $6$ cm et une hauteur de $10$ cm. Un élève calcule $V = \\pi \\times 6^2 \\times 10 = 1130$ cm³. Où est l\'erreur ?',
        options: [
          'Il n\'y a pas d\'erreur.',
          'Il a utilisé le diamètre au lieu du rayon : $r = 3$ cm. Le bon calcul est $V = \\pi \\times 3^2 \\times 10 \\approx 282{,}6$ cm³.',
          'Il aurait dû diviser par $2$ : $V = \\pi \\times 6^2 \\times 10 \\div 2$.',
          'Il a oublié de multiplier par $h$ : $V = \\pi \\times 6^2$.'
        ],
        answer: 1,
        correction: 'Le rayon est la moitié du diamètre : $r = 6 \\div 2 = 3$ cm. La formule est $V = \\pi r^2 h = \\pi \\times 3^2 \\times 10 = 90\\pi \\approx 282{,}6$ cm³.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { obj: 'boîte à chaussures', emoji: '👟' },
          { obj: 'aquarium', emoji: '🐠' },
          { obj: 'coffre', emoji: '📦' },
          { obj: 'brique', emoji: '🧱' },
          { obj: 'valise', emoji: '🧳' }
        ]);
        const L = rand(3, 15), l = rand(2, 10), h = rand(2, 10);
        return {
          statement: `${ctx.emoji} Calcule le volume d'un(e) ${ctx.obj} (pavé droit) de dimensions $${L}$ cm × $${l}$ cm × $${h}$ cm.`,
          answer: L * l * h,
          tolerance: 0,
          unit: 'cm³',
          hint: `$V = L \\times l \\times h = ${L} \\times ${l} \\times ${h}$.`,
          solution: [`$V = ${L} \\times ${l} \\times ${h} = ${L * l * h}$ cm³.`]
        };
      }
    },

    probleme: {
      context: 'Une citerne cylindrique de rayon $0{,}8$ m et de hauteur $2{,}5$ m est utilisée pour stocker de l\'eau de pluie.',
      tasks: [
        'Calcule le volume de la citerne en m³ (avec $\\pi \\approx 3{,}14$).',
        'Convertis en litres.',
        'Si on pompe $500$ L par jour, combien de jours dure le stock quand la citerne est pleine ?'
      ],
      solutions: [
        '$V = 3{,}14 \\times 0{,}64 \\times 2{,}5 \\approx 5{,}024$ m³.',
        '$5{,}024\\,\\text{m}^3 = 5024$ L.',
        '$5024 \\div 500 \\approx 10$ jours.'
      ],
      finalAnswer: 'La citerne contient environ $5024$ L, soit environ $10$ jours de réserve.'
    },

    evaluation: {
      title: 'Évaluation — Volumes (prismes et cylindres)',
      duration: '25 min',
      questions: [
        {
          statement: 'Calculer le volume d\'un pavé droit de dimensions $8$ cm $\\times$ $5$ cm $\\times$ $3$ cm.',
          type: 'numeric',
          answer: 120,
          tolerance: 0,
          unit: 'cm³',
          points: 2,
          correction: '$V = L \\times l \\times h = 8 \\times 5 \\times 3 = 120$ cm³.'
        },
        {
          statement: 'Un cylindre a un rayon de $4$ cm et une hauteur de $10$ cm. Quel est son volume ? (Utiliser $\\pi \\approx 3{,}14$, arrondir à $0{,}1$ cm³.)',
          type: 'numeric',
          answer: 502.4,
          tolerance: 0.5,
          unit: 'cm³',
          points: 2,
          correction: '$V = \\pi r^2 h = 3{,}14 \\times 4^2 \\times 10 = 3{,}14 \\times 16 \\times 10 = 502{,}4$ cm³.'
        },
        {
          statement: 'Un aquarium cubique a une arête de $30$ cm. Sa contenance en litres est :',
          type: 'numeric',
          answer: 27,
          tolerance: 0,
          unit: 'L',
          points: 2,
          correction: '$V = 30^3 = 27\\,000$ cm³. Conversion : $1\\,\\text{L} = 1000\\,\\text{cm}^3$, donc $27\\,000 \\div 1000 = 27$ L.'
        },
        {
          statement: '$2{,}5$ dm³ correspondent à combien de cm³ ?',
          type: 'numeric',
          answer: 2500,
          tolerance: 0,
          unit: 'cm³',
          points: 2,
          correction: '$1\\,\\text{dm}^3 = 1000\\,\\text{cm}^3$. Donc $2{,}5 \\times 1000 = 2500$ cm³.'
        },
        {
          statement: 'Un cylindre a un diamètre de $10$ cm et une hauteur de $8$ cm. Un élève calcule $V = \\pi \\times 10^2 \\times 8$. Quelle est son erreur ?',
          type: 'multiple-choice',
          options: [
            'Il n\'y a pas d\'erreur.',
            'Il a utilisé le diamètre au lieu du rayon : $r = 5$ cm, donc $V = \\pi \\times 5^2 \\times 8 = 200\\pi \\approx 628$ cm³.',
            'Il fallait diviser par $2$ à la fin.',
            'Il fallait ajouter les aires des deux bases.'
          ],
          answer: 1,
          points: 2,
          correction: 'Le rayon est la moitié du diamètre : $r = 10 \\div 2 = 5$ cm. La formule correcte est $V = \\pi r^2 h = \\pi \\times 25 \\times 8 = 200\\pi \\approx 628$ cm³.'
        }
      ]
    }
  });
