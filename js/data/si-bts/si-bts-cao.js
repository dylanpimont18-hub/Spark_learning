/* =========================================================
   Spark Learning – data/si-bts/si-bts-cao.js
   Extrait de si-bts.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-bts-cao',
    level: 3, subject: 'si',
    icon: '🖥️',
    title: 'Conception Assistée par Ordinateur (CAO)',
    subtitle: 'Chaîne de cotes, tolérances ISO, ajustements H7/g6',
    keywords: ['CAO', 'Tolérancement', 'Chaîne de cotes', 'Ajustement', 'ISO'],
    physics: 'La CAO est l\'outil central de la conception mécanique. La cotation fonctionnelle et le tolérancement ISO garantissent la fabrication conforme et l\'interchangeabilité des pièces dans l\'industrie.',

    cours: {
      intro: 'La <strong>cotation fonctionnelle</strong> traduit les exigences de fonctionnement en spécifications géométriques mesurables. Chaque cote fonctionnelle est liée à une exigence (jeu, serrage, alignement).<br/><br/>L\'<strong>intervalle de tolérance</strong> (IT) est $IT = c_{\\max} - c_{\\min}$. Le système ISO de tolérances normalise les IT par <strong>qualités</strong> (IT5 à IT18) et <strong>positions</strong> (lettres : $H$, $g$, $h$, etc.). La qualité fixe l\'amplitude de la tolérance, la position fixe son placement par rapport au nominal.<br/><br/>La <strong>chaîne de cotes</strong> est une boucle fermée de cotes reliant les surfaces fonctionnelles. La cote condition (jeu) est la résultante. En méthode arithmétique (pire des cas) : $J_{\\max} = \\sum c_i^{\\max}(+) - \\sum c_j^{\\min}(-)$ et $J_{\\min} = \\sum c_i^{\\min}(+) - \\sum c_j^{\\max}(-)$. La tolérance du jeu est $IT_J = \\sum IT_i$.<br/><br/>Les <strong>ajustements</strong> courants : $H7/g6$ (jeu, tournant libre), $H7/h6$ (glissant), $H7/p6$ (serré). L\'alésage est coté en majuscule ($H$ = écart inférieur nul), l\'arbre en minuscule ($g$ = léger jeu, $h$ = ajusté, $p$ = serré).<br/><br/>Exemple concret : pour un arbre $\\varnothing 50\\,g6$, l\'IT6 pour $\\varnothing 50$ vaut $16$ $\\mu$m, avec des écarts de $-9$ à $-25$ $\\mu$m. L\'alésage $\\varnothing 50\\,H7$ a un IT7 de $25$ $\\mu$m, avec des écarts de $0$ à $+25$ $\\mu$m.',
      definitions: [
        { term: 'Intervalle de tolérance (IT)', def: '$IT = c_{\\max} - c_{\\min}$. Plus l\'IT est petit, plus la fabrication est précise (et coûteuse). Le système ISO normalise les IT par qualités (IT5 : précision, IT11 : courant).' },
        { term: 'Chaîne de cotes', def: 'Boucle fermée de cotes reliant les surfaces fonctionnelles. La cote condition (jeu/serrage) est la résultante. Méthode arithmétique : $IT_J = \\sum IT_i$.' },
        { term: 'Ajustement', def: 'Relation entre un alésage et un arbre. Jeu $= A - B$. Jeu > 0 : avec jeu. Jeu < 0 : serrage. $H7/g6$ (jeu), $H7/h6$ (glissant), $H7/p6$ (serré).' },
        { term: 'Position de tolérance', def: 'Lettre qui fixe la position de l\'IT par rapport au nominal. Majuscule pour l\'alésage ($H$ : écart inf. $= 0$), minuscule pour l\'arbre ($h$ : écart sup. $= 0$, $g$ : léger jeu).' },
        { term: 'Qualité de tolérance', def: 'Nombre (5 à 18) qui fixe l\'amplitude de l\'IT. Plus la qualité est basse, plus la tolérance est serrée. IT7 est courant pour les ajustements, IT11 pour les cotes libres.' }
      ],
      method: {
        title: 'Résoudre une chaîne de cotes (méthode arithmétique)',
        steps: [
          '<strong>Cote condition</strong> : Identifier la cote condition (jeu ou serrage fonctionnel). Nommer $J$.<br/><strong>Exemple :</strong> Jeu axial entre deux pièces, spécifié $0{,}1 \\leq J \\leq 0{,}5$ mm.',
          '<strong>Chaîne de cotes</strong> : Tracer la chaîne : relier les surfaces fonctionnelles. Orienter chaque cote : $+$ dans le sens de $J$, $-$ dans le sens opposé.',
          '<strong>Calcul des limites</strong> : Écrire : $J_{\\max} = \\sum c_i^{\\max}(+) - \\sum c_j^{\\min}(-)$, $J_{\\min} = \\sum c_i^{\\min}(+) - \\sum c_j^{\\max}(-)$.<br/><strong>Exemple :</strong> $J = a - b$ → $J_{\\max} = a_{\\max} - b_{\\min}$, $J_{\\min} = a_{\\min} - b_{\\max}$.',
          '<strong>Vérification du CdC</strong> : Vérifier : $J_{\\min} \\geq 0$ (si jeu requis). $IT_J = J_{\\max} - J_{\\min} = \\sum IT_i$.<br/>Si le CdC n\'est pas respecté, réduire les IT des cotes composantes ou revoir les nominaux.'
        ]
      },
      example: {
        statement: 'Un assemblage avec alésage $\\varnothing 50\\,H7$ ($+0$ / $+25$ $\\mu$m) et arbre $\\varnothing 50\\,g6$ ($-9$ / $-25$ $\\mu$m). Calculer les jeux min et max.',
        steps: [
          'Alésage $H7$ : $A_{\\min} = 50{,}000$ mm, $A_{\\max} = 50{,}025$ mm.',
          'Arbre $g6$ : $B_{\\max} = 49{,}991$ mm, $B_{\\min} = 49{,}975$ mm.',
          '$J_{\\min} = A_{\\min} - B_{\\max} = 50{,}000 - 49{,}991 = 0{,}009$ mm $= 9$ $\\mu$m.',
          '$J_{\\max} = A_{\\max} - B_{\\min} = 50{,}025 - 49{,}975 = 0{,}050$ mm $= 50$ $\\mu$m.',
          '$IT_J = 50 - 9 = 41$ $\\mu$m $= IT_H + IT_g = 25 + 16 = 41$ $\\mu$m. ✓'
        ],
        answer: '$J_{\\min} = 9$ $\\mu$m, $J_{\\max} = 50$ $\\mu$m. Ajustement tournant libre.'
      },
      formulas: [
        '$IT = c_{\\max} - c_{\\min}$',
        '$\\text{Jeu} = \\text{Alésage} - \\text{Arbre}$',
        '$J_{\\max} = A_{\\max} - B_{\\min}$',
        '$J_{\\min} = A_{\\min} - B_{\\max}$',
        '$IT_J = \\sum IT_i$ (méthode arithmétique)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Qualité ISO</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">IT ($\\mu$m) pour $\\varnothing$ 50</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Usage typique</th></tr><tr><td style="border:1px solid var(--border);padding:8px">IT5</td><td style="border:1px solid var(--border);padding:8px">11</td><td style="border:1px solid var(--border);padding:8px">Roulements, pièces de précision</td></tr><tr><td style="border:1px solid var(--border);padding:8px">IT6</td><td style="border:1px solid var(--border);padding:8px">16</td><td style="border:1px solid var(--border);padding:8px">Arbres de qualité (ajustement $g6$, $h6$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">IT7</td><td style="border:1px solid var(--border);padding:8px">25</td><td style="border:1px solid var(--border);padding:8px">Alésages de qualité ($H7$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">IT8</td><td style="border:1px solid var(--border);padding:8px">39</td><td style="border:1px solid var(--border);padding:8px">Pièces mécaniques courantes</td></tr><tr><td style="border:1px solid var(--border);padding:8px">IT9</td><td style="border:1px solid var(--border);padding:8px">62</td><td style="border:1px solid var(--border);padding:8px">Pièces usinées ordinaires</td></tr><tr><td style="border:1px solid var(--border);padding:8px">IT11</td><td style="border:1px solid var(--border);padding:8px">160</td><td style="border:1px solid var(--border);padding:8px">Cotes libres, tôlerie</td></tr></table>',
      recap: [
        'La cotation fonctionnelle ne retient que les cotes nécessaires au fonctionnement.',
        '$IT = c_{\\max} - c_{\\min}$ : plus l\'IT est serré, plus c\'est coûteux.',
        'Chaîne de cotes : $IT_J = \\sum IT_i$ (méthode arithmétique, pire des cas).',
        'Ajustements ISO : $H7/g6$ (jeu tournant), $H7/h6$ (glissant), $H7/p6$ (serré).',
        'Toujours vérifier $J_{\\min} \\geq 0$ pour un ajustement avec jeu.'
      ],
      piege: 'Attention au sens des cotes dans la chaîne ! Les cotes dans le sens de $J$ sont $+$ (max → $J_{\\max}$). Les cotes en sens opposé sont $-$ (min → $J_{\\max}$). Inverser le sens d\'une cote fausse tout le calcul. Attention aussi aux unités : les IT sont souvent en $\\mu$m mais les cotes en mm.'
    },

    quiz: [
      {
        q: 'L\'intervalle de tolérance de $50 \\pm 0{,}03$ mm vaut :',
        options: [
          '$IT = 0{,}03$ mm',
          '$IT = 0{,}06$ mm',
          '$IT = 50{,}03$ mm',
          '$IT = 50$ mm'
        ],
        answer: 1,
        correction: '$c_{\\max} = 50{,}03$, $c_{\\min} = 49{,}97$. $IT = 0{,}06$ mm. L\'IT est toujours le double de la valeur $\\pm$.'
      },
      {
        q: 'L\'ajustement $H7/g6$ est un ajustement :',
        options: [
          'Avec serrage (l\'arbre est plus gros que l\'alésage)',
          'Avec jeu (l\'alésage est toujours plus grand que l\'arbre)',
          'Incertain (parfois jeu, parfois serrage)',
          'Glissant juste ($J_{\\min} = 0$)'
        ],
        answer: 1,
        correction: '$H7$ : écart inf. de l\'alésage $= 0$. $g6$ : écart sup. de l\'arbre $< 0$ (négatif). Donc $A_{\\min} > B_{\\max}$ : jeu toujours positif. C\'est un ajustement tournant libre.'
      },
      {
        q: 'La tolérance du jeu dans une chaîne de cotes (méthode arithmétique) est :',
        options: [
          'Égale à la plus grande tolérance composante',
          'Égale à la somme des tolérances composantes',
          'Égale à la moyenne des tolérances',
          'Indépendante des tolérances composantes'
        ],
        answer: 1,
        correction: 'Méthode arithmétique (pire des cas) : $IT_J = \\sum IT_i$. Les tolérances s\'accumulent. C\'est pourquoi on minimise le nombre de cotes dans la chaîne.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const Anom = rand(30, 80);
        const tolA = randFloat(0.01, 0.05, 2);
        const ecart = randFloat(0.03, 0.12, 2);
        const Bnom = parseFloat((Anom - ecart).toFixed(2));
        const tolB = randFloat(0.01, 0.04, 2);
        const Amin = parseFloat((Anom - tolA).toFixed(2));
        const Bmax = parseFloat((Bnom + tolB).toFixed(2));
        const Jmin = parseFloat((Amin - Bmax).toFixed(2));
        const scenario = pick([
          'un assemblage de deux pièces mécaniques',
          'un guidage en translation',
          'un palier lisse'
        ]);
        return {
          statement: `Dans ${scenario}, l'alésage a pour cote $A = ${Anom} \\pm ${String(tolA).replace('.', '{,')}$ mm et l'arbre $B = ${String(Bnom).replace('.', '{,')} \\pm ${String(tolB).replace('.', '{,')}$ mm. Calcule le jeu minimal $J_{\\min}$ (en mm, arrondi à $0{,}01$).`,
          answer: Jmin,
          tolerance: 0.02,
          unit: 'mm',
          hint: '$J_{\\min} = A_{\\min} - B_{\\max}$. Le jeu minimal correspond au plus petit alésage et au plus grand arbre.',
          solution: [
            `$A_{\\min} = ${Anom} - ${String(tolA).replace('.', '{,')} = ${String(Amin).replace('.', '{,')}$ mm`,
            `$B_{\\max} = ${String(Bnom).replace('.', '{,')} + ${String(tolB).replace('.', '{,')} = ${String(Bmax).replace('.', '{,')}$ mm`,
            `$J_{\\min} = A_{\\min} - B_{\\max} = ${String(Amin).replace('.', '{,')} - ${String(Bmax).replace('.', '{,')} = ${String(Jmin).replace('.', '{,')}$ mm`
          ]
        };
      }
    },

    probleme: {
      context: 'Un assemblage $\\varnothing 40\\,H7/g6$. Données ISO pour $\\varnothing 40$ : $H7$ (écarts $+0$ / $+25$ $\\mu$m, IT $= 25$ $\\mu$m), $g6$ (écarts $-9$ / $-25$ $\\mu$m, IT $= 16$ $\\mu$m).',
      tasks: [
        'Calculer les dimensions limites de l\'alésage et de l\'arbre (en mm).',
        'Calculer le jeu minimal et le jeu maximal (en $\\mu$m).',
        'Vérifier que $IT_J = IT_H + IT_g$ et qualifier le type d\'ajustement.'
      ],
      solutions: [
        'Alésage $H7$ : $A_{\\min} = 40{,}000$ mm, $A_{\\max} = 40{,}025$ mm. Arbre $g6$ : $B_{\\max} = 40{,}000 - 0{,}009 = 39{,}991$ mm, $B_{\\min} = 40{,}000 - 0{,}025 = 39{,}975$ mm.',
        '$J_{\\min} = A_{\\min} - B_{\\max} = 40{,}000 - 39{,}991 = 0{,}009$ mm $= 9$ $\\mu$m. $J_{\\max} = A_{\\max} - B_{\\min} = 40{,}025 - 39{,}975 = 0{,}050$ mm $= 50$ $\\mu$m.',
        '$IT_J = J_{\\max} - J_{\\min} = 50 - 9 = 41$ $\\mu$m. $IT_H + IT_g = 25 + 16 = 41$ $\\mu$m. ✓ $J_{\\min} > 0$ : ajustement avec jeu (tournant libre).'
      ],
      finalAnswer: '$J_{\\min} = 9$ $\\mu$m, $J_{\\max} = 50$ $\\mu$m. Ajustement H7/g6 avec jeu, $IT_J = 41$ $\\mu$m.'
    },

    evaluation: {
      title: 'Évaluation — CAO et Tolérancement',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer l\'IT de la cote $30 \\pm 0{,}02$ mm (en mm).',
          type: 'numeric',
          answer: 0.04,
          tolerance: 0.001,
          unit: 'mm',
          points: 2,
          correction: '$IT = 30{,}02 - 29{,}98 = 0{,}04$ mm.'
        },
        {
          statement: 'Un alésage $H7$ ($\\varnothing 50$) a des écarts de $+0$ / $+25$ $\\mu$m. Un arbre $g6$ a des écarts de $-9$ / $-25$ $\\mu$m. Le jeu maximal vaut (en $\\mu$m) :',
          type: 'numeric',
          answer: 50,
          tolerance: 1,
          unit: 'µm',
          points: 3,
          correction: '$J_{\\max} = A_{\\max} - B_{\\min} = (50 + 0{,}025) - (50 - 0{,}025) = 0{,}050$ mm $= 50$ $\\mu$m.'
        },
        {
          statement: 'Dans une chaîne de cotes à 3 composantes ($IT_1 = 20$ $\\mu$m, $IT_2 = 15$ $\\mu$m, $IT_3 = 10$ $\\mu$m), la tolérance du jeu est :',
          type: 'multiple-choice',
          options: [
            '$IT_J = 20$ $\\mu$m (la plus grande)',
            '$IT_J = 15$ $\\mu$m (la moyenne)',
            '$IT_J = 45$ $\\mu$m (la somme)',
            '$IT_J = 10$ $\\mu$m (la plus petite)'
          ],
          answer: 2,
          points: 2,
          correction: 'Méthode arithmétique : $IT_J = \\sum IT_i = 20 + 15 + 10 = 45$ $\\mu$m.'
        },
        {
          statement: 'Le jeu minimal d\'un assemblage : alésage $A_{\\min} = 49{,}98$ mm, $A_{\\max} = 50{,}02$ mm ; arbre $B_{\\min} = 49{,}92$ mm, $B_{\\max} = 49{,}96$ mm (en mm) :',
          type: 'numeric',
          answer: 0.02,
          tolerance: 0.005,
          unit: 'mm',
          points: 3,
          correction: '$J_{\\min} = A_{\\min} - B_{\\max} = 49{,}98 - 49{,}96 = 0{,}02$ mm. Jeu toujours positif : ajustement avec jeu.'
        }
      ]
    }
  });
