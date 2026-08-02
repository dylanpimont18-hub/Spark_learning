/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-a2-4-dju.js
   BTS FED — S8-A2-4 DJU, besoin d'énergie utile
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-a2-4-dju',
    level: 3, subject: 'fed',
    icon: '🗓️',
    title: 'Degrés-jours unifiés (DJU) et besoin de chauffage',
    subtitle: 'Estimer le besoin annuel d\'énergie utile à partir des DJU',
    keywords: ['DJU', 'Degrés-jours', 'Besoin énergie utile', 'Base 18', 'Zone climatique'],
    physics: 'Le bilan thermique (module précédent) donne une puissance instantanée, pour un seul jour de grand froid. Mais pour estimer une <strong>facture annuelle de chauffage</strong>, il faut cumuler cet effet sur toute une saison. La méthode des degrés-jours unifiés (DJU) permet de le faire sans avoir à simuler heure par heure toute une année.',

    cours: {
      intro: 'Le coefficient de déperdition globale $G_v$, calculé au module précédent, caractérise le bâtiment : combien de watts il perd par degré d\'écart. Mais un hiver n\'est pas un seul jour figé — il comprend des journées plus ou moins froides, réparties sur plusieurs mois.<br/><br/>Les <strong>degrés-jours unifiés (DJU)</strong> résument tout un hiver en un seul nombre : le cumul, jour après jour, de l\'écart entre une température de base et la température moyenne extérieure réellement observée. Plus un climat est rigoureux et long, plus son DJU est élevé.<br/><br/>En multipliant ce DJU par le coefficient $G_v$ du bâtiment, on obtient une estimation du <strong>besoin annuel d\'énergie utile</strong> de chauffage, sans avoir à simuler heure par heure toute la saison.',
      definitions: [
        { term: 'Degrés-jours unifiés (DJU)', def: 'Cumul, sur la saison de chauffe, des écarts journaliers entre une température de base $\\theta_{\\text{base}}$ et la température moyenne extérieure du jour, uniquement pour les jours où celle-ci est inférieure à la base : $DJU = \\displaystyle\\sum_{\\theta_{\\text{moy}} < \\theta_{\\text{base}}} (\\theta_{\\text{base}} - \\theta_{\\text{moy}})$, en °C·jour.' },
        { term: 'Température de base $\\theta_{\\text{base}}$', def: 'Seuil conventionnel en dessous duquel on considère qu\'il faut chauffer un logement : $18\\,°C$ le plus souvent en France (« base 18 »), parfois $19\\,°C$ selon la source ou le type de bâtiment.' },
        { term: 'Zone climatique', def: 'La France est découpée en zones (H1, H2, H3) aux DJU de référence très différents : un site montagnard (H1) cumule nettement plus de DJU sur une saison qu\'un site méditerranéen (H3).' },
        { term: 'Besoin d\'énergie utile de chauffage $E$', def: 'Énergie thermique à fournir sur la saison de chauffe pour maintenir la température de consigne, en kWh. C\'est un besoin « utile », avant prise en compte du rendement du système de chauffage.' },
        { term: 'Coefficient de déperdition globale $G_v$', def: 'Repris tel quel du bilan thermique (module précédent), en W/K : c\'est la seule donnée « bâtiment » nécessaire ici. Le DJU apporte la donnée « climat ».' }
      ],
      method: {
        title: 'Estimer le besoin annuel d\'énergie utile par la méthode des DJU',
        steps: [
          '<strong>Récupérer le coefficient $G_v$</strong> du bâtiment étudié, déterminé par bilan thermique (module précédent) — aucun nouveau calcul de déperdition n\'est nécessaire.',
          '<strong>Récupérer le DJU de référence</strong> de la zone climatique du site et de la base retenue (table météorologique officielle, en °C·jour).',
          '<strong>Appliquer la formule</strong> $E \\approx \\dfrac{DJU \\times G_v \\times 24}{1\\,000}$, en kWh (le facteur $24$ convertit des degrés-jours en degrés-heures, la division par $1\\,000$ convertit des Wh en kWh).',
          '<strong>Interpréter</strong> : ce besoin est une énergie <strong>utile</strong>, à comparer ensuite au rendement du système de production pour estimer la consommation d\'énergie finale (facture réelle).'
        ]
      },
      example: {
        statement: 'On reprend le séjour étudié au module précédent (bilan thermique), dont le calcul avait donné un coefficient de déperdition globale $G_v = 64$ W/K. Ce logement est situé en zone climatique H1, où le cumul de degrés-jours unifiés base 18 sur la saison de chauffe est $DJU = 1\\,900$ °C·jour.<br/><br/>Calculer le besoin annuel d\'énergie utile de chauffage $E$.',
        steps: [
          '$E \\approx \\dfrac{DJU \\times G_v \\times 24}{1\\,000} = \\dfrac{1\\,900 \\times 64 \\times 24}{1\\,000}$.',
          '$1\\,900 \\times 64 = 121\\,600$, puis $121\\,600 \\times 24 = 2\\,918\\,400$.',
          '$E \\approx \\dfrac{2\\,918\\,400}{1\\,000} = 2\\,918{,}4$ kWh.'
        ],
        answer: '$E \\approx 2\\,918{,}4$ kWh par an, soit environ $2{,}92$ MWh — le besoin utile de chauffage de ce séjour sur une saison complète, obtenu sans avoir eu à resimuler heure par heure.'
      },
      formulas: [
        '$DJU = \\displaystyle\\sum_{\\theta_{\\text{moy}} < \\theta_{\\text{base}}} (\\theta_{\\text{base}} - \\theta_{\\text{moy}})$ (degrés-jours unifiés, en °C·jour)',
        '$E \\approx \\dfrac{DJU \\times G_v \\times 24}{1\\,000}$ (besoin annuel d\'énergie utile, en kWh)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Répartition mensuelle des DJU (allure type)',
        title: 'Cumul des degrés-jours sur une saison de chauffe',
        description: 'Chaque mois de la saison de chauffe contribue au cumul de DJU, avec un pic en plein cœur de l\'hiver (janvier) et des contributions plus faibles en début et fin de saison.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="dju-graph-title dju-graph-desc">
            <title id="dju-graph-title">Repartition mensuelle des degres-jours unifies sur une saison de chauffe</title>
            <desc id="dju-graph-desc">Diagramme en barres representant la contribution de chaque mois d'octobre a avril au cumul de degres-jours unifies. Les barres sont basses en octobre et avril, et atteignent leur maximum en janvier, montrant que le coeur de l'hiver concentre la majorite du besoin de chauffage.</desc>

            <line class="frame-line" x1="40" y1="230" x2="430" y2="230"></line>

            <!-- barres mensuelles -->
            <rect class="frame-line" x="50" y="166" width="40" height="64" fill="color-mix(in srgb, var(--diagram-accent) 16%, var(--bg-card))"></rect>
            <rect class="frame-line" x="105" y="110" width="40" height="120" fill="color-mix(in srgb, var(--diagram-accent) 20%, var(--bg-card))"></rect>
            <rect class="frame-line" x="160" y="67" width="40" height="163" fill="color-mix(in srgb, var(--diagram-accent) 24%, var(--bg-card))"></rect>
            <rect class="frame-line" x="215" y="50" width="40" height="180" fill="color-mix(in srgb, var(--diagram-accent) 34%, var(--bg-card))"></rect>
            <rect class="frame-line" x="270" y="71" width="40" height="159" fill="color-mix(in srgb, var(--diagram-accent) 24%, var(--bg-card))"></rect>
            <rect class="frame-line" x="325" y="131" width="40" height="99" fill="color-mix(in srgb, var(--diagram-accent) 20%, var(--bg-card))"></rect>
            <rect class="frame-line" x="380" y="179" width="40" height="51" fill="color-mix(in srgb, var(--diagram-accent) 16%, var(--bg-card))"></rect>

            <!-- etiquettes mois -->
            <text class="tick-label" x="70" y="245" text-anchor="middle">Oct.</text>
            <text class="tick-label" x="125" y="245" text-anchor="middle">Nov.</text>
            <text class="tick-label" x="180" y="245" text-anchor="middle">Déc.</text>
            <text class="tick-label" x="235" y="245" text-anchor="middle">Janv.</text>
            <text class="tick-label" x="290" y="245" text-anchor="middle">Fév.</text>
            <text class="tick-label" x="345" y="245" text-anchor="middle">Mars</text>
            <text class="tick-label" x="400" y="245" text-anchor="middle">Avr.</text>

            <text class="annotation-label" x="235" y="42" text-anchor="middle">Pic hivernal</text>
            <text class="label-soft" x="235" y="18" text-anchor="middle">DJU cumulés sur la saison de chauffe</text>
          </svg>
        `,
        notes: [
          'Chaque barre représente la contribution d\'un mois au cumul total de DJU : sa hauteur est proportionnelle à l\'écart moyen entre la température de base et la température extérieure ce mois-là.',
          'Le pic de janvier concentre la plus grande part du besoin de chauffage : c\'est cohérent avec le fait que la déperdition instantanée $D$ (module précédent) y est aussi maximale.',
          'Le DJU total de la saison est la somme de toutes les contributions mensuelles — une seule valeur, directement utilisable dans $E \\approx DJU \\times G_v \\times 24 / 1\\,000$.'
        ],
        reading: 'Compare la hauteur des barres pour voir quels mois pèsent le plus dans le cumul de DJU : plus une barre est haute, plus ce mois contribue au besoin annuel de chauffage.',
        caption: 'Allure type de la répartition mensuelle des degrés-jours unifiés sur une saison de chauffe (climat tempéré).'
      },
      recap: [
        'Le DJU cumule, jour après jour, l\'écart entre une température de base $\\theta_{\\text{base}}$ (souvent $18\\,°C$) et la température moyenne extérieure réellement observée.',
        'Le besoin annuel d\'énergie utile s\'estime par $E \\approx \\dfrac{DJU \\times G_v \\times 24}{1\\,000}$, en kWh.',
        'Le $G_v$ utilisé est celui déterminé au bilan thermique (module précédent) : aucun nouveau calcul de déperdition n\'est nécessaire ici.',
        'Le DJU dépend uniquement du <strong>climat</strong> du site (zone H1/H2/H3) ; $G_v$ dépend uniquement du <strong>bâtiment</strong> — les deux sont indépendants et se multiplient simplement.',
        'Ce besoin est une énergie <strong>utile</strong> : il faudra encore la diviser par le rendement du système de chauffage pour obtenir la consommation d\'énergie finale (la facture réelle).'
      ],
      piege: 'Ne pas confondre le besoin d\'énergie <strong>utile</strong> $E$ (calculé ici) avec la consommation d\'énergie <strong>finale</strong> réellement facturée : cette dernière tient en plus compte du rendement du système de chauffage (une chaudière à $90\\%$ de rendement consommera plus d\'énergie finale que le besoin utile calculé). Attention aussi à toujours vérifier la <strong>base</strong> du DJU utilisé (18 ou 19 °C) : un même climat donne un DJU différent selon la base retenue, et mélanger les deux fausse le résultat.'
    },

    quiz: [
      {
        q: 'Les degrés-jours unifiés (DJU) mesurent :',
        options: [
          'La puissance de chauffage instantanée d\'un bâtiment un jour donné',
          'Le cumul, sur une saison, des écarts entre une température de base et la température moyenne extérieure',
          'Le rendement d\'une chaudière',
          'La surface totale de l\'enveloppe d\'un bâtiment'
        ],
        answer: 1,
        correction: 'Le DJU est un indicateur purement climatique : il cumule jour après jour l\'écart entre $\\theta_{\\text{base}}$ et la température moyenne extérieure, sur toute la saison de chauffe.'
      },
      {
        q: 'Dans la formule $E \\approx \\dfrac{DJU \\times G_v \\times 24}{1\\,000}$, le coefficient $G_v$ provient :',
        options: [
          'D\'une table météorologique',
          'Du bilan thermique du bâtiment (module précédent)',
          'D\'une mesure directe sur site pendant l\'hiver',
          'De la surface habitable uniquement'
        ],
        answer: 1,
        correction: '$G_v$ est le coefficient de déperdition globale déterminé par bilan thermique : c\'est la donnée « bâtiment », complémentaire du DJU qui est la donnée « climat ».'
      },
      {
        q: 'Le besoin d\'énergie utile $E$ calculé par la méthode des DJU correspond à :',
        options: [
          'La consommation d\'énergie finale exactement facturée',
          'L\'énergie thermique à fournir pour maintenir le confort, avant prise en compte du rendement du système',
          'La puissance maximale du générateur de chauffage',
          'Le coût annuel du chauffage en euros'
        ],
        answer: 1,
        correction: '$E$ est un besoin utile : pour obtenir la consommation d\'énergie finale réellement facturée, il faudrait encore diviser par le rendement du système de production de chaleur.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick(['une maison individuelle', 'un immeuble collectif', 'un bureau', 'une école']);
        const zone = pick([
          { nom: 'zone H1 (climat continental / montagnard)', dju: rand(2200, 2800) },
          { nom: 'zone H2 (climat océanique / tempéré)', dju: rand(1700, 2200) },
          { nom: 'zone H3 (climat méditerranéen)', dju: rand(1000, 1600) }
        ]);
        const Gv = rand(60, 250);
        const E = Math.round((zone.dju * Gv * 24) / 1000);
        return {
          statement: `Pour ${contexte} située en ${zone.nom}, le relevé météorologique indique un cumul $DJU = ${zone.dju}$ °C·jour (base 18) sur la saison de chauffe. Le bâtiment a un coefficient de déperdition globale $G_v = ${Gv}$ W/K, déterminé par bilan thermique.<br/><br/>Calcule le besoin annuel d'énergie utile de chauffage $E$ (en kWh, arrondi à l'unité).`,
          answer: E,
          tolerance: Math.max(50, Math.round(E * 0.05)),
          unit: 'kWh',
          hint: 'Applique directement $E \\approx \\dfrac{DJU \\times G_v \\times 24}{1\\,000}$.',
          solution: [
            `$E \\approx \\dfrac{${zone.dju} \\times ${Gv} \\times 24}{1\\,000}$.`,
            `$${zone.dju} \\times ${Gv} = ${fr(zone.dju * Gv)}$, puis $\\times 24 = ${fr(zone.dju * Gv * 24)}$.`,
            `$E \\approx \\dfrac{${fr(zone.dju * Gv * 24)}}{1\\,000} \\approx ${fr(E)}$ kWh.`
          ]
        };
      }
    },

    probleme: {
      context: 'On reprend le bureau étudié au module précédent (bilan thermique), dont le calcul avait donné un coefficient de déperdition globale $G_v \\approx 122{,}7$ W/K. Ce bureau est situé en zone climatique H2, où le DJU base 18 sur la saison de chauffe est $1\\,750$ °C·jour. On envisage un renforcement de l\'isolation (mur et toiture) qui ramènerait le coefficient à $G_v = 85$ W/K, sans changer le climat du site.',
      tasks: [
        'Calculer le besoin annuel d\'énergie utile $E_1$ avant renforcement de l\'isolation.',
        'Calculer le besoin annuel d\'énergie utile $E_2$ après renforcement de l\'isolation.',
        'Calculer l\'économie d\'énergie réalisée, en kWh et en pourcentage, et commenter la pertinence de l\'investissement.'
      ],
      solutions: [
        '$E_1 \\approx \\dfrac{1\\,750 \\times 122{,}7 \\times 24}{1\\,000}$. $1\\,750 \\times 122{,}7 \\approx 214\\,725$, puis $\\times 24 \\approx 5\\,153\\,400$, donc $E_1 \\approx 5\\,153{,}4$ kWh.',
        '$E_2 \\approx \\dfrac{1\\,750 \\times 85 \\times 24}{1\\,000}$. $1\\,750 \\times 85 = 148\\,750$, puis $\\times 24 = 3\\,570\\,000$, donc $E_2 = 3\\,570$ kWh.',
        'Économie : $E_1 - E_2 \\approx 5\\,153{,}4 - 3\\,570 \\approx 1\\,583{,}4$ kWh, soit $\\dfrac{1\\,583{,}4}{5\\,153{,}4} \\times 100 \\approx 30{,}7\\%$ de réduction du besoin utile. Une isolation qui réduit le besoin de plus d\'un tiers justifie généralement l\'investissement sur la durée de vie du bâtiment, à comparer au coût des travaux et au prix de l\'énergie.'
      ],
      finalAnswer: '$E_1 \\approx 5\\,153{,}4$ kWh, $E_2 = 3\\,570$ kWh, soit une économie d\'environ $30{,}7\\%$ du besoin utile de chauffage — la méthode des DJU permet de chiffrer ce gain sans avoir à refaire tourner une simulation complète.'
    },

    evaluation: {
      title: 'Évaluation — DJU et besoin d\'énergie utile',
      duration: '20 min',
      questions: [
        {
          statement: 'Un bâtiment a un coefficient $G_v = 100$ W/K et se trouve dans une zone où $DJU = 2\\,000$ °C·jour (base 18). Calculer le besoin annuel d\'énergie utile $E$ (en kWh).',
          type: 'numeric',
          answer: 4800,
          tolerance: 150,
          unit: 'kWh',
          points: 3,
          correction: '$E \\approx \\dfrac{2\\,000 \\times 100 \\times 24}{1\\,000} = \\dfrac{4\\,800\\,000}{1\\,000} = 4\\,800$ kWh.'
        },
        {
          statement: 'Le DJU d\'un site dépend principalement de :',
          type: 'multiple-choice',
          options: [
            'La surface habitable du bâtiment étudié',
            'Le climat local (zone climatique, altitude, latitude)',
            'Le rendement de la chaudière installée',
            'Le coefficient $G_v$ du bâtiment'
          ],
          answer: 1,
          points: 2,
          correction: 'Le DJU est un indicateur purement climatique, indépendant du bâtiment étudié — c\'est $G_v$ qui apporte l\'information « bâtiment ».'
        },
        {
          statement: 'Un bâtiment isolé conforme aux exigences actuelles a $G_v = 60$ W/K, un bâtiment ancien similaire a $G_v = 150$ W/K, tous deux dans une zone où $DJU = 2\\,100$ °C·jour. Calculer la différence de besoin annuel d\'énergie utile entre les deux (en kWh).',
          type: 'numeric',
          answer: 4536,
          tolerance: 150,
          unit: 'kWh',
          points: 3,
          correction: '$E_{\\text{isolé}} \\approx \\dfrac{2\\,100 \\times 60 \\times 24}{1\\,000} = 3\\,024$ kWh. $E_{\\text{ancien}} \\approx \\dfrac{2\\,100 \\times 150 \\times 24}{1\\,000} = 7\\,560$ kWh. Différence $\\approx 7\\,560 - 3\\,024 = 4\\,536$ kWh.'
        },
        {
          statement: 'Le besoin d\'énergie utile $E$ calculé par la méthode des DJU diffère de la consommation d\'énergie finale réellement facturée car cette dernière tient compte en plus :',
          type: 'multiple-choice',
          options: [
            'Du prix du kWh uniquement',
            'Du rendement du système de production de chauffage',
            'De la surface du terrain',
            'Du nombre d\'occupants du logement'
          ],
          answer: 1,
          points: 2,
          correction: 'Le besoin utile $E$ doit encore être divisé par le rendement du système de chauffage pour obtenir la consommation d\'énergie finale — un système moins performant consommera plus d\'énergie finale pour le même besoin utile.'
        },
        {
          statement: 'Un site en base 18 affiche $DJU = 2\\,000$ °C·jour ; en base 19, le même site affiche un DJU plus élevé. Pourquoi ?',
          type: 'multiple-choice',
          options: [
            'Parce que le climat a changé entre les deux calculs',
            'Parce qu\'une base plus haute augmente l\'écart avec la température extérieure chaque jour, donc le cumul',
            'Parce que la base 19 ne concerne que les logements collectifs',
            'Il n\'y a aucune raison, les deux valeurs sont toujours identiques'
          ],
          answer: 1,
          points: 2,
          correction: 'Le DJU dépend directement de la base choisie : plus $\\theta_{\\text{base}}$ est élevée, plus l\'écart $(\\theta_{\\text{base}} - \\theta_{\\text{moy}})$ est grand chaque jour, donc plus le cumul sur la saison est élevé — pour un même climat.'
        }
      ]
    }
  });
