/* =========================================================
   Spark Learning – components/globalSearch.js
   Recherche globale de modules (Ctrl/Cmd+K), accessible depuis toutes les pages
   ========================================================= */
function _globalSearchNormalize(str) {
  return (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function _findGlobalModules(query) {
  const q = _globalSearchNormalize(query);
  if (!q || q.length < 2) return [];

  const terms = q.split(/\s+/).filter(Boolean);
  const list = window.MODULES || [];

  return list.map(mod => {
    const title = _globalSearchNormalize(mod.title);
    const subtitle = _globalSearchNormalize(mod.subtitle);
    const keywords = _globalSearchNormalize(getModuleSearchKeywords(mod).join(' '));
    const haystack = `${title} ${subtitle} ${keywords}`;
    const allTermsMatch = terms.every(t => haystack.includes(t));
    if (!allTermsMatch) return null;

    // Score léger: privilégie les titres qui commencent par la requête
    const score =
      (title.startsWith(q) ? 30 : 0) +
      (title.includes(q) ? 15 : 0) +
      (keywords.includes(q) ? 8 : 0) +
      (subtitle.includes(q) ? 4 : 0);

    return { mod, score };
  }).filter(Boolean)
    .sort((a, b) => b.score - a.score || a.mod.title.localeCompare(b.mod.title, 'fr'))
    .slice(0, 8)
    .map(x => x.mod);
}

function _renderGlobalSearchResults(query) {
  const panel = document.getElementById('global-search-panel');
  const resultsEl = document.getElementById('global-search-results');
  if (!panel || !resultsEl) return;

  const results = _findGlobalModules(query);
  if (!query || query.trim().length < 2) {
    resultsEl.innerHTML = '<div class="global-search-empty">Tape au moins 2 caractères</div>';
    return;
  }

  if (results.length === 0) {
    resultsEl.innerHTML = '<div class="global-search-empty">Aucun module trouvé</div>';
    return;
  }

  resultsEl.innerHTML = results.map(mod => {
    const subject = getSubjectDef(mod.subject || 'maths');
    const levelLabel = LEVEL_NAMES[mod.level] || 'Niveau';
    return `
      <button class="global-search-result" onclick="openModuleFromGlobalSearch('${mod.id}')">
        <span class="global-search-result-icon">${mod.icon || '📘'}</span>
        <span class="global-search-result-content">
          <span class="global-search-result-title">${mod.title}</span>
          <span class="global-search-result-meta">${subject.icon} ${subject.label} · ${levelLabel}</span>
        </span>
      </button>
    `;
  }).join('');
}

function openGlobalSearchPanel() {
  const panel = document.getElementById('global-search-panel');
  const input = document.getElementById('global-module-search');
  const toggle = document.getElementById('global-search-toggle');
  if (!panel || !input || !toggle) return;
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  toggle.setAttribute('aria-expanded', 'true');
  input.focus();
  _renderGlobalSearchResults(input.value || '');
}

function closeGlobalSearchPanel() {
  const panel = document.getElementById('global-search-panel');
  const toggle = document.getElementById('global-search-toggle');
  if (!panel || !toggle) return;
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  toggle.setAttribute('aria-expanded', 'false');
}

function toggleGlobalSearchPanel() {
  const panel = document.getElementById('global-search-panel');
  if (!panel) return;
  if (panel.classList.contains('open')) closeGlobalSearchPanel();
  else openGlobalSearchPanel();
}

function openModuleFromGlobalSearch(moduleId) {
  closeGlobalSearchPanel();
  navigate('module', { moduleId });
}
