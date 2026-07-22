/* =========================================================
   Spark Learning – data/bts/bts-derivation-appliquee.js
   Module : Dérivation Appliquée (BTS)
   ========================================================= */

window.MODULES.push(
  {
    id: 'bts-derivation-appliquee',
    level: 3, subject: 'maths',
    icon: '💹',
    title: 'Dérivation appliquée',
    subtitle: 'Coûts marginaux, optimisation économique',
    keywords: ['Coût marginal', 'Optimisation', 'Dérivée', 'Maximum de profit', 'Élasticité'],
    physics: 'Gestion de production industrielle : quantité optimale, seuil de rentabilité, coût marginal',
    cours: {
      intro: 'En économie et gestion, chaque dérivée porte un nom métier : $C\'(x)$ est le coût marginal (coût supplémentaire de la $x$-ième unité), $R\'(x)$ est la recette marginale.<br/><br/>Le profit $\\Pi = R - C$ est maximisé quand $R\'(x) = C\'(x)$ — c\'est-à-dire quand il n\'est plus rentable de produire une unité supplémentaire.<br/><br/>ATTENTION : $R(x) = C(x)$ est le SEUIL DE RENTABILITÉ (profit nul), pas la condition de maximum — confondre les deux est une erreur classique en gestion.<br/><br/>La dérivée seconde $\\Pi\'\'(x_0) < 0$ confirme que l\'extremum est bien un maximum (et non un minimum).<br/><br/>En pratique, la quantité optimale doit toujours être entière et positive : si $x^* = 4{,}7$, on compare $\\Pi(4)$ et $\\Pi(5)$.',
      definitions: [
        { term: 'Coût marginal $C_m(x) = C\'(x)$', def: 'Coût supplémentaire engendré par la production d\'une unité de plus. C\'est la dérivée de la fonction de coût total.' },
        { term: 'Recette marginale $R_m(x) = R\'(x)$', def: 'Recette supplémentaire apportée par la vente d\'une unité de plus. C\'est la dérivée de la fonction de recette totale.' },
        { term: 'Seuil de rentabilité', def: 'Quantité $x$ telle que $R(x) = C(x)$, soit $\\Pi(x) = 0$. En dessous : perte ; au-dessus : bénéfice. Ne pas confondre avec le maximum de profit.' },
        { term: 'Profit maximal', def: 'Atteint quand $\\Pi\'(x) = R\'(x) - C\'(x) = 0$, c\'est-à-dire quand la recette marginale égale le coût marginal. Vérifier $\\Pi\'\'(x) < 0$ pour confirmer le maximum.' }
      ],
      method: {
        title: 'Optimiser une fonction économique',
        steps: [
          '<strong>Optimisation économique</strong> : définir la fonction à optimiser (profit, coût, recette) sur son domaine.<br/><br/><strong>Exemple :</strong> $R(x) = 20x$ (prix unitaire $20$ €), $C(x) = x^2 + 4x + 30$. Profit : $\\Pi(x) = -x^2 + 16x - 30$.',
          '<strong>Dérivée et points critiques</strong> : calculer la dérivée et résoudre $f\'(x)=0$.<br/><br/><strong>Exemple :</strong> $\\Pi\'(x) = -2x + 16 = 0 \\Rightarrow x^* = 8$ unités.',
          '<strong>Vérification du maximum</strong> : vérifier le signe de $f\'$ ou $f\'\'$ de part et d\'autre du point critique.<br/><br/><strong>Exemple :</strong> $\\Pi\'\'(x) = -2 < 0$ : c\'est bien un maximum.',
          '<strong>Interprétation économique</strong> : traduire le résultat en unités concrètes (quantité, profit).<br/><br/><strong>Exemple :</strong> $\\Pi(8) = -64 + 128 - 30 = 34$ €. Produire $8$ unités maximise le profit à $34$ €.'
        ]
      },
      example: {
        statement: 'Une PME fabrique des capteurs. Le coût total est $C(x) = 0{,}5x^2 + 3x + 100$ € et le prix de vente unitaire est $p = 25$ € ($x$ = nombre de capteurs). Déterminer la quantité optimale et le profit maximal.',
        steps: [
          'Recette : $R(x) = 25x$.',
          'Profit : $\\Pi(x) = R(x) - C(x) = 25x - 0{,}5x^2 - 3x - 100 = -0{,}5x^2 + 22x - 100$.',
          'Dérivée : $\\Pi\'(x) = -x + 22 = 0 \\Rightarrow x^* = 22$ capteurs.',
          'Vérification : $\\Pi\'\'(x) = -1 < 0$ → maximum confirmé.',
          'Profit maximal : $\\Pi(22) = -0{,}5 \\times 484 + 22 \\times 22 - 100 = -242 + 484 - 100 = 142$ €.'
        ],
        answer: 'Produire $22$ capteurs pour un profit maximal de $142$ €. Le coût marginal au point optimal vaut $C\'(22) = 22 + 3 = 25$ €/unité, qui est bien égal au prix de vente.'
      },
      formulas: [
        'Coût marginal : $C_m(x)=C\'(x)$',
        'Recette marginale : $R_m(x)=R\'(x)$',
        'Profit maximal : $R\'(x)=C\'(x)$',
        'Profit : $\\Pi(x)=R(x)-C(x)$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Parabole de profit',
        title: 'Profit $\\Pi(x) = -0{,}5x^2+22x-100$ : sommet et seuils de rentabilité',
        description: 'Reprise de l\'exemple chiffré du cours : une PME vend des capteurs à $25$ € l\'unité, pour un coût total $C(x)=0{,}5x^2+3x+100$.<br/><br/>Le profit $\\Pi(x) = -0{,}5x^2+22x-100$ trace une parabole tournée vers le bas.<br/><br/>Le <strong>marqueur plein</strong> repère le <strong>sommet</strong> ($\\Pi\'(x)=0$) : maximum de profit en $x^{*}=22$, avec $\\Pi(22)=142$ €.<br/><br/>Les <strong>marqueurs creux</strong> repèrent les <strong>seuils de rentabilité</strong> ($\\Pi(x)=0$), recalculés à partir de l\'équation $x^2-44x+200=0$ : $x_1\\approx5{,}15$ et $x_2\\approx38{,}85$ unités.',
        svg: `
          <svg viewBox="0 0 420 300" role="img" aria-labelledby="deriv-profit-title deriv-profit-desc">
            <title id="deriv-profit-title">Parabole de profit avec sommet et seuils de rentabilite</title>
            <desc id="deriv-profit-desc">Courbe de Pi(x) = -0,5x^2 + 22x - 100. Sommet (maximum, marqueur plein) en x=22, Pi=142. Racines (seuils de rentabilite, marqueurs creux) en x=5,15 et x=38,85.</desc>

            <!-- grille verticale (x = 10, 20, 30, 40) -->
            <line class="grid-line" x1="138.6" y1="30" x2="138.6" y2="260"></line>
            <line class="grid-line" x1="217.1" y1="30" x2="217.1" y2="260"></line>
            <line class="grid-line" x1="295.7" y1="30" x2="295.7" y2="260"></line>
            <line class="grid-line" x1="374.3" y1="30" x2="374.3" y2="260"></line>

            <!-- grille horizontale (Pi = -100, 0, 50, 100) -->
            <line class="grid-line" x1="55" y1="251.3" x2="400" y2="251.3"></line>
            <line class="grid-line" x1="55" y1="121.1" x2="400" y2="121.1"></line>
            <line class="grid-line" x1="55" y1="77.7" x2="400" y2="77.7"></line>

            <!-- axes : Pi(x)=0 en y=164.5, x=0 en x=60 -->
            <line class="axis" x1="50" y1="164.5" x2="400" y2="164.5"></line>
            <line class="axis" x1="60" y1="25" x2="60" y2="270"></line>

            <!-- courbe de profit Pi(x) = -0,5x^2 + 22x - 100, x de 0 a 42 -->
            <polyline class="curve-main" points="60.0,251.3 83.6,197.9 107.1,152.4 130.7,114.6 154.3,84.7 177.9,62.5 201.4,48.2 225.0,41.7 232.9,41.3 248.6,43.0 272.1,52.1 295.7,69.1 319.3,93.8 342.9,126.3 366.4,166.6 390.0,214.9"></polyline>

            <!-- guides vers le sommet -->
            <line class="guide-line" x1="232.9" y1="41.3" x2="232.9" y2="164.5"></line>
            <line class="guide-line" x1="60" y1="41.3" x2="232.9" y2="41.3"></line>

            <!-- marqueurs creux des racines (seuils de rentabilite) -->
            <circle class="plot-point-alt" cx="100.5" cy="164.5" r="6"></circle>
            <circle class="plot-point-alt" cx="365.2" cy="164.5" r="6"></circle>

            <!-- marqueur plein du sommet (maximum de profit) -->
            <circle class="plot-point" cx="232.9" cy="41.3" r="7"></circle>

            <!-- etiquettes des points cles -->
            <text class="annotation-label" x="180" y="20" text-anchor="middle">Sommet : maximum de profit</text>
            <text class="label-soft" x="180" y="33" text-anchor="middle">x* = 22 ; Pi(22) = 142 €</text>
            <text class="annotation-label" x="100.5" y="182" text-anchor="middle">x1 ≈ 5,15</text>
            <text class="label-soft" x="100.5" y="195" text-anchor="middle">seuil de rentabilite</text>
            <text class="annotation-label" x="365.2" y="182" text-anchor="middle">x2 ≈ 38,85</text>
            <text class="label-soft" x="365.2" y="195" text-anchor="middle">seuil de rentabilite</text>

            <!-- etiquettes de zones -->
            <text class="label-soft" x="75" y="235" text-anchor="middle">Perte</text>
            <text class="label-soft" x="230" y="130" text-anchor="middle">Profit</text>
            <text class="label-soft" x="385" y="210" text-anchor="middle">Perte</text>

            <!-- axes et graduations -->
            <text class="axis-label" x="400" y="285" text-anchor="end">x (unités)</text>
            <text class="axis-label" x="65" y="18">Pi(x) (€)</text>

            <text class="tick-label" x="60" y="278" text-anchor="middle">0</text>
            <text class="tick-label" x="138.6" y="278" text-anchor="middle">10</text>
            <text class="tick-label" x="217.1" y="278" text-anchor="middle">20</text>
            <text class="tick-label" x="295.7" y="278" text-anchor="middle">30</text>
            <text class="tick-label" x="374.3" y="278" text-anchor="middle">40</text>

            <text class="tick-label" x="40" y="255" text-anchor="end">-100</text>
            <text class="tick-label" x="40" y="125" text-anchor="end">50</text>
            <text class="tick-label" x="40" y="81" text-anchor="end">100</text>
          </svg>
        `,
        notes: [
          'Le <strong>marqueur plein</strong> est le sommet de la parabole, où $\\Pi\'(x)=-x+22=0$, soit $x^{*}=22$. C\'est le <strong>maximum de profit</strong> ($\\Pi\'\'(x)=-1<0$ confirme un maximum) : $\\Pi(22)=142$ €.',
          'Les <strong>deux marqueurs creux</strong> sur l\'axe horizontal sont les <strong>seuils de rentabilité</strong> ($\\Pi(x)=0$) : en résolvant $x^2-44x+200=0$, on trouve $x_1\\approx5{,}15$ et $x_2\\approx38{,}85$. Entre ces deux valeurs, l\'entreprise est bénéficiaire ; en dehors, elle est en perte.',
          'Ne jamais confondre les deux notions : le sommet donne le <strong>meilleur</strong> profit possible ; les racines donnent seulement un profit <strong>nul</strong> (ni gain, ni perte).'
        ],
        reading: 'Un marqueur plein signale un extremum (ici un maximum) ; des marqueurs creux signalent des zéros de la fonction. Sur une courbe de profit, ne jamais confondre les deux : le sommet est le meilleur résultat, les racines ne sont que le seuil de rentabilité (profit nul).',
        caption: 'Profit $\\Pi(x)=-0{,}5x^2+22x-100$ : maximum en $(22\\,;\\,142)$, seuils de rentabilité en $x\\approx5{,}15$ et $x\\approx38{,}85$ (exemple chiffré du cours).'
      },
      recap: [
        'Le profit est maximal quand $R\'(x) = C\'(x)$ (recette marginale = coût marginal), pas quand $R(x) = C(x)$ (seuil de rentabilité).',
        'Toujours vérifier la nature de l\'extremum : $\\Pi\'\'(x^*) < 0$ confirme un maximum, $> 0$ un minimum.',
        'Au point optimal, le coût marginal est exactement égal au prix de vente (si prix constant).',
        'La quantité optimale doit être un entier positif : si $x^* = 4{,}7$, comparer $\\Pi(4)$ et $\\Pi(5)$.'
      ],
      piege: 'Vérifier toujours le domaine de validité : une quantité ne peut pas être négative. Un extremum hors du domaine physique est sans intérêt économique.'
    },
    quiz: [
      { q: 'Une entreprise a recette $R(x)$ et coût $C(x)$. Un étudiant dit : "Le profit est maximal quand $R(x) = C(x)$." Quelle est son erreur ?', options: ['$R(x)=C(x)$ est le SEUIL DE RENTABILITÉ (profit nul). Le maximum est quand $R\'(x)=C\'(x)$ (recette marginale = coût marginal)', 'L\'étudiant a raison : $R=C$ annule le profit, donc le maximise', 'Le maximum est quand $R\'(x)=0$ et $C\'(x)=0$ séparément', '$R(x)=C(x)$ donne le minimum du profit, pas le maximum'], answer: 0, correction: '$\\Pi(x)=R(x)-C(x)$. Le profit est NUL (pas maximum) quand $R=C$. Le maximum est où $\\Pi\'=0$, soit $R\'(x)=C\'(x)$ : la recette marginale égale le coût marginal. L\'intuition : tant que produire une unité de plus rapporte plus qu\'elle ne coûte ($R\'(x)>C\'(x)$), on continue. On s\'arrête quand les deux sont égaux.' },
      { q: 'Le profit est maximal quand :', options: ['$C(x)$ est minimal', '$R(x)$ est maximal', '$R\'(x)=C\'(x)$', '$R(x)=C(x)$'], answer: 2, correction: 'Le profit $\\Pi=R-C$ est stationnaire quand $\\Pi\'=R\'-C\'=0$, soit $R\'=C\'$.' },
      { q: 'Si $\\Pi\'(x)>0$ pour $x<5$ et $\\Pi\'(x)<0$ pour $x>5$, le profit est maximisé en :', options: ['$x=0$', '$x=5$', '$x=+\\infty$', 'Aucun maximum'], answer: 1, correction: '$\\Pi\'$ change de signe de $+$ à $-$ en $x=5$ : maximum en $x=5$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 5), b = rand(3, 8);

        const ctx = pick([
          {
            build: () => `Une <strong>PME fabricant des capteurs électroniques</strong> a un profit modélisé par $\\Pi(x)=-${a}x^2+${2*a*b}x-10$ (en k€), $x$ étant le nombre de capteurs produits.<br/><br/>Trouve la <strong>quantité $x^*$</strong> qui maximise le profit.`
          },
          {
            build: () => `Un <strong>atelier de menuiserie</strong> fabriquant des meubles sur mesure a un profit $\\Pi(x)=-${a}x^2+${2*a*b}x-10$ (en k€), $x$ étant le nombre de meubles vendus.<br/><br/>Trouve la <strong>quantité $x^*$</strong> qui maximise le profit.`
          },
          {
            build: () => `Une <strong>exploitation maraîchère</strong> vendant des paniers de légumes en circuit court a un profit $\\Pi(x)=-${a}x^2+${2*a*b}x-10$ (en k€), $x$ étant le nombre de paniers vendus par semaine.<br/><br/>Trouve la <strong>quantité $x^*$</strong> qui maximise le profit.`
          },
          {
            build: () => `Un <strong>atelier d'assemblage de panneaux solaires</strong> a un profit $\\Pi(x)=-${a}x^2+${2*a*b}x-10$ (en k€), $x$ étant le nombre de panneaux produits.<br/><br/>Trouve la <strong>quantité $x^*$</strong> qui maximise le profit.`
          },
          {
            build: () => `Une <strong>imprimerie</strong> produisant des catalogues pour des clients professionnels a un profit $\\Pi(x)=-${a}x^2+${2*a*b}x-10$ (en k€), $x$ étant le nombre de lots de catalogues imprimés.<br/><br/>Trouve la <strong>quantité $x^*$</strong> qui maximise le profit.`
          },
          {
            build: () => `Une <strong>société de maintenance industrielle</strong> vendant des contrats annuels a un profit $\\Pi(x)=-${a}x^2+${2*a*b}x-10$ (en k€), $x$ étant le nombre de contrats signés.<br/><br/>Trouve la <strong>quantité $x^*$</strong> qui maximise le profit.`
          },
          {
            build: () => `Un <strong>atelier de mécanique</strong> usinant des pièces à la demande a un profit $\\Pi(x)=-${a}x^2+${2*a*b}x-10$ (en k€), $x$ étant le nombre de lots de pièces usinées.<br/><br/>Trouve la <strong>quantité $x^*$</strong> qui maximise le profit.`
          }
        ]);

        return {
          statement: ctx.build(),
          answer: b,
          tolerance: 0,
          unit: 'unités',
          hint: `Résoudre $\\Pi'(x)=0$ : $-${2*a}x+${2*a*b}=0$.`,
          solution: [`$\\Pi'(x)=-${2*a}x+${2*a*b}=0 \\Rightarrow x=${b}$`]
        };
      }
    },
    probleme: {
      context: 'Une entreprise a pour coût total $C(x)=0{,}5x^2+2x+50$ et vend à prix unitaire $p=10-0{,}2x$ (en €, $x\\ge0$).',
      tasks: [
        'Exprimer la recette totale $R(x)$ et le profit $\\Pi(x)$.',
        'Calculer $\\Pi\'(x)$ et la quantité optimale.',
        'Calculer le profit maximum.'
      ],
      solutions: [
        '$R(x)=x\\cdot p=(10-0{,}2x)x=10x-0{,}2x^2$. $\\Pi(x)=R-C=10x-0{,}2x^2-0{,}5x^2-2x-50=-0{,}7x^2+8x-50$.',
        '$\\Pi\'(x)=-1{,}4x+8=0 \\Rightarrow x=\\frac{8}{1{,}4}\\approx5{,}71$.',
        '$\\Pi(5{,}71)\\approx-0{,}7\\times32{,}6+8\\times5{,}71-50\\approx-22{,}8+45{,}7-50=-27{,}1$. Perte : ce modèle n\'est pas rentable !'
      ],
      finalAnswer: 'Optimum $x\\approx5{,}7$ unités, mais $\\Pi_{max}\\approx-27$ € : production non rentable à ces coûts.'
    },

    evaluation: {
      title: 'Évaluation — Dérivation appliquée',
      duration: '40 min',
      questions: [
        {
          statement: 'Le profit d\'une entreprise est $\\Pi(x) = -2x^2 + 24x - 50$ (en k€). Calculer la quantité $x^*$ qui maximise le profit.',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: 'unités',
          points: 2,
          correction: '$\\Pi\'(x) = -4x + 24 = 0 \\Rightarrow x^* = 6$. On vérifie : $\\Pi\'\'(x) = -4 < 0$ donc c\'est bien un maximum.'
        },
        {
          statement: 'Le profit est maximal quand :',
          type: 'multiple-choice',
          options: ['La recette est maximale', 'Le coût est minimal', 'La recette marginale égale le coût marginal : $R\'(x) = C\'(x)$', 'La recette égale le coût : $R(x) = C(x)$'],
          answer: 2,
          points: 2,
          correction: '$\\Pi(x) = R(x) - C(x)$. Le profit est stationnaire quand $\\Pi\'(x) = R\'(x) - C\'(x) = 0$, soit $R\'(x) = C\'(x)$. Attention : $R(x) = C(x)$ est le seuil de rentabilité (profit nul), pas la condition de maximum.'
        },
        {
          statement: 'Le coût total est $C(x) = 0{,}1x^3 - 1{,}5x^2 + 10x + 20$. Calculer le coût marginal $C\'(x)$ pour $x = 5$ (en €/unité).',
          type: 'numeric',
          answer: 2.5,
          tolerance: 0.01,
          unit: '€/unité',
          points: 3,
          correction: '$C\'(x) = 0{,}3x^2 - 3x + 10$. Pour $x = 5$ : $C\'(5) = 0{,}3 \\times 25 - 3 \\times 5 + 10 = 7{,}5 - 15 + 10 = 2{,}5$ €/unité.'
        },
        {
          statement: 'Si $\\Pi\'(x) > 0$ pour $x < 10$ et $\\Pi\'(x) < 0$ pour $x > 10$, alors $x = 10$ est :',
          type: 'multiple-choice',
          options: ['Un minimum de profit', 'Un maximum de profit', 'Un point d\'inflexion', 'Le seuil de rentabilité'],
          answer: 1,
          points: 1,
          correction: '$\\Pi\'$ passe du positif au négatif en $x = 10$ : le profit croît avant et décroît après. C\'est donc un maximum.'
        },
        {
          statement: 'Une entreprise vend au prix unitaire $p = 30$ € et a un coût total $C(x) = x^2 + 10x + 20$. Calculer le profit maximal (en €).',
          type: 'numeric',
          answer: 80,
          tolerance: 0.1,
          unit: '€',
          points: 2,
          correction: '$R(x) = 30x$. $\\Pi(x) = 30x - x^2 - 10x - 20 = -x^2 + 20x - 20$. $\\Pi\'(x) = -2x + 20 = 0 \\Rightarrow x = 10$. $\\Pi(10) = -100 + 200 - 20 = 80$ €.'
        }
      ]
    }
  }
);
