/* =========================================================
   Spark Learning – playlist.js
   Parcours personnalisés pour enseignants + vue guidée
   ========================================================= */

const TAB_LABELS = {
  cours: 'Cours', quiz: 'Quiz', exercice: 'Exercice',
  probleme: 'Probl\u00e8me', evaluation: '\u00c9valuation'
};

/* ══════════════════════════════════════
   PLAYLIST STATE
══════════════════════════════════════ */
function initPlaylistState() {
  if (!state.playlistState) {
    state.playlistState = {
      active: false,
      title: '',
      steps: [],
      currentStep: 0
    };
  }
}

/* ══════════════════════════════════════
   ENCODER / DECODER
══════════════════════════════════════ */
function encodePlaylist(title, steps) {
  const data = JSON.stringify({ title: title, steps: steps });
  return btoa(unescape(encodeURIComponent(data)));
}

function decodePlaylist(encoded) {
  try {
    const json = decodeURIComponent(escape(atob(encoded)));
    return JSON.parse(json);
  } catch {
    return null;
  }
}

/* ══════════════════════════════════════
   NAVIGATION PLAYLIST (vue guidée)
══════════════════════════════════════ */
function loadPlaylist(encoded) {
  const data = decodePlaylist(encoded);
  if (!data || !data.steps || data.steps.length === 0) return false;

  // Limiter à 20 steps
  const steps = data.steps.slice(0, 20);

  state.playlistState = {
    active: true,
    title: data.title || 'Playlist',
    steps: steps,
    currentStep: 0
  };
  return true;
}

function playlistNext() {
  const ps = state.playlistState;
  if (!ps || !ps.active) return;
  if (ps.currentStep < ps.steps.length - 1) {
    ps.currentStep++;
    _renderPlaylistStep();
  }
}

function playlistPrev() {
  const ps = state.playlistState;
  if (!ps || !ps.active) return;
  if (ps.currentStep > 0) {
    ps.currentStep--;
    _renderPlaylistStep();
  }
}

function exitPlaylist() {
  state.playlistState = { active: false, title: '', steps: [], currentStep: 0 };
  navigate('home');
}

function _renderPlaylistStep() {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = renderPlaylistView();
    renderMath();
  }
}

/**
 * Rendu de la vue guidée playlist (pour l'élève).
 */
function renderPlaylistView() {
  const ps = state.playlistState;
  if (!ps || !ps.active || ps.steps.length === 0) {
    return '<div class="container"><p>Playlist invalide ou vide.</p></div>';
  }

  const step = ps.steps[ps.currentStep];
  const mod = getModule(step.moduleId);
  if (!mod) {
    return '<div class="container"><p>Module introuvable : ' + step.moduleId + '</p></div>';
  }

  // Configurer le state pour le rendu du tab content
  state.moduleId = step.moduleId;
  state.tab = step.tab || 'cours';

  // Générer exercice si nécessaire
  if (state.tab === 'exercice' && !state.exerciceState.current) {
    state.exerciceState = { ...defaultExerciceState(), current: mod.exercice.generate() };
  }

  const tabContent = typeof renderTabContentHTML === 'function'
    ? renderTabContentHTML(mod)
    : '<p>Contenu non disponible</p>';

  return `
    <div class="playlist-bar">
      <button class="btn btn-sm btn-secondary" onclick="exitPlaylist()">Quitter</button>
      <span class="playlist-bar-title">${ps.title}</span>
      <div class="playlist-progress-mini">
        ${ps.steps.map((s, i) => `<div class="playlist-dot ${i < ps.currentStep ? 'done' : ''} ${i === ps.currentStep ? 'current' : ''}"></div>`).join('')}
      </div>
    </div>
    <div class="container" style="padding-top:var(--space-lg);">
      <div style="margin-bottom:var(--space-md);">
        <span style="font-size:0.85rem;color:var(--text-muted);">\u00c9tape ${ps.currentStep + 1} / ${ps.steps.length}</span>
        <h2 style="margin:4px 0 0;">${mod.icon} ${mod.title} \u2014 ${TAB_LABELS[step.tab] || step.tab}</h2>
      </div>
      <div class="tab-content">${tabContent}</div>
      <div class="playlist-nav">
        <button class="btn btn-secondary" onclick="playlistPrev()" ${ps.currentStep === 0 ? 'disabled' : ''}>\u2190 Pr\u00e9c\u00e9dent</button>
        ${ps.currentStep < ps.steps.length - 1
          ? '<button class="btn btn-primary" onclick="playlistNext()">Suivant \u2192</button>'
          : '<button class="btn btn-primary" onclick="exitPlaylist()">Terminer la playlist</button>'}
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════
   BUILDER (vue enseignant)
══════════════════════════════════════ */
function initPlaylistBuilder() {
  if (!state.playlistBuilder) {
    state.playlistBuilder = {
      title: 'Mon parcours',
      steps: [],
      showPicker: false,
      generatedLink: ''
    };
  }
}

function addPlaylistStep(moduleId, tab) {
  initPlaylistBuilder();
  const pb = state.playlistBuilder;
  if (pb.steps.length >= 20) {
    showToast('Maximum 20 \u00e9tapes par playlist', 'error');
    return;
  }
  pb.steps.push({ moduleId: moduleId, tab: tab });
  _refreshBuilder();
}

function removePlaylistStep(index) {
  const pb = state.playlistBuilder;
  if (!pb) return;
  pb.steps.splice(index, 1);
  _refreshBuilder();
}

function movePlaylistStep(index, direction) {
  const pb = state.playlistBuilder;
  if (!pb) return;
  const newIdx = index + direction;
  if (newIdx < 0 || newIdx >= pb.steps.length) return;
  const temp = pb.steps[index];
  pb.steps[index] = pb.steps[newIdx];
  pb.steps[newIdx] = temp;
  _refreshBuilder();
}

function generatePlaylistLink() {
  const pb = state.playlistBuilder;
  if (!pb || pb.steps.length === 0) {
    showToast('Ajoute au moins une \u00e9tape', 'error');
    return;
  }
  const titleInput = document.getElementById('playlist-title-input');
  if (titleInput) pb.title = titleInput.value || 'Mon parcours';
  const encoded = encodePlaylist(pb.title, pb.steps);
  pb.generatedLink = window.location.origin + window.location.pathname + '#playlist/' + encoded;
  _refreshBuilder();
}

function copyPlaylistLink() {
  const pb = state.playlistBuilder;
  if (!pb || !pb.generatedLink) return;
  navigator.clipboard.writeText(pb.generatedLink).then(() => {
    showToast('Lien copi\u00e9 !', 'success');
  }).catch(() => {
    // Fallback
    const input = document.getElementById('playlist-link-input');
    if (input) { input.select(); document.execCommand('copy'); }
    showToast('Lien copi\u00e9 !', 'success');
  });
}

function togglePlaylistPicker() {
  const pb = state.playlistBuilder;
  if (!pb) return;
  pb.showPicker = !pb.showPicker;
  _refreshBuilder();
}

function _refreshBuilder() {
  const area = document.getElementById('playlist-builder-area');
  if (area) {
    area.innerHTML = _builderContentHTML();
    renderMath();
  }
}

function _builderContentHTML() {
  const pb = state.playlistBuilder;
  if (!pb) return '';

  const tabs = ['cours', 'quiz', 'exercice', 'probleme', 'evaluation'];

  let stepsHTML = '';
  if (pb.steps.length === 0) {
    stepsHTML = '<p style="color:var(--text-muted);text-align:center;padding:var(--space-lg);">Aucune \u00e9tape ajout\u00e9e. Clique sur "Ajouter" pour commencer.</p>';
  } else {
    stepsHTML = '<ol class="playlist-step-list">' + pb.steps.map((s, i) => {
      const mod = getModule(s.moduleId);
      const label = mod ? mod.title : s.moduleId;
      const icon = mod ? mod.icon : '';
      return `
        <li class="playlist-step-item">
          <span class="playlist-step-handle">\u2261</span>
          <div class="playlist-step-info">
            <div class="playlist-step-title">${icon} ${label}</div>
            <div class="playlist-step-tab">${TAB_LABELS[s.tab] || s.tab}</div>
          </div>
          <button class="btn btn-sm btn-secondary" onclick="movePlaylistStep(${i}, -1)" ${i === 0 ? 'disabled' : ''} aria-label="Monter">\u2191</button>
          <button class="btn btn-sm btn-secondary" onclick="movePlaylistStep(${i}, 1)" ${i === pb.steps.length - 1 ? 'disabled' : ''} aria-label="Descendre">\u2193</button>
          <button class="btn btn-sm btn-outline" onclick="removePlaylistStep(${i})" aria-label="Supprimer">\u2715</button>
        </li>
      `;
    }).join('') + '</ol>';
  }

  let pickerHTML = '';
  if (pb.showPicker) {
    const modules = window.MODULES || [];
    pickerHTML = `
      <div class="playlist-add-area">
        <p style="font-weight:600;margin-bottom:var(--space-sm);">Choisir un module et un onglet :</p>
        <div class="playlist-module-picker">
          ${modules.slice(0, 50).map(m => `
            <div class="playlist-module-pick">
              <div style="font-weight:600;font-size:0.85rem;">${m.icon} ${m.title}</div>
              <div style="display:flex;gap:4px;margin-top:6px;flex-wrap:wrap;">
                ${tabs.map(t => `<button class="btn btn-sm btn-outline" onclick="addPlaylistStep('${m.id}','${t}');togglePlaylistPicker();">${TAB_LABELS[t]}</button>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
        <button class="btn btn-secondary btn-sm" style="margin-top:var(--space-md);" onclick="togglePlaylistPicker()">Fermer</button>
      </div>
    `;
  }

  let linkHTML = '';
  if (pb.generatedLink) {
    linkHTML = `
      <div class="playlist-link-box">
        <input type="text" id="playlist-link-input" value="${pb.generatedLink}" readonly onclick="this.select()">
        <button class="btn btn-primary btn-sm" onclick="copyPlaylistLink()">Copier</button>
      </div>
    `;
  }

  return `
    ${stepsHTML}
    <div style="display:flex;gap:var(--space-sm);margin-bottom:var(--space-lg);">
      <button class="btn btn-secondary" onclick="togglePlaylistPicker()">+ Ajouter une \u00e9tape</button>
      <button class="btn btn-primary" onclick="generatePlaylistLink()" ${pb.steps.length === 0 ? 'disabled' : ''}>G\u00e9n\u00e9rer le lien</button>
    </div>
    ${pickerHTML}
    ${linkHTML}
  `;
}

/**
 * Rendu du builder enseignant.
 */
function renderTeacherBuilder() {
  initPlaylistBuilder();
  const pb = state.playlistBuilder;

  return `
    <div class="container playlist-builder">
      <div class="page-header">
        <button class="btn btn-secondary btn-sm" onclick="navigate('home')" style="margin-bottom:var(--space-sm);">\u2190 Accueil</button>
        <h1 class="page-title">Cr\u00e9er une Playlist</h1>
        <p class="page-subtitle">S\u00e9lectionne des modules et onglets pour cr\u00e9er un parcours guid\u00e9 pour tes \u00e9l\u00e8ves.</p>
      </div>
      <div style="margin-bottom:var(--space-lg);">
        <label style="font-weight:600;font-size:0.9rem;display:block;margin-bottom:6px;">Titre du parcours</label>
        <input type="text" id="playlist-title-input" class="homework-title-input" value="${pb.title}" placeholder="Mon parcours" style="margin-bottom:0;">
      </div>
      <div id="playlist-builder-area">
        ${_builderContentHTML()}
      </div>
    </div>
  `;
}
