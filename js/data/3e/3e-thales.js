/* =========================================================
   Spark Learning – data/3e/3e-thales.js
   Module : Théorème de Thalès (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-thales',
    level: 1, subject: 'maths',
    icon: '🔺',
    title: 'Théorème de Thalès',
    subtitle: 'Triangles semblables, rapports de longueurs',
    keywords: ['Thalès', 'Droites parallèles', 'Rapport', 'Triangles semblables', 'Réciproque'],
    physics: 'Optique géométrique : grandissement, lentilles, rayons lumineux',

    cours: {
      intro: 'Le théorème de Thalès est l\'un des résultats les plus puissants de la géométrie : quand deux droites parallèles coupent deux sécantes issues d\'un même point, tous les rapports de longueurs correspondants sont égaux. Cette égalité des rapports permet de calculer n\'importe quelle longueur inconnue dans une figure de triangles semblables. En pratique, Thalès apparaît partout : en optique (lentilles, grandissement), en topographie (mesure d\'objets inaccessibles par ombres portées), et dans les plans à l\'échelle. La réciproque est tout aussi utile : elle permet de prouver que deux droites sont parallèles à partir des seules mesures. Attention au cas « croisé » où le point $O$ est entre les deux parallèles : les rapports doivent encore être exprimés de façon cohérente.',
      definitions: [
        { term: 'Configuration de Thalès', def: 'Figure formée par <strong>deux droites sécantes</strong> passant par un même point $O$, coupées par <strong>deux droites parallèles</strong> $(AB)$ et $(A\'B\')$. C\'est la situation géométrique requise pour appliquer le théorème.' },
        { term: 'Rapport de Thalès', def: 'Le quotient $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB} = \\dfrac{A\'B\'}{AB}$ qui est <strong>constant</strong> dans une configuration de Thalès. On dit que les longueurs sont <strong>proportionnelles</strong>.' },
        { term: 'Réciproque de Thalès', def: 'Si les points $A$, $A\'$ sont sur une sécante et $B$, $B\'$ sur l\'autre, et que $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB}$ avec les points du <strong>même côté</strong> de $O$, alors $(AB) \\parallel (A\'B\')$.' },
        { term: 'Grandissement', def: 'En optique, le rapport $\\gamma = \\dfrac{A\'B\'}{AB}$ qui indique de combien l\'image est <strong>agrandie</strong> ($|\\gamma| > 1$) ou <strong>réduite</strong> ($|\\gamma| < 1$). Si $\\gamma < 0$, l\'image est renversée.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Identifier deux droites parallèles coupées par deux sécantes passant par le même point.',
          'Nommer correctement les points : le point commun $O$, les points sur une parallèle $A$ et $B$, les points sur l\'autre $A\'$ et $B\'$.',
          'Appliquer : $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB} = \\dfrac{A\'B\'}{AB}$ (les rapports sont égaux).',
          'Retrouver l\'inconnue par produit en croix à partir de l\'égalité de rapports.'
        ]
      },
      example: {
        statement: 'Dans une configuration de Thalès, $O$, $A$, $A\'$ sont alignés et $O$, $B$, $B\'$ sont alignés avec $(AB) \\parallel (A\'B\')$. On donne : $OA = 4$ cm, $OA\' = 6$ cm et $AB = 5$ cm. Calculer $A\'B\'$.',
        steps: [
          '<strong>Identifier la configuration</strong> : $(AB) \\parallel (A\'B\')$ et les deux sécantes passent par $O$. On peut appliquer le théorème de Thalès.',
          '<strong>Écrire l\'égalité des rapports</strong> : $\\dfrac{OA\'}{OA} = \\dfrac{A\'B\'}{AB}$, soit $\\dfrac{6}{4} = \\dfrac{A\'B\'}{5}$.',
          '<strong>Produit en croix</strong> : $A\'B\' = 5 \\times \\dfrac{6}{4} = 5 \\times 1{,}5 = 7{,}5$ cm.'
        ],
        answer: '$A\'B\' = 7{,}5$ cm.'
      },
      formulas: [
        'Si $(AB) \\parallel (A\'B\')$ : $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB} = \\dfrac{A\'B\'}{AB}$',
        'Grandissement optique : $\\gamma = \\dfrac{A\'B\'}{AB} = \\dfrac{\\overline{OA\'}}{\\overline{OA}}$',
        'Réciproque : si $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB}$, alors $(AB) \\parallel (A\'B\')$'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px"></th><th style="border:1px solid var(--border);padding:8px">Théorème direct</th><th style="border:1px solid var(--border);padding:8px">Réciproque</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Hypothèses</strong></td><td style="border:1px solid var(--border);padding:8px">$(AB) \\parallel (A\'B\')$ et deux sécantes passant par $O$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB}$ avec points du même côté de $O$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Conclusion</strong></td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB} = \\dfrac{A\'B\'}{AB}$</td><td style="border:1px solid var(--border);padding:8px">$(AB) \\parallel (A\'B\')$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Utilité</strong></td><td style="border:1px solid var(--border);padding:8px">Calculer une longueur inconnue</td><td style="border:1px solid var(--border);padding:8px">Prouver un parallélisme</td></tr></table>',
      recap: [
        '<strong>Rapports cohérents</strong> : toujours écrire les rapports dans le même sens (grand sur petit ou petit sur grand), jamais mélangés.',
        '<strong>Réciproque</strong> : elle sert à <strong>prouver</strong> que deux droites sont parallèles, à condition que les points soient du même côté de $O$.',
        '<strong>Grandissement en optique</strong> : le signe de $\\gamma$ indique si l\'image est droite ($\\gamma > 0$) ou renversée ($\\gamma < 0$) ; sa valeur absolue donne le facteur d\'agrandissement.',
        '<strong>Configuration croisée</strong> : quand $O$ est entre les parallèles, les rapports restent égaux mais on utilise des mesures algébriques (avec signe).'
      ],
      piege: 'Attention aux rapports : ils peuvent être négatifs en optique (image renversée). Le grandissement $\\gamma$ est négatif quand l\'image est renversée. Ne jamais écrire juste $|AB|/|A\'B\'|$ sans tenir compte des sens — utiliser les mesures algébriques.'
    },

    quiz: [
      {
        q: 'Un élève écrit pour une configuration de Thalès : $\\dfrac{OA}{OA\'} = \\dfrac{A\'B\'}{AB}$. Quelle est son erreur ?',
        options: [
          'Il a mélangé numérateurs et dénominateurs : il faut soit $\\dfrac{OA\'}{OA} = \\dfrac{A\'B\'}{AB}$ soit $\\dfrac{OA}{OA\'} = \\dfrac{AB}{A\'B\'}$',
          'Il ne peut pas écrire d\'égalité de rapports avec $A\'B\'$',
          'Il n\'y a pas d\'erreur, les deux rapports sont bien égaux',
          'Il aurait dû utiliser $OB$ et $OB\'$ au lieu de $OA$ et $OA\'$'
        ],
        answer: 0,
        correction: 'Dans Thalès, les rapports doivent être cohérents : grand sur grand ou petit sur petit. Écrire $\\frac{OA}{OA\'} = \\frac{A\'B\'}{AB}$ mélange les deux : $OA < OA\'$ (petit sur grand) alors que $A\'B\' > AB$ (grand sur petit). La forme correcte est $\\dfrac{OA\'}{OA} = \\dfrac{A\'B\'}{AB}$.'
      },
      {
        q: 'Une lentille forme une image $A\'B\'$ d\'un objet $AB = 2$ cm. L\'objet est à $OA = 15$ cm et l\'image à $OA\' = 45$ cm. Quel est le grandissement $|\\gamma|$ ?',
        options: ['$2$', '$3$', '$1{,}5$', '$0{,}5$'],
        answer: 1,
        correction: '$|\\gamma| = \\dfrac{|OA\'|}{|OA|} = \\dfrac{45}{15} = 3$. L\'image est 3 fois plus grande que l\'objet.'
      },
      {
        q: 'Un arbre de hauteur inconnue projette une ombre de $8$ m. En même temps, un piquet de $1{,}5$ m projette une ombre de $2$ m. Quelle est la hauteur de l\'arbre ?',
        options: ['$4$ m', '$6$ m', '$12$ m', '$10{,}7$ m'],
        answer: 1,
        correction: 'Les rayons du soleil sont parallèles (Thalès). $\\dfrac{h_{\\text{arbre}}}{1{,}5} = \\dfrac{8}{2} \\Rightarrow h_{\\text{arbre}} = 1{,}5 \\times 4 = 6$ m.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const oa = rand(4, 12), ratio = pick([1.5, 2, 2.5, 3]);
        const oaP = oa * ratio;
        const ab = rand(2, 8);
        const abP = parseFloat((ab * ratio).toFixed(2));
        return {
          statement: `Dans une configuration de Thalès, $OA = ${oa}$ cm, $OA' = ${oaP}$ cm, $AB = ${ab}$ cm, $(AB) \\parallel (A'B')$. Calculer $A'B'$.`,
          answer: abP,
          tolerance: 0.05,
          unit: 'cm',
          hint: `Le rapport de Thalès est $k = \\dfrac{OA'}{OA} = \\dfrac{${oaP}}{${oa}}$. Puis $A'B' = k \\times AB$.`,
          solution: [
            `$k = \\dfrac{OA'}{OA} = \\dfrac{${oaP}}{${oa}} = ${ratio}$`,
            `$A'B' = k \\times AB = ${ratio} \\times ${ab} = ${abP}$ cm`
          ]
        };
      }
    },

    probleme: {
      context: 'Une lentille convergente de distance focale $f\' = 10$ cm forme l\'image d\'un objet $AB$ de taille $AB = 3$ cm placé à $OA = -30$ cm (signe algébrique : objet réel à gauche).',
      schema: null,
      tasks: [
        'Appliquer la relation de conjugaison : $\\dfrac{1}{\\overline{OA\'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f\'}$ pour trouver $\\overline{OA\'}$.',
        'Calculer le grandissement algébrique $\\gamma = \\dfrac{\\overline{OA\'}}{\\overline{OA}}$.',
        'En déduire la taille de l\'image $A\'B\'$ et indiquer si elle est droite ou renversée.'
      ],
      solutions: [
        '$\\dfrac{1}{\\overline{OA\'}} = \\dfrac{1}{f\'} + \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{10} + \\dfrac{1}{-30} = \\dfrac{3}{30} - \\dfrac{1}{30} = \\dfrac{2}{30} = \\dfrac{1}{15}$. Donc $\\overline{OA\'} = +15$ cm.',
        '$\\gamma = \\dfrac{\\overline{OA\'}}{\\overline{OA}} = \\dfrac{+15}{-30} = -0{,}5$.',
        '$A\'B\' = \\gamma \\times AB = -0{,}5 \\times 3 = -1{,}5$ cm. L\'image est renversée (signe $-$) et deux fois plus petite.'
      ],
      finalAnswer: '$\\overline{OA\'} = 15$ cm, $\\gamma = -0{,}5$, $A\'B\' = -1{,}5$ cm (image renversée, réduite)'
    },

    evaluation: {
      title: 'Évaluation — Théorème de Thalès',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans une configuration de Thalès, $(AB) \\parallel (A\'B\')$, $OA = 6$ cm, $OA\' = 9$ cm et $AB = 4$ cm. Calculer $A\'B\'$.',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Rapport de Thalès : $k = \\dfrac{OA\'}{OA} = \\dfrac{9}{6} = 1{,}5$. $A\'B\' = k \\times AB = 1{,}5 \\times 4 = 6$ cm.'
        },
        {
          statement: 'Un poteau de $2$ m projette une ombre de $3$ m. Au même moment, un immeuble projette une ombre de $18$ m. Quelle est la hauteur de l\'immeuble ?',
          type: 'numeric',
          answer: 12,
          tolerance: 0,
          unit: 'm',
          points: 2,
          correction: 'Les rayons du soleil sont parallèles (configuration de Thalès). $\\dfrac{h}{2} = \\dfrac{18}{3} = 6$. Donc $h = 2 \\times 6 = 12$ m.'
        },
        {
          statement: 'Dans un triangle $OAB$, les points $A\'$ et $B\'$ sont sur les côtés $[OA]$ et $[OB]$. On a $\\dfrac{OA\'}{OA} = \\dfrac{3}{5}$ et $\\dfrac{OB\'}{OB} = \\dfrac{3}{5}$. Peut-on conclure que $(A\'B\') \\parallel (AB)$ ?',
          type: 'multiple-choice',
          options: [
            'Oui, par la réciproque du théorème de Thalès',
            'Non, il faut aussi vérifier $\\dfrac{A\'B\'}{AB} = \\dfrac{3}{5}$',
            'Non, Thalès ne fonctionne pas dans un triangle',
            'Oui, mais seulement si le triangle est rectangle'
          ],
          answer: 0,
          points: 2,
          correction: 'La réciproque de Thalès affirme : si les points $A\'$, $B\'$ sont sur $[OA]$ et $[OB]$ (même côté du point $O$) et si $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB}$, alors $(A\'B\') \\parallel (AB)$. Les deux rapports étant égaux ($\\frac{3}{5}$), on peut conclure.'
        },
        {
          statement: 'Dans une configuration de Thalès, $OA = 4$ cm, $OA\' = 10$ cm, $OB = 6$ cm. Calculer $OB\'$.',
          type: 'numeric',
          answer: 15,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: '$\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB} \\Rightarrow \\dfrac{10}{4} = \\dfrac{OB\'}{6} \\Rightarrow OB\' = \\dfrac{10 \\times 6}{4} = 15$ cm.'
        },
        {
          statement: 'Une lentille produit une image avec un grandissement $|\\gamma| = 2{,}5$. Si l\'objet mesure $4$ cm, quelle est la taille de l\'image ?',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: '$|A\'B\'| = |\\gamma| \\times AB = 2{,}5 \\times 4 = 10$ cm.'
        }
      ]
    }
  }
);
