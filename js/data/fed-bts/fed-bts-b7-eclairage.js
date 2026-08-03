/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b7-eclairage.js
   BTS FED — S8-B7 Éclairage intérieur et extérieur — méthode des lumens, éclairement requis
   Source (éclairement recommandé NF EN 12464-1 : bureau 500 lux, salle de classe 300 lux) :
   https://bureau-store.fr/news/eclairage-bureau/norme-eclairage-dans-les-bureaux (consulté 2026-08-03)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b7-eclairage',
    level: 3, subject: 'fed',
    icon: '💡',
    title: 'Éclairage',
    subtitle: 'Grandeurs photométriques, méthode des lumens, dimensionnement',
    keywords: ['Lumen', 'Lux', 'Utilance', 'Facteur de maintenance', 'Méthode des lumens'],
    physics: 'Un bureau doit atteindre $500$ lux sur le plan de travail, une salle de classe $300$ lux (norme NF EN 12464-1) : combien de luminaires faut-il installer pour y parvenir ? La <strong>méthode des lumens</strong> répond à cette question en tenant compte non seulement du flux lumineux des luminaires, mais aussi de la géométrie du local et du vieillissement de l\'installation.',

    cours: {
      intro: 'L\'éclairage d\'un local se caractérise par plusieurs <strong>grandeurs photométriques</strong> : le <strong>flux lumineux</strong> $\\Phi$ (en lumens, lm), quantité totale de lumière émise par une source ; et l\'<strong>éclairement</strong> $E$ (en lux, lx), quantité de flux lumineux reçue par unité de surface ($1$ lux $=1$ lm/m²).<br/><br/>La norme <strong>NF EN 12464-1</strong> fixe des éclairements moyens minimaux selon l\'usage du local : $500$ lux pour un bureau, $300$ lux pour une salle de classe, $100$ à $200$ lux pour une zone de circulation. Ces valeurs servent de base au dimensionnement de l\'installation d\'éclairage.<br/><br/>Le flux total à installer ne se déduit pas directement de l\'éclairement visé et de la surface : il faut aussi tenir compte de l\'<strong>utilance</strong> $U_f$ (part du flux émis par les luminaires qui atteint effectivement le plan de travail, compte tenu de la géométrie du local et des réflexions sur les parois) et du <strong>facteur de maintenance</strong> $F_m$ (anticipation de la baisse de performance dans le temps : poussière, vieillissement des sources). C\'est la <strong>méthode des lumens</strong> (ou méthode du flux total).',
      definitions: [
        { term: 'Flux lumineux $\\Phi$', def: 'Quantité totale de lumière émise par une source, en lumens (lm) — caractéristique intrinsèque d\'un luminaire, donnée constructeur.' },
        { term: 'Éclairement $E$', def: 'Quantité de flux lumineux reçue par unité de surface, en lux (lx) : $1$ lx $=1$ lm/m². Valeurs recommandées (NF EN 12464-1) : $500$ lx (bureau), $300$ lx (salle de classe), $100$-$200$ lx (circulation).' },
        { term: 'Utilance $U_f$', def: 'Coefficient sans unité représentant la part du flux total des luminaires qui atteint réellement le plan de travail (dépend de la géométrie du local, de la hauteur de suspension, de la réflectance des parois) — valeur usuelle $0{,}5$ à $0{,}7$.' },
        { term: 'Facteur de maintenance $F_m$', def: 'Coefficient sans unité anticipant la baisse de performance de l\'installation dans le temps (encrassement, vieillissement des sources) — valeur usuelle de l\'ordre de $0{,}8$.' },
        { term: 'Flux total nécessaire $\\Phi_{\\text{total}}$', def: 'Flux lumineux total à installer pour atteindre l\'éclairement visé : $\\Phi_{\\text{total}} = \\dfrac{E \\times S}{U_f \\times F_m}$, avec $E$ en lux et $S$ la surface du local en m².' }
      ],
      method: {
        title: 'Dimensionner un éclairage par la méthode des lumens',
        steps: [
          '<strong>Choisir l\'éclairement requis</strong> $E$ selon l\'usage du local (norme NF EN 12464-1).',
          '<strong>Calculer la surface</strong> $S$ du local (m²).',
          '<strong>Estimer l\'utilance</strong> $U_f$ et le <strong>facteur de maintenance</strong> $F_m$ (abaques constructeur ou valeurs usuelles).',
          '<strong>Calculer le flux total nécessaire</strong> $\\Phi_{\\text{total}} = (E \\times S)/(U_f \\times F_m)$.',
          '<strong>Diviser par le flux unitaire</strong> d\'un luminaire choisi pour obtenir le nombre de luminaires nécessaires (arrondi à l\'entier supérieur).'
        ]
      },
      example: {
        statement: 'Un bureau de $24$ m² ($E=500$ lx requis) doit être équipé de luminaires LED de $3\\,800$ lm chacun, avec $U_f=0{,}6$ et $F_m=0{,}8$.<br/><br/>Calculer le flux total nécessaire puis le nombre de luminaires à installer.',
        steps: [
          '$\\Phi_{\\text{total}} = (E \\times S)/(U_f \\times F_m) = (500 \\times 24)/(0{,}6 \\times 0{,}8) = 12\\,000/0{,}48 = 25\\,000$ lm.',
          'Nombre de luminaires : $25\\,000/3\\,800 \\approx 6{,}6$, à arrondir à l\'entier supérieur.'
        ],
        answer: 'Il faut <strong>$7$ luminaires</strong> de $3\\,800$ lm pour atteindre $500$ lux sur ce bureau de $24$ m², compte tenu de l\'utilance et du facteur de maintenance retenus.'
      },
      formulas: [
        '$\\Phi_{\\text{total}} = \\dfrac{E \\times S}{U_f \\times F_m}$ (flux total nécessaire, en lm)',
        '$N_{\\text{luminaires}} = \\Phi_{\\text{total}}/\\Phi_{\\text{unitaire}}$ (arrondi à l\'entier supérieur)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Du flux émis à l\'éclairement reçu',
        title: 'Deux facteurs réduisent le flux réellement utile',
        description: 'Le flux total émis par les luminaires est réduit par l\'utilance (pertes géométriques, absorption par les parois) puis par le facteur de maintenance (vieillissement), pour ne laisser que le flux réellement disponible sur le plan de travail.',
        svg: `
          <svg viewBox="0 0 480 200" role="img" aria-labelledby="ecl-graph-title ecl-graph-desc">
            <title id="ecl-graph-title">Chaine du flux lumineux vers l'eclairement utile</title>
            <desc id="ecl-graph-desc">Trois boites reliees par des fleches : flux total emis, reduit par l'utilance Uf, puis par le facteur de maintenance Fm, pour aboutir a l'eclairement utile sur le plan de travail.</desc>

            <rect class="frame-line" x="20" y="80" width="110" height="50" fill="none"></rect>
            <text class="label-soft" x="75" y="110" text-anchor="middle">Φtotal (lm)</text>

            <line class="curve-main" x1="130" y1="105" x2="180" y2="105" marker-end="url(#arrow-fed-ecl)"></line>
            <text class="annotation-label" x="132" y="95" text-anchor="start">× Uf</text>

            <rect class="frame-line" x="180" y="80" width="110" height="50" fill="none"></rect>
            <text class="label-soft" x="235" y="110" text-anchor="middle">Flux utile</text>

            <line class="curve-main" x1="290" y1="105" x2="340" y2="105" marker-end="url(#arrow-fed-ecl)"></line>
            <text class="annotation-label" x="292" y="95" text-anchor="start">× Fm</text>

            <rect class="frame-line" x="340" y="80" width="120" height="50" fill="none"></rect>
            <text class="label-soft" x="400" y="110" text-anchor="middle">E (lux)</text>

            <defs>
              <marker id="arrow-fed-ecl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <text class="label-soft" x="240" y="165" text-anchor="middle">Φtotal = (E × S) / (Uf × Fm)</text>
          </svg>
        `,
        notes: [
          'Le <strong>flux total</strong> émis par les luminaires n\'est jamais intégralement reçu sur le plan de travail.',
          'L\'<strong>utilance</strong> $U_f$ traduit les pertes géométriques (rayonnement hors zone utile, absorption par les parois).',
          'Le <strong>facteur de maintenance</strong> $F_m$ anticipe la baisse de performance dans le temps (poussière, vieillissement des sources).'
        ],
        reading: 'Suis la chaîne de gauche à droite : chaque flèche représente une réduction du flux disponible, jusqu\'à l\'éclairement effectivement reçu.',
        caption: 'La méthode des lumens relie le flux total des luminaires à l\'éclairement réellement disponible sur le plan de travail.'
      },
      recap: [
        'Le <strong>flux lumineux</strong> $\\Phi$ (lm) caractérise une source ; l\'<strong>éclairement</strong> $E$ (lx) caractérise la lumière reçue par une surface.',
        'La norme <strong>NF EN 12464-1</strong> fixe des éclairements recommandés : $500$ lx (bureau), $300$ lx (salle de classe).',
        'L\'<strong>utilance</strong> $U_f$ et le <strong>facteur de maintenance</strong> $F_m$ réduisent le flux total réellement disponible.',
        'Méthode des lumens : $\\Phi_{\\text{total}} = (E\\times S)/(U_f \\times F_m)$, puis $N_{\\text{luminaires}} = \\Phi_{\\text{total}}/\\Phi_{\\text{unitaire}}$.',
        'Le nombre de luminaires obtenu doit toujours être <strong>arrondi à l\'entier supérieur</strong>, jamais au plus proche.'
      ],
      piege: 'Le piège classique est d\'oublier l\'utilance et le facteur de maintenance en calculant simplement $\\Phi_{\\text{total}} = E \\times S$ : cela sous-estime largement le flux nécessaire, puisque $U_f \\times F_m$ est toujours inférieur à $1$ (typiquement $0{,}4$ à $0{,}56$ en combinant les deux facteurs), ce qui conduirait à sous-dimensionner l\'installation d\'un facteur $2$ environ. Attention aussi à toujours arrondir $N_{\\text{luminaires}}$ à l\'entier <strong>supérieur</strong> : arrondir au plus proche pourrait conduire à un éclairement inférieur à la valeur requise par la norme.'
    },

    quiz: [
      {
        q: 'L\'éclairement, exprimé en lux, correspond à :',
        options: [
          'La quantité totale de flux lumineux émise par une source',
          'La quantité de flux lumineux reçue par unité de surface',
          'Le nombre de luminaires installés dans un local',
          'La puissance électrique consommée par un luminaire'
        ],
        answer: 1,
        correction: 'L\'éclairement (lux) mesure le flux lumineux reçu par unité de surface ($1$ lx $=1$ lm/m²), à distinguer du flux lumineux total émis par une source (lumens).'
      },
      {
        q: 'Dans la méthode des lumens, l\'utilance $U_f$ et le facteur de maintenance $F_m$ ont pour effet de :',
        options: [
          'Augmenter le flux total nécessaire par rapport à un calcul simplifié $E \\times S$',
          'Diminuer le flux total nécessaire par rapport à un calcul simplifié $E \\times S$',
          'N\'avoir aucun effet sur le résultat',
          'Remplacer entièrement le calcul de surface'
        ],
        answer: 0,
        correction: 'Comme $U_f$ et $F_m$ sont tous deux inférieurs à $1$ et se trouvent au dénominateur, le flux total nécessaire $\\Phi_{\\text{total}}=(E\\times S)/(U_f\\times F_m)$ est toujours supérieur au simple produit $E\\times S$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une salle de classe',
          'un open space de bureaux',
          'une salle de réunion',
          'un atelier de maintenance technique'
        ]);
        const E = pick([300, 400, 500]);
        const L = rand(5, 9);
        const l = rand(4, 7);
        const S = L * l;
        const Uf = randFloat(0.5, 0.65, 2);
        const Fm = 0.8;
        const PhiTotal = Math.round((E * S) / (Uf * Fm));
        return {
          statement: `Dans ${contexte} de $${L}$ m $\\times$ $${l}$ m, l'éclairement requis est $E=${E}$ lx, avec une utilance $U_f=${fr(Uf, 2)}$ et un facteur de maintenance $F_m=0{,}80$.<br/><br/>Calcule le flux total nécessaire $\\Phi_{\\text{total}}$ (en lm, arrondi à la centaine).`,
          answer: Math.round(PhiTotal / 100) * 100,
          tolerance: 200,
          unit: 'lm',
          hint: 'Calcule d\'abord $S=L\\times l$, puis applique $\\Phi_{\\text{total}}=(E\\times S)/(U_f\\times F_m)$.',
          solution: [
            `Surface : $S = ${L} \\times ${l} = ${S}$ m².`,
            `$\\Phi_{\\text{total}} = (${E} \\times ${S})/(${fr(Uf, 2)} \\times 0{,}80) \\approx ${PhiTotal}$ lm.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une salle de réunion de $8$ m $\\times$ $5$ m doit atteindre $E=400$ lx, avec $U_f=0{,}55$ et $F_m=0{,}8$. Les luminaires LED disponibles délivrent chacun $\\Phi_{\\text{unitaire}}=4\\,200$ lm pour une puissance de $32$ W.',
      tasks: [
        'Calculer la surface $S$ de la salle.',
        'Calculer le flux total nécessaire $\\Phi_{\\text{total}}$.',
        'Calculer le nombre de luminaires nécessaires (arrondi à l\'entier supérieur).',
        'Calculer la puissance électrique totale installée, puis la densité de puissance (en W/m²) de cette installation.'
      ],
      solutions: [
        '$S = 8 \\times 5 = 40$ m².',
        '$\\Phi_{\\text{total}} = (400\\times40)/(0{,}55\\times0{,}8) = 16\\,000/0{,}44 \\approx 36\\,364$ lm.',
        '$N = 36\\,364/4\\,200 \\approx 8{,}66$, arrondi à <strong>$9$ luminaires</strong>.',
        'Puissance totale : $9 \\times 32 = 288$ W. Densité de puissance : $288/40 = 7{,}2$ W/m².'
      ],
      finalAnswer: 'Il faut $9$ luminaires de $4\\,200$ lm pour atteindre $400$ lx dans cette salle de $40$ m², pour une puissance installée de $288$ W, soit une densité de $7{,}2$ W/m².'
    },

    evaluation: {
      title: 'Évaluation — Éclairage',
      duration: '20 min',
      questions: [
        {
          statement: 'Un local de $30$ m² doit atteindre $E=300$ lx, avec $U_f=0{,}6$ et $F_m=0{,}8$. Calculer $\\Phi_{\\text{total}}$ (en lm, arrondi à la centaine).',
          type: 'numeric',
          answer: 18800,
          tolerance: 400,
          unit: 'lm',
          points: 3,
          correction: '$\\Phi_{\\text{total}} = (300\\times30)/(0{,}6\\times0{,}8) = 9\\,000/0{,}48 = 18\\,750$ lm.'
        },
        {
          statement: 'Avec ce flux total et des luminaires de $3\\,500$ lm chacun, calculer le nombre de luminaires nécessaires (entier).',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$18\\,750/3\\,500 \\approx 5{,}36$, arrondi à l\'entier supérieur : $6$ luminaires.'
        },
        {
          statement: 'Selon la norme NF EN 12464-1, l\'éclairement recommandé sur le plan de travail d\'un bureau est de :',
          type: 'multiple-choice',
          options: [
            '100 lux',
            '300 lux',
            '500 lux',
            '1 000 lux'
          ],
          answer: 2,
          points: 2,
          correction: 'La norme recommande $500$ lux sur le plan de travail d\'un bureau, contre $300$ lux pour une salle de classe.'
        },
        {
          statement: 'L\'utilance $U_f$ d\'un local dépend principalement de :',
          type: 'multiple-choice',
          options: [
            'La couleur des vêtements des occupants',
            'La géométrie du local, la hauteur de suspension des luminaires et la réflectance des parois',
            'Uniquement de la puissance électrique des luminaires',
            'Le nombre d\'occupants du local'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'utilance traduit la part du flux émis qui atteint réellement le plan de travail, ce qui dépend de la géométrie du local (dimensions, hauteur) et de la réflectance des parois (murs, plafond).'
        },
        {
          statement: 'Pourquoi le nombre de luminaires calculé par la méthode des lumens doit-il toujours être arrondi à l\'entier supérieur ?',
          type: 'multiple-choice',
          options: [
            'Pour des raisons esthétiques uniquement',
            'Pour garantir que l\'éclairement obtenu reste au moins égal à l\'éclairement requis par la norme',
            'Parce que les luminaires ne peuvent être vendus qu\'en nombre pair',
            'Cela n\'a aucune importance, l\'arrondi au plus proche convient toujours'
          ],
          answer: 1,
          points: 3,
          correction: 'Arrondir à l\'entier inférieur ou au plus proche risquerait de fournir un flux total inférieur au flux nécessaire, donc un éclairement en dessous de l\'exigence normative — l\'arrondi supérieur garantit la conformité.'
        }
      ]
    }
  });
