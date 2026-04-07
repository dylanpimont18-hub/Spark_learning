/* =========================================================
   Spark Learning – components/companion.js
   Interface Spark Companion : remédiation et rattrapage
   ========================================================= */

/**
 * Rendu de l'accueil Spark Companion
 * Affiche sélection de module, progression, et objectifs CCF
 */
function renderCompanionHome() {
  const cs = state.companionState;

  // Points et badges
  const badgesList = cs.badges.length > 0
    ? cs.badges
        .slice(-3)
        .map(b => `<span class="badge-item" title="${b.earnedAt}">🏅 ${b.label}</span>`)
        .join('')
    : '<span style="color: var(--text-muted);">Aucun badge encore. Commencez une remédiation !</span>';

  const objectivesHtml = cs.objectives.inProgress.length > 0
    ? cs.objectives.inProgress
        .map(
          obj =>
            `<div class="objective-card">
              <div class="objective-title"><strong>${obj.name}</strong></div>
              <div class="objective-progress">
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${obj.progress || 0}%"></div>
                </div>
                <span>${obj.progress || 0}%</span>
              </div>
              <div class="objective-description">${obj.description || ''}</div>
            </div>`
        )
        .join('')
    : '<span style="color: var(--text-muted);">Aucun objectif en cours.</span>';

  // Recommandations de remédiation
  const subject = state.subject || 'maths';
  const level = state.level || 1;
  const recommendations = getRemediationRecommendations(subject, level);

  const recommendationsHtml = recommendations.length > 0
    ? recommendations
        .map(
          rec =>
            `<div class="recommendation-card" onclick="navigate('companion', { moduleId: '${rec.moduleId}' })">
              <div class="rec-header">
                <div class="rec-title"><strong>${rec.title}</strong></div>
                <div class="rec-status">${rec.lacuneCount > 0 ? `⚠️ ${rec.lacuneCount} lacune(s)` : '✓'}</div>
              </div>
              <div class="rec-footer" style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">
                ${rec.isStarted ? 'En cours...' : '◉ Non commencé'}
              </div>
            </div>`
        )
        .join('')
    : '<span style="color: var(--text-muted);">Tous les modules sont à jour !</span>';

  return `
    <div class="container">
      <div class="companion-hero">
        <h1>🚀 Spark Companion</h1>
        <p>Votre assistant personnalisé pour <strong>la remédiation</strong> et <strong>la préparation aux évaluations</strong>.</p>
      </div>

      <div class="companion-grid">
        <!-- Section 1 : Votre Progression -->
        <section class="companion-section">
          <h2>📊 Votre Progression</h2>
          <div class="progress-banner">
            <div class="progress-big">
              <div class="progress-number">${cs.points}</div>
              <div class="progress-label">Points gagnés</div>
            </div>
            <div class="badges-list">
              ${badgesList}
            </div>
          </div>
        </section>

        <!-- Section 2 : Remédiation Recommandée -->
        <section class="companion-section">
          <h2>💡 Remédiation Recommandée</h2>
          <div class="recommendations-list">
            ${recommendationsHtml}
          </div>
        </section>

        <!-- Section 3 : Objectifs CCF -->
        <section class="companion-section companion-section-full">
          <h2>🎯 Préparez votre Contrôle de Continu Formatif (CCF)</h2>
          <p style="margin-bottom: 1rem; color: var(--text-muted);">
            Suivez vos <strong>objectifs d'apprentissage</strong> et préparez-vous pour vos évaluations.
          </p>
          <div class="objectives-list">
            ${objectivesHtml}
          </div>
        </section>
      </div>

      <style>
        .companion-hero {
          text-align: center;
          padding: 2rem 1rem;
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: white;
          border-radius: var(--border-radius);
          margin-bottom: 2rem;
        }
        .companion-hero h1 { margin: 0; font-size: 2.5rem; }
        .companion-hero p { margin: 0.5rem 0 0 0; font-size: 1.1rem; opacity: 0.95; }

        .companion-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .companion-section-full {
          grid-column: 1 / -1;
        }

        .companion-section {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .companion-section h2 {
          margin: 0 0 1rem 0;
          font-size: 1.3rem;
          color: var(--text-primary);
        }

        .progress-banner {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }
        .progress-big {
          text-align: center;
          flex: 0 0 120px;
        }
        .progress-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .progress-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .badges-list {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .badge-item {
          background: var(--accent-light);
          color: var(--accent-dark);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .recommendations-list,
        .objectives-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .recommendation-card,
        .objective-card {
          background: var(--surface);
          border: 1px solid var(--border-color);
          border-radius: calc(var(--border-radius) - 2px);
          padding: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .recommendation-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary);
        }

        .rec-header,
        .objective-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .rec-title,
        .objective-title {
          font-weight: 600;
          color: var(--text-primary);
        }
        .rec-status {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .objective-progress {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin: 0.75rem 0;
        }
        .progress-bar {
          flex: 1;
          height: 8px;
          background: var(--bg-secondary);
          border-radius: 4px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transition: width 0.3s ease;
        }
        .objective-progress span {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary);
          min-width: 40px;
        }

        .objective-description {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
          margin-top: 0.5rem;
        }
      </style>
    </div>
  `;
}

/**
 * Rendu d'une session de remédiation pour un module
 */
function renderCompanionSession(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return '<div class="container"><p>Module non trouvé.</p></div>';

  const cs = state.companionState;
  const ctx = initRemediationContext(moduleId);
  if (!ctx) return '<div class="container"><p>Impossible d\'initialiser la session de remédiation.</p></div>';

  const lacunesHtml = ctx.lacunes.length > 0
    ? `<div class="lacunes-list">
        <h3 style="margin-top: 0;">Les lacunes détectées :</h3>
        <ul style="margin: 0.5rem 0;">
          ${ctx.lacunes.map(([topic, count]) => `<li><strong>${topic}</strong> : ${count} problème(s)</li>`).join('')}
        </ul>
      </div>`
    : '<div style="color: var(--success);">✓ Aucune lacune détectée pour ce module !</div>';

  // Générer les exercices de remédiation
  const exercises = [];
  for (let i = 0; i < Math.min(3, ctx.exerciseCount); i++) {
    const ex = generateRemedialExercise(moduleId, 'general');
    if (ex) exercises.push({ id: `ex-${i}`, ...ex });
  }

  const exercisesHtml = exercises.length > 0
    ? exercises
        .map(
          ex =>
            `<div class="exercise-card" id="companion-exercise-${ex.id}">
              <div class="exercise-type">${ex.type === 'quiz' ? '❓' : ex.type === 'exercice' ? '✏️' : '📝'} ${ex.type.toUpperCase()}</div>

              ${
                ex.type === 'quiz'
                  ? `<div class="quiz-statement"><strong>${ex.question}</strong></div>
                   <div class="quiz-options">
                     ${ex.options.map((opt, i) => `<button class="quiz-option" onclick="submitCompanionQuiz('${moduleId}', '${ex.id}', ${i})">${opt}</button>`).join('')}
                   </div>`
                  : ex.type === 'exercice'
                    ? `<div class="exercice-statement">${ex.statement}</div>
                     <div class="exercice-input-row">
                       <input type="number" class="exercice-input companion-input" id="input-${ex.id}" placeholder="Votre réponse…" step="any" />
                       ${ex.unit ? `<span class="exercice-unit">${ex.unit}</span>` : ''}
                       <button class="btn btn-primary" onclick="submitCompanionExercise('${moduleId}', '${ex.id}')">Valider</button>
                     </div>`
                    : `<div><strong>${ex.title}</strong></div><p>${ex.context}</p>`
              }
            </div>`
        )
        .join('')
    : '<p style="color: var(--text-muted);">Aucun exercice disponible pour cette session.</p>';

  return `
    <div class="container">
      <div class="companion-session">
        <div class="session-header">
          <button class="btn btn-secondary" onclick="navigate('companion')">← Retour</button>
          <h1>${mod.title}</h1>
          <div class="session-info">${ctx.lacunes.length} lacune(s) détectée(s)</div>
        </div>

        <div class="session-content">
          <!-- Diagnostic -->
          <section class="session-section">
            <h2>🔍 Diagnostic de Remédiation</h2>
            ${lacunesHtml}
          </section>

          <!-- Exercices -->
          <section class="session-section">
            <h2>📚 Exercices de Remédiation</h2>
            <p style="color: var(--text-muted); margin-bottom: 1rem;">
              Voici <strong>3 exercices ciblés</strong> pour vous aider à combler les lacunes.
            </p>
            <div class="exercises-list">
              ${exercisesHtml}
            </div>
          </section>

          <!-- Progression -->
          <section class="session-section companion-session-footer">
            <h2>📈 Votre Progression</h2>
            <div class="progress-mini">
              <div>Points : <strong>${cs.points}</strong></div>
              <div>Exercices complétés : <strong>${Object.keys(cs.remediation.attempts).filter(k => cs.remediation.attempts[k].correct).length}</strong></div>
            </div>
            <div style="margin-top: 1rem;">
              <button class="btn btn-secondary" onclick="navigate('module', { moduleId: '${moduleId}' })">
                ← Revenir à la leçon
              </button>
            </div>
          </section>
        </div>
      </div>

      <style>
        .companion-session {
          max-width: 800px;
          margin: 0 auto;
        }

        .session-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--border-color);
        }
        .session-header h1 {
          flex: 1;
          margin: 0;
          font-size: 1.8rem;
        }
        .session-info {
          background: var(--warning-light);
          color: var(--warning-dark);
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .session-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .session-section {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .session-section h2 {
          margin: 0 0 1rem 0;
          font-size: 1.3rem;
        }

        .lacunes-list {
          background: var(--surface);
          padding: 1rem;
          border-radius: calc(var(--border-radius) - 2px);
          border-left: 4px solid var(--warning);
        }
        .lacunes-list h3 {
          margin: 0;
          font-size: 1rem;
        }
        .lacunes-list ul {
          padding-left: 1.5rem;
        }
        .lacunes-list li {
          margin: 0.5rem 0;
          line-height: 1.4;
        }

        .exercises-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .exercise-card {
          background: var(--surface);
          border: 1px solid var(--border-color);
          border-radius: calc(var(--border-radius) - 2px);
          padding: 1.25rem;
          line-height: 1.6;
        }

        .exercise-type {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .quiz-statement {
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .quiz-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .quiz-option {
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          padding: 0.75rem 1rem;
          border-radius: calc(var(--border-radius) - 2px);
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          font-weight: 500;
        }
        .quiz-option:hover {
          border-color: var(--primary);
          background: var(--primary-light);
        }

        .exercice-statement {
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .exercice-input-row {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .companion-input {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: calc(var(--border-radius) - 2px);
          font-size: 1rem;
        }

        .exercice-unit {
          font-weight: 600;
          color: var(--text-muted);
          min-width: 60px;
        }

        .companion-session-footer {
          background: linear-gradient(135deg, var(--success-light), var(--success-lighter));
          border-left: 4px solid var(--success);
        }

        .progress-mini {
          display: flex;
          gap: 2rem;
          margin: 1rem 0;
        }
        .progress-mini div {
          font-size: 1rem;
          color: var(--text-primary);
        }
      </style>
    </div>
  `;
}

/**
 * Handlers pour les exercices de remédiation
 */
function submitCompanionQuiz(moduleId, exerciseId, optionIndex) {
  const mod = getModule(moduleId);
  if (!mod) return;

  // Générer à nouveau l'exercice pour validation (simplifié)
  const input = document.querySelector(`#companion-exercise-${exerciseId}`);
  if (!input) return;

  trackRemediationAttempt(exerciseId, optionIndex === 0); // Simplifié, vérifier dans la vraie logique
  addCompanionPoints(5);

  const feedback = `✓ Réponse enregistrée ! Vous gagnez 5 points.`;
  showToast(feedback, 'success');
}

function submitCompanionExercise(moduleId, exerciseId) {
  const input = document.querySelector(`#input-${exerciseId}`);
  if (!input || !input.value.trim()) {
    showToast('Veuillez entrer une réponse.', 'warning');
    return;
  }

  const answer = input.value.trim();
  trackRemediationAttempt(exerciseId, true); // Simplifié
  addCompanionPoints(10);

  showToast('✓ Excellent ! +10 points', 'success');
  input.disabled = true;
}
