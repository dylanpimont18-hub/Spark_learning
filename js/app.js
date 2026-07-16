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

function buildPath(view, data) {
  switch (view) {
    case 'home':       return '/';
    case 'subjects':   return '/subjects';
    case 'levels':     return `/levels/${data.subject || state.subject || 'maths'}`;
    case 'modules': {
      const level = data.level !== undefined ? data.level : state.level;
      const levelPart = level === 'all' ? 'all' : level;
      return `/modules/${data.subject || state.subject || 'maths'}/${levelPart}`;
    }
    case 'module': {
      const mid = data.moduleId || state.moduleId;
      const tab = data.tab || state.tab || 'cours';
      return `/module/${mid}/${tab}`;
    }
    case 'companion': {
      const mid = data.moduleId || state.moduleId;
      return mid ? `/companion/${mid}` : '/companion';
    }
    case 'flashcards': return `/flashcards/${data.moduleId || state.moduleId}`;
    case 'chrono':     return `/chrono/${data.moduleId || state.moduleId}`;
    case 'teacher':    return '/teacher';
    case 'homework':   return '/homework';
    case 'playlist':   return '/playlist/' + (data.playlistData || '');
    case 'admin':      return '/admin';
    case 'confidentialite': return '/confidentialite';
    case 'tutoring':        return '/tutorat';
    case 'tutoringStudent': return `/tutorat/${data.studentId || state.tutoringStudentId}`;
    default:           return '/';
  }
}

function _parseRouteParts(parts) {
  switch (parts[0]) {
    case 'subjects': return { view: 'subjects' };
    case 'levels':   return { view: 'levels', subject: parts[1] || 'maths' };
    case 'modules':
      // Rétrocompat : .../modules/1 (ancien format sans subject)
      if (/^\d+$/.test(parts[1])) return { view: 'modules', subject: 'maths', level: parseInt(parts[1]) };
      if (parts[2] === 'all') return { view: 'modules', subject: parts[1] || 'maths', level: 'all' };
      return { view: 'modules', subject: parts[1] || 'maths', level: parseInt(parts[2]) || 1 };
    case 'module':      return { view: 'module', moduleId: parts[1], tab: parts[2] || 'cours' };
    case 'companion':   return { view: 'companion', moduleId: parts[1] };
    case 'flashcards':  return { view: 'flashcards', moduleId: parts[1] };
    case 'chrono':      return { view: 'chrono', moduleId: parts[1] };
    case 'teacher':     return { view: 'teacher' };
    case 'playlist': {
      // slice(1).join('/') reconstruit fidèlement les données base64 même si elles contiennent '/'
      const encoded = parts.slice(1).join('/');
      return { view: 'playlist', playlistData: encoded };
    }
    case 'homework':    return { view: 'homework' };
    case 'admin':       return { view: 'admin' };
    case 'confidentialite': return { view: 'confidentialite' };
    case 'tutorat':
      return parts[1] ? { view: 'tutoringStudent', studentId: parts[1] } : { view: 'tutoring' };
    case 'home':
    default:            return { view: 'home' };
  }
}

function parsePath(pathname) {
  const parts = (pathname || '/').replace(/^\//, '').split('/');
  return _parseRouteParts(parts);
}

function parseLegacyHash(hash) {
  const parts = (hash || '').replace(/^#\/?/, '').split('/');
  return _parseRouteParts(parts);
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

  // Vues réservées aux comptes (classe/prof) : inaccessibles en mode invité, même par hash direct
  if ((view === 'teacher' || view === 'homework' || view === 'admin' || view === 'tutoring' || view === 'tutoringStudent') &&
      typeof AuthGuard !== 'undefined' && !AuthGuard.isAuthenticated()) {
    view = 'home';
  }

  // Tutorat réservé aux comptes tutorAccess (défense en profondeur, en plus des règles Firestore)
  if ((view === 'tutoring' || view === 'tutoringStudent') &&
      typeof AuthGuard !== 'undefined' && !AuthGuard.isTutor()) {
    view = 'home';
  }

  state.view = view;
  if (data.subject !== undefined) state.subject = data.subject;
  if (data.level !== undefined) state.level = data.level;
  if (data.moduleId !== undefined) state.moduleId = data.moduleId;
  if (data.tab !== undefined) state.tab = data.tab;
  if (data.studentId !== undefined) state.tutoringStudentId = data.studentId;

  // Reset sub-states on navigation
  if (view === 'module') {
    if (data.moduleId) trackRecentModule(data.moduleId);
    state.tab = data.tab || 'cours';
    if (!data.keepQuiz)       state.quizState = defaultQuizState();
    if (!data.keepExercice)   state.exerciceState = defaultExerciceState();
    if (!data.keepProbleme)   state.problemeState = defaultProblemeState();
    if (!data.keepEvaluation) state.evaluationState = defaultEvaluationState();
  }

  // Sync URL (pushState ne déclenche jamais popstate dans le même onglet,
  // donc pas besoin de flag de suppression comme avec hashchange)
  if (!skipUrlSync) {
    history.pushState(null, '', buildPath(view, data));
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
    case 'tutoring':        document.title = `Tutorat \u2014 ${base}`; break;
    case 'tutoringStudent': {
      const s = TutoringStudent._student;
      document.title = s ? `${s.firstName} ${s.lastName} \u2014 Tutorat \u2014 ${base}` : `Tutorat \u2014 ${base}`;
      break;
    }
    default:         document.title = base;
  }
}

/* ── Tab switch without full re-navigate ── */
function switchTab(tabName) {
  state.tab = tabName;

  // Update URL to reflect current tab
  history.pushState(null, '', buildPath('module', { moduleId: state.moduleId, tab: tabName }));

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
    case 'home':       app.innerHTML = renderHome(); if (typeof renderAssignmentWidget === 'function') renderAssignmentWidget(); break;
    case 'subjects':   app.innerHTML = renderSubjects(); break;
    case 'levels':     app.innerHTML = renderLevels(); break;
    case 'modules':    app.innerHTML = renderModulesList(); break;
    case 'module':     app.innerHTML = renderModuleDetail(); break;
    case 'companion':  app.innerHTML = (typeof renderCompanionHome === 'function' && !state.moduleId) ? renderCompanionHome() : (typeof renderCompanionSession === 'function') ? renderCompanionSession(state.moduleId) : renderCompanionHome(); break;
    case 'flashcards': app.innerHTML = (typeof renderFlashcards === 'function') ? renderFlashcards() : ''; break;
    case 'chrono':     app.innerHTML = (typeof renderChrono === 'function') ? renderChrono() : ''; break;
    case 'admin':      AdminPanel.render(); return;
    case 'tutoring':        TutoringHome.render(); updateNavActive(); return;
    case 'tutoringStudent': TutoringStudent.render(state.tutoringStudentId); updateNavActive(); return;
    case 'teacher':    TeacherDashboard.render(); return;
    case 'playlist':   app.innerHTML = (typeof renderPlaylistView === 'function') ? renderPlaylistView() : ''; break;
    case 'homework':   app.innerHTML = (typeof renderHomeworkPanel === 'function') ? renderHomeworkPanel() : ''; break;
    case 'confidentialite': app.innerHTML = renderConfidentialite(); break;
    default:           app.innerHTML = renderHome();
  }
  renderMath();
  if (typeof initAdSlots === 'function') initAdSlots();
  if (typeof trackPageView === 'function') trackPageView();
  updateNavActive();
  if (state.view === 'modules') _applyModuleFilters();
}

function updateNavActive() {
  document.getElementById('nav-home')?.classList.toggle('active', state.view === 'home');
  document.getElementById('nav-parcours')?.classList.toggle('active', ['subjects','levels','modules','module'].includes(state.view));
  document.getElementById('nav-tutoring')?.classList.toggle('active', ['tutoring','tutoringStudent'].includes(state.view));
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

function setModuleSelectionMode(mode) {
  state.moduleSelectionMode = mode === 'theme' ? 'theme' : 'level';
  state.searchQuery = '';
  state.activeKeywords = [];

  if (state.moduleSelectionMode === 'theme') {
    state.level = 'all';
    if (!state.selectedTheme) state.selectedTheme = 'all';
  } else {
    state.selectedTheme = 'all';
    if (state.level === 'all' || !state.level) {
      const s = getSubjectDef(state.subject || 'maths');
      state.level = (s.availableLevels && s.availableLevels[0]) || 1;
    }
  }

  render();
}

function setModuleTheme(themeId) {
  state.moduleSelectionMode = 'theme';
  state.selectedTheme = themeId || 'all';
  state.level = 'all';
  state.searchQuery = '';
  state.activeKeywords = [];
  render();
}

function setParcoursMode(mode) {
  state.moduleSelectionMode = mode === 'theme' ? 'theme' : 'level';
  if (state.moduleSelectionMode === 'level' && (state.level === 'all' || !state.level)) {
    const s = getSubjectDef(state.subject || 'maths');
    state.level = (s.availableLevels && s.availableLevels[0]) || 1;
  }
  if (state.moduleSelectionMode === 'theme') {
    state.selectedTheme = state.selectedTheme || 'all';
  }
  render();
}

function openThemeModules(subject, themeId) {
  state.moduleSelectionMode = 'theme';
  state.selectedTheme = themeId || 'all';
  state.level = 'all';
  state.searchQuery = '';
  state.activeKeywords = [];
  navigate('modules', { subject: subject || state.subject || 'maths', level: 'all' });
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

  const adSlot = document.getElementById('modules-ad-slot');
  if (adSlot) adSlot.style.display = visible === 0 ? 'none' : '';

  // Restore focus on search input
  const input = document.getElementById('search-modules');
  if (input && document.activeElement !== input && state.searchQuery) input.focus();
}

/* ── Bannière d'annonce globale ── */
function showAnnouncementBanner(text) {
  var banner = document.getElementById('announcement-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'announcement-banner';
    banner.className = 'ap-announcement-banner';
    banner.innerHTML = '<div class="ap-announcement-track"><span class="ap-announcement-text"></span></div>';
    var header = document.getElementById('site-header');
    if (header && header.parentNode) {
      header.parentNode.insertBefore(banner, header.nextSibling);
    } else {
      document.body.insertBefore(banner, document.body.firstChild);
    }
  }

  var track = banner.querySelector('.ap-announcement-track');
  var textEl = banner.querySelector('.ap-announcement-text');
  textEl.textContent = text;
  banner.style.display = 'block';

  // Défilement horizontal uniquement si le texte ne tient pas sur une ligne
  track.classList.remove('ap-scrolling');
  track.style.animationDuration = '';
  requestAnimationFrame(function() {
    if (textEl.scrollWidth > banner.clientWidth) {
      var speedPxPerSec = 70;
      var duration = (textEl.scrollWidth + banner.clientWidth) / speedPxPerSec;
      track.style.animationDuration = duration + 's';
      track.classList.add('ap-scrolling');
    }
  });
}

function hideAnnouncementBanner() {
  var banner = document.getElementById('announcement-banner');
  if (banner) banner.style.display = 'none';
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

/* ── Scroll-to-top button ── */
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scroll-top');
  if (btn) btn.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

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

/* ── Back/forward buttons ── */
window.addEventListener('popstate', () => {
  const route = parsePath(window.location.pathname);
  navigate(route.view, route, { skipUrlSync: true });
});

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('sparkTheme') || 'light';
  applyTheme(savedTheme);

  // Bannière de consentement cookies (RGPD/CNIL) — avant toute autre init,
  // indépendant du rôle (invité/élève/enseignant/admin)
  if (typeof Consent !== 'undefined') Consent.init();

  // Auth init
  AuthService.init();

  AuthService.onAuthStateChanged(async function(firebaseUser) {
    if (!firebaseUser) {
      SyncService.unwrap();
      AuthGuard.reset();
      if (await _checkMaintenance()) return;
      await _syncModuleAccess();
      _watchAnnouncement();
      _setupStudentApp();
      return;
    }

    try {
      await AuthGuard.init(firebaseUser);
    } catch (e) {
      AuthView.render();
      return;
    }

    if (!AuthGuard.isAuthenticated()) {
      AuthView.render();
      return;
    }

    var status = AuthGuard.getStatus();
    var role = AuthGuard.getRole();
    var uid = AuthGuard.getCurrentUser().uid;

    if (status === 'pending') {
      AuthView.renderPending();
      return;
    }
    if (status === 'rejected') {
      SyncService.unwrap();
      AuthView.render();
      return;
    }

    // Active user
    SyncService.init(uid);
    await _syncModuleAccess();
    _watchAnnouncement();

    if (role === 'admin') {
      _setupCommonListeners();
      AdminPanel.render();
      return;
    }

    // Vérifier le mode maintenance avant d'afficher l'app aux non-admins
    if (await _checkMaintenance()) return;

    if (role === 'teacher') {
      _setupCommonListeners();
      TeacherDashboard.render();
      return;
    }

    // Student — full app
    _setupStudentApp();
  });
});

// Récupère l'état verrouillage/maintenance des modules depuis Firestore (source de vérité serveur),
// nécessaire pour que le verrouillage décidé par un admin s'applique aux autres utilisateurs
// (auparavant stocké uniquement dans le localStorage de l'admin, donc jamais vu par les élèves).
async function _syncModuleAccess() {
  try {
    var remote = await AuthService.getModuleAccess();
    Storage.setAllModuleStatuses(remote);
    state.moduleAccess = remote;
  } catch (e) { /* en cas d'erreur, on garde le cache local existant */ }
}

// Écoute Firestore en temps réel : la bannière apparaît/disparaît pour tout le monde
// (invités compris) dès qu'un admin publie/dépublie, sans attendre un rechargement.
var _announcementUnsub = null;
function _watchAnnouncement() {
  if (_announcementUnsub) { _announcementUnsub(); _announcementUnsub = null; }
  _announcementUnsub = AuthService.watchAnnouncement(function(ann) {
    if (ann && ann.text) showAnnouncementBanner(ann.text);
    else hideAnnouncementBanner();
  });
}

async function _checkMaintenance() {
  try {
    var platformSettings = await AuthService.getPlatformSettings();
    if (platformSettings && platformSettings.maintenanceMode) {
      document.getElementById('app').innerHTML =
        '<div class="maintenance-page">' +
          '<div class="maintenance-icon">🛠️</div>' +
          '<h1 class="maintenance-title">Site en maintenance</h1>' +
          '<p class="maintenance-msg">Spark Learning est temporairement indisponible.<br/>Revenez dans quelques instants !</p>' +
        '</div>';
      return true;
    }
  } catch (e) { /* Fail-open assumé : en cas d'erreur Firestore (offline, quota...), on privilégie la
                   disponibilité de l'app plutôt que de bloquer tous les utilisateurs sur une panne
                   du contrôle de maintenance lui-même. */ }
  return false;
}

function _setupCommonListeners() {
  // Visibilité nav selon le statut invité/connecté (recalculée à chaque appel)
  var isGuest = !AuthGuard.isAuthenticated();
  var teacherNav = document.getElementById('nav-teacher');
  if (teacherNav) teacherNav.style.display = isGuest ? 'none' : '';
  var homeworkNav = document.getElementById('nav-homework');
  if (homeworkNav) homeworkNav.style.display = isGuest ? 'none' : '';
  var signOutBtn = document.getElementById('nav-signout');
  if (signOutBtn) signOutBtn.style.display = isGuest ? 'none' : 'inline-flex';
  var loginBtn = document.getElementById('nav-login');
  if (loginBtn) loginBtn.style.display = isGuest ? 'inline-flex' : 'none';
  var tutoringNav = document.getElementById('nav-tutoring');
  if (tutoringNav) tutoringNav.style.display = (typeof AuthGuard !== 'undefined' && AuthGuard.isTutor()) ? '' : 'none';

  if (_setupCommonListeners._done) return;
  _setupCommonListeners._done = true;

  document.getElementById('nav-home')?.addEventListener('click', () => navigate('home'));
  document.getElementById('nav-parcours')?.addEventListener('click', () => navigate('subjects'));
  document.getElementById('nav-teacher')?.addEventListener('click', () => {
    var role = AuthGuard.getRole();
    if (role === 'admin') AdminPanel.render();
    else if (role === 'teacher') TeacherDashboard.render();
    else navigate('teacher');
  });
  document.getElementById('nav-tutoring')?.addEventListener('click', () => navigate('tutoring'));
  loginBtn?.addEventListener('click', () => AuthView.render(true));
  document.getElementById('logo-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    var role = AuthGuard.getRole();
    if (role === 'admin') AdminPanel.render();
    else if (role === 'teacher') TeacherDashboard.render();
    else navigate('home');
  });
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('projector-toggle')?.addEventListener('click', toggleProjector);
  document.getElementById('global-search-toggle')?.addEventListener('click', toggleGlobalSearchPanel);
  document.getElementById('scroll-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.getElementById('contact-toggle')?.addEventListener('click', toggleContactPanel);
  document.getElementById('contact-close')?.addEventListener('click', closeContactPanel);
  document.getElementById('contact-form')?.addEventListener('submit', handleContactSubmit);
  document.getElementById('global-search-close')?.addEventListener('click', closeGlobalSearchPanel);
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

  signOutBtn?.addEventListener('click', function() {
    if (confirm('Se déconnecter ?')) AuthService.signOut();
  });
}

function _setupStudentApp() {
  _setupCommonListeners();

  document.getElementById('nav-homework')?.addEventListener('click', () => navigate('homework'));

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

  // Restore route from URL. Un ancien lien #hash (déjà partagé/en favori) n'a
  // jamais de vrai chemin (pathname reste '/') : on ne le traite comme route
  // legacy que dans ce cas précis, sinon un fragment sans rapport avec le
  // routage (ex. '#app' laissé par le lien d'accessibilité après un clic +
  // rechargement) écraserait un vrai chemin profond via replaceState.
  let route;
  if (window.location.pathname === '/' && window.location.hash) {
    route = parseLegacyHash(window.location.hash);
    history.replaceState(null, '', buildPath(route.view, route));
  } else {
    route = parsePath(window.location.pathname);
  }
  navigate(route.view, route, { skipUrlSync: true });

  // Preload all data
  if (typeof ensureAllData === 'function') {
    ensureAllData().then(() => {
      // Re-render les vues listant les modules si elles ont fini de charger entre-temps
      // (subjects/levels/modules lisent window.MODULES synchronement, sans passer par navigate())
      if (['home', 'subjects', 'levels', 'modules'].includes(state.view)) render();
    }).catch(() => {});
  }
}
