/* =========================================================
   Spark Learning – components/exercice.js
   Rendu de l'exercice
   ========================================================= */

function renderExercice(mod) {
  if (!state.exerciceState.current) {
    state.exerciceState.current = mod.exercice.generate();
  }

  const ex = state.exerciceState.current;
  const es = state.exerciceState;

  return `
    <div class="card-exercise" id="exercice-card">
      <div class="exercice-statement">${ex.statement}</div>

      ${!es.solved ? `
        <div class="exercice-input-row">
          <input
            type="number"
            id="exercice-input"
            class="exercice-input"
            placeholder="Ta réponse…"
            step="any"
            aria-label="Entrer ta réponse"
            onfocus="this.scrollIntoView({behavior:'smooth',block:'center'})"
            onkeydown="if(event.key==='Enter') submitExerciceAnswer('${mod.id}')"
          />
          ${ex.unit ? `<span class="exercice-unit">${ex.unit}</span>` : ''}
          <button class="btn btn-primary" onclick="submitExerciceAnswer('${mod.id}')">
            Valider ✓
          </button>
        </div>

        ${es.attempts > 0 ? `
          <div class="exercice-feedback feedback-error" id="exercice-feedback" role="alert">
            ${getErrorFeedback(mod, es.attempts)}
          </div>
        ` : ''}

        ${es.hintShown ? `
          <div class="hint-box" id="hint-box">
            <div class="hint-box-title">💡 Indice</div>
            <div>${ex.hint}</div>
          </div>
        ` : ''}

        ${es.attempts >= 2 && !es.hintShown ? `
          <div class="exercice-actions">
            <button class="btn btn-hint" onclick="showHint('${mod.id}')">
              💡 Voir un indice
            </button>
          </div>
        ` : ''}

        ${es.attempts >= 3 ? `
          <div style="margin-top:12px;">
            <button class="btn btn-secondary btn-sm" onclick="showSolution('${mod.id}')">
              📖 Voir la solution complète
            </button>
          </div>
        ` : ''}

        ${es.solutionShown ? renderSolutionSteps(ex.solution) : ''}

      ` : `
        <div class="exercice-feedback feedback-success" role="alert">
          🎉 Bravo ! Tu as trouvé la bonne réponse : <strong>${ex.answer}${ex.unit ? ' ' + ex.unit : ''}</strong>. La persévérance, ça paie !
        </div>
        ${renderSolutionSteps(ex.solution)}
        <div class="exercice-actions">
          <button class="btn btn-primary" onclick="generateNewExercice('${mod.id}')">
            Nouvel exercice 🎲
          </button>
          <button class="btn btn-secondary" onclick="switchTab('probleme')">
            Passer au problème 🔭
          </button>
        </div>
      `}

      ${!es.solved && !es.attempts ? `
        <div class="exercice-actions" style="margin-top:12px;">
          <button class="btn btn-secondary btn-sm" onclick="generateNewExercice('${mod.id}')">
            Autre exercice
          </button>
        </div>
      ` : ''}

      <div style="margin-top:var(--space-lg);display:flex;gap:var(--space-sm);flex-wrap:wrap;">
        <button class="btn btn-secondary btn-sm" onclick="navigate('chrono', {moduleId:'${mod.id}'})">
          Défi Chrono 3 min
        </button>
        <button class="add-to-homework-btn" onclick="addToHomework('${mod.id}','exercice')">
          + Ajouter au devoir
        </button>
      </div>
    </div>
  `;
}

function renderSolutionSteps(steps) {
  return `
    <div class="solution-reveal">
      <div style="font-weight:700;color:var(--secondary);font-size:0.85rem;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;">Correction détaillée</div>
      ${steps.map((s, i) => `
        <div class="step-solution">
          <span class="step-solution-num">${i + 1}</span>
          <span>${s}</span>
        </div>
      `).join('')}
    </div>
  `;
}
