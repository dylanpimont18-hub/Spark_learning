/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-geometrie-plane.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-geometrie-plane',
    level: 2, subject: 'maths',
    icon: '📏',
    title: 'Géométrie plane',
    subtitle: 'Configurations, triangles, parallélisme',
    keywords: ['Triangle', 'Parallélisme', 'Thalès', 'Médiane', 'Hauteur'],
    physics: false,
    cours: {
      intro: 'La géométrie plane combine raisonnement logique et calcul pour prouver des propriétés sur des figures.<br/><br/>Le <strong>théorème de Thalès</strong> permet de calculer des longueurs inaccessibles à partir de rapports entre segments parallèles.<br/><br/>Dans un triangle, quatre <strong>droites remarquables</strong> se distinguent par leur définition : la médiane joint un sommet au milieu du côté opposé ; la hauteur est perpendiculaire au côté opposé (mais pas nécessairement en son milieu) ; la médiatrice est perpendiculaire au côté par son milieu ; la bissectrice divise l\'angle en deux parties égales.<br/><br/>Confondre ces quatre notions est l\'une des erreurs les plus fréquentes en géométrie.',
      definitions: [
        { term: 'Théorème de Thalès', def: 'Si $(MN) \\parallel (BC)$ dans un triangle $ABC$ avec $M \\in [AB]$ et $N \\in [AC]$, alors $\\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{MN}{BC}$.' },
        { term: 'Médiane', def: 'Droite joignant un sommet au milieu du côté opposé. Les trois médianes se coupent au centre de gravité.' },
        { term: 'Hauteur', def: 'Droite passant par un sommet, perpendiculaire au côté opposé. Attention : elle ne passe pas nécessairement par le milieu du côté.' },
        { term: 'Médiatrice', def: 'Droite perpendiculaire à un segment en son milieu. Les trois médiatrices d\'un triangle se coupent au centre du cercle circonscrit.' }
      ],
      method: {
        title: 'Appliquer le théorème de Thalès',
        steps: [
          '<strong>Identifier la configuration</strong> : deux droites sécantes et deux droites parallèles coupant ces sécantes. <strong>Exemple :</strong> Dans le triangle $ABC$, si $M \\in [AB]$ et $N \\in [AC]$ avec $(MN) \\parallel (BC)$, la configuration est valide.',
          '<strong>Écrire les rapports égaux</strong> : $\\frac{AM}{AB}=\\frac{AN}{AC}=\\frac{MN}{BC}$. <strong>Exemple :</strong> Si $AM = 3$, $AB = 9$ → le rapport est $\\frac{3}{9} = \\frac{1}{3}$.',
          '<strong>Calculer la longueur inconnue</strong> par produit en croix. <strong>Exemple :</strong> $\\frac{1}{3} = \\frac{MN}{12}$ → $MN = \\frac{12}{3} = 4$.',
          '<strong>Vérifier la cohérence</strong> (la longueur partielle est inférieure à la totale). <strong>Exemple :</strong> $MN = 4 < BC = 12$ ✓ (le petit triangle est plus petit).'
        ]
      },
      example: {
        statement: 'Dans un triangle $ABC$, $(MN) \\parallel (BC)$ avec $AM = 4$ cm, $MB = 8$ cm, $AN = 3$ cm. Calculer $NC$ et $MN$ sachant que $BC = 15$ cm.',
        steps: [
          '$AB = AM + MB = 4 + 8 = 12$ cm. Le rapport de réduction est $k = \\dfrac{AM}{AB} = \\dfrac{4}{12} = \\dfrac{1}{3}$.',
          '$\\dfrac{AN}{AC} = \\dfrac{1}{3}$ → $AC = 3 \\times 3 = 9$ cm, donc $NC = AC - AN = 9 - 3 = 6$ cm.',
          '$\\dfrac{MN}{BC} = \\dfrac{1}{3}$ → $MN = \\dfrac{15}{3} = 5$ cm.'
        ],
        answer: '$NC = 6$ cm et $MN = 5$ cm.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto"><tr><th style="border:1px solid var(--border);padding:8px">Droite remarquable</th><th style="border:1px solid var(--border);padding:8px">Passe par</th><th style="border:1px solid var(--border);padding:8px">Propriété</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Médiane</td><td style="border:1px solid var(--border);padding:8px">Sommet → milieu du côté opposé</td><td style="border:1px solid var(--border);padding:8px">Centre de gravité</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Hauteur</td><td style="border:1px solid var(--border);padding:8px">Sommet ⊥ côté opposé</td><td style="border:1px solid var(--border);padding:8px">Orthocentre</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Médiatrice</td><td style="border:1px solid var(--border);padding:8px">⊥ au milieu du côté</td><td style="border:1px solid var(--border);padding:8px">Centre du cercle circonscrit</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Bissectrice</td><td style="border:1px solid var(--border);padding:8px">Sommet, divise l\'angle en 2</td><td style="border:1px solid var(--border);padding:8px">Centre du cercle inscrit</td></tr></table>',
      formulas: [
        'Thalès : $\\dfrac{AM}{AB}=\\dfrac{AN}{AC}=\\dfrac{MN}{BC}$',
        'Aire triangle : $\\mathcal{A}=\\dfrac{\\text{base}\\times\\text{hauteur}}{2}$',
        'Somme des angles d\'un triangle : $180°$'
      ],
      recap: [
        'Thalès lie les rapports de longueurs quand une droite est parallèle à un côté du triangle.',
        'Le rapport des aires de deux triangles en configuration de Thalès est le carré du rapport de réduction : $k^2$.',
        'Quatre droites remarquables : médiane, hauteur, médiatrice, bissectrice — ne pas les confondre.',
        'La somme des angles d\'un triangle vaut toujours $180°$.'
      ],
      piege: 'Thalès s\'applique uniquement si $M\\in[AB]$ et $N\\in[AC]$ ET que $(MN)\\parallel(BC)$. Vérifier les conditions avant d\'écrire les rapports.'
    },
    quiz: [
      { q: 'Dans un triangle, deux angles mesurent $60°$ et $80°$. Le troisième mesure :', options: ['$40°$', '$50°$', '$60°$', '$120°$'], answer: 0, correction: '$180-60-80=40°$.' },
      { q: 'Dans un triangle $ABC$, $M\\in[AB]$ et $N\\in[AC]$ avec $(MN)\\parallel(BC)$. Si $AM=3$, $MB=6$, $AN=2$, alors $NC=$ ?', options: ['$2$', '$4$', '$6$', '$3$'], answer: 1, correction: '$\\frac{AM}{AB}=\\frac{AN}{AC} \\Rightarrow \\frac{3}{9}=\\frac{2}{AC} \\Rightarrow AC=6$. Donc $NC=AC-AN=6-2=4$.' },
      { q: 'La hauteur issue de $A$ dans un triangle $ABC$ est :', options: ['La droite issue de $A$, perpendiculaire au côté $BC$', 'La droite issue de $A$, passant par le milieu de $BC$', 'La droite perpendiculaire à $BC$ par son milieu', 'La droite qui partage l\'angle $\\hat{A}$ en deux parties égales'], answer: 0, correction: 'La hauteur issue de $A$ est perpendiculaire à $BC$ — mais pas nécessairement par le milieu de $BC$. Le milieu de $BC$ est utilisé par la médiane (option B) et la médiatrice (option C). La bissectrice (option D) divise l\'angle. Ces quatre droites sont distinctes !' },
      { q: 'Le rapport de réduction entre deux triangles en configuration de Thalès est $k = \\frac{1}{3}$. Le rapport de leurs aires est :', options: ['$\\frac{1}{3}$', '$\\frac{1}{9}$', '$\\frac{1}{6}$', '$\\frac{2}{3}$'], answer: 1, correction: 'Le rapport des aires est le carré du rapport de réduction : $k^2 = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$. L\'aire varie comme le carré des longueurs — une erreur fréquente est de confondre rapport de longueurs et rapport d\'aires.' },
      { q: 'Un triangle a des angles de $90°$, $45°$ et $45°$. Quels types de droites remarquables sont confondues pour le côté face à l\'angle de $90°$ ?', options: ['Médiane et hauteur issues de l\'angle droit sont confondues car le triangle est isocèle rectangle', 'Toutes les droites remarquables sont distinctes', 'Médiatrice et bissectrice sont confondues', 'Hauteur et médiatrice sont confondues'], answer: 0, correction: 'Dans un triangle isocèle rectangle, la médiane issue de l\'angle droit rejoint le milieu de l\'hypoténuse ET est perpendiculaire à l\'hypoténuse (c\'est aussi la hauteur). Les deux droites sont confondues. C\'est un cas particulier — en général, médiane et hauteur sont distinctes.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const contexts = [
          { intro: 'Un géomètre mesure un terrain triangulaire. Il trace une parallèle à la base', obj: 'la longueur de la clôture parallèle' },
          { intro: 'Un architecte réduit un plan triangulaire. La droite de coupe est parallèle à la base', obj: 'la longueur du segment réduit' },
          { intro: 'Un cartographe étudie deux routes parallèles coupées par deux sentiers', obj: 'la distance entre les intersections sur la route secondaire' }
        ];
        const ctx = pick(contexts);
        const am = rand(2, 6);
        const ratio = rand(2, 4);
        const ab = am * ratio;
        const bc = rand(3, 8) * ratio;
        const mn = bc / ratio;
        return {
          statement: `${ctx.intro} dans un triangle $ABC$. On sait que $(MN) \\parallel (BC)$, $AM = ${am}$, $AB = ${ab}$ et $BC = ${bc}$.<br/><br/><strong>1.</strong> Calculer le rapport de réduction $k = \\frac{AM}{AB}$.<br/><strong>2.</strong> En déduire $MN$ par le théorème de Thalès.<br/><strong>3.</strong> Quel est le rapport des aires des triangles $AMN$ et $ABC$ ?<br/><br/>Donne la valeur de $MN$.`,
          answer: mn,
          tolerance: 0,
          unit: '',
          hint: `Rapport $k = \\frac{${am}}{${ab}} = \\frac{1}{${ratio}}$. Par Thalès : $\\frac{MN}{BC} = k$.`,
          solution: [
            `$k = \\frac{AM}{AB} = \\frac{${am}}{${ab}} = \\frac{1}{${ratio}}$`,
            `Par Thalès : $MN = k \\times BC = \\frac{1}{${ratio}} \\times ${bc} = ${mn}$`,
            `Rapport des aires : $k^2 = \\frac{1}{${ratio*ratio}}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Un architecte trace un plan. Il sait que $(DE)\\parallel(BC)$ dans le triangle $ABC$ avec $AD=4$ m, $DB=6$ m et $DE=3$ m.',
      tasks: [
        'Calculer $BC$ par le théorème de Thalès.',
        'Calculer l\'aire du triangle $ADE$ si la hauteur depuis $A$ sur $DE$ vaut $2$ m.',
        'Quel est le rapport des aires des triangles $ADE$ et $ABC$ ?'
      ],
      solutions: [
        '$\\frac{AD}{AB}=\\frac{DE}{BC} \\Rightarrow \\frac{4}{10}=\\frac{3}{BC} \\Rightarrow BC=7{,}5$ m.',
        '$\\mathcal{A}_{ADE}=\\frac{3\\times 2}{2}=3$ m².',
        'Rapport $=\\left(\\frac{AD}{AB}\\right)^2=\\left(\\frac{4}{10}\\right)^2=\\frac{16}{100}=0{,}16$.'
      ],
      finalAnswer: '$BC=7{,}5$ m ; rapport des aires $= 0{,}16$.'
    },

    evaluation: {
      title: 'Évaluation — Géométrie plane',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans un triangle, deux angles mesurent $45°$ et $75°$. Calculer le troisième angle (en degrés).',
          type: 'numeric',
          answer: 60,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'La somme des angles d\'un triangle vaut $180°$. Troisième angle $= 180 - 45 - 75 = 60°$.'
        },
        {
          statement: 'Dans un triangle $ABC$, $(MN) \\parallel (BC)$ avec $M \\in [AB]$ et $N \\in [AC]$. On a $AM = 5$, $AB = 15$ et $BC = 12$. Calculer $MN$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: 'Par le théorème de Thalès : $\\dfrac{AM}{AB} = \\dfrac{MN}{BC} \\Rightarrow \\dfrac{5}{15} = \\dfrac{MN}{12} \\Rightarrow MN = \\dfrac{5 \\times 12}{15} = 4$.'
        },
        {
          statement: 'La hauteur issue de $A$ dans un triangle $ABC$ est :',
          type: 'multiple-choice',
          options: ['La droite passant par $A$ et le milieu de $[BC]$', 'La droite passant par $A$, perpendiculaire à $(BC)$', 'La perpendiculaire à $[BC]$ passant par son milieu', 'La droite qui divise l\'angle $\\hat{A}$ en deux'],
          answer: 1,
          points: 2,
          correction: 'La hauteur issue de $A$ est la droite passant par $A$ et perpendiculaire au côté opposé $[BC]$. L\'option A décrit la médiane, C la médiatrice, et D la bissectrice.'
        },
        {
          statement: 'Calculer l\'aire d\'un triangle de base $b = 8$ cm et de hauteur $h = 5$ cm.',
          type: 'numeric',
          answer: 20,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = \\dfrac{b \\times h}{2} = \\dfrac{8 \\times 5}{2} = 20$ cm².'
        },
        {
          statement: 'Deux triangles sont en configuration de Thalès avec un rapport de réduction $k = \\dfrac{2}{5}$. Le rapport de leurs aires est :',
          type: 'multiple-choice',
          options: ['$\\dfrac{2}{5}$', '$\\dfrac{4}{25}$', '$\\dfrac{4}{5}$', '$\\dfrac{2}{25}$'],
          answer: 1,
          points: 1,
          correction: 'Le rapport des aires est le carré du rapport de réduction : $k^2 = \\left(\\dfrac{2}{5}\\right)^2 = \\dfrac{4}{25}$.'
        }
      ]
    }
  });
