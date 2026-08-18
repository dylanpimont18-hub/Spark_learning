/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-mouvement.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-mouvement',
    level: 2, subject: 'physique',
    icon: '🏃',
    title: `Description d'un mouvement`,
    subtitle: `Référentiel, trajectoire, vitesse moyenne et vecteur vitesse`,
    keywords: ['Référentiel', 'Trajectoire', 'Vitesse', 'Vecteur vitesse', 'Chronophotographie'],
    physics: `L'étude du mouvement permet d'analyser la vitesse d'un véhicule à partir d'un radar, de reconstituer la trajectoire d'un objet à partir d'une vidéo pointée image par image, ou de choisir le référentiel adapté pour décrire le déplacement d'un satellite, d'un passager dans un train ou d'un point situé sur une roue en rotation.`,

    cours: {
      intro: `Avant même de calculer une vitesse, il faut répondre à une question essentielle : <strong>mouvement par rapport à quoi ?</strong> Un passager assis dans un train est immobile par rapport au train, mais en mouvement par rapport aux rails. Cette question impose de choisir un <strong>référentiel</strong> : un solide de référence (le sol, le train, un manège...) auquel on associe un repère d'espace et une horloge.<br/><br/>Une fois le référentiel fixé, on peut suivre les positions successives d'un point du système étudié : l'ensemble de ces positions dessine la <strong>trajectoire</strong> du mouvement. Cette trajectoire peut être <strong>rectiligne</strong> (une droite), <strong>circulaire</strong> (un cercle), ou <strong>quelconque</strong> (une courbe). Attention, la trajectoire d'un même point dépend elle aussi du référentiel choisi : la valve d'une roue de vélo décrit un cercle dans le référentiel du cadre, mais une courbe bien plus complexe dans le référentiel de la route.<br/><br/>Pour quantifier le mouvement, on utilise la <strong>vitesse moyenne</strong> $v_{moy} = \\dfrac{d}{\\Delta t}$ (distance parcourue divisée par la durée du parcours), et, de façon plus précise, le <strong>vecteur vitesse</strong> à un instant donné, qui renseigne non seulement sur la rapidité du mouvement mais aussi sur sa direction et son sens.`,
      definitions: [
        { term: `Référentiel`, def: `Solide de référence (associé à un repère d'espace et à une horloge) par rapport auquel on décrit un mouvement. Un même système peut être immobile dans un référentiel et en mouvement dans un autre : le mouvement n'a de sens que <strong>relativement</strong> à un référentiel précisé.` },
        { term: `Trajectoire`, def: `Ensemble des positions successives occupées par un point du système au cours du temps, dans un référentiel donné. Elle peut être rectiligne, circulaire ou quelconque, et dépend elle-même du référentiel choisi.` },
        { term: `Vitesse moyenne`, def: `Rapport de la distance $d$ parcourue sur la durée $\\Delta t$ du parcours : $v_{moy} = \\dfrac{d}{\\Delta t}$, en m/s (ou km/h). Elle ne renseigne pas sur les variations de vitesse au cours du trajet.` },
        { term: `Vecteur vitesse`, def: `Vecteur $\\vec{v}$ qui décrit le mouvement à un instant précis : sa <strong>direction</strong> est tangente à la trajectoire, son <strong>sens</strong> est celui du mouvement, et sa <strong>norme</strong> (valeur) est d'autant plus grande que le mobile se déplace vite.` },
        { term: `Mouvement uniforme, accéléré, décéléré`, def: `Un mouvement est <strong>uniforme</strong> si la norme du vecteur vitesse reste constante, <strong>accéléré</strong> si elle augmente, <strong>décéléré</strong> (ou ralenti) si elle diminue au cours du temps.` }
      ],
      method: {
        title: `Construire le vecteur vitesse en un point à partir d'une chronophotographie, en 3 étapes`,
        steps: [
          `<strong>Repérer les positions successives</strong> du mobile, enregistrées à intervalles de temps égaux $\\tau$ (chronophotographie ou vidéo pointée image par image). Nommer les points $M_0$, $M_1$, $M_2$... dans l'ordre du mouvement.<br/>Exemple : sur une vidéo filmée à 25 images par seconde, on peut pointer une position toutes les $\\tau = 0{,}04$ s, ou un multiple de cette durée.`,
          `<strong>Tracer le vecteur vitesse au point $M_i$</strong> en le rendant parallèle au segment reliant les deux positions voisines $M_{i-1}$ et $M_{i+1}$, orienté dans le sens du mouvement : $\\vec{v_i}$ est colinéaire à $\\vec{M_{i-1}M_{i+1}}$.<br/>Cette construction donne une bonne approximation de la direction réelle du mouvement au point $M_i$, car elle est tangente à la trajectoire.`,
          `<strong>Calculer la norme</strong> du vecteur vitesse par $v_i = \\dfrac{M_{i-1}M_{i+1}}{2\\tau}$ (distance entre les deux positions voisines, divisée par la durée qui les sépare), puis choisir une échelle pour représenter le vecteur à une longueur lisible sur le schéma.`
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: `Chronophotographie d'un mouvement`,
        title: `Construction du vecteur vitesse à partir de positions successives`,
        description: `Positions $M_0$ à $M_5$ relevées à intervalles de temps égaux $\\tau$ : l'écart croissant entre les positions traduit un mouvement accéléré, et le vecteur $\\vec{v_2}$ se construit à partir du segment $M_1M_3$.`,
        svg: `
          <svg viewBox="0 0 560 340" role="img" aria-labelledby="mvt-2nde-title mvt-2nde-desc">
            <title id="mvt-2nde-title">Chronophotographie d'un mobile en mouvement accelere</title>
            <desc id="mvt-2nde-desc">Six positions M0 a M5 sont reliees par une trajectoire courbe, relevees a intervalles de temps egaux tau. L'ecart entre deux positions successives augmente regulierement de M0 vers M5, traduisant un mouvement accelere. Un vecteur vitesse v2 est construit au point M2, parallele au segment pointille reliant les positions voisines M1 et M3.</desc>

            <defs>
              <marker id="arrow-phys2nde-mvt" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- trajectoire (segments reliant les positions successives) -->
            <path class="curve-main" fill="none" d="M50,270 L110,255 L185,230 L280,195 L395,150 L530,95"></path>

            <!-- positions M0 a M5 -->
            <circle class="plot-point" cx="50" cy="270" r="5"></circle>
            <text class="label-soft" x="50" y="292" text-anchor="middle">M0</text>

            <circle class="plot-point" cx="110" cy="255" r="5"></circle>
            <text class="label-soft" x="110" y="277" text-anchor="middle">M1</text>

            <circle class="plot-point" cx="185" cy="230" r="5"></circle>
            <text class="label-soft" x="185" y="252" text-anchor="middle">M2</text>

            <circle class="plot-point" cx="280" cy="195" r="5"></circle>
            <text class="label-soft" x="280" y="178" text-anchor="middle">M3</text>

            <circle class="plot-point" cx="395" cy="150" r="5"></circle>
            <text class="label-soft" x="395" y="133" text-anchor="middle">M4</text>

            <circle class="plot-point" cx="530" cy="95" r="5"></circle>
            <text class="label-soft" x="530" y="78" text-anchor="middle">M5</text>

            <!-- reperes de duree tau egale entre chaque position -->
            <text class="tick-label" x="80" y="285" text-anchor="middle">τ</text>
            <text class="tick-label" x="147" y="264" text-anchor="middle">τ</text>
            <text class="tick-label" x="232" y="235" text-anchor="middle">τ</text>
            <text class="tick-label" x="337" y="195" text-anchor="middle">τ</text>
            <text class="tick-label" x="462" y="145" text-anchor="middle">τ</text>

            <!-- construction du vecteur v2 : segment M1M3 en pointilles -->
            <line class="guide-line" x1="110" y1="255" x2="280" y2="195"></line>

            <!-- vecteur v2 au point M2, parallele a M1M3 -->
            <line class="curve-main" x1="185" y1="230" x2="242" y2="210" marker-end="url(#arrow-phys2nde-mvt)"></line>
            <text class="annotation-label" x="250" y="204" text-anchor="start">v₂</text>
          </svg>
        `,
        notes: [
          `Les positions $M_0$ à $M_5$ sont enregistrées à intervalles de temps <strong>égaux</strong> $\\tau$ (comme sur une chronophotographie) : ce sont les durées entre les prises qui sont identiques, pas les distances parcourues.`,
          `Les distances entre deux positions successives augmentent régulièrement ($M_0M_1 < M_1M_2 < \\dots < M_4M_5$) alors que $\\tau$ reste le même : le mobile parcourt une distance de plus en plus grande à chaque intervalle, signe d'un <strong>mouvement accéléré</strong>.`,
          `Le vecteur vitesse en $M_2$ se construit en traçant, à partir de $M_2$, un vecteur parallèle au segment $M_1M_3$ (les deux positions voisines) : sa direction est tangente à la trajectoire, et sa norme est proportionnelle à la distance $M_1M_3$.`
        ],
        reading: `Repère d'abord les six positions successives séparées par la même durée $\\tau$, puis observe l'écart croissant entre elles ; regarde ensuite comment le vecteur $\\vec{v_2}$ en $M_2$ est construit à partir du segment pointillé $M_1M_3$.`,
        caption: `Chronophotographie d'un mobile en mouvement accéléré : positions relevées à intervalles de temps égaux, distances croissantes, et construction du vecteur vitesse instantanée en $M_2$.`
      },
      example: {
        statement: `Sur une vidéo d'un skieur filmée à intervalles de temps égaux $\\tau = 0{,}2$ s, on relève les positions $M_1$ et $M_3$, qui encadrent la position $M_2$ étudiée. La distance mesurée entre $M_1$ et $M_3$ est $M_1M_3 = 18$ m.<br/><br/>Calculer la norme du vecteur vitesse du skieur en $M_2$.`,
        steps: [
          `La méthode de construction du vecteur vitesse en un point $M_i$ utilise les deux positions voisines : ici, $M_1$ et $M_3$ encadrent $M_2$.`,
          `La durée séparant $M_1$ et $M_3$ correspond à deux intervalles $\\tau$ : $2\\tau = 2 \\times 0{,}2 = 0{,}4$ s.`,
          `Norme du vecteur vitesse en $M_2$ : $v_2 = \\dfrac{M_1M_3}{2\\tau} = \\dfrac{18}{0{,}4} = 45$ m/s.`
        ],
        answer: `$v_2 = 45$ m/s, soit environ $162$ km/h (en multipliant par $3{,}6$) — une vitesse tout à fait plausible pour un skieur de descente lancé à pleine vitesse.`
      },
      formulas: [
        `Vitesse moyenne : $v_{moy} = \\dfrac{d}{\\Delta t}$`,
        `Norme du vecteur vitesse (à partir d'une chronophotographie) : $v_i = \\dfrac{M_{i-1}M_{i+1}}{2\\tau}$`,
        `Conversion km/h $\\rightarrow$ m/s : diviser par $3{,}6$`,
        `Conversion m/s $\\rightarrow$ km/h : multiplier par $3{,}6$`
      ],
      recap: [
        `Un mouvement ne se décrit que relativement à un <strong>référentiel</strong> choisi : la même situation peut être un mouvement dans un référentiel et un repos dans un autre.`,
        `La <strong>trajectoire</strong> peut être rectiligne, circulaire ou quelconque — et elle dépend, elle aussi, du référentiel.`,
        `Le <strong>vecteur vitesse</strong> est toujours tangent à la trajectoire, orienté dans le sens du mouvement, avec une norme d'autant plus grande que le déplacement entre deux instants voisins est important.`,
        `Un mouvement est <strong>uniforme</strong> (norme constante), <strong>accéléré</strong> (norme croissante) ou <strong>décéléré</strong> (norme décroissante) selon l'évolution de la norme du vecteur vitesse au cours du temps.`
      ],
      piege: `Beaucoup d'élèves confondent la trajectoire (la forme du chemin parcouru) avec le vecteur vitesse (qui indique la rapidité et la direction du mouvement à un instant donné). Attention, un mobile peut suivre une trajectoire parfaitement rectiligne tout en ayant un mouvement accéléré ou décéléré : la forme de la trajectoire ne dit rien, à elle seule, de la façon dont la vitesse évolue.`
    },

    quiz: [
      {
        q: `Un passager est assis dans un train qui roule à vitesse constante sur une voie rectiligne. Par rapport à quel référentiel peut-on dire qu'il est immobile ?`,
        options: [
          `Le référentiel du train`,
          `Le référentiel du sol`,
          `Il n'est immobile dans aucun référentiel`,
          `Le référentiel d'une voiture qui double le train`
        ],
        answer: 0,
        correction: `Le passager ne bouge pas par rapport aux sièges, aux parois et au sol du train : il est immobile dans le <strong>référentiel du train</strong>. Il est en revanche en mouvement dans le référentiel du sol, puisque le train avance par rapport aux rails. Le mouvement n'a de sens que relativement à un référentiel choisi.`
      },
      {
        q: `Sur une chronophotographie prise à intervalles de temps égaux, les positions successives d'un mobile sont de plus en plus espacées. Que peut-on dire du mouvement ?`,
        options: [
          `Il est uniforme`,
          `Il est accéléré`,
          `Il est décéléré`,
          `On ne peut rien dire sans connaître la trajectoire`
        ],
        answer: 1,
        correction: `Puisque la durée $\\tau$ entre deux prises est la même à chaque fois, un espacement croissant signifie que le mobile parcourt une distance de plus en plus grande dans le même temps : sa vitesse augmente. Le mouvement est donc <strong>accéléré</strong>.`
      },
      {
        q: `Le vecteur vitesse d'un mobile, à un instant donné, est toujours :`,
        options: [
          `Perpendiculaire à la trajectoire`,
          `Tangent à la trajectoire, orienté dans le sens du mouvement`,
          `De norme constante au cours du temps`,
          `Dirigé vers le point de départ du mouvement`
        ],
        answer: 1,
        correction: `Par construction (à partir de deux positions voisines), le vecteur vitesse est <strong>tangent à la trajectoire</strong> et orienté dans le <strong>sens du mouvement</strong>. Sa norme peut tout à fait varier au cours du temps : rien n'impose qu'elle reste constante.`
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['vitesse_moyenne', 'conversion']);

        if (typeExo === 'vitesse_moyenne') {
          var d = rand(60, 400);
          var t = rand(6, 40);
          var v = parseFloat((d / t).toFixed(2));
          var contexte = pick([
            `un coureur sur une piste d'athlétisme`,
            `un cycliste sur une ligne droite`,
            `un nageur en bassin olympique`,
            `un patineur sur une piste de vitesse`,
            `un robot mobile lors d'un concours de robotique`
          ]);
          return {
            statement: 'Sur ' + contexte + ', on mesure une distance parcourue $d = ' + d + '$ m en une durée $\\Delta t = ' + t + '$ s.<br/><br/>Calcule la vitesse moyenne $v_{moy}$ correspondante (en m/s, arrondie au centième).',
            answer: v,
            tolerance: Math.max(0.1, parseFloat((v * 0.03).toFixed(2))),
            unit: 'm/s',
            hint: 'La vitesse moyenne se calcule par $v_{moy} = \\dfrac{d}{\\Delta t}$, une simple division de la distance par la durée.',
            solution: [
              'Formule de la vitesse moyenne : $v_{moy} = \\dfrac{d}{\\Delta t}$.',
              'Application numérique : $v_{moy} = \\dfrac{' + d + '}{' + t + '}$.',
              'Résultat : $v_{moy} \\approx ' + fr(v, 2) + '$ m/s.'
            ]
          };
        } else {
          var vkmh = rand(10, 130);
          var vms = parseFloat((vkmh / 3.6).toFixed(2));
          var contexte2 = pick([
            `un panneau de limitation de vitesse routière`,
            `un train régional entre deux gares`,
            `un cycliste sur une route dégagée`,
            `un scooter en zone urbaine`,
            `une voiture d'essai sur circuit`
          ]);
          return {
            statement: 'Sur ' + contexte2 + ', la vitesse relevée est $v = ' + vkmh + '$ km/h.<br/><br/>Convertis cette vitesse en m/s (arrondie au centième).',
            answer: vms,
            tolerance: Math.max(0.05, parseFloat((vms * 0.03).toFixed(2))),
            unit: 'm/s',
            hint: 'Pour convertir une vitesse de km/h en m/s, il faut diviser par $3{,}6$.',
            solution: [
              'Conversion : $v_{(m/s)} = \\dfrac{v_{(km/h)}}{3{,}6}$.',
              'Application numérique : $v = \\dfrac{' + vkmh + '}{3{,}6}$.',
              'Résultat : $v \\approx ' + fr(vms, 2) + '$ m/s.'
            ]
          };
        }
      }
    },

    probleme: {
      context: `Lors d'un contre-la-montre cycliste, un coureur parcourt une distance $d = 200$ m entre deux points de chronométrage, en une durée $\\Delta t = 25$ s (mesurée au chronomètre). Une caméra filmant la fin de son effort permet de pointer trois positions successives, séparées par une durée constante $\\tau = 1$ s : les distances mesurées entre ces positions sont $9$ m, puis $7$ m, puis $5$ m — le coureur commence à fatiguer.`,
      tasks: [
        `Calculer la vitesse moyenne $v_{moy}$ du coureur sur les $200$ m (en m/s), puis la convertir en km/h.`,
        `À partir des trois distances successives relevées en fin d'effort ($9$ m, $7$ m, $5$ m sur des durées $\\tau$ égales), indiquer si le mouvement du coureur est, à ce moment-là, uniforme, accéléré ou décéléré. Justifier.`,
        `Calculer la norme du vecteur vitesse correspondant à l'intervalle central (distance de $7$ m), et comparer cette valeur instantanée à la vitesse moyenne calculée en 1.`
      ],
      solutions: [
        `$v_{moy} = \\dfrac{d}{\\Delta t} = \\dfrac{200}{25} = 8$ m/s. En multipliant par $3{,}6$ : $v_{moy} = 8 \\times 3{,}6 = 28{,}8$ km/h.`,
        `Les distances parcourues pendant des durées $\\tau$ égales diminuent régulièrement ($9$ m, puis $7$ m, puis $5$ m) : le coureur parcourt de moins en moins de distance dans le même temps. Le mouvement est <strong>décéléré</strong> : le coureur ralentit en fin d'effort.`,
        `Norme de la vitesse sur l'intervalle central : $v = \\dfrac{7}{1} = 7$ m/s. Cette vitesse instantanée, mesurée en fin de parcours, est une grandeur différente de la vitesse moyenne : ici elle lui est inférieure, cohérente avec un coureur qui ralentit par rapport à son rythme moyen sur l'ensemble des $200$ m.`
      ],
      finalAnswer: `$v_{moy} = 8$ m/s ($28{,}8$ km/h) sur l'ensemble du parcours ; mouvement décéléré en fin d'effort, avec une vitesse instantanée $v = 7$ m/s sur l'intervalle central étudié. La vitesse moyenne et la vitesse instantanée sont deux grandeurs différentes : l'une résume tout le trajet, l'autre décrit un instant précis.`
    },

    evaluation: {
      title: `Évaluation — Description d'un mouvement`,
      duration: '25 min',
      questions: [
        {
          statement: `Un motard parcourt une distance $d = 150$ m en une durée $\\Delta t = 6$ s. Calculer sa vitesse moyenne (en m/s).`,
          type: 'numeric',
          answer: 25,
          tolerance: 1,
          unit: 'm/s',
          points: 2,
          correction: `$v_{moy} = \\dfrac{d}{\\Delta t} = \\dfrac{150}{6} = 25$ m/s.`
        },
        {
          statement: `Un référentiel est :`,
          type: 'multiple-choice',
          options: [
            `Un instrument de mesure de la vitesse`,
            `Un solide de référence, associé à un repère et une horloge, par rapport auquel on décrit un mouvement`,
            `La trajectoire suivie par un mobile`,
            `Une unité de mesure de la distance`
          ],
          answer: 1,
          points: 2,
          correction: `Un référentiel est le solide de référence (associé à un repère d'espace et à une horloge) par rapport auquel on étudie un mouvement. Sans référentiel précisé, parler de mouvement n'a pas de sens.`
        },
        {
          statement: `Une voiture roule à $v = 90$ km/h. Convertir cette vitesse en m/s (arrondie au dixième).`,
          type: 'numeric',
          answer: 25,
          tolerance: 0.5,
          unit: 'm/s',
          points: 2,
          correction: `$v = \\dfrac{90}{3{,}6} = 25$ m/s.`
        },
        {
          statement: `Sur une chronophotographie, les positions successives d'un mobile sont régulièrement espacées (la même distance sépare chaque position), pour une durée $\\tau$ constante entre deux prises. Ce mouvement est :`,
          type: 'multiple-choice',
          options: [
            `Accéléré`,
            `Décéléré`,
            `Uniforme`,
            `Nécessairement circulaire`
          ],
          answer: 2,
          points: 2,
          correction: `Des distances égales parcourues en des durées égales signifient que la norme du vecteur vitesse ne change pas : le mouvement est <strong>uniforme</strong>. Il peut être rectiligne ou circulaire, la seule information donnée ici porte sur la norme de la vitesse, pas sur la forme de la trajectoire.`
        },
        {
          statement: `Sur une vidéo, deux positions voisines $M_1$ et $M_3$ encadrant $M_2$ sont séparées d'une distance $M_1M_3 = 12$ m, pour une durée entre chaque prise $\\tau = 0{,}3$ s. Calculer la norme du vecteur vitesse en $M_2$ (en m/s).`,
          type: 'numeric',
          answer: 20,
          tolerance: 1,
          unit: 'm/s',
          points: 2,
          correction: `$v_2 = \\dfrac{M_1M_3}{2\\tau} = \\dfrac{12}{2 \\times 0{,}3} = \\dfrac{12}{0{,}6} = 20$ m/s.`
        }
      ]
    }
  });
