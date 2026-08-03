/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b9-comptage-energies.js
   BTS FED — S8-B9 Comptage des énergies — index de compteur, coefficient multiplicateur
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b9-comptage-energies',
    level: 3, subject: 'fed',
    icon: '🔢',
    title: 'Comptage des énergies',
    subtitle: 'Compteurs divisionnaires, coefficient multiplicateur, suivi des consommations',
    keywords: ['Comptage', 'Compteur divisionnaire', 'Coefficient multiplicateur', 'Sous-comptage'],
    physics: 'Sur une installation de forte puissance, le compteur n\'affiche pas directement l\'énergie consommée : il mesure un courant réduit par un <strong>transformateur de courant</strong>, et c\'est un <strong>coefficient multiplicateur</strong> qu\'il faut appliquer pour retrouver la consommation réelle — un oubli fréquent qui peut fausser une facture ou un bilan énergétique d\'un facteur dix ou plus.',

    cours: {
      intro: 'Le <strong>comptage des énergies</strong> permet de suivre la consommation d\'un bâtiment, globalement (compteur général) ou finement (compteurs <strong>divisionnaires</strong>, aussi appelés sous-comptage), par usage (chauffage, ECS, éclairage, prises) ou par zone (par logement, par étage, par local commercial).<br/><br/>Les compteurs modernes sont souvent <strong>communicants</strong> : ils transmettent automatiquement leurs index à un système de télérelevé ou à la GTB (module B8-1), sans intervention humaine, ce qui permet un suivi fin des consommations (courbes de charge, détection de dérives).<br/><br/>Sur les installations de forte puissance (fort courant), le compteur ne mesure pas directement le courant total : il est associé à un <strong>transformateur de courant (TC)</strong>, qui réduit le courant mesuré dans un rapport connu (par exemple $100/5$ A, soit un rapport $20$). L\'énergie affichée par le compteur doit alors être multipliée par ce <strong>coefficient multiplicateur $K$</strong> pour retrouver l\'énergie réellement consommée.',
      definitions: [
        { term: 'Compteur divisionnaire (sous-comptage)', def: 'Compteur secondaire installé en aval du compteur général, permettant de mesurer la consommation d\'un usage, d\'une zone ou d\'un logement particulier au sein d\'un bâtiment plus vaste.' },
        { term: 'Compteur communicant', def: 'Compteur capable de transmettre automatiquement ses index (télérelevé) à un système de suivi centralisé, sans relevé manuel — facilite le suivi fin des consommations et la détection de dérives.' },
        { term: 'Transformateur de courant (TC)', def: 'Dispositif qui réduit un courant fort dans un rapport connu (par exemple $100/5$ A) pour permettre sa mesure par un compteur standard, non dimensionné pour le courant réel de l\'installation.' },
        { term: 'Coefficient multiplicateur $K$', def: 'Rapport à appliquer à l\'index affiché par le compteur pour obtenir l\'énergie réellement consommée — correspond au rapport de transformation du TC associé (ex. $K=20$ pour un TC $100/5$ A).' },
        { term: 'Énergie réelle consommée $E_{\\text{réelle}}$', def: 'Énergie effectivement consommée entre deux relevés : $E_{\\text{réelle}} = (\\text{Index}_{\\text{fin}}-\\text{Index}_{\\text{début}}) \\times K$.' }
      ],
      method: {
        title: 'Calculer une consommation réelle à partir d\'index de compteur avec coefficient multiplicateur',
        steps: [
          '<strong>Relever les deux index</strong> du compteur (début et fin de période).',
          '<strong>Calculer l\'énergie affichée</strong> $\\Delta\\text{Index} = \\text{Index}_{\\text{fin}}-\\text{Index}_{\\text{début}}$.',
          '<strong>Identifier le coefficient multiplicateur</strong> $K$ de l\'installation (donnée sur la plaque signalétique du compteur ou du TC associé).',
          '<strong>Calculer l\'énergie réelle</strong> $E_{\\text{réelle}} = \\Delta\\text{Index} \\times K$.',
          '<strong>Vérifier la cohérence</strong> du résultat avec la puissance souscrite et la durée de la période, pour détecter une éventuelle erreur de saisie du coefficient.'
        ]
      },
      example: {
        statement: 'Un compteur divisionnaire, associé à un transformateur de courant de rapport $100/5$ A (soit $K=20$), affiche un index de $1\\,250$ kWh en début de mois et $1\\,780$ kWh en fin de mois.<br/><br/>Calculer l\'énergie réellement consommée sur ce mois.',
        steps: [
          'Énergie affichée : $\\Delta\\text{Index} = 1\\,780-1\\,250 = 530$ kWh.',
          'Coefficient multiplicateur : $K = 100/5 = 20$.',
          '$E_{\\text{réelle}} = 530 \\times 20 = 10\\,600$ kWh.'
        ],
        answer: '$E_{\\text{réelle}} = 10\\,600$ kWh : oublier le coefficient multiplicateur aurait conduit à sous-estimer la consommation réelle d\'un facteur $20$, une erreur considérable sur une facture ou un bilan énergétique.'
      },
      formulas: [
        '$E_{\\text{réelle}} = (\\text{Index}_{\\text{fin}}-\\text{Index}_{\\text{début}}) \\times K$ (énergie réelle consommée)',
        '$K = I_{\\text{primaire}}/I_{\\text{secondaire}}$ (coefficient multiplicateur, rapport de transformation du TC)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Du courant réel à l\'index affiché',
        title: 'Le TC réduit le courant, le coefficient K restitue la vraie valeur',
        description: 'Le transformateur de courant réduit le courant fort de l\'installation à une valeur mesurable par le compteur. L\'index affiché doit ensuite être multiplié par le coefficient K pour retrouver l\'énergie réellement consommée.',
        svg: `
          <svg viewBox="0 0 480 200" role="img" aria-labelledby="comptage-graph-title comptage-graph-desc">
            <title id="comptage-graph-title">Chaine de mesure avec transformateur de courant</title>
            <desc id="comptage-graph-desc">Trois boites reliees par des fleches : courant reel de l'installation, reduit par le transformateur de courant TC, mesure par le compteur qui affiche un index, a multiplier par K pour retrouver l'energie reelle.</desc>

            <rect class="frame-line" x="20" y="75" width="110" height="50" fill="none"></rect>
            <text class="label-soft" x="75" y="100" text-anchor="middle">Courant réel</text>
            <text class="label-soft" x="75" y="115" text-anchor="middle">(installation)</text>

            <line class="curve-main" x1="130" y1="100" x2="175" y2="100" marker-end="url(#arrow-fed-cpt)"></line>
            <text class="annotation-label" x="132" y="90" text-anchor="start">TC</text>

            <rect class="frame-line" x="175" y="75" width="110" height="50" fill="none"></rect>
            <text class="label-soft" x="230" y="105" text-anchor="middle">Compteur</text>

            <line class="curve-main" x1="285" y1="100" x2="330" y2="100" marker-end="url(#arrow-fed-cpt)"></line>
            <text class="annotation-label" x="287" y="90" text-anchor="start">× K</text>

            <rect class="frame-line" x="330" y="75" width="130" height="50" fill="none"></rect>
            <text class="label-soft" x="395" y="105" text-anchor="middle">Énergie réelle</text>

            <defs>
              <marker id="arrow-fed-cpt" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <text class="label-soft" x="240" y="165" text-anchor="middle">Eréelle = ΔIndex × K</text>
          </svg>
        `,
        notes: [
          'Le <strong>transformateur de courant (TC)</strong> réduit le courant réel de l\'installation à une valeur mesurable par le compteur.',
          'Le compteur affiche un <strong>index</strong> basé sur ce courant réduit, pas sur le courant réel.',
          'Le <strong>coefficient multiplicateur $K$</strong> restitue l\'énergie réellement consommée à partir de l\'écart d\'index affiché.'
        ],
        reading: 'Suis la chaîne de gauche à droite : le courant réel est réduit par le TC avant mesure, puis l\'index affiché doit être multiplié par K pour revenir à l\'énergie réelle.',
        caption: 'Chaîne de mesure d\'un comptage d\'énergie associé à un transformateur de courant.'
      },
      recap: [
        'Le <strong>sous-comptage</strong> (compteurs divisionnaires) permet un suivi fin des consommations par usage ou par zone.',
        'Les compteurs <strong>communicants</strong> transmettent automatiquement leurs index, sans relevé manuel.',
        'Un <strong>transformateur de courant (TC)</strong> réduit le courant fort d\'une installation pour permettre sa mesure.',
        'L\'énergie réelle consommée : $E_{\\text{réelle}} = (\\text{Index}_{\\text{fin}}-\\text{Index}_{\\text{début}}) \\times K$, avec $K$ le coefficient multiplicateur du TC.',
        'Oublier le coefficient $K$ conduit à sous-estimer très largement la consommation réelle — une erreur classique à vérifier systématiquement sur les installations de forte puissance.'
      ],
      piege: 'Le piège classique est de lire directement l\'écart d\'index d\'un compteur associé à un TC comme s\'il s\'agissait de l\'énergie réelle, sans appliquer le coefficient multiplicateur $K$ : sur une installation avec $K=20$, cela revient à sous-estimer la consommation d\'un facteur $20$. Attention aussi à ne pas confondre le coefficient multiplicateur d\'un compteur (lié à son TC) avec un simple facteur de conversion d\'unité — c\'est une caractéristique propre à chaque installation, à vérifier sur la plaque signalétique du compteur ou du TC, jamais supposée universelle.'
    },

    quiz: [
      {
        q: 'Le rôle d\'un transformateur de courant (TC) associé à un compteur est de :',
        options: [
          'Augmenter artificiellement la consommation mesurée',
          'Réduire le courant fort de l\'installation à une valeur mesurable par un compteur standard',
          'Remplacer entièrement le compteur',
          'Supprimer le besoin de relevé d\'index'
        ],
        answer: 1,
        correction: 'Le TC réduit le courant réel (souvent élevé) dans un rapport connu, pour permettre sa mesure par un compteur dimensionné pour un courant plus faible.'
      },
      {
        q: 'Pour un compteur avec un coefficient multiplicateur $K=20$, un écart d\'index de $100$ kWh correspond à une énergie réelle de :',
        options: [
          '$100$ kWh',
          '$120$ kWh',
          '$2\\,000$ kWh',
          '$5$ kWh'
        ],
        answer: 2,
        correction: '$E_{\\text{réelle}} = \\Delta\\text{Index} \\times K = 100 \\times 20 = 2\\,000$ kWh.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un compteur divisionnaire de chaufferie collective',
          'un compteur général d\'un bâtiment tertiaire',
          'un sous-comptage d\'un atelier industriel',
          'un compteur de tête d\'une colonne électrique d\'immeuble'
        ]);
        const K = pick([1, 5, 10, 20, 40]);
        const idxDebut = rand(800, 2000);
        const conso = rand(150, 600);
        const idxFin = idxDebut + conso;
        const Ereelle = conso * K;
        return {
          statement: `Dans ${contexte}, le coefficient multiplicateur du compteur est $K=${K}$. L'index relevé est de $${idxDebut}$ kWh en début de période et $${idxFin}$ kWh en fin de période.<br/><br/>Calcule l'énergie réellement consommée $E_{\\text{réelle}}$ (en kWh).`,
          answer: Ereelle,
          tolerance: Math.max(10, Math.round(Ereelle * 0.02)),
          unit: 'kWh',
          hint: 'Calcule d\'abord $\\Delta\\text{Index}$, puis multiplie par $K$.',
          solution: [
            `$\\Delta\\text{Index} = ${idxFin} - ${idxDebut} = ${conso}$ kWh.`,
            `$E_{\\text{réelle}} = ${conso} \\times ${K} = ${Ereelle}$ kWh.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un immeuble tertiaire est équipé d\'un compteur général (sans TC, $K=1$) et de deux compteurs divisionnaires : l\'un pour la chaufferie (TC $200/5$ A), l\'autre pour l\'éclairage (TC $50/5$ A). Sur un mois, les écarts d\'index relevés sont : compteur général $\\Delta=18\\,400$ kWh, compteur chaufferie $\\Delta=410$ kWh, compteur éclairage $\\Delta=680$ kWh.',
      tasks: [
        'Calculer le coefficient multiplicateur $K$ de chacun des deux compteurs divisionnaires.',
        'Calculer l\'énergie réelle consommée par la chaufferie et par l\'éclairage sur ce mois.',
        'Calculer la part du compteur général expliquée par ces deux seuls usages (en %).',
        'Ce résultat est-il cohérent ? Expliquer en une phrase ce qu\'il faudrait vérifier si la somme des sous-comptages dépassait la consommation du compteur général.'
      ],
      solutions: [
        'Chaufferie : $K=200/5=40$. Éclairage : $K=50/5=10$.',
        'Chaufferie : $410\\times40=16\\,400$ kWh. Éclairage : $680\\times10=6\\,800$ kWh.',
        'Somme des deux usages : $16\\,400+6\\,800=23\\,200$ kWh.',
        'Ce résultat n\'est <strong>pas cohérent</strong> : la somme des sous-comptages ($23\\,200$ kWh) dépasse la consommation totale du compteur général ($18\\,400$ kWh), ce qui est physiquement impossible pour des usages en aval du compteur général. Il faudrait vérifier en priorité le coefficient multiplicateur saisi pour chaque compteur divisionnaire (rapport de TC), une erreur de saisie de $K$ étant la cause la plus fréquente de ce type d\'incohérence.'
      ],
      finalAnswer: 'Le calcul révèle une incohérence ($23\\,200$ kWh de sous-comptages pour $18\\,400$ kWh au compteur général), signe probable d\'une erreur de coefficient multiplicateur $K$ sur l\'un des compteurs divisionnaires — à vérifier avant toute exploitation de ces données.'
    },

    evaluation: {
      title: 'Évaluation — Comptage des énergies',
      duration: '15 min',
      questions: [
        {
          statement: 'Un compteur avec $K=15$ affiche un écart d\'index de $220$ kWh. Calculer l\'énergie réelle consommée (en kWh).',
          type: 'numeric',
          answer: 3300,
          tolerance: 50,
          unit: 'kWh',
          points: 3,
          correction: '$E_{\\text{réelle}} = 220\\times15 = 3\\,300$ kWh.'
        },
        {
          statement: 'Un compteur communicant, comparé à un compteur classique, présente l\'avantage de :',
          type: 'multiple-choice',
          options: [
            'Ne jamais nécessiter de coefficient multiplicateur',
            'Transmettre automatiquement ses index, facilitant le suivi fin des consommations',
            'Mesurer une énergie totalement différente',
            'Remplacer le besoin d\'un transformateur de courant'
          ],
          answer: 1,
          points: 2,
          correction: 'Le compteur communicant transmet automatiquement ses relevés (télérelevé), ce qui permet un suivi fin et régulier des consommations sans intervention manuelle.'
        },
        {
          statement: 'Le coefficient multiplicateur $K$ d\'un compteur associé à un TC $300/5$ A vaut :',
          type: 'multiple-choice',
          options: [
            '5',
            '60',
            '300',
            '1500'
          ],
          answer: 1,
          points: 2,
          correction: '$K = I_{\\text{primaire}}/I_{\\text{secondaire}} = 300/5 = 60$.'
        }
      ]
    }
  });
