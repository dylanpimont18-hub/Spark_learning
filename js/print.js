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

/* ── Evaluation builder mode ── */
function toggleEvalBuilderMode() {
  if (!AuthGuard.isTeacher()) return;
  state.evalBuilderMode = !state.evalBuilderMode;
  const grid = document.getElementById('modules-grid');
  if (!grid) return;

  if (state.evalBuilderMode) {
    state.selectedEvalQuestions = {};
    grid.querySelectorAll('.module-card').forEach(card => {
      const onclick = card.getAttribute('onclick') || '';
      const match = onclick.match(/moduleId:\s*'([^']+)'/);
      if (!match) return;
      const moduleId = match[1];
      const mod = getModule(moduleId);
      if (!mod || !mod.evaluation || !mod.evaluation.questions || !mod.evaluation.questions.length) return;

      const cb = document.createElement('label');
      cb.className = 'eval-select-checkbox';
      cb.innerHTML = '<input type="checkbox" data-eval-id="' + moduleId + '" onclick="event.stopPropagation(); toggleEvalModuleSelection(\'' + moduleId + '\')">';
      card.prepend(cb);

      const adjustBtn = document.createElement('button');
      adjustBtn.type = 'button';
      adjustBtn.className = 'eval-adjust-link';
      adjustBtn.textContent = '✎ Ajuster les questions (' + mod.evaluation.questions.length + ')';
      adjustBtn.onclick = function(e) { e.stopPropagation(); toggleEvalQuestionPicker(moduleId, card); };
      card.appendChild(adjustBtn);
    });
    showEvalToolbar();
  } else {
    state.selectedEvalQuestions = {};
    grid.querySelectorAll('.eval-select-checkbox, .eval-adjust-link, .eval-question-picker').forEach(el => el.remove());
    hideEvalToolbar();
  }
}

function toggleEvalModuleSelection(moduleId) {
  const mod = getModule(moduleId);
  if (!mod || !mod.evaluation) return;
  if (state.selectedEvalQuestions[moduleId]) {
    delete state.selectedEvalQuestions[moduleId];
  } else {
    state.selectedEvalQuestions[moduleId] = mod.evaluation.questions.map((_, i) => i);
  }
  const grid = document.getElementById('modules-grid');
  const picker = grid && grid.querySelector('.eval-question-picker[data-for="' + moduleId + '"]');
  if (picker) picker.remove();
  updateEvalCount();
}

function toggleEvalQuestionPicker(moduleId, card) {
  const existing = card.querySelector('.eval-question-picker');
  if (existing) { existing.remove(); return; }
  const mod = getModule(moduleId);
  if (!mod || !mod.evaluation) return;

  if (!state.selectedEvalQuestions[moduleId]) {
    state.selectedEvalQuestions[moduleId] = mod.evaluation.questions.map((_, i) => i);
    const checkbox = card.querySelector('.eval-select-checkbox input');
    if (checkbox) checkbox.checked = true;
    updateEvalCount();
  }

  const picker = document.createElement('div');
  picker.className = 'eval-question-picker';
  picker.setAttribute('data-for', moduleId);
  picker.onclick = function(e) { e.stopPropagation(); };
  picker.innerHTML = mod.evaluation.questions.map((q, i) => {
    const checked = state.selectedEvalQuestions[moduleId].indexOf(i) !== -1;
    const label = (q.statement || '').replace(/[$\\]/g, '').slice(0, 70);
    return '<label class="eval-question-row">' +
      '<input type="checkbox" ' + (checked ? 'checked' : '') + ' onchange="toggleEvalQuestion(\'' + moduleId + '\', ' + i + ')">' +
      '<span>' + label + (label.length >= 70 ? '…' : '') + ' <em>(' + q.points + ' pt' + (q.points > 1 ? 's' : '') + ')</em></span>' +
    '</label>';
  }).join('');
  card.appendChild(picker);
}

function toggleEvalQuestion(moduleId, index) {
  const list = state.selectedEvalQuestions[moduleId] || [];
  const idx = list.indexOf(index);
  if (idx === -1) list.push(index); else list.splice(idx, 1);

  const grid = document.getElementById('modules-grid');
  const checkbox = grid && grid.querySelector('.eval-select-checkbox input[data-eval-id="' + moduleId + '"]');
  if (list.length === 0) {
    delete state.selectedEvalQuestions[moduleId];
    if (checkbox) checkbox.checked = false;
  } else {
    state.selectedEvalQuestions[moduleId] = list;
    if (checkbox) checkbox.checked = true;
  }
  updateEvalCount();
}

function showEvalToolbar() {
  let toolbar = document.getElementById('eval-builder-toolbar');
  if (toolbar) { toolbar.style.display = 'flex'; updateEvalCount(); return; }
  toolbar = document.createElement('div');
  toolbar.className = 'batch-print-toolbar';
  toolbar.id = 'eval-builder-toolbar';
  toolbar.innerHTML = `
    <span class="batch-count" id="eval-count">0 question sélectionnée</span>
    <button class="btn btn-sm btn-secondary" onclick="printEvaluationSubject()">Sujet élève 🖨️</button>
    <button class="btn btn-sm btn-secondary" onclick="printEvaluationCorrection()">Corrigé 🖨️</button>
    <button class="btn btn-sm btn-outline" onclick="toggleEvalBuilderMode()">Annuler</button>
  `;
  document.body.appendChild(toolbar);
  updateEvalCount();
}

function hideEvalToolbar() {
  const toolbar = document.getElementById('eval-builder-toolbar');
  if (toolbar) toolbar.remove();
}

function updateEvalCount() {
  const el = document.getElementById('eval-count');
  if (!el) return;
  let n = 0, pts = 0;
  Object.keys(state.selectedEvalQuestions).forEach(moduleId => {
    const mod = getModule(moduleId);
    if (!mod || !mod.evaluation) return;
    const idxs = state.selectedEvalQuestions[moduleId];
    n += idxs.length;
    idxs.forEach(i => {
      const q = mod.evaluation.questions[i];
      if (q) pts += q.points || 0;
    });
  });
  el.textContent = n + ' question' + (n > 1 ? 's' : '') + ' sélectionnée' + (n > 1 ? 's' : '') + ' · ' + pts + ' point' + (pts > 1 ? 's' : '');
}

function _collectSelectedEvalQuestions() {
  const out = [];
  Object.keys(state.selectedEvalQuestions).forEach(moduleId => {
    const mod = getModule(moduleId);
    if (!mod || !mod.evaluation) return;
    const idxs = state.selectedEvalQuestions[moduleId].slice().sort((a, b) => a - b);
    idxs.forEach(i => {
      const q = mod.evaluation.questions[i];
      if (q) out.push({ moduleTitle: mod.title, question: q });
    });
  });
  return out;
}

function printEvaluationSubject() {
  if (!AuthGuard.isTeacher()) return;
  const items = _collectSelectedEvalQuestions();
  if (items.length === 0) {
    showToast('Sélectionne au moins une question', 'info');
    return;
  }
  const container = document.getElementById('print-container');
  if (!container) return;
  container.innerHTML = renderEvaluationPrintSheet(items, 'subject');
  _renderMathInPrint(container);
  _triggerPrint();
}

function printEvaluationCorrection() {
  if (!AuthGuard.isTeacher()) return;
  const items = _collectSelectedEvalQuestions();
  if (items.length === 0) {
    showToast('Sélectionne au moins une question', 'info');
    return;
  }
  const container = document.getElementById('print-container');
  if (!container) return;
  container.innerHTML = renderEvaluationPrintSheet(items, 'correction');
  _renderMathInPrint(container);
  _triggerPrint();
}
