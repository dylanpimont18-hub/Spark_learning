/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-d2-1-reseaux-informatiques.js
   BTS FED — S8-D2-1 Réseaux informatiques (topologie, câblage, adressage IP)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-d2-1-reseaux-informatiques',
    level: 3, subject: 'fed',
    icon: '🖧',
    title: 'Réseaux informatiques',
    subtitle: 'Topologies, câbles, brassage — et notions de base d\'adressage IP',
    keywords: ['Topologie réseau', 'Câblage cuivre/fibre', 'Brassage', 'Adressage IP', 'Sous-réseau'],
    physics: 'Une supervision GTB moderne (modules B8-1, D1-2) repose de plus en plus souvent sur un réseau informatique classique : la même infrastructure qui fait fonctionner les ordinateurs de bureau sert aussi à faire dialoguer les équipements techniques du bâtiment.',

    cours: {
      intro: 'L\'aspect <strong>matériel</strong> d\'un réseau informatique repose sur trois éléments : la <strong>topologie</strong> (organisation physique des liaisons), les <strong>câbles</strong> utilisés, et le <strong>brassage</strong> (raccordement organisé dans une baie de brassage).<br/><br/>Deux topologies dominent : la topologie en <strong>étoile</strong>, où chaque équipement est relié individuellement à un commutateur central (switch) — la plus répandue aujourd\'hui, car une panne sur un câble n\'affecte qu\'un seul équipement — et la topologie en <strong>bus</strong>, où tous les équipements partagent une même ligne de communication, aujourd\'hui plus rare en réseau informatique mais encore présente sur certains bus techniques.<br/><br/>Les <strong>câbles</strong> utilisés sont principalement en cuivre (paires torsadées, catégories 5e/6/6a — voir aussi le module D2-2 pour le câblage VDI) ou en fibre optique pour les liaisons longue distance ou à fort débit (module D1-1). Le <strong>brassage</strong> organise ces câbles dans une baie dédiée, permettant de reconfigurer facilement les connexions sans toucher au câblage définitif posé dans les murs.<br/><br/>Au-delà de cet aspect matériel, deux volets plus théoriques complètent le sujet, à connaître de façon plus légère : l\'aspect <strong>logiciel</strong> (réseaux, sous-réseaux, protocoles, adressage IP) et la <strong>compatibilité électromagnétique (CEM)</strong>, qui impose des précautions de câblage pour éviter les perturbations entre courants forts et courants faibles. Sur l\'aspect logiciel, une notion à retenir simplement : le découpage d\'un réseau IP en <strong>sous-réseaux</strong>, qui détermine le nombre d\'équipements adressables sur chaque segment.',
      definitions: [
        { term: 'Topologie en étoile', def: 'Chaque équipement est relié individuellement à un commutateur central (switch). La plus répandue en réseau informatique moderne : une panne sur un câble n\'affecte qu\'un seul équipement, pas l\'ensemble du réseau.' },
        { term: 'Topologie en bus', def: 'Tous les équipements partagent une même ligne de communication. Plus rare en réseau informatique aujourd\'hui, mais encore présente sur certains bus techniques (module D1-2).' },
        { term: 'Brassage', def: 'Organisation des câbles dans une baie de brassage dédiée, permettant de reconfigurer facilement les connexions entre prises et équipements actifs, sans intervention sur le câblage définitif posé dans les murs.' },
        { term: 'Adressage IP et sous-réseaux (aspect logiciel, léger)', def: 'Une adresse IP est découpée en une partie réseau et une partie hôte, définie par un masque de sous-réseau. Le nombre de bits restants pour la partie hôte détermine le nombre d\'équipements adressables sur ce sous-réseau.' },
        { term: 'Compatibilité électromagnétique — CEM (aspect léger)', def: 'Ensemble de précautions de câblage (séparation physique, blindage) visant à éviter que les courants forts (alimentation électrique) ne perturbent les courants faibles (réseau informatique) circulant à proximité.' }
      ],
      method: {
        title: 'Calculer le nombre d\'hôtes utilisables d\'un sous-réseau IPv4',
        steps: [
          '<strong>Identifier le masque de sous-réseau</strong> appliqué, exprimé en nombre de bits réservés à la partie réseau.',
          '<strong>En déduire le nombre de bits restants</strong> $n$ pour la partie hôte (sur les $32$ bits d\'une adresse IPv4).',
          '<strong>Calculer le nombre total d\'adresses</strong> disponibles sur ce sous-réseau : $2^n$.',
          '<strong>Retirer deux adresses réservées</strong> (adresse réseau et adresse de diffusion/broadcast, non attribuables à un équipement) : $N_{hôtes} = 2^n - 2$.',
          '<strong>Comparer</strong> ce nombre au besoin réel (nombre d\'équipements GTB à adresser) pour vérifier qu\'un sous-réseau donné est suffisamment dimensionné.'
        ]
      },
      example: {
        statement: 'Un sous-réseau dédié aux équipements de GTB d\'un étage dispose de $n=6$ bits restants pour la partie hôte.<br/><br/>Calculer le nombre d\'hôtes utilisables sur ce sous-réseau.',
        steps: [
          '$N_{hôtes} = 2^n - 2 = 2^6 - 2 = 64 - 2 = 62$.'
        ],
        answer: 'Ce sous-réseau peut adresser jusqu\'à $62$ équipements distincts : largement suffisant pour les capteurs et actionneurs GTB d\'un étage courant, mais une limite à vérifier si le nombre d\'équipements venait à croître fortement.'
      },
      formulas: [
        '$N_{hôtes} = 2^n - 2$ (nombre d\'hôtes utilisables d\'un sous-réseau IPv4, $n$ = nombre de bits restants pour la partie hôte)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Deux topologies de réseau informatique',
        title: 'Étoile (autour d\'un switch) vs bus (ligne partagée)',
        description: 'En topologie étoile, chaque équipement est relié individuellement au switch central ; en topologie bus, tous les équipements partagent une même ligne de communication.',
        svg: `
          <svg viewBox="0 0 480 220" role="img" aria-labelledby="d21-graph-title d21-graph-desc">
            <title id="d21-graph-title">Comparaison topologie etoile et topologie bus</title>
            <desc id="d21-graph-desc">A gauche, topologie en etoile : un switch central relie individuellement quatre equipements disposes autour de lui. A droite, topologie en bus : une ligne horizontale unique relie quatre equipements alignes, partageant tous la meme ligne de communication.</desc>

            <!-- etoile -->
            <rect class="frame-line" x="80" y="90" width="60" height="40" fill="none"></rect>
            <text class="label-soft" x="110" y="115" text-anchor="middle">Switch</text>
            <circle class="frame-line" cx="30" cy="40" r="16" fill="none"></circle>
            <circle class="frame-line" cx="190" cy="40" r="16" fill="none"></circle>
            <circle class="frame-line" cx="30" cy="180" r="16" fill="none"></circle>
            <circle class="frame-line" cx="190" cy="180" r="16" fill="none"></circle>
            <line class="curve-main" x1="80" y1="100" x2="42" y2="52"></line>
            <line class="curve-main" x1="140" y1="100" x2="178" y2="52"></line>
            <line class="curve-main" x1="80" y1="120" x2="42" y2="168"></line>
            <line class="curve-main" x1="140" y1="120" x2="178" y2="168"></line>
            <text class="tick-label" x="110" y="205" text-anchor="middle">Topologie étoile</text>

            <!-- bus -->
            <line class="frame-line" x1="290" y1="110" x2="450" y2="110"></line>
            <circle class="frame-line" cx="310" cy="60" r="14" fill="none"></circle>
            <circle class="frame-line" cx="360" cy="60" r="14" fill="none"></circle>
            <circle class="frame-line" cx="410" cy="60" r="14" fill="none"></circle>
            <circle class="frame-line" cx="360" cy="160" r="14" fill="none"></circle>
            <line class="guide-line" x1="310" y1="74" x2="310" y2="110"></line>
            <line class="guide-line" x1="360" y1="74" x2="360" y2="110"></line>
            <line class="guide-line" x1="410" y1="74" x2="410" y2="110"></line>
            <line class="guide-line" x1="360" y1="110" x2="360" y2="146"></line>
            <text class="tick-label" x="370" y="205" text-anchor="middle">Topologie bus</text>
          </svg>
        `,
        notes: [
          'En <strong>étoile</strong>, chaque équipement dispose de sa propre liaison vers le switch : une coupure de câble n\'isole qu\'un seul équipement.',
          'En <strong>bus</strong>, tous les équipements partagent la même ligne : une coupure sur la ligne principale peut affecter tout le segment.',
          'La topologie étoile domine aujourd\'hui les réseaux informatiques, la topologie bus restant surtout présente sur certains bus techniques (module D1-2).'
        ],
        reading: 'Compare les deux schémas : liaisons individuelles convergeant vers un switch (étoile) contre une ligne unique partagée par tous les équipements (bus).',
        caption: 'Topologie étoile (autour d\'un switch) et topologie bus (ligne partagée) : deux organisations physiques différentes d\'un réseau.'
      },
      recap: [
        'La <strong>topologie en étoile</strong> (autour d\'un switch) domine les réseaux informatiques modernes ; la <strong>topologie en bus</strong> reste surtout présente sur certains bus techniques.',
        'Câblage principalement <strong>cuivre</strong> (paires torsadées) ou <strong>fibre optique</strong> pour le débit et la distance ; le <strong>brassage</strong> organise les connexions en baie dédiée.',
        'Nombre d\'hôtes utilisables d\'un sous-réseau IPv4 : $N_{hôtes}=2^n-2$, $n$ étant le nombre de bits restants pour la partie hôte.',
        'La <strong>CEM</strong> impose de séparer physiquement courants forts et courants faibles pour éviter les perturbations.',
        'L\'aspect logiciel et la CEM restent, pour ce module, des notions à connaître de façon <strong>légère</strong> (GCF 0) : l\'essentiel du dosage porte sur l\'aspect matériel.'
      ],
      piege: 'Ne pas oublier de <strong>retirer les deux adresses réservées</strong> (adresse réseau et adresse de diffusion) dans le calcul de $N_{hôtes}=2^n-2$ : oublier ce $-2$ est l\'erreur la plus fréquente, qui surestime systématiquement le nombre d\'équipements réellement adressables. Attention aussi à ne pas confondre <strong>topologie physique</strong> (comment les câbles sont réellement disposés, étoile ou bus) et <strong>protocole logique</strong> (comment les équipements communiquent, module D1-2) : deux notions indépendantes, un réseau physique en étoile peut très bien véhiculer un protocole logique de type bus (comme BACnet/IP sur un réseau Ethernet en étoile).'
    },

    quiz: [
      {
        q: 'La topologie en étoile, aujourd\'hui la plus répandue en réseau informatique, se caractérise par :',
        options: [
          'Tous les équipements partageant une même ligne de communication',
          'Chaque équipement relié individuellement à un commutateur (switch) central',
          'L\'absence totale de câblage',
          'Un fonctionnement exclusivement en fibre optique'
        ],
        answer: 1,
        correction: 'En topologie étoile, chaque équipement dispose de sa propre liaison vers un switch central, ce qui limite l\'impact d\'une panne de câble à un seul équipement.'
      },
      {
        q: 'Pour un sous-réseau IPv4 disposant de $n=4$ bits pour la partie hôte, le nombre d\'hôtes utilisables est :',
        options: ['16', '14', '8', '32'],
        answer: 1,
        correction: '$N_{hôtes} = 2^4 - 2 = 16 - 2 = 14$.'
      },
      {
        q: 'La compatibilité électromagnétique (CEM) en câblage réseau vise principalement à :',
        options: [
          'Augmenter le débit théorique du réseau',
          'Éviter que les courants forts ne perturbent les courants faibles à proximité',
          'Remplacer le brassage en baie',
          'Supprimer le besoin d\'adressage IP'
        ],
        answer: 1,
        correction: 'La CEM impose des précautions de câblage (séparation physique, blindage) pour éviter que les courants forts ne perturbent les signaux des courants faibles circulant à proximité.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un sous-réseau dédié aux capteurs GTB d\'un étage',
          'un sous-réseau de supervision d\'une chaufferie',
          'un sous-réseau de comptage d\'énergie d\'un bâtiment',
          'un sous-réseau technique dédié à la vidéosurveillance'
        ]);
        const n = pick([3, 4, 5, 6, 7, 8]);
        const N = Math.pow(2, n) - 2;
        return {
          statement: `Pour ${contexte}, le masque de sous-réseau IPv4 retenu laisse $n=${n}$ bits disponibles pour la partie hôte.<br/><br/>Calcule le nombre d'hôtes utilisables $N_{hôtes}$ sur ce sous-réseau.`,
          answer: N,
          tolerance: 0,
          unit: '',
          hint: 'Applique $N_{hôtes} = 2^n - 2$.',
          solution: [
            `$N_{hôtes} = 2^n - 2 = 2^{${n}} - 2 = ${Math.pow(2, n)} - 2 = ${N}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un bâtiment tertiaire de $5$ étages doit connecter ses équipements GTB (capteurs, actionneurs, passerelles) au réseau informatique existant. Chaque étage compte environ $25$ équipements à adresser. L\'administrateur réseau propose un sous-réseau par étage, avec $n=5$ bits disponibles pour la partie hôte sur chacun.',
      tasks: [
        'Calculer le nombre d\'hôtes utilisables avec $n=5$ bits.',
        'Ce dimensionnement est-il suffisant pour les $25$ équipements de chaque étage ? Justifier avec une marge de sécurité.',
        'Quelle topologie physique (étoile ou bus) recommander pour le câblage de chaque étage, et pourquoi ?',
        'Pourquoi est-il pertinent de prévoir un sous-réseau distinct par étage plutôt qu\'un unique grand sous-réseau pour tout le bâtiment ?'
      ],
      solutions: [
        '$N_{hôtes} = 2^5 - 2 = 32 - 2 = 30$.',
        'Oui : $30$ hôtes utilisables pour $25$ équipements laisse une marge de $5$ adresses disponibles, ce qui permet d\'ajouter quelques équipements supplémentaires sans reconfigurer le sous-réseau — une marge raisonnable, ni trop juste ni excessive.',
        'La topologie en <strong>étoile</strong> est recommandée : chaque équipement est relié individuellement au switch de l\'étage, ce qui limite l\'impact d\'une panne de câble à un seul point de mesure, contrairement à une topologie bus où un incident sur la ligne partagée affecterait tout l\'étage.',
        'Un sous-réseau distinct par étage permet de <strong>limiter le trafic de diffusion (broadcast)</strong> à chaque étage, de faciliter le diagnostic en cas de panne (le problème est localisé à un étage précis), et de gérer plus finement les droits d\'accès et la sécurité réseau, plutôt que de mélanger tous les équipements du bâtiment dans un unique grand sous-réseau.'
      ],
      finalAnswer: 'Avec $n=5$ bits, chaque sous-réseau d\'étage offre $30$ hôtes utilisables, suffisant pour $25$ équipements avec une marge confortable ; une topologie étoile par étage, avec un sous-réseau dédié à chaque étage, est recommandée.'
    },

    evaluation: {
      title: 'Évaluation — Réseaux informatiques',
      duration: '15 min',
      questions: [
        {
          statement: 'Un sous-réseau IPv4 dispose de $n=3$ bits pour la partie hôte. Calculer le nombre d\'hôtes utilisables.',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: '$N_{hôtes} = 2^3 - 2 = 8 - 2 = 6$.'
        },
        {
          statement: 'Dans un réseau en topologie étoile, une coupure sur le câble reliant un seul équipement au switch :',
          type: 'multiple-choice',
          options: [
            'Isole l\'ensemble du réseau',
            'N\'isole que cet équipement, les autres restant fonctionnels',
            'Rend le switch central inutilisable définitivement',
            'N\'a aucun effet, même sur l\'équipement concerné'
          ],
          answer: 1,
          points: 2,
          correction: 'C\'est justement l\'avantage de la topologie étoile : chaque équipement ayant sa propre liaison, une coupure de câble n\'affecte que cet équipement, pas l\'ensemble du réseau.'
        },
        {
          statement: 'Le brassage, dans un réseau informatique, désigne :',
          type: 'multiple-choice',
          options: [
            'Le protocole logiciel utilisé par les équipements',
            'L\'organisation des câbles dans une baie dédiée, pour reconfigurer facilement les connexions',
            'Le calcul du nombre d\'hôtes d\'un sous-réseau',
            'La topologie en bus exclusivement'
          ],
          answer: 1,
          points: 2,
          correction: 'Le brassage organise les câbles dans une baie dédiée, ce qui permet de reconfigurer facilement les connexions entre prises et équipements actifs sans toucher au câblage définitif.'
        }
      ]
    }
  });
