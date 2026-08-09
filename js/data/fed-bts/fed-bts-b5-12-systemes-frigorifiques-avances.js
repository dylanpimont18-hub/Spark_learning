/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b5-12-systemes-frigorifiques-avances.js
   BTS FED — S8-B5-12 Systèmes frigorifiques avancés — multi-températures, cascade, taux de compression étagé
   Contenu qualitatif basé sur des principes physiques/techniques non controversés (pas de source web
   spécifique nécessaire) : systèmes multi-températures à vannes de régulation d'évaporation étagées,
   systèmes en cascade à deux cycles couplés thermiquement, taux de compression global multiplicatif.
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b5-12-systemes-frigorifiques-avances',
    level: 3, subject: 'fed',
    icon: '🔬',
    title: 'Systèmes frigorifiques avancés',
    subtitle: 'Systèmes multi-températures et systèmes en cascade, taux de compression étagé',
    keywords: ['Multi-températures', 'Système en cascade', 'Taux de compression', 'Froid industriel', 'Étagement'],
    physics: 'Desservir à la fois une chambre positive à $+4\\,°C$ et une chambre négative à $-20\\,°C$ depuis un même groupe, ou descendre jusqu\'à $-60\\,°C$ pour de la congélation profonde : ces besoins avancés sortent du cadre d\'un simple cycle frigorifique à un seul étage, et appellent des architectures <strong>multi-températures</strong> ou en <strong>cascade</strong>.',

    cours: {
      intro: 'Un cycle frigorifique « classique » à un seul étage de compression dessert généralement un unique niveau de température d\'évaporation. Certaines applications exigent cependant des architectures plus élaborées, qui restent <strong>hors du champ courant</strong> de l\'option GCF mais dont tout professionnel du froid doit connaître le principe.<br/><br/>Les <strong>systèmes multi-températures</strong> permettent, à partir d\'un même groupe de production frigorifique, de desservir plusieurs niveaux de température distincts — par exemple une chambre positive à $+4\\,°C$ et une chambre négative à $-20\\,°C$ sur la même installation. Cela est rendu possible grâce à des <strong>vannes de régulation d\'évaporation étagées</strong>, installées sur chaque évaporateur, qui adaptent la pression (et donc la température) d\'évaporation propre à chaque utilisation, tout en partageant un même compresseur ou une même batterie de compresseurs.<br/><br/>Les <strong>systèmes en cascade</strong> répondent, eux, à un besoin différent : atteindre de <strong>très basses températures</strong> (typiquement de $-50\\,°C$ à $-80\\,°C$, pour du froid industriel ou de la congélation profonde), difficilement accessibles avec un seul étage de compression. Le principe consiste à superposer <strong>deux cycles frigorifiques distincts</strong> : le condenseur du cycle « basse température » est refroidi par l\'évaporateur du cycle « haute température ». Les deux cycles sont donc couplés thermiquement à ce point intermédiaire (un échangeur commun), mais chacun conserve son propre fluide frigorigène et son propre compresseur, choisis selon la plage de température qui lui est propre.<br/><br/>L\'intérêt de la cascade, par rapport à un seul étage qui devrait développer à lui seul un taux de compression énorme, est d\'améliorer le <strong>rendement global</strong> de l\'installation : répartir la compression totale sur deux étages permet à chacun de travailler avec un taux de compression plus modéré, évitant une température de refoulement excessive et le mauvais rendement qu\'imposerait un unique étage surchargé.',
      definitions: [
        { term: 'Système multi-températures', def: 'Installation frigorifique qui dessert, à partir d\'un même groupe de production, plusieurs niveaux de température d\'évaporation distincts, grâce à des vannes de régulation d\'évaporation étagées sur chaque utilisation.' },
        { term: 'Système en cascade', def: 'Architecture superposant deux cycles frigorifiques distincts (fluides et compresseurs propres à chacun), couplés thermiquement au niveau d\'un échangeur intermédiaire : le condenseur du cycle basse température est refroidi par l\'évaporateur du cycle haute température.' },
        { term: 'Taux de compression', def: 'Rapport entre la pression de condensation et la pression d\'évaporation d\'un étage de compression : $\\tau = P_{cond}/P_{évap}$.' },
        { term: 'Taux de compression global (système étagé)', def: 'Produit des taux de compression de chaque étage d\'un système en cascade ou multi-étagé : $\\tau_{global} = \\tau_1 \\times \\tau_2$.' }
      ],
      method: {
        title: 'Calculer le taux de compression global d\'un système frigorifique en cascade',
        steps: [
          '<strong>Identifier</strong> les deux étages du système en cascade : l\'étage « haute température » et l\'étage « basse température ».',
          '<strong>Relever ou calculer</strong> le taux de compression de chaque étage : $\\tau_i = P_{condensation,i}/P_{évaporation,i}$.',
          '<strong>Multiplier</strong> les deux taux de compression pour obtenir le taux global : $\\tau_{global} = \\tau_1 \\times \\tau_2$.',
          '<strong>Comparer</strong> ce taux global à ce qu\'un seul étage aurait dû développer pour atteindre la même plage de température, afin d\'apprécier l\'intérêt de l\'étagement.',
          '<strong>Retenir</strong> que des taux modérés à chaque étage permettent d\'atteindre un taux global élevé, sans les inconvénients (température de refoulement excessive, mauvais rendement) d\'un seul étage surchargé.'
        ]
      },
      example: {
        statement: 'Un système en cascade destiné à de la congélation profonde comporte un étage « haute température » avec un taux de compression $\\tau_1=4$, et un étage « basse température » avec un taux de compression $\\tau_2=5$.<br/><br/>Calculer le taux de compression global de ce système en cascade.',
        steps: [
          'Le taux de compression global est le produit des deux taux étagés : $\\tau_{global} = \\tau_1 \\times \\tau_2$.',
          'Soit : $\\tau_{global} = 4 \\times 5 = 20$.'
        ],
        answer: 'Le système en cascade atteint un taux de compression global de <strong>$20$</strong>, réparti sur deux étages modérés ($\\tau_1=4$ et $\\tau_2=5$) — un seul étage aurait dû développer ce taux de $20$ à lui seul, avec une température de refoulement excessive et un rendement dégradé.'
      },
      formulas: [
        '$\\tau = P_{cond}/P_{évap}$ (taux de compression d\'un étage)',
        '$\\tau_{global} = \\tau_1 \\times \\tau_2$ (taux de compression global d\'un système en cascade à deux étages)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Système en cascade à deux cycles couplés',
        title: 'Deux cycles frigorifiques distincts, couplés par un échangeur intermédiaire',
        description: 'Le condenseur du cycle basse température est refroidi par l\'évaporateur du cycle haute température, chaque cycle conservant son propre fluide et son propre compresseur.',
        svg: `
          <svg viewBox="0 0 460 260" role="img" aria-labelledby="cascade12-graph-title cascade12-graph-desc">
            <title id="cascade12-graph-title">Systeme en cascade a deux cycles frigorifiques couples</title>
            <desc id="cascade12-graph-desc">Deux boucles de cycle frigorifique superposees : la boucle haute temperature en haut avec compresseur et condenseur, la boucle basse temperature en bas avec compresseur et evaporateur, reliees par un echangeur intermediaire commun.</desc>

            <rect class="frame-line" x="40" y="20" width="100" height="40" fill="none"></rect>
            <text class="label-soft" x="90" y="45" text-anchor="middle">Compresseur HT</text>

            <rect class="frame-line" x="320" y="20" width="100" height="40" fill="none"></rect>
            <text class="label-soft" x="370" y="45" text-anchor="middle">Condenseur HT</text>

            <rect class="frame-line" x="160" y="100" width="140" height="40" fill="none"></rect>
            <text class="label-soft" x="230" y="122" text-anchor="middle">Échangeur intermédiaire</text>
            <text class="label-soft" x="230" y="135" text-anchor="middle">(cascade)</text>

            <rect class="frame-line" x="40" y="180" width="100" height="40" fill="none"></rect>
            <text class="label-soft" x="90" y="205" text-anchor="middle">Évaporateur BT</text>

            <rect class="frame-line" x="320" y="180" width="100" height="40" fill="none"></rect>
            <text class="label-soft" x="370" y="205" text-anchor="middle">Compresseur BT</text>

            <line class="curve-main" x1="140" y1="40" x2="320" y2="40"></line>
            <line class="curve-main" x1="90" y1="60" x2="180" y2="100"></line>
            <line class="curve-main" x1="370" y1="60" x2="280" y2="100"></line>

            <line class="curve-main" x1="140" y1="200" x2="320" y2="200"></line>
            <line class="curve-main" x1="90" y1="180" x2="180" y2="140"></line>
            <line class="curve-main" x1="370" y1="180" x2="280" y2="140"></line>
          </svg>
        `,
        notes: [
          'Le cycle <strong>haute température</strong> (haut) comporte son propre compresseur et son propre condenseur, avec son fluide dédié.',
          'Le cycle <strong>basse température</strong> (bas) comporte son propre compresseur et son propre évaporateur, avec un fluide adapté aux très basses températures.',
          'Un <strong>échangeur intermédiaire</strong> couple thermiquement les deux cycles : le condenseur du cycle BT y est refroidi par l\'évaporateur du cycle HT.'
        ],
        reading: 'Repère les deux boucles superposées, reliées uniquement par l\'échangeur central — chaque fluide reste confiné à son propre cycle.',
        caption: 'Un système en cascade superpose deux cycles frigorifiques distincts, couplés thermiquement à un point intermédiaire.'
      },
      recap: [
        'Les <strong>systèmes multi-températures</strong> desservent plusieurs niveaux de température depuis un même groupe, via des vannes de régulation d\'évaporation étagées.',
        'Les <strong>systèmes en cascade</strong> superposent deux cycles distincts (fluides et compresseurs propres), couplés par un échangeur intermédiaire.',
        'La cascade permet d\'atteindre de très basses températures ($-50\\,°C$ à $-80\\,°C$) inaccessibles efficacement à un seul étage.',
        'Taux de compression d\'un étage : $\\tau = P_{cond}/P_{évap}$ ; taux global d\'une cascade : $\\tau_{global} = \\tau_1 \\times \\tau_2$.',
        'Répartir la compression sur deux étages modérés améliore le <strong>rendement global</strong>, par rapport à un seul étage surchargé.'
      ],
      piege: 'Le piège classique est de confondre un système <strong>multi-températures</strong> (un seul cycle, plusieurs évaporateurs à pressions différentes via des vannes étagées) avec un système <strong>en cascade</strong> (deux cycles distincts, deux fluides, deux compresseurs, couplés par un échangeur). Ce sont deux réponses à des besoins différents : desservir plusieurs niveaux de température modérés pour le premier, atteindre une température extrême pour le second — l\'un n\'est pas simplement une variante de l\'autre.'
    },

    quiz: [
      {
        q: 'Un système multi-températures permet de :',
        options: [
          'Desservir plusieurs niveaux de température distincts à partir d\'un même groupe de production, via des vannes de régulation d\'évaporation étagées',
          'Remplacer complètement le besoin d\'un détendeur',
          'Fonctionner sans aucun compresseur',
          'Atteindre systématiquement des températures inférieures à $-50\\,°C$'
        ],
        answer: 0,
        correction: 'Un système multi-températures dessert plusieurs niveaux de température (par exemple positif et négatif) à partir d\'un même groupe, grâce à des vannes de régulation d\'évaporation propres à chaque utilisation.'
      },
      {
        q: 'Dans un système frigorifique en cascade, le couplage entre les deux cycles se fait :',
        options: [
          'En mélangeant les deux fluides frigorigènes dans un même compresseur',
          'Via un échangeur intermédiaire, où le condenseur du cycle basse température est refroidi par l\'évaporateur du cycle haute température',
          'En reliant directement les deux détendeurs entre eux',
          'Il n\'y a jamais de couplage, les deux cycles sont totalement indépendants'
        ],
        answer: 1,
        correction: 'Les deux cycles restent distincts (fluides et compresseurs propres) mais sont couplés thermiquement au niveau d\'un échangeur intermédiaire commun.'
      },
      {
        q: 'L\'intérêt principal d\'étager la compression sur deux cycles (cascade) plutôt que d\'utiliser un seul étage est de :',
        options: [
          'Réduire le nombre de composants de l\'installation',
          'Répartir le taux de compression total, évitant une température de refoulement excessive et un mauvais rendement sur un seul étage surchargé',
          'Supprimer totalement le besoin de fluide frigorigène',
          'Éviter d\'avoir à réguler la température d\'évaporation'
        ],
        answer: 1,
        correction: 'Un seul étage devrait développer un taux de compression énorme pour atteindre de très basses températures, avec une température de refoulement excessive et un mauvais rendement ; l\'étagement répartit cette charge sur deux compresseurs aux taux plus modérés.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un système en cascade destiné à de la congélation profonde en agroalimentaire',
          'une installation frigorifique industrielle produisant du froid très négatif',
          'un laboratoire nécessitant des températures de conservation extrêmement basses',
          'une centrale frigorifique en cascade pour un entrepôt de surgélation'
        ]);
        const tau1 = pick([3, 4, 5, 6]);
        const tau2 = pick([3, 4, 5, 6]);
        const tauGlobal = tau1 * tau2;
        return {
          statement: `Dans ${contexte}, le système en cascade comporte un étage haute température avec un taux de compression $\\tau_1=${tau1}$, et un étage basse température avec un taux de compression $\\tau_2=${tau2}$.<br/><br/>Calcule le taux de compression global $\\tau_{global}$ de ce système en cascade.`,
          answer: tauGlobal,
          tolerance: 0,
          unit: '',
          hint: 'Applique $\\tau_{global} = \\tau_1 \\times \\tau_2$.',
          solution: [
            `$\\tau_{global} = \\tau_1 \\times \\tau_2 = ${tau1} \\times ${tau2} = ${tauGlobal}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un bureau d\'études doit choisir entre un système à un seul étage et un système en cascade pour atteindre une température d\'évaporation très basse, nécessaire à de la congélation profonde. Le taux de compression global nécessaire, tous étages confondus, est estimé à $\\tau_{global}=24$.',
      tasks: [
        'Pourquoi un seul étage de compression n\'est-il généralement pas adapté pour atteindre un taux de compression aussi élevé ?',
        'Si le système en cascade retenu répartit ce taux global sur deux étages avec $\\tau_1=6$, calculer le taux $\\tau_2$ nécessaire sur le second étage.',
        'Expliquer, en une phrase, le principe du couplage thermique entre les deux cycles de cette cascade.',
        'Un système multi-températures (et non en cascade) serait-il adapté à ce même besoin de congélation profonde à très basse température ? Justifier.'
      ],
      solutions: [
        'Un seul étage devrait développer à lui seul un taux de compression très élevé, ce qui entraînerait une température de refoulement excessive au compresseur et un mauvais rendement global de l\'installation.',
        'Puisque $\\tau_{global} = \\tau_1 \\times \\tau_2$, on a $\\tau_2 = \\tau_{global}/\\tau_1 = 24/6 = 4$.',
        'Le condenseur du cycle basse température est refroidi par l\'évaporateur du cycle haute température, au niveau d\'un échangeur intermédiaire commun aux deux cycles, chacun conservant son propre fluide et son propre compresseur.',
        'Non : un système multi-températures dessert plusieurs niveaux de température modérés à partir d\'un même cycle via des vannes étagées, mais ne permet pas d\'atteindre les très basses températures visées ici, qui nécessitent l\'étagement de la compression propre à la cascade.'
      ],
      finalAnswer: 'Avec $\\tau_1=6$, il faut $\\tau_2=4$ sur le second étage pour atteindre le taux global de $24$ visé — un système multi-températures ne serait pas adapté, car il ne répond pas au besoin de très basse température, contrairement à la cascade.'
    },

    evaluation: {
      title: 'Évaluation — Systèmes frigorifiques avancés',
      duration: '15 min',
      questions: [
        {
          statement: 'Un système en cascade a un étage haute température de taux $\\tau_1=5$ et un étage basse température de taux $\\tau_2=6$. Calculer le taux de compression global $\\tau_{global}$.',
          type: 'numeric',
          answer: 30,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: '$\\tau_{global} = \\tau_1 \\times \\tau_2 = 5 \\times 6 = 30$.'
        },
        {
          statement: 'Un système multi-températures permet principalement de :',
          type: 'multiple-choice',
          options: [
            'Desservir plusieurs niveaux de température distincts à partir d\'un même groupe de production',
            'Atteindre systématiquement des températures de $-80\\,°C$',
            'Se passer de tout compresseur',
            'Fonctionner uniquement avec un seul évaporateur'
          ],
          answer: 0,
          points: 2,
          correction: 'C\'est le principe même du système multi-températures : plusieurs niveaux de température desservis depuis un même groupe, via des vannes de régulation d\'évaporation étagées.'
        },
        {
          statement: 'Dans un système en cascade, chaque cycle utilise :',
          type: 'multiple-choice',
          options: [
            'Le même fluide frigorigène et le même compresseur que l\'autre cycle',
            'Son propre fluide frigorigène et son propre compresseur, couplés thermiquement à l\'autre cycle via un échangeur',
            'Aucun compresseur, uniquement des vannes de régulation',
            'Un détendeur commun aux deux cycles'
          ],
          answer: 1,
          points: 2,
          correction: 'Chaque cycle d\'une cascade conserve son propre fluide et son propre compresseur ; seul un échangeur intermédiaire les couple thermiquement.'
        },
        {
          statement: 'Pourquoi répartir la compression sur deux étages (cascade) plutôt que sur un seul améliore-t-il le rendement global ?',
          type: 'multiple-choice',
          options: [
            'Parce que cela supprime le besoin de fluide frigorigène',
            'Parce que chaque étage travaille avec un taux de compression plus modéré, évitant une température de refoulement excessive',
            'Parce que cela réduit le nombre total de composants de l\'installation',
            'Parce que cela élimine le besoin d\'un échangeur intermédiaire'
          ],
          answer: 1,
          points: 3,
          correction: 'Un seul étage devrait développer un taux de compression énorme pour atteindre de très basses températures, avec une température de refoulement excessive et un mauvais rendement ; répartir la compression sur deux étages modérés évite cet écueil.'
        }
      ]
    }
  });
