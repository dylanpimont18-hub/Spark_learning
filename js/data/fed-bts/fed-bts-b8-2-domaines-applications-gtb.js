/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b8-2-domaines-applications-gtb.js
   BTS FED — S8-B8-2 Domaines d'applications (GTB) — sécurité, vidéosurveillance, autonomie batterie
   Note : les exigences précises d'autonomie minimale réglementaire (SSI, alarme intrusion...) dépendent
   de la norme applicable au système concerné (NF S 61-940, NF EN 50131...) et doivent être vérifiées au
   cas par cas ; ce module présente le principe de calcul générique (Ah/A), pas une valeur normative figée.
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b8-2-domaines-applications-gtb',
    level: 3, subject: 'fed',
    icon: '🔐',
    title: 'Domaines d\'applications (GTB)',
    subtitle: 'Sécurité incendie, alarme, vidéosurveillance, autonomie sur batterie',
    keywords: ['Sécurité incendie', 'Alarme intrusion', 'Vidéosurveillance', 'Autonomie batterie', 'Alimentation de sécurité'],
    physics: 'Une centrale d\'alarme ou de détection incendie ne doit jamais s\'arrêter, même en cas de coupure secteur : elle bascule alors sur une <strong>batterie de secours</strong>, dont l\'autonomie doit être suffisante pour couvrir la durée d\'une coupure réaliste — un calcul simple, mais qui conditionne la sécurité réelle de tout le système.',

    cours: {
      intro: 'Au-delà de l\'architecture générale d\'une GTB (module B8-1), plusieurs <strong>domaines d\'applications spécifiques</strong> mobilisent ces mêmes principes de capteurs, centrale et actionneurs : les <strong>systèmes de protection incendie</strong> (détection, désenfumage — voir aussi module B2-3), l\'<strong>alarme intrusion</strong> (détecteurs de mouvement, zonage des espaces à protéger), la <strong>vidéosurveillance</strong>, ou encore les <strong>automatismes du bâtiment</strong> (volets, éclairage extérieur, contrôle d\'accès).<br/><br/>Un point commun traverse ces applications liées à la sécurité : la nécessité d\'une <strong>alimentation électrique de sécurité (AES)</strong>, qui prend le relais sur batterie en cas de coupure du secteur, pour garantir que le système reste opérationnel. Contrairement à un automatisme de confort (volets, éclairage décoratif), un système de sécurité incendie ou d\'alarme intrusion ne peut pas se permettre une interruption non maîtrisée.<br/><br/>Dimensionner cette alimentation de secours revient à calculer son <strong>autonomie</strong> : combien de temps la batterie peut-elle alimenter le système en l\'absence de secteur, compte tenu du courant consommé par les équipements. Les exigences précises d\'autonomie minimale dépendent de la norme applicable au système concerné (sécurité incendie, alarme intrusion...) et doivent être vérifiées au cas par cas — mais le principe de calcul reste le même pour toutes ces applications.',
      definitions: [
        { term: 'Alimentation électrique de sécurité (AES)', def: 'Source d\'énergie de secours (généralement batterie d\'accumulateurs) qui prend le relais d\'un système de sécurité (incendie, alarme) en cas de coupure du secteur.' },
        { term: 'Zonage', def: 'Découpage d\'un bâtiment en zones de détection ou de protection distinctes (alarme intrusion, vidéosurveillance, détection incendie), permettant de localiser précisément un événement.' },
        { term: 'Capacité d\'une batterie $C$', def: 'Quantité de charge électrique que peut fournir une batterie, exprimée en ampères-heures (Ah).' },
        { term: 'Autonomie sur batterie', def: 'Durée pendant laquelle une batterie peut alimenter un équipement à un courant donné : $t = C/I$, avec $C$ la capacité (Ah) et $I$ le courant consommé (A).' }
      ],
      method: {
        title: 'Calculer l\'autonomie d\'une alimentation de sécurité sur batterie',
        steps: [
          '<strong>Relever la capacité</strong> $C$ de la batterie installée (Ah, donnée constructeur).',
          '<strong>Relever le courant consommé</strong> $I$ par le système en fonctionnement (souvent différent en veille et en état d\'alarme).',
          '<strong>Calculer l\'autonomie</strong> $t = C/I$, en heures.',
          '<strong>Comparer</strong> cette autonomie à la durée exigée par la norme applicable au système concerné (SSI, alarme intrusion...), qui varie selon le type d\'installation et le contexte réglementaire.',
          '<strong>Redimensionner la batterie</strong> si l\'autonomie calculée est insuffisante par rapport à l\'exigence retenue.'
        ]
      },
      example: {
        statement: 'Une centrale d\'alarme intrusion est alimentée par une batterie de secours de capacité $C=7$ Ah. En veille, elle consomme $I_{\\text{veille}}=0{,}15$ A ; en état d\'alarme (sirène active), elle consomme $I_{\\text{alarme}}=0{,}8$ A.<br/><br/>Calculer l\'autonomie en veille, puis l\'autonomie en état d\'alarme.',
        steps: [
          'Autonomie en veille : $t_{\\text{veille}} = C/I_{\\text{veille}} = 7/0{,}15 \\approx 46{,}7$ h.',
          'Autonomie en alarme : $t_{\\text{alarme}} = C/I_{\\text{alarme}} = 7/0{,}8 = 8{,}75$ h.'
        ],
        answer: 'La batterie tient près de $47$ h en veille, mais seulement $8{,}75$ h si la sirène reste active en continu : c\'est bien la consommation en <strong>état d\'alarme</strong>, la plus élevée, qui doit être vérifiée en priorité lors du dimensionnement.'
      },
      formulas: [
        '$t = C/I$ (autonomie sur batterie, en h, avec $C$ en Ah et $I$ en A)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Domaines d\'applications liés à la sécurité',
        title: 'Des applications distinctes, un même besoin d\'alimentation de secours',
        description: 'Sécurité incendie, alarme intrusion et vidéosurveillance sont des applications distinctes, mais partagent toutes la nécessité d\'une alimentation électrique de sécurité qui prend le relais sur batterie en cas de coupure secteur.',
        svg: `
          <svg viewBox="0 0 480 220" role="img" aria-labelledby="gtb2-graph-title gtb2-graph-desc">
            <title id="gtb2-graph-title">Domaines d'applications relies a une alimentation de securite commune</title>
            <desc id="gtb2-graph-desc">Trois boites en haut representant securite incendie, alarme intrusion et videosurveillance, toutes reliees a une boite centrale en bas representant l'alimentation electrique de securite sur batterie.</desc>

            <rect class="frame-line" x="20" y="30" width="120" height="50" fill="none"></rect>
            <text class="label-soft" x="80" y="55" text-anchor="middle">Sécurité</text>
            <text class="label-soft" x="80" y="70" text-anchor="middle">incendie</text>

            <rect class="frame-line" x="180" y="30" width="120" height="50" fill="none"></rect>
            <text class="label-soft" x="240" y="55" text-anchor="middle">Alarme</text>
            <text class="label-soft" x="240" y="70" text-anchor="middle">intrusion</text>

            <rect class="frame-line" x="340" y="30" width="120" height="50" fill="none"></rect>
            <text class="label-soft" x="400" y="55" text-anchor="middle">Vidéo-</text>
            <text class="label-soft" x="400" y="70" text-anchor="middle">surveillance</text>

            <rect class="frame-line" x="140" y="150" width="200" height="50" fill="none"></rect>
            <text class="label-soft" x="240" y="175" text-anchor="middle">Alimentation de sécurité</text>
            <text class="label-soft" x="240" y="190" text-anchor="middle">(batterie de secours)</text>

            <line class="curve-main" x1="80" y1="80" x2="200" y2="150"></line>
            <line class="curve-main" x1="240" y1="80" x2="240" y2="150"></line>
            <line class="curve-main" x1="400" y1="80" x2="280" y2="150"></line>
          </svg>
        `,
        notes: [
          'Trois applications <strong>distinctes</strong> (sécurité incendie, alarme intrusion, vidéosurveillance) en haut.',
          'Toutes convergent vers un même besoin : une <strong>alimentation de sécurité</strong> qui prend le relais sur batterie en cas de coupure secteur.',
          'L\'autonomie de cette alimentation ($t=C/I$) doit être vérifiée pour <strong>chaque application</strong>, selon son propre profil de consommation.'
        ],
        reading: 'Repère les trois applications en haut, puis la boîte commune en bas qui les alimente toutes en cas de coupure secteur.',
        caption: 'Plusieurs domaines d\'applications de sécurité partagent le même besoin d\'alimentation électrique de secours.'
      },
      recap: [
        'Les domaines d\'application d\'une GTB liés à la sécurité incluent la <strong>protection incendie</strong>, l\'<strong>alarme intrusion</strong>, la <strong>vidéosurveillance</strong>, les <strong>automatismes du bâtiment</strong>.',
        'Le <strong>zonage</strong> découpe le bâtiment en zones de détection ou de protection distinctes.',
        'Une <strong>alimentation électrique de sécurité (AES)</strong> prend le relais sur batterie en cas de coupure secteur.',
        'Autonomie sur batterie : $t = C/I$, à calculer pour le courant consommé <strong>le plus défavorable</strong> (état d\'alarme, pas seulement la veille).',
        'L\'exigence d\'autonomie minimale dépend de la norme applicable au système concerné — à vérifier au cas par cas, pas une valeur universelle.'
      ],
      piege: 'Le piège classique est de calculer l\'autonomie uniquement avec le courant de <strong>veille</strong> (le plus faible), alors que c\'est le courant en <strong>état d\'alarme</strong> (sirène, flash, transmission) qui doit dimensionner la batterie — une installation dont la batterie ne tiendrait que quelques minutes en alarme, malgré des dizaines d\'heures d\'autonomie en veille, resterait non conforme à l\'objectif de sécurité recherché. Ne pas non plus généraliser une valeur d\'autonomie minimale d\'un système à un autre : les exigences diffèrent selon qu\'il s\'agit de sécurité incendie, d\'alarme intrusion ou d\'un autre système, et doivent être vérifiées dans la norme applicable au cas précis traité.'
    },

    quiz: [
      {
        q: 'Le rôle d\'une alimentation électrique de sécurité (AES) est de :',
        options: [
          'Réduire la consommation électrique du bâtiment',
          'Prendre le relais sur batterie en cas de coupure secteur, pour garantir la continuité d\'un système de sécurité',
          'Remplacer entièrement le réseau électrique du bâtiment',
          'Éclairer les zones de circulation en fonctionnement normal'
        ],
        answer: 1,
        correction: 'L\'AES garantit qu\'un système de sécurité (incendie, alarme) reste opérationnel même en cas de coupure du secteur, en basculant sur une source de secours (généralement batterie).'
      },
      {
        q: 'Pour dimensionner correctement l\'autonomie d\'une batterie de secours d\'une centrale d\'alarme, il faut utiliser :',
        options: [
          'Uniquement le courant consommé en veille',
          'Le courant consommé le plus défavorable, notamment en état d\'alarme',
          'La capacité de la batterie sans tenir compte du courant',
          'Uniquement la tension nominale de la batterie'
        ],
        answer: 1,
        correction: 'C\'est le courant consommé le plus élevé (état d\'alarme, sirène active) qui doit servir de base au calcul, car c\'est la situation la plus contraignante pour l\'autonomie réelle du système.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une centrale de détection incendie',
          'un système d\'alarme intrusion d\'un local commercial',
          'un poste de vidéosurveillance autonome',
          'une centrale d\'alarme technique (température, inondation)'
        ]);
        const C = pick([4, 7, 12, 17]);
        const I = randFloat(0.2, 1.2, 2);
        const t = parseFloat((C / I).toFixed(1));
        return {
          statement: `Dans ${contexte}, la batterie de secours a une capacité $C=${C}$ Ah, pour un courant consommé en fonctionnement $I=${fr(I, 2)}$ A.<br/><br/>Calcule l'autonomie $t$ de cette alimentation de secours (en heures, arrondie au dixième).`,
          answer: t,
          tolerance: 0.3,
          unit: 'h',
          hint: 'Applique $t = C/I$.',
          solution: [
            `$t = C/I = ${C}/${fr(I, 2)} \\approx ${fr(t, 1)}$ h.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une centrale de détection incendie consomme $I_{\\text{veille}}=0{,}25$ A en veille et $I_{\\text{alarme}}=1{,}5$ A en état d\'alarme (avec report vers plusieurs sirènes). Le cahier des charges impose une autonomie minimale de $24$ h en veille suivies d\'au moins $30$ minutes en alarme continue.',
      tasks: [
        'Pour une batterie de $C=12$ Ah, calculer l\'autonomie en veille $t_{\\text{veille}}$.',
        'Pour cette même batterie, calculer l\'autonomie en alarme $t_{\\text{alarme}}$ (en minutes).',
        'Cette batterie satisfait-elle les deux exigences du cahier des charges (24 h veille, 30 min alarme) ? Justifier.',
        'Si la batterie ne satisfaisait pas l\'exigence en alarme, quelle action simple permettrait d\'y remédier (sans changer le courant consommé) ?'
      ],
      solutions: [
        '$t_{\\text{veille}} = 12/0{,}25 = 48$ h.',
        '$t_{\\text{alarme}} = 12/1{,}5 = 8$ h, soit $480$ minutes.',
        'Oui : $48$ h $\\ge 24$ h (exigence veille) et $480$ min $\\ge 30$ min (exigence alarme) — les deux critères sont largement satisfaits, avec une marge confortable.',
        'Si l\'autonomie en alarme avait été insuffisante, il aurait fallu <strong>augmenter la capacité $C$</strong> de la batterie (batterie de plus grande capacité, ou batteries en parallèle), le courant consommé $I$ étant fixé par les équipements installés et non ajustable côté alimentation de secours.'
      ],
      finalAnswer: 'Avec $C=12$ Ah, l\'autonomie atteint $48$ h en veille et $8$ h en alarme continue — largement au-delà des exigences du cahier des charges ($24$ h et $30$ min).'
    },

    evaluation: {
      title: 'Évaluation — Domaines d\'applications (GTB)',
      duration: '15 min',
      questions: [
        {
          statement: 'Une batterie de $C=5$ Ah alimente un système consommant $I=0{,}4$ A. Calculer l\'autonomie $t$ (en heures, arrondie au dixième).',
          type: 'numeric',
          answer: 12.5,
          tolerance: 0.5,
          unit: 'h',
          points: 3,
          correction: '$t = 5/0{,}4 = 12{,}5$ h.'
        },
        {
          statement: 'Le zonage d\'un système d\'alarme intrusion ou de détection incendie sert principalement à :',
          type: 'multiple-choice',
          options: [
            'Réduire le coût total de l\'installation',
            'Localiser précisément l\'origine d\'un événement (intrusion, départ de feu) dans le bâtiment',
            'Supprimer le besoin de batterie de secours',
            'Remplacer la supervision (module B8-1)'
          ],
          answer: 1,
          points: 2,
          correction: 'Le zonage découpe le bâtiment en secteurs distincts, ce qui permet d\'identifier rapidement où se situe l\'événement détecté, plutôt que de savoir seulement qu\'un événement a eu lieu quelque part dans le bâtiment.'
        },
        {
          statement: 'Pourquoi ne peut-on pas appliquer la même valeur d\'autonomie minimale requise à tous les systèmes de sécurité (incendie, intrusion, vidéosurveillance) sans vérification ?',
          type: 'multiple-choice',
          options: [
            'Parce que l\'autonomie ne dépend jamais du type de système',
            'Parce que les exigences d\'autonomie minimale dépendent de la norme applicable à chaque type de système, qui peut différer',
            'Parce que toutes les batteries ont exactement la même capacité',
            'Parce que le courant consommé est toujours identique quel que soit le système'
          ],
          answer: 1,
          points: 3,
          correction: 'Chaque famille de système de sécurité (SSI, alarme intrusion...) est encadrée par ses propres normes, qui peuvent fixer des exigences d\'autonomie différentes : il faut vérifier la norme applicable au cas précis, pas généraliser une valeur d\'un système à l\'autre.'
        }
      ]
    }
  });
