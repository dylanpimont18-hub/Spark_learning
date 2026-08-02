/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-a2-1-genie-civil.js
   BTS FED — S8-A2-1 Génie civil, structure et architecture
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-a2-1-genie-civil',
    level: 3, subject: 'fed',
    icon: '🧱',
    title: 'Génie civil, structure et architecture',
    subtitle: 'Vocabulaire du bâtiment et contraintes pour les systèmes énergétiques',
    keywords: ['Gros œuvre', 'Second œuvre', 'Structure porteuse', 'Gaine technique', 'Faux-plafond'],
    physics: 'Avant de dessiner le moindre réseau, un technicien FED doit savoir lire un bâtiment : quels éléments portent la structure et ne peuvent pas être touchés, et quels espaces restent libres pour faire passer tuyauteries et gaines. Un réseau mal positionné qui percute une poutre porteuse, c\'est un chantier arrêté et un surcoût — la coordination avec le gros œuvre se prépare dès l\'étude.',

    cours: {
      intro: 'Un bâtiment se décompose en deux grandes familles d\'éléments : ceux qui assurent sa <strong>stabilité</strong> et ceux qui assurent son <strong>usage et sa finition</strong>.<br/><br/>Cette distinction n\'est pas qu\'un vocabulaire de chantier : elle détermine directement ce qu\'un technicien FED peut modifier librement (percer, découper) et ce qui nécessite impérativement une validation du bureau d\'études structure avant toute intervention.',
      definitions: [
        { term: 'Gros œuvre', def: 'Éléments porteurs et enveloppe du bâtiment : fondations, poteaux, poutres, dalles, murs porteurs, charpente, couverture. Ils assurent la stabilité de l\'ouvrage — on ne les perce ou ne les modifie jamais sans étude structurelle préalable.' },
        { term: 'Second œuvre', def: 'Éléments non porteurs de finition et d\'aménagement : cloisons de distribution, faux-plafonds, revêtements de sols et murs, menuiseries intérieures. Plus facilement adaptables pour le passage des réseaux techniques.' },
        { term: 'Gaine technique (ou trémie verticale)', def: 'Volume vertical dédié au passage des réseaux (fluides, électricité, ventilation) entre les étages d\'un bâtiment, généralement défini dès la conception architecturale.' },
        { term: 'Faux-plafond (plénum)', def: 'Espace compris entre le plafond structurel (sous-face de la dalle ou des poutres) et le plafond suspendu visible depuis le local. C\'est l\'espace horizontal principal pour le passage des gaines et tuyauteries.' },
        { term: 'Trémie', def: 'Réservation (ouverture) ménagée dans un plancher pour le passage vertical d\'un réseau, prévue dès la conception ou créée par carottage validé par le bureau d\'études structure.' }
      ],
      method: {
        title: 'Vérifier la faisabilité du passage d\'un réseau dans un faux-plafond',
        steps: [
          '<strong>Hauteur de plénum</strong> : calculer l\'espace total disponible entre le plafond structurel (sous dalle) et le niveau du plafond fini souhaité : $h_{\\text{plénum}} = h_{\\text{SPB}} - h_{\\text{plafond fini}}$.',
          '<strong>Éléments structurels traversants</strong> : identifier les poutres ou retombées qui occupent une partie de cet espace, et relever leur hauteur $h_{\\text{poutre}}$.',
          '<strong>Hauteur réellement disponible</strong> sous l\'obstacle le plus contraignant, marge technique de pose et d\'isolation déduite : $h_{\\text{disponible}} = h_{\\text{plénum}} - h_{\\text{poutre}} - h_{\\text{marge}}$.',
          '<strong>Comparaison</strong> : le passage est possible si $h_{\\text{disponible}} \\geq D_{\\text{réseau}}$ (diamètre ou hauteur hors-tout du réseau, isolation comprise). Sinon : changer de trajectoire, réduire le gabarit (gaine plate), ou renégocier la hauteur de plafond fini.'
        ]
      },
      example: {
        statement: 'Un local commercial a une hauteur sous plafond structurel de $3{,}20$ m. Le plafond fini est prévu à $2{,}70$ m du sol. Une poutre en béton de $40$ cm de hauteur traverse le plénum. On prévoit une marge technique de $5$ cm pour la pose et l\'isolation. Une gaine de ventilation de diamètre extérieur $200$ mm doit passer sous la poutre : est-ce possible ?',
        steps: [
          '$h_{\\text{plénum}} = 3{,}20 - 2{,}70 = 0{,}50$ m $= 50$ cm.',
          '$h_{\\text{disponible}} = 50 - 40 - 5 = 5$ cm sous la poutre.',
          'Comparaison : $5$ cm $= 50$ mm, très inférieur aux $200$ mm de la gaine.'
        ],
        answer: 'Le passage est impossible sous la poutre dans cette configuration. Solutions : dévier la gaine hors de la zone de poutre, réduire la hauteur du plafond fini, ou choisir une gaine plate (rectangulaire) de plus faible hauteur hors-tout.'
      },
      formulas: [
        '$h_{\\text{plénum}} = h_{\\text{SPB}} - h_{\\text{plafond fini}}$ (hauteur totale disponible entre plafond structurel et plafond fini)',
        '$h_{\\text{disponible}} = h_{\\text{plénum}} - h_{\\text{poutre}} - h_{\\text{marge}}$ (hauteur réellement utilisable sous une poutre)',
        'Condition de passage : $h_{\\text{disponible}} \\geq D_{\\text{réseau}}$'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Coupe d\'un plénum de faux-plafond',
        title: 'Hauteur SPB, poutre, marge technique et gabarit du réseau',
        description: 'Coupe verticale : la dalle structurelle et sa poutre en haut, le plafond suspendu en bas, et l\'espace résiduel disponible pour le passage d\'un réseau, marge technique déduite.',
        svg: `
          <svg viewBox="0 0 460 280" role="img" aria-labelledby="genie-civil-graph-title genie-civil-graph-desc">
            <title id="genie-civil-graph-title">Coupe d'un plenum de faux-plafond</title>
            <desc id="genie-civil-graph-desc">Coupe verticale montrant la dalle structurelle en haut, une poutre en beton qui descend dans le plenum, le plafond suspendu en bas, et la hauteur residuelle disponible pour un reseau entre le bas de la poutre et une marge technique.</desc>

            <defs>
              <marker id="dim-arrow-gc" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="color-mix(in srgb, var(--text) 80%, var(--diagram-accent))"></path>
              </marker>
            </defs>

            <!-- dalle structurelle -->
            <rect class="frame-line" x="60" y="20" width="340" height="24" fill="color-mix(in srgb, var(--diagram-accent) 45%, var(--bg-card))"></rect>
            <text class="label-soft" x="230" y="36" text-anchor="middle" font-size="11" font-weight="700">Dalle (gros œuvre)</text>

            <!-- poutre -->
            <rect class="frame-line" x="60" y="44" width="90" height="70" fill="color-mix(in srgb, var(--diagram-accent) 35%, var(--bg-card))"></rect>
            <text class="tick-label" x="105" y="82" text-anchor="middle">Poutre</text>

            <!-- zone disponible sous la poutre (plenum residuel) -->
            <rect x="60" y="114" width="340" height="46" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))"></rect>
            <text class="tick-label" x="260" y="141" text-anchor="middle">Hauteur disponible (marge déduite)</text>

            <!-- reseau (gaine) -->
            <circle class="frame-line" cx="105" cy="137" r="14" fill="color-mix(in srgb, var(--diagram-accent) 55%, var(--bg-card))"></circle>

            <!-- plafond suspendu -->
            <rect class="frame-line" x="60" y="196" width="340" height="10" fill="color-mix(in srgb, var(--diagram-accent) 25%, var(--bg-card))"></rect>
            <text class="label-soft" x="230" y="220" text-anchor="middle">Plafond suspendu (fini)</text>

            <!-- cotation h_SPB -->
            <line x1="415" y1="20" x2="415" y2="196" stroke="color-mix(in srgb, var(--text) 80%, var(--diagram-accent))" stroke-width="1.4" marker-start="url(#dim-arrow-gc)" marker-end="url(#dim-arrow-gc)"></line>
            <text class="annotation-label" x="422" y="112" text-anchor="start">h plénum</text>

            <!-- cotation hauteur disponible -->
            <line x1="30" y1="114" x2="30" y2="160" stroke="color-mix(in srgb, var(--text) 80%, var(--diagram-accent))" stroke-width="1.4" marker-start="url(#dim-arrow-gc)" marker-end="url(#dim-arrow-gc)"></line>
            <text class="annotation-label" x="10" y="141" text-anchor="middle" transform="rotate(-90 10 141)">h dispo</text>
          </svg>
        `,
        notes: [
          'La poutre occupe le haut du plénum : c\'est sous elle, pas sous la dalle courante, qu\'il faut vérifier la hauteur disponible pour le réseau le plus contraignant.',
          'La zone "hauteur disponible" tient déjà compte de la marge technique déduite (pose, isolation) — c\'est cette hauteur, et non la hauteur brute du plénum, qu\'il faut comparer au gabarit du réseau.',
          'Un réseau qui ne passe pas sous la poutre peut souvent être dévié latéralement, là où il n\'y a pas de retombée structurelle.'
        ],
        reading: 'Repère d\'abord la poutre qui descend dans le plénum : c\'est elle qui réduit localement la hauteur disponible sous elle, bien plus que sous le reste de la dalle.',
        caption: 'Coupe de principe d\'un plénum de faux-plafond avec poutre traversante et gabarit de réseau à faire passer.'
      },
      recap: [
        'Gros œuvre = structure porteuse (fondations, poteaux, poutres, dalles, murs porteurs) : jamais de percement sans étude structurelle.',
        'Second œuvre = finitions et aménagements non porteurs (cloisons, faux-plafonds, revêtements) : plus facilement adaptable pour les réseaux.',
        'Le plénum de faux-plafond est l\'espace principal de passage horizontal des réseaux ; une trémie assure le passage vertical à travers un plancher.',
        'La hauteur réellement disponible pour un réseau se calcule sous l\'élément structurel le plus contraignant (poutre), marge technique déduite.'
      ],
      piege: 'Beaucoup d\'étudiants calculent la hauteur de plénum globale ($h_{\\text{SPB}} - h_{\\text{plafond fini}}$) et oublient de retirer la hauteur de la poutre qui descend localement dans cet espace. Attention : c\'est toujours la hauteur disponible <strong>sous l\'obstacle le plus bas</strong> qu\'il faut comparer au gabarit du réseau, pas la hauteur de plénum théorique.'
    },

    quiz: [
      {
        q: 'Un mur porteur fait partie de :',
        options: [
          'Le second œuvre',
          'Le gros œuvre',
          'Une cloison de distribution',
          'Le lot électricité'
        ],
        answer: 1,
        correction: 'Un mur porteur participe à la stabilité du bâtiment : il appartient au gros œuvre, au même titre que les fondations, poteaux, poutres et dalles. On ne le perce jamais sans validation structurelle.'
      },
      {
        q: 'Le faux-plafond (plénum) sert principalement à :',
        options: [
          'Isoler thermiquement le bâtiment à lui seul',
          'Loger les réseaux techniques horizontaux (gaines, tuyauteries)',
          'Porter les charges de la toiture',
          'Remplacer la dalle structurelle'
        ],
        answer: 1,
        correction: 'Le plénum est un espace technique non porteur : c\'est l\'endroit privilégié pour faire passer les réseaux horizontaux avant qu\'ils ne descendent vers les locaux via des gaines techniques verticales.'
      },
      {
        q: 'Avant de percer une poutre en béton pour faire passer un tube, il faut impérativement :',
        options: [
          'Vérifier la faisabilité avec le bureau d\'études structure',
          'Percer directement : les poutres sont toujours surdimensionnées',
          'Attendre la fin du chantier pour décider',
          'Demander uniquement l\'avis du client'
        ],
        answer: 0,
        correction: 'La poutre fait partie du gros œuvre : toute réservation ou percement doit être validé par le bureau d\'études structure, qui vérifie que cela ne compromet pas la résistance de l\'élément (position, diamètre, zone autorisée).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const local = pick([
          { desc: 'un bureau', hSPBmin: 3.0, hSPBmax: 3.6 },
          { desc: 'un commerce', hSPBmin: 3.1, hSPBmax: 3.7 },
          { desc: 'un hall d\'accueil', hSPBmin: 3.2, hSPBmax: 3.8 }
        ]);
        const hSPB = randFloat(local.hSPBmin, local.hSPBmax, 2);
        const hFini = randFloat(2.5, 2.7, 2);
        const hPoutreCm = rand(20, 40);
        const margeCm = rand(3, 6);
        const hPlenumCm = Math.round((hSPB - hFini) * 100);
        const hDispoCm = hPlenumCm - hPoutreCm - margeCm;
        return {
          statement: `Dans ${local.desc}, la hauteur sous plafond structurel est de $${fr(hSPB, 2)}$ m et le plafond fini doit être posé à $${fr(hFini, 2)}$ m du sol. Une poutre en béton de ${hPoutreCm} cm de hauteur traverse le plénum. On prévoit une marge technique de ${margeCm} cm pour la pose. Calcule la hauteur disponible (en cm) sous la poutre pour faire passer un réseau.`,
          answer: hDispoCm,
          tolerance: 0.5,
          unit: 'cm',
          hint: 'Calcule d\'abord la hauteur totale du plénum ($h_{\\text{SPB}} - h_{\\text{fini}}$, convertie en cm), puis retire la hauteur de la poutre et la marge technique.',
          solution: [
            `$h_{\\text{plénum}} = ${fr(hSPB, 2)} - ${fr(hFini, 2)} = ${fr(parseFloat((hSPB - hFini).toFixed(2)), 2)}$ m $= ${hPlenumCm}$ cm`,
            `$h_{\\text{disponible}} = ${hPlenumCm} - ${hPoutreCm} - ${margeCm} = ${hDispoCm}$ cm`
          ]
        };
      }
    },

    probleme: {
      context: 'Un plateau de bureaux a une hauteur sous plafond structurel de $3{,}40$ m. Le plafond fini est prévu à $2{,}80$ m du sol. Une poutre en béton de $35$ cm de hauteur traverse le plénum. On prévoit une marge technique de $6$ cm pour la pose et l\'isolation. Une gaine de ventilation de diamètre extérieur $180$ mm doit passer sous la poutre.',
      tasks: [
        'Calculer la hauteur totale de plénum disponible.',
        'Calculer la hauteur réellement utilisable sous la poutre, marge technique déduite.',
        'Conclure sur la faisabilité du passage de la gaine, et proposer une recommandation pour sécuriser le chantier.'
      ],
      solutions: [
        '$h_{\\text{plénum}} = 3{,}40 - 2{,}80 = 0{,}60$ m $= 60$ cm.',
        '$h_{\\text{disponible}} = 60 - 35 - 6 = 19$ cm $= 190$ mm.',
        'La gaine ($180$ mm) passe sous la poutre, mais avec seulement $10$ mm de marge résiduelle ($190 - 180$) : c\'est trop juste pour absorber les tolérances de pose et une éventuelle contre-flèche de la poutre. Il est recommandé de sécuriser en amont : vérifier la contre-flèche réelle avec le bureau d\'études, ou prévoir une gaine plate sur ce tronçon.'
      ],
      finalAnswer: '$h_{\\text{disponible}} = 190$ mm $\\geq 180$ mm : le passage est possible, mais avec une marge résiduelle de seulement $10$ mm — à sécuriser avant exécution (vérification de la contre-flèche, ou gaine plate en solution de repli).'
    },

    evaluation: {
      title: 'Évaluation — Génie civil et contraintes structurelles',
      duration: '15 min',
      questions: [
        {
          statement: 'Le second œuvre regroupe :',
          type: 'multiple-choice',
          options: [
            'Les fondations, poteaux et dalles',
            'Les cloisons de distribution, faux-plafonds, revêtements et menuiseries intérieures',
            'La charpente et la couverture',
            'Les murs porteurs uniquement'
          ],
          answer: 1,
          points: 2,
          correction: 'Le second œuvre regroupe les éléments non porteurs de finition et d\'aménagement — par opposition au gros œuvre, qui assure la stabilité structurelle du bâtiment.'
        },
        {
          statement: 'La hauteur sous plafond structurel est de $3{,}30$ m, le plafond fini à $2{,}70$ m, une poutre de $30$ cm traverse le plénum, marge technique $5$ cm. Calcule la hauteur disponible sous la poutre (en cm).',
          type: 'numeric',
          answer: 25,
          tolerance: 0.5,
          unit: 'cm',
          points: 3,
          correction: '$h_{\\text{plénum}} = 3{,}30 - 2{,}70 = 0{,}60$ m $= 60$ cm. $h_{\\text{disponible}} = 60 - 30 - 5 = 25$ cm.'
        },
        {
          statement: 'Une trémie est :',
          type: 'multiple-choice',
          options: [
            'Une réservation dans un plancher pour le passage vertical d\'un réseau',
            'Un type de faux-plafond',
            'Une cloison amovible',
            'Un revêtement de sol technique'
          ],
          answer: 0,
          points: 2,
          correction: 'La trémie est l\'ouverture ménagée (ou carottée après validation structurelle) dans un plancher, qui permet à un réseau de passer verticalement d\'un étage à l\'autre, généralement en lien avec une gaine technique.'
        },
        {
          statement: 'Avec la hauteur disponible de la question 2 ($25$ cm), une gaine de diamètre extérieur $220$ mm doit passer sous la poutre. Calcule la marge résiduelle (en mm, valeur positive si ça passe, négative sinon).',
          type: 'numeric',
          answer: 30,
          tolerance: 1,
          unit: 'mm',
          points: 3,
          correction: '$25$ cm $= 250$ mm. Marge résiduelle $= 250 - 220 = 30$ mm : le passage est possible, avec $30$ mm de marge.'
        },
        {
          statement: 'Pourquoi faut-il coordonner les réseaux énergétiques avec le bureau d\'études structure dès la phase d\'étude, plutôt qu\'au moment du chantier ?',
          type: 'multiple-choice',
          options: [
            'Parce que c\'est une obligation purement administrative sans conséquence technique',
            'Parce qu\'un conflit découvert sur chantier (réseau qui percute une poutre) coûte plus cher à résoudre qu\'une adaptation anticipée en étude',
            'Parce que le bureau d\'études structure impose toujours le tracé des réseaux',
            'Parce que cela n\'a d\'intérêt que pour les bâtiments de plus de 5 étages'
          ],
          answer: 1,
          points: 2,
          correction: 'Un conflit entre un réseau et un élément structurel découvert en phase chantier impose une reprise coûteuse (dévoiement, modification du gros œuvre). Anticiper cette coordination dès l\'étude évite ces surcoûts et ces retards.'
        }
      ]
    }
  });
