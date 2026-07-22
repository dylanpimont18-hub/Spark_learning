/* =========================================================
   Spark Learning – data/5e/5e-nombres-relatifs.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-nombres-relatifs',
    level: 1, subject: 'maths',
    icon: '±',
    title: 'Nombres relatifs',
    subtitle: 'Addition, soustraction, repérage',
    keywords: ['Positif', 'Négatif', 'Valeur absolue', 'Opposé', 'Droite graduée'],
    physics: 'Coordonnées de vecteurs, températures, altitudes, potentiel électrique',

    cours: {
      intro: 'Les nombres relatifs étendent la droite numérique dans les deux sens. Un nombre négatif n\'est pas « moins que zéro » de façon mystérieuse : c\'est une <strong>direction opposée</strong>, un manque, un écart vers le bas.<br/><br/>' +
        'En physique, le signe porte une information physique : $-5$ N signifie une force vers la gauche si l\'on a choisi la droite comme sens positif. $-120$ m signifie 120 m sous la surface de la mer.<br/><br/>' +
        '<strong>Règle d\'or de la soustraction :</strong> $a - b = a + (-b)$ — soustraire un nombre revient à ajouter son opposé. Ainsi $3 - (-5) = 3 + 5 = 8$ : soustraire un négatif augmente la valeur.<br/><br/>' +
        'La <strong>valeur absolue</strong> $|a|$ mesure la distance à zéro, indépendamment du signe : $|-7| = |+7| = 7$. La distance entre deux points $A$ et $B$ sur une droite graduée vaut $|x_B - x_A|$.',
      definitions: [
        { term: 'Nombre relatif', def: 'Nombre muni d\'un signe : positif ($+$) ou négatif ($-$). Zéro n\'est ni positif ni négatif.' },
        { term: 'Opposé', def: 'L\'opposé de $a$ est $-a$. Leur somme est nulle : $a + (-a) = 0$. L\'opposé de $-5$ est $+5$.' },
        { term: 'Valeur absolue', def: 'Distance d\'un nombre à zéro, notée $|a|$. Toujours positive : $|-7| = |+7| = 7$.' },
        { term: 'Droite graduée', def: 'Droite munie d\'une origine $O$, d\'un sens positif et d\'une unité. Chaque point correspond à un unique nombre relatif.' }
      ],
      example: {
        statement: 'Calculer $(-8) - (-3) + (+5)$.',
        steps: [
          'Transformer la soustraction : $(-8) - (-3) = (-8) + (+3)$.',
          'Calculer étape par étape : $(-8) + (+3) = -5$.',
          'Puis : $-5 + (+5) = 0$.'
        ],
        answer: '$0$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Droite graduée',
        title: 'Suivre des déplacements sur une droite graduée : la profondeur d’un sous-marin',
        description: 'Le sous-marin part de $-120\\,\\text{m}$, remonte de $45\\,\\text{m}$ puis redescend de $80\\,\\text{m}$. Chaque déplacement est un saut sur la droite graduée : vers la droite pour une remontée, vers la gauche pour une descente.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="relatifs-graph-title relatifs-graph-desc">
            <title id="relatifs-graph-title">Droite graduée : profondeur d'un sous-marin</title>
            <desc id="relatifs-graph-desc">Droite graduée horizontale allant de moins 160 à 0. Le sous-marin part de moins 120, remonte de 45 jusqu'à moins 75, puis descend de 80 jusqu'à moins 155.</desc>
            <text class="axis-label" x="130" y="26">Profondeur (m)</text>
            <line class="axis" x1="15" y1="140" x2="335" y2="140"></line>
            <line class="grid-line" x1="30" y1="136" x2="30" y2="144"></line>
            <line class="grid-line" x1="65" y1="136" x2="65" y2="144"></line>
            <line class="grid-line" x1="135" y1="136" x2="135" y2="144"></line>
            <line class="grid-line" x1="170" y1="136" x2="170" y2="144"></line>
            <line class="grid-line" x1="205" y1="136" x2="205" y2="144"></line>
            <line class="grid-line" x1="240" y1="136" x2="240" y2="144"></line>
            <line class="grid-line" x1="275" y1="136" x2="275" y2="144"></line>
            <text class="tick-label" x="20" y="156">-160</text>
            <text class="tick-label" x="55" y="156">-140</text>
            <text class="tick-label" x="125" y="156">-100</text>
            <text class="tick-label" x="161" y="156">-80</text>
            <text class="tick-label" x="196" y="156">-60</text>
            <text class="tick-label" x="231" y="156">-40</text>
            <text class="tick-label" x="266" y="156">-20</text>
            <line class="frame-line" x1="38.75" y1="122" x2="38.75" y2="158"></line>
            <line class="frame-line" x1="100" y1="122" x2="100" y2="158"></line>
            <line class="frame-line" x1="178.75" y1="122" x2="178.75" y2="158"></line>
            <line class="frame-line" x1="310" y1="122" x2="310" y2="158"></line>
            <text class="annotation-label" x="27" y="112">-155</text>
            <text class="annotation-label" x="90" y="112">-120</text>
            <text class="annotation-label" x="169" y="112">-75</text>
            <text class="annotation-label" x="306" y="112">0</text>
            <path class="curve-main" d="M100,140 Q139.375,95 178.75,140" fill="none"></path>
            <polygon class="plot-point" points="174,131 183,131 178.75,140"></polygon>
            <text class="annotation-label" x="90" y="80">+45 m (remonte)</text>
            <path class="guide-line" d="M178.75,140 Q108.75,185 38.75,140" fill="none"></path>
            <polygon class="plot-point-alt" points="34,149 43,149 38.75,140"></polygon>
            <text class="annotation-label" x="60" y="207">-80 m (descend)</text>
            <circle class="plot-point-alt" cx="100" cy="140" r="6"></circle>
            <circle class="plot-point-alt" cx="178.75" cy="140" r="6"></circle>
            <circle class="plot-point" cx="38.75" cy="140" r="6"></circle>
          </svg>
        `,
        notes: [
          'Position de départ : le sous-marin est à $-120\\,\\text{m}$ (120 m sous la surface, repérée par 0).',
          'Il remonte de $45\\,\\text{m}$ : $-120 + 45 = -75$. Sur la droite, ce déplacement est un saut vers la droite (vers les valeurs plus grandes).',
          'Il descend ensuite de $80\\,\\text{m}$ : $-75 - 80 = -155$. Ce saut se lit vers la gauche (vers les valeurs plus petites).',
          'Déplacement net entre le départ et l’arrivée : $-155 - (-120) = -35\\,\\text{m}$ (le sous-marin termine 35 m plus bas qu’au départ).'
        ],
        reading: 'Sur une droite graduée, additionner un nombre positif fait avancer vers la droite ; soustraire un nombre positif (ou additionner un négatif) fait reculer vers la gauche.',
        caption: 'Droite graduée horizontale représentant la profondeur d’un sous-marin : départ à $-120\\,\\text{m}$, remontée de $45\\,\\text{m}$ jusqu’à $-75\\,\\text{m}$, puis descente de $80\\,\\text{m}$ jusqu’à $-155\\,\\text{m}$.'
      },
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Addition de relatifs</strong> : si même signe → additionner les valeurs absolues et garder le signe. Si signes opposés → soustraire les valeurs absolues et prendre le signe du plus grand.',
          '<strong>Soustraction</strong> : transformer en addition de l\'opposé. $a - b = a + (-b)$. Ex : $3 - (-5) = 3 + 5 = 8$.',
          '<strong>Valeur absolue $|a|$</strong> = distance à zéro, toujours positive. $|-7| = 7$, $|+7| = 7$.'
        ]
      },
      formulas: [
        '$a - b = a + (-b)$',
        '$-(-a) = a$',
        '$|a| \\geq 0$ et $|-a| = |a|$',
        '$|a - b|$ = distance entre $a$ et $b$ sur la droite graduée'
      ],
      recap: [
        'Soustraire revient à additionner l\'opposé : $a - b = a + (-b)$.',
        'Même signe → on additionne les valeurs absolues. Signes opposés → on soustrait.',
        'La valeur absolue donne la distance à zéro (toujours positive).',
        '$-(a - b) = -a + b$ : le signe $-$ change TOUS les signes dans la parenthèse.'
      ],
      piege: 'Le signe $-$ devant une parenthèse change TOUS les signes à l\'intérieur : $-(a - b) = -a + b$. Erreur classique : $-(3 - 5) = -3 - 5$ (FAUX). La bonne réponse est $-3 + 5 = 2$.'
    },

    quiz: [
      {
        q: 'Calculer $(-8) + (+3)$.',
        options: ['$+11$', '$-11$', '$-5$', '$+5$'],
        answer: 2,
        correction: 'Signes opposés : on soustrait les valeurs absolues $8 - 3 = 5$ et on garde le signe du plus grand (le $-8$). Résultat : $-5$.'
      },
      {
        q: 'Calculer $(-4) - (-9)$.',
        options: ['$-13$', '$-5$', '$+5$', '$+13$'],
        answer: 2,
        correction: '$(-4) - (-9) = (-4) + (+9) = +5$. Soustraire un négatif revient à additionner son opposé.'
      },
      {
        q: 'Un élève calcule $-(3 - 5)$ et trouve $-3 - 5 = -8$. Quelle est son erreur ?',
        options: [
          'Il a raison : $-(3-5) = -3-5 = -8$.',
          'Le signe $-$ devant la parenthèse change TOUS les signes à l\'intérieur : $-(3-5) = -3+5 = 2$.',
          'Il fallait calculer $3 - 5 = -2$ d\'abord, donc $-(-2) = 2$, mais $-2$ est la bonne réponse.',
          'Le résultat est $-(3-5) = -3+5 = -8$.'
        ],
        answer: 1,
        correction: 'Le signe $-$ devant une parenthèse distribue sur tous les termes à l\'intérieur : $-(3 - 5) = -3 + (+5) = 2$. Ou plus simplement : calcule d\'abord l\'intérieur : $3 - 5 = -2$, puis applique le $-$ devant : $-(-2) = +2$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(-20, 20), b = rand(-20, 20);
        const op = pick(['+', '-']);
        const answer = op === '+' ? a + b : a - b;
        const bStr = b < 0 ? `(${b})` : `${b}`;
        const absB = Math.abs(b);

        const ctx = pick([
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Ce matin, le thermomètre affichait $${a}°C$. La température a <strong>augmenté</strong> de $${absB}°C$ dans la journée.<br/>Quelle est la température maintenant ?`
                : `Ce matin, le thermomètre affichait $${a}°C$. La température a <strong>baissé</strong> de $${absB}°C$ dans la journée.<br/>Quelle est la température maintenant ?`)
              : `Ce matin il faisait $${a}°C$. La nuit dernière, il faisait $${bStr}°C$.<br/>Quelle est la <strong>différence de température</strong> entre ce matin et la nuit dernière ?`
          },
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Un sous-marin se trouve à $${a}\\,\\text{m}$ de profondeur. Il <strong>remonte</strong> de $${absB}\\,\\text{m}$.<br/>À quelle profondeur se trouve-t-il maintenant ?`
                : `Un sous-marin se trouve à $${a}\\,\\text{m}$ de profondeur. Il <strong>descend</strong> de $${absB}\\,\\text{m}$.<br/>À quelle profondeur se trouve-t-il maintenant ?`)
              : `Un sous-marin est à $${a}\\,\\text{m}$. Un plongeur est à $${bStr}\\,\\text{m}$.<br/>Quel est l'<strong>écart de profondeur</strong> entre les deux ?`
          },
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Le solde d'un compte en banque est de $${a}$ €. On y <strong>dépose</strong> $${absB}$ €.<br/>Quel est le nouveau solde ?`
                : `Le solde d'un compte en banque est de $${a}$ €. On en <strong>retire</strong> $${absB}$ €.<br/>Quel est le nouveau solde ?`)
              : `Le compte de Léa affiche $${a}$ € et celui de Tom affiche $${bStr}$ €.<br/>Quelle est la <strong>différence</strong> entre les deux comptes ?`
          },
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Un ascenseur se trouve à l'étage $${a}$ d'un immeuble. Il <strong>monte</strong> de $${absB}$ étages.<br/>À quel étage arrive-t-il ?`
                : `Un ascenseur se trouve à l'étage $${a}$. Il <strong>descend</strong> de $${absB}$ étages.<br/>À quel étage arrive-t-il ?`)
              : `Un ascenseur part de l'étage $${a}$ pour aller à l'étage $${bStr}$.<br/>De combien d'étages s'est-il <strong>déplacé</strong> (en valeur signée) ?`
          },
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Un randonneur est à une altitude de $${a}\\,\\text{m}$ (sous le niveau de la mer si négatif). Il <strong>grimpe</strong> de $${absB}\\,\\text{m}$.<br/>Quelle est sa nouvelle altitude ?`
                : `Un randonneur est à $${a}\\,\\text{m}$ d'altitude. Il <strong>descend</strong> de $${absB}\\,\\text{m}$.<br/>Quelle est sa nouvelle altitude ?`)
              : `Le point $A$ est à $${a}\\,\\text{m}$ d'altitude et le point $B$ à $${bStr}\\,\\text{m}$.<br/>Quel est le <strong>dénivelé</strong> de $A$ à $B$ ?`
          }
        ]);

        return {
          statement: ctx.build(),
          answer,
          tolerance: 0,
          unit: '',
          hint: op === '-'
            ? `Rappel : soustraire revient à additionner l'opposé. $${a} - ${bStr} = ${a} + (${-b})$.`
            : (b < 0 ? `Ajouter un nombre négatif revient à soustraire sa valeur absolue.` : `Même signe ou signes opposés ? Applique la règle.`),
          solution: [
            op === '-'
              ? `$${a} - ${bStr} = ${a} + (${-b}) = ${answer}$`
              : `$${a} + ${bStr} = ${answer}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un sous-marin se trouve à $-120\\,\\text{m}$ (120 m sous la surface). Il monte de $45\\,\\text{m}$, puis descend de $80\\,\\text{m}$.',
      schema: null,
      tasks: [
        'Calculer la nouvelle profondeur après la montée.',
        'Calculer la profondeur finale après la descente.',
        'Quel déplacement net (positif = montée) le sous-marin a-t-il effectué au total ?'
      ],
      solutions: [
        'Après montée : $-120 + 45 = -75\\,\\text{m}$ (à 75 m sous la surface).',
        'Après descente : $-75 - 80 = -155\\,\\text{m}$ (à 155 m sous la surface).',
        'Déplacement net : $-155 - (-120) = -155 + 120 = -35\\,\\text{m}$ (il s\'est enfoncé de 35 m au total).'
      ],
      finalAnswer: 'Profondeur finale : $-155\\,\\text{m}$, déplacement net : $-35\\,\\text{m}$'
    },

    evaluation: {
      title: 'Évaluation — Nombres relatifs',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer $(-7) + (+12)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Signes opposés : on soustrait les valeurs absolues $12 - 7 = 5$ et on garde le signe du plus grand en valeur absolue (le $+12$). Résultat : $+5$.'
        },
        {
          statement: 'Calculer $(-6) - (-11)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(-6) - (-11) = (-6) + (+11) = +5$. Soustraire un nombre négatif revient à additionner son opposé.'
        },
        {
          statement: 'Calculer $(-3) + (-8) - (-2)$.',
          type: 'numeric',
          answer: -9,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(-3) + (-8) - (-2) = (-3) + (-8) + (+2) = -11 + 2 = -9$.'
        },
        {
          statement: 'Quelle est la distance entre les points $A(-4)$ et $B(+7)$ sur une droite graduée ?',
          type: 'numeric',
          answer: 11,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Distance $= |x_B - x_A| = |7 - (-4)| = |7 + 4| = |11| = 11$.'
        },
        {
          statement: 'Que vaut $-(5 - 8)$ ?',
          type: 'multiple-choice',
          options: [
            '$-5 - 8 = -13$',
            '$-5 + 8 = 3$',
            '$5 - 8 = -3$',
            '$5 + 8 = 13$'
          ],
          answer: 1,
          points: 2,
          correction: 'Méthode 1 : calcul intérieur d\'abord : $5 - 8 = -3$, puis $-(-3) = +3$. Méthode 2 : le signe $-$ devant la parenthèse change tous les signes : $-(5 - 8) = -5 + 8 = 3$.'
        }
      ]
    }
  });
