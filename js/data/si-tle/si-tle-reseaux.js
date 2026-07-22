/* =========================================================
   Spark Learning – data/si-tle/si-tle-reseaux.js
   Extrait de si-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-tle-reseaux',
    level: 2, subject: 'si',
    icon: '🌐',
    title: 'Réseaux et protocoles de communication',
    subtitle: 'Modèle TCP/IP, adressage IP, débit, trame Ethernet',
    keywords: ['Réseau', 'Protocole', 'TCP/IP', 'Trame', 'Débit', 'Adresse IP'],
    physics: 'Domotique, IoT industriel, communication entre automates, télémaintenance, voitures connectées — tout système nécessitant un échange de données entre composants.',

    cours: {
      intro: 'Les systèmes pluri-techniques modernes communiquent via des <strong>réseaux informatiques</strong>. La compréhension des protocoles de communication est essentielle en SI pour concevoir et diagnostiquer des systèmes connectés.<br/><br/>' +
        'Le <strong>modèle TCP/IP</strong> (version simplifiée du modèle OSI à 7 couches) organise les communications en <strong>4 couches</strong> :<br/>' +
        '- <strong>Accès réseau</strong> (couche 1) : gère la transmission physique des bits (Ethernet, Wi-Fi, fibre optique). Débits typiques : Fast Ethernet $100$ Mbit/s, Gigabit Ethernet $1$ Gbit/s, Wi-Fi 6 jusqu\'à $9{,}6$ Gbit/s.<br/>' +
        '- <strong>Internet</strong> (couche 2) : routage des paquets via le protocole IP. Chaque appareil a une adresse IP unique sur le réseau.<br/>' +
        '- <strong>Transport</strong> (couche 3) : TCP (fiable, avec acquittement) ou UDP (rapide, sans garantie).<br/>' +
        '- <strong>Application</strong> (couche 4) : HTTP, MQTT, FTP, etc.<br/><br/>' +
        '<strong>Adressage IP (IPv4)</strong> : une adresse IPv4 est codée sur $4$ octets (32 bits), notée en décimal pointé (ex. : $192.168.1.10$). Le <strong>masque de sous-réseau</strong> (ex. : $255.255.255.0$ soit $/24$) sépare la partie réseau de la partie hôte. Deux machines communiquent directement (sans routeur) si et seulement si elles sont dans le même sous-réseau.<br/><br/>' +
        'Le <strong>débit</strong> est le nombre de bits transmis par seconde : $D = \\dfrac{\\text{taille (bits)}}{\\text{temps (s)}}$. Le <strong>débit utile</strong> est inférieur au débit brut à cause de l\'<strong>overhead protocolaire</strong> (en-têtes de trames, acquittements) : $D_{\\text{utile}} = D_{\\text{brut}} \\times (1 - \\text{overhead})$.',

      definitions: [
        { term: 'Débit', def: '$D = \\dfrac{\\text{taille (bits)}}{\\text{temps (s)}}$ en bit/s. Conversions : $1$ Mbit/s $= 10^6$ bit/s. Attention : $1$ octet $= 8$ bits, donc $1$ Mo/s $= 8$ Mbit/s.' },
        { term: 'Adresse IP (IPv4)', def: 'Identifiant logique sur 32 bits (4 octets). Exemple : $192.168.0.1$. Le masque de sous-réseau (ex. : $255.255.255.0$ ou $/24$) distingue la partie réseau de la partie hôte.' },
        { term: 'Masque de sous-réseau', def: 'Détermine quelle partie de l\'adresse IP identifie le réseau. Exemple : avec un masque $/24$ ($255.255.255.0$), les 24 premiers bits sont la partie réseau, les 8 derniers la partie hôte ($2^8 - 2 = 254$ hôtes possibles).' },
        { term: 'Protocole TCP', def: 'Protocole de transport fiable : établissement de connexion (3-way handshake), acquittement de chaque segment, retransmission en cas de perte. Utilisé pour HTTP, FTP, etc.' },
        { term: 'Protocole UDP', def: 'Protocole de transport sans connexion ni acquittement. Plus rapide mais non fiable. Utilisé pour le streaming vidéo, les jeux en ligne, MQTT-SN.' },
        { term: 'Latence', def: 'Temps de propagation d\'un paquet entre émetteur et récepteur. Dépend de la distance, du médium et du nombre de routeurs traversés.' }
      ],

      method: {
        title: 'Calculer un temps de transfert',
        steps: [
          '<strong>Convertir la taille en bits</strong> : $1$ octet $= 8$ bits, $1$ Mo $= 10^6$ octets $= 8 \\times 10^6$ bits.<br/>Exemple : $50$ Mo $= 50 \\times 8 = 400$ Mbit.',
          '<strong>Identifier le débit</strong> : vérifier l\'unité (Mbit/s $\\neq$ Mo/s). Débits courants : Fast Ethernet $100$ Mbit/s, Gigabit $1000$ Mbit/s, Wi-Fi 5 $\\sim 400$ Mbit/s.',
          '<strong>Temps de transfert</strong> : $t = \\dfrac{\\text{taille (bits)}}{\\text{débit (bit/s)}}$.<br/>Exemple : $\\dfrac{400 \\text{ Mbit}}{100 \\text{ Mbit/s}} = 4$ s.',
          '<strong>Débit utile</strong> : si l\'overhead est donné, $D_{\\text{utile}} = D_{\\text{brut}} \\times (1 - \\text{overhead})$. Utiliser $D_{\\text{utile}}$ dans le calcul.',
          '<strong>Latence totale</strong> : $t_{\\text{total}} = t_{\\text{transfert}} + t_{\\text{propagation}}$ si la latence réseau est donnée.'
        ]
      },

      example: {
        statement: 'Un fichier de $10$ Mo est transféré via un réseau Ethernet à $100$ Mbit/s. Calculer le temps de transfert (sans overhead).',
        steps: [
          'Taille en bits : $10$ Mo $= 10 \\times 10^6 \\times 8 = 80 \\times 10^6$ bits $= 80$ Mbit',
          'Débit : $100$ Mbit/s',
          '$t = \\dfrac{80}{100} = 0{,}8$ s'
        ],
        answer: '$t = 0{,}8$ s'
      },

      formulas: [
        '$t = \\dfrac{\\text{taille (bits)}}{\\text{débit (bit/s)}}$ — Temps de transfert',
        '$D_{\\text{utile}} = D_{\\text{brut}} \\times (1 - \\text{overhead})$ — Débit utile',
        '$1$ octet $= 8$ bits ; $1$ Mo $= 10^6$ octets $= 8 \\times 10^6$ bits',
        'Hôtes possibles dans un sous-réseau $/n$ : $2^{32-n} - 2$'
      ],

      diagram: {
        theme: 'si',
        kicker: 'Encapsulation TCP/IP — poupées russes',
        title: 'Les 4 couches TCP/IP, emboîtées comme des poupées russes',
        description: 'À l\'émission, chaque couche <strong>encapsule</strong> les données de la couche du dessus en lui ajoutant son propre en-tête — un peu comme des poupées russes : la couche <strong>Application</strong> est la plus intérieure, la couche <strong>Accès réseau</strong> forme l\'enveloppe la plus extérieure, celle réellement transmise sur le câble ou dans l\'air.',
        svg: `
          <svg viewBox="0 0 500 400" role="img" aria-labelledby="reseaux-title reseaux-desc">
            <title id="reseaux-title">Encapsulation TCP/IP en poupees russes</title>
            <desc id="reseaux-desc">Quatre rectangles concentriques representent les 4 couches du modele TCP/IP. Le plus grand, a l'exterieur, est la couche 1, Acces reseau, qui produit la trame Ethernet ou Wi-Fi. A l'interieur de celui-ci, la couche 2, Internet, produit le paquet IP. A l'interieur, la couche 3, Transport, produit le segment TCP ou UDP. Au centre, la couche 4, Application, contient les donnees applicatives HTTP, FTP, MQTT ou DNS. A l'emission les donnees sont encapsulees de l'interieur vers l'exterieur ; a la reception elles sont decapsulees de l'exterieur vers l'interieur.</desc>

            <text class="label-soft" x="250" y="20" text-anchor="middle">Émission : encapsulation, de l'intérieur vers l'extérieur</text>

            <rect class="frame-line" x="20" y="40" width="460" height="310" rx="16" fill="color-mix(in srgb, var(--diagram-accent) 6%, var(--bg-card))"></rect>
            <text class="annotation-label" x="250" y="55" text-anchor="middle">Couche 1 — Accès réseau</text>
            <text class="label-soft" x="250" y="69" text-anchor="middle">Trame (Ethernet, Wi-Fi, fibre)</text>

            <rect class="frame-line" x="60" y="75" width="380" height="240" rx="14" fill="color-mix(in srgb, var(--diagram-accent) 9%, var(--bg-card))"></rect>
            <text class="annotation-label" x="250" y="90" text-anchor="middle">Couche 2 — Internet</text>
            <text class="label-soft" x="250" y="104" text-anchor="middle">Paquet (IP, ICMP)</text>

            <rect class="frame-line" x="100" y="110" width="300" height="170" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))"></rect>
            <text class="annotation-label" x="250" y="125" text-anchor="middle">Couche 3 — Transport</text>
            <text class="label-soft" x="250" y="139" text-anchor="middle">Segment (TCP / UDP)</text>

            <rect class="frame-line" x="140" y="145" width="220" height="100" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 16%, var(--bg-card))"></rect>
            <text class="annotation-label" x="250" y="182" text-anchor="middle">Couche 4 — Application</text>
            <text class="label-soft" x="250" y="198" text-anchor="middle">Données applicatives</text>
            <text class="label-soft" x="250" y="214" text-anchor="middle">(HTTP, FTP, MQTT, DNS)</text>

            <text class="label-soft" x="250" y="368" text-anchor="middle">Réception : décapsulation, de l'extérieur vers l'intérieur</text>
          </svg>
        `,
        notes: [
          'À l\'émission (encapsulation) : Application → Transport → Internet → Accès réseau, de l\'intérieur vers l\'extérieur.',
          'À la réception (décapsulation) : chaque couche retire son propre en-tête dans l\'ordre inverse, de l\'extérieur vers l\'intérieur, jusqu\'à retrouver les données applicatives.',
          'Le nom de l\'unité de données change à chaque couche : <strong>segment</strong> en Transport (TCP), <strong>paquet</strong> en Internet (IP), <strong>trame</strong> en Accès réseau.'
        ],
        reading: 'Pars de la plus petite poupée, au centre (les données applicatives), et remonte vers l\'extérieur : chaque couche traversée ajoute un en-tête, jusqu\'à obtenir la trame réellement transmise.',
        caption: 'Encapsulation TCP/IP : 4 couches emboîtées, chacune ajoutant son en-tête (segment, paquet, trame) autour des données de la couche supérieure.'
      },

      recap: [
        'Le modèle TCP/IP a 4 couches : Accès réseau, Internet, Transport, Application.',
        'Le débit se calcule en bit/s : toujours convertir les octets en bits ($\\times 8$) avant de diviser par le débit.',
        'TCP garantit la fiabilité (acquittements, retransmission), UDP privilégie la rapidité.',
        'Le masque de sous-réseau détermine si deux machines sont dans le même réseau (communication directe) ou non (besoin d\'un routeur).'
      ],

      piege: 'La confusion la plus fréquente est entre <strong>bits et octets</strong> ! Un débit de $100$ Mbit/s correspond à $100/8 = 12{,}5$ Mo/s. Pour transférer un fichier de $50$ Mo à $100$ Mbit/s, il faut convertir le fichier en bits ($50 \\times 8 = 400$ Mbit) avant de diviser par le débit. Autre piège : confondre débit brut et débit utile — l\'overhead des protocoles (en-têtes, acquittements) réduit toujours le débit effectif.'
    },

    quiz: [
      {
        q: 'Un fichier de $5$ Mo est transféré via un réseau à $80$ Mbit/s. Le temps de transfert (sans overhead) est :',
        options: [
          '$t = 0{,}5$ s',
          '$t = 0{,}0625$ s',
          '$t = 5$ s',
          '$t = 40$ s'
        ],
        answer: 0,
        correction: 'Taille en bits : $5$ Mo $= 5 \\times 10^6 \\times 8 = 40$ Mbit. $t = \\dfrac{40}{80} = 0{,}5$ s. Bien penser à convertir les Mo en Mbit ($\\times 8$) avant de diviser par le débit !'
      },
      {
        q: 'Le protocole TCP se distingue d\'UDP par :',
        options: [
          'La fiabilité : connexion préalable, acquittement et retransmission des paquets perdus',
          'Un débit toujours supérieur à UDP',
          'L\'absence totale d\'en-têtes protocolaires',
          'L\'impossibilité d\'utiliser des ports'
        ],
        answer: 0,
        correction: 'TCP établit une connexion (3-way handshake), numérote les segments, envoie des acquittements et retransmet les paquets perdus. UDP est plus léger et rapide mais ne garantit ni la livraison ni l\'ordre des paquets.'
      },
      {
        q: 'Deux machines ont les adresses $192.168.1.10$ et $192.168.2.20$ avec un masque $255.255.255.0$ ($/24$). Peuvent-elles communiquer directement ?',
        options: [
          'Non, elles sont dans des sous-réseaux différents ($192.168.1.x$ vs $192.168.2.x$)',
          'Oui, elles sont dans le même réseau',
          'Oui, car elles partagent les deux premiers octets',
          'Impossible à déterminer'
        ],
        answer: 0,
        correction: 'Avec un masque $/24$ ($255.255.255.0$), les 3 premiers octets identifient le réseau. $192.168.1.x \\neq 192.168.2.x$ : elles sont dans des sous-réseaux différents et nécessitent un routeur pour communiquer.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['transfert', 'debit_utile', 'hotes']);
        if (scenario === 'transfert') {
          const tailleMo = rand(1, 100);
          const debitMbps = pick([10, 50, 100, 200, 500, 1000]);
          const tailleMbit = tailleMo * 8;
          const t = parseFloat((tailleMbit / debitMbps).toFixed(2));
          return {
            statement: `Un fichier de $${tailleMo}$ Mo est transféré via un réseau de débit $${debitMbps}$ Mbit/s (sans overhead). Calcule le temps de transfert $t$ (en secondes).`,
            answer: t,
            tolerance: 0.05,
            unit: 's',
            hint: `Convertis d'abord la taille en Mbit : $${tailleMo}$ Mo $= ${tailleMo} \\times 8 = ${tailleMbit}$ Mbit. Puis $t = \\dfrac{\\text{taille}}{\\text{débit}}$.`,
            solution: [
              `Taille en bits : $${tailleMo}$ Mo $= ${tailleMo} \\times 8 = ${tailleMbit}$ Mbit`,
              `$t = \\dfrac{${tailleMbit}}{${debitMbps}}$`,
              `$t = ${String(t).replace('.', '{,}')}$ s`
            ]
          };
        } else if (scenario === 'debit_utile') {
          const Dbrut = pick([100, 200, 500, 1000]);
          const overhead = pick([5, 10, 15, 20]);
          const Dutile = parseFloat((Dbrut * (1 - overhead / 100)).toFixed(0));
          return {
            statement: `Un réseau a un débit brut de $${Dbrut}$ Mbit/s et un overhead protocolaire de $${overhead}\\%$. Calcule le débit utile (en Mbit/s).`,
            answer: Dutile,
            tolerance: 1,
            unit: 'Mbit/s',
            hint: `$D_{\\text{utile}} = D_{\\text{brut}} \\times (1 - \\text{overhead})$.`,
            solution: [
              `$D_{\\text{utile}} = ${Dbrut} \\times (1 - ${String(overhead / 100).replace('.', '{,}')})$`,
              `$D_{\\text{utile}} = ${Dbrut} \\times ${(1 - overhead / 100).toFixed(2).replace('.', '{,}')}$`,
              `$D_{\\text{utile}} = ${Dutile}$ Mbit/s`
            ]
          };
        } else {
          const prefix = pick([24, 25, 26, 27, 28]);
          const hostBits = 32 - prefix;
          const nbHotes = Math.pow(2, hostBits) - 2;
          return {
            statement: `Un sous-réseau IPv4 utilise un masque $/${prefix}$. Combien d'adresses hôtes utilisables sont disponibles ?`,
            answer: nbHotes,
            tolerance: 0,
            unit: 'hôtes',
            hint: `Avec un masque $/${prefix}$, il y a $32 - ${prefix} = ${hostBits}$ bits pour la partie hôte. Nombre d'hôtes utilisables : $2^{${hostBits}} - 2$ (on retire l'adresse réseau et l'adresse de broadcast).`,
            solution: [
              `Bits hôte : $32 - ${prefix} = ${hostBits}$`,
              `Adresses totales : $2^{${hostBits}} = ${Math.pow(2, hostBits)}$`,
              `Hôtes utilisables : $${Math.pow(2, hostBits)} - 2 = ${nbHotes}$ (sans adresse réseau ni broadcast)`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une usine connectée transfère des relevés de capteurs vers un serveur central. Chaque relevé fait $2$ ko ($= 2000$ octets). Il y a $500$ capteurs qui envoient un relevé toutes les secondes. Le réseau Ethernet est à $100$ Mbit/s avec un overhead protocolaire de $5\\%$.',
      tasks: [
        'Calculer le volume de données généré par seconde (en Mbit/s).',
        'Calculer le débit utile du réseau (en Mbit/s).',
        'Déterminer si le réseau est suffisant et calculer le taux d\'utilisation.'
      ],
      solutions: [
        'Volume par seconde : $500 \\times 2000 \\times 8 = 8\\,000\\,000$ bit/s $= 8$ Mbit/s.',
        '$D_{\\text{utile}} = 100 \\times (1 - 0{,}05) = 95$ Mbit/s.',
        'Taux d\'utilisation : $\\dfrac{8}{95} \\approx 8{,}4\\%$. Le réseau est largement suffisant ($< 100\\%$). Il reste environ $87$ Mbit/s de marge.'
      ],
      finalAnswer: 'Le réseau est largement suffisant : $8$ Mbit/s nécessaires sur $95$ Mbit/s disponibles, soit $\\approx 8{,}4\\%$ d\'utilisation.'
    },

    evaluation: {
      title: 'Évaluation — Réseaux et protocoles',
      duration: '20 min',
      questions: [
        {
          statement: 'Convertir $20$ Mo en Mbit.',
          type: 'numeric',
          answer: 160,
          tolerance: 0.1,
          unit: 'Mbit',
          points: 2,
          correction: '$20$ Mo $= 20 \\times 8 = 160$ Mbit ($1$ octet $= 8$ bits).'
        },
        {
          statement: 'Un fichier de $160$ Mbit est transféré à $200$ Mbit/s. Le temps de transfert est (en s) :',
          type: 'numeric',
          answer: 0.8,
          tolerance: 0.01,
          unit: 's',
          points: 2,
          correction: '$t = \\dfrac{160}{200} = 0{,}8$ s.'
        },
        {
          statement: 'Quel protocole de transport garantit la livraison ordonnée des données ?',
          type: 'multiple-choice',
          options: ['TCP', 'UDP', 'IP', 'Ethernet'],
          answer: 0,
          points: 2,
          correction: 'TCP (Transmission Control Protocol) garantit la fiabilité par acquittement, numérotation des segments et retransmission. UDP est plus rapide mais non fiable. IP (couche réseau) et Ethernet (couche accès) sont à d\'autres niveaux du modèle.'
        },
        {
          statement: 'Un réseau a un débit brut de $500$ Mbit/s et un overhead de $20\\%$. Quel est le débit utile (en Mbit/s) ?',
          type: 'numeric',
          answer: 400,
          tolerance: 1,
          unit: 'Mbit/s',
          points: 2,
          correction: '$D_{\\text{utile}} = 500 \\times (1 - 0{,}2) = 500 \\times 0{,}8 = 400$ Mbit/s.'
        },
        {
          statement: 'Un sous-réseau IPv4 avec un masque $/24$ peut accueillir combien d\'hôtes utilisables ?',
          type: 'numeric',
          answer: 254,
          tolerance: 0,
          unit: 'hôtes',
          points: 2,
          correction: 'Avec $/24$, il reste $32 - 24 = 8$ bits pour la partie hôte. $2^8 - 2 = 256 - 2 = 254$ adresses utilisables (on exclut l\'adresse réseau et le broadcast).'
        }
      ]
    }
  });
