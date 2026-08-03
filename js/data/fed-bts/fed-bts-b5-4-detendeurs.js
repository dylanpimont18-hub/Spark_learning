/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b5-4-detendeurs.js
   BTS FED — S8-B5-4 Détendeurs — types, régulation de la surchauffe
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b5-4-detendeurs',
    level: 3, subject: 'fed',
    icon: '🎚️',
    title: 'Détendeurs',
    subtitle: 'Types de détendeurs, régulation de la surchauffe',
    keywords: ['Détendeur thermostatique', 'Tube capillaire', 'Détendeur électronique', 'EEV', 'Surchauffe', 'Régulation'],
    physics: 'Le détendeur fait bien plus que « faire chuter la pression » : c\'est lui qui <strong>dose</strong>, en temps réel, la quantité de fluide injectée dans l\'évaporateur — trop peu, et la surchauffe explose ; trop, et le compresseur risque le coup de liquide. Un détendeur, c\'est donc un <strong>régulateur</strong> de la surchauffe étudiée au module B5-3.',

    cours: {
      intro: 'Le détendeur a déjà été présenté dans le cycle frigorifique (module A5) : il fait chuter brutalement la pression du fluide frigorigène liquide, provoquant une baisse de température, avant son retour à l\'évaporateur.<br/><br/>Mais tous les détendeurs ne se valent pas dans leur façon de doser le débit de fluide injecté. Trois grandes familles coexistent, du plus simple au plus précis, et leur point commun est de conditionner directement la <strong>surchauffe</strong> obtenue en sortie d\'évaporateur (module B5-3).',
      definitions: [
        { term: 'Détendeur thermostatique', def: 'Le plus courant en génie climatique. Un <strong>bulbe</strong> fixé sur la ligne d\'aspiration détecte la température du fluide en sortie d\'évaporateur, et pilote l\'ouverture d\'une vanne pour maintenir une <strong>surchauffe cible constante</strong>, généralement réglée entre $5$ et $8\\,K$.' },
        { term: 'Tube capillaire', def: 'Simple tube de très faible diamètre intérieur, qui crée une perte de charge calibrée par sa longueur et son diamètre — sans aucune régulation active. Utilisé sur les petits appareils à charge de fluide fixe (réfrigérateurs domestiques, petits climatiseurs), où les conditions de fonctionnement varient peu.' },
        { term: 'Détendeur électronique (EEV)', def: 'Vanne pilotée par une <strong>carte électronique</strong>, à partir de sondes de température et de pression placées à l\'évaporateur. Plus précis et plus réactif qu\'un détendeur thermostatique, il équipe les installations récentes à régulation fine (PAC inverter, régulation multi-évaporateurs).' },
        { term: 'Consigne de surchauffe', def: 'Valeur cible de surchauffe que le détendeur cherche à maintenir en ajustant son ouverture, typiquement $5$ à $8\\,K$ pour un détendeur thermostatique — un compromis entre protection du compresseur (éviter le coup de liquide) et bon rendement de l\'échange thermique (module B5-3).' },
        { term: 'Écart de régulation', def: 'Différence entre la surchauffe réellement mesurée et la consigne visée : $\\text{écart} = \\Delta T_{\\text{surch,mesurée}} - \\text{consigne}$. Un écart positif signale une surchauffe trop élevée (sous-alimentation), un écart négatif une surchauffe trop faible (risque de coup de liquide).' }
      ],
      method: {
        title: 'Analyser la réaction d\'un détendeur thermostatique à un écart de surchauffe',
        steps: [
          '<strong>Identifier le type de détendeur</strong> en présence : thermostatique (régulation par bulbe), capillaire (aucune régulation active) ou électronique EEV (régulation par carte électronique).',
          '<strong>Relever la surchauffe mesurée</strong> $\\Delta T_{\\text{surch,mesurée}}$ (calculée comme au module B5-3 : $T_{\\text{asp}} - T_{\\text{évap}}$).',
          '<strong>Relever la consigne de surchauffe</strong> visée par le réglage du détendeur (typiquement $5$ à $8\\,K$ pour un thermostatique).',
          '<strong>Calculer l\'écart</strong> $\\text{écart} = \\Delta T_{\\text{surch,mesurée}} - \\text{consigne}$.',
          '<strong>Conclure sur l\'action du détendeur</strong> : un écart positif (surchauffe trop élevée) doit conduire à <strong>ouvrir</strong> davantage la vanne (plus de fluide injecté) ; un écart négatif (surchauffe trop faible, risque de coup de liquide) doit conduire à <strong>fermer</strong> la vanne (moins de fluide injecté).'
        ]
      },
      example: {
        statement: 'Un détendeur thermostatique est réglé sur une consigne de surchauffe de $6\\,K$. Sur l\'installation, la surchauffe mesurée à l\'aspiration vaut $\\Delta T_{\\text{surch,mesurée}} = 9\\,K$.<br/><br/>Calculer l\'écart de régulation, et en déduire l\'action que doit produire le détendeur.',
        steps: [
          'Écart : $\\text{écart} = \\Delta T_{\\text{surch,mesurée}} - \\text{consigne} = 9 - 6 = 3\\,K$.',
          'L\'écart est <strong>positif</strong> : la surchauffe mesurée dépasse la consigne, ce qui traduit une sous-alimentation de l\'évaporateur en fluide frigorigène.'
        ],
        answer: 'Écart $= +3\\,K$ : le détendeur doit <strong>ouvrir davantage</strong> sa vanne pour injecter plus de fluide, faire redescendre la surchauffe vers la consigne de $6\\,K$, et ainsi restaurer un bon échange thermique à l\'évaporateur.'
      },
      formulas: [
        '$\\text{écart} = \\Delta T_{\\text{surch,mesurée}} - \\text{consigne}$ (écart de régulation du détendeur, en kelvins)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Boucle de régulation du détendeur thermostatique',
        title: 'Le bulbe pilote l\'ouverture de la vanne selon la surchauffe mesurée',
        description: 'Un bulbe fixé sur la ligne d\'aspiration mesure la température du fluide en sortie d\'évaporateur. Cette information est transmise à la vanne du détendeur, qui ajuste son ouverture pour maintenir la surchauffe proche de la consigne réglée.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="detend-graph-title detend-graph-desc">
            <title id="detend-graph-title">Boucle de regulation du detendeur thermostatique</title>
            <desc id="detend-graph-desc">Schema d'un evaporateur traverse par le fluide de gauche a droite, suivi d'une ligne d'aspiration. Un bulbe fixe sur la ligne d'aspiration mesure la temperature de sortie. Une ligne de commande relie ce bulbe a la vanne du detendeur, situee avant l'entree de l'evaporateur, qui ajuste l'ouverture du passage de fluide liquide selon l'ecart entre surchauffe mesuree et consigne.</desc>

            <!-- vanne detendeur -->
            <rect class="frame-line" x="40" y="110" width="70" height="40" fill="none"></rect>
            <text class="label-soft" x="75" y="135" text-anchor="middle">Vanne</text>

            <!-- evaporateur -->
            <rect class="frame-line" x="160" y="100" width="180" height="60" fill="none"></rect>
            <text class="label-soft" x="250" y="90" text-anchor="middle">Évaporateur</text>

            <!-- bulbe -->
            <circle class="frame-line" cx="400" cy="130" r="18" fill="none"></circle>
            <text class="annotation-label" x="400" y="165" text-anchor="middle">Bulbe</text>

            <!-- circulation fluide -->
            <line class="curve-main" x1="110" y1="130" x2="160" y2="130" marker-end="url(#arrow-fed-detend)"></line>
            <line class="curve-main" x1="340" y1="130" x2="382" y2="130" marker-end="url(#arrow-fed-detend)"></line>
            <line class="curve-main" x1="418" y1="130" x2="460" y2="130" marker-end="url(#arrow-fed-detend)"></line>
            <text class="tick-label" x="460" y="120" text-anchor="end">Vers compresseur</text>

            <!-- ligne de commande bulbe -> vanne -->
            <path class="guide-line" d="M400,112 L400,40 L75,40 L75,110" fill="none" marker-end="url(#arrow-fed-detend)"></path>
            <text class="annotation-label" x="240" y="30" text-anchor="middle">Commande selon surchauffe mesurée</text>

            <defs>
              <marker id="arrow-fed-detend" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <text class="label-soft" x="240" y="230" text-anchor="middle">écart = ΔT surch. mesurée − consigne</text>
          </svg>
        `,
        notes: [
          'Le <strong>bulbe</strong>, sur la ligne d\'aspiration, mesure en continu la température de sortie d\'évaporateur.',
          'Cette information remonte à la <strong>vanne</strong> du détendeur, en amont de l\'évaporateur.',
          'La vanne ajuste son ouverture pour que la surchauffe mesurée reste proche de la <strong>consigne</strong> réglée.'
        ],
        reading: 'Suis la boucle : le bulbe mesure la surchauffe en sortie, l\'information remonte vers la vanne d\'entrée, qui adapte le débit de fluide injecté en conséquence.',
        caption: 'Boucle de régulation d\'un détendeur thermostatique : le bulbe pilote l\'ouverture de la vanne pour maintenir la surchauffe proche de sa consigne.'
      },
      recap: [
        'Trois familles de détendeurs : <strong>thermostatique</strong> (bulbe + régulation active, le plus courant), <strong>capillaire</strong> (perte de charge fixe, sans régulation), <strong>électronique EEV</strong> (carte électronique, le plus précis).',
        'Le détendeur thermostatique régule pour maintenir une <strong>surchauffe cible</strong>, typiquement $5$ à $8\\,K$.',
        'L\'écart de régulation $\\text{écart} = \\Delta T_{\\text{surch,mesurée}} - \\text{consigne}$ indique l\'action à produire : écart positif → <strong>ouvrir</strong>, écart négatif → <strong>fermer</strong>.',
        'Cette régulation relie directement au module B5-3 : le détendeur est l\'organe qui <strong>maîtrise</strong> la surchauffe étudiée à l\'évaporateur.',
        'Le tube capillaire, sans régulation active, ne convient qu\'aux installations à charge de fluide fixe et conditions peu variables.'
      ],
      piege: 'Le piège classique est de confondre le rôle du <strong>détendeur</strong> avec celui d\'autres organes du circuit : ce n\'est ni le <strong>compresseur</strong> (qui ne fait qu\'aspirer et comprimer la vapeur, sans réguler le débit de liquide injecté), ni le <strong>pressostat</strong> (qui surveille des seuils de pression pour arrêter ou protéger l\'installation, mais ne dose pas le débit de fluide en continu). Seul le détendeur ajuste en permanence le débit de fluide injecté à l\'évaporateur pour maintenir la surchauffe proche de sa consigne — c\'est une régulation <strong>continue</strong>, à ne pas confondre avec une simple sécurité de seuil.'
    },

    quiz: [
      {
        q: 'Le détendeur thermostatique régule l\'ouverture de sa vanne à partir de :',
        options: [
          'La pression de condensation uniquement',
          'La température mesurée par un bulbe sur la ligne d\'aspiration, pour maintenir une surchauffe cible',
          'Le débit électrique du compresseur',
          'La température extérieure'
        ],
        answer: 1,
        correction: 'Un bulbe fixé sur la ligne d\'aspiration détecte la température de sortie d\'évaporateur ; le détendeur thermostatique ajuste son ouverture pour maintenir la surchauffe proche d\'une consigne, généralement $5$ à $8\\,K$.'
      },
      {
        q: 'Le tube capillaire, comparé au détendeur thermostatique :',
        options: [
          'Offre une régulation active plus précise',
          'Est une simple restriction calibrée, sans régulation active',
          'Est piloté par une carte électronique',
          'N\'existe que sur les groupes froids industriels'
        ],
        answer: 1,
        correction: 'Le tube capillaire crée une perte de charge calibrée par sa longueur et son diamètre, sans aucune régulation active — adapté aux petits appareils où les conditions varient peu.'
      },
      {
        q: 'Si l\'écart de régulation (surchauffe mesurée moins consigne) est négatif, le détendeur doit :',
        options: [
          'Ouvrir davantage sa vanne',
          'Fermer davantage sa vanne, pour éviter un risque de coup de liquide',
          'Ne rien faire, la situation est normale',
          'Arrêter le compresseur'
        ],
        answer: 1,
        correction: 'Un écart négatif signifie que la surchauffe mesurée est inférieure à la consigne : le fluide risque de ne pas être totalement vaporisé. Le détendeur doit fermer davantage sa vanne pour réduire le débit de fluide injecté.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un évaporateur de chambre froide positive',
          'un évaporateur de climatisation tertiaire',
          'un évaporateur de chambre froide négative',
          'un évaporateur de PAC air/eau'
        ]);
        const consigne = pick([5, 6, 7, 8]);
        const ecart = pick([-3, -2, -1, 1, 2, 3, 4]);
        const surchMesuree = parseFloat((consigne + ecart).toFixed(1));
        return {
          statement: `Sur ${contexte}, le détendeur thermostatique est réglé sur une consigne de surchauffe de $${fr(consigne, 0)}\\,K$. La surchauffe réellement mesurée à l'aspiration vaut $\\Delta T_{\\text{surch,mesurée}} = ${fr(surchMesuree, 1)}\\,K$.<br/><br/>Calcule l'écart de régulation $\\text{écart} = \\Delta T_{\\text{surch,mesurée}} - \\text{consigne}$ (en K).`,
          answer: ecart,
          tolerance: 0.3,
          unit: 'K',
          hint: 'Applique $\\text{écart} = \\Delta T_{\\text{surch,mesurée}} - \\text{consigne}$, puis regarde le signe obtenu.',
          solution: [
            `$\\text{écart} = \\Delta T_{\\text{surch,mesurée}} - \\text{consigne} = ${fr(surchMesuree, 1)} - ${fr(consigne, 0)} = ${fr(ecart, 1)}\\,K$.`,
            ecart > 0
              ? 'Écart positif : surchauffe trop élevée, sous-alimentation de l\'évaporateur — le détendeur doit ouvrir davantage.'
              : 'Écart négatif : surchauffe trop faible, risque de coup de liquide — le détendeur doit fermer davantage.'
          ]
        };
      }
    },

    probleme: {
      context: 'Un technicien règle le détendeur thermostatique d\'une chambre froide positive sur une consigne de surchauffe de $6\\,K$. Trois heures après la mise en service, la charge thermique de la chambre a fortement augmenté (nombreuses ouvertures de porte), et la surchauffe mesurée grimpe à $\\Delta T_{\\text{surch,mesurée,1}} = 11\\,K$. Le technicien intervient alors sur la vanne pour ramener la surchauffe à $\\Delta T_{\\text{surch,mesurée,2}} = 7\\,K$.',
      tasks: [
        'Calculer l\'écart de régulation avant l\'intervention du technicien.',
        'Expliquer la conséquence de cet écart sur le fonctionnement de l\'évaporateur.',
        'Calculer l\'écart de régulation après l\'intervention.',
        'Expliquer, en une phrase, ce que le technicien a probablement fait sur la vanne du détendeur, et pourquoi.'
      ],
      solutions: [
        '$\\text{écart}_1 = 11 - 6 = 5\\,K$.',
        'Un écart de $+5\\,K$ traduit une <strong>sous-alimentation</strong> nette de l\'évaporateur en fluide frigorigène : une grande partie de l\'échangeur ne sert qu\'à réchauffer de la vapeur déjà formée, ce qui dégrade l\'échange thermique et réduit la puissance frigorifique disponible, alors même que la charge thermique de la chambre a augmenté.',
        '$\\text{écart}_2 = 7 - 6 = 1\\,K$.',
        'Le technicien a <strong>ouvert davantage</strong> la vanne du détendeur, pour injecter plus de fluide dans l\'évaporateur et faire redescendre la surchauffe mesurée vers la consigne de $6\\,K$, restaurant ainsi un bon échange thermique adapté à la charge accrue de la chambre.'
      ],
      finalAnswer: 'Écart avant intervention $= +5\\,K$ (sous-alimentation), écart après intervention $= +1\\,K$ (proche de la consigne) : le technicien a ouvert la vanne du détendeur pour réadapter le débit de fluide à la charge thermique augmentée.'
    },

    evaluation: {
      title: 'Évaluation — Détendeurs',
      duration: '15 min',
      questions: [
        {
          statement: 'Un détendeur thermostatique est réglé sur une consigne de $7\\,K$. La surchauffe mesurée vaut $10\\,K$. Calculer l\'écart de régulation (en K).',
          type: 'numeric',
          answer: 3,
          tolerance: 0.3,
          unit: 'K',
          points: 2,
          correction: '$\\text{écart} = 10 - 7 = 3\\,K$ (écart positif : surchauffe trop élevée).'
        },
        {
          statement: 'Un détendeur est réglé sur une consigne de $8\\,K$. La surchauffe mesurée vaut $5\\,K$. Calculer l\'écart de régulation (en K).',
          type: 'numeric',
          answer: -3,
          tolerance: 0.3,
          unit: 'K',
          points: 2,
          correction: '$\\text{écart} = 5 - 8 = -3\\,K$ (écart négatif : risque de coup de liquide).'
        },
        {
          statement: 'Le détendeur adapté aux petits appareils à charge de fluide fixe, sans aucune régulation active, est :',
          type: 'multiple-choice',
          options: [
            'Le détendeur thermostatique',
            'Le tube capillaire',
            'Le détendeur électronique EEV',
            'La bouteille séparatrice'
          ],
          answer: 1,
          points: 2,
          correction: 'Le tube capillaire est une simple restriction calibrée, sans régulation active — utilisé sur les petits appareils (réfrigérateurs domestiques) où les conditions varient peu.'
        },
        {
          statement: 'Un écart de régulation positif (surchauffe mesurée supérieure à la consigne) doit conduire le détendeur à :',
          type: 'multiple-choice',
          options: [
            'Fermer davantage sa vanne',
            'Ouvrir davantage sa vanne, pour injecter plus de fluide',
            'Rester inchangé',
            'Arrêter le compresseur'
          ],
          answer: 1,
          points: 2,
          correction: 'Un écart positif signale une sous-alimentation en fluide (surchauffe trop élevée) : le détendeur doit ouvrir davantage sa vanne pour augmenter le débit injecté.'
        },
        {
          statement: 'Le détendeur électronique (EEV), comparé au détendeur thermostatique :',
          type: 'multiple-choice',
          options: [
            'Est piloté par une carte électronique à partir de sondes, avec une régulation plus précise et réactive',
            'Fonctionne uniquement par perte de charge fixe',
            'Ne peut réguler que la pression de condensation',
            'Est réservé aux installations sans compresseur'
          ],
          answer: 0,
          points: 2,
          correction: 'Le détendeur électronique (EEV) est piloté par une carte électronique à partir de sondes de température et de pression, offrant une régulation plus précise et réactive que le détendeur thermostatique — utilisé sur les installations récentes à régulation fine.'
        }
      ]
    }
  });
