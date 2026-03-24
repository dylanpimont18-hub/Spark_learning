/* =========================================================
   Spark Learning – chrono.js
   Défi Chrono : exercices en temps limité (3 minutes)
   ========================================================= */

const CHRONO_DURATION = 180; // secondes

function initChrono(moduleId) {
  const mod = getModule(moduleId);
  if (!mod || !mod.exercice) return;

  state.chronoState = {
    active: true,
    moduleId: moduleId,
    startTime: Date.now(),
    remaining: CHRONO_DURATION,
    score: 0,
    attempted: 0,
    currentExercise: mod.exercice.generate(),
    feedback: null,     // { correct: bool, answer: number } — affiché brièvement
    timerId: null,
    paused: false
  };

  // Démarrer le timer
  state.chronoState.timerId = setInterval(_chronoTick, 1000);

  // Pause si l'onglet est masqué
  document.addEventListener('visibilitychange', _chronoVisibility);
}

function _chronoVisibility() {
  const cs = state.chronoState;
  if (!cs || !cs.active) return;
  if (document.hidden) {
    cs.paused = true;
    cs._pauseTime = Date.now();
  } else if (cs.paused) {
    cs.paused = false;
    // Compenser le temps écoulé pendant la pause
    const pauseDuration = Date.now() - (cs._pauseTime || Date.now());
    cs.startTime += pauseDuration;
    delete cs._pauseTime;
  }
}

function _chronoTick() {
  const cs = state.chronoState;
  if (!cs || !cs.active || cs.paused) return;

  const elapsed = Math.floor((Date.now() - cs.startTime) / 1000);
  cs.remaining = Math.max(0, CHRONO_DURATION - elapsed);

  // Mise à jour de la barre de timer
  const fill = document.getElementById('chrono-timer-fill');
  if (fill) {
    const pct = (cs.remaining / CHRONO_DURATION) * 100;
    fill.style.width = pct + '%';
    if (cs.remaining <= 10) fill.classList.add('warning');
    else fill.classList.remove('warning');
  }

  const timerText = document.getElementById('chrono-timer-text');
  if (timerText) {
    const m = Math.floor(cs.remaining / 60);
    const s = cs.remaining % 60;
    timerText.textContent = m + ':' + (s < 10 ? '0' : '') + s;
  }

  if (cs.remaining <= 0) {
    endChrono();
  }
}

function submitChronoAnswer() {
  const cs = state.chronoState;
  if (!cs || !cs.active) return;
  const mod = getModule(cs.moduleId);
  if (!mod) return;

  const inputEl = document.getElementById('chrono-input');
  if (!inputEl) return;
  const userInput = parseFloat(inputEl.value);
  if (isNaN(userInput)) {
    inputEl.style.borderColor = 'var(--error)';
    return;
  }

  const ex = cs.currentExercise;
  const tol = ex.tolerance !== undefined ? ex.tolerance : 0.001;
  const isCorrect = Math.abs(userInput - ex.answer) <= tol;

  cs.attempted++;
  if (isCorrect) cs.score++;

  // Afficher feedback bref
  cs.feedback = { correct: isCorrect, answer: ex.answer, unit: ex.unit || '' };
  _renderChronoExercise();

  // Après 800ms, générer le suivant
  setTimeout(() => {
    if (!cs.active) return;
    cs.feedback = null;
    cs.currentExercise = mod.exercice.generate();
    _renderChronoExercise();
    const newInput = document.getElementById('chrono-input');
    if (newInput) { newInput.value = ''; newInput.focus(); }
  }, 800);
}

function endChrono() {
  const cs = state.chronoState;
  if (!cs) return;
  cs.active = false;
  if (cs.timerId) clearInterval(cs.timerId);
  document.removeEventListener('visibilitychange', _chronoVisibility);

  // Sauvegarder le score
  if (typeof Storage !== 'undefined' && Storage.trackAttempt) {
    Storage.trackAttempt(cs.moduleId, 'chrono', true);
  }

  // Re-render la vue avec les résultats
  const area = document.getElementById('chrono-area');
  if (area) {
    area.innerHTML = _chronoResultsHTML();
    renderMath();
  }

  if (cs.score > 0) createConfetti();
}

function stopChrono() {
  endChrono();
}

function _renderChronoExercise() {
  const area = document.getElementById('chrono-exercise');
  if (!area) return;
  area.innerHTML = _chronoExerciseHTML();
  renderMath();
}

function _chronoExerciseHTML() {
  const cs = state.chronoState;
  if (!cs || !cs.currentExercise) return '';
  const ex = cs.currentExercise;

  if (cs.feedback) {
    return `
      <div class="chrono-feedback ${cs.feedback.correct ? 'chrono-feedback-correct' : 'chrono-feedback-wrong'}">
        ${cs.feedback.correct ? '\u2713 Correct !' : '\u2717 R\u00e9ponse : ' + cs.feedback.answer + (cs.feedback.unit ? ' ' + cs.feedback.unit : '')}
      </div>
    `;
  }

  return `
    <div class="chrono-card">
      <div style="font-size:1.05rem;line-height:1.7;margin-bottom:var(--space-lg);">${ex.statement}</div>
      <div style="display:flex;gap:var(--space-sm);align-items:center;justify-content:center;">
        <input type="number" step="any" id="chrono-input" class="exercice-input"
               placeholder="Ta r\u00e9ponse" aria-label="R\u00e9ponse"
               onkeydown="if(event.key==='Enter'){event.preventDefault();submitChronoAnswer();}">
        ${ex.unit ? '<span class="exercice-unit">' + ex.unit + '</span>' : ''}
        <button class="btn btn-primary" onclick="submitChronoAnswer()">OK</button>
      </div>
    </div>
  `;
}

function _chronoResultsHTML() {
  const cs = state.chronoState;
  if (!cs) return '';
  const pct = cs.attempted > 0 ? Math.round((cs.score / cs.attempted) * 100) : 0;

  return `
    <div class="chrono-results">
      <div class="chrono-results-score">${cs.score}</div>
      <div class="chrono-results-detail">exercice${cs.score > 1 ? 's' : ''} r\u00e9ussi${cs.score > 1 ? 's' : ''} en 3 minutes</div>
      <div class="chrono-results-stats">
        <div class="chrono-stat-card">
          <div class="chrono-stat-value">${cs.attempted}</div>
          <div class="chrono-stat-label">tent\u00e9s</div>
        </div>
        <div class="chrono-stat-card">
          <div class="chrono-stat-value">${pct}%</div>
          <div class="chrono-stat-label">r\u00e9ussite</div>
        </div>
      </div>
      <div style="margin-top:var(--space-xl);display:flex;gap:var(--space-md);justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="navigate('chrono', {moduleId:'${cs.moduleId}'})">Rejouer</button>
        <button class="btn btn-secondary" onclick="navigate('module', {moduleId:'${cs.moduleId}'})">Retour au module</button>
      </div>
    </div>
  `;
}

/**
 * Rendu complet de la vue chrono (appelé par render() dans app.js).
 */
function renderChrono() {
  const cs = state.chronoState;
  if (!cs) return '<div class="container"><p>Erreur : aucun chrono actif.</p></div>';

  const mod = getModule(cs.moduleId);
  const title = mod ? mod.title : '';
  const m = Math.floor(cs.remaining / 60);
  const s = cs.remaining % 60;
  const pct = (cs.remaining / CHRONO_DURATION) * 100;

  if (!cs.active) {
    return `
      <div class="container chrono-view">
        <div id="chrono-area">${_chronoResultsHTML()}</div>
      </div>
    `;
  }

  return `
    <div class="container chrono-view">
      <div class="chrono-header">
        <button class="btn btn-secondary btn-sm" onclick="stopChrono()">Arr\u00eater</button>
        <h2 style="margin:0;font-size:1.1rem;">D\u00e9fi Chrono \u2014 ${title}</h2>
        <div class="chrono-score-display" aria-live="polite">${cs.score} point${cs.score > 1 ? 's' : ''}</div>
      </div>
      <div class="chrono-timer-bar">
        <div class="chrono-timer-fill ${cs.remaining <= 10 ? 'warning' : ''}" id="chrono-timer-fill" style="width:${pct}%"></div>
      </div>
      <div style="text-align:center;margin-bottom:var(--space-md);">
        <span id="chrono-timer-text" style="font-weight:600;font-size:1.2rem;" aria-live="assertive">${m}:${s < 10 ? '0' : ''}${s}</span>
      </div>
      <div id="chrono-area">
        <div id="chrono-exercise">${_chronoExerciseHTML()}</div>
      </div>
    </div>
  `;
}
