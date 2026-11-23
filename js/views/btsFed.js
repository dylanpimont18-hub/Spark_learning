/* =========================================================
   Spark Learning – js/views/btsFed.js
   Page « BTS FED » : sommaire des TD du projet L'Escale (/bts-fed) et page
   d'un TD (/bts-fed/tdN). Données : window.BTS_FED, écrit par
   scripts/build-bts-fed.js dans js/data/bts-fed.js et chargé à la demande
   par ensureBtsFedData() (js/loader.js).
   ========================================================= */

function getBtsFedTd(id) {
  const data = window.BTS_FED;
  if (!data || !id) return null;
  return data.tds.find(t => t.id === id) || null;
}

function _btsDuree(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  if (!m) return `${s} s`;
  return s ? `${m} min ${String(s).padStart(2, '0')} s` : `${m} min`;
}

function _btsTaille(bytes) {
  const mo = bytes / 1048576;
  return (mo < 10 ? mo.toFixed(1) : Math.round(mo).toString()).replace('.', ',') + ' Mo';
}

// Texte des fiches : échappé, seul le gras markdown (**…**) est conservé.
function _btsTexte(str) {
  return escapeHtml(str).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

function _btsLink(td, label, cls) {
  const data = td ? { btsTd: td.id } : {};
  const arg = td ? `{btsTd: '${td.id}'}` : '{}';
  return `<a class="${cls}" href="${buildPath('btsfed', data)}" onclick="navigate('btsfed', ${arg}); return false;">${label}</a>`;
}

function _btsUnavailable() {
  return `
    <div class="container bts-page">
      <div class="page-header">
        <h1 class="page-title">BTS FED</h1>
        <p class="page-subtitle">Les TD sont momentanément indisponibles. Rechargez la page dans un instant.</p>
      </div>
    </div>`;
}

/* ── Sommaire : /bts-fed ── */
function renderBtsFedHome() {
  const data = window.BTS_FED;
  if (!data) return _btsUnavailable();
  const cards = data.tds.map(td => {
    const total = td.videos.reduce((n, v) => n + v.duree, 0);
    const nb = td.videos.length;
    return `
      <a class="card-base bts-td-card" href="${buildPath('btsfed', { btsTd: td.id })}" onclick="navigate('btsfed', {btsTd: '${td.id}'}); return false;">
        <span class="bts-td-num">TD ${td.num}</span>
        <span class="bts-td-title">${escapeHtml(td.titre)}</span>
        <span class="bts-td-meta">
          <span class="badge">${escapeHtml(td.logiciel)}</span>
          <span>${nb} vidéo${nb > 1 ? 's' : ''} · ${_btsDuree(total)}</span>
        </span>
      </a>`;
  }).join('');

  return `
    <div class="container bts-page">
      <div class="page-header">
        <p class="bts-kicker">BTS FED · Génie climatique et fluidique</p>
        <h1 class="page-title">TD Revit et ArchiWIZARD</h1>
        <p class="page-subtitle">Projet « ${escapeHtml(data.projet)} »</p>
      </div>
      <p class="hub-intro-text bts-intro">
        Sept TD pour construire la salle des fêtes « L'Escale » dans Revit, y faire passer la ventilation,
        puis calculer son chauffage dans ArchiWIZARD. Chaque TD vous donne l'énoncé, le corrigé,
        la maquette de départ quand il y en a une, et la correction en vidéo, étape par étape.
        Les vidéos sont courtes : mettez-les en pause et refaites le geste, vous apprendrez plus vite qu'en les regardant d'une traite.
      </p>
      <div class="bts-td-grid">${cards}</div>
    </div>`;
}

/* ── Page d'un TD : /bts-fed/tdN ── */
function _btsDownload(file, label, extra, cls) {
  if (!file || !file.url) return '';
  return `
    <a class="btn ${cls} bts-dl" href="${file.url}" download="${escapeHtml(file.nom)}">
      ${label}<span class="bts-dl-size">${extra} · ${_btsTaille(file.taille)}</span>
    </a>`;
}

function _btsVideo(v, i) {
  const list = (items, cls, titre) => items.length ? `
    <div class="bts-notes ${cls}">
      <h4 class="bts-notes-title">${titre}</h4>
      <ul>${items.map(x => `<li>${_btsTexte(x)}</li>`).join('')}</ul>
    </div>` : '';
  return `
    <article class="card-base bts-video" id="${escapeHtml(v.id)}">
      <header class="bts-video-head">
        <h3 class="bts-video-title"><span class="bts-video-num">${i + 1}</span>${escapeHtml(v.titre)}</h3>
        <span class="bts-video-duree">${_btsDuree(v.duree)}</span>
      </header>
      <video class="bts-video-player" controls preload="none" playsinline src="${v.url}"></video>
      ${v.horsChamp ? `<p class="bts-hors-champ">La vidéo montre le geste une fois ; les éléments répétitifs ont été faits hors champ, avec la même méthode. À vous de les refaire à partir des valeurs de l'énoncé.</p>` : ''}
      ${list(v.retenir, 'bts-notes-retenir', '💡 Points à retenir')}
      ${list(v.pieges, 'bts-notes-pieges', '⚠️ Pièges')}
    </article>`;
}

function renderBtsFedTd(id) {
  const data = window.BTS_FED;
  if (!data) return _btsUnavailable();
  const td = getBtsFedTd(id);
  if (!td) {
    return `
      <div class="container bts-page">
        <div class="page-header">
          <h1 class="page-title">TD introuvable</h1>
          <p class="page-subtitle">Ce TD n'existe pas (encore). Tous les TD publiés sont dans le sommaire.</p>
        </div>
        <p class="bts-center">${_btsLink(null, 'Voir le sommaire des TD', 'btn btn-primary')}</p>
      </div>`;
  }
  const idx = data.tds.indexOf(td);
  const prev = data.tds[idx - 1];
  const next = data.tds[idx + 1];
  const sansVoix = td.videos.some(v => !v.voix);

  return `
    <div class="container bts-page">
      <nav class="module-breadcrumb bts-breadcrumb" aria-label="Fil d'Ariane">
        ${_btsLink(null, 'BTS FED', 'breadcrumb-link')}
        <span class="breadcrumb-sep">›</span>
        <span>TD ${td.num}</span>
      </nav>

      <header class="bts-td-header">
        <p class="bts-kicker">TD ${td.num} · ${escapeHtml(td.logiciel)}${td.duree ? ` · séance de ${escapeHtml(td.duree)}` : ''}</p>
        <h1 class="bts-td-h1">${escapeHtml(td.titre)}</h1>
        <p class="bts-objectif"><strong>Objectif.</strong> ${escapeHtml(td.objectif.intro)} :</p>
        <ul class="bts-objectif-list">${td.objectif.items.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul>
        ${td.depart ? `<p class="bts-depart"><strong>Point de départ.</strong> ${escapeHtml(td.depart)}</p>` : ''}
      </header>

      <div class="bts-downloads">
        ${_btsDownload(td.enonce, '📄 Énoncé', 'PDF', 'btn-primary')}
        ${_btsDownload(td.corrige, '✅ Corrigé', 'PDF', 'btn-secondary')}
        ${_btsDownload(td.maquette, '🧱 Maquette de départ', '.rvt', 'btn-secondary')}
      </div>

      <h2 class="bts-section-title">Les vidéos, étape par étape</h2>
      ${sansVoix ? `<p class="bts-banner" role="note">🔇 Vidéos sans voix pour l'instant, légendées ; la voix arrivera.</p>` : ''}
      <div class="bts-videos">${td.videos.map(_btsVideo).join('')}</div>

      <nav class="bts-pager" aria-label="Autres TD">
        ${prev ? _btsLink(prev, `← TD ${prev.num}<span class="bts-pager-sub">${escapeHtml(prev.titre)}</span>`, 'card-base bts-pager-link bts-pager-prev') : '<span></span>'}
        ${_btsLink(null, 'Sommaire', 'card-base bts-pager-link bts-pager-home')}
        ${next ? _btsLink(next, `TD ${next.num} →<span class="bts-pager-sub">${escapeHtml(next.titre)}</span>`, 'card-base bts-pager-link bts-pager-next') : '<span></span>'}
      </nav>
    </div>`;
}
