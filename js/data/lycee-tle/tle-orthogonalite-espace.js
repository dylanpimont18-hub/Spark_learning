/* =========================================================
   Spark Learning – data/lycee-tle/tle-orthogonalite-espace.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-orthogonalite-espace',
    level: 2, subject: 'maths',
    icon: '⊥',
    title: 'Orthogonalité dans l\'espace',
    subtitle: 'Perpendiculaire, distance, produit scalaire 3D',
    keywords: ['Orthogonalité', 'Produit scalaire', 'Distance', 'Perpendiculaire', 'Projection'],
    physics: 'Calcul de distances en mécanique du solide, positionnement GPS, forces perpendiculaires en architecture',
    cours: {
      intro: 'L\'<strong>orthogonalité</strong> en 3D se teste toujours par le produit scalaire : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.<br/><br/>La formule de <strong>distance d\'un point à un plan</strong> $M(x_0;y_0;z_0)$ au plan $ax+by+cz+d=0$ est $d = |ax_0+by_0+cz_0+d|/\\sqrt{a^2+b^2+c^2}$.<br/><br/>Le numérateur est en <strong>valeur absolue</strong> car une distance est toujours positive — même si $M$ est du "mauvais côté" du plan (le signe du numérateur indique de quel côté se trouve $M$, mais la distance reste positive).<br/><br/>Intuition : la formule projette le vecteur $\\overrightarrow{HM}$ (où $H$ est le pied de la perpendiculaire) sur le vecteur normal unitaire.',
      definitions: [
        { term: 'Orthogonalité de vecteurs', def: 'Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont <strong>orthogonaux</strong> si et seulement si $\\vec{u} \\cdot \\vec{v} = 0$. En 3D : $x_u x_v + y_u y_v + z_u z_v = 0$.' },
        { term: 'Projeté orthogonal', def: 'Le projeté orthogonal $H$ de $M$ sur un plan $\\mathcal{P}$ est le point de $\\mathcal{P}$ le plus proche de $M$. Le vecteur $\\overrightarrow{HM}$ est colinéaire au <strong>vecteur normal</strong> du plan.' },
        { term: 'Distance point-plan', def: '$d(M;\\mathcal{P}) = \\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$ pour le plan $ax+by+cz+d=0$ et le point $M(x_0;y_0;z_0)$. Toujours <strong>positive</strong> grâce à la valeur absolue.' },
        { term: 'Plans perpendiculaires', def: 'Deux plans sont <strong>perpendiculaires</strong> si et seulement si leurs vecteurs normaux sont orthogonaux : $\\vec{n_1} \\cdot \\vec{n_2} = 0$.' }
      ],
      method: {
        title: 'Distance d\'un point à un plan',
        steps: [
          '<strong>Équation et point</strong> : plan $\\mathcal{P}$ : $ax+by+cz+d=0$, point $M(x_0;y_0;z_0)$.',
          '<strong>Distance point-plan</strong> : $d(M;\\mathcal{P})=\\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$.',
          '<strong>Perpendicularité</strong> : droite $\\perp$ à un plan $\\Leftrightarrow$ son vecteur directeur colinéaire au vecteur normal.',
          '<strong>Plans perpendiculaires</strong> : deux plans $\\perp$ $\\Leftrightarrow$ leurs vecteurs normaux sont $\\perp$ ($\\vec{n_1}\\cdot\\vec{n_2}=0$).'
        ]
      },
      example: {
        statement: 'Calculer la distance du point $A(3;1;-2)$ au plan $\\mathcal{P}$ d\'équation $x - 2y + 2z + 1 = 0$.',
        steps: [
          'On identifie les coefficients du plan : $a=1$, $b=-2$, $c=2$, $d=1$.',
          'On applique la formule : $d = \\dfrac{|1 \\times 3 + (-2) \\times 1 + 2 \\times (-2) + 1|}{\\sqrt{1^2+(-2)^2+2^2}}$.',
          'Numérateur : $|3 - 2 - 4 + 1| = |-2| = 2$.',
          'Dénominateur : $\\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$.',
          '$d(A;\\mathcal{P}) = \\dfrac{2}{3} \\approx 0{,}67$.'
        ],
        answer: 'La distance de $A$ au plan $\\mathcal{P}$ est $\\dfrac{2}{3}$ unité de longueur.'
      },
      formulas: [
        '$d(M;\\mathcal{P})=\\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$',
        'Plans $\\perp$ : $\\vec{n_1}\\cdot\\vec{n_2}=0$',
        'Droite $\\perp$ plan : $\\vec{u}=k\\vec{n}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Distance point-plan',
        title: 'Perpendiculaire abaissée de A sur le plan P',
        description: 'Reprise exacte de l\'exemple du cours : le plan $\\mathcal{P}$ d\'équation $x-2y+2z+1=0$, le point $A(3;1;-2)$ situé hors du plan, et le pied $H$ de la perpendiculaire abaissée de $A$ sur $\\mathcal{P}$.',
        svg: `
          <svg viewBox="0 0 640 320" role="img" aria-labelledby="ortho-diagram-title ortho-diagram-desc">
            <title id="ortho-diagram-title">Perpendiculaire abaissee de A sur le plan P</title>
            <desc id="ortho-diagram-desc">Un plan P represente en perspective par un parallelogramme, d'equation x moins 2y plus 2z plus 1 egale 0. Le point A(3;1;-2) est place au-dessus du plan, hors de celui-ci. Un segment en pointilles relie A au point H, pied de la perpendiculaire dans le plan, avec un petit carre indiquant l'angle droit en H entre le segment AH et le plan. La longueur AH vaut deux tiers, soit environ 0,67.</desc>

            <!-- plan P, vu en perspective -->
            <polygon points="70,230 430,230 500,130 140,130" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)" class="frame-line"></polygon>
            <!-- texture de surface du plan -->
            <line class="grid-line" x1="105" y1="180" x2="465" y2="180"></line>
            <line class="grid-line" x1="250" y1="230" x2="320" y2="130"></line>

            <!-- perpendiculaire [AH], en pointilles -->
            <line class="focus-line" x1="340" y1="60" x2="300" y2="190"></line>

            <!-- marque d'angle droit en H -->
            <polygon points="300,190 310,190 312.9,180.4 302.9,180.4" class="frame-line" fill="none"></polygon>

            <!-- points -->
            <circle class="plot-point" cx="340" cy="60" r="5"></circle>
            <circle class="plot-point-alt" cx="300" cy="190" r="5"></circle>

            <!-- libelles -->
            <text class="annotation-label" x="320" y="112" text-anchor="middle">Plan P : x - 2y + 2z + 1 = 0</text>
            <text class="annotation-label" x="355" y="50" text-anchor="start">A(3 ; 1 ; -2)</text>
            <text class="annotation-label" x="315" y="205" text-anchor="start">H</text>
            <text class="label-soft" x="315" y="219" text-anchor="start">H ≈ (3,22 ; 0,56 ; -1,56)</text>
            <text class="annotation-label" x="345" y="118" text-anchor="start">AH = 2/3 ≈ 0,67</text>
            <text class="label-soft" x="270" y="140" text-anchor="end">vecteur normal n(1;-2;2)</text>
          </svg>
        `,
        notes: [
          'Le plan $\\mathcal{P}$ a pour vecteur normal $\\vec{n}(1;-2;2)$, lu directement sur les coefficients de l\'équation $x-2y+2z+1=0$.',
          'Le point $H$, pied de la perpendiculaire, vérifie $\\overrightarrow{HA} = -\\dfrac{2}{9}\\,\\vec{n}$ : il est bien colinéaire au vecteur normal, ce qui confirme que $(AH)$ est perpendiculaire au plan $\\mathcal{P}$.',
          'Calcul : $H\\left(\\dfrac{29}{9};\\dfrac{5}{9};-\\dfrac{14}{9}\\right) \\approx (3{,}22\\,;\\,0{,}56\\,;\\,-1{,}56)$, obtenu en résolvant $A + t\\,\\vec{n} \\in \\mathcal{P}$ (on trouve $t = \\dfrac{2}{9}$).',
          'La longueur $AH = \\dfrac{2}{3} \\approx 0{,}67$ correspond exactement à la distance $d(A;\\mathcal{P})$ calculée dans l\'exemple du cours.'
        ],
        reading: 'Le petit carré tracé au point $H$ signale l\'angle droit entre le segment $[AH]$ et le plan $\\mathcal{P}$ : c\'est la définition même de la perpendiculaire abaissée d\'un point sur un plan.',
        caption: 'Perpendiculaire $[AH]$ abaissée du point $A(3;1;-2)$ sur le plan $\\mathcal{P} : x-2y+2z+1=0$ — reprise exacte de l\'exemple du cours, avec vérification $\\overrightarrow{HA} = -\\frac{2}{9}\\vec{n}$ et $AH = \\frac{2}{3} \\approx 0{,}67$.'
      },
      recap: [
        'Test d\'orthogonalité : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$. En 3D, on calcule la somme des produits coordonnée par coordonnée.',
        'La <strong>distance point-plan</strong> utilise la formule $d = |ax_0+by_0+cz_0+d| / \\sqrt{a^2+b^2+c^2}$. Ne jamais oublier la valeur absolue au numérateur.',
        'Deux plans sont <strong>perpendiculaires</strong> si $\\vec{n_1} \\cdot \\vec{n_2} = 0$. Deux plans sont parallèles si $\\vec{n_1}$ et $\\vec{n_2}$ sont colinéaires.',
        'Le <strong>projeté orthogonal</strong> $H$ de $M$ sur $\\mathcal{P}$ est le point de $\\mathcal{P}$ tel que $\\overrightarrow{HM}$ est colinéaire à $\\vec{n}$. La distance $MH$ est minimale parmi tous les points du plan.'
      ],
      piege: 'La distance d\'un point à un plan se calcule avec la <strong>valeur absolue</strong> au numérateur.<br/><br/>Ne pas oublier le $|\\cdots|$ ! Une distance est toujours positive, même si le calcul brut donne un résultat négatif.'
    },
    quiz: [
      { q: 'Pour calculer la distance de $A(1;2;-1)$ au plan $x+y+z-6=0$, un élève obtient $\\dfrac{1+2-1-6}{\\sqrt{3}}=\\dfrac{-4}{\\sqrt{3}}$. Quelle est son erreur ?', options: ['La distance est toujours positive : il faut la valeur absolue. $d=\\dfrac{|-4|}{\\sqrt{3}}=\\dfrac{4}{\\sqrt{3}}\\approx2{,}31$', 'L\'élève a raison : une distance négative indique que $A$ est de l\'autre côté du plan', 'Le dénominateur devrait être $\\sqrt{1^2+1^2+1^2}=3$, pas $\\sqrt{3}$', 'Le numérateur devrait être $1+2+(-1)-6=-4$ donc $d=-4$'], answer: 0, correction: 'Une distance est toujours une longueur, donc toujours POSITIVE. La formule est $d=|ax_0+by_0+cz_0+d|/\\sqrt{a^2+b^2+c^2}$. Ici $|1+2-1-6|=|-4|=4$ et $\\sqrt{1+1+1}=\\sqrt{3}$, donc $d=4/\\sqrt{3}\\approx2{,}31$. Le signe négatif du numérateur ($-4$) indique seulement que $A$ est du côté "négatif" du plan — pas que la distance est négative.' },
      { q: 'La distance du point $O(0;0;0)$ au plan $x+y+z-3=0$ est :', options: ['$3$', '$\\sqrt{3}$', '$1$', '$3\\sqrt{3}$'], answer: 1, correction: '$d=\\frac{|0+0+0-3|}{\\sqrt{1+1+1}}=\\frac{3}{\\sqrt{3}}=\\sqrt{3}$.' },
      { q: 'Une droite de vecteur directeur $\\vec{u}(1;2;3)$ est-elle perpendiculaire au plan de normale $\\vec{n}(2;4;6)$ ?', options: ['Non', 'Oui, car $\\vec{u}$ et $\\vec{n}$ sont colinéaires', 'Oui, car $\\vec{u}\\cdot\\vec{n}=0$', 'Impossible à dire'], answer: 1, correction: '$\\vec{n}=2\\vec{u}$ : colinéaires, donc la droite est perpendiculaire au plan.<br/><br/>En effet, une droite est perpendiculaire à un plan si et seulement si son vecteur directeur est <strong>colinéaire</strong> au vecteur normal du plan. Ici le rapport est $k=2$ pour les trois coordonnées.' },
      { q: 'Le projeté orthogonal $H$ de $M(0;0;3)$ sur le plan $z = 0$ est :', options: ['$H(0;0;0)$', '$H(0;0;3)$', '$H(3;0;0)$', '$H(0;3;0)$'], answer: 0, correction: 'Le plan $z=0$ est le plan $xOy$. Le projeté orthogonal consiste à "descendre" perpendiculairement sur le plan : on garde les coordonnées $x$ et $y$ et on met $z=0$.<br/><br/>Donc $H(0;0;0)$. La distance $MH = |3-0| = 3$.' },
      { q: 'Les plans $\\mathcal{P}_1 : x + y + z = 1$ et $\\mathcal{P}_2 : x - y = 0$ sont-ils perpendiculaires ?', options: ['Oui, car $\\vec{n_1} \\cdot \\vec{n_2} = 1 \\times 1 + 1 \\times (-1) + 1 \\times 0 = 0$', 'Non, car $\\vec{n_1} \\cdot \\vec{n_2} = 2$', 'Oui, car les plans ne sont pas parallèles', 'Non, car $\\vec{n_1} \\cdot \\vec{n_2} = -1$'], answer: 0, correction: '$\\vec{n_1}(1;1;1)$ et $\\vec{n_2}(1;-1;0)$.<br/><br/>$\\vec{n_1} \\cdot \\vec{n_2} = 1 \\times 1 + 1 \\times (-1) + 1 \\times 0 = 1 - 1 + 0 = 0$.<br/><br/>Les vecteurs normaux sont orthogonaux, donc les deux plans sont bien <strong>perpendiculaires</strong>.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(1, 3), b = rand(1, 3), c = rand(1, 3);
        const d = rand(-5, -1);
        // Point de référence M variable (ne reste plus figé à l'origine)
        const x0 = rand(-3, 3), y0 = rand(-3, 3), z0 = rand(-3, 3);
        const num = Math.abs(a*x0 + b*y0 + c*z0 + d);
        const denom = parseFloat(Math.sqrt(a*a+b*b+c*c).toFixed(4));
        const dist = parseFloat((num/denom).toFixed(4));
        const distAnswer = parseFloat(dist.toFixed(2));
        const distStr = distAnswer.toFixed(2).replace('.', '{,}');
        const planeEq = `${a}x+${b}y+${c}z${d}=0`;
        const numDetail = `${a}\\times${x0}+${b}\\times${y0}+${c}\\times${z0}${d}`;

        const ctx = pick([
          {
            build: () => `Un <strong>drone de surveillance</strong> survole un site industriel et se situe au point $M(${x0};${y0};${z0})$ (coordonnées en mètres). Le toit du hangar est modélisé par le plan $\\mathcal{P}$ d'équation $${planeEq}$.<br/><br/>Calculer la <strong>distance</strong> du drone $M$ au plan $\\mathcal{P}$. Arrondir à $0{,}01$.`
          },
          {
            build: () => `Sur le chantier d'une <strong>charpente</strong>, le sommet d'une lucarne est repéré par le point $M(${x0};${y0};${z0})$. Le pan de toiture est modélisé par le plan $\\mathcal{P}$ d'équation $${planeEq}$.<br/><br/>Calculer la <strong>distance</strong> entre la lucarne $M$ et le plan du toit $\\mathcal{P}$. Arrondir à $0{,}01$.`
          },
          {
            build: () => `Un <strong>avion</strong> se situe au point $M(${x0};${y0};${z0})$ (coordonnées en km) lorsqu'il amorce sa descente. La piste d'atterrissage est modélisée par le plan $\\mathcal{P}$ d'équation $${planeEq}$.<br/><br/>Calculer la <strong>distance</strong> de l'avion $M$ au plan de la piste $\\mathcal{P}$. Arrondir à $0{,}01$.`
          },
          {
            build: () => `Dans un <strong>jeu vidéo 3D</strong>, un personnage occupe la position $M(${x0};${y0};${z0})$. Le sol de la scène est modélisé par le plan $\\mathcal{P}$ d'équation $${planeEq}$.<br/><br/>Calculer la <strong>distance</strong> qui sépare le personnage $M$ du sol $\\mathcal{P}$. Arrondir à $0{,}01$.`
          },
          {
            build: () => `L'extrémité du bras d'un <strong>robot de soudure</strong> se trouve en $M(${x0};${y0};${z0})$. La plaque métallique à souder correspond au plan $\\mathcal{P}$ d'équation $${planeEq}$.<br/><br/>Calculer la <strong>distance</strong> entre l'outil $M$ et la plaque $\\mathcal{P}$. Arrondir à $0{,}01$.`
          },
          {
            build: () => `Sur la <strong>maquette numérique</strong> d'un bâtiment, un capteur de température est positionné en $M(${x0};${y0};${z0})$. Le mur auquel il pourrait être fixé correspond au plan $\\mathcal{P}$ d'équation $${planeEq}$.<br/><br/>Calculer la <strong>distance</strong> du capteur $M$ au mur $\\mathcal{P}$. Arrondir à $0{,}01$.`
          }
        ]);

        return {
          statement: ctx.build(),
          answer: distAnswer,
          tolerance: 0.05,
          unit: 'unités',
          hint: `$d=\\dfrac{|${numDetail}|}{\\sqrt{${a}^2+${b}^2+${c}^2}}$`,
          solution: [
            `$d=\\dfrac{|${numDetail}|}{\\sqrt{${a*a+b*b+c*c}}}=\\dfrac{${num}}{\\sqrt{${a*a+b*b+c*c}}}\\approx${distStr}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Dans le repère orthonormé, on considère le plan $\\mathcal{P}$ d\'équation $2x+y-2z+3=0$ et le point $A(1;1;1)$.',
      tasks: [
        'Donner le vecteur normal à $\\mathcal{P}$.',
        'Calculer la distance de $A$ à $\\mathcal{P}$.',
        'Écrire une équation paramétrique de la droite passant par $A$ et perpendiculaire à $\\mathcal{P}$.'
      ],
      solutions: [
        '$\\vec{n}(2;1;-2)$.',
        '$d=\\frac{|2\\times1+1\\times1-2\\times1+3|}{\\sqrt{4+1+4}}=\\frac{|4|}{3}=\\frac{4}{3}$.',
        'Droite : $(x;y;z)=(1;1;1)+t(2;1;-2)$, soit $x=1+2t$, $y=1+t$, $z=1-2t$.'
      ],
      finalAnswer: '$d(A;\\mathcal{P})=\\frac{4}{3}$. Droite perpendiculaire : $(1+2t;1+t;1-2t)$.'
    },

    evaluation: {
      title: 'Évaluation — Orthogonalité dans l\'espace',
      duration: '35 min',
      questions: [
        {
          statement: 'Calculer le produit scalaire $\\vec{u}(2;-3;1) \\cdot \\vec{v}(4;2;-5)$.',
          type: 'numeric',
          answer: -3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 2 \\times 4 + (-3) \\times 2 + 1 \\times (-5) = 8 - 6 - 5 = -3$.'
        },
        {
          statement: 'Les vecteurs $\\vec{u}(1;-2;3)$ et $\\vec{v}(6;0;-2)$ sont-ils orthogonaux ?',
          type: 'multiple-choice',
          options: ['Oui, car $\\vec{u}\\cdot\\vec{v}=0$', 'Non, car $\\vec{u}\\cdot\\vec{v}=12$', 'Non, car $\\vec{u}\\cdot\\vec{v}=-12$', 'Oui, car $\\vec{u}\\cdot\\vec{v}=6$'],
          answer: 0,
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 1 \\times 6 + (-2) \\times 0 + 3 \\times (-2) = 6 + 0 - 6 = 0$. Donc $\\vec{u} \\perp \\vec{v}$.'
        },
        {
          statement: 'Calculer la distance du point $M(1;-1;2)$ au plan $2x - y + 2z - 1 = 0$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$d = \\dfrac{|2 \\times 1 + (-1)\\times(-1) + 2 \\times 2 - 1|}{\\sqrt{4+1+4}} = \\dfrac{|2+1+4-1|}{\\sqrt{9}} = \\dfrac{6}{3} = 2$.'
        },
        {
          statement: 'Une droite de vecteur directeur $\\vec{u}(3;-6;9)$ est-elle perpendiculaire au plan de vecteur normal $\\vec{n}(1;-2;3)$ ?',
          type: 'multiple-choice',
          options: ['Oui, car $\\vec{u} = 3\\vec{n}$ (colinéaires)', 'Non, car $\\vec{u} \\cdot \\vec{n} = 0$', 'Non, car les coordonnées sont différentes', 'Oui, car $\\vec{u} \\cdot \\vec{n} \\neq 0$'],
          answer: 0,
          points: 2,
          correction: '$\\vec{u} = (3;-6;9) = 3 \\times (1;-2;3) = 3\\vec{n}$. Les vecteurs sont colinéaires, donc la droite est perpendiculaire au plan.'
        },
        {
          statement: 'Les plans $\\mathcal{P}_1 : x + 2y - z + 1 = 0$ et $\\mathcal{P}_2 : 2x - y + 2z - 3 = 0$ sont-ils perpendiculaires ?',
          type: 'multiple-choice',
          options: ['Non, car $\\vec{n_1}\\cdot\\vec{n_2} = 2 \\neq 0$', 'Non, car $\\vec{n_1}\\cdot\\vec{n_2} = -2 \\neq 0$', 'Oui, car $\\vec{n_1}\\cdot\\vec{n_2} = 0$', 'Oui, car les plans ne sont pas parallèles'],
          answer: 1,
          points: 2,
          correction: '$\\vec{n_1}(1;2;-1)$, $\\vec{n_2}(2;-1;2)$. $\\vec{n_1}\\cdot\\vec{n_2} = 1 \\times 2 + 2 \\times (-1) + (-1) \\times 2 = 2 - 2 - 2 = -2 \\neq 0$. Les plans ne sont PAS perpendiculaires.'
        }
      ]
    }
  });
