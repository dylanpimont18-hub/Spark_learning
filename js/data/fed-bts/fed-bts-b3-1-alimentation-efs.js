/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b3-1-alimentation-efs.js
   BTS FED — S8-B3-1 Alimentation en EFS — débit de base, coefficient de simultanéité
   Source (méthode DTU 60.11, débits de base, coefficient de simultanéité) :
   https://baticalc.fr/blog/diametre-canalisation-dtu-60-11 (consulté 2026-08-03)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b3-1-alimentation-efs',
    level: 3, subject: 'fed',
    icon: '🚰',
    title: 'Alimentation en EFS',
    subtitle: 'Débits de base, coefficient de simultanéité, dimensionnement du réseau EFS',
    keywords: ['EFS', 'Débit de base', 'Coefficient de simultanéité', 'DTU 60.11', 'Débit probable'],
    physics: 'Un immeuble de vingt logements n\'a jamais ses <strong>deux cents robinets ouverts en même temps</strong>. Dimensionner un réseau d\'<strong>eau froide sanitaire (EFS)</strong> sur la somme brute des débits de tous les appareils conduirait à des tuyauteries démesurées. La méthode du <strong>coefficient de simultanéité</strong> corrige ce défaut en tenant compte du fait que l\'usage réel des points de puisage est statistiquement dispersé dans le temps.',

    cours: {
      intro: 'Le réseau d\'<strong>alimentation en eau froide sanitaire (EFS)</strong> part du branchement public (compteur, réducteur de pression) et dessert l\'ensemble des points de puisage d\'un bâtiment : lavabos, éviers, douches, baignoires, WC, électroménager.<br/><br/>Chaque appareil a un <strong>débit de base</strong> normalisé (le débit qu\'il consomme lorsqu\'il fonctionne seul, robinet grand ouvert). Additionner tous ces débits de base donnerait un <strong>débit total théorique $Q_t$</strong> largement surestimé : dans la réalité, tous les points de puisage d\'un bâtiment ne sont jamais sollicités simultanément.<br/><br/>La méthode dite du <strong>coefficient de simultanéité</strong> (issue du DTU 60.11) corrige ce débit théorique pour obtenir un <strong>débit probable $Q_p$</strong>, réellement représentatif de la pointe de consommation à prendre en compte pour dimensionner canalisations, réducteurs de pression et, le cas échéant, un surpresseur.',
      definitions: [
        { term: 'Débit de base $q$', def: 'Débit d\'un appareil sanitaire fonctionnant seul, robinet grand ouvert (en L/s) — valeur normalisée : lavabo $0{,}20$, évier $0{,}20$, douche $0{,}20$, baignoire $0{,}33$, WC à réservoir de chasse $0{,}12$, lave-linge $0{,}20$, lave-vaisselle $0{,}10$ L/s.' },
        { term: 'Débit total théorique $Q_t$', def: 'Somme brute des débits de base de tous les appareils alimentés par un tronçon : $Q_t = \\sum q_i$, en L/s.' },
        { term: 'Coefficient de simultanéité $y$', def: 'Coefficient correcteur, toujours inférieur ou égal à $1$, qui tient compte du fait que les appareils ne fonctionnent jamais tous en même temps : $y = \\dfrac{1}{\\sqrt{N-1}}$ pour $N > 5$ appareils (au-delà de 5, la sollicitation simultanée totale devient statistiquement improbable).' },
        { term: 'Débit probable $Q_p$', def: 'Débit réellement représentatif de la pointe de consommation, utilisé pour dimensionner le tronçon : $Q_p = Q_t \\times y$, avec $y=1$ (pas de réduction) tant que $N \\le 5$.' },
        { term: 'Réducteur de pression', def: 'Appareil placé en tête d\'installation pour limiter la pression du réseau public à une valeur compatible avec les appareils sanitaires (généralement $3$ à $4$ bar en aval), évitant coups de bélier et usure prématurée de la robinetterie.' }
      ],
      method: {
        title: 'Calculer le débit probable d\'un tronçon EFS',
        steps: [
          '<strong>Recenser les appareils</strong> alimentés par le tronçon considéré et relever leur débit de base normalisé $q_i$.',
          '<strong>Calculer le débit total théorique</strong> $Q_t = \\sum q_i$.',
          '<strong>Compter le nombre d\'appareils $N$</strong>. Si $N \\le 5$, le coefficient de simultanéité ne s\'applique pas ($y=1$, $Q_p = Q_t$).',
          '<strong>Si $N>5$, calculer le coefficient de simultanéité</strong> $y = 1/\\sqrt{N-1}$.',
          '<strong>En déduire le débit probable</strong> $Q_p = Q_t \\times y$, qui sert de base au choix du diamètre de canalisation (avec la vitesse d\'écoulement recommandée) et, pour un immeuble important, au dimensionnement d\'un éventuel surpresseur.'
        ]
      },
      example: {
        statement: 'Un tronçon EFS alimente un palier de logements comportant $8$ appareils : $3$ lavabos ($0{,}20$ L/s chacun), $2$ douches ($0{,}20$ L/s chacune), $2$ WC ($0{,}12$ L/s chacun) et $1$ lave-linge ($0{,}20$ L/s).<br/><br/>Calculer le débit probable $Q_p$ de ce tronçon.',
        steps: [
          'Débit total théorique : $Q_t = 3\\times0{,}20 + 2\\times0{,}20 + 2\\times0{,}12 + 1\\times0{,}20 = 0{,}60+0{,}40+0{,}24+0{,}20 = 1{,}44$ L/s.',
          'Nombre d\'appareils : $N=8$, donc $N>5$ : le coefficient de simultanéité s\'applique. $y = 1/\\sqrt{8-1} = 1/\\sqrt{7} \\approx 1/2{,}646 \\approx 0{,}378$.',
          '$Q_p = Q_t \\times y = 1{,}44 \\times 0{,}378 \\approx 0{,}544$ L/s.'
        ],
        answer: '$Q_p \\approx 0{,}54$ L/s, soit un débit à peine plus du <strong>tiers</strong> du débit théorique $Q_t=1{,}44$ L/s : c\'est ce débit probable, pas le débit total, qui doit servir de base au choix du diamètre de canalisation.'
      },
      formulas: [
        '$Q_t = \\sum q_i$ (débit total théorique, somme des débits de base, en L/s)',
        '$y = \\dfrac{1}{\\sqrt{N-1}}$ pour $N>5$ (coefficient de simultanéité, sans unité) ; $y=1$ si $N \\le 5$',
        '$Q_p = Q_t \\times y$ (débit probable, en L/s)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Effet du coefficient de simultanéité',
        title: 'Débit théorique (droite) contre débit probable (courbe amortie)',
        description: 'Le débit total théorique Qt croît linéairement avec le nombre d\'appareils N. Le débit probable Qp, corrigé par le coefficient de simultanéité, croît beaucoup plus lentement : l\'écart entre les deux courbes se creuse à mesure que N augmente.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="efs-graph-title efs-graph-desc">
            <title id="efs-graph-title">Debit theorique contre debit probable selon le nombre d'appareils</title>
            <desc id="efs-graph-desc">Graphique debit en fonction du nombre d'appareils N. Une droite montante representant le debit total theorique Qt, et une courbe qui s'aplatit progressivement representant le debit probable Qp, nettement en dessous de la droite des que N depasse 5.</desc>

            <line class="frame-line" x1="55" y1="230" x2="440" y2="230"></line>
            <line class="guide-line" x1="55" y1="20" x2="55" y2="230"></line>

            <!-- droite Qt (lineaire) -->
            <line class="curve-main" x1="55" y1="210" x2="420" y2="35"></line>
            <text class="annotation-label" x="330" y="55" text-anchor="start">Qt (théorique)</text>

            <!-- courbe Qp (amortie, type racine) -->
            <path class="curve-main" d="M55,210 C 140,190 220,165 300,150 C 350,142 400,136 420,132" fill="none"></path>
            <text class="annotation-label" x="300" y="175" text-anchor="start">Qp (probable)</text>

            <!-- repere N=5 -->
            <line class="guide-line" x1="150" y1="20" x2="150" y2="230"></line>
            <text class="tick-label" x="150" y="245" text-anchor="middle">N = 5</text>

            <text class="label-soft" x="245" y="255" text-anchor="middle">Nombre d'appareils N</text>
            <text class="label-soft" x="50" y="15" text-anchor="start">Débit (L/s)</text>
          </svg>
        `,
        notes: [
          'Jusqu\'à $N=5$ appareils, les deux courbes se confondent : <strong>pas de réduction</strong>, $Q_p = Q_t$.',
          'Au-delà de $N=5$, la courbe $Q_p$ <strong>s\'aplatit</strong> : chaque appareil supplémentaire pèse de moins en moins sur le débit probable.',
          'L\'écart entre les deux courbes représente l\'économie de diamètre (donc de coût) permise par la méthode du coefficient de simultanéité.'
        ],
        reading: 'Repère la droite Qt qui monte régulièrement, puis la courbe Qp qui s\'en écarte progressivement après le repère N=5 : c\'est cet écart croissant qui justifie de ne jamais dimensionner un réseau EFS sur la somme brute des débits.',
        caption: 'Débit théorique et débit probable en fonction du nombre d\'appareils desservis par un tronçon EFS.'
      },
      recap: [
        'Le <strong>débit de base</strong> $q$ est une valeur normalisée par type d\'appareil (lavabo, douche, WC...), en L/s.',
        'Le <strong>débit total théorique</strong> $Q_t = \\sum q_i$ surestime largement la consommation réelle d\'un tronçon desservant plusieurs appareils.',
        'Le <strong>coefficient de simultanéité</strong> $y = 1/\\sqrt{N-1}$ (pour $N>5$) corrige cette surestimation.',
        'Le <strong>débit probable</strong> $Q_p = Q_t \\times y$ est la valeur réellement utilisée pour choisir le diamètre des canalisations.',
        'Un <strong>réducteur de pression</strong> en tête d\'installation protège le réseau et la robinetterie contre une pression publique trop élevée.'
      ],
      piege: 'Le piège classique est d\'appliquer le coefficient de simultanéité même quand $N \\le 5$ : la méthode DTU 60.11 précise que <strong>en dessous de 6 appareils, on ne réduit pas</strong> ($y=1$), car la probabilité d\'un usage simultané de tous les appareils reste trop élevée pour être négligée. Attention également à ne pas confondre le débit de base $q$ (déjà normalisé par appareil) avec un débit mesuré réel : c\'est une valeur conventionnelle de calcul, pas une mesure de terrain.'
    },

    quiz: [
      {
        q: 'Le coefficient de simultanéité $y$ sert à :',
        options: [
          'Augmenter artificiellement le débit total théorique',
          'Corriger le débit total théorique pour tenir compte du fait que tous les appareils ne fonctionnent jamais en même temps',
          'Remplacer le débit de base de chaque appareil',
          'Calculer uniquement la pression du réseau'
        ],
        answer: 1,
        correction: 'Le coefficient de simultanéité réduit le débit total théorique (somme des débits de base) pour obtenir un débit probable, réaliste, tenant compte de la dispersion statistique des usages.'
      },
      {
        q: 'Pour un tronçon desservant $N=4$ appareils, le débit probable $Q_p$ vaut :',
        options: [
          '$Q_t \\times 1/\\sqrt{3}$',
          '$Q_t$ (aucune réduction, car $N \\le 5$)',
          '$Q_t \\times 1/\\sqrt{4}$',
          '$Q_t/4$'
        ],
        answer: 1,
        correction: 'La méthode du coefficient de simultanéité ne s\'applique qu\'au-delà de $N=5$ appareils. En dessous, $y=1$ et $Q_p = Q_t$.'
      },
      {
        q: 'Quand le nombre d\'appareils $N$ desservis par un tronçon augmente fortement (bien au-delà de 5), le débit probable $Q_p$ :',
        options: [
          'Augmente proportionnellement à $N$, comme $Q_t$',
          'Reste constant quel que soit $N$',
          'Augmente, mais de plus en plus lentement par rapport à $Q_t$',
          'Diminue'
        ],
        answer: 2,
        correction: 'Comme $y=1/\\sqrt{N-1}$ décroît quand $N$ augmente, $Q_p$ continue de croître mais de moins en moins vite : c\'est tout l\'intérêt de la méthode pour éviter le surdimensionnement des grandes installations.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un palier desservant plusieurs logements',
          'une colonne montante d\'un immeuble collectif',
          'un bloc sanitaire d\'un bâtiment tertiaire',
          'une gaine technique alimentant un étage de bureaux'
        ]);
        const nLavabo = rand(2, 4);
        const nDouche = rand(1, 3);
        const nWc = rand(2, 3);
        const nLL = rand(0, 2);
        const qLavabo = 0.20, qDouche = 0.20, qWc = 0.12, qLL = 0.20;
        const N = nLavabo + nDouche + nWc + nLL;
        const Qt = parseFloat((nLavabo * qLavabo + nDouche * qDouche + nWc * qWc + nLL * qLL).toFixed(2));
        const y = 1 / Math.sqrt(N - 1);
        const Qp = parseFloat((Qt * y).toFixed(2));
        const parts = [`$${nLavabo}$ lavabo(s) ($0{,}20$ L/s chacun)`, `$${nDouche}$ douche(s) ($0{,}20$ L/s chacune)`, `$${nWc}$ WC ($0{,}12$ L/s chacun)`];
        if (nLL > 0) parts.push(`$${nLL}$ lave-linge ($0{,}20$ L/s chacun)`);
        return {
          statement: `Dans ${contexte}, un tronçon EFS alimente ${parts.join(', ')}.<br/><br/>Calcule le débit probable $Q_p$ de ce tronçon (en L/s, arrondi au centième).`,
          answer: Qp,
          tolerance: 0.03,
          unit: 'L/s',
          hint: 'Calcule d\'abord $Q_t = \\sum q_i$, compte $N$, puis applique $y=1/\\sqrt{N-1}$ si $N>5$ (sinon $y=1$).',
          solution: [
            `Débit total théorique : $Q_t = ${Qt}$ L/s, pour $N = ${N}$ appareils.`,
            N > 5
              ? `Comme $N=${N}>5$ : $y = 1/\\sqrt{${N}-1} = 1/\\sqrt{${N - 1}} \\approx ${fr(y, 3)}$.`
              : `Comme $N=${N}\\le 5$ : pas de réduction, $y=1$.`,
            `$Q_p = Q_t \\times y \\approx ${fr(Qp, 2)}$ L/s.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un immeuble collectif comporte, à un même étage desservi par une colonne montante EFS : $6$ lavabos, $4$ douches, $6$ WC à réservoir de chasse et $2$ lave-linge (débits de base : lavabo $0{,}20$ L/s, douche $0{,}20$ L/s, WC $0{,}12$ L/s, lave-linge $0{,}20$ L/s).',
      tasks: [
        'Calculer le nombre total d\'appareils $N$ et le débit total théorique $Q_t$.',
        'Calculer le coefficient de simultanéité $y$.',
        'En déduire le débit probable $Q_p$ de la colonne montante.',
        'Comparer $Q_p$ à $Q_t$ : de quel facteur (approximatif) le débit a-t-il été réduit ? Expliquer en une phrase pourquoi dimensionner sur $Q_t$ serait une erreur économique.'
      ],
      solutions: [
        '$N = 6+4+6+2 = 18$ appareils. $Q_t = 6\\times0{,}20 + 4\\times0{,}20 + 6\\times0{,}12 + 2\\times0{,}20 = 1{,}20+0{,}80+0{,}72+0{,}40 = 3{,}12$ L/s.',
        '$y = 1/\\sqrt{18-1} = 1/\\sqrt{17} \\approx 1/4{,}123 \\approx 0{,}243$.',
        '$Q_p = Q_t \\times y = 3{,}12 \\times 0{,}243 \\approx 0{,}758$ L/s.',
        'Le débit a été réduit d\'un facteur d\'environ $4$ ($3{,}12/0{,}758 \\approx 4{,}1$). Dimensionner sur $Q_t$ conduirait à choisir un diamètre de canalisation bien plus grand que nécessaire — surcoût de matériel et d\'installation, pour un débit de pointe qui, statistiquement, ne se produit jamais.'
      ],
      finalAnswer: '$Q_p \\approx 0{,}76$ L/s contre $Q_t = 3{,}12$ L/s : le coefficient de simultanéité réduit le débit de dimensionnement d\'un facteur $4$ environ, évitant un surdimensionnement coûteux de la colonne montante.'
    },

    evaluation: {
      title: 'Évaluation — Alimentation en EFS',
      duration: '20 min',
      questions: [
        {
          statement: 'Un tronçon dessert $10$ appareils pour un débit total théorique $Q_t = 2{,}0$ L/s. Calculer le débit probable $Q_p$ (en L/s, arrondi au centième).',
          type: 'numeric',
          answer: 0.67,
          tolerance: 0.05,
          unit: 'L/s',
          points: 3,
          correction: '$y = 1/\\sqrt{10-1} = 1/3 \\approx 0{,}333$. $Q_p = 2{,}0 \\times 0{,}333 \\approx 0{,}67$ L/s.'
        },
        {
          statement: 'Un tronçon dessert $3$ appareils pour $Q_t = 0{,}60$ L/s. Calculer $Q_p$ (en L/s).',
          type: 'numeric',
          answer: 0.6,
          tolerance: 0.02,
          unit: 'L/s',
          points: 2,
          correction: 'Avec $N=3 \\le 5$, aucune réduction ne s\'applique : $Q_p = Q_t = 0{,}60$ L/s.'
        },
        {
          statement: 'Le débit de base d\'un appareil sanitaire correspond à :',
          type: 'multiple-choice',
          options: [
            'Le débit moyen mesuré sur une installation existante',
            'Le débit conventionnel de l\'appareil fonctionnant seul, robinet grand ouvert',
            'Le débit probable après coefficient de simultanéité',
            'Le débit minimal garanti par le réseau public'
          ],
          answer: 1,
          points: 2,
          correction: 'Le débit de base est une valeur normalisée, conventionnelle, correspondant à l\'appareil utilisé seul à pleine ouverture — pas une mesure réelle.'
        },
        {
          statement: 'Le rôle d\'un réducteur de pression en tête d\'installation EFS est de :',
          type: 'multiple-choice',
          options: [
            'Augmenter le débit disponible aux points de puisage',
            'Limiter la pression du réseau public à une valeur compatible avec les appareils sanitaires',
            'Remplacer le compteur d\'eau',
            'Calculer le coefficient de simultanéité'
          ],
          answer: 1,
          points: 2,
          correction: 'Le réducteur de pression protège l\'installation et la robinetterie en abaissant la pression du réseau public (souvent élevée et variable) à une valeur stable, généralement 3 à 4 bar.'
        },
        {
          statement: 'Pourquoi la méthode du coefficient de simultanéité ne s\'applique-t-elle pas en dessous de $N=6$ appareils ?',
          type: 'multiple-choice',
          options: [
            'Parce que la formule mathématique n\'est pas définie pour $N \\le 5$',
            'Parce qu\'avec peu d\'appareils, la probabilité d\'un usage simultané de tous reste trop élevée pour être négligée',
            'Parce que les petits tronçons n\'ont jamais de débit de base',
            'Parce que $N \\le 5$ correspond toujours à un seul logement'
          ],
          answer: 1,
          points: 3,
          correction: 'Avec peu d\'appareils, il reste statistiquement plausible qu\'ils fonctionnent tous ensemble : réduire le débit dans ce cas serait risqué. La méthode ne s\'applique donc qu\'au-delà de 5 appareils, quand cette simultanéité totale devient improbable.'
        }
      ]
    }
  });
