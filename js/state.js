/* =========================================================
   Spark Learning – state.js
   État global, thème, progression, lookup modules
   ========================================================= */

/* ── Constantes centralisées ── */
const LEVEL_NAMES = { 1: 'Collège', 2: 'Lycée', 3: 'BTS' };
const LEVEL_DEFS = [
  { id: 1, icon: '🏫', label: 'Collège', color: 'var(--primary)' },
  { id: 2, icon: '🎓', label: 'Lycée',  color: 'var(--secondary)' },
  { id: 3, icon: '🏆', label: 'BTS',    color: 'var(--accent)' }
];

/* ── Subject definitions ── */
const SUBJECT_DEFS = [
  {
    id: 'maths', icon: '📐', label: 'Mathématiques',
    color: 'var(--primary)',
    description: 'Du calcul littéral aux équations différentielles, les maths qui servent en sciences.',
    availableLevels: [1, 2, 3],
    applicationLabel: 'Application physique-chimie',
    applicationIcon: '🔬',
    applicationQuestion: 'Où cette notion est-elle utilisée ?',
    formulasLabel: 'Formules clés',
    formulasIcon: '📐'
  },
  {
    id: 'physique', icon: '⚛️', label: 'Physique-Chimie',
    color: 'var(--secondary)',
    description: 'Mécanique, électricité, chimie — comprendre le monde par l\'expérience et le calcul.',
    availableLevels: [1, 2, 3],
    applicationLabel: 'Application dans la vie courante',
    applicationIcon: '🌍',
    applicationQuestion: 'Où ce phénomène intervient-il ?',
    formulasLabel: 'Lois et formules clés',
    formulasIcon: '⚗️'
  },
  {
    id: 'si', icon: '⚙️', label: 'Sciences de l\'Ingénieur',
    color: 'var(--accent)',
    description: 'Systèmes mécaniques, énergétiques et informatiques — de la conception à la réalisation.',
    availableLevels: [2, 3],
    applicationLabel: 'Application industrielle',
    applicationIcon: '🏭',
    applicationQuestion: 'Où retrouve-t-on ce principe en ingénierie ?',
    formulasLabel: 'Relations fondamentales',
    formulasIcon: '📏'
  }
];

function getSubjectDef(id) {
  return SUBJECT_DEFS.find(s => s.id === id) || SUBJECT_DEFS[0];
}

/* ── State defaults (factories) ── */
function defaultQuizState()       { return { current: 0, score: 0, answered: false, complete: false }; }
function defaultExerciceState()   { return { current: null, attempts: 0, hintShown: false, solved: false, solutionShown: false }; }
function defaultProblemeState()   { return { revealed: 0 }; }
function defaultEvaluationState() { return { current: 0, answers: [], complete: false, score: 0, totalPoints: 0, showCorrection: false }; }

/* ── Helpers ── */
function pluralize(word, count, plural) {
  return count > 1 ? (plural || word + 's') : word;
}

/* ── State ── */
const state = {
  view: 'home',
  subject: null,
  level: null,
  moduleId: null,
  tab: 'cours',
  searchQuery: '',
  sortBy: 'default',
  activeKeywords: [],
  quizState: defaultQuizState(),
  exerciceState: defaultExerciceState(),
  problemeState: defaultProblemeState(),
  evaluationState: defaultEvaluationState(),
  progress: JSON.parse(localStorage.getItem('sparkProgress') || '{}'),
  batchPrintMode: false,
  selectedForPrint: []
};

/* ── Module lookup ── */
function getModule(id) {
  return window.MODULES.find(m => m.id === id);
}

/* ── Theme ── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('sparkTheme', next);
}

/* ── Progress helpers ── */
function saveProgress(moduleId, type) {
  if (!state.progress[moduleId]) state.progress[moduleId] = {};
  state.progress[moduleId][type] = true;
  localStorage.setItem('sparkProgress', JSON.stringify(state.progress));
}

/* ── Recent modules tracking ── */
function trackRecentModule(moduleId) {
  let recent = JSON.parse(localStorage.getItem('sparkRecent') || '[]');
  recent = recent.filter(id => id !== moduleId);
  recent.unshift(moduleId);
  if (recent.length > 5) recent = recent.slice(0, 5);
  localStorage.setItem('sparkRecent', JSON.stringify(recent));
}

function getRecentModules() {
  const recent = JSON.parse(localStorage.getItem('sparkRecent') || '[]');
  return recent.map(id => getModule(id)).filter(Boolean).slice(0, 3);
}

function getModuleProgress(moduleId) {
  const p = state.progress[moduleId] || {};
  const mod = getModule(moduleId);
  const hasEval = mod && mod.evaluation;
  const total = hasEval ? 4 : 3; // quiz, exercice, probleme [, evaluation]
  let done = 0;
  if (p.quiz) done++;
  if (p.exercice) done++;
  if (p.probleme) done++;
  if (hasEval && p.evaluation) done++;
  return { done, total, pct: Math.round((done / total) * 100) };
}
