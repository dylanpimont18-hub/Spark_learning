/* =========================================================
   Spark Learning – components/moduleTabs.js
   Rendu des onglets du module
   ========================================================= */

function renderTabContent() {
  const mod = getModule(state.moduleId);
  if (!mod) return;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    const tabId = btn.dataset.tab;
    btn.classList.toggle('active', tabId === state.tab);
    btn.setAttribute('aria-selected', tabId === state.tab);
  });

  const panel = document.querySelector('.tab-content');
  if (panel) {
    panel.id = `tab-panel-${state.tab}`;
    panel.style.animation = 'none';
    panel.offsetHeight;
    panel.style.animation = '';
    panel.innerHTML = renderTabContentHTML(mod);
  }
}

function renderTabContentHTML(mod) {
  switch (state.tab) {
    case 'cours':     return renderCours(mod);
    case 'quiz':      return renderQuiz(mod);
    case 'exercice':  return renderExercice(mod);
    case 'probleme':  return renderProbleme(mod);
    case 'evaluation':return renderEvaluation(mod);
    case 'companion': return renderCompanionSession(mod.id);
    default:          return renderCours(mod);
  }
}
