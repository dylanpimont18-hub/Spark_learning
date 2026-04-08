/* =========================================================
   Spark Learning – data/3e/3e-stats-probas.js
   Module : Statistiques et probabilités (approfondissement) (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-stats-probas',
    level: 1, subject: 'maths',
    icon: '📋',
    title: 'Statistiques et probabilités (approfondissement)',
    subtitle: 'Fréquences, tableaux croisés, probabilités conditionnelles intro',
    keywords: ['Tableau croisé', 'Fréquence conditionnelle', 'Probabilité', 'Effectif', 'Proportion'],
    physics: false,
    cours: {
      intro: 'Un <strong>tableau croisé</strong> (ou de contingence) analyse simultanément deux caractères d\'une population et révèle leurs dépendances éventuelles. La clé est de distinguer deux types de fréquences.<br/><br/>' +
        'La <strong>fréquence globale</strong> : effectif de la case / total général — répond à « quelle proportion dans toute la population ? ».<br/>' +
        'La <strong>fréquence conditionnelle</strong> : effectif / total de la sous-population — répond à « parmi les personnes de type $B$, quelle proportion est de type $A$ ? ».<br/><br/>' +
        'Deux caractères sont <strong>indépendants</strong> si la fréquence conditionnelle est égale à la fréquence globale : connaître l\'un ne donne aucune information sur l\'autre.<br/><br/>' +
        'Cette notion est fondamentale en <strong>statistique et médecine</strong> (tests cliniques, études épidémiologiques).',
      definitions: [
        { term: 'Tableau croisé', def: 'Tableau à double entrée qui croise <strong>deux caractères</strong> d\'une population. Les lignes représentent un caractère, les colonnes un autre, et chaque case contient un effectif.' },
        { term: 'Fréquence globale', def: 'Proportion d\'une case par rapport au <strong>total général</strong> : $f = \\dfrac{n_{ij}}{N}$. Elle répond à « quelle part de la population totale ? ».' },
        { term: 'Fréquence conditionnelle', def: 'Proportion d\'une case par rapport au <strong>total d\'une sous-population</strong> : $f_{A|B} = \\dfrac{n(A \\cap B)}{n(B)}$. Elle répond à « parmi les $B$, quelle part est $A$ ? ».' },
        { term: 'Indépendance', def: 'Deux caractères sont <strong>indépendants</strong> si connaître l\'un ne change pas la probabilité de l\'autre : $P(A|B) = P(A)$, soit $P(A \\cap B) = P(A) \\times P(B)$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Étape 1 : Lire le tableau</strong> — les lignes représentent un caractère, les colonnes un autre. Les <strong>marges</strong> donnent les totaux (lignes et colonnes).',
          '<strong>Étape 2 : Fréquence globale</strong> : $f = \\dfrac{\\text{effectif de la case}}{\\text{effectif total}}$.<br/><em>Question :</em> « Quelle proportion dans TOUTE la population ? »',
          '<strong>Étape 3 : Fréquence conditionnelle</strong> : $f_{A|B} = \\dfrac{\\text{effectif}(A \\cap B)}{\\text{effectif de }B}$.<br/><em>Question :</em> « Parmi les $B$, quelle proportion est aussi $A$ ? »'
        ]
      },
      example: {
        statement: 'Dans un collège de $200$ élèves, on recense $80$ sportifs et $60$ musiciens, dont $25$ qui pratiquent les deux. Calculer les fréquences globale et conditionnelle de la musique parmi les sportifs.',
        steps: [
          '<strong>Fréquence globale</strong> des musiciens-sportifs : $f = \\dfrac{25}{200} = 0{,}125 = 12{,}5\\%$ de la population totale.',
          '<strong>Fréquence conditionnelle</strong> de la musique parmi les sportifs : $f_{M|S} = \\dfrac{25}{80} = 0{,}3125 = 31{,}25\\%$.',
          '<strong>Interprétation</strong> : dans la population globale, $12{,}5\\%$ font sport ET musique. Mais parmi les sportifs seuls, $31{,}25\\%$ font aussi de la musique — la sous-population de référence change tout.'
        ],
        answer: 'Fréquence globale $= 0{,}125$ ; fréquence conditionnelle $f_{M|S} = 0{,}3125$.'
      },
      formulas: [
        'Fréquence globale : $f = \\dfrac{n_{ij}}{N}$',
        'Fréquence en ligne : $f_{i|j} = \\dfrac{n_{ij}}{n_{j}}$',
        'Probabilité : $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$ (introduction)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px"></th><th style="border:1px solid var(--border);padding:8px">Musicien</th><th style="border:1px solid var(--border);padding:8px">Non musicien</th><th style="border:1px solid var(--border);padding:8px"><strong>Total</strong></th></tr><tr><th style="border:1px solid var(--border);padding:8px">Sportif</th><td style="border:1px solid var(--border);padding:8px">$25$</td><td style="border:1px solid var(--border);padding:8px">$55$</td><td style="border:1px solid var(--border);padding:8px"><strong>$80$</strong></td></tr><tr><th style="border:1px solid var(--border);padding:8px">Non sportif</th><td style="border:1px solid var(--border);padding:8px">$35$</td><td style="border:1px solid var(--border);padding:8px">$85$</td><td style="border:1px solid var(--border);padding:8px"><strong>$120$</strong></td></tr><tr><th style="border:1px solid var(--border);padding:8px"><strong>Total</strong></th><td style="border:1px solid var(--border);padding:8px"><strong>$60$</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>$140$</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>$200$</strong></td></tr></table>',
      recap: [
        'La <strong>fréquence globale</strong> divise par le total général $N$ ; la <strong>fréquence conditionnelle</strong> divise par le total de la sous-population.',
        'Pour l\'union : $|A \\cup B| = |A| + |B| - |A \\cap B|$ — ne pas oublier de <strong>soustraire l\'intersection</strong>.',
        '$P(A \\cap B) = P(A|B) \\times P(B)$ — la formule de la probabilité de l\'intersection.',
        'Deux caractères sont <strong>indépendants</strong> si $P(A|B) = P(A)$ : savoir que quelqu\'un est $B$ ne change pas la probabilité d\'être $A$.'
      ],
      piege: 'Piège : la fréquence conditionnelle dépend de la population de référence (ligne ou colonne). $\\frac{n_{ij}}{N}$ et $\\frac{n_{ij}}{n_j}$ ne donnent pas le même résultat. Toujours préciser « parmi les… ».'
    },
    quiz: [
      {
        q: 'Dans un tableau : $120$ élèves total. $72$ font du sport, dont $40$ filles. Si on tire une élève au hasard parmi les $50$ filles totales, quelle est la probabilité qu\'elle fasse du sport ?',
        options: ['$\\frac{40}{120}$', '$\\frac{40}{72}$', '$\\frac{40}{50}$', '$\\frac{50}{120}$'],
        answer: 2,
        correction: 'On cherche la probabilité conditionnelle « faire du sport PARMI les filles ». Référence : $50$ filles. $P(\\text{sport}|\\text{fille}) = \\frac{40}{50} = 0{,}8$.'
      },
      {
        q: 'Sur $200$ personnes : $80$ aiment le café, $60$ aiment le thé, $20$ aiment les deux. Combien n\'aiment ni l\'un ni l\'autre ?',
        options: ['$40$', '$60$', '$80$', '$100$'],
        answer: 2,
        correction: '$|C \\cup T| = 80 + 60 - 20 = 120$. Ni l\'un ni l\'autre : $200 - 120 = 80$.'
      },
      {
        q: 'Sur $100$ élèves, $60$ ont un animal de compagnie $(A)$ et $40$ pratiquent un sport $(S)$. Parmi ceux qui ont un animal, $30$ pratiquent aussi le sport. Quelle est $P(A \\cap S)$ ?',
        options: ['$\\dfrac{30}{100}$', '$\\dfrac{30}{60}$', '$\\dfrac{30}{40}$', '$\\dfrac{60+40}{100}$'],
        answer: 0,
        correction: '$P(A \\cap S) = \\dfrac{30}{100} = 0{,}3$ : c\'est la fréquence globale des élèves ayant un animal ET pratiquant un sport (référence : les $100$ élèves). $\\dfrac{30}{60}$ serait $P(S|A)$ (sport parmi les propriétaires), et $\\dfrac{30}{40}$ serait $P(A|S)$ (animal parmi les sportifs). Bien distinguer l\'intersection de la probabilité conditionnelle.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const total = rand(100, 300);
        const pA = pick([0.4, 0.5, 0.6]);
        const nA = Math.round(total * pA);
        const pAB = pick([0.2, 0.3, 0.4]);
        const nAB = Math.round(nA * pAB);
        const fcond = parseFloat((nAB / nA).toFixed(2));
        return {
          statement: `Dans un groupe de $${total}$ personnes, $${nA}$ pratiquent le sport $(A)$, dont $${nAB}$ pratiquent aussi un instrument $(B)$. Quelle est la fréquence conditionnelle de $B$ parmi les sportifs ?`,
          answer: fcond,
          tolerance: 0.01,
          unit: '',
          hint: `$f_{B|A} = \\dfrac{n(A \\cap B)}{n(A)} = \\dfrac{${nAB}}{${nA}}$.`,
          solution: [`$f_{B|A} = \\dfrac{${nAB}}{${nA}} = ${fcond}$ soit $${Math.round(fcond*100)}\\%$ des sportifs.`]
        };
      }
    },
    probleme: {
      context: 'Un lycée sonde $300$ élèves sur leurs habitudes de transport. Résultats : $120$ viennent en vélo, $150$ en bus, $30$ à pied. Parmi les cyclistes, $72$ sont des filles ; parmi les usagers du bus, $90$ sont des filles.',
      tasks: [
        'Calculer la fréquence des cyclistes dans la population totale.',
        'Calculer la fréquence conditionnelle d\'être une fille parmi les cyclistes.',
        'Peut-on dire que les filles préfèrent le vélo au bus ? (Comparer les fréquences conditionnelles.)'
      ],
      solutions: [
        '$f_{\\text{vélo}} = \\dfrac{120}{300} = 0{,}4 = 40\\%$.',
        '$f_{\\text{fille}|\\text{vélo}} = \\dfrac{72}{120} = 0{,}6 = 60\\%$.',
        '$f_{\\text{fille}|\\text{bus}} = \\dfrac{90}{150} = 0{,}6 = 60\\%$. À égalité : les filles ont la même proportion dans les deux modes de transport.'
      ],
      finalAnswer: 'Les filles représentent $60\\%$ des cyclistes et $60\\%$ des usagers du bus : pas de préférence significative.'
    },

    evaluation: {
      title: 'Évaluation — Statistiques et probabilités',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans une classe de $40$ élèves, $24$ pratiquent un sport et $10$ jouent d\'un instrument. Parmi les sportifs, $6$ jouent aussi d\'un instrument. Combien d\'élèves ne pratiquent ni sport ni instrument ?',
          type: 'numeric',
          answer: 12,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$|S \\cup I| = 24 + 10 - 6 = 28$. Ni l\'un ni l\'autre : $40 - 28 = 12$ élèves.'
        },
        {
          statement: 'Dans un sondage portant sur $200$ personnes, $80$ boivent du café $(C)$ et $50$ boivent du thé $(T)$. Parmi les buveurs de café, $20$ boivent aussi du thé. Quelle est la fréquence conditionnelle de boire du thé parmi les buveurs de café ?',
          type: 'numeric',
          answer: 0.25,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$f_{T|C} = \\dfrac{n(C \\cap T)}{n(C)} = \\dfrac{20}{80} = 0{,}25$. Donc $25\\%$ des buveurs de café boivent aussi du thé.'
        },
        {
          statement: 'On lance un dé équilibré à $6$ faces. Quelle est la probabilité d\'obtenir un nombre premier ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{1}{6}$'],
          answer: 1,
          points: 2,
          correction: 'Les nombres premiers parmi $\\{1, 2, 3, 4, 5, 6\\}$ sont $2, 3, 5$ (trois résultats favorables). $P = \\dfrac{3}{6} = \\dfrac{1}{2}$.'
        },
        {
          statement: 'Un tableau croisé indique que sur $150$ élèves, $60$ sont en $3^e$ et parmi ceux-ci, $45$ ont choisi l\'option sciences. La fréquence globale des élèves de $3^e$ ayant choisi sciences est :',
          type: 'multiple-choice',
          options: ['$\\dfrac{45}{60} = 0{,}75$', '$\\dfrac{45}{150} = 0{,}30$', '$\\dfrac{60}{150} = 0{,}40$', '$\\dfrac{45}{90} = 0{,}50$'],
          answer: 1,
          points: 2,
          correction: 'La fréquence globale prend pour référence l\'effectif total : $f = \\dfrac{45}{150} = 0{,}30$. La valeur $\\dfrac{45}{60} = 0{,}75$ est la fréquence conditionnelle (proportion de sciences parmi les $3^e$).'
        },
        {
          statement: 'On tire une carte au hasard dans un jeu de $52$ cartes. Quelle est la probabilité d\'obtenir un as ou un cœur ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{17}{52}$', '$\\dfrac{16}{52}$', '$\\dfrac{4}{52}$', '$\\dfrac{13}{52}$'],
          answer: 1,
          points: 2,
          correction: 'Il y a $4$ as et $13$ cœurs, mais l\'as de cœur est compté dans les deux. $P(\\text{as} \\cup \\text{cœur}) = \\dfrac{4 + 13 - 1}{52} = \\dfrac{16}{52} = \\dfrac{4}{13}$.'
        }
      ]
    }
  }
);
