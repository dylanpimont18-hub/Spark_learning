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

  // Mobile : six onglets pour ~350 px et une barre de défilement masquée — sans ceci,
  // « Évaluation » et « Remédiation » restaient hors écran sans aucun indice.
  const activeBtn = document.querySelector('.tab-btn.active');
  const bar = activeBtn && activeBtn.parentElement;
  if (bar && bar.scrollWidth > bar.clientWidth + 2) {
    activeBtn.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  if (typeof initScrollFades === 'function') initScrollFades(bar || document);

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
  let html;
  switch (state.tab) {
    case 'cours':     html = renderCours(mod); break;
    case 'quiz':      html = renderQuiz(mod); break;
    case 'exercice':  html = renderExercice(mod); break;
    case 'probleme':  html = renderProbleme(mod); break;
    case 'evaluation':html = renderEvaluation(mod); break;
    case 'companion': html = renderCompanionSession(mod.id); break;
    default:          html = renderCours(mod);
  }
  return convertMarkdownTables(html);
}
