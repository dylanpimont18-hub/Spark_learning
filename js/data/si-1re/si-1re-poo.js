/* =========================================================
   Spark Learning – data/si-1re/si-1re-poo.js
   Extrait de si-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-1re-poo',
    level: 2, subject: 'si',
    icon: '🐍',
    title: 'Programmation orientée objet (Python)',
    subtitle: 'Classes, objets, attributs, méthodes, héritage',
    keywords: ['Classe', 'Objet', 'Attribut', 'Méthode', 'Héritage', 'Python'],
    physics: 'La POO est utilisée pour modéliser et simuler des systèmes techniques en Python : robots, capteurs, actionneurs. Chaque composant physique peut être représenté par un objet avec ses propriétés et comportements.',

    cours: {
      intro: 'La <strong>Programmation Orientée Objet</strong> (POO) organise le code autour d\'<strong>objets</strong> plutôt que de fonctions isolées.<br/><br/>Un objet est une <strong>instance</strong> d\'une <strong>classe</strong>. La classe est le plan de construction : elle définit les <strong>attributs</strong> (données) et les <strong>méthodes</strong> (fonctions).<br/><br/>Exemple concret :<br/><code>class Moteur:<br/>&nbsp;&nbsp;def __init__(self, puissance, vitesse):<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.puissance = puissance<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.vitesse = vitesse<br/>&nbsp;&nbsp;def demarrer(self):<br/>&nbsp;&nbsp;&nbsp;&nbsp;print("Moteur en marche")</code><br/><br/>Le constructeur <code>__init__(self, ...)</code> initialise les attributs lors de la création. Le mot-clé <code>self</code> fait référence à l\'objet courant.<br/><br/>L\'<strong>héritage</strong> permet de créer une classe fille qui réutilise les attributs et méthodes d\'une classe mère via <code>super().__init__(...)</code>, tout en ajoutant ses propres spécificités.',
      definitions: [
        { term: 'Classe', def: 'Modèle (plan) définissant attributs et méthodes d\'un type d\'objet. Syntaxe : <code>class NomClasse:</code>.' },
        { term: 'Objet (instance)', def: 'Entité concrète créée à partir d\'une classe, avec ses propres valeurs d\'attributs. Syntaxe : <code>obj = NomClasse(arg1, arg2)</code>.' },
        { term: 'Attribut', def: 'Variable rattachée à un objet, définie dans <code>__init__</code> avec <code>self.nom = valeur</code>. Chaque objet a ses propres valeurs.' },
        { term: 'Héritage', def: 'Mécanisme par lequel une classe fille hérite des attributs et méthodes d\'une classe mère. Syntaxe : <code>class Fille(Mere):</code> avec <code>super().__init__(...)</code> dans le constructeur.' }
      ],
      method: {
        title: 'Créer et utiliser une classe en Python',
        steps: [
          '<strong>Classe et constructeur</strong> : Étape 1 — Définir la classe et le constructeur :<br/><code>class NomClasse:</code><br/><code>&nbsp;&nbsp;def __init__(self, param1, param2):</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;self.attribut1 = param1</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;self.attribut2 = param2</code>',
          '<strong>Méthodes</strong> : Étape 2 — Définir les méthodes (fonctions de la classe) :<br/><code>&nbsp;&nbsp;def ma_methode(self, arg):</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;self.attribut1 += arg</code><br/>Toujours <code>self</code> en premier paramètre pour accéder aux attributs.',
          '<strong>Instanciation et utilisation</strong> : Étape 3 — Instancier et utiliser :<br/><code>obj = NomClasse(val1, val2)</code> crée un objet.<br/><code>obj.ma_methode(5)</code> appelle la méthode sur cet objet.',
          '<strong>Héritage</strong> : Étape 4 — Héritage (si nécessaire) :<br/><code>class Fille(Mere):</code><br/><code>&nbsp;&nbsp;def __init__(self, param_mere, param_fille):</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(param_mere)</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;self.nouveau_attr = param_fille</code>'
        ]
      },
      example: {
        statement: 'Créer une classe <code>Reservoir</code> avec un attribut <code>volume</code> (litres) et une méthode <code>remplir(quantite)</code>. Déterminer le volume après deux remplissages.',
        steps: [
          'Définition : <code>class Reservoir:</code> avec <code>def __init__(self, volume_initial): self.volume = volume_initial</code>.',
          'Méthode : <code>def remplir(self, quantite): self.volume += quantite</code>.',
          'Utilisation : <code>r = Reservoir(10)</code> → <code>r.volume = 10</code>.',
          '<code>r.remplir(5)</code> → <code>r.volume = 15</code>. Puis <code>r.remplir(3)</code> → <code>r.volume = 18</code>.'
        ],
        answer: 'Après les deux remplissages, <code>r.volume = 18</code> litres.'
      },
      diagram: {
        theme: 'si',
        kicker: 'Diagramme de classes UML',
        title: 'Héritage : Capteur → CapteurAlarme',
        description: 'La classe <strong>CapteurAlarme</strong> hérite de la classe <strong>Capteur</strong> : elle réutilise ses attributs et méthodes, et en ajoute de nouveaux.<br/><br/>La flèche à tête triangulaire <strong>creuse</strong> pointe toujours vers la <strong>classe mère</strong>, jamais vers la classe fille.',
        svg: `
          <svg viewBox="0 0 340 385" role="img" aria-labelledby="poo-uml-title poo-uml-desc">
            <title id="poo-uml-title">Diagramme de classes UML : heritage Capteur / CapteurAlarme</title>
            <desc id="poo-uml-desc">Deux classes UML reliees par une fleche d'heritage a tete triangulaire creuse pointant vers le haut, de CapteurAlarme (classe fille, en bas) vers Capteur (classe mere, en haut). La classe Capteur possede les attributs nom (str), unite (str) et valeur (float initialise a 0), et les methodes constructeur, mesurer(v) et afficher(). La classe CapteurAlarme ajoute l'attribut seuil (float) et la methode alarme(), en plus de son propre constructeur qui appelle celui de la classe mere via super().</desc>

            <defs>
              <marker id="uml-generalization-poo" viewBox="0 0 20 20" refX="18" refY="10" markerWidth="18" markerHeight="18" markerUnits="userSpaceOnUse" orient="auto">
                <path class="frame-line" d="M0,0 L20,10 L0,20 z" fill="var(--bg-card)"></path>
              </marker>
            </defs>

            <!-- Classe mère : Capteur -->
            <rect class="frame-line" x="60" y="20" width="220" height="30" fill="none"></rect>
            <rect class="frame-line" x="60" y="50" width="220" height="56" fill="none"></rect>
            <rect class="frame-line" x="60" y="106" width="220" height="56" fill="none"></rect>
            <text class="annotation-label" x="170" y="39" text-anchor="middle">Capteur</text>
            <text class="label-soft" x="70" y="68">- nom : str</text>
            <text class="label-soft" x="70" y="84">- unite : str</text>
            <text class="label-soft" x="70" y="100">- valeur : float = 0</text>
            <text class="label-soft" x="70" y="124">+ __init__(nom, unite)</text>
            <text class="label-soft" x="70" y="140">+ mesurer(v)</text>
            <text class="label-soft" x="70" y="156">+ afficher()</text>

            <!-- Flèche de généralisation (héritage), tête creuse pointant vers Capteur -->
            <line class="frame-line" x1="170" y1="252" x2="170" y2="162" marker-end="url(#uml-generalization-poo)"></line>
            <text class="label-soft" x="185" y="212">hérite de</text>

            <!-- Classe fille : CapteurAlarme -->
            <rect class="frame-line" x="60" y="252" width="220" height="30" fill="none"></rect>
            <rect class="frame-line" x="60" y="282" width="220" height="32" fill="none"></rect>
            <rect class="frame-line" x="60" y="314" width="220" height="48" fill="none"></rect>
            <text class="annotation-label" x="170" y="271" text-anchor="middle">CapteurAlarme</text>
            <text class="label-soft" x="70" y="302">- seuil : float</text>
            <text class="label-soft" x="70" y="332">+ __init__(nom, unite, seuil)</text>
            <text class="label-soft" x="70" y="348">+ alarme()</text>
          </svg>
        `,
        notes: [
          '<strong>Capteur</strong> (classe mère) : attributs <code>nom</code>, <code>unite</code>, <code>valeur</code> ; méthodes <code>__init__</code>, <code>mesurer(v)</code>, <code>afficher()</code>.',
          '<strong>CapteurAlarme</strong> (classe fille) : ajoute l\'attribut <code>seuil</code> et la méthode <code>alarme()</code>, tout en héritant du reste via <code>super().__init__(...)</code>.',
          'La flèche à tête <strong>triangulaire creuse</strong> (notation UML de généralisation) pointe de la classe fille vers la classe mère.'
        ],
        reading: 'Lis le diagramme de bas en haut : la classe fille <strong>CapteurAlarme</strong> hérite de tout ce que possède <strong>Capteur</strong>, et lui ajoute son propre attribut et sa propre méthode.',
        caption: 'Diagramme de classes UML de l\'exemple du cours : héritage entre <code>Capteur</code> et <code>CapteurAlarme</code>.'
      },
      formulas: [
        '<code>class NomClasse:</code> — déclaration d\'une classe',
        '<code>def __init__(self, ...):</code> — constructeur (initialise les attributs)',
        '<code>self.attribut = valeur</code> — définition d\'un attribut d\'instance',
        '<code>obj = NomClasse(...)</code> — instanciation (création d\'un objet)',
        '<code>class Fille(Mere):</code> + <code>super().__init__(...)</code> — héritage avec appel du constructeur parent'
      ],
      recap: [
        'Une <strong>classe</strong> est un modèle, un <strong>objet</strong> est une instance concrète.',
        'Le constructeur <code>__init__(self, ...)</code> initialise les attributs. Ne pas oublier <code>self</code> !',
        'Les méthodes agissent sur les attributs via <code>self.attribut</code>.',
        'L\'héritage (<code>class Fille(Mere):</code>) réutilise le code de la classe mère. <code>super().__init__(...)</code> appelle le constructeur parent.'
      ],
      piege: 'Ne pas oublier <code>self</code> comme premier paramètre de chaque méthode. Sans <code>self</code>, Python ne sait pas à quel objet rattacher les attributs. Erreur classique : écrire <code>def remplir(quantite):</code> au lieu de <code>def remplir(self, quantite):</code>. De même, dans le corps de la méthode, il faut écrire <code>self.volume</code> et non <code>volume</code>.'
    },

    quiz: [
      {
        q: 'Soit le code :<br/><code>class Compteur:</code><br/><code>&nbsp;&nbsp;def __init__(self): self.n = 0</code><br/><code>&nbsp;&nbsp;def inc(self): self.n += 1</code><br/><code>&nbsp;&nbsp;def double(self): self.n *= 2</code><br/>Après <code>c = Compteur()</code>, <code>c.inc()</code>, <code>c.inc()</code>, <code>c.double()</code>, <code>c.inc()</code>, quelle est la valeur de <code>c.n</code> ?',
        options: ['$3$', '$4$', '$5$', '$6$'],
        answer: 2,
        correction: 'Exécution pas à pas : $n = 0$ → <code>inc()</code> : $n = 1$ → <code>inc()</code> : $n = 2$ → <code>double()</code> : $n = 4$ → <code>inc()</code> : $n = 5$.<br/>L\'ordre des appels est crucial : <code>double()</code> s\'applique au $n$ courant ($2$) et donne $4$, pas $6$.'
      },
      {
        q: 'On écrit <code>class VoitureElectrique(Voiture):</code>. Cela signifie que :',
        options: [
          '<code>VoitureElectrique</code> est une classe mère de <code>Voiture</code>',
          '<code>VoitureElectrique</code> hérite de <code>Voiture</code> et accède à ses attributs et méthodes',
          '<code>Voiture</code> est supprimée et remplacée par <code>VoitureElectrique</code>',
          'Les deux classes sont identiques'
        ],
        answer: 1,
        correction: 'La syntaxe <code>class Fille(Mere):</code> établit un lien d\'héritage : <code>VoitureElectrique</code> hérite de tous les attributs et méthodes de <code>Voiture</code>, et peut en ajouter ou en redéfinir (surcharge).'
      },
      {
        q: 'On crée deux objets : <code>a = Compteur()</code> et <code>b = Compteur()</code>. Après <code>a.inc()</code>, la valeur de <code>b.n</code> est :',
        options: ['$0$', '$1$', '$2$', 'Erreur'],
        answer: 0,
        correction: 'Chaque objet possède ses <strong>propres attributs</strong>. <code>a.inc()</code> modifie uniquement <code>a.n</code> (qui passe à $1$). <code>b.n</code> reste à $0$ car <code>b</code> est un objet distinct, avec sa propre copie de <code>n</code>.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const initial = rand(0, 20);
        const nOps = rand(2, 5);
        const operations = [];
        const opDetails = [];
        let current = initial;

        const classType = pick([
          { name: 'Stock', attr: 'quantite', add: 'ajouter', remove: 'retirer' },
          { name: 'Reservoir', attr: 'niveau', add: 'remplir', remove: 'vider' },
          { name: 'Compteur', attr: 'valeur', add: 'incrementer', remove: 'decrementer' }
        ]);

        for (let i = 0; i < nOps; i++) {
          const op = pick([classType.add, classType.remove]);
          const val = rand(1, 10);
          if (op === classType.add) {
            current += val;
            operations.push(`<code>obj.${op}(${val})</code>`);
            opDetails.push({ op: classType.add, val: val, sign: '+' });
          } else {
            current -= val;
            operations.push(`<code>obj.${op}(${val})</code>`);
            opDetails.push({ op: classType.remove, val: val, sign: '-' });
          }
        }

        const opsList = operations.join(', puis ');

        const solutionSteps = [`Valeur initiale : <code>${classType.attr} = ${initial}</code>`];
        let running = initial;
        for (let i = 0; i < nOps; i++) {
          const d = opDetails[i];
          if (d.sign === '+') {
            running += d.val;
            solutionSteps.push(`Après <code>${d.op}(${d.val})</code> : $${running - d.val} + ${d.val} = ${running}$`);
          } else {
            running -= d.val;
            solutionSteps.push(`Après <code>${d.op}(${d.val})</code> : $${running + d.val} - ${d.val} = ${running}$`);
          }
        }
        solutionSteps.push(`Valeur finale : <code>${classType.attr} = ${current}</code>`);

        return {
          statement: `On définit une classe <code>${classType.name}</code> avec un attribut <code>${classType.attr}</code> initialisé à $${initial}$. La méthode <code>${classType.add}(n)</code> ajoute $n$ et <code>${classType.remove}(n)</code> retire $n$. Après <code>obj = ${classType.name}(${initial})</code>, on exécute : ${opsList}. Quelle est la valeur finale de <code>obj.${classType.attr}</code> ?`,
          answer: current,
          tolerance: 0,
          unit: '',
          hint: `Pars de la valeur initiale $${initial}$ et applique chaque opération dans l'ordre. <code>${classType.add}(n)</code> fait $+n$ et <code>${classType.remove}(n)</code> fait $-n$.`,
          solution: solutionSteps
        };
      }
    },

    probleme: {
      context: 'On modélise un système de capteurs en POO. On crée une classe <code>Capteur</code> avec les attributs <code>nom</code> (str), <code>unite</code> (str) et <code>valeur</code> (float, initialisée à $0$). La méthode <code>mesurer(v)</code> met à jour <code>self.valeur = v</code>. La méthode <code>afficher()</code> retourne une chaîne comme <code>"Température : 22.5 °C"</code>. On crée ensuite <code>CapteurAlarme</code> héritant de <code>Capteur</code> avec un attribut <code>seuil</code> et une méthode <code>alarme()</code> retournant <code>True</code> si <code>valeur > seuil</code>.',
      tasks: [
        'Écrire le code de la classe <code>Capteur</code> avec <code>__init__</code>, <code>mesurer(v)</code> et <code>afficher()</code>.',
        'Écrire le code de <code>CapteurAlarme</code> héritant de <code>Capteur</code>, avec <code>super().__init__(...)</code>.',
        'Instancier un <code>CapteurAlarme("Température", "°C", 30)</code>. Après <code>mesurer(35)</code>, que retourne <code>alarme()</code> ?'
      ],
      solutions: [
        '<code>class Capteur:<br/>&nbsp;&nbsp;def __init__(self, nom, unite):<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.nom = nom<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.unite = unite<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.valeur = 0<br/>&nbsp;&nbsp;def mesurer(self, v):<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.valeur = v<br/>&nbsp;&nbsp;def afficher(self):<br/>&nbsp;&nbsp;&nbsp;&nbsp;return f"{self.nom} : {self.valeur} {self.unite}"</code>',
        '<code>class CapteurAlarme(Capteur):<br/>&nbsp;&nbsp;def __init__(self, nom, unite, seuil):<br/>&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(nom, unite)<br/>&nbsp;&nbsp;&nbsp;&nbsp;self.seuil = seuil<br/>&nbsp;&nbsp;def alarme(self):<br/>&nbsp;&nbsp;&nbsp;&nbsp;return self.valeur > self.seuil</code><br/>Le <code>super().__init__(nom, unite)</code> appelle le constructeur de <code>Capteur</code> pour initialiser <code>nom</code>, <code>unite</code> et <code>valeur</code>.',
        '<code>c = CapteurAlarme("Température", "°C", 30)</code>. Après <code>c.mesurer(35)</code> : <code>c.valeur = 35</code>. <code>c.alarme()</code> → <code>35 > 30</code> → <code>True</code>. L\'alarme se déclenche car la température dépasse le seuil.'
      ],
      finalAnswer: '<code>alarme()</code> retourne <code>True</code> car $35 > 30$.'
    },

    evaluation: {
      title: 'Évaluation — Programmation orientée objet',
      duration: '20 min',
      questions: [
        {
          statement: 'En Python, quel mot-clé permet de créer une classe ?',
          type: 'multiple-choice',
          options: ['<code>def</code>', '<code>class</code>', '<code>object</code>', '<code>new</code>'],
          answer: 1,
          points: 1,
          correction: 'Le mot-clé <code>class</code> permet de définir une classe. <code>def</code> définit une fonction ou méthode, pas une classe.'
        },
        {
          statement: 'Soit : <code>class Boite:</code> / <code>&nbsp;&nbsp;def __init__(self, n): self.objets = n</code> / <code>&nbsp;&nbsp;def ajouter(self, k): self.objets += k</code>. Après <code>b = Boite(5)</code>, <code>b.ajouter(3)</code>, <code>b.ajouter(2)</code>, la valeur de <code>b.objets</code> est :',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: 'Initialisation : <code>b.objets = 5</code>. Premier ajout : $5 + 3 = 8$. Deuxième ajout : $8 + 2 = 10$.'
        },
        {
          statement: 'L\'héritage en POO permet à une classe fille de :',
          type: 'multiple-choice',
          options: [
            'Supprimer tous les attributs de la classe mère',
            'Réutiliser les attributs et méthodes de la classe mère, et en ajouter',
            'Créer une copie indépendante sans aucun lien',
            'Empêcher la création d\'objets de la classe mère'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'héritage permet à la classe fille de réutiliser tout ce que la classe mère offre, tout en pouvant ajouter de nouveaux attributs/méthodes ou redéfinir (surcharger) ceux existants.'
        },
        {
          statement: 'Dans une méthode Python, <code>self</code> représente :',
          type: 'multiple-choice',
          options: [
            'Le nom de la classe',
            'L\'objet (instance) sur lequel la méthode est appelée',
            'Le constructeur de la classe',
            'Un paramètre optionnel qu\'on peut omettre'
          ],
          answer: 1,
          points: 2,
          correction: '<code>self</code> fait référence à l\'objet courant. Quand on écrit <code>obj.methode()</code>, Python passe automatiquement <code>obj</code> comme <code>self</code>. Ce n\'est pas optionnel : l\'omettre provoque une erreur.'
        },
        {
          statement: 'Soit <code>class Compteur:</code> / <code>&nbsp;&nbsp;def __init__(self): self.n = 0</code> / <code>&nbsp;&nbsp;def inc(self): self.n += 1</code> / <code>&nbsp;&nbsp;def double(self): self.n *= 2</code>. Après <code>c = Compteur()</code>, <code>c.inc()</code>, <code>c.double()</code>, <code>c.inc()</code>, <code>c.double()</code>, quelle est la valeur de <code>c.n</code> ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$n = 0$ → <code>inc()</code> : $n = 1$ → <code>double()</code> : $n = 2$ → <code>inc()</code> : $n = 3$ → <code>double()</code> : $n = 6$.'
        }
      ]
    }
  });
