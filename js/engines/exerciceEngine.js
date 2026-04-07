/* =========================================================
   Spark Learning – engines/exerciceEngine.js
   Moteur d'exercice
   ========================================================= */

function getErrorFeedback(mod, attempts) {
  const generic = [
    'Ce n\'est pas tout à fait ça ! Relis bien l\'énoncé et vérifie chaque étape.',
    'Tu es sur la bonne voie ! Mais revérifie ton calcul — une petite erreur s\'est glissée.',
    'Presque ! Pense à bien vérifier les unités et l\'ordre de grandeur du résultat.'
  ];
  if (attempts === 1 && mod.cours && mod.cours.piege) {
    const clean = mod.cours.piege.replace(/^Pièce\s*(classique)?\s*:\s*/i, '').split(/[.!]\s/)[0] + '.';
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
    inputEl.placeholder = 'Entre un nombre…';
    return;
  }

  const ex = state.exerciceState.current;
  const tol = ex.tolerance !== undefined ? ex.tolerance : 0.001;
  const isCorrect = Math.abs(userInput - ex.answer) <= tol;

  const card = document.getElementById('exercice-card');

  if (isCorrect) {
    state.exerciceState.solved = true;
    saveProgress(moduleId, 'exercice');
    if (typeof Storage !== 'undefined' && Storage.trackAttempt) {
      Storage.trackAttempt(moduleId, 'exercice', true);
      Storage.updateExerciceStreak(state.exerciceState.attempts === 0);
    }
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
    if (typeof Storage !== 'undefined' && Storage.trackAttempt) {
      Storage.trackAttempt(moduleId, 'exercice', false);
    }
    card.classList.add('state-error');
    _setEngineTimeout(() => {
      if (card) card.classList.remove('state-error');
    }, 600);
    renderTabContent();
    renderMath();
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
