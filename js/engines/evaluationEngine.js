/* =========================================================
   Spark Learning – engines/evaluationEngine.js
   Moteur d'évaluation
   ========================================================= */

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
    inputEl.placeholder = 'Entre un nombre…';
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
    if (typeof Storage !== 'undefined' && Storage.trackEvaluationScore) {
      Storage.trackEvaluationScore(mod.id, es.score, es.totalPoints);
    }
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
