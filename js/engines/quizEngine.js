/* =========================================================
   Spark Learning – engines/quizEngine.js
   Moteur de quiz
   ========================================================= */

function submitQuizAnswer(moduleId, questionIndex, optionIndex) {
  const mod = getModule(moduleId);
  if (!mod) return;
  const q = mod.quiz[questionIndex];
  if (state.quizState.answered) return;

  state.quizState.answered = true;
  const isCorrect = optionIndex === q.answer;
  if (isCorrect) state.quizState.score++;

  const buttons = document.querySelectorAll('.quiz-option');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === optionIndex && !isCorrect) btn.classList.add('wrong');
  });

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
    if (typeof Storage !== 'undefined' && Storage.trackQuizScore) {
      Storage.trackQuizScore(moduleId, qs.score, mod.quiz.length);
    }
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
