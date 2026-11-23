/* =========================================================
   Spark Learning – js/views/btsFed.js
   Page « BTS FED » : sommaire des TD du projet L'Escale (/bts-fed) et page
   d'un TD (/bts-fed/tdN). Données : window.BTS_FED, écrit par
   scripts/build-bts-fed.js dans js/data/bts-fed.js et chargé à la demande
   par ensureBtsFedData() (js/loader.js). Réglages : scripts/bts-fed.config.json.
   ========================================================= */

/* ── Ouverture au public ──
   Pilotée depuis le panneau admin (case « Page BTS FED ouverte au public »,
   champ btsFedOpen de Firestore config/settings, lu par _checkMaintenance() dans
   js/app.js). Fermée par défaut : champ absent ou lecture impossible = maintenance.
   Un admin connecté voit toujours la page, avec un bandeau. */
function isBtsFedAdmin() {
  return typeof AuthGuard !== 'undefined' && AuthGuard.isAuthenticated() && AuthGuard.isAdmin();
}
function isBtsFedOpen() {
  const s = window.__sparkPlatformSettings;
  return !!(s && s.btsFedOpen);
}
function isBtsFedClosedForViewer() {
  return !isBtsFedOpen() && !isBtsFedAdmin();
}

function renderBtsFedMaintenance() {
  return `
    <div class="container bts-page">
      <div class="page-header">
        <p class="bts-kicker">BTS FED · Génie climatique et fluidique</p>
        <h1 class="page-title">Page en maintenance</h1>
        <p class="page-subtitle">Les TD Revit et ArchiWIZARD du projet « L'Escale » reviennent très bientôt.</p>
      </div>
      <p class="hub-intro-text bts-intro">
        Nous mettons à jour les vidéos de correction, les énoncés et les maquettes de départ.
        La page sera de nouveau accessible dans quelques jours, à la même adresse.
        En attendant, votre enseignant reste votre point de contact pour les documents des TD.
      </p>
    </div>`;
}

/* ── Données ── */
function getBtsFedTd(id) {
  const data = window.BTS_FED;
  if (!data || !id) return null;
  return data.tds.find(t => t.id === id) || null;
}

// Corrigé, vidéos, valeurs de contrôle et mémo sont retenus jusqu'à la date de
// disponibilité du TD (bts-fed.config.json › disponibleLe). L'admin voit tout.
function _btsDisponible(td) {
  if (!td.disponibleLe || isBtsFedAdmin()) return true;
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  return today >= td.disponibleLe;
}

function _btsDateLongue(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  const opts = { weekday: 'long', day: 'numeric', month: 'long' };
  if (y !== new Date().getFullYear()) opts.year = 'numeric';
  return new Date(y, m - 1, d).toLocaleDateString('fr-FR', opts);
}

/* ── Vidéos vues (navigateur uniquement, sans compte) ── */
function _btsSeen() {
  try { return Storage.getBtsFedSeen(); } catch (e) { return {}; }
}
function btsToggleSeen(videoId, seen) {
  try { Storage.setBtsFedSeen(videoId, seen); } catch (e) { /* stockage indisponible : on ne mémorise pas */ }
  document.querySelectorAll(`[data-seen-for="${videoId}"]`).forEach(el => { el.checked = seen; });
  document.getElementById(`v-${videoId}`)?.classList.toggle('is-seen', seen);
  _btsRefreshProgress();
}
function _btsRefreshProgress() {
  const el = document.getElementById('bts-progress');
  if (!el) return;
  const td = getBtsFedTd(el.dataset.td);
  if (td) el.textContent = _btsProgressLabel(td);
}
function _btsProgressLabel(td) {
  const seen = _btsSeen();
  const n = td.videos.filter(v => seen[v.id]).length;
  return `Vues : ${n} / ${td.videos.length}`;
}

/* ── Formats ── */
function _btsDuree(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  if (!m) return `${s} s`;
  return s ? `${m} min ${String(s).padStart(2, '0')} s` : `${m} min`;
}
function _btsHorloge(sec) {
  const s = Math.floor(sec);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
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

function _btsAdminBanner() {
  if (isBtsFedOpen() || !isBtsFedAdmin()) return '';
  return `<p class="bts-banner bts-banner-admin" role="note">👁️ Page fermée au public : vous la voyez parce que vous êtes connecté en admin. Ouvrez-la depuis le panneau admin, rubrique Paramètres.</p>`;
}

/* ── Lecture : chapitres, suivi ── */
function btsSeek(videoId, t) {
  const v = document.getElementById(`player-${videoId}`);
  if (!v) return;
  const go = () => { v.currentTime = t; };
  if (v.readyState >= 1) go();
  else { v.addEventListener('loadedmetadata', go, { once: true }); v.preload = 'metadata'; }
  const p = v.play();
  if (p && p.catch) p.catch(() => {});
  v.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

function _btsTrack(name, params) {
  if (typeof trackEvent === 'function') trackEvent(name, params);
}

// Écouteurs posés une fois sur document (phase de capture : play/timeupdate/ended ne
// remontent pas) : la SPA recrée le DOM à chaque navigation.
(function () {
  const isPlayer = el => el && el.classList && el.classList.contains('bts-video-player');
  const params = v => ({ video_id: v.dataset.videoId, td: v.dataset.td, video_title: v.dataset.title });
  document.addEventListener('play', e => {
    const v = e.target;
    if (!isPlayer(v) || v.dataset.started) return;
    v.dataset.started = '1';
    _btsTrack('video_start', params(v));
  }, true);
  const onProgress = e => {
    const v = e.target;
    if (!isPlayer(v) || v.dataset.done || !v.duration) return;
    if (e.type === 'ended' || v.currentTime / v.duration >= 0.9) {
      v.dataset.done = '1';
      if (!_btsSeen()[v.dataset.videoId]) btsToggleSeen(v.dataset.videoId, true);
      _btsTrack('video_complete', params(v));
    }
  };
  document.addEventListener('timeupdate', onProgress, true);
  document.addEventListener('ended', onProgress, true);
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[data-bts-file]');
    if (a) _btsTrack('bts_download', { file_name: a.dataset.btsFile, td: a.dataset.td });
  });
})();

/* ── Blocs ── */
function _btsVideo(v, i, tdId) {
  const seen = !!_btsSeen()[v.id];
  const list = (items, cls, titre) => items.length ? `
    <div class="bts-notes ${cls}">
      <h4 class="bts-notes-title">${titre}</h4>
      <ul>${items.map(x => `<li>${_btsTexte(x)}</li>`).join('')}</ul>
    </div>` : '';
  const chapitres = v.chapitres && v.chapitres.length ? `
    <details class="bts-chapters">
      <summary>Aller à une étape (${v.chapitres.length})</summary>
      <ol>${v.chapitres.map(c => `
        <li><button type="button" class="bts-chapter" onclick="btsSeek('${v.id}', ${c.t})">
          <span class="bts-chapter-time">${_btsHorloge(c.t)}</span>${escapeHtml(c.titre)}</button></li>`).join('')}
      </ol>
    </details>` : '';
  return `
    <article class="card-base bts-video${seen ? ' is-seen' : ''}" id="v-${v.id}">
      <header class="bts-video-head">
        <h3 class="bts-video-title">${i === null ? '' : `<span class="bts-video-num">${i + 1}</span>`}${escapeHtml(v.titre)}</h3>
        <span class="bts-video-side">
          <span class="bts-video-duree">${_btsDuree(v.duree)}</span>
          <label class="bts-seen"><input type="checkbox" data-seen-for="${v.id}"${seen ? ' checked' : ''} onchange="btsToggleSeen('${v.id}', this.checked)" /> Vue</label>
        </span>
      </header>
      <video class="bts-video-player" id="player-${v.id}" controls preload="none" playsinline
        poster="${v.poster}" src="${v.url}"
        data-video-id="${v.id}" data-td="${tdId}" data-title="${escapeHtml(v.titre)}"></video>
      ${chapitres}
      ${v.horsChamp ? `<p class="bts-hors-champ">La vidéo montre le geste une fois ; les éléments répétitifs ont été faits hors champ, avec la même méthode. À vous de les refaire à partir des valeurs de l'énoncé.</p>` : ''}
      ${list(v.retenir, 'bts-notes-retenir', '💡 Points à retenir')}
      ${list(v.pieges, 'bts-notes-pieges', '⚠️ Pièges')}
    </article>`;
}

function _btsDownload(file, label, extra, cls, tdId) {
  if (!file || !file.url) return '';
  return `
    <a class="btn ${cls} bts-dl" href="${file.url}" download="${escapeHtml(file.nom)}" data-bts-file="${escapeHtml(file.nom)}" data-td="${tdId}">
      ${label}<span class="bts-dl-size">${extra} · ${_btsTaille(file.taille)}</span>
    </a>`;
}

/* ── Sommaire : /bts-fed ── */
function renderBtsFedHome() {
  if (isBtsFedClosedForViewer()) return renderBtsFedMaintenance();
  const data = window.BTS_FED;
  if (!data) return _btsUnavailable();
  const seen = _btsSeen();
  const cards = data.tds.map(td => {
    const total = td.videos.reduce((n, v) => n + v.duree, 0);
    const nb = td.videos.length;
    const vues = td.videos.filter(v => seen[v.id]).length;
    const dispo = _btsDisponible(td);
    const meta = !nb ? 'Énoncé guidé, sans vidéo'
      : !dispo ? `Corrigé le ${_btsDateLongue(td.disponibleLe)}`
      : `${nb} vidéo${nb > 1 ? 's' : ''} · ${_btsDuree(total)}`;
    return `
      <a class="card-base bts-td-card${nb && vues === nb ? ' is-complete' : ''}" href="${buildPath('btsfed', { btsTd: td.id })}" onclick="navigate('btsfed', {btsTd: '${td.id}'}); return false;">
        <span class="bts-td-num">TD ${td.num}${nb && vues === nb ? ' · ✓ terminé' : ''}</span>
        <span class="bts-td-title">${escapeHtml(td.titre)}</span>
        <span class="bts-td-meta">
          <span class="badge">${escapeHtml(td.logiciel)}</span>
          <span>${meta}</span>
          ${nb && vues && vues < nb && dispo ? `<span class="bts-td-progress">${vues} / ${nb} vues</span>` : ''}
        </span>
      </a>`;
  }).join('');

  const pres = data.presentation ? `
    <section class="bts-presentation" id="bts-presentation">
      <h2 class="bts-section-title">Commencer par la présentation du projet</h2>
      ${_btsVideo(data.presentation, null, 'presentation')}
    </section>` : '';

  return `
    <div class="container bts-page">
      ${_btsAdminBanner()}
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
      ${pres}
      <h2 class="bts-section-title">Les TD</h2>
      <div class="bts-td-grid">${cards}</div>
    </div>`;
}

/* ── Page d'un TD : /bts-fed/tdN ── */
function renderBtsFedTd(id) {
  if (isBtsFedClosedForViewer()) return renderBtsFedMaintenance();
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
  const dispo = _btsDisponible(td);
  const sansVoix = td.videos.some(v => !v.voix);
  const adminDate = td.disponibleLe && isBtsFedAdmin()
    ? `<p class="bts-banner bts-banner-admin" role="note">👁️ Corrigé et vidéos réservés jusqu'au ${_btsDateLongue(td.disponibleLe)} : vous les voyez parce que vous êtes connecté en admin.</p>` : '';

  let videosBlock;
  if (!td.videos.length) {
    videosBlock = `
      <p class="bts-empty">Pas de vidéo pour ce TD : l'énoncé vous guide clic par clic, avec des captures numérotées.
      Avant de commencer, regardez le film de présentation du projet, en tête du ${_btsLink(null, 'sommaire', 'bts-inline-link')}.</p>`;
  } else if (!dispo) {
    videosBlock = `<p class="bts-banner" role="note">🔒 Le corrigé, les vidéos et les valeurs de contrôle seront disponibles le ${_btsDateLongue(td.disponibleLe)}. D'ici là, lancez-vous avec l'énoncé !</p>`;
  } else {
    videosBlock = `
      ${sansVoix ? `<p class="bts-banner" role="note">🔇 Vidéos sans voix pour l'instant, légendées ; la voix arrivera.</p>` : ''}
      <div class="bts-videos">${td.videos.map((v, i) => _btsVideo(v, i, td.id)).join('')}</div>`;
  }

  const controles = dispo && td.controles.length ? `
    <section class="card-base bts-controls">
      <h2 class="bts-controls-title">🎯 Valeurs pour vérifier votre travail</h2>
      <ul>${td.controles.map(c => `<li>${_btsTexte(c.texte)} <a class="bts-inline-link" href="#v-${c.video}">voir la vidéo</a></li>`).join('')}</ul>
    </section>` : '';

  const modules = td.modules.length ? `
    <section class="bts-modules">
      <h2 class="bts-section-title">Revoir les notions</h2>
      <div class="bts-modules-list">${td.modules.map(m => `
        <a class="card-base bts-module-link" href="${buildPath('module', { moduleId: m.id, tab: 'cours' })}" onclick="navigate('module', {moduleId: '${m.id}', tab: 'cours'}); return false;">📘 ${escapeHtml(m.titre)}</a>`).join('')}
      </div>
    </section>` : '';

  const complements = td.complements.length ? `
    <div class="bts-complements">
      <p class="bts-complements-title">Fichiers à charger dans Revit pendant le TD :</p>
      <div class="bts-complements-list">${td.complements.map(f => `
        <a class="bts-complement" href="${f.url}" download="${escapeHtml(f.nom)}" data-bts-file="${escapeHtml(f.nom)}" data-td="${td.id}">⬇️ ${escapeHtml(f.nom)} <span class="bts-dl-size">${_btsTaille(f.taille)}</span></a>`).join('')}
      </div>
    </div>` : '';

  return `
    <div class="container bts-page">
      ${_btsAdminBanner()}
      ${adminDate}
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
        ${_btsDownload(td.enonce, '📄 Énoncé', 'PDF', 'btn-primary', td.id)}
        ${dispo ? _btsDownload(td.corrige, '✅ Corrigé', 'PDF', 'btn-secondary', td.id) : ''}
        ${_btsDownload(td.maquette, '🧱 Maquette de départ', '.rvt', 'btn-secondary', td.id)}
        ${dispo && td.videos.length ? `<button type="button" class="btn btn-outline bts-dl" onclick="btsPrintMemo('${td.id}')">🖨️ Mémo du TD<span class="bts-dl-size">à imprimer</span></button>` : ''}
      </div>
      ${complements}
      ${controles}

      <div class="bts-videos-head">
        <h2 class="bts-section-title">Les vidéos, étape par étape</h2>
        ${td.videos.length && dispo ? `<span class="bts-td-progress" id="bts-progress" data-td="${td.id}">${_btsProgressLabel(td)}</span>` : ''}
      </div>
      ${videosBlock}
      ${modules}

      <nav class="bts-pager" aria-label="Autres TD">
        ${prev ? _btsLink(prev, `← TD ${prev.num}<span class="bts-pager-sub">${escapeHtml(prev.titre)}</span>`, 'card-base bts-pager-link bts-pager-prev') : '<span></span>'}
        ${_btsLink(null, 'Sommaire', 'card-base bts-pager-link bts-pager-home')}
        ${next ? _btsLink(next, `TD ${next.num} →<span class="bts-pager-sub">${escapeHtml(next.titre)}</span>`, 'card-base bts-pager-link bts-pager-next') : '<span></span>'}
      </nav>
    </div>`;
}

/* ── Mémo imprimable d'un TD ── */
function btsPrintMemo(tdId) {
  const td = getBtsFedTd(tdId);
  if (!td || !_btsDisponible(td)) return;
  let box = document.getElementById('bts-print-memo');
  if (!box) {
    box = document.createElement('div');
    box.id = 'bts-print-memo';
    document.body.appendChild(box);
  }
  const ul = items => items.length ? `<ul>${items.map(x => `<li>${_btsTexte(x)}</li>`).join('')}</ul>` : '';
  box.innerHTML = `
    <h1>TD ${td.num} · ${escapeHtml(td.titre)}</h1>
    <p class="memo-sub">BTS FED · Projet L'Escale · ${escapeHtml(td.logiciel)} · sparklearning.fr/bts-fed/${td.id}</p>
    ${td.controles.length ? `<h2>Valeurs de contrôle</h2>${ul(td.controles.map(c => c.texte))}` : ''}
    <div class="memo-cols">
      ${td.videos.map((v, i) => `
        <section>
          <h3>${i + 1}. ${escapeHtml(v.titre)}</h3>
          ${ul(v.retenir)}
          ${v.pieges.length ? `<p class="memo-pieges">Pièges</p>${ul(v.pieges)}` : ''}
        </section>`).join('')}
    </div>`;
  const done = () => document.body.classList.remove('bts-printing');
  window.addEventListener('afterprint', done, { once: true });
  document.body.classList.add('bts-printing');
  _btsTrack('bts_print_memo', { td: td.id });
  window.print();
}
