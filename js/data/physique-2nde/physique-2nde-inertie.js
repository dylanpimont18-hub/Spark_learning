/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-inertie.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-inertie',
    level: 2, subject: 'physique',
    icon: '⚖️',
    title: `Principe d'inertie`,
    subtitle: `Référentiel galiléen, mouvement rectiligne uniforme, système pseudo-isolé`,
    keywords: [`Principe d'inertie`, `Référentiel galiléen`, 'MRU', `Système pseudo-isolé`, 'Newton'],
    physics: `Le principe d'inertie explique pourquoi une pierre de curling continue tout droit à vitesse quasi constante sur la glace, pourquoi les passagers d'une voiture sont projetés vers l'avant lors d'un freinage brutal, ou pourquoi la ceinture de sécurité est indispensable : sans force extérieure pour l'en empêcher, un corps garde son état de mouvement.`,

    cours: {
      intro: `Au XVII<sup>e</sup> siècle, Isaac Newton énonce ce qui deviendra sa <strong>première loi</strong>, aussi appelée <strong>principe d'inertie</strong> : dans un <strong>référentiel galiléen</strong> (un référentiel où les lois de Newton s'appliquent, comme le référentiel terrestre pour la plupart des mouvements du quotidien), un système dont les forces se compensent conserve son état de mouvement.<br/><br/>Un système est dit <strong>pseudo-isolé</strong> lorsque les forces qui s'exercent sur lui se compensent (leur somme vectorielle est nulle), même si elles ne sont pas nulles individuellement. C'est le cas, par exemple, d'un palet glissant sans frottement sur une table à coussin d'air : son poids et la réaction du support se compensent exactement.<br/><br/>D'après le principe d'inertie, un système pseudo-isolé (ou réellement isolé, c'est-à-dire ne subissant aucune force) est soit <strong>au repos</strong>, soit animé d'un <strong>mouvement rectiligne uniforme</strong> (MRU) : une trajectoire rectiligne, parcourue à vitesse de norme constante. La réciproque est également vraie : si un système est au repos ou en MRU dans un référentiel galiléen, alors les forces qui s'exercent sur lui se compensent nécessairement.`,
      definitions: [
        { term: `Référentiel galiléen`, def: `Référentiel dans lequel les lois de Newton, dont le principe d'inertie, s'appliquent. Le référentiel terrestre est considéré comme galiléen pour la plupart des mouvements étudiés au lycée.` },
        { term: `Principe d'inertie (1ère loi de Newton)`, def: `Dans un référentiel galiléen, si les forces qui s'exercent sur un système se compensent, alors ce système est soit au repos, soit animé d'un mouvement rectiligne uniforme. Réciproquement, un système au repos ou en MRU dans un référentiel galiléen est nécessairement soumis à des forces qui se compensent.` },
        { term: `Système isolé / pseudo-isolé`, def: `Un système <strong>isolé</strong> ne subit aucune force. Un système <strong>pseudo-isolé</strong> subit plusieurs forces, mais celles-ci se compensent exactement (leur somme vectorielle est nulle) : tout se passe alors comme s'il n'était soumis à aucune force.` },
        { term: `Mouvement rectiligne uniforme (MRU)`, def: `Mouvement dont la trajectoire est une droite et dont la norme du vecteur vitesse reste constante au cours du temps. C'est le mouvement prévu par le principe d'inertie pour un système pseudo-isolé qui n'est pas au repos.` }
      ],
      method: {
        title: `Appliquer le principe d'inertie à une situation, en 3 étapes`,
        steps: [
          `<strong>Faire le bilan des forces</strong> qui s'exercent sur le système étudié, en précisant leur direction, leur sens et, si possible, leur valeur.`,
          `<strong>Comparer les forces entre elles</strong> : se compensent-elles (même direction, sens opposés, valeurs égales pour deux forces ; ou somme vectorielle nulle pour davantage de forces) ou non ?`,
          `<strong>Conclure sur le mouvement</strong> grâce au principe d'inertie : si les forces se compensent, le système est au repos ou en MRU ; si elles ne se compensent pas, son mouvement est nécessairement modifié (accéléré, décéléré, ou trajectoire déviée).`
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: `Principe d'inertie en action`,
        title: `Mouvement rectiligne uniforme d'un système pseudo-isolé`,
        description: `Un palet glisse sans frottement sur une table à coussin d'air : les positions relevées à intervalles de temps égaux sont régulièrement espacées, le vecteur vitesse reste constant, et les forces $\\vec{P}$ et $\\vec{N}$ se compensent exactement.`,
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="inertie-2nde-title inertie-2nde-desc">
            <title id="inertie-2nde-title">Mouvement rectiligne uniforme d'un palet pseudo-isole</title>
            <desc id="inertie-2nde-desc">Cinq positions M0 a M4 sont regulierement espacees le long d'une trajectoire rectiligne horizontale, relevees a intervalles de temps egaux. Au-dessus des positions M1 et M3, deux vecteurs vitesse identiques en direction, sens et longueur sont representes, montrant que la vitesse reste constante. Au niveau de la derniere position M4, representee par un palet circulaire, deux vecteurs de meme longueur et de sens opposes sont traces verticalement : le poids vers le bas et la reaction normale du support vers le haut, illustrant leur compensation exacte.</desc>

            <defs>
              <marker id="arrow-phys2nde-inertie" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- trajectoire rectiligne -->
            <line class="guide-line" x1="60" y1="150" x2="500" y2="150"></line>
            <text class="label-soft" x="65" y="135" text-anchor="start">Trajectoire rectiligne</text>

            <!-- position M0 -->
            <circle class="plot-point" cx="80" cy="150" r="5"></circle>
            <text class="label-soft" x="80" y="172" text-anchor="middle">M0</text>

            <!-- position M1 avec vecteur vitesse v1 -->
            <circle class="plot-point" cx="180" cy="150" r="5"></circle>
            <line class="guide-line" x1="180" y1="150" x2="180" y2="120"></line>
            <line class="curve-main" x1="180" y1="120" x2="250" y2="120" marker-end="url(#arrow-phys2nde-inertie)"></line>
            <text class="annotation-label" x="215" y="108" text-anchor="middle">v₁</text>
            <text class="label-soft" x="180" y="172" text-anchor="middle">M1</text>

            <!-- position M2 -->
            <circle class="plot-point" cx="280" cy="150" r="5"></circle>
            <text class="label-soft" x="280" y="172" text-anchor="middle">M2</text>

            <!-- position M3 avec vecteur vitesse v3 (identique a v1) -->
            <circle class="plot-point" cx="380" cy="150" r="5"></circle>
            <line class="guide-line" x1="380" y1="150" x2="380" y2="120"></line>
            <line class="curve-main" x1="380" y1="120" x2="450" y2="120" marker-end="url(#arrow-phys2nde-inertie)"></line>
            <text class="annotation-label" x="415" y="108" text-anchor="middle">v₃</text>
            <text class="label-soft" x="380" y="172" text-anchor="middle">M3</text>

            <!-- position M4 : le palet, avec P et N qui se compensent -->
            <circle class="plot-point-alt" cx="480" cy="150" r="18"></circle>
            <line class="curve-main" x1="480" y1="150" x2="480" y2="185" marker-end="url(#arrow-phys2nde-inertie)"></line>
            <text class="annotation-label" x="494" y="182" text-anchor="start">P</text>
            <line class="curve-main" x1="480" y1="150" x2="480" y2="115" marker-end="url(#arrow-phys2nde-inertie)"></line>
            <text class="annotation-label" x="494" y="120" text-anchor="start">N</text>
            <text class="label-soft" x="480" y="225" text-anchor="middle">M4</text>
          </svg>
        `,
        notes: [
          `Les positions $M_0$ à $M_4$, enregistrées à intervalles de temps $\\tau$ égaux, sont <strong>régulièrement espacées</strong> : les distances parcourues sont identiques à chaque intervalle. C'est la signature d'un <strong>mouvement rectiligne uniforme</strong> (MRU).`,
          `Les vecteurs vitesse $\\vec{v_1}$ (en $M_1$) et $\\vec{v_3}$ (en $M_3$) ont <strong>la même direction, le même sens et la même norme</strong> : le vecteur vitesse est constant au cours du temps.`,
          `Au niveau du palet (en $M_4$), les deux seules forces qui s'exercent — le poids $\\vec{P}$ et la réaction normale du support $\\vec{N}$ — sont exactement opposées : elles <strong>se compensent</strong>. Le système est <strong>pseudo-isolé</strong>, ce qui explique, d'après le principe d'inertie, ce mouvement rectiligne uniforme.`
        ],
        reading: `Observe d'abord l'espacement régulier des positions $M_0$ à $M_4$, puis compare les vecteurs vitesse en $M_1$ et $M_3$ (identiques), et enfin regarde comment $\\vec{P}$ et $\\vec{N}$ se compensent exactement au niveau du palet.`,
        caption: `Palet glissant sans frottement sur une table à coussin d'air : trajectoire rectiligne, vecteur vitesse constant et forces qui se compensent — illustration du principe d'inertie.`
      },
      example: {
        statement: `Un palet de hockey glisse sur une patinoire, assimilée à une surface horizontale sans frottement. Une fois lancé, il n'est plus poussé par aucune crosse.<br/><br/>En n'oubliant aucune des forces qui s'exercent sur le palet, décrire son mouvement après le lancer, en justifiant à l'aide du principe d'inertie.`,
        steps: [
          `Bilan des forces sur le palet : le poids $\\vec{P}$ (vertical, vers le bas) et la réaction normale de la glace $\\vec{N}$ (verticale, vers le haut). La glace étant supposée sans frottement, aucune autre force horizontale n'intervient.`,
          `Ces deux forces sont verticales, de sens opposés et de même valeur (le palet ne s'enfonce pas dans la glace et ne s'envole pas) : elles se compensent exactement. Le palet est donc un système <strong>pseudo-isolé</strong>.`,
          `D'après le principe d'inertie, un système pseudo-isolé est au repos ou en mouvement rectiligne uniforme. Le palet ayant été lancé (il n'est pas au repos), son mouvement est donc un <strong>mouvement rectiligne uniforme</strong> : il continue en ligne droite à vitesse constante, tant qu'aucune force horizontale supplémentaire (un autre joueur, la bande de la patinoire) n'intervient.`
        ],
        answer: `Le palet, une fois lancé, poursuit un mouvement rectiligne uniforme : sa trajectoire est une droite et sa vitesse garde une norme constante, car les forces qui s'exercent sur lui (poids et réaction du support) se compensent exactement.`
      },
      formulas: [
        `Principe d'inertie : si $\\sum \\vec{F} = \\vec{0}$, alors le système est au repos ou en MRU (et réciproquement)`,
        `Mouvement rectiligne uniforme : trajectoire rectiligne et norme du vecteur vitesse constante, $d = v \\times t$`,
        `Système pseudo-isolé : plusieurs forces s'exercent, mais leur somme vectorielle est nulle`
      ],
      recap: [
        `Le principe d'inertie ne s'applique que dans un <strong>référentiel galiléen</strong> (le référentiel terrestre, pour la plupart des situations étudiées au lycée).`,
        `Un système <strong>pseudo-isolé</strong> (forces qui se compensent) est soit au repos, soit en <strong>mouvement rectiligne uniforme</strong> — jamais accéléré, décéléré, ni en trajectoire courbe.`,
        `La réciproque est tout aussi importante : observer un mouvement rectiligne uniforme permet de conclure que les forces se compensent, sans même les avoir mesurées.`,
        `Dès qu'une force supplémentaire, non compensée, apparaît (freinage, virage, poussée), le principe d'inertie ne s'applique plus tel quel : le mouvement est alors modifié.`
      ],
      piege: `Une erreur fréquente consiste à croire qu'un système en mouvement a besoin d'une force pour continuer à avancer, comme si le mouvement s'épuisait sans entretien. Attention, c'est l'inverse : d'après le principe d'inertie, c'est l'absence de force résultante qui permet à un système de conserver indéfiniment un mouvement rectiligne uniforme, et c'est au contraire une force non compensée qui est nécessaire pour modifier ce mouvement.`
    },

    quiz: [
      {
        q: `Le principe d'inertie s'applique :`,
        options: [
          `Dans n'importe quel référentiel, sans condition`,
          `Uniquement dans un référentiel galiléen`,
          `Uniquement pour des systèmes immobiles`,
          `Uniquement en l'absence totale de gravité`
        ],
        answer: 1,
        correction: `Le principe d'inertie (comme les autres lois de Newton) ne s'applique que dans un <strong>référentiel galiléen</strong>, c'est-à-dire un référentiel où ces lois sont valables. Le référentiel terrestre en est un bon exemple pour la plupart des mouvements du quotidien.`
      },
      {
        q: `Un système pseudo-isolé est un système :`,
        options: [
          `Qui ne subit absolument aucune force`,
          `Qui subit des forces dont la somme vectorielle est nulle`,
          `Qui est toujours immobile`,
          `Qui ne subit qu'une seule force`
        ],
        answer: 1,
        correction: `Un système pseudo-isolé peut subir <strong>plusieurs</strong> forces (poids, réaction, tension...), à condition que leur somme vectorielle soit nulle, c'est-à-dire qu'elles se compensent exactement. C'est différent d'un système réellement isolé, qui ne subit aucune force du tout.`
      },
      {
        q: `D'après le principe d'inertie, un système pseudo-isolé qui n'est pas au repos est nécessairement animé :`,
        options: [
          `D'un mouvement accéléré`,
          `D'un mouvement circulaire`,
          `D'un mouvement rectiligne uniforme`,
          `D'un mouvement décéléré`
        ],
        answer: 2,
        correction: `Le principe d'inertie prévoit exactement deux possibilités pour un système pseudo-isolé : le <strong>repos</strong>, ou le <strong>mouvement rectiligne uniforme</strong> (trajectoire rectiligne, vitesse de norme constante). Un mouvement accéléré, décéléré ou circulaire impliquerait au contraire des forces qui ne se compensent pas.`
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['distance_mru', 'duree_mru']);

        if (typeExo === 'distance_mru') {
          var v = rand(3, 25);
          var t = rand(5, 120);
          var d = v * t;
          var contexte = pick([
            `un palet sur une table à coussin d'air, loin de tout obstacle`,
            `une pierre de curling glissant sur la glace`,
            `une sonde spatiale isolée, loin de toute étoile ou planète`,
            `un chariot sur un rail à coussin d'air en laboratoire`,
            `une bille roulant sur une piste horizontale sans frottement`
          ]);
          return {
            statement: 'Dans le référentiel du laboratoire, ' + contexte + ' est assimilé(e) à un système pseudo-isolé, animé d\'un mouvement rectiligne uniforme à la vitesse $v = ' + v + '$ m/s.<br/><br/>Calcule la distance $d$ parcourue pendant une durée $t = ' + t + '$ s.',
            answer: d,
            tolerance: Math.max(1, parseFloat((d * 0.02).toFixed(1))),
            unit: 'm',
            hint: `En mouvement rectiligne uniforme, la vitesse est constante : la distance parcourue est simplement $d = v \\times t$.`,
            solution: [
              'En MRU, la vitesse étant constante : $d = v \\times t$.',
              'Application numérique : $d = ' + v + ' \\times ' + t + '$.',
              'Résultat : $d = ' + d + '$ m.'
            ]
          };
        } else {
          var v2 = rand(3, 25);
          var d2 = rand(50, 900);
          var t2 = parseFloat((d2 / v2).toFixed(2));
          var contexte2 = pick([
            `un palet lancé sur une patinoire sans frottement`,
            `un wagonnet sur un rail rectiligne horizontal`,
            `une capsule spatiale isolée, loin de toute planète`,
            `un mobile autoporteur sur banc à coussin d'air`
          ]);
          return {
            statement: 'Dans le référentiel du laboratoire, ' + contexte2 + ' est assimilé(e) à un système pseudo-isolé, animé d\'un mouvement rectiligne uniforme à la vitesse $v = ' + v2 + '$ m/s.<br/><br/>Calcule la durée $t$ nécessaire pour parcourir une distance $d = ' + d2 + '$ m (en s, arrondie au centième).',
            answer: t2,
            tolerance: Math.max(0.2, parseFloat((t2 * 0.03).toFixed(2))),
            unit: 's',
            hint: `En MRU, $d = v \\times t$, donc $t = \\dfrac{d}{v}$.`,
            solution: [
              'En MRU : $d = v \\times t$, donc $t = \\dfrac{d}{v}$.',
              'Application numérique : $t = \\dfrac{' + d2 + '}{' + v2 + '}$.',
              'Résultat : $t \\approx ' + fr(t2, 2) + '$ s.'
            ]
          };
        }
      }
    },

    probleme: {
      context: `Une rondelle de hockey de table est lancée sur une table à coussin d'air, où les frottements sont négligeables.`,
      tasks: [
        `Faire le bilan des forces qui s'exercent sur la rondelle une fois lancée, et justifier qu'elle constitue un système pseudo-isolé.`,
        `Sa vitesse, mesurée juste après le lancer, est $v = 2{,}5$ m/s et reste constante. Calculer la distance parcourue pendant une durée $t = 4$ s.`,
        `Après un moment, la rondelle heurte le bord de la table et rebondit en changeant de direction, sans changer la norme de sa vitesse. Le principe d'inertie permet-il de prévoir un mouvement rectiligne uniforme <strong>pendant</strong> le choc contre le bord ? Justifier qualitativement.`
      ],
      solutions: [
        `La rondelle subit son poids $\\vec{P}$ (vertical, vers le bas) et la réaction normale de la table $\\vec{N}$ (verticale, vers le haut). Les frottements étant négligeables, aucune autre force n'intervient sur le plan horizontal : $\\vec{P}$ et $\\vec{N}$ se compensent exactement (la rondelle reste sur la table), donc la rondelle est un système <strong>pseudo-isolé</strong>.`,
        `En MRU, $d = v \\times t = 2{,}5 \\times 4 = 10$ m.`,
        `Non : pendant le choc contre le bord, celui-ci exerce une force supplémentaire, non compensée, sur la rondelle (c'est justement cette force qui dévie sa trajectoire). Le système n'est donc plus pseudo-isolé pendant ce bref instant, et le principe d'inertie ne prévoit pas de mouvement rectiligne uniforme <strong>pendant</strong> le choc — il redevient valable juste après, une fois la nouvelle direction stabilisée et les forces de nouveau compensées.`
      ],
      finalAnswer: `La rondelle est pseudo-isolée (poids et réaction se compensent) et parcourt $d = 10$ m en $4$ s à vitesse constante. Pendant le choc contre le bord, une force supplémentaire non compensée dévie sa trajectoire : le principe d'inertie ne s'applique alors plus, avant de redevenir valable une fois le choc terminé.`
    },

    evaluation: {
      title: `Évaluation — Principe d'inertie`,
      duration: '25 min',
      questions: [
        {
          statement: `Dans la plupart des situations étudiées au lycée, le référentiel terrestre est considéré comme :`,
          type: 'multiple-choice',
          options: [
            `Non galiléen`,
            `Galiléen`,
            `Sans importance pour le principe d'inertie`,
            `Toujours en mouvement accéléré`
          ],
          answer: 1,
          points: 2,
          correction: `Le référentiel terrestre est considéré comme <strong>galiléen</strong> pour la plupart des mouvements étudiés au lycée : c'est dans un tel référentiel que le principe d'inertie s'applique.`
        },
        {
          statement: `Un système pseudo-isolé se déplace en mouvement rectiligne uniforme à $v = 6$ m/s pendant $t = 15$ s. Calculer la distance parcourue (en m).`,
          type: 'numeric',
          answer: 90,
          tolerance: 2,
          unit: 'm',
          points: 2,
          correction: `$d = v \\times t = 6 \\times 15 = 90$ m.`
        },
        {
          statement: `Lorsqu'un système est animé d'un mouvement rectiligne uniforme dans un référentiel galiléen, on peut affirmer que :`,
          type: 'multiple-choice',
          options: [
            `Il ne subit aucune force`,
            `Les forces qui s'exercent sur lui se compensent`,
            `Il subit une force résultante non nulle, dans le sens du mouvement`,
            `Son référentiel n'est pas galiléen`
          ],
          answer: 1,
          points: 2,
          correction: `C'est la réciproque du principe d'inertie : observer un mouvement rectiligne uniforme dans un référentiel galiléen permet de conclure que les forces qui s'exercent sur le système <strong>se compensent</strong>, sans même avoir besoin de les mesurer une à une.`
        },
        {
          statement: `Un système pseudo-isolé parcourt une distance $d = 240$ m en mouvement rectiligne uniforme à la vitesse $v = 8$ m/s. Calculer la durée du parcours (en s).`,
          type: 'numeric',
          answer: 30,
          tolerance: 1,
          unit: 's',
          points: 2,
          correction: `$t = \\dfrac{d}{v} = \\dfrac{240}{8} = 30$ s.`
        },
        {
          statement: `Une voiture roule en ligne droite à vitesse constante sur une route horizontale. Que peut-on dire des forces qui s'exercent sur elle (poids, réaction du sol, force motrice, frottements) ?`,
          type: 'multiple-choice',
          options: [
            `Elles sont toutes nulles`,
            `Leur somme vectorielle est nulle : elles se compensent`,
            `La force motrice est nécessairement plus grande que les frottements`,
            `Il est impossible de conclure sans plus de données`
          ],
          answer: 1,
          points: 2,
          correction: `La voiture est en mouvement rectiligne uniforme : d'après la réciproque du principe d'inertie, toutes les forces qui s'exercent sur elle se compensent — le poids avec la réaction du sol, et la force motrice avec les frottements (de l'air et de la route).`
        }
      ]
    }
  });
