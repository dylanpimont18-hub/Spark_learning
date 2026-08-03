/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b3-3-traitement-eau-sanitaire.js
   BTS FED — S8-B3-3 Traitement d'eau sanitaire — adoucisseur, autonomie
   Source (pouvoir d'échange résine ≈ 5 °f.m³/L, méthode de calcul d'autonomie) :
   https://www.savadou.fr/comment-calculer-capacite-adoucisseur-eau.html (consulté 2026-08-03)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b3-3-traitement-eau-sanitaire',
    level: 3, subject: 'fed',
    icon: '🧪',
    title: 'Traitement d\'eau sanitaire',
    subtitle: 'Adoucisseur, dureté de l\'eau (TH), autonomie entre régénérations',
    keywords: ['Adoucisseur', 'Dureté', 'TH', 'Résine échangeuse', 'Autonomie', 'Régénération'],
    physics: 'Une eau trop <strong>dure</strong> entartre chaudières, ballons ECS et robinetterie — un adoucisseur retire cet excès de calcaire grâce à une <strong>résine échangeuse d\'ions</strong>. Cette résine a une capacité limitée : au bout d\'un certain volume d\'eau traité, elle doit se <strong>régénérer</strong> (rinçage au sel). Calculer cette <strong>autonomie</strong> est la question centrale du dimensionnement d\'un adoucisseur.',

    cours: {
      intro: 'La <strong>dureté de l\'eau (TH, titre hydrotimétrique)</strong>, exprimée en degrés français (°f), mesure la teneur en ions calcium et magnésium dissous. Une eau à TH élevé (eau « dure ») dépose du <strong>tartre</strong> dès qu\'elle est chauffée, ce qui réduit les performances des échangeurs (module B1-1), encrasse les résistances de ballons ECS et use prématurément les appareils sanitaires.<br/><br/>Un <strong>adoucisseur</strong> corrige ce problème en faisant passer l\'eau à travers une <strong>résine échangeuse d\'ions</strong> : les ions calcium et magnésium sont retenus par la résine, en échange d\'ions sodium. Au fil du traitement, la résine se sature progressivement — elle perd sa capacité à adoucir l\'eau — jusqu\'à devoir être <strong>régénérée</strong> par un rinçage à l\'eau salée (saumure), qui libère les ions retenus et restaure la capacité d\'échange.<br/><br/>Dimensionner un adoucisseur revient à choisir un volume de résine suffisant pour que l\'<strong>autonomie</strong> entre deux régénérations reste raisonnable (ni trop courte, ce qui userait prématurément la résine et gaspillerait du sel, ni trop longue, ce qui laisserait l\'eau stagner dans la résine).',
      definitions: [
        { term: 'Dureté de l\'eau (TH)', def: 'Titre hydrotimétrique, exprimé en degrés français (°f), mesurant la concentration en ions calcium et magnésium. Une eau est dite douce en dessous de $15\\,°f$, dure au-delà de $30\\,°f$.' },
        { term: 'Résine échangeuse d\'ions', def: 'Matériau granulaire qui retient les ions calcium/magnésium de l\'eau en les échangeant contre des ions sodium, jusqu\'à saturation.' },
        { term: 'Pouvoir d\'échange de la résine', def: 'Capacité de traitement d\'un litre de résine, exprimée en °f·m³/L (volume d\'eau, en m³, que ce litre de résine peut adoucir pour chaque degré français de dureté) — valeur usuelle de l\'ordre de $5\\,°f\\cdot m^3/L$.' },
        { term: 'Capacité d\'échange totale $C$', def: 'Capacité totale de la charge de résine installée : $C = V_{\\text{résine}} \\times 5$, en °f·m³, avec $V_{\\text{résine}}$ le volume de résine en litres.' },
        { term: 'Autonomie', def: 'Durée pendant laquelle l\'adoucisseur peut fonctionner sans régénération, avant que la résine ne soit saturée : $\\text{Autonomie (j)} = \\dfrac{C}{TH \\times Q_j}$, avec $Q_j$ la consommation d\'eau journalière (m³/j) et $TH$ en °f.' }
      ],
      method: {
        title: 'Calculer l\'autonomie d\'un adoucisseur entre deux régénérations',
        steps: [
          '<strong>Relever la dureté</strong> $TH$ de l\'eau à traiter (en °f, mesurée ou fournie par le distributeur d\'eau).',
          '<strong>Estimer la consommation journalière</strong> $Q_j$ (m³/j) du bâtiment ou du logement.',
          '<strong>Calculer la capacité d\'échange totale</strong> $C = V_{\\text{résine}} \\times 5$ (°f·m³), à partir du volume de résine installé.',
          '<strong>Calculer l\'autonomie</strong> $\\text{Autonomie} = C/(TH \\times Q_j)$, en jours.',
          '<strong>Comparer à l\'autonomie recommandée</strong> (généralement $10$ à $14$ jours) : si l\'autonomie calculée est trop courte, augmenter le volume de résine (adoucisseur plus grand) ; si elle est très longue, un volume de résine plus modeste suffit.'
        ]
      },
      example: {
        statement: 'Un pavillon de $4$ personnes consomme $Q_j = 0{,}6$ m³/j d\'une eau à $TH=30\\,°f$. L\'adoucisseur installé contient $V_{\\text{résine}}=25$ L de résine.<br/><br/>Calculer l\'autonomie de cet adoucisseur.',
        steps: [
          'Capacité d\'échange totale : $C = 25 \\times 5 = 125$ °f·m³.',
          'Consommation journalière en dureté à traiter : $TH \\times Q_j = 30 \\times 0{,}6 = 18$ °f·m³/j.',
          '$\\text{Autonomie} = 125/18 \\approx 6{,}9$ jours.'
        ],
        answer: 'L\'autonomie est d\'environ $7$ jours, en dessous de la fourchette recommandée de $10$ à $14$ jours : il serait préférable d\'installer un peu plus de résine pour espacer les régénérations et limiter la consommation de sel.'
      },
      formulas: [
        '$C = V_{\\text{résine}} \\times 5$ (capacité d\'échange totale, en °f·m³, avec $V_{\\text{résine}}$ en L)',
        '$\\text{Autonomie (j)} = \\dfrac{C}{TH \\times Q_j}$ (avec $TH$ en °f, $Q_j$ en m³/j)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Cycle de fonctionnement d\'un adoucisseur',
        title: 'Traitement, saturation progressive, puis régénération',
        description: 'La capacité d\'échange restante de la résine diminue progressivement pendant le traitement de l\'eau, jusqu\'à atteindre le seuil de saturation. Une régénération (rinçage à la saumure) restaure alors la capacité totale, et un nouveau cycle commence.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="adou-graph-title adou-graph-desc">
            <title id="adou-graph-title">Cycle de capacite d'echange d'un adoucisseur au fil du temps</title>
            <desc id="adou-graph-desc">Graphique capacite d'echange restante en fonction du temps. Trois segments en dents de scie descendantes : la capacite decroit lineairement pendant le traitement, puis remonte brutalement a la capacite maximale lors de chaque regeneration, avant de redecroitre.</desc>

            <line class="frame-line" x1="50" y1="230" x2="440" y2="230"></line>
            <line class="guide-line" x1="50" y1="20" x2="50" y2="230"></line>
            <line class="guide-line" x1="50" y1="50" x2="440" y2="50"></line>
            <text class="tick-label" x="55" y="45" text-anchor="start">C (capacité max.)</text>

            <!-- dents de scie -->
            <polyline class="curve-main" points="50,50 175,190 175,50 300,190 300,50 425,190" fill="none"></polyline>

            <line class="guide-line" x1="175" y1="20" x2="175" y2="230"></line>
            <line class="guide-line" x1="300" y1="20" x2="300" y2="230"></line>
            <text class="tick-label" x="175" y="245" text-anchor="middle">régénération</text>
            <text class="tick-label" x="300" y="245" text-anchor="middle">régénération</text>

            <text class="label-soft" x="245" y="255" text-anchor="middle">Temps</text>
            <text class="label-soft" x="45" y="15" text-anchor="start">Capacité restante</text>
          </svg>
        `,
        notes: [
          'Chaque segment descendant représente la <strong>consommation progressive</strong> de la capacité d\'échange de la résine, au fil du volume d\'eau traité.',
          'La remontée verticale correspond à la <strong>régénération</strong> : un rinçage à la saumure qui restaure instantanément la capacité maximale $C$.',
          'La <strong>pente</strong> de chaque segment dépend directement du produit $TH \\times Q_j$ : plus l\'eau est dure ou la consommation élevée, plus la capacité chute vite.'
        ],
        reading: 'Suis un segment descendant (traitement) jusqu\'à la ligne verticale (régénération), puis observe la remontée immédiate à la capacité maximale avant le segment suivant.',
        caption: 'Cycle répété de saturation progressive et de régénération d\'un adoucisseur à résine échangeuse d\'ions.'
      },
      recap: [
        'La <strong>dureté de l\'eau (TH)</strong>, en °f, mesure la teneur en calcium et magnésium — une eau dure entartre les équipements chauffants.',
        'Un <strong>adoucisseur</strong> utilise une résine échangeuse d\'ions pour retirer cette dureté, en échange d\'ions sodium.',
        'La capacité d\'échange totale $C = V_{\\text{résine}} \\times 5$ (°f·m³) diminue progressivement avec le volume d\'eau traité.',
        'L\'<strong>autonomie</strong> entre deux régénérations : $\\text{Autonomie} = C/(TH\\times Q_j)$, à comparer à la plage recommandée de $10$ à $14$ jours.',
        'La <strong>régénération</strong> (rinçage à la saumure) restaure la capacité maximale de la résine pour un nouveau cycle.'
      ],
      piege: 'Le piège classique est d\'oublier que le pouvoir d\'échange de la résine ($5\\,°f\\cdot m^3/L$) est une <strong>valeur usuelle</strong>, pas une constante physique universelle — elle varie selon le type de résine et doit être vérifiée sur la fiche technique du fabricant en situation réelle. Attention aussi à l\'unité de $TH$ : un TH donné en °f ne se convertit pas directement en mg/L de calcium sans un facteur de conversion, et les deux unités ne doivent jamais être mélangées dans un même calcul.'
    },

    quiz: [
      {
        q: 'Le rôle de la résine échangeuse d\'ions d\'un adoucisseur est de :',
        options: [
          'Filtrer les particules solides en suspension dans l\'eau',
          'Retenir les ions calcium et magnésium en les échangeant contre des ions sodium',
          'Chauffer l\'eau avant traitement',
          'Réduire la pression du réseau'
        ],
        answer: 1,
        correction: 'La résine échangeuse d\'ions retient le calcium et le magnésium responsables de la dureté de l\'eau, en les remplaçant par des ions sodium.'
      },
      {
        q: 'L\'autonomie d\'un adoucisseur diminue lorsque :',
        options: [
          'Le volume de résine installé augmente',
          'La dureté de l\'eau (TH) ou la consommation journalière augmente',
          'La régénération est supprimée',
          'Le pouvoir d\'échange de la résine augmente'
        ],
        answer: 1,
        correction: 'Comme l\'autonomie est inversement proportionnelle au produit $TH \\times Q_j$, une eau plus dure ou une consommation plus élevée sature la résine plus vite, réduisant l\'autonomie.'
      },
      {
        q: 'La régénération d\'un adoucisseur consiste à :',
        options: [
          'Remplacer entièrement la résine par de la résine neuve',
          'Rincer la résine à l\'eau salée (saumure) pour libérer les ions retenus et restaurer la capacité d\'échange',
          'Augmenter la dureté de l\'eau volontairement',
          'Arrêter définitivement le traitement de l\'eau'
        ],
        answer: 1,
        correction: 'La régénération rince la résine avec une solution de sel (saumure), ce qui libère les ions calcium/magnésium accumulés et restaure la capacité d\'échange maximale pour un nouveau cycle.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un pavillon individuel',
          'un petit immeuble collectif',
          'une maison rénovée alimentée par un forage',
          'un gîte accueillant plusieurs familles'
        ]);
        const Vresine = pick([15, 20, 25, 30, 40]);
        const TH = rand(25, 40);
        const Qj = randFloat(0.3, 1.0, 2);
        const C = Vresine * 5;
        const autonomie = parseFloat((C / (TH * Qj)).toFixed(1));
        return {
          statement: `Dans ${contexte}, un adoucisseur contient $V_{\\text{résine}} = ${Vresine}$ L de résine (pouvoir d'échange $5\\,°f\\cdot m^3/L$). L'eau a une dureté $TH = ${TH}\\,°f$, pour une consommation journalière $Q_j = ${fr(Qj, 2)}$ m³/j.<br/><br/>Calcule l'autonomie de cet adoucisseur (en jours, arrondie au dixième).`,
          answer: autonomie,
          tolerance: 0.3,
          unit: 'j',
          hint: 'Calcule d\'abord la capacité d\'échange totale $C = V_{\\text{résine}} \\times 5$, puis applique $\\text{Autonomie} = C/(TH\\times Q_j)$.',
          solution: [
            `Capacité d'échange totale : $C = ${Vresine} \\times 5 = ${C}$ °f·m³.`,
            `Consommation journalière en dureté : $TH \\times Q_j = ${TH} \\times ${fr(Qj, 2)} \\approx ${fr(TH * Qj, 2)}$ °f·m³/j.`,
            `$\\text{Autonomie} = ${C}/${fr(TH * Qj, 2)} \\approx ${fr(autonomie, 1)}$ jours.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un immeuble collectif de $10$ logements ($2{,}3$ personnes/logement en moyenne, $110$ L/j/personne tous usages) est alimenté par une eau à $TH = 32\\,°f$. On souhaite choisir le volume de résine d\'un adoucisseur pour obtenir une autonomie d\'au moins $12$ jours (pouvoir d\'échange de la résine $5\\,°f\\cdot m^3/L$).',
      tasks: [
        'Calculer le nombre d\'occupants et la consommation journalière $Q_j$ (en m³/j).',
        'Calculer la consommation journalière en dureté à traiter, $TH \\times Q_j$ (en °f·m³/j).',
        'En déduire la capacité d\'échange minimale $C$ nécessaire pour obtenir une autonomie de $12$ jours.',
        'En déduire le volume de résine minimal $V_{\\text{résine}}$ à installer (arrondir au litre supérieur).'
      ],
      solutions: [
        'Occupants : $10 \\times 2{,}3 = 23$ personnes. $Q_j = 23 \\times 110 = 2\\,530$ L/j $= 2{,}53$ m³/j.',
        '$TH \\times Q_j = 32 \\times 2{,}53 = 80{,}96$ °f·m³/j.',
        '$C = \\text{Autonomie} \\times (TH\\times Q_j) = 12 \\times 80{,}96 \\approx 971{,}5$ °f·m³.',
        '$V_{\\text{résine}} = C/5 = 971{,}5/5 \\approx 194{,}3$ L, soit un volume de résine d\'au moins <strong>$195$ L</strong> à installer (souvent réparti sur deux ou plusieurs bouteilles en parallèle pour une installation collective de cette taille).'
      ],
      finalAnswer: 'Il faut au moins $195$ L de résine pour garantir une autonomie de $12$ jours sur cette installation collective — un volume important qui, en pratique, serait réparti sur plusieurs bouteilles d\'adoucisseur en parallèle.'
    },

    evaluation: {
      title: 'Évaluation — Traitement d\'eau sanitaire',
      duration: '20 min',
      questions: [
        {
          statement: 'Un adoucisseur de $20$ L de résine (pouvoir d\'échange $5\\,°f\\cdot m^3/L$) traite une eau à $TH=28\\,°f$ pour une consommation $Q_j=0{,}5$ m³/j. Calculer l\'autonomie (en jours, arrondie au dixième).',
          type: 'numeric',
          answer: 7.1,
          tolerance: 0.5,
          unit: 'j',
          points: 3,
          correction: '$C = 20\\times5=100$ °f·m³. Autonomie $=100/(28\\times0{,}5)=100/14\\approx7{,}1$ jours.'
        },
        {
          statement: 'Pour obtenir une autonomie de $10$ jours avec $TH=25\\,°f$ et $Q_j=0{,}6$ m³/j, calculer la capacité d\'échange minimale $C$ nécessaire (en °f·m³).',
          type: 'numeric',
          answer: 150,
          tolerance: 5,
          unit: '°f·m³',
          points: 3,
          correction: '$C = 10 \\times 25 \\times 0{,}6 = 150$ °f·m³.'
        },
        {
          statement: 'Une eau à $TH = 8\\,°f$ est qualifiée de :',
          type: 'multiple-choice',
          options: [
            'Eau très dure, nécessitant impérativement un adoucisseur',
            'Eau douce, avec un risque d\'entartrage très limité',
            'Eau salée, impropre à la consommation',
            'Eau dont la dureté ne peut pas être mesurée en °f'
          ],
          answer: 1,
          points: 2,
          correction: 'En dessous de $15\\,°f$, l\'eau est considérée comme douce : le risque d\'entartrage des équipements chauffants reste limité.'
        },
        {
          statement: 'Augmenter le volume de résine d\'un adoucisseur, à dureté et consommation journalière constantes, a pour effet de :',
          type: 'multiple-choice',
          options: [
            'Réduire l\'autonomie entre deux régénérations',
            'Augmenter l\'autonomie entre deux régénérations',
            'N\'avoir aucun effet sur l\'autonomie',
            'Rendre la régénération inutile'
          ],
          answer: 1,
          points: 2,
          correction: 'Plus de résine signifie une capacité d\'échange totale $C$ plus élevée ; comme l\'autonomie est proportionnelle à $C$, elle augmente en conséquence.'
        },
        {
          statement: 'Pourquoi une autonomie trop courte (régénérations très fréquentes) est-elle problématique pour un adoucisseur ?',
          type: 'multiple-choice',
          options: [
            'Parce que la régénération endommage définitivement la résine à chaque cycle',
            'Parce qu\'elle augmente la consommation de sel et l\'usure de l\'installation, sans bénéfice pour la qualité de l\'eau traitée',
            'Parce que la dureté de l\'eau change à chaque régénération',
            'Parce que la régénération est interdite par la réglementation en dessous de 10 jours'
          ],
          answer: 1,
          points: 3,
          correction: 'Des régénérations trop fréquentes consomment davantage de sel et sollicitent plus souvent la vanne de l\'adoucisseur, sans amélioration de la qualité d\'eau — d\'où l\'intérêt de viser une autonomie dans la plage recommandée de 10 à 14 jours.'
        }
      ]
    }
  });
