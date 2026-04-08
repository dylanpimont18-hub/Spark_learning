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
    case 'home':       return '#home';
    case 'subjects':   return '#subjects';
    case 'levels':     return `#levels/${data.subject || state.subject || 'maths'}`;
    case 'modules': {
      const level = data.level !== undefined ? data.level : state.level;
      const levelPart = level === 'all' ? 'all' : level;
      return `#modules/${data.subject || state.subject || 'maths'}/${levelPart}`;
    }
    case 'module': {
      const mid = data.moduleId || state.moduleId;
      const tab = data.tab || state.tab || 'cours';
      return `#module/${mid}/${tab}`;
    }
    case 'companion': {
      const mid = data.moduleId || state.moduleId;
      return mid ? `#companion/${mid}` : '#companion';
    }
    case 'flashcards': return `#flashcards/${data.moduleId || state.moduleId}`;
    case 'chrono':     return `#chrono/${data.moduleId || state.moduleId}`;
    case 'teacher':    return '#teacher';
    case 'homework':   return '#homework';
    case 'playlist':   return '#playlist/' + (data.playlistData || '');
    default:           return '#home';
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
      if (parts[2] === 'all') return { view: 'modules', subject: parts[1] || 'maths', level: 'all' };
      return { view: 'modules', subject: parts[1] || 'maths', level: parseInt(parts[2]) || 1 };
    case 'module':      return { view: 'module', moduleId: parts[1], tab: parts[2] || 'cours' };
    case 'companion':   return { view: 'companion', moduleId: parts[1] };
    case 'flashcards':  return { view: 'flashcards', moduleId: parts[1] };
    case 'chrono':      return { view: 'chrono', moduleId: parts[1] };
    case 'teacher':     return { view: 'teacher' };
    case 'playlist': {
      const encoded = (hash || '').replace(/^#\/?playlist\//, '');
      return { view: 'playlist', playlistData: encoded };
    }
    case 'homework':    return { view: 'homework' };
    case 'home':
    default:            return { view: 'home' };
  }
}

function parsePathRoute(pathname) {
  const clean = (pathname || '').replace(/\/+$/, '') || '/';
  if (clean === '/admin') return { view: 'admin' };
  return null;
}

/* ── Navigate ── */
let _navSequence = 0; // prevents stale async renders

function navigate(view, data = {}, options = {}) {
  const skipUrlSync = !!options.skipUrlSync;

  // Cleanup: cancel pending engine timers & remove stale confetti
  clearEngineTimers();
  document.querySelectorAll('.confetti-container').forEach(el => el.remove());

  // Stop chrono timer if leaving chrono view
  if (state.chronoState && state.chronoState.timerId && view !== 'chrono') {
    clearInterval(state.chronoState.timerId);
    document.removeEventListener('visibilitychange', _chronoVisibility);
  }

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
    state.tab = data.tab || 'cours';
    if (!data.keepQuiz)       state.quizState = defaultQuizState();
    if (!data.keepExercice)   state.exerciceState = defaultExerciceState();
    if (!data.keepProbleme)   state.problemeState = defaultProblemeState();
    if (!data.keepEvaluation) state.evaluationState = defaultEvaluationState();
  }

  // Sync URL (suppress hashchange listener to avoid double render)
  if (!skipUrlSync) {
    if (view === 'admin') {
      _suppressHashChange = true;
      if (window.location.pathname !== '/admin') {
        history.pushState({}, '', '/admin');
      } else {
        history.replaceState({}, '', '/admin');
      }
      requestAnimationFrame(() => { _suppressHashChange = false; });
    } else {
      if (window.location.pathname === '/admin') {
        history.pushState({}, '', '/');
      }
      _suppressHashChange = true;
      window.location.hash = buildHash(view, data);
      requestAnimationFrame(() => { _suppressHashChange = false; });
    }
  }

  // Lazy loading: check if data needs to be fetched first
  const seq = ++_navSequence;
  let loadPromise = null;

  if (view === 'modules') {
    const subject = state.subject || 'maths';
    const level = state.level;
    if (level === 'all' && typeof ensureAllData === 'function') {
      loadPromise = ensureAllData();
    } else if (level && typeof ensureLevelData === 'function') {
      loadPromise = ensureLevelData(subject, level);
    }
  } else if (view === 'module' || view === 'flashcards' || view === 'chrono' || view === 'companion') {
    const moduleId = data.moduleId || state.moduleId;
    if (moduleId && !getModule(moduleId) && typeof ensureModuleData === 'function') {
      loadPromise = ensureModuleData(moduleId);
    }
  } else if (view === 'playlist' && data.playlistData) {
    // Playlist: charger les données nécessaires après décodage
    if (typeof loadPlaylist === 'function') {
      loadPlaylist(data.playlistData);
    }
  } else if (view === 'teacher' || view === 'homework') {
    // Charger toutes les données pour le picker
    if (typeof ensureAllData === 'function') {
      loadPromise = ensureAllData();
    }
  } else if (view === 'admin') {
    if (typeof ensureAllData === 'function') {
      loadPromise = ensureAllData();
    }
  }

  // Init specific view states
  if (view === 'flashcards') {
    const moduleId = data.moduleId || state.moduleId;
    if (getModule(moduleId) && typeof initFlashcards === 'function') {
      initFlashcards(moduleId);
    }
  } else if (view === 'chrono') {
    const moduleId = data.moduleId || state.moduleId;
    if (getModule(moduleId) && typeof initChrono === 'function') {
      // Stop previous chrono if any
      if (state.chronoState && state.chronoState.timerId) {
        clearInterval(state.chronoState.timerId);
      }
      initChrono(moduleId);
    }
  }

  const needsAsyncLoad = loadPromise && (
    (view === 'module' && !getModule(state.moduleId)) ||
    (view === 'modules') ||
    (view === 'flashcards' && !getModule(state.moduleId)) ||
    (view === 'chrono' && !getModule(state.moduleId)) ||
    (view === 'companion' && state.moduleId && !getModule(state.moduleId)) ||
    (view === 'teacher') || (view === 'homework') || (view === 'admin')
  );

  if (needsAsyncLoad) {
    const app = document.getElementById('app');
    app.innerHTML = renderLoading();
    updatePageTitle();
    loadPromise.then(() => {
      if (_navSequence !== seq) return;
      if (view === 'module' || view === 'flashcards' || view === 'chrono') {
        const _mod = getModule(state.moduleId);
        if (_mod && _mod.subject) state.subject = _mod.subject;
        if (view === 'flashcards' && typeof initFlashcards === 'function') initFlashcards(state.moduleId);
        if (view === 'chrono' && typeof initChrono === 'function') initChrono(state.moduleId);
      }
      render();
    });
  } else {
    if (loadPromise) loadPromise.catch(() => {});
    if (view === 'module') {
      const _mod = getModule(data.moduleId);
      if (_mod && _mod.subject) state.subject = _mod.subject;
    }
    render();
    updatePageTitle();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Dynamic page title (SEO) ── */
function updatePageTitle() {
  const base = 'Spark Learning';
  switch (state.view) {
    case 'home':     document.title = base; break;
    case 'subjects': document.title = `Mati\u00e8res \u2014 ${base}`; break;
    case 'levels': {
      const s = getSubjectDef(state.subject || 'maths');
      document.title = `${s.label} \u2014 ${base}`;
      break;
    }
    case 'modules': {
      const s = getSubjectDef(state.subject || 'maths');
      const levelLabel = state.level === 'all' ? 'Tous niveaux' : (LEVEL_NAMES[state.level] || '');
      document.title = `${levelLabel} ${s.label} \u2014 ${base}`;
      break;
    }
    case 'module': {
      const mod = getModule(state.moduleId);
      document.title = mod ? `${mod.title} \u2014 ${base}` : base;
      break;
    }
    case 'companion': {
      const mod = state.moduleId ? getModule(state.moduleId) : null;
      document.title = mod ? `Spark Companion \u2014 ${mod.title} \u2014 ${base}` : `Spark Companion \u2014 ${base}`;
      break;
    }
    case 'flashcards': {
      const mod = getModule(state.moduleId);
      document.title = mod ? `Flashcards \u2014 ${mod.title} \u2014 ${base}` : base;
      break;
    }
    case 'chrono': {
      const mod = getModule(state.moduleId);
      document.title = mod ? `D\u00e9fi Chrono \u2014 ${mod.title} \u2014 ${base}` : base;
      break;
    }
    case 'admin':    document.title = `Administration \u2014 ${base}`; break;
    case 'teacher':  document.title = `Espace Enseignant \u2014 ${base}`; break;
    case 'playlist': document.title = `Playlist \u2014 ${base}`; break;
    default:         document.title = base;
  }
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
  updatePageTitle();
}

/* ── Render dispatcher ── */
function render() {
  const app = document.getElementById('app');
  switch (state.view) {
    case 'home':       app.innerHTML = renderHome(); break;
    case 'subjects':   app.innerHTML = renderSubjects(); break;
    case 'levels':     app.innerHTML = renderLevels(); break;
    case 'modules':    app.innerHTML = renderModulesList(); break;
    case 'module':     app.innerHTML = renderModuleDetail(); break;
    case 'companion':  app.innerHTML = (typeof renderCompanionHome === 'function' && !state.moduleId) ? renderCompanionHome() : (typeof renderCompanionSession === 'function') ? renderCompanionSession(state.moduleId) : renderCompanionHome(); break;
    case 'flashcards': app.innerHTML = (typeof renderFlashcards === 'function') ? renderFlashcards() : ''; break;
    case 'chrono':     app.innerHTML = (typeof renderChrono === 'function') ? renderChrono() : ''; break;
    case 'admin':      app.innerHTML = (typeof renderAdminPage === 'function') ? renderAdminPage() : ''; break;
    case 'teacher':    app.innerHTML = (typeof renderTeacherBuilder === 'function') ? renderTeacherBuilder() : ''; break;
    case 'playlist':   app.innerHTML = (typeof renderPlaylistView === 'function') ? renderPlaylistView() : ''; break;
    case 'homework':   app.innerHTML = (typeof renderHomeworkPanel === 'function') ? renderHomeworkPanel() : ''; break;
    default:           app.innerHTML = renderHome();
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
      if (sortBy === 'theme') {
        const themeCmp = (a.dataset.theme || '').localeCompare((b.dataset.theme || ''), 'fr');
        if (themeCmp !== 0) return themeCmp;
        return (a.dataset.title || '').localeCompare((b.dataset.title || ''), 'fr');
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

/* ═══════════════════════════════════════
   PROJECTOR MODE (TASK-3.3)
═══════════════════════════════════════ */
function toggleProjector() {
  const html = document.documentElement;
  const isActive = html.classList.toggle('projector-mode');

  // Bouton de sortie flottant
  let exitBtn = document.getElementById('projector-exit-btn');
  if (isActive) {
    if (!exitBtn) {
      exitBtn = document.createElement('button');
      exitBtn.id = 'projector-exit-btn';
      exitBtn.className = 'projector-exit-btn';
      exitBtn.innerHTML = '\u2715 Quitter la pr\u00e9sentation';
      exitBtn.onclick = toggleProjector;
      document.body.appendChild(exitBtn);
    }
  } else {
    if (exitBtn) exitBtn.remove();
  }
}

/* ═══════════════════════════════════════
   TEACHER ERROR MODAL (TASK-3.4)
═══════════════════════════════════════ */
function openTeacherErrorModal(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return;

  const piege = mod.cours && mod.cours.piege ? mod.cours.piege : 'Aucun pi\u00e8ge r\u00e9f\u00e9renc\u00e9.';

  const overlay = document.createElement('div');
  overlay.className = 'teacher-modal-overlay';
  overlay.id = 'teacher-modal';
  overlay.onclick = (e) => { if (e.target === overlay) closeTeacherErrorModal(); };
  overlay.innerHTML = `
    <div class="teacher-modal">
      <button class="teacher-modal-close" onclick="closeTeacherErrorModal()" aria-label="Fermer">&times;</button>
      <h3>Proposer un pi\u00e8ge (Espace Enseignant)</h3>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:var(--space-md);">Module : <strong>${mod.title}</strong></p>
      <div class="teacher-modal-context">
        <strong>Pi\u00e8ge actuel :</strong><br>${piege}
      </div>
      <label style="font-weight:600;font-size:0.9rem;display:block;margin-bottom:6px;">Votre suggestion :</label>
      <textarea id="teacher-error-text" placeholder="D\u00e9crivez l'erreur fr\u00e9quente que vous observez chez vos \u00e9l\u00e8ves\u2026" aria-label="Suggestion d'erreur"></textarea>
      <button class="btn btn-primary" onclick="submitTeacherError('${moduleId}')" style="width:100%;">Envoyer</button>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector('textarea').focus();
}

function closeTeacherErrorModal() {
  const modal = document.getElementById('teacher-modal');
  if (modal) modal.remove();
}

function submitTeacherError(moduleId) {
  const textarea = document.getElementById('teacher-error-text');
  if (!textarea || !textarea.value.trim()) {
    textarea.style.borderColor = 'var(--error)';
    return;
  }
  const mod = getModule(moduleId);
  const modTitle = mod ? mod.title : moduleId;

  const btn = document.querySelector('#teacher-modal .btn-primary');
  if (btn) { btn.disabled = true; btn.textContent = 'Envoi\u2026'; }

  fetch('https://formspree.io/f/xnjgyrjd', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      _subject: 'Pi\u00e8ge enseignant \u2014 ' + modTitle,
      message: textarea.value.trim(),
      module: moduleId,
      type: 'piege-enseignant'
    })
  })
  .then(r => r.json())
  .then(data => {
    if (data.ok) {
      showToast('Merci pour votre contribution !', 'success');
      closeTeacherErrorModal();
    } else {
      showToast('Erreur lors de l\'envoi.', 'error');
      if (btn) { btn.disabled = false; btn.textContent = 'Envoyer'; }
    }
  })
  .catch(() => {
    showToast('Erreur r\u00e9seau.', 'error');
    if (btn) { btn.disabled = false; btn.textContent = 'Envoyer'; }
  });
}

function setModuleAccessMode(moduleId, mode) {
  if (!moduleId || typeof Storage === 'undefined') return;
  if (mode === 'open') Storage.resetModuleStatus(moduleId);
  else if (mode === 'locked') Storage.setModuleStatus(moduleId, { locked: true, maintenance: false });
  else if (mode === 'maintenance') Storage.setModuleStatus(moduleId, { locked: false, maintenance: true });

  state.moduleAccess = Storage.getModuleStatuses();

  // If current module becomes unavailable, bounce user back to modules list
  if (state.view === 'module' && state.moduleId === moduleId && isModuleUnavailable(moduleId)) {
    const mod = getModule(moduleId);
    if (mod) {
      navigate('modules', { level: mod.level, subject: mod.subject || 'maths' });
      showToast('Module désactivé via admin', 'info');
      return;
    }
  }

  render();
}

/* ── Global module search (available from all pages) ── */
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
    const keywords = _globalSearchNormalize((mod.keywords || []).join(' '));
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

/* ── Keyboard shortcuts ── */
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + K: ouvrir la recherche globale
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openGlobalSearchPanel();
    return;
  }

  // Don't intercept if typing in an input (except Escape and Ctrl+Shift+P)
  if (e.key !== 'Escape' && !(e.ctrlKey && e.shiftKey && e.key === 'P') &&
      (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT')) return;

  // Ctrl+Shift+P: toggle projector mode
  if (e.ctrlKey && e.shiftKey && e.key === 'P') {
    e.preventDefault();
    toggleProjector();
    return;
  }

  // Escape: close modals, contact panel, then navigate back
  if (e.key === 'Escape') {
    const globalSearch = document.getElementById('global-search-panel');
    if (globalSearch && globalSearch.classList.contains('open')) {
      e.preventDefault();
      closeGlobalSearchPanel();
      return;
    }

    // Close teacher modal first
    const teacherModal = document.getElementById('teacher-modal');
    if (teacherModal) { e.preventDefault(); closeTeacherErrorModal(); return; }
    // Close projector mode
    if (document.documentElement.classList.contains('projector-mode')) { e.preventDefault(); toggleProjector(); return; }

    const panel = document.getElementById('contact-panel');
    if (panel && panel.classList.contains('open')) {
      e.preventDefault();
      closeContactPanel();
      return;
    }
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
    e.preventDefault();
    if (state.view === 'flashcards' || state.view === 'chrono') navigate('module', { moduleId: state.moduleId });
    else if (state.view === 'module') navigate('modules', { level: state.level, subject: state.subject });
    else if (state.view === 'modules') navigate('levels', { subject: state.subject });
    else if (state.view === 'levels') navigate('subjects');
    else if (state.view === 'subjects') navigate('home');
    else if (state.view === 'teacher' || state.view === 'homework' || state.view === 'admin') navigate('home');
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
  const pathRoute = parsePathRoute(window.location.pathname);
  if (pathRoute) {
    navigate(pathRoute.view, pathRoute, { skipUrlSync: true });
    return;
  }
  const route = parseHash(window.location.hash);
  navigate(route.view, route, { skipUrlSync: true });
});

window.addEventListener('popstate', () => {
  const pathRoute = parsePathRoute(window.location.pathname);
  if (pathRoute) {
    navigate(pathRoute.view, pathRoute, { skipUrlSync: true });
    return;
  }
  const route = parseHash(window.location.hash);
  navigate(route.view, route, { skipUrlSync: true });
});

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('sparkTheme') || 'light';
  applyTheme(savedTheme);

  document.getElementById('nav-home')?.addEventListener('click', () => navigate('home'));
  document.getElementById('nav-parcours')?.addEventListener('click', () => navigate('subjects'));
  document.getElementById('nav-teacher')?.addEventListener('click', () => navigate('teacher'));
  document.getElementById('nav-homework')?.addEventListener('click', () => navigate('homework'));
  document.getElementById('projector-toggle')?.addEventListener('click', toggleProjector);
  document.getElementById('global-search-toggle')?.addEventListener('click', toggleGlobalSearchPanel);
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

  // Global search panel
  const globalSearchInput = document.getElementById('global-module-search');
  globalSearchInput?.addEventListener('input', (e) => {
    _renderGlobalSearchResults(e.target.value || '');
  });
  globalSearchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const first = _findGlobalModules(globalSearchInput.value || '')[0];
      if (first) {
        e.preventDefault();
        openModuleFromGlobalSearch(first.id);
      }
    }
  });

  document.getElementById('global-search-close')?.addEventListener('click', closeGlobalSearchPanel);

  // Close contact panel on outside click
  document.addEventListener('click', (e) => {
    const panel = document.getElementById('contact-panel');
    const btn = document.getElementById('contact-toggle');
    if (panel && panel.classList.contains('open') &&
        !panel.contains(e.target) && e.target !== btn) {
      closeContactPanel();
    }
  });

  document.addEventListener('click', (e) => {
    const panel = document.getElementById('global-search-panel');
    const toggle = document.getElementById('global-search-toggle');
    if (!panel || !toggle) return;
    if (panel.classList.contains('open') && !panel.contains(e.target) && e.target !== toggle) {
      closeGlobalSearchPanel();
    }
  });

  // Restore route from path (/admin) or hash
  const pathRoute = parsePathRoute(window.location.pathname);
  const route = pathRoute || parseHash(window.location.hash);
  navigate(route.view, route, { skipUrlSync: true });

  // Preload all data in background for home stats and search
  if (typeof ensureAllData === 'function') {
    ensureAllData().then(() => {
      // Re-render home if we're still on it, so stats appear
      if (state.view === 'home') render();
    }).catch(() => {});
  }
});
