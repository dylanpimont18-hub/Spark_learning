# Socle `manuels-spark` — extraction et conversion LaTeX

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire le socle testé qui transforme un module de `js/data/` en LaTeX correct et reproductible.

**Architecture:** Quatre modules Node sans dépendance externe, chaînés par un JSON neutre. `schema.js` valide la forme d'un module ; `extract.js` le charge dans un contexte isolé avec un générateur aléatoire ensemencé, de sorte que deux exécutions produisent le même livre ; `unicode.js` traduit les 245 caractères hors couverture LaTeX en signalant ceux qu'il ne connaît pas ; `latex.js` convertit le HTML et le KaTeX des modules en LaTeX.

**Tech Stack:** Node 24 (déjà installé), module natif `vm`, exécuteur de tests natif `node --test`. Aucune dépendance npm ajoutée — la règle « pas de build » de `CLAUDE.md` reste intacte.

**Spec:** `docs/superpowers/specs/2026-08-16-manuels-spark-design.md`

## Global Constraints

- **Aucune dépendance npm nouvelle.** `package.json` reste limité à `puppeteer` (exception CI documentée dans `CLAUDE.md`).
- **Aucun `export` / `import`** dans le code qui touche `js/data/` — le projet n'a pas de bundler. `scripts/manuel/` utilise CommonJS (`require` / `module.exports`).
- **Ne jamais modifier `js/data/`, `js/`, `css/` ou `index.html`** dans ce plan. Le socle est en lecture seule sur le contenu.
- **Notation décimale française obligatoire** : toute valeur numérique rendue vers LaTeX passe par une virgule (`1{,}5`), jamais un point.
- **Racine du dépôt** : `c:\Users\Dylan\Desktop\Creation_site\Spark_learning`. Tous les chemins ci-dessous en sont relatifs.
- **Commandes de test** : `node --test scripts/manuel/tests/` depuis la racine.
- **Écart assumé au spec** : le spec liste `latex.js` comme portant la table Unicode. Le plan la sort dans `unicode.js`. Raison : c'est une table de 250 entrées, pas de la logique ; la garder à part maintient `latex.js` lisible. L'architecture en huit modules du spec est inchangée par ailleurs.

---

### Task 1: Validateur de schéma

Un module de `js/data/` peut dévier de la forme attendue — l'audit en a trouvé neuf qui renvoient `exercice.solution` en chaîne au lieu d'un tableau. Ce validateur transforme ces dérives en erreurs nommées plutôt qu'en plantage à la compilation LaTeX.

**Files:**
- Create: `scripts/manuel/schema.js`
- Test: `scripts/manuel/tests/schema.test.js`

**Interfaces:**
- Consumes: rien.
- Produces:
  - `validerModule(mod)` → `{ ok: boolean, erreurs: string[], avertissements: string[] }`
  - `normaliserExercice(ex)` → `{ statement: string, answer: any, hint: string, solution: string[], unit: string, tolerance: number }` — `solution` est **toujours** un tableau en sortie.

- [ ] **Step 1: Write the failing test**

Create `scripts/manuel/tests/schema.test.js`:

```js
const test = require('node:test');
const assert = require('node:assert');
const { validerModule, normaliserExercice } = require('../schema.js');

function moduleValide() {
  return {
    id: '3e-exemple', title: 'Exemple', subject: 'maths', level: 1,
    cours: { intro: 'Texte', definitions: [{ term: 'T', def: 'D' }], formulas: ['$a$'], recap: ['R'] },
    quiz: [{ q: 'Q ?', options: ['a', 'b'], answer: 0, correction: 'C' }],
    exercice: { generate() { return {}; } },
    evaluation: { title: 'E', duration: '30 min', questions: [
      { statement: 'S', type: 'numeric', answer: 1, points: 2, correction: 'C' }
    ] }
  };
}

test('un module conforme ne produit aucune erreur', () => {
  const r = validerModule(moduleValide());
  assert.strictEqual(r.ok, true);
  assert.deepStrictEqual(r.erreurs, []);
});

test('un champ obligatoire manquant est une erreur nommee', () => {
  const mod = moduleValide();
  delete mod.cours;
  const r = validerModule(mod);
  assert.strictEqual(r.ok, false);
  assert.ok(r.erreurs.some(e => e.includes('cours')), 'l erreur doit nommer le champ manquant');
});

test('exercice.generate absent est une erreur', () => {
  const mod = moduleValide();
  mod.exercice = {};
  const r = validerModule(mod);
  assert.strictEqual(r.ok, false);
  assert.ok(r.erreurs.some(e => e.includes('generate')));
});

test('une reponse de quiz hors bornes est une erreur', () => {
  const mod = moduleValide();
  mod.quiz[0].answer = 5;
  const r = validerModule(mod);
  assert.strictEqual(r.ok, false);
  assert.ok(r.erreurs.some(e => e.includes('quiz')));
});

test('normaliserExercice transforme une solution en chaine en tableau', () => {
  const ex = normaliserExercice({ statement: 'S', answer: 2, hint: 'H', solution: 'une seule etape' });
  assert.deepStrictEqual(ex.solution, ['une seule etape']);
});

test('normaliserExercice preserve une solution deja en tableau', () => {
  const ex = normaliserExercice({ statement: 'S', answer: 2, hint: 'H', solution: ['a', 'b'] });
  assert.deepStrictEqual(ex.solution, ['a', 'b']);
});

test('normaliserExercice remplit les champs optionnels absents', () => {
  const ex = normaliserExercice({ statement: 'S', answer: 2, hint: 'H', solution: [] });
  assert.strictEqual(ex.unit, '');
  assert.strictEqual(ex.tolerance, 0);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test scripts/manuel/tests/schema.test.js`
Expected: FAIL — `Cannot find module '../schema.js'`

- [ ] **Step 3: Write minimal implementation**

Create `scripts/manuel/schema.js`:

```js
/* =========================================================
   Spark Learning – scripts/manuel/schema.js
   Valide la forme d'un module de js/data/ avant conversion.
   Un module non conforme doit echouer ici, avec un message
   nommant le champ fautif, plutot qu'a la compilation LaTeX.
   ========================================================= */

const CHAMPS_MODULE = ['id', 'title', 'subject', 'cours', 'quiz', 'exercice', 'evaluation'];
const CHAMPS_COURS = ['intro'];

function validerModule(mod) {
  const erreurs = [];
  const avertissements = [];
  const ou = (mod && mod.id) ? mod.id : '(module sans id)';

  if (!mod || typeof mod !== 'object') {
    return { ok: false, erreurs: ['module absent ou non objet'], avertissements };
  }

  for (const c of CHAMPS_MODULE) {
    if (mod[c] === undefined) erreurs.push(`${ou} : champ obligatoire manquant "${c}"`);
  }

  if (mod.cours && typeof mod.cours === 'object') {
    for (const c of CHAMPS_COURS) {
      if (typeof mod.cours[c] !== 'string') erreurs.push(`${ou} : cours.${c} doit etre une chaine`);
    }
    for (const c of ['definitions', 'formulas', 'recap']) {
      if (mod.cours[c] !== undefined && !Array.isArray(mod.cours[c])) {
        erreurs.push(`${ou} : cours.${c} doit etre un tableau`);
      }
    }
    if (!mod.cours.diagram) avertissements.push(`${ou} : aucun schema (cours.diagram)`);
  }

  if (mod.quiz !== undefined) {
    if (!Array.isArray(mod.quiz)) {
      erreurs.push(`${ou} : quiz doit etre un tableau`);
    } else {
      mod.quiz.forEach((q, i) => {
        if (!Array.isArray(q.options)) erreurs.push(`${ou} : quiz[${i}].options doit etre un tableau`);
        else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) {
          erreurs.push(`${ou} : quiz[${i}].answer hors bornes (${q.answer} pour ${q.options.length} options)`);
        }
        if (typeof q.correction !== 'string') avertissements.push(`${ou} : quiz[${i}] sans correction`);
      });
    }
  }

  if (mod.exercice !== undefined && typeof mod.exercice.generate !== 'function') {
    erreurs.push(`${ou} : exercice.generate doit etre une fonction`);
  }

  if (mod.evaluation !== undefined) {
    if (!Array.isArray(mod.evaluation.questions)) {
      erreurs.push(`${ou} : evaluation.questions doit etre un tableau`);
    } else {
      mod.evaluation.questions.forEach((q, i) => {
        if (typeof q.points !== 'number') {
          avertissements.push(`${ou} : evaluation.questions[${i}] sans bareme`);
        }
      });
    }
  }

  return { ok: erreurs.length === 0, erreurs, avertissements };
}

/* Neuf modules bts-prep renvoient solution en chaine et non en tableau.
   On normalise ici, une fois, plutot que dans chaque consommateur. */
function normaliserExercice(ex) {
  const solution = Array.isArray(ex.solution)
    ? ex.solution
    : (ex.solution == null || ex.solution === '' ? [] : [String(ex.solution)]);
  return {
    statement: String(ex.statement || ''),
    answer: ex.answer,
    hint: String(ex.hint || ''),
    solution,
    unit: String(ex.unit || ''),
    tolerance: typeof ex.tolerance === 'number' ? ex.tolerance : 0
  };
}

module.exports = { validerModule, normaliserExercice };
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test scripts/manuel/tests/schema.test.js`
Expected: PASS — 7 tests réussis.

- [ ] **Step 5: Commit**

```bash
git add scripts/manuel/schema.js scripts/manuel/tests/schema.test.js
git commit -m "feat(manuel): valide le schema des modules avant conversion"
```

---

### Task 2: Extraction avec tirage reproductible

`exercice.generate()` s'appuie sur `Math.random`. Sans maîtrise du tirage, deux compilations du même ouvrage donneraient deux livres différents : pagination décalée, corrigés désynchronisés, réimpression impossible. On fournit un `Math.random` ensemencé au contexte d'exécution, ce qui rend le tirage reproductible **sans modifier `helpers.js` ni aucun module**.

**Files:**
- Create: `scripts/manuel/extract.js`
- Test: `scripts/manuel/tests/extract.test.js`

**Interfaces:**
- Consumes: `normaliserExercice(ex)` et `validerModule(mod)` de `scripts/manuel/schema.js`.
- Produces:
  - `chargerModule(cheminRelatif, options)` où `options = { graine: number, tirages: number }` → `{ module: object, exercices: Array<objet normalise>, validation: { ok, erreurs, avertissements } }`
  - `RACINE` → `string`, chemin absolu de la racine du dépôt.

- [ ] **Step 1: Write the failing test**

Create `scripts/manuel/tests/extract.test.js`:

```js
const test = require('node:test');
const assert = require('node:assert');
const { chargerModule } = require('../extract.js');

const THALES = 'js/data/3e/3e-thales.js';

test('charge un module reel et le valide', () => {
  const r = chargerModule(THALES, { graine: 42, tirages: 2 });
  assert.strictEqual(r.module.id, '3e-thales');
  assert.strictEqual(r.validation.ok, true, 'erreurs : ' + r.validation.erreurs.join(' | '));
});

test('produit le nombre de tirages demande', () => {
  const r = chargerModule(THALES, { graine: 42, tirages: 3 });
  assert.strictEqual(r.exercices.length, 3);
});

test('la meme graine produit exactement les memes exercices', () => {
  const a = chargerModule(THALES, { graine: 7, tirages: 4 });
  const b = chargerModule(THALES, { graine: 7, tirages: 4 });
  assert.deepStrictEqual(a.exercices, b.exercices);
});

test('deux graines differentes produisent des exercices differents', () => {
  const a = chargerModule(THALES, { graine: 7, tirages: 4 });
  const b = chargerModule(THALES, { graine: 8, tirages: 4 });
  assert.notDeepStrictEqual(a.exercices, b.exercices);
});

test('les exercices sont normalises : solution toujours en tableau', () => {
  const r = chargerModule('js/data/bts-prep/bts-prep-logarithme.js', { graine: 1, tirages: 1 });
  assert.ok(Array.isArray(r.exercices[0].solution));
});

test('un chemin inexistant leve une erreur explicite', () => {
  assert.throws(() => chargerModule('js/data/nexiste-pas.js', { graine: 1, tirages: 1 }),
    /nexiste-pas/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test scripts/manuel/tests/extract.test.js`
Expected: FAIL — `Cannot find module '../extract.js'`

- [ ] **Step 3: Write minimal implementation**

Create `scripts/manuel/extract.js`:

```js
/* =========================================================
   Spark Learning – scripts/manuel/extract.js
   Charge un module de js/data/ hors navigateur et instancie
   ses exercices de facon REPRODUCTIBLE.

   Les modules sont des scripts globaux : ils appellent
   window.MODULES.push({...}) et utilisent rand/randFloat/pick
   definis dans js/data/helpers.js. On recree donc ce contexte
   avec le module natif vm.

   Reproductibilite : rand/randFloat/pick s'appuient tous sur
   Math.random. En fournissant au contexte un Math.random
   ensemence, tout le tirage devient deterministe sans toucher
   helpers.js ni aucun module.
   ========================================================= */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { validerModule, normaliserExercice } = require('./schema.js');

const RACINE = path.resolve(__dirname, '..', '..');

/* Generateur ensemence (mulberry32) : rapide, sans dependance,
   suffisant pour varier des contextes d'exercice. */
function mulberry32(graine) {
  let a = graine >>> 0;
  return function () {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function chargerModule(cheminRelatif, options) {
  const opts = options || {};
  const graine = typeof opts.graine === 'number' ? opts.graine : 0;
  const tirages = typeof opts.tirages === 'number' ? opts.tirages : 3;

  const cheminAbsolu = path.join(RACINE, cheminRelatif);
  if (!fs.existsSync(cheminAbsolu)) {
    throw new Error('Module introuvable : ' + cheminRelatif);
  }

  // Math derive, pour ne pas alterer le Math global du processus
  const MathEnsemence = Object.create(Math);
  MathEnsemence.random = mulberry32(graine);

  const bac = { window: { MODULES: [] }, console, Math: MathEnsemence };
  vm.createContext(bac);

  // helpers.js definit window.MODULES et des const de haut niveau
  // (rand, randFloat, pick, fr) : il doit etre execute dans le MEME
  // script que le module pour que ces const lui soient visibles.
  const helpers = fs.readFileSync(path.join(RACINE, 'js/data/helpers.js'), 'utf8');
  const source = fs.readFileSync(cheminAbsolu, 'utf8');
  vm.runInContext(helpers + '\n' + source, bac, { filename: cheminRelatif });

  const module_ = bac.window.MODULES[0];
  if (!module_) throw new Error('Aucun module pousse par ' + cheminRelatif);

  const validation = validerModule(module_);

  const exercices = [];
  if (module_.exercice && typeof module_.exercice.generate === 'function') {
    for (let i = 0; i < tirages; i++) {
      exercices.push(normaliserExercice(module_.exercice.generate()));
    }
  }

  return { module: module_, exercices, validation };
}

module.exports = { chargerModule, RACINE };
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test scripts/manuel/tests/extract.test.js`
Expected: PASS — 6 tests réussis.

Si le test « la meme graine produit exactement les memes exercices » échoue, c'est que le module tire un nombre aléatoire hors de `Math.random` (par exemple via `Date.now()`) : le signaler plutôt que de contourner.

- [ ] **Step 5: Commit**

```bash
git add scripts/manuel/extract.js scripts/manuel/tests/extract.test.js
git commit -m "feat(manuel): extraction des modules avec tirage reproductible"
```

---

### Task 3: Table Unicode vers LaTeX

Le corpus contient 3 141 occurrences de 245 caractères hors couverture de LaTeX (`→`, `€`, `Ω`, `⁻`, `✓`, `₂`…). Non traduits, ils empêchent la compilation. Traduits en silence quand on ne les connaît pas, ils feraient disparaître un symbole d'une formule sans que personne ne le voie — d'où le registre des caractères non mappés.

**Files:**
- Create: `scripts/manuel/unicode.js`
- Test: `scripts/manuel/tests/unicode.test.js`

**Interfaces:**
- Consumes: rien.
- Produces:
  - `enMath(texte, ou)` → `string` — pour un fragment déjà en mode mathématique.
  - `enTexte(texte, ou, emettre)` → `string` — pour un fragment textuel ; `emettre(latex)` est un rappel fourni par `latex.js` qui met la commande LaTeX à l'abri de l'échappement et renvoie un jeton.
  - `nonMappes` → `Map<string, Set<string>>` — caractère (avec son point de code) → identifiants de modules concernés.

- [ ] **Step 1: Write the failing test**

Create `scripts/manuel/tests/unicode.test.js`:

```js
const test = require('node:test');
const assert = require('node:assert');
const { enMath, enTexte, nonMappes } = require('../unicode.js');

const brut = (s) => s;                 // emetteur neutre pour les tests

test('un symbole grec devient une commande math', () => {
  assert.match(enMath('R = 5 Ω', 'test'), /\\Omega/);
});

test('en mode math, le symbole est enveloppe dans ensuremath', () => {
  // Une formule contient souvent \text{...}, qui rebascule en mode texte :
  // une commande math nue y provoque "Missing $ inserted".
  assert.match(enMath('1\\,\\text{µm}'.replace('µ', 'μ'), 'test'), /\\ensuremath\{\\mu\}/);
});

test('en mode texte, un symbole math passe par ensuremath', () => {
  assert.match(enTexte('vitesse → constante', 'test', brut), /\\ensuremath\{\\to\}/);
});

test('la coche est traitee comme une commande math, pas texte', () => {
  // \checkmark et \times sont des commandes math : en mode texte nu,
  // elles cassent la compilation.
  assert.match(enTexte('acquis ✓', 'test', brut), /\\ensuremath\{\\checkmark\}/);
});

test('la fleche vectorielle combinante porte sur le symbole precedent', () => {
  assert.match(enMath('AB⃗', 'test'), /\\vec\{AB\}/);
});

test('les indices et exposants sont traduits', () => {
  assert.match(enMath('CO₂', 'test'), /_2/);
  assert.match(enMath('10⁻⁶', 'test'), /\^-/);
});

test('les caracteres francais courants sont laisses intacts', () => {
  assert.strictEqual(enTexte('théorème « croisé »', 'test', brut), 'théorème « croisé »');
});

test('les emoji sont retires sans bruit', () => {
  assert.strictEqual(enTexte('objectif 🔭 atteint', 'test', brut), 'objectif  atteint');
});

test('un caractere inconnu est signale et conserve', () => {
  nonMappes.clear();
  const sortie = enTexte('symbole \u2E2E rare', 'mon-module', brut);
  assert.ok(sortie.includes('\u2E2E'), 'le caractere doit etre conserve, pas avale');
  assert.strictEqual(nonMappes.size, 1);
  const [cle] = [...nonMappes.keys()];
  assert.match(cle, /U\+2E2E/);
  assert.ok(nonMappes.get(cle).has('mon-module'));
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test scripts/manuel/tests/unicode.test.js`
Expected: FAIL — `Cannot find module '../unicode.js'`

- [ ] **Step 3: Write minimal implementation**

Create `scripts/manuel/unicode.js`:

```js
/* =========================================================
   Spark Learning – scripts/manuel/unicode.js
   Traduit en commandes LaTeX les caracteres que pdflatex/T1
   ne couvre pas (3141 occurrences, 245 caracteres distincts
   dans js/data). Tout caractere inconnu est SIGNALE, jamais
   avale : un symbole disparu d'une formule ne se voit pas.
   ========================================================= */

/* Commandes MATHEMATIQUES. Elles sont toujours emises via \ensuremath :
   neutre en mode math, et retablit le mode math a l'interieur d'un
   \text{...} (cas reel : $1\,\text{µm}$, $\text{L}^2\text{·θ}$). */
const MATH = {
  'α':'\\alpha','β':'\\beta','γ':'\\gamma','δ':'\\delta','ε':'\\varepsilon','ζ':'\\zeta',
  'η':'\\eta','θ':'\\theta','ι':'\\iota','κ':'\\kappa','λ':'\\lambda','μ':'\\mu','ν':'\\nu',
  'ξ':'\\xi','π':'\\pi','ρ':'\\rho','σ':'\\sigma','τ':'\\tau','υ':'\\upsilon','φ':'\\varphi',
  'χ':'\\chi','ψ':'\\psi','ω':'\\omega',
  'Γ':'\\Gamma','Δ':'\\Delta','Θ':'\\Theta','Λ':'\\Lambda','Ξ':'\\Xi','Π':'\\Pi',
  'Σ':'\\Sigma','Φ':'\\Phi','Ψ':'\\Psi','Ω':'\\Omega',

  '→':'\\to','←':'\\leftarrow','↔':'\\leftrightarrow','↑':'\\uparrow','↓':'\\downarrow',
  '⇒':'\\Rightarrow','⇔':'\\Leftrightarrow','⟹':'\\Longrightarrow','⟸':'\\Longleftarrow',
  '⟺':'\\Longleftrightarrow','⟶':'\\longrightarrow','↗':'\\nearrow','↘':'\\searrow',

  '≈':'\\approx','≠':'\\neq','≤':'\\leq','≥':'\\geq','≡':'\\equiv','∝':'\\propto',
  '⊂':'\\subset','⊃':'\\supset','∈':'\\in','∉':'\\notin','⊥':'\\perp','∥':'\\parallel',
  '≃':'\\simeq','≅':'\\cong','∼':'\\sim',

  '−':'-','×':'\\times','÷':'\\div','±':'\\pm','∓':'\\mp','⋅':'\\cdot','∘':'\\circ',
  '√':'\\surd','∞':'\\infty','♾':'\\infty','∑':'\\sum','∏':'\\prod','∫':'\\int',
  '∂':'\\partial','∇':'\\nabla','∅':'\\emptyset','∀':'\\forall','∃':'\\exists',
  '∧':'\\wedge','∨':'\\vee','¬':'\\neg','△':'\\triangle','◆':'\\blacklozenge','ℓ':'\\ell',
  '⌀':'\\varnothing','‖':'\\|','∠':'\\angle','∆':'\\Delta',

  'ℕ':'\\mathbb{N}','ℤ':'\\mathbb{Z}','ℚ':'\\mathbb{Q}','ℝ':'\\mathbb{R}','ℂ':'\\mathbb{C}',

  // \checkmark et \times sont des commandes MATH : les classer en texte
  // provoque "Missing $ inserted". Bug rencontre a l'audit du 2026-08-15.
  '✓':'\\checkmark','✔':'\\checkmark','☑':'\\checkmark','✗':'\\times','✘':'\\times',

  '₀':'_0','₁':'_1','₂':'_2','₃':'_3','₄':'_4','₅':'_5','₆':'_6','₇':'_7','₈':'_8','₉':'_9',
  '₊':'_+','₋':'_-','ₑ':'_e','ₙ':'_n','ₛ':'_s','ₚ':'_p','ₜ':'_t','ₐ':'_a','ᵢ':'_i',
  '⁰':'^0','¹':'^1','²':'^2','³':'^3','⁴':'^4','⁵':'^5','⁶':'^6','⁷':'^7','⁸':'^8','⁹':'^9',
  '⁺':'^+','⁻':'^-','ⁿ':'^n','ˣ':'^x','ᵃ':'^a','ᵇ':'^b','ᶜ':'^c','ᵈ':'^d','ᵐ':'^m','ᵏ':'^k'
};

/* Commandes purement TEXTUELLES (aucun sens mathematique). */
const TEXTE = {
  '•':'\\textbullet{}','·':'\\textperiodcentered{}','€':'\\texteuro{}',
  '№':'n\\textsuperscript{o}','℃':'\\textcelsius{}'
};

/* Retires sans avertir : selecteurs de variante, BOM, espaces de largeur nulle. */
const A_RETIRER = /[\uFE0E\uFE0F\uFEFF\u200B\u200C\u200D\u2060]/g;

/* Emoji et pictogrammes : decoratifs, retires du rendu imprime. */
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{2300}-\u{23FF}]/u;

/* Deja couverts par T1 + inputenc : ASCII, francais, ponctuation courante. */
const SUR = /[\t\n\r\x20-\x7E\u00A0-\u00FF\u0152\u0153\u0178\u2018\u2019\u201C\u201D\u2013\u2014\u2026]/;

const nonMappes = new Map();

function signaler(caractere, ou) {
  if (caractere.codePointAt(0) < 0x20) return;   // jetons internes du convertisseur
  const cle = caractere + ' (U+' +
    caractere.codePointAt(0).toString(16).toUpperCase().padStart(4, '0') + ')';
  if (!nonMappes.has(cle)) nonMappes.set(cle, new Set());
  nonMappes.get(cle).add(ou);
}

/* U+20D7 est un diacritique COMBINANT : il porte sur ce qui precede.
   `AB⃗` doit donner \vec{AB}, pas deux symboles juxtaposes. */
const VECTEUR = /([A-Za-z0-9]+)\u20D7/g;

function traduire(texte, ou, envelopper) {
  let s = String(texte).replace(A_RETIRER, '');
  s = s.replace(VECTEUR, (_, base) => envelopper('\\vec{' + base + '}'));

  let sortie = '';
  for (const c of s) {
    if (SUR.test(c)) { sortie += c; continue; }
    if (MATH[c] !== undefined) { sortie += envelopper(MATH[c]); continue; }
    if (TEXTE[c] !== undefined) { sortie += TEXTE[c]; continue; }
    if (EMOJI.test(c)) continue;
    signaler(c, ou);
    sortie += c;                       // conserve : fera echouer la compilation, visiblement
  }
  return sortie;
}

function enMath(texte, ou) {
  return traduire(texte, ou, (latex) => '\\ensuremath{' + latex + '}');
}

function enTexte(texte, ou, emettre) {
  return traduire(texte, ou, (latex) => emettre('\\ensuremath{' + latex + '}'));
}

module.exports = { enMath, enTexte, nonMappes };
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test scripts/manuel/tests/unicode.test.js`
Expected: PASS — 9 tests réussis.

- [ ] **Step 5: Commit**

```bash
git add scripts/manuel/unicode.js scripts/manuel/tests/unicode.test.js
git commit -m "feat(manuel): table Unicode vers LaTeX avec registre des inconnus"
```

---

### Task 4: Conversion HTML et KaTeX vers LaTeX

Les modules mêlent du HTML (`<strong>`, `<br/>`) et du KaTeX (`$\dfrac{a}{b}$`) dans les mêmes chaînes. La conversion doit préserver les fragments mathématiques intacts — ils compilent déjà tels quels — tout en échappant le texte autour.

L'ordre des opérations est le piège central : trois bugs de l'audit venaient tous d'une étape appliquée au mauvais moment.

**Files:**
- Create: `scripts/manuel/latex.js`
- Test: `scripts/manuel/tests/latex.test.js`

**Interfaces:**
- Consumes: `enMath`, `enTexte`, `nonMappes` de `scripts/manuel/unicode.js`.
- Produces:
  - `versLatex(valeur)` → `string` — convertit une chaîne HTML+KaTeX en LaTeX.
  - `nombreFr(valeur)` → `string` — rend un nombre avec la virgule française (`7.5` → `7{,}5`).
  - `definirOrigine(id)` → `void` — indique le module en cours, pour localiser un caractère inconnu.

- [ ] **Step 1: Write the failing test**

Create `scripts/manuel/tests/latex.test.js`:

```js
const test = require('node:test');
const assert = require('node:assert');
const { versLatex, nombreFr, definirOrigine } = require('../latex.js');

test('les balises de mise en valeur deviennent des commandes LaTeX', () => {
  assert.strictEqual(versLatex('le <strong>theoreme</strong>'), 'le \\textbf{theoreme}');
});

test('un double saut de ligne devient un changement de paragraphe', () => {
  assert.strictEqual(versLatex('un<br/><br/>deux'), 'un\n\ndeux');
});

test('les fragments mathematiques passent intacts', () => {
  const r = versLatex('on a $\\dfrac{OA\'}{OA} = 1{,}5$ ici');
  assert.ok(r.includes('$\\dfrac{OA\'}{OA} = 1{,}5$'), 'obtenu : ' + r);
});

test("l'apostrophe courbe ne doit jamais entrer en mode mathematique", () => {
  // $A'B'$ : l'apostrophe y est le symbole prime. La remplacer par ’ casse la formule.
  const r = versLatex("l'image $A'B'$ est renversee");
  assert.ok(r.includes("$A'B'$"), 'la formule doit garder son apostrophe droite : ' + r);
  assert.ok(r.includes('l’image'), 'le texte doit avoir une apostrophe courbe : ' + r);
});

test('les caracteres speciaux LaTeX du texte sont echappes', () => {
  assert.strictEqual(versLatex('50 % & plus_encore'), '50 \\% \\& plus\\_encore');
});

test('une commande LaTeX issue du HTML n est pas re-echappee', () => {
  const r = versLatex('<strong>100 %</strong>');
  assert.strictEqual(r, '\\textbf{100 \\%}');
});

test('le display math est converti en environnement LaTeX', () => {
  assert.strictEqual(versLatex('soit $$a = b$$'), 'soit \\[a = b\\]');
});

test('nombreFr rend la virgule francaise', () => {
  assert.strictEqual(nombreFr(7.5), '7{,}5');
  assert.strictEqual(nombreFr(12), '12');
});

test('un symbole Unicode en texte est traduit', () => {
  definirOrigine('module-test');
  assert.match(versLatex('vitesse → limite'), /\\ensuremath\{\\to\}/);
});

test('les entites HTML sont decodees', () => {
  assert.match(versLatex('a&nbsp;b'), /a(~|\\textasciitilde\{\})b/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test scripts/manuel/tests/latex.test.js`
Expected: FAIL — `Cannot find module '../latex.js'`

- [ ] **Step 3: Write minimal implementation**

Create `scripts/manuel/latex.js`:

```js
/* =========================================================
   Spark Learning – scripts/manuel/latex.js
   Convertit le HTML + KaTeX des modules en LaTeX.

   L'ORDRE des etapes est la partie delicate : les trois bugs
   rencontres a l'audit du 2026-08-15 venaient tous d'une etape
   appliquee au mauvais moment.
     1. mettre les maths a l'abri  (elles compilent deja telles quelles)
     2. balises HTML -> jetons     (pour survivre a l'echappement)
     3. entites HTML -> caracteres
     4. echapper les caracteres speciaux LaTeX
     5. typographie francaise       AVANT de restituer les maths,
        sinon l'apostrophe courbe entre dans $A'B'$ ou elle est un prime
     6. restituer jetons puis maths
   ========================================================= */

const { enMath, enTexte, nonMappes } = require('./unicode.js');

const MARQUE_MATH = '\u0000';
const MARQUE_JETON = '\u0001';

let origine = '(inconnu)';
function definirOrigine(id) { origine = id || '(inconnu)'; }

function versLatex(valeur) {
  if (valeur == null) return '';
  let s = String(valeur);

  // 1. Mettre les maths a l'abri, en y traduisant les symboles Unicode
  const maths = [];
  const garder = (latex) => {
    maths.push(latex);
    return MARQUE_MATH + (maths.length - 1) + MARQUE_MATH;
  };
  s = s.replace(/\$\$([\s\S]*?)\$\$/g, (_, m) => garder('\\[' + enMath(m, origine) + '\\]'));
  s = s.replace(/\$([^$]*?)\$/g, (_, m) => garder('$' + enMath(m, origine) + '$'));

  // 2. Balises HTML -> jetons
  const jetons = [];
  const jeton = (latex) => {
    jetons.push(latex);
    return MARQUE_JETON + (jetons.length - 1) + MARQUE_JETON;
  };
  s = s.replace(/<br\s*\/?>\s*<br\s*\/?>/gi, jeton('\n\n'))
       .replace(/<br\s*\/?>/gi, jeton('\\\\\n'))
       .replace(/<strong>([\s\S]*?)<\/strong>/gi, (_, c) => jeton('\\textbf{') + c + jeton('}'))
       .replace(/<b>([\s\S]*?)<\/b>/gi, (_, c) => jeton('\\textbf{') + c + jeton('}'))
       .replace(/<em>([\s\S]*?)<\/em>/gi, (_, c) => jeton('\\emph{') + c + jeton('}'))
       .replace(/<i>([\s\S]*?)<\/i>/gi, (_, c) => jeton('\\emph{') + c + jeton('}'))
       .replace(/<code>([\s\S]*?)<\/code>/gi, (_, c) => jeton('\\texttt{') + c + jeton('}'))
       .replace(/<\/?(ul|ol|li|p|span|div)[^>]*>/gi, '');

  // Symboles Unicode restants (hors math)
  s = enTexte(s, origine, jeton);

  // 3. Entites HTML
  s = s.replace(/&nbsp;/g, '~').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
       .replace(/&gt;/g, '>').replace(/&times;/g, '×').replace(/&deg;/g, '°')
       .replace(/&hellip;/g, '…').replace(/&#39;/g, "'").replace(/&quot;/g, '"');

  // 4. Echappement LaTeX
  s = s.replace(/\\/g, '\\textbackslash{}')
       .replace(/([&%#_{}])/g, '\\$1')
       .replace(/\^/g, '\\textasciicircum{}')
       .replace(/~/g, '\\textasciitilde{}');

  // 5. Typographie francaise, AVANT restitution des maths.
  //    Les espaces avant ; : ! ? sont laissees a babel french.
  s = s.replace(/'/g, '\u2019').replace(/[ ]{2,}/g, ' ');

  // 6. Restitution
  s = s.replace(new RegExp(MARQUE_JETON + '(\\d+)' + MARQUE_JETON, 'g'), (_, i) => jetons[+i]);
  s = s.replace(new RegExp(MARQUE_MATH + '(\\d+)' + MARQUE_MATH, 'g'), (_, i) => maths[+i]);
  return s.trim();
}

/* Les champs numeriques bruts (exercice.answer) sont des Number JS :
   les injecter tels quels fait fuir la notation anglaise (7.5) dans le PDF.
   Meme regle que fr() cote application. */
function nombreFr(valeur) {
  if (typeof valeur === 'number') return String(valeur).replace('.', '{,}');
  return versLatex(valeur);
}

module.exports = { versLatex, nombreFr, definirOrigine, nonMappes };
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test scripts/manuel/tests/latex.test.js`
Expected: PASS — 10 tests réussis.

Note sur le test d'échappement `&nbsp;` : l'entité est décodée en `~` à l'étape 3, puis l'étape 4 l'échappe en `\textasciitilde{}`. C'est correct pour un espace insécable rendu littéralement ; si tu préfères un vrai espace insécable LaTeX, remplace `&nbsp;` par un jeton `jeton('~')` à l'étape 2 — le test accepte les deux formes.

- [ ] **Step 5: Commit**

```bash
git add scripts/manuel/latex.js scripts/manuel/tests/latex.test.js
git commit -m "feat(manuel): conversion HTML et KaTeX vers LaTeX"
```

---

### Task 5: Vérification sur le corpus réel

Les tâches précédentes testent des cas isolés. Celle-ci vérifie que le socle tient sur les 203 modules réels et compile effectivement — c'est le seul test qui aurait attrapé les trois bugs de l'audit.

**Files:**
- Create: `scripts/manuel/verifier-corpus.js`
- Test: `scripts/manuel/tests/corpus.test.js`

**Interfaces:**
- Consumes: `chargerModule`, `RACINE` de `extract.js` ; `versLatex`, `definirOrigine`, `nonMappes` de `latex.js`.
- Produces:
  - `listerModules()` → `string[]` — chemins relatifs de tous les modules de `js/data/`, hors `index.js` et `helpers.js`.
  - `verifierCorpus(options)` où `options = { graine: number, tirages: number }` → `{ total: number, valides: number, echecs: Array<{ chemin: string, raison: string }>, symbolesInconnus: string[] }`

- [ ] **Step 1: Write the failing test**

Create `scripts/manuel/tests/corpus.test.js`:

```js
const test = require('node:test');
const assert = require('node:assert');
const { listerModules, verifierCorpus } = require('../verifier-corpus.js');

test('le corpus contient les 203 modules attendus', () => {
  const modules = listerModules();
  assert.strictEqual(modules.length, 203);
});

test('tous les modules se chargent et se convertissent', () => {
  const r = verifierCorpus({ graine: 1, tirages: 1 });
  assert.deepStrictEqual(r.echecs, [], 'echecs : ' + JSON.stringify(r.echecs, null, 1));
  assert.strictEqual(r.valides, r.total);
});

test('aucun symbole Unicode inconnu sur le corpus', () => {
  const r = verifierCorpus({ graine: 1, tirages: 1 });
  assert.deepStrictEqual(r.symbolesInconnus, [],
    'symboles a ajouter dans unicode.js : ' + r.symbolesInconnus.join(' '));
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test scripts/manuel/tests/corpus.test.js`
Expected: FAIL — `Cannot find module '../verifier-corpus.js'`

- [ ] **Step 3: Write minimal implementation**

Create `scripts/manuel/verifier-corpus.js`:

```js
/* =========================================================
   Spark Learning – scripts/manuel/verifier-corpus.js
   Passe le socle sur les 203 modules reels : chargement,
   validation de schema, conversion LaTeX de tous les champs
   textuels. Sert de filet contre les regressions de conversion.
   Usage : node scripts/manuel/verifier-corpus.js
   ========================================================= */

const fs = require('fs');
const path = require('path');
const { chargerModule, RACINE } = require('./extract.js');
const { versLatex, definirOrigine, nonMappes } = require('./latex.js');

function listerModules() {
  const racineDonnees = path.join(RACINE, 'js', 'data');
  const trouves = [];
  (function parcourir(dossier) {
    for (const e of fs.readdirSync(dossier, { withFileTypes: true })) {
      const complet = path.join(dossier, e.name);
      if (e.isDirectory()) parcourir(complet);
      else if (e.name.endsWith('.js') && e.name !== 'index.js' && e.name !== 'helpers.js') {
        trouves.push(path.relative(RACINE, complet).split(path.sep).join('/'));
      }
    }
  })(racineDonnees);
  return trouves.sort();
}

/* Convertit recursivement toute chaine rencontree, en ignorant le SVG
   (traite par figures.js, pas par le convertisseur de texte). */
function convertirTout(valeur) {
  if (typeof valeur === 'string') { versLatex(valeur); return; }
  if (Array.isArray(valeur)) { valeur.forEach(convertirTout); return; }
  if (valeur && typeof valeur === 'object') {
    for (const cle of Object.keys(valeur)) {
      if (cle === 'svg') continue;
      convertirTout(valeur[cle]);
    }
  }
}

function verifierCorpus(options) {
  const opts = options || {};
  const chemins = listerModules();
  const echecs = [];
  let valides = 0;
  nonMappes.clear();

  for (const chemin of chemins) {
    try {
      const { module: mod, exercices, validation } = chargerModule(chemin, {
        graine: typeof opts.graine === 'number' ? opts.graine : 1,
        tirages: typeof opts.tirages === 'number' ? opts.tirages : 1
      });
      if (!validation.ok) {
        echecs.push({ chemin, raison: validation.erreurs.join(' | ') });
        continue;
      }
      definirOrigine(mod.id);
      convertirTout({ cours: mod.cours, quiz: mod.quiz, probleme: mod.probleme,
                      evaluation: mod.evaluation, exercices });
      valides++;
    } catch (e) {
      echecs.push({ chemin, raison: e.message });
    }
  }

  return { total: chemins.length, valides, echecs, symbolesInconnus: [...nonMappes.keys()] };
}

if (require.main === module) {
  const r = verifierCorpus({ graine: 1, tirages: 2 });
  console.log(`${r.valides} / ${r.total} modules valides`);
  r.echecs.forEach(e => console.error('ECHEC ' + e.chemin + ' : ' + e.raison));
  if (r.symbolesInconnus.length) {
    console.error('Symboles Unicode inconnus : ' + r.symbolesInconnus.join(' '));
  }
  process.exit(r.echecs.length || r.symbolesInconnus.length ? 1 : 0);
}

module.exports = { listerModules, verifierCorpus };
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test scripts/manuel/tests/corpus.test.js`
Expected: PASS — 3 tests réussis.

**Échec attendu et légitime** : le test « tous les modules se chargent » signalera
`js/data/lycee-2nde/2nde-droites-systemes.js : Assignment to constant variable` environ une
fois sur deux. C'est le bug de production identifié à l'audit — `const b2` réaffecté dans une
boucle `while`, ligne 158, qui plante 24,5 % des tirages. Ce plan est en lecture seule sur
`js/data/` : **ne pas contourner le test**. Signaler le résultat et corriger le module dans un
commit distinct (`let b2`), puis relancer.

- [ ] **Step 5: Commit**

```bash
git add scripts/manuel/verifier-corpus.js scripts/manuel/tests/corpus.test.js
git commit -m "feat(manuel): verification du socle sur les 203 modules"
```

---

### Task 6: Documentation de navigation

`CLAUDE.md` impose la mise à jour de `CODEBASE_MAP.md` après toute tâche qui modifie des fichiers.

**Files:**
- Modify: `CODEBASE_MAP.md`
- Modify: `contenu.md`

**Interfaces:**
- Consumes: les cinq modules créés dans les tâches 1 à 5.
- Produces: rien de programmatique.

- [ ] **Step 1: Ajouter la section `scripts/manuel/` à `CODEBASE_MAP.md`**

Insérer, en suivant le format existant du fichier (chemin, rôle en une ligne, puis fonctions) :

```markdown
## scripts/manuel/schema.js
Valide la forme d'un module de js/data avant conversion.
- validerModule(mod) — controle les champs obligatoires
- normaliserExercice(ex) — solution toujours en tableau

## scripts/manuel/extract.js
Charge un module hors navigateur avec un tirage reproductible.
- chargerModule(chemin, {graine, tirages}) — contexte vm ensemence
- RACINE — chemin absolu du depot

## scripts/manuel/unicode.js
Traduit les caracteres hors couverture LaTeX, signale les inconnus.
- enMath(texte, ou) — commandes math via ensuremath
- enTexte(texte, ou, emettre) — symboles en mode texte
- nonMappes — registre des caracteres non traduits

## scripts/manuel/latex.js
Convertit le HTML et le KaTeX des modules en LaTeX.
- versLatex(valeur) — conversion complete, ordre des etapes critique
- nombreFr(valeur) — virgule francaise pour les nombres bruts
- definirOrigine(id) — localise un caractere inconnu

## scripts/manuel/verifier-corpus.js
Passe le socle sur les 203 modules reels, filet anti-regression.
- listerModules() — chemins de tous les modules
- verifierCorpus({graine, tirages}) — rapport de validation
```

- [ ] **Step 2: Ajouter la mention dans `contenu.md`**

Ajouter une ligne dans la section décrivant l'architecture des scripts :

```markdown
- `scripts/manuel/` — socle d'export des modules vers LaTeX (schema, extraction ensemencee, conversion, verification corpus). Voir `docs/superpowers/specs/2026-08-16-manuels-spark-design.md`.
```

- [ ] **Step 3: Lancer la suite complète**

Run: `node --test scripts/manuel/tests/`
Expected: PASS — 35 tests réussis, aucun échec.

- [ ] **Step 4: Commit**

```bash
git add CODEBASE_MAP.md contenu.md
git commit -m "docs(manuel): documente le socle dans CODEBASE_MAP et contenu"
```

---

## Ce que ce plan ne fait pas

Volontairement hors périmètre, traité par les plans suivants :

- **Figures** (plan 2) — `figures.js` : SVG→TikZ, arcs, PGFPlots, garde-fou de provenance.
- **Assemblage** (plan 3) — `chapitre.js`, `ouvrage.js`, `build.js`, gouttière en deux passes, couverture.
- **Tableau de bord et skill** (plan 4) — `progression.js`, `SKILL.md` de `manuels-spark`.

À l'issue de ce plan, on peut convertir n'importe quel module en fragments LaTeX corrects et
reproductibles, et prouver que ça tient sur les 203. On ne produit pas encore de PDF.
