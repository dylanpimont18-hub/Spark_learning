/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-d2-2-vdi.js
   BTS FED — S8-D2-2 VDI (Voix-Données-Images) — câblage structuré
   Débit du câblage catégorie 6 vérifié par recherche web (~1 Gbit/s sur 100 m,
   voir fr.wikipedia.org/wiki/Câble_catégorie_6, consulté 2026-08).
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-d2-2-vdi',
    level: 3, subject: 'fed',
    icon: '🧵',
    title: 'VDI (Voix-Données-Images)',
    subtitle: 'Câblage structuré, catégories de câbles cuivre/fibre, brassage en baie',
    keywords: ['VDI', 'Câblage structuré', 'Catégorie 6', 'Fibre optique', 'Baie de brassage'],
    physics: 'Voix (téléphonie), Données (informatique) et Images (vidéosurveillance, visioconférence) circulent aujourd\'hui sur une même infrastructure de câblage : le <strong>câblage structuré VDI</strong>, pensé pour desservir n\'importe quel usage depuis une même prise murale, sans savoir à l\'avance quel équipement y sera raccordé.',

    cours: {
      intro: 'Le câblage <strong>VDI (Voix-Données-Images)</strong> désigne l\'infrastructure de câblage structuré d\'un bâtiment, conçue pour acheminer indifféremment de la téléphonie, des données informatiques ou des flux vidéo depuis une même prise murale RJ45. Cette approche évite de multiplier les câblages spécialisés : une même prise peut, selon le besoin, accueillir un téléphone IP, un poste informatique ou une caméra.<br/><br/>Sur l\'aspect <strong>matériel</strong>, le câblage cuivre en paires torsadées se décline en plusieurs <strong>catégories</strong> selon ses performances : catégorie 5e (encore présente en existant), catégorie 6 (la référence actuelle en tertiaire neuf, débit théorique autour de $1$ Gbit/s sur $100$ m), et catégorie 6A (pour des débits plus élevés ou des distances accrues). La <strong>fibre optique</strong> complète ce panorama pour les liaisons longue distance entre bâtiments ou les besoins de débit très élevé (lien avec le module D1-1). L\'ensemble de ces câbles converge vers une <strong>baie de brassage</strong>, qui centralise les raccordements et permet de reconfigurer facilement quel équipement actif dessert quelle prise murale.<br/><br/>Sur l\'aspect <strong>logiciel</strong>, plus allégé pour ce module, deux points suffisent à retenir : le <strong>débit de données</strong> effectivement transportable (qui dépend de la catégorie de câble et des équipements actifs raccordés), et la <strong>sécurité logicielle</strong> (séparation des flux voix/données/images par VLAN, protection contre les intrusions sur le réseau).',
      definitions: [
        { term: 'Câblage VDI (Voix-Données-Images)', def: 'Infrastructure de câblage structuré permettant d\'acheminer indifféremment téléphonie, données informatiques et flux vidéo depuis une même prise murale RJ45, sans dépendre à l\'avance du type d\'équipement raccordé.' },
        { term: 'Câble catégorie 5e/6/6A', def: 'Catégories de câbles cuivre en paires torsadées, aux performances croissantes. La catégorie 6, référence actuelle en tertiaire neuf, offre un débit théorique d\'environ $1$ Gbit/s sur $100$ m.' },
        { term: 'Fibre optique (VDI)', def: 'Support complémentaire au câblage cuivre pour les liaisons longue distance entre bâtiments ou à très fort besoin de débit, avec une immunité totale aux perturbations électromagnétiques (voir aussi module D1-1).' },
        { term: 'Baie de brassage', def: 'Armoire technique centralisant l\'arrivée de tous les câbles VDI d\'un bâtiment ou d\'un étage, permettant de reconfigurer facilement, par de simples cordons de brassage, quel équipement actif dessert quelle prise murale.' },
        { term: 'Débit de données et sécurité logicielle (aspect léger)', def: 'Le débit réellement transportable dépend de la catégorie de câble et des équipements actifs raccordés à chaque extrémité ; la sécurité logicielle sépare les flux (VLAN voix/données/images) et protège le réseau contre les intrusions.' }
      ],
      method: {
        title: 'Calculer le temps de transfert d\'un fichier sur un câblage VDI',
        steps: [
          '<strong>Identifier la taille du fichier</strong> à transférer (Mo, Go), propre à l\'usage considéré.',
          '<strong>Relever le débit effectif</strong> de la liaison utilisée (donnée d\'énoncé, propre à chaque installation — pas une constante universelle même pour une même catégorie de câble, le débit réel dépendant des équipements actifs et de la longueur de liaison).',
          '<strong>Convertir</strong> taille et débit dans des unités cohérentes (Mo et Mo/s, ou Gbit et Gbit/s).',
          '<strong>Calculer le temps de transfert</strong> : $t = \\text{taille}/\\text{débit}$.',
          '<strong>Interpréter</strong> selon le contexte : un transfert de fichier volumineux (sauvegarde vidéo) peut nécessiter un débit bien supérieur à celui d\'un simple relevé de données GTB.'
        ]
      },
      example: {
        statement: 'Une sauvegarde de $2$ Go d\'enregistrements de vidéosurveillance doit être transférée sur une liaison au débit effectif de $80$ Mo/s.<br/><br/>Calculer le temps nécessaire à ce transfert (en secondes).',
        steps: [
          'Conversion : $2$ Go $= 2000$ Mo.',
          '$t = \\text{taille}/\\text{débit} = 2000/80 = 25$ s.'
        ],
        answer: 'Ce transfert prend $25$ secondes : un temps qui reste raisonnable pour une sauvegarde ponctuelle, mais qui illustre l\'importance de dimensionner correctement le débit du câblage VDI pour les applications les plus gourmandes (vidéosurveillance haute définition).'
      },
      formulas: [
        '$t = \\dfrac{\\text{taille}}{\\text{débit}}$ (temps de transfert d\'un fichier sur une liaison VDI)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Câblage structuré VDI',
        title: 'D\'une prise murale à la baie de brassage',
        description: 'Chaque prise murale VDI est reliée par un câble dédié à la baie de brassage, qui centralise les raccordements et permet de reconfigurer facilement quel équipement actif dessert quelle prise.',
        svg: `
          <svg viewBox="0 0 480 220" role="img" aria-labelledby="d22-graph-title d22-graph-desc">
            <title id="d22-graph-title">Cablage structure VDI vers une baie de brassage</title>
            <desc id="d22-graph-desc">Trois prises murales a gauche, representant telephonie, informatique et camera, chacune reliee par un cable individuel a une baie de brassage a droite, qui centralise les raccordements vers les equipements actifs du reseau.</desc>

            <rect class="frame-line" x="20" y="30" width="90" height="40" fill="none"></rect>
            <text class="label-soft" x="65" y="55" text-anchor="middle">Prise (voix)</text>

            <rect class="frame-line" x="20" y="90" width="90" height="40" fill="none"></rect>
            <text class="label-soft" x="65" y="115" text-anchor="middle">Prise (données)</text>

            <rect class="frame-line" x="20" y="150" width="90" height="40" fill="none"></rect>
            <text class="label-soft" x="65" y="175" text-anchor="middle">Prise (image)</text>

            <rect class="frame-line" x="320" y="70" width="140" height="90" fill="none"></rect>
            <text class="label-soft" x="390" y="105" text-anchor="middle">Baie de</text>
            <text class="label-soft" x="390" y="120" text-anchor="middle">brassage</text>
            <text class="tick-label" x="390" y="140" text-anchor="middle">(vers switch, IPBX...)</text>

            <line class="curve-main" x1="110" y1="50" x2="320" y2="90"></line>
            <line class="curve-main" x1="110" y1="110" x2="320" y2="110"></line>
            <line class="curve-main" x1="110" y1="170" x2="320" y2="130"></line>
          </svg>
        `,
        notes: [
          'Chaque <strong>prise murale</strong> est identique physiquement (RJ45) : elle peut desservir indifféremment voix, données ou image.',
          'Tous les câbles convergent vers la <strong>baie de brassage</strong>, qui centralise les raccordements.',
          'Un simple <strong>cordon de brassage</strong> permet de relier une prise à l\'équipement actif souhaité (switch informatique, IPBX téléphonique...), sans reprendre le câblage posé dans les murs.'
        ],
        reading: 'Suis chaque câble depuis une prise murale à gauche jusqu\'à la baie de brassage à droite, qui centralise et permet de reconfigurer les raccordements.',
        caption: 'Le câblage structuré VDI relie chaque prise murale à une baie de brassage centrale, où le raccordement final se décide par cordon de brassage.'
      },
      recap: [
        'Le câblage <strong>VDI</strong> permet à une même prise murale de desservir indifféremment voix, données ou images.',
        'Catégories de câbles cuivre : <strong>5e</strong> (existant), <strong>6</strong> (référence actuelle, environ $1$ Gbit/s sur $100$ m), <strong>6A</strong> (débits/distances accrus) ; <strong>fibre optique</strong> pour longue distance ou très fort débit.',
        'La <strong>baie de brassage</strong> centralise les raccordements et permet de les reconfigurer facilement.',
        'Temps de transfert : $t=\\text{taille}/\\text{débit}$, avec le débit restant une donnée propre à chaque installation.',
        'Aspect logiciel (débit réel, sécurité par VLAN) traité de façon <strong>allégée</strong> pour ce module (GCF 0), l\'essentiel du dosage portant sur l\'aspect matériel.'
      ],
      piege: 'Ne pas confondre le débit <strong>théorique</strong> d\'une catégorie de câble (par exemple $1$ Gbit/s pour la catégorie 6 sur $100$ m) avec le débit <strong>réellement obtenu</strong> sur une installation donnée, qui dépend aussi des équipements actifs raccordés à chaque extrémité (switch, carte réseau) et de la longueur effective de la liaison — c\'est pourquoi le débit doit rester une donnée d\'énoncé propre à chaque exercice, pas une constante à appliquer aveuglément. Attention aussi à ne pas réduire le VDI à de la simple informatique : le même câblage structuré dessert aussi la téléphonie (module D2-3) et la vidéo, d\'où son nom.'
    },

    quiz: [
      {
        q: 'Le câblage structuré VDI permet notamment :',
        options: [
          'De dédier une prise murale exclusivement à la téléphonie',
          'De desservir indifféremment voix, données et images depuis une même prise murale',
          'De se passer totalement de baie de brassage',
          'De remplacer la fibre optique dans tous les cas'
        ],
        answer: 1,
        correction: 'Le principe du câblage VDI est justement qu\'une même prise murale RJ45 puisse desservir indifféremment téléphonie, données informatiques ou flux vidéo, selon le besoin du moment.'
      },
      {
        q: 'Le câble cuivre en catégorie 6, référence actuelle en tertiaire neuf, offre un débit théorique de l\'ordre de :',
        options: ['$100$ Mbit/s sur $100$ m', '$1$ Gbit/s sur $100$ m', '$100$ Gbit/s sur $100$ m', '$10$ Mbit/s sur $100$ m'],
        answer: 1,
        correction: 'Le câble catégorie 6 offre un débit théorique d\'environ $1$ Gbit/s sur $100$ m, ce qui en fait la référence actuelle pour un câblage VDI en tertiaire neuf.'
      },
      {
        q: 'La baie de brassage d\'une installation VDI sert principalement à :',
        options: [
          'Générer le signal téléphonique',
          'Centraliser les raccordements et permettre de reconfigurer facilement les connexions',
          'Remplacer les prises murales RJ45',
          'Assurer la compatibilité électromagnétique du bâtiment'
        ],
        answer: 1,
        correction: 'La baie de brassage centralise l\'arrivée de tous les câbles VDI et permet, par simple cordon de brassage, de reconfigurer quel équipement actif dessert quelle prise murale.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contenu = pick([
          'un enregistrement de vidéosurveillance',
          'une sauvegarde de configuration d\'un IPBX',
          'un export de données de supervision GTB',
          'un fichier de mise à jour d\'un équipement réseau'
        ]);
        const tailleGo = randFloat(0.5, 5, 2);
        const debitMoS = pick([20, 40, 60, 80, 100]);
        const tailleMo = parseFloat((tailleGo * 1000).toFixed(0));
        const t = parseFloat((tailleMo / debitMoS).toFixed(1));
        return {
          statement: `${contenu[0].toUpperCase()}${contenu.slice(1)} de taille $${fr(tailleGo, 2)}$ Go doit être transféré(e) sur une liaison VDI au débit effectif de $${debitMoS}$ Mo/s.<br/><br/>Calcule le temps de transfert $t$ (en secondes, arrondi au dixième).`,
          answer: t,
          tolerance: Math.max(0.5, t * 0.03),
          unit: 's',
          hint: 'Convertis d\'abord la taille en Mo (1 Go = 1000 Mo), puis applique $t=\\text{taille}/\\text{débit}$.',
          solution: [
            `Taille en Mo : $${fr(tailleGo, 2)}\\times 1000 = ${tailleMo}$ Mo.`,
            `$t = ${tailleMo}/${debitMoS} \\approx ${fr(t, 1)}$ s.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un bureau d\'études câble un nouveau plateau de bureaux en VDI. Le cahier des charges prévoit des prises RJ45 en catégorie 6 (environ $1$ Gbit/s sur $100$ m), une baie de brassage par étage, et un lien fibre optique de $200$ m entre la baie de l\'étage et le local informatique central.',
      tasks: [
        'Pourquoi choisir la catégorie 6 plutôt que la catégorie 5e pour ce plateau de bureaux neuf ?',
        'Pourquoi utiliser une liaison en fibre optique plutôt qu\'en câble cuivre pour relier la baie d\'étage au local informatique central, à $200$ m de distance ?',
        'Un poste informatique doit transférer un fichier de $600$ Mo vers le serveur central, sur une liaison au débit effectif de $50$ Mo/s. Calculer le temps de transfert nécessaire.',
        'Le raccordement final de chaque prise (téléphonie ou informatique) se décide-t-il lors du tirage des câbles, ou plus tard ? Expliquer à l\'aide de la notion de brassage.'
      ],
      solutions: [
        'La catégorie 6 offre un débit théorique bien supérieur à la catégorie 5e (environ $1$ Gbit/s contre des débits plus limités) : pour une installation neuve, elle représente la référence actuelle et anticipe les besoins futurs sans nécessiter un nouveau câblage à court terme.',
        'À $200$ m, un câble cuivre catégorie 6 (limité à $100$ m pour son débit nominal) ne conviendrait pas sans répéteur intermédiaire ; la fibre optique permet de couvrir cette distance sans perte de débit et avec une immunité totale aux perturbations électromagnétiques du bâtiment.',
        '$t = \\text{taille}/\\text{débit} = 600/50 = 12$ s.',
        'Le raccordement final se décide <strong>plus tard</strong>, au niveau de la <strong>baie de brassage</strong> : chaque prise murale est physiquement identique (RJ45) lors du tirage des câbles, et c\'est seulement au moment du brassage (cordon reliant la prise à un port de switch ou d\'IPBX) que l\'on décide si cette prise servira à la téléphonie ou à l\'informatique — une flexibilité précieuse en cas de réaménagement des bureaux.'
      ],
      finalAnswer: 'Catégorie 6 pour anticiper les besoins de débit du plateau neuf, fibre optique pour couvrir les $200$ m sans perte, transfert de $600$ Mo en $12$ s à $50$ Mo/s ; le brassage permet de décider tardivement l\'usage final (voix ou données) de chaque prise.'
    },

    evaluation: {
      title: 'Évaluation — VDI (Voix-Données-Images)',
      duration: '15 min',
      questions: [
        {
          statement: 'Un fichier de $300$ Mo doit être transféré sur une liaison VDI au débit effectif de $60$ Mo/s. Calculer le temps de transfert (en secondes).',
          type: 'numeric',
          answer: 5,
          tolerance: 0.3,
          unit: 's',
          points: 3,
          correction: '$t = \\text{taille}/\\text{débit} = 300/60 = 5$ s.'
        },
        {
          statement: 'Le principe fondamental du câblage VDI est de :',
          type: 'multiple-choice',
          options: [
            'Dédier chaque type de câble à un seul usage défini à l\'avance',
            'Permettre à une même prise murale de desservir voix, données ou images selon le besoin',
            'Supprimer totalement le besoin de baie de brassage',
            'N\'utiliser que de la fibre optique'
          ],
          answer: 1,
          points: 2,
          correction: 'Le câblage VDI vise justement à ce qu\'une même prise murale RJ45 puisse desservir indifféremment voix, données ou images, sans dépendre du type d\'équipement qui y sera finalement raccordé.'
        },
        {
          statement: 'La baie de brassage permet notamment de :',
          type: 'multiple-choice',
          options: [
            'Reconfigurer facilement les connexions sans reprendre le câblage posé dans les murs',
            'Remplacer complètement les prises murales RJ45',
            'Éliminer tout besoin de câble cuivre',
            'Garantir automatiquement la sécurité logicielle du réseau'
          ],
          answer: 0,
          points: 2,
          correction: 'La baie de brassage centralise les raccordements : un simple cordon de brassage permet de reconfigurer facilement quel équipement actif dessert quelle prise, sans toucher au câblage définitif.'
        }
      ]
    }
  });
