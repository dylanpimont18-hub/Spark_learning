/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-c3-gestion-energie-electrique.js
   BTS FED — S8-C3 Gestion de l'énergie électrique
   Tarification, délestage, compensation de l'énergie réactive
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-c3-gestion-energie-electrique',
    level: 3, subject: 'fed',
    icon: '💶',
    title: 'Gestion de l\'énergie électrique',
    subtitle: 'Tarification, délestage, compensation de l\'énergie réactive',
    keywords: ['Tarification électrique', 'Délestage', 'Énergie réactive', 'Compensation', 'Batterie de condensateurs', 'Cos phi'],
    physics: 'Une facture d\'électricité ne se résume pas au kWh consommé : elle dépend aussi du moment de la consommation (tarification), de la puissance simultanément appelée (délestage), et de la qualité de cette consommation (énergie réactive). Trois leviers, souvent négligés, qui peuvent pourtant réduire significativement le coût énergétique d\'un bâtiment.',

    cours: {
      intro: 'Gérer l\'énergie électrique d\'un bâtiment ne se limite pas à réduire la consommation brute : trois leviers complémentaires permettent d\'optimiser le <strong>coût</strong> et la <strong>qualité</strong> de cette énergie.<br/><br/>La <strong>tarification</strong> d\'abord : le prix du kWh varie selon le fournisseur, la puissance souscrite et le moment de la consommation (heures pleines / heures creuses, voire tarification dynamique). Une facture se décompose toujours en un abonnement (lié à la puissance souscrite) et une part variable (liée à l\'énergie consommée, au tarif applicable selon l\'heure).<br/><br/>Le <strong>délestage</strong> ensuite : il consiste à couper ou réduire temporairement certaines charges non prioritaires (par exemple un ballon d\'ECS ou un poste de recharge) lorsque la puissance appelée totale approche de la puissance souscrite, pour éviter un dépassement coûteux (voire un déclenchement du disjoncteur de branchement). Il s\'accompagne souvent d\'un <strong>équilibrage des phases</strong> : répartir au mieux les charges monophasées sur les trois phases d\'une installation triphasée, pour éviter qu\'une seule phase ne soit surchargée pendant que les deux autres restent sous-utilisées.<br/><br/>La <strong>compensation de l\'énergie réactive</strong> enfin : les moteurs (compresseurs, pompes, ventilateurs) consomment, en plus de leur énergie active utile, une <strong>énergie réactive</strong> nécessaire à la création de leur champ magnétique. Cette énergie réactive n\'est pas directement facturée, mais un <strong>cos φ</strong> trop faible est pénalisé par le fournisseur d\'énergie. Installer une <strong>batterie de condensateurs</strong> permet de relever ce cos φ et de supprimer cette pénalité, en dimensionnant correctement sa puissance réactive $Q_c$.',
      definitions: [
        { term: 'Structure d\'une facture d\'électricité', def: 'Une facture combine une part fixe (<strong>abonnement</strong>, liée à la puissance souscrite) et une part variable (<strong>énergie consommée</strong>, facturée selon le tarif applicable — souvent différent en heures pleines et en heures creuses).' },
        { term: 'Délestage', def: 'Coupure ou réduction temporaire et automatique de charges non prioritaires (ballon ECS, recharge de véhicule...) lorsque la puissance appelée totale approche de la puissance souscrite, afin d\'éviter un dépassement.' },
        { term: 'Équilibrage des phases', def: 'Répartition des charges monophasées sur les trois phases d\'une installation triphasée, de façon à éviter qu\'une phase soit fortement chargée pendant que les deux autres restent sous-utilisées.' },
        { term: 'Énergie réactive et facteur de puissance $\\cos\\varphi$', def: 'Énergie consommée par les récepteurs inductifs (moteurs, transformateurs) pour créer leur champ magnétique, sans effectuer de travail utile. Un $\\cos\\varphi$ faible (grande part réactive) est pénalisé financièrement par le fournisseur d\'énergie.' },
        { term: 'Batterie de condensateurs (compensation)', def: 'Dispositif installé pour fournir localement l\'énergie réactive consommée par les récepteurs inductifs, ce qui relève le $\\cos\\varphi$ vu par le fournisseur et supprime la pénalité associée à l\'énergie réactive.' },
        { term: 'Puissance réactive à compenser $Q_c$', def: 'Puissance (kVAR) que doit fournir la batterie de condensateurs pour faire passer le $\\cos\\varphi$ d\'une valeur initiale $\\cos\\varphi_1$ à une valeur cible $\\cos\\varphi_2$ : $Q_c = P\\times(\\tan\\varphi_1 - \\tan\\varphi_2)$, avec $P$ la puissance active (kW) et $\\tan\\varphi=\\tan(\\arccos(\\cos\\varphi))$.' }
      ],
      method: {
        title: 'Dimensionner une batterie de condensateurs de compensation',
        steps: [
          '<strong>Relever la puissance active</strong> $P$ (kW) de l\'installation et son $\\cos\\varphi_1$ initial (souvent indiqué sur la facture, ou mesuré).',
          '<strong>Identifier le $\\cos\\varphi_2$ cible</strong>, généralement imposé ou recommandé par le fournisseur d\'énergie pour éviter toute pénalité (souvent $0{,}93$ à $0{,}95$).',
          '<strong>Calculer $\\tan\\varphi_1$ et $\\tan\\varphi_2$</strong> à partir de $\\cos\\varphi_1$ et $\\cos\\varphi_2$ : $\\tan\\varphi = \\tan(\\arccos(\\cos\\varphi))$.',
          '<strong>Calculer la puissance réactive à compenser</strong> : $Q_c = P\\times(\\tan\\varphi_1 - \\tan\\varphi_2)$, exprimée en kVAR.',
          '<strong>Choisir une batterie de condensateurs</strong> de puissance réactive au moins égale à $Q_c$ (par paliers standards du commerce).'
        ]
      },
      example: {
        statement: 'Une installation a une puissance active $P=100$ kW et un $\\cos\\varphi_1=0{,}75$. Le fournisseur d\'énergie exige un $\\cos\\varphi_2=0{,}95$ pour éviter toute pénalité.<br/><br/>Calculer la puissance réactive $Q_c$ de la batterie de condensateurs à installer.',
        steps: [
          '$\\tan\\varphi_1 = \\tan(\\arccos(0{,}75)) \\approx 0{,}882$.',
          '$\\tan\\varphi_2 = \\tan(\\arccos(0{,}95)) \\approx 0{,}329$.',
          '$Q_c = P\\times(\\tan\\varphi_1 - \\tan\\varphi_2) = 100\\times(0{,}882 - 0{,}329) \\approx 55{,}3$ kVAR.'
        ],
        answer: 'Une batterie de condensateurs d\'environ $55{,}3$ kVAR (arrondie au palier commercial immédiatement supérieur) permet de relever le $\\cos\\varphi$ de $0{,}75$ à $0{,}95$ et d\'éviter la pénalité pour énergie réactive excessive.'
      },
      formulas: [
        '$Q_c = P\\times(\\tan\\varphi_1 - \\tan\\varphi_2)$ (puissance réactive à compenser, kVAR)',
        '$\\tan\\varphi = \\tan(\\arccos(\\cos\\varphi))$ (passage du $\\cos\\varphi$ à $\\tan\\varphi$)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Trois leviers de gestion de l\'énergie électrique',
        title: 'Tarification, délestage, compensation réactive',
        description: 'Trois leviers distincts mais complémentaires permettent de réduire le coût de l\'énergie électrique d\'un bâtiment : agir sur le moment de la consommation, sur la puissance appelée, et sur la qualité de cette consommation.',
        svg: `
          <svg viewBox="0 0 480 220" role="img" aria-labelledby="c3-graph-title c3-graph-desc">
            <title id="c3-graph-title">Trois leviers de gestion de l'energie electrique</title>
            <desc id="c3-graph-desc">Trois boites cote a cote representant tarification, delestage et compensation de l'energie reactive, toutes reliees a une boite centrale en bas representant la facture d'energie electrique optimisee.</desc>

            <rect class="frame-line" x="20" y="30" width="130" height="55" fill="none"></rect>
            <text class="label-soft" x="85" y="55" text-anchor="middle">Tarification</text>
            <text class="label-soft" x="85" y="72" text-anchor="middle">(HP/HC)</text>

            <rect class="frame-line" x="175" y="30" width="130" height="55" fill="none"></rect>
            <text class="label-soft" x="240" y="55" text-anchor="middle">Délestage</text>
            <text class="label-soft" x="240" y="72" text-anchor="middle">(équilibrage phases)</text>

            <rect class="frame-line" x="330" y="30" width="130" height="55" fill="none"></rect>
            <text class="label-soft" x="395" y="55" text-anchor="middle">Compensation</text>
            <text class="label-soft" x="395" y="72" text-anchor="middle">réactive (cos φ)</text>

            <rect class="frame-line" x="140" y="150" width="200" height="50" fill="none"></rect>
            <text class="label-soft" x="240" y="175" text-anchor="middle">Facture optimisée</text>
            <text class="label-soft" x="240" y="190" text-anchor="middle">et installation conforme</text>

            <line class="curve-main" x1="85" y1="85" x2="200" y2="150"></line>
            <line class="curve-main" x1="240" y1="85" x2="240" y2="150"></line>
            <line class="curve-main" x1="395" y1="85" x2="280" y2="150"></line>
          </svg>
        `,
        notes: [
          'La <strong>tarification</strong> agit sur le moment de la consommation (heures pleines/creuses).',
          'Le <strong>délestage</strong>, avec l\'équilibrage des phases, agit sur la puissance appelée pour éviter les dépassements.',
          'La <strong>compensation de l\'énergie réactive</strong> agit sur la qualité de la consommation, en relevant le $\\cos\\varphi$.'
        ],
        reading: 'Repère les trois leviers indépendants en haut, tous contribuant à une facture optimisée et une installation conforme en bas.',
        caption: 'Trois leviers complémentaires de gestion de l\'énergie électrique d\'un bâtiment.'
      },
      recap: [
        'Une facture d\'électricité combine un <strong>abonnement</strong> (puissance souscrite) et une <strong>part variable</strong> (énergie consommée, selon le tarif horaire applicable).',
        'Le <strong>délestage</strong> coupe temporairement des charges non prioritaires pour éviter un dépassement de puissance souscrite ; l\'<strong>équilibrage des phases</strong> répartit les charges monophasées sur les trois phases.',
        'Un <strong>$\\cos\\varphi$</strong> trop faible, lié à l\'énergie réactive des moteurs, est pénalisé par le fournisseur.',
        'Compensation : $Q_c = P\\times(\\tan\\varphi_1-\\tan\\varphi_2)$, avec $\\tan\\varphi=\\tan(\\arccos(\\cos\\varphi))$.',
        'Ces trois leviers (tarification, délestage, compensation) sont indépendants et complémentaires : ils peuvent tous être mis en œuvre simultanément sur une même installation.'
      ],
      piege: 'Ne pas confondre <strong>énergie réactive</strong> (liée au déphasage courant/tension des récepteurs inductifs, pénalisée si $\\cos\\varphi$ trop faible) avec un simple <strong>gaspillage d\'énergie active</strong> : la batterie de condensateurs ne réduit pas la consommation en kWh utile, elle réduit uniquement la pénalité facturée pour l\'énergie réactive excédentaire. Attention aussi, dans le calcul de $Q_c$, à ne pas intervertir $\\tan\\varphi_1$ et $\\tan\\varphi_2$ : c\'est bien $\\tan\\varphi_1$ (situation initiale, dégradée) moins $\\tan\\varphi_2$ (situation cible, améliorée) — une erreur de signe donnerait un $Q_c$ négatif, absurde pour une batterie de condensateurs.'
    },

    quiz: [
      {
        q: 'Le délestage consiste à :',
        options: [
          'Augmenter la puissance souscrite en permanence',
          'Couper ou réduire temporairement des charges non prioritaires pour éviter un dépassement de puissance souscrite',
          'Installer une batterie de condensateurs',
          'Changer systématiquement de fournisseur d\'énergie'
        ],
        answer: 1,
        correction: 'Le délestage coupe ou réduit temporairement des charges non prioritaires (ballon ECS, recharge...) lorsque la puissance appelée totale approche de la puissance souscrite, pour éviter un dépassement.'
      },
      {
        q: 'Un $\\cos\\varphi$ trop faible sur une installation est généralement pénalisé par le fournisseur d\'énergie car il traduit :',
        options: [
          'Une consommation d\'énergie active excessive',
          'Une part importante d\'énergie réactive consommée par les récepteurs inductifs',
          'Un mauvais équilibrage des phases',
          'Un dépassement systématique de la puissance souscrite'
        ],
        answer: 1,
        correction: 'Un $\\cos\\varphi$ faible traduit une part importante d\'énergie réactive (liée aux moteurs et autres récepteurs inductifs), que le fournisseur pénalise financièrement au-delà d\'un certain seuil.'
      },
      {
        q: 'La puissance réactive $Q_c$ d\'une batterie de condensateurs se calcule par :',
        options: [
          '$Q_c = P\\times(\\cos\\varphi_1-\\cos\\varphi_2)$',
          '$Q_c = P\\times(\\tan\\varphi_1-\\tan\\varphi_2)$',
          '$Q_c = P/(\\tan\\varphi_1-\\tan\\varphi_2)$',
          '$Q_c = P\\times\\tan\\varphi_1\\times\\tan\\varphi_2$'
        ],
        answer: 1,
        correction: '$Q_c = P\\times(\\tan\\varphi_1-\\tan\\varphi_2)$, où $\\tan\\varphi_1$ correspond au $\\cos\\varphi$ initial et $\\tan\\varphi_2$ au $\\cos\\varphi$ cible.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un atelier de production équipé de plusieurs compresseurs',
          'une chaufferie collective avec pompes et ventilateurs',
          'un site tertiaire avec CTA et groupes froids',
          'un entrepôt frigorifique'
        ]);
        const P = pick([50, 80, 100, 150, 200]);
        const cosPhi1 = randFloat(0.65, 0.8, 2);
        const cosPhi2 = pick([0.93, 0.95]);
        const tan1 = Math.tan(Math.acos(cosPhi1));
        const tan2 = Math.tan(Math.acos(cosPhi2));
        const Qc = parseFloat((P * (tan1 - tan2)).toFixed(1));
        return {
          statement: `Pour ${contexte}, de puissance active $P=${P}$ kW, le $\\cos\\varphi_1$ mesuré est de $${fr(cosPhi1, 2)}$. Le fournisseur d'énergie exige un $\\cos\\varphi_2=${fr(cosPhi2, 2)}$ pour éviter toute pénalité.<br/><br/>Calcule la puissance réactive $Q_c$ de la batterie de condensateurs à installer (en kVAR, arrondie au dixième).`,
          answer: Qc,
          tolerance: Math.max(1, Qc * 0.05),
          unit: 'kVAR',
          hint: 'Calcule $\\tan\\varphi_1$ et $\\tan\\varphi_2$ à partir des $\\cos\\varphi$, puis applique $Q_c=P\\times(\\tan\\varphi_1-\\tan\\varphi_2)$.',
          solution: [
            `$\\tan\\varphi_1 = \\tan(\\arccos(${fr(cosPhi1, 2)})) \\approx ${fr(parseFloat(tan1.toFixed(3)), 3)}$.`,
            `$\\tan\\varphi_2 = \\tan(\\arccos(${fr(cosPhi2, 2)})) \\approx ${fr(parseFloat(tan2.toFixed(3)), 3)}$.`,
            `$Q_c = P\\times(\\tan\\varphi_1-\\tan\\varphi_2) = ${P}\\times(${fr(parseFloat(tan1.toFixed(3)), 3)} - ${fr(parseFloat(tan2.toFixed(3)), 3)}) \\approx ${fr(Qc, 1)}$ kVAR.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un site industriel a une puissance active $P=120$ kW et un $\\cos\\varphi_1=0{,}70$, jugé trop faible par le fournisseur d\'énergie qui applique une pénalité. Par ailleurs, l\'exploitant constate que la phase 1 de son TGBT est nettement plus chargée que les phases 2 et 3, et souhaite mettre en place un délestage du ballon d\'ECS collectif en cas de pointe de puissance.',
      tasks: [
        'Calculer la puissance réactive $Q_c$ nécessaire pour relever le $\\cos\\varphi$ à $0{,}95$.',
        'Le déséquilibre des phases constaté au TGBT relève-t-il de la compensation de l\'énergie réactive ou d\'un autre levier ? Lequel ?',
        'Le ballon d\'ECS collectif est-il un bon candidat pour un délestage ? Justifier.',
        'Ces trois leviers (compensation, équilibrage des phases, délestage du ballon ECS) peuvent-ils être mis en œuvre simultanément sur ce site ?'
      ],
      solutions: [
        '$\\tan\\varphi_1=\\tan(\\arccos(0{,}70))\\approx 1{,}020$. $\\tan\\varphi_2=\\tan(\\arccos(0{,}95))\\approx 0{,}329$. $Q_c=120\\times(1{,}020-0{,}329)\\approx 82{,}9$ kVAR.',
        'Le déséquilibre entre phases relève de l\'<strong>équilibrage des phases</strong>, pas de la compensation réactive : c\'est un problème de répartition des charges monophasées sur les trois phases, indépendant du $\\cos\\varphi$ global de l\'installation.',
        'Oui : un ballon d\'ECS collectif dispose généralement d\'une <strong>inertie thermique</strong> importante (l\'eau reste chaude plusieurs heures après la fin du chauffage) — il peut donc être coupé quelques dizaines de minutes en cas de pointe de puissance sans dégrader le confort des usagers, ce qui en fait un bon candidat au délestage, contrairement à un équipement de confort immédiat.',
        'Oui : ces trois leviers sont <strong>indépendants et complémentaires</strong>. La compensation réactive (batterie de condensateurs) agit sur la qualité de l\'énergie, l\'équilibrage des phases sur la répartition des charges, et le délestage du ballon ECS sur la puissance de pointe appelée — rien n\'empêche de les combiner sur une même installation.'
      ],
      finalAnswer: 'Batterie de condensateurs nécessaire : environ $82{,}9$ kVAR. Le déséquilibre de phases se traite par équilibrage (pas par compensation réactive), et le ballon d\'ECS collectif, grâce à son inertie thermique, est un bon candidat au délestage — les trois actions sont cumulables.'
    },

    evaluation: {
      title: 'Évaluation — Gestion de l\'énergie électrique',
      duration: '20 min',
      questions: [
        {
          statement: 'Une installation a $P=80$ kW et $\\cos\\varphi_1=0{,}80$. Le fournisseur exige $\\cos\\varphi_2=0{,}95$. Calculer $\\tan\\varphi_1$ (arrondi au millième).',
          type: 'numeric',
          answer: 0.75,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: '$\\tan\\varphi_1=\\tan(\\arccos(0{,}80))\\approx 0{,}750$.'
        },
        {
          statement: 'Pour cette même installation ($P=80$ kW, $\\tan\\varphi_1\\approx 0{,}750$, $\\tan\\varphi_2\\approx 0{,}329$ pour $\\cos\\varphi_2=0{,}95$), calculer la puissance réactive $Q_c$ à compenser (en kVAR, arrondie au dixième).',
          type: 'numeric',
          answer: 33.7,
          tolerance: 1.5,
          unit: 'kVAR',
          points: 3,
          correction: '$Q_c=P\\times(\\tan\\varphi_1-\\tan\\varphi_2)=80\\times(0{,}750-0{,}329)\\approx 33{,}7$ kVAR.'
        },
        {
          statement: 'L\'équilibrage des phases d\'une installation triphasée a pour objectif de :',
          type: 'multiple-choice',
          options: [
            'Relever le $\\cos\\varphi$ global de l\'installation',
            'Répartir les charges monophasées sur les trois phases pour éviter qu\'une seule soit surchargée',
            'Réduire la puissance active totale consommée',
            'Remplacer la batterie de condensateurs'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'équilibrage des phases répartit les charges monophasées sur les trois phases, pour éviter qu\'une phase soit fortement chargée pendant que les deux autres restent sous-utilisées — un enjeu indépendant du $\\cos\\varphi$.'
        },
        {
          statement: 'Une facture d\'électricité comprend typiquement :',
          type: 'multiple-choice',
          options: [
            'Uniquement une part variable liée à l\'énergie consommée',
            'Uniquement un abonnement fixe, indépendant de la consommation',
            'Un abonnement lié à la puissance souscrite et une part variable liée à l\'énergie consommée selon le tarif horaire',
            'Uniquement la pénalité pour énergie réactive'
          ],
          answer: 2,
          points: 2,
          correction: 'Une facture combine toujours un abonnement (fonction de la puissance souscrite) et une part variable (énergie consommée, facturée selon le tarif applicable à l\'heure de consommation).'
        }
      ]
    }
  });
