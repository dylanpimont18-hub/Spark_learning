/* =========================================================
   Spark Learning – app.js
   Routeur SPA, utilitaires (KaTeX, confetti), init
   ========================================================= */

/* ── KaTeX rendering ── */
function renderMath() {
  if (window.renderMathInElement) {
    try {
      renderMathInElement(document.getElementById('app'), {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    } catch (e) {
      console.warn('KaTeX render error:', e);
    }
  }
}

/* ── Confetti ── */
function createConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const colors = ['#F4D03F', '#2ECC71', '#48C9B0', '#2C3E50', '#FF6B6B'];
    piece.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-delay: ${Math.random() * 0.8}s;
      animation-duration: ${2 + Math.random() * 1.5}s;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
    `;
    container.appendChild(piece);
  }
  document.body.appendChild(container);
  setTimeout(() => {
    if (container.parentNode) container.parentNode.removeChild(container);
  }, 3500);
}

/* ── Hash routing helpers ── */
let _suppressHashChange = false;

function buildHash(view, data) {
  switch (view) {
    case 'home':     return '#home';
    case 'subjects': return '#subjects';
    case 'levels':   return `#levels/${data.subject || state.subject || 'maths'}`;
    case 'modules':  return `#modules/${data.subject || state.subject || 'maths'}/${data.level !== undefined ? data.level : state.level}`;
    case 'module':
      const mid = data.moduleId || state.moduleId;
      const tab = data.tab || state.tab || 'cours';
      return `#module/${mid}/${tab}`;
    default:         return '#home';
  }
}

function parseHash(hash) {
  const parts = (hash || '').replace(/^#\/?/, '').split('/');
  switch (parts[0]) {
    case 'subjects': return { view: 'subjects' };
    case 'levels':   return { view: 'levels', subject: parts[1] || 'maths' };
    case 'modules':
      // Rétrocompat: #modules/1 (ancien format sans subject)
      if (/^\d+$/.test(parts[1])) return { view: 'modules', subject: 'maths', level: parseInt(parts[1]) };
      return { view: 'modules', subject: parts[1] || 'maths', level: parseInt(parts[2]) || 1 };
    case 'module':   return { view: 'module', moduleId: parts[1], tab: parts[2] || 'cours' };
    case 'home':
    default:         return { view: 'home' };
  }
}

/* ── Navigate ── */
function navigate(view, data = {}) {
  // Cleanup: cancel pending engine timers & remove stale confetti
  clearEngineTimers();
  document.querySelectorAll('.confetti-container').forEach(el => el.remove());

  // Reset search filters when switching to a different level or subject
  if (view === 'modules' && (
    (data.level !== undefined && data.level !== state.level) ||
    (data.subject !== undefined && data.subject !== state.subject)
  )) {
    state.searchQuery = '';
    state.activeKeywords = [];
  }

  // Exit batch print mode when leaving modules view
  if (state.batchPrintMode && view !== 'modules') {
    state.batchPrintMode = false;
    state.selectedForPrint = [];
    hideBatchToolbar();
  }

  state.view = view;
  if (data.subject !== undefined) state.subject = data.subject;
  if (data.level !== undefined) state.level = data.level;
  if (data.moduleId !== undefined) state.moduleId = data.moduleId;
  if (data.tab !== undefined) state.tab = data.tab;

  // Reset sub-states on navigation
  if (view === 'module') {
    if (data.moduleId) trackRecentModule(data.moduleId);
    // Auto-detect subject from module
    const _mod = getModule(data.moduleId);
    if (_mod && _mod.subject) state.subject = _mod.subject;
    state.tab = data.tab || 'cours';
    if (!data.keepQuiz)       state.quizState = defaultQuizState();
    if (!data.keepExercice)   state.exerciceState = defaultExerciceState();
    if (!data.keepProbleme)   state.problemeState = defaultProblemeState();
    if (!data.keepEvaluation) state.evaluationState = defaultEvaluationState();
  }

  // Update URL hash (suppress hashchange listener to avoid double render)
  _suppressHashChange = true;
  window.location.hash = buildHash(view, data);
  requestAnimationFrame(() => { _suppressHashChange = false; });

  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Tab switch without full re-navigate ── */
function switchTab(tabName) {
  state.tab = tabName;

  // Update hash to reflect current tab
  _suppressHashChange = true;
  window.location.hash = buildHash('module', { moduleId: state.moduleId, tab: tabName });
  requestAnimationFrame(() => { _suppressHashChange = false; });

  // Generate exercice on first visit to exercice tab
  if (tabName === 'exercice' && !state.exerciceState.current) {
    const mod = getModule(state.moduleId);
    if (mod) {
      state.exerciceState = { ...defaultExerciceState(), current: mod.exercice.generate() };
    }
  }
  renderTabContent();
  renderMath();
}

/* ── Render dispatcher ── */
function render() {
  const app = document.getElementById('app');
  switch (state.view) {
    case 'home':     app.innerHTML = renderHome(); break;
    case 'subjects': app.innerHTML = renderSubjects(); break;
    case 'levels':   app.innerHTML = renderLevels(); break;
    case 'modules':  app.innerHTML = renderModulesList(); break;
    case 'module':   app.innerHTML = renderModuleDetail(); break;
    default:         app.innerHTML = renderHome();
  }
  renderMath();
  updateNavActive();
  if (state.view === 'modules') _applyModuleFilters();
}

function updateNavActive() {
  document.getElementById('nav-home')?.classList.toggle('active', state.view === 'home');
  document.getElementById('nav-parcours')?.classList.toggle('active', ['subjects','levels','modules','module'].includes(state.view));
}

/* ── Module search & filter ── */
let _filterDebounceTimer = null;
function filterModules(query) {
  state.searchQuery = query;
  const input = document.getElementById('search-modules');
  if (input) input.value = query;
  const clearBtn = document.querySelector('.search-clear');
  if (clearBtn) clearBtn.style.display = query ? 'flex' : 'none';
  clearTimeout(_filterDebounceTimer);
  _filterDebounceTimer = setTimeout(() => _applyModuleFilters(), 150);
}

function sortModules(criterion) {
  state.sortBy = criterion;
  _applyModuleFilters();
}

function toggleKeyword(kw) {
  const idx = state.activeKeywords.indexOf(kw);
  if (idx === -1) state.activeKeywords.push(kw);
  else state.activeKeywords.splice(idx, 1);
  document.querySelectorAll('.keyword-tag').forEach(tag => {
    tag.classList.toggle('active', state.activeKeywords.includes(tag.dataset.kw));
  });
  _applyModuleFilters();
}

function _applyModuleFilters() {
  const q = (state.searchQuery || '').toLowerCase().trim();
  const activeKws = state.activeKeywords;
  const grid = document.getElementById('modules-grid');
  const cards = Array.from(grid ? grid.querySelectorAll('.module-card') : []);
  let visible = 0;

  // Sort cards
  const sortBy = state.sortBy || 'default';
  if (sortBy !== 'default') {
    const sorted = cards.slice().sort((a, b) => {
      if (sortBy === 'alpha') return (a.dataset.title || '').localeCompare(b.dataset.title || '', 'fr');
      if (sortBy === 'progress') {
        const pA = parseInt(a.dataset.progress || '0');
        const pB = parseInt(b.dataset.progress || '0');
        return pB - pA;
      }
      return 0;
    });
    sorted.forEach(card => grid.appendChild(card));
  }

  cards.forEach(card => {
    const title = card.dataset.title || '';
    const subtitle = card.dataset.subtitle || '';
    const keywords = card.dataset.keywords || '';
    const matchesSearch = !q || title.includes(q) || subtitle.includes(q) || keywords.includes(q);
    const matchesKeywords = activeKws.length === 0 || activeKws.every(kw => keywords.includes(kw.toLowerCase()));
    const show = matchesSearch && matchesKeywords;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  const noResults = document.getElementById('no-results');
  if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';

  // Restore focus on search input
  const input = document.getElementById('search-modules');
  if (input && document.activeElement !== input && state.searchQuery) input.focus();
}

/* ── Toast notifications ── */
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toast.addEventListener('click', () => {
    toast.classList.add('toast-exit');
    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 300);
  });
  document.body.appendChild(toast);
  // Trigger enter animation
  requestAnimationFrame(() => toast.classList.add('toast-visible'));
  setTimeout(() => {
    if (!toast.parentNode) return;
    toast.classList.add('toast-exit');
    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 300);
  }, 4000);
}

/* ═══════════════════════════════════════
   PRINT — Fiches de cours
═══════════════════════════════════════ */
function _renderMathInPrint(container) {
  if (window.renderMathInElement) {
    try {
      renderMathInElement(container, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    } catch (e) {
      console.warn('KaTeX print render error:', e);
    }
  }
}

function _triggerPrint() {
  document.body.classList.add('printing');
  // Small delay to ensure layout is painted before print dialog
  requestAnimationFrame(() => {
    window.print();
  });
  window.addEventListener('afterprint', function onAfterPrint() {
    document.body.classList.remove('printing');
    const c = document.getElementById('print-container');
    if (c) c.innerHTML = '';
    window.removeEventListener('afterprint', onAfterPrint);
  }, { once: true });
}

function printFiche(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return;
  const container = document.getElementById('print-container');
  if (!container) return;
  container.innerHTML = renderFicheCours(mod);
  _renderMathInPrint(container);
  _triggerPrint();
}

/* ── Batch print mode ── */
function toggleBatchPrintMode() {
  state.batchPrintMode = !state.batchPrintMode;
  const grid = document.getElementById('modules-grid');
  if (!grid) return;

  if (state.batchPrintMode) {
    state.selectedForPrint = [];
    grid.querySelectorAll('.module-card').forEach(card => {
      const onclick = card.getAttribute('onclick') || '';
      const match = onclick.match(/moduleId:\s*'([^']+)'/);
      if (!match) return;
      const moduleId = match[1];
      const cb = document.createElement('label');
      cb.className = 'print-select-checkbox';
      cb.innerHTML = '<input type="checkbox" data-print-id="' + moduleId + '" onclick="event.stopPropagation(); togglePrintSelection(\'' + moduleId + '\')">';
      card.prepend(cb);
    });
    showBatchToolbar();
  } else {
    state.selectedForPrint = [];
    grid.querySelectorAll('.print-select-checkbox').forEach(el => el.remove());
    hideBatchToolbar();
  }
}

function togglePrintSelection(moduleId) {
  const idx = state.selectedForPrint.indexOf(moduleId);
  if (idx === -1) {
    state.selectedForPrint.push(moduleId);
  } else {
    state.selectedForPrint.splice(idx, 1);
  }
  updateBatchCount();
}

function selectAllForPrint() {
  const grid = document.getElementById('modules-grid');
  if (!grid) return;
  state.selectedForPrint = [];
  grid.querySelectorAll('.print-select-checkbox input[type="checkbox"]').forEach(cb => {
    cb.checked = true;
    const id = cb.getAttribute('data-print-id');
    if (id) state.selectedForPrint.push(id);
  });
  updateBatchCount();
}

function deselectAllForPrint() {
  const grid = document.getElementById('modules-grid');
  if (!grid) return;
  state.selectedForPrint = [];
  grid.querySelectorAll('.print-select-checkbox input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
  });
  updateBatchCount();
}

function printSelectedFiches() {
  const modules = state.selectedForPrint.map(id => getModule(id)).filter(Boolean);
  if (modules.length === 0) {
    showToast('Sélectionne au moins un module', 'info');
    return;
  }
  const container = document.getElementById('print-container');
  if (!container) return;
  container.innerHTML = renderFichesBatch(modules);
  _renderMathInPrint(container);
  _triggerPrint();
}

function showBatchToolbar() {
  let toolbar = document.getElementById('batch-print-toolbar');
  if (toolbar) { toolbar.style.display = 'flex'; return; }
  toolbar = document.createElement('div');
  toolbar.className = 'batch-print-toolbar';
  toolbar.id = 'batch-print-toolbar';
  toolbar.innerHTML = `
    <span class="batch-count" id="batch-count">0 fiche sélectionnée</span>
    <button class="btn btn-sm btn-secondary" onclick="selectAllForPrint()">Tout sélectionner</button>
    <button class="btn btn-sm btn-secondary" onclick="deselectAllForPrint()">Tout désélectionner</button>
    <button class="btn btn-sm btn-primary" onclick="printSelectedFiches()">Imprimer 🖨️</button>
    <button class="btn btn-sm btn-outline" onclick="toggleBatchPrintMode()">Annuler</button>
  `;
  document.body.appendChild(toolbar);
}

function hideBatchToolbar() {
  const toolbar = document.getElementById('batch-print-toolbar');
  if (toolbar) toolbar.remove();
}

function updateBatchCount() {
  const el = document.getElementById('batch-count');
  if (!el) return;
  const n = state.selectedForPrint.length;
  el.textContent = n + ' fiche' + (n > 1 ? 's' : '') + ' sélectionnée' + (n > 1 ? 's' : '');
}

/* ── Scroll-to-top button ── */
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scroll-top');
  if (btn) btn.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

/* ── Contact panel ── */
function toggleContactPanel() {
  const panel = document.getElementById('contact-panel');
  const btn = document.getElementById('contact-toggle');
  if (!panel || !btn) return;
  const isOpen = panel.classList.toggle('open');
  btn.classList.toggle('active', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
  panel.setAttribute('aria-hidden', !isOpen);
  if (isOpen) {
    panel.querySelector('.contact-message')?.focus();
  }
}

function closeContactPanel() {
  const panel = document.getElementById('contact-panel');
  const btn = document.getElementById('contact-toggle');
  if (!panel || !btn) return;
  panel.classList.remove('open');
  btn.classList.remove('active');
  btn.setAttribute('aria-expanded', 'false');
  panel.setAttribute('aria-hidden', 'true');
}

const _CONTACT_FORM_HTML = `
  <form class="contact-form" id="contact-form">
    <fieldset class="contact-categories">
      <legend class="sr-only">Type de message</legend>
      <label class="contact-cat">
        <input type="radio" name="contact-type" value="erreur" checked />
        <span class="contact-cat-chip">&#x1F41B; Une erreur</span>
      </label>
      <label class="contact-cat">
        <input type="radio" name="contact-type" value="remarque" />
        <span class="contact-cat-chip">&#x1F4AC; Une remarque</span>
      </label>
      <label class="contact-cat">
        <input type="radio" name="contact-type" value="question" />
        <span class="contact-cat-chip">&#x2753; Une question</span>
      </label>
    </fieldset>
    <textarea class="contact-message" id="contact-message" rows="4" placeholder="Ton message..." required></textarea>
    <button type="submit" class="btn btn-primary contact-send">Envoyer</button>
  </form>`;

function _restoreContactForm() {
  const panel = document.getElementById('contact-panel');
  if (!panel) return;
  const body = panel.querySelector('.contact-form') || panel.querySelector('.contact-success');
  if (body) body.outerHTML = _CONTACT_FORM_HTML;
  panel.querySelector('#contact-form')?.addEventListener('submit', handleContactSubmit);
}

function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const type = form.querySelector('input[name="contact-type"]:checked')?.value || 'question';
  const message = form.querySelector('.contact-message')?.value?.trim();
  if (!message) return;

  const sendBtn = form.querySelector('.contact-send');
  sendBtn.disabled = true;
  sendBtn.textContent = 'Envoi...';

  const labels = { erreur: 'Signalement d\'erreur', remarque: 'Remarque', question: 'Question' };
  const page = state.moduleId ? `Module : ${state.moduleId}` : `Page : ${state.view}`;

  fetch('https://formspree.io/f/xnjgyrjd', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      _subject: `Spark Learning \u2014 ${labels[type]}`,
      message: message,
      categorie: labels[type],
      page: page
    })
  })
  .then(r => r.json())
  .then(data => {
    if (data.ok) {
      const panel = document.getElementById('contact-panel');
      const formEl = panel.querySelector('.contact-form');
      formEl.outerHTML = '<div class="contact-success">Merci pour ton retour !</div>';
      setTimeout(() => { closeContactPanel(); setTimeout(_restoreContactForm, 300); }, 2000);
    } else {
      showToast('Erreur lors de l\'envoi. R\u00e9essaie.', 'error');
      sendBtn.disabled = false;
      sendBtn.textContent = 'Envoyer';
    }
  })
  .catch(() => {
    showToast('Erreur r\u00e9seau. V\u00e9rifie ta connexion.', 'error');
    sendBtn.disabled = false;
    sendBtn.textContent = 'Envoyer';
  });
}

/* ── Keyboard shortcuts ── */
document.addEventListener('keydown', (e) => {
  // Don't intercept if typing in an input (except Escape)
  if (e.key !== 'Escape' && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT')) return;

  // Escape: close contact panel first, then navigate back
  if (e.key === 'Escape') {
    const panel = document.getElementById('contact-panel');
    if (panel && panel.classList.contains('open')) {
      e.preventDefault();
      closeContactPanel();
      return;
    }
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
    e.preventDefault();
    if (state.view === 'module') navigate('modules', { level: state.level, subject: state.subject });
    else if (state.view === 'modules') navigate('levels', { subject: state.subject });
    else if (state.view === 'levels') navigate('subjects');
    else if (state.view === 'subjects') navigate('home');
    return;
  }

  // Quiz shortcuts: 1-4 or A-D
  if (state.view === 'module' && state.tab === 'quiz' && !state.quizState.complete) {
    const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
    const idx = keyMap[e.key.toLowerCase()];
    if (idx !== undefined && !state.quizState.answered) {
      e.preventDefault();
      const btn = document.getElementById(`quiz-opt-${idx}`);
      if (btn && !btn.disabled) btn.click();
    }
  }
});

/* ── Hash change listener (back/forward buttons) ── */
window.addEventListener('hashchange', () => {
  if (_suppressHashChange) return;
  const route = parseHash(window.location.hash);
  navigate(route.view, route);
});

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('sparkTheme') || 'light';
  applyTheme(savedTheme);

  document.getElementById('nav-home')?.addEventListener('click', () => navigate('home'));
  document.getElementById('nav-parcours')?.addEventListener('click', () => navigate('subjects'));
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('logo-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    navigate('home');
  });
  document.getElementById('scroll-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Event delegation on #app for role="button" and keyword tags
  const appEl = document.getElementById('app');
  appEl.addEventListener('keydown', (e) => {
    const el = e.target.closest('[role="button"]');
    if (el && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      el.click();
    }
  });
  appEl.addEventListener('click', (e) => {
    const kwTag = e.target.closest('.keyword-tag');
    if (kwTag && kwTag.dataset.kw) {
      toggleKeyword(kwTag.dataset.kw);
    }
  });

  // Contact panel
  document.getElementById('contact-toggle')?.addEventListener('click', toggleContactPanel);
  document.getElementById('contact-close')?.addEventListener('click', closeContactPanel);
  document.getElementById('contact-form')?.addEventListener('submit', handleContactSubmit);

  // Close contact panel on outside click
  document.addEventListener('click', (e) => {
    const panel = document.getElementById('contact-panel');
    const btn = document.getElementById('contact-toggle');
    if (panel && panel.classList.contains('open') &&
        !panel.contains(e.target) && e.target !== btn) {
      closeContactPanel();
    }
  });

  // Restore state from URL hash, or default to home
  const route = parseHash(window.location.hash);
  navigate(route.view, route);
});
