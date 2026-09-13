/* =========================================================
   Spark Learning – data/5e/5e-proportionnalite.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-proportionnalite',
    level: 1, subject: 'maths',
    icon: '📊',
    title: 'Proportionnalité appliquée',
    subtitle: 'Pourcentages, échelles, vitesse moyenne',
    keywords: ['Proportionnalité', 'Pourcentage', 'Échelle', 'Vitesse', 'Distance', 'Durée'],
    physics: 'Calcul de la vitesse moyenne d\'un mobile, lecture d\'échelles sur une carte ou un plan d\'architecte',

    cours: {
      intro: 'La proportionnalité est l\'outil mathématique de la <strong>mise à l\'échelle</strong> : quand on double une grandeur, l\'autre double aussi. Les pourcentages sont un cas particulier où le coefficient est exprimé sur 100.<br/><br/>' +
        '<strong>Piège courant avec les pourcentages :</strong> une baisse de $20\\%$ puis une hausse de $20\\%$ ne revient PAS au prix initial ! Exemple : $100 \\to 80 \\to 96$ (pas $100$). En effet $0{,}8 \\times 1{,}2 = 0{,}96$.<br/><br/>' +
        'Les <strong>échelles cartographiques</strong> sont des rapports : $\\dfrac{1}{25\\,000}$ signifie que $1$ cm sur la carte = $25\\,000$ cm = $250$ m en réalité.<br/><br/>' +
        'La <strong>vitesse</strong> $v = \\dfrac{d}{t}$ est le coefficient de proportionnalité entre distance et temps quand la vitesse est constante. Toujours vérifier la cohérence des unités : $1$ km/h $= \\dfrac{1}{3{,}6}$ m/s.',
      definitions: [
        { term: 'Pourcentage', def: 'Proportion exprimée sur 100. $p\\%$ de $T = \\dfrac{p}{100} \\times T$.' },
        { term: 'Échelle', def: 'Rapport entre une distance sur un plan et la distance réelle correspondante. Échelle $\\dfrac{1}{25\\,000}$ → 1 cm = 250 m.' },
        { term: 'Vitesse moyenne', def: 'Quotient de la distance totale par le temps total : $v = \\dfrac{d}{t}$. S\'exprime en km/h ou m/s.' },
        { term: 'Coefficient multiplicateur', def: 'Facteur par lequel on multiplie pour appliquer une variation. $+20\\% \\to \\times 1{,}20$ ; $-15\\% \\to \\times 0{,}85$.' }
      ],
      example: {
        statement: 'Un jean coûte $60$ €. Il est soldé à $-30\\%$. Quel est le nouveau prix ?',
        steps: [
          'Réduction : $30\\%$ de $60 = \\dfrac{30}{100} \\times 60 = 18$ €.',
          'Nouveau prix : $60 - 18 = 42$ €.',
          'Ou directement : $60 \\times 0{,}70 = 42$ €.'
        ],
        answer: '$42$ €'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Échelle et proportionnalité',
        title: 'Une carte à l\'échelle 1/25 000 : du papier au terrain',
        description: 'D\'après le cours, l\'échelle $\\dfrac{1}{25\\,000}$ signifie que $1$ cm sur la carte représente $250$ m dans la réalité. En appliquant le même coefficient, $6$ cm représentent $6 \\times 250 = 1\\,500$ m, comme dans l\'évaluation du module.',
        svg: `
          <svg viewBox="0 0 400 230" role="img" aria-labelledby="echelle-title echelle-desc">
            <title id="echelle-title">Double regle carte et distance reelle a l'echelle 1 sur 25000</title>
            <desc id="echelle-desc">Deux regles horizontales alignees : distance sur la carte en centimetres en haut, distance reelle en metres en bas. Un centimetre correspond a deux cent cinquante metres, six centimetres correspondent a mille cinq cents metres.</desc>
            <text class="axis-label" x="50" y="30">Distance sur la carte (cm)</text>
            <line class="grid-line" x1="50" y1="60" x2="50" y2="170"></line>
            <line class="grid-line" x1="134" y1="60" x2="134" y2="170"></line>
            <line class="grid-line" x1="176" y1="60" x2="176" y2="170"></line>
            <line class="grid-line" x1="218" y1="60" x2="218" y2="170"></line>
            <line class="grid-line" x1="260" y1="60" x2="260" y2="170"></line>
            <line class="grid-line" x1="344" y1="60" x2="344" y2="170"></line>
            <line class="guide-line" x1="92" y1="60" x2="92" y2="170"></line>
            <line class="guide-line" x1="302" y1="60" x2="302" y2="170"></line>
            <line class="axis" x1="50" y1="60" x2="352" y2="60"></line>
            <line class="axis" x1="50" y1="170" x2="352" y2="170"></line>
            <text class="tick-label" x="47" y="48">0</text>
            <text class="tick-label" x="89" y="48">1</text>
            <text class="tick-label" x="131" y="48">2</text>
            <text class="tick-label" x="173" y="48">3</text>
            <text class="tick-label" x="215" y="48">4</text>
            <text class="tick-label" x="257" y="48">5</text>
            <text class="tick-label" x="299" y="48">6</text>
            <text class="tick-label" x="341" y="48">7</text>
            <circle class="plot-point-alt" cx="92" cy="60" r="6"></circle>
            <circle class="plot-point-alt" cx="302" cy="60" r="6"></circle>
            <text class="tick-label" x="38" y="186">0</text>
            <text class="tick-label" x="70" y="186">250</text>
            <text class="tick-label" x="112" y="186">500</text>
            <text class="tick-label" x="154" y="186">750</text>
            <text class="tick-label" x="198" y="186">1000</text>
            <text class="tick-label" x="240" y="186">1250</text>
            <text class="tick-label" x="282" y="186">1500</text>
            <text class="tick-label" x="324" y="186">1750</text>
            <circle class="plot-point" cx="92" cy="170" r="6"></circle>
            <circle class="plot-point" cx="302" cy="170" r="6"></circle>
            <text class="axis-label" x="50" y="210">Distance réelle (m)</text>
            <text class="annotation-label" x="92" y="118" text-anchor="middle">1 cm ↔ 250 m</text>
            <text class="annotation-label" x="302" y="118" text-anchor="middle">6 cm ↔ 1500 m</text>
          </svg>
        `,
        notes: [
          'Les deux règles sont alignées verticalement : une même colonne représente une même distance, lue en centimètres en haut et en mètres en réalité en bas.',
          'Le trait en pointillé sur $1$ cm rejoint $250$ m : c\'est la définition même de l\'échelle $\\dfrac{1}{25\\,000}$.',
          'Le second trait en pointillé sur $6$ cm rejoint $1\\,500$ m, en appliquant exactement le même coefficient — c\'est la valeur utilisée dans l\'évaluation du cours.'
        ],
        reading: 'Sur une carte, chaque centimètre correspond toujours au même nombre de mètres réels : c\'est une situation de proportionnalité directe.',
        caption: 'Correspondance à l\'échelle $\\dfrac{1}{25\\,000}$ entre distance sur la carte (cm) et distance réelle (m).'
      },
      method: {
        title: 'Méthode en 3 cas',
        steps: [
          '<strong>Pourcentage</strong> : $p\\%$ de $T = \\dfrac{p}{100} \\times T$. Pour trouver le taux : $\\dfrac{\\text{partie}}{\\text{total}} \\times 100$.',
          '<strong>Échelle</strong> : $\\text{distance réelle} = \\dfrac{\\text{distance sur plan}}{\\text{échelle}}$. Ex : échelle $1/25000$ → $1$ cm sur plan = $250$ m réels.',
          '<strong>Vitesse</strong> : $v = \\dfrac{d}{t}$, donc $d = v \\times t$ et $t = \\dfrac{d}{v}$. Vérifier la cohérence des unités (km/h, m/s).'
        ]
      },
      formulas: [
        '$p\\% \\text{ de } T = \\dfrac{p}{100} \\times T$',
        'Échelle $e$ : $d_{\\text{réelle}} = \\dfrac{d_{\\text{plan}}}{e}$',
        '$v = \\dfrac{d}{t}$ ; $d = v \\times t$ ; $t = \\dfrac{d}{v}$',
        'Conversion : $1\\,\\text{km/h} = \\dfrac{1}{3{,}6}\\,\\text{m/s}$'
      ],
      recap: [
        '$p\\%$ de $T$ = $\\dfrac{p}{100} \\times T$. Ne jamais oublier de diviser par 100.',
        'Les hausses et baisses de pourcentage ne s\'annulent pas : $+20\\%$ puis $-20\\%$ donne $-4\\%$.',
        'Vitesse = distance ÷ temps. Vérifier que les unités sont cohérentes.',
        'Échelle : multiplier la distance sur la carte par le dénominateur de l\'échelle.'
      ],
      piege: 'Piège avec les unités de vitesse : $90$ km/h $\\neq$ $90$ m/s. Pour convertir : $90 \\div 3{,}6 = 25$ m/s. Toujours vérifier que distance et temps sont dans les mêmes unités que la vitesse.'
    },

    quiz: [
      {
        q: 'Un article coûte $80$ €. Il est soldé à $-25\\%$. Quel est son nouveau prix ?',
        options: ['$55$ €', '$60$ €', '$65$ €', '$20$ €'],
        answer: 1,
        correction: 'Réduction : $25\\%$ de $80 = \\dfrac{25}{100} \\times 80 = 20$ €. Nouveau prix : $80 - 20 = 60$ €.'
      },
      {
        q: 'Sur une carte à l\'échelle $1/50\\,000$, deux villes sont distantes de $4$ cm. Quelle est la distance réelle ?',
        options: ['$200$ m', '$2$ km', '$20$ km', '$200$ km'],
        answer: 1,
        correction: '$d_{\\text{réelle}} = 4 \\times 50\\,000 = 200\\,000$ cm $= 2000$ m $= 2$ km.'
      },
      {
        q: 'Un article est d\'abord augmenté de $20\\%$, puis réduit de $20\\%$. Quel est le prix final par rapport au prix initial ?',
        options: [
          'Le même prix qu\'au départ : $+20\\%$ puis $-20\\%$ s\'annulent.',
          'Un prix inférieur de $4\\%$ au départ : $100 \\to 120 \\to 96$.',
          'Un prix supérieur de $4\\%$ au départ.',
          'Impossible à savoir sans connaître le prix initial.'
        ],
        answer: 1,
        correction: 'Les pourcentages ne s\'annulent pas ! Partir de $100$ € : $+20\\%$ → $120$ €, puis $-20\\%$ de $120$ → $120 \\times 0{,}8 = 96$ €. Le résultat est $96$ €, soit $4\\%$ de moins que le départ.'
      }
    ],

    /* ELARGISSEMENT ET CORRECTION DU 2026-09-13.

       DEFAUT D'ACCORD, corrige d'abord : l'enonce etait fige au feminin
       (« Une {item} ... Elle est soldee ») alors que la liste des contextes
       contient « velo », masculin. Un tirage sur cinq imprimait donc
       « Une velo coute 120 €. Elle est soldee... ». Chaque contexte porte
       desormais son genre, et l'article comme le pronom en decoulent.

       ETAT DE DEPART : le generateur ne rendait QU'UNE tache, le prix solde,
       soit 5 moules et 3 enonces de banque. L'evaluation teste pourtant quatre
       choses distinctes — prix solde, echelle cartographique, vitesse moyenne
       et taux de reduction a retrouver — dont trois sans aucun exercice
       d'entrainement. On ajoute donc ces trois taches, chacune adossee a une
       erreur frequente de la fiche professeur :
         - l'echelle, ou l'eleve oublie la conversion des centimetres en metres ;
         - la vitesse, ou il multiplie au lieu de diviser (ou l'inverse) ;
         - le taux a retrouver, le probleme INVERSE, que rien ne travaillait. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['solde', 'echelle', 'vitesse', 'tauxInverse']);

        /* Separateur de milliers a la francaise (espace fine insecable), que
           fr() ne pose pas : fr(25000) rend « 25000 » alors que le cours du
           chapitre ecrit « 25\,000 ». On garde donc la convention du livre. */
        const milliers = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');

        if (tache === 'echelle') {
          /* Echelles usuelles des cartes, et distances choisies pour que le
             resultat tombe juste en metres : l'objet du chapitre est la
             proportionnalite, pas l'arrondi. */
          const echelle = pick([10000, 25000, 50000]);
          const cm = rand(2, 9);
          // distance reelle en cm, puis en metres
          const metres = cm * echelle / 100;
          return {
            statement: `🗺️ Sur une carte à l'échelle $\\dfrac{1}{${milliers(echelle)}}$, deux villages sont distants de $${cm}$ cm.<br/>Quelle est la distance réelle, en mètres ?`,
            answer: metres,
            tolerance: 0,
            unit: 'm',
            hint: `$1$ cm sur la carte représente $${milliers(echelle)}$ cm en réalité.<br/><br/>Calcule d'abord la distance réelle en centimètres, puis convertis en mètres ($1$ m $= 100$ cm).`,
            solution: [
              `Une échelle compare deux longueurs de même unité.`,
              `Distance réelle en centimètres : $${cm} \\times ${milliers(echelle)} = ${milliers(cm * echelle)}$ cm.`,
              `Conversion en mètres : $${milliers(cm * echelle)} \\div 100 = ${milliers(metres)}$ m.`,
              `L'échelle $\\dfrac{1}{${milliers(echelle)}}$ signifie que la réalité est $${milliers(echelle)}$ fois plus grande que la carte.`
            ]
          };
        }

        if (tache === 'vitesse') {
          /* Vitesse et duree choisies pour que la distance reste entiere ou a
             une decimale : l'eleve doit reconnaitre qu'il faut MULTIPLIER,
             ce qui est le point de l'exercice. */
          const v = pick([12, 15, 18, 20, 24, 30]);
          const t = pick([2, 3, 0.5, 1.5, 2.5]);
          const d = v * t;
          return {
            statement: `🚴 Un cycliste roule à la vitesse constante de $${v}$ km/h pendant $${fr(t)}$ heure(s).<br/>Quelle distance parcourt-il, en kilomètres ?`,
            answer: d,
            tolerance: 0,
            unit: 'km',
            hint: `La vitesse est une distance PAR heure.<br/><br/>En $${fr(t)}$ heure(s), on parcourt donc $${fr(t)}$ fois cette distance.`,
            solution: [
              `La distance se calcule en multipliant la vitesse par la durée.`,
              `$d = v \\times t = ${v} \\times ${fr(t)} = ${fr(d)}$ km.`,
              `Contrôle de vraisemblance : en $1$ heure on ferait $${v}$ km, donc en $${fr(t)}$ heure(s) le résultat doit être ${t < 1 ? 'plus petit' : 'plus grand'}.`
            ]
          };
        }

        if (tache === 'tauxInverse') {
          /* PROBLEME INVERSE : on donne les deux prix et on cherche le TAUX.
             Aucun exercice ne le travaillait, alors que la question 4 de
             l'evaluation le demande. Les valeurs sont choisies pour que le taux
             soit entier. */
          const taux = pick([10, 15, 20, 25, 30, 40]);
          const prix = pick([80, 120, 160, 200, 240, 400]);
          const nouveau = prix * (100 - taux) / 100;
          return {
            statement: `🏷️ Le prix d'un article passe de $${prix}$ € à $${fr(nouveau)}$ €.<br/>Quel est le pourcentage de réduction ?`,
            answer: taux,
            tolerance: 0,
            unit: '%',
            hint: `Calcule d'abord la baisse en euros.<br/><br/>Puis compare-la au prix de DÉPART, jamais au prix d'arrivée.`,
            solution: [
              `On rapporte la baisse au prix de départ.`,
              `Baisse : $${prix} - ${fr(nouveau)} = ${fr(prix - nouveau)}$ €.`,
              `Pourcentage : $\\dfrac{${fr(prix - nouveau)}}{${prix}} \\times 100 = ${fr(taux)}\\%$.`,
              `Le dénominateur est le prix de DÉPART : une baisse se rapporte toujours à ce qu'on avait avant.`
            ]
          };
        }

        // Tache d'origine, avec l'accord de genre corrige.
        const ctx = pick([
          { item: 'veste', emoji: '🧥', genre: 'f' },
          { item: 'paire de baskets', emoji: '👟', genre: 'f' },
          { item: 'console de jeux', emoji: '🎮', genre: 'f' },
          { item: 'vélo', emoji: '🚲', genre: 'm' },
          { item: 'montre', emoji: '⌚', genre: 'f' }
        ]);
        const article = ctx.genre === 'f' ? 'Une' : 'Un';
        const pronom = ctx.genre === 'f' ? 'Elle est soldée' : 'Il est soldé';
        const prix = pick([50, 80, 120, 200, 250]);
        const taux = pick([10, 20, 25, 30, 40]);
        const reduction = prix * taux / 100;
        const newPrix = prix - reduction;
        return {
          statement: `${ctx.emoji} ${article} ${ctx.item} coûte $${prix}$ €. ${pronom} à $-${taux}\\%$.<br/>Quel est son nouveau prix en euros ?`,
          answer: newPrix,
          tolerance: 0,
          unit: '€',
          hint: `Calcule d'abord la réduction : $${taux}\\%$ de $${prix}$, puis soustrais-la du prix initial.`,
          solution: [
            `On calcule d'abord la réduction en euros, puis on la retire.`,
            `Réduction : $\\dfrac{${taux}}{100} \\times ${prix} = ${fr(reduction)}$ €.`,
            `Nouveau prix : $${prix} - ${fr(reduction)} = ${fr(newPrix)}$ €.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un cycliste effectue un trajet de $60$ km. Il roule d\'abord $1{,}5$ h à $30$ km/h, puis s\'arrête $15$ min, puis continue à $20$ km/h.',
      tasks: [
        'Quelle distance parcourt-il lors de la première partie du trajet ?',
        'Quelle distance lui reste-t-il après la pause ?',
        'Combien de temps lui faut-il pour finir (en heures) ?'
      ],
      solutions: [
        '$d_1 = 30 \\times 1{,}5 = 45$ km.',
        'Distance restante : $60 - 45 = 15$ km.',
        '$t = \\dfrac{15}{20} = 0{,}75$ h $= 45$ min.'
      ],
      finalAnswer: 'Il lui faut encore $45$ minutes pour terminer les $15$ km restants.'
    },

    evaluation: {
      title: 'Évaluation — Proportionnalité appliquée',
      duration: '25 min',
      questions: [
        {
          statement: 'Un article coûte $150$ €. Il est soldé à $-30\\%$. Quel est son nouveau prix ?',
          type: 'numeric',
          answer: 105,
          tolerance: 0,
          unit: '€',
          points: 2,
          correction: 'Réduction : $30\\%$ de $150 = \\dfrac{30}{100} \\times 150 = 45$ €. Nouveau prix : $150 - 45 = 105$ €.'
        },
        {
          statement: 'Sur une carte à l\'échelle $\\dfrac{1}{25\\,000}$, deux villages sont distants de $6$ cm. Quelle est la distance réelle en mètres ?',
          type: 'numeric',
          answer: 1500,
          tolerance: 0,
          unit: 'm',
          points: 2,
          correction: '$d_{\\text{réelle}} = 6 \\times 25\\,000 = 150\\,000$ cm $= 1\\,500$ m.'
        },
        {
          statement: 'Un cycliste roule à $18$ km/h pendant $2{,}5$ heures. Quelle distance parcourt-il ?',
          type: 'numeric',
          answer: 45,
          tolerance: 0,
          unit: 'km',
          points: 2,
          correction: '$d = v \\times t = 18 \\times 2{,}5 = 45$ km.'
        },
        {
          statement: 'Un prix passe de $200$ € à $170$ €. Quel est le pourcentage de réduction ?',
          type: 'numeric',
          answer: 15,
          tolerance: 0,
          unit: '%',
          points: 2,
          correction: 'Réduction absolue : $200 - 170 = 30$ €. Pourcentage : $\\dfrac{30}{200} \\times 100 = 15\\%$.'
        },
        {
          statement: 'Un article subit une hausse de $10\\%$ puis une baisse de $10\\%$. Le prix final est :',
          type: 'multiple-choice',
          options: [
            'Égal au prix initial.',
            'Inférieur de $1\\%$ au prix initial.',
            'Supérieur de $1\\%$ au prix initial.',
            'Impossible à déterminer sans connaître le prix initial.'
          ],
          answer: 1,
          points: 2,
          correction: 'Avec un prix initial de $100$ € : $+10\\% \\to 110$ €, puis $-10\\%$ de $110 \\to 110 \\times 0{,}9 = 99$ €. Le prix final est $99$ €, soit $1\\%$ de moins.'
        }
      ]
    }
  });
