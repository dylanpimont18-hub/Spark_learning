/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b2-3-desenfumage.js
   BTS FED — S8-B2-3 Désenfumage et sécurité incendie
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b2-3-desenfumage',
    level: 3, subject: 'fed',
    icon: '🚨',
    title: 'Désenfumage et sécurité incendie',
    subtitle: 'Compartimentage, cantons de désenfumage, désenfumage naturel et mécanique',
    keywords: ['Désenfumage', 'Canton', 'Exutoire', 'Compartimentage', 'Écran de cantonnement'],
    physics: 'En cas d\'incendie, ce ne sont pas les flammes mais les <strong>fumées</strong> qui tuent le plus souvent : elles envahissent rapidement les circulations et réduisent la visibilité. Le désenfumage n\'éteint pas le feu — il maintient un volume praticable pour l\'évacuation des occupants et l\'intervention des secours, en évacuant les fumées chaudes avant qu\'elles n\'envahissent tout le bâtiment.',

    cours: {
      intro: 'Le désenfumage repose sur un principe simple : les fumées chaudes, plus légères que l\'air ambiant, s\'accumulent naturellement en <strong>partie haute</strong> d\'un volume. L\'enjeu est de les évacuer à cet endroit avant qu\'elles ne redescendent et n\'envahissent tout le local.<br/><br/>Pour cela, le bâtiment est d\'abord découpé par <strong>compartimentage</strong> (parois et portes coupe-feu) afin de limiter la propagation d\'un secteur à l\'autre, puis chaque grand volume est subdivisé en <strong>cantons de désenfumage</strong> à l\'aide d\'écrans suspendus, qui retiennent localement les fumées le temps de leur extraction.<br/><br/>L\'extraction elle-même se fait selon deux grandes stratégies : le <strong>désenfumage naturel</strong>, qui exploite le tirage thermique via des exutoires en toiture, ou le <strong>désenfumage mécanique</strong>, qui extrait les fumées à l\'aide de ventilateurs motorisés — indispensable notamment en sous-sol, où le tirage naturel est impossible.',
      definitions: [
        { term: 'Compartimentage', def: 'Division du bâtiment en volumes coupe-feu indépendants (parois, portes coupe-feu) destinée à limiter la propagation du feu et des fumées d\'un secteur à l\'autre.' },
        { term: 'Canton de désenfumage', def: 'Volume délimité par des écrans de cantonnement (suspendus en sous-face de toiture ou de plafond), qui retient localement les fumées chaudes le temps de leur extraction, empêchant leur propagation à tout le volume du bâtiment.' },
        { term: 'Désenfumage naturel', def: 'Évacuation des fumées par tirage thermique, via des exutoires en toiture qui s\'ouvrent automatiquement, associés à des amenées d\'air en partie basse pour compenser le volume extrait.' },
        { term: 'Désenfumage mécanique', def: 'Extraction motorisée des fumées par des ventilateurs (souvent résistants à haute température), associée à des amenées d\'air motorisées ou naturelles — utilisé notamment quand le tirage naturel est impossible (sous-sol, parc de stationnement).' },
        { term: 'DAS et SSI', def: 'Un <strong>DAS</strong> (Dispositif Actionné de Sécurité) est un équipement piloté automatiquement en cas de sinistre (exutoire, clapet coupe-feu, volet) ; le <strong>SSI</strong> (Système de Sécurité Incendie) est l\'ensemble coordonné de détection et de commande qui déclenche ces DAS.' }
      ],
      method: {
        title: 'Choisir un mode de désenfumage et estimer le débit d\'extraction mécanique',
        steps: [
          '<strong>Identifier le type de local</strong> (circulation, local à risque, ERP, parc de stationnement) et la réglementation applicable à ce type d\'ouvrage.',
          '<strong>Choisir le mode de désenfumage</strong> : naturel en priorité si le tirage thermique est possible (toiture accessible, hauteur suffisante), mécanique si le tirage naturel est impossible ou insuffisant.',
          '<strong>Découper le volume en cantons</strong> à l\'aide d\'écrans de cantonnement, pour limiter la surface à traiter par chaque point d\'extraction.',
          '<strong>Estimer le débit d\'extraction</strong> nécessaire pour un désenfumage mécanique, à partir de la surface du canton $S$ — un ordre de grandeur pédagogique couramment retenu est $Q_v \\approx S/100$ (avec $Q_v$ en m³/s et $S$ en m²).',
          '<strong>Vérifier les amenées d\'air</strong> : elles doivent être dimensionnées en cohérence avec le débit extrait, pour ne pas mettre le canton en dépression excessive et compromettre l\'ouverture des issues.'
        ]
      },
      example: {
        statement: 'Un canton de désenfumage mécanique d\'un parc de stationnement couvre une surface $S = 800$ m².<br/><br/>En retenant l\'ordre de grandeur $Q_v \\approx S/100$ (m³/s), estimer le débit d\'extraction nécessaire, en m³/s puis en m³/h.',
        steps: [
          '$Q_v = S/100 = 800/100 = 8$ m³/s.',
          'Conversion en m³/h : $Q_v = 8 \\times 3\\,600 = 28\\,800$ m³/h.'
        ],
        answer: '$Q_v \\approx 8$ m³/s, soit environ $28\\,800$ m³/h : un ordre de grandeur qui donne une idée du dimensionnement des extracteurs à prévoir, à affiner ensuite selon le référentiel réglementaire précis applicable au type d\'ouvrage.'
      },
      formulas: [
        '$Q_v \\approx S/100$ ($Q_v$ en m³/s, $S$ surface du canton en m² — ordre de grandeur pédagogique pour un désenfumage mécanique)',
        '$Q_v(\\text{m}^3/\\text{h}) = Q_v(\\text{m}^3/\\text{s}) \\times 3\\,600$ (conversion d\'unité)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Principe du désenfumage d\'un canton',
        title: 'Fumées en partie haute, exutoire ou extracteur, amenée d\'air en partie basse',
        description: 'Les fumées chaudes s\'accumulent en partie haute du canton, retenues par un écran de cantonnement. Elles sont évacuées soit par un exutoire naturel en toiture, soit par un extracteur mécanique, pendant qu\'une amenée d\'air en partie basse compense le volume extrait.',
        svg: `
          <svg viewBox="0 0 520 280" role="img" aria-labelledby="desenf-graph-title desenf-graph-desc">
            <title id="desenf-graph-title">Principe du desenfumage d'un canton</title>
            <desc id="desenf-graph-desc">Coupe d'un local avec une couche de fumees chaudes en partie haute, delimitee par un ecran de cantonnement. Une fleche part de cette couche vers le haut a travers un exutoire en toiture, une autre fleche part vers un extracteur mecanique sur le cote. Une fleche d'amenee d'air entre en partie basse du local.</desc>

            <defs>
              <marker id="arrow-fed-desenf" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- local (murs) -->
            <rect class="frame-line" x="70" y="50" width="340" height="170" fill="none"></rect>

            <!-- couche de fumees -->
            <rect x="70" y="50" width="340" height="55" fill="color-mix(in srgb, var(--diagram-accent) 20%, var(--bg-card))"></rect>
            <text class="label-soft" x="240" y="80" text-anchor="middle">Fumées chaudes (canton)</text>

            <!-- ecran de cantonnement -->
            <line class="frame-line" x1="250" y1="50" x2="250" y2="105"></line>
            <text class="annotation-label" x="258" y="98" text-anchor="start">Écran de cantonnement</text>

            <!-- exutoire (sortie toiture) -->
            <line class="curve-main" x1="150" y1="50" x2="150" y2="15" marker-end="url(#arrow-fed-desenf)"></line>
            <text class="annotation-label" x="155" y="12" text-anchor="start">Exutoire (naturel)</text>

            <!-- extracteur mecanique -->
            <line class="curve-main" x1="410" y1="75" x2="450" y2="75" marker-end="url(#arrow-fed-desenf)"></line>
            <rect class="frame-line" x="450" y="50" width="60" height="50" fill="none"></rect>
            <text class="label-soft" x="480" y="72" text-anchor="middle">Extracteur</text>
            <text class="label-soft" x="480" y="86" text-anchor="middle">mécanique</text>

            <!-- amenee d'air -->
            <line class="curve-main" x1="30" y1="230" x2="70" y2="215" marker-end="url(#arrow-fed-desenf)"></line>
            <text class="annotation-label" x="10" y="245" text-anchor="start">Amenée d'air</text>

            <text class="label-soft" x="240" y="255" text-anchor="middle">Qv ≈ S / 100 (m³/s), S = surface du canton</text>
          </svg>
        `,
        notes: [
          'La couche de <strong>fumées chaudes</strong> se forme en partie haute du canton, contenue latéralement par l\'écran de cantonnement.',
          'L\'évacuation se fait soit par un <strong>exutoire naturel</strong> en toiture (tirage thermique), soit par un <strong>extracteur mécanique</strong> quand le tirage naturel n\'est pas possible.',
          'L\'<strong>amenée d\'air</strong> en partie basse compense le volume extrait, pour éviter une dépression excessive du canton.'
        ],
        reading: 'Repère la couche de fumées en partie haute, contenue par l\'écran de cantonnement, puis la ou les flèches d\'évacuation (exutoire ou extracteur) et la flèche d\'amenée d\'air en partie basse.',
        caption: 'Principe du désenfumage d\'un canton : rétention des fumées en partie haute, évacuation (naturelle ou mécanique), amenée d\'air en partie basse.'
      },
      recap: [
        'Le <strong>compartimentage</strong> découpe le bâtiment en volumes coupe-feu pour limiter la propagation du feu et des fumées.',
        'Un <strong>canton de désenfumage</strong>, délimité par des écrans de cantonnement, retient localement les fumées chaudes le temps de leur extraction.',
        'Le <strong>désenfumage naturel</strong> (exutoires en toiture) exploite le tirage thermique ; le <strong>désenfumage mécanique</strong> (extracteurs) est nécessaire quand ce tirage est impossible.',
        'Une amenée d\'air en partie basse doit toujours accompagner l\'extraction, pour compenser le volume évacué.',
        'Ordre de grandeur pédagogique pour un désenfumage mécanique : $Q_v \\approx S/100$ (m³/s, avec $S$ en m²) — à affiner selon le référentiel réglementaire précis du projet.'
      ],
      piege: 'Le désenfumage n\'a pas pour but d\'<strong>éteindre le feu</strong> ni de le stopper : c\'est un système de <strong>sécurité des personnes et des secours</strong>, qui maintient un volume praticable pour l\'évacuation. Autre confusion fréquente : croire que l\'amenée d\'air est optionnelle. Sans amenée d\'air suffisante, l\'extraction met le canton en forte dépression, ce qui peut rendre les portes d\'évacuation difficiles à ouvrir — l\'amenée d\'air fait partie intégrante du système, au même titre que l\'extraction elle-même.'
    },

    quiz: [
      {
        q: 'Le rôle principal du désenfumage en cas d\'incendie est de :',
        options: [
          'Éteindre le feu automatiquement',
          'Maintenir un volume praticable pour l\'évacuation des occupants et l\'intervention des secours, en évacuant les fumées',
          'Remplacer les extincteurs et les sprinklers',
          'Couper automatiquement l\'alimentation électrique du bâtiment'
        ],
        answer: 1,
        correction: 'Le désenfumage n\'éteint pas le feu : il évacue les fumées chaudes pour maintenir un volume praticable, essentiel à l\'évacuation des occupants et à l\'intervention des secours.'
      },
      {
        q: 'Un écran de cantonnement sert à :',
        options: [
          'Éteindre les flammes localement',
          'Retenir localement les fumées chaudes en partie haute, le temps de leur extraction',
          'Renforcer la résistance structurelle du bâtiment',
          'Remplacer l\'amenée d\'air'
        ],
        answer: 1,
        correction: 'L\'écran de cantonnement délimite un canton de désenfumage : il retient localement les fumées chaudes en partie haute, évitant qu\'elles n\'envahissent tout le volume avant leur extraction.'
      },
      {
        q: 'Pourquoi l\'amenée d\'air est-elle indispensable dans un système de désenfumage mécanique ?',
        options: [
          'Elle ne sert à rien, c\'est une option de confort',
          'Elle compense le volume extrait, évitant une dépression excessive qui gênerait l\'ouverture des issues',
          'Elle remplace entièrement l\'extracteur mécanique',
          'Elle sert uniquement à refroidir l\'extracteur'
        ],
        answer: 1,
        correction: 'Sans amenée d\'air suffisante, l\'extraction met le canton en forte dépression, ce qui peut rendre difficile l\'ouverture des portes d\'évacuation : l\'amenée d\'air fait partie intégrante du système.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un parc de stationnement souterrain',
          'un grand magasin de plain-pied',
          'une salle des fêtes recevant du public',
          'un entrepôt logistique compartimenté'
        ]);
        const S = rand(300, 1200);
        const QvS = parseFloat((S / 100).toFixed(1));
        const QvH = Math.round(QvS * 3600);
        return {
          statement: `Dans ${contexte}, un canton de désenfumage mécanique couvre une surface $S = ${S}$ m².<br/><br/>En retenant l'ordre de grandeur $Q_v \\approx S/100$, calcule le débit d'extraction $Q_v$ (en m³/h, arrondi à la centaine).`,
          answer: Math.round(QvH / 100) * 100,
          tolerance: 200,
          unit: 'm³/h',
          hint: 'Calcule d\'abord $Q_v$ en m³/s ($S/100$), puis convertis en m³/h en multipliant par $3\\,600$.',
          solution: [
            `$Q_v = S/100 = ${S}/100 = ${fr(QvS, 1)}$ m³/s.`,
            `Conversion en m³/h : $Q_v = ${fr(QvS, 1)} \\times 3\\,600 \\approx ${QvH}$ m³/h.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un entrepôt logistique de $2\\,400$ m² est divisé en trois cantons de désenfumage de $800$ m² chacun, séparés par des écrans de cantonnement. Le bâtiment ne dispose pas d\'accès en toiture permettant un tirage naturel efficace : un désenfumage mécanique est retenu pour chaque canton.',
      tasks: [
        'Calculer le débit d\'extraction $Q_v$ nécessaire pour un seul canton (en m³/s puis en m³/h), en retenant $Q_v \\approx S/100$.',
        'Si les trois cantons doivent pouvoir être désenfumés simultanément, calculer le débit total d\'extraction à prévoir pour l\'ensemble du bâtiment (en m³/h).',
        'Expliquer pourquoi le bâtiment a été divisé en trois cantons plutôt que traité comme un seul volume de $2\\,400$ m².',
        'Expliquer pourquoi une amenée d\'air doit être prévue en complément de chaque extracteur, et ce qui se passerait en son absence.'
      ],
      solutions: [
        'Pour un canton : $Q_v = 800/100 = 8$ m³/s, soit $8 \\times 3\\,600 = 28\\,800$ m³/h.',
        'Pour les trois cantons simultanément : $Q_{v,\\text{total}} = 3 \\times 28\\,800 = 86\\,400$ m³/h.',
        'Diviser le volume en cantons limite l\'étendue des fumées avant leur extraction : chaque écran de cantonnement retient localement les fumées d\'un secteur, évitant qu\'elles n\'envahissent tout le bâtiment de $2\\,400$ m² et facilitant une extraction plus rapide et plus efficace, canton par canton.',
        'Sans amenée d\'air, l\'extraction mécanique mettrait chaque canton en forte dépression : l\'air ne pouvant pas être remplacé aussi vite qu\'il est extrait, la pression chuterait au point de rendre difficile l\'ouverture des portes d\'évacuation — un risque direct pour la sécurité des occupants, à l\'opposé du but recherché.'
      ],
      finalAnswer: 'Chaque canton de $800$ m² nécessite environ $28\\,800$ m³/h d\'extraction, soit $86\\,400$ m³/h au total si les trois doivent fonctionner simultanément — un dimensionnement rendu gérable justement grâce au découpage en cantons.'
    },

    evaluation: {
      title: 'Évaluation — Désenfumage et sécurité incendie',
      duration: '20 min',
      questions: [
        {
          statement: 'Un canton de désenfumage mécanique a une surface $S = 500$ m². Calculer le débit d\'extraction $Q_v$ (en m³/s), avec $Q_v \\approx S/100$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0.3,
          unit: 'm³/s',
          points: 2,
          correction: '$Q_v = S/100 = 500/100 = 5$ m³/s.'
        },
        {
          statement: 'Convertir ce débit de $5$ m³/s en m³/h.',
          type: 'numeric',
          answer: 18000,
          tolerance: 500,
          unit: 'm³/h',
          points: 2,
          correction: '$5 \\times 3\\,600 = 18\\,000$ m³/h.'
        },
        {
          statement: 'Le compartimentage d\'un bâtiment a pour objectif principal de :',
          type: 'multiple-choice',
          options: [
            'Améliorer l\'isolation thermique du bâtiment',
            'Limiter la propagation du feu et des fumées d\'un secteur à l\'autre',
            'Réduire le coût de construction',
            'Faciliter uniquement la circulation des réseaux techniques'
          ],
          answer: 1,
          points: 2,
          correction: 'Le compartimentage découpe le bâtiment en volumes coupe-feu indépendants, pour empêcher le feu et les fumées de se propager librement d\'un secteur à l\'autre.'
        },
        {
          statement: 'Le désenfumage mécanique est particulièrement nécessaire :',
          type: 'multiple-choice',
          options: [
            'Uniquement dans les bâtiments de moins de deux étages',
            'Quand le tirage thermique naturel est impossible ou insuffisant, par exemple en sous-sol',
            'Uniquement dans les bâtiments équipés de toiture-terrasse',
            'Jamais, le désenfumage naturel suffit toujours'
          ],
          answer: 1,
          points: 3,
          correction: 'Le désenfumage mécanique prend le relais quand le tirage naturel n\'est pas possible ou insuffisant — typiquement en sous-sol ou dans les parcs de stationnement, où il n\'y a pas d\'accès direct vers l\'extérieur en toiture.'
        },
        {
          statement: 'Un DAS (Dispositif Actionné de Sécurité) est :',
          type: 'multiple-choice',
          options: [
            'Un équipement piloté automatiquement en cas de sinistre (exutoire, clapet coupe-feu, volet), commandé par le SSI',
            'Un type de détecteur de fumée uniquement',
            'Un système de climatisation de secours',
            'Un extincteur portatif'
          ],
          answer: 0,
          points: 2,
          correction: 'Un DAS est un équipement de sécurité (exutoire, clapet coupe-feu, volet…) actionné automatiquement en cas de sinistre, piloté par le SSI (Système de Sécurité Incendie).'
        }
      ]
    }
  });
