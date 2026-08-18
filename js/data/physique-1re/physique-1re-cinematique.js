/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-cinematique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-cinematique',
    level: 2, subject: 'physique',
    icon: '🚗',
    title: 'Le mouvement et ses descriptions',
    subtitle: 'Référentiel, trajectoire, vecteur position, vecteur vitesse moyenne et instantanée',
    keywords: ['Trajectoire', 'Référentiel', 'Vecteur vitesse', 'Vecteur position', 'Chronophotographie'],
    physics: 'Décrire un mouvement avec des vecteurs permet d\'analyser les données d\'un radar routier, d\'une caméra de sport, d\'un capteur GPS embarqué dans un véhicule, ou d\'une chronophotographie utilisée pour étudier le geste d\'un sportif.',

    cours: {
      intro: 'Avant de décrire le mouvement d\'un objet, il faut préciser <strong>par rapport à quoi</strong> on l\'observe : c\'est le rôle du <strong>référentiel</strong>, un solide de référence associé à une horloge. Un passager assis dans un train est immobile par rapport au train, mais en mouvement par rapport au sol : le mouvement n\'a de sens que relativement à un référentiel donné.<br/><br/>Une fois le référentiel choisi, on peut repérer la position d\'un point mobile $M$ à chaque instant $t$ par le <strong>vecteur position</strong> $\\vec{OM}(t)$, où $O$ est l\'origine du référentiel. L\'ensemble des positions successives de $M$ dessine sa <strong>trajectoire</strong>.<br/><br/>Pour décrire à quelle vitesse et dans quelle direction $M$ se déplace, on utilise le <strong>vecteur vitesse</strong>. Sa direction est toujours <strong>tangente à la trajectoire</strong>, dans le sens du mouvement — une propriété essentielle, qu\'on retrouve en étudiant des enregistrements de type chronophotographie.',
      definitions: [
        { term: 'Référentiel', def: 'Solide de référence (associé à une horloge) par rapport auquel on décrit un mouvement. Le référentiel terrestre est le plus courant ; sans référentiel précisé, parler de « mouvement » n\'a pas de sens.' },
        { term: 'Trajectoire', def: 'Ensemble des positions successives occupées par un point mobile $M$ au cours du temps, dans un référentiel donné. Une même trajectoire peut être une droite (mouvement rectiligne) ou une courbe.' },
        { term: 'Vecteur position $\\vec{OM}$', def: 'Vecteur reliant l\'origine $O$ du référentiel au point mobile $M$ à l\'instant $t$. Il évolue au cours du temps, dessinant la trajectoire.' },
        { term: 'Vecteur vitesse moyenne', def: 'Entre deux instants $t_1$ et $t_2$, le vecteur vitesse moyenne est $\\vec v_{moy} = \\dfrac{\\vec{M_1M_2}}{t_2 - t_1}$, colinéaire au <strong>vecteur déplacement</strong> $\\vec{M_1M_2}$ (la corde reliant les deux positions).' },
        { term: 'Vecteur vitesse instantanée', def: 'Limite du vecteur vitesse moyenne lorsque l\'intervalle de temps devient très petit. Il est toujours <strong>tangent à la trajectoire</strong> au point considéré, dans le sens du mouvement, et sa norme est la valeur de la vitesse à cet instant (en m/s).' }
      ],
      method: {
        title: 'Exploiter un enregistrement de positions (chronophotographie) en 3 étapes',
        steps: [
          '<strong>Repérer la trajectoire</strong> : placer les positions successives $M_1$, $M_2$, $M_3$… du point mobile, enregistrées à intervalles de temps <strong>égaux</strong> $\\tau$.',
          '<strong>Analyser l\'espacement des points</strong> : des distances égales entre points successifs traduisent un mouvement <strong>uniforme</strong> ; des distances croissantes, un mouvement <strong>accéléré</strong> ; des distances décroissantes, un mouvement <strong>retardé</strong> (qui ralentit).',
          '<strong>Construire le vecteur vitesse</strong> en un point $M_i$ à partir des points voisins : $\\vec v_i \\approx \\dfrac{\\vec{M_{i-1}M_{i+1}}}{2\\tau}$. Ce vecteur est colinéaire à la corde $M_{i-1}M_{i+1}$, une approximation d\'autant meilleure que les points sont rapprochés — la vitesse exacte est tangente à la trajectoire.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Description vectorielle d\'un mouvement curviligne',
        title: 'Vecteur position, corde et vecteur vitesse tangent à la trajectoire',
        description: 'Trois positions successives $M_1$, $M_2$, $M_3$, enregistrées à intervalles de temps égaux, avec un espacement <strong>croissant</strong> : le mouvement accélère. Le vecteur vitesse en $M_2$ est tangent à la trajectoire.',
        svg: `
          <svg viewBox="0 0 520 300" role="img" aria-labelledby="cinemat-title cinemat-desc">
            <title id="cinemat-title">Trajectoire curviligne avec trois positions successives et vecteur vitesse tangent</title>
            <desc id="cinemat-desc">Une trajectoire courbe part d'un point M1 en bas a gauche, monte vers un sommet puis redescend legerement vers un point M3 en bas a droite, en passant par un point intermediaire M2. L'ecart entre M1 et M2 est visiblement plus petit que l'ecart entre M2 et M3, bien que les points soient enregistres a intervalles de temps egaux, ce qui traduit un mouvement qui accelere. Une fleche partant d'un point origine O en bas a gauche du schema rejoint le point M2, representant le vecteur position. Une autre fleche part de M2 et pointe vers la droite en montant legerement, tangente a la courbe a cet endroit, representant le vecteur vitesse instantanee. Une ligne en pointilles relie directement M1 a M3, representant la corde utilisee pour approcher la direction de la vitesse.</desc>

            <defs>
              <marker id="arrow-phys1re-cinema" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- origine du referentiel -->
            <line class="frame-line" x1="40" y1="250" x2="70" y2="250"></line>
            <line class="frame-line" x1="40" y1="250" x2="40" y2="220"></line>
            <text class="label-soft" x="34" y="268" text-anchor="middle">O</text>

            <!-- trajectoire -->
            <path class="curve-main" d="M100,220 Q280,40 460,180" fill="none"></path>

            <!-- points successifs -->
            <circle class="plot-point" cx="136" cy="187.2" r="5"></circle>
            <text class="label-soft" x="120" y="205" text-anchor="middle">M₁</text>

            <circle class="plot-point" cx="262" cy="122.8" r="5"></circle>
            <text class="label-soft" x="262" y="106" text-anchor="middle">M₂</text>

            <circle class="plot-point" cx="442" cy="166.8" r="5"></circle>
            <text class="label-soft" x="460" y="184" text-anchor="middle">M₃</text>

            <!-- corde M1M3 (approximation de la direction de la vitesse) -->
            <line class="guide-line" x1="136" y1="187.2" x2="442" y2="166.8"></line>

            <!-- vecteur position OM2 -->
            <line class="curve-main" x1="40" y1="250" x2="262" y2="122.8" marker-end="url(#arrow-phys1re-cinema)"></line>
            <text class="annotation-label" x="196" y="192" text-anchor="middle">OM₂</text>

            <!-- vecteur vitesse tangent en M2 -->
            <line class="curve-main" x1="262" y1="122.8" x2="350.3" y2="105.2" marker-end="url(#arrow-phys1re-cinema)"></line>
            <text class="annotation-label" x="355" y="90" text-anchor="start">v₂</text>
          </svg>
        `,
        notes: [
          'Les distances $M_1M_2$ et $M_2M_3$ sont mesurées entre des points enregistrés à intervalles de temps <strong>égaux</strong> : $M_2M_3$ est nettement plus grande que $M_1M_2$, ce qui signe un mouvement <strong>accéléré</strong>.',
          'Le vecteur vitesse $\\vec{v_2}$ en $M_2$ est <strong>tangent</strong> à la trajectoire à cet endroit, et non parallèle à la corde $M_1M_3$ : cette corde n\'en donne qu\'une <strong>approximation</strong>, d\'autant meilleure que $M_1$ et $M_3$ sont proches de $M_2$.',
          'Le vecteur position $\\vec{OM_2}$ part de l\'origine du référentiel jusqu\'au point mobile : il ne doit pas être confondu avec le vecteur vitesse, qui décrit le déplacement <strong>autour</strong> de $M_2$, pas la position elle-même.'
        ],
        reading: 'Repère d\'abord l\'origine $O$ en bas à gauche, puis suis la trajectoire de $M_1$ à $M_3$ : observe que l\'écart entre points grandit, puis identifie le vecteur vitesse tangent en $M_2$.',
        caption: 'Trois positions successives sur une trajectoire curviligne : l\'espacement croissant traduit une accélération, et le vecteur vitesse instantanée en $M_2$ est tangent à la courbe.'
      },
      example: {
        statement: 'Une chronophotographie d\'une bille en mouvement <strong>rectiligne</strong> montre trois positions successives $M_1$, $M_2$, $M_3$, enregistrées à intervalles de temps égaux $\\tau = 20$ ms. La distance $M_1M_2$ mesure $3{,}2$ cm, et la distance $M_2M_3$ mesure $4{,}0$ cm.<br/><br/>Que peut-on dire de la nature du mouvement ? Calculer une valeur approchée de la vitesse instantanée en $M_2$.',
        steps: [
          'Les distances sont mesurées à intervalles de temps <strong>égaux</strong> ($\\tau = 20$ ms entre chaque point), et $M_2M_3 = 4{,}0$ cm est supérieure à $M_1M_2 = 3{,}2$ cm : le mouvement est donc <strong>accéléré</strong>.',
          'Le mouvement étant rectiligne, les trois points sont alignés : la distance $M_1M_3 = M_1M_2 + M_2M_3 = 3{,}2 + 4{,}0 = 7{,}2$ cm.',
          'Formule de la vitesse approchée en $M_2$ : $v_2 \\approx \\dfrac{M_1M_3}{2\\tau}$.',
          'Conversion des unités : $M_1M_3 = 7{,}2$ cm $= 0{,}072$ m, et $2\\tau = 2 \\times 20$ ms $= 40$ ms $= 0{,}040$ s.',
          'Calcul : $v_2 \\approx \\dfrac{0{,}072}{0{,}040} = 1{,}8$ m/s.'
        ],
        answer: 'Le mouvement est <strong>accéléré</strong> (les distances entre points augmentent), et $v_2 \\approx 1{,}8$ m/s. Le vecteur vitesse en $M_2$ est dirigé dans le sens du mouvement, le long de la trajectoire (ici, une droite, puisque le mouvement est rectiligne).'
      },
      formulas: [
        'Vecteur vitesse moyenne : $\\vec v_{moy} = \\dfrac{\\vec{M_1M_2}}{t_2 - t_1}$',
        'Vecteur vitesse instantanée (approchée) : $\\vec v_i \\approx \\dfrac{\\vec{M_{i-1}M_{i+1}}}{2\\tau}$, tangent à la trajectoire',
        'Norme de la vitesse (mouvement rectiligne) : $v = \\dfrac{d}{\\Delta t}$',
        'Conversion utile : $1$ km/h $= \\dfrac{1}{3{,}6}$ m/s, soit $v_{(m/s)} = \\dfrac{v_{(km/h)}}{3{,}6}$'
      ],
      recap: [
        'Le mouvement n\'a de sens que par rapport à un <strong>référentiel</strong> précis : un même objet peut être immobile dans l\'un et en mouvement dans l\'autre.',
        'La trajectoire est l\'ensemble des positions successives de $M$ ; le vecteur vitesse, lui, décrit comment $M$ se déplace <strong>autour</strong> de chaque position, tangentiellement à la trajectoire.',
        'Sur une chronophotographie à intervalles de temps égaux, la <strong>distance</strong> entre points successifs renseigne directement sur la nature du mouvement : constante (uniforme), croissante (accéléré) ou décroissante (retardé).',
        'La vitesse moyenne entre deux points n\'est qu\'une <strong>approximation</strong> de la vitesse instantanée : plus les points sont rapprochés dans le temps, plus l\'approximation est précise.'
      ],
      piege: 'Une confusion fréquente consiste à croire que le vecteur vitesse est toujours dirigé exactement le long de la corde reliant deux points successifs, y compris sur une trajectoire courbe. Attention, la vitesse instantanée est <strong>tangente</strong> à la trajectoire au point considéré : la corde n\'en donne qu\'une approximation, qui ne devient exacte que dans la limite d\'un intervalle de temps infiniment petit.'
    },

    quiz: [
      {
        q: 'Un passager est assis dans un train qui roule à vitesse constante. Par rapport à quel référentiel peut-on dire qu\'il est immobile ?',
        options: [
          'Uniquement par rapport au sol terrestre',
          'Par rapport au train, mais pas par rapport au sol',
          'Il n\'est jamais immobile, quel que soit le référentiel',
          'Par rapport à tous les référentiels possibles'
        ],
        answer: 1,
        correction: 'Le mouvement est toujours relatif à un référentiel : le passager est immobile <strong>par rapport au train</strong> (référentiel dans lequel il ne change pas de position), mais il est en mouvement <strong>par rapport au sol</strong> (référentiel terrestre).'
      },
      {
        q: 'Sur une chronophotographie enregistrée à intervalles de temps égaux, les distances entre points successifs diminuent progressivement. Que peut-on en conclure ?',
        options: [
          'Le mouvement est uniforme',
          'Le mouvement est accéléré',
          'Le mouvement est retardé (l\'objet ralentit)',
          'On ne peut rien conclure sans connaître la trajectoire'
        ],
        answer: 2,
        correction: 'Si les points sont enregistrés à intervalles de temps <strong>égaux</strong> et que les distances entre points successifs <strong>diminuent</strong>, l\'objet parcourt de moins en moins de chemin par unité de temps : il ralentit, le mouvement est donc <strong>retardé</strong>.'
      },
      {
        q: 'En quel point de sa trajectoire le vecteur vitesse instantanée d\'un point mobile est-il orienté ?',
        options: [
          'Toujours vers l\'origine $O$ du référentiel',
          'Toujours horizontalement, quelle que soit la trajectoire',
          'Tangentiellement à la trajectoire, dans le sens du mouvement',
          'Perpendiculairement à la trajectoire'
        ],
        answer: 2,
        correction: 'Le vecteur vitesse instantanée est, par définition, <strong>tangent</strong> à la trajectoire au point considéré, orienté dans le sens du mouvement. C\'est une propriété générale, valable pour toute trajectoire, rectiligne ou curviligne.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['vitesse-approchee', 'conversion']);

        if (typeExo === 'vitesse-approchee') {
          var tau = pick([10, 20, 25, 40, 50]);
          var d1 = randFloat(1.5, 5, 1);
          var d2 = parseFloat((d1 + randFloat(0.5, 2.5, 1)).toFixed(1));
          var d13 = parseFloat((d1 + d2).toFixed(1));
          var v2 = parseFloat(((d13 / 100) / (2 * tau / 1000)).toFixed(2));
          var mobile = pick([
            'une bille lâchée sur un rail incliné',
            'un chariot de laboratoire tiré par un fil',
            'une goutte d\'encre projetée sur un support tournant',
            'un mobile autoporteur sur banc horizontal'
          ]);
          return {
            statement: 'Une chronophotographie de ' + mobile + ', en mouvement rectiligne, montre trois positions successives $M_1$, $M_2$, $M_3$, enregistrées à intervalles de temps égaux $\\tau = ' + tau + '$ ms. La distance $M_1M_2$ mesure $' + fr(d1, 1) + '$ cm, et la distance $M_2M_3$ mesure $' + fr(d2, 1) + '$ cm.<br/><br/>Calcule la vitesse approchée $v_2$ en $M_2$ (en m/s, arrondie au centième).',
            answer: v2,
            tolerance: Math.max(0.02, v2 * 0.05),
            unit: 'm/s',
            hint: 'Utilise $v_2 \\approx \\dfrac{M_1M_3}{2\\tau}$, avec $M_1M_3 = M_1M_2 + M_2M_3$ (mouvement rectiligne). N\'oublie pas de convertir en mètres et en secondes.',
            solution: [
              'Mouvement rectiligne : $M_1M_3 = M_1M_2 + M_2M_3 = ' + fr(d1, 1) + ' + ' + fr(d2, 1) + ' = ' + fr(d13, 1) + '$ cm $= ' + fr(parseFloat((d13 / 100).toFixed(4)), 4) + '$ m.',
              'Durée $2\\tau = 2 \\times ' + tau + ' = ' + (2 * tau) + '$ ms $= ' + fr(parseFloat((2 * tau / 1000).toFixed(3)), 3) + '$ s.',
              'Vitesse approchée : $v_2 \\approx \\dfrac{M_1M_3}{2\\tau} \\approx ' + fr(v2, 2) + '$ m/s.'
            ]
          };
        } else {
          var vkmh = rand(20, 130);
          var vms = parseFloat((vkmh / 3.6).toFixed(2));
          var vehicule = pick([
            'une voiture sur une voie rapide',
            'un cycliste sur une piste cyclable',
            'un TER entre deux gares',
            'un scooter en ville'
          ]);
          return {
            statement: 'Un radar routier mesure la vitesse de ' + vehicule + ' : $v = ' + vkmh + '$ km/h.<br/><br/>Convertis cette vitesse en m/s (arrondie au centième).',
            answer: vms,
            tolerance: 0.05,
            unit: 'm/s',
            hint: 'Pour convertir des km/h en m/s, divise par $3{,}6$.',
            solution: [
              'Conversion : $v_{(m/s)} = \\dfrac{v_{(km/h)}}{3{,}6} = \\dfrac{' + vkmh + '}{3{,}6}$.',
              'Résultat : $v \\approx ' + fr(vms, 2) + '$ m/s.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une caméra filme une balle en mouvement rectiligne sur une table horizontale, à raison d\'une image toutes les $\\tau = 25$ ms. Sur les images successives, on relève les positions $M_1$, $M_2$, $M_3$, $M_4$, séparées par les distances suivantes : $M_1M_2 = 2{,}0$ cm, $M_2M_3 = 2{,}0$ cm, $M_3M_4 = 2{,}0$ cm.',
      tasks: [
        'Que peut-on dire de la nature de ce mouvement, à partir de l\'espacement des points ?',
        'Calculer la vitesse moyenne de la balle entre $M_1$ et $M_4$ (en m/s).',
        'Calculer la vitesse approchée en $M_2$, puis comparer avec la vitesse moyenne calculée précédemment. Commenter.'
      ],
      solutions: [
        'Les distances entre points successifs enregistrés à intervalles de temps égaux sont toutes identiques ($2{,}0$ cm) : le mouvement est donc <strong>rectiligne uniforme</strong> (vitesse constante).',
        'Distance totale $M_1M_4 = 3 \\times 2{,}0 = 6{,}0$ cm $= 0{,}060$ m. Durée totale $= 3\\tau = 3\\times25 = 75$ ms $= 0{,}075$ s. $v_{moy} = \\dfrac{0{,}060}{0{,}075} = 0{,}8$ m/s.',
        'Vitesse approchée en $M_2$ : $v_2 \\approx \\dfrac{M_1M_3}{2\\tau} = \\dfrac{0{,}040}{0{,}050} = 0{,}8$ m/s. On retrouve exactement la même valeur que la vitesse moyenne sur tout le trajet : c\'est cohérent, car dans un mouvement <strong>uniforme</strong>, la vitesse instantanée est constante et égale à la vitesse moyenne, quel que soit l\'intervalle considéré.'
      ],
      finalAnswer: 'Mouvement rectiligne uniforme, $v \\approx 0{,}8$ m/s (valeur identique par les deux méthodes). Cette égalité entre vitesse moyenne et vitesse instantanée est une <strong>signature</strong> du mouvement uniforme : dès que les distances entre points varient, les deux valeurs divergent.'
    },

    evaluation: {
      title: 'Évaluation — Le mouvement et ses descriptions',
      duration: '30 min',
      questions: [
        {
          statement: 'Le mouvement d\'un objet peut être décrit sans préciser de référentiel.',
          type: 'multiple-choice',
          options: [
            'Vrai, le mouvement est une propriété absolue de l\'objet',
            'Faux, le mouvement n\'a de sens que par rapport à un référentiel donné',
            'Vrai, seulement si l\'objet se déplace en ligne droite',
            'Faux, mais uniquement pour les objets très rapides'
          ],
          answer: 1,
          points: 2,
          correction: 'Le mouvement est toujours relatif : un objet peut être immobile dans un référentiel et en mouvement dans un autre. Il faut donc toujours préciser le référentiel choisi.'
        },
        {
          statement: 'Sur une chronophotographie à intervalles de temps égaux $\\tau = 30$ ms, on mesure $M_1M_2 = 4{,}5$ cm et $M_2M_3 = 6{,}3$ cm, sur un mouvement rectiligne. Calculer la vitesse approchée $v_2$ en $M_2$ (en m/s, arrondie au centième).',
          type: 'numeric',
          answer: 1.8,
          tolerance: 0.1,
          unit: 'm/s',
          points: 3,
          correction: '$M_1M_3 = 4{,}5+6{,}3=10{,}8$ cm $=0{,}108$ m. $2\\tau = 60$ ms $=0{,}060$ s. $v_2 \\approx \\dfrac{0{,}108}{0{,}060} = 1{,}8$ m/s.'
        },
        {
          statement: 'Le vecteur vitesse instantanée d\'un point mobile est toujours :',
          type: 'multiple-choice',
          options: [
            'Perpendiculaire à la trajectoire',
            'Tangent à la trajectoire, dans le sens du mouvement',
            'Dirigé vers l\'origine du référentiel',
            'De norme constante'
          ],
          answer: 1,
          points: 2,
          correction: 'Le vecteur vitesse instantanée est tangent à la trajectoire, orienté dans le sens du mouvement — une propriété valable quelle que soit la forme de la trajectoire.'
        },
        {
          statement: 'Convertir une vitesse de $72$ km/h en m/s.',
          type: 'numeric',
          answer: 20,
          tolerance: 0.5,
          unit: 'm/s',
          points: 2,
          correction: '$v = \\dfrac{72}{3{,}6} = 20$ m/s.'
        },
        {
          statement: 'Sur une chronophotographie à intervalles de temps égaux, des distances entre points successifs qui restent constantes traduisent un mouvement :',
          type: 'multiple-choice',
          options: [
            'Accéléré',
            'Retardé',
            'Rectiligne uniforme',
            'Circulaire uniquement'
          ],
          answer: 2,
          points: 1,
          correction: 'Des distances égales entre points enregistrés à intervalles de temps égaux traduisent une vitesse constante, caractéristique d\'un mouvement <strong>rectiligne uniforme</strong> (si de plus les points sont alignés).'
        }
      ]
    }
  });
