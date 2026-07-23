/* =========================================================
   Spark Learning – utils/ui-helpers.js
   Helpers de rendu et utilitaires UI
   ========================================================= */

function convertMarkdownTables(html) {
  const lines = html.split('\n');
  const out = [];
  let i = 0;

  const parseRow = (line) => {
    const trimmed = line.trim();
    if (!trimmed.startsWith('|')) return null;
    const lastPipe = trimmed.lastIndexOf('|');
    if (lastPipe <= 0) return null;
    const cells = trimmed.slice(0, lastPipe + 1).split('|').slice(1, -1).map(c => c.trim());
    const trailing = trimmed.slice(lastPipe + 1);
    return { cells, trailing };
  };

  const isSeparator = (cells) => cells.length > 0 && cells.every(c => /^:?-+:?$/.test(c));

  while (i < lines.length) {
    const header = parseRow(lines[i]);
    const sep = header && i + 1 < lines.length ? parseRow(lines[i + 1]) : null;

    if (header && sep && sep.cells.length === header.cells.length && isSeparator(sep.cells)) {
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
      out.push(`<div class="content-table-wrap"><table class="content-table">${thead}${tbody}</table></div>${trailing}`);
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
