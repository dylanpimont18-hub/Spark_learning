/* =========================================================
   Spark Learning – data/6e/6e-figures-geometriques.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-figures-geometriques',
    level: 1, subject: 'maths',
    icon: '📐',
    title: 'Figures géométriques de base',
    subtitle: 'Droites, segments, demi-droites, cercles',
    keywords: ['Droite', 'Segment', 'Demi-droite', 'Cercle', 'Rayon', 'Diamètre'],
    physics: false,

    cours: {
      intro: 'En géométrie, tout repose sur quelques objets de base : le <strong>point</strong> (position sans dimension), le <strong>segment</strong> (longueur finie entre deux points), la <strong>droite</strong> (infinie dans les deux sens) et le <strong>cercle</strong> (ensemble de points à égale distance d\'un centre).<br/><br/>' +
        '<strong>Distinction importante :</strong> le segment $[AB]$ a une longueur mesurable ; la droite $(AB)$ est infinie et on la dessine avec des flèches aux extrémités. La demi-droite $[AB)$ est infinie dans un seul sens.<br/><br/>' +
        'Le <strong>cercle</strong> de centre $O$ et de rayon $r$ contient tous les points $M$ tels que $OM = r$. Le diamètre est $d = 2r$.',
      definitions: [
        { term: 'Droite $(AB)$', def: 'Ligne infinie dans les deux sens passant par $A$ et $B$. Dessinée avec des flèches.' },
        { term: 'Segment $[AB]$', def: 'Portion de droite limitée par deux extrémités $A$ et $B$. A une longueur mesurable.' },
        { term: 'Demi-droite $[AB)$', def: 'Portion de droite ayant une origine $A$ et infinie dans la direction de $B$.' },
        { term: 'Cercle', def: 'Ensemble des points $M$ tels que $OM = r$ (rayon). Le diamètre est $d = 2r$.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Identifier</strong> le type d\'objet : un point ($A$), une droite $(AB)$ ou $d$, un segment $[AB]$, une demi-droite $[AB)$.',
          '<strong>Distinguer</strong> : droite (infinie, flèches), demi-droite (infinie d\'un côté), segment (fini).',
          '<strong>Pour un cercle</strong> : identifier le centre $O$ et le rayon $r$. Diamètre $= 2r$.',
          '<strong>Construire</strong> avec la règle (segments, droites) ou le compas (cercles, reports de longueur).'
        ]
      },
      example: {
        statement: 'Un cercle a un diamètre de $8{,}4$ cm. Calculer le rayon. Un point $P$ est à $5$ cm du centre. Où se trouve-t-il ?',
        steps: [
          'Rayon : $r = \\dfrac{d}{2} = \\dfrac{8{,}4}{2} = 4{,}2$ cm.',
          '$OP = 5$ cm et $r = 4{,}2$ cm.',
          '$OP > r$, donc $P$ est à l\'extérieur du cercle.'
        ],
        answer: '$r = 4{,}2$ cm. $P$ est à l\'extérieur du cercle.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Objet</th><th style="border:1px solid var(--border);padding:8px">Notation</th><th style="border:1px solid var(--border);padding:8px">Longueur</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Droite</td><td style="border:1px solid var(--border);padding:8px">$(AB)$</td><td style="border:1px solid var(--border);padding:8px">Infinie (2 sens)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Demi-droite</td><td style="border:1px solid var(--border);padding:8px">$[AB)$</td><td style="border:1px solid var(--border);padding:8px">Infinie (1 sens)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Segment</td><td style="border:1px solid var(--border);padding:8px">$[AB]$</td><td style="border:1px solid var(--border);padding:8px">Finie</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Cercle</td><td style="border:1px solid var(--border);padding:8px">$\\mathcal{C}(O, r)$</td><td style="border:1px solid var(--border);padding:8px">$d = 2r$</td></tr></table>',
      formulas: [
        '$(AB)$ = droite passant par $A$ et $B$ (infinie)',
        '$[AB]$ = segment d\'extrémités $A$ et $B$',
        'Cercle de centre $O$ et rayon $r$ : $OM = r$ pour tout point $M$ du cercle',
        'Diamètre : $d = 2r$'
      ],
      recap: [
        'Droite $(AB)$ : infinie, flèches aux 2 bouts. Segment $[AB]$ : fini, 2 extrémités.',
        'Cercle : tous les points à distance $r$ du centre. Diamètre $= 2r$.',
        'Point sur le cercle : $OP = r$. Intérieur : $OP < r$. Extérieur : $OP > r$.',
        'Demi-droite $[AB)$ : origine $A$, infinie vers $B$.'
      ],
      piege: 'Piège : confondre segment et droite. Un segment $[AB]$ a une longueur mesurable ; une droite $(AB)$ est infinie. Sur une figure, une droite se dessine toujours avec des flèches aux deux extrémités.'
    },

    quiz: [
      { q: 'Un cercle a un rayon de $5$ cm. Quel est son diamètre ?', options: ['$5$ cm', '$10$ cm', '$15$ cm', '$25$ cm'], answer: 1, correction: '$d = 2r = 10$ cm.' },
      { q: 'Quelle figure est infinie dans les deux sens ?', options: ['Un segment', 'Une demi-droite', 'Une droite', 'Un arc de cercle'], answer: 2, correction: 'La droite $(AB)$ est infinie dans les deux sens.' },
      { q: 'Un point $P$ est à $3{,}5$ cm du centre $O$ d\'un cercle de rayon $3$ cm. Où se trouve $P$ ?', options: ['Sur le cercle', 'À l\'intérieur', 'À l\'extérieur', 'Au centre'], answer: 2, correction: '$3{,}5 > 3 = r$, donc $P$ est à l\'extérieur.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const objet = pick([
          { emoji: '🕰️', nom: 'une horloge', unite: 'cm' },
          { emoji: '🍕', nom: 'une pizza', unite: 'cm' },
          { emoji: '🚲', nom: 'une roue de vélo', unite: 'cm' },
          { emoji: '💿', nom: 'un CD', unite: 'cm' },
          { emoji: '🎯', nom: 'une cible de fléchettes', unite: 'cm' },
          { emoji: '⭕', nom: 'un cerceau de gymnastique', unite: 'cm' },
          { emoji: '🏀', nom: 'un ballon de basket (vu du dessus)', unite: 'cm' },
          { emoji: '🛞', nom: 'un pneu de voiture', unite: 'cm' }
        ]);
        const askFor = pick(['rayon', 'diametre']);
        if (askFor === 'rayon') {
          const d = rand(4, 24) * 2;
          return {
            statement: `${objet.emoji} Le diamètre de ${objet.nom} est de $${d}$ ${objet.unite}. Quel est son rayon (en ${objet.unite}) ?`,
            answer: d / 2,
            tolerance: 0,
            unit: objet.unite,
            hint: `Le rayon est la moitié du diamètre : $r = \\dfrac{d}{2}$.`,
            solution: [`$r = \\dfrac{${d}}{2} = ${d / 2}$ ${objet.unite}`]
          };
        }
        const r = rand(2, 15);
        return {
          statement: `${objet.emoji} Le rayon de ${objet.nom} est de $${r}$ ${objet.unite}. Quel est son diamètre (en ${objet.unite}) ?`,
          answer: 2 * r,
          tolerance: 0,
          unit: objet.unite,
          hint: `Le diamètre est le double du rayon : $d = 2r$.`,
          solution: [`$d = 2 \\times ${r} = ${2 * r}$ ${objet.unite}`]
        };
      }
    },

    probleme: {
      context: 'Un architecte dessine un plan de fontaine circulaire. Le bassin central a un diamètre de $4{,}8$ m, et une allée de $0{,}6$ m de large l\'entoure.',
      tasks: [
        'Quel est le rayon du bassin central ?',
        'Quel est le rayon total (bassin + allée) ?',
        'Quel est le diamètre total de la fontaine ?'
      ],
      solutions: [
        'Rayon du bassin : $r = 4{,}8 \\div 2 = 2{,}4$ m.',
        'Rayon total : $2{,}4 + 0{,}6 = 3$ m.',
        'Diamètre total : $2 \\times 3 = 6$ m.'
      ],
      finalAnswer: 'Le diamètre total de la fontaine est $6$ m.'
    },

    evaluation: {
      title: 'Évaluation — Figures géométriques',
      duration: '15 min',
      questions: [
        { statement: 'Un cercle a un diamètre de $18$ cm. Quel est son rayon en cm ?', type: 'numeric', answer: 9, tolerance: 0, unit: 'cm', points: 2, correction: '$r = 18 \\div 2 = 9$ cm.' },
        { statement: 'Quelle notation désigne une droite passant par les points $A$ et $B$ ?', type: 'multiple-choice', options: ['$[AB]$', '$(AB)$', '$[AB)$', '$\\overrightarrow{AB}$'], answer: 1, points: 2, correction: '$(AB)$ est la droite.' },
        { statement: 'Un point $M$ est situé à $5{,}2$ cm du centre $O$ d\'un cercle de rayon $5{,}2$ cm. Où se trouve $M$ ?', type: 'multiple-choice', options: ['À l\'intérieur', 'À l\'extérieur', 'Sur le cercle', 'Au centre'], answer: 2, points: 2, correction: '$OM = r$, donc $M$ est sur le cercle.' },
        { statement: 'Un cercle a un rayon de $7$ cm. Quel est son diamètre en cm ?', type: 'numeric', answer: 14, tolerance: 0, unit: 'cm', points: 2, correction: '$d = 2 \\times 7 = 14$ cm.' },
        { statement: 'Parmi les affirmations, laquelle est vraie ?', type: 'multiple-choice', options: ['Un segment a une longueur infinie.', 'Une demi-droite a deux extrémités.', 'Tous les points d\'un cercle sont à égale distance du centre.', 'Le diamètre est la moitié du rayon.'], answer: 2, points: 2, correction: 'Par définition, $OM = r$ pour tout point $M$ du cercle.' }
      ]
    }
  });
