/* =========================================================
   Spark Learning – data/physique-3e/physique-3e-puissance-electrique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-3e-puissance-electrique',
    level: 1, subject: 'physique',
    icon: '⚡',
    title: 'Puissance et énergie électrique',
    subtitle: 'Puissance électrique $P=UI$, énergie électrique $E=P\\times t$, kilowattheure, facture d\'électricité',
    keywords: ['Puissance électrique', 'Énergie électrique', 'kWh', 'Effet Joule', 'Facture électrique'],
    physics: 'Comprendre la puissance et l\'énergie électrique permet de choisir un disjoncteur adapté, de comparer la consommation de différents appareils électroménagers, d\'estimer le coût d\'utilisation d\'un appareil, ou de dimensionner une installation photovoltaïque domestique.',

    cours: {
      intro: 'Chaque appareil électrique est caractérisé par sa <strong>puissance électrique</strong> $P$, indiquée en watts (W) sur son étiquette : elle mesure la quantité d\'énergie électrique qu\'il consomme (ou transforme) chaque seconde. Elle se calcule par $P = U \\times I$, produit de la tension et de l\'intensité.<br/><br/>Faire fonctionner un appareil pendant une certaine durée consomme de l\'<strong>énergie électrique</strong> $E$, d\'autant plus grande que la puissance est élevée et que la durée est longue : $E = P \\times t$. C\'est cette énergie, exprimée en kilowattheures (kWh) sur la facture, que le fournisseur d\'électricité facture au client.<br/><br/>Lorsqu\'un appareil résistif (radiateur, plaque de cuisson, fer à repasser) est parcouru par un courant électrique, il s\'échauffe : c\'est l\'<strong>effet Joule</strong>, la transformation de l\'énergie électrique en chaleur.',
      definitions: [
        { term: 'Puissance électrique ($P$)', def: 'Énergie électrique consommée (ou transformée) par un appareil chaque seconde : $P = U \\times I$, avec $U$ en volts, $I$ en ampères et $P$ en watts (W). Indiquée sur la plupart des appareils (puissance nominale).' },
        { term: 'Énergie électrique ($E$)', def: 'Quantité d\'énergie électrique consommée pendant une durée $t$ de fonctionnement : $E = P \\times t$. En unités du système international, $E$ est en joules (J) si $P$ est en W et $t$ en secondes.' },
        { term: 'Kilowattheure (kWh)', def: 'Unité pratique d\'énergie utilisée pour la facturation de l\'électricité : $1$ kWh correspond à l\'énergie consommée par un appareil de $1$ kW de puissance fonctionnant pendant $1$ heure. $E(\\text{kWh}) = P(\\text{kW}) \\times t(\\text{h})$.' },
        { term: 'Effet Joule', def: 'Échauffement d\'un conducteur parcouru par un courant électrique, dû à sa résistance : une partie (ou la totalité, pour un appareil de chauffage) de l\'énergie électrique reçue est transformée en chaleur.' }
      ],
      method: {
        title: 'Calculer une énergie électrique et son coût en 3 étapes',
        steps: [
          '<strong>Déterminer la puissance</strong> $P$ de l\'appareil (lue sur l\'étiquette, ou calculée par $P=U\\times I$) et la convertir si besoin en kilowatts (kW).<br/>Exemple : un radiateur de $P=1500$ W $=1{,}5$ kW.',
          '<strong>Calculer l\'énergie consommée</strong> $E=P\\times t$, en veillant à exprimer la durée $t$ dans l\'unité cohérente (heures si $P$ est en kW, pour obtenir directement $E$ en kWh).<br/>Exemple : ce radiateur, utilisé $t=4$ h, consomme $E=1{,}5\\times4=6$ kWh.',
          '<strong>Multiplier par le prix unitaire</strong> du kWh (donné par le fournisseur d\'électricité) pour obtenir le coût de cette consommation.<br/>Exemple : à $0{,}25$ €/kWh, ce radiateur a coûté $6\\times0{,}25=1{,}50$ €.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Énergie = aire sous la courbe de puissance',
        title: 'Énergie électrique consommée par un appareil à puissance constante',
        description: 'Un radiateur de puissance $P=1$ kW fonctionne pendant $t=3$ h : l\'énergie électrique consommée $E=P\\times t=3$ kWh correspond exactement à l\'aire du rectangle situé sous la courbe $P=f(t)$.',
        svg: `
          <svg viewBox="0 0 560 320" role="img" aria-labelledby="puissance-title puissance-desc">
            <title id="puissance-title">Energie electrique comme aire sous la courbe de puissance</title>
            <desc id="puissance-desc">Un graphique represente la puissance P en ordonnee en fonction du temps t en abscisse. Une ligne pleine horizontale indique une puissance constante de 1 kilowatt entre l'instant zero et l'instant trois heures, ou l'appareil s'arrete. A cet instant, une ligne verticale en pointilles relie ce niveau de puissance a l'axe des temps, materialisant la chute immediate de la puissance jusqu'a zero ; une ligne horizontale en pointilles se poursuit par ailleurs au meme niveau au-dela de trois heures, a titre de repere, pour comparer avec le niveau qu'aurait garde la puissance si l'appareil etait reste allume. La zone rectangulaire comprise sous la ligne pleine, entre zero et trois heures, est hachuree pour representer l'energie consommee, egale au produit de la puissance par la duree.</desc>

            <defs>
              <pattern id="phys3e-power-hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                <rect width="8" height="8" fill="color-mix(in srgb, var(--diagram-accent) 18%, var(--bg-card))"></rect>
                <line x1="0" y1="0" x2="0" y2="8" stroke="var(--diagram-accent)" stroke-width="1.6" opacity="0.6"></line>
              </pattern>
            </defs>

            <!-- aire = energie (hachures, pour rester bien visible dans les deux themes) -->
            <rect x="60" y="130" width="330" height="120" fill="url(#phys3e-power-hatch)" stroke="none"></rect>

            <!-- axes -->
            <line class="frame-line" x1="60" y1="250" x2="520" y2="250"></line>
            <line class="frame-line" x1="60" y1="250" x2="60" y2="50"></line>
            <text class="tick-label" x="60" y="38" text-anchor="middle">P (kW)</text>
            <text class="tick-label" x="546" y="268" text-anchor="end">t (h)</text>

            <!-- graduations -->
            <line class="grid-line" x1="170" y1="250" x2="170" y2="256"></line>
            <text class="tick-label" x="170" y="266" text-anchor="middle">1</text>
            <line class="grid-line" x1="280" y1="250" x2="280" y2="256"></line>
            <text class="tick-label" x="280" y="266" text-anchor="middle">2</text>
            <line class="grid-line" x1="390" y1="250" x2="390" y2="256"></line>
            <text class="tick-label" x="390" y="266" text-anchor="middle">3</text>
            <line class="grid-line" x1="500" y1="250" x2="500" y2="256"></line>
            <text class="tick-label" x="500" y="266" text-anchor="middle">4</text>
            <line class="grid-line" x1="54" y1="130" x2="60" y2="130"></line>
            <text class="tick-label" x="44" y="134" text-anchor="end">1</text>

            <!-- courbe P(t) : constante puis arret -->
            <line class="curve-main" x1="60" y1="130" x2="390" y2="130"></line>
            <line class="guide-line" x1="390" y1="130" x2="500" y2="130"></line>
            <line class="guide-line" x1="390" y1="130" x2="390" y2="250"></line>

            <!-- cotation duree t (decalee sous la rangee de graduations pour ne pas chevaucher le "3") -->
            <line class="frame-line" x1="60" y1="274" x2="60" y2="284"></line>
            <line class="frame-line" x1="390" y1="274" x2="390" y2="284"></line>
            <line class="guide-line" x1="60" y1="279" x2="390" y2="279"></line>
            <text class="tick-label" x="225" y="300" text-anchor="middle">t = 3 h</text>

            <text class="annotation-label" x="225" y="195" text-anchor="middle">E = P × t</text>
          </svg>
        `,
        notes: [
          'La puissance de l\'appareil reste constante pendant son fonctionnement : la courbe $P=f(t)$ est une droite horizontale, à la hauteur $P=1$ kW.',
          'L\'aire hachurée du rectangle, comprise entre $t=0$ et $t=3$ h, vaut base × hauteur $=3\\times1=3$ : c\'est exactement l\'énergie $E=P\\times t=3$ kWh consommée.',
          'Après l\'arrêt de l\'appareil ($t>3$ h, en pointillés), la puissance retombe à zéro : l\'énergie consommée n\'augmente plus.'
        ],
        reading: 'Repère la hauteur du rectangle (la puissance $P$) et sa largeur (la durée $t$) : leur produit, visualisé par l\'aire hachurée, donne directement l\'énergie électrique consommée $E$.',
        caption: 'Énergie électrique $E=P\\times t$ représentée comme l\'aire d\'un rectangle : ici $P=1$ kW pendant $t=3$ h, soit $E=3$ kWh.'
      },
      example: {
        statement: 'Un radiateur électrique, dont l\'étiquette indique $P=1000$ W, fonctionne pendant $t=3$ h dans une chambre.<br/><br/>Calcule l\'énergie électrique consommée, en kWh, puis en joules.',
        steps: [
          'On convertit la puissance en kilowatts : $P=1000$ W $=1$ kW.',
          'Énergie en kWh : $E=P\\times t=1\\times3=3$ kWh.',
          'Pour convertir en joules, on utilise les unités du système international : $P=1000$ W et $t=3$ h $=3\\times3600=10\\,800$ s.',
          'Énergie en joules : $E=P\\times t=1000\\times10\\,800=10\\,800\\,000$ J, soit environ $1{,}08\\times10^{7}$ J.'
        ],
        answer: 'Ce radiateur consomme $E=3$ kWh (unité pratique de facturation), soit $E=10\\,800\\,000$ J (unité du système international). Le kWh est simplement plus commode pour des durées exprimées en heures, comme c\'est le cas au quotidien.'
      },
      formulas: [
        '$P = U \\times I$ (puissance électrique, en W)',
        '$E = P \\times t$ (énergie électrique)',
        '$E(\\text{kWh}) = P(\\text{kW}) \\times t(\\text{h})$ (unité de facturation)',
        '$1$ kWh $= 1000 \\times 3600 = 3\\,600\\,000$ J',
        'Coût $=E(\\text{kWh}) \\times$ prix unitaire (€/kWh)'
      ],
      recap: [
        'La puissance électrique $P=U\\times I$ (en W) indique l\'énergie consommée chaque seconde par un appareil.',
        'L\'énergie électrique consommée sur une durée $t$ est $E=P\\times t$ : elle augmente avec la puissance <strong>et</strong> avec la durée d\'utilisation.',
        'Le kilowattheure (kWh) est l\'unité utilisée pour la facturation : $E(\\text{kWh})=P(\\text{kW})\\times t(\\text{h})$.',
        'Sur un graphique $P=f(t)$ à puissance constante, l\'énergie consommée correspond à l\'<strong>aire</strong> du rectangle sous la courbe.'
      ],
      piege: 'Une erreur fréquente est de calculer une énergie en kWh sans convertir la durée en heures (en gardant des minutes ou des secondes), ou de confondre puissance (en W) et énergie (en J ou kWh). Attention : la puissance est instantanée et ne dépend pas de la durée, tandis que l\'énergie dépend à la fois de la puissance <strong>et</strong> du temps de fonctionnement.'
    },

    quiz: [
      {
        q: 'Un four à micro-ondes de puissance $P=900$ W fonctionne pendant $t=0{,}25$ h (15 minutes). Quelle énergie consomme-t-il, en Wh ?',
        options: ['$225$ Wh', '$3600$ Wh', '$900{,}25$ Wh', '$3{,}6$ Wh'],
        answer: 0,
        correction: '$E=P\\times t=900\\times0{,}25=225$ Wh, soit $0{,}225$ kWh.'
      },
      {
        q: 'Pourquoi utilise-t-on le kilowattheure (kWh) plutôt que le joule pour facturer l\'électricité domestique ?',
        options: [
          'Parce que c\'est une unité plus grande, plus pratique pour des consommations mesurées en heures',
          'Parce que le joule ne peut pas mesurer l\'énergie électrique',
          'Parce que le kWh est la seule unité légale d\'énergie électrique',
          'Parce que la puissance des appareils domestiques est trop faible pour le joule'
        ],
        answer: 0,
        correction: 'Le joule reste une unité d\'énergie valide, mais donnerait des nombres énormes pour une consommation domestique (des millions de joules) : le kWh, mieux adapté aux durées en heures, est simplement plus pratique à lire et à facturer.'
      },
      {
        q: 'Sur un graphique représentant la puissance $P$ (constante) en fonction du temps $t$, l\'énergie consommée $E$ correspond à :',
        options: ['L\'aire du rectangle sous la courbe (base × hauteur)', 'La pente de la droite', 'La valeur maximale de $P$', 'L\'ordonnée à l\'origine'],
        answer: 0,
        correction: 'Puisque $E=P\\times t$, et que $P$ (hauteur) et $t$ (largeur) définissent un rectangle sous la courbe, l\'énergie consommée est exactement l\'aire de ce rectangle.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['energie', 'intensite']);

        if (typeExo === 'energie') {
          var Ppuiss = pick([500, 750, 900, 1000, 1200, 1500, 1800, 2000, 2500]);
          var tHeures = randFloat(0.5, 8, 1);
          var Ekwh = parseFloat(((Ppuiss / 1000) * tHeures).toFixed(2));
          var contexte = pick([
            'un radiateur électrique d\'appoint', 'un four électrique', 'un lave-linge',
            'un chauffe-eau', 'un sèche-cheveux', 'une bouilloire électrique'
          ]);
          return {
            statement: 'Sur l\'étiquette de ' + contexte + ', on lit une puissance $P=' + Ppuiss + '$ W. Cet appareil fonctionne pendant $t=' + fr(tHeures, 1) + '$ h.<br/><br/>Calcule l\'énergie électrique $E$ consommée (en kWh, arrondie au centième).',
            answer: Ekwh,
            tolerance: Math.max(0.05, parseFloat((Ekwh * 0.03).toFixed(2))),
            unit: 'kWh',
            hint: 'Convertis d\'abord la puissance en kW ($P(\\text{kW})=P(\\text{W})/1000$), puis utilise $E=P\\times t$.',
            solution: [
              'Puissance en kilowatts : $P = ' + Ppuiss + '$ W $= ' + fr(Ppuiss / 1000, 2) + '$ kW.',
              'Énergie : $E = P \\times t = ' + fr(Ppuiss / 1000, 2) + ' \\times ' + fr(tHeures, 1) + '$.',
              'Résultat : $E \\approx ' + fr(Ekwh, 2) + '$ kWh.'
            ]
          };
        } else {
          var Ppuiss2 = rand(200, 3000);
          var Udomestique = 230;
          var Inominal = parseFloat((Ppuiss2 / Udomestique).toFixed(2));
          var contexte2 = pick([
            'un four électrique', 'un radiateur soufflant', 'une plaque de cuisson',
            'un lave-vaisselle', 'un aspirateur'
          ]);
          return {
            statement: contexte2.charAt(0).toUpperCase() + contexte2.slice(1) + ' a une puissance nominale $P=' + Ppuiss2 + '$ W et se branche sous la tension domestique $U=230$ V.<br/><br/>Calcule l\'intensité nominale $I$ appelée par cet appareil (en A, arrondie au centième).',
            answer: Inominal,
            tolerance: Math.max(0.05, parseFloat((Inominal * 0.03).toFixed(2))),
            unit: 'A',
            hint: 'La puissance électrique est $P=U\\times I$, donc $I=\\dfrac{P}{U}$.',
            solution: [
              'À partir de $P=U\\times I$, on isole $I$ : $I=\\dfrac{P}{U}=\\dfrac{' + Ppuiss2 + '}{230}$.',
              'Résultat : $I \\approx ' + fr(Inominal, 2) + '$ A.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une famille possède un chauffe-eau électrique de puissance $P=2200$ W, qui fonctionne en moyenne $t=3$ h par jour. Le prix facturé par leur fournisseur d\'électricité est de $0{,}20$ €/kWh.',
      tasks: [
        'Calculer l\'énergie électrique $E$ consommée par ce chauffe-eau en une journée (en kWh).',
        'En déduire le coût quotidien de fonctionnement de cet appareil, puis son coût sur un mois de 30 jours.',
        'La famille envisage de remplacer ce chauffe-eau par un modèle plus performant, de puissance $P\'=1800$ W, pour le même usage quotidien de 3 h. Calculer l\'économie réalisée sur un mois.'
      ],
      solutions: [
        'Puissance en kW : $P=2200$ W $=2{,}2$ kW. Énergie quotidienne : $E=P\\times t=2{,}2\\times3=6{,}6$ kWh.',
        'Coût quotidien : $6{,}6\\times0{,}20=1{,}32$ €. Coût mensuel (30 jours) : $1{,}32\\times30=39{,}60$ €.',
        'Nouvelle puissance : $P\'=1800$ W $=1{,}8$ kW, soit une énergie quotidienne $E\'=1{,}8\\times3=5{,}4$ kWh, un coût quotidien de $5{,}4\\times0{,}20=1{,}08$ €, et un coût mensuel de $1{,}08\\times30=32{,}40$ €. L\'économie mensuelle est $39{,}60-32{,}40=7{,}20$ €.'
      ],
      finalAnswer: 'Le chauffe-eau actuel coûte environ $39{,}60$ €/mois, contre $32{,}40$ €/mois pour le modèle plus performant : une économie de $7{,}20$ € par mois, soit environ $86{,}40$ € par an, simplement en réduisant la puissance de l\'appareil à usage égal.'
    },

    evaluation: {
      title: 'Évaluation — Puissance et énergie électrique',
      duration: '30 min',
      questions: [
        {
          statement: 'Un appareil de puissance $P=1500$ W fonctionne pendant $t=2$ h. Calculer l\'énergie consommée (en kWh).',
          type: 'numeric',
          answer: 3,
          tolerance: 0.1,
          unit: 'kWh',
          points: 2,
          correction: '$P=1500$ W $=1{,}5$ kW. $E=P\\times t=1{,}5\\times2=3$ kWh.'
        },
        {
          statement: 'L\'énergie électrique consommée par un appareil de puissance $P$ pendant une durée $t$ s\'écrit :',
          type: 'multiple-choice',
          options: ['$E = P \\times t$', '$E = \\dfrac{P}{t}$', '$E = P + t$', '$E = \\dfrac{t}{P}$'],
          answer: 0,
          points: 2,
          correction: 'L\'énergie est le produit de la puissance par la durée : $E=P\\times t$. Plus un appareil fonctionne longtemps ou avec une puissance élevée, plus il consomme d\'énergie.'
        },
        {
          statement: 'Un appareil de puissance nominale $P=1150$ W est branché sous $U=230$ V. Calculer l\'intensité nominale $I$ (en A).',
          type: 'numeric',
          answer: 5,
          tolerance: 0.2,
          unit: 'A',
          points: 3,
          correction: '$I=\\dfrac{P}{U}=\\dfrac{1150}{230}=5$ A.'
        },
        {
          statement: 'Sur un graphique $P=f(t)$ à puissance constante, l\'énergie consommée entre deux instants correspond à :',
          type: 'multiple-choice',
          options: ['L\'aire sous la courbe entre ces deux instants', 'La distance entre les deux instants sur l\'axe des temps', 'La valeur de $P$ au premier instant', 'La différence entre les deux valeurs de $P$'],
          answer: 0,
          points: 2,
          correction: 'Puisque $E=P\\times t$, l\'énergie correspond à l\'aire du rectangle (puissance × durée) délimité sous la courbe entre les deux instants considérés.'
        },
        {
          statement: 'Un foyer a consommé $E=10$ kWh sur une journée, facturés à $0{,}18$ €/kWh. Calculer le coût de cette consommation (en €).',
          type: 'numeric',
          answer: 1.8,
          tolerance: 0.05,
          unit: '€',
          points: 1,
          correction: 'Coût $=E\\times\\text{prix unitaire}=10\\times0{,}18=1{,}80$ €.'
        }
      ]
    }
  });
