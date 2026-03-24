/* =========================================================
   Spark Learning – flashcards.js
   Génération et navigation de flashcards depuis les données cours
   ========================================================= */

/**
 * Construit un deck de flashcards à partir d'un module.
 * Parse automatiquement definitions[], formulas[] et recap[].
 */
function buildFlashcardDeck(mod) {
  const deck = [];
  const c = mod.cours;
  if (!c) return deck;

  // Définitions
  if (c.definitions && c.definitions.length) {
    c.definitions.forEach(d => {
      deck.push({ recto: d.term, verso: d.def, type: 'definition' });
    });
  }

  // Formules
  if (c.formulas && c.formulas.length) {
    c.formulas.forEach(f => {
      // Tenter de séparer formule KaTeX et description textuelle
      // Pattern: "$formule$  texte" ou "$formule$ : texte"
      const match = f.match(/^(\$[^$]+\$)\s*[:\u2014\u2013\-]?\s*(.+)$/s);
      if (match && match[2] && match[2].trim().length > 5) {
        deck.push({ recto: match[2].trim(), verso: match[1], type: 'formula' });
      } else {
        // Pas de description claire : recto = "Quelle est cette formule ?", verso = formule complète
        deck.push({ recto: 'Quelle est cette formule ?', verso: f, type: 'formula' });
      }
    });
  }

  // Recap
  if (c.recap && c.recap.length) {
    c.recap.forEach(r => {
      deck.push({ recto: 'Point cl\u00e9 \u00e0 retenir :', verso: r, type: 'recap' });
    });
  }

  return deck;
}

/**
 * Initialise l'état flashcard pour un module donné.
 */
function initFlashcards(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return;

  const deck = buildFlashcardDeck(mod);
  if (deck.length === 0) return;

  // Charger les cartes déjà maîtrisées
  const saved = (typeof Storage !== 'undefined' && Storage.getFlashcardState)
    ? Storage.getFlashcardState(moduleId) : { known: [] };

  state.flashcardState = {
    moduleId: moduleId,
    deck: deck,
    currentIndex: 0,
    flipped: false,
    known: new Set(saved.known || []),
    mode: 'all' // 'all' | 'unknown'
  };
}

function _getVisibleDeck() {
  const fs = state.flashcardState;
  if (!fs || !fs.deck) return [];
  if (fs.mode === 'unknown') {
    return fs.deck.map((card, i) => ({ card, idx: i })).filter(c => !fs.known.has(c.idx));
  }
  return fs.deck.map((card, i) => ({ card, idx: i }));
}

function flipFlashcard() {
  if (!state.flashcardState) return;
  state.flashcardState.flipped = !state.flashcardState.flipped;
  const el = document.querySelector('.flashcard');
  if (el) el.classList.toggle('flipped', state.flashcardState.flipped);
}

function nextFlashcard() {
  const fs = state.flashcardState;
  if (!fs) return;
  const visible = _getVisibleDeck();
  if (visible.length === 0) return;
  fs.currentIndex = (fs.currentIndex + 1) % visible.length;
  fs.flipped = false;
  _renderFlashcardCard();
}

function prevFlashcard() {
  const fs = state.flashcardState;
  if (!fs) return;
  const visible = _getVisibleDeck();
  if (visible.length === 0) return;
  fs.currentIndex = (fs.currentIndex - 1 + visible.length) % visible.length;
  fs.flipped = false;
  _renderFlashcardCard();
}

function toggleFlashcardKnown() {
  const fs = state.flashcardState;
  if (!fs) return;
  const visible = _getVisibleDeck();
  if (visible.length === 0) return;
  const realIdx = visible[fs.currentIndex].idx;

  if (fs.known.has(realIdx)) {
    fs.known.delete(realIdx);
  } else {
    fs.known.add(realIdx);
  }

  // Sauvegarder
  if (typeof Storage !== 'undefined' && Storage.saveFlashcardKnown) {
    Storage.saveFlashcardKnown(fs.moduleId, Array.from(fs.known));
  }

  // Si on est en mode "unknown" et on vient de marquer comme connu, avancer
  if (fs.mode === 'unknown') {
    const newVisible = _getVisibleDeck();
    if (newVisible.length === 0) {
      // Toutes les cartes sont connues !
      _renderFlashcardCard();
      return;
    }
    if (fs.currentIndex >= newVisible.length) fs.currentIndex = 0;
  }
  _renderFlashcardCard();
}

function setFlashcardMode(mode) {
  const fs = state.flashcardState;
  if (!fs) return;
  fs.mode = mode;
  fs.currentIndex = 0;
  fs.flipped = false;
  _renderFlashcardCard();
}

function _renderFlashcardCard() {
  // Re-render just the flashcard area without full page re-render
  const container = document.getElementById('flashcard-area');
  if (!container) return;
  container.innerHTML = _flashcardAreaHTML();
  renderMath();
}

function _flashcardAreaHTML() {
  const fs = state.flashcardState;
  if (!fs || !fs.deck) return '';
  const visible = _getVisibleDeck();

  if (visible.length === 0) {
    return `
      <div class="flashcard-summary">
        <div class="flashcard-summary-score">&#x1F389;</div>
        <h3>Toutes les cartes sont ma\u00eetris\u00e9es !</h3>
        <p style="color:var(--text-muted);margin:var(--space-md) 0;">${fs.known.size} / ${fs.deck.length} cartes connues</p>
        <button class="btn btn-secondary" onclick="setFlashcardMode('all')">Revoir toutes les cartes</button>
      </div>
    `;
  }

  const current = visible[fs.currentIndex];
  const card = current.card;
  const realIdx = current.idx;
  const isKnown = fs.known.has(realIdx);

  const typeLabels = { definition: 'D\u00e9finition', formula: 'Formule', recap: 'Recap' };

  return `
    <div class="flashcard-progress">
      <div class="flashcard-progress-fill" style="width:${((fs.currentIndex + 1) / visible.length) * 100}%"></div>
    </div>
    <div class="flashcard-counter">${fs.currentIndex + 1} / ${visible.length} ${fs.mode === 'unknown' ? '(\u00e0 r\u00e9viser)' : ''}</div>

    <div class="flashcard-container" onclick="flipFlashcard()" aria-label="Cliquer pour retourner la carte" tabindex="0" role="button">
      <div class="flashcard ${fs.flipped ? 'flipped' : ''} flashcard-type-${card.type}">
        <div class="flashcard-face flashcard-recto">
          <span class="flashcard-type-badge">${typeLabels[card.type] || card.type}</span>
          <div class="flashcard-face-content">${card.recto}</div>
          <div class="flashcard-hint">Clique pour r\u00e9v\u00e9ler</div>
        </div>
        <div class="flashcard-face flashcard-verso">
          <span class="flashcard-type-badge">${typeLabels[card.type] || card.type}</span>
          <div class="flashcard-face-content">${card.verso}</div>
        </div>
      </div>
    </div>

    <div class="flashcard-controls">
      <button class="btn btn-secondary" onclick="prevFlashcard()" aria-label="Carte pr\u00e9c\u00e9dente">\u2190</button>
      <button class="btn ${isKnown ? 'btn-primary flashcard-known-btn active' : 'btn-secondary flashcard-known-btn'}" onclick="toggleFlashcardKnown()">
        ${isKnown ? '\u2713 Maitris\u00e9e' : 'Je sais'}
      </button>
      <button class="btn btn-secondary" onclick="nextFlashcard()" aria-label="Carte suivante">\u2192</button>
    </div>

    <div style="text-align:center;margin-top:var(--space-lg);">
      <span style="font-size:0.85rem;color:var(--text-muted);">${fs.known.size} / ${fs.deck.length} ma\u00eetris\u00e9es</span>
      ${fs.mode === 'all' && fs.known.size > 0 && fs.known.size < fs.deck.length ? `
        <button class="btn btn-sm btn-outline" style="margin-left:var(--space-md);" onclick="setFlashcardMode('unknown')">R\u00e9viser les non-ma\u00eetris\u00e9es</button>
      ` : ''}
      ${fs.mode === 'unknown' ? `
        <button class="btn btn-sm btn-outline" style="margin-left:var(--space-md);" onclick="setFlashcardMode('all')">Voir toutes</button>
      ` : ''}
    </div>
  `;
}

/**
 * Rendu complet de la vue flashcards (appelé par render() dans app.js).
 */
function renderFlashcards() {
  const fs = state.flashcardState;
  if (!fs || !fs.deck || fs.deck.length === 0) {
    return `
      <div class="container flashcard-view">
        <p style="text-align:center;color:var(--text-muted);padding:var(--space-2xl);">
          Ce module ne contient pas de d\u00e9finitions ni de formules pour g\u00e9n\u00e9rer des flashcards.
        </p>
        <div style="text-align:center;">
          <button class="btn btn-secondary" onclick="navigate('module', {moduleId: '${state.moduleId}'})">Retour au module</button>
        </div>
      </div>
    `;
  }

  const mod = getModule(fs.moduleId);
  const title = mod ? mod.title : '';

  return `
    <div class="container flashcard-view">
      <div class="flashcard-header">
        <button class="btn btn-secondary btn-sm" onclick="navigate('module', {moduleId: '${fs.moduleId}'})">
          \u2190 Retour au module
        </button>
        <h2 style="margin:0;font-size:1.2rem;">Flashcards \u2014 ${title}</h2>
        <span class="flashcard-counter">${fs.deck.length} cartes</span>
      </div>
      <div id="flashcard-area">
        ${_flashcardAreaHTML()}
      </div>
    </div>
  `;
}
