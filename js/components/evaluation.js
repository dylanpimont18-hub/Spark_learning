/* =========================================================
   Spark Learning – components/evaluation.js
   Rendu de l'évaluation
   ========================================================= */

function renderEvaluation(mod) {
  if (!mod.evaluation) {
    return `<div class="eval-placeholder">
      <div style="font-size:3rem;margin-bottom:16px;">📝</div>
      <p style="color:var(--text-muted);font-size:1rem;">
        L'évaluation type pour ce module sera bientôt disponible.
      </p>
    </div>`;
  }
  const homeworkBtn = `<div style="margin-top:var(--space-md);">
    <button class="add-to-homework-btn" onclick="addToHomework('${mod.id}','evaluation')">+ Ajouter au devoir</button>
  </div>`;
  if (state.evaluationState.complete) {
    return renderEvaluationResults(mod) + homeworkBtn;
  }
  return renderEvaluationQuestion(mod) + homeworkBtn;
}

function renderEvaluationQuestion(mod) {
  const es = state.evaluationState;
  const questions = mod.evaluation.questions;
  const q = questions[es.current];
  const total = questions.length;
  const totalPoints = questions.reduce((s, q) => s + q.points, 0);
  const progressPct = Math.round((es.current / total) * 100);
  const letters = ['A', 'B', 'C', 'D'];

  return `
    <div class="eval-content">
      <div class="eval-header">
        <div class="eval-title-row">
          <span class="eval-badge">📝 ${mod.evaluation.title}</span>
          <span class="eval-duration">⏱ ${mod.evaluation.duration}</span>
        </div>
        <div style="font-size:0.85rem;color:var(--text-muted);margin-top:6px;">
          Barème : ${totalPoints} points
        </div>
      </div>

      <div class="eval-card" id="eval-card">
        <div class="eval-progress-row">
          <span>Question ${es.current + 1} / ${total}</span>
          <span>${q.points} ${pluralize('point', q.points)}</span>
        </div>
        <div class="progress-bar" style="margin-bottom:24px;">
          <div class="progress-fill" style="width:${progressPct}%;"></div>
        </div>

        <div class="eval-statement">${q.statement}</div>

        ${q.type === 'numeric' ? `
          <div class="exercice-input-row">
            <input type="number" id="eval-input" class="exercice-input"
                   placeholder="Ta réponse…" step="any"
                   onkeydown="if(event.key==='Enter') submitEvaluationAnswer('${mod.id}')" />
            ${q.unit ? `<span class="exercice-unit">${q.unit}</span>` : ''}
            <button class="btn btn-primary" onclick="submitEvaluationAnswer('${mod.id}')">
              Valider ✓
            </button>
          </div>
        ` : `
          <ul class="quiz-options">
            ${q.options.map((opt, i) => `
              <li>
                <button class="eval-option quiz-option" id="eval-opt-${i}"
                        onclick="submitEvaluationChoice('${mod.id}', ${i})">
                  <span class="quiz-option-letter">${letters[i]}</span>
                  <span>${opt}</span>
                </button>
              </li>
            `).join('')}
          </ul>
        `}
      </div>
    </div>
  `;
}

function renderEvaluationResults(mod) {
  const es = state.evaluationState;
  const questions = mod.evaluation.questions;
  const pct = es.totalPoints > 0 ? Math.round((es.score / es.totalPoints) * 100) : 0;

  let message, emoji;
  if (pct >= 90)      { message = 'Excellent ! Tu es prêt(e) pour cette évaluation.'; emoji = '🏆'; }
  else if (pct >= 70) { message = 'Bien joué ! Quelques points à revoir, mais c\'est solide.'; emoji = '🎯'; }
  else if (pct >= 50) { message = 'Pas mal ! Relis le cours et les exercices pour consolider.'; emoji = '📖'; }
  else                { message = 'Continue tes efforts ! Reprends le cours et les exercices, tu progresseras.'; emoji = '💪'; }

  return `
    <div class="eval-results">
      <div style="font-size:4rem;margin-bottom:12px;">${emoji}</div>
      <div class="score-display">${es.score}/${es.totalPoints}</div>
      <div class="score-fraction">${pct}% — ${es.answers.filter(a => a.correct).length}/${questions.length} questions correctes</div>
      <div class="score-message">${message}</div>

      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:24px;">
        <button class="btn btn-primary" onclick="resetEvaluation('${mod.id}')">
          Recommencer l'évaluation 🔄
        </button>
        <button class="btn btn-secondary" onclick="toggleEvaluationCorrection()">
          ${es.showCorrection ? 'Masquer' : 'Voir'} la correction 📖
        </button>
      </div>

      ${es.showCorrection ? `
        <div class="eval-corrections">
          ${questions.map((q, i) => `
            <div class="eval-correction-item ${es.answers[i].correct ? 'correct' : 'incorrect'}">
              <div class="eval-correction-header">
                <span class="eval-q-num">Q${i + 1}</span>
                <span>${es.answers[i].correct ? '✅' : '❌'}</span>
                <span class="eval-q-points">${es.answers[i].correct ? q.points : 0}/${q.points} ${pluralize('pt', q.points)}</span>
              </div>
              <div class="eval-q-statement">${q.statement}</div>
              <div class="eval-q-correction">${q.correction}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:24px;">
        <button class="btn btn-primary" onclick="navigate('modules', {level: ${mod.level}})">
          Retour aux modules 📚
        </button>
        <button class="btn btn-secondary" onclick="switchTab('cours')">
          Revoir le cours 📖
        </button>
      </div>
    </div>
  `;
}
