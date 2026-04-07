/* =========================================================
   Spark Learning – engines/problemeEngine.js
   Moteur de problème
   ========================================================= */

function revealSolution(moduleId, taskIndex) {
  const mod = getModule(moduleId);
  if (!mod) return;
  if (state.problemeState.revealed !== taskIndex) return;
  state.problemeState.revealed = taskIndex + 1;
  if (state.problemeState.revealed >= mod.probleme.tasks.length) {
    saveProgress(moduleId, 'probleme');
    createConfetti();
    _checkModuleComplete(moduleId);
  }
  renderTabContent();
  renderMath();
}
