/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-thermodynamique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-thermodynamique',
    level: 2, subject: 'physique',
    icon: '🌡️',
    title: 'Thermodynamique : premier principe',
    subtitle: 'Énergie interne, transfert thermique et travail, premier principe (ΔU=W+Q), capacité thermique, calorimétrie par effet Joule',
    keywords: ['Énergie interne', 'Premier principe', 'Transfert thermique', 'Travail', 'Calorimétrie'],
    physics: 'Le premier principe de la thermodynamique gouverne le fonctionnement des chauffe-eau et radiateurs électriques, permet de mesurer expérimentalement une capacité thermique par effet Joule, et intervient dans le bilan énergétique des moteurs thermiques et des pompes à chaleur.',

    cours: {
      intro: 'Un système thermodynamique fermé (qui n\'échange pas de matière avec l\'extérieur, mais peut échanger de l\'énergie) possède une <strong>énergie interne</strong> $U$ : à l\'échelle microscopique, elle regroupe l\'énergie cinétique d\'agitation thermique des particules et les énergies d\'interaction entre elles. $U$ est une <strong>fonction d\'état</strong> : sa variation ne dépend que de l\'état initial et de l\'état final, jamais du chemin suivi.<br/><br/>Le <strong>premier principe de la thermodynamique</strong> relie la variation d\'énergie interne aux échanges d\'énergie avec l\'extérieur, sous forme de travail $W$ et de transfert thermique (chaleur) $Q$ : $\\Delta U=W+Q$, ces deux grandeurs étant comptées <strong>positivement</strong> si elles sont reçues par le système (convention dite « du récepteur »).<br/><br/>Pour une phase condensée (solide ou liquide), en l\'absence de changement d\'état, la variation d\'énergie interne s\'exprime simplement $\\Delta U\\approx mc\\Delta T$ : c\'est cette relation qui est exploitée en <strong>calorimétrie</strong> pour mesurer une capacité thermique massique ou une puissance électrique.',
      definitions: [
        { term: 'Énergie interne ($U$)', def: 'Énergie totale, à l\'échelle microscopique, d\'un système : énergie cinétique d\'agitation thermique des particules et énergies d\'interaction entre elles. C\'est une <strong>fonction d\'état</strong> (en J), dont seule la variation $\\Delta U$ a un sens physique mesurable.' },
        { term: 'Premier principe de la thermodynamique', def: 'Pour un système fermé, la variation d\'énergie interne entre deux états est égale à la somme des énergies reçues sous forme de travail et de transfert thermique : $\\Delta U=W+Q$ (convention récepteur : $W &gt; 0$ et $Q &gt; 0$ si reçus par le système).' },
        { term: 'Transfert thermique (chaleur, $Q$)', def: 'Transfert d\'énergie entre deux systèmes à des températures différentes, sans déplacement macroscopique de matière (conduction, convection, rayonnement), qui cesse lorsque l\'équilibre thermique est atteint.' },
        { term: 'Capacité thermique massique ($c$)', def: 'Grandeur caractéristique d\'un matériau (en J/(kg·K)) telle que, pour une phase condensée sans changement d\'état, $\\Delta U\\approx mc\\Delta T$. Pour l\'eau liquide, $c\\approx4\\,180$ J/(kg·K).' }
      ],
      method: {
        title: 'Appliquer le premier principe de la thermodynamique en 3 étapes',
        steps: [
          '<strong>Définir</strong> le système fermé étudié et son état initial/final, puis faire le bilan des échanges d\'énergie avec l\'extérieur : quels sont les travaux $W$ et les transferts thermiques $Q$ reçus (ou cédés) ?',
          '<strong>Appliquer</strong> le premier principe $\\Delta U=W+Q$, en respectant la convention récepteur (compter positivement ce que le système <strong>reçoit</strong>, négativement ce qu\'il <strong>cède</strong>).',
          'Pour une phase condensée sans changement d\'état, <strong>relier</strong> $\\Delta U$ à la variation de température par $\\Delta U\\approx mc\\Delta T$ ; si le système est parfaitement isolé thermiquement ($Q=0$), $\\Delta U=W$ (cas de la calorimétrie par effet Joule).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Bilan énergétique d\'un système fermé',
        title: 'Premier principe de la thermodynamique : ΔU = W + Q',
        description: 'Un système fermé échange de l\'énergie avec l\'extérieur sous forme de travail $W$ et de transfert thermique $Q$. La convention récepteur compte positivement ce que le système reçoit.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="thermo-tle-title thermo-tle-desc">
            <title id="thermo-tle-title">Bilan energetique d'un systeme ferme selon le premier principe</title>
            <desc id="thermo-tle-desc">Un rectangle arrondi represente la frontiere d'un systeme ferme, etiquete Systeme et Delta U en son centre. Une fleche entrante venant de la gauche, etiquetee W, traverse la frontiere et penetre dans le systeme, representant un travail recu. Une fleche entrante venant de la droite, etiquetee Q, traverse egalement la frontiere et penetre dans le systeme, representant un transfert thermique recu. Les deux fleches pointent vers l'interieur du rectangle, illustrant la convention recepteur du premier principe.</desc>

            <defs>
              <marker id="arrow-tle-thermo" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- frontiere du systeme -->
            <rect class="frame-line" x="180" y="90" width="200" height="120" rx="16" fill="var(--diagram-soft)"></rect>
            <text class="label-soft" x="280" y="148" text-anchor="middle">Système</text>
            <text class="annotation-label" x="280" y="180" text-anchor="middle">ΔU</text>

            <!-- travail W recu -->
            <line class="curve-main" x1="70" y1="130" x2="178" y2="130" marker-end="url(#arrow-tle-thermo)"></line>
            <text class="annotation-label" x="55" y="126" text-anchor="end">W</text>

            <!-- chaleur Q recue -->
            <line class="curve-main" x1="490" y1="180" x2="382" y2="180" marker-end="url(#arrow-tle-thermo)"></line>
            <text class="annotation-label" x="505" y="184" text-anchor="start">Q</text>
          </svg>
        `,
        notes: [
          'Les flèches entrantes représentent un travail $W$ et un transfert thermique $Q$ <strong>reçus</strong> par le système : dans la convention récepteur, ils sont alors comptés <strong>positivement</strong>.',
          'Si le système <strong>cède</strong> de l\'énergie à l\'extérieur (travail fourni, chaleur perdue), la grandeur correspondante devient <strong>négative</strong> — la flèche s\'inverserait, mais la relation $\\Delta U=W+Q$ reste valable telle quelle.',
          'L\'énergie interne $U$ est une fonction d\'état : $\\Delta U$ ne dépend que de l\'état initial et de l\'état final du système, jamais du détail de la transformation.'
        ],
        reading: 'Repère la frontière du système (le rectangle) : les flèches $W$ et $Q$ qui la traversent, en entrant, représentent l\'énergie reçue par le système, responsable de la variation $\\Delta U$ de son énergie interne.',
        caption: 'Bilan énergétique d\'un système fermé selon le premier principe de la thermodynamique : $\\Delta U=W+Q$, avec la convention récepteur (positif si reçu par le système).'
      },
      example: {
        statement: 'Une résistance chauffante de puissance $P=40$ W est plongée dans un calorimètre contenant $m=0{,}250$ kg d\'eau, parfaitement isolé thermiquement de l\'extérieur ($Q=0$). Elle fonctionne pendant $\\Delta t=10$ min. On prend $c=4\\,180$ J/(kg·K) pour l\'eau liquide.<br/><br/>Calculer l\'énergie électrique reçue par le système {eau + résistance}, puis l\'élévation de température correspondante.',
        steps: [
          'Système : {eau + résistance}, parfaitement isolé thermiquement ($Q=0$). L\'énergie électrique reçue par effet Joule joue le rôle du travail $W$ dans le premier principe.',
          'Énergie électrique reçue : $W=P\\times\\Delta t=40\\times(10\\times60)=40\\times600=24\\,000$ J.',
          'Premier principe avec $Q=0$ : $\\Delta U=W=24\\,000$ J. Comme le système reste liquide (pas de changement d\'état), $\\Delta U\\approx mc\\Delta T$.',
          'On isole $\\Delta T$ : $\\Delta T=\\dfrac{\\Delta U}{mc}=\\dfrac{24\\,000}{0{,}250\\times4\\,180}=\\dfrac{24\\,000}{1\\,045}\\approx23{,}0°C$.'
        ],
        answer: '$W=24\\,000$ J et $\\Delta T\\approx23{,}0°C$. Cette expérience, réalisable en travaux pratiques, permet de retrouver expérimentalement la capacité thermique massique de l\'eau à partir de mesures de puissance, de durée, de masse et de température.'
      },
      formulas: [
        '$\\Delta U=W+Q$ (premier principe, convention récepteur)',
        'Phase condensée sans changement d\'état : $\\Delta U\\approx mc\\Delta T$',
        'Système parfaitement isolé ($Q=0$) : $\\Delta U=W$',
        'Énergie électrique reçue (effet Joule) : $W=P\\times\\Delta t$ ($\\Delta t$ en s)',
        'Eau liquide : $c\\approx4\\,180$ J/(kg·K)'
      ],
      recap: [
        'Le premier principe $\\Delta U=W+Q$ traduit la <strong>conservation de l\'énergie</strong> : toute variation d\'énergie interne provient d\'un échange avec l\'extérieur, sous forme de travail ou de chaleur.',
        'La convention <strong>récepteur</strong> compte positivement ce que le système <strong>reçoit</strong> : un travail fourni par le système ou une chaleur cédée sont comptés négativement.',
        'Pour une phase condensée sans changement d\'état, $\\Delta U\\approx mc\\Delta T$ : c\'est la base de la calorimétrie.',
        'Un système parfaitement isolé thermiquement ($Q=0$) ne peut faire varier son énergie interne que par un travail reçu : c\'est le principe de la calorimétrie par effet Joule.'
      ],
      piege: 'Une erreur fréquente est d\'oublier la convention récepteur et de compter systématiquement $W$ et $Q$ comme positifs, même lorsque le système cède de l\'énergie à l\'extérieur : un travail fourni par le système ou une chaleur perdue doivent être comptés <strong>négativement</strong> dans $\\Delta U=W+Q$. Attention également à ne pas confondre le transfert thermique $Q$ (lié à une différence de température) avec le travail $W$ (lié à une force, comme la compression d\'un gaz ou un travail électrique).'
    },

    quiz: [
      {
        q: 'Un gaz enfermé dans un cylindre est comprimé par un piston (le gaz reçoit donc un travail) et, simultanément, cède de la chaleur vers l\'extérieur. Quels sont les signes de $W$ et $Q$ pour ce système, dans la convention récepteur ?',
        options: [
          '$W &gt; 0$ (reçu) et $Q &lt; 0$ (cédée)',
          '$W &lt; 0$ et $Q &gt; 0$',
          '$W &gt; 0$ et $Q &gt; 0$',
          '$W &lt; 0$ et $Q &lt; 0$'
        ],
        answer: 0,
        correction: 'Le gaz reçoit un travail de compression : $W &gt; 0$. Il cède de la chaleur vers l\'extérieur (il perd de l\'énergie thermique) : $Q &lt; 0$ dans la convention récepteur.'
      },
      {
        q: 'Un système reçoit un travail $W=120$ J et cède une chaleur $Q=-45$ J vers l\'extérieur. Calculer la variation d\'énergie interne $\\Delta U$.',
        options: [
          '$\\Delta U=75$ J',
          '$\\Delta U=165$ J',
          '$\\Delta U=-75$ J',
          '$\\Delta U=45$ J'
        ],
        answer: 0,
        correction: 'Premier principe : $\\Delta U=W+Q=120+(-45)=75$ J. Il faut additionner les valeurs algébriques, sans changer leur signe.'
      },
      {
        q: 'Une résistance chauffante plongée dans un calorimètre parfaitement isolé ($Q=0$) fonctionne pendant une durée $\\Delta t$. Comment varie l\'énergie interne du système {eau + résistance} ?',
        options: [
          '$\\Delta U=W$ (le travail électrique reçu), ce qui provoque une élévation de température',
          '$\\Delta U=0$ car le système est isolé',
          '$\\Delta U=Q=0$, donc aucune variation de température',
          '$\\Delta U$ est indéterminée sans connaître la chaleur échangée'
        ],
        answer: 0,
        correction: 'Isolé signifie $Q=0$, pas $\\Delta U=0$ : le système peut toujours recevoir un travail (ici électrique). Le premier principe donne $\\Delta U=W+Q=W$, ce qui élève la température de l\'eau via $\\Delta U\\approx mc\\Delta T$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['calorimetrie', 'bilan']);

        if (typeExo === 'calorimetrie') {
          var P = pick([20, 30, 40, 50, 60]);
          var dt = pick([300, 360, 420, 480, 600]);
          var m = pick([0.2, 0.25, 0.3, 0.35, 0.4]);
          var W = P * dt;
          var dT = parseFloat((W / (m * 4180)).toFixed(2));
          var contexte = pick([
            'un chauffe-eau expérimental de laboratoire',
            'un calorimètre de travaux pratiques',
            'un thermoplongeur domestique',
            'une résistance chauffante immergée dans un bain isolé',
            'un dispositif de mesure de capacité thermique par effet Joule'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte + ', une résistance chauffante de puissance $P=' + P + '$ W est plongée dans $m=' + fr(m, 2) + '$ kg d\'eau contenue dans un calorimètre parfaitement isolé ($Q=0$, $c=4\\,180$ J/(kg·K)). Elle fonctionne pendant $\\Delta t=' + dt + '$ s.<br/><br/>Calcule l\'élévation de température $\\Delta T$ de l\'eau (en °C, arrondie au centième).',
            answer: dT,
            tolerance: Math.max(0.1, parseFloat((dT * 0.03).toFixed(2))),
            unit: '°C',
            hint: 'Système isolé ($Q=0$) : $\\Delta U=W=P\\Delta t$, et $\\Delta U\\approx mc\\Delta T$.',
            solution: [
              'Énergie reçue par effet Joule : $W=P\\times\\Delta t=' + P + '\\times' + dt + '=' + fr(W) + '$ J.',
              'Système isolé ($Q=0$) : $\\Delta U=W=' + fr(W) + '$ J, et $\\Delta U\\approx mc\\Delta T$.',
              'Résultat : $\\Delta T=\\dfrac{\\Delta U}{mc}=\\dfrac{' + fr(W) + '}{' + fr(m, 2) + '\\times4\\,180}\\approx' + fr(dT, 2) + '°C$.'
            ]
          };
        } else {
          var Wb = pick([-200, -150, -100, -50, 50, 100, 150, 200, 250, 300]);
          var Qb = pick([-180, -120, -80, -40, 40, 80, 120, 160, 200]);
          var dU = Wb + Qb;
          var contexte2 = pick([
            'un gaz enfermé dans un cylindre au cours d\'une transformation',
            'un système fermé étudié en laboratoire',
            'une enceinte thermodynamique au cours d\'un cycle',
            'un réacteur chimique fermé',
            'un fluide caloporteur dans un circuit fermé'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte2 + ', reçoit un travail $W=' + Wb + '$ J et un transfert thermique $Q=' + Qb + '$ J (valeurs algébriques : positives si reçues, négatives si cédées).<br/><br/>Calcule la variation d\'énergie interne $\\Delta U$ du système (en J).',
            answer: dU,
            tolerance: 5,
            unit: 'J',
            hint: 'Premier principe : $\\Delta U=W+Q$ (additionner directement les valeurs algébriques).',
            solution: [
              'Premier principe : $\\Delta U=W+Q$.',
              'Application numérique : $\\Delta U=(' + Wb + ')+(' + Qb + ')$.',
              'Résultat : $\\Delta U=' + fr(dU) + '$ J.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Pour mesurer la capacité thermique massique de l\'eau, on plonge une résistance chauffante de puissance $P=80$ W dans un calorimètre contenant $m=0{,}400$ kg d\'eau à la température initiale $T_i=20°C$. Le calorimètre est supposé parfaitement isolé thermiquement de l\'extérieur ($Q=0$). La résistance fonctionne pendant $\\Delta t=15$ min.',
      tasks: [
        'Calculer l\'énergie électrique $W$ reçue par le système {eau + résistance} pendant cette durée.',
        'En appliquant le premier principe, calculer la variation d\'énergie interne $\\Delta U$ du système, puis en déduire l\'élévation de température $\\Delta T$ (on prendra $c=4\\,180$ J/(kg·K)).',
        'Calculer la température finale $T_f$ de l\'eau, et vérifier que l\'hypothèse d\'une eau restée entièrement liquide (sans vaporisation) est cohérente.'
      ],
      solutions: [
        '$W=P\\times\\Delta t=80\\times(15\\times60)=80\\times900=72\\,000$ J.',
        'Système parfaitement isolé : $Q=0$, donc $\\Delta U=W=72\\,000$ J. Comme $\\Delta U\\approx mc\\Delta T$, $\\Delta T=\\dfrac{\\Delta U}{mc}=\\dfrac{72\\,000}{0{,}400\\times4\\,180}=\\dfrac{72\\,000}{1\\,672}\\approx43{,}1°C$.',
        '$T_f=T_i+\\Delta T=20+43{,}1\\approx63{,}1°C$. Cette température reste largement inférieure à $100°C$ (température de vaporisation de l\'eau à pression atmosphérique) : l\'hypothèse d\'une eau restée liquide, sans changement d\'état, est bien valide.'
      ],
      finalAnswer: '$T_f\\approx63{,}1°C$. C\'est précisément cette expérience — mesurer $P$, $\\Delta t$, $m$ et $\\Delta T$ dans un calorimètre isolé — qui permet en travaux pratiques de retrouver expérimentalement la valeur $c\\approx4\\,180$ J/(kg·K) de la capacité thermique massique de l\'eau, ou inversement de déterminer une puissance électrique inconnue.'
    },

    evaluation: {
      title: 'Évaluation — Thermodynamique : premier principe',
      duration: '30 min',
      questions: [
        {
          statement: 'Une résistance de puissance $P=25$ W chauffe, pendant $\\Delta t=8$ min, $m=0{,}20$ kg d\'eau dans un calorimètre parfaitement isolé ($c=4\\,180$ J/(kg·K)). Calculer l\'élévation de température $\\Delta T$ (en °C, arrondie au dixième).',
          type: 'numeric',
          answer: 14.4,
          tolerance: 0.5,
          unit: '°C',
          points: 3,
          correction: '$W=P\\Delta t=25\\times480=12\\,000$ J. $\\Delta U=W$ (isolé), donc $\\Delta T=\\dfrac{12\\,000}{0{,}20\\times4\\,180}=\\dfrac{12\\,000}{836}\\approx14{,}4°C$.'
        },
        {
          statement: 'Dans la convention récepteur du premier principe, un travail ou une chaleur cédés par le système à l\'extérieur sont comptés :',
          type: 'multiple-choice',
          options: [
            'Positivement',
            'Négativement',
            'Toujours nuls',
            'Uniquement en valeur absolue'
          ],
          answer: 1,
          points: 2,
          correction: 'La convention récepteur compte positivement ce que le système reçoit : ce qu\'il cède à l\'extérieur (travail fourni, chaleur perdue) est donc compté négativement dans $\\Delta U=W+Q$.'
        },
        {
          statement: 'Un système reçoit un travail $W=200$ J et cède une chaleur $Q=-60$ J. Calculer la variation d\'énergie interne $\\Delta U$ (en J).',
          type: 'numeric',
          answer: 140,
          tolerance: 5,
          unit: 'J',
          points: 2,
          correction: '$\\Delta U=W+Q=200+(-60)=140$ J.'
        },
        {
          statement: 'L\'énergie interne $U$ d\'un système est qualifiée de « fonction d\'état ». Cela signifie que :',
          type: 'multiple-choice',
          options: [
            'Sa variation $\\Delta U$ dépend du chemin suivi entre l\'état initial et l\'état final',
            'Sa variation $\\Delta U$ ne dépend que de l\'état initial et de l\'état final, jamais du chemin suivi',
            'Elle reste toujours constante quel que soit le système',
            'Elle ne peut être définie que pour un gaz parfait'
          ],
          answer: 1,
          points: 2,
          correction: 'Une fonction d\'état ne dépend que de l\'état du système (ici initial et final) : sa variation est indépendante de la façon dont la transformation s\'est déroulée, contrairement à $W$ et $Q$ pris séparément.'
        },
        {
          statement: 'Un système parfaitement isolé thermiquement ($Q=0$) qui reçoit uniquement un travail électrique voit son énergie interne :',
          type: 'multiple-choice',
          options: [
            'Rester constante',
            'Varier exactement de la valeur du travail reçu ($\\Delta U=W$)',
            'Diminuer, car aucune chaleur n\'est échangée',
            'Ne pouvoir être déterminée sans connaître $Q$'
          ],
          answer: 1,
          points: 2,
          correction: 'Avec $Q=0$, le premier principe se réduit à $\\Delta U=W$ : toute l\'énergie électrique reçue se retrouve intégralement dans la variation d\'énergie interne, ce qui élève la température du système.'
        }
      ]
    }
  });
