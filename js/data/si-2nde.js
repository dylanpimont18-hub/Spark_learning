/* =========================================================
   Spark Learning – data/si-2nde.js
   Modules Lycée 2nde – Sciences de l'Ingénieur
   ========================================================= */

window.MODULES.push(

  /* -------------------------------------------------------
     1. Analyse fonctionnelle d'un système
     ------------------------------------------------------- */
  {
    id: 'si-2nde-analyse-fonctionnelle',
    level: 2, subject: 'si',
    icon: '🔧',
    title: 'Analyse fonctionnelle d\'un système',
    subtitle: 'Besoin, fonctions de service, diagramme bête à cornes et pieuvre, CdCF',
    keywords: ['Besoin', 'Fonction', 'Diagramme bête à cornes', 'Pieuvre'],
    physics: 'L\'analyse fonctionnelle est utilisée dans tous les bureaux d\'études pour concevoir des produits répondant aux besoins réels des utilisateurs, du smartphone au pont suspendu. La norme NF X 50-151 encadre cette démarche.',

    cours: {
      intro: 'Avant de concevoir un produit, l\'ingénieur doit comprendre le <strong>besoin de l\'utilisateur</strong>. L\'analyse fonctionnelle, normalisée par la <strong>norme NF X 50-151</strong>, est une démarche structurée qui traduit ce besoin en fonctions que le système doit remplir.<br/><br/>On distingue deux types de fonctions :<br/>— les <strong>fonctions de service (FS)</strong> : ce que le produit doit faire pour l\'utilisateur ou son environnement (elles relient deux éléments du milieu extérieur via le produit) ;<br/>— les <strong>fonctions de contrainte (FC)</strong> : les exigences imposées par la réglementation, le milieu, le coût, etc. (elles relient un seul élément extérieur au produit).<br/><br/>Deux outils graphiques fondamentaux structurent cette analyse : le <strong>diagramme bête à cornes</strong> (qui valide l\'existence du besoin) et le <strong>diagramme pieuvre</strong> (qui identifie toutes les fonctions). La méthode APTE (Application aux Techniques d\'Entreprise) est la référence industrielle pour mener cette démarche.<br/><br/>Le résultat est formalisé dans un <strong>cahier des charges fonctionnel (CdCF)</strong> qui servira de référence tout au long du projet.',
      definitions: [
        { term: 'Besoin', def: 'Nécessité ou désir éprouvé par un utilisateur. Il s\'exprime par trois questions : « À qui le produit rend-il service ? », « Sur quoi agit-il ? », « Dans quel but ? ».' },
        { term: 'Fonction de service (FS)', def: 'Action attendue du produit pour satisfaire le besoin. Elle relie le produit à <strong>deux</strong> éléments du milieu extérieur. Notation : $FS_1, FS_2, \\ldots$' },
        { term: 'Fonction de contrainte (FC)', def: 'Exigence imposée au produit par un élément du milieu extérieur (norme, environnement, coût…). Elle relie le produit à <strong>un seul</strong> élément extérieur. Notation : $FC_1, FC_2, \\ldots$' },
        { term: 'Cahier des charges fonctionnel (CdCF)', def: 'Document normalisé (NF X 50-151) qui recense toutes les fonctions avec leurs critères d\'appréciation, leurs niveaux cibles et leur flexibilité.' }
      ],
      method: {
        title: 'Démarche d\'analyse fonctionnelle en 4 étapes (méthode APTE)',
        steps: [
          '<strong>Identifier le besoin</strong> : Construire le diagramme « bête à cornes » en répondant aux trois questions : « À qui ? » (l\'utilisateur), « Sur quoi ? » (la matière d\'œuvre), « Dans quel but ? » (la finalité).<br/>Exemple : Pour un vélo électrique → utilisateur = cycliste, matière d\'œuvre = le cycliste (déplacement), but = se déplacer sans effort excessif.',
          '<strong>Identifier le milieu extérieur</strong> : Lister tous les éléments qui interagissent avec le produit : utilisateur, énergie, environnement, normes, esthétique, maintenance, etc.<br/>Exemple : Pour un vélo électrique → cycliste, route, pluie, normes CE, batterie, esthétique, budget.',
          '<strong>Construire le diagramme pieuvre</strong> : Placer le produit au centre et les éléments du milieu extérieur autour. Relier deux éléments passant par le produit pour une $FS$. Relier un seul élément au produit pour une $FC$.<br/>Exemple : $FS_1$ : permettre au cycliste de se déplacer sur la route ; $FC_1$ : résister à la pluie.',
          '<strong>Rédiger le CdCF</strong> : Pour chaque fonction, définir un critère, un niveau et une flexibilité.<br/>Exemple : $FS_1$ → critère : vitesse maximale assistée ; niveau : $25$ km/h ; flexibilité : $\\pm 1$ km/h.'
        ]
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Type</th><th style="border:1px solid var(--border);padding:8px">Fonction de service (FS)</th><th style="border:1px solid var(--border);padding:8px">Fonction de contrainte (FC)</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Définition</strong></td><td style="border:1px solid var(--border);padding:8px">Action attendue du produit pour l\'utilisateur</td><td style="border:1px solid var(--border);padding:8px">Exigence imposée par le milieu extérieur</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Liaison</strong></td><td style="border:1px solid var(--border);padding:8px">Relie <strong>2</strong> éléments extérieurs via le produit</td><td style="border:1px solid var(--border);padding:8px">Relie <strong>1</strong> seul élément au produit</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Exemple (vélo)</strong></td><td style="border:1px solid var(--border);padding:8px">Permettre au cycliste de se déplacer sur la route</td><td style="border:1px solid var(--border);padding:8px">Résister à la pluie</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Notation</strong></td><td style="border:1px solid var(--border);padding:8px">$FS_1, FS_2, \\ldots$</td><td style="border:1px solid var(--border);padding:8px">$FC_1, FC_2, \\ldots$</td></tr></table>',
      example: {
        statement: 'On analyse un distributeur automatique de boissons chaudes installé dans un lycée. Identifier le besoin, puis lister les fonctions de service et de contrainte.',
        steps: [
          'Diagramme bête à cornes — À qui ? Les élèves et le personnel. Sur quoi ? Les boissons (eau, café, chocolat). Dans quel but ? Fournir une boisson chaude rapidement.',
          'Éléments du milieu extérieur : utilisateur, boissons, énergie électrique, eau, normes d\'hygiène, esthétique, monnaie/paiement, environnement (température ambiante).',
          'Fonctions de service : $FS_1$ = permettre à l\'utilisateur d\'obtenir la boisson choisie ; $FS_2$ = accepter le paiement de l\'utilisateur.',
          'Fonctions de contrainte : $FC_1$ = respecter les normes d\'hygiène alimentaire ; $FC_2$ = fonctionner avec l\'énergie électrique du bâtiment ; $FC_3$ = s\'intégrer esthétiquement dans le hall.'
        ],
        answer: '2 fonctions de service ($FS_1$, $FS_2$) et 3 fonctions de contrainte ($FC_1$, $FC_2$, $FC_3$), soit 5 fonctions au total.'
      },
      formulas: [
        'Besoin = « À qui ? » + « Sur quoi ? » + « Dans quel but ? »',
        'Fonction de service : relie le produit à <strong>deux</strong> éléments du milieu extérieur',
        'Fonction de contrainte : relie le produit à <strong>un seul</strong> élément du milieu extérieur',
        'Nombre total de fonctions = nombre de $FS$ + nombre de $FC$'
      ],
      recap: [
        'L\'analyse fonctionnelle part toujours du besoin de l\'utilisateur, jamais de la solution technique.',
        'Le diagramme bête à cornes valide l\'existence du besoin (« À qui ? Sur quoi ? Dans quel but ? »).',
        'Le diagramme pieuvre distingue $FS$ (relient deux éléments extérieurs) et $FC$ (un seul élément).',
        'Le CdCF (norme NF X 50-151) quantifie chaque fonction par un critère, un niveau et une flexibilité.'
      ],
      piege: 'Ne pas confondre fonction de service et fonction technique ! La fonction de service décrit le « quoi » (ce que le produit doit faire pour l\'utilisateur) alors que la fonction technique décrit le « comment » (la solution retenue par le concepteur). En analyse fonctionnelle (méthode APTE), on reste au niveau du « quoi ».'
    },

    quiz: [
      {
        q: 'Un diagramme pieuvre d\'un drone de livraison montre 3 traits reliant chacun deux éléments extérieurs via le drone, et 4 traits reliant un seul élément au drone. Combien de fonctions de service et de fonctions de contrainte a-t-on identifié ?',
        options: [
          '$3 \\; FS$ et $4 \\; FC$',
          '$4 \\; FS$ et $3 \\; FC$',
          '$7 \\; FS$ et $0 \\; FC$',
          '$0 \\; FS$ et $7 \\; FC$'
        ],
        answer: 0,
        correction: 'Chaque trait reliant <strong>deux</strong> éléments extérieurs via le produit correspond à une fonction de service ($FS$), et chaque trait reliant <strong>un seul</strong> élément au produit est une fonction de contrainte ($FC$). On obtient donc $3 \\; FS$ et $4 \\; FC$, soit $7$ fonctions au total.'
      },
      {
        q: 'Dans le CdCF (norme NF X 50-151), chaque fonction est caractérisée par trois éléments. Lesquels ?',
        options: [
          'Coût, délai, qualité',
          'Critère d\'appréciation, niveau, flexibilité',
          'Matière, forme, dimensions',
          'Fournisseur, prix, disponibilité'
        ],
        answer: 1,
        correction: 'Le cahier des charges fonctionnel (CdCF) précise pour chaque fonction : un <strong>critère d\'appréciation</strong> (comment la mesurer), un <strong>niveau</strong> (valeur cible) et une <strong>flexibilité</strong> (tolérance acceptable). Exemple : vitesse max = $25$ km/h $\\pm 1$ km/h.'
      },
      {
        q: 'Pour un lave-linge, la proposition « résister à l\'humidité de la salle de bain » est :',
        options: [
          'Une fonction de service, car elle implique l\'utilisateur',
          'Une fonction technique, car elle décrit une solution',
          'Une fonction de contrainte, car elle relie le produit à un seul élément extérieur (l\'humidité)',
          'Le besoin principal du produit'
        ],
        answer: 2,
        correction: '« Résister à l\'humidité » relie le produit à un seul élément du milieu extérieur (l\'environnement humide). C\'est donc une <strong>fonction de contrainte</strong> ($FC$). Une fonction de service relierait deux éléments extérieurs, par exemple l\'utilisateur et le linge sale.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var nbFS = rand(2, 6);
        var nbFC = rand(2, 5);
        var nbElements = nbFS + nbFC + rand(0, 2);
        var systeme = pick([
          'un robot aspirateur domestique',
          'une trottinette électrique partagée',
          'un portail automatique de pavillon',
          'une station météo connectée',
          'un drone de livraison Amazon',
          'un ascenseur d\'immeuble',
          'une borne de recharge pour véhicule électrique',
          'un distributeur automatique de masques'
        ]);
        var contexte = pick([
          'Dans le cadre d\'un projet de conception',
          'Lors de l\'étude préliminaire',
          'Le bureau d\'études analyse',
          'En phase d\'avant-projet'
        ]);
        var total = nbFS + nbFC;
        return {
          statement: contexte + ', on réalise l\'analyse fonctionnelle de ' + systeme + '. Le diagramme pieuvre comporte $' + nbElements + '$ éléments du milieu extérieur. On a identifié $' + nbFS + '$ fonctions de service ($FS$) et $' + nbFC + '$ fonctions de contrainte ($FC$).<br/><br/>Quel est le nombre total de fonctions du système ?',
          answer: total,
          tolerance: 0,
          unit: 'fonctions',
          hint: 'Le nombre total de fonctions est la somme des fonctions de service et des fonctions de contrainte : $\\text{Total} = FS + FC$. Les éléments du milieu extérieur ne comptent pas directement comme des fonctions.',
          solution: [
            'On identifie $' + nbFS + '$ fonctions de service ($FS$).',
            'On identifie $' + nbFC + '$ fonctions de contrainte ($FC$).',
            'Nombre total de fonctions : $\\text{Total} = ' + nbFS + ' + ' + nbFC + ' = ' + total + '$.',
            'Remarque : le nombre d\'éléments du milieu extérieur ($' + nbElements + '$) est une donnée utile pour construire le diagramme pieuvre, mais le total de fonctions se calcule en comptant les $FS$ et $FC$.'
          ]
        };
      }
    },

    probleme: {
      context: 'Une entreprise souhaite concevoir un sèche-mains automatique pour les sanitaires d\'un aéroport international. Le bureau d\'études applique la méthode APTE pour réaliser l\'analyse fonctionnelle complète avant de choisir une solution technique. Le produit doit être conforme à la norme NF X 50-151.',
      tasks: [
        'Construire le diagramme bête à cornes : identifier « À qui le produit rend-il service ? », « Sur quoi agit-il ? » et « Dans quel but ? ».',
        'Lister au moins 6 éléments du milieu extérieur susceptibles d\'interagir avec le sèche-mains.',
        'Identifier au moins 2 fonctions de service ($FS$) et 3 fonctions de contrainte ($FC$), en précisant les éléments extérieurs concernés pour chacune.'
      ],
      solutions: [
        'Bête à cornes — À qui ? Les voyageurs et le personnel de l\'aéroport. Sur quoi ? Les mains mouillées des utilisateurs. Dans quel but ? Sécher les mains rapidement et hygiéniquement, sans contact physique.',
        'Éléments du milieu extérieur : utilisateur, mains mouillées, énergie électrique (réseau $230$ V), normes d\'hygiène (NF EN 14065), bruit ambiant, esthétique du lieu, eau (évacuation), budget de maintenance, environnement (humidité).',
        '$FS_1$ : permettre à l\'utilisateur de sécher ses mains (utilisateur $\\leftrightarrow$ mains mouillées). $FS_2$ : s\'activer automatiquement à l\'approche de l\'utilisateur (utilisateur $\\leftrightarrow$ détection). $FC_1$ : fonctionner sur le réseau électrique du bâtiment ($230$ V). $FC_2$ : respecter les normes d\'hygiène et de sécurité. $FC_3$ : ne pas dépasser $70$ dB(A) de niveau sonore.'
      ],
      finalAnswer: 'Le sèche-mains a au minimum 2 fonctions de service et 3 fonctions de contrainte, soit 5 fonctions au total, formalisées dans le CdCF conformément à la norme NF X 50-151.'
    },

    evaluation: {
      title: 'Évaluation — Analyse fonctionnelle d\'un système',
      duration: '20 min',
      questions: [
        {
          statement: 'Pour un lave-linge domestique, la question « Sur quoi le produit agit-il ? » (diagramme bête à cornes) désigne :',
          type: 'multiple-choice',
          options: [
            'L\'utilisateur (la famille)',
            'Le linge sale',
            'L\'énergie électrique',
            'Le programme de lavage'
          ],
          answer: 1,
          points: 2,
          correction: '« Sur quoi agit-il ? » désigne la <strong>matière d\'œuvre</strong>, c\'est-à-dire ce que le produit transforme. Pour un lave-linge, c\'est le linge sale qui est transformé en linge propre. L\'utilisateur répond à « À qui ? », et l\'énergie est un élément du milieu extérieur.'
        },
        {
          statement: 'Un diagramme pieuvre d\'un système de vidéosurveillance montre 5 traits reliant deux éléments extérieurs via le système et 4 traits reliant un seul élément au système. Quel est le nombre total de fonctions ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: 'fonctions',
          points: 2,
          correction: 'Chaque trait reliant deux éléments = $1$ fonction de service ($FS$). Chaque trait reliant un seul élément = $1$ fonction de contrainte ($FC$). Total : $5 + 4 = 9$ fonctions.'
        },
        {
          statement: 'Parmi les propositions suivantes, laquelle est une <strong>fonction de contrainte</strong> pour un téléphone portable ?',
          type: 'multiple-choice',
          options: [
            'Permettre à l\'utilisateur de communiquer avec un correspondant',
            'Permettre à l\'utilisateur de naviguer sur Internet',
            'Respecter la réglementation sur le DAS (Débit d\'Absorption Spécifique)',
            'Permettre à l\'utilisateur de prendre des photos'
          ],
          answer: 2,
          points: 2,
          correction: 'Le DAS est une norme réglementaire imposée par un élément extérieur (la législation). Cela relie le produit à un <strong>seul</strong> élément → c\'est une $FC$. Les trois autres propositions relient l\'utilisateur à un autre élément via le produit → ce sont des $FS$.'
        },
        {
          statement: 'Quelle est la différence fondamentale entre une fonction de service et une fonction technique ?',
          type: 'multiple-choice',
          options: [
            'La fonction de service est plus importante que la fonction technique',
            'La fonction de service décrit le « quoi » (besoin), la fonction technique décrit le « comment » (solution retenue)',
            'La fonction technique est définie par l\'utilisateur, la fonction de service par l\'ingénieur',
            'Il n\'y a aucune différence, ce sont des synonymes'
          ],
          answer: 1,
          points: 2,
          correction: 'La fonction de service exprime le <strong>besoin</strong> (le « quoi »), indépendamment de toute solution. La fonction technique décrit la <strong>solution retenue</strong> (le « comment »). En analyse fonctionnelle (méthode APTE), on se concentre uniquement sur les fonctions de service et de contrainte.'
        },
        {
          statement: 'Un CdCF précise pour la fonction « maintenir la boisson à $65°$C $\\pm 5°$C ». Le critère est la température, le niveau est $65°$C. Quelle est la flexibilité (en °C) ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '°C',
          points: 2,
          correction: 'La flexibilité est la <strong>tolérance acceptable</strong> autour du niveau cible. Le CdCF indique $\\pm 5°$C, donc la flexibilité est $5°$C. Cela signifie que la température peut varier entre $60°$C et $70°$C.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     2. Chaîne d'énergie et chaîne d'information
     ------------------------------------------------------- */
  {
    id: 'si-2nde-chaines-energie-info',
    level: 2, subject: 'si',
    icon: '⚡',
    title: 'Chaîne d\'énergie et chaîne d\'information',
    subtitle: 'Alimenter, distribuer, convertir, transmettre / Acquérir, traiter, communiquer',
    keywords: ['Alimenter', 'Distribuer', 'Convertir', 'Transmettre', 'Acquérir', 'Traiter', 'Communiquer'],
    physics: 'La chaîne d\'énergie et la chaîne d\'information sont les deux piliers de l\'analyse de tout système automatisé, du robot industriel à la voiture autonome en passant par la chaîne de production.',

    cours: {
      intro: 'Tout système technique transforme de l\'<strong>énergie</strong> et utilise de l\'<strong>information</strong> pour fonctionner. Ces deux flux sont modélisés par deux chaînes complémentaires.<br/><br/>La <strong>chaîne d\'énergie</strong> décrit le parcours de l\'énergie en 4 blocs : <strong>Alimenter</strong> (batterie, secteur $230$ V, panneau solaire) → <strong>Distribuer</strong> (relais, contacteur, hacheur) → <strong>Convertir</strong> (moteur CC, moteur MAS, vérin, résistance chauffante) → <strong>Transmettre</strong> (réducteur, courroie, engrenage, crémaillère).<br/><br/>La <strong>chaîne d\'information</strong> décrit le parcours de l\'information en 3 blocs : <strong>Acquérir</strong> (capteurs) → <strong>Traiter</strong> (microcontrôleur, automate programmable) → <strong>Communiquer</strong> (afficheur, réseau, signalisation). Elle pilote la chaîne d\'énergie via des ordres.<br/><br/>Le <strong>rendement global</strong> $\\eta$ mesure l\'efficacité de la chaîne d\'énergie : c\'est le rapport $\\dfrac{P_{\\text{utile}}}{P_{\\text{absorbée}}}$, toujours compris entre $0$ et $1$.',
      definitions: [
        { term: 'Chaîne d\'énergie', def: 'Ensemble des composants assurant le flux d\'énergie. Ses 4 blocs : Alimenter → Distribuer → Convertir → Transmettre.' },
        { term: 'Chaîne d\'information', def: 'Ensemble des composants assurant le flux d\'information. Ses 3 blocs : Acquérir → Traiter → Communiquer. Elle pilote la chaîne d\'énergie.' },
        { term: 'Rendement ($\\eta$)', def: 'Rapport entre puissance utile et puissance absorbée : $\\eta = \\dfrac{P_{\\text{utile}}}{P_{\\text{absorbée}}}$. Compris entre $0$ et $1$. Les pertes sont principalement thermiques (effet Joule, frottement).' },
        { term: 'Actionneur', def: 'Composant du bloc « Convertir » qui transforme une énergie en une autre. Exemples : moteur CC (électrique $\\to$ mécanique rotation, $P \\approx 50$ à $500$ W), vérin (hydraulique $\\to$ translation).' }
      ],
      method: {
        title: 'Identifier les chaînes et calculer le rendement global',
        steps: [
          '<strong>Bloc Alimenter + Distribuer</strong> : Identifier la source d\'énergie et le distributeur.<br/>Exemples concrets : batterie Li-ion $12$ V / $7$ Ah (Alimenter) → relais électromécanique ou hacheur série (Distribuer).<br/>Un portail automatique : batterie $12$ V → carte de commande avec relais inverseur.',
          '<strong>Bloc Convertir + Transmettre</strong> : Le convertisseur (actionneur) transforme l\'énergie, le transmetteur l\'adapte.<br/>Exemples concrets : moteur CC $12$ V / $50$ W (Convertir) → réducteur roue-vis sans fin $r = 1/40$ + crémaillère (Transmettre) → le portail translate.<br/>Un store automatique : moteur tubulaire ($\\eta = 0{,}80$) → tube d\'enroulement.',
          '<strong>Chaîne d\'information</strong> : Capteur (Acquérir), microcontrôleur (Traiter), interface (Communiquer).<br/>Exemples concrets : capteur infrarouge de présence (Acquérir) → Arduino Uno / ATmega328 (Traiter) → LED de signalisation + buzzer (Communiquer).',
          '<strong>Rendement global</strong> : Multiplier les rendements de chaque bloc traversé : $\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\cdots \\times \\eta_n$.<br/>Exemple numérique : moteur CC ($\\eta_1 = 0{,}85$, soit $P_{\\text{utile}} = 0{,}85 \\times 200 = 170$ W) + réducteur ($\\eta_2 = 0{,}90$) → $\\eta_{\\text{global}} = 0{,}85 \\times 0{,}90 = 0{,}765$ soit $76{,}5\\%$. Puissance utile finale : $0{,}765 \\times 200 = 153$ W.'
        ]
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px" colspan="4">Chaîne d\'énergie</th><th style="border:1px solid var(--border);padding:8px" colspan="3">Chaîne d\'information</th></tr><tr><th style="border:1px solid var(--border);padding:8px">Alimenter</th><th style="border:1px solid var(--border);padding:8px">Distribuer</th><th style="border:1px solid var(--border);padding:8px">Convertir</th><th style="border:1px solid var(--border);padding:8px">Transmettre</th><th style="border:1px solid var(--border);padding:8px">Acquérir</th><th style="border:1px solid var(--border);padding:8px">Traiter</th><th style="border:1px solid var(--border);padding:8px">Communiquer</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Rôle</strong><br/>Fournir l\'énergie</td><td style="border:1px solid var(--border);padding:8px"><strong>Rôle</strong><br/>Répartir / moduler</td><td style="border:1px solid var(--border);padding:8px"><strong>Rôle</strong><br/>Transformer la nature</td><td style="border:1px solid var(--border);padding:8px"><strong>Rôle</strong><br/>Adapter et transmettre</td><td style="border:1px solid var(--border);padding:8px"><strong>Rôle</strong><br/>Mesurer une grandeur</td><td style="border:1px solid var(--border);padding:8px"><strong>Rôle</strong><br/>Décider / calculer</td><td style="border:1px solid var(--border);padding:8px"><strong>Rôle</strong><br/>Afficher / transmettre</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Batterie, secteur, panneau solaire</td><td style="border:1px solid var(--border);padding:8px">Relais, contacteur, hacheur</td><td style="border:1px solid var(--border);padding:8px">Moteur CC, MAS, vérin, résistance</td><td style="border:1px solid var(--border);padding:8px">Réducteur, courroie, engrenage</td><td style="border:1px solid var(--border);padding:8px">Capteur IR, LDR, ultrason</td><td style="border:1px solid var(--border);padding:8px">Arduino, automate, Raspberry Pi</td><td style="border:1px solid var(--border);padding:8px">Écran LCD, LED, Wi-Fi</td></tr></table>',
      example: {
        statement: 'Un store automatique est alimenté par le secteur ($230$ V). Un moteur tubulaire de rendement $\\eta_1 = 0{,}80$ entraîne un réducteur de rendement $\\eta_2 = 0{,}90$, qui fait tourner un tube d\'enroulement. La puissance absorbée par le moteur est $P_{\\text{abs}} = 150$ W. Calculer le rendement global et la puissance utile transmise au store.',
        steps: [
          'Rendement global : $\\eta = \\eta_1 \\times \\eta_2 = 0{,}80 \\times 0{,}90 = 0{,}72$ soit $72\\%$.',
          'Puissance utile : $P_{\\text{utile}} = \\eta \\times P_{\\text{abs}} = 0{,}72 \\times 150 = 108$ W.',
          'Pertes totales : $P_{\\text{pertes}} = P_{\\text{abs}} - P_{\\text{utile}} = 150 - 108 = 42$ W (dissipées en chaleur par effet Joule et frottement).'
        ],
        answer: '$\\eta = 0{,}72$ ($72\\%$) et $P_{\\text{utile}} = 108$ W. Les $42$ W de pertes sont dissipés en chaleur.'
      },
      formulas: [
        '$\\eta = \\dfrac{P_{\\text{utile}}}{P_{\\text{absorbée}}}$ (rendement, sans unité, entre $0$ et $1$)',
        '$\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\cdots \\times \\eta_n$ (produit des rendements en série)',
        '$P_{\\text{utile}} = \\eta \\times P_{\\text{absorbée}}$ (puissance utile, en W)',
        '$P_{\\text{pertes}} = (1 - \\eta) \\times P_{\\text{absorbée}}$ (puissance dissipée)',
        'Énergie : $E = P \\times t$ (en J si $t$ en s, en Wh si $t$ en h)'
      ],
      recap: [
        'La chaîne d\'énergie (Alimenter → Distribuer → Convertir → Transmettre) décrit le flux d\'énergie de la source à la matière d\'œuvre.',
        'La chaîne d\'information (Acquérir → Traiter → Communiquer) pilote la chaîne d\'énergie via des ordres.',
        'Le rendement global est le <strong>produit</strong> des rendements individuels — il est toujours inférieur au plus petit rendement.',
        'Les pertes sont principalement thermiques : effet Joule dans les conducteurs et frottement dans les transmissions mécaniques.'
      ],
      piege: 'Le rendement global n\'est <strong>pas</strong> la moyenne des rendements, c\'est leur <strong>produit</strong>. Exemple : deux blocs à $80\\%$ chacun donnent $0{,}80 \\times 0{,}80 = 0{,}64$ soit $64\\%$ (et non $80\\%$). Plus il y a d\'étages en série, plus le rendement global chute.'
    },

    quiz: [
      {
        q: 'Un moteur CC $12$ V / $60$ W alimente un réducteur puis une courroie. Dans quel bloc de la chaîne d\'énergie se situe le moteur ?',
        options: [
          'Alimenter — il fournit l\'énergie au système',
          'Distribuer — il répartit l\'énergie',
          'Convertir — il transforme l\'énergie électrique en mécanique',
          'Transmettre — il transmet le mouvement'
        ],
        answer: 2,
        correction: 'Le moteur CC convertit l\'énergie électrique en énergie mécanique de rotation : il assure le bloc <strong>Convertir</strong>. Le bloc Alimenter est assuré par la batterie ou le secteur, et le réducteur/courroie assurent le bloc Transmettre.'
      },
      {
        q: 'Un système comporte un hacheur ($\\eta_1 = 0{,}92$), un moteur ($\\eta_2 = 0{,}85$) et un réducteur ($\\eta_3 = 0{,}90$). La puissance absorbée est $P_{\\text{abs}} = 400$ W. Quelle est la puissance utile ?',
        options: [
          '$P_{\\text{utile}} = 400 \\times (0{,}92 + 0{,}85 + 0{,}90) / 3 \\approx 356$ W',
          '$P_{\\text{utile}} = 400 \\times 0{,}92 \\times 0{,}85 \\times 0{,}90 \\approx 281{,}5$ W',
          '$P_{\\text{utile}} = 400 \\times 0{,}92 \\approx 368$ W',
          '$P_{\\text{utile}} = 400 \\times 0{,}85 = 340$ W'
        ],
        answer: 1,
        correction: '$\\eta_{\\text{global}} = 0{,}92 \\times 0{,}85 \\times 0{,}90 = 0{,}7038$. Donc $P_{\\text{utile}} = 0{,}7038 \\times 400 = 281{,}5$ W. On multiplie les rendements (pas de moyenne !), puis on applique au $P_{\\text{abs}}$.'
      },
      {
        q: 'La chaîne d\'information se compose, dans l\'ordre, de :',
        options: [
          'Alimenter → Distribuer → Convertir → Transmettre',
          'Communiquer → Traiter → Acquérir',
          'Acquérir → Traiter → Communiquer',
          'Mesurer → Calculer → Afficher → Stocker'
        ],
        answer: 2,
        correction: 'La chaîne d\'information suit le flux : <strong>Acquérir</strong> (capteurs) → <strong>Traiter</strong> (microcontrôleur, automate) → <strong>Communiquer</strong> (afficheur, réseau). C\'est toujours dans cet ordre, du capteur vers l\'interface utilisateur. L\'option « Alimenter → Distribuer → Convertir → Transmettre » décrit la chaîne d\'énergie.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var nbBlocs = rand(2, 4);
        var rendements = [];
        var labels = [];
        var blocs = pick([
          [{ nom: 'hacheur', eta: [0.88, 0.95] }, { nom: 'moteur CC', eta: [0.75, 0.90] }, { nom: 'réducteur', eta: [0.85, 0.95] }, { nom: 'courroie', eta: [0.90, 0.98] }],
          [{ nom: 'transformateur', eta: [0.90, 0.97] }, { nom: 'variateur', eta: [0.88, 0.94] }, { nom: 'moteur MAS', eta: [0.80, 0.92] }, { nom: 'réducteur', eta: [0.85, 0.95] }],
          [{ nom: 'batterie', eta: [0.92, 0.98] }, { nom: 'hacheur', eta: [0.88, 0.95] }, { nom: 'moteur CC', eta: [0.78, 0.88] }, { nom: 'engrenage', eta: [0.90, 0.96] }]
        ]);
        for (var i = 0; i < nbBlocs; i++) {
          var b = blocs[i];
          var eta = randFloat(b.eta[0], b.eta[1], 2);
          rendements.push(eta);
          labels.push(b.nom);
        }
        var etaGlobal = 1;
        for (var j = 0; j < rendements.length; j++) {
          etaGlobal *= rendements[j];
        }
        etaGlobal = parseFloat(etaGlobal.toFixed(3));
        var Pabs = rand(2, 10) * 50;

        var systeme = pick([
          'un bras robotisé', 'un tapis roulant industriel', 'une pompe hydraulique',
          'un portail coulissant', 'un treuil de chantier', 'un convoyeur à bande'
        ]);

        var rendStr = rendements.map(function(r, idx) {
          return '$\\eta_' + (idx + 1) + ' = ' + r.toFixed(2).replace('.', '{,}') + '$ (' + labels[idx] + ')';
        }).join(', ');

        var solSteps = ['Système étudié : ' + systeme + ' avec ' + nbBlocs + ' blocs en série.'];
        solSteps.push('Rendement global : $\\eta = ' + rendements.map(function(r, idx) { return '\\eta_' + (idx + 1); }).join(' \\times ') + '$');
        solSteps.push('$\\eta = ' + rendements.map(function(r) { return r.toFixed(2).replace('.', '{,}'); }).join(' \\times ') + ' = ' + etaGlobal.toFixed(3).replace('.', '{,}') + '$');

        var Putile = parseFloat((etaGlobal * Pabs).toFixed(1));
        solSteps.push('Puissance utile : $P_{\\text{utile}} = \\eta \\times P_{\\text{abs}} = ' + etaGlobal.toFixed(3).replace('.', '{,}') + ' \\times ' + Pabs + ' = ' + Putile.toFixed(1).replace('.', '{,}') + '$ W');
        var Ppertes = parseFloat((Pabs - Putile).toFixed(1));
        solSteps.push('Pertes : $P_{\\text{pertes}} = ' + Pabs + ' - ' + Putile.toFixed(1).replace('.', '{,}') + ' = ' + Ppertes.toFixed(1).replace('.', '{,}') + '$ W dissipés en chaleur.');

        return {
          statement: 'La chaîne d\'énergie de ' + systeme + ' comporte ' + nbBlocs + ' blocs en série : ' + rendStr + '.<br/>La puissance absorbée en entrée est $P_{\\text{abs}} = ' + Pabs + '$ W.<br/><br/>Calcule la puissance utile $P_{\\text{utile}}$ en sortie (arrondie au dixième).',
          answer: Putile,
          tolerance: 2,
          unit: 'W',
          hint: 'Calcule d\'abord le rendement global : $\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\cdots$ (c\'est un <strong>produit</strong>, pas une moyenne). Puis applique : $P_{\\text{utile}} = \\eta_{\\text{global}} \\times P_{\\text{abs}}$.',
          solution: solSteps
        };
      }
    },

    probleme: {
      context: 'Un bras robotisé KUKA dans une usine automobile est alimenté par le réseau électrique ($230$ V, $50$ Hz). Il déplace des pièces métalliques de $5$ kg. La chaîne d\'énergie comporte : un transformateur $230$ V → $48$ V (rendement $\\eta_1 = 0{,}95$), un variateur de vitesse à IGBT ($\\eta_2 = 0{,}92$), un moteur brushless Maxon $48$ V / $200$ W ($\\eta_3 = 0{,}88$) et un réducteur planétaire ($\\eta_4 = 0{,}90$). La puissance absorbée au primaire du transformateur est $P_{\\text{abs}} = 800$ W.',
      tasks: [
        'Identifier les 4 blocs de la chaîne d\'énergie (Alimenter, Distribuer, Convertir, Transmettre) et associer chaque composant au bon bloc.',
        'Calculer le rendement global de la chaîne d\'énergie.',
        'Calculer la puissance utile transmise à la pièce métallique et la puissance totale perdue sous forme de chaleur.'
      ],
      solutions: [
        'Alimenter : réseau $230$ V / transformateur abaisseur. Distribuer : variateur de vitesse à IGBT. Convertir : moteur brushless Maxon (énergie électrique → mécanique de rotation). Transmettre : réducteur planétaire → bras articulé → pince → pièce.',
        '$\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\eta_3 \\times \\eta_4 = 0{,}95 \\times 0{,}92 \\times 0{,}88 \\times 0{,}90 = 0{,}6920$ soit environ $69{,}2\\%$.',
        '$P_{\\text{utile}} = \\eta \\times P_{\\text{abs}} = 0{,}692 \\times 800 = 553{,}6$ W. $P_{\\text{pertes}} = 800 - 553{,}6 = 246{,}4$ W dissipés en chaleur (effet Joule dans le moteur, frottement dans le réducteur, pertes cuivre/fer dans le transformateur).'
      ],
      finalAnswer: 'Le rendement global est d\'environ $69{,}2\\%$ et la puissance utile vaut $553{,}6$ W sur les $800$ W absorbés. Plus de $246$ W sont perdus en chaleur.'
    },

    evaluation: {
      title: 'Évaluation — Chaîne d\'énergie et chaîne d\'information',
      duration: '20 min',
      questions: [
        {
          statement: 'Un moteur CC $24$ V est relié à un réducteur à engrenages puis à une vis à billes. Quel bloc de la chaîne d\'énergie le moteur assure-t-il ?',
          type: 'multiple-choice',
          options: [
            'Alimenter',
            'Distribuer',
            'Convertir',
            'Transmettre'
          ],
          answer: 2,
          points: 2,
          correction: 'Le moteur CC convertit l\'énergie électrique en énergie mécanique de rotation. Il assure le bloc <strong>Convertir</strong>. Le réducteur et la vis à billes assurent le bloc Transmettre (ils adaptent et transmettent le mouvement).'
        },
        {
          statement: 'Un système industriel a deux blocs de rendements $\\eta_1 = 0{,}82$ (variateur) et $\\eta_2 = 0{,}91$ (moteur). La puissance absorbée est $P_{\\text{abs}} = 500$ W. Calculer la puissance utile en sortie (en W, arrondie à l\'unité).',
          type: 'numeric',
          answer: 373,
          tolerance: 2,
          unit: 'W',
          points: 3,
          correction: '$\\eta_{\\text{global}} = 0{,}82 \\times 0{,}91 = 0{,}7462$. Puis $P_{\\text{utile}} = 0{,}7462 \\times 500 = 373{,}1 \\approx 373$ W. Les pertes valent $500 - 373 = 127$ W.'
        },
        {
          statement: 'Dans un système automatisé de tri postal, quel composant assure la fonction « Acquérir » de la chaîne d\'information ?',
          type: 'multiple-choice',
          options: [
            'Le moteur du tapis roulant',
            'Le lecteur de code-barres (capteur optique)',
            'L\'automate programmable Siemens S7',
            'L\'écran de supervision SCADA'
          ],
          answer: 1,
          points: 2,
          correction: 'Le lecteur de code-barres est un <strong>capteur</strong> optique qui acquiert l\'information (identifiant du colis). Le moteur est dans la chaîne d\'énergie (bloc Convertir). L\'automate traite l\'information (bloc Traiter). L\'écran SCADA communique (bloc Communiquer).'
        },
        {
          statement: 'Un moteur MAS absorbe $P_{\\text{abs}} = 750$ W et a un rendement $\\eta = 0{,}84$. Quelle est la puissance perdue sous forme de chaleur (en W, arrondie à l\'unité) ?',
          type: 'numeric',
          answer: 120,
          tolerance: 2,
          unit: 'W',
          points: 3,
          correction: '$P_{\\text{utile}} = \\eta \\times P_{\\text{abs}} = 0{,}84 \\times 750 = 630$ W. Pertes : $P_{\\text{pertes}} = P_{\\text{abs}} - P_{\\text{utile}} = 750 - 630 = 120$ W. On peut aussi calculer directement : $P_{\\text{pertes}} = (1 - 0{,}84) \\times 750 = 0{,}16 \\times 750 = 120$ W.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     3. Capteurs et actionneurs
     ------------------------------------------------------- */
  {
    id: 'si-2nde-capteurs-actionneurs',
    level: 2, subject: 'si',
    icon: '📡',
    title: 'Capteurs et actionneurs',
    subtitle: 'Types de capteurs, actionneurs, signaux analogique/numérique, résolution d\'un CAN',
    keywords: ['Capteur', 'Actionneur', 'Signal', 'Analogique', 'Numérique'],
    physics: 'Les capteurs et actionneurs sont les interfaces entre le monde physique et le monde numérique : on les retrouve dans les smartphones (accéléromètre, gyroscope), les voitures (radar, lidar) et les objets connectés (IoT).',

    cours: {
      intro: 'Un <strong>capteur</strong> mesure une grandeur physique (température, distance, luminosité, pression…) et la convertit en un signal électrique exploitable. Un <strong>actionneur</strong> reçoit un signal de commande et produit une action physique (mouvement, chaleur, lumière…).<br/><br/>Le signal issu d\'un capteur peut être <strong>analogique</strong> (continu, prenant une infinité de valeurs) ou <strong>numérique</strong> (discret, codé en $0$ et $1$). Pour qu\'un microcontrôleur (Arduino, STM32) puisse traiter un signal analogique, il faut le convertir via un <strong>Convertisseur Analogique-Numérique (CAN)</strong>.<br/><br/>La résolution du CAN, appelée <strong>quantum</strong> $q$, est la plus petite variation de tension détectable : $q = \\dfrac{V_{\\text{max}} - V_{\\text{min}}}{2^n}$ où $n$ est le nombre de bits. Plus $n$ est grand, plus la mesure est fine.<br/><br/>Exemples de capteurs courants en SI : <strong>LM35</strong> (température, sortie $10$ mV/°C), <strong>HC-SR04</strong> (distance ultrason, portée $2$ cm à $4$ m), <strong>LDR</strong> (luminosité, résistance variable).',
      definitions: [
        { term: 'Capteur', def: 'Composant qui mesure une grandeur physique et la convertit en signal électrique. Exemples : LM35 (température, $10$ mV/°C), HC-SR04 (distance ultrason), LDR (luminosité).' },
        { term: 'Actionneur', def: 'Composant qui reçoit une commande et produit une action physique. Exemples : moteur CC (rotation), servomoteur (position angulaire), vérin (translation), LED (lumière).' },
        { term: 'Signal analogique', def: 'Signal continu pouvant prendre une infinité de valeurs dans une plage. Exemple : la tension aux bornes d\'un LM35 varie continûment de $0$ à $1$ V pour $0$ à $100°$C.' },
        { term: 'Convertisseur Analogique-Numérique (CAN)', def: 'Circuit qui transforme une tension analogique en nombre binaire. Caractérisé par sa résolution $n$ (bits) et sa plage ($V_{\\text{max}} - V_{\\text{min}}$). Le CAN de l\'Arduino Uno a $n = 10$ bits et une plage de $0$ à $5$ V.' }
      ],
      method: {
        title: 'Calculer la résolution d\'un CAN et convertir une tension',
        steps: [
          '<strong>Calculer le quantum $q$</strong> : c\'est la plus petite variation de tension détectable.<br/>Formule : $q = \\dfrac{V_{\\text{max}} - V_{\\text{min}}}{2^n}$.<br/>Exemple : CAN 10 bits de l\'Arduino Uno, plage $0$–$5$ V → $q = \\dfrac{5}{2^{10}} = \\dfrac{5}{1024} \\approx 4{,}88$ mV.',
          '<strong>Convertir une tension en valeur numérique</strong> : $N = \\left\\lfloor \\dfrac{V - V_{\\text{min}}}{q} \\right\\rfloor$ (arrondi à l\'entier inférieur).<br/>Exemple : LM35 mesure $25°$C → $V = 0{,}25$ V → $N = \\left\\lfloor \\dfrac{0{,}25}{0{,}00488} \\right\\rfloor = \\lfloor 51{,}2 \\rfloor = 51$. En Arduino : <code>int N = analogRead(A0);</code>',
          '<strong>Reconvertir (CNA)</strong> : $V_{\\text{reconstitué}} = N \\times q + V_{\\text{min}}$. L\'erreur maximale de quantification est $\\dfrac{q}{2}$.<br/>Exemple : $V = 51 \\times 0{,}00488 = 0{,}2489$ V, soit une erreur de $0{,}0011$ V ($\\approx 0{,}1°$C pour le LM35).'
        ]
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Grandeur mesurée</th><th style="border:1px solid var(--border);padding:8px">Capteur</th><th style="border:1px solid var(--border);padding:8px">Référence</th><th style="border:1px solid var(--border);padding:8px">Type de sortie</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Température</td><td style="border:1px solid var(--border);padding:8px">Sonde analogique</td><td style="border:1px solid var(--border);padding:8px">LM35</td><td style="border:1px solid var(--border);padding:8px">Analogique ($10$ mV/°C)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Distance</td><td style="border:1px solid var(--border);padding:8px">Capteur ultrason</td><td style="border:1px solid var(--border);padding:8px">HC-SR04</td><td style="border:1px solid var(--border);padding:8px">Numérique (durée d\'écho en $\\mu$s)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Luminosité</td><td style="border:1px solid var(--border);padding:8px">Photorésistance</td><td style="border:1px solid var(--border);padding:8px">LDR</td><td style="border:1px solid var(--border);padding:8px">Analogique (résistance variable)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Pression</td><td style="border:1px solid var(--border);padding:8px">Capteur piézorésistif</td><td style="border:1px solid var(--border);padding:8px">BMP280</td><td style="border:1px solid var(--border);padding:8px">Numérique (I2C)</td></tr></table>',
      example: {
        statement: 'Un capteur de température LM35 ($10$ mV/°C) est connecté à l\'entrée analogique A0 d\'un Arduino Uno (CAN $10$ bits, plage $0$–$5$ V). La température ambiante est de $22°$C. Calculer la tension $V$, le quantum $q$ et la valeur numérique $N$ lue par l\'Arduino.',
        steps: [
          'Tension délivrée par le LM35 : $V = 10 \\times 10^{-3} \\times 22 = 0{,}22$ V.',
          'Quantum : $q = \\dfrac{5 - 0}{2^{10}} = \\dfrac{5}{1024} \\approx 0{,}004883$ V soit $\\approx 4{,}88$ mV.',
          'Valeur numérique : $N = \\left\\lfloor \\dfrac{0{,}22}{0{,}004883} \\right\\rfloor = \\lfloor 45{,}1 \\rfloor = 45$.',
          'Vérification : $V_{\\text{reconstitué}} = 45 \\times 0{,}004883 = 0{,}2197$ V → température reconstituée $\\approx 22{,}0°$C.'
        ],
        answer: '$V = 0{,}22$ V, $q \\approx 4{,}88$ mV et $N = 45$.'
      },
      formulas: [
        '$q = \\dfrac{V_{\\text{max}} - V_{\\text{min}}}{2^n}$ (quantum, en V)',
        '$N = \\left\\lfloor \\dfrac{V - V_{\\text{min}}}{q} \\right\\rfloor$ (valeur numérique en sortie du CAN)',
        '$V_{\\text{reconstitué}} = N \\times q + V_{\\text{min}}$ (reconversion CNA)',
        'Nombre de niveaux $= 2^n$ ($2^8 = 256$, $2^{10} = 1024$, $2^{12} = 4096$)',
        'Erreur maximale de quantification $= \\dfrac{q}{2}$'
      ],
      recap: [
        'Un capteur convertit une grandeur physique en signal électrique ; un actionneur fait l\'inverse.',
        'Signal analogique = continu (infinité de valeurs). Signal numérique = discret (codé en bits).',
        'Le quantum du CAN : $q = \\dfrac{V_{\\text{max}} - V_{\\text{min}}}{2^n}$. Plus $n$ est grand, plus $q$ est petit et la mesure est précise.',
        'Chaque bit supplémentaire <strong>double</strong> le nombre de niveaux et <strong>divise</strong> le quantum par $2$.'
      ],
      piege: 'Attention : le dénominateur est $2^n$ (pas $2n$ ni $n^2$). Un CAN $10$ bits a $2^{10} = 1024$ niveaux, pas $20$ ni $100$. Aussi, le HC-SR04 donne une <strong>durée</strong> d\'écho (en $\\mu$s), pas directement une distance : il faut diviser par $2$ (aller-retour) et multiplier par la vitesse du son ($340$ m/s).'
    },

    quiz: [
      {
        q: 'Un Arduino Uno (CAN $10$ bits, plage $0$–$5$ V) lit la valeur $N = 512$. Quelle est la tension correspondante ?',
        options: [
          '$V = 512 \\times \\dfrac{5}{1024} = 2{,}5$ V',
          '$V = 512 \\times \\dfrac{5}{1023} \\approx 2{,}502$ V',
          '$V = 512 / 5 = 102{,}4$ V',
          '$V = 5 / 512 \\approx 0{,}01$ V'
        ],
        answer: 0,
        correction: '$q = \\dfrac{5}{2^{10}} = \\dfrac{5}{1024} \\approx 4{,}88$ mV. Donc $V = N \\times q = 512 \\times \\dfrac{5}{1024} = 2{,}5$ V. C\'est logique : $N = 512$ correspond à la moitié de la plage ($1024 / 2$), soit la moitié de $5$ V.'
      },
      {
        q: 'Le capteur LM35 délivre une tension de $10$ mV par degré Celsius. Pour mesurer une température de $45°$C, quelle tension produit-il ?',
        options: [
          '$V = 0{,}045$ V',
          '$V = 0{,}45$ V',
          '$V = 4{,}5$ V',
          '$V = 45$ V'
        ],
        answer: 1,
        correction: '$V = 10 \\text{ mV/°C} \\times 45°\\text{C} = 450$ mV $= 0{,}45$ V. Le LM35 est un capteur linéaire : la tension est directement proportionnelle à la température. À $100°$C, il délivre $1$ V.'
      },
      {
        q: 'En passant d\'un CAN $8$ bits à un CAN $12$ bits (même plage $0$–$5$ V), le quantum est :',
        options: [
          'Divisé par $4$',
          'Divisé par $16$',
          'Multiplié par $16$',
          'Inchangé'
        ],
        answer: 1,
        correction: '$q_8 = \\dfrac{5}{2^8} = \\dfrac{5}{256}$ et $q_{12} = \\dfrac{5}{2^{12}} = \\dfrac{5}{4096}$. Rapport : $\\dfrac{q_{12}}{q_8} = \\dfrac{256}{4096} = \\dfrac{1}{16}$. On gagne $4$ bits, soit $2^4 = 16$ fois plus de niveaux, donc le quantum est divisé par $16$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var n = pick([8, 10, 12]);
        var niveaux = Math.pow(2, n);
        var Vmax = pick([3.3, 5.0]);
        var Vmin = 0;
        var q = (Vmax - Vmin) / niveaux;
        var qArrondi = parseFloat((q * 1000).toFixed(2));

        var VmaxStr = Vmax.toFixed(1).replace('.', '{,}');

        var capteur = pick([
          { nom: 'un capteur de température LM35', plage: '0°C à ' + (Vmax * 100).toFixed(0) + '°C' },
          { nom: 'une photorésistance (LDR)', plage: '0 lux à 10 000 lux' },
          { nom: 'un capteur de pression piézorésistif', plage: '0 à 10 bar' },
          { nom: 'un potentiomètre rotatif', plage: '0° à 270°' }
        ]);

        var carte = n === 10 ? 'un Arduino Uno' : (n === 12 ? 'une carte STM32' : 'un microcontrôleur 8 bits');

        return {
          statement: capteur.nom + ' (plage de mesure : ' + capteur.plage + ') est connecté à ' + carte + ' équipé d\'un CAN de $' + n + '$ bits. La plage de tension va de $' + Vmin + '$ V à $' + VmaxStr + '$ V.<br/><br/>Calcule le quantum $q$ du CAN en millivolts (arrondi au centième).',
          answer: qArrondi,
          tolerance: 0.05,
          unit: 'mV',
          hint: 'Utilise la formule $q = \\dfrac{V_{\\text{max}} - V_{\\text{min}}}{2^n}$. N\'oublie pas que $2^{' + n + '} = ' + niveaux + '$. Convertis ensuite le résultat en millivolts ($\\times 1000$).',
          solution: [
            'Nombre de niveaux de quantification : $2^{' + n + '} = ' + niveaux + '$.',
            'Quantum : $q = \\dfrac{' + VmaxStr + ' - 0}{' + niveaux + '} = \\dfrac{' + VmaxStr + '}{' + niveaux + '} = ' + q.toFixed(6).replace('.', '{,}') + '$ V.',
            'Conversion en millivolts : $q = ' + q.toFixed(6).replace('.', '{,}') + ' \\times 1000 = ' + qArrondi.toFixed(2).replace('.', '{,}') + '$ mV.',
            'Interprétation : le CAN ne peut pas détecter de variation de tension inférieure à $' + qArrondi.toFixed(2).replace('.', '{,}') + '$ mV.'
          ]
        };
      }
    },

    probleme: {
      context: 'Une serre automatisée utilise un capteur de température LM35 ($10$ mV/°C, précision $\\pm 0{,}5°$C) connecté à l\'entrée analogique A0 d\'un Arduino Uno (CAN $10$ bits, plage $0$–$5$ V). Lorsque la température dépasse $30°$C, un ventilateur (moteur CC $12$ V commandé via un relais sur la broche $7$) doit se mettre en marche automatiquement.',
      tasks: [
        'Calculer le quantum $q$ du CAN de l\'Arduino (en mV, arrondi au centième).',
        'Déterminer la tension $V$ délivrée par le LM35 à $T = 30°$C, puis le nombre numérique $N$ que l\'Arduino lit via <code>analogRead(A0)</code>.',
        'Écrire la condition Arduino pour déclencher le ventilateur : <code>if (analogRead(A0) >= ???) { digitalWrite(7, HIGH); }</code>'
      ],
      solutions: [
        '$q = \\dfrac{5 - 0}{2^{10}} = \\dfrac{5}{1024} \\approx 0{,}004883$ V $\\approx 4{,}88$ mV.',
        '$V = 10 \\times 10^{-3} \\times 30 = 0{,}30$ V. $N = \\left\\lfloor \\dfrac{0{,}30}{0{,}004883} \\right\\rfloor = \\lfloor 61{,}4 \\rfloor = 61$. En Arduino : <code>int N = analogRead(A0);</code> retourne $\\approx 61$.',
        'Condition : <code>if (analogRead(A0) >= 61) { digitalWrite(7, HIGH); } else { digitalWrite(7, LOW); }</code>. Le seuil $N = 61$ correspond à $T \\geq 30°$C.'
      ],
      finalAnswer: 'Le quantum est $\\approx 4{,}88$ mV. À $30°$C, le LM35 délivre $0{,}30$ V et le CAN lit $N = 61$. Le programme compare <code>analogRead(A0)</code> à $61$ pour commander le relais du ventilateur.'
    },

    evaluation: {
      title: 'Évaluation — Capteurs et actionneurs',
      duration: '20 min',
      questions: [
        {
          statement: 'Un CAN de $12$ bits (carte STM32) a une plage de $0$ à $3{,}3$ V. Calculer le quantum $q$ en millivolts (arrondi au centième).',
          type: 'numeric',
          answer: 0.81,
          tolerance: 0.02,
          unit: 'mV',
          points: 3,
          correction: '$q = \\dfrac{3{,}3}{2^{12}} = \\dfrac{3{,}3}{4096} \\approx 0{,}000806$ V $= 0{,}81$ mV. Avec $12$ bits, on obtient $4096$ niveaux de quantification, ce qui donne une résolution très fine.'
        },
        {
          statement: 'Le capteur ultrason HC-SR04 mesure une distance de $1{,}5$ m. Sachant que la vitesse du son est $v = 340$ m/s, quelle est la durée totale (aller-retour) de l\'écho en microsecondes (arrondie à l\'entier) ?',
          type: 'numeric',
          answer: 8824,
          tolerance: 20,
          unit: 'μs',
          points: 3,
          correction: 'L\'onde parcourt $2 \\times 1{,}5 = 3$ m (aller-retour). Durée : $t = \\dfrac{d}{v} = \\dfrac{3}{340} \\approx 0{,}008824$ s $= 8824$ $\\mu$s. En Arduino : <code>distance = durée * 0.034 / 2;</code>'
        },
        {
          statement: 'Parmi ces composants, lequel est un <strong>actionneur</strong> ?',
          type: 'multiple-choice',
          options: [
            'Un capteur ultrason HC-SR04',
            'Une photorésistance (LDR)',
            'Un servomoteur (type SG90)',
            'Un potentiomètre utilisé comme capteur d\'angle'
          ],
          answer: 2,
          points: 2,
          correction: 'Le servomoteur SG90 reçoit un signal PWM et produit un mouvement de rotation contrôlé (action physique) : c\'est un <strong>actionneur</strong>. Le HC-SR04, la LDR et le potentiomètre sont des capteurs (ils mesurent une grandeur physique).'
        },
        {
          statement: 'Un signal analogique varie entre $0$ et $5$ V. Un CAN $10$ bits le numérise. Combien de niveaux de quantification sont possibles ?',
          type: 'numeric',
          answer: 1024,
          tolerance: 0,
          unit: 'niveaux',
          points: 1,
          correction: 'Nombre de niveaux $= 2^n = 2^{10} = 1024$. Chaque bit supplémentaire double le nombre de niveaux : $2^8 = 256$, $2^{10} = 1024$, $2^{12} = 4096$.'
        },
        {
          statement: 'Un capteur LM35 ($10$ mV/°C) mesure $T = 37°$C. Il est connecté à un Arduino Uno (CAN $10$ bits, $0$–$5$ V). Quelle valeur $N$ retourne <code>analogRead()</code> ?',
          type: 'numeric',
          answer: 75,
          tolerance: 1,
          unit: '',
          points: 1,
          correction: '$V = 10 \\times 10^{-3} \\times 37 = 0{,}37$ V. $q = \\dfrac{5}{1024} \\approx 0{,}00488$ V. $N = \\left\\lfloor \\dfrac{0{,}37}{0{,}00488} \\right\\rfloor = \\lfloor 75{,}8 \\rfloor = 75$.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     4. Initiation à la programmation (Arduino/Python)
     ------------------------------------------------------- */
  {
    id: 'si-2nde-programmation',
    level: 2, subject: 'si',
    icon: '💻',
    title: 'Initiation à la programmation (Arduino/Python)',
    subtitle: 'Variables, boucles, conditions, entrées/sorties numériques et analogiques',
    keywords: ['Variable', 'Boucle', 'Condition', 'Fonction', 'Arduino'],
    physics: 'La programmation est au cœur des systèmes embarqués : elle permet de commander des robots, des drones, des objets connectés et des automates industriels. L\'Arduino est la plateforme de référence pour l\'apprentissage.',

    cours: {
      intro: 'La programmation permet de donner des instructions à un microcontrôleur pour qu\'il exécute des tâches automatiquement. L\'<strong>Arduino Uno</strong> (microcontrôleur ATmega328P) est la carte la plus utilisée en enseignement de SI.<br/><br/>Un programme Arduino comporte toujours deux fonctions obligatoires :<br/>— <code>void setup()</code> : exécutée une seule fois au démarrage (configuration des broches) ;<br/>— <code>void loop()</code> : exécutée en boucle infinie (logique principale).<br/><br/>Les <strong>briques fondamentales</strong> de la programmation sont :<br/>— les <strong>variables</strong> (stockent des données : <code>int</code>, <code>float</code>, <code>bool</code>) ;<br/>— les <strong>conditions</strong> (<code>if/else</code> : exécutent un bloc selon un test) ;<br/>— les <strong>boucles</strong> (<code>for</code>, <code>while</code> : répètent un bloc).<br/><br/>Fonctions d\'entrée/sortie essentielles :<br/>— <code>digitalRead(pin)</code> : lit un état binaire ($0$ ou $1$) ;<br/>— <code>digitalWrite(pin, HIGH/LOW)</code> : écrit un état binaire ;<br/>— <code>analogRead(pin)</code> : lit une tension analogique (retourne $0$ à $1023$).',
      definitions: [
        { term: 'Variable', def: 'Espace mémoire nommé qui stocke une valeur modifiable. Types courants : <code>int</code> (entier), <code>float</code> (décimal), <code>bool</code> (vrai/faux). Exemple : <code>int compteur = 0;</code>' },
        { term: 'Condition (if/else)', def: 'Exécute un bloc si la condition est vraie, un autre sinon. Exemple : <code>if (analogRead(A0) > 500) { digitalWrite(13, HIGH); } else { digitalWrite(13, LOW); }</code>' },
        { term: 'Boucle for', def: 'Répète un bloc un nombre connu de fois. Syntaxe : <code>for (init; condition; incrément) { ... }</code>. Exemple : <code>for (int i = 0; i < 10; i++)</code> exécute le bloc $10$ fois.' },
        { term: 'Boucle while', def: 'Répète un bloc tant qu\'une condition est vraie. Le nombre de répétitions n\'est pas connu à l\'avance. Exemple : <code>while (digitalRead(2) == LOW) { /* attendre */ }</code>' }
      ],
      method: {
        title: 'Analyser un programme en 3 étapes',
        steps: [
          '<strong>Identifier les variables et leurs valeurs initiales</strong> : Repérer chaque déclaration et noter la valeur de départ. Suivre chaque modification au fil du programme.<br/>Exemple : <code>int x = 5;</code> → $x$ commence à $5$. Si on écrit <code>x = x + 3;</code>, alors $x$ passe à $8$.',
          '<strong>Dérouler les boucles itération par itération</strong> : Pour <code>for (i = 0; i < n; i++)</code>, le bloc s\'exécute $n$ fois. Noter la valeur de chaque variable à chaque itération.<br/>Exemple : <code>int s = 0; for (int i = 1; i <= 3; i++) { s = s + i; }</code><br/>Itération 1 : $s = 0 + 1 = 1$. Itération 2 : $s = 1 + 2 = 3$. Itération 3 : $s = 3 + 3 = 6$.',
          '<strong>Évaluer les conditions avec les valeurs courantes</strong> : Pour chaque <code>if</code>, tester la condition avec les valeurs du moment. Si vraie → bloc <code>if</code> ; sinon → bloc <code>else</code>.<br/>Exemple : Si $s = 6$ et la condition est <code>if (s > 5)</code>, la condition est vraie → on exécute le bloc <code>if</code>.'
        ]
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Type</th><th style="border:1px solid var(--border);padding:8px">Arduino (C++)</th><th style="border:1px solid var(--border);padding:8px">Python</th><th style="border:1px solid var(--border);padding:8px">Exemple de valeur</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Entier</strong></td><td style="border:1px solid var(--border);padding:8px"><code>int x = 10;</code></td><td style="border:1px solid var(--border);padding:8px"><code>x = 10</code></td><td style="border:1px solid var(--border);padding:8px">$10$, $-3$, $1024$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Décimal</strong></td><td style="border:1px solid var(--border);padding:8px"><code>float t = 3.14;</code></td><td style="border:1px solid var(--border);padding:8px"><code>t = 3.14</code></td><td style="border:1px solid var(--border);padding:8px">$3{,}14$, $0{,}5$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Booléen</strong></td><td style="border:1px solid var(--border);padding:8px"><code>bool etat = true;</code></td><td style="border:1px solid var(--border);padding:8px"><code>etat = True</code></td><td style="border:1px solid var(--border);padding:8px"><code>true</code> / <code>false</code></td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Chaîne</strong></td><td style="border:1px solid var(--border);padding:8px"><code>String msg = "OK";</code></td><td style="border:1px solid var(--border);padding:8px"><code>msg = "OK"</code></td><td style="border:1px solid var(--border);padding:8px"><code>"Bonjour"</code></td></tr></table>',
      example: {
        statement: 'On considère le programme Arduino suivant. Quelle est la valeur finale de <code>s</code> ?\n\n<code>int s = 0;</code>\n<code>for (int i = 1; i <= 4; i++) {</code>\n<code>  s = s + i * i;</code>\n<code>}</code>',
        steps: [
          'Initialisation : $s = 0$.',
          'Itération $i = 1$ : $s = 0 + 1^2 = 0 + 1 = 1$.',
          'Itération $i = 2$ : $s = 1 + 2^2 = 1 + 4 = 5$.',
          'Itération $i = 3$ : $s = 5 + 3^2 = 5 + 9 = 14$.',
          'Itération $i = 4$ : $s = 14 + 4^2 = 14 + 16 = 30$.',
          'La boucle s\'arrête car $i = 5 > 4$. Valeur finale : $s = 30 = 1^2 + 2^2 + 3^2 + 4^2$.'
        ],
        answer: 'La valeur finale de $s$ est $30$. C\'est la somme des carrés : $1^2 + 2^2 + 3^2 + 4^2 = 30$.'
      },
      formulas: [
        'Boucle <code>for (i = a; i < b; i++)</code> → nombre d\'itérations $= b - a$',
        'Boucle <code>for (i = a; i <= b; i++)</code> → nombre d\'itérations $= b - a + 1$',
        'Somme des entiers de $1$ à $n$ : $S = \\dfrac{n(n+1)}{2}$',
        'Après $k$ itérations d\'un incrément constant $+c$ : valeur $= \\text{init} + k \\times c$',
        '<code>analogRead()</code> retourne un entier entre $0$ et $1023$ (CAN $10$ bits)'
      ],
      recap: [
        'Un programme Arduino est structuré en <code>setup()</code> (initialisation) et <code>loop()</code> (boucle infinie).',
        '<code>for (i = 0; i < n; i++)</code> s\'exécute exactement $n$ fois. Attention : <code>< n</code> et <code><= n</code> ne donnent pas le même résultat !',
        'Pour trouver la valeur finale d\'une variable, dérouler le programme itération par itération.',
        '<code>digitalRead/Write</code> = binaire ($0$/$1$). <code>analogRead</code> = valeur $0$–$1023$.'
      ],
      piege: 'Attention à la borne de la boucle ! <code>for (i = 0; i < 5; ...)</code> fait $5$ itérations ($i = 0, 1, 2, 3, 4$), tandis que <code>for (i = 0; i <= 5; ...)</code> en fait $6$ ($i = 0, 1, 2, 3, 4, 5$). La différence entre <code><</code> et <code><=</code> change le résultat — c\'est une source d\'erreur très fréquente en programmation !'
    },

    quiz: [
      {
        q: 'On exécute : <code>int x = 2; for (int i = 0; i < 5; i++) { x = x * 2; }</code>. Quelle est la valeur finale de <code>x</code> ?',
        options: [
          '$20$ (car $2 \\times 2 \\times 5 = 20$)',
          '$64$ (car $x = 2 \\times 2^5 = 64$)',
          '$32$ (car $x = 2^5 = 32$)',
          '$12$ (car $x = 2 + 2 \\times 5 = 12$)'
        ],
        answer: 1,
        correction: '$x = 2$. À chaque itération, $x$ est multiplié par $2$. Après $5$ itérations : $x = 2 \\times 2^5 = 2^6 = 64$. Déroulons : $2 \\to 4 \\to 8 \\to 16 \\to 32 \\to 64$. Attention : le résultat n\'est pas $2^5 = 32$ car la valeur initiale est déjà $2$.'
      },
      {
        q: 'Sur un Arduino Uno, on écrit <code>int val = analogRead(A0);</code>. Le capteur délivre $2{,}5$ V. Quelle valeur contient <code>val</code> ?',
        options: [
          '$val = 2{,}5$',
          '$val = 250$',
          '$val \\approx 512$',
          '$val = 1023$'
        ],
        answer: 2,
        correction: 'Le CAN $10$ bits convertit la plage $0$–$5$ V en valeurs $0$–$1023$. Pour $V = 2{,}5$ V : $val = \\dfrac{2{,}5}{5} \\times 1024 \\approx 512$. Comme $2{,}5$ V est la moitié de $5$ V, on obtient la moitié de $1024$.'
      },
      {
        q: 'On exécute : <code>int c = 0; for (int i = 1; i <= 100; i++) { if (i % 2 == 0) { c++; } }</code>. Quelle est la valeur finale de <code>c</code> ?',
        options: [
          '$100$',
          '$50$',
          '$99$',
          '$51$'
        ],
        answer: 1,
        correction: 'La condition <code>i % 2 == 0</code> teste si $i$ est pair. Parmi les entiers de $1$ à $100$, il y a exactement $50$ nombres pairs ($2, 4, 6, \\ldots, 100$). Donc <code>c</code> est incrémenté $50$ fois : $c = 50$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var initVal = rand(0, 5);
        var increment = rand(1, 5);
        var nbIter = rand(3, 8);
        var borneType = pick(['<', '<=']);
        var borne, realIter;
        if (borneType === '<') {
          borne = nbIter;
          realIter = nbIter;
        } else {
          borne = nbIter - 1;
          realIter = nbIter;
        }
        var finalVal = initVal + realIter * increment;

        var condStr = borneType === '<' ? 'i < ' + borne : 'i <= ' + borne;

        var contexte = pick([
          'Un programme Arduino compte les impulsions d\'un capteur',
          'Un robot éducatif exécute une séquence de mouvements',
          'Un système de tri automatique traite des pièces',
          'Un programme de surveillance mesure la température'
        ]);

        return {
          statement: contexte + '. On exécute le programme suivant :\n\n<code>int s = ' + initVal + ';</code>\n<code>for (int i = 0; ' + condStr + '; i++) {</code>\n<code>  s = s + ' + increment + ';</code>\n<code>}</code>\n\nQuelle est la valeur finale de <code>s</code> ?',
          answer: finalVal,
          tolerance: 0,
          unit: '',
          hint: 'Détermine d\'abord le nombre d\'itérations. Avec la condition <code>' + condStr + '</code>, $i$ va de $0$ à $' + (realIter - 1) + '$, soit $' + realIter + '$ itérations. Puis : $s_{\\text{final}} = s_{\\text{init}} + \\text{nb\\_itérations} \\times \\text{incrément}$.',
          solution: [
            'Analyse de la boucle : <code>' + condStr + '</code> → $i$ prend les valeurs $0, 1, 2, \\ldots, ' + (realIter - 1) + '$.',
            'Nombre d\'itérations : $' + realIter + '$ (car $i$ va de $0$ à $' + (realIter - 1) + '$).',
            'À chaque itération, <code>s</code> augmente de $' + increment + '$.',
            'Valeur finale : $s = ' + initVal + ' + ' + realIter + ' \\times ' + increment + ' = ' + initVal + ' + ' + (realIter * increment) + ' = ' + finalVal + '$.'
          ]
        };
      }
    },

    probleme: {
      context: 'Un élève programme un Arduino Uno pour surveiller la luminosité d\'une salle de classe à l\'aide d\'une photorésistance (LDR) branchée sur l\'entrée analogique <code>A0</code> via un pont diviseur. Le programme doit allumer une LED (broche $13$) lorsque la luminosité est faible (valeur lue $< 300$) et l\'éteindre sinon. De plus, le programme doit compter le nombre de fois que la LED a été allumée sur une série de $50$ mesures, avec un intervalle de $200$ ms entre chaque mesure.',
      tasks: [
        'Écrire le programme Arduino complet : déclaration des variables dans <code>setup()</code>, lecture du capteur avec <code>analogRead(A0)</code>, condition d\'allumage avec <code>digitalWrite(13, HIGH/LOW)</code>, et comptage dans <code>loop()</code>.',
        'Si, sur les $50$ mesures, le capteur renvoie $18$ fois une valeur inférieure à $300$, quelle est la valeur finale du compteur ?',
        'Si on remplace la condition <code>< 300</code> par <code><= 300</code> et que $5$ mesures valent exactement $300$, combien de fois la LED est-elle allumée au total (sachant que $18$ mesures sont strictement inférieures à $300$) ?'
      ],
      solutions: [
        '<code>void setup() { pinMode(13, OUTPUT); }</code>\n<code>void loop() {</code>\n<code>  int compteur = 0;</code>\n<code>  for (int i = 0; i < 50; i++) {</code>\n<code>    int val = analogRead(A0);</code>\n<code>    if (val < 300) {</code>\n<code>      digitalWrite(13, HIGH);</code>\n<code>      compteur++;</code>\n<code>    } else {</code>\n<code>      digitalWrite(13, LOW);</code>\n<code>    }</code>\n<code>    delay(200);</code>\n<code>  }</code>\n<code>}</code>',
        'Le compteur est incrémenté à chaque mesure inférieure à $300$. Sur $50$ mesures, $18$ satisfont la condition <code>val < 300</code>. Donc compteur $= 18$.',
        'Avec <code><= 300</code>, les $18$ mesures strictement inférieures à $300$ <strong>et</strong> les $5$ mesures égales à $300$ déclenchent l\'allumage. Total : $18 + 5 = 23$ fois. La différence entre <code><</code> et <code><=</code> modifie le comportement du système.'
      ],
      finalAnswer: 'Compteur $= 18$ avec <code><</code>, et $23$ avec <code><=</code>. Un seul caractère (<code>=</code>) change le comportement de $5$ mesures !'
    },

    evaluation: {
      title: 'Évaluation — Initiation à la programmation',
      duration: '20 min',
      questions: [
        {
          statement: 'On exécute : <code>int s = 0; for (int i = 1; i <= 10; i++) { s = s + i; }</code>. Quelle est la valeur finale de <code>s</code> ?',
          type: 'numeric',
          answer: 55,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'La boucle calcule $s = 1 + 2 + 3 + \\cdots + 10 = \\dfrac{10 \\times 11}{2} = 55$. On peut vérifier en déroulant : $0 \\to 1 \\to 3 \\to 6 \\to 10 \\to 15 \\to 21 \\to 28 \\to 36 \\to 45 \\to 55$.'
        },
        {
          statement: 'On exécute : <code>int x = 100; for (int i = 0; i < 5; i++) { x = x - 7; }</code>. Quelle est la valeur finale de <code>x</code> ?',
          type: 'numeric',
          answer: 65,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$5$ itérations, chaque fois $x$ diminue de $7$. Formule directe : $x = 100 - 5 \\times 7 = 100 - 35 = 65$. Vérification par déroulement : $100 \\to 93 \\to 86 \\to 79 \\to 72 \\to 65$.'
        },
        {
          statement: 'Quelle fonction Arduino permet de lire l\'état d\'un bouton-poussoir branché sur la broche numérique $2$ ?',
          type: 'multiple-choice',
          options: [
            '<code>analogRead(2)</code>',
            '<code>analogWrite(2, HIGH)</code>',
            '<code>digitalRead(2)</code>',
            '<code>Serial.read()</code>'
          ],
          answer: 2,
          points: 2,
          correction: 'Un bouton-poussoir produit un signal binaire ($0$ ou $1$). On utilise <code>digitalRead(2)</code> pour lire un état numérique. <code>analogRead()</code> est réservé aux entrées analogiques (A0-A5). <code>analogWrite()</code> produit un signal PWM en <strong>sortie</strong>.'
        },
        {
          statement: 'On exécute : <code>int p = 1; for (int i = 0; i < 4; i++) { p = p * 3; }</code>. Quelle est la valeur finale de <code>p</code> ?',
          type: 'numeric',
          answer: 81,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$p = 1$. Après $4$ multiplications par $3$ : $p = 1 \\times 3^4 = 81$. Déroulement : $1 \\to 3 \\to 9 \\to 27 \\to 81$.'
        },
        {
          statement: 'Un Arduino Uno exécute <code>int val = analogRead(A0);</code> alors que le capteur délivre $3{,}7$ V (plage $0$–$5$ V, CAN $10$ bits). Quelle valeur contient <code>val</code> (arrondie à l\'entier) ?',
          type: 'numeric',
          answer: 758,
          tolerance: 2,
          unit: '',
          points: 2,
          correction: '$q = \\dfrac{5}{1024} \\approx 0{,}00488$ V. $val = \\left\\lfloor \\dfrac{3{,}7}{0{,}00488} \\right\\rfloor = \\lfloor 757{,}8 \\rfloor \\approx 758$. On peut aussi raisonner par proportion : $\\dfrac{3{,}7}{5} \\times 1024 \\approx 758$.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     5. Principes mécaniques de base (forces, moments)
     ------------------------------------------------------- */
  {
    id: 'si-2nde-mecanique-base',
    level: 2, subject: 'si',
    icon: '⚖️',
    title: 'Principes mécaniques de base (forces, moments)',
    subtitle: 'Notion de force, moment d\'une force, conditions d\'équilibre, levier',
    keywords: ['Force', 'Moment', 'Équilibre', 'Levier', 'Newton'],
    physics: 'Les principes d\'équilibre sont essentiels en génie civil (ponts, bâtiments), en mécanique (bras articulés de robots) et dans la vie quotidienne (ciseaux, brouette, pince à épiler).',

    cours: {
      intro: 'Une <strong>force</strong> est une action mécanique caractérisée par quatre éléments : son point d\'application, sa direction (droite d\'action), son sens et sa norme (intensité, en newtons N).<br/><br/>Un objet est en <strong>équilibre statique</strong> lorsque toutes les forces et tous les moments se compensent. Deux conditions doivent être remplies simultanément : $\\sum \\vec{F} = \\vec{0}$ (pas de translation) et $\\sum M_O = 0$ (pas de rotation).<br/><br/>Le <strong>moment d\'une force</strong> par rapport à un point $O$ mesure la capacité de cette force à faire tourner l\'objet autour de $O$. Il dépend de l\'intensité $F$ <strong>et</strong> du bras de levier $d$ (distance perpendiculaire entre $O$ et la droite d\'action) : $M_O(\\vec{F}) = F \\times d$.<br/><br/>Le <strong>principe du levier</strong> ($F_1 \\times d_1 = F_2 \\times d_2$) explique pourquoi une petite force loin du pivot peut équilibrer une grande force proche. C\'est le principe des ciseaux (pivot au centre), de la brouette (pivot sur la roue) et de la pince à épiler (pivot à l\'extrémité).<br/><br/><strong>Convention de signe</strong> : en général, on choisit le sens antihoraire (sens trigonométrique) comme positif et le sens horaire comme négatif.',
      definitions: [
        { term: 'Force ($\\vec{F}$)', def: 'Action mécanique modélisée par un vecteur. Caractérisée par un point d\'application, une direction, un sens et une norme $F$ (en N). Exemple : le poids $\\vec{P} = m \\vec{g}$ avec $g \\approx 9{,}81$ N/kg.' },
        { term: 'Moment d\'une force ($M_O$)', def: 'Mesure l\'effet de rotation d\'une force par rapport à un point $O$ : $M_O(\\vec{F}) = \\pm F \\times d$. Convention : $+$ en sens antihoraire, $-$ en sens horaire. Unité : N$\\cdot$m.' },
        { term: 'Bras de levier ($d$)', def: 'Distance <strong>perpendiculaire</strong> entre le point de rotation $O$ et la droite d\'action de la force. Plus $d$ est grand, plus le moment est important.' },
        { term: 'Équilibre statique', def: 'Un solide est en équilibre si $\\sum \\vec{F} = \\vec{0}$ (pas de translation) <strong>et</strong> $\\sum M_O = 0$ (pas de rotation). Les deux conditions sont nécessaires.' }
      ],
      method: {
        title: 'Résoudre un problème d\'équilibre en 3 étapes',
        steps: [
          '<strong>Bilan des forces</strong> : Identifier toutes les forces exercées sur le solide (poids, réaction d\'appui, force appliquée, tension…). Représenter chaque force sur un schéma.<br/>Exemple : une poutre sur deux appuis A et B subit son poids $\\vec{P}$ au centre de gravité, et les réactions $\\vec{R}_A$ (en A) et $\\vec{R}_B$ (en B).',
          '<strong>Condition de translation</strong> : écrire $\\sum \\vec{F} = \\vec{0}$. En projection sur un axe vertical : $R_A + R_B - P = 0$, soit $R_A + R_B = mg$.<br/>Astuce : on projette sur l\'axe où le plus de forces sont alignées.',
          '<strong>Condition de rotation</strong> : écrire $\\sum M_O = 0$ en choisissant un point $O$ judicieux (souvent un appui, pour éliminer une inconnue).<br/>Exemple au point A : $R_A \\times 0 + R_B \\times L - P \\times \\dfrac{L}{2} = 0$. On en déduit $R_B = \\dfrac{P}{2}$, puis $R_A = P - R_B$.<br/>Conseil : choisir le point de calcul là où s\'applique une force <strong>inconnue</strong> pour l\'éliminer de l\'équation.'
        ]
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Grandeur</th><th style="border:1px solid var(--border);padding:8px">Force ($\\vec{F}$)</th><th style="border:1px solid var(--border);padding:8px">Moment ($M_O$)</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Unité</strong></td><td style="border:1px solid var(--border);padding:8px">Newton (N)</td><td style="border:1px solid var(--border);padding:8px">Newton-mètre (N$\\cdot$m)</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Formule</strong></td><td style="border:1px solid var(--border);padding:8px">$P = m \\times g$</td><td style="border:1px solid var(--border);padding:8px">$M = F \\times d$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Nature</strong></td><td style="border:1px solid var(--border);padding:8px">Vectorielle (direction + sens)</td><td style="border:1px solid var(--border);padding:8px">Scalaire signé ($+/-$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Condition d\'équilibre</strong></td><td style="border:1px solid var(--border);padding:8px">$\\sum \\vec{F} = \\vec{0}$</td><td style="border:1px solid var(--border);padding:8px">$\\sum M_O = 0$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Exemple concret</strong></td><td style="border:1px solid var(--border);padding:8px">Ciseaux : force de coupe</td><td style="border:1px solid var(--border);padding:8px">Brouette : moment de la charge / effort</td></tr></table>',
      example: {
        statement: 'Une brouette porte une charge de $P_{\\text{charge}} = 300$ N placée à $d_1 = 0{,}4$ m de l\'axe de la roue (pivot). Le jardinier soulève les poignées situées à $d_2 = 1{,}2$ m de l\'axe. Quelle force $F$ doit-il exercer pour maintenir la brouette en équilibre horizontal ? On néglige le poids de la brouette.',
        steps: [
          'Système : la brouette. Pivot : l\'axe de la roue.',
          'Moments au pivot — la charge crée un moment horaire (négatif) : $M_{\\text{charge}} = -P \\times d_1 = -300 \\times 0{,}4 = -120$ N$\\cdot$m.',
          'La force du jardinier crée un moment antihoraire (positif) : $M_F = +F \\times d_2 = F \\times 1{,}2$.',
          'Équilibre : $M_{\\text{charge}} + M_F = 0$ → $-120 + 1{,}2 \\times F = 0$ → $F = \\dfrac{120}{1{,}2} = 100$ N.',
          'Le jardinier n\'exerce que $100$ N pour soulever $300$ N grâce au levier (rapport $\\dfrac{d_2}{d_1} = 3$).'
        ],
        answer: '$F = 100$ N. Le levier de la brouette multiplie la force par $3$ (rapport des bras de levier : $\\dfrac{1{,}2}{0{,}4} = 3$).'
      },
      formulas: [
        '$M_O(\\vec{F}) = \\pm F \\times d$ (moment, en N$\\cdot$m ; $+$ antihoraire, $-$ horaire)',
        '$\\sum \\vec{F} = \\vec{0}$ (condition d\'équilibre en translation)',
        '$\\sum M_O = 0$ (condition d\'équilibre en rotation)',
        'Levier : $F_1 \\times d_1 = F_2 \\times d_2$',
        'Poids : $P = m \\times g$ avec $g \\approx 9{,}81$ N/kg'
      ],
      recap: [
        'Le moment d\'une force est $M = F \\times d$ (force $\\times$ bras de levier). Il mesure l\'effet de rotation autour d\'un point.',
        'Équilibre statique : $\\sum \\vec{F} = \\vec{0}$ (translation) <strong>et</strong> $\\sum M_O = 0$ (rotation). Les deux sont indispensables.',
        'Principe du levier : $F_1 \\times d_1 = F_2 \\times d_2$. Une petite force loin du pivot équilibre une grande force proche (brouette, ciseaux, pince).',
        'Toujours choisir le point de calcul des moments au niveau d\'une force <strong>inconnue</strong> pour simplifier les calculs.'
      ],
      piege: 'Le bras de levier $d$ est la distance <strong>perpendiculaire</strong> entre le pivot et la <strong>droite d\'action</strong> de la force, pas la distance au point d\'application. Si la force fait un angle $\\alpha$ avec la barre : $M = F \\times L \\times \\sin(\\alpha)$. Ne pas oublier la convention de signe ($+$ antihoraire, $-$ horaire).'
    },

    quiz: [
      {
        q: 'Un jardinier appuie avec une force de $F = 80$ N sur le manche d\'une bêche, à $d = 0{,}9$ m du point de pivot (le sol). Quel est le moment de cette force par rapport au pivot ?',
        options: [
          '$M = 80 + 0{,}9 = 80{,}9$ N$\\cdot$m',
          '$M = 80 / 0{,}9 \\approx 88{,}9$ N$\\cdot$m',
          '$M = 80 \\times 0{,}9 = 72$ N$\\cdot$m',
          '$M = 0{,}9 / 80 = 0{,}011$ N$\\cdot$m'
        ],
        answer: 2,
        correction: '$M = F \\times d = 80 \\times 0{,}9 = 72$ N$\\cdot$m. Le moment est le <strong>produit</strong> de la force par le bras de levier, ni une addition, ni une division.'
      },
      {
        q: 'Sur une paire de ciseaux (levier inter-appui), une force de coupe de $200$ N s\'exerce à $d_1 = 2$ cm du pivot. La main exerce une force à $d_2 = 8$ cm du pivot. Quelle force la main doit-elle exercer ?',
        options: [
          '$800$ N',
          '$50$ N',
          '$100$ N',
          '$200$ N'
        ],
        answer: 1,
        correction: 'Principe du levier : $F_1 \\times d_1 = F_2 \\times d_2$ → $200 \\times 2 = F_2 \\times 8$ → $F_2 = \\dfrac{400}{8} = 50$ N. Les ciseaux amplifient la force par le rapport $\\dfrac{d_2}{d_1} = \\dfrac{8}{2} = 4$ : on exerce $4$ fois moins de force que la force de coupe.'
      },
      {
        q: 'Un objet de masse $m = 5$ kg est posé sur une table. Le poids et la réaction normale du support se compensent. Que vaut la réaction normale $R_N$ ? (Prendre $g = 9{,}81$ N/kg)',
        options: [
          '$R_N = 5$ N',
          '$R_N = 49{,}05$ N (vers le haut)',
          '$R_N = 9{,}81$ N',
          '$R_N = 0$ N (l\'objet ne bouge pas donc aucune force)'
        ],
        answer: 1,
        correction: 'À l\'équilibre : $\\sum \\vec{F} = \\vec{0}$ → $R_N - P = 0$ → $R_N = P = m \\times g = 5 \\times 9{,}81 = 49{,}05$ N. La réaction est dirigée vers le haut, opposée au poids. L\'objet ne bouge pas <strong>parce que</strong> les forces se compensent, pas parce qu\'il n\'y a pas de force !'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['moment', 'levier']);

        if (typeExo === 'moment') {
          var F = rand(20, 200);
          var d = randFloat(0.2, 2.5, 1);
          var M = parseFloat((F * d).toFixed(1));
          var dStr = d.toFixed(1).replace('.', '{,}');
          var MStr = M.toFixed(1).replace('.', '{,}');
          var objet = pick([
            'une clé à molette sur un boulon',
            'un bras de robot autour de son axe',
            'une porte autour de ses gonds',
            'une bêche autour du point d\'appui au sol',
            'un levier de frein à main'
          ]);
          return {
            statement: 'On exerce une force $F = ' + F + '$ N perpendiculairement sur ' + objet + '. Le bras de levier (distance perpendiculaire au pivot) est $d = ' + dStr + '$ m.<br/><br/>Calcule le moment de cette force par rapport au pivot (en N$\\cdot$m, arrondi au dixième).',
            answer: M,
            tolerance: 0.5,
            unit: 'N·m',
            hint: 'Le moment d\'une force perpendiculaire est $M = F \\times d$. C\'est un simple produit ! Attention à l\'unité : le moment s\'exprime en N$\\cdot$m (newton-mètre), pas en N ni en m.',
            solution: [
              'Formule du moment (force perpendiculaire) : $M_O(\\vec{F}) = F \\times d$.',
              'Application numérique : $M = ' + F + ' \\times ' + dStr + '$.',
              'Résultat : $M = ' + MStr + '$ N$\\cdot$m.',
              'Interprétation : cette force tend à faire tourner l\'objet autour du pivot avec un moment de $' + MStr + '$ N$\\cdot$m.'
            ]
          };
        } else {
          var F1 = rand(50, 400);
          var d1 = randFloat(0.1, 1.0, 1);
          var d2 = randFloat(0.5, 2.5, 1);
          while (Math.abs(d1 - d2) < 0.2) { d2 = randFloat(0.5, 2.5, 1); }
          var F2 = parseFloat((F1 * d1 / d2).toFixed(1));
          var d1Str = d1.toFixed(1).replace('.', '{,}');
          var d2Str = d2.toFixed(1).replace('.', '{,}');
          var F2Str = F2.toFixed(1).replace('.', '{,}');
          var systeme = pick([
            'une brouette', 'un pied-de-biche', 'une paire de ciseaux',
            'un casse-noix', 'un levier de chantier', 'une pince coupante'
          ]);
          return {
            statement: 'Sur ' + systeme + ', une charge de $F_1 = ' + F1 + '$ N est placée à $d_1 = ' + d1Str + '$ m du pivot. On veut l\'équilibrer en exerçant une force $F_2$ à $d_2 = ' + d2Str + '$ m du pivot, de l\'autre côté.<br/><br/>Calcule la force $F_2$ nécessaire pour l\'équilibre (en N, arrondie au dixième).',
            answer: F2,
            tolerance: 1,
            unit: 'N',
            hint: 'Principe du levier : $F_1 \\times d_1 = F_2 \\times d_2$. Isole $F_2$ : $F_2 = \\dfrac{F_1 \\times d_1}{d_2}$.',
            solution: [
              'Principe du levier (équilibre des moments) : $F_1 \\times d_1 = F_2 \\times d_2$.',
              'On isole $F_2$ : $F_2 = \\dfrac{F_1 \\times d_1}{d_2} = \\dfrac{' + F1 + ' \\times ' + d1Str + '}{' + d2Str + '}$.',
              'Calcul : $F_2 = \\dfrac{' + (F1 * d1).toFixed(1).replace('.', '{,}') + '}{' + d2Str + '} = ' + F2Str + '$ N.',
              'Vérification : $' + F1 + ' \\times ' + d1Str + ' = ' + (F1 * d1).toFixed(1).replace('.', '{,}') + '$ et $' + F2Str + ' \\times ' + d2Str + ' \\approx ' + (F2 * d2).toFixed(1).replace('.', '{,}') + '$ — les moments sont bien égaux.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une balançoire à bascule de longueur $L = 4$ m est posée sur un pivot central (au milieu). Un enfant $A$ de masse $m_A = 30$ kg est assis à l\'extrémité gauche ($d_A = 2$ m du pivot). Un enfant $B$ de masse $m_B = 45$ kg veut s\'asseoir du côté droit à une distance $d_B$ du pivot pour que la balançoire soit en équilibre horizontal. On prend $g = 10$ N/kg et on néglige la masse de la planche.',
      tasks: [
        'Calculer le poids $P_A$ de l\'enfant $A$ et le poids $P_B$ de l\'enfant $B$.',
        'Écrire l\'équation d\'équilibre des moments par rapport au pivot central. Préciser la convention de signe utilisée.',
        'Calculer la distance $d_B$ à laquelle l\'enfant $B$ doit s\'asseoir. Vérifier que $d_B < 2$ m (sinon il dépasse la planche).'
      ],
      solutions: [
        '$P_A = m_A \\times g = 30 \\times 10 = 300$ N (vers le bas). $P_B = m_B \\times g = 45 \\times 10 = 450$ N (vers le bas).',
        'Convention : sens antihoraire = positif. $P_A$ (à gauche) crée un moment positif : $+P_A \\times d_A$. $P_B$ (à droite) crée un moment négatif : $-P_B \\times d_B$. Équilibre : $P_A \\times d_A - P_B \\times d_B = 0$, soit $P_A \\times d_A = P_B \\times d_B$.',
        '$d_B = \\dfrac{P_A \\times d_A}{P_B} = \\dfrac{300 \\times 2}{450} = \\dfrac{600}{450} = 1{,}33$ m. Comme $1{,}33 < 2$ m, l\'enfant $B$ est bien sur la planche. Il s\'assoit plus près du centre car il est plus lourd.'
      ],
      finalAnswer: '$d_B \\approx 1{,}33$ m du pivot. L\'enfant le plus lourd ($45$ kg) s\'assoit plus près du centre ($1{,}33$ m) que l\'enfant le plus léger ($30$ kg, à $2$ m), conformément au principe du levier.'
    },

    evaluation: {
      title: 'Évaluation — Principes mécaniques de base',
      duration: '25 min',
      questions: [
        {
          statement: 'On exerce une force perpendiculaire $F = 120$ N sur une clé à molette, à $d = 0{,}25$ m de l\'axe du boulon. Calculer le moment exercé sur le boulon (en N$\\cdot$m).',
          type: 'numeric',
          answer: 30,
          tolerance: 0.5,
          unit: 'N·m',
          points: 2,
          correction: '$M = F \\times d = 120 \\times 0{,}25 = 30$ N$\\cdot$m. Si on utilisait une clé plus longue ($d = 0{,}5$ m), le même effort donnerait $M = 60$ N$\\cdot$m — c\'est pourquoi on utilise des clés longues pour desserrer les boulons récalcitrants.'
        },
        {
          statement: 'Les deux conditions d\'équilibre statique d\'un solide sont :',
          type: 'multiple-choice',
          options: [
            '$\\sum F = 0$ uniquement',
            '$\\sum \\vec{F} = \\vec{0}$ et $\\sum M_O = 0$',
            '$\\sum M = 0$ uniquement',
            '$v = \\text{constante}$ et $\\omega = 0$'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'équilibre statique exige <strong>deux</strong> conditions simultanées : la somme vectorielle des forces est nulle (pas de translation) <strong>et</strong> la somme des moments en tout point est nulle (pas de rotation). L\'une sans l\'autre ne suffit pas.'
        },
        {
          statement: 'Un ouvrier utilise un pied-de-biche pour arracher un clou. La résistance du clou est $P = 600$ N à $d_1 = 3$ cm du point d\'appui. L\'ouvrier exerce sa force à $d_2 = 30$ cm du point d\'appui. Quelle force $F$ doit-il exercer pour arracher le clou (en N) ?',
          type: 'numeric',
          answer: 60,
          tolerance: 1,
          unit: 'N',
          points: 3,
          correction: 'Principe du levier : $P \\times d_1 = F \\times d_2$ → $600 \\times 0{,}03 = F \\times 0{,}30$ → $F = \\dfrac{18}{0{,}30} = 60$ N. Le pied-de-biche amplifie la force par le rapport $\\dfrac{d_2}{d_1} = \\dfrac{30}{3} = 10$ : on exerce $10$ fois moins de force que la résistance du clou.'
        },
        {
          statement: 'Un objet de masse $m = 8{,}5$ kg est posé sur une table. Quel est son poids ? (Prendre $g = 9{,}81$ N/kg, arrondir au dixième)',
          type: 'numeric',
          answer: 83.4,
          tolerance: 0.2,
          unit: 'N',
          points: 2,
          correction: '$P = m \\times g = 8{,}5 \\times 9{,}81 = 83{,}385 \\approx 83{,}4$ N. Le poids est une force (en N) proportionnelle à la masse (en kg). Ne pas confondre masse et poids !'
        },
        {
          statement: 'Le bras de levier est défini comme :',
          type: 'multiple-choice',
          options: [
            'La distance entre le point d\'application de la force et le pivot',
            'La distance perpendiculaire entre la droite d\'action de la force et le pivot',
            'La norme de la force divisée par la distance au pivot',
            'La longueur totale du levier'
          ],
          answer: 1,
          points: 1,
          correction: 'Le bras de levier est la distance <strong>perpendiculaire</strong> entre le pivot et la <strong>droite d\'action</strong> de la force. Ce n\'est la distance au point d\'application que si la force est perpendiculaire à la ligne pivot-application. Si la force fait un angle $\\alpha$ avec cette ligne : $d = L \\times \\sin(\\alpha)$.'
        }
      ]
    }
  }

);
