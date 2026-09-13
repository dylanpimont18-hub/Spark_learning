/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-fonctions-reference.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-fonctions-reference',
    level: 2, subject: 'maths',
    icon: '🔭',
    title: 'Fonctions de référence',
    subtitle: 'Carré, inverse, racine carrée',
    keywords: ['Fonction carré', 'Fonction inverse', 'Racine carrée', 'Parité'],
    physics: 'Chute libre (fonction carré), lois en 1/x en électricité (fonction inverse), période d\'un pendule (fonction racine carrée)',
    cours: {
      intro: 'Les trois <strong>fonctions de référence</strong> ($x\\mapsto x^2$, $x\\mapsto 1/x$, $x\\mapsto \\sqrt{x}$) sont les briques de base de l\'analyse.<br/><br/>La <strong>fonction carré</strong> est paire ($f(-x) = f(x)$), atteint son minimum $0$ en $x=0$, et est définie sur $\\mathbb{R}$. La <strong>fonction inverse</strong> est impaire et n\'est jamais nulle : son domaine exclut $0$. La <strong>racine carrée</strong> n\'est définie que pour $x \\geq 0$ et est toujours croissante.<br/><br/>Ces domaines sont fondamentaux : $\\sqrt{x-2}$ n\'existe que si $x \\geq 2$, $1/(x-3)$ est interdite en $x = 3$.<br/><br/>Enfin, $\\sqrt{ab} = \\sqrt{a}\\cdot\\sqrt{b}$ est vraie pour un produit — mais $\\sqrt{a+b} \\neq \\sqrt{a}+\\sqrt{b}$.',
      definitions: [
        { term: 'Fonction carré', def: 'Fonction $f(x) = x^2$. Définie sur $\\mathbb{R}$, paire, minimum en $0$. Sa courbe est une parabole tournée vers le haut.' },
        { term: 'Fonction inverse', def: 'Fonction $g(x) = \\dfrac{1}{x}$. Définie sur $\\mathbb{R} \\setminus \\{0\\}$, impaire, jamais nulle. Sa courbe est une hyperbole.' },
        { term: 'Fonction racine carrée', def: 'Fonction $h(x) = \\sqrt{x}$. Définie sur $[0 ; +\\infty[$, toujours croissante, $h(0) = 0$.' },
        { term: 'Parité', def: 'Une fonction est paire si $f(-x) = f(x)$ (symétrie par rapport à l\'axe des ordonnées) ; impaire si $f(-x) = -f(x)$ (symétrie par rapport à l\'origine).' }
      ],
      method: {
        title: 'Caractéristiques des trois fonctions',
        steps: [
          '<strong>Fonction carré $f(x)=x^2$</strong> : domaine $\\mathbb{R}$, décroissante sur $]-\\infty;0]$, croissante sur $[0;+\\infty[$, minimum $0$ en $x=0$. <strong>Exemple :</strong> $f(-3) = 9$ et $f(3) = 9$ (parité : $f(-x) = f(x)$).',
          '<strong>Fonction inverse $g(x)=\\frac{1}{x}$</strong> : domaine $\\mathbb{R}\\setminus\\{0\\}$, décroissante sur $]-\\infty;0[$ et sur $]0;+\\infty[$. <strong>Exemple :</strong> $g(2) = 0{,}5$ et $g(4) = 0{,}25$ : quand $x$ augmente, $g(x)$ diminue.',
          '<strong>Racine carrée $h(x)=\\sqrt{x}$</strong> : domaine $[0;+\\infty[$, croissante, $h(0)=0$. <strong>Exemple :</strong> $\\sqrt{9} = 3$, $\\sqrt{16} = 4$ : quand $x$ augmente, $\\sqrt{x}$ augmente aussi.',
          '<strong>Comparer des racines</strong> : $a > b \\ge 0 \\Rightarrow \\sqrt{a} > \\sqrt{b}$. <strong>Exemple :</strong> $25 > 16 \\Rightarrow \\sqrt{25} = 5 > \\sqrt{16} = 4$.'
        ]
      },
      example: {
        statement: 'Déterminer le domaine de définition de $f(x) = \\sqrt{2x - 6} + \\dfrac{1}{x - 1}$.',
        steps: [
          'Pour $\\sqrt{2x - 6}$ : il faut $2x - 6 \\geq 0$, soit $x \\geq 3$. Domaine partiel : $[3 ; +\\infty[$.',
          'Pour $\\dfrac{1}{x - 1}$ : il faut $x - 1 \\neq 0$, soit $x \\neq 1$. Domaine partiel : $\\mathbb{R} \\setminus \\{1\\}$.',
          'Le domaine de $f$ est l\'intersection : $[3 ; +\\infty[ \\cap \\mathbb{R} \\setminus \\{1\\} = [3 ; +\\infty[$ (car $1 \\notin [3 ; +\\infty[$).'
        ],
        answer: 'Le domaine de définition de $f$ est $[3 ; +\\infty[$.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Trois fonctions de référence, trois échelles',
        title: 'Comparer carré, inverse et racine carrée',
        description: 'Chaque courbe est calculée point par point à partir de sa définition, avec les valeurs remarquables du cours ($f(3)=9$, $g(2)=0{,}5$, $h(9)=3$).',
        svg: `
          <svg viewBox="0 0 580 250" role="img" aria-labelledby="ref-diagram-title ref-diagram-desc">
            <title id="ref-diagram-title">Trois fonctions de reference juxtaposees</title>
            <desc id="ref-diagram-desc">Trois reperes cote a cote : la fonction carre x au carre, la fonction inverse 1 sur x, et la fonction racine carree, chacune tracee point par point avec ses valeurs remarquables.</desc>

            <!-- Panneau 1 : carre -->
            <text class="annotation-label" x="95" y="14" text-anchor="middle">Carré : f(x) = x²</text>
            <line class="grid-line" x1="20" y1="200" x2="20" y2="40"></line>
            <line class="grid-line" x1="45" y1="200" x2="45" y2="40"></line>
            <line class="grid-line" x1="70" y1="200" x2="70" y2="40"></line>
            <line class="grid-line" x1="95" y1="200" x2="95" y2="40"></line>
            <line class="grid-line" x1="120" y1="200" x2="120" y2="40"></line>
            <line class="grid-line" x1="145" y1="200" x2="145" y2="40"></line>
            <line class="grid-line" x1="170" y1="200" x2="170" y2="40"></line>
            <line class="grid-line" x1="20" y1="200" x2="170" y2="200"></line>
            <line class="grid-line" x1="20" y1="146.7" x2="170" y2="146.7"></line>
            <line class="grid-line" x1="20" y1="93.3" x2="170" y2="93.3"></line>
            <line class="grid-line" x1="20" y1="40" x2="170" y2="40"></line>
            <line class="axis" x1="10" y1="200" x2="180" y2="200"></line>
            <line class="axis" x1="95" y1="210" x2="95" y2="30"></line>
            <text class="tick-label" x="20" y="212" text-anchor="middle">-3</text>
            <text class="tick-label" x="45" y="212" text-anchor="middle">-2</text>
            <text class="tick-label" x="70" y="212" text-anchor="middle">-1</text>
            <text class="tick-label" x="95" y="212" text-anchor="middle">0</text>
            <text class="tick-label" x="120" y="212" text-anchor="middle">1</text>
            <text class="tick-label" x="145" y="212" text-anchor="middle">2</text>
            <text class="tick-label" x="170" y="212" text-anchor="middle">3</text>
            <text class="tick-label" x="14" y="203" text-anchor="end">0</text>
            <text class="tick-label" x="14" y="149.7" text-anchor="end">3</text>
            <text class="tick-label" x="14" y="96.3" text-anchor="end">6</text>
            <text class="tick-label" x="14" y="43" text-anchor="end">9</text>
            <polyline class="curve-main" points="20.0,40.0 26.2,65.6 32.5,88.9 38.8,110.0 45.0,128.9 51.2,145.6 57.5,160.0 63.8,172.2 70.0,182.2 76.2,190.0 82.5,195.6 88.8,198.9 95.0,200.0 101.2,198.9 107.5,195.6 113.8,190.0 120.0,182.2 126.2,172.2 132.5,160.0 138.8,145.6 145.0,128.9 151.2,110.0 157.5,88.9 163.8,65.6 170.0,40.0"></polyline>
            <circle class="plot-point" cx="20" cy="40" r="3"></circle>
            <circle class="plot-point" cx="95" cy="200" r="3"></circle>
            <circle class="plot-point" cx="170" cy="40" r="3"></circle>
            <text class="tick-label" x="24" y="34">f(-3)=9</text>
            <text class="tick-label" x="150" y="34" text-anchor="end">f(3)=9</text>

            <!-- Panneau 2 : inverse -->
            <text class="annotation-label" x="285" y="14" text-anchor="middle">Inverse : g(x) = 1/x</text>
            <line class="grid-line" x1="210" y1="200" x2="210" y2="40"></line>
            <line class="grid-line" x1="247.5" y1="200" x2="247.5" y2="40"></line>
            <line class="grid-line" x1="322.5" y1="200" x2="322.5" y2="40"></line>
            <line class="grid-line" x1="360" y1="200" x2="360" y2="40"></line>
            <line class="grid-line" x1="210" y1="200" x2="360" y2="200"></line>
            <line class="grid-line" x1="210" y1="160" x2="360" y2="160"></line>
            <line class="grid-line" x1="210" y1="80" x2="360" y2="80"></line>
            <line class="grid-line" x1="210" y1="40" x2="360" y2="40"></line>
            <line class="axis" x1="200" y1="120" x2="370" y2="120"></line>
            <line class="axis" x1="285" y1="210" x2="285" y2="30"></line>
            <text class="tick-label" x="210" y="133" text-anchor="middle">-4</text>
            <text class="tick-label" x="247.5" y="133" text-anchor="middle">-2</text>
            <text class="tick-label" x="322.5" y="133" text-anchor="middle">2</text>
            <text class="tick-label" x="360" y="133" text-anchor="middle">4</text>
            <text class="tick-label" x="277" y="203" text-anchor="end">-4</text>
            <text class="tick-label" x="277" y="163" text-anchor="end">-2</text>
            <text class="tick-label" x="277" y="83" text-anchor="end">2</text>
            <text class="tick-label" x="277" y="43" text-anchor="end">4</text>
            <polyline class="curve-main" points="289.7,40.0 290.6,53.3 292.5,70.0 294.4,80.0 297.6,90.1 300.0,95.0 303.8,100.0 308.4,104.0 313.1,106.7 322.5,110.0 331.9,112.0 341.2,113.3 350.6,114.3 360.0,115.0"></polyline>
            <polyline class="curve-main" points="210.0,125.0 219.4,125.7 228.8,126.7 238.1,128.0 247.5,130.0 256.9,133.3 261.6,136.0 266.2,140.0 270.0,145.0 272.4,149.9 275.6,160.0 277.5,170.0 279.4,186.7 280.3,200.0"></polyline>
            <circle class="plot-point" cx="322.5" cy="110" r="3"></circle>
            <circle class="plot-point" cx="360" cy="115" r="3"></circle>
            <circle class="plot-point" cx="247.5" cy="130" r="3"></circle>
            <circle class="plot-point" cx="210" cy="125" r="3"></circle>
            <text class="tick-label" x="328" y="104">g(2)=0,5</text>
            <text class="tick-label" x="242" y="146" text-anchor="end">g(-2)=-0,5</text>

            <!-- Panneau 3 : racine -->
            <text class="annotation-label" x="475" y="14" text-anchor="middle">Racine : h(x) = √x</text>
            <line class="grid-line" x1="400" y1="200" x2="400" y2="40"></line>
            <line class="grid-line" x1="416.7" y1="200" x2="416.7" y2="40"></line>
            <line class="grid-line" x1="466.7" y1="200" x2="466.7" y2="40"></line>
            <line class="grid-line" x1="550" y1="200" x2="550" y2="40"></line>
            <line class="grid-line" x1="400" y1="200" x2="550" y2="200"></line>
            <line class="grid-line" x1="400" y1="146.7" x2="550" y2="146.7"></line>
            <line class="grid-line" x1="400" y1="93.3" x2="550" y2="93.3"></line>
            <line class="grid-line" x1="400" y1="40" x2="550" y2="40"></line>
            <line class="axis" x1="390" y1="200" x2="565" y2="200"></line>
            <line class="axis" x1="400" y1="210" x2="400" y2="30"></line>
            <text class="tick-label" x="400" y="212" text-anchor="middle">0</text>
            <text class="tick-label" x="416.7" y="212" text-anchor="middle">1</text>
            <text class="tick-label" x="466.7" y="212" text-anchor="middle">4</text>
            <text class="tick-label" x="550" y="212" text-anchor="middle">9</text>
            <text class="tick-label" x="392" y="203" text-anchor="end">0</text>
            <text class="tick-label" x="392" y="149.7" text-anchor="end">1</text>
            <text class="tick-label" x="392" y="96.3" text-anchor="end">2</text>
            <text class="tick-label" x="392" y="43" text-anchor="end">3</text>
            <polyline class="curve-main" points="400.0,200.0 404.2,173.3 408.3,162.3 416.7,146.7 425.0,134.7 433.3,124.6 441.7,115.7 450.0,107.6 466.7,93.3 483.3,80.7 500.0,69.4 516.7,58.9 533.3,49.2 550.0,40.0"></polyline>
            <circle class="plot-point" cx="400" cy="200" r="3"></circle>
            <circle class="plot-point" cx="416.7" cy="146.7" r="3"></circle>
            <circle class="plot-point" cx="466.7" cy="93.3" r="3"></circle>
            <circle class="plot-point" cx="550" cy="40" r="3"></circle>
            <text class="tick-label" x="470" y="88" text-anchor="middle">h(4)=2</text>
            <text class="tick-label" x="540" y="34" text-anchor="end">h(9)=3</text>
          </svg>
        `,
        notes: [
          'La fonction carré (à gauche) est paire : sa courbe est symétrique par rapport à l\'axe des ordonnées, avec un minimum $0$ en $x=0$.',
          'La fonction inverse (au centre) est impaire : ses deux branches sont symétriques par rapport à l\'origine, et $x=0$ est exclu du domaine.',
          'La fonction racine carrée (à droite) n\'existe que pour $x \\geq 0$ et croît sur tout son domaine.'
        ],
        reading: 'Chaque panneau utilise sa propre échelle : les trois fonctions ont des vitesses de croissance très différentes (le carré explose, l\'inverse s\'écrase près de $0$, la racine ralentit).',
        caption: 'Les trois fonctions de référence tracées point par point : carré $x^2$, inverse $1/x$ et racine $\\sqrt{x}$, avec les valeurs remarquables citées dans le cours.'
      },
      formulas: [
        '$\\sqrt{a\\cdot b}=\\sqrt{a}\\cdot\\sqrt{b}$ (pour $a,b\\ge 0$)',
        '$\\left(\\sqrt{a}\\right)^2 = a$ (pour $a\\ge 0$)',
        '$\\sqrt{a^2}=|a|$'
      ],
      recap: [
        'Fonction carré : parabole, paire, minimum $0$ en $x = 0$, décroissante puis croissante.',
        'Fonction inverse : hyperbole, impaire, décroissante sur chaque intervalle, jamais nulle, interdite en $0$.',
        'Fonction racine carrée : définie pour $x \\geq 0$, toujours croissante.',
        '$\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$ ✓ mais $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ ✗.'
      ],
      piege: '$\\sqrt{4+9} \\ne \\sqrt{4}+\\sqrt{9}$ : on ne peut pas séparer une somme sous un radical !'
    },
    quiz: [
      { q: 'Sur quel intervalle la fonction $x\\mapsto x^2$ est-elle décroissante ?', options: ['$[0;+\\infty[$', '$]-\\infty;0]$', '$\\mathbb{R}$', 'Elle est toujours croissante'], answer: 1, correction: '$x^2$ décroît sur $]-\\infty;0]$ et croît sur $[0;+\\infty[$. Son minimum est $0$.' },
      { q: 'Quel est le domaine de définition de $\\sqrt{x}$ ?', options: ['$\\mathbb{R}$', '$]0;+\\infty[$', '$[0;+\\infty[$', '$]-\\infty;0[$'], answer: 2, correction: 'On ne peut prendre la racine carrée que d\'un nombre positif ou nul : domaine $[0;+\\infty[$.' },
      { q: 'Un élève écrit $\\sqrt{9+16} = \\sqrt{9}+\\sqrt{16} = 3+4 = 7$. Quelle est son erreur ?', options: ['On ne peut pas séparer $\\sqrt{a+b}$ : ici $\\sqrt{9+16} = \\sqrt{25} = 5 \\neq 7$', 'Il a mal calculé $\\sqrt{9}$ et $\\sqrt{16}$', 'Il n\'y a pas d\'erreur, $\\sqrt{25} = 7$', 'La racine carrée ne s\'applique qu\'aux entiers impairs'], answer: 0, correction: '$\\sqrt{9+16} = \\sqrt{25} = 5$, pas $7$. La propriété $\\sqrt{a \\cdot b} = \\sqrt{a}\\cdot\\sqrt{b}$ est vraie pour un PRODUIT, mais $\\sqrt{a+b} \\neq \\sqrt{a}+\\sqrt{b}$ pour une SOMME.' },
      { q: 'Quel est le domaine de définition de $f(x) = \\sqrt{3 - x}$ ?', options: ['$]-\\infty;3]$', '$[3;+\\infty[$', '$\\mathbb{R}$', '$]0;3[$'], answer: 0, correction: 'Il faut $3 - x \\geq 0$, soit $x \\leq 3$. Le domaine est $]-\\infty;3]$. Attention : le signe de l\'inéquation s\'inverse quand l\'expression sous la racine est $a - x$ au lieu de $x - a$.' },
      { q: 'Comparer $(-3)^2$ et $-3^2$. Ces deux expressions sont-elles égales ?', options: ['Non : $(-3)^2 = 9$ mais $-3^2 = -(3^2) = -9$', 'Oui : les deux valent $9$', 'Oui : les deux valent $-9$', 'Non : $(-3)^2 = -9$ et $-3^2 = 9$'], answer: 0, correction: '$(-3)^2$ signifie « le carré de $-3$ » $= (-3) \\times (-3) = 9$. En revanche, $-3^2$ signifie « l\'opposé du carré de $3$ » $= -(3 \\times 3) = -9$. Les parenthèses changent tout ! C\'est un piège classique lors du calcul d\'images avec la fonction carré.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        /* BANQUE ÉLARGIE le 2026-09-13 (vague « manuel de référence »).

           MESURE DE DÉPART : 4 tâches pour 13 exercices retenus, alors que
           le chapitre porte sur TROIS fonctions de référence (carré, inverse,
           racine). Concrètement, la fonction inverse n'apparaissait que comme
           un terme accessoire dans la tâche « composition », et aucune tâche
           ne portait sur ses variations ni sur son signe. Un élève pouvait
           traiter toute la banque sans jamais raisonner sur $1/x$.

           DÉFAUT DE FOND CORRIGÉ ICI : la banque n'exerçait aucune lecture
           d'image sur les trois courbes, alors que c'est l'attendu central
           du chapitre (« connaître l'allure »). On ajoute quatre tâches, dont
           trois portent sur ce que ces fonctions FONT, et non sur des
           domaines de définition — qui relèvent plutôt du chapitre
           précédent. */
        const types = ['domaine', 'comparaison', 'composition',
                       'imageReference', 'variationsInverse', 'signeInverse', 'carreAntecedents'];
        const type = pick(types);

        /* Tâche AJOUTÉE — image par l'une des trois fonctions de référence.
           Les valeurs sont choisies pour tomber juste, afin que la question
           porte sur la FONCTION et non sur l'arrondi. */
        if (type === 'imageReference') {
          const familles = [
            { nom: 'carré', expr: 'x^2', calc: (x) => x * x, xs: [-6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7],
              ligne: (x) => `$f(${x < 0 ? '(' + x + ')' : x}) = ${x < 0 ? '(' + x + ')' : x}^2 = ${x * x}$` },
            /* Les antécédents de la fonction inverse sont choisis pour que
               1/x soit DÉCIMAL EXACT et court : les diviseurs de 10 et de
               100 uniquement. On peut alors écrire fr() avec un nombre de
               décimales fixe, sans aucun nettoyage de zéros.

               Défaut corrigé le 2026-09-13, signalé par
               scripts/check-decimal-notation.js : la version précédente
               faisait `fr(1/x, 4).replace(/0+$/, '')`, et ce rabotage des
               zéros pouvait manger l'accolade fermante du séparateur
               décimal, ce qui casse le rendu KaTeX. Mes propres tirages de
               contrôle n'avaient pas atteint le cas ; l'outil du projet, si.
               Leçon : ne jamais retoucher à la main la sortie de fr().

               (Le commentaire ne reproduit volontairement pas la séquence
               fautive : le vérificateur lit le FICHIER, pas seulement les
               chaînes produites, et la citer ici rouvrirait l'alerte.) */
            { nom: 'inverse', expr: '\\dfrac{1}{x}', calc: (x) => 1 / x, xs: [-5, -4, -2, 2, 4, 5, 10],
              /* Nombre de décimales exact pour chaque antécédent, en table
                 plutôt qu'en calcul : 1/2 = 0,5 (une décimale), 1/4 = 0,25
                 (deux), 1/5 = 0,2 (une), 1/10 = 0,1 (une). fr() reçoit donc
                 toujours le bon nombre et sa sortie n'est jamais retouchée. */
              decimales: { 2: 1, 4: 2, 5: 1, 10: 1 },
              ligne: function (x) { return `$f(${x}) = \\dfrac{1}{${x}} = ${fr(1 / x, this.decimales[Math.abs(x)])}$`; } },
            { nom: 'racine carrée', expr: '\\sqrt{x}', calc: (x) => Math.sqrt(x), xs: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100],
              ligne: (x) => `$f(${x}) = \\sqrt{${x}} = ${Math.sqrt(x)}$` }
          ];
          const f = pick(familles);
          const x = pick(f.xs);
          const y = f.calc(x);
          return {
            statement: `Soit $f$ la fonction <strong>${f.nom}</strong>, définie par $f(x) = ${f.expr}$.<br/><br/>Calcule $f(${x})$.`,
            answer: parseFloat(y.toFixed(4)),
            tolerance: 0.001,
            unit: '',
            hint: f.nom === 'carré'
              ? `Pense à parenthéser le nombre substitué : $(${x})^2$ et non $-${Math.abs(x)}^2$ si le nombre est négatif.`
              : `Applique directement la définition de la fonction ${f.nom} à $${x}$.`,
            solution: [
              `Image par la fonction ${f.nom} : on applique la définition à $${x}$`,
              f.ligne(x),
              f.nom === 'carré' && x < 0
                ? `Le carré d'un nombre négatif est <strong>positif</strong> : c'est pour cela que la parenthèse est indispensable.`
                : (f.nom === 'inverse' && x < 0
                   ? `L'inverse d'un nombre négatif est <strong>négatif</strong> : la fonction inverse ne change jamais le signe.`
                   : `La fonction ${f.nom} ne donne jamais de résultat négatif ici.`)
            ]
          };
        }

        /* Tâche AJOUTÉE — variations de la fonction inverse, sans calcul.
           C'est la propriété la plus contre-intuitive du chapitre : la
           fonction est décroissante sur CHACUN des deux intervalles, mais
           pas sur leur réunion. */
        if (type === 'variationsInverse') {
          const cas = pick([
            { a: 2, b: 5 }, { a: 3, b: 8 }, { a: 1, b: 4 },
            { a: -5, b: -2 }, { a: -8, b: -3 }, { a: -4, b: -1 }
          ]);
          const ia = 1 / cas.a, ib = 1 / cas.b;
          const plusGrand = ia > ib ? cas.a : cas.b;
          return {
            statement: `On considère la fonction <strong>inverse</strong> $f(x) = \\dfrac{1}{x}$, et les deux nombres $${cas.a}$ et $${cas.b}$.<br/><br/>Sans utiliser de calculatrice, et en t'appuyant sur les <strong>variations</strong> de la fonction inverse, dis lequel des deux a la plus grande image.<br/><br/>Donne ce nombre (celui dont l'image est la plus grande).`,
            answer: plusGrand,
            tolerance: 0,
            unit: '',
            hint: `Les deux nombres sont ${cas.a < 0 ? 'négatifs' : 'positifs'}, donc ils sont du <strong>même côté</strong> de zéro. Sur cet intervalle, la fonction inverse est décroissante : le plus petit nombre a la plus grande image.`,
            solution: [
              `Variations de la fonction inverse : $${cas.a} < ${cas.b}$, et les deux sont ${cas.a < 0 ? 'négatifs' : 'positifs'}`,
              `La fonction inverse est <strong>décroissante</strong> sur $${cas.a < 0 ? ']-\\infty\\,;\\,0[' : ']0\\,;\\,+\\infty['}$ : quand $x$ augmente, $\\dfrac{1}{x}$ diminue.`,
              `Donc $\\dfrac{1}{${cas.a}} > \\dfrac{1}{${cas.b}}$, et le nombre dont l'image est la plus grande est $${plusGrand}$.`,
              `Attention : ce raisonnement n'est valable que parce que les deux nombres sont du même côté de zéro. La fonction inverse n'est <strong>pas</strong> décroissante sur $\\mathbb{R}^*$ tout entier.`
            ]
          };
        }

        /* Tâche AJOUTÉE — signe de l'inverse, et le piège de la comparaison
           à travers zéro, qui est l'erreur la plus fréquente du chapitre. */
        if (type === 'signeInverse') {
          const neg = pick([-1, -2, -3, -4, -5, -8]);
          const pos = pick([2, 3, 4, 5, 6, 10]);
          return {
            statement: `On compare $\\dfrac{1}{${neg}}$ et $\\dfrac{1}{${pos}}$.<br/><br/>Un élève écrit : « $${neg} < ${pos}$, et la fonction inverse est décroissante, donc $\\dfrac{1}{${neg}} > \\dfrac{1}{${pos}}$ ».<br/><br/>Son raisonnement est-il correct ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
            answer: 0,
            tolerance: 0,
            unit: '',
            hint: `Regarde le <strong>signe</strong> des deux quotients avant tout raisonnement sur les variations. Les deux nombres de départ sont-ils du même côté de zéro ?`,
            solution: [
              `Signe de l'inverse : le raisonnement est <strong>incorrect</strong>`,
              `$\\dfrac{1}{${neg}}$ est <strong>négatif</strong> et $\\dfrac{1}{${pos}}$ est <strong>positif</strong>, donc $\\dfrac{1}{${neg}} < \\dfrac{1}{${pos}}$ : c'est l'inverse de ce que l'élève annonce.`,
              `L'erreur vient de la décroissance, qui n'est valable que sur $]-\\infty\\,;\\,0[$ et sur $]0\\,;\\,+\\infty[$ <strong>séparément</strong>. Ici les deux nombres encadrent zéro, donc la propriété ne s'applique pas.`,
              `Règle de sécurité : avant de comparer deux inverses, vérifie toujours qu'ils sont du même côté de zéro.`
            ]
          };
        }

        /* Tâche AJOUTÉE — les DEUX antécédents par la fonction carré, qui
           est la dissymétrie image / antécédent revue sur un cas précis. */
        if (type === 'carreAntecedents') {
          const r = pick([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
          const k = r * r;
          return {
            statement: `On cherche les <strong>antécédents</strong> de $${k}$ par la fonction carré, c'est-à-dire les nombres $x$ tels que $x^2 = ${k}$.<br/><br/><strong>1.</strong> Combien y en a-t-il ?<br/><strong>2.</strong> Quels sont-ils ?<br/><br/>Donne le plus grand des deux.`,
            answer: r,
            tolerance: 0,
            unit: '',
            hint: `Un carré vaut $${k}$ : cherche d'abord un nombre positif qui convient, puis demande-toi si un nombre négatif pourrait convenir aussi.`,
            solution: [
              `Antécédents par la fonction carré : je résous $x^2 = ${k}$`,
              `$${r}^2 = ${k}$, donc $${r}$ convient. Mais $(-${r})^2 = ${k}$ également, car le carré d'un nombre négatif est positif.`,
              `Il y a donc <strong>deux</strong> antécédents : $-${r}$ et $${r}$. Le plus grand est $${r}$.`,
              `C'est la dissymétrie entre image et antécédent : $${k}$ n'a qu'une image par la fonction carré, mais il a deux antécédents. Un nombre <strong>négatif</strong> n'en aurait aucun.`
            ]
          };
        }

        if (type === 'domaine') {
          const a = rand(2, 8);
          const b = rand(1, 5);
          const borne = parseFloat((b / a).toFixed(2));
          const borneExact = b % a === 0 ? (b / a) : borne;
          const contexts = [
            { f: `\\sqrt{${a}x - ${b}}`, cond: `${a}x - ${b} \\geq 0`, sol: `x \\geq \\frac{${b}}{${a}}`, borneType: 'inf' },
            { f: `\\sqrt{${b} - ${a}x}`, cond: `${b} - ${a}x \\geq 0`, sol: `x \\leq \\frac{${b}}{${a}}`, borneType: 'sup' }
          ];
          const ctx = pick(contexts);
          return {
            statement: `Déterminer le domaine de définition de $f(x) = ${ctx.f}$.<br/><br/>Donne la <strong>borne</strong> de l'intervalle solution (sous forme décimale si nécessaire).`,
            answer: borneExact,
            tolerance: 0.01,
            unit: '',
            hint: `Pour que $\\sqrt{\\ldots}$ existe, il faut que l'expression sous la racine soit $\\geq 0$ : ${ctx.cond}.`,
            solution: [
              `Condition : ${ctx.cond}`,
              `${ctx.sol}$${b % a === 0 ? ` = ${b / a}` : ` \\approx ${fr(borne)}`}$`,
              `Domaine : $${ctx.borneType === 'inf' ? `[${fr(borneExact)};+\\infty[` : `]-\\infty;${fr(borneExact)}]`}$`
            ]
          };
        } else if (type === 'comparaison') {
          const vals = [
            { a: -5, b: -2 },
            { a: -7, b: -3 },
            { a: -4, b: -1 },
            { a: -6, b: -3 }
          ];
          const v = pick(vals);
          const a2 = v.a * v.a;
          const b2 = v.b * v.b;
          return {
            statement: `Comparer $${v.a}^2$ et $${v.b}^2$ sans calculatrice, en utilisant les variations de la fonction carré.<br/><br/>Lequel est le plus grand ? Donne sa valeur.`,
            answer: a2,
            tolerance: 0,
            unit: '',
            hint: `$${v.a}$ et $${v.b}$ sont négatifs. La fonction carré est <strong>décroissante</strong> sur $]-\\infty;0]$ : si $a < b < 0$, alors $a^2 > b^2$.`,
            solution: [
              `$${v.a} < ${v.b} < 0$ (les deux sont négatifs)`,
              `La fonction carré est décroissante sur $]-\\infty;0]$`,
              `Donc $${v.a}^2 > ${v.b}^2$, soit $${a2} > ${b2}$`,
              `Le plus grand est $${a2}$.`
            ]
          };
        } else {
          const a = rand(2, 5);
          const b = rand(1, 8);
          const xval = rand(2, 6);
          const innerVal = a * xval - b;
          if (innerVal <= 0) {
            return {
              statement: `Soit $f(x) = \\sqrt{2x + 1}$. Calculer $f(4)$.`,
              answer: 3,
              tolerance: 0,
              unit: '',
              hint: `$f(4) = \\sqrt{2 \\times 4 + 1} = \\sqrt{9}$.`,
              solution: [`$f(4) = \\sqrt{8 + 1} = \\sqrt{9} = 3$`]
            };
          }
          const sqrtVal = parseFloat(Math.sqrt(innerVal).toFixed(2));
          return {
            statement: `Soit $g(x) = \\sqrt{${a}x - ${b}} + \\frac{1}{x}$.<br/><br/><strong>1.</strong> Vérifier que $x = ${xval}$ appartient au domaine de définition.<br/><strong>2.</strong> Calculer $g(${xval})$ (arrondi au centième).<br/><br/>Donne la valeur de $g(${xval})$.`,
            answer: parseFloat((sqrtVal + 1/xval).toFixed(2)),
            tolerance: 0.05,
            unit: '',
            hint: `Domaine : $${a}x - ${b} \\geq 0$ (soit $x \\geq ${fr(b/a, 1)}$) ET $x \\neq 0$. Puis $g(${xval}) = \\sqrt{${innerVal}} + \\frac{1}{${xval}}$.`,
            solution: [
              `Condition racine : $${a} \\times ${xval} - ${b} = ${innerVal} \\geq 0$ ✓ ; $x = ${xval} \\neq 0$ ✓`,
              `$g(${xval}) = \\sqrt{${innerVal}} + \\frac{1}{${xval}} \\approx ${fr(sqrtVal)} + ${fr(1/xval, 2)} \\approx ${fr(sqrtVal + 1/xval, 2)}$`
            ]
          };
        }
      }
    },
    probleme: {
      context: 'En physique, la période d\'un pendule simple est $T = 2\\pi\\sqrt{\\frac{L}{g}}$, où $L$ est la longueur du fil (en m) et $g = 9{,}81$ m/s². Un horloger veut fabriquer une horloge dont le pendule bat exactement la seconde ($T = 1$ s).',
      tasks: [
        'Exprimer $L$ en fonction de $T$ et $g$.',
        'Calculer la longueur $L$ nécessaire pour $T = 1$ s (arrondir au cm).',
        'Si l\'on double la longueur du fil, par combien est multipliée la période ? Pourquoi ?'
      ],
      solutions: [
        '$T = 2\\pi\\sqrt{L/g} \\Rightarrow T^2 = 4\\pi^2 \\cdot L/g \\Rightarrow L = \\frac{gT^2}{4\\pi^2}$.',
        '$L = \\frac{9{,}81 \\times 1^2}{4\\pi^2} = \\frac{9{,}81}{39{,}48} \\approx 0{,}25$ m $= 25$ cm.',
        'Si $L\' = 2L$ : $T\' = 2\\pi\\sqrt{2L/g} = \\sqrt{2} \\cdot 2\\pi\\sqrt{L/g} = \\sqrt{2} \\cdot T \\approx 1{,}41 \\cdot T$. La période est multipliée par $\\sqrt{2}$ (pas par $2$) car $T$ dépend de $\\sqrt{L}$.'
      ],
      finalAnswer: '$L \\approx 25$ cm pour $T = 1$ s. Doubler $L$ multiplie $T$ par $\\sqrt{2} \\approx 1{,}41$.'
    },

    evaluation: {
      title: 'Évaluation — Fonctions de référence',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer $\\sqrt{81}$.',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: '',
          points: 1,
          correction: '$\\sqrt{81} = 9$ car $9^2 = 81$.'
        },
        {
          statement: 'Sur quel intervalle la fonction $x \\mapsto x^2$ est-elle croissante ?',
          type: 'multiple-choice',
          options: ['$]-\\infty ; 0]$', '$[0 ; +\\infty[$', '$\\mathbb{R}$', '$]-\\infty ; +\\infty[$'],
          answer: 1,
          points: 2,
          correction: 'La fonction carré est décroissante sur $]-\\infty ; 0]$ et croissante sur $[0 ; +\\infty[$. Son minimum est $0$, atteint en $x = 0$.'
        },
        {
          /* Q3 RÉÉCRITE le 2026-09-13. L'ancienne, « Calculer
             $\sqrt{4 \times 25}$ », était une application directe de plus,
             dans un devoir qui en comptait déjà trois. La nouvelle donne le
             résultat et demande de JUSTIFIER une égalité remarquée, ce qui
             mobilise le langage mathématique sans changer la réponse ($10$).
             Passage de « calculer » à « communiquer ». */
          statement: 'Amine remarque que $\\sqrt{4 \\times 25}$ et $\\sqrt{4} \\times \\sqrt{25}$ donnent le même résultat.<br/><br/>Vérifie-le en calculant les deux expressions, puis donne leur valeur commune.',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Les deux expressions valent bien la même chose : $\\sqrt{4 \\times 25} = \\sqrt{100} = 10$, et $\\sqrt{4} \\times \\sqrt{25} = 2 \\times 5 = 10$.<br/><br/>Amine a donc raison, et ce n\'est pas un hasard : pour deux nombres positifs, $\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}$. La racine carrée « traverse » une multiplication.<br/><br/><strong>Attention cependant</strong> : cela ne marche <strong>pas</strong> avec une addition. $\\sqrt{9 + 16} = \\sqrt{25} = 5$, alors que $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$.'
        },
        {
          statement: 'Quel est le domaine de définition de $f(x) = \\dfrac{1}{x-2}$ ?',
          type: 'multiple-choice',
          options: ['$\\mathbb{R}$', '$\\mathbb{R} \\setminus \\{2\\}$', '$\\mathbb{R} \\setminus \\{0\\}$', '$]2 ; +\\infty[$'],
          answer: 1,
          points: 2,
          correction: 'On ne peut pas diviser par $0$, donc $x - 2 \\neq 0$, soit $x \\neq 2$. Le domaine est $\\mathbb{R} \\setminus \\{2\\}$.'
        },
        {
          statement: 'Simplifier $\\sqrt{(-5)^2}$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: '$\\sqrt{(-5)^2} = \\sqrt{25} = 5$. Attention : $\\sqrt{a^2} = |a|$, pas $a$. Ici $|{-5}| = 5$.'
        }
      ]
    }
  });
