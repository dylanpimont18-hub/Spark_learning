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
      diagram: {
        theme: 'si',
        kicker: 'Ajustement H7/g6',
        title: 'Coupe et zones de tolérance : alésage ⌀50 H7, arbre ⌀50 g6',
        description: 'En haut, la coupe de principe (jeu très exagéré pour la lisibilité). En bas, le diagramme des zones de tolérance : il donne directement $J_{\\min}$ et $J_{\\max}$ en comparant les zones de l\'alésage et de l\'arbre autour de la cote nominale.',
        svg: `
          <svg viewBox="0 0 620 430" role="img" aria-labelledby="cao-graph-title cao-graph-desc">
            <title id="cao-graph-title">Ajustement H7/g6 : coupe et zones de tolerance</title>
            <desc id="cao-graph-desc">En haut, coupe schematique d'un alesage et d'un arbre concentriques avec un jeu visible (echelle exageree). En bas, diagramme des zones de tolerance : la zone de l'alesage H7 (0 a +25 micrometres) et la zone de l'arbre g6 (-9 a -25 micrometres) de part et d'autre de la cote nominale, avec les jeux minimal et maximal cotes.</desc>

            <defs>
              <marker id="dim-arrow-cao" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="color-mix(in srgb, var(--text) 80%, var(--diagram-accent))"></path>
              </marker>
            </defs>

            <!-- Coupe schematique : alesage et arbre concentriques (jeu exagere pour lisibilite) -->
            <circle class="frame-line" cx="150" cy="100" r="70" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))"></circle>
            <circle class="frame-line" cx="150" cy="115" r="55" fill="color-mix(in srgb, var(--diagram-accent) 45%, var(--bg-card))"></circle>

            <line x1="150" y1="32" x2="150" y2="58" stroke="color-mix(in srgb, var(--text) 80%, var(--diagram-accent))" stroke-width="1.4" marker-start="url(#dim-arrow-cao)" marker-end="url(#dim-arrow-cao)"></line>
            <text class="label-soft" x="165" y="42">jeu diamétral</text>
            <text class="label-soft" x="165" y="54">(échelle exagérée)</text>

            <text class="annotation-label" x="150" y="18" text-anchor="middle">Alésage ⌀50 H7</text>
            <text class="label-soft" x="150" y="182" text-anchor="middle">(contact en bas, jeu visible en haut)</text>
            <text class="annotation-label" x="150" y="197" text-anchor="middle">Arbre ⌀50 g6</text>

            <!-- Diagramme des zones de tolerance -->
            <line class="axis" x1="140" y1="250" x2="140" y2="392"></line>
            <line class="axis" x1="140" y1="320" x2="520" y2="320"></line>

            <line x1="133" y1="265" x2="147" y2="265" stroke="var(--text-muted)" stroke-width="1.2"></line>
            <text class="tick-label" x="125" y="269" text-anchor="end">+25</text>
            <text class="tick-label" x="125" y="324" text-anchor="end">0</text>
            <line x1="133" y1="340" x2="147" y2="340" stroke="var(--text-muted)" stroke-width="1.2"></line>
            <text class="tick-label" x="125" y="344" text-anchor="end">-9</text>
            <line x1="133" y1="375" x2="147" y2="375" stroke="var(--text-muted)" stroke-width="1.2"></line>
            <text class="tick-label" x="125" y="379" text-anchor="end">-25</text>
            <text class="tick-label" x="120" y="243" text-anchor="end">µm</text>

            <rect class="frame-line" x="260" y="265" width="140" height="55" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)"></rect>
            <rect class="frame-line" x="260" y="340" width="140" height="35" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>

            <text class="label-soft" x="330" y="255" text-anchor="middle">Alésage ⌀50 H7 — IT7 = 25 µm</text>
            <text class="label-soft" x="330" y="398" text-anchor="middle">Arbre ⌀50 g6 — IT6 = 16 µm</text>

            <text class="label-soft" x="150" y="312" text-anchor="start">Cote nominale ⌀50 (écart = 0)</text>

            <line x1="430" y1="320" x2="430" y2="340" stroke="color-mix(in srgb, var(--text) 80%, var(--diagram-accent))" stroke-width="1.4" marker-start="url(#dim-arrow-cao)" marker-end="url(#dim-arrow-cao)"></line>
            <text class="annotation-label" x="445" y="333" text-anchor="start">Jmin = 9 µm</text>

            <line x1="490" y1="265" x2="490" y2="375" stroke="color-mix(in srgb, var(--text) 80%, var(--diagram-accent))" stroke-width="1.4" marker-start="url(#dim-arrow-cao)" marker-end="url(#dim-arrow-cao)"></line>
            <text class="annotation-label" x="505" y="323" text-anchor="start">Jmax = 50 µm</text>
          </svg>
        `,
        notes: [
          'L\'alésage $H7$ occupe la zone $[0\\,;\\,+25]$ µm au-dessus de la cote nominale (IT7 = 25 µm) : $A_{\\min} = 50{,}000$ mm, $A_{\\max} = 50{,}025$ mm.',
          'L\'arbre $g6$ occupe la zone $[-25\\,;\\,-9]$ µm en dessous (IT6 = 16 µm) : $B_{\\min} = 49{,}975$ mm, $B_{\\max} = 49{,}991$ mm.',
          'L\'écart entre le bas de la zone alésage (0) et le haut de la zone arbre ($-9$) donne $J_{\\min} = A_{\\min} - B_{\\max} = 9$ µm.',
          'L\'écart entre le haut de la zone alésage ($+25$) et le bas de la zone arbre ($-25$) donne $J_{\\max} = A_{\\max} - B_{\\min} = 50$ µm, avec $IT_J = 41$ µm $= IT7 + IT6$. ✓'
        ],
        reading: 'Les deux zones ne se touchent jamais (l\'alésage reste toujours au-dessus de l\'arbre) : c\'est ce qui garantit un jeu toujours positif, donc un ajustement tournant libre.',
        caption: 'Ajustement ⌀50 H7/g6 : $J_{\\min} = 9$ µm, $J_{\\max} = 50$ µm (jeu toujours positif).'
      },
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
          statement: `Dans ${scenario}, l'alésage a pour cote $A = ${Anom} \\pm ${String(tolA).replace('.', '{,}')}$ mm et l'arbre $B = ${String(Bnom).replace('.', '{,}')} \\pm ${String(tolB).replace('.', '{,}')}$ mm. Calcule le jeu minimal $J_{\\min}$ (en mm, arrondi à $0{,}01$).`,
          answer: Jmin,
          tolerance: 0.02,
          unit: 'mm',
          hint: '$J_{\\min} = A_{\\min} - B_{\\max}$. Le jeu minimal correspond au plus petit alésage et au plus grand arbre.',
          solution: [
            `$A_{\\min} = ${Anom} - ${String(tolA).replace('.', '{,}')} = ${String(Amin).replace('.', '{,}')}$ mm`,
            `$B_{\\max} = ${String(Bnom).replace('.', '{,}')} + ${String(tolB).replace('.', '{,}')} = ${String(Bmax).replace('.', '{,}')}$ mm`,
            `$J_{\\min} = A_{\\min} - B_{\\max} = ${String(Amin).replace('.', '{,}')} - ${String(Bmax).replace('.', '{,}')} = ${String(Jmin).replace('.', '{,}')}$ mm`
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
