/* =========================================================
   Spark Learning – data/5e/5e-priorites-operations.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-priorites-operations',
    level: 1, subject: 'maths',
    icon: '🔢',
    title: 'Priorités des opérations',
    subtitle: 'Règles de calcul, parenthèses, puissances',
    keywords: ['Parenthèses', 'Puissances', 'Multiplication', 'Division', 'Addition', 'Soustraction'],
    physics: 'Calcul numérique de formules physiques : $E = \\frac{1}{2}mv^2$, $P = RI^2$',

    cours: {
      /* DECOUVRIR REECRIT LE 2026-09-13. L'intro annoncait « les priorites sont
         une convention universelle » : la reponse avant la question. Or ce
         chapitre est le seul de l'annee ou l'on ne demontre RIEN — on fixe un
         usage. Une entree historique convient donc mieux qu'une mise en
         situation, qui serait ici decorative : le desaccord entre deux calculs
         justes est un fait, pas une anecdote plaquee. */
      intro: 'Demande à deux personnes de calculer $2 + 3 \\times 4$. L\'une répondra $14$, l\'autre $20$. Laquelle se trompe ?<br/><br/>' +
        'Aucune des deux. La première a multiplié avant d\'additionner, la seconde a lu de gauche à droite, et chacune a calculé juste. Le problème n\'est pas dans les calculs : il est dans l\'<strong>écriture</strong>, qui ne dit pas par où commencer.<br/><br/>' +
        'Les mathématiciens ont mis des siècles à s\'accorder là-dessus. Il a fallu trancher.<br/><br/>' +
        'Non pas parce qu\'un ordre serait plus vrai que l\'autre, mais pour qu\'une même expression ne veuille dire qu\'<strong>une seule chose</strong>, partout dans le monde.<br/><br/>' +
        'Les priorités des opérations sont une <strong>convention universelle</strong> qui garantit qu\'une expression mathématique a une seule interprétation. Sans cette convention, $2 + 3 \\times 4$ pourrait valoir $20$ ou $14$ selon l\'ordre de lecture.<br/><br/>' +
        'L\'ordre est : <strong>Parenthèses → Carrés et cubes (puissances) → Multiplications/Divisions → Additions/Soustractions</strong>.<br/><br/>' +
        '<strong>Le trait de fraction agit comme des parenthèses</strong> : $\\dfrac{8+4}{2} = (8+4) \\div 2 = 6$, mais $8 + 4 \\div 2 = 8 + 2 = 10$.<br/><br/>' +
        'En physique, cela évite les erreurs classiques : dans $E_c = \\dfrac{1}{2}mv^2$, c\'est $v$ seul qui est au carré (pas $mv$), et dans $P = RI^2$, c\'est $I$ seul (pas $RI$).',
      definitions: [
        { term: 'Priorité opératoire', def: 'Ordre dans lequel les opérations doivent être effectuées. La multiplication est prioritaire sur l\'addition.' },
        { term: 'Parenthèses', def: 'Symboles $()$ qui forcent un calcul à être effectué en premier, quel que soit son rang de priorité.' },
        { term: 'Puissance', def: '$a^2 = a \\times a$ et $a^3 = a \\times a \\times a$. L\'exposant ne porte que sur le nombre écrit <strong>juste avant</strong> lui.' },
        { term: 'Trait de fraction', def: 'Agit comme des parenthèses implicites autour du numérateur et du dénominateur.' }
      ],
      example: {
        statement: 'Calculer $3 + 2 \\times (5 - 1)^2 \\div 4$.',
        steps: [
          'Parenthèses : $5 - 1 = 4$.',
          'Exposant : $4^2 = 16$.',
          'Multiplication/division (gauche à droite) : $2 \\times 16 = 32$, puis $32 \\div 4 = 8$.',
          'Addition : $3 + 8 = 11$.'
        ],
        answer: '$11$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Priorités des opérations — pas à pas',
        title: 'Un même calcul, quatre étapes : dans quel ordre calculer ?',
        description: 'Reprenons un calcul qui mobilise <strong>les quatre niveaux de priorité</strong> : $2 + 3^2 \\times (7 - 4) \\div 3 - 1$.<br/><br/>' +
          'Plutôt que de calculer dans l\'ordre de lecture, on traite <strong>une priorité à la fois</strong> : d\'abord les parenthèses, puis les puissances, puis les multiplications/divisions, et enfin les additions/soustractions.',
        svg: `
          <svg viewBox="0 0 1220 240" role="img" aria-labelledby="priorites-diag-title priorites-diag-desc">
            <title id="priorites-diag-title">Résolution de 2 + 3² × (7 − 4) ÷ 3 − 1 en 4 étapes</title>
            <desc id="priorites-diag-desc">Quatre colonnes montrent l'expression 2 + 3 au carre fois (7 moins 4) divise par 3 moins 1, resolue etape par etape : d'abord la partie entre parentheses est mise en evidence et calculee (7 moins 4 egale 3), puis la puissance 3 au carre est mise en evidence et calculee (egale 9), puis la multiplication et la division sont mises en evidence et calculees de gauche a droite (9 fois 3 egale 27, puis 27 divise par 3 egale 9), puis enfin l'addition et la soustraction sont mises en evidence et calculees de gauche a droite (2 plus 9 egale 11, puis 11 moins 1 egale 10), pour un resultat final de 10. Des fleches relient chaque colonne a la suivante.</desc>

            <text class="axis-label" x="150" y="28" text-anchor="middle">1. Parenthèses</text>
            <rect class="frame-line" fill="none" rx="5" x="116" y="76" width="77" height="27"></rect>
            <text class="label" x="35" y="95" style="font-family:monospace;font-size:16px;font-weight:600">2 + 3² × (7 − 4) ÷ 3 − 1</text>
            <text class="label-soft" x="150" y="135" text-anchor="middle" style="font-size:13px">7 − 4 = 3</text>
            <text class="annotation-label" x="150" y="182" text-anchor="middle">2 + 3² × 3 ÷ 3 − 1</text>

            <line class="graph-line" x1="278" y1="95" x2="317" y2="95"></line>
            <polygon class="plot-point" points="317,88 329,95 317,102"></polygon>

            <text class="axis-label" x="450" y="28" text-anchor="middle">2. Puissances</text>
            <rect class="frame-line" fill="none" rx="5" x="367" y="76" width="31" height="27"></rect>
            <text class="label" x="335" y="95" style="font-family:monospace;font-size:16px;font-weight:600">2 + 3² × 3 ÷ 3 − 1</text>
            <text class="label-soft" x="450" y="135" text-anchor="middle" style="font-size:13px">3² = 9</text>
            <text class="annotation-label" x="450" y="182" text-anchor="middle">2 + 9 × 3 ÷ 3 − 1</text>

            <line class="graph-line" x1="578" y1="95" x2="617" y2="95"></line>
            <polygon class="plot-point" points="617,88 629,95 617,102"></polygon>

            <text class="axis-label" x="750" y="28" text-anchor="middle">3. Multiplication / Division</text>
            <rect class="frame-line" fill="none" rx="5" x="668" y="76" width="96" height="27"></rect>
            <text class="label" x="635" y="95" style="font-family:monospace;font-size:16px;font-weight:600">2 + 9 × 3 ÷ 3 − 1</text>
            <text class="label-soft" x="750" y="124" text-anchor="middle" style="font-size:13px">9 × 3 = 27</text>
            <text class="label-soft" x="750" y="146" text-anchor="middle" style="font-size:13px">27 ÷ 3 = 9</text>
            <text class="annotation-label" x="750" y="182" text-anchor="middle">2 + 9 − 1</text>

            <line class="graph-line" x1="878" y1="95" x2="917" y2="95"></line>
            <polygon class="plot-point" points="917,88 929,95 917,102"></polygon>

            <text class="axis-label" x="1050" y="28" text-anchor="middle">4. Addition / Soustraction</text>
            <rect class="frame-line" fill="none" rx="5" x="930" y="76" width="96" height="27"></rect>
            <text class="label" x="935" y="95" style="font-family:monospace;font-size:16px;font-weight:600">2 + 9 − 1</text>
            <text class="label-soft" x="1050" y="124" text-anchor="middle" style="font-size:13px">2 + 9 = 11</text>
            <text class="label-soft" x="1050" y="146" text-anchor="middle" style="font-size:13px">11 − 1 = 10</text>
            <text class="label-soft" x="1050" y="176" text-anchor="middle" style="font-size:12px">Résultat final</text>
            <text class="plot-point" x="1050" y="216" text-anchor="middle" style="font-family:'Poppins',sans-serif;font-weight:800;font-size:26px">= 10</text>
          </svg>
        `,
        notes: [
          '<strong>Parenthèses :</strong> on calcule d\'abord ce qui est entre parenthèses, même si ce n\'est pas la première opération rencontrée en lisant de gauche à droite. $7 - 4 = 3$.',
          '<strong>Puissances :</strong> une fois les parenthèses résolues, on calcule les puissances avant tout le reste. $3^2 = 9$.',
          '<strong>Multiplications et divisions :</strong> elles ont la même priorité, donc on les effectue dans l\'ordre de lecture, de gauche à droite. $9 \\times 3 = 27$, puis $27 \\div 3 = 9$.',
          '<strong>Additions et soustractions :</strong> en dernier, toujours de gauche à droite. $2 + 9 = 11$, puis $11 - 1 = 10$.'
        ],
        reading: 'Le résultat final est <strong>$10$</strong>.<br/><br/>Ce n\'est ni un calcul « de gauche à droite », ni un calcul « au hasard » : c\'est un <strong>ordre fixe et universel</strong>, le même pour tout le monde, ce qui garantit qu\'une expression mathématique a toujours une seule valeur.',
        caption: 'Résolution de $2 + 3^2 \\times (7 - 4) \\div 3 - 1$ en 4 étapes, en respectant l\'ordre <strong>parenthèses → puissances → multiplications/divisions → additions/soustractions</strong>.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13) — une figure par MALENTENDU.
         Le chapitre est celui d'une CONVENTION : on n'y demontre rien, on y
         fixe un ordre de lecture. Les figures doivent donc montrer ce que la
         convention EVITE, pas la rejouer. Les trois retenus :
           1. le meme calcul lu dans deux ordres donne deux resultats, ce qui
              est la raison d'etre de la convention (l'intro le dit, aucune
              figure ne le montrait) ;
           2. a priorite EGALE, on lit de gauche a droite — la regle oubliee,
              qui ne se voit que sur une soustraction ou une division ;
           3. la parenthese n'est pas un ornement : elle change le resultat.

         Valeurs VERIFIEES : 2 + 3 x 4 = 14 contre 20 ; 12 - 4 - 3 = 5 contre
         11 ; 20 : 4 x 5 = 25 contre 1. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Pourquoi une convention',
          title: 'Sans règle d\'ordre, le même calcul aurait deux résultats',
          description: 'Écris $2 + 3 \\times 4$ et demande à deux personnes de le calculer : l\'une multiplie d\'abord et trouve $14$, l\'autre lit de gauche à droite et trouve $20$. Aucune des deux ne calcule mal — <strong>il manque une règle</strong>. C\'est exactement pour cela que la convention existe.',
          svg: `
            <svg viewBox="0 0 400 202" role="img" aria-labelledby="prio-conv-title prio-conv-desc">
              <title id="prio-conv-title">Le meme calcul mene de deux facons donne deux resultats</title>
              <desc id="prio-conv-desc">Le calcul 2 plus 3 multiplie par 4 est traite de deux facons paralleles. A gauche, en teinte d'accent, la multiplication est faite en premier : 3 fois 4 donne 12, puis 2 plus 12 donne 14. C'est le chemin conforme a la convention. A droite, en teinte faible et en trait tirete, la lecture se fait de gauche a droite : 2 plus 3 donne 5, puis 5 fois 4 donne 20. C'est le chemin errone. Les deux chemins partent du meme calcul ecrit en haut au centre et aboutissent a deux resultats differents, 14 et 20, ce qui montre qu'une convention est necessaire.</desc>

              <text class="annotation-label" x="200" y="28" text-anchor="middle">2 + 3 × 4</text>

              <line class="guide-line" x1="188" y1="38" x2="110" y2="62"></line>
              <line class="guide-line" x1="212" y1="38" x2="290" y2="62"></line>

              <!-- Chemin JUSTE, a gauche, en teinte d'accent : l'oeil lit le
                   haut et la gauche d'abord. -->
              <rect class="frame-line" x="34" y="68" width="152" height="34" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)"></rect>
              <text class="tick-label" x="110" y="90" text-anchor="middle">3 × 4 = 12</text>
              <rect class="frame-line" x="34" y="116" width="152" height="34" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)"></rect>
              <text class="tick-label" x="110" y="138" text-anchor="middle">2 + 12 = 14</text>
              <text class="annotation-label" x="110" y="172" text-anchor="middle">14</text>
              <text class="tick-label" x="110" y="190" text-anchor="middle">la multiplication d abord</text>

              <!-- Chemin ERRONE, a droite, teinte faible et tirete. -->
              <rect class="guide-line" x="214" y="68" width="152" height="34" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke-dasharray="5 4"></rect>
              <text class="tick-label" x="290" y="90" text-anchor="middle">2 + 3 = 5</text>
              <rect class="guide-line" x="214" y="116" width="152" height="34" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke-dasharray="5 4"></rect>
              <text class="tick-label" x="290" y="138" text-anchor="middle">5 × 4 = 20</text>
              <text class="label-soft" x="290" y="172" text-anchor="middle">20</text>
              <text class="tick-label" x="290" y="190" text-anchor="middle">de gauche à droite</text>
            </svg>
          `,
          notes: [
            'Chemin conforme : $3 \\times 4 = 12$, puis $2 + 12 = 14$.',
            'Chemin de gauche à droite : $2 + 3 = 5$, puis $5 \\times 4 = 20$.',
            'Les deux calculs sont justes <strong>pris un à un</strong> : c\'est l\'ordre qui diffère. La convention n\'est donc pas une contrainte arbitraire, c\'est ce qui permet à une écriture de n\'avoir qu\'un seul sens.'
          ],
          reading: 'Retiens la cause plutôt que la règle : une expression doit vouloir dire la même chose pour tout le monde. Sans ordre convenu, $2 + 3 \\times 4$ ne désignerait aucun nombre précis.',
          caption: 'Le calcul $2 + 3 \\times 4$ mené de deux façons : $14$ en respectant les priorités, $20$ en lisant de gauche à droite.'
        },
        {
          theme: 'maths',
          kicker: 'À priorité égale',
          title: 'Deux soustractions se lisent de gauche à droite',
          description: 'La règle des priorités classe les opérations <strong>entre elles</strong>. Mais quand deux opérations sont du <strong>même rang</strong>, elle ne dit plus rien — il faut alors lire de gauche à droite. Sur $12 - 4 - 3$, commencer par la droite donne $11$ au lieu de $5$.',
          svg: `
            <svg viewBox="0 0 400 206" role="img" aria-labelledby="prio-gauche-title prio-gauche-desc">
              <title id="prio-gauche-title">Deux soustractions enchainees lues de gauche a droite puis de droite a gauche</title>
              <desc id="prio-gauche-desc">Le calcul 12 moins 4 moins 3 est traite de deux facons. En haut, en teinte d'accent, la lecture se fait de gauche a droite : 12 moins 4 donne 8, puis 8 moins 3 donne 5. C'est la lecture correcte. En bas, en teinte faible et en trait tirete, la seconde soustraction est faite en premier comme si elle etait entre parentheses : 4 moins 3 donne 1, puis 12 moins 1 donne 11. Les deux resultats, 5 et 11, different de six unites, ce qui montre que l'ordre de lecture compte aussi entre operations de meme rang.</desc>

              <text class="annotation-label" x="200" y="26" text-anchor="middle">12 − 4 − 3</text>

              <!-- Lecture JUSTE : de gauche a droite, en accent. Une seule
                   pointe de fleche par trait, comme l'exige le convertisseur. -->
              <text class="tick-label" x="30" y="64" text-anchor="start">de gauche à droite</text>
              <rect class="frame-line" x="76" y="76" width="112" height="32" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)"></rect>
              <text class="tick-label" x="132" y="97" text-anchor="middle">12 − 4 = 8</text>
              <path class="curve-main" fill="none" d="M188 92 L228 92"></path>
              <path class="curve-main" fill="none" d="M220 86 L228 92 L220 98"></path>
              <rect class="frame-line" x="228" y="76" width="112" height="32" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)"></rect>
              <text class="tick-label" x="284" y="97" text-anchor="middle">8 − 3 = 5</text>
              <text class="annotation-label" x="358" y="97" text-anchor="start">5</text>

              <!-- Lecture ERRONEE : la seconde soustraction d'abord. -->
              <text class="tick-label" x="30" y="146" text-anchor="start">en commençant par la droite</text>
              <rect class="guide-line" x="76" y="158" width="112" height="32" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke-dasharray="5 4"></rect>
              <text class="tick-label" x="132" y="179" text-anchor="middle">4 − 3 = 1</text>
              <path class="guide-line" fill="none" d="M188 174 L228 174"></path>
              <path class="guide-line" fill="none" d="M220 168 L228 174 L220 180"></path>
              <rect class="guide-line" x="228" y="158" width="112" height="32" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke-dasharray="5 4"></rect>
              <text class="tick-label" x="284" y="179" text-anchor="middle">12 − 1 = 11</text>
              <text class="label-soft" x="358" y="179" text-anchor="start">11</text>
            </svg>
          `,
          notes: [
            'Lecture correcte : $12 - 4 = 8$, puis $8 - 3 = 5$.',
            'En regroupant les deux derniers termes : $4 - 3 = 1$, puis $12 - 1 = 11$. L\'écart vaut $6$, soit deux fois $3$.',
            'La même prudence vaut pour les divisions : $20 \\div 4 \\times 5$ donne $25$ de gauche à droite, mais $1$ si l\'on multiplie d\'abord. <strong>Multiplication et division sont de même rang</strong>, aucune ne passe avant l\'autre.'
          ],
          reading: 'Quand deux opérations sont du même rang, ne cherche pas laquelle est prioritaire : il n\'y en a pas. Calcule simplement dans l\'ordre où elles sont écrites, de gauche à droite.',
          caption: '$12 - 4 - 3$ lu de gauche à droite ($5$) et en commençant par la droite ($11$).'
        },
        {
          theme: 'maths',
          kicker: 'Ce que change une parenthèse',
          title: 'La parenthèse déplace le résultat',
          description: 'Une parenthèse n\'est pas une décoration : elle <strong>force</strong> un calcul à passer en premier, et donc elle change le résultat. Même chiffres, même opérations, deux valeurs différentes selon qu\'elle est là ou non.',
          svg: `
            <svg viewBox="0 0 400 186" role="img" aria-labelledby="prio-paren-title prio-paren-desc">
              <title id="prio-paren-title">Le meme calcul avec et sans parenthese</title>
              <desc id="prio-paren-desc">Deux calculs sont compares. A gauche, 2 plus 3 multiplie par 4 sans parenthese : la multiplication passe en premier, le resultat vaut 14. A droite, la parenthese ouvrante et fermante autour de 2 plus 3 force l'addition a passer en premier, et le resultat vaut 20. Les chiffres et les operations sont exactement les memes dans les deux cas, seules les parentheses different. Les deux calculs sont ecrits l'un sous l'autre a la meme taille, et la partie qui se calcule en premier est mise en evidence dans chacun.</desc>

              <text class="annotation-label" x="200" y="26" text-anchor="middle">mêmes chiffres, mêmes opérations</text>

              <!-- SANS parenthese : c'est la multiplication qui est prioritaire.
                   La partie calculee en premier est teintee. -->
              <text class="tick-label" x="40" y="70" text-anchor="start">sans parenthèse</text>
              <rect class="frame-line" x="196" y="52" width="66" height="30" rx="5" fill="color-mix(in srgb, var(--diagram-accent) 34%, transparent)"></rect>
              <text class="annotation-label" x="176" y="73" text-anchor="middle">2 +</text>
              <text class="annotation-label" x="229" y="73" text-anchor="middle">3 × 4</text>
              <text class="annotation-label" x="300" y="73" text-anchor="start">= 14</text>

              <!-- AVEC parenthese : c'est l'addition qui passe devant. La zone
                   teintee se DEPLACE, c'est tout le propos de la figure. -->
              <text class="tick-label" x="40" y="130" text-anchor="start">avec parenthèse</text>
              <rect class="frame-line" x="150" y="112" width="72" height="30" rx="5" fill="color-mix(in srgb, var(--diagram-accent) 34%, transparent)"></rect>
              <text class="annotation-label" x="186" y="133" text-anchor="middle">(2 + 3)</text>
              <text class="annotation-label" x="248" y="133" text-anchor="middle">× 4</text>
              <text class="annotation-label" x="300" y="133" text-anchor="start">= 20</text>

              <text class="label-soft" x="200" y="168" text-anchor="middle">la zone teintée est celle qui se calcule en premier</text>
            </svg>
          `,
          notes: [
            'Sans parenthèse, la multiplication est prioritaire : $3 \\times 4 = 12$, puis $2 + 12 = 14$.',
            'Avec la parenthèse, l\'addition passe devant : $2 + 3 = 5$, puis $5 \\times 4 = 20$.',
            'La parenthèse sert donc à <strong>imposer</strong> un ordre différent de celui de la convention. Quand elle est absente, c\'est la convention qui décide — jamais l\'ordre d\'écriture.'
          ],
          reading: 'Compare les deux zones teintées : elles ne portent pas sur les mêmes nombres. Avant de calculer, repère toujours ce qui se calcule en premier, et écris-le en toutes lettres si tu hésites.',
          caption: '$2 + 3 \\times 4 = 14$ sans parenthèse, $(2 + 3) \\times 4 = 20$ avec : mêmes chiffres, résultats différents.'
        }
      ],
      method: {
        title: 'Ordre de priorité (de la plus haute à la plus basse)',
        steps: [
          '<strong>1. Parenthèses</strong> : calculer en premier tout ce qui est entre parenthèses, de l\'intérieur vers l\'extérieur.',
          '<strong>2. Puissances</strong> : calculer les carrés et les cubes ($a^2$, $a^3$) avant de multiplier ou d\'additionner.',
          '<strong>3. Multiplications et divisions</strong> : de gauche à droite, avant les additions/soustractions.',
          '<strong>4. Additions et soustractions</strong> : en dernier, de gauche à droite.'
        ]
      },
      formulas: [
        'Ordre : $()$ → $x^n$ → $\\times \\div$ → $+ -$',
        '$a + b \\times c = a + (b \\times c)$ (la multiplication est prioritaire)',
        '$\\dfrac{a + b}{c} = (a + b) \\div c$ (le trait de fraction fait office de parenthèses)'
      ],
      recap: [
        'Toujours commencer par les parenthèses (de l\'intérieur vers l\'extérieur).',
        'La multiplication et la division passent AVANT l\'addition et la soustraction.',
        'Le trait de fraction agit comme des parenthèses implicites.',
        'En cas de doute, ajouter des parenthèses pour lever l\'ambiguïté.'
      ],
      piege: 'Le signe de division $\\div$ et le trait de fraction se comportent différemment : $10 - 4 \\div 2 = 10 - 2 = 8$ (on divise d\'abord). Mais $\\dfrac{10 - 4}{2} = \\dfrac{6}{2} = 3$ (le trait de fraction groupe le numérateur).'
    },

    quiz: [
      {
        q: 'Calculer $3 + 4 \\times 2 - 1$.',
        options: ['$10$', '$13$', '$15$', '$7$'],
        answer: 0,
        correction: 'Priorité à la multiplication : $4 \\times 2 = 8$.<br/><br/>Puis, de gauche à droite : $3 + 8 - 1 = 10$.<br/><br/>Le $13$ vient d\'une lecture de gauche à droite, $(3 + 4) \\times 2 - 1$. Le $7$ vient d\'une soustraction faite avant la multiplication, $3 + 4 \\times (2 - 1)$.'
      },
      {
        q: 'Calculer $(5 + 3)^2 \\div 4$.',
        options: ['$28$', '$16$', '$36$', '$17$'],
        answer: 1,
        correction: 'Parenthèses d\'abord : $5 + 3 = 8$. Puis puissance : $8^2 = 64$. Puis division : $64 \\div 4 = 16$.<br/><br/>Le $28$ est obtenu en élevant au carré le seul $5$ ($5^2 + 3$) et en oubliant la division : la parenthèse regroupe <strong>toute</strong> la somme avant le carré.'
      },
      {
        q: 'Un élève calcule $2 + 3 \\times 4$ en faisant $(2+3) \\times 4 = 20$. Laquelle de ces corrections est juste ?',
        options: [
          'Il a raison : on lit de gauche à droite, donc $(2+3)$ d\'abord.',
          'Non : le résultat $20$ est juste, mais il ne fallait pas écrire les parenthèses.',
          'Non : la multiplication est prioritaire sur l\'addition. Il faut d\'abord $3 \\times 4 = 12$, puis $2 + 12 = 14$.',
          'Non : il faut calculer $2 \\times 3 + 4 = 10$.'
        ],
        answer: 2,
        correction: 'Sans parenthèses, c\'est la convention qui décide, et elle fait passer la multiplication avant : $2 + 3 \\times 4 = 2 + 12 = 14$.<br/><br/>« Il a raison » et « le résultat $20$ est juste » commettent la même erreur : lire de gauche à droite revient à ajouter des parenthèses qui ne sont pas écrites.<br/><br/>Le calcul $2 \\times 3 + 4$ applique bien « la multiplication d\'abord », mais aux mauvais nombres : ce qui est écrit, c\'est $3 \\times 4$, pas $2 \\times 3$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const type = pick(['contexte1', 'contexte2', 'contexte3', 'contexte4', 'contexte5', 'fraction', 'puissance']);

        /* DEUX TACHES AJOUTEES LE 2026-09-13.

           L'evaluation du chapitre teste la barre de fraction (Q3) et la portee
           de l'exposant dans un produit (Q4), deux points qu'AUCUN exercice ne
           travaillait : les cinq contextes existants portent tous sur des
           sommes de produits ou des parentheses. Les remediations
           correspondantes de la fiche professeur n'avaient donc nulle part ou
           renvoyer, et le cahier des charges interdit de combler ce trou par un
           renvoi approximatif.

           Les deux taches ci-dessous sont adossees a une erreur frequente
           reelle, et non ajoutees pour grossir la banque. */
        if (type === 'fraction') {
          /* Barre de fraction : l'eleve qui lit le trait comme un simple signe
             de division calcule a + b / d au lieu de (a + b) / d.
             NUMERATEUR DIVISIBLE : le quotient reste entier, le chapitre portant
             sur les priorites et non sur la division decimale. */
          const d = rand(2, 6);
          const q = rand(2, 9);
          const somme = d * q;                 // le numerateur, divisible par d
          const a = rand(1, somme - 1);
          const b = somme - a;
          return {
            statement: `Pour une moyenne, on doit calculer $\\dfrac{${a} + ${b}}{${d}}$.<br/>Attention : la <strong>barre de fraction</strong> regroupe tout ce qui est écrit au-dessus.<br/>Quel est le résultat ?`,
            answer: q,
            tolerance: 0,
            unit: '',
            hint: `Réécris l'expression avec des parenthèses : $\\dfrac{${a} + ${b}}{${d}} = (${a} + ${b}) \\div ${d}$.<br/><br/>On additionne donc AVANT de diviser.`,
            solution: [
              `La barre de fraction joue le rôle d'une parenthèse : $\\dfrac{${a} + ${b}}{${d}} = (${a} + ${b}) \\div ${d}$`,
              `Numérateur : $${a} + ${b} = ${somme}$`,
              `Division : $${somme} \\div ${d} = ${q}$`,
              `À comparer avec $${a} + ${b} \\div ${d}$, qui ne vaut pas la même chose : la barre change le calcul.`
            ]
          };
        }
        if (type === 'puissance') {
          /* Portee de l'exposant : l'eleve calcule (k x n) au carre au lieu de
             k x (n au carre). Les valeurs restent petites pour que les deux
             resultats soient tous deux calculables mentalement, ce qui permet de
             les comparer — c'est la comparaison qui corrige l'erreur. */
          const k = rand(2, 5);
          const n = rand(2, 6);
          return {
            statement: `Calcule $${k} \\times ${n}^2$.<br/>Lis bien l'écriture : l'exposant ne porte que sur le nombre qui le précède <strong>immédiatement</strong>.`,
            answer: k * n * n,
            tolerance: 0,
            unit: '',
            hint: `Dis l'expression à voix haute : « ${k} fois ${n} au carré ».<br/><br/>C'est donc $${n}^2$ qui se calcule d'abord.`,
            solution: [
              `La puissance est prioritaire : $${n}^2 = ${n * n}$`,
              `Puis la multiplication : $${k} \\times ${n * n} = ${k * n * n}$`,
              `Si l'exposant portait sur tout le produit, on écrirait $(${k} \\times ${n})^2 = ${k * n}^2 = ${k * n * k * n}$ — et les parenthèses seraient là pour le dire.`
            ]
          };
        }

        if (type === 'contexte1') {
          // Score d'un jeu de plateau : a + b × c - d
          const pts1 = rand(8, 18), pts2 = rand(5, 16), coef = rand(2, 3), malus = rand(1, 3);
          const answer = pts1 + pts2 * coef - malus;
          return {
            statement: `Dans un jeu de plateau, un joueur marque $${pts1}$ points au premier tour, puis $${pts2}$ points au second tour, qui comptent $${coef}$ fois. Il perd $${malus}$ point(s) de pénalité.<br/>Son total est : $${pts1} + ${pts2} \\times ${coef} - ${malus}$.<br/>Calcule ce total en respectant les <strong>priorités</strong>.`,
            answer,
            tolerance: 0,
            unit: '',
            hint: `La multiplication est prioritaire : commence par $${pts2} \\times ${coef}$, puis effectue les additions et soustractions.`,
            solution: [
              `Priorité (multiplication) : $${pts2} \\times ${coef} = ${pts2 * coef}$`,
              `Puis de gauche à droite : $${pts1} + ${pts2 * coef} - ${malus} = ${answer}$`
            ]
          };
        }
        if (type === 'contexte2') {
          // Budget avec parenthèses : (a + b) × c
          const prixUnit = rand(3, 8), fraisLiv = rand(2, 5), nb = rand(2, 5);
          const answer = (prixUnit + fraisLiv) * nb;
          return {
            statement: `Un livre coûte $${prixUnit}$ € et les frais de livraison sont de $${fraisLiv}$ € par livre. Tu commandes $${nb}$ livres.<br/>Le coût total est : $(${prixUnit} + ${fraisLiv}) \\times ${nb}$.<br/>Combien paies-tu au total ?`,
            answer,
            tolerance: 0,
            unit: '',
            hint: `Les parenthèses d'abord : calcule $${prixUnit} + ${fraisLiv}$, puis multiplie par $${nb}$.`,
            solution: [
              `Parenthèses : $${prixUnit} + ${fraisLiv} = ${prixUnit + fraisLiv}$`,
              `Multiplication : $${prixUnit + fraisLiv} \\times ${nb} = ${answer}$`
            ]
          };
        }
        if (type === 'contexte3') {
          // Vitesse : a × b + c × d
          const v1 = rand(3, 4), t1 = rand(1, 3), v2 = rand(5, 7), t2 = rand(1, 3);
          const answer = v1 * t1 + v2 * t2;
          return {
            statement: `Un randonneur marche à $${v1}\\,\\text{km/h}$ pendant $${t1}\\,\\text{h}$, puis accélère à $${v2}\\,\\text{km/h}$ pendant $${t2}\\,\\text{h}$.<br/>La distance totale est : $${v1} \\times ${t1} + ${v2} \\times ${t2}$.<br/>Calcule cette distance.`,
            answer,
            tolerance: 0,
            unit: '',
            hint: `Il y a deux multiplications prioritaires : $${v1} \\times ${t1}$ et $${v2} \\times ${t2}$. Additionne ensuite.`,
            solution: [
              `Les deux multiplications se calculent avant l'addition.`,
              `Priorité : $${v1} \\times ${t1} = ${v1 * t1}$ et $${v2} \\times ${t2} = ${v2 * t2}$`,
              `Addition : $${v1 * t1} + ${v2 * t2} = ${answer}$`
            ]
          };
        }
        if (type === 'contexte4') {
          // Physique : énergie avec parenthèses et puissance : (a + b)² - c
          const a = rand(2, 5), b = rand(1, 4), c = rand(1, 6);
          const somme = a + b;
          const answer = somme * somme - c;
          return {
            statement: `En physique, on doit calculer l'expression $(${a} + ${b})^2 - ${c}$.<br/>Applique les <strong>priorités</strong> (parenthèses, puis puissance, puis soustraction).`,
            answer,
            tolerance: 0,
            unit: '',
            hint: `Étape 1 : parenthèses $${a} + ${b} = ${somme}$. Étape 2 : puissance $${somme}^2$. Étape 3 : soustraction.`,
            solution: [
              `Parenthèses : $${a} + ${b} = ${somme}$`,
              `Puissance : $${somme}^2 = ${somme * somme}$`,
              `Soustraction : $${somme * somme} - ${c} = ${answer}$`
            ]
          };
        }
        // contexte5 : Budget courses avec structure a × b + c
        const prixPommes = rand(2, 5), nbKg = rand(2, 4), prixSac = rand(1, 3);
        const answer = prixPommes * nbKg + prixSac;
        return {
          statement: `Au marché, les pommes coûtent $${prixPommes}$ €/kg. Tu en achètes $${nbKg}\\,\\text{kg}$ et tu prends un sac à $${prixSac}$ €.<br/>Le prix total est : $${prixPommes} \\times ${nbKg} + ${prixSac}$.<br/>Combien paies-tu ?`,
          answer,
          tolerance: 0,
          unit: '',
          hint: `Multiplication d'abord : $${prixPommes} \\times ${nbKg}$, puis ajoute $${prixSac}$.`,
          solution: [
            `La multiplication se calcule avant l'addition.`,
            `Priorité : $${prixPommes} \\times ${nbKg} = ${prixPommes * nbKg}$`,
            `Addition : $${prixPommes * nbKg} + ${prixSac} = ${answer}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un circuit électrique a une résistance $R = 3\\,\\Omega$, parcouru par un courant $I = 2\\,\\text{A}$. La puissance dissipée est $P = R \\times I^2$ et l\'énergie dissipée en $t = 10\\,\\text{s}$ est $E = P \\times t$.',
      schema: null,
      tasks: [
        'Calculer $P = R \\times I^2$ en respectant les priorités (exposant avant multiplication).',
        'Calculer $E = P \\times t$.',
        'Un élève calcule $P = (R \\times I)^2 = 6^2 = 36\\,\\text{W}$. Quelle est son erreur ?'
      ],
      solutions: [
        '$P = R \\times I^2 = 3 \\times 2^2 = 3 \\times 4 = 12\\,\\text{W}$.<br/><br/>L\'<strong>exposant</strong> se calcule avant la multiplication : c\'est $I^2 = 4$ que l\'on multiplie ensuite par $R$.',
        '$E = P \\times t = 12 \\times 10 = 120\\,\\text{J}$.',
        'L\'élève a mis des parenthèses autour de $R \\times I$ ce qui change le calcul. La formule est $P = R \\times I^2$, pas $(R \\times I)^2$. Seul $I$ est élevé au carré, pas le produit $RI$.'
      ],
      finalAnswer: '$P = 12\\,\\text{W}$, $E = 120\\,\\text{J}$'
    },

    evaluation: {
      title: 'Évaluation — Priorités des opérations',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer $5 + 3 \\times 6 - 2$.',
          type: 'numeric',
          answer: 21,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Multiplication d\'abord : $3 \\times 6 = 18$. Puis : $5 + 18 - 2 = 21$.'
        },
        {
          statement: 'Calculer $(7 - 3)^2 + 5$.',
          type: 'numeric',
          answer: 21,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Parenthèses d\'abord : $7 - 3 = 4$. Puissance : $4^2 = 16$. Addition : $16 + 5 = 21$.'
        },
        {
          statement: 'Calculer $\\dfrac{12 + 8}{4}$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le trait de fraction agit comme des parenthèses : on calcule le numérateur d\'abord : $12 + 8 = 20$. Puis $20 \\div 4 = 5$.'
        },
        {
          statement: 'Quelle est la valeur de $2 \\times 3^2$ ?',
          type: 'multiple-choice',
          options: [
            '$12$ car $2 \\times 3 \\times 2 = 12$.',
            '$36$ car $(2 \\times 3)^2 = 6^2 = 36$.',
            '$8$ car $2^3 \\times 1 = 8$.',
            '$18$ car la puissance est prioritaire : $3^2 = 9$, puis $2 \\times 9 = 18$.'
          ],
          answer: 3,
          points: 2,
          correction: 'La puissance est prioritaire sur la multiplication. On calcule d\'abord $3^2 = 9$, puis $2 \\times 9 = 18$.'
        },
        /* QUESTION REECRITE LE 2026-09-13.

           Elle demandait « Calculer $4 + 2 \times (8 - 3) - 1$ », soit un
           TROISIEME calcul direct sur cinq questions. Sur l'ouvrage entier,
           « calculer » pesait alors 45,7 % des soixante-dix questions, tres
           au-dela du plafond de 35 %, tandis que « chercher » n'etait evaluee
           que deux fois sur soixante-dix — une colonne de la grille de suivi
           quasiment vide toute l'annee.

           La nouvelle question est un PROBLEME INVERSE : on donne le resultat
           et l'on cherche ou placer les parentheses. Il n'y a pas de formule a
           appliquer, il faut essayer et verifier — c'est « chercher ». La tache
           reste elementaire (quatre possibilites a tester, tous les calculs
           mentaux) mais elle mobilise les priorites dans l'autre sens, ce qui
           est un excellent revelateur de leur comprehension. */
        {
          statement: 'On veut que le calcul $3 + 5 \\times 2$ donne $16$ au lieu de $13$. Où faut-il placer des parenthèses ?',
          type: 'multiple-choice',
          options: [
            '$3 + (5 \\times 2)$',
            '$(3 + 5) \\times 2$',
            '$3 + 5 \\times (2)$',
            'C\'est impossible : $3 + 5 \\times 2$ vaut toujours $13$.'
          ],
          answer: 1,
          points: 2,
          correction: 'Sans parenthèses, la multiplication est prioritaire : $3 + 5 \\times 2 = 3 + 10 = 13$. ' +
            'Pour obtenir $16$, il faut forcer l\'addition à se faire d\'abord : $(3 + 5) \\times 2 = 8 \\times 2 = 16$. ' +
            'Écrire $3 + (5 \\times 2)$ ne change rien, puisque cela ne fait qu\'écrire la priorité qui s\'applique déjà. ' +
            'Écrire $3 + 5 \\times (2)$ non plus : une parenthèse autour d\'un seul nombre ne regroupe rien. ' +
            'Les parenthèses ne servent donc qu\'à <strong>modifier</strong> l\'ordre naturel des priorités — ' +
            'quand elles le confirment, elles sont inutiles.'
        }
      ]
    }
  });
