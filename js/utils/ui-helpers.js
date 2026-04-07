/* =========================================================
   Spark Learning – utils/ui-helpers.js
   Helpers de rendu et utilitaires UI
   ========================================================= */

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

  return `
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
        <div>${c.diagram}</div>
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
  `;
}

function renderFichesBatch(modules) {
  return modules.map(mod => renderFicheCours(mod)).join('');
}
