/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-thermodynamique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-thermodynamique',
    level: 2, subject: 'physique',
    icon: '🌡️',
    title: 'Thermodynamique : premier principe',
    subtitle: 'Énergie interne, transferts thermique et de travail, premier principe ΔU = W + Q, systèmes isolés et adiabatiques',
    keywords: ['Énergie interne', 'Premier principe', 'Travail', 'Transfert thermique', 'Système fermé'],
    physics: 'Le premier principe de la thermodynamique permet de comprendre le fonctionnement d\'un moteur thermique, d\'une pompe à chaleur, d\'une bouteille de gaz comprimé qui chauffe légèrement, ou encore le bilan énergétique d\'un habitat (chauffage reçu, travail des appareils, isolation) sur une période donnée.',

    cours: {
      intro: 'Tout système possède une <strong>énergie interne</strong> $U$ (en joules), qui regroupe l\'énergie cinétique microscopique de agitation de ses particules et l\'énergie potentielle liée à leurs interactions. Cette énergie ne se mesure pas directement : seule sa <strong>variation</strong> $\\Delta U$ entre deux états est accessible au calcul.<br/><br/>Un système fermé (qui n\'échange pas de matière avec l\'extérieur, mais peut échanger de l\'énergie) peut recevoir de l\'énergie de deux façons : par un <strong>transfert thermique</strong> $Q$ (la chaleur, liée à une différence de température) et par un <strong>travail</strong> $W$ (une force qui déplace son point d\'application, par exemple un piston qui comprime un gaz).<br/><br/>Le <strong>premier principe de la thermodynamique</strong> énonce que la variation d\'énergie interne d\'un système fermé est égale à la somme des énergies qu\'il reçoit : $\\Delta U = W + Q$. Par convention, une énergie <strong>reçue</strong> par le système est comptée <strong>positivement</strong>, une énergie <strong>cédée</strong> est comptée <strong>négativement</strong>.',
      definitions: [
        { term: 'Énergie interne ($U$)', def: 'Énergie totale contenue dans un système à l\'échelle microscopique (agitation thermique des particules, interactions). Seule sa variation $\\Delta U$ entre deux états est calculable, pas sa valeur absolue.' },
        { term: 'Transfert thermique ($Q$)', def: 'Énergie échangée entre un système et l\'extérieur du fait d\'une <strong>différence de température</strong> (conduction, convection, rayonnement). En J, compté positivement si le système la reçoit.' },
        { term: 'Travail ($W$)', def: 'Énergie échangée par l\'action d\'une force dont le point d\'application se déplace (par exemple un piston qui comprime un gaz enfermé). En J, compté positivement si le système le reçoit.' },
        { term: 'Premier principe de la thermodynamique', def: 'Pour un système fermé : $\\Delta U = W + Q$. L\'énergie interne ne peut varier que par un apport ou une perte d\'énergie sous forme de travail ou de transfert thermique — c\'est une expression du principe de conservation de l\'énergie.' },
        { term: 'Transformation adiabatique', def: 'Transformation au cours de laquelle le système n\'échange <strong>aucun transfert thermique</strong> avec l\'extérieur ($Q=0$), par exemple parce qu\'il est parfaitement isolé thermiquement ou que la transformation est trop rapide pour que la chaleur ait le temps de s\'échanger. Dans ce cas, $\\Delta U = W$.' }
      ],
      method: {
        title: 'Appliquer le premier principe de la thermodynamique en 3 étapes',
        steps: [
          '<strong>Définir le système fermé</strong> étudié et sa frontière, puis identifier les échanges d\'énergie qui la traversent : y a-t-il un travail $W$ (compression, détente…) ? Un transfert thermique $Q$ (chauffage, refroidissement…) ?',
          '<strong>Déterminer le signe de chaque terme</strong> selon la convention « reçu = positif » : un gaz qu\'on comprime reçoit du travail ($W>0$) ; un système qu\'on chauffe reçoit un transfert thermique ($Q>0$) ; un système qui cède de la chaleur a $Q<0$.',
          '<strong>Appliquer $\\Delta U = W + Q$</strong> pour calculer la grandeur recherchée. Cas particuliers utiles : si le volume est constant (pas de travail des forces de pression), $W=0$ donc $\\Delta U = Q$ ; si la transformation est adiabatique, $Q=0$ donc $\\Delta U = W$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Premier principe de la thermodynamique',
        title: 'Bilan énergétique d\'un système fermé : ΔU = W + Q',
        description: 'Un système fermé (ici un gaz enfermé dans un cylindre) peut recevoir de l\'énergie par un travail $W$ (le piston qui le comprime) et par un transfert thermique $Q$ (une source chaude). Ces deux apports, comptés positivement lorsqu\'ils sont reçus, font varier son énergie interne $U$.',
        svg: `
          <svg viewBox="0 0 560 340" role="img" aria-labelledby="thermo1-title thermo1-desc">
            <title id="thermo1-title">Bilan energetique d'un systeme ferme selon le premier principe de la thermodynamique</title>
            <desc id="thermo1-desc">Un systeme ferme, represente par une ellipse, contient un gaz dont l'energie interne est notee U. A gauche, un piston pousse dans un cylindre et une fleche notee W traverse la frontiere du systeme vers l'interieur, representant un travail recu par compression. En bas, une flamme symbolise une source chaude et une fleche notee Q traverse la frontiere du systeme vers le haut, representant un transfert thermique recu. Les deux fleches pointent vers l'interieur du systeme, illustrant la convention selon laquelle une energie recue par le systeme est comptee positivement dans le bilan delta U egale W plus Q.</desc>

            <defs>
              <marker id="arrow-phystle-thermo1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- systeme (frontiere) -->
            <ellipse class="frame-line" cx="320" cy="170" rx="150" ry="100" fill="var(--diagram-accent)" fill-opacity="0.06"></ellipse>
            <text class="annotation-label" x="320" y="160" text-anchor="middle">ΔU</text>
            <text class="label-soft" x="320" y="182" text-anchor="middle">Système fermé (gaz enfermé)</text>

            <!-- cylindre / piston (source de travail) -->
            <path class="frame-line" d="M40,120 L120,120 L120,220 L40,220" fill="none"></path>
            <rect class="frame-line" x="120" y="112" width="14" height="116" fill="var(--diagram-soft)"></rect>
            <text class="label-soft" x="80" y="240" text-anchor="middle">Piston (compression)</text>

            <!-- fleche W -->
            <line class="curve-main" x1="140" y1="170" x2="188" y2="170" marker-end="url(#arrow-phystle-thermo1)"></line>
            <text class="annotation-label" x="150" y="155" text-anchor="start">W (+)</text>

            <!-- source chaude (chaleur) -->
            <path d="M320,320 C308,300 332,286 320,264 C344,282 336,306 320,320 Z" fill="var(--diagram-accent)" fill-opacity="0.35" stroke="none"></path>
            <text class="label-soft" x="320" y="335" text-anchor="middle">Source chaude</text>

            <!-- fleche Q -->
            <line class="curve-main" x1="320" y1="258" x2="320" y2="212" marker-end="url(#arrow-phystle-thermo1)"></line>
            <text class="annotation-label" x="335" y="240" text-anchor="start">Q (+)</text>

            <!-- legende convention -->
            <text class="label-soft" x="320" y="20" text-anchor="middle">Convention : énergie reçue par le système, comptée positivement</text>
          </svg>
        `,
        notes: [
          'Le piston qui comprime le gaz lui transmet un <strong>travail</strong> $W$ ; la source chaude lui transmet un <strong>transfert thermique</strong> $Q$. Les deux flèches pointent <strong>vers l\'intérieur</strong> du système : ces deux énergies sont ici <strong>reçues</strong>, donc comptées positivement.',
          'Le premier principe additionne simplement ces deux contributions : $\\Delta U = W + Q$. Si le système cédait de l\'énergie plutôt que d\'en recevoir (détente, refroidissement), la flèche correspondante pointerait vers l\'extérieur et le terme serait compté négativement.',
          'Ce schéma reste valable quel que soit le système fermé étudié (gaz, liquide, solide) : seule la nature des échanges ($W$, $Q$, ou les deux) change selon la transformation étudiée.'
        ],
        reading: 'Repère la frontière du système (l\'ellipse), puis suis chaque flèche qui la traverse : celle de gauche (travail $W$, via le piston) et celle du bas (transfert thermique $Q$, via la source chaude) — toutes deux dirigées vers l\'intérieur car l\'énergie est ici reçue par le système.',
        caption: 'Premier principe de la thermodynamique : la variation d\'énergie interne $\\Delta U$ d\'un système fermé est la somme du travail $W$ et du transfert thermique $Q$ qu\'il reçoit (convention : reçu = positif).'
      },
      example: {
        statement: 'Un système fermé reçoit un travail $W = 250$ J (compression) et cède un transfert thermique $Q = -90$ J (il se refroidit légèrement en cédant de la chaleur à l\'extérieur).<br/><br/>Calculer la variation d\'énergie interne $\\Delta U$ du système, et indiquer si son énergie interne augmente ou diminue.',
        steps: [
          'Identification des échanges : le système reçoit un travail ($W = 250$ J, positif car reçu) et cède un transfert thermique ($Q = -90$ J, négatif car cédé).',
          'Premier principe : $\\Delta U = W + Q$.',
          'Application numérique : $\\Delta U = 250 + (-90) = 160$ J.'
        ],
        answer: '$\\Delta U = 160$ J, une valeur <strong>positive</strong> : l\'énergie interne du système <strong>augmente</strong>, malgré la perte de chaleur, car le travail reçu par compression l\'emporte largement sur cette perte.'
      },
      formulas: [
        'Premier principe de la thermodynamique (système fermé) : $\\Delta U = W + Q$',
        'Convention de signe : énergie <strong>reçue</strong> comptée $> 0$, énergie <strong>cédée</strong> comptée $< 0$',
        'Transformation à volume constant (pas de travail des forces de pression) : $W = 0$, donc $\\Delta U = Q$',
        'Transformation adiabatique (aucun transfert thermique) : $Q = 0$, donc $\\Delta U = W$',
        'Pour une phase condensée (solide, liquide), à volume quasi constant : $\\Delta U \\approx Q = mc\\Delta T$ (chaleur sensible)'
      ],
      recap: [
        'Le premier principe traduit la <strong>conservation de l\'énergie</strong> : l\'énergie interne d\'un système fermé ne varie que par ce qu\'il échange réellement avec l\'extérieur, sous forme de travail ou de chaleur.',
        'La convention de signe est essentielle : une énergie <strong>reçue</strong> est positive, une énergie <strong>cédée</strong> est négative — l\'inverser fausse tout le calcul de $\\Delta U$.',
        'Deux cas particuliers simplifient souvent le calcul : à volume constant, $\\Delta U = Q$ (pas de travail) ; en transformation adiabatique, $\\Delta U = W$ (pas de transfert thermique).',
        'Seule la <strong>variation</strong> $\\Delta U$ est calculable, jamais la valeur absolue de $U$ : c\'est une différence entre deux états, comme pour l\'énergie potentielle.'
      ],
      piege: 'Une erreur très fréquente est d\'oublier le signe négatif d\'une énergie <strong>cédée</strong> par le système et de l\'additionner comme si elle était reçue, ce qui fausse complètement le résultat de $\\Delta U$. Attention également à ne pas confondre un système qui reçoit du travail par <strong>compression</strong> ($W>0$) avec un système qui en cède par <strong>détente</strong> ($W<0$) : le sens physique de la transformation détermine le signe, il ne se devine pas.'
    },

    quiz: [
      {
        q: 'D\'après le premier principe de la thermodynamique, la variation d\'énergie interne d\'un système fermé s\'écrit :',
        options: [
          '$\\Delta U = W \\times Q$',
          '$\\Delta U = W + Q$',
          '$\\Delta U = W - Q$',
          '$\\Delta U = \\dfrac{W}{Q}$'
        ],
        answer: 1,
        correction: 'Le premier principe additionne simplement les deux formes d\'énergie échangées par le système fermé : $\\Delta U = W + Q$ (travail et transfert thermique, chacun compté algébriquement).'
      },
      {
        q: 'Un système reçoit un travail $W=180$ J et un transfert thermique $Q=-50$ J. Quelle est sa variation d\'énergie interne ?',
        options: [
          '$\\Delta U = 230$ J',
          '$\\Delta U = 130$ J',
          '$\\Delta U = -130$ J',
          '$\\Delta U = -230$ J'
        ],
        answer: 1,
        correction: '$\\Delta U = W + Q = 180 + (-50) = 130$ J. Le signe négatif de $Q$ (chaleur cédée) doit être conservé dans l\'addition, pas ignoré.'
      },
      {
        q: 'Lors d\'une transformation adiabatique ($Q=0$), le premier principe se réduit à :',
        options: [
          '$\\Delta U = 0$',
          '$\\Delta U = Q$',
          '$\\Delta U = W$',
          '$\\Delta U = 2W$'
        ],
        answer: 2,
        correction: 'Une transformation adiabatique signifie qu\'aucun transfert thermique n\'a lieu ($Q=0$) : le premier principe se réduit alors à $\\Delta U = W$, toute la variation d\'énergie interne provenant du travail échangé.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['bilan', 'volume-constant']);

        if (typeExo === 'bilan') {
          var W = rand(-300, 400);
          var Q = rand(-300, 400);
          var dU = W + Q;
          var contexte = pick([
            'un gaz enfermé dans un cylindre de compresseur',
            'une enceinte thermodynamique de laboratoire',
            'un système fermé étudié en travaux pratiques',
            'un réacteur chimique fermé instrumenté',
            'un ballon de gaz sous pression contrôlée'
          ]);
          return {
            statement: 'Dans ' + contexte + ', le système reçoit un travail $W = ' + W + '$ J et un transfert thermique $Q = ' + Q + '$ J (une valeur négative signifiant que l\'énergie correspondante est cédée par le système).<br/><br/>Calcule la variation d\'énergie interne $\\Delta U$ du système (en J).',
            answer: dU,
            tolerance: Math.max(2, Math.abs(dU) * 0.02),
            unit: 'J',
            hint: 'Premier principe : $\\Delta U = W + Q$, en conservant bien le signe de chaque terme.',
            solution: [
              'Premier principe de la thermodynamique : $\\Delta U = W + Q$.',
              'Application numérique : $\\Delta U = ' + W + ' + (' + Q + ')$.',
              'Résultat : $\\Delta U = ' + dU + '$ J' + (dU >= 0 ? ' (l\'énergie interne du système augmente).' : ' (l\'énergie interne du système diminue).')
            ]
          };
        } else {
          var m = randFloat(0.5, 5, 1);
          var c = pick([4180, 900, 385, 2000, 460]);
          var Ti = rand(10, 25);
          var Tf = rand(Ti + 10, Ti + 80);
          var Qval = Math.round(m * c * (Tf - Ti));
          var contexte2 = pick([
            'une masse d\'eau chauffée dans une enceinte rigide fermée',
            'un bloc métallique chauffé dans un four fermé à volume constant',
            'un échantillon liquide chauffé dans un calorimètre scellé',
            'une masse de métal étudiée dans un laboratoire de thermique'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ' (transformation à volume constant, donc $W=0$), une masse $m = ' + fr(m, 1) + '$ kg de capacité thermique massique $c = ' + c + '$ J/(kg·K) passe d\'une température $T_i = ' + Ti + '°C$ à $T_f = ' + Tf + '°C$.<br/><br/>Calcule la variation d\'énergie interne $\\Delta U$ du système (en J, arrondie à l\'unité).',
            answer: Qval,
            tolerance: Math.max(500, Math.round(Qval * 0.03)),
            unit: 'J',
            hint: 'À volume constant, $W=0$ donc $\\Delta U = Q = mc\\Delta T$.',
            solution: [
              'À volume constant, aucun travail des forces de pression : $W=0$, donc $\\Delta U = Q$.',
              'Chaleur reçue : $Q = mc\\Delta T = ' + fr(m, 1) + ' \\times ' + c + ' \\times (' + Tf + ' - ' + Ti + ')$.',
              'Résultat : $\\Delta U = Q \\approx ' + fr(Qval) + '$ J.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un gaz enfermé dans un cylindre muni d\'un piston subit deux transformations successives. Lors de la première étape, on comprime le gaz : il reçoit un travail $W_1 = 320$ J, tout en cédant un transfert thermique $Q_1 = -110$ J vers l\'extérieur. Lors de la deuxième étape, le piston est bloqué (volume constant) et on chauffe le gaz, qui reçoit un transfert thermique $Q_2 = 85$ J.',
      tasks: [
        'Calculer la variation d\'énergie interne $\\Delta U_1$ du gaz lors de la première étape (compression).',
        'Calculer la variation d\'énergie interne $\\Delta U_2$ du gaz lors de la deuxième étape (chauffage à volume constant).',
        'En déduire la variation totale d\'énergie interne $\\Delta U_{total}$ du gaz sur l\'ensemble des deux étapes.'
      ],
      solutions: [
        'Première étape : $\\Delta U_1 = W_1 + Q_1 = 320 + (-110) = 210$ J.',
        'Deuxième étape (volume constant, donc $W_2=0$) : $\\Delta U_2 = Q_2 = 85$ J.',
        'L\'énergie interne étant une fonction d\'état, ses variations s\'additionnent sur l\'ensemble de la transformation : $\\Delta U_{total} = \\Delta U_1 + \\Delta U_2 = 210 + 85 = 295$ J.'
      ],
      finalAnswer: '$\\Delta U_{total} = 295$ J : l\'énergie interne du gaz a globalement augmenté de $295$ J sur l\'ensemble des deux étapes, principalement grâce au travail de compression reçu lors de la première étape, malgré la perte de chaleur qui l\'accompagnait.'
    },

    evaluation: {
      title: 'Évaluation — Thermodynamique : premier principe',
      duration: '30 min',
      questions: [
        {
          statement: 'Le premier principe de la thermodynamique pour un système fermé s\'écrit :',
          type: 'multiple-choice',
          options: [
            '$\\Delta U = W + Q$',
            '$\\Delta U = W - Q$',
            '$U = W + Q$',
            '$\\Delta U = \\dfrac{W+Q}{2}$'
          ],
          answer: 0,
          points: 2,
          correction: 'Le premier principe relie la <strong>variation</strong> d\'énergie interne (et non $U$ elle-même) à la somme algébrique du travail et du transfert thermique reçus : $\\Delta U = W + Q$.'
        },
        {
          statement: 'Un système reçoit $W=200$ J et cède $Q=-70$ J. Calculer $\\Delta U$ (en J).',
          type: 'numeric',
          answer: 130,
          tolerance: 3,
          unit: 'J',
          points: 2,
          correction: '$\\Delta U = W+Q = 200 + (-70) = 130$ J.'
        },
        {
          statement: 'Dans la convention de signe utilisée pour le premier principe, une énergie cédée par le système est comptée :',
          type: 'multiple-choice',
          options: [
            'Positivement',
            'Négativement',
            'Elle n\'apparaît pas dans le bilan',
            'Toujours nulle'
          ],
          answer: 1,
          points: 2,
          correction: 'Convention : énergie reçue = positive, énergie cédée = négative. C\'est cette convention qui permet d\'additionner directement $W$ et $Q$ dans $\\Delta U = W+Q$.'
        },
        {
          statement: 'Une masse $m=2$ kg d\'eau ($c=4\\,180$ J/(kg·K)) est chauffée à volume constant de $20°C$ à $35°C$. Calculer $\\Delta U$ (en J).',
          type: 'numeric',
          answer: 125400,
          tolerance: 3000,
          unit: 'J',
          points: 3,
          correction: 'À volume constant, $W=0$ donc $\\Delta U = Q = mc\\Delta T = 2\\times4\\,180\\times(35-20)=2\\times4\\,180\\times15=125\\,400$ J.'
        },
        {
          statement: 'Lors d\'une transformation adiabatique, quelle grandeur est nécessairement nulle ?',
          type: 'multiple-choice',
          options: [
            'Le travail $W$',
            'Le transfert thermique $Q$',
            'La variation d\'énergie interne $\\Delta U$',
            'La température'
          ],
          answer: 1,
          points: 1,
          correction: 'Une transformation adiabatique se définit précisément par l\'absence de transfert thermique : $Q=0$, donc $\\Delta U = W$.'
        }
      ]
    }
  });
