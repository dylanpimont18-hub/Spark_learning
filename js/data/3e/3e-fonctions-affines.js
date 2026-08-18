/* =========================================================
   Spark Learning – data/3e/3e-fonctions-affines.js
   Module : Fonctions affines et linéaires (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-fonctions-affines',
    level: 1, subject: 'maths',
    icon: '📈',
    title: 'Fonctions affines et linéaires',
    subtitle: 'Coefficient directeur, ordonnée à l\'origine, droite',
    keywords: ['Fonction affine', 'Fonction linéaire', 'Coefficient directeur', 'Ordonnée à l\'origine', 'Droite'],
    physics: 'Toute grandeur qui évolue à taux constant : charge d\'un condensateur, dilatation d\'un métal, coût de production',
    cours: {
      intro: 'Un taxi affiche $4$ € dès que tu montes, puis $2$ € par kilomètre. Un autre ne prend rien au départ mais facture $3$ € du kilomètre.<br/><br/>' +
        'Lequel est le moins cher ? La réponse dépend de la distance — et pour la trouver <strong>sans tester tous les cas</strong>, il faut savoir écrire chaque tarif comme une <strong>fonction affine</strong>.<br/><br/>' +
        'Une fonction affine s\'écrit $f(x) = ax + b$. Elle décrit tout ce qui évolue à <strong>rythme constant</strong> à partir d\'une <strong>valeur de départ</strong> : le $b$ est ce qu\'on paie avant même de commencer, le $a$ est ce que chaque unité supplémentaire ajoute.<br/><br/>' +
        'Quand la valeur de départ est nulle ($b = 0$), la fonction devient <strong>linéaire</strong> : $f(x) = ax$. C\'est exactement une <strong>situation de proportionnalité</strong> — deux fois plus de kilomètres, deux fois plus cher.<br/><br/>' +
        'Ce qui rend ces fonctions si commodes : leur représentation graphique est toujours une <strong>droite</strong>. Deux points suffisent donc à la tracer, et une lecture graphique suffit souvent à conclure.',
      definitions: [
        { term: 'Fonction affine', def: 'Fonction qui s\'écrit $f(x) = ax + b$, où $a$ et $b$ sont deux nombres fixés. Sa représentation graphique est une <strong>droite</strong>.' },
        { term: 'Fonction linéaire', def: 'Cas particulier de fonction affine où $b = 0$ : $f(x) = ax$. Sa droite passe par l\'<strong>origine</strong> du repère. C\'est la traduction d\'une situation de <strong>proportionnalité</strong>, et $a$ en est le coefficient.' },
        { term: 'Coefficient directeur', def: 'Le nombre $a$. Il indique de combien $f(x)$ varie quand $x$ augmente de $1$. Si $a > 0$ la droite monte, si $a < 0$ elle descend, si $a = 0$ elle est horizontale.' },
        { term: 'Ordonnée à l\'origine', def: 'Le nombre $b$. C\'est la valeur de la fonction en $0$ : $f(0) = b$. Graphiquement, c\'est l\'endroit exact où la droite coupe l\'axe vertical.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Reconnaître et écrire la fonction</strong> : repérer la valeur de départ (elle donne $b$) et le rythme par unité (il donne $a$), puis écrire $f(x) = ax + b$.<br/><em>Exemple :</em> $4$ € de prise en charge puis $2$ € par km donnent $f(x) = 2x + 4$. S\'il n\'y a rien à payer au départ, alors $b = 0$ et la fonction est linéaire.',
          '<strong>Calculer le coefficient directeur à partir de deux points</strong> : si on connaît $f(x_1)$ et $f(x_2)$, alors $a = \\dfrac{f(x_2) - f(x_1)}{x_2 - x_1}$.<br/><em>Exemple :</em> $f(1) = 6$ et $f(4) = 12$ donnent $a = \\dfrac{12 - 6}{4 - 1} = \\dfrac{6}{3} = 2$. On trouve ensuite $b$ en réinjectant un point : $6 = 2 \\times 1 + b$, donc $b = 4$.',
          '<strong>Tracer la droite</strong> : placer le point $(0 \\,;\\, b)$ sur l\'axe vertical, puis se déplacer de $1$ vers la droite et de $a$ vers le haut (vers le bas si $a$ est négatif). On obtient un second point, et deux points suffisent à tracer la droite.'
        ]
      },
      example: {
        statement: 'Un taxi facture $4$ € de prise en charge, puis $2$ € par kilomètre parcouru. Un second taxi ne prend rien au départ mais facture $3$ € du kilomètre. À partir de quelle distance le premier taxi devient-il plus avantageux ?',
        steps: [
          '<strong>Écrivons les deux tarifs.</strong> Le premier a une valeur de départ de $4$ et un rythme de $2$ par km : $f(x) = 2x + 4$. C\'est une fonction <strong>affine</strong>.',
          'Le second n\'a aucune valeur de départ : $g(x) = 3x$. C\'est une fonction <strong>linéaire</strong> — le prix y est proportionnel à la distance.',
          '<strong>Cherchons où les deux tarifs sont égaux</strong>, c\'est-à-dire où $f(x) = g(x)$ : $2x + 4 = 3x$.',
          'On soustrait $2x$ des deux côtés : $4 = x$. Les deux taxis coûtent donc exactement la même chose pour $4$ km — $12$ € dans les deux cas.',
          '<strong>Concluons.</strong> Au-delà de $4$ km, c\'est le second qui devient plus cher, car chaque kilomètre lui coûte $3$ € contre $2$ € au premier. Le premier taxi est donc plus avantageux <strong>dès que la course dépasse $4$ km</strong>.'
        ],
        answer: 'Les deux tarifs se croisent à $4$ km ($12$ €). Au-delà, le premier taxi ($f(x) = 2x + 4$) est moins cher.'
      },
      formulas: [
        'Fonction affine : $f(x) = ax + b$ (droite quelconque)',
        'Fonction linéaire : $f(x) = ax$ (droite passant par l\'origine)',
        'Ordonnée à l\'origine : $f(0) = b$',
        'Coefficient directeur : $a = \\dfrac{f(x_2) - f(x_1)}{x_2 - x_1}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Affine et linéaire',
        title: 'Ce que $a$ et $b$ font à la droite',
        description: 'Deux droites de <strong>même</strong> coefficient directeur $a = 2$ : la linéaire $g(x) = 2x$ part de l\'origine, l\'affine $f(x) = 2x + 3$ part de la hauteur $b = 3$. Le petit escalier montre comment se lit $a$ : $1$ vers la droite, $2$ vers le haut.',
        svg: `
          <svg viewBox="0 0 380 260" role="img" aria-labelledby="affine-title affine-desc">
            <title id="affine-title">Fonction affine et fonction lineaire dans un repere</title>
            <desc id="affine-desc">Un repere avec deux droites paralleles de coefficient directeur 2 : la droite de la fonction lineaire g de x egale 2 x passe par l'origine, celle de la fonction affine f de x egale 2 x plus 3 coupe l'axe vertical a la hauteur 3. Un escalier entre les abscisses 1 et 2 montre que lorsque x augmente de 1, f augmente de 2.</desc>

            <line class="grid-line" x1="90" y1="40" x2="90" y2="210"></line>
            <line class="grid-line" x1="130" y1="40" x2="130" y2="210"></line>
            <line class="grid-line" x1="170" y1="40" x2="170" y2="210"></line>
            <line class="grid-line" x1="210" y1="40" x2="210" y2="210"></line>
            <line class="grid-line" x1="250" y1="40" x2="250" y2="210"></line>
            <line class="grid-line" x1="50" y1="176" x2="250" y2="176"></line>
            <line class="grid-line" x1="50" y1="142" x2="250" y2="142"></line>
            <line class="grid-line" x1="50" y1="108" x2="250" y2="108"></line>
            <line class="grid-line" x1="50" y1="74" x2="250" y2="74"></line>
            <line class="grid-line" x1="50" y1="40" x2="250" y2="40"></line>

            <line class="axis" x1="50" y1="210" x2="266" y2="210"></line>
            <line class="axis" x1="50" y1="210" x2="50" y2="34"></line>
            <text class="tick-label" x="272" y="214">x</text>
            <text class="tick-label" x="44" y="32">y</text>

            <text class="tick-label" x="88" y="224">1</text>
            <text class="tick-label" x="128" y="224">2</text>
            <text class="tick-label" x="168" y="224">3</text>
            <text class="tick-label" x="208" y="224">4</text>
            <text class="tick-label" x="248" y="224">5</text>
            <text class="tick-label" x="40" y="214" text-anchor="end">0</text>
            <text class="tick-label" x="44" y="180" text-anchor="end">2</text>
            <text class="tick-label" x="44" y="146" text-anchor="end">4</text>
            <text class="tick-label" x="44" y="112" text-anchor="end">6</text>
            <text class="tick-label" x="44" y="78" text-anchor="end">8</text>
            <text class="tick-label" x="44" y="44" text-anchor="end">10</text>

            <line class="graph-line" x1="50" y1="210" x2="210" y2="74"></line>
            <line class="curve-main" x1="50" y1="159" x2="190" y2="40"></line>

            <line class="guide-line" x1="90" y1="125" x2="130" y2="125"></line>
            <line class="guide-line" x1="130" y1="125" x2="130" y2="91"></line>
            <text class="tick-label" x="102" y="138">+1</text>
            <text class="tick-label" x="136" y="112">+2</text>
            <text class="annotation-label" x="140" y="152">a = 2</text>

            <circle class="plot-point" cx="50" cy="159" r="5"></circle>
            <text class="annotation-label" x="58" y="176">b = 3</text>
            <circle class="plot-point-alt" cx="50" cy="210" r="5"></circle>

            <text class="annotation-label" x="196" y="38">f(x) = 2x + 3</text>
            <text class="annotation-label" x="216" y="72">g(x) = 2x</text>
            <text class="label-soft" x="196" y="52">affine</text>
            <text class="label-soft" x="216" y="86">linéaire</text>
          </svg>
        `,
        notes: [
          'Les deux droites ont le <strong>même</strong> coefficient directeur $a = 2$ : elles montent exactement pareil, elles sont donc <strong>parallèles</strong>. Seule leur hauteur de départ diffère.',
          'La droite de $g$ passe par l\'<strong>origine</strong> : c\'est la signature d\'une fonction linéaire, donc d\'une situation de proportionnalité.',
          'La droite de $f$ coupe l\'axe vertical en $3$ : c\'est son <strong>ordonnée à l\'origine</strong>, et cela se lit directement dans l\'écriture $f(x) = 2x + \\mathbf{3}$.',
          'L\'escalier se lit ainsi : on avance de $1$ sur l\'axe horizontal, la droite monte de $2$. Ce « $2$ » <strong>est</strong> le coefficient directeur.'
        ],
        reading: 'Pour lire $b$, regarde où la droite coupe l\'axe vertical. Pour lire $a$, avance de $1$ vers la droite et compte de combien tu montes (ou descends).',
        caption: 'Deux droites de même coefficient directeur $a = 2$ : la linéaire $g(x) = 2x$ et l\'affine $f(x) = 2x + 3$, avec la lecture de $a$ en escalier.'
      },
      recap: [
        'Une fonction <strong>affine</strong> s\'écrit $f(x) = ax + b$ et se représente par une <strong>droite</strong>.',
        'Une fonction <strong>linéaire</strong> est une affine avec $b = 0$ : sa droite passe par l\'<strong>origine</strong>, et elle traduit une proportionnalité.',
        'Le coefficient directeur $a$ donne la variation de $f(x)$ quand $x$ augmente de $1$ ; l\'ordonnée à l\'origine $b$ vaut $f(0)$.',
        'Deux points suffisent à tracer la droite — et deux points suffisent à retrouver $a$ grâce à $a = \\dfrac{f(x_2) - f(x_1)}{x_2 - x_1}$.',
        'Deux droites de même $a$ sont <strong>parallèles</strong>.'
      ],
      piege: 'Piège : toute fonction linéaire est affine, mais l\'inverse est faux. $f(x) = 2x + 3$ est affine et <strong>n\'est pas</strong> linéaire, car $f(0) = 3 \\neq 0$ — il n\'y a donc <strong>pas</strong> proportionnalité : doubler $x$ ne double pas $f(x)$. Vérifie : $f(1) = 5$ mais $f(2) = 7$, et $7 \\neq 2 \\times 5$. Seules les fonctions linéaires ($b = 0$) traduisent une proportionnalité.'
    },
    quiz: [
      {
        q: 'Parmi ces fonctions, laquelle est <strong>linéaire</strong> ?',
        options: ['$f(x) = 3x + 1$', '$g(x) = 5x$', '$h(x) = x^2$', '$k(x) = 7$'],
        answer: 1,
        correction: 'Une fonction linéaire s\'écrit $ax$ sans terme constant : $g(x) = 5x$ convient. $f$ est affine mais pas linéaire (son $b$ vaut $1$), $h$ n\'est pas affine du tout (le $x$ est au carré), et $k$ est affine constante ($a = 0$, $b = 7$).'
      },
      {
        q: 'Quelle est l\'ordonnée à l\'origine de $f(x) = -4x + 9$ ?',
        options: ['$-4$', '$9$', '$0$', '$-9$'],
        answer: 1,
        correction: 'L\'ordonnée à l\'origine est la valeur en $0$ : $f(0) = -4 \\times 0 + 9 = 9$. C\'est le terme constant, donc $9$. Le $-4$, lui, est le coefficient directeur : la droite descend.'
      },
      {
        q: 'Une fonction affine vérifie $f(2) = 7$ et $f(5) = 16$. Que vaut son coefficient directeur ?',
        options: ['$3$', '$9$', '$\\dfrac{1}{3}$', '$23$'],
        answer: 0,
        correction: 'On applique la formule : $a = \\dfrac{f(5) - f(2)}{5 - 2} = \\dfrac{16 - 7}{3} = \\dfrac{9}{3} = 3$. Attention à bien diviser par l\'écart des $x$, et non à garder seulement l\'écart des images.'
      },
      {
        q: 'La droite de $f(x) = 2x + 5$ et celle de $g(x) = 2x - 1$ sont :',
        options: ['sécantes en un point', 'parallèles', 'confondues', 'perpendiculaires'],
        answer: 1,
        correction: 'Les deux ont le même coefficient directeur $a = 2$ : elles montent exactement de la même façon, elles sont donc <strong>parallèles</strong>. Elles ne sont pas confondues car leurs ordonnées à l\'origine diffèrent ($5$ et $-1$).'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        // a porte UNE decimale (tarif au km, à l'heure...), b est entier.
        // Le calcul se fait en dixièmes pour éviter toute dérive en virgule
        // flottante : aDix * x + b*10 reste un entier exact.
        const aDix = rand(8, 25);
        const b = rand(2, 9);
        const x = rand(4, 20);
        const a = aDix / 10;
        const total = (aDix * x + b * 10) / 10;

        // `deUnite` porte l'elision : « de kilometres » mais « d'heures ».
        const ctx = pick([
          { emoji: '🚕', sujet: 'Un <strong>taxi</strong>', debut: 'de prise en charge', taux: 'par kilomètre',
            unite: 'kilomètres', deUnite: 'de kilomètres', question: 'Quel est le prix d\'une course de' },
          { emoji: '🏋️', sujet: 'Une <strong>salle de sport</strong>', debut: 'de frais d\'inscription', taux: 'par séance',
            unite: 'séances', deUnite: 'de séances', question: 'Combien coûte un abonnement de' },
          { emoji: '🚲', sujet: 'Un <strong>service de location de vélos</strong>', debut: 'de mise à disposition', taux: 'par heure',
            unite: 'heures', deUnite: 'd\'heures', question: 'Quel est le prix d\'une location de' },
          { emoji: '🎨', sujet: 'Un <strong>atelier de poterie</strong>', debut: 'de droit d\'entrée', taux: 'par pièce cuite',
            unite: 'pièces', deUnite: 'de pièces', question: 'Que paie-t-on pour' },
          { emoji: '📦', sujet: 'Un <strong>transporteur</strong>', debut: 'de frais de dossier', taux: 'par colis',
            unite: 'colis', deUnite: 'de colis', question: 'Quel est le coût d\'un envoi de' },
          { emoji: '🎣', sujet: 'Un <strong>étang de pêche</strong>', debut: 'de droit d\'accès', taux: 'par heure',
            unite: 'heures', deUnite: 'd\'heures', question: 'Combien coûte une journée de' }
        ]);

        return {
          statement: `${ctx.emoji} ${ctx.sujet} facture $${b}$ € ${ctx.debut}, puis $${fr(a)}$ € ${ctx.taux}.<br/><br/>` +
            `Exprime le prix $f(x)$ en fonction du nombre $x$ ${ctx.deUnite}, puis réponds : <strong>${ctx.question} $${x}$ ${ctx.unite} ?</strong>`,
          answer: total,
          tolerance: 0.01,
          unit: '€',
          hint: `La valeur de départ donne $b = ${b}$, le rythme donne $a = ${fr(a)}$. Donc $f(x) = ${fr(a)}x + ${b}$ — il ne reste qu'à remplacer $x$ par $${x}$.`,
          solution: [
            `La valeur de départ est $${b}$ € : c'est l'<strong>ordonnée à l'origine</strong>, donc $b = ${b}$.`,
            `Chaque unité supplémentaire ajoute $${fr(a)}$ € : c'est le <strong>coefficient directeur</strong>, donc $a = ${fr(a)}$.`,
            `La fonction s'écrit donc $f(x) = ${fr(a)}x + ${b}$.`,
            `On remplace $x$ par $${x}$ : $f(${x}) = ${fr(a)} \\times ${x} + ${b} = ${fr((aDix * x) / 10)} + ${b} = ${fr(total)}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une médiathèque propose deux formules pour emprunter des DVD.<br/><br/>' +
        '<strong>Formule A</strong> : une carte annuelle à $30$ €, puis $1$ € par DVD emprunté.<br/>' +
        '<strong>Formule B</strong> : aucune carte à payer, mais $2{,}50$ € par DVD emprunté.<br/><br/>' +
        'On note $x$ le nombre de DVD empruntés dans l\'année.',
      schema: null,
      tasks: [
        '(Étape 1 de la méthode) Exprimer le coût annuel $A(x)$ de la formule A, puis le coût $B(x)$ de la formule B. Préciser pour chacune s\'il s\'agit d\'une fonction affine ou linéaire.',
        'Calculer le coût des deux formules pour $10$ DVD, puis pour $30$ DVD. Laquelle est la plus avantageuse dans chaque cas ?',
        '(Étape 3 de la méthode) Déterminer par le calcul le nombre de DVD à partir duquel la formule A devient plus avantageuse.',
        'Réflexion : sans refaire le calcul, que peut-on dire des deux droites si la médiathèque augmente le prix de la carte à $40$ € sans toucher au prix par DVD ?'
      ],
      solutions: [
        '<strong>Formule A</strong> : $30$ € de départ puis $1$ € par DVD, donc $A(x) = x + 30$. C\'est une fonction <strong>affine</strong> ($b = 30 \\neq 0$).<br/><strong>Formule B</strong> : rien au départ, donc $B(x) = 2{,}5x$. C\'est une fonction <strong>linéaire</strong>, et le coût y est proportionnel au nombre de DVD.',
        'Pour $10$ DVD : $A(10) = 10 + 30 = 40$ € et $B(10) = 2{,}5 \\times 10 = 25$ €. La formule <strong>B</strong> est meilleure.<br/><br/>Pour $30$ DVD : $A(30) = 30 + 30 = 60$ € et $B(30) = 2{,}5 \\times 30 = 75$ €. Cette fois la formule <strong>A</strong> l\'emporte.',
        'On cherche le nombre de DVD pour lequel les deux coûtent pareil, c\'est-à-dire $A(x) = B(x)$ :<br/><br/>$x + 30 = 2{,}5x$, donc $30 = 1{,}5x$, donc $x = \\dfrac{30}{1{,}5} = 20$.<br/><br/>À $20$ DVD les deux formules coûtent $50$ €. <strong>Au-delà de $20$ DVD</strong>, la formule A devient plus avantageuse — ce qui est cohérent avec les deux calculs précédents.',
        'Le prix par DVD ne change pas, donc le coefficient directeur de $A$ reste $1$ : la nouvelle droite est <strong>parallèle</strong> à l\'ancienne, simplement décalée de $10$ vers le haut. Le seuil de rentabilité recule : il passe à $40 = 1{,}5x$, soit environ $27$ DVD.'
      ],
      finalAnswer: '$A(x) = x + 30$ (affine), $B(x) = 2{,}5x$ (linéaire). Les deux formules se valent à $20$ DVD ($50$ €) ; au-delà, la formule A est plus avantageuse.'
    },
    evaluation: {
      title: 'Évaluation — Fonctions affines et linéaires',
      duration: '20 min',
      questions: [
        {
          statement: 'Soit $f(x) = 3x - 7$. Calcule $f(5)$.',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On remplace $x$ par $5$ : $f(5) = 3 \\times 5 - 7 = 15 - 7 = 8$.'
        },
        {
          statement: 'Quelle est l\'ordonnée à l\'origine de la fonction $g(x) = -2x + 11$ ?',
          type: 'numeric',
          answer: 11,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'L\'ordonnée à l\'origine est $g(0) = -2 \\times 0 + 11 = 11$. C\'est le terme constant de l\'écriture, et c\'est là que la droite coupe l\'axe vertical.'
        },
        {
          statement: 'Une fonction affine $h$ vérifie $h(1) = 4$ et $h(6) = 24$. Calcule son coefficient directeur.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$a = \\dfrac{h(6) - h(1)}{6 - 1} = \\dfrac{24 - 4}{5} = \\dfrac{20}{5} = 4$.'
        },
        {
          statement: 'Parmi ces fonctions, laquelle traduit une situation de <strong>proportionnalité</strong> ?',
          type: 'multiple-choice',
          options: ['$f(x) = 6x + 2$', '$g(x) = 6x$', '$h(x) = 6$', '$k(x) = x^2 + 6$'],
          answer: 1,
          points: 2,
          correction: 'Seule une fonction <strong>linéaire</strong> traduit une proportionnalité, c\'est-à-dire une fonction de la forme $ax$ sans terme constant : $g(x) = 6x$. Sa droite passe par l\'origine, et doubler $x$ y double bien $g(x)$.'
        },
        {
          statement: 'Un abonnement téléphonique coûte $8$ € par mois, plus $0{,}30$ € par SMS hors forfait. Quel est le montant de la facture pour $40$ SMS hors forfait, en euros ?',
          type: 'numeric',
          answer: 20,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: 'La situation est affine : $f(x) = 0{,}3x + 8$, où $x$ est le nombre de SMS hors forfait.<br/><br/>Pour $x = 40$ : $f(40) = 0{,}3 \\times 40 + 8 = 12 + 8 = 20$ €.'
        }
      ]
    }
  }
);
