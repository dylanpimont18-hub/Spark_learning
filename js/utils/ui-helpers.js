/* =========================================================
   Spark Learning – utils/ui-helpers.js
   Helpers de rendu et utilitaires UI
   ========================================================= */

// Échappement HTML partagé (auparavant dupliqué à l'identique dans teacherDashboard.js,
// gradingPanel.js, adminPanel.js, tutoringHome.js, tutoringStudent.js, positioningTest.js).
function escapeHtml(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function convertMarkdownTables(html) {
  const lines = html.split('\n');
  const out = [];
  let i = 0;

  const parseRow = (line) => {
    const firstPipe = line.indexOf('|');
    const lastPipe = line.lastIndexOf('|');
    if (firstPipe === -1 || lastPipe === firstPipe) return null;
    const prefix = line.slice(0, firstPipe);
    const trailing = line.slice(lastPipe + 1);
    const cells = line.slice(firstPipe, lastPipe + 1).split('|').slice(1, -1).map(c => c.trim());
    return { cells, prefix, trailing };
  };

  const isSeparator = (cells) => cells.length > 0 && cells.every(c => /^:?-+:?$/.test(c));

  while (i < lines.length) {
    const header = parseRow(lines[i]);
    const sep = header && i + 1 < lines.length ? parseRow(lines[i + 1]) : null;

    if (header && sep && !sep.prefix.trim() && sep.cells.length === header.cells.length && isSeparator(sep.cells)) {
      const bodyRows = [];
      let j = i + 2;
      let trailing = '';
      while (j < lines.length) {
        const row = parseRow(lines[j]);
        if (!row) break;
        bodyRows.push(row.cells);
        trailing = row.trailing;
        j++;
      }
      const thead = `<thead><tr>${header.cells.map(c => `<th>${c}</th>`).join('')}</tr></thead>`;
      const tbody = `<tbody>${bodyRows.map(cells => `<tr>${cells.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>`;
      out.push(`${header.prefix}<div class="content-table-wrap"><table class="content-table">${thead}${tbody}</table></div>${trailing}`);
      i = j;
    } else {
      out.push(lines[i]);
      i++;
    }
  }

  return out.join('\n');
}

function renderLoading() {
  return `
    <div class="container" style="padding-top:var(--space-2xl);">
      <div class="loading-skeleton">
        <div class="skeleton-line skeleton-title"></div>
        <div class="skeleton-line skeleton-subtitle"></div>
        <div class="skeleton-grid">
          ${Array(6).fill('<div class="skeleton-card"></div>').join('')}
        </div>
      </div>
    </div>
  `;
}

function renderErreurConseil(piege) {
  const clean = piege.replace(/^Piège\s*(classique)?\s*:\s*/i, '').trim();

  let inMath = false;
  let splitIdx = -1;
  for (let i = 0; i < clean.length - 2; i++) {
    if (clean[i] === '$') inMath = !inMath;
    if (!inMath && (clean[i] === '.' || clean[i] === '!') && clean[i + 1] === ' ') {
      const after = clean.substring(i + 2).trim();
      if (after.length > 15) { splitIdx = i; break; }
    }
  }

  if (splitIdx === -1) {
    return `<div class="erreur-conseil-card single">
      <div class="erreur-panel">
        <div class="panel-label"><span class="panel-icon">❌</span> L'erreur fréquente</div>
        <p class="panel-text">${clean}</p>
      </div>
    </div>`;
  }

  const erreur  = clean.substring(0, splitIdx + 1);
  const conseil = clean.substring(splitIdx + 2).trim();
  return `<div class="erreur-conseil-card">
    <div class="erreur-panel">
      <div class="panel-label"><span class="panel-icon">❌</span> L'erreur fréquente</div>
      <p class="panel-text">${erreur}</p>
    </div>
    <div class="conseil-panel">
      <div class="panel-label"><span class="panel-icon">✅</span> La suggestion</div>
      <p class="panel-text">${conseil}</p>
    </div>
  </div>`;
}

function _printLevelLabel(mod) {
  const grade = mod.id.split('-')[0].toUpperCase();
  const subjectLabel = getSubjectDef(mod.subject || 'maths').label;
  return subjectLabel + ' · ' + (LEVEL_NAMES[mod.level] || '') + ' — ' + grade;
}

function renderFicheCours(mod) {
  const c = mod.cours;
  const subjectDef = getSubjectDef(mod.subject || 'maths');
  const formulasRows = c.formulas.map((f, i, arr) => {
    if (i % 2 === 0) {
      const next = arr[i + 1] || '';
      return `<tr><td>${f}</td><td>${next}</td></tr>`;
    }
    return '';
  }).join('');

  return convertMarkdownTables(`
    <div class="print-fiche">
      <div class="print-fiche-header">
        <img src="images/Logo_noir.jpeg" alt="Spark Learning" class="print-logo" />
        <div class="print-fiche-header-text">
          <div class="print-fiche-level">${_printLevelLabel(mod)}</div>
          <h1 class="print-fiche-title">${mod.icon} ${mod.title}</h1>
          <p class="print-fiche-subtitle">${mod.subtitle}</p>
        </div>
      </div>

      <section class="print-section print-intro">
        <h2>Introduction</h2>
        <p>${c.intro}</p>
      </section>

      ${c.definitions && c.definitions.length ? `
      <section class="print-section print-definitions">
        <h2>Vocabulaire clé</h2>
        <div class="print-definitions-grid">
          ${c.definitions.map(d => `
            <div class="print-definition-item"><strong>${d.term} :</strong> ${d.def}</div>
          `).join('')}
        </div>
      </section>
      ` : ''}

      <section class="print-section print-method">
        <h2>${c.method.title}</h2>
        <ol>
          ${c.method.steps.map(s => `<li>${s}</li>`).join('')}
        </ol>
      </section>

      ${c.example ? `
      <section class="print-section print-example">
        <h2>Exemple résolu</h2>
        <div class="print-worked-example">
          <p><strong>Énoncé :</strong> ${c.example.statement}</p>
          <p><strong>Démarche :</strong></p>
          <ol>${c.example.steps.map(s => `<li>${s}</li>`).join('')}</ol>
          <p><strong>Réponse :</strong> ${c.example.answer}</p>
        </div>
      </section>
      ` : ''}

      <section class="print-section print-formulas">
        <h2>${subjectDef.formulasLabel}</h2>
        <table class="print-formulas-table">
          ${formulasRows}
        </table>
      </section>

      ${c.diagram ? `
      <section class="print-section print-diagram">
        <h2>Illustration</h2>
        ${renderCoursDiagram(c.diagram, mod.subject || 'maths')}
      </section>
      ` : ''}

      <section class="print-section print-piege">
        <h2>Piège fréquent &amp; conseil</h2>
        ${renderErreurConseil(c.piege)}
      </section>

      ${c.recap && c.recap.length ? `
      <section class="print-section print-recap">
        <h2>À retenir</h2>
        <ul>${c.recap.map(r => `<li>${r}</li>`).join('')}</ul>
      </section>
      ` : ''}

      ${mod.physics ? `
      <section class="print-section print-physics">
        <h2>${subjectDef.applicationLabel}</h2>
        <p>${mod.physics}</p>
        <p class="print-keywords"><em>Mots-clés :</em> ${mod.keywords.join(' · ')}</p>
      </section>
      ` : ''}

      <div class="print-fiche-footer">
        Spark Learning — ${mod.title}
      </div>
    </div>
  `);
}

function renderFichesBatch(modules) {
  return modules.map(mod => renderFicheCours(mod)).join('');
}

function renderEvaluationPrintSheet(items, mode) {
  const totalPoints = items.reduce((sum, it) => sum + (it.question.points || 0), 0);

  const rows = items.map((it, i) => {
    const q = it.question;
    const num = i + 1;
    const ptsLabel = q.points + ' pt' + (q.points > 1 ? 's' : '');

    let answerBlock;
    if (mode === 'correction') {
      const answerLabel = q.type === 'multiple-choice'
        ? String.fromCharCode(65 + q.answer) + '. ' + q.options[q.answer]
        : q.answer + (q.unit ? ' ' + q.unit : '');
      answerBlock = `
        <div class="print-eval-correction">
          <strong>Réponse :</strong> ${answerLabel}
          ${q.correction ? `<div class="print-eval-correction-detail">${q.correction}</div>` : ''}
        </div>`;
    } else if (q.type === 'multiple-choice') {
      answerBlock = `<ul class="print-eval-options">
        ${q.options.map((opt, oi) => `<li>${String.fromCharCode(65 + oi)}. ${opt}</li>`).join('')}
      </ul>`;
    } else {
      answerBlock = `<div class="print-eval-answer-line">Réponse : _________________________${q.unit ? ' ' + q.unit : ''}</div>`;
    }

    return `
      <div class="print-eval-question">
        <div class="print-eval-question-head">
          <span class="print-eval-question-num">${num}.</span>
          <span class="print-eval-question-theme">${it.moduleTitle}</span>
          <span class="print-eval-question-pts">${ptsLabel}</span>
        </div>
        <div class="print-eval-question-statement">${q.statement}</div>
        ${answerBlock}
      </div>`;
  }).join('');

  return `
    <div class="print-eval-sheet">
      <div class="print-eval-header">
        <img src="images/Logo_noir.jpeg" alt="Spark Learning" class="print-logo" />
        <div class="print-eval-header-text">
          <h1 class="print-eval-title">${mode === 'correction' ? 'Corrigé — ' : ''}Évaluation — Remise à niveau maths</h1>
          <p class="print-eval-subtitle">${items.length} question${items.length > 1 ? 's' : ''} · ${totalPoints} point${totalPoints > 1 ? 's' : ''}</p>
        </div>
      </div>
      ${mode === 'subject' ? `
      <div class="print-eval-student-fields">
        <span>Nom : ________________________</span>
        <span>Prénom : ________________________</span>
        <span>Date : ______________</span>
      </div>
      ` : ''}
      <div class="print-eval-questions">${rows}</div>
      <div class="print-eval-footer">Spark Learning — Évaluation</div>
    </div>`;
}

/* ── Panneau "copier le lien" (remplace window.prompt(), fragile sur mobile/webview) ── */
function showCopyLinkModal(url, message) {
  var existing = document.getElementById('copy-link-modal');
  if (existing) existing.remove();

  var overlay = document.createElement('div');
  overlay.id = 'copy-link-modal';
  overlay.className = 'copy-link-modal-overlay';
  overlay.innerHTML = `
    <div class="copy-link-modal-card">
      <button type="button" class="copy-link-modal-close" aria-label="Fermer" onclick="document.getElementById('copy-link-modal').remove()">&times;</button>
      <p class="copy-link-modal-message">${escapeHtml(message || 'Lien à partager :')}</p>
      <div class="copy-link-modal-row">
        <input type="text" class="copy-link-modal-input" id="copy-link-modal-input" value="${escapeHtml(url)}" readonly />
        <button type="button" class="copy-link-modal-btn" id="copy-link-modal-btn">Copier</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  var input = document.getElementById('copy-link-modal-input');
  var btn = document.getElementById('copy-link-modal-btn');
  input.addEventListener('click', function () { input.select(); });

  btn.addEventListener('click', async function () {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        input.select();
        document.execCommand('copy');
      }
      btn.textContent = 'Copié !';
      setTimeout(function () { btn.textContent = 'Copier'; }, 2000);
    } catch (e) {
      input.select();
      showToast('Copie automatique indisponible — le lien est sélectionné, utilise Ctrl+C.', 'error');
    }
  });

  input.focus();
  input.select();
}
