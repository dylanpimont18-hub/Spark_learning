/* =========================================================
   Spark Learning – data/si-tle/si-tle-grafcet.js
   Extrait de si-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-tle-grafcet',
    level: 2, subject: 'si',
    icon: '📋',
    title: 'Modélisation des systèmes séquentiels (GRAFCET)',
    subtitle: 'Étapes, transitions, 5 règles d\'évolution, divergences, macro-étapes',
    keywords: ['GRAFCET', 'Étape', 'Transition', 'Action', 'Séquentiel', 'Divergence'],
    physics: 'Automatisation industrielle : chaînes de production, robots de soudure, distributeurs automatiques, feux tricolores — tout système dont le comportement suit une séquence d\'opérations.',

    cours: {
      intro: 'Le <strong>GRAFCET</strong> (GRAphe Fonctionnel de Commande Étape-Transition) est un outil normalisé (<strong>norme IEC 60848</strong>) pour modéliser le comportement séquentiel d\'un système automatisé. Il est utilisé pour la programmation d\'automates programmables industriels (API).<br/><br/>' +
        'Un GRAFCET se compose de trois éléments fondamentaux :<br/>' +
        '- <strong>Étapes</strong> : états du système, représentées par des carrés numérotés (l\'étape initiale a un double contour). Chaque étape est soit active, soit inactive.<br/>' +
        '- <strong>Transitions</strong> : conditions de passage entre étapes (réceptivités), représentées par des barres horizontales.<br/>' +
        '- <strong>Actions</strong> : opérations effectuées quand une étape est active, placées dans un rectangle à droite de l\'étape.<br/><br/>' +
        'Le GRAFCET respecte <strong>5 règles d\'évolution</strong> qui garantissent un fonctionnement déterministe. Il permet aussi des structures avancées : <strong>divergence en OU</strong> (choix entre chemins exclusifs, simple trait), <strong>divergence en ET</strong> (parallélisme, double trait), et <strong>macro-étapes</strong> (sous-GRAFCET encapsulé dans une étape, pour la modularité).<br/><br/>' +
        'Une <strong>macro-étape</strong> est une étape qui contient elle-même un GRAFCET complet (expansion). Elle permet de structurer des automatismes complexes de manière hiérarchique. On la représente par un carré avec des barres horizontales en haut et en bas.',

      definitions: [
        { term: 'Étape', def: 'État du système, représenté par un carré numéroté. L\'étape initiale a un double contour. Une étape est soit active soit inactive à tout instant.' },
        { term: 'Transition', def: 'Condition logique de passage entre l\'étape amont et l\'étape aval. Représentée par un trait horizontal. Associée à une réceptivité (condition booléenne).' },
        { term: 'Réceptivité', def: 'Condition logique associée à une transition (capteur, temporisation, combinaison logique). La transition n\'est franchissable que si la réceptivité est vraie.' },
        { term: 'Divergence en OU', def: 'Choix exclusif entre plusieurs branches (simple trait). Une seule branche est activée, selon la première réceptivité validée. Les réceptivités doivent être mutuellement exclusives.' },
        { term: 'Divergence en ET', def: 'Activation simultanée de plusieurs branches parallèles (double trait). Toutes les branches s\'exécutent en même temps. La convergence en ET attend la fin de toutes les branches.' },
        { term: 'Macro-étape', def: 'Étape composite contenant un sous-GRAFCET (expansion). Permet de structurer hiérarchiquement des automatismes complexes. Notée avec des barres horizontales en haut et en bas du carré.' }
      ],

      method: {
        title: 'Construire et analyser un GRAFCET',
        steps: [
          '<strong>Identifier les étapes</strong> : lister tous les états distincts du système (repos, ouverture, fermeture, attente, etc.).<br/>L\'étape initiale (E0) correspond à l\'état du système à la mise sous tension.',
          '<strong>Définir les transitions</strong> : pour chaque passage d\'une étape à la suivante, formuler la réceptivité (capteur, bouton, temporisation, combinaison logique).<br/>Exemple : « capteur fin de course ET bouton validé ».',
          '<strong>Associer les actions</strong> : à chaque étape active, indiquer les actions (moteur ON, vérin sorti, vanne ouverte). Les actions se notent dans des rectangles à droite de l\'étape.',
          '<strong>Vérifier l\'alternance</strong> : un GRAFCET alterne <strong>toujours</strong> étape – transition – étape. Jamais deux étapes consécutives sans transition, ni deux transitions consécutives sans étape.',
          '<strong>Structures avancées</strong> : utiliser divergence en OU (simple trait, choix) si le système a des modes alternatifs, ou divergence en ET (double trait, parallélisme) si des actions s\'exécutent simultanément. Utiliser des macro-étapes pour encapsuler des sous-séquences complexes.'
        ]
      },

      example: {
        statement: 'Un portail automatique a 3 étapes : E0 (fermé, attente), E1 (ouverture en cours), E2 (ouvert, temporisation). Décrire les transitions.',
        steps: [
          'Transition T0→1 : « Bouton pressé ET portail fermé »',
          'Transition T1→2 : « Capteur fin de course ouverture activé »',
          'Transition T2→0 : « Temporisation de 10 s écoulée »'
        ],
        answer: 'GRAFCET à 3 étapes bouclé : E0 → T01 → E1 → T12 → E2 → T20 → E0.'
      },

      formulas: [
        'Règle 1 — Situation initiale : à la mise en énergie, seules les étapes initiales sont actives',
        'Règle 2 — Franchissement : une transition est franchie si l\'étape amont est active ET la réceptivité est vraie',
        'Règle 3 — Évolution : le franchissement d\'une transition active l\'étape aval et désactive l\'étape amont (simultanément)',
        'Règle 4 — Franchissements simultanés : plusieurs transitions simultanément franchissables sont franchies simultanément',
        'Règle 5 — Priorité : si une étape doit être simultanément activée et désactivée, elle reste active'
      ],

      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px">Règle</th><th style="border:1px solid var(--border);padding:8px">Intitulé</th><th style="border:1px solid var(--border);padding:8px">Description</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>R1</strong></td><td style="border:1px solid var(--border);padding:8px">Situation initiale</td><td style="border:1px solid var(--border);padding:8px">À la mise sous énergie, seules les étapes initiales (double contour) sont actives</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>R2</strong></td><td style="border:1px solid var(--border);padding:8px">Franchissement</td><td style="border:1px solid var(--border);padding:8px">Transition franchie si étape amont active ET réceptivité vraie</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>R3</strong></td><td style="border:1px solid var(--border);padding:8px">Évolution des étapes actives</td><td style="border:1px solid var(--border);padding:8px">Le franchissement active l\'étape aval et désactive l\'étape amont simultanément</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>R4</strong></td><td style="border:1px solid var(--border);padding:8px">Franchissements simultanés</td><td style="border:1px solid var(--border);padding:8px">Plusieurs transitions franchissables en même temps sont franchies simultanément</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>R5</strong></td><td style="border:1px solid var(--border);padding:8px">Activation et désactivation simultanées</td><td style="border:1px solid var(--border);padding:8px">Si une étape doit être activée et désactivée au même instant, elle reste active</td></tr></table>',

      recap: [
        'Un GRAFCET modélise un système séquentiel avec des étapes, des transitions et des actions.',
        'Les 5 règles d\'évolution (R1 à R5) garantissent un fonctionnement déterministe et sans ambiguïté.',
        'Divergence en OU (simple trait) = choix exclusif ; divergence en ET (double trait) = parallélisme.',
        'Les macro-étapes permettent de décomposer un automatisme complexe en sous-GRAFCET modulaires.'
      ],

      piege: 'Ne confonds pas divergence en OU et divergence en ET ! En OU, un simple trait sépare les branches et une SEULE branche est activée (choix exclusif — les réceptivités doivent être mutuellement exclusives). En ET, un double trait indique que TOUTES les branches sont activées simultanément. Autre erreur fréquente : oublier l\'alternance obligatoire étape-transition-étape.'
    },

    quiz: [
      {
        q: 'Selon la règle R2 du GRAFCET, une transition est franchie quand :',
        options: [
          'L\'étape amont est active ET la réceptivité est vraie',
          'La réceptivité est vraie, quel que soit l\'état des étapes',
          'L\'étape aval est inactive ET la réceptivité est vraie',
          'Toutes les étapes du GRAFCET sont actives'
        ],
        answer: 0,
        correction: 'La règle R2 (franchissement) stipule qu\'une transition ne peut être franchie que si l\'étape immédiatement amont est active ET que la réceptivité associée est vérifiée. Les deux conditions sont nécessaires simultanément.'
      },
      {
        q: 'Selon la règle R5, si une étape doit être simultanément activée et désactivée, elle :',
        options: [
          'Reste active (l\'activation est prioritaire)',
          'Est désactivée (la désactivation est prioritaire)',
          'Provoque une erreur dans l\'automate',
          'Alterne entre active et inactive'
        ],
        answer: 0,
        correction: 'La règle R5 du GRAFCET stipule que si une étape est simultanément activée (par franchissement d\'une transition amont) et désactivée (par franchissement d\'une transition aval), elle reste active. L\'activation est toujours prioritaire sur la désactivation.'
      },
      {
        q: 'Un GRAFCET linéaire bouclé possède 5 étapes (E0 à E4). Combien de transitions comporte-t-il ?',
        options: [
          '5 transitions',
          '4 transitions',
          '6 transitions',
          '10 transitions'
        ],
        answer: 0,
        correction: 'Avec 5 étapes en boucle (E0 → E1 → E2 → E3 → E4 → E0), il y a 5 transitions : T01, T12, T23, T34 et T40. En cycle bouclé, le nombre de transitions est égal au nombre d\'étapes.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['boucle', 'non_boucle', 'parallele']);
        if (scenario === 'parallele') {
          const nbMain = rand(3, 6);
          const nbBranch1 = rand(2, 4);
          const nbBranch2 = rand(2, 4);
          const totalEtapes = nbMain + nbBranch1 + nbBranch2;
          const totalTransitions = nbMain + nbBranch1 + nbBranch2 + 1;
          return {
            statement: `Un GRAFCET comporte une séquence principale de $${nbMain}$ étapes, puis une divergence en ET ouvrant $2$ branches parallèles de $${nbBranch1}$ et $${nbBranch2}$ étapes respectivement, suivie d'une convergence en ET et d'un retour à l'étape initiale. Combien d'étapes au total comporte ce GRAFCET ?`,
            answer: totalEtapes,
            tolerance: 0,
            unit: 'étapes',
            hint: `Compte les étapes de la séquence principale ($${nbMain}$) plus celles des deux branches parallèles ($${nbBranch1} + ${nbBranch2}$).`,
            solution: [
              `Séquence principale : $${nbMain}$ étapes`,
              `Branche 1 : $${nbBranch1}$ étapes, Branche 2 : $${nbBranch2}$ étapes`,
              `Total : $${nbMain} + ${nbBranch1} + ${nbBranch2} = ${totalEtapes}$ étapes`
            ]
          };
        } else {
          const nbEtapes = rand(4, 12);
          const boucle = scenario === 'boucle';
          const nbTransitions = boucle ? nbEtapes : nbEtapes - 1;
          const desc = boucle
            ? `Un GRAFCET linéaire comporte $${nbEtapes}$ étapes (de E0 à E${nbEtapes - 1}) avec un retour à l'étape initiale E0 (cycle bouclé). Combien de transitions comporte-t-il ?`
            : `Un GRAFCET linéaire comporte $${nbEtapes}$ étapes (de E0 à E${nbEtapes - 1}) sans retour à l'étape initiale. Combien de transitions comporte-t-il ?`;
          return {
            statement: desc,
            answer: nbTransitions,
            tolerance: 0,
            unit: 'transitions',
            hint: boucle
              ? `En cycle bouclé, chaque étape est suivie d'une transition, y compris la dernière qui revient à E0.`
              : `Sans boucle, il y a une transition entre chaque paire d'étapes consécutives, soit $n - 1$ transitions pour $n$ étapes.`,
            solution: [
              `Nombre d'étapes : $${nbEtapes}$`,
              boucle ? `Cycle bouclé : autant de transitions que d'étapes` : `Sans boucle : $${nbEtapes} - 1 = ${nbTransitions}$ transitions`,
              `Nombre de transitions : $${nbTransitions}$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On modélise le fonctionnement d\'une perceuse automatique. Le cycle est le suivant : E0 (attente, pièce en place) → E1 (descente du foret) → E2 (perçage à vitesse lente) → E3 (remontée du foret) → retour E0. La transition de E0 à E1 est « bouton départ cycle ET capteur pièce présente ». La transition de E1 à E2 est « capteur contact foret-pièce ». La transition de E2 à E3 est « capteur profondeur atteinte ». La transition de E3 à E0 est « capteur position haute foret ».',
      tasks: [
        'Combien d\'étapes et de transitions comporte ce GRAFCET ? Quelle est l\'étape initiale ?',
        'Lister les actions associées à chaque étape. Quelle règle du GRAFCET impose l\'alternance étape-transition ?',
        'Si on ajoute un arrêt d\'urgence qui renvoie à E0 depuis n\'importe quelle étape, quel mécanisme du GRAFCET faut-il utiliser ?'
      ],
      solutions: [
        '4 étapes (E0, E1, E2, E3) et 4 transitions (T01, T12, T23, T30) car le cycle boucle. L\'étape initiale est E0 (double contour), conformément à la règle R1.',
        'E0 → aucune action (attente) ; E1 → « moteur descente ON » ; E2 → « moteur rotation ON + descente lente » ; E3 → « moteur remontée ON ». L\'alternance étape-transition-étape est imposée par la structure même du GRAFCET (définition normative IEC 60848).',
        'Un arrêt d\'urgence depuis n\'importe quelle étape nécessite un <strong>forçage de GRAFCET</strong> (ou un GRAFCET hiérarchique). On utilise un GRAFCET de sécurité (GS) qui peut forcer le GRAFCET de conduite (GC) dans la situation initiale {E0}. C\'est plus propre que d\'ajouter une divergence en OU depuis chaque étape.'
      ],
      finalAnswer: '4 étapes, 4 transitions, cycle bouclé. L\'arrêt d\'urgence se gère par forçage via un GRAFCET de sécurité hiérarchique.'
    },

    evaluation: {
      title: 'Évaluation — GRAFCET',
      duration: '20 min',
      questions: [
        {
          statement: 'Un GRAFCET linéaire bouclé comporte 7 étapes. Combien de transitions possède-t-il ?',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'En cycle bouclé, le nombre de transitions est égal au nombre d\'étapes : 7 transitions pour 7 étapes.'
        },
        {
          statement: 'Selon la règle R2, une transition est franchie quand :',
          type: 'multiple-choice',
          options: [
            'L\'étape amont est active ET la réceptivité est vraie',
            'L\'étape aval est inactive ET la réceptivité est vraie',
            'La réceptivité est vraie, indépendamment des étapes',
            'Toutes les étapes du GRAFCET sont actives'
          ],
          answer: 0,
          points: 2,
          correction: 'Règle R2 : une transition est franchie si et seulement si l\'étape immédiatement amont est active ET la réceptivité associée est vraie.'
        },
        {
          statement: 'Quelle est la différence graphique entre une divergence en OU et une divergence en ET ?',
          type: 'multiple-choice',
          options: [
            'OU = simple trait horizontal ; ET = double trait horizontal',
            'OU = double trait ; ET = simple trait',
            'OU = trait pointillé ; ET = trait plein',
            'Pas de différence graphique'
          ],
          answer: 0,
          points: 3,
          correction: 'La divergence en OU (choix exclusif) utilise un simple trait horizontal, tandis que la divergence en ET (parallélisme, activation simultanée de toutes les branches) utilise un double trait horizontal. La convergence suit la même logique.'
        },
        {
          statement: 'Un GRAFCET linéaire NON bouclé possède 8 étapes. Combien de transitions a-t-il ?',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: 'Sans boucle de retour, le nombre de transitions est le nombre d\'étapes moins 1 : $8 - 1 = 7$ transitions.'
        }
      ]
    }
  });
