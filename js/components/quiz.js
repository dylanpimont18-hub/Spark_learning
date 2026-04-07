/* =========================================================
   Spark Learning – components/quiz.js
   Rendu du quiz
   ========================================================= */

function renderQuiz(mod) {
  if (state.quizState.complete) {
    return renderQuizResults(mod);
  }
  return renderQuizQuestion(mod);
}

function renderQuizQuestion(mod) {
  const qs = state.quizState;
  const q = mod.quiz[qs.current];
  const total = mod.quiz.length;
  const letters = ['A', 'B', 'C', 'D'];

  const progressPct = Math.round((qs.current / total) * 100);

  return `
    <div class="quiz-card">
      <div class="quiz-progress-row">
        <span>Question ${qs.current + 1} / ${total}</span>
        <span>Score : ${qs.score} / ${qs.current}</span>
      </div>
      <div class="progress-bar" style="margin-bottom:24px;">
        <div class="progress-fill" style="width:${progressPct}%;"></div>
      </div>

      <p class="quiz-question-text">${q.q}</p>

      <ul class="quiz-options" id="quiz-options">
        ${q.options.map((opt, i) => `
          <li>
            <button
              class="quiz-option"
              id="quiz-opt-${i}"
              onclick="submitQuizAnswer('${mod.id}', ${qs.current}, ${i})"
              ${qs.answered ? 'disabled' : ''}
              aria-label="Option ${letters[i]}: ${opt}"
            >
              <span class="quiz-option-letter">${letters[i]}</span>
              <span>${opt}</span>
            </button>
          </li>
        `).join('')}
      </ul>

      ${qs.answered ? `
        <div class="quiz-correction" id="quiz-correction">
          💬 ${q.correction}
        </div>
        <div class="quiz-nav">
          <button class="btn btn-primary" onclick="nextQuizQuestion('${mod.id}')">
            ${qs.current + 1 < total ? 'Question suivante →' : 'Voir mes résultats 🏆'}
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

function renderQuizResults(mod) {
  const qs = state.quizState;
  const total = mod.quiz.length;
  const pct = Math.round((qs.score / total) * 100);
  let message, emoji;
  if (pct === 100) { message = 'Parfait ! Tu maîtrises complètement cette notion. 🌟'; emoji = '🏆'; }
  else if (pct >= 67) { message = 'Très bien ! Quelques points à consolider, mais tu es sur la bonne voie.'; emoji = '🎯'; }
  else if (pct >= 33) { message = 'Pas mal ! Relis le cours et retente l\'exercice pour consolider.'; emoji = '📖'; }
  else { message = 'C\'est un bon début. Relis le cours attentivement, l\'essentiel est de comprendre.'; emoji = '💪'; }

  return `
    <div class="quiz-results">
      <div style="font-size:4rem;margin-bottom:12px;">${emoji}</div>
      <div class="score-display">${qs.score}/${total}</div>
      <div class="score-fraction">${pct}% de bonnes réponses</div>
      <div class="score-message">${message}</div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="resetQuiz('${mod.id}')">
          Recommencer le quiz
        </button>
        <button class="btn btn-secondary" onclick="switchTab('exercice')">
          Passer à l'exercice
        </button>
      </div>
      ${typeof renderRecommendationCards === 'function' ? renderRecommendationCards(mod.id) : ''}
    </div>
  `;
}
