/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b2-2-climatisation.js
   BTS FED — S8-B2-2 Climatisation — EER, architectures DRV/VRV/PAC boucle d'eau/CTA
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b2-2-climatisation',
    level: 3, subject: 'fed',
    icon: '🧊',
    title: 'Climatisation',
    subtitle: 'EER, architectures DRV/VRV, PAC boucle d\'eau, CTA à batterie froide',
    keywords: ['EER', 'DRV', 'VRV', 'PAC boucle d\'eau', 'CTA', 'Climatisation'],
    physics: 'En climatisation, la performance d\'un équipement se résume souvent à un seul chiffre : l\'<strong>EER</strong>. Ce n\'est rien d\'autre que le $\\text{COP}_{\\text{froid}}$ déjà rencontré en thermodynamique appliquée (module A5) — mais au-delà de ce calcul, le vrai enjeu d\'un projet de climatisation est de choisir la bonne <strong>architecture de distribution</strong> du froid dans le bâtiment.',

    cours: {
      intro: 'L\'<strong>EER</strong> (Energy Efficiency Ratio) mesure l\'efficacité d\'un équipement de climatisation : c\'est le rapport entre la puissance frigorifique fournie $Q_f$ et la puissance électrique absorbée $W$. Mathématiquement, $\\text{EER} = Q_f/W$ est exactement la même formule que le $\\text{COP}_{\\text{froid}}$ vu dans le cycle frigorifique (module A5) — seul le nom change selon le contexte d\'usage : on parle d\'EER pour un équipement de climatisation, de COP pour une pompe à chaleur en mode chauffage.<br/><br/>Au-delà de ce chiffre, un projet de climatisation doit surtout choisir comment <strong>distribuer</strong> le froid produit dans le bâtiment. Trois grandes familles d\'architecture coexistent : les systèmes à <strong>débit de réfrigérant variable (DRV/VRV)</strong>, les <strong>PAC sur boucle d\'eau</strong>, et les <strong>centrales de traitement d\'air (CTA) à batterie froide</strong>.',
      definitions: [
        { term: 'EER (Energy Efficiency Ratio)', def: 'Rapport entre la puissance frigorifique fournie $Q_f$ et la puissance électrique absorbée $W$ : $\\text{EER} = Q_f/W$. Identique au $\\text{COP}_{\\text{froid}}$ (module A5), mais mesuré dans des conditions d\'essai normalisées propres à la climatisation.' },
        { term: 'DRV/VRV (Débit de Réfrigérant Variable)', def: 'Une unité extérieure alimente plusieurs unités intérieures via un réseau de tuyauteries frigorifiques, avec régulation indépendante du débit de réfrigérant selon les besoins propres de chaque zone.' },
        { term: 'PAC sur boucle d\'eau', def: 'Chaque local dispose d\'une PAC individuelle raccordée à une boucle d\'eau commune tempérée : un local en demande de froid peut réinjecter sa chaleur excédentaire dans la boucle, utile à un local voisin en demande de chaud.' },
        { term: 'CTA (Centrale de Traitement d\'Air) à batterie froide', def: 'L\'air est refroidi de façon centralisée dans une CTA équipée d\'une batterie froide (eau glacée ou détente directe), puis distribué par un réseau aéraulique — architecture souvent associée à un fort besoin de renouvellement d\'air (voir module A4).' }
      ],
      method: {
        title: 'Évaluer l\'EER et choisir une architecture de climatisation',
        steps: [
          '<strong>Calculer l\'EER</strong> de l\'équipement envisagé : $\\text{EER} = Q_f/W$, à partir de la puissance frigorifique et de la puissance électrique absorbée.',
          '<strong>Ne pas confondre</strong> avec le $\\text{COP}_{\\text{froid}}$ du module A5 : c\'est exactement le même calcul, seule l\'appellation change selon le contexte (EER en climatisation, COP en pompe à chaleur).',
          '<strong>Comparer</strong> l\'EER obtenu aux exigences réglementaires ou à l\'étiquette énergie de l\'équipement.',
          '<strong>Choisir l\'architecture de distribution</strong> adaptée au bâtiment : DRV/VRV pour une forte modularité multi-zones, PAC boucle d\'eau pour des besoins hétérogènes (chaud et froid simultanés selon les façades), CTA à batterie froide pour un traitement d\'air centralisé avec fort renouvellement d\'air.',
          '<strong>Vérifier la cohérence</strong> entre l\'EER annoncé (souvent mesuré à pleine charge) et le fonctionnement réel de l\'installation, généralement à charge partielle une bonne partie de l\'année.'
        ]
      },
      example: {
        statement: 'Un climatiseur split fournit une puissance frigorifique $Q_f = 3{,}5$ kW pour une puissance électrique absorbée $W = 1$ kW.<br/><br/>Calculer l\'EER de cet appareil.',
        steps: [
          '$\\text{EER} = Q_f / W = 3{,}5 / 1 = 3{,}5$.'
        ],
        answer: '$\\text{EER} = 3{,}5$ : pour $1$ kWh électrique consommé, cet appareil fournit $3{,}5$ kWh de froid — un calcul rigoureusement identique à celui du $\\text{COP}_{\\text{froid}}$ vu en thermodynamique appliquée.'
      },
      formulas: [
        '$\\text{EER} = \\dfrac{Q_f}{W}$ (Energy Efficiency Ratio, identique au $\\text{COP}_{\\text{froid}}$ du module A5)',
        '$Q_c = Q_f + W$ (rappel du cycle frigorifique, module A5)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Architecture DRV/VRV',
        title: 'Une unité extérieure, plusieurs unités intérieures régulées indépendamment',
        description: 'Un système DRV/VRV relie une unité extérieure à plusieurs unités intérieures via un réseau de tuyauteries frigorifiques à débit de réfrigérant variable, chaque zone étant régulée indépendamment selon son propre besoin.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="clim-graph-title clim-graph-desc">
            <title id="clim-graph-title">Architecture DRV VRV avec une unite exterieure et plusieurs unites interieures</title>
            <desc id="clim-graph-desc">Une boite unite exterieure a gauche envoie trois fleches vers trois boites unite interieure zone 1, zone 2, zone 3 a droite, representant un reseau de tuyauteries frigorifiques a debit de refrigerant variable, chaque zone etant regulee independamment.</desc>

            <defs>
              <marker id="arrow-fed-clim" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- unite exterieure -->
            <rect class="frame-line" x="20" y="105" width="150" height="60" fill="none"></rect>
            <text class="label-soft" x="95" y="130" text-anchor="middle">Unité extérieure</text>
            <text class="label-soft" x="95" y="148" text-anchor="middle">(DRV/VRV)</text>

            <!-- zone 1 -->
            <rect class="frame-line" x="320" y="25" width="140" height="55" fill="none"></rect>
            <text class="label-soft" x="390" y="50" text-anchor="middle">Unité intérieure</text>
            <text class="label-soft" x="390" y="66" text-anchor="middle">Zone 1</text>

            <!-- zone 2 -->
            <rect class="frame-line" x="320" y="107" width="140" height="55" fill="none"></rect>
            <text class="label-soft" x="390" y="132" text-anchor="middle">Unité intérieure</text>
            <text class="label-soft" x="390" y="148" text-anchor="middle">Zone 2</text>

            <!-- zone 3 -->
            <rect class="frame-line" x="320" y="190" width="140" height="55" fill="none"></rect>
            <text class="label-soft" x="390" y="215" text-anchor="middle">Unité intérieure</text>
            <text class="label-soft" x="390" y="231" text-anchor="middle">Zone 3</text>

            <!-- fleches -->
            <line class="curve-main" x1="170" y1="125" x2="320" y2="55" marker-end="url(#arrow-fed-clim)"></line>
            <line class="curve-main" x1="170" y1="135" x2="320" y2="135" marker-end="url(#arrow-fed-clim)"></line>
            <line class="curve-main" x1="170" y1="145" x2="320" y2="215" marker-end="url(#arrow-fed-clim)"></line>

            <text class="label-soft" x="240" y="245" text-anchor="middle">Réseau frigorifique à débit de réfrigérant variable</text>
          </svg>
        `,
        notes: [
          'Une seule <strong>unité extérieure</strong> alimente plusieurs unités intérieures via un réseau de tuyauteries frigorifiques.',
          'Le <strong>débit de réfrigérant</strong> envoyé à chaque unité intérieure varie indépendamment, selon le besoin propre de chaque zone.',
          'Cette architecture offre une forte <strong>modularité</strong> : chaque zone peut être régulée séparément, contrairement à un système tout-air centralisé.'
        ],
        reading: 'Suis les trois flèches partant de l\'unité extérieure vers chaque unité intérieure : chacune reçoit un débit de réfrigérant ajusté indépendamment à son propre besoin.',
        caption: 'Architecture DRV/VRV : une unité extérieure dessert plusieurs unités intérieures régulées indépendamment.'
      },
      recap: [
        'L\'<strong>EER</strong> $= Q_f/W$ est mathématiquement identique au $\\text{COP}_{\\text{froid}}$ du module A5 : seul le contexte d\'usage change le nom.',
        'Un système <strong>DRV/VRV</strong> relie une unité extérieure à plusieurs unités intérieures, régulées indépendamment selon un débit de réfrigérant variable.',
        'Une <strong>PAC sur boucle d\'eau</strong> permet des transferts de chaleur entre locaux ayant des besoins opposés (chaud d\'un côté, froid de l\'autre).',
        'Une <strong>CTA à batterie froide</strong> centralise le refroidissement de l\'air, adaptée aux bâtiments à fort besoin de renouvellement d\'air.',
        'Le choix d\'architecture dépend du bâtiment : modularité multi-zones (DRV/VRV), besoins hétérogènes chaud/froid (boucle d\'eau), ou fort renouvellement d\'air (CTA).'
      ],
      piege: 'Ne pas confondre l\'<strong>EER</strong> et le $\\text{COP}_{\\text{PAC}}$ (chauffage, module A5) : ce sont deux usages différents de la même machine réversible, avec $\\text{COP}_{\\text{PAC}} = \\text{EER} + 1$ si $\\text{EER}$ et $\\text{COP}_{\\text{froid}}$ désignent la même installation. Attention aussi à l\'EER annoncé sur une fiche technique, souvent mesuré à <strong>pleine charge</strong> dans des conditions normalisées : le fonctionnement réel, la majeure partie de l\'année, se fait à charge partielle, où la performance réelle peut différer sensiblement (notion d\'ESEER, non développée ici).'
    },

    quiz: [
      {
        q: 'L\'EER d\'un équipement de climatisation est :',
        options: [
          'Une grandeur totalement différente du COP d\'une PAC',
          'Mathématiquement identique au $\\text{COP}_{\\text{froid}}$ vu en thermodynamique appliquée, seul le nom change selon le contexte',
          'Toujours inférieur à $1$',
          'Une mesure de la puissance sonore de l\'appareil'
        ],
        answer: 1,
        correction: 'L\'EER $= Q_f/W$ est exactement la même formule que le $\\text{COP}_{\\text{froid}}$ (module A5) : seul le nom d\'usage diffère selon qu\'on parle de climatisation ou de pompe à chaleur.'
      },
      {
        q: 'Un système DRV/VRV se caractérise par :',
        options: [
          'Une seule unité intérieure pour tout le bâtiment',
          'Une unité extérieure alimentant plusieurs unités intérieures, chacune régulée indépendamment via un débit de réfrigérant variable',
          'L\'absence totale d\'unité extérieure',
          'Un réseau exclusivement aéraulique, sans tuyauterie frigorifique'
        ],
        answer: 1,
        correction: 'Le DRV/VRV relie une unité extérieure à plusieurs unités intérieures via un réseau frigorifique, avec un débit de réfrigérant ajusté indépendamment pour chaque zone.'
      },
      {
        q: 'L\'intérêt principal d\'une PAC sur boucle d\'eau, par rapport à un DRV/VRV, est :',
        options: [
          'Un coût d\'installation toujours plus faible',
          'La possibilité de transférer la chaleur excédentaire d\'un local en demande de froid vers un local voisin en demande de chaud',
          'L\'absence de tout besoin en électricité',
          'Une architecture réservée uniquement aux maisons individuelles'
        ],
        answer: 1,
        correction: 'Sur une boucle d\'eau commune, un local qui rejette de la chaleur (mode froid) peut réchauffer la boucle utilisée par un local voisin en demande de chaud — un transfert impossible avec un DRV/VRV classique.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un climatiseur split mural',
          'une unité intérieure d\'un système DRV/VRV',
          'un groupe froid alimentant une CTA à batterie froide',
          'une PAC réversible sur boucle d\'eau'
        ]);
        const W = randFloat(0.8, 2.5, 2);
        const EER = randFloat(2.8, 4.5, 2);
        const Qf = parseFloat((W * EER).toFixed(2));
        return {
          statement: `Pour ${contexte}, la puissance électrique absorbée est $W = ${fr(W, 2)}$ kW et la puissance frigorifique fournie est $Q_f = ${fr(Qf, 2)}$ kW.<br/><br/>Calcule l'EER de cet équipement (arrondi au dixième).`,
          answer: parseFloat(EER.toFixed(1)),
          tolerance: 0.2,
          unit: '',
          hint: 'Applique $\\text{EER} = Q_f / W$.',
          solution: [
            `$\\text{EER} = Q_f / W = ${fr(Qf, 2)} / ${fr(W, 2)} \\approx ${fr(parseFloat(EER.toFixed(1)), 1)}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un bâtiment tertiaire de trois zones (bureaux orientés est, salle de réunion orientée sud, open space orienté nord) hésite entre deux solutions de climatisation. La solution 1 est un système DRV/VRV où chaque unité intérieure fournit une puissance frigorifique $Q_f = 4$ kW pour une puissance électrique absorbée $W = 1{,}25$ kW. La solution 2 est une CTA centralisée à batterie froide, dont le groupe froid fournit $Q_f\' = 45$ kW pour $W\' = 15$ kW.',
      tasks: [
        'Calculer l\'EER de la solution DRV/VRV (par unité intérieure).',
        'Calculer l\'EER de la solution CTA centralisée.',
        'Les trois zones ont des besoins très différents selon l\'orientation (est, sud, nord) et des horaires d\'occupation décalés. Laquelle des deux architectures est a priori la mieux adaptée à cette hétérogénéité, et pourquoi ?',
        'Indépendamment de l\'EER, quel avantage supplémentaire une PAC sur boucle d\'eau apporterait-elle dans ce contexte de besoins hétérogènes entre zones ?'
      ],
      solutions: [
        '$\\text{EER}_{\\text{DRV/VRV}} = Q_f/W = 4/1{,}25 = 3{,}2$.',
        '$\\text{EER}_{\\text{CTA}} = Q_f\'/W\' = 45/15 = 3{,}0$.',
        'Le DRV/VRV est a priori le mieux adapté : sa régulation indépendante par zone permet de répondre séparément aux besoins très différents des trois zones (orientation, horaires d\'occupation), alors qu\'une CTA centralisée traite l\'air de façon plus globale, avec moins de souplesse zone par zone.',
        'Une PAC sur boucle d\'eau irait plus loin : si la salle de réunion orientée sud est en demande de froid pendant que l\'open space orienté nord est encore en demande de chauffage, la chaleur rejetée par la première pourrait directement alimenter la seconde via la boucle commune, réduisant la consommation électrique globale du bâtiment — un transfert impossible avec un DRV/VRV classique.'
      ],
      finalAnswer: '$\\text{EER}_{\\text{DRV/VRV}} = 3{,}2$ contre $\\text{EER}_{\\text{CTA}} = 3{,}0$ : le DRV/VRV est légèrement plus performant ici, et surtout mieux adapté à l\'hétérogénéité des zones — une PAC boucle d\'eau irait encore plus loin en valorisant les transferts de chaleur entre zones à besoins opposés.'
    },

    evaluation: {
      title: 'Évaluation — Climatisation',
      duration: '20 min',
      questions: [
        {
          statement: 'Un climatiseur fournit $Q_f = 6$ kW pour une puissance électrique absorbée $W = 2$ kW. Calculer son EER.',
          type: 'numeric',
          answer: 3,
          tolerance: 0.2,
          unit: '',
          points: 2,
          correction: '$\\text{EER} = Q_f/W = 6/2 = 3$.'
        },
        {
          statement: 'Un climatiseur d\'EER $= 3{,}5$ doit fournir $Q_f = 7$ kW de froid. Calculer la puissance électrique absorbée $W$ (en kW).',
          type: 'numeric',
          answer: 2,
          tolerance: 0.2,
          unit: 'kW',
          points: 3,
          correction: '$\\text{EER} = Q_f/W \\Rightarrow W = Q_f/\\text{EER} = 7/3{,}5 = 2$ kW.'
        },
        {
          statement: 'L\'EER d\'un équipement de climatisation et le $\\text{COP}_{\\text{froid}}$ d\'une PAC (module A5) sont :',
          type: 'multiple-choice',
          options: [
            'Deux grandeurs physiquement différentes, sans lien entre elles',
            'Mathématiquement identiques ($Q_f/W$), avec un nom d\'usage différent selon le contexte',
            'Deux grandeurs qui ne s\'appliquent jamais au même équipement',
            'Toujours égales à $1$ par convention'
          ],
          answer: 1,
          points: 2,
          correction: 'EER et $\\text{COP}_{\\text{froid}}$ désignent tous deux le rapport $Q_f/W$ : seule l\'appellation change selon qu\'on parle de climatisation (EER) ou de pompe à chaleur (COP).'
        },
        {
          statement: 'Une PAC sur boucle d\'eau, comparée à un système DRV/VRV, permet en plus :',
          type: 'multiple-choice',
          options: [
            'De supprimer totalement la consommation électrique du bâtiment',
            'De transférer la chaleur d\'un local en demande de froid vers un local voisin en demande de chaud, via la boucle commune',
            'De se passer d\'unité extérieure',
            'De fonctionner sans aucun réfrigérant'
          ],
          answer: 1,
          points: 3,
          correction: 'La boucle d\'eau commune permet des transferts de chaleur entre locaux à besoins opposés (un local rejette de la chaleur au profit d\'un autre qui en a besoin), ce qu\'un DRV/VRV classique ne permet pas directement.'
        },
        {
          statement: 'Une CTA à batterie froide est une architecture particulièrement adaptée lorsque :',
          type: 'multiple-choice',
          options: [
            'Le bâtiment n\'a besoin d\'aucun renouvellement d\'air',
            'Le bâtiment a un fort besoin de renouvellement d\'air, en plus du traitement thermique',
            'Chaque local doit être régulé de façon totalement indépendante',
            'Aucun réseau aéraulique n\'est disponible dans le bâtiment'
          ],
          answer: 1,
          points: 2,
          correction: 'La CTA centralise à la fois le traitement de l\'air (renouvellement, filtration) et son refroidissement via la batterie froide : elle est particulièrement adaptée aux bâtiments à fort besoin de renouvellement d\'air.'
        }
      ]
    }
  });
