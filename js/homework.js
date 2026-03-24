/* =========================================================
   Spark Learning – homework.js
   Générateur de devoirs sur mesure avec export PDF
   ========================================================= */

/* ══════════════════════════════════════
   STATE
══════════════════════════════════════ */
function initHomeworkState() {
  if (!state.homeworkState) {
    state.homeworkState = {
      items: [],  // { moduleId, type, data, label }
      title: 'Devoir'
    };
  }
}

/* ══════════════════════════════════════
   AJOUTER / SUPPRIMER
══════════════════════════════════════ */
function addToHomework(moduleId, type) {
  initHomeworkState();
  const mod = getModule(moduleId);
  if (!mod) return;

  let data = null;
  let label = '';

  if (type === 'exercice') {
    // Générer une instance avec des valeurs spécifiques
    data = mod.exercice.generate();
    label = 'Exercice \u2014 ' + mod.title;
  } else if (type === 'evaluation') {
    data = mod.evaluation;
    label = '\u00c9valuation \u2014 ' + mod.title;
  } else if (type === 'probleme') {
    data = mod.probleme;
    label = 'Probl\u00e8me \u2014 ' + mod.title;
  }

  if (!data) return;

  state.homeworkState.items.push({
    moduleId: moduleId,
    type: type,
    data: data,
    label: label
  });

  showToast('Ajout\u00e9 au devoir !', 'success');
  _updateHomeworkBadge();
}

function removeHomeworkItem(index) {
  initHomeworkState();
  state.homeworkState.items.splice(index, 1);
  _updateHomeworkBadge();
  _refreshHomeworkPanel();
}

function clearHomework() {
  state.homeworkState = { items: [], title: 'Devoir' };
  _updateHomeworkBadge();
  _refreshHomeworkPanel();
}

function _updateHomeworkBadge() {
  const badge = document.getElementById('homework-badge-count');
  if (badge) {
    const count = state.homeworkState ? state.homeworkState.items.length : 0;
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function _refreshHomeworkPanel() {
  const area = document.getElementById('homework-panel-area');
  if (area) {
    area.innerHTML = _homeworkPanelHTML();
    renderMath();
  }
}

/* ══════════════════════════════════════
   RENDU DU PANNEAU
══════════════════════════════════════ */
function _homeworkPanelHTML() {
  initHomeworkState();
  const hw = state.homeworkState;

  if (hw.items.length === 0) {
    return '<p style="text-align:center;color:var(--text-muted);padding:var(--space-xl);">Aucun \u00e9l\u00e9ment ajout\u00e9. Utilise le bouton "Ajouter au devoir" sur les exercices et \u00e9valuations.</p>';
  }

  return `
    ${hw.items.map((item, i) => `
      <div class="homework-item">
        <div class="homework-item-info">
          <div class="homework-item-title">${item.label}</div>
          <div class="homework-item-meta">${item.type === 'exercice' ? 'Exercice g\u00e9n\u00e9ratif (valeurs al\u00e9atoires)' : item.type === 'evaluation' ? '\u00c9valuation statique' : 'Probl\u00e8me contextualis\u00e9'}</div>
        </div>
        <button class="homework-item-remove" onclick="removeHomeworkItem(${i})" aria-label="Supprimer">\u2715</button>
      </div>
    `).join('')}
    <div style="display:flex;gap:var(--space-sm);margin-top:var(--space-lg);flex-wrap:wrap;">
      <button class="btn btn-primary" onclick="generateHomeworkPDF()">G\u00e9n\u00e9rer le PDF</button>
      <button class="btn btn-secondary" onclick="printHomework()">Imprimer</button>
      <button class="btn btn-outline" onclick="clearHomework()">Tout effacer</button>
    </div>
  `;
}

function renderHomeworkPanel() {
  initHomeworkState();
  const hw = state.homeworkState;

  return `
    <div class="container homework-panel">
      <div class="page-header">
        <button class="btn btn-secondary btn-sm" onclick="navigate('home')" style="margin-bottom:var(--space-sm);">\u2190 Accueil</button>
        <h1 class="page-title">Mon Devoir</h1>
        <p class="page-subtitle">Compose ton devoir en ajoutant des exercices et \u00e9valuations, puis g\u00e9n\u00e8re le PDF avec corrig\u00e9.</p>
      </div>
      <div style="margin-bottom:var(--space-lg);">
        <label style="font-weight:600;font-size:0.9rem;display:block;margin-bottom:6px;">Titre du devoir</label>
        <input type="text" class="homework-title-input" id="homework-title-input"
               value="${hw.title}" placeholder="Devoir de math\u00e9matiques"
               onchange="if(state.homeworkState) state.homeworkState.title = this.value;">
      </div>
      <div id="homework-panel-area">
        ${_homeworkPanelHTML()}
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════
   GÉNÉRATION PDF / IMPRESSION
══════════════════════════════════════ */
function _buildHomeworkHTML(withAnswers) {
  initHomeworkState();
  const hw = state.homeworkState;
  const title = document.getElementById('homework-title-input')?.value || hw.title || 'Devoir';

  let html = '<div style="font-family:Inter,sans-serif;padding:20px;">';
  html += '<h1 style="text-align:center;font-size:1.5rem;margin-bottom:8px;">' + title + '</h1>';
  if (withAnswers) {
    html += '<p style="text-align:center;color:#888;font-size:0.9rem;margin-bottom:20px;">CORRIG\u00c9</p>';
  } else {
    html += '<p style="text-align:center;color:#888;font-size:0.9rem;margin-bottom:20px;">Nom : _________________________ &nbsp;&nbsp; Date : _____________</p>';
  }

  hw.items.forEach((item, idx) => {
    html += '<div style="margin-bottom:24px;page-break-inside:avoid;">';
    html += '<h3 style="font-size:1.1rem;border-bottom:1px solid #ddd;padding-bottom:4px;">Exercice ' + (idx + 1) + ' \u2014 ' + item.label.split(' \u2014 ')[1] + '</h3>';

    if (item.type === 'exercice') {
      html += '<p style="line-height:1.7;">' + item.data.statement + '</p>';
      if (withAnswers) {
        html += '<div style="background:#f0f7f0;padding:12px;border-radius:8px;margin-top:8px;">';
        html += '<strong>R\u00e9ponse :</strong> ' + item.data.answer + (item.data.unit ? ' ' + item.data.unit : '');
        if (item.data.solution && item.data.solution.length) {
          html += '<ol style="margin-top:8px;">';
          item.data.solution.forEach(step => {
            html += '<li style="margin-bottom:4px;">' + step + '</li>';
          });
          html += '</ol>';
        }
        html += '</div>';
      }
    } else if (item.type === 'evaluation') {
      item.data.questions.forEach((q, qi) => {
        html += '<p style="margin-top:12px;"><strong>' + (qi + 1) + '.</strong> ' + q.statement + ' <em>(' + q.points + ' pt' + (q.points > 1 ? 's' : '') + ')</em></p>';
        if (q.type === 'multiple-choice' && q.options) {
          html += '<ul style="list-style:none;padding-left:12px;">';
          q.options.forEach((opt, oi) => {
            const marker = withAnswers && oi === q.answer ? ' \u2705' : '';
            html += '<li>' + String.fromCharCode(65 + oi) + '. ' + opt + marker + '</li>';
          });
          html += '</ul>';
        }
        if (withAnswers && q.type === 'numeric') {
          html += '<p style="color:#2ecc71;"><strong>R\u00e9ponse :</strong> ' + q.answer + (q.unit ? ' ' + q.unit : '') + '</p>';
        }
        if (withAnswers && q.correction) {
          html += '<p style="color:#666;font-size:0.9rem;"><em>' + q.correction + '</em></p>';
        }
      });
    } else if (item.type === 'probleme') {
      html += '<p style="line-height:1.7;">' + item.data.context + '</p>';
      item.data.tasks.forEach((t, ti) => {
        html += '<p style="margin-top:8px;"><strong>' + (ti + 1) + '.</strong> ' + t + '</p>';
        if (withAnswers && item.data.solutions && item.data.solutions[ti]) {
          html += '<p style="color:#2ecc71;margin-left:16px;">' + item.data.solutions[ti] + '</p>';
        }
      });
      if (withAnswers && item.data.finalAnswer) {
        html += '<p style="margin-top:8px;background:#f0f7f0;padding:8px 12px;border-radius:6px;"><strong>R\u00e9ponse finale :</strong> ' + item.data.finalAnswer + '</p>';
      }
    }

    html += '</div>';
  });

  html += '</div>';
  return html;
}

function printHomework() {
  initHomeworkState();
  if (state.homeworkState.items.length === 0) {
    showToast('Aucun \u00e9l\u00e9ment dans le devoir', 'error');
    return;
  }

  const container = document.getElementById('print-container');
  if (!container) return;

  // Page 1 : énoncé + Page 2 : corrigé
  container.innerHTML = _buildHomeworkHTML(false) +
    '<div style="page-break-before:always;"></div>' +
    _buildHomeworkHTML(true);

  if (window.renderMathInElement) {
    try {
      renderMathInElement(container, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    } catch (e) { console.warn(e); }
  }

  document.body.classList.add('printing');
  requestAnimationFrame(() => window.print());
  window.addEventListener('afterprint', function onAP() {
    document.body.classList.remove('printing');
    container.innerHTML = '';
    window.removeEventListener('afterprint', onAP);
  }, { once: true });
}

function generateHomeworkPDF() {
  initHomeworkState();
  if (state.homeworkState.items.length === 0) {
    showToast('Aucun \u00e9l\u00e9ment dans le devoir', 'error');
    return;
  }

  // Charger html2pdf.js dynamiquement si pas encore chargé
  if (window.html2pdf) {
    _doGeneratePDF();
  } else {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    s.onload = _doGeneratePDF;
    s.onerror = () => {
      showToast('Impossible de charger html2pdf. Utilise l\'impression.', 'error');
      printHomework();
    };
    document.head.appendChild(s);
  }
}

function _doGeneratePDF() {
  const container = document.createElement('div');
  container.style.cssText = 'position:absolute;left:-9999px;top:0;width:210mm;';
  document.body.appendChild(container);

  // Énoncé + saut de page + Corrigé
  container.innerHTML = _buildHomeworkHTML(false) +
    '<div style="page-break-before:always;"></div>' +
    _buildHomeworkHTML(true);

  if (window.renderMathInElement) {
    try {
      renderMathInElement(container, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    } catch (e) { console.warn(e); }
  }

  const title = state.homeworkState.title || 'Devoir';

  // Petit délai pour laisser KaTeX rendre
  setTimeout(() => {
    html2pdf().set({
      margin: 10,
      filename: title.replace(/\s+/g, '_') + '.pdf',
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] }
    }).from(container).save().then(() => {
      document.body.removeChild(container);
      showToast('PDF g\u00e9n\u00e9r\u00e9 !', 'success');
    }).catch(() => {
      document.body.removeChild(container);
      showToast('Erreur PDF. Essaie l\'impression.', 'error');
    });
  }, 300);
}
