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
  progress: JSON.parse(localStorage.getItem('sparkProgress') || '{}')
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
