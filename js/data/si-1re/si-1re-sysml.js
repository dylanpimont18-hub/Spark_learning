/* =========================================================
   Spark Learning – data/si-1re/si-1re-sysml.js
   Extrait de si-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-1re-sysml',
    level: 2, subject: 'si',
    icon: '📊',
    title: 'Modélisation des systèmes (SysML)',
    subtitle: 'Diagrammes SysML : exigences, blocs, cas d\'utilisation',
    keywords: ['SysML', 'Diagramme des exigences', 'Diagramme de blocs', 'Cas d\'utilisation'],
    physics: 'La modélisation SysML est utilisée dans tous les domaines de l\'ingénierie : aéronautique, automobile, robotique. Elle permet de formaliser le cahier des charges et de communiquer entre équipes pluridisciplinaires.',

    cours: {
      intro: 'SysML (<strong>Systems Modeling Language</strong>) est un langage graphique normalisé par l\'OMG (Object Management Group), dérivé d\'UML et adapté à l\'ingénierie système.<br/><br/>Il propose <strong>9 types de diagrammes</strong> pour décrire un système sous différents angles :<br/>- <strong>req</strong> (exigences) — <strong>bdd</strong> (définition de blocs) — <strong>ibd</strong> (blocs internes)<br/>- <strong>uc</strong> (cas d\'utilisation) — <strong>stm</strong> (états) — <strong>act</strong> (activité)<br/>- <strong>sd</strong> (séquence) — <strong>pkg</strong> (paquetage) — <strong>par</strong> (paramétrique)<br/><br/>Chaque diagramme répond à une question précise : « Que doit faire le système ? » (req, uc), « De quoi est-il composé ? » (bdd, ibd), « Comment se comporte-t-il ? » (stm, act, sd).<br/><br/>L\'enjeu est de passer d\'un cahier des charges textuel à une modélisation exploitable par tous les ingénieurs du projet.',
      definitions: [
        { term: 'Exigence (requirement)', def: 'Besoin ou contrainte que le système doit satisfaire. Elle possède un identifiant unique, un texte descriptif et un niveau de criticité. Diagramme associé : <strong>req</strong>.' },
        { term: 'Bloc (block)', def: 'Composant fonctionnel ou structurel du système. Un bloc possède des attributs, des opérations et des ports de flux. Diagrammes associés : <strong>bdd</strong> (vue externe) et <strong>ibd</strong> (vue interne).' },
        { term: 'Cas d\'utilisation (use case)', def: 'Scénario d\'interaction entre un acteur (utilisateur, environnement) et le système. Il décrit le « quoi » sans préciser le « comment ». Diagramme associé : <strong>uc</strong>.' },
        { term: 'Flux (flow)', def: 'Échange de matière, d\'énergie ou d\'information entre blocs. On distingue les flux d\'entrée et de sortie dans le diagramme <strong>ibd</strong>.' }
      ],
      method: {
        title: 'Analyser un système avec SysML',
        steps: [
          '<strong>Exigences et diagramme req</strong> : Étape 1 — Identifier les exigences : lire le cahier des charges, extraire chaque besoin fonctionnel et chaque contrainte.<br/>Les numéroter (R1, R2…) et tracer le diagramme <strong>req</strong>. Préciser les liens <em>deriveReqt</em>, <em>satisfy</em> et <em>verify</em>.',
          '<strong>Cas d\'utilisation</strong> : Étape 2 — Identifier les acteurs et cas d\'utilisation : qui interagit avec le système ? Quels scénarios d\'usage ?<br/>Tracer le diagramme <strong>uc</strong> avec les relations <em>include</em> (obligatoire) et <em>extend</em> (optionnel).',
          '<strong>Décomposition en blocs</strong> : Étape 3 — Décomposer en blocs : identifier les sous-systèmes (chaîne d\'énergie, chaîne d\'information).<br/>Tracer le <strong>bdd</strong> pour la hiérarchie, puis le <strong>ibd</strong> pour les flux internes (matière, énergie, information).',
          '<strong>Diagramme d\'états</strong> : Étape 4 — Décrire le comportement : pour les systèmes séquentiels, utiliser le <strong>stm</strong> (diagramme d\'états) pour les modes de fonctionnement et les transitions entre états.'
        ]
      },
      example: {
        statement: 'Un portail automatique doit s\'ouvrir quand l\'utilisateur appuie sur la télécommande et se refermer après $20$ secondes. Identifier les exigences et les blocs principaux.',
        steps: [
          'Exigences : R1 « Le portail doit s\'ouvrir sur commande de la télécommande », R2 « Le portail doit se refermer automatiquement après 20 s », R3 « Le portail doit détecter un obstacle pour stopper la fermeture ».',
          'Acteurs : Utilisateur (acteur principal), Obstacle (acteur secondaire, perturbation).',
          'Blocs principaux : Télécommande (émetteur), Récepteur radio, Carte de commande, Moteur, Portail (vantail), Capteur d\'obstacle.',
          'Flux : Signal radio (télécommande → récepteur) = information ; Énergie électrique (alimentation → moteur) = énergie ; Mouvement (moteur → portail) = énergie mécanique.'
        ],
        answer: 'Le système se décompose en $6$ blocs principaux avec $3$ exigences fonctionnelles. Le diagramme bdd montre les blocs et leurs relations de composition.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><td style="border:1px solid var(--border);padding:8px"><strong>Abréviation</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Nom complet</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Rôle</strong></td></tr><tr><td style="border:1px solid var(--border);padding:8px">req</td><td style="border:1px solid var(--border);padding:8px">Diagramme des exigences</td><td style="border:1px solid var(--border);padding:8px">Besoins et contraintes du CdC</td></tr><tr><td style="border:1px solid var(--border);padding:8px">bdd</td><td style="border:1px solid var(--border);padding:8px">Définition de blocs</td><td style="border:1px solid var(--border);padding:8px">Décomposition structurelle</td></tr><tr><td style="border:1px solid var(--border);padding:8px">ibd</td><td style="border:1px solid var(--border);padding:8px">Blocs internes</td><td style="border:1px solid var(--border);padding:8px">Flux entre sous-systèmes</td></tr><tr><td style="border:1px solid var(--border);padding:8px">uc</td><td style="border:1px solid var(--border);padding:8px">Cas d\'utilisation</td><td style="border:1px solid var(--border);padding:8px">Acteurs et scénarios d\'usage</td></tr><tr><td style="border:1px solid var(--border);padding:8px">stm</td><td style="border:1px solid var(--border);padding:8px">Machine à états</td><td style="border:1px solid var(--border);padding:8px">États et transitions</td></tr><tr><td style="border:1px solid var(--border);padding:8px">act</td><td style="border:1px solid var(--border);padding:8px">Diagramme d\'activité</td><td style="border:1px solid var(--border);padding:8px">Séquence d\'actions</td></tr><tr><td style="border:1px solid var(--border);padding:8px">sd</td><td style="border:1px solid var(--border);padding:8px">Diagramme de séquence</td><td style="border:1px solid var(--border);padding:8px">Échanges temporels entre blocs</td></tr><tr><td style="border:1px solid var(--border);padding:8px">pkg</td><td style="border:1px solid var(--border);padding:8px">Diagramme de paquetage</td><td style="border:1px solid var(--border);padding:8px">Organisation du modèle</td></tr><tr><td style="border:1px solid var(--border);padding:8px">par</td><td style="border:1px solid var(--border);padding:8px">Diagramme paramétrique</td><td style="border:1px solid var(--border);padding:8px">Contraintes physiques et équations</td></tr></table>',
      formulas: [
        'Diagramme <strong>req</strong> : modélise les exigences (id, texte, criticité) et leurs liens (<em>deriveReqt</em>, <em>satisfy</em>, <em>verify</em>)',
        'Diagramme <strong>bdd</strong> : décomposition structurelle en blocs avec relations de composition et d\'association',
        'Diagramme <strong>ibd</strong> : vue interne d\'un bloc avec ports et flux (matière, énergie, information)',
        'Diagramme <strong>uc</strong> : acteurs et cas d\'utilisation avec relations <em>include</em> (obligatoire) et <em>extend</em> (optionnel)',
        'Diagramme <strong>stm</strong> : états, transitions et événements déclencheurs'
      ],
      recap: [
        'SysML (norme OMG) utilise $9$ types de diagrammes : req, bdd, ibd, uc, stm, act, sd, pkg, par.',
        'Les $3$ diagrammes les plus utilisés en Première SI sont : <strong>req</strong> (exigences), <strong>bdd</strong> (blocs) et <strong>uc</strong> (cas d\'utilisation).',
        'Chaque bloc possède des attributs, des opérations et échange des flux avec les autres blocs via des ports.',
        'La démarche de modélisation suit la logique : exigences → cas d\'utilisation → blocs → comportement.'
      ],
      piege: 'Ne pas confondre le diagramme <strong>bdd</strong> (vue externe : quels blocs composent le système, hiérarchie de composition) et le diagramme <strong>ibd</strong> (vue interne : comment les blocs sont connectés par des flux). Le bdd montre la hiérarchie, l\'ibd montre les connexions.'
    },

    quiz: [
      {
        q: 'Le langage SysML est normalisé par quel organisme, et combien de diagrammes propose-t-il ?',
        options: [
          'Par l\'OMG, avec $9$ types de diagrammes',
          'Par l\'ISO, avec $5$ types de diagrammes',
          'Par l\'IEEE, avec $12$ types de diagrammes',
          'Par l\'AFNOR, avec $7$ types de diagrammes'
        ],
        answer: 0,
        correction: 'SysML est normalisé par l\'<strong>OMG</strong> (Object Management Group). Il propose $9$ types de diagrammes : req, bdd, ibd, uc, stm, act, sd, pkg et par. C\'est un profil dérivé d\'UML, adapté à l\'ingénierie système.'
      },
      {
        q: 'Un cahier des charges contient $5$ fonctions principales et $3$ contraintes. On identifie également $2$ liens « deriveReqt » entre exigences. Combien d\'exigences doit-on modéliser au minimum dans le diagramme req ?',
        options: [
          '$5$ (uniquement les fonctions)',
          '$8$ (fonctions + contraintes)',
          '$10$ (fonctions + contraintes + liens)',
          '$15$ (chaque fonction croisée avec chaque contrainte)'
        ],
        answer: 1,
        correction: 'Chaque fonction ET chaque contrainte constitue une exigence. Il faut donc modéliser $5 + 3 = 8$ exigences. Les liens <em>deriveReqt</em> relient des exigences entre elles mais ne sont pas des exigences supplémentaires.'
      },
      {
        q: 'Dans un diagramme uc, la relation « include » entre deux cas d\'utilisation signifie :',
        options: [
          'Le cas de base peut optionnellement déclencher le cas inclus',
          'Le cas de base inclut <strong>obligatoirement</strong> le cas inclus à chaque exécution',
          'Les deux cas s\'exécutent en parallèle',
          'L\'acteur est inclus dans le système'
        ],
        answer: 1,
        correction: 'La relation « include » est <strong>obligatoire</strong> : le cas de base ne peut pas s\'exécuter sans exécuter le cas inclus. La relation « extend » est optionnelle (extension conditionnelle). Exemple : « Commander un produit » <em>include</em> « S\'authentifier ».'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const nExigencesFonc = rand(3, 8);
        const nContraintes = rand(1, 5);
        const totalExigences = nExigencesFonc + nContraintes;
        const nActeurs = rand(2, 5);
        const nCasUtilisation = rand(2, 6);

        const scenario = pick([
          { name: 'un robot aspirateur autonome', blocs: 'capteur IR, carte de commande, moteur aspiration, moteur roues, batterie, bac à poussière' },
          { name: 'un drone de livraison', blocs: 'GPS, carte de vol, 4 moteurs brushless, batterie LiPo, caméra, crochet de largage' },
          { name: 'une borne de recharge électrique', blocs: 'lecteur RFID, carte de gestion, contacteur, compteur énergie, écran, câble de charge' },
          { name: 'un système d\'arrosage automatique', blocs: 'capteur humidité, horloge, électrovanne, pompe, programmateur, tuyauterie' },
          { name: 'un ascenseur de 5 étages', blocs: 'boutons d\'appel, automate, moteur treuil, cabine, capteurs de position, portes automatiques' }
        ]);

        const askWhat = pick(['exigences', 'elements']);

        if (askWhat === 'exigences') {
          return {
            statement: `On modélise ${scenario.name} en SysML. Le cahier des charges contient $${nExigencesFonc}$ fonctions principales et $${nContraintes}$ contraintes. Combien d'exigences doit-on modéliser au total dans le diagramme req ?`,
            answer: totalExigences,
            tolerance: 0,
            unit: 'exigences',
            hint: 'Chaque fonction principale et chaque contrainte constitue une exigence distincte dans le diagramme req. Le total est simplement leur somme.',
            solution: [
              'On identifie les deux catégories d\'exigences du cahier des charges.',
              `Nombre de fonctions principales : $${nExigencesFonc}$`,
              `Nombre de contraintes : $${nContraintes}$`,
              `Total d'exigences = fonctions + contraintes = $${nExigencesFonc} + ${nContraintes} = ${totalExigences}$`
            ]
          };
        } else {
          const totalElements = nActeurs + nCasUtilisation;
          return {
            statement: `On modélise ${scenario.name} en SysML. Le diagramme uc identifie $${nActeurs}$ acteurs et $${nCasUtilisation}$ cas d'utilisation. Combien d'éléments au total apparaissent dans le diagramme uc ?`,
            answer: totalElements,
            tolerance: 0,
            unit: 'éléments',
            hint: 'Le diagramme uc contient des acteurs (bonhommes) et des cas d\'utilisation (ellipses). Le total est la somme des deux.',
            solution: [
              'Le diagramme uc contient deux types d\'éléments : les acteurs et les cas d\'utilisation.',
              `Nombre d'acteurs : $${nActeurs}$`,
              `Nombre de cas d'utilisation : $${nCasUtilisation}$`,
              `Total d'éléments = $${nActeurs} + ${nCasUtilisation} = ${totalElements}$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On étudie un système de store automatique piloté par un capteur de luminosité et un capteur de vent. Le cahier des charges indique : (R1) Le store doit se dérouler quand la luminosité dépasse $500$ lux ; (R2) Le store doit s\'enrouler quand le vent dépasse $40$ km/h ; (R3) L\'utilisateur peut commander le store manuellement via un interrupteur ; (R4) Le temps de déploiement complet doit être inférieur à $30$ secondes.',
      tasks: [
        'Identifier les acteurs et tracer le diagramme des cas d\'utilisation (uc). Combien d\'acteurs et de cas d\'utilisation identifiez-vous ?',
        'Proposer une décomposition en blocs (bdd) : lister les sous-systèmes nécessaires et leurs relations.',
        'Pour le diagramme ibd, identifier les flux (type et direction) entre le bloc « Carte de commande » et les autres blocs.'
      ],
      solutions: [
        'Acteurs : Utilisateur (acteur principal), Soleil/Luminosité (acteur environnemental), Vent (acteur environnemental). Cas d\'utilisation : « Déployer le store », « Enrouler le store », « Commander manuellement ». Total : $3$ acteurs et $3$ cas d\'utilisation.',
        'Blocs : Capteur de luminosité, Capteur de vent, Interrupteur, Carte de commande (µC), Moteur, Store (toile + bras). Relations : le Store contient le Moteur (composition) ; la Carte de commande reçoit les signaux des $3$ entrées.',
        'Flux vers la carte : luminosité mesurée (information, capteur → carte), vitesse du vent (information, capteur → carte), ordre utilisateur (information, interrupteur → carte). Flux depuis la carte : commande moteur (énergie électrique, carte → moteur).'
      ],
      finalAnswer: '$3$ acteurs, $3$ cas d\'utilisation, $6$ blocs principaux, $4$ flux identifiés sur le bloc Carte de commande.'
    },

    evaluation: {
      title: 'Évaluation — Modélisation SysML',
      duration: '20 min',
      questions: [
        {
          statement: 'Combien de types de diagrammes différents le langage SysML propose-t-il ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: '',
          points: 1,
          correction: 'SysML (norme OMG) propose $9$ types de diagrammes : <strong>req</strong>, <strong>bdd</strong>, <strong>ibd</strong>, <strong>uc</strong>, <strong>stm</strong>, <strong>act</strong>, <strong>sd</strong>, <strong>pkg</strong>, <strong>par</strong>.'
        },
        {
          statement: 'Quel diagramme SysML montre la vue interne d\'un bloc avec ses ports et flux ?',
          type: 'multiple-choice',
          options: ['Diagramme bdd', 'Diagramme ibd', 'Diagramme req', 'Diagramme stm'],
          answer: 1,
          points: 2,
          correction: 'Le diagramme <strong>ibd</strong> (Internal Block Diagram) montre la structure interne d\'un bloc : ses parties, ports et flux d\'échange avec les autres blocs. Le <strong>bdd</strong> montre la vue externe (hiérarchie).'
        },
        {
          statement: 'Un système possède $4$ sous-systèmes. Chaque sous-système échange en moyenne $2$ flux avec les autres. Quel est le nombre total de flux modélisés ?',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$4$ sous-systèmes $\\times$ $2$ flux chacun $= 8$ flux au total. Chaque flux est compté une seule fois depuis le bloc émetteur.'
        },
        {
          statement: 'Dans un diagramme des cas d\'utilisation, la relation « include » signifie :',
          type: 'multiple-choice',
          options: [
            'Le cas d\'utilisation de base inclut obligatoirement le cas inclus',
            'Le cas d\'utilisation peut optionnellement étendre un autre cas',
            'L\'acteur est inclus dans le système',
            'L\'exigence est satisfaite par le bloc'
          ],
          answer: 0,
          points: 2,
          correction: 'La relation « <em>include</em> » est obligatoire : le cas de base ne peut pas s\'exécuter sans exécuter le cas inclus. La relation « <em>extend</em> » est optionnelle (extension conditionnelle).'
        },
        {
          statement: 'Parmi ces éléments, lequel est un flux d\'information (et non d\'énergie) ?',
          type: 'multiple-choice',
          options: [
            'Courant électrique alimentant un moteur',
            'Signal du capteur de température',
            'Mouvement de rotation d\'un arbre',
            'Pression hydraulique dans un vérin'
          ],
          answer: 1,
          points: 3,
          correction: 'Le signal du capteur est un flux d\'<strong>information</strong> : il transporte une donnée (la température mesurée) sans transporter d\'énergie significative. Le courant moteur, le mouvement mécanique et la pression hydraulique sont des flux d\'énergie.'
        }
      ]
    }
  });
