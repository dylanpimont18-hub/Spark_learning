/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b5-6-composants-annexes-froid.js
   BTS FED — S8-B5-6 Composants annexes du circuit frigorifique
   Source : https://www.carly-sa.fr/wp-content/uploads/2018/09/DDNCY_DOCTEC_12_07_FR.pdf (consulté 2026-08-03)
   — perte de charge maximale admissible sur un filtre déshydrateur : 0,5 bar (au-delà, le filtre doit être remplacé).
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b5-6-composants-annexes-froid',
    level: 3, subject: 'fed',
    icon: '🧰',
    title: 'Composants annexes du circuit frigorifique',
    subtitle: 'Voyant liquide, filtre déshydrateur, bouteille anti-coup de liquide, séparateur d\'huile',
    keywords: ['Voyant liquide', 'Filtre déshydrateur', 'Bouteille anti-coup de liquide', 'Séparateur d\'huile', 'Perte de charge'],
    physics: 'Autour des quatre grands organes du cycle frigorifique (compresseur, condenseur, détendeur, évaporateur), une poignée de <strong>petits composants annexes</strong> veille en silence sur la qualité du fluide et de l\'huile qui circulent dans le circuit — invisibles au quotidien, mais décisifs le jour où l\'un d\'eux s\'encrasse ou se sature.',

    cours: {
      intro: 'Un circuit frigorifique ne se résume pas à ses quatre organes principaux : plusieurs <strong>composants annexes</strong> sont installés le long des tuyauteries pour surveiller, protéger ou purifier le fluide frigorigène en circulation.<br/><br/>Ces composants n\'ont pas de rôle actif sur le cycle thermodynamique (ils ne compriment pas, ne condensent pas, ne détendent pas, n\'évaporent pas), mais leur absence — ou leur défaillance — expose les organes principaux à une usure prématurée, voire à une avarie brutale.<br/><br/>On en distingue quatre, répartis à des endroits précis du circuit : le <strong>voyant liquide</strong> et le <strong>filtre déshydrateur</strong> sur la ligne liquide (entre condenseur et détendeur), la <strong>bouteille anti-coup de liquide</strong> sur la ligne d\'aspiration (avant le compresseur), et le <strong>séparateur d\'huile</strong> sur la ligne de refoulement (juste après le compresseur).',
      definitions: [
        { term: 'Voyant liquide', def: 'Petit hublot transparent inséré sur la ligne liquide, qui permet un <strong>contrôle visuel</strong> de la charge en fluide frigorigène : la présence de bulles traduit une sous-charge (le fluide n\'est plus entièrement liquide à cet endroit). Une pastille intégrée change également de couleur en présence d\'humidité résiduelle dans le circuit.' },
        { term: 'Filtre déshydrateur', def: 'Cartouche placée sur la ligne liquide qui retient les <strong>particules solides</strong> (résidus de brasure, poussières) et absorbe l\'<strong>humidité résiduelle</strong> du circuit, protégeant ainsi le détendeur (orifice fin, sensible au colmatage) et le compresseur. Il se sature progressivement au fil du temps, ce qui se traduit par une <strong>perte de charge croissante</strong> à ses bornes.' },
        { term: 'Bouteille anti-coup de liquide', def: 'Accumulateur placé sur la ligne d\'aspiration, en amont du compresseur, qui retient tout liquide résiduel non vaporisé avant qu\'il n\'atteigne la chambre de compression — un rempart supplémentaire face au risque de coup de liquide (voir la surchauffe, module B5-3).' },
        { term: 'Séparateur d\'huile', def: 'Appareil placé sur la ligne de refoulement, juste après le compresseur, qui retient l\'huile entraînée par le gaz chaud et la renvoie directement au carter du compresseur, limitant la quantité d\'huile qui circule inutilement dans le reste du circuit (condenseur, tuyauteries) — un dispositif complémentaire du retour d\'huile assuré par le dimensionnement des tuyauteries (module B5-8).' }
      ],
      method: {
        title: 'Diagnostiquer l\'état d\'un filtre déshydrateur par la perte de charge',
        steps: [
          '<strong>Mesurer la pression</strong> $P_{amont}$ juste avant le filtre déshydrateur (raccord de mesure ou manomètre).',
          '<strong>Mesurer la pression</strong> $P_{aval}$ juste après le filtre, sur la même ligne liquide.',
          '<strong>Calculer la perte de charge</strong> $\\Delta P = P_{amont} - P_{aval}$.',
          '<strong>Comparer</strong> cette valeur au seuil maximal admissible pour ce type de filtre, généralement $0{,}5$ bar : au-delà, le filtre est saturé et doit être remplacé.',
          '<strong>Profiter de l\'intervention</strong> pour vérifier également le voyant liquide (absence de bulles, couleur de l\'indicateur d\'humidité).'
        ]
      },
      example: {
        statement: 'Sur une installation de climatisation tertiaire, un frigoriste mesure $P_{amont}=5{,}85$ bar juste avant le filtre déshydrateur et $P_{aval}=5{,}20$ bar juste après.<br/><br/>Calculer la perte de charge $\\Delta P$ et conclure sur l\'état du filtre.',
        steps: [
          'Perte de charge : $\\Delta P = P_{amont} - P_{aval} = 5{,}85 - 5{,}20 = 0{,}65$ bar.',
          'Ce résultat est comparé au seuil maximal admissible de $0{,}5$ bar pour ce type de filtre.'
        ],
        answer: '$\\Delta P = 0{,}65$ bar, <strong>supérieure</strong> au seuil de $0{,}5$ bar : le filtre déshydrateur est saturé (particules et humidité accumulées) et doit être remplacé.'
      },
      formulas: [
        '$\\Delta P = P_{amont} - P_{aval}$ (perte de charge aux bornes du filtre déshydrateur, en bar)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Position des composants annexes sur le circuit',
        title: 'Quatre composants annexes répartis le long du circuit',
        description: 'Le séparateur d\'huile est placé juste après le compresseur (ligne de refoulement), le filtre déshydrateur et le voyant liquide sur la ligne liquide (après le condenseur), et la bouteille anti-coup de liquide juste avant le compresseur (ligne d\'aspiration).',
        svg: `
          <svg viewBox="0 0 460 260" role="img" aria-labelledby="annexes-graph-title annexes-graph-desc">
            <title id="annexes-graph-title">Position des composants annexes sur le circuit frigorifique</title>
            <desc id="annexes-graph-desc">Boucle representant le circuit frigorifique avec quatre boites : compresseur en bas a gauche, separateur d'huile en haut a gauche relie au compresseur par la ligne de refoulement, filtre deshydrateur et voyant liquide en haut a droite relie au separateur d'huile via le condenseur, bouteille anti-coup de liquide en bas a droite reliee au filtre via le detendeur et l'evaporateur, et enfin reliee au compresseur par la ligne d'aspiration, fermant la boucle.</desc>

            <rect class="frame-line" x="20" y="170" width="140" height="50" fill="none"></rect>
            <text class="label-soft" x="90" y="200" text-anchor="middle">Compresseur</text>

            <rect class="frame-line" x="20" y="20" width="140" height="50" fill="none"></rect>
            <text class="label-soft" x="90" y="42" text-anchor="middle">Séparateur</text>
            <text class="label-soft" x="90" y="57" text-anchor="middle">d'huile</text>

            <rect class="frame-line" x="300" y="20" width="140" height="50" fill="none"></rect>
            <text class="label-soft" x="370" y="42" text-anchor="middle">Filtre déshydr.</text>
            <text class="label-soft" x="370" y="57" text-anchor="middle">+ voyant liquide</text>

            <rect class="frame-line" x="300" y="170" width="140" height="50" fill="none"></rect>
            <text class="label-soft" x="370" y="192" text-anchor="middle">Bouteille anti-</text>
            <text class="label-soft" x="370" y="207" text-anchor="middle">coup de liquide</text>

            <line class="curve-main" x1="90" y1="170" x2="90" y2="70" marker-end="url(#arrow-fed-annexes)"></line>
            <text class="annotation-label" x="100" y="120" text-anchor="start">Refoulement (HP)</text>

            <line class="curve-main" x1="160" y1="45" x2="300" y2="45" marker-end="url(#arrow-fed-annexes)"></line>
            <text class="annotation-label" x="230" y="30" text-anchor="middle">via condenseur</text>

            <line class="curve-main" x1="370" y1="70" x2="370" y2="170" marker-end="url(#arrow-fed-annexes)"></line>
            <text class="annotation-label" x="380" y="120" text-anchor="start">via détendeur + évap.</text>

            <line class="curve-main" x1="300" y1="195" x2="160" y2="195" marker-end="url(#arrow-fed-annexes)"></line>
            <text class="annotation-label" x="230" y="215" text-anchor="middle">Aspiration (BP)</text>

            <defs>
              <marker id="arrow-fed-annexes" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>
          </svg>
        `,
        notes: [
          'Le <strong>séparateur d\'huile</strong> agit juste après le compresseur, sur la ligne de refoulement (gaz chaud).',
          'Le <strong>filtre déshydrateur</strong> et le <strong>voyant liquide</strong> sont installés sur la ligne liquide, après le condenseur.',
          'La <strong>bouteille anti-coup de liquide</strong> protège le compresseur en dernier point, juste avant l\'aspiration.'
        ],
        reading: 'Suis la boucle dans le sens des flèches : refoulement (séparateur d\'huile) → ligne liquide (filtre + voyant) → aspiration (bouteille anti-coup de liquide) → retour au compresseur.',
        caption: 'Les quatre composants annexes surveillent et protègent le circuit à des points précis, sans participer directement au cycle thermodynamique.'
      },
      recap: [
        'Le <strong>voyant liquide</strong> permet un contrôle visuel de la charge en fluide (bulles = sous-charge) et de la présence d\'humidité (pastille colorée).',
        'Le <strong>filtre déshydrateur</strong> retient particules et humidité ; sa saturation se traduit par une <strong>perte de charge croissante</strong> $\\Delta P = P_{amont} - P_{aval}$, à comparer au seuil de $0{,}5$ bar.',
        'La <strong>bouteille anti-coup de liquide</strong> (ligne d\'aspiration) protège le compresseur d\'un éventuel liquide résiduel non vaporisé.',
        'Le <strong>séparateur d\'huile</strong> (ligne de refoulement) renvoie l\'huile entraînée directement au carter du compresseur.',
        'Aucun de ces composants n\'intervient dans le cycle thermodynamique lui-même : ils protègent et surveillent les organes principaux.'
      ],
      piege: 'Ne pas confondre la <strong>bouteille anti-coup de liquide</strong> (sur la ligne d\'<strong>aspiration</strong>, juste avant le compresseur, qui retient un liquide résiduel indésirable) avec une éventuelle bouteille de <strong>liquide</strong> (réservoir tampon de fluide en sortie de condenseur) : leur position et leur rôle sont différents, malgré des noms qui se ressemblent. De même, la présence de bulles dans le voyant liquide juste après une mise en service (charge en fluide encore incomplète) ne doit pas être confondue avec un signal de saturation du filtre déshydrateur : seule la mesure de la perte de charge $\\Delta P$ renseigne sur l\'état du filtre.'
    },

    quiz: [
      {
        q: 'Le rôle principal du filtre déshydrateur est de :',
        options: [
          'Augmenter la pression de refoulement du compresseur',
          'Retenir les particules solides et absorber l\'humidité résiduelle du circuit',
          'Inverser le sens de circulation du fluide frigorigène',
          'Mesurer la température d\'évaporation'
        ],
        answer: 1,
        correction: 'Le filtre déshydrateur protège le détendeur et le compresseur en retenant particules solides et humidité résiduelle présentes dans le circuit.'
      },
      {
        q: 'La bouteille anti-coup de liquide est installée :',
        options: [
          'Sur la ligne de refoulement, juste après le compresseur',
          'Sur la ligne liquide, juste après le condenseur',
          'Sur la ligne d\'aspiration, juste avant le compresseur',
          'À l\'intérieur même du détendeur'
        ],
        answer: 2,
        correction: 'Placée sur la ligne d\'aspiration, en amont du compresseur, la bouteille anti-coup de liquide retient tout liquide résiduel non vaporisé avant qu\'il n\'atteigne la chambre de compression.'
      },
      {
        q: 'Une perte de charge $\\Delta P$ de $0{,}7$ bar mesurée aux bornes d\'un filtre déshydrateur, pour un seuil admissible de $0{,}5$ bar, signifie que :',
        options: [
          'Le filtre fonctionne normalement, aucune action n\'est requise',
          'Le filtre est saturé et doit être remplacé',
          'Le voyant liquide doit être changé en priorité',
          'Le séparateur d\'huile est en cause'
        ],
        answer: 1,
        correction: 'Une perte de charge supérieure au seuil admissible ($0{,}5$ bar pour ce type de filtre) traduit un encrassement du filtre déshydrateur, qui doit alors être remplacé.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une installation de climatisation tertiaire',
          'une chambre froide positive de stockage',
          'un groupe de production d\'eau glacée',
          'une PAC air/eau réversible'
        ]);
        const Pamont = randFloat(4.5, 9.5, 2);
        const deltaP = randFloat(0.05, 0.9, 2);
        const Paval = parseFloat((Pamont - deltaP).toFixed(2));
        return {
          statement: `Sur ${contexte}, un frigoriste mesure $P_{amont}=${fr(Pamont, 2)}$ bar juste avant le filtre déshydrateur et $P_{aval}=${fr(Paval, 2)}$ bar juste après.<br/><br/>Calcule la perte de charge $\\Delta P$ aux bornes du filtre (en bar, arrondie au centième).`,
          answer: deltaP,
          tolerance: 0.03,
          unit: 'bar',
          hint: 'Applique $\\Delta P = P_{amont} - P_{aval}$, puis compare au seuil de $0{,}5$ bar (au-delà, le filtre doit être remplacé).',
          solution: [
            `$\\Delta P = P_{amont} - P_{aval} = ${fr(Pamont, 2)} - ${fr(Paval, 2)} = ${fr(deltaP, 2)}$ bar.`
          ]
        };
      }
    },

    probleme: {
      context: 'Lors d\'une visite de maintenance annuelle, un technicien contrôle le filtre déshydrateur d\'une installation de climatisation. Six mois plus tôt, il avait mesuré $P_{amont,1}=6{,}10$ bar et $P_{aval,1}=5{,}95$ bar de part et d\'autre du filtre. Aujourd\'hui, il mesure $P_{amont,2}=6{,}05$ bar et $P_{aval,2}=5{,}37$ bar.',
      tasks: [
        'Calculer la perte de charge $\\Delta P_1$ mesurée six mois plus tôt.',
        'Calculer la perte de charge $\\Delta P_2$ mesurée aujourd\'hui.',
        'Comparer ces deux valeurs au seuil admissible de $0{,}5$ bar et conclure sur l\'état actuel du filtre.',
        'Quel autre composant annexe le technicien devrait-il vérifier au même moment, et pourquoi ?'
      ],
      solutions: [
        '$\\Delta P_1 = P_{amont,1} - P_{aval,1} = 6{,}10 - 5{,}95 = 0{,}15$ bar.',
        '$\\Delta P_2 = P_{amont,2} - P_{aval,2} = 6{,}05 - 5{,}37 = 0{,}68$ bar.',
        'Six mois plus tôt, $\\Delta P_1 = 0{,}15$ bar restait très en-deçà du seuil de $0{,}5$ bar : le filtre était propre. Aujourd\'hui, $\\Delta P_2 = 0{,}68$ bar dépasse ce seuil : le filtre s\'est progressivement <strong>saturé</strong> (particules, humidité accumulées) et doit être remplacé.',
        'Il est pertinent de vérifier également le <strong>voyant liquide</strong> : son hublot permet de contrôler l\'absence de bulles (charge en fluide correcte) et la couleur de l\'indicateur d\'humidité, une information complémentaire à la saturation du filtre déshydrateur.'
      ],
      finalAnswer: 'La perte de charge est passée de $0{,}15$ bar (filtre propre) à $0{,}68$ bar (filtre saturé, au-delà du seuil de $0{,}5$ bar) : le filtre déshydrateur doit être remplacé, et le voyant liquide vérifié à cette occasion.'
    },

    evaluation: {
      title: 'Évaluation — Composants annexes du circuit frigorifique',
      duration: '15 min',
      questions: [
        {
          statement: 'Un filtre déshydrateur est mesuré avec $P_{amont}=7{,}20$ bar et $P_{aval}=6{,}55$ bar. Calculer la perte de charge $\\Delta P$ (en bar, arrondie au centième).',
          type: 'numeric',
          answer: 0.65,
          tolerance: 0.03,
          unit: 'bar',
          points: 3,
          correction: '$\\Delta P = P_{amont} - P_{aval} = 7{,}20 - 6{,}55 = 0{,}65$ bar.'
        },
        {
          statement: 'Le séparateur d\'huile, placé sur la ligne de refoulement, a pour rôle de :',
          type: 'multiple-choice',
          options: [
            'Retenir l\'huile entraînée par le gaz chaud et la renvoyer au carter du compresseur',
            'Absorber l\'humidité résiduelle du circuit',
            'Contrôler visuellement la charge en fluide frigorigène',
            'Protéger le compresseur contre un coup de liquide'
          ],
          answer: 0,
          points: 2,
          correction: 'Le séparateur d\'huile retient l\'huile entraînée par le gaz de refoulement et la renvoie directement au carter du compresseur, limitant sa circulation inutile dans le reste du circuit.'
        },
        {
          statement: 'La présence de bulles dans le voyant liquide traduit généralement :',
          type: 'multiple-choice',
          options: [
            'Une sous-charge en fluide frigorigène',
            'Une saturation du filtre déshydrateur',
            'Un excès d\'huile dans le circuit',
            'Une surchauffe trop élevée à l\'évaporateur'
          ],
          answer: 0,
          points: 2,
          correction: 'Des bulles visibles dans le voyant liquide indiquent que le fluide n\'est plus entièrement à l\'état liquide à cet endroit, signe le plus souvent d\'une sous-charge en fluide frigorigène.'
        },
        {
          statement: 'Pour un filtre déshydrateur, le seuil de perte de charge maximal admissible avant remplacement est de l\'ordre de :',
          type: 'multiple-choice',
          options: [
            '$0{,}05$ bar',
            '$0{,}5$ bar',
            '$5$ bar',
            '$50$ bar'
          ],
          answer: 1,
          points: 2,
          correction: 'Au-delà d\'une perte de charge d\'environ $0{,}5$ bar aux bornes du filtre déshydrateur, celui-ci est considéré comme saturé et doit être remplacé.'
        }
      ]
    }
  });
