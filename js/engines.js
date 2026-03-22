/* =========================================================
   Spark Learning – engines.js
   Logique des moteurs : Quiz, Exercice, Problème, Évaluation
   ========================================================= */

/* ── Timer registry (cleared on navigate) ── */
const _engineTimers = [];
function _setEngineTimeout(fn, delay) {
  const id = setTimeout(fn, delay);
  _engineTimers.push(id);
  return id;
}
function clearEngineTimers() {
  _engineTimers.forEach(id => clearTimeout(id));
  _engineTimers.length = 0;
}

/* ═══════════════════════════════════════
   QUIZ ENGINE
═══════════════════════════════════════ */
function submitQuizAnswer(moduleId, questionIndex, optionIndex) {
  const mod = getModule(moduleId);
  if (!mod) return;
  const q = mod.quiz[questionIndex];
  if (state.quizState.answered) return;

  state.quizState.answered = true;
  const isCorrect = optionIndex === q.answer;
  if (isCorrect) state.quizState.score++;

  // Update UI without full re-render
  const buttons = document.querySelectorAll('.quiz-option');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === optionIndex && !isCorrect) btn.classList.add('wrong');
  });

  // Show correction and next button
  const card = document.querySelector('.quiz-card');
  const existing = document.getElementById('quiz-correction');
  if (!existing) {
    const correctionDiv = document.createElement('div');
    correctionDiv.className = 'quiz-correction';
    correctionDiv.id = 'quiz-correction';
    correctionDiv.innerHTML = `💬 ${q.correction}`;
    card.appendChild(correctionDiv);

    const navDiv = document.createElement('div');
    navDiv.className = 'quiz-nav';
    const isLast = questionIndex + 1 >= mod.quiz.length;
    navDiv.innerHTML = `
      <button class="btn btn-primary" onclick="nextQuizQuestion('${moduleId}')">
        ${isLast ? 'Voir mes résultats 🏆' : 'Question suivante →'}
      </button>
    `;
    card.appendChild(navDiv);
    renderMath();
  }
}

function nextQuizQuestion(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return;
  const qs = state.quizState;

  if (qs.current + 1 >= mod.quiz.length) {
    state.quizState.complete = true;
    saveProgress(moduleId, 'quiz');
    renderTabContent();
    renderMath();
    createConfetti();
    if (qs.score === mod.quiz.length) {
      showToast('Quiz parfait ! 🌟', 'achievement');
    }
    _checkModuleComplete(moduleId);
  } else {
    state.quizState.current++;
    state.quizState.answered = false;
    renderTabContent();
    renderMath();
  }
}

function resetQuiz(moduleId) {
  state.quizState = defaultQuizState();
  renderTabContent();
  renderMath();
}

/* ═══════════════════════════════════════
   EXERCICE ENGINE
═══════════════════════════════════════ */
function getErrorFeedback(mod, attempts) {
  const generic = [
    'Ce n\'est pas tout \u00e0 fait \u00e7a ! Relis bien l\'\u00e9nonc\u00e9 et v\u00e9rifie chaque \u00e9tape.',
    'Tu es sur la bonne voie ! Mais rev\u00e9rifie ton calcul \u2014 une petite erreur s\'est gliss\u00e9e.',
    'Presque ! Pense \u00e0 bien v\u00e9rifier les unit\u00e9s et l\'ordre de grandeur du r\u00e9sultat.'
  ];
  // Use module's piege field for context-specific feedback on first attempt
  if (attempts === 1 && mod.cours && mod.cours.piege) {
    const clean = mod.cours.piege.replace(/^Pi\u00e8ge\s*(classique)?\s*:\s*/i, '').split(/[.!]\s/)[0] + '.';
    return clean;
  }
  return generic[Math.min(attempts - 1, generic.length - 1)];
}

function submitExerciceAnswer(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return;
  const inputEl = document.getElementById('exercice-input');
  if (!inputEl) return;

  const userInput = parseFloat(inputEl.value);
  if (isNaN(userInput)) {
    inputEl.style.borderColor = 'var(--error)';
    inputEl.placeholder = 'Entre un nombre\u2026';
    return;
  }

  const ex = state.exerciceState.current;
  const tol = ex.tolerance !== undefined ? ex.tolerance : 0.001;
  const isCorrect = Math.abs(userInput - ex.answer) <= tol;

  const card = document.getElementById('exercice-card');

  if (isCorrect) {
    state.exerciceState.solved = true;
    saveProgress(moduleId, 'exercice');
    card.classList.add('state-success');
    renderTabContent();
    renderMath();
    createConfetti();
    if (state.exerciceState.attempts === 0) {
      showToast('Du premier coup ! 🎯', 'achievement');
    }
    _checkModuleComplete(moduleId);
  } else {
    state.exerciceState.attempts++;
    card.classList.add('state-error');
    _setEngineTimeout(() => {
      if (card) card.classList.remove('state-error');
    }, 600);
    renderTabContent();
    renderMath();
    // Re-focus input
    _setEngineTimeout(() => {
      const newInput = document.getElementById('exercice-input');
      if (newInput) {
        newInput.focus();
        newInput.select();
      }
    }, 50);
  }
}

function showHint(moduleId) {
  state.exerciceState.hintShown = true;
  renderTabContent();
  renderMath();
}

function showSolution(moduleId) {
  state.exerciceState.solutionShown = true;
  renderTabContent();
  renderMath();
}

function generateNewExercice(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return;
  state.exerciceState = { ...defaultExerciceState(), current: mod.exercice.generate() };
  renderTabContent();
  renderMath();
}

/* ═══════════════════════════════════════
   PROBL\u00c8ME ENGINE
═══════════════════════════════════════ */
/* ── Module completion check ── */
function _checkModuleComplete(moduleId) {
  const p = getModuleProgress(moduleId);
  if (p.done === p.total && p.done > 0) {
    _setEngineTimeout(() => showToast('Module termin\u00e9 ! 🏅', 'achievement'), 500);
    // Check if entire level is done
    const mod = getModule(moduleId);
    if (mod) {
      const levelMods = window.MODULES.filter(m => m.level === mod.level);
      const allDone = levelMods.every(m => {
        const mp = getModuleProgress(m.id);
        return mp.done === mp.total && mp.done > 0;
      });
      if (allDone) {
        _setEngineTimeout(() => showToast(`Niveau ${LEVEL_NAMES[mod.level]} compl\u00e9t\u00e9 ! 🎉`, 'achievement'), 1500);
      }
    }
  }
}

function revealSolution(moduleId, taskIndex) {
  const mod = getModule(moduleId);
  if (!mod) return;
  if (state.problemeState.revealed !== taskIndex) return; // must be sequential
  state.problemeState.revealed = taskIndex + 1;
  if (state.problemeState.revealed >= mod.probleme.tasks.length) {
    saveProgress(moduleId, 'probleme');
    createConfetti();
    _checkModuleComplete(moduleId);
  }
  renderTabContent();
  renderMath();
}

/* ═══════════════════════════════════════
   EVALUATION ENGINE
═══════════════════════════════════════ */
function submitEvaluationAnswer(moduleId) {
  const mod = getModule(moduleId);
  if (!mod || !mod.evaluation) return;
  const es = state.evaluationState;
  const q = mod.evaluation.questions[es.current];

  const inputEl = document.getElementById('eval-input');
  if (!inputEl) return;
  const userInput = parseFloat(inputEl.value);
  if (isNaN(userInput)) {
    inputEl.style.borderColor = 'var(--error)';
    inputEl.placeholder = 'Entre un nombre\u2026';
    return;
  }

  const tol = q.tolerance !== undefined ? q.tolerance : 0.01;
  const isCorrect = Math.abs(userInput - q.answer) <= tol;
  es.answers.push({ value: userInput, correct: isCorrect });
  if (isCorrect) es.score += q.points;

  _advanceEvaluation(mod);
}

function submitEvaluationChoice(moduleId, optionIndex) {
  const mod = getModule(moduleId);
  if (!mod || !mod.evaluation) return;
  const es = state.evaluationState;
  if (es.answered) return;
  es.answered = true;
  const q = mod.evaluation.questions[es.current];

  const isCorrect = optionIndex === q.answer;
  es.answers.push({ value: optionIndex, correct: isCorrect });
  if (isCorrect) es.score += q.points;

  // Show feedback on buttons briefly before advancing
  const buttons = document.querySelectorAll('.eval-option');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === optionIndex && !isCorrect) btn.classList.add('wrong');
  });

  _setEngineTimeout(() => _advanceEvaluation(mod), 600);
}

function _advanceEvaluation(mod) {
  const es = state.evaluationState;
  if (es.current + 1 >= mod.evaluation.questions.length) {
    es.complete = true;
    es.totalPoints = mod.evaluation.questions.reduce((s, q) => s + q.points, 0);
    saveProgress(mod.id, 'evaluation');
    createConfetti();
    _checkModuleComplete(mod.id);
  } else {
    es.current++;
    es.answered = false;
  }
  renderTabContent();
  renderMath();
}

function resetEvaluation(moduleId) {
  state.evaluationState = defaultEvaluationState();
  renderTabContent();
  renderMath();
}

function toggleEvaluationCorrection() {
  state.evaluationState.showCorrection = !state.evaluationState.showCorrection;
  renderTabContent();
  renderMath();
}
