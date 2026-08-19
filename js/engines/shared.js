/* =========================================================
   Spark Learning – engines/shared.js
   Utilitaires partagés entre les moteurs
   ========================================================= */

/* ── Saisie numérique (exercice + évaluation) ── */
function _readNumericInput(inputEl) {
  const value = parseFloat(inputEl.value);
  if (isNaN(value)) {
    inputEl.style.borderColor = 'var(--error)';
    inputEl.placeholder = 'Entre un nombre…';
    return null;
  }
  return value;
}

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
   Module completion check
═══════════════════════════════════════ */
function _checkModuleComplete(moduleId) {
  const p = getModuleProgress(moduleId);
  if (p.done === p.total && p.done > 0) {
    _setEngineTimeout(() => showToast('Module terminé ! 🏅', 'achievement'), 500);
    const mod = getModule(moduleId);
    if (mod) {
      const levelMods = window.MODULES.filter(m => m.level === mod.level && (m.subject || 'maths') === (mod.subject || 'maths'));
      const allDone = levelMods.every(m => {
        const mp = getModuleProgress(m.id);
        return mp.done === mp.total && mp.done > 0;
      });
      if (allDone) {
        _setEngineTimeout(() => showToast(`Niveau ${LEVEL_NAMES[mod.level]} complété ! 🎉`, 'achievement'), 1500);
        _setEngineTimeout(() => { if (typeof celebrate === 'function') celebrate('level-complete'); }, 1500);
        if (typeof addBadge === 'function') {
          const subjectKey = mod.subject || 'maths';
          addBadge(`niveau-complete-${subjectKey}-${mod.level}`, `Niveau ${LEVEL_NAMES[mod.level]} complété`);
        }
      }
    }
  }
}
