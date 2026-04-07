/* =========================================================
   Spark Learning – data/si-2nde/si-2nde-programmation.js
   Extrait de si-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-2nde-programmation',
    level: 2, subject: 'si',
    icon: '💻',
    title: 'Initiation à la programmation (Arduino/Python)',
    subtitle: 'Variables, boucles, conditions, entrées/sorties numériques et analogiques',
    keywords: ['Variable', 'Boucle', 'Condition', 'Fonction', 'Arduino'],
    physics: 'La programmation est au cœur des systèmes embarqués : elle permet de commander des robots, des drones, des objets connectés et des automates industriels. L\'Arduino est la plateforme de référence pour l\'apprentissage.',

    cours: {
      intro: 'La programmation permet de donner des instructions à un microcontrôleur pour qu\'il exécute des tâches automatiquement. L\'<strong>Arduino Uno</strong> (microcontrôleur ATmega328P) est la carte la plus utilisée en enseignement de SI.<br/><br/>Un programme Arduino comporte toujours deux fonctions obligatoires :<br/>— <code>void setup()</code> : exécutée une seule fois au démarrage (configuration des broches) ;<br/>— <code>void loop()</code> : exécutée en boucle infinie (logique principale).<br/><br/>Les <strong>briques fondamentales</strong> de la programmation sont :<br/>— les <strong>variables</strong> (stockent des données : <code>int</code>, <code>float</code>, <code>bool</code>) ;<br/>— les <strong>conditions</strong> (<code>if/else</code> : exécutent un bloc selon un test) ;<br/>— les <strong>boucles</strong> (<code>for</code>, <code>while</code> : répètent un bloc).<br/><br/>Fonctions d\'entrée/sortie essentielles :<br/>— <code>digitalRead(pin)</code> : lit un état binaire ($0$ ou $1$) ;<br/>— <code>digitalWrite(pin, HIGH/LOW)</code> : écrit un état binaire ;<br/>— <code>analogRead(pin)</code> : lit une tension analogique (retourne $0$ à $1023$).',
      definitions: [
        { term: 'Variable', def: 'Espace mémoire nommé qui stocke une valeur modifiable. Types courants : <code>int</code> (entier), <code>float</code> (décimal), <code>bool</code> (vrai/faux). Exemple : <code>int compteur = 0;</code>' },
        { term: 'Condition (if/else)', def: 'Exécute un bloc si la condition est vraie, un autre sinon. Exemple : <code>if (analogRead(A0) > 500) { digitalWrite(13, HIGH); } else { digitalWrite(13, LOW); }</code>' },
        { term: 'Boucle for', def: 'Répète un bloc un nombre connu de fois. Syntaxe : <code>for (init; condition; incrément) { ... }</code>. Exemple : <code>for (int i = 0; i < 10; i++)</code> exécute le bloc $10$ fois.' },
        { term: 'Boucle while', def: 'Répète un bloc tant qu\'une condition est vraie. Le nombre de répétitions n\'est pas connu à l\'avance. Exemple : <code>while (digitalRead(2) == LOW) { /* attendre */ }</code>' }
      ],
      method: {
        title: 'Analyser un programme en 3 étapes',
        steps: [
          '<strong>Identifier les variables et leurs valeurs initiales</strong> : Repérer chaque déclaration et noter la valeur de départ. Suivre chaque modification au fil du programme.<br/>Exemple : <code>int x = 5;</code> → $x$ commence à $5$. Si on écrit <code>x = x + 3;</code>, alors $x$ passe à $8$.',
          '<strong>Dérouler les boucles itération par itération</strong> : Pour <code>for (i = 0; i < n; i++)</code>, le bloc s\'exécute $n$ fois. Noter la valeur de chaque variable à chaque itération.<br/>Exemple : <code>int s = 0; for (int i = 1; i <= 3; i++) { s = s + i; }</code><br/>Itération 1 : $s = 0 + 1 = 1$. Itération 2 : $s = 1 + 2 = 3$. Itération 3 : $s = 3 + 3 = 6$.',
          '<strong>Évaluer les conditions avec les valeurs courantes</strong> : Pour chaque <code>if</code>, tester la condition avec les valeurs du moment. Si vraie → bloc <code>if</code> ; sinon → bloc <code>else</code>.<br/>Exemple : Si $s = 6$ et la condition est <code>if (s > 5)</code>, la condition est vraie → on exécute le bloc <code>if</code>.'
        ]
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Type</th><th style="border:1px solid var(--border);padding:8px">Arduino (C++)</th><th style="border:1px solid var(--border);padding:8px">Python</th><th style="border:1px solid var(--border);padding:8px">Exemple de valeur</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Entier</strong></td><td style="border:1px solid var(--border);padding:8px"><code>int x = 10;</code></td><td style="border:1px solid var(--border);padding:8px"><code>x = 10</code></td><td style="border:1px solid var(--border);padding:8px">$10$, $-3$, $1024$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Décimal</strong></td><td style="border:1px solid var(--border);padding:8px"><code>float t = 3.14;</code></td><td style="border:1px solid var(--border);padding:8px"><code>t = 3.14</code></td><td style="border:1px solid var(--border);padding:8px">$3{,}14$, $0{,}5$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Booléen</strong></td><td style="border:1px solid var(--border);padding:8px"><code>bool etat = true;</code></td><td style="border:1px solid var(--border);padding:8px"><code>etat = True</code></td><td style="border:1px solid var(--border);padding:8px"><code>true</code> / <code>false</code></td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Chaîne</strong></td><td style="border:1px solid var(--border);padding:8px"><code>String msg = "OK";</code></td><td style="border:1px solid var(--border);padding:8px"><code>msg = "OK"</code></td><td style="border:1px solid var(--border);padding:8px"><code>"Bonjour"</code></td></tr></table>',
      example: {
        statement: 'On considère le programme Arduino suivant. Quelle est la valeur finale de <code>s</code> ?\n\n<code>int s = 0;</code>\n<code>for (int i = 1; i <= 4; i++) {</code>\n<code>  s = s + i * i;</code>\n<code>}</code>',
        steps: [
          'Initialisation : $s = 0$.',
          'Itération $i = 1$ : $s = 0 + 1^2 = 0 + 1 = 1$.',
          'Itération $i = 2$ : $s = 1 + 2^2 = 1 + 4 = 5$.',
          'Itération $i = 3$ : $s = 5 + 3^2 = 5 + 9 = 14$.',
          'Itération $i = 4$ : $s = 14 + 4^2 = 14 + 16 = 30$.',
          'La boucle s\'arrête car $i = 5 > 4$. Valeur finale : $s = 30 = 1^2 + 2^2 + 3^2 + 4^2$.'
        ],
        answer: 'La valeur finale de $s$ est $30$. C\'est la somme des carrés : $1^2 + 2^2 + 3^2 + 4^2 = 30$.'
      },
      formulas: [
        'Boucle <code>for (i = a; i < b; i++)</code> → nombre d\'itérations $= b - a$',
        'Boucle <code>for (i = a; i <= b; i++)</code> → nombre d\'itérations $= b - a + 1$',
        'Somme des entiers de $1$ à $n$ : $S = \\dfrac{n(n+1)}{2}$',
        'Après $k$ itérations d\'un incrément constant $+c$ : valeur $= \\text{init} + k \\times c$',
        '<code>analogRead()</code> retourne un entier entre $0$ et $1023$ (CAN $10$ bits)'
      ],
      recap: [
        'Un programme Arduino est structuré en <code>setup()</code> (initialisation) et <code>loop()</code> (boucle infinie).',
        '<code>for (i = 0; i < n; i++)</code> s\'exécute exactement $n$ fois. Attention : <code>< n</code> et <code><= n</code> ne donnent pas le même résultat !',
        'Pour trouver la valeur finale d\'une variable, dérouler le programme itération par itération.',
        '<code>digitalRead/Write</code> = binaire ($0$/$1$). <code>analogRead</code> = valeur $0$–$1023$.'
      ],
      piege: 'Attention à la borne de la boucle ! <code>for (i = 0; i < 5; ...)</code> fait $5$ itérations ($i = 0, 1, 2, 3, 4$), tandis que <code>for (i = 0; i <= 5; ...)</code> en fait $6$ ($i = 0, 1, 2, 3, 4, 5$). La différence entre <code><</code> et <code><=</code> change le résultat — c\'est une source d\'erreur très fréquente en programmation !'
    },

    quiz: [
      {
        q: 'On exécute : <code>int x = 2; for (int i = 0; i < 5; i++) { x = x * 2; }</code>. Quelle est la valeur finale de <code>x</code> ?',
        options: [
          '$20$ (car $2 \\times 2 \\times 5 = 20$)',
          '$64$ (car $x = 2 \\times 2^5 = 64$)',
          '$32$ (car $x = 2^5 = 32$)',
          '$12$ (car $x = 2 + 2 \\times 5 = 12$)'
        ],
        answer: 1,
        correction: '$x = 2$. À chaque itération, $x$ est multiplié par $2$. Après $5$ itérations : $x = 2 \\times 2^5 = 2^6 = 64$. Déroulons : $2 \\to 4 \\to 8 \\to 16 \\to 32 \\to 64$. Attention : le résultat n\'est pas $2^5 = 32$ car la valeur initiale est déjà $2$.'
      },
      {
        q: 'Sur un Arduino Uno, on écrit <code>int val = analogRead(A0);</code>. Le capteur délivre $2{,}5$ V. Quelle valeur contient <code>val</code> ?',
        options: [
          '$val = 2{,}5$',
          '$val = 250$',
          '$val \\approx 512$',
          '$val = 1023$'
        ],
        answer: 2,
        correction: 'Le CAN $10$ bits convertit la plage $0$–$5$ V en valeurs $0$–$1023$. Pour $V = 2{,}5$ V : $val = \\dfrac{2{,}5}{5} \\times 1024 \\approx 512$. Comme $2{,}5$ V est la moitié de $5$ V, on obtient la moitié de $1024$.'
      },
      {
        q: 'On exécute : <code>int c = 0; for (int i = 1; i <= 100; i++) { if (i % 2 == 0) { c++; } }</code>. Quelle est la valeur finale de <code>c</code> ?',
        options: [
          '$100$',
          '$50$',
          '$99$',
          '$51$'
        ],
        answer: 1,
        correction: 'La condition <code>i % 2 == 0</code> teste si $i$ est pair. Parmi les entiers de $1$ à $100$, il y a exactement $50$ nombres pairs ($2, 4, 6, \\ldots, 100$). Donc <code>c</code> est incrémenté $50$ fois : $c = 50$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var initVal = rand(0, 5);
        var increment = rand(1, 5);
        var nbIter = rand(3, 8);
        var borneType = pick(['<', '<=']);
        var borne, realIter;
        if (borneType === '<') {
          borne = nbIter;
          realIter = nbIter;
        } else {
          borne = nbIter - 1;
          realIter = nbIter;
        }
        var finalVal = initVal + realIter * increment;

        var condStr = borneType === '<' ? 'i < ' + borne : 'i <= ' + borne;

        var contexte = pick([
          'Un programme Arduino compte les impulsions d\'un capteur',
          'Un robot éducatif exécute une séquence de mouvements',
          'Un système de tri automatique traite des pièces',
          'Un programme de surveillance mesure la température'
        ]);

        return {
          statement: contexte + '. On exécute le programme suivant :\n\n<code>int s = ' + initVal + ';</code>\n<code>for (int i = 0; ' + condStr + '; i++) {</code>\n<code>  s = s + ' + increment + ';</code>\n<code>}</code>\n\nQuelle est la valeur finale de <code>s</code> ?',
          answer: finalVal,
          tolerance: 0,
          unit: '',
          hint: 'Détermine d\'abord le nombre d\'itérations. Avec la condition <code>' + condStr + '</code>, $i$ va de $0$ à $' + (realIter - 1) + '$, soit $' + realIter + '$ itérations. Puis : $s_{\\text{final}} = s_{\\text{init}} + \\text{nb\\_itérations} \\times \\text{incrément}$.',
          solution: [
            'Analyse de la boucle : <code>' + condStr + '</code> → $i$ prend les valeurs $0, 1, 2, \\ldots, ' + (realIter - 1) + '$.',
            'Nombre d\'itérations : $' + realIter + '$ (car $i$ va de $0$ à $' + (realIter - 1) + '$).',
            'À chaque itération, <code>s</code> augmente de $' + increment + '$.',
            'Valeur finale : $s = ' + initVal + ' + ' + realIter + ' \\times ' + increment + ' = ' + initVal + ' + ' + (realIter * increment) + ' = ' + finalVal + '$.'
          ]
        };
      }
    },

    probleme: {
      context: 'Un élève programme un Arduino Uno pour surveiller la luminosité d\'une salle de classe à l\'aide d\'une photorésistance (LDR) branchée sur l\'entrée analogique <code>A0</code> via un pont diviseur. Le programme doit allumer une LED (broche $13$) lorsque la luminosité est faible (valeur lue $< 300$) et l\'éteindre sinon. De plus, le programme doit compter le nombre de fois que la LED a été allumée sur une série de $50$ mesures, avec un intervalle de $200$ ms entre chaque mesure.',
      tasks: [
        'Écrire le programme Arduino complet : déclaration des variables dans <code>setup()</code>, lecture du capteur avec <code>analogRead(A0)</code>, condition d\'allumage avec <code>digitalWrite(13, HIGH/LOW)</code>, et comptage dans <code>loop()</code>.',
        'Si, sur les $50$ mesures, le capteur renvoie $18$ fois une valeur inférieure à $300$, quelle est la valeur finale du compteur ?',
        'Si on remplace la condition <code>< 300</code> par <code><= 300</code> et que $5$ mesures valent exactement $300$, combien de fois la LED est-elle allumée au total (sachant que $18$ mesures sont strictement inférieures à $300$) ?'
      ],
      solutions: [
        '<code>void setup() { pinMode(13, OUTPUT); }</code>\n<code>void loop() {</code>\n<code>  int compteur = 0;</code>\n<code>  for (int i = 0; i < 50; i++) {</code>\n<code>    int val = analogRead(A0);</code>\n<code>    if (val < 300) {</code>\n<code>      digitalWrite(13, HIGH);</code>\n<code>      compteur++;</code>\n<code>    } else {</code>\n<code>      digitalWrite(13, LOW);</code>\n<code>    }</code>\n<code>    delay(200);</code>\n<code>  }</code>\n<code>}</code>',
        'Le compteur est incrémenté à chaque mesure inférieure à $300$. Sur $50$ mesures, $18$ satisfont la condition <code>val < 300</code>. Donc compteur $= 18$.',
        'Avec <code><= 300</code>, les $18$ mesures strictement inférieures à $300$ <strong>et</strong> les $5$ mesures égales à $300$ déclenchent l\'allumage. Total : $18 + 5 = 23$ fois. La différence entre <code><</code> et <code><=</code> modifie le comportement du système.'
      ],
      finalAnswer: 'Compteur $= 18$ avec <code><</code>, et $23$ avec <code><=</code>. Un seul caractère (<code>=</code>) change le comportement de $5$ mesures !'
    },

    evaluation: {
      title: 'Évaluation — Initiation à la programmation',
      duration: '20 min',
      questions: [
        {
          statement: 'On exécute : <code>int s = 0; for (int i = 1; i <= 10; i++) { s = s + i; }</code>. Quelle est la valeur finale de <code>s</code> ?',
          type: 'numeric',
          answer: 55,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'La boucle calcule $s = 1 + 2 + 3 + \\cdots + 10 = \\dfrac{10 \\times 11}{2} = 55$. On peut vérifier en déroulant : $0 \\to 1 \\to 3 \\to 6 \\to 10 \\to 15 \\to 21 \\to 28 \\to 36 \\to 45 \\to 55$.'
        },
        {
          statement: 'On exécute : <code>int x = 100; for (int i = 0; i < 5; i++) { x = x - 7; }</code>. Quelle est la valeur finale de <code>x</code> ?',
          type: 'numeric',
          answer: 65,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$5$ itérations, chaque fois $x$ diminue de $7$. Formule directe : $x = 100 - 5 \\times 7 = 100 - 35 = 65$. Vérification par déroulement : $100 \\to 93 \\to 86 \\to 79 \\to 72 \\to 65$.'
        },
        {
          statement: 'Quelle fonction Arduino permet de lire l\'état d\'un bouton-poussoir branché sur la broche numérique $2$ ?',
          type: 'multiple-choice',
          options: [
            '<code>analogRead(2)</code>',
            '<code>analogWrite(2, HIGH)</code>',
            '<code>digitalRead(2)</code>',
            '<code>Serial.read()</code>'
          ],
          answer: 2,
          points: 2,
          correction: 'Un bouton-poussoir produit un signal binaire ($0$ ou $1$). On utilise <code>digitalRead(2)</code> pour lire un état numérique. <code>analogRead()</code> est réservé aux entrées analogiques (A0-A5). <code>analogWrite()</code> produit un signal PWM en <strong>sortie</strong>.'
        },
        {
          statement: 'On exécute : <code>int p = 1; for (int i = 0; i < 4; i++) { p = p * 3; }</code>. Quelle est la valeur finale de <code>p</code> ?',
          type: 'numeric',
          answer: 81,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$p = 1$. Après $4$ multiplications par $3$ : $p = 1 \\times 3^4 = 81$. Déroulement : $1 \\to 3 \\to 9 \\to 27 \\to 81$.'
        },
        {
          statement: 'Un Arduino Uno exécute <code>int val = analogRead(A0);</code> alors que le capteur délivre $3{,}7$ V (plage $0$–$5$ V, CAN $10$ bits). Quelle valeur contient <code>val</code> (arrondie à l\'entier) ?',
          type: 'numeric',
          answer: 758,
          tolerance: 2,
          unit: '',
          points: 2,
          correction: '$q = \\dfrac{5}{1024} \\approx 0{,}00488$ V. $val = \\left\\lfloor \\dfrac{3{,}7}{0{,}00488} \\right\\rfloor = \\lfloor 757{,}8 \\rfloor \\approx 758$. On peut aussi raisonner par proportion : $\\dfrac{3{,}7}{5} \\times 1024 \\approx 758$.'
        }
      ]
    }
  });
