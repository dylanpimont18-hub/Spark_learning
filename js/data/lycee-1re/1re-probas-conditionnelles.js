/* =========================================================
   Spark Learning – data/lycee-1re/1re-probas-conditionnelles.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-probas-conditionnelles',
    level: 2, subject: 'maths',
    icon: '🎯',
    title: 'Probabilités conditionnelles',
    subtitle: 'Probabilité sachant, indépendance, arbre',
    keywords: ['Probabilité conditionnelle', 'Indépendance', 'Arbre', 'Bayes'],
    physics: false,
    cours: {
      intro: 'La <strong>probabilité conditionnelle</strong> $P(A|B)$ répond à : "parmi les cas où $B$ s\'est produit, dans quelle fraction $A$ se produit aussi ?" La formule $P(A|B) = P(A \\cap B)/P(B)$ est un recentrage : on restreint l\'univers à $B$.<br/><br/>En médecine, $P(\\text{Test}+|\\text{Malade})$ (sensibilité du test) est très différent de $P(\\text{Malade}|\\text{Test}+)$ (probabilité d\'être malade si le test est positif). Confondre $P(A|B)$ et $P(B|A)$ est l\'"<strong>erreur du procureur</strong>".<br/><br/>L\'<strong>indépendance</strong> signifie $P(A|B) = P(A)$ : connaître $B$ n\'apporte aucune information sur $A$.<br/><br/>Si $A$ et $B$ sont indépendants, alors $P(A \\cap B) = P(A) \\times P(B)$.',
      definitions: [
        { term: 'Probabilité conditionnelle', def: '$P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$ : la probabilité de $A$ <strong>sachant que</strong> $B$ est réalisé. On restreint l\'univers à $B$.' },
        { term: 'Indépendance', def: 'Deux événements $A$ et $B$ sont <strong>indépendants</strong> si $P(A \\cap B) = P(A) \\times P(B)$, ce qui équivaut à $P(A|B) = P(A)$ : savoir que $B$ s\'est produit ne change rien.' },
        { term: 'Formule des probabilités totales', def: 'Si $B$ et $\\bar{B}$ forment une partition : $P(A) = P(A|B) \\times P(B) + P(A|\\bar{B}) \\times P(\\bar{B})$. C\'est la somme des "chemins" menant à $A$.' },
        { term: 'Formule de Bayes', def: '$P(B|A) = \\dfrac{P(A|B) \\times P(B)}{P(A)}$. Elle permet d\'"inverser" une probabilité conditionnelle, typiquement en diagnostic médical.' }
      ],
      method: {
        title: 'Utiliser un arbre de probabilité',
        steps: [
          '<strong>Arbre de probabilité</strong> : représenter les événements en branches, les probabilités sur chaque branche.',
          '<strong>Multiplication des branches</strong> : $P(A\\cap B) = P(B)\\times P(A|B)$.',
          '<strong>Normalisation</strong> : la somme des probabilités à chaque nœud est $1$.',
          '<strong>Somme des chemins</strong> : additionner les branches favorables pour obtenir $P(A)$.'
        ]
      },
      example: {
        statement: 'Dans un lycée, $40\\%$ des élèves pratiquent un sport ($S$). Parmi les sportifs, $70\\%$ ont la moyenne en maths ($M$). Parmi les non-sportifs, $50\\%$ ont la moyenne. Calculer $P(M)$ et $P(S|M)$.',
        steps: [
          'Données : $P(S) = 0{,}4$, $P(\\bar{S}) = 0{,}6$, $P(M|S) = 0{,}7$, $P(M|\\bar{S}) = 0{,}5$.',
          'Probabilités totales : $P(M) = P(M|S) \\times P(S) + P(M|\\bar{S}) \\times P(\\bar{S}) = 0{,}7 \\times 0{,}4 + 0{,}5 \\times 0{,}6 = 0{,}28 + 0{,}30 = 0{,}58$.',
          'Bayes : $P(S|M) = \\dfrac{P(M|S) \\times P(S)}{P(M)} = \\dfrac{0{,}28}{0{,}58} \\approx 0{,}483$.'
        ],
        answer: '$P(M) = 0{,}58$ et $P(S|M) \\approx 0{,}483$. Un élève qui a la moyenne a environ $48\\%$ de chances d\'être sportif.'
      },
      formulas: [
        '$P(A|B) = \\dfrac{P(A\\cap B)}{P(B)}$ (si $P(B)>0$)',
        '$P(A\\cap B) = P(B)\\times P(A|B)$',
        '$A$ et $B$ indépendants $\\Leftrightarrow P(A\\cap B)=P(A)\\times P(B)$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Arbre pondéré à deux niveaux',
        title: 'Arbre de probabilité — sport et moyenne en maths',
        description: 'Sur l\'exemple du cours : $40\\%$ des élèves pratiquent un sport ($S$). Parmi les sportifs, $70\\%$ ont la moyenne ($M$) ; parmi les non-sportifs, $50\\%$ ont la moyenne. Le chemin en couleur (racine $\\to S \\to M$) est celui qui donne $P(S\\cap M)$.',
        svg: `
          <svg viewBox="0 0 720 400" role="img" aria-labelledby="probas-arbre-title probas-arbre-desc">
            <title id="probas-arbre-title">Arbre pondere a deux niveaux, exemple sport et moyenne en maths</title>
            <desc id="probas-arbre-desc">Arbre de probabilite a deux niveaux. Niveau 1 : depuis la racine, deux branches, S (sport) avec probabilite 0,4 et non S avec probabilite 0,6. Niveau 2 : sous S, deux branches, M (moyenne) avec probabilite 0,7 et non M avec probabilite 0,3 ; sous non S, deux branches, M avec probabilite 0,5 et non M avec probabilite 0,5. Le chemin racine vers S vers M est mis en evidence en trait plein colore et aboutit a l'intersection S inter M dont la probabilite vaut 0,4 fois 0,7 soit 0,28. Les trois autres chemins sont en pointilles : S inter non M egale 0,12, non S inter M egale 0,30, non S inter non M egale 0,30. La somme des quatre chemins vaut 1.</desc>

            <!-- repères de colonnes -->
            <line class="grid-line" x1="250" y1="10" x2="250" y2="390"></line>
            <line class="grid-line" x1="470" y1="10" x2="470" y2="390"></line>
            <text class="tick-label" x="250" y="18" text-anchor="middle">Niveau 1 — sport (S)</text>
            <text class="tick-label" x="470" y="18" text-anchor="middle">Niveau 2 — moyenne (M) sachant S</text>

            <!-- branches niveau 1 -->
            <line class="curve-main" x1="60" y1="200" x2="250" y2="90"></line>
            <line class="guide-line" x1="60" y1="200" x2="250" y2="310"></line>

            <!-- branches niveau 2 -->
            <line class="curve-main" x1="250" y1="90" x2="470" y2="35"></line>
            <line class="guide-line" x1="250" y1="90" x2="470" y2="145"></line>
            <line class="guide-line" x1="250" y1="310" x2="470" y2="255"></line>
            <line class="guide-line" x1="250" y1="310" x2="470" y2="365"></line>

            <!-- probabilites sur les branches (valeur seule, l'evenement se lit au noeud d'arrivee) -->
            <text class="annotation-label" x="136" y="132" text-anchor="middle">0,4</text>
            <text class="tick-label" x="136" y="266" text-anchor="middle">0,6</text>
            <text class="annotation-label" x="338" y="50" text-anchor="middle">0,7</text>
            <text class="tick-label" x="338" y="130" text-anchor="middle">0,3</text>
            <text class="tick-label" x="338" y="270" text-anchor="middle">0,5</text>
            <text class="tick-label" x="338" y="350" text-anchor="middle">0,5</text>

            <!-- noeuds -->
            <circle class="plot-point" cx="60" cy="200" r="7"></circle>
            <text class="annotation-label" x="45" y="195" text-anchor="end">Ω</text>

            <circle class="plot-point" cx="250" cy="90" r="7"></circle>
            <text class="annotation-label" x="235" y="80" text-anchor="end">S</text>

            <circle class="plot-point-alt" cx="250" cy="310" r="6"></circle>
            <text class="tick-label" x="235" y="330" text-anchor="end">non S</text>

            <circle class="plot-point" cx="470" cy="35" r="8"></circle>
            <text class="annotation-label" x="484" y="30" text-anchor="start">M</text>

            <circle class="plot-point-alt" cx="470" cy="145" r="6"></circle>
            <text class="tick-label" x="484" y="150" text-anchor="start">non M</text>

            <circle class="plot-point-alt" cx="470" cy="255" r="6"></circle>
            <text class="tick-label" x="484" y="260" text-anchor="start">M</text>

            <circle class="plot-point-alt" cx="470" cy="365" r="6"></circle>
            <text class="tick-label" x="484" y="370" text-anchor="start">non M</text>

            <!-- chemins et intersections -->
            <text class="annotation-label" x="545" y="30" text-anchor="start" style="fill:var(--diagram-accent)">S∩M = 0,28</text>
            <text class="tick-label" x="545" y="150" text-anchor="start">S∩(non M) = 0,12</text>
            <text class="tick-label" x="545" y="260" text-anchor="start">(non S)∩M = 0,30</text>
            <text class="tick-label" x="545" y="370" text-anchor="start">(non S)∩(non M) = 0,30</text>
          </svg>
        `,
        notes: [
          'Niveau 1 : $P(S) = 0{,}4$ et $P(\\bar{S}) = 0{,}6$ — la somme des deux branches vaut bien $1$.',
          'Niveau 2 sous $S$ : $P(M|S) = 0{,}7$ et $P(\\bar{M}|S) = 0{,}3$ (somme $=1$). Sous $\\bar{S}$ : $P(M|\\bar{S}) = 0{,}5$ et $P(\\bar{M}|\\bar{S}) = 0{,}5$ (somme $=1$).',
          'Chemin mis en évidence : $P(S\\cap M) = P(S)\\times P(M|S) = 0{,}4 \\times 0{,}7 = 0{,}28$ — la multiplication le long des branches.',
          'Les quatre chemins somment à $1$ : $0{,}28+0{,}12+0{,}30+0{,}30=1$, ce qui redonne $P(M)=0{,}28+0{,}30=0{,}58$, retrouvé dans l\'exemple du cours.'
        ],
        reading: 'Multiplie les probabilités le long d\'un chemin (racine → branche 1 → branche 2) pour obtenir la probabilité d\'une intersection ; le chemin en trait plein coloré, racine → $S$ → $M$, donne $P(S\\cap M) = 0{,}28$.',
        caption: 'Arbre pondéré à deux niveaux de l\'exemple du cours : $P(S)=0{,}4$, $P(M|S)=0{,}7$, $P(M|\\bar{S})=0{,}5$. Chemin $S\\cap M$ mis en évidence, avec $P(S\\cap M)=0{,}28$.'
      },
      recap: [
        '$P(A|B) \\neq P(B|A)$ en général : ne <strong>jamais</strong> inverser les conditionnements sans Bayes.',
        'Sur un arbre : multiplier le long d\'un chemin, additionner les chemins menant au même événement.',
        'Indépendance : $P(A \\cap B) = P(A) \\times P(B)$. Tester avant de conclure !',
        'Formule de Bayes : indispensable pour "retourner" un conditionnement (diagnostic, fiabilité, etc.).'
      ],
      piege: 'Ne pas confondre $P(A|B)$ et $P(B|A)$ : ce n\'est <strong>pas la même chose</strong> !<br/><br/>En médecine par exemple, la probabilité que le test soit positif si on est malade ($P(T+|M)$) est très différente de la probabilité d\'être malade si le test est positif ($P(M|T+)$). Pour "inverser" le conditionnement, il faut la <strong>formule de Bayes</strong>.'
    },
    quiz: [
      { q: 'Un test médical a une sensibilité de $95\\%$ : $P(\\text{Test}+|\\text{Malade}) = 0{,}95$. Un médecin conclut : "si le test est positif, le patient a $95\\%$ de chances d\'être malade." Cette conclusion est-elle correcte ?', options: ['Non : $P(\\text{Test}+|\\text{Malade})$ est la sensibilité, mais $P(\\text{Malade}|\\text{Test}+)$ dépend aussi de la prévalence de la maladie', 'Oui : $P(A|B) = P(B|A)$ par définition des probabilités conditionnelles', 'Oui : si le test est positif à $95\\%$ de fiabilité, la probabilité d\'être malade est bien $95\\%$', 'Non : la bonne valeur est $100\\% - 95\\% = 5\\%$'], answer: 0, correction: 'C\'est l\'"<strong>erreur du procureur</strong>". $P(\\text{Test}+|\\text{Malade}) = 0{,}95$ est la sensibilité du test.<br/><br/>Mais $P(\\text{Malade}|\\text{Test}+)$ dépend aussi de la rareté de la maladie. Si la maladie touche $1\\%$ de la population et le test fait $3\\%$ de faux positifs, un test positif ne signifie que $24\\%$ de chances d\'être malade !<br/><br/>Les deux probabilités conditionnelles $P(A|B)$ et $P(B|A)$ ne sont généralement <strong>pas égales</strong>.' },
      { q: 'Si $A$ et $B$ sont indépendants avec $P(A)=0{,}5$ et $P(B)=0{,}6$, alors $P(A\\cap B)=$ ?', options: ['$1{,}1$', '$0{,}3$', '$0{,}1$', '$0{,}11$'], answer: 1, correction: 'Quand les événements sont <strong>indépendants</strong>, on multiplie les probabilités : $P(A \\cap B) = P(A) \\times P(B)$.<br/><br/>Ici : $P(A \\cap B) = 0{,}5 \\times 0{,}6 = 0{,}3$.' },
      { q: 'Sur un arbre : $P(B)=0{,}3$, $P(A|B)=0{,}8$. Quelle est la probabilité d\'emprunter la branche $B$ puis $A$ ?', options: ['$0{,}24$', '$0{,}8$', '$1{,}1$', '$0{,}3$'], answer: 0, correction: 'Sur un arbre, on multiplie les probabilités le long du chemin : $P(A \\cap B) = P(B) \\times P(A|B)$.<br/><br/>$P(A \\cap B) = 0{,}3 \\times 0{,}8 = 0{,}24$.' },
      { q: 'On sait que $P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}3$. $A$ et $B$ sont-ils indépendants ?', options: ['Oui, car $P(A \\cap B) = P(A) \\times P(B)$', 'Non, car $0{,}3 \\neq 0{,}6 \\times 0{,}5 = 0{,}30$... en fait oui !', 'Oui, car $P(A|B) = 0{,}6 = P(A)$', 'Non, car $P(A) + P(B) > 1$'], answer: 2, correction: 'On vérifie la condition d\'indépendance : $P(A) \\times P(B) = 0{,}6 \\times 0{,}5 = 0{,}3 = P(A \\cap B)$. C\'est bien vérifié !<br/><br/>On peut aussi le voir autrement : $P(A|B) = 0{,}3/0{,}5 = 0{,}6 = P(A)$. Savoir $B$ ne change rien pour $A$ : les événements sont <strong>indépendants</strong>.' },
      { q: 'Un sac contient $5$ boules rouges et $5$ boules bleues. On tire <strong>sans remise</strong> deux boules. $P(R_2|R_1)$ vaut :', options: ['$\\dfrac{5}{10} = 0{,}5$', '$\\dfrac{4}{9}$', '$\\dfrac{5}{9}$', '$\\dfrac{4}{10} = 0{,}4$'], answer: 1, correction: 'Après avoir tiré une boule rouge, il reste $4$ rouges sur $9$ boules au total.<br/><br/>Donc $P(R_2|R_1) = \\dfrac{4}{9}$.<br/><br/>Attention : le tirage <strong>sans remise</strong> change la composition du sac, les tirages ne sont donc pas indépendants !' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const pB = pick([0.2, 0.3, 0.4, 0.5]);
        const pAgivenB = pick([0.6, 0.7, 0.8, 0.9]);
        const pAgivenBbar = pick([0.1, 0.2, 0.3]);
        const pBbar = parseFloat((1 - pB).toFixed(1));
        const pA = parseFloat((pAgivenB * pB + pAgivenBbar * pBbar).toFixed(4));
        const ctx = pick([
          { B: 'pluie', Bbar: 'beau temps', A: 'retard au lycée', phrB: `La météo annonce $${pB * 100}\\%$ de jours de pluie`, phrAB: `Les jours de pluie, la probabilité d'être en retard est $${pAgivenB}$`, phrABbar: `Les jours de beau temps, elle est de $${pAgivenBbar}$` },
          { B: 'embouteillage', Bbar: 'circulation fluide', A: 'arriver en retard', phrB: `La probabilité d'embouteillage est $${pB}$`, phrAB: `En cas d'embouteillage, la probabilité d'arriver en retard est $${pAgivenB}$`, phrABbar: `Sinon, elle est de $${pAgivenBbar}$` },
          { B: 'grippe', Bbar: 'bonne santé', A: 'avoir de la fièvre', phrB: `En hiver, $${pB * 100}\\%$ de la population a la grippe`, phrAB: `Si on a la grippe, la probabilité d'avoir de la fièvre est $${pAgivenB}$`, phrABbar: `Sinon, elle est de $${pAgivenBbar}$` }
        ]);
        return {
          statement: `${ctx.phrB}. ${ctx.phrAB}. ${ctx.phrABbar}.<br/><br/>1) Construire l'arbre de probabilité.<br/>2) Calculer $P(A)$ par la formule des probabilités totales.<br/><br/>Donner $P(A)$ (arrondir à $0{,}001$).`,
          answer: pA,
          tolerance: 0.005,
          unit: '',
          hint: `$P(A) = P(A|B) \\times P(B) + P(A|\\bar{B}) \\times P(\\bar{B}) = ${pAgivenB} \\times ${pB} + ${pAgivenBbar} \\times ${pBbar}$.`,
          solution: [
            `$P(A) = P(A|B) \\times P(B) + P(A|\\bar{B}) \\times P(\\bar{B})$`,
            `$= ${pAgivenB} \\times ${pB} + ${pAgivenBbar} \\times ${pBbar}$`,
            `$= ${(pAgivenB * pB).toFixed(4)} + ${(pAgivenBbar * pBbar).toFixed(4)} = ${pA}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Un test médical détecte une maladie présente chez $2\\%$ de la population. Le test est positif dans $95\\%$ des cas si la personne est malade et dans $3\\%$ des cas si elle est saine.',
      tasks: [
        'Construire un arbre de probabilité.',
        'Calculer la probabilité d\'avoir un test positif.',
        'Calculer la probabilité d\'être malade sachant que le test est positif (Bayes).'
      ],
      solutions: [
        'Branches : Malade ($0{,}02$) / Sain ($0{,}98$). Sous Malade : $T+$ ($0{,}95$) / $T-$ ($0{,}05$). Sous Sain : $T+$ ($0{,}03$) / $T-$ ($0{,}97$).',
        '$P(T+)=0{,}02\\times0{,}95+0{,}98\\times0{,}03=0{,}019+0{,}0294=0{,}0484$.',
        '$P(M|T+)=\\frac{0{,}019}{0{,}0484}\\approx0{,}393$ soit environ $39\\%$.'
      ],
      finalAnswer: 'Probabilité d\'être malade avec test positif $\\approx 39\\%$ malgré un test fiable à $95\\%$ (paradoxe de la rareté).'
    },

    evaluation: {
      title: 'Évaluation — Probabilités conditionnelles',
      duration: '35 min',
      questions: [
        {
          statement: 'On donne $P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Calculer $P(A|B)$.',
          type: 'numeric',
          answer: 0.4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On applique la définition de la probabilité conditionnelle : $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$.<br/><br/>$P(A|B) = \\dfrac{0{,}2}{0{,}5} = 0{,}4$. Sachant que $B$ est réalisé, la probabilité de $A$ est $0{,}4$.'
        },
        {
          statement: 'Les événements $A$ et $B$ de la question précédente ($P(A) = 0{,}6$, $P(B) = 0{,}5$, $P(A \\cap B) = 0{,}2$) sont-ils indépendants ?',
          type: 'multiple-choice',
          options: ['Oui, car $P(A \\cap B) = P(A) \\times P(B)$', 'Non, car $P(A \\cap B) \\neq P(A) \\times P(B)$', 'Oui, car $P(A) + P(B) = 1{,}1$', 'On ne peut pas conclure sans connaître $P(A \\cup B)$'],
          answer: 1,
          points: 2,
          correction: 'Pour tester l\'indépendance, on compare $P(A \\cap B)$ et $P(A) \\times P(B)$.<br/><br/>$P(A) \\times P(B) = 0{,}6 \\times 0{,}5 = 0{,}3$. Or $P(A \\cap B) = 0{,}2 \\neq 0{,}3$.<br/><br/>Les événements ne sont <strong>pas indépendants</strong> : la réalisation de $B$ modifie la probabilité de $A$.'
        },
        {
          statement: 'Dans un lycée, $60\\%$ des élèves font de l\'anglais (événement $A$). Parmi ceux qui font de l\'anglais, $30\\%$ font aussi de l\'espagnol (événement $E$). Calculer $P(A \\cap E)$.',
          type: 'numeric',
          answer: 0.18,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On utilise la formule de l\'intersection : $P(A \\cap E) = P(A) \\times P(E|A)$.<br/><br/>$P(A \\cap E) = 0{,}6 \\times 0{,}3 = 0{,}18$. Cela signifie que $18\\%$ des élèves font à la fois anglais et espagnol.'
        },
        {
          statement: 'Un sac contient $3$ boules rouges et $7$ boules bleues. On tire une boule, on la remet, puis on tire une seconde boule. Calculer la probabilité d\'obtenir deux boules rouges.',
          type: 'numeric',
          answer: 0.09,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Avec remise, la composition du sac ne change pas : les tirages sont <strong>indépendants</strong>.<br/><br/>$P(R_1 \\cap R_2) = P(R_1) \\times P(R_2) = \\dfrac{3}{10} \\times \\dfrac{3}{10} = \\dfrac{9}{100} = 0{,}09$.'
        },
        {
          statement: 'On sait que $P(B) = 0{,}4$, $P(A|B) = 0{,}7$ et $P(A|\\bar{B}) = 0{,}2$. Calculer $P(A)$ par la formule des probabilités totales.',
          type: 'numeric',
          answer: 0.4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On applique la <strong>formule des probabilités totales</strong> : $P(A) = P(A|B) \\times P(B) + P(A|\\bar{B}) \\times P(\\bar{B})$.<br/><br/>$P(A) = 0{,}7 \\times 0{,}4 + 0{,}2 \\times 0{,}6 = 0{,}28 + 0{,}12 = 0{,}4$.'
        }
      ]
    }
  });
