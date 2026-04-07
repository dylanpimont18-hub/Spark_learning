/* =========================================================
   Spark Learning – data/si-2nde/si-2nde-analyse-fonctionnelle.js
   Extrait de si-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
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
  });
