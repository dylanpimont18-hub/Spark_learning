/* =========================================================
   Spark Learning – utils/ui-helpers.js
   Helpers de rendu et utilitaires UI
   ========================================================= */

// Échappement HTML partagé (auparavant dupliqué à l'identique dans teacherDashboard.js,
// adminPanel.js).
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

/**
 * Rend la figure attachée à une question de quiz, un exercice généré ou une
 * question d'évaluation. Les modules de `js/data/` déclarent `figure:` sous la
 * forme d'une chaîne (SVG brut) ou d'un objet `{ svg, caption }`.
 *
 * Le conteneur interne réutilise volontairement la classe `.cours-diagram-stage`
 * afin d'hériter du thème SVG partagé (`.curve-main`, `.plot-point`,
 * `.annotation-label`… définis dans css/styles.css), tandis que `.question-figure`
 * porte les variables `--diagram-*` normalement fournies par `.cours-diagram`.
 */
function renderQuestionFigure(figure) {
  if (!figure) return '';
  const svg = typeof figure === 'string' ? figure : (figure.svg || figure.html || '');
  if (!svg) return '';
  const caption = (typeof figure === 'object' && figure.caption)
    ? `<figcaption class="question-figure-caption">${figure.caption}</figcaption>`
    : '';
  return `
    <figure class="question-figure">
      <div class="cours-diagram-stage">${svg}</div>
      ${caption}
    </figure>
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

/* ── Fondu de bord des conteneurs à défilement horizontal (.scroll-fade) ──
   La barre de défilement est masquée (barre d'onglets, rangée des niveaux) : on pose
   data-fade = none | left | right | both selon le côté où il reste du contenu caché,
   et css/styles.css n'estompe que ce côté-là. Un MutationObserver sur #app relance
   l'init après chaque rendu : aucune vue n'a à s'en occuper. */
function updateScrollFade(el) {
  if (!el) return;
  var max = el.scrollWidth - el.clientWidth;
  var state = 'none';
  if (max > 2) {
    var left = el.scrollLeft > 2, right = el.scrollLeft < max - 2;
    state = left && right ? 'both' : right ? 'right' : left ? 'left' : 'none';
  }
  if (el.dataset.fade !== state) el.dataset.fade = state;
}

function initScrollFades(root) {
  root = root || document;
  var list = Array.prototype.slice.call(root.querySelectorAll('.scroll-fade'));
  if (root.matches && root.matches('.scroll-fade')) list.unshift(root);
  list.forEach(function (el) {
    if (!el._fadeBound) {
      el._fadeBound = true;
      el.addEventListener('scroll', function () { updateScrollFade(el); }, { passive: true });
    }
    updateScrollFade(el);
  });
}

(function () {
  var scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () { scheduled = false; initScrollFades(document); });
  }
  function start() {
    var app = document.getElementById('app');
    if (app && 'MutationObserver' in window) {
      new MutationObserver(schedule).observe(app, { childList: true, subtree: true });
    }
    window.addEventListener('resize', schedule);
    schedule();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
