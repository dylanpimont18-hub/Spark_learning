/* =========================================================
   Spark Learning – data/si-1re/si-1re-statique-pfs.js
   Extrait de si-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-1re-statique-pfs',
    level: 2, subject: 'si',
    icon: '⚖️',
    title: 'Statique : PFS',
    subtitle: 'Principe Fondamental de la Statique, équilibre des forces et moments',
    keywords: ['PFS', 'Équilibre', 'Torseur', 'Résultante', 'Moment'],
    physics: 'Le PFS est essentiel pour dimensionner les structures (ponts, bâtiments, châssis) et vérifier qu\'un système mécanique reste en équilibre sous charge.',

    cours: {
      intro: 'Le <strong>Principe Fondamental de la Statique</strong> (PFS) exprime les conditions d\'équilibre d\'un solide soumis à des actions mécaniques extérieures.<br/><br/>Un solide est en équilibre si son <strong>torseur statique</strong> est nul, ce qui se traduit par deux conditions simultanées :<br/>- En translation : $\\sum \\vec{F}_{\\text{ext}} = \\vec{0}$<br/>- En rotation : $\\sum \\vec{M}_{A}(\\vec{F}_{\\text{ext}}) = \\vec{0}$ (en tout point $A$)<br/><br/>En 2D, cela donne <strong>3 équations scalaires</strong> indépendantes : $\\sum F_x = 0$, $\\sum F_y = 0$ et $\\sum M_A = 0$. On peut donc déterminer au maximum 3 inconnues.<br/><br/>La démarche commence toujours par l\'isolement du solide, suivi du bilan complet des actions mécaniques, puis de l\'écriture et la résolution des équations.',
      definitions: [
        { term: 'Action mécanique', def: 'Cause capable de modifier le mouvement d\'un solide. Elle se caractérise par un point d\'application, une direction, un sens et une intensité (en N).' },
        { term: 'Moment d\'une force', def: 'Capacité d\'une force à faire tourner un solide autour d\'un point : $M_A(\\vec{F}) = F \\times d$ où $d$ est le bras de levier. Unité : N·m.' },
        { term: 'Torseur statique', def: 'Outil mathématique regroupant la résultante $\\vec{R} = \\sum \\vec{F}$ et le moment résultant $\\vec{M}_A$ des actions mécaniques en un point $A$. À l\'équilibre, les deux sont nuls.' },
        { term: 'Liaison mécanique', def: 'Connexion entre deux solides qui supprime certains degrés de liberté. Chaque liaison introduit des inconnues de réaction (ex. : appui simple → 1 inconnue, pivot → 2, encastrement → 3 en 2D).' }
      ],
      method: {
        title: 'Appliquer le PFS en 5 étapes',
        steps: [
          'Étape 1 — Isoler le solide : définir clairement le système étudié en traçant sa frontière d\'isolement.<br/>Tout ce qui est à l\'extérieur exerce des actions sur le solide isolé.',
          'Étape 2 — Bilan des actions mécaniques : lister toutes les forces extérieures (poids, forces appliquées, réactions d\'appui).<br/>Ne pas oublier les réactions aux liaisons ! Appui simple → $1$ composante, pivot → $2$ composantes, encastrement → $2$ composantes + $1$ moment.',
          'Étape 3 — Choisir un repère et un point de moment : orienter les axes $x$ et $y$.<br/>Choisir le point $A$ pour le calcul des moments là où passe une force inconnue, pour l\'éliminer de l\'équation.',
          'Étape 4 — Écrire les 3 équations : $\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M_A = 0$.<br/>Convention : moment positif si rotation anti-horaire.',
          'Étape 5 — Résoudre le système : $3$ équations pour au plus $3$ inconnues.<br/>Vérifier la cohérence des résultats (signes, unités, $R_A + R_B = F$ pour une poutre simple).'
        ]
      },
      example: {
        statement: 'Une poutre horizontale de longueur $L = 4$ m est en appui simple en $A$ (à gauche) et en $B$ (à droite). Une charge $F = 600$ N est appliquée à $d = 1$ m de $A$. Calculer les réactions $R_A$ et $R_B$.',
        steps: [
          'Bilan : poids de la poutre négligé, charge $F = 600$ N vers le bas à $1$ m de $A$, réactions $R_A$ (en $A$, vers le haut) et $R_B$ (en $B$, vers le haut).',
          'Moments en $A$ : $\\sum M_A = 0 \\Rightarrow R_B \\times 4 - F \\times 1 = 0 \\Rightarrow R_B = \\dfrac{600 \\times 1}{4} = 150$ N.',
          'Forces verticales : $\\sum F_y = 0 \\Rightarrow R_A + R_B - F = 0 \\Rightarrow R_A = 600 - 150 = 450$ N.',
          'Vérification : $R_A + R_B = 450 + 150 = 600$ N $= F$ ✓.'
        ],
        answer: '$R_A = 450$ N et $R_B = 150$ N.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><td style="border:1px solid var(--border);padding:8px"><strong>Type de liaison</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Symbole</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Inconnues en 2D</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Mouvements bloqués</strong></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Appui simple</td><td style="border:1px solid var(--border);padding:8px">△</td><td style="border:1px solid var(--border);padding:8px">$1$ ($R_y$)</td><td style="border:1px solid var(--border);padding:8px">Translation ⊥ à l\'appui</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Appui glissant</td><td style="border:1px solid var(--border);padding:8px">△ sur rouleaux</td><td style="border:1px solid var(--border);padding:8px">$1$ ($R_y$)</td><td style="border:1px solid var(--border);padding:8px">Translation ⊥ à l\'appui</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Pivot (articulation)</td><td style="border:1px solid var(--border);padding:8px">○</td><td style="border:1px solid var(--border);padding:8px">$2$ ($R_x$, $R_y$)</td><td style="border:1px solid var(--border);padding:8px">Translations x et y</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Encastrement</td><td style="border:1px solid var(--border);padding:8px">▰</td><td style="border:1px solid var(--border);padding:8px">$3$ ($R_x$, $R_y$, $M$)</td><td style="border:1px solid var(--border);padding:8px">Tout mouvement plan</td></tr></table>',
      formulas: [
        '$\\sum F_x = 0$ (équilibre des forces horizontales)',
        '$\\sum F_y = 0$ (équilibre des forces verticales)',
        '$\\sum M_A = 0$ (équilibre des moments au point $A$)',
        '$M_A(\\vec{F}) = F \\times d$ (moment = force × bras de levier)',
        'Convention : moment positif si rotation anti-horaire, négatif si horaire'
      ],
      recap: [
        'Le PFS donne <strong>3 équations scalaires</strong> en 2D : $\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M_A = 0$.',
        'Toujours commencer par isoler le solide et faire un bilan complet des actions mécaniques.',
        'Le choix du point de moment est stratégique : choisir un point où passe une force inconnue pour l\'éliminer.',
        'En 2D on peut résoudre au maximum $3$ inconnues. Si le problème en comporte plus, il est hyperstatique.'
      ],
      piege: 'Le bras de levier $d$ n\'est PAS la distance entre le point d\'application de la force et le point de moment. C\'est la <strong>distance perpendiculaire</strong> entre la ligne d\'action de la force et le point de moment. Pour une force verticale à une distance horizontale $x$ du point $A$, le bras de levier est bien $x$. Mais pour une force oblique, il faut projeter !'
    },

    quiz: [
      {
        q: 'Le PFS en 2D fournit $3$ équations. Une poutre sur deux appuis simples possède $2$ réactions inconnues ($R_A$ et $R_B$). Ce problème est :',
        options: [
          'Hyperstatique (plus d\'inconnues que d\'équations)',
          'Isostatique (autant d\'inconnues que d\'équations utilisables)',
          'Impossible à résoudre',
          'Hypostatique (trop d\'équations)'
        ],
        answer: 1,
        correction: 'Avec $2$ inconnues et $3$ équations d\'équilibre, le problème est isostatique : on a suffisamment d\'équations pour trouver les $2$ réactions. La 3ème équation ($\\sum F_x = 0$) confirme qu\'il n\'y a pas de force horizontale.'
      },
      {
        q: 'Une poutre de $6$ m est en appui en $A$ (gauche) et $B$ (droite). Une charge de $900$ N est appliquée à $2$ m de $A$. La réaction $R_B$ vaut :',
        options: ['$900$ N', '$600$ N', '$300$ N', '$450$ N'],
        answer: 2,
        correction: '$\\sum M_A = 0$ : $R_B \\times 6 - 900 \\times 2 = 0 \\Rightarrow R_B = \\dfrac{1800}{6} = 300$ N.<br/>Vérification : $R_A = 900 - 300 = 600$ N. La charge étant plus proche de $A$, il est logique que $R_A > R_B$.'
      },
      {
        q: 'Pourquoi est-il judicieux de choisir un point de moment où passe une force inconnue ?',
        options: [
          'Parce que le moment de cette force y est <strong>nul</strong> (bras de levier = 0), ce qui simplifie l\'équation',
          'Parce que cette force est alors nulle',
          'Parce que cela annule toutes les autres forces',
          'Parce que le PFS ne fonctionne qu\'en ce point'
        ],
        answer: 0,
        correction: 'Si une force passe par le point $A$, son bras de levier par rapport à $A$ est nul : $M_A = F \\times 0 = 0$. Cette inconnue disparaît de l\'équation des moments, ce qui simplifie directement la résolution.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const L = rand(3, 8);
        const d = rand(1, L - 1);
        const F = Math.round(rand(100, 1000) / 10) * 10;
        const Rb = parseFloat((F * d / L).toFixed(1));
        const Ra = parseFloat((F - Rb).toFixed(1));

        const scenario = pick([
          { name: 'une poutre de pont roulant', load: 'un colis suspendu' },
          { name: 'une étagère industrielle', load: 'une charge répartie concentrée' },
          { name: 'un bras de grue', load: 'un bloc de béton' },
          { name: 'une passerelle piétonne', load: 'un piéton' }
        ]);

        const askA = pick([true, false]);
        const target = askA ? Ra : Rb;
        const label = askA ? 'R_A' : 'R_B';
        const point = askA ? 'A' : 'B';

        return {
          statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} de longueur $L = ${L}$ m repose sur deux appuis simples $A$ (gauche) et $B$ (droite). ${scenario.load.charAt(0).toUpperCase() + scenario.load.slice(1)} de $F = ${F}$ N est appliqué(e) à $d = ${d}$ m de $A$. Calcule la réaction $${label}$ en ${point} (en N).`,
          answer: target,
          tolerance: 0.5,
          unit: 'N',
          hint: `Écris l'équation des moments au point ${askA ? 'B' : 'A'} pour trouver directement $${label}$. Le moment d'une force = force × bras de levier.`,
          solution: [
            `Bilan : charge $F = ${F}$ N à $d = ${d}$ m de $A$, réactions $R_A$ et $R_B$ vers le haut.`,
            askA
              ? `Moments en $B$ : $R_A \\times ${L} - ${F} \\times ${L - d} = 0$`
              : `Moments en $A$ : $R_B \\times ${L} - ${F} \\times ${d} = 0$`,
            askA
              ? `$R_A = \\dfrac{${F} \\times ${L - d}}{${L}} = ${Ra}$ N`
              : `$R_B = \\dfrac{${F} \\times ${d}}{${L}} = ${Rb}$ N`,
            `Vérification : $R_A + R_B = ${Ra} + ${Rb} = ${F}$ N $= F$ ✓`
          ]
        };
      }
    },

    probleme: {
      context: 'Une potence murale supporte une charge $P = 500$ N suspendue à l\'extrémité d\'un bras horizontal de longueur $L = 2$ m. Le bras est articulé au mur en $A$ (liaison pivot) et maintenu par un câble oblique fixé au mur en $C$ (au-dessus de $A$) et au bout du bras en $B$. L\'angle entre le câble et l\'horizontale est $\\alpha = 45°$. On néglige le poids du bras.',
      tasks: [
        'Isoler le bras $AB$ et faire le bilan des actions mécaniques.',
        'Écrire l\'équation des moments en $A$ pour déterminer la tension $T$ dans le câble.',
        'Déduire les composantes de la réaction en $A$ ($R_{Ax}$ et $R_{Ay}$) à partir des équations de forces.'
      ],
      solutions: [
        'Bilan sur le bras $AB$ : poids $P = 500$ N (vertical, vers le bas) en $B$ ; tension $\\vec{T}$ dans le câble (oblique, vers $C$) en $B$ ; réaction $\\vec{R_A}$ (composantes $R_{Ax}$ et $R_{Ay}$, inconnues) en $A$.',
        'Moments en $A$ : $\\sum M_A = 0 \\Rightarrow T \\sin(45°) \\times L - P \\times L = 0 \\Rightarrow T = \\dfrac{P}{\\sin(45°)} = \\dfrac{500}{0{,}707} \\approx 707$ N.',
        '$\\sum F_x = 0 \\Rightarrow R_{Ax} - T\\cos(45°) = 0 \\Rightarrow R_{Ax} = 707 \\times 0{,}707 = 500$ N (vers le mur). $\\sum F_y = 0 \\Rightarrow R_{Ay} + T\\sin(45°) - P = 0 \\Rightarrow R_{Ay} = 500 - 500 = 0$ N.'
      ],
      finalAnswer: '$T \\approx 707$ N, $R_{Ax} = 500$ N (horizontale vers le mur), $R_{Ay} = 0$ N.'
    },

    evaluation: {
      title: 'Évaluation — Statique : PFS',
      duration: '20 min',
      questions: [
        {
          statement: 'Quelle est la condition d\'équilibre en moment pour un solide en 2D ?',
          type: 'multiple-choice',
          options: [
            '$\\sum \\vec{M}_A = \\vec{0}$ en un point $A$ quelconque',
            '$\\sum \\vec{M}_A \\neq \\vec{0}$ au centre de gravité',
            '$\\sum F = 0$ uniquement',
            'Les moments ne jouent aucun rôle en 2D'
          ],
          answer: 0,
          points: 2,
          correction: 'Pour l\'équilibre en 2D, il faut $\\sum \\vec{F} = \\vec{0}$ <strong>ET</strong> $\\sum \\vec{M}_A = \\vec{0}$ en un point $A$ quelconque. Les deux conditions sont nécessaires et suffisantes.'
        },
        {
          statement: 'Une poutre de $5$ m est en appui en $A$ (gauche) et $B$ (droite). Une charge de $800$ N est appliquée à $2$ m de $A$. Calculer $R_B$ (en N).',
          type: 'numeric',
          answer: 320,
          tolerance: 1,
          unit: 'N',
          points: 3,
          correction: '$\\sum M_A = 0 \\Rightarrow R_B \\times 5 - 800 \\times 2 = 0 \\Rightarrow R_B = \\dfrac{1600}{5} = 320$ N.'
        },
        {
          statement: 'Calculer $R_A$ pour la poutre précédente (charge de $800$ N, $R_B = 320$ N).',
          type: 'numeric',
          answer: 480,
          tolerance: 1,
          unit: 'N',
          points: 2,
          correction: '$\\sum F_y = 0 \\Rightarrow R_A + R_B - 800 = 0 \\Rightarrow R_A = 800 - 320 = 480$ N.'
        },
        {
          statement: 'Le moment d\'une force de $50$ N dont le bras de levier est $0{,}8$ m vaut :',
          type: 'numeric',
          answer: 40,
          tolerance: 0.1,
          unit: 'N·m',
          points: 3,
          correction: '$M = F \\times d = 50 \\times 0{,}8 = 40$ N·m.'
        }
      ]
    }
  });
