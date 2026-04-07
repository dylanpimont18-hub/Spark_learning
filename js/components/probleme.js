/* =========================================================
   Spark Learning – components/probleme.js
   Rendu du problème
   ========================================================= */

function renderProbleme(mod) {
  const p = mod.probleme;
  const ps = state.problemeState;
  const allRevealed = ps.revealed >= p.tasks.length;

  return `
    <div class="probleme-content">
      <div class="probleme-context">
        <div class="probleme-context-label">📚 Mise en contexte</div>
        <div>${p.context}</div>
        ${p.schema ? `
          <div style="margin-top:12px;padding:10px 14px;background:color-mix(in srgb,var(--primary) 8%,var(--bg-card));border-radius:10px;font-size:0.85rem;color:var(--text-muted);font-family:'Inter',monospace;">
            🖼️ ${p.schema}
          </div>
        ` : ''}
      </div>

      <h2 style="font-family:'Poppins',sans-serif;font-size:1.1rem;font-weight:700;margin-bottom:16px;color:var(--primary);">
        🧩 Tâches guidées
      </h2>

      <ul class="probleme-tasks">
        ${p.tasks.map((task, i) => `
          <li class="task-item">
            <div class="task-header">
              <div>
                <div class="task-label">Tâche ${i + 1}</div>
                <div class="task-text">${task}</div>
              </div>
              ${ps.revealed <= i ? `
                <button
                  class="btn btn-hint btn-sm${ps.revealed < i ? ' btn-disabled' : ''}"
                  onclick="revealSolution('${mod.id}', ${i})"
                  style="flex-shrink:0;"
                  ${ps.revealed < i ? 'disabled' : ''}
                  aria-label="Voir la solution de la tâche ${i + 1}"
                >
                  Voir la solution 💡
                </button>
              ` : ''}
            </div>
            ${ps.revealed > i ? `
              <div class="task-solution">
                <div class="task-solution-label">✅ Correction</div>
                <div>${p.solutions[i]}</div>
              </div>
            ` : ''}
          </li>
        `).join('')}
      </ul>

      ${allRevealed ? `
        <div class="final-answer-box">
          🎯 <strong>Réponse finale :</strong> ${p.finalAnswer}
        </div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:20px;">
          ${mod.evaluation ? `
            <button class="btn btn-primary" onclick="switchTab('evaluation')">
              Passer à l'évaluation 📝
            </button>
          ` : `
            <button class="btn btn-primary" onclick="navigate('modules', {level: ${mod.level}, subject: '${mod.subject || 'maths'}'})">
              Retour aux modules 📚
            </button>
          `}
          <button class="btn btn-secondary" onclick="switchTab('cours')">
            Revoir le cours 📖
          </button>
        </div>
      ` : ''}
    </div>
  `;
}
