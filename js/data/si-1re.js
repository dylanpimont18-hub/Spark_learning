/* =========================================================
   Spark Learning – data/si-1re.js
   Modules Première spécialité Sciences de l'Ingénieur (8)
   ========================================================= */

window.MODULES.push(

  /* -------------------------------------------------------
     1. Modélisation des systèmes (SysML)
     ------------------------------------------------------- */
  {
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
          'Étape 1 — Identifier les exigences : lire le cahier des charges, extraire chaque besoin fonctionnel et chaque contrainte.<br/>Les numéroter (R1, R2…) et tracer le diagramme <strong>req</strong>. Préciser les liens <em>deriveReqt</em>, <em>satisfy</em> et <em>verify</em>.',
          'Étape 2 — Identifier les acteurs et cas d\'utilisation : qui interagit avec le système ? Quels scénarios d\'usage ?<br/>Tracer le diagramme <strong>uc</strong> avec les relations <em>include</em> (obligatoire) et <em>extend</em> (optionnel).',
          'Étape 3 — Décomposer en blocs : identifier les sous-systèmes (chaîne d\'énergie, chaîne d\'information).<br/>Tracer le <strong>bdd</strong> pour la hiérarchie, puis le <strong>ibd</strong> pour les flux internes (matière, énergie, information).',
          'Étape 4 — Décrire le comportement : pour les systèmes séquentiels, utiliser le <strong>stm</strong> (diagramme d\'états) pour les modes de fonctionnement et les transitions entre états.'
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
  },

  /* -------------------------------------------------------
     2. Cinématique du solide
     ------------------------------------------------------- */
  {
    id: 'si-1re-cinematique',
    level: 2, subject: 'si',
    icon: '🔄',
    title: 'Cinématique du solide',
    subtitle: 'Vitesse, accélération, mouvements de translation et rotation',
    keywords: ['Vitesse', 'Accélération', 'Trajectoire', 'Mouvement', 'Translation', 'Rotation'],
    physics: 'La cinématique est au cœur de l\'étude des mécanismes : bras robotisé, système bielle-manivelle, convoyeur industriel. Comprendre les mouvements permet de dimensionner les actionneurs.',

    cours: {
      intro: 'La <strong>cinématique</strong> est l\'étude du mouvement des corps sans considérer les forces qui le produisent.<br/><br/>En translation rectiligne, la position se repère par $x(t)$. La vitesse est la dérivée de la position : $v(t) = \\dfrac{dx}{dt}$ et l\'accélération est la dérivée de la vitesse : $a(t) = \\dfrac{dv}{dt} = \\dfrac{d^2x}{dt^2}$.<br/><br/>En rotation autour d\'un axe fixe, on utilise l\'angle $\\theta(t)$. La vitesse angulaire est $\\omega(t) = \\dfrac{d\\theta}{dt}$ et l\'accélération angulaire $\\alpha(t) = \\dfrac{d\\omega}{dt}$.<br/><br/>Le lien fondamental entre translation et rotation pour un point à distance $R$ de l\'axe est : $v = R \\cdot \\omega$.<br/><br/>En mouvement circulaire uniforme, l\'accélération centripète vaut $a_n = \\dfrac{v^2}{R} = R\\omega^2$ et est dirigée vers le centre.',
      definitions: [
        { term: 'Translation rectiligne', def: 'Mouvement où tous les points du solide ont la même vitesse à chaque instant. La trajectoire de chaque point est un segment de droite.' },
        { term: 'Rotation autour d\'un axe fixe', def: 'Mouvement où tous les points décrivent des arcs de cercle centrés sur l\'axe. Chaque point a la même vitesse angulaire $\\omega(t)$.' },
        { term: 'Mouvement Rectiligne Uniforme (MRU)', def: 'Vitesse constante, accélération nulle : $v = \\text{cte}$, $a = 0$. La position varie linéairement : $x = x_0 + vt$.' },
        { term: 'Mouvement Rectiligne Uniformément Accéléré (MRUA)', def: 'Accélération constante non nulle. La vitesse varie linéairement et la position de manière quadratique avec le temps.' }
      ],
      method: {
        title: 'Résoudre un problème de cinématique',
        steps: [
          'Étape 1 — Identifier le type de mouvement : translation ou rotation ? Uniforme ($a = 0$) ou uniformément accéléré ($a = \\text{cte} \\neq 0$) ?<br/>Astuce : si la vitesse change, c\'est un MRUA ; si elle est constante, c\'est un MRU.',
          'Étape 2 — Choisir les formules adaptées :<br/>MRUA en translation : $v = v_0 + at$ et $x = x_0 + v_0 t + \\frac{1}{2}at^2$.<br/>MRUA en rotation : $\\omega = \\omega_0 + \\alpha t$ et $\\theta = \\theta_0 + \\omega_0 t + \\frac{1}{2}\\alpha t^2$.<br/>Relation sans le temps : $v^2 = v_0^2 + 2a(x - x_0)$.',
          'Étape 3 — Identifier les données et l\'inconnue dans l\'énoncé.<br/>Repérer $v_0$, $a$, $t$, $x_0$ et écrire l\'équation avec une seule inconnue.',
          'Étape 4 — Calculer et vérifier : résoudre numériquement, vérifier l\'homogénéité des unités (m, m/s, m/s², rad, rad/s) et le signe du résultat.'
        ]
      },
      example: {
        statement: 'Un chariot part du repos ($v_0 = 0$) et accélère uniformément à $a = 2$ m/s² pendant $t = 5$ s. Calculer sa vitesse finale et la distance parcourue.',
        steps: [
          'Mouvement uniformément accéléré en translation ($a = 2$ m/s², $v_0 = 0$, $x_0 = 0$).',
          'Vitesse finale : $v = v_0 + at = 0 + 2 \\times 5 = 10$ m/s.',
          'Distance parcourue : $x = x_0 + v_0 t + \\frac{1}{2}at^2 = 0 + 0 + \\frac{1}{2} \\times 2 \\times 5^2 = 25$ m.',
          'Vérification avec $v^2 = v_0^2 + 2a(x - x_0)$ : $10^2 = 0 + 2 \\times 2 \\times 25 = 100$ ✓.'
        ],
        answer: '$v = 10$ m/s et $x = 25$ m.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><td style="border:1px solid var(--border);padding:8px"><strong>Grandeur</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>MRU</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>MRUA</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Rotation uniforme</strong></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Position</td><td style="border:1px solid var(--border);padding:8px">$x = x_0 + vt$</td><td style="border:1px solid var(--border);padding:8px">$x = x_0 + v_0 t + \\frac{1}{2}at^2$</td><td style="border:1px solid var(--border);padding:8px">$\\theta = \\theta_0 + \\omega t$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Vitesse</td><td style="border:1px solid var(--border);padding:8px">$v = \\text{cte}$</td><td style="border:1px solid var(--border);padding:8px">$v = v_0 + at$</td><td style="border:1px solid var(--border);padding:8px">$v = R\\omega$ (cte)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Accélération</td><td style="border:1px solid var(--border);padding:8px">$a = 0$</td><td style="border:1px solid var(--border);padding:8px">$a = \\text{cte}$</td><td style="border:1px solid var(--border);padding:8px">$a_n = R\\omega^2$ (centripète)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Sans le temps</td><td style="border:1px solid var(--border);padding:8px">—</td><td style="border:1px solid var(--border);padding:8px">$v^2 = v_0^2 + 2a\\Delta x$</td><td style="border:1px solid var(--border);padding:8px">—</td></tr></table>',
      formulas: [
        '$v = v_0 + at$ (vitesse en MRUA)',
        '$x = x_0 + v_0 t + \\dfrac{1}{2}at^2$ (position en MRUA)',
        '$v^2 = v_0^2 + 2a(x - x_0)$ (relation sans le temps)',
        '$v = R \\cdot \\omega$ (lien vitesse linéaire / vitesse angulaire)',
        '$a_n = \\dfrac{v^2}{R} = R\\omega^2$ (accélération centripète en mouvement circulaire)',
        '$\\omega = \\dfrac{2\\pi N}{60}$ (conversion tours/min → rad/s)'
      ],
      recap: [
        'La vitesse est la dérivée de la position : $v = dx/dt$. L\'accélération est la dérivée de la vitesse : $a = dv/dt$.',
        'En MRUA : $v$ varie linéairement et $x$ quadratiquement avec le temps.',
        'Le lien translation-rotation est $v = R\\omega$ : un point à distance $R$ de l\'axe a une vitesse proportionnelle à $\\omega$.',
        'En mouvement circulaire uniforme, l\'accélération centripète $a_n = R\\omega^2$ est dirigée vers le centre.'
      ],
      piege: 'La relation $v = R\\omega$ n\'est valable que si $\\omega$ est en <strong>rad/s</strong> (pas en tours/min). Pour convertir : $\\omega_{\\text{rad/s}} = \\dfrac{2\\pi \\times N_{\\text{tr/min}}}{60}$. Oublier cette conversion est l\'erreur la plus fréquente en cinématique !'
    },

    quiz: [
      {
        q: 'Un mobile part du repos et accélère à $a = 3$ m/s² pendant $4$ s. Quelle distance a-t-il parcourue ?',
        options: ['$12$ m', '$24$ m', '$36$ m', '$48$ m'],
        answer: 1,
        correction: 'On utilise $x = v_0 t + \\frac{1}{2}at^2 = 0 + \\frac{1}{2} \\times 3 \\times 4^2 = \\frac{1}{2} \\times 3 \\times 16 = 24$ m.<br/>La vitesse finale est $v = 0 + 3 \\times 4 = 12$ m/s. On vérifie : $v^2 = 2a \\cdot x \\Rightarrow 144 = 2 \\times 3 \\times 24 = 144$ ✓.'
      },
      {
        q: 'Un moteur tourne à $N = 3000$ tr/min. Sa vitesse angulaire en rad/s est environ :',
        options: ['$50$ rad/s', '$100\\pi \\approx 314$ rad/s', '$3000$ rad/s', '$500$ rad/s'],
        answer: 1,
        correction: '$\\omega = \\dfrac{2\\pi \\times N}{60} = \\dfrac{2\\pi \\times 3000}{60} = 100\\pi \\approx 314$ rad/s.<br/>C\'est la conversion indispensable : on divise par $60$ (minutes → secondes) et on multiplie par $2\\pi$ (tours → radians).'
      },
      {
        q: 'Un disque de rayon $R = 0{,}5$ m tourne à $\\omega = 10$ rad/s. L\'accélération centripète d\'un point de sa périphérie vaut :',
        options: ['$5$ m/s²', '$50$ m/s²', '$20$ m/s²', '$100$ m/s²'],
        answer: 1,
        correction: '$a_n = R\\omega^2 = 0{,}5 \\times 10^2 = 0{,}5 \\times 100 = 50$ m/s².<br/>Cette accélération est dirigée vers le centre du disque. La vitesse linéaire du point est $v = R\\omega = 0{,}5 \\times 10 = 5$ m/s.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { name: 'un tapis de convoyeur', v0_range: [0, 0], a_range: [0.5, 3.0] },
          { name: 'un chariot de manutention', v0_range: [0, 4], a_range: [1.0, 4.0] },
          { name: 'un véhicule électrique', v0_range: [0, 10], a_range: [1.0, 5.0] },
          { name: 'un ascenseur', v0_range: [0, 0], a_range: [0.5, 2.0] }
        ]);
        const a = randFloat(scenario.a_range[0], scenario.a_range[1], 1);
        const t = rand(3, 10);
        const v0 = rand(scenario.v0_range[0], scenario.v0_range[1]);
        const vf = parseFloat((v0 + a * t).toFixed(1));
        const x = parseFloat((v0 * t + 0.5 * a * t * t).toFixed(1));

        const askWhat = pick(['velocity', 'distance']);

        if (askWhat === 'velocity') {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} démarre avec une vitesse initiale $v_0 = ${v0}$ m/s et accélère uniformément à $a = ${a.toFixed(1).replace('.', '{,}')}$ m/s² pendant $t = ${t}$ s. Calcule sa vitesse finale $v$ (en m/s).`,
            answer: vf,
            tolerance: 0.2,
            unit: 'm/s',
            hint: 'Utilise la formule du MRUA : $v = v_0 + at$. Remplace chaque grandeur par sa valeur numérique.',
            solution: [
              'On identifie un mouvement rectiligne uniformément accéléré (MRUA).',
              'Formule applicable : $v = v_0 + at$',
              `$v = ${v0} + ${a.toFixed(1).replace('.', '{,')} \\times ${t}$`,
              `$v = ${v0} + ${(a * t).toFixed(1).replace('.', '{,')} = ${vf.toString().replace('.', '{,')}$ m/s`
            ]
          };
        } else {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} démarre avec une vitesse initiale $v_0 = ${v0}$ m/s et accélère uniformément à $a = ${a.toFixed(1).replace('.', '{,}')}$ m/s² pendant $t = ${t}$ s. Calcule la distance parcourue $x$ (en m).`,
            answer: x,
            tolerance: 0.5,
            unit: 'm',
            hint: 'Utilise la formule du MRUA : $x = v_0 t + \\frac{1}{2}at^2$. Attention à bien calculer le terme $\\frac{1}{2}at^2$ séparément.',
            solution: [
              'On identifie un mouvement rectiligne uniformément accéléré (MRUA).',
              'Formule applicable : $x = v_0 t + \\dfrac{1}{2}at^2$',
              `$x = ${v0} \\times ${t} + \\dfrac{1}{2} \\times ${a.toFixed(1).replace('.', '{,')} \\times ${t}^2$`,
              `$x = ${(v0 * t).toFixed(1).replace('.', '{,')} + ${(0.5 * a * t * t).toFixed(1).replace('.', '{,')} = ${x.toString().replace('.', '{,')}$ m`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un convoyeur industriel transporte des colis sur une distance de $d = 6$ m. Le tapis du convoyeur est entraîné par un moteur dont l\'arbre de sortie est relié à un rouleau de rayon $R = 0{,}05$ m. Le tapis démarre du repos et accélère uniformément jusqu\'à une vitesse de croisière de $v = 1{,}2$ m/s atteinte en $t_1 = 3$ s.',
      tasks: [
        'Calculer l\'accélération $a$ du tapis pendant la phase de démarrage.',
        'Calculer la vitesse angulaire $\\omega$ du rouleau en régime de croisière.',
        'Calculer le temps total pour parcourir les $6$ m (phase d\'accélération + phase à vitesse constante).'
      ],
      solutions: [
        '$a = \\dfrac{v - v_0}{t_1} = \\dfrac{1{,}2 - 0}{3} = 0{,}4$ m/s².',
        '$\\omega = \\dfrac{v}{R} = \\dfrac{1{,}2}{0{,}05} = 24$ rad/s.',
        'Distance pendant l\'accélération : $d_1 = \\frac{1}{2}at_1^2 = \\frac{1}{2} \\times 0{,}4 \\times 9 = 1{,}8$ m. Distance restante : $d_2 = 6 - 1{,}8 = 4{,}2$ m. Temps à vitesse constante : $t_2 = \\dfrac{d_2}{v} = \\dfrac{4{,}2}{1{,}2} = 3{,}5$ s. Temps total : $t = t_1 + t_2 = 3 + 3{,}5 = 6{,}5$ s.'
      ],
      finalAnswer: '$a = 0{,}4$ m/s², $\\omega = 24$ rad/s, temps total $= 6{,}5$ s.'
    },

    evaluation: {
      title: 'Évaluation — Cinématique du solide',
      duration: '20 min',
      questions: [
        {
          statement: 'Un véhicule roule à $v_0 = 20$ m/s et freine avec une décélération $a = -4$ m/s². Au bout de combien de temps s\'arrête-t-il ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0.1,
          unit: 's',
          points: 2,
          correction: 'À l\'arrêt, $v = 0$. On utilise $v = v_0 + at$ : $0 = 20 + (-4)t \\Rightarrow t = \\dfrac{20}{4} = 5$ s.'
        },
        {
          statement: 'Quelle est la distance de freinage du véhicule précédent ($v_0 = 20$ m/s, $a = -4$ m/s²) ?',
          type: 'numeric',
          answer: 50,
          tolerance: 0.5,
          unit: 'm',
          points: 2,
          correction: '$v^2 = v_0^2 + 2a \\cdot d \\Rightarrow 0 = 400 + 2 \\times (-4) \\times d \\Rightarrow d = \\dfrac{400}{8} = 50$ m.'
        },
        {
          statement: 'La relation $v = R\\omega$ est valable lorsque :',
          type: 'multiple-choice',
          options: [
            '$\\omega$ est exprimé en tours/min',
            '$\\omega$ est exprimé en rad/s et $R$ en mètres',
            '$v$ est exprimé en km/h',
            '$R$ est exprimé en cm'
          ],
          answer: 1,
          points: 2,
          correction: 'La relation $v = R\\omega$ n\'est valable qu\'avec les unités SI : $v$ en m/s, $R$ en m et $\\omega$ en rad/s. Toute autre unité nécessite une conversion préalable.'
        },
        {
          statement: 'Un moteur tourne à $N = 1500$ tr/min. Calculer sa vitesse angulaire $\\omega$ en rad/s (arrondir à l\'entier).',
          type: 'numeric',
          answer: 157,
          tolerance: 1,
          unit: 'rad/s',
          points: 2,
          correction: '$\\omega = \\dfrac{2\\pi \\times 1500}{60} = 50\\pi \\approx 157$ rad/s.'
        },
        {
          statement: 'Un point situé à $R = 0{,}3$ m de l\'axe d\'un disque tournant à $\\omega = 20$ rad/s subit une accélération centripète de :',
          type: 'numeric',
          answer: 120,
          tolerance: 1,
          unit: 'm/s²',
          points: 2,
          correction: '$a_n = R\\omega^2 = 0{,}3 \\times 20^2 = 0{,}3 \\times 400 = 120$ m/s². Cette accélération est dirigée vers le centre de rotation.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     3. Statique : PFS
     ------------------------------------------------------- */
  {
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
  },

  /* -------------------------------------------------------
     4. Circuits logiques et algèbre de Boole
     ------------------------------------------------------- */
  {
    id: 'si-1re-logique-boole',
    level: 2, subject: 'si',
    icon: '🔲',
    title: 'Circuits logiques et algèbre de Boole',
    subtitle: 'Opérateurs ET, OU, NON, tables de vérité, lois de De Morgan',
    keywords: ['ET', 'OU', 'NON', 'Table de vérité', 'Logigramme', 'De Morgan'],
    physics: 'Les circuits logiques sont la base de tout système numérique : automates programmables, microcontrôleurs, FPGA. Chaque décision d\'un système automatisé repose sur des opérations logiques.',

    cours: {
      intro: 'L\'<strong>algèbre de Boole</strong> est le fondement mathématique des circuits numériques. Elle manipule des variables qui ne prennent que deux valeurs : $0$ (faux) ou $1$ (vrai).<br/><br/>Les <strong>3 opérateurs de base</strong> sont :<br/>- <strong>ET</strong> (AND) noté $A \\cdot B$ : vaut $1$ si les deux entrées sont à $1$<br/>- <strong>OU</strong> (OR) noté $A + B$ : vaut $1$ si au moins une entrée est à $1$<br/>- <strong>NON</strong> (NOT) noté $\\overline{A}$ : inverse la valeur<br/><br/>À partir de ces opérateurs, on construit les portes dérivées : <strong>NAND</strong> ($\\overline{A \\cdot B}$), <strong>NOR</strong> ($\\overline{A + B}$), <strong>XOR</strong> ($A \\oplus B$).<br/><br/>Les <strong>lois de De Morgan</strong> permettent de simplifier les expressions :<br/>$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$ et $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$.<br/><br/>Simplifier une expression réduit le nombre de portes dans le circuit, ce qui diminue le coût et la consommation.',
      definitions: [
        { term: 'Variable booléenne', def: 'Variable qui ne prend que deux valeurs : $0$ (faux, niveau bas) ou $1$ (vrai, niveau haut). Exemple : un interrupteur est ouvert ($0$) ou fermé ($1$).' },
        { term: 'Table de vérité', def: 'Tableau listant toutes les combinaisons possibles des entrées ($2^n$ lignes pour $n$ entrées) et la valeur de la sortie correspondante.' },
        { term: 'Porte logique', def: 'Composant électronique élémentaire réalisant une opération booléenne (ET, OU, NON, NAND, NOR, XOR). Le logigramme est le schéma d\'assemblage de portes.' },
        { term: 'Lois de De Morgan', def: '$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$ (le complément d\'un ET = OU des compléments) et $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ (le complément d\'un OU = ET des compléments).' }
      ],
      method: {
        title: 'Analyser ou simplifier une expression logique',
        steps: [
          'Étape 1 — Écrire l\'expression booléenne : traduire le cahier des charges en opérateurs.<br/>Exemple : « la pompe fonctionne si le niveau est bas ET le bouton est appuyé » → $S = N \\cdot B$.',
          'Étape 2 — Construire la table de vérité : lister les $2^n$ combinaisons des $n$ entrées.<br/>Calculer la sortie pour chaque ligne en appliquant l\'expression.',
          'Étape 3 — Simplifier avec les propriétés algébriques :<br/>Absorption : $A + A \\cdot B = A$ ; Complémentarité : $A + \\overline{A} = 1$ ; De Morgan pour transformer ET ↔ OU.',
          'Étape 4 — Tracer le logigramme : dessiner le circuit avec les portes logiques correspondant à l\'expression simplifiée.'
        ]
      },
      example: {
        statement: 'Simplifier l\'expression $S = \\overline{\\overline{A} \\cdot \\overline{B}}$ en utilisant De Morgan.',
        steps: [
          'Appliquer De Morgan : $\\overline{X \\cdot Y} = \\overline{X} + \\overline{Y}$ avec $X = \\overline{A}$ et $Y = \\overline{B}$.',
          '$S = \\overline{\\overline{A}} + \\overline{\\overline{B}}$.',
          'Or $\\overline{\\overline{A}} = A$ et $\\overline{\\overline{B}} = B$ (double complémentation).',
          'Donc $S = A + B$ : une simple porte OU remplace la porte NAND avec inverseurs.'
        ],
        answer: '$S = A + B$ (une simple porte OU).'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><td style="border:1px solid var(--border);padding:8px"><strong>$A$</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>$B$</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>AND</strong><br/>$A \\cdot B$</td><td style="border:1px solid var(--border);padding:8px"><strong>OR</strong><br/>$A + B$</td><td style="border:1px solid var(--border);padding:8px"><strong>XOR</strong><br/>$A \\oplus B$</td><td style="border:1px solid var(--border);padding:8px"><strong>NAND</strong><br/>$\\overline{A \\cdot B}$</td><td style="border:1px solid var(--border);padding:8px"><strong>NOR</strong><br/>$\\overline{A + B}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$0$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$0$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td></tr></table>',
      formulas: [
        '$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$ (1ère loi de De Morgan)',
        '$\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ (2ème loi de De Morgan)',
        '$A + A \\cdot B = A$ (absorption)',
        '$A \\cdot (A + B) = A$ (absorption)',
        '$A \\oplus B = A \\cdot \\overline{B} + \\overline{A} \\cdot B$ (OU exclusif / XOR)'
      ],
      recap: [
        'Les trois opérateurs de base (ET, OU, NON) permettent de construire n\'importe quelle fonction logique.',
        'Les lois de De Morgan transforment un ET en OU (et vice versa) en complémentant les variables et le résultat.',
        'La simplification réduit le nombre de portes logiques et optimise le circuit.',
        'Pour $n$ entrées, la table de vérité comporte $2^n$ lignes.'
      ],
      piege: 'Ne pas confondre <strong>OU logique</strong> ($A + B$) et <strong>OU exclusif</strong> ($A \\oplus B$). Le OU vaut $1$ si au moins une entrée est à $1$ (y compris quand les deux le sont). Le XOR vaut $1$ uniquement si <strong>exactement une</strong> entrée est à $1$. Pour $A = 1, B = 1$ : $A + B = 1$ mais $A \\oplus B = 0$.'
    },

    quiz: [
      {
        q: 'Appliquer la 1ère loi de De Morgan : $\\overline{A \\cdot B \\cdot C}$ est équivalent à :',
        options: [
          '$\\overline{A} \\cdot \\overline{B} \\cdot \\overline{C}$',
          '$\\overline{A} + \\overline{B} + \\overline{C}$',
          '$A + B + C$',
          '$\\overline{A + B + C}$'
        ],
        answer: 1,
        correction: 'La 1ère loi de De Morgan se généralise : $\\overline{A \\cdot B \\cdot C} = \\overline{A} + \\overline{B} + \\overline{C}$. Le complément d\'un produit (ET) est la somme (OU) des compléments. Cela fonctionne pour un nombre quelconque de variables.'
      },
      {
        q: 'Simplifier $S = A + \\overline{A} \\cdot B$ :',
        options: [
          '$A \\cdot B$',
          '$A + B$',
          '$B$',
          '$A$'
        ],
        answer: 1,
        correction: 'On développe : si $A = 1$, alors $S = 1 + 0 = 1$. Si $A = 0$, alors $S = 0 + 1 \\cdot B = B$. Donc $S = 1$ quand $A = 1$ OU $B = 1$ : $S = A + B$.<br/>Preuve algébrique : $A + \\overline{A} \\cdot B = (A + \\overline{A}) \\cdot (A + B) = 1 \\cdot (A + B) = A + B$ (distributivité du $+$ sur le $\\cdot$).'
      },
      {
        q: 'Un circuit à $4$ entrées nécessite une table de vérité de combien de lignes ?',
        options: ['$4$', '$8$', '$16$', '$32$'],
        answer: 2,
        correction: 'Pour $n$ entrées, il y a $2^n$ combinaisons possibles. Avec $n = 4$ : $2^4 = 16$ lignes. Chaque entrée peut valoir $0$ ou $1$, ce qui donne $2 \\times 2 \\times 2 \\times 2 = 16$ combinaisons.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = pick([0, 1]);
        const b = pick([0, 1]);
        const c = pick([0, 1]);

        const expressions = [
          {
            name: 'ET-OU',
            tex: `(A \\cdot B) + C`,
            compute: (a, b, c) => (a & b) | c,
            steps: (a, b, c) => {
              const ab = a & b;
              const result = ab | c;
              return [
                `Calcul du ET : $A \\cdot B = ${a} \\cdot ${b} = ${ab}$`,
                `Calcul du OU : $(A \\cdot B) + C = ${ab} + ${c} = ${result}$`,
                `Donc $S = ${result}$`
              ];
            }
          },
          {
            name: 'OU-ET',
            tex: `(A + B) \\cdot C`,
            compute: (a, b, c) => (a | b) & c,
            steps: (a, b, c) => {
              const aob = a | b;
              const result = aob & c;
              return [
                `Calcul du OU : $A + B = ${a} + ${b} = ${aob}$`,
                `Calcul du ET : $(A + B) \\cdot C = ${aob} \\cdot ${c} = ${result}$`,
                `Donc $S = ${result}$`
              ];
            }
          },
          {
            name: 'NAND-OU',
            tex: `\\overline{A \\cdot B} + C`,
            compute: (a, b, c) => ((a & b) ^ 1) | c,
            steps: (a, b, c) => {
              const ab = a & b;
              const nand = ab ^ 1;
              const result = nand | c;
              return [
                `Calcul du ET : $A \\cdot B = ${a} \\cdot ${b} = ${ab}$`,
                `Complémentation (NAND) : $\\overline{${ab}} = ${nand}$`,
                `Calcul du OU : $${nand} + ${c} = ${result}$`,
                `Donc $S = ${result}$`
              ];
            }
          },
          {
            name: 'XOR-ET',
            tex: `(A \\oplus B) \\cdot C`,
            compute: (a, b, c) => (a ^ b) & c,
            steps: (a, b, c) => {
              const xor = a ^ b;
              const result = xor & c;
              return [
                `Calcul du XOR : $A \\oplus B = ${a} \\oplus ${b} = ${xor}$ (vaut $1$ si exactement une entrée vaut $1$)`,
                `Calcul du ET : $(A \\oplus B) \\cdot C = ${xor} \\cdot ${c} = ${result}$`,
                `Donc $S = ${result}$`
              ];
            }
          }
        ];

        const expr = pick(expressions);
        const result = expr.compute(a, b, c);

        return {
          statement: `Calcule la sortie $S = ${expr.tex}$ pour $A = ${a}$, $B = ${b}$ et $C = ${c}$.`,
          answer: result,
          tolerance: 0,
          unit: '',
          hint: `Procède par étapes : calcule d'abord l'opération entre parenthèses, puis applique l'opération extérieure. Rappel : ET → les deux à $1$, OU → au moins un à $1$, XOR → exactement un à $1$.`,
          solution: expr.steps(a, b, c)
        };
      }
    },

    probleme: {
      context: 'Un système de sécurité pour une presse industrielle comporte deux boutons-poussoirs ($A$ et $B$) que l\'opérateur doit appuyer simultanément (commande bimanuelle) et un capteur de protection ($C$) qui vaut $1$ si le carter est fermé. La presse ne doit fonctionner ($S = 1$) que si les deux mains sont sur les boutons ET le carter est fermé.',
      tasks: [
        'Écrire l\'expression logique de la sortie $S$ en fonction de $A$, $B$ et $C$.',
        'Construire la table de vérité complète ($8$ lignes).',
        'Si on ajoute un bouton d\'arrêt d\'urgence $U$ ($U = 1$ quand l\'arrêt est activé), modifier l\'expression pour que $S = 0$ dès que $U = 1$. Simplifier en utilisant De Morgan.'
      ],
      solutions: [
        '$S = A \\cdot B \\cdot C$. La presse fonctionne uniquement si les trois conditions sont réunies (ET logique à trois entrées).',
        'Table de vérité :\n$A=0, B=0, C=0 \\to S=0$ | $A=0, B=0, C=1 \\to S=0$ | $A=0, B=1, C=0 \\to S=0$ | $A=0, B=1, C=1 \\to S=0$\n$A=1, B=0, C=0 \\to S=0$ | $A=1, B=0, C=1 \\to S=0$ | $A=1, B=1, C=0 \\to S=0$ | $A=1, B=1, C=1 \\to S=1$\nUne seule ligne donne $S = 1$ : quand les trois entrées sont à $1$.',
        '$S = A \\cdot B \\cdot C \\cdot \\overline{U}$. Quand $U = 1$ (arrêt activé), $\\overline{U} = 0$ donc $S = 0$ quelles que soient les autres entrées. Par De Morgan, on peut aussi écrire : $\\overline{S} = \\overline{A} + \\overline{B} + \\overline{C} + U$ (au moins une condition non remplie → pas de fonctionnement).'
      ],
      finalAnswer: '$S = A \\cdot B \\cdot C \\cdot \\overline{U}$. La presse ne fonctionne que si $A = B = C = 1$ et $U = 0$.'
    },

    evaluation: {
      title: 'Évaluation — Circuits logiques et algèbre de Boole',
      duration: '20 min',
      questions: [
        {
          statement: 'Combien de lignes comporte une table de vérité pour $4$ entrées ?',
          type: 'numeric',
          answer: 16,
          tolerance: 0,
          unit: '',
          points: 1,
          correction: '$2^4 = 16$ lignes.'
        },
        {
          statement: 'Simplifier $\\overline{\\overline{A} + \\overline{B}}$ en utilisant De Morgan :',
          type: 'multiple-choice',
          options: ['$A + B$', '$A \\cdot B$', '$\\overline{A} \\cdot \\overline{B}$', '$\\overline{A \\cdot B}$'],
          answer: 1,
          points: 3,
          correction: 'Par De Morgan : $\\overline{X + Y} = \\overline{X} \\cdot \\overline{Y}$ avec $X = \\overline{A}$ et $Y = \\overline{B}$. Donc $S = \\overline{\\overline{A}} \\cdot \\overline{\\overline{B}} = A \\cdot B$.'
        },
        {
          statement: 'Quelle est la sortie de la porte XOR pour $A = 1$ et $B = 1$ ?',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'XOR : $A \\oplus B = 1$ uniquement si exactement une entrée vaut $1$. Ici $A = B = 1$, donc $A \\oplus B = 0$. C\'est la différence clé avec le OU inclusif qui donnerait $1$.'
        },
        {
          statement: 'L\'expression $S = A \\cdot B + A \\cdot \\overline{B}$ se simplifie en :',
          type: 'multiple-choice',
          options: ['$A \\cdot B$', '$A + B$', '$A$', '$B$'],
          answer: 2,
          points: 2,
          correction: 'Factorisation : $S = A \\cdot (B + \\overline{B}) = A \\cdot 1 = A$. La variable $B$ n\'influence pas le résultat quand $A$ est mise en facteur.'
        },
        {
          statement: 'Pour $A = 0$, $B = 1$, $C = 1$, calculer $S = (A + B) \\cdot \\overline{C}$.',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$A + B = 0 + 1 = 1$. $\\overline{C} = \\overline{1} = 0$. Donc $S = 1 \\cdot 0 = 0$. Le ET avec $\\overline{C} = 0$ force la sortie à $0$.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     5. Asservissement et régulation (introduction)
     ------------------------------------------------------- */
  {
    id: 'si-1re-asservissement',
    level: 2, subject: 'si',
    icon: '🎯',
    title: 'Asservissement et régulation',
    subtitle: 'Boucle ouverte, boucle fermée, consigne, mesure, écart',
    keywords: ['Consigne', 'Mesure', 'Écart', 'Boucle fermée', 'Correcteur'],
    physics: 'L\'asservissement est omniprésent : régulation de vitesse (cruise control), thermostat, pilote automatique, stabilisation de drone. Tout système qui corrige automatiquement une erreur utilise une boucle fermée.',

    cours: {
      intro: 'Un <strong>système asservi</strong> est un système capable de se corriger automatiquement pour que la grandeur de sortie suive la consigne imposée.<br/><br/><strong>Boucle ouverte</strong> : pas de retour d\'information. Si une perturbation survient, le système ne se corrige pas.<br/><br/><strong>Boucle fermée</strong> : un capteur mesure la sortie et la compare à la consigne. La structure est :<br/>Consigne $C$ → Comparateur → Correcteur → Actionneur → Système → Sortie $S$<br/>avec retour par le <strong>Capteur</strong> vers le Comparateur.<br/><br/>Le <strong>signal d\'erreur</strong> (écart) est $\\varepsilon = C - M$ où $M$ est la mesure du capteur. Le correcteur utilise cet écart pour ajuster la commande. L\'objectif est $\\varepsilon \\to 0$.<br/><br/>Un <strong>correcteur proportionnel</strong> de gain $K_p$ produit une commande $U = K_p \\cdot \\varepsilon$. Plus l\'écart est grand, plus la correction est forte.',
      definitions: [
        { term: 'Consigne ($C$)', def: 'Valeur souhaitée de la grandeur de sortie, imposée par l\'utilisateur. Exemple : température souhaitée $= 20°$C.' },
        { term: 'Mesure ($M$)', def: 'Valeur réelle de la sortie, captée par le capteur de retour. Elle peut différer de la consigne à cause de perturbations.' },
        { term: 'Signal d\'erreur ($\\varepsilon$)', def: 'Différence entre consigne et mesure : $\\varepsilon = C - M$. Si $\\varepsilon > 0$, la sortie est trop faible ; si $\\varepsilon < 0$, la sortie dépasse la consigne.' },
        { term: 'Correcteur proportionnel ($K_p$)', def: 'Correcteur qui multiplie l\'écart par un gain constant : $U = K_p \\cdot \\varepsilon$. Simple mais laisse une erreur statique résiduelle en régime permanent.' }
      ],
      method: {
        title: 'Analyser un système asservi',
        steps: [
          'Étape 1 — Identifier la structure : boucle ouverte (pas de capteur de retour) ou boucle fermée (avec retour) ?<br/>En boucle fermée, repérer les $5$ éléments : comparateur, correcteur, actionneur, système, capteur.',
          'Étape 2 — Identifier les grandeurs : quelle est la consigne $C$ ? Quelle est la mesure $M$ ? Quelles sont les unités ?<br/>Exemple : pour un régulateur de vitesse, $C$ = vitesse souhaitée (km/h), $M$ = vitesse mesurée.',
          'Étape 3 — Calculer l\'écart : $\\varepsilon = C - M$.<br/>Signe positif → la sortie est insuffisante → le correcteur doit augmenter la commande.<br/>Signe négatif → la sortie est excessive → le correcteur doit diminuer la commande.',
          'Étape 4 — Calculer la commande : pour un correcteur proportionnel, $U = K_p \\cdot \\varepsilon$.<br/>Vérifier que la commande est physiquement réalisable (pas de saturation de l\'actionneur).'
        ]
      },
      example: {
        statement: 'Un thermostat est réglé sur $C = 20°$C. Le capteur mesure $M = 18°$C. Le correcteur proportionnel a un gain $K_p = 50$ W/°C. Calculer l\'écart et la puissance de chauffe.',
        steps: [
          'Écart : $\\varepsilon = C - M = 20 - 18 = 2°$C.',
          'Commande (puissance de chauffe) : $P = K_p \\times \\varepsilon = 50 \\times 2 = 100$ W.',
          'Interprétation : la température est en dessous de la consigne ($\\varepsilon > 0$), le chauffage fournit $100$ W pour la faire monter.',
          'Quand la température atteindra $20°$C, $\\varepsilon = 0$ et $P = 0$ W : le chauffage s\'arrêtera.'
        ],
        answer: '$\\varepsilon = 2°$C et $P = 100$ W.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><td style="border:1px solid var(--border);padding:8px"><strong>Critère</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Boucle ouverte</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Boucle fermée</strong></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Capteur de retour</td><td style="border:1px solid var(--border);padding:8px">Absent</td><td style="border:1px solid var(--border);padding:8px">Présent</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Calcul d\'écart</td><td style="border:1px solid var(--border);padding:8px">Aucun</td><td style="border:1px solid var(--border);padding:8px">$\\varepsilon = C - M$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Correction auto.</td><td style="border:1px solid var(--border);padding:8px">Non</td><td style="border:1px solid var(--border);padding:8px">Oui</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Sensibilité aux perturbations</td><td style="border:1px solid var(--border);padding:8px">Forte (pas de correction)</td><td style="border:1px solid var(--border);padding:8px">Faible (correction auto.)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Précision</td><td style="border:1px solid var(--border);padding:8px">Faible</td><td style="border:1px solid var(--border);padding:8px">Élevée</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Risque d\'instabilité</td><td style="border:1px solid var(--border);padding:8px">Aucun</td><td style="border:1px solid var(--border);padding:8px">Possible (si $K_p$ trop grand)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Exemple</td><td style="border:1px solid var(--border);padding:8px">Grille-pain (minuterie)</td><td style="border:1px solid var(--border);padding:8px">Thermostat, cruise control</td></tr></table>',
      formulas: [
        '$\\varepsilon = C - M$ (écart = consigne − mesure)',
        '$U = K_p \\times \\varepsilon$ (commande du correcteur proportionnel)',
        'Boucle fermée : $C \\to [\\text{Comparateur}] \\to [\\text{Correcteur}] \\to [\\text{Actionneur}] \\to [\\text{Système}] \\to M$',
        'Objectif : $\\varepsilon \\to 0$ (la sortie rejoint la consigne)'
      ],
      recap: [
        'Un système en boucle fermée utilise un capteur pour mesurer la sortie et la comparer à la consigne.',
        'L\'écart $\\varepsilon = C - M$ quantifie l\'erreur entre ce qu\'on veut et ce qu\'on obtient.',
        'Le correcteur proportionnel ajuste la commande : $U = K_p \\cdot \\varepsilon$. Plus $K_p$ est grand, plus la réponse est rapide mais le risque d\'instabilité augmente.',
        'Un correcteur P seul laisse une erreur statique résiduelle. Pour l\'annuler, on ajoute une action intégrale (PI ou PID, vu en Terminale).'
      ],
      piege: 'Un correcteur proportionnel pur <strong>ne garantit pas</strong> un écart nul en régime permanent (il reste une erreur statique). Pour atteindre $\\varepsilon = 0$, il faut ajouter une action intégrale (correcteur PI ou PID, vu en Terminale). Augmenter $K_p$ réduit l\'erreur statique mais peut provoquer des oscillations voire l\'instabilité.'
    },

    quiz: [
      {
        q: 'Un système a une consigne $C = 50$ et une mesure $M = 53$. L\'écart $\\varepsilon$ vaut $-3$. Cela signifie que :',
        options: [
          'La sortie est insuffisante, le correcteur doit augmenter la commande',
          'La sortie dépasse la consigne, le correcteur doit diminuer la commande',
          'Le système est en panne',
          'Le capteur est défaillant'
        ],
        answer: 1,
        correction: '$\\varepsilon = C - M = 50 - 53 = -3$. L\'écart négatif signifie que la mesure <strong>dépasse</strong> la consigne : le correcteur doit réduire la commande pour ramener la sortie vers $50$.'
      },
      {
        q: 'Un correcteur proportionnel de gain $K_p = 10$ reçoit un écart $\\varepsilon = 4$. Si le gain passe à $K_p = 20$, la commande :',
        options: [
          'Reste à $40$',
          'Double et passe à $80$',
          'Diminue de moitié à $20$',
          'Est divisée par $4$'
        ],
        answer: 1,
        correction: 'Avec $K_p = 10$ : $U = 10 \\times 4 = 40$. Avec $K_p = 20$ : $U = 20 \\times 4 = 80$. La commande est <strong>proportionnelle</strong> au gain $K_p$ : doubler le gain double la commande pour un même écart.'
      },
      {
        q: 'Pourquoi un grille-pain avec minuterie est-il considéré comme un système en boucle ouverte ?',
        options: [
          'Parce qu\'il n\'a pas de capteur mesurant le degré de cuisson pour ajuster la durée',
          'Parce qu\'il ne consomme pas d\'énergie',
          'Parce qu\'il n\'a pas de consigne',
          'Parce qu\'il est trop simple pour être un système'
        ],
        answer: 0,
        correction: 'Le grille-pain fonctionne pendant une durée fixée (minuterie) sans mesurer le résultat (degré de cuisson). S\'il n\'y a pas de capteur de retour pour comparer la sortie à la consigne, le système est en <strong>boucle ouverte</strong>. Il ne peut pas corriger les perturbations (pain plus épais, température ambiante différente).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { name: 'un four industriel', consigne: 'température', unite: '°C', C_range: [100, 500], Kp_range: [5, 50], Kp_unit: 'W/°C' },
          { name: 'un régulateur de vitesse', consigne: 'vitesse', unite: 'km/h', C_range: [50, 130], Kp_range: [10, 100], Kp_unit: 'N/(km/h)' },
          { name: 'un système de remplissage', consigne: 'niveau', unite: 'cm', C_range: [20, 80], Kp_range: [2, 30], Kp_unit: 'L/(min·cm)' }
        ]);

        const C = rand(scenario.C_range[0], scenario.C_range[1]);
        const ecart = rand(1, 15);
        const M_val = C - ecart;
        const Kp = rand(scenario.Kp_range[0], scenario.Kp_range[1]);
        const commande = Kp * ecart;

        const askWhat = pick(['ecart', 'commande', 'mesure']);

        if (askWhat === 'ecart') {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} est asservi en ${scenario.consigne}. La consigne est $C = ${C}$ ${scenario.unite} et la mesure est $M = ${M_val}$ ${scenario.unite}. Calcule l'écart $\\varepsilon$.`,
            answer: ecart,
            tolerance: 0,
            unit: scenario.unite,
            hint: 'L\'écart est la différence entre la consigne et la mesure : $\\varepsilon = C - M$.',
            solution: [
              'On identifie les grandeurs : $C = ' + C + '$ ' + scenario.unite + ' et $M = ' + M_val + '$ ' + scenario.unite + '.',
              'Formule : $\\varepsilon = C - M$',
              '$\\varepsilon = ' + C + ' - ' + M_val + ' = ' + ecart + '$ ' + scenario.unite
            ]
          };
        } else if (askWhat === 'commande') {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} utilise un correcteur proportionnel de gain $K_p = ${Kp}$ ${scenario.Kp_unit}. L'écart mesuré est $\\varepsilon = ${ecart}$ ${scenario.unite}. Calcule la commande $U$.`,
            answer: commande,
            tolerance: 0.5,
            unit: '',
            hint: 'La commande d\'un correcteur proportionnel est $U = K_p \\times \\varepsilon$.',
            solution: [
              'Formule du correcteur proportionnel : $U = K_p \\times \\varepsilon$',
              `$U = ${Kp} \\times ${ecart}$`,
              `$U = ${commande}$`
            ]
          };
        } else {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} a une consigne $C = ${C}$ ${scenario.unite} et un écart $\\varepsilon = ${ecart}$ ${scenario.unite}. Calcule la mesure $M$ du capteur.`,
            answer: M_val,
            tolerance: 0,
            unit: scenario.unite,
            hint: 'On sait que $\\varepsilon = C - M$. Donc $M = C - \\varepsilon$.',
            solution: [
              'On isole $M$ dans la formule de l\'écart : $\\varepsilon = C - M \\Rightarrow M = C - \\varepsilon$',
              `$M = ${C} - ${ecart}$`,
              `$M = ${M_val}$ ${scenario.unite}`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On étudie le système de régulation de température d\'une serre agricole. La consigne est $C = 25°$C. Le capteur de température mesure $M = 21°$C. Le correcteur proportionnel a un gain $K_p = 200$ W/°C. Le radiateur électrique a une puissance maximale de $1000$ W.',
      tasks: [
        'Calculer l\'écart $\\varepsilon$ et la commande de puissance théorique du correcteur.',
        'La puissance commandée dépasse-t-elle la puissance maximale du radiateur ? Que se passe-t-il physiquement ?',
        'Si la température monte à $M = 24°$C, recalculer l\'écart et la nouvelle commande. Commenter l\'évolution.'
      ],
      solutions: [
        '$\\varepsilon = C - M = 25 - 21 = 4°$C. Commande théorique : $P = K_p \\times \\varepsilon = 200 \\times 4 = 800$ W.',
        '$800$ W $< 1000$ W max : la puissance ne dépasse pas la limite, le radiateur peut fournir les $800$ W demandés. Si la commande avait dépassé $1000$ W, le radiateur serait en saturation ($P = 1000$ W max, l\'écart ne diminuerait pas aussi vite).',
        '$\\varepsilon = 25 - 24 = 1°$C. $P = 200 \\times 1 = 200$ W. La puissance décroît au fur et à mesure que la température se rapproche de la consigne : c\'est le principe même de la régulation proportionnelle. L\'écart a été divisé par $4$, la puissance aussi.'
      ],
      finalAnswer: 'Initialement : $\\varepsilon = 4°$C, $P = 800$ W. Après montée : $\\varepsilon = 1°$C, $P = 200$ W. La régulation réduit progressivement la puissance.'
    },

    evaluation: {
      title: 'Évaluation — Asservissement et régulation',
      duration: '20 min',
      questions: [
        {
          statement: 'Quel élément différencie une boucle fermée d\'une boucle ouverte ?',
          type: 'multiple-choice',
          options: [
            'La présence d\'un actionneur',
            'La présence d\'un capteur de retour et d\'un comparateur',
            'La présence d\'une consigne',
            'La présence d\'une perturbation'
          ],
          answer: 1,
          points: 2,
          correction: 'La boucle fermée ajoute un <strong>capteur de retour</strong> (qui mesure la sortie) et un <strong>comparateur</strong> (qui calcule $\\varepsilon = C - M$). C\'est ce retour d\'information qui permet la correction automatique.'
        },
        {
          statement: 'La consigne est $C = 100$ tr/min et la mesure est $M = 85$ tr/min. Calculer l\'écart $\\varepsilon$.',
          type: 'numeric',
          answer: 15,
          tolerance: 0,
          unit: 'tr/min',
          points: 2,
          correction: '$\\varepsilon = C - M = 100 - 85 = 15$ tr/min.'
        },
        {
          statement: 'Un correcteur proportionnel de gain $K_p = 0{,}5$ V/(tr/min) reçoit un écart de $15$ tr/min. Quelle est la tension de commande ?',
          type: 'numeric',
          answer: 7.5,
          tolerance: 0.1,
          unit: 'V',
          points: 3,
          correction: '$U = K_p \\times \\varepsilon = 0{,}5 \\times 15 = 7{,}5$ V.'
        },
        {
          statement: 'Un écart négatif ($\\varepsilon < 0$) signifie que :',
          type: 'multiple-choice',
          options: [
            'La mesure est inférieure à la consigne',
            'La mesure dépasse la consigne',
            'Le système est en panne',
            'Le capteur est défaillant'
          ],
          answer: 1,
          points: 1,
          correction: '$\\varepsilon = C - M < 0$ signifie $M > C$ : la sortie <strong>dépasse</strong> la consigne. Le correcteur doit réduire la commande.'
        },
        {
          statement: 'Dans un schéma-bloc d\'asservissement, l\'élément qui calcule $\\varepsilon = C - M$ s\'appelle :',
          type: 'multiple-choice',
          options: ['Le correcteur', 'L\'actionneur', 'Le comparateur', 'Le capteur'],
          answer: 2,
          points: 2,
          correction: 'Le <strong>comparateur</strong> (ou sommateur) effectue la soustraction $\\varepsilon = C - M$. Le correcteur utilise ensuite cet écart pour calculer la commande.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     6. Énergie et rendement des systèmes
     ------------------------------------------------------- */
  {
    id: 'si-1re-energie-rendement',
    level: 2, subject: 'si',
    icon: '🔋',
    title: 'Énergie et rendement des systèmes',
    subtitle: 'Formes d\'énergie, puissance, rendement, bilan énergétique',
    keywords: ['Énergie', 'Puissance', 'Rendement', 'Pertes', 'Conservation'],
    physics: 'L\'analyse énergétique est au cœur de la conception de tout système technique : moteur de véhicule électrique, chauffage, éclairage. Optimiser le rendement réduit la consommation et l\'impact environnemental.',

    cours: {
      intro: 'L\'<strong>énergie</strong> est la capacité d\'un système à produire un travail, un mouvement ou un transfert de chaleur. Elle existe sous plusieurs formes : cinétique, potentielle, électrique, thermique, chimique.<br/><br/>Le <strong>principe de conservation</strong> de l\'énergie stipule qu\'elle ne se crée ni ne se détruit, mais se transforme :<br/>$$P_{\\text{absorbée}} = P_{\\text{utile}} + P_{\\text{pertes}}$$<br/><br/>La <strong>puissance</strong> est le débit d\'énergie : $P = \\dfrac{E}{t}$ (en watts).<br/><br/>Le <strong>rendement</strong> $\\eta$ mesure l\'efficacité d\'une conversion : $\\eta = \\dfrac{P_{\\text{utile}}}{P_{\\text{absorbée}}}$. Il est toujours compris entre $0$ et $1$.<br/><br/>Ordres de grandeur industriels : un moteur électrique a un rendement de <strong>85 à 95 %</strong>, un moteur thermique seulement <strong>30 à 40 %</strong>, une LED environ <strong>40 %</strong>, un panneau solaire <strong>15 à 25 %</strong>.',
      definitions: [
        { term: 'Énergie cinétique ($E_c$)', def: 'Énergie liée au mouvement : $E_c = \\frac{1}{2}mv^2$. $m$ en kg, $v$ en m/s, $E_c$ en joules (J).' },
        { term: 'Énergie potentielle ($E_p$)', def: 'Énergie liée à la position en altitude : $E_p = mgh$. $h$ est la hauteur par rapport à une référence, $g \\approx 9{,}81$ m/s².' },
        { term: 'Puissance ($P$)', def: 'Taux de transfert d\'énergie : $P = \\dfrac{E}{t}$ (J/s = W). En électrique : $P = U \\times I$.' },
        { term: 'Rendement ($\\eta$)', def: 'Rapport entre puissance utile et puissance absorbée : $\\eta = \\dfrac{P_u}{P_a}$. Sans unité, toujours $\\leq 1$. Pour une chaîne : $\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\ldots$' }
      ],
      method: {
        title: 'Réaliser un bilan énergétique',
        steps: [
          'Étape 1 — Identifier les formes d\'énergie en entrée et en sortie.<br/>Exemple : moteur électrique → entrée : énergie électrique ($P = UI$) ; sortie utile : énergie mécanique ; pertes : chaleur (effet Joule, frottements).',
          'Étape 2 — Appliquer la conservation de l\'énergie :<br/>$P_{\\text{absorbée}} = P_{\\text{utile}} + P_{\\text{pertes}}$. Si on connaît deux grandeurs, on déduit la troisième.',
          'Étape 3 — Calculer le rendement :<br/>$\\eta = \\dfrac{P_{\\text{utile}}}{P_{\\text{absorbée}}}$ ou de façon équivalente $\\eta = 1 - \\dfrac{P_{\\text{pertes}}}{P_{\\text{absorbée}}}$.',
          'Étape 4 — Chaîne de rendements : pour plusieurs convertisseurs en série, le rendement global est le <strong>produit</strong> :<br/>$\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\ldots$ Ce résultat est toujours inférieur au plus petit rendement de la chaîne.'
        ]
      },
      example: {
        statement: 'Un moteur électrique absorbe une puissance $P_a = 500$ W et fournit une puissance mécanique utile $P_u = 400$ W. Calculer le rendement et les pertes.',
        steps: [
          'Rendement : $\\eta = \\dfrac{P_u}{P_a} = \\dfrac{400}{500} = 0{,}8 = 80\\%$.',
          'Pertes : $P_{\\text{pertes}} = P_a - P_u = 500 - 400 = 100$ W.',
          'Ces $100$ W sont dissipés sous forme de chaleur (effet Joule dans les bobinages, frottements mécaniques).'
        ],
        answer: '$\\eta = 0{,}8$ soit $80\\%$ et $P_{\\text{pertes}} = 100$ W.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><td style="border:1px solid var(--border);padding:8px"><strong>Forme d\'énergie</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Formule</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Unité</strong></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Cinétique</td><td style="border:1px solid var(--border);padding:8px">$E_c = \\frac{1}{2}mv^2$</td><td style="border:1px solid var(--border);padding:8px">J</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Potentielle de pesanteur</td><td style="border:1px solid var(--border);padding:8px">$E_p = mgh$</td><td style="border:1px solid var(--border);padding:8px">J</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Électrique</td><td style="border:1px solid var(--border);padding:8px">$E = U \\cdot I \\cdot t = P \\cdot t$</td><td style="border:1px solid var(--border);padding:8px">J (ou Wh)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Thermique</td><td style="border:1px solid var(--border);padding:8px">$Q = m \\cdot c \\cdot \\Delta T$</td><td style="border:1px solid var(--border);padding:8px">J</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Mécanique de rotation</td><td style="border:1px solid var(--border);padding:8px">$E = C \\cdot \\theta$ ou $P = C \\cdot \\omega$</td><td style="border:1px solid var(--border);padding:8px">J (ou W)</td></tr></table>',
      formulas: [
        '$E_c = \\dfrac{1}{2}mv^2$ (énergie cinétique)',
        '$E_p = mgh$ (énergie potentielle de pesanteur)',
        '$P = U \\times I$ (puissance électrique)',
        '$\\eta = \\dfrac{P_{\\text{utile}}}{P_{\\text{absorbée}}}$ (rendement)',
        '$P_{\\text{absorbée}} = P_{\\text{utile}} + P_{\\text{pertes}}$ (conservation)',
        '$\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\ldots$ (chaîne de rendements)'
      ],
      recap: [
        'L\'énergie se conserve : elle se transforme mais ne se crée ni ne se détruit.',
        'Le rendement $\\eta$ est toujours $\\leq 1$. Moteur électrique : $85$-$95\\%$ ; moteur thermique : $30$-$40\\%$.',
        'La puissance est le débit d\'énergie : $P = E/t$. Unité : watt (W).',
        'Pour des convertisseurs en série, le rendement global est le <strong>produit</strong> des rendements individuels.'
      ],
      piege: 'Ne pas confondre <strong>énergie</strong> (en joules, J) et <strong>puissance</strong> (en watts, W). L\'énergie est une quantité totale ($E = P \\times t$), la puissance est un débit instantané. Un appareil de faible puissance fonctionnant longtemps peut consommer plus d\'énergie qu\'un appareil puissant fonctionnant brièvement.'
    },

    quiz: [
      {
        q: 'Un moteur électrique ($\\eta_1 = 90\\%$) entraîne un réducteur ($\\eta_2 = 80\\%$). Le rendement global de la chaîne est :',
        options: ['$170\\%$', '$85\\%$', '$72\\%$', '$10\\%$'],
        answer: 2,
        correction: 'Pour des convertisseurs en série : $\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 = 0{,}9 \\times 0{,}8 = 0{,}72 = 72\\%$.<br/>Le rendement global est toujours inférieur au plus petit rendement individuel. On multiplie, on n\'additionne pas.'
      },
      {
        q: 'Un moteur thermique a un rendement typique de $35\\%$. S\'il consomme $P_a = 60$ kW de puissance chimique, la puissance mécanique utile et les pertes thermiques valent respectivement :',
        options: [
          '$P_u = 21$ kW et $P_{\\text{pertes}} = 39$ kW',
          '$P_u = 39$ kW et $P_{\\text{pertes}} = 21$ kW',
          '$P_u = 35$ kW et $P_{\\text{pertes}} = 25$ kW',
          '$P_u = 60$ kW et $P_{\\text{pertes}} = 0$ kW'
        ],
        answer: 0,
        correction: '$P_u = \\eta \\times P_a = 0{,}35 \\times 60 = 21$ kW. Pertes : $P_{\\text{pertes}} = P_a - P_u = 60 - 21 = 39$ kW.<br/>Un moteur thermique dissipe environ les 2/3 de l\'énergie sous forme de chaleur (gaz d\'échappement, refroidissement).'
      },
      {
        q: 'L\'unité SI de l\'énergie est le joule (J). Combien de joules représente $1$ kWh ?',
        options: ['$1000$ J', '$3600$ J', '$3{,}6 \\times 10^6$ J', '$3{,}6 \\times 10^9$ J'],
        answer: 2,
        correction: '$1$ kWh $= 1000$ W $\\times$ $3600$ s $= 3{,}6 \\times 10^6$ J $= 3{,}6$ MJ. Le kWh est une unité pratique (facture électrique) mais pas l\'unité SI.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { name: 'un moteur électrique industriel', eta_range: [80, 95], Pa_range: [500, 5000] },
          { name: 'un moteur de véhicule électrique', eta_range: [85, 95], Pa_range: [5000, 50000] },
          { name: 'une pompe hydraulique', eta_range: [60, 85], Pa_range: [1000, 10000] },
          { name: 'un compresseur d\'air', eta_range: [50, 80], Pa_range: [2000, 15000] }
        ]);

        const Pa_round = Math.round(rand(scenario.Pa_range[0], scenario.Pa_range[1]) / 50) * 50;
        const eta_pct = rand(scenario.eta_range[0], scenario.eta_range[1]);
        const eta = eta_pct / 100;
        const Pu = parseFloat((Pa_round * eta).toFixed(1));
        const Pertes = parseFloat((Pa_round - Pu).toFixed(1));

        const askWhat = pick(['puissance_utile', 'pertes', 'rendement']);

        if (askWhat === 'puissance_utile') {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} absorbe une puissance $P_a = ${Pa_round}$ W et a un rendement $\\eta = ${eta_pct}\\%$. Calcule la puissance utile $P_u$ (en W).`,
            answer: Pu,
            tolerance: 1,
            unit: 'W',
            hint: 'Le rendement relie puissance utile et absorbée : $\\eta = P_u / P_a$, donc $P_u = \\eta \\times P_a$.',
            solution: [
              `On identifie : $P_a = ${Pa_round}$ W, $\\eta = ${eta_pct}\\% = ${eta.toFixed(2).replace('.', '{,')}$.`,
              'Formule : $P_u = \\eta \\times P_a$',
              `$P_u = ${eta.toFixed(2).replace('.', '{,')} \\times ${Pa_round} = ${Pu.toString().replace('.', '{,')}$ W`
            ]
          };
        } else if (askWhat === 'pertes') {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} absorbe $P_a = ${Pa_round}$ W et fournit une puissance utile $P_u = ${Pu.toString().replace('.', ',')}$ W. Calcule les pertes $P_{\\text{pertes}}$ (en W).`,
            answer: Pertes,
            tolerance: 1,
            unit: 'W',
            hint: 'Conservation de l\'énergie : $P_a = P_u + P_{\\text{pertes}}$, donc $P_{\\text{pertes}} = P_a - P_u$.',
            solution: [
              'Conservation de l\'énergie : $P_{\\text{pertes}} = P_a - P_u$',
              `$P_{\\text{pertes}} = ${Pa_round} - ${Pu.toString().replace('.', '{,')}$`,
              `$P_{\\text{pertes}} = ${Pertes.toString().replace('.', '{,')}$ W`
            ]
          };
        } else {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} absorbe $P_a = ${Pa_round}$ W et fournit $P_u = ${Pu.toString().replace('.', ',')}$ W. Calcule le rendement $\\eta$ en pourcentage.`,
            answer: eta_pct,
            tolerance: 0.5,
            unit: '%',
            hint: 'Le rendement est $\\eta = P_u / P_a$. Multiplie par $100$ pour avoir le pourcentage.',
            solution: [
              'Formule : $\\eta = \\dfrac{P_u}{P_a}$',
              `$\\eta = \\dfrac{${Pu.toString().replace('.', '{,')}}{${Pa_round}} = ${eta.toFixed(2).replace('.', '{,')}$`,
              `$\\eta = ${eta_pct}\\%$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un vélo à assistance électrique (VAE) possède une batterie de $36$ V et $10$ Ah. Le moteur électrique a un rendement $\\eta_m = 85\\%$. Le cycliste roule à une vitesse constante de $v = 25$ km/h sur du plat. La puissance mécanique nécessaire pour vaincre les frottements est estimée à $P_{\\text{meca}} = 150$ W.',
      tasks: [
        'Calculer l\'énergie totale stockée dans la batterie (en Wh puis en J).',
        'Calculer la puissance électrique que le moteur doit absorber pour fournir les $150$ W mécaniques.',
        'Calculer l\'autonomie du VAE (en heures puis en km).'
      ],
      solutions: [
        '$E = U \\times Q = 36 \\times 10 = 360$ Wh $= 360 \\times 3600 = 1\\,296\\,000$ J $= 1{,}296$ MJ.',
        '$P_a = \\dfrac{P_u}{\\eta_m} = \\dfrac{150}{0{,}85} \\approx 176{,}5$ W.',
        'Autonomie en temps : $t = \\dfrac{E}{P_a} = \\dfrac{360}{176{,}5} \\approx 2{,}04$ h. Autonomie en distance : $d = v \\times t = 25 \\times 2{,}04 \\approx 51$ km.'
      ],
      finalAnswer: '$E = 360$ Wh, $P_a \\approx 176{,}5$ W, autonomie $\\approx 2$ h soit $\\approx 51$ km.'
    },

    evaluation: {
      title: 'Évaluation — Énergie et rendement',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer l\'énergie cinétique d\'une voiture de $1200$ kg roulant à $20$ m/s.',
          type: 'numeric',
          answer: 240000,
          tolerance: 100,
          unit: 'J',
          points: 2,
          correction: '$E_c = \\frac{1}{2}mv^2 = \\frac{1}{2} \\times 1200 \\times 20^2 = \\frac{1}{2} \\times 1200 \\times 400 = 240\\,000$ J $= 240$ kJ.'
        },
        {
          statement: 'Un système absorbe $P_a = 800$ W et perd $P_{\\text{pertes}} = 200$ W. Son rendement est :',
          type: 'numeric',
          answer: 75,
          tolerance: 0.5,
          unit: '%',
          points: 2,
          correction: '$P_u = P_a - P_{\\text{pertes}} = 800 - 200 = 600$ W. $\\eta = \\dfrac{P_u}{P_a} = \\dfrac{600}{800} = 0{,}75 = 75\\%$.'
        },
        {
          statement: 'Trois convertisseurs en série ont des rendements de $90\\%$, $80\\%$ et $70\\%$. Le rendement global est :',
          type: 'numeric',
          answer: 50.4,
          tolerance: 0.5,
          unit: '%',
          points: 3,
          correction: '$\\eta_{\\text{global}} = 0{,}9 \\times 0{,}8 \\times 0{,}7 = 0{,}504 = 50{,}4\\%$. Le produit de rendements décroît vite avec le nombre de convertisseurs.'
        },
        {
          statement: 'La relation entre énergie, puissance et temps est :',
          type: 'multiple-choice',
          options: ['$E = P / t$', '$E = P \\times t$', '$E = P^2 \\times t$', '$E = P + t$'],
          answer: 1,
          points: 1,
          correction: '$E = P \\times t$. L\'énergie (en J) est le produit de la puissance (en W) par le temps (en s). Exemple : $100$ W pendant $60$ s $= 6000$ J.'
        },
        {
          statement: 'Calculer l\'énergie potentielle de pesanteur d\'un objet de $5$ kg à $10$ m de hauteur ($g = 9{,}81$ m/s²).',
          type: 'numeric',
          answer: 490.5,
          tolerance: 1,
          unit: 'J',
          points: 2,
          correction: '$E_p = mgh = 5 \\times 9{,}81 \\times 10 = 490{,}5$ J.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     7. Résistance des matériaux (RdM)
     ------------------------------------------------------- */
  {
    id: 'si-1re-rdm',
    level: 2, subject: 'si',
    icon: '🏗️',
    title: 'Résistance des matériaux',
    subtitle: 'Contraintes, déformations, loi de Hooke, coefficient de sécurité',
    keywords: ['Contrainte', 'Déformation', 'Traction', 'Compression', 'Module de Young'],
    physics: 'La RdM est indispensable pour dimensionner les pièces mécaniques : poutres, arbres de transmission, câbles, boulons. Elle garantit que les structures résistent aux efforts sans se rompre.',

    cours: {
      intro: 'La <strong>Résistance des Matériaux</strong> (RdM) étudie comment les solides se déforment et résistent sous l\'action de forces.<br/><br/>Quand on applique un effort de traction $F$ sur une barre de section $S$, la matière subit une <strong>contrainte</strong> : $\\sigma = \\dfrac{F}{S}$ (en Pa).<br/>Elle se déforme d\'une quantité relative : $\\varepsilon = \\dfrac{\\Delta L}{L_0}$ (sans unité).<br/><br/>Dans le <strong>domaine élastique</strong>, contrainte et déformation sont proportionnelles : c\'est la <strong>loi de Hooke</strong> $\\sigma = E \\times \\varepsilon$, où $E$ est le module de Young.<br/><br/>Valeurs typiques de $E$ : <strong>acier</strong> $\\approx 210$ GPa, <strong>aluminium</strong> $\\approx 70$ GPa, <strong>cuivre</strong> $\\approx 120$ GPa, <strong>bois</strong> $\\approx 10$-$15$ GPa.<br/><br/>Pour garantir la sécurité, on vérifie : $\\sigma_{\\max} \\leq \\dfrac{\\sigma_e}{s}$ où $\\sigma_e$ est la limite élastique et $s$ le coefficient de sécurité ($s = 2$ à $5$ selon les applications).',
      definitions: [
        { term: 'Contrainte ($\\sigma$)', def: 'Force par unité de surface : $\\sigma = F/S$. Unité : pascal (Pa). En traction $\\sigma > 0$, en compression $\\sigma < 0$.' },
        { term: 'Déformation ($\\varepsilon$)', def: 'Allongement relatif : $\\varepsilon = \\Delta L / L_0$. Sans unité (souvent en $10^{-4}$ ou en %). Toujours très petit dans le domaine élastique.' },
        { term: 'Module de Young ($E$)', def: 'Constante de rigidité du matériau : $\\sigma = E \\varepsilon$. Unité : Pa (ou GPa). Plus $E$ est grand, plus le matériau est rigide.' },
        { term: 'Coefficient de sécurité ($s$)', def: 'Rapport $s = \\sigma_e / \\sigma_{\\max}$. Doit être $\\geq 1$ pour éviter la rupture. Valeurs courantes : $s = 2$ (acier), $s = 3$-$5$ (béton, bois, applications critiques).' }
      ],
      method: {
        title: 'Vérifier la résistance d\'une pièce en traction',
        steps: [
          'Étape 1 — Identifier la sollicitation : traction, compression, flexion, cisaillement ou torsion ?<br/>En Première, on se concentre sur la <strong>traction-compression</strong> (effort normal).',
          'Étape 2 — Calculer la contrainte : $\\sigma = \\dfrac{F}{S}$ avec $F$ en N et $S$ en m².<br/>Attention : $1$ mm² $= 10^{-6}$ m². C\'est l\'erreur de conversion la plus fréquente !',
          'Étape 3 — Calculer la déformation (si demandée) : $\\varepsilon = \\dfrac{\\sigma}{E}$ puis $\\Delta L = \\varepsilon \\times L_0$.<br/>Ou directement : $\\Delta L = \\dfrac{F \\times L_0}{E \\times S}$.',
          'Étape 4 — Vérifier la sécurité : $s = \\dfrac{\\sigma_e}{\\sigma_{\\max}}$.<br/>Si $s \\geq s_{\\text{requis}}$ → pièce correctement dimensionnée. Sinon, augmenter la section $S$.'
        ]
      },
      example: {
        statement: 'Un câble en acier ($E = 210$ GPa, $\\sigma_e = 400$ MPa) de section $S = 50$ mm² et longueur $L_0 = 2$ m supporte une charge de $F = 10\\,000$ N. Calculer $\\sigma$, $\\varepsilon$, $\\Delta L$ et le coefficient de sécurité.',
        steps: [
          'Contrainte : $\\sigma = \\dfrac{F}{S} = \\dfrac{10\\,000}{50 \\times 10^{-6}} = 200 \\times 10^6$ Pa $= 200$ MPa.',
          'Déformation : $\\varepsilon = \\dfrac{\\sigma}{E} = \\dfrac{200 \\times 10^6}{210 \\times 10^9} \\approx 9{,}52 \\times 10^{-4}$.',
          'Allongement : $\\Delta L = \\varepsilon \\times L_0 = 9{,}52 \\times 10^{-4} \\times 2 \\approx 1{,}90$ mm.',
          'Coefficient de sécurité : $s = \\dfrac{\\sigma_e}{\\sigma_{\\max}} = \\dfrac{400}{200} = 2$.'
        ],
        answer: '$\\sigma = 200$ MPa, $\\varepsilon \\approx 9{,}5 \\times 10^{-4}$, $\\Delta L \\approx 1{,}9$ mm, $s = 2$.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><td style="border:1px solid var(--border);padding:8px"><strong>Sollicitation</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Effort</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Contrainte</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Unité</strong></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Traction</td><td style="border:1px solid var(--border);padding:8px">$N > 0$</td><td style="border:1px solid var(--border);padding:8px">$\\sigma = N/S$</td><td style="border:1px solid var(--border);padding:8px">Pa (MPa)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Compression</td><td style="border:1px solid var(--border);padding:8px">$N < 0$</td><td style="border:1px solid var(--border);padding:8px">$\\sigma = N/S$</td><td style="border:1px solid var(--border);padding:8px">Pa (MPa)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Cisaillement</td><td style="border:1px solid var(--border);padding:8px">$T$</td><td style="border:1px solid var(--border);padding:8px">$\\tau = T/S$</td><td style="border:1px solid var(--border);padding:8px">Pa (MPa)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Flexion</td><td style="border:1px solid var(--border);padding:8px">$M_f$</td><td style="border:1px solid var(--border);padding:8px">$\\sigma = M_f \\cdot y / I$</td><td style="border:1px solid var(--border);padding:8px">Pa (MPa)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Torsion</td><td style="border:1px solid var(--border);padding:8px">$M_t$</td><td style="border:1px solid var(--border);padding:8px">$\\tau = M_t \\cdot r / I_0$</td><td style="border:1px solid var(--border);padding:8px">Pa (MPa)</td></tr></table>',
      formulas: [
        '$\\sigma = \\dfrac{F}{S}$ (contrainte en Pa)',
        '$\\varepsilon = \\dfrac{\\Delta L}{L_0}$ (déformation relative)',
        '$\\sigma = E \\times \\varepsilon$ (loi de Hooke, domaine élastique)',
        '$s = \\dfrac{\\sigma_e}{\\sigma_{\\max}}$ (coefficient de sécurité)',
        '$\\Delta L = \\dfrac{F \\times L_0}{E \\times S}$ (allongement en traction)'
      ],
      recap: [
        'La contrainte $\\sigma = F/S$ est une force par unité de surface (en Pa ou MPa).',
        'La loi de Hooke $\\sigma = E\\varepsilon$ n\'est valable que dans le domaine élastique.',
        'Propriétés matériaux : acier $E = 210$ GPa, alu $E = 70$ GPa, cuivre $E = 120$ GPa.',
        'Le coefficient de sécurité $s = \\sigma_e / \\sigma_{\\max}$ doit toujours dépasser la valeur requise ($2$ à $5$).'
      ],
      piege: 'L\'erreur la plus fréquente est la conversion de la section. Si $S = 100$ mm², il faut écrire $S = 100 \\times 10^{-6}$ m² $= 10^{-4}$ m². Oublier le facteur $10^{-6}$ donne un résultat faux d\'un facteur un million !'
    },

    quiz: [
      {
        q: 'Un câble en acier ($E = 210$ GPa) et un câble en aluminium ($E = 70$ GPa) de même section et longueur subissent la même force de traction. Lequel s\'allonge le plus ?',
        options: [
          'L\'acier, car il est plus lourd',
          'L\'aluminium, car son module de Young est $3$ fois plus faible',
          'Les deux s\'allongent de la même quantité',
          'L\'acier, car son module est plus grand'
        ],
        answer: 1,
        correction: '$\\Delta L = \\dfrac{FL_0}{ES}$. À $F$, $L_0$ et $S$ identiques, $\\Delta L$ est inversement proportionnel à $E$. L\'aluminium ($E = 70$ GPa) se déforme $3$ fois plus que l\'acier ($E = 210$ GPa) sous la même charge.'
      },
      {
        q: 'Un boulon de section $S = 80$ mm² supporte $F = 16\\,000$ N en traction. Si la limite élastique est $\\sigma_e = 600$ MPa, le coefficient de sécurité vaut :',
        options: ['$s = 1$', '$s = 2$', '$s = 3$', '$s = 4$'],
        answer: 2,
        correction: '$\\sigma = \\dfrac{F}{S} = \\dfrac{16\\,000}{80 \\times 10^{-6}} = 200$ MPa. $s = \\dfrac{\\sigma_e}{\\sigma} = \\dfrac{600}{200} = 3$.<br/>Le boulon est correctement dimensionné pour la plupart des applications courantes.'
      },
      {
        q: 'La contrainte $\\sigma = 200$ MPa correspond en pascals à :',
        options: ['$200$ Pa', '$200\\,000$ Pa', '$200 \\times 10^6$ Pa', '$200 \\times 10^9$ Pa'],
        answer: 2,
        correction: '$1$ MPa $= 10^6$ Pa (Méga = $10^6$). Donc $200$ MPa $= 200 \\times 10^6$ Pa. En RdM on travaille presque toujours en MPa pour éviter les grands nombres.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const material = pick([
          { name: 'en acier', E: 210, sigma_e: rand(250, 500) },
          { name: 'en aluminium', E: 70, sigma_e: rand(150, 350) },
          { name: 'en cuivre', E: 120, sigma_e: rand(200, 400) }
        ]);

        const F_kN = rand(5, 50);
        const F = F_kN * 1000;
        const S_mm2 = rand(20, 200);
        const S = S_mm2 * 1e-6;
        const sigma = F / S;
        const sigma_MPa = parseFloat((sigma / 1e6).toFixed(1));
        const s_coeff = parseFloat((material.sigma_e / sigma_MPa).toFixed(1));

        const askWhat = pick(['contrainte', 'securite']);

        if (askWhat === 'contrainte') {
          return {
            statement: `Une barre ${material.name} de section $S = ${S_mm2}$ mm² est soumise à un effort de traction $F = ${F_kN}$ kN. Calcule la contrainte $\\sigma$ en MPa.`,
            answer: sigma_MPa,
            tolerance: 0.5,
            unit: 'MPa',
            hint: 'Utilise $\\sigma = F/S$. Convertis : $F$ en N ($1$ kN $= 1000$ N) et $S$ en m² ($1$ mm² $= 10^{-6}$ m²).',
            solution: [
              `Conversion : $F = ${F_kN}$ kN $= ${F}$ N ; $S = ${S_mm2}$ mm² $= ${S_mm2} \\times 10^{-6}$ m²`,
              `$\\sigma = \\dfrac{F}{S} = \\dfrac{${F}}{${S_mm2} \\times 10^{-6}}$`,
              `$\\sigma = ${sigma_MPa.toString().replace('.', '{,')}$ MPa`
            ]
          };
        } else {
          return {
            statement: `Une barre ${material.name} ($\\sigma_e = ${material.sigma_e}$ MPa) de section $S = ${S_mm2}$ mm² subit $F = ${F_kN}$ kN. Calcule le coefficient de sécurité $s$.`,
            answer: s_coeff,
            tolerance: 0.1,
            unit: '',
            hint: 'Calcule d\'abord $\\sigma = F/S$, puis $s = \\sigma_e / \\sigma$.',
            solution: [
              `Contrainte : $\\sigma = \\dfrac{${F}}{${S_mm2} \\times 10^{-6}} = ${sigma_MPa.toString().replace('.', '{,')}$ MPa`,
              `Coefficient de sécurité : $s = \\dfrac{\\sigma_e}{\\sigma} = \\dfrac{${material.sigma_e}}{${sigma_MPa.toString().replace('.', '{,')}}$`,
              `$s = ${s_coeff.toString().replace('.', '{,')}$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On dimensionne un tirant (barre en traction) en acier pour une structure. Les données sont : effort de traction $F = 25\\,000$ N, module de Young $E = 210$ GPa, contrainte limite élastique $\\sigma_e = 350$ MPa, coefficient de sécurité requis $s = 2{,}5$, longueur du tirant $L_0 = 1{,}5$ m.',
      tasks: [
        'Calculer la contrainte admissible $\\sigma_{\\text{adm}} = \\sigma_e / s$.',
        'En déduire la section minimale $S_{\\min}$ du tirant (en mm²).',
        'Calculer l\'allongement $\\Delta L$ du tirant sous charge, pour la section trouvée.'
      ],
      solutions: [
        '$\\sigma_{\\text{adm}} = \\dfrac{\\sigma_e}{s} = \\dfrac{350}{2{,}5} = 140$ MPa.',
        '$S_{\\min} = \\dfrac{F}{\\sigma_{\\text{adm}}} = \\dfrac{25\\,000}{140 \\times 10^6} = 1{,}786 \\times 10^{-4}$ m² $\\approx 178{,}6$ mm². On choisit $S = 180$ mm² (arrondi au supérieur).',
        '$\\Delta L = \\dfrac{F \\times L_0}{E \\times S} = \\dfrac{25\\,000 \\times 1{,}5}{210 \\times 10^9 \\times 180 \\times 10^{-6}} = \\dfrac{37\\,500}{37\\,800} \\approx 0{,}992$ mm $\\approx 1$ mm.'
      ],
      finalAnswer: '$\\sigma_{\\text{adm}} = 140$ MPa, $S_{\\min} \\approx 179$ mm² (prendre $180$ mm²), $\\Delta L \\approx 1$ mm.'
    },

    evaluation: {
      title: 'Évaluation — Résistance des matériaux',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer la contrainte dans une barre de section $S = 100$ mm² soumise à une force $F = 20\\,000$ N (en MPa).',
          type: 'numeric',
          answer: 200,
          tolerance: 1,
          unit: 'MPa',
          points: 2,
          correction: '$\\sigma = \\dfrac{F}{S} = \\dfrac{20\\,000}{100 \\times 10^{-6}} = 200 \\times 10^6$ Pa $= 200$ MPa.'
        },
        {
          statement: 'La loi de Hooke s\'écrit $\\sigma = E \\times \\varepsilon$. Si $\\sigma = 150$ MPa et $E = 210$ GPa, la déformation $\\varepsilon$ est environ :',
          type: 'multiple-choice',
          options: ['$7{,}14 \\times 10^{-4}$', '$1{,}4$', '$7{,}14 \\times 10^{-2}$', '$3{,}15 \\times 10^4$'],
          answer: 0,
          points: 2,
          correction: '$\\varepsilon = \\dfrac{\\sigma}{E} = \\dfrac{150 \\times 10^6}{210 \\times 10^9} = 7{,}14 \\times 10^{-4}$. Les déformations élastiques sont toujours très petites ($10^{-4}$ à $10^{-3}$).'
        },
        {
          statement: 'Une pièce a une contrainte en service $\\sigma = 80$ MPa et une contrainte limite $\\sigma_e = 240$ MPa. Calculer le coefficient de sécurité.',
          type: 'numeric',
          answer: 3,
          tolerance: 0.1,
          unit: '',
          points: 2,
          correction: '$s = \\dfrac{\\sigma_e}{\\sigma_{\\max}} = \\dfrac{240}{80} = 3$.'
        },
        {
          statement: 'Calculer l\'allongement $\\Delta L$ d\'une barre acier ($E = 210$ GPa) de longueur $L_0 = 2$ m, section $S = 50$ mm², sous $F = 10\\,000$ N. Résultat en mm.',
          type: 'numeric',
          answer: 1.90,
          tolerance: 0.1,
          unit: 'mm',
          points: 3,
          correction: '$\\Delta L = \\dfrac{F \\times L_0}{E \\times S} = \\dfrac{10\\,000 \\times 2}{210 \\times 10^9 \\times 50 \\times 10^{-6}} = \\dfrac{20\\,000}{10\\,500} \\approx 1{,}90$ mm.'
        },
        {
          statement: '$1$ mm² est égal à combien de m² ?',
          type: 'multiple-choice',
          options: ['$10^{-2}$ m²', '$10^{-3}$ m²', '$10^{-6}$ m²', '$10^{-9}$ m²'],
          answer: 2,
          points: 1,
          correction: '$1$ mm $= 10^{-3}$ m, donc $1$ mm² $= (10^{-3})^2 = 10^{-6}$ m². C\'est la conversion indispensable en RdM.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     8. Programmation orientée objet (Python)
     ------------------------------------------------------- */
  {
    id: 'si-1re-poo',
    level: 2, subject: 'si',
    icon: '🐍',
    title: 'Programmation orientée objet (Python)',
    subtitle: 'Classes, objets, attributs, méthodes, héritage',
    keywords: ['Classe', 'Objet', 'Attribut', 'Méthode', 'Héritage', 'Python'],
    physics: 'La POO est utilisée pour modéliser et simuler des systèmes techniques en Python : robots, capteurs, actionneurs. Chaque composant physique peut être représenté par un objet avec ses propriétés et comportements.',

    cours: {
      intro: 'La <strong>Programmation Orientée Objet</strong> (POO) organise le code autour d\'<strong>objets</strong> plutôt que de fonctions isolées.<br/><br/>Un objet est une <strong>instance</strong> d\'une <strong>classe</strong>. La classe est le plan de construction : elle définit les <strong>attributs</strong> (données) et les <strong>méthodes</strong> (fonctions).<br/><br/>Exemple concret :<br/><code>class Moteur:<br/>&nbsp;&nbsp;def __init__(self, puissance, vitesse):<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.puissance = puissance<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.vitesse = vitesse<br/>&nbsp;&nbsp;def demarrer(self):<br/>&nbsp;&nbsp;&nbsp;&nbsp;print("Moteur en marche")</code><br/><br/>Le constructeur <code>__init__(self, ...)</code> initialise les attributs lors de la création. Le mot-clé <code>self</code> fait référence à l\'objet courant.<br/><br/>L\'<strong>héritage</strong> permet de créer une classe fille qui réutilise les attributs et méthodes d\'une classe mère via <code>super().__init__(...)</code>, tout en ajoutant ses propres spécificités.',
      definitions: [
        { term: 'Classe', def: 'Modèle (plan) définissant attributs et méthodes d\'un type d\'objet. Syntaxe : <code>class NomClasse:</code>.' },
        { term: 'Objet (instance)', def: 'Entité concrète créée à partir d\'une classe, avec ses propres valeurs d\'attributs. Syntaxe : <code>obj = NomClasse(arg1, arg2)</code>.' },
        { term: 'Attribut', def: 'Variable rattachée à un objet, définie dans <code>__init__</code> avec <code>self.nom = valeur</code>. Chaque objet a ses propres valeurs.' },
        { term: 'Héritage', def: 'Mécanisme par lequel une classe fille hérite des attributs et méthodes d\'une classe mère. Syntaxe : <code>class Fille(Mere):</code> avec <code>super().__init__(...)</code> dans le constructeur.' }
      ],
      method: {
        title: 'Créer et utiliser une classe en Python',
        steps: [
          'Étape 1 — Définir la classe et le constructeur :<br/><code>class NomClasse:</code><br/><code>&nbsp;&nbsp;def __init__(self, param1, param2):</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;self.attribut1 = param1</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;self.attribut2 = param2</code>',
          'Étape 2 — Définir les méthodes (fonctions de la classe) :<br/><code>&nbsp;&nbsp;def ma_methode(self, arg):</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;self.attribut1 += arg</code><br/>Toujours <code>self</code> en premier paramètre pour accéder aux attributs.',
          'Étape 3 — Instancier et utiliser :<br/><code>obj = NomClasse(val1, val2)</code> crée un objet.<br/><code>obj.ma_methode(5)</code> appelle la méthode sur cet objet.',
          'Étape 4 — Héritage (si nécessaire) :<br/><code>class Fille(Mere):</code><br/><code>&nbsp;&nbsp;def __init__(self, param_mere, param_fille):</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(param_mere)</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;self.nouveau_attr = param_fille</code>'
        ]
      },
      example: {
        statement: 'Créer une classe <code>Reservoir</code> avec un attribut <code>volume</code> (litres) et une méthode <code>remplir(quantite)</code>. Déterminer le volume après deux remplissages.',
        steps: [
          'Définition : <code>class Reservoir:</code> avec <code>def __init__(self, volume_initial): self.volume = volume_initial</code>.',
          'Méthode : <code>def remplir(self, quantite): self.volume += quantite</code>.',
          'Utilisation : <code>r = Reservoir(10)</code> → <code>r.volume = 10</code>.',
          '<code>r.remplir(5)</code> → <code>r.volume = 15</code>. Puis <code>r.remplir(3)</code> → <code>r.volume = 18</code>.'
        ],
        answer: 'Après les deux remplissages, <code>r.volume = 18</code> litres.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><td style="border:1px solid var(--border);padding:8px"><strong>Concept POO</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Définition</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Syntaxe Python</strong></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Classe</td><td style="border:1px solid var(--border);padding:8px">Plan / modèle d\'objet</td><td style="border:1px solid var(--border);padding:8px"><code>class Moteur:</code></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Constructeur</td><td style="border:1px solid var(--border);padding:8px">Initialise les attributs</td><td style="border:1px solid var(--border);padding:8px"><code>def __init__(self, p):</code></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Attribut</td><td style="border:1px solid var(--border);padding:8px">Donnée propre à l\'objet</td><td style="border:1px solid var(--border);padding:8px"><code>self.puissance = p</code></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Méthode</td><td style="border:1px solid var(--border);padding:8px">Fonction de la classe</td><td style="border:1px solid var(--border);padding:8px"><code>def demarrer(self):</code></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Instanciation</td><td style="border:1px solid var(--border);padding:8px">Création d\'un objet</td><td style="border:1px solid var(--border);padding:8px"><code>m = Moteur(500)</code></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Héritage</td><td style="border:1px solid var(--border);padding:8px">Classe fille hérite de mère</td><td style="border:1px solid var(--border);padding:8px"><code>class Electrique(Moteur):</code></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Appel parent</td><td style="border:1px solid var(--border);padding:8px">Constructeur de la mère</td><td style="border:1px solid var(--border);padding:8px"><code>super().__init__(p)</code></td></tr></table>',
      formulas: [
        '<code>class NomClasse:</code> — déclaration d\'une classe',
        '<code>def __init__(self, ...):</code> — constructeur (initialise les attributs)',
        '<code>self.attribut = valeur</code> — définition d\'un attribut d\'instance',
        '<code>obj = NomClasse(...)</code> — instanciation (création d\'un objet)',
        '<code>class Fille(Mere):</code> + <code>super().__init__(...)</code> — héritage avec appel du constructeur parent'
      ],
      recap: [
        'Une <strong>classe</strong> est un modèle, un <strong>objet</strong> est une instance concrète.',
        'Le constructeur <code>__init__(self, ...)</code> initialise les attributs. Ne pas oublier <code>self</code> !',
        'Les méthodes agissent sur les attributs via <code>self.attribut</code>.',
        'L\'héritage (<code>class Fille(Mere):</code>) réutilise le code de la classe mère. <code>super().__init__(...)</code> appelle le constructeur parent.'
      ],
      piege: 'Ne pas oublier <code>self</code> comme premier paramètre de chaque méthode. Sans <code>self</code>, Python ne sait pas à quel objet rattacher les attributs. Erreur classique : écrire <code>def remplir(quantite):</code> au lieu de <code>def remplir(self, quantite):</code>. De même, dans le corps de la méthode, il faut écrire <code>self.volume</code> et non <code>volume</code>.'
    },

    quiz: [
      {
        q: 'Soit le code :<br/><code>class Compteur:</code><br/><code>&nbsp;&nbsp;def __init__(self): self.n = 0</code><br/><code>&nbsp;&nbsp;def inc(self): self.n += 1</code><br/><code>&nbsp;&nbsp;def double(self): self.n *= 2</code><br/>Après <code>c = Compteur()</code>, <code>c.inc()</code>, <code>c.inc()</code>, <code>c.double()</code>, <code>c.inc()</code>, quelle est la valeur de <code>c.n</code> ?',
        options: ['$3$', '$4$', '$5$', '$6$'],
        answer: 2,
        correction: 'Exécution pas à pas : $n = 0$ → <code>inc()</code> : $n = 1$ → <code>inc()</code> : $n = 2$ → <code>double()</code> : $n = 4$ → <code>inc()</code> : $n = 5$.<br/>L\'ordre des appels est crucial : <code>double()</code> s\'applique au $n$ courant ($2$) et donne $4$, pas $6$.'
      },
      {
        q: 'On écrit <code>class VoitureElectrique(Voiture):</code>. Cela signifie que :',
        options: [
          '<code>VoitureElectrique</code> est une classe mère de <code>Voiture</code>',
          '<code>VoitureElectrique</code> hérite de <code>Voiture</code> et accède à ses attributs et méthodes',
          '<code>Voiture</code> est supprimée et remplacée par <code>VoitureElectrique</code>',
          'Les deux classes sont identiques'
        ],
        answer: 1,
        correction: 'La syntaxe <code>class Fille(Mere):</code> établit un lien d\'héritage : <code>VoitureElectrique</code> hérite de tous les attributs et méthodes de <code>Voiture</code>, et peut en ajouter ou en redéfinir (surcharge).'
      },
      {
        q: 'On crée deux objets : <code>a = Compteur()</code> et <code>b = Compteur()</code>. Après <code>a.inc()</code>, la valeur de <code>b.n</code> est :',
        options: ['$0$', '$1$', '$2$', 'Erreur'],
        answer: 0,
        correction: 'Chaque objet possède ses <strong>propres attributs</strong>. <code>a.inc()</code> modifie uniquement <code>a.n</code> (qui passe à $1$). <code>b.n</code> reste à $0$ car <code>b</code> est un objet distinct, avec sa propre copie de <code>n</code>.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const initial = rand(0, 20);
        const nOps = rand(2, 5);
        const operations = [];
        const opDetails = [];
        let current = initial;

        const classType = pick([
          { name: 'Stock', attr: 'quantite', add: 'ajouter', remove: 'retirer' },
          { name: 'Reservoir', attr: 'niveau', add: 'remplir', remove: 'vider' },
          { name: 'Compteur', attr: 'valeur', add: 'incrementer', remove: 'decrementer' }
        ]);

        for (let i = 0; i < nOps; i++) {
          const op = pick([classType.add, classType.remove]);
          const val = rand(1, 10);
          if (op === classType.add) {
            current += val;
            operations.push(`<code>obj.${op}(${val})</code>`);
            opDetails.push({ op: classType.add, val: val, sign: '+' });
          } else {
            current -= val;
            operations.push(`<code>obj.${op}(${val})</code>`);
            opDetails.push({ op: classType.remove, val: val, sign: '-' });
          }
        }

        const opsList = operations.join(', puis ');

        const solutionSteps = [`Valeur initiale : <code>${classType.attr} = ${initial}</code>`];
        let running = initial;
        for (let i = 0; i < nOps; i++) {
          const d = opDetails[i];
          if (d.sign === '+') {
            running += d.val;
            solutionSteps.push(`Après <code>${d.op}(${d.val})</code> : $${running - d.val} + ${d.val} = ${running}$`);
          } else {
            running -= d.val;
            solutionSteps.push(`Après <code>${d.op}(${d.val})</code> : $${running + d.val} - ${d.val} = ${running}$`);
          }
        }
        solutionSteps.push(`Valeur finale : <code>${classType.attr} = ${current}</code>`);

        return {
          statement: `On définit une classe <code>${classType.name}</code> avec un attribut <code>${classType.attr}</code> initialisé à $${initial}$. La méthode <code>${classType.add}(n)</code> ajoute $n$ et <code>${classType.remove}(n)</code> retire $n$. Après <code>obj = ${classType.name}(${initial})</code>, on exécute : ${opsList}. Quelle est la valeur finale de <code>obj.${classType.attr}</code> ?`,
          answer: current,
          tolerance: 0,
          unit: '',
          hint: `Pars de la valeur initiale $${initial}$ et applique chaque opération dans l'ordre. <code>${classType.add}(n)</code> fait $+n$ et <code>${classType.remove}(n)</code> fait $-n$.`,
          solution: solutionSteps
        };
      }
    },

    probleme: {
      context: 'On modélise un système de capteurs en POO. On crée une classe <code>Capteur</code> avec les attributs <code>nom</code> (str), <code>unite</code> (str) et <code>valeur</code> (float, initialisée à $0$). La méthode <code>mesurer(v)</code> met à jour <code>self.valeur = v</code>. La méthode <code>afficher()</code> retourne une chaîne comme <code>"Température : 22.5 °C"</code>. On crée ensuite <code>CapteurAlarme</code> héritant de <code>Capteur</code> avec un attribut <code>seuil</code> et une méthode <code>alarme()</code> retournant <code>True</code> si <code>valeur > seuil</code>.',
      tasks: [
        'Écrire le code de la classe <code>Capteur</code> avec <code>__init__</code>, <code>mesurer(v)</code> et <code>afficher()</code>.',
        'Écrire le code de <code>CapteurAlarme</code> héritant de <code>Capteur</code>, avec <code>super().__init__(...)</code>.',
        'Instancier un <code>CapteurAlarme("Température", "°C", 30)</code>. Après <code>mesurer(35)</code>, que retourne <code>alarme()</code> ?'
      ],
      solutions: [
        '<code>class Capteur:<br/>&nbsp;&nbsp;def __init__(self, nom, unite):<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.nom = nom<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.unite = unite<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.valeur = 0<br/>&nbsp;&nbsp;def mesurer(self, v):<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.valeur = v<br/>&nbsp;&nbsp;def afficher(self):<br/>&nbsp;&nbsp;&nbsp;&nbsp;return f"{self.nom} : {self.valeur} {self.unite}"</code>',
        '<code>class CapteurAlarme(Capteur):<br/>&nbsp;&nbsp;def __init__(self, nom, unite, seuil):<br/>&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(nom, unite)<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.seuil = seuil<br/>&nbsp;&nbsp;def alarme(self):<br/>&nbsp;&nbsp;&nbsp;&nbsp;return self.valeur > self.seuil</code><br/>Le <code>super().__init__(nom, unite)</code> appelle le constructeur de <code>Capteur</code> pour initialiser <code>nom</code>, <code>unite</code> et <code>valeur</code>.',
        '<code>c = CapteurAlarme("Température", "°C", 30)</code>. Après <code>c.mesurer(35)</code> : <code>c.valeur = 35</code>. <code>c.alarme()</code> → <code>35 > 30</code> → <code>True</code>. L\'alarme se déclenche car la température dépasse le seuil.'
      ],
      finalAnswer: '<code>alarme()</code> retourne <code>True</code> car $35 > 30$.'
    },

    evaluation: {
      title: 'Évaluation — Programmation orientée objet',
      duration: '20 min',
      questions: [
        {
          statement: 'En Python, quel mot-clé permet de créer une classe ?',
          type: 'multiple-choice',
          options: ['<code>def</code>', '<code>class</code>', '<code>object</code>', '<code>new</code>'],
          answer: 1,
          points: 1,
          correction: 'Le mot-clé <code>class</code> permet de définir une classe. <code>def</code> définit une fonction ou méthode, pas une classe.'
        },
        {
          statement: 'Soit : <code>class Boite:</code> / <code>&nbsp;&nbsp;def __init__(self, n): self.objets = n</code> / <code>&nbsp;&nbsp;def ajouter(self, k): self.objets += k</code>. Après <code>b = Boite(5)</code>, <code>b.ajouter(3)</code>, <code>b.ajouter(2)</code>, la valeur de <code>b.objets</code> est :',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: 'Initialisation : <code>b.objets = 5</code>. Premier ajout : $5 + 3 = 8$. Deuxième ajout : $8 + 2 = 10$.'
        },
        {
          statement: 'L\'héritage en POO permet à une classe fille de :',
          type: 'multiple-choice',
          options: [
            'Supprimer tous les attributs de la classe mère',
            'Réutiliser les attributs et méthodes de la classe mère, et en ajouter',
            'Créer une copie indépendante sans aucun lien',
            'Empêcher la création d\'objets de la classe mère'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'héritage permet à la classe fille de réutiliser tout ce que la classe mère offre, tout en pouvant ajouter de nouveaux attributs/méthodes ou redéfinir (surcharger) ceux existants.'
        },
        {
          statement: 'Dans une méthode Python, <code>self</code> représente :',
          type: 'multiple-choice',
          options: [
            'Le nom de la classe',
            'L\'objet (instance) sur lequel la méthode est appelée',
            'Le constructeur de la classe',
            'Un paramètre optionnel qu\'on peut omettre'
          ],
          answer: 1,
          points: 2,
          correction: '<code>self</code> fait référence à l\'objet courant. Quand on écrit <code>obj.methode()</code>, Python passe automatiquement <code>obj</code> comme <code>self</code>. Ce n\'est pas optionnel : l\'omettre provoque une erreur.'
        },
        {
          statement: 'Soit <code>class Compteur:</code> / <code>&nbsp;&nbsp;def __init__(self): self.n = 0</code> / <code>&nbsp;&nbsp;def inc(self): self.n += 1</code> / <code>&nbsp;&nbsp;def double(self): self.n *= 2</code>. Après <code>c = Compteur()</code>, <code>c.inc()</code>, <code>c.double()</code>, <code>c.inc()</code>, <code>c.double()</code>, quelle est la valeur de <code>c.n</code> ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$n = 0$ → <code>inc()</code> : $n = 1$ → <code>double()</code> : $n = 2$ → <code>inc()</code> : $n = 3$ → <code>double()</code> : $n = 6$.'
        }
      ]
    }
  }

);
