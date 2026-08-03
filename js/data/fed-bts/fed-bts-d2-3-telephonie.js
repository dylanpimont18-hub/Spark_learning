/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-d2-3-telephonie.js
   BTS FED — S8-D2-3 Téléphonie (numérique, IP)
   Débit du codec G.711 vérifié par recherche web (64 kbit/s, standard UIT-T,
   voir en.wikipedia.org/wiki/G.711 et sip.us, consultés 2026-08).
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-d2-3-telephonie',
    level: 3, subject: 'fed',
    icon: '☎️',
    title: 'Téléphonie',
    subtitle: 'Téléphonie numérique et IP (VoIP), architecture matérielle',
    keywords: ['Téléphonie IP', 'VoIP', 'IPBX', 'Autocommutateur', 'Codec vocal'],
    physics: 'La téléphonie d\'un bâtiment tertiaire circule aujourd\'hui de plus en plus souvent sur le même câblage VDI (module D2-2) que l\'informatique : c\'est la <strong>téléphonie sur IP</strong>, qui numérise la voix pour la transporter comme n\'importe quelle autre donnée réseau.',

    cours: {
      intro: 'La téléphonie a connu deux grandes évolutions successives. La <strong>téléphonie numérique</strong> a d\'abord remplacé les lignes analogiques classiques par un signal numérisé, transporté par un <strong>autocommutateur</strong> (PABX) dédié, relié aux postes téléphoniques numériques du bâtiment par un câblage spécifique.<br/><br/>La <strong>téléphonie sur IP (VoIP — Voice over IP)</strong> va plus loin : elle numérise la voix et la transporte directement sur le réseau informatique du bâtiment, via le même câblage VDI (module D2-2) que les postes informatiques. L\'autocommutateur devient alors un <strong>IPBX</strong> (autocommutateur IP), et les postes téléphoniques deviennent des <strong>postes IP</strong>, raccordés sur le réseau informatique au même titre qu\'un ordinateur — voire de simples logiciels (softphones) installés sur un poste de travail.<br/><br/>Cette convergence voix/données simplifie l\'infrastructure d\'un bâtiment neuf (un seul réseau câblé pour tous les usages), mais nécessite en contrepartie une bonne maîtrise de la <strong>bande passante</strong> disponible : chaque communication téléphonique consomme un débit réseau, qui dépend du <strong>codec vocal</strong> utilisé pour numériser la voix. Le paramétrage détaillé d\'un IPBX (plan de numérotation, renvois d\'appels...) reste hors du périmètre de ce module, essentiellement descriptif.',
      definitions: [
        { term: 'Téléphonie numérique', def: 'Téléphonie où le signal vocal est numérisé et transporté par un autocommutateur (PABX) dédié, relié aux postes téléphoniques numériques par un câblage spécifique, distinct du réseau informatique.' },
        { term: 'Téléphonie sur IP (VoIP)', def: 'Téléphonie où la voix, numérisée, est transportée directement sur le réseau informatique du bâtiment (même câblage VDI que l\'informatique), via un IPBX.' },
        { term: 'IPBX (autocommutateur IP)', def: 'Équipement central qui gère les communications téléphoniques sur IP d\'un bâtiment, équivalent fonctionnel d\'un PABX classique mais raccordé au réseau informatique plutôt qu\'à un câblage téléphonique dédié.' },
        { term: 'Poste téléphonique IP', def: 'Poste téléphonique raccordé directement sur le réseau informatique (câblage VDI), au même titre qu\'un ordinateur — peut aussi prendre la forme d\'un logiciel (softphone) sur un poste de travail.' },
        { term: 'Codec vocal', def: 'Algorithme qui numérise et compresse le signal vocal pour le transporter sur le réseau, avec un débit propre à chaque codec (par exemple le codec G.711, standard largement répandu, à $64$ kbit/s par communication).' }
      ],
      method: {
        title: 'Calculer la bande passante nécessaire pour plusieurs communications VoIP simultanées',
        steps: [
          '<strong>Identifier le codec vocal</strong> utilisé et son débit par communication $D_{\\text{par appel}}$ (donnée constructeur ou d\'énoncé, propre à chaque installation).',
          '<strong>Relever le nombre de communications simultanées</strong> $N$ à prévoir (dimensionnement du réseau).',
          '<strong>Calculer la bande passante totale nécessaire</strong> : $D_{\\text{total}} = N \\times D_{\\text{par appel}}$.',
          '<strong>Comparer</strong> cette bande passante totale à la capacité disponible sur la liaison réseau concernée, pour vérifier qu\'elle est suffisante sans dégrader les autres usages (données, images) partageant le même câblage VDI.'
        ]
      },
      example: {
        statement: 'Un standard téléphonique VoIP utilise le codec G.711, dont le débit est de $64$ kbit/s par communication. On souhaite dimensionner la liaison pour $N=10$ communications simultanées.<br/><br/>Calculer la bande passante totale nécessaire.',
        steps: [
          '$D_{\\text{total}} = N \\times D_{\\text{par appel}} = 10 \\times 64 = 640$ kbit/s.'
        ],
        answer: 'Il faut réserver environ $640$ kbit/s pour absorber $10$ communications VoIP simultanées avec ce codec — une valeur modeste face au débit d\'un câblage catégorie 6 (module D2-2, de l\'ordre de $1$ Gbit/s), mais qui doit néanmoins être vérifiée pour ne pas dégrader les autres usages du réseau (données, vidéosurveillance) aux heures de pointe téléphonique.'
      },
      formulas: [
        '$D_{\\text{total}} = N \\times D_{\\text{par appel}}$ (bande passante nécessaire pour $N$ communications VoIP simultanées)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'De la téléphonie numérique classique à la VoIP',
        title: 'Un même réseau informatique pour la voix et les données',
        description: 'La téléphonie numérique classique repose sur un câblage dédié vers un PABX ; la téléphonie sur IP transporte la voix sur le même réseau informatique que les données, via un IPBX.',
        svg: `
          <svg viewBox="0 0 480 220" role="img" aria-labelledby="d23-graph-title d23-graph-desc">
            <title id="d23-graph-title">Comparaison telephonie numerique classique et telephonie sur IP</title>
            <desc id="d23-graph-desc">A gauche, telephonie numerique classique : un PABX relie par un cablage dedie a des postes telephoniques numeriques. A droite, telephonie sur IP : un IPBX relie au meme reseau informatique que les postes de travail, desservant des postes telephoniques IP via le cablage VDI commun.</desc>

            <rect class="frame-line" x="20" y="80" width="100" height="50" fill="none"></rect>
            <text class="label-soft" x="70" y="110" text-anchor="middle">PABX</text>
            <rect class="frame-line" x="170" y="50" width="100" height="40" fill="none"></rect>
            <text class="label-soft" x="220" y="75" text-anchor="middle">Poste numérique</text>
            <rect class="frame-line" x="170" y="120" width="100" height="40" fill="none"></rect>
            <text class="label-soft" x="220" y="145" text-anchor="middle">Poste numérique</text>
            <line class="curve-main" x1="120" y1="95" x2="170" y2="70"></line>
            <line class="curve-main" x1="120" y1="105" x2="170" y2="140"></line>
            <text class="tick-label" x="145" y="190" text-anchor="middle">Téléphonie numérique (câblage dédié)</text>

            <rect class="frame-line" x="300" y="80" width="80" height="50" fill="none"></rect>
            <text class="label-soft" x="340" y="105" text-anchor="middle">IPBX</text>
            <rect class="frame-line" x="300" y="20" width="160" height="30" fill="none"></rect>
            <text class="label-soft" x="380" y="40" text-anchor="middle">Réseau informatique (VDI)</text>
            <rect class="frame-line" x="400" y="80" width="70" height="35" fill="none"></rect>
            <text class="tick-label" x="435" y="102" text-anchor="middle">Poste IP</text>
            <rect class="frame-line" x="400" y="130" width="70" height="35" fill="none"></rect>
            <text class="tick-label" x="435" y="152" text-anchor="middle">Poste IP</text>
            <line class="curve-main" x1="340" y1="80" x2="380" y2="50"></line>
            <line class="curve-main" x1="380" y1="105" x2="400" y2="97"></line>
            <line class="curve-main" x1="380" y1="105" x2="400" y2="147"></line>
            <text class="tick-label" x="380" y="190" text-anchor="middle">Téléphonie sur IP (réseau commun)</text>
          </svg>
        `,
        notes: [
          'La <strong>téléphonie numérique classique</strong> repose sur un <strong>PABX</strong> et un câblage <strong>dédié</strong>, indépendant du réseau informatique.',
          'La <strong>téléphonie sur IP</strong> intègre l\'<strong>IPBX</strong> au réseau informatique commun (VDI), les postes IP se raccordant comme de simples postes de travail.',
          'Cette convergence simplifie le câblage d\'un bâtiment neuf, mais impose de dimensionner la bande passante partagée entre voix, données et images.'
        ],
        reading: 'Compare les deux architectures : câblage dédié vers un PABX à gauche, réseau informatique commun partagé par l\'IPBX et les postes IP à droite.',
        caption: 'La téléphonie sur IP intègre la voix au réseau informatique commun, contrairement à la téléphonie numérique classique qui repose sur un câblage dédié.'
      },
      recap: [
        'La <strong>téléphonie numérique</strong> classique repose sur un <strong>PABX</strong> et un câblage dédié.',
        'La <strong>téléphonie sur IP (VoIP)</strong> transporte la voix sur le réseau informatique commun (VDI), via un <strong>IPBX</strong> et des <strong>postes IP</strong>.',
        'Un <strong>codec vocal</strong> détermine le débit consommé par chaque communication (par exemple $64$ kbit/s pour le codec G.711).',
        'Bande passante nécessaire pour $N$ communications simultanées : $D_{\\text{total}} = N \\times D_{\\text{par appel}}$.',
        'Ce module reste essentiellement <strong>descriptif</strong> (GCF 0) : le paramétrage détaillé d\'un IPBX sort du périmètre traité ici.'
      ],
      piege: 'Ne pas confondre le débit d\'un <strong>codec vocal</strong> (quelques dizaines de kbit/s par communication, une charge modeste) avec le débit d\'un flux <strong>vidéo</strong> (module D2-2), bien plus élevé : dimensionner un réseau uniquement pour la téléphonie IP sous-estimerait largement le besoin réel si de la vidéosurveillance partage le même câblage. Attention aussi à ne pas présenter une valeur de débit de codec comme une vérité absolue et universelle sans la vérifier : plusieurs codecs coexistent, avec des débits différents selon le compromis recherché entre qualité vocale et économie de bande passante — la valeur retenue doit toujours être une donnée d\'énoncé propre à l\'installation étudiée.'
    },

    quiz: [
      {
        q: 'La téléphonie sur IP (VoIP), contrairement à la téléphonie numérique classique :',
        options: [
          'Nécessite un câblage totalement indépendant du réseau informatique',
          'Transporte la voix numérisée directement sur le réseau informatique du bâtiment',
          'Ne peut fonctionner qu\'avec des postes analogiques',
          'Supprime le besoin de tout autocommutateur'
        ],
        answer: 1,
        correction: 'La VoIP transporte la voix numérisée directement sur le réseau informatique commun (câblage VDI), via un IPBX, contrairement à la téléphonie numérique classique qui repose sur un câblage dédié vers un PABX.'
      },
      {
        q: 'Un IPBX est l\'équivalent, pour la téléphonie sur IP, de :',
        options: ['Un switch informatique', 'Un PABX (autocommutateur) de la téléphonie numérique classique', 'Une baie de brassage', 'Un codec vocal'],
        answer: 1,
        correction: 'L\'IPBX est l\'autocommutateur de la téléphonie sur IP, équivalent fonctionnel du PABX de la téléphonie numérique classique, mais raccordé au réseau informatique.'
      },
      {
        q: 'Le débit consommé par une communication VoIP dépend principalement :',
        options: [
          'De la couleur du poste téléphonique',
          'Du codec vocal utilisé pour numériser la voix',
          'Uniquement de la catégorie de câble VDI installée',
          'Du nombre de prises murales du bâtiment'
        ],
        answer: 1,
        correction: 'Le codec vocal utilisé détermine le débit consommé par chaque communication (par exemple $64$ kbit/s pour le codec G.711) — un point clé pour dimensionner la bande passante nécessaire.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un standard téléphonique VoIP de bureaux',
          'un centre d\'appels équipé en téléphonie IP',
          'une salle de réunion multi-postes IP',
          'un accueil équipé de plusieurs postes IP'
        ]);
        const N = rand(4, 20);
        const debitCodec = 64;
        const Dtotal = N * debitCodec;
        return {
          statement: `Pour ${contexte}, le codec vocal utilisé (G.711) consomme $D_{\\text{par appel}}=${debitCodec}$ kbit/s par communication. On souhaite dimensionner la liaison pour $N=${N}$ communications simultanées.<br/><br/>Calcule la bande passante totale nécessaire $D_{\\text{total}}$ (en kbit/s).`,
          answer: Dtotal,
          tolerance: 0,
          unit: 'kbit/s',
          hint: 'Applique $D_{\\text{total}} = N \\times D_{\\text{par appel}}$.',
          solution: [
            `$D_{\\text{total}} = N\\times D_{\\text{par appel}} = ${N}\\times ${debitCodec} = ${Dtotal}$ kbit/s.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une entreprise de $60$ salariés migre son standard téléphonique classique vers une solution VoIP intégrée à son réseau informatique existant (câblage catégorie 6, environ $1$ Gbit/s). Le codec retenu (G.711) consomme $64$ kbit/s par communication. On estime qu\'au maximum $15$ communications peuvent être simultanées aux heures de pointe.',
      tasks: [
        'Calculer la bande passante totale nécessaire pour absorber les $15$ communications simultanées.',
        'Cette bande passante représente-t-elle une part significative du débit théorique du câblage catégorie 6 (environ $1$ Gbit/s) ?',
        'Le réseau informatique de l\'entreprise sert aussi à d\'autres usages (données, éventuellement vidéosurveillance). Pourquoi est-il quand même utile de vérifier ce calcul, même si la marge semble large ?',
        'Quel équipement central faut-il installer pour piloter cette solution de téléphonie sur IP ?'
      ],
      solutions: [
        '$D_{\\text{total}} = 15\\times 64 = 960$ kbit/s, soit environ $0{,}96$ Mbit/s.',
        'Non : $960$ kbit/s représente moins de $0{,}1\\%$ du débit théorique d\'un câblage catégorie 6 (environ $1$ Gbit/s $=1\\,000\\,000$ kbit/s) — une part tout à fait marginale.',
        'Même avec une marge apparemment large, il reste utile de vérifier le calcul car la bande passante disponible est <strong>partagée</strong> entre tous les usages du réseau (données, vidéosurveillance éventuelle) : un dimensionnement correct évite les mauvaises surprises si plusieurs usages gourmands en débit se cumulent aux mêmes heures de pointe, notamment si de la vidéosurveillance haute définition est ajoutée ultérieurement sur le même câblage.',
        'Il faut installer un <strong>IPBX</strong> (autocommutateur IP), équivalent fonctionnel du PABX classique mais raccordé au réseau informatique de l\'entreprise, pour piloter l\'ensemble des postes téléphoniques IP.'
      ],
      finalAnswer: 'Bande passante nécessaire : $960$ kbit/s pour $15$ communications simultanées, soit une part marginale du débit d\'un câblage catégorie 6 — mais un calcul à toujours vérifier car la bande passante est partagée avec les autres usages du réseau. Un IPBX est nécessaire pour piloter l\'ensemble.'
    },

    evaluation: {
      title: 'Évaluation — Téléphonie',
      duration: '10 min',
      questions: [
        {
          statement: 'Pour $8$ communications VoIP simultanées avec un codec consommant $64$ kbit/s par appel, calculer la bande passante totale nécessaire (en kbit/s).',
          type: 'numeric',
          answer: 512,
          tolerance: 5,
          unit: 'kbit/s',
          points: 3,
          correction: '$D_{\\text{total}} = 8\\times 64 = 512$ kbit/s.'
        },
        {
          statement: 'La téléphonie sur IP se distingue de la téléphonie numérique classique principalement par :',
          type: 'multiple-choice',
          options: [
            'L\'absence totale de numérisation de la voix',
            'Le transport de la voix sur le réseau informatique commun, via un IPBX, plutôt qu\'un câblage dédié vers un PABX',
            'L\'impossibilité d\'utiliser des postes téléphoniques physiques',
            'Un débit systématiquement inférieur à la téléphonie analogique'
          ],
          answer: 1,
          points: 3,
          correction: 'La téléphonie sur IP transporte la voix numérisée sur le réseau informatique commun (VDI), via un IPBX, contrairement à la téléphonie numérique classique qui repose sur un câblage téléphonique dédié vers un PABX.'
        },
        {
          statement: 'Le débit consommé par une communication VoIP dépend directement :',
          type: 'multiple-choice',
          options: [
            'Du nombre total de prises murales du bâtiment',
            'Du codec vocal utilisé pour numériser la voix',
            'De la couleur du poste téléphonique IP',
            'De la catégorie du câblage cuivre uniquement'
          ],
          answer: 1,
          points: 2,
          correction: 'C\'est le codec vocal utilisé qui détermine le débit consommé par chaque communication — une donnée essentielle pour dimensionner correctement la bande passante nécessaire.'
        }
      ]
    }
  });
