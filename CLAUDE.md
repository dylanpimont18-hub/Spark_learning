# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the site

No build step. Open `index.html` directly in a browser. All dependencies load from CDN (KaTeX, Google Fonts). No server, no npm, no bundler.

## Architecture

Pure vanilla JS SPA. Scripts must load in this order (set in `index.html`):

- `index.html` — Shell: sticky header, `<main id="app">`, footer. Loads KaTeX CDN then all JS files below.
- `css/styles.css` — Full design system via CSS variables. Theme switching is `data-theme="light|dark"` on `<html>`.
- `js/data/helpers.js` — Initialises `window.MODULES = []` and declares `rand()`, `randFloat()`, `pick()`. **Must load first.**
- `js/data/6e.js`, `5e.js`, `4e.js`, `3e.js` — Collège modules (12 / 13 / 14 / 13). Each file calls `window.MODULES.push(...)`.
- `js/data/lycee-2nde.js`, `lycee-1re.js`, `lycee-tle.js` — Lycée modules (13 / 12 / 11).
- `js/data/bts.js` — BTS modules (14).
- `js/state.js` — `SUBJECT_DEFS[]` (subject config: id, label, icon, color, availableLevels, applicationLabel/Icon/Question, formulasLabel/Icon), `getSubjectDef()`, `state` object (includes `subject`), `getModule()`, theme helpers (`applyTheme`, `toggleTheme`), progress helpers (`saveProgress`, `getModuleProgress`), recent modules tracking (`trackRecentModule`, `getRecentModules`).
- `js/engines.js` — Quiz engine (`submitQuizAnswer`, `nextQuizQuestion`, `resetQuiz`), exercice engine (`submitExerciceAnswer`, `showHint`, `showSolution`, `generateNewExercice`, `getErrorFeedback`), problème engine (`revealSolution`), évaluation engine (`submitEvaluationAnswer`, `submitEvaluationChoice`, `resetEvaluation`, `toggleEvaluationCorrection`).
- `js/render.js` — All render functions: `renderHome`, `renderSubjects`, `renderLevels`, `renderModulesList`, `renderModuleDetail`, `renderTabContent`, `renderCours`, `renderQuiz`, `renderExercice`, `renderProbleme`, `renderSolutionSteps`, `renderEvaluation`, `renderEvaluationQuestion`, `renderEvaluationResults`.
- `js/app.js` — Router (`navigate`, `switchTab`, `render`), hash routing (`buildHash`, `parseHash`), search/filter/sort (`filterModules`, `sortModules`, `toggleKeyword`), utilities (`renderMath`, `createConfetti`, `showToast`), keyboard shortcuts, init (`DOMContentLoaded`).

## SPA routing

State lives in a single `state` object in `state.js`. Navigation calls `navigate(view, data)` which mutates state and calls `render()`. Views: `home → subjects → levels → modules → module`.

URL hash routing is enabled: `#home`, `#subjects`, `#levels/{subject}`, `#modules/{subject}/{level}`, `#module/{id}/{tab}`. The `hashchange` listener supports browser back/forward. `_suppressHashChange` prevents double renders when `navigate()` itself sets the hash. Old URLs like `#levels` or `#modules/1` default to `subject: 'maths'` for backward compatibility.

```
navigate('module', { moduleId: 'calcul-algebrique' })
switchTab('quiz')   // tab switch without full re-render
```

Key `state` fields: `view`, `subject` (`'maths'|'physique'|'si'`), `level`, `moduleId`, `tab` (`'cours'|'quiz'|'exercice'|'probleme'|'evaluation'`), `searchQuery`, `sortBy`, `activeKeywords[]`, `quizState`, `exerciceState` (holds `attempts` counter), `problemeState` (holds `revealed` index), `evaluationState` (holds `current`, `answers[]`, `score`, `complete`, `showCorrection`), `progress`.

`getModuleProgress(moduleId)` → `{ done, total, pct }`. Progress is **binary per section** (quiz/exercice/probleme/evaluation): either fully completed or not — no partial credit stored. `total` is 4 if the module has an `evaluation` property, otherwise 3.

After every render, `renderMath()` calls `renderMathInElement()` from KaTeX to process `$...$` and `$$...$$` in `#app`. KaTeX is configured with `throwOnError: false` — malformed math degrades gracefully.

## Module data structure

Each module in `window.MODULES` has:
```js
{
  id, level,    // level: 1=Collège, 2=Lycée, 3=BTS
  subject,      // 'maths' | 'physique' | 'si'
  icon, title, subtitle, keywords[], physics,
  cours: { intro, method: { title, steps[] }, formulas[], piege },
  quiz: [{ q, options[], answer (index), correction }],   // 3 questions
  exercice: { type: 'numeric'|'multiple-choice', generate() → { statement, answer, tolerance, unit, hint, solution[] } },
  probleme: { context, tasks[], solutions[], finalAnswer },
  evaluation: { title, duration, questions: [{ statement, type, answer, tolerance?, unit?, options?, points, correction }] }
}
```

`exercice.generate()` uses `rand()`/`randFloat()` to randomize parameters on each call, computing the correct `answer` from those parameters.

## Exercise engine

Located in `engines.js`. Key flow:
- `switchTab('exercice')` auto-generates first exercise via `mod.exercice.generate()`
- `submitExerciceAnswer()` checks `Math.abs(userInput - answer) <= tolerance`
- Wrong: adds `.state-error` (shake animation) then removes after 600ms; shows socratic feedback
- After 2 attempts: hint revealed; after 3: full step-by-step solution
- Right: adds `.state-success` (glow animation) + `createConfetti()`
- `getErrorFeedback(mod, attempts)` in `engines.js` returns socratic feedback strings. When adding a module, its `cours.piege` or custom logic in this function can provide richer per-topic feedback.
- Progress saved to `localStorage` under key `sparkProgress` as `{ [moduleId]: { quiz, exercice, probleme, evaluation } }`
- Theme persisted under `localStorage` key `sparkTheme`
- Recent modules (last 5 visited) under `localStorage` key `sparkRecent`

## Evaluation engine

Located in `engines.js`. The **évaluation** tab is a teacher-style exam simulation:
- 4–5 static questions per module, mixing `numeric` and `multiple-choice` types, with a points system (~10 pts total).
- One attempt per question — no hints, no retry. Student answers and advances immediately.
- `submitEvaluationAnswer(moduleId)` handles numeric inputs; `submitEvaluationChoice(moduleId, index)` handles MCQ.
- `_advanceEvaluation(mod)` moves to next question or triggers completion (confetti + progress save).
- On completion: score display with per-question correction toggle (`toggleEvaluationCorrection()`).
- `resetEvaluation(moduleId)` resets UI state but does not clear saved progress.
- If a module lacks `evaluation` data, the tab shows a placeholder ("bientôt disponible").

The **problème** tab enforces sequential task reveal: `revealSolution(moduleId, taskIndex)` blocks out-of-order clicks. `saveProgress()` is only called once all tasks are revealed.

## Modules list — search, filter, sort

The `modules` view has client-side search, keyword filtering, and sorting (all in `app.js`):
- `filterModules(query)` — debounced (150ms) text search on title, subtitle, and keywords
- `toggleKeyword(kw)` — toggles keyword-based filter tags (AND logic: all active keywords must match)
- `sortModules(criterion)` — `'default'`, `'alpha'`, `'progress'`
- `_applyModuleFilters()` — applies all three filters by showing/hiding DOM cards (no re-render)

Search state (`searchQuery`, `activeKeywords`) resets when navigating to a different level.

## Keyboard shortcuts

- **Escape**: navigate back (module → modules → levels → home)
- **1–4 / A–D**: select quiz option (when on quiz tab, before answering)

## Navigation flags

`navigate(view, data)` resets all sub-states by default when entering `'module'`. Pass flags to preserve them:
```js
navigate('module', { moduleId: '...', keepQuiz: true, keepExercice: true, keepProbleme: true, keepEvaluation: true })
```

## Adding a new module

1. Add an object to `window.MODULES` in the appropriate grade-level file (`js/data/6e.js`, `5e.js`, etc.) with `level: 1|2|3`
2. The `generate()` function must return `{ statement, answer, tolerance, unit, hint, solution[] }`
3. All math strings use KaTeX syntax: `$formula$` inline, `$$formula$$` display
4. **French decimal format**: use `1{,}5` (not `1.5`) inside all KaTeX strings
5. Use `type: 'numeric'` (strongly preferred); `'multiple-choice'` is supported by the engine but unused
6. Add an `evaluation` with 4–5 questions (mix of numeric and MCQ), ~10 points total. Questions are static (no `generate()`), exam-style, neutral tone

## Design tokens

All colors, spacing, and radius are CSS variables on `:root` / `[data-theme="dark"]`. Never hardcode colors. Key variables: `--primary`, `--secondary`, `--accent`, `--success`, `--error`, `--bg`, `--bg-card`, `--text`, `--text-muted`, `--border`, `--radius`, `--shadow`. Feedback states use `.state-success` / `.state-error` CSS classes on `.card-exercise`.

For tinted backgrounds use `color-mix(in srgb, var(--primary) 8%, transparent)` — never hardcode semi-transparent hex. Responsive font sizes use `clamp(minRem, vw, maxRem)`. The sticky header uses `backdrop-filter: blur(12px)` — preserve this on header edits.

Fonts: headings use `Poppins`, body uses `Inter`. Logo images swap via `.logo-light` / `.logo-dark` CSS classes (light mode shows `Logo_noir.jpeg`, dark shows `Logo_blanc.jpeg`).

## Tone constraint

All user-facing feedback text must be socratic and non-punitive. No "FAUX" or "ERREUR". Use constructions like *"Tu es sur la bonne voie ! Mais n'oublie pas de…"*. This is a core UX requirement from the cahier des charges.

## Multi-subject architecture

The platform supports multiple subjects (matières). Configuration is in `SUBJECT_DEFS[]` in `state.js`.

Current subjects: `maths`, `physique` (Physique-Chimie), `si` (Sciences de l'Ingénieur).

Each module must have a `subject` field (`'maths'|'physique'|'si'`). Not all subjects are available at all levels (e.g., SI is Lycée + BTS only — see `availableLevels` in `SUBJECT_DEFS`).

Section labels (formulas title, application title/question) are driven by `SUBJECT_DEFS`, not hardcoded. When rendering, always use `getSubjectDef(mod.subject || 'maths')` for labels.

The `physics` field on each module holds the cross-disciplinary application text, regardless of subject. The display label comes from `subjectDef.applicationLabel`.

### Adding a new subject

1. Add an entry to `SUBJECT_DEFS[]` in `js/state.js` with all required fields
2. Create curriculum file `docs/programmes-{subject}.md`
3. Create data files `js/data/{subject}-{grade}.js` (e.g., `physique-2nde.js`)
4. Add `<script>` tags in `index.html` (after existing data files, before `state.js`)
5. The rendering pipeline will automatically pick up the new subject

## Module coverage — curriculum files

Curriculum source of truth per subject:
- **Maths**: `docs/programmes-maths.md`
- **Physique-Chimie**: `docs/programmes-physique.md`
- **Sciences de l'Ingénieur**: `docs/programmes-si.md`

Each file lists ALL chapters for that subject from Collège to BTS with a status per chapter.

### Absolute rules

- **Before creating a module**: read the appropriate `docs/programmes-{subject}.md` to verify the chapter and level.
- **After creating a module**: update the status (🔴 → 🟢).
- **No duplicates**: verify the module `id` doesn't already exist in any `js/data/*.js` file.
- **Level mapping**: 6e/5e/4e/3e → `level: 1`, 2nde/1re/Tle → `level: 2`, BTS → `level: 3`.
- **Subject field**: every module must include `subject: 'maths'|'physique'|'si'`.
- **Priority**: complete one grade level entirely before moving to the next.

### Generation loop workflow

When asked to "generate modules for [subject] [level]":
1. Read the appropriate `docs/programmes-{subject}.md`, filter 🔴 chapters for the requested level
2. For each 🔴 chapter, in curriculum order:
   a. Create the full module (cours + 3 quiz + generate() + problème + évaluation)
   b. Add it to `window.MODULES` in the appropriate data file
   c. Mark status 🟢 in the curriculum file
   d. Move to next chapter
3. At the end, display a summary: chapters done / remaining

If context becomes too long, stop cleanly, indicate where you left off, and resume at the next 🔴 in the following session.
