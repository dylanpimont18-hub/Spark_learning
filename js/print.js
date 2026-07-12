/* =========================================================
   Spark Learning – print.js
   Impression des fiches de cours (individuelle + sélection multiple)
   ========================================================= */
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
  if (!AuthGuard.isTeacher()) return;
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
  if (!AuthGuard.isTeacher()) return;
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
  if (!AuthGuard.isTeacher()) return;
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
