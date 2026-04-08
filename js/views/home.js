/* =========================================================
   Spark Learning – views/home.js
   Vues globales : accueil, matières, niveaux, modules, détail de module
   ========================================================= */

function renderContinueSection() {
  const recent = getRecentModules();
  if (recent.length === 0) return '';

  return `
    <section class="section continue-section">
      <div class="container">
        <h2 class="section-title">Reprendre ton parcours</h2>
        <p class="section-subtitle">Continue là où tu t'es arrêté</p>
        <div class="continue-grid">
          ${recent.map(m => {
            const prog = getModuleProgress(m.id);
            return `
              <div class="continue-card" onclick="navigate('module', {moduleId: '${m.id}'})" tabindex="0" role="button" aria-label="Reprendre ${m.title}">
                <div class="continue-card-top">
                  <span class="continue-card-icon">${m.icon}</span>
                  <div>
                    <div class="continue-card-title">${m.title}</div>
                    <div class="continue-card-level">${getSubjectDef(m.subject || 'maths').icon} ${getSubjectDef(m.subject || 'maths').label} · ${LEVEL_NAMES[m.level]}</div>
                  </div>
                </div>
                <div class="progress-bar" style="margin-top:12px;">
                  <div class="progress-fill" style="width:${prog.pct}%;"></div>
                </div>
                <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:0.8rem;color:var(--text-muted);">
                  <span>${prog.done}/${prog.total} complété</span>
                  <span>Reprendre →</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderStatsSection() {
  const allModules = window.MODULES || [];
  const progress = state.progress || {};
  const hasProgress = Object.keys(progress).length > 0;
  if (!hasProgress) return '';

  const activeLevels = new Set();
  for (const moduleId of Object.keys(progress)) {
    const mod = getModule(moduleId);
    if (mod) activeLevels.add(mod.level);
  }
  if (activeLevels.size === 0) return '';

  const levels = LEVEL_DEFS
    .map(l => ({ ...l, label: `${l.icon} ${l.label}` }))
    .filter(l => activeLevels.has(l.id));

  const progressMap = {};
  allModules.forEach(m => { progressMap[m.id] = getModuleProgress(m.id); });

  const relevantModules = allModules.filter(m => activeLevels.has(m.level));
  const totalDone = relevantModules.filter(m => {
    const p = progressMap[m.id];
    return p.done === p.total && p.done > 0;
  }).length;
  const totalModules = relevantModules.length;
  const globalPct = totalModules > 0 ? Math.round((totalDone / totalModules) * 100) : 0;

  const levelStats = levels.map(l => {
    const mods = allModules.filter(m => m.level === l.id);
    const done = mods.filter(m => {
      const p = progressMap[m.id];
      return p.done === p.total && p.done > 0;
    }).length;
    const pct = mods.length > 0 ? Math.round((done / mods.length) * 100) : 0;
    return { ...l, done, total: mods.length, pct };
  });

  const subtitle = levels.length === 1
    ? `Ta progression en ${levels[0].label.replace(/^[^\s]+\s/, '')}`
    : 'Ta progression sur tes niveaux';

  return `
    <section class="section stats-section">
      <div class="container">
        <h2 class="section-title">Mes statistiques</h2>
        <p class="section-subtitle">${subtitle}</p>
        ${(() => {
          if (typeof Storage !== 'undefined' && Storage.getStreak) {
            const streak = Storage.getStreak();
            if (streak.currentStreak >= 2) {
              return '<div style="text-align:center;margin-bottom:var(--space-lg);"><span class="streak-badge"><span class="streak-badge-fire">🔥</span> ' + streak.currentStreak + ' jours d\'affilée</span></div>';
            }
          }
          return '';
        })()}

        <div class="stats-overview">
          <div class="stats-global">
            <div class="stats-global-number">${totalDone}<span class="stats-global-total">/${totalModules}</span></div>
            <div class="stats-global-label">modules complété</div>
            <div class="progress-bar" style="margin-top:12px;height:10px;">
              <div class="progress-fill" style="width:${globalPct}%;"></div>
            </div>
          </div>
          <div class="stats-levels">
            ${levelStats.map(l => `
              <div class="card-base stats-level-card">
                <div class="stats-level-header">
                  <span>${l.label}</span>
                  <span class="stats-level-count">${l.done}/${l.total}</span>
                </div>
                <div class="progress-bar" style="height:6px;">
                  <div class="progress-fill" style="width:${l.pct}%;background:${l.color};"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSubjects() {
  return `
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Choisir ta matière</h1>
        <p class="page-subtitle">Sélectionne la matière que tu veux travailler</p>
      </div>
      <div class="subjects-grid">
        ${SUBJECT_DEFS.map(s => {
          const mods = window.MODULES.filter(m => (m.subject || 'maths') === s.id);
          const count = mods.length;
          const done = mods.filter(m => {
            const p = getModuleProgress(m.id);
            return p.done === p.total && p.done > 0;
          }).length;
          const pct = count > 0 ? Math.round((done / count) * 100) : 0;
          const isEmpty = count === 0;
          return `
            <div class="subject-card ${isEmpty ? 'subject-card-empty' : ''}"
                 style="--subject-color: ${s.color};"
                 ${isEmpty ? '' : `onclick="navigate('levels', {subject: '${s.id}'})" tabindex="0" role="button" aria-label="Matière ${s.label}"`}>
              <div class="subject-card-icon">${s.icon}</div>
              <div class="subject-card-title">${s.label}</div>
              <p class="subject-card-desc">${s.description}</p>
              ${isEmpty ? `
                <span class="subject-card-badge">Bientôt disponible</span>
              ` : `
                <span class="subject-card-count" style="--subject-color: ${s.color};">${count} ${pluralize('module', count)}</span>
                <div class="subject-card-progress">
                  <div class="subject-card-progress-label">${done === 0 ? 'Pas encore commencé' : `${done} / ${count} ${pluralize('module', done)} ${pluralize('complété', done)}`}</div>
                  <div class="subject-card-progress-bar">
                    <div class="subject-card-progress-fill" style="width: ${pct}%;"></div>
                  </div>
                </div>
              `}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderHome() {
  const totalModules = window.MODULES ? window.MODULES.length : 0;

  return `
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-math-floats" aria-hidden="true">
        <span class="math-float">E = mc²</span>
        <span class="math-float">∫f(x)dx</span>
        <span class="math-float">pH = −log[H₃O⁺]</span>
        <span class="math-float">F = ma</span>
        <span class="math-float">U = RI</span>
        <span class="math-float">Δ = b²−4ac</span>
      </div>
      <div class="container" style="position:relative;z-index:1;">
        <div class="hero-kicker">✨ Remédiation scientifique </div>
        <h1 class="hero-title">
          Maths, Physique, Ingénierie :<br/>
          progresse à <span class="highlight">ton rythme</span>.
        </h1>
        <p class="hero-subtitle">
          Spark Learning te remet à niveau avec une pédagogie bienveillante, étape par étape — du Collège au BTS.
        </p>
        <div class="hero-cta">
          <button class="btn btn-primary" onclick="navigate('subjects')">
            Commencer maintenant 🚀
          </button>
          <button class="btn btn-secondary" onclick="navigate('subjects')">
            Voir les matières
          </button>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="hero-stat-number">${totalModules}</div>
            <div class="hero-stat-label">modules</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-number">${SUBJECT_DEFS.length}</div>
            <div class="hero-stat-label">matières</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-number">3</div>
            <div class="hero-stat-label">niveaux</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-number">100%</div>
            <div class="hero-stat-label">gratuit</div>
          </div>
        </div>
      </div>
    </section>

    ${renderContinueSection()}
    ${renderStatsSection()}

    <section class="section" style="background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
      <div class="container">
        <h2 class="section-title">Pourquoi Spark Learning ?</h2>
        <p class="section-subtitle">Une approche différente, conçue pour les étudiants en sciences</p>
        <div class="features-grid">
          <div class="card-base feature-card">
            <div class="feature-icon">🎯</div>
            <div class="feature-title">Ciblé Sciences Appliquées</div>
            <p class="feature-desc">Chaque concept est justifié par son application concrète. Tu sais toujours pourquoi tu apprends ce que tu apprends.</p>
          </div>
          <div class="card-base feature-card">
            <div class="feature-icon">💡</div>
            <div class="feature-title">Pédagogie Socratique</div>
            <p class="feature-desc">Les questions te guident vers la réponse plutôt que de te la donner. Tu construis vraiment ta compréhension, pas juste ta mémoire.</p>
          </div>
          <div class="card-base feature-card">
            <div class="feature-icon">✅</div>
            <div class="feature-title">L'erreur comme tremplin</div>
            <p class="feature-desc">Pas de croix rouge. Chaque erreur déclenche un feedback bienveillant et un indice ciblé. L'erreur est le début de la compréhension.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Comment ça marche ?</h2>
        <p class="section-subtitle">5 étapes pour maîtriser chaque notion</p>
        <div class="features-grid">
          <div class="card-base feature-card" style="text-align:center;">
            <div class="feature-icon">📖</div>
            <div class="feature-title">1. Cours orienté application</div>
            <p class="feature-desc">Comprendre pourquoi la notion est utile avant de l'apprendre.</p>
          </div>
          <div class="card-base feature-card" style="text-align:center;">
            <div class="feature-icon">❓</div>
            <div class="feature-title">2. Quiz diagnostique</div>
            <p class="feature-desc">3 questions pour repérer tes faux réflexes et les corriger.</p>
          </div>
          <div class="card-base feature-card" style="text-align:center;">
            <div class="feature-icon">🔢</div>
            <div class="feature-title">3. Exercice génératif</div>
            <p class="feature-desc">Des chiffres différents à chaque tentative pour vraiment t'entraîner.</p>
          </div>
          <div class="card-base feature-card" style="text-align:center;">
            <div class="feature-icon">🔭</div>
            <div class="feature-title">4. Problème appliqué</div>
            <p class="feature-desc">Un vrai problème appliqué résolu étape par étape.</p>
          </div>
          <div class="card-base feature-card" style="text-align:center;">
            <div class="feature-icon">📝</div>
            <div class="feature-title">5. Évaluation type</div>
            <p class="feature-desc">Un devoir type pour te préparer aux évaluations de ton enseignant.</p>
          </div>
        </div>
        <div style="text-align:center; margin-top:32px;">
          <button class="btn btn-primary" onclick="navigate('subjects')">
            Choisir ma matière 🎓
          </button>
        </div>
      </div>
    </section>
  `;
}

function renderLevels() {
  const subjectDef = getSubjectDef(state.subject || 'maths');

  const levels = [
    { id: 1, icon: '🏫', title: 'Fin de Collège', subtitle: '4ème – 3ème', color: 'var(--primary)' },
    { id: 2, icon: '🎓', title: 'Lycée', subtitle: 'Général & Techno', color: 'var(--secondary)' },
    { id: 3, icon: '🏆', title: 'BTS', subtitle: 'Enseignement supérieur', color: 'var(--accent)' }
  ].filter(l => subjectDef.availableLevels.includes(l.id));

  const subjectModules = window.MODULES.filter(m => (m.subject || 'maths') === subjectDef.id);
  const themeFreq = {};
  subjectModules.forEach(m => getModuleThemes(m).forEach(t => { themeFreq[t] = (themeFreq[t] || 0) + 1; }));
  const themes = Object.entries(themeFreq)
    .sort((a, b) => b[1] - a[1])
    .map(([id, count]) => ({ id, label: getThemeLabel(id), count }));

  return `
    <div class="container">
      <div class="page-header">
        <button class="btn-back" onclick="navigate('subjects')" aria-label="Retour aux matières">← Matières</button>
        <h1 class="page-title">${subjectDef.icon} ${subjectDef.label}</h1>
        <p class="page-subtitle">Choisis ton mode de parcours puis sélectionne tes modules</p>
      </div>
      <div class="module-mode-switch" style="margin:0 0 18px 0;">
        <button class="module-mode-btn ${state.moduleSelectionMode === 'level' ? 'active' : ''}" onclick="setParcoursMode('level')">Par niveau</button>
        <button class="module-mode-btn ${state.moduleSelectionMode === 'theme' ? 'active' : ''}" onclick="setParcoursMode('theme')">Par thème</button>
      </div>

      ${state.moduleSelectionMode === 'theme' ? `
        <div class="levels-grid">
          <div class="level-card" style="--level-color: var(--primary);" onclick="openThemeModules('${subjectDef.id}', 'all')" tabindex="0" role="button" aria-label="Tous les thèmes">
            <div class="level-card-icon">🧭</div>
            <div class="level-card-title">Tous les thèmes</div>
            <div class="level-card-subtitle">Explorer toute la matière</div>
            <span class="level-card-count" style="--level-color: var(--primary);">${subjectModules.length} ${pluralize('module', subjectModules.length)}</span>
          </div>
          ${themes.map(t => `
            <div class="level-card" style="--level-color: var(--secondary);" onclick="openThemeModules('${subjectDef.id}', '${t.id}')" tabindex="0" role="button" aria-label="Thème ${t.label}">
              <div class="level-card-icon">🏷️</div>
              <div class="level-card-title">${t.label}</div>
              <div class="level-card-subtitle">Modules regroupés par thème</div>
              <span class="level-card-count" style="--level-color: var(--secondary);">${t.count} ${pluralize('module', t.count)}</span>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="levels-grid">
          ${levels.map(l => {
            const levelModules = window.MODULES.filter(m => m.level === l.id && (m.subject || 'maths') === subjectDef.id);
            const count = levelModules.length;
            const done = levelModules.filter(m => {
              const p = getModuleProgress(m.id);
              return p.done === p.total && p.done > 0;
            }).length;
            const pct = count > 0 ? Math.round((done / count) * 100) : 0;
            return `
              <div class="level-card" style="--level-color: ${l.color};" onclick="navigate('modules', {level: ${l.id}, subject: '${subjectDef.id}'})" tabindex="0" role="button" aria-label="Niveau ${l.title}">
                <div class="level-card-icon">${l.icon}</div>
                <div class="level-card-title">${l.title}</div>
                <div class="level-card-subtitle">${l.subtitle}</div>
                <span class="level-card-count" style="--level-color: ${l.color};">${count} ${pluralize('module', count)}</span>
                <div class="level-card-progress">
                  <div class="level-card-progress-label">${done === 0 ? 'Pas encore commencé' : `${done} / ${count} ${pluralize('module', done)} ${pluralize('complété', done)}`}</div>
                  <div class="level-card-progress-bar">
                    <div class="level-card-progress-fill" style="width: ${pct}%;"></div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

function renderAdminPage() {
  const modules = (window.MODULES || []).slice().sort((a, b) => {
    if (a.level !== b.level) return a.level - b.level;
    const sa = (a.subject || 'maths').localeCompare((b.subject || 'maths'), 'fr');
    if (sa !== 0) return sa;
    return a.title.localeCompare(b.title, 'fr');
  });

  const lockedCount = modules.filter(m => isModuleLocked(m.id)).length;
  const maintenanceCount = modules.filter(m => isModuleInMaintenance(m.id)).length;

  return `
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Administration des modules</h1>
        <p class="page-subtitle">Gère l'accès aux modules: verrouillé ou maintenance</p>
      </div>

      <div class="admin-kpis">
        <div class="card-base admin-kpi">
          <span class="admin-kpi-label">Total modules</span>
          <strong class="admin-kpi-value">${modules.length}</strong>
        </div>
        <div class="card-base admin-kpi">
          <span class="admin-kpi-label">Verrouillés</span>
          <strong class="admin-kpi-value">${lockedCount}</strong>
        </div>
        <div class="card-base admin-kpi">
          <span class="admin-kpi-label">Maintenance</span>
          <strong class="admin-kpi-value">${maintenanceCount}</strong>
        </div>
      </div>

      <div class="admin-modules-grid">
        ${modules.map(m => {
          const subject = getSubjectDef(m.subject || 'maths');
          const access = getModuleAccess(m.id);
          const statusLabel = access.locked
            ? '<span class="badge badge-admin-locked">🔒 Verrouillé</span>'
            : access.maintenance
              ? '<span class="badge badge-admin-maintenance">🛠️ Maintenance</span>'
              : '<span class="badge badge-admin-open">✅ Actif</span>';

          return `
            <div class="card-base admin-module-card">
              <div class="admin-module-head">
                <div>
                  <div class="admin-module-title">${m.icon} ${m.title}</div>
                  <div class="admin-module-meta">${subject.icon} ${subject.label} · ${LEVEL_NAMES[m.level]}</div>
                </div>
                <div>${statusLabel}</div>
              </div>
              <div class="admin-module-actions">
                <button class="btn btn-sm ${access.locked ? 'btn-primary' : 'btn-outline'}" onclick="setModuleAccessMode('${m.id}', 'locked')">
                  ${access.locked ? 'Déverrouiller' : 'Verrouiller'}
                </button>
                <button class="btn btn-sm ${access.maintenance ? 'btn-primary' : 'btn-outline'}" onclick="setModuleAccessMode('${m.id}', 'maintenance')">
                  ${access.maintenance ? 'Retirer maintenance' : 'Mettre en maintenance'}
                </button>
                <button class="btn btn-sm btn-secondary" onclick="setModuleAccessMode('${m.id}', 'open')">
                  Rendre actif
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderModulesList() {
  const subjectDef = getSubjectDef(state.subject || 'maths');
  const allLevels = LEVEL_DEFS
    .filter(l => subjectDef.availableLevels.includes(l.id))
    .map(l => ({ id: l.id, label: `${l.icon} ${l.label}` }));
  allLevels.unshift({ id: 'all', label: '🧭 Tous niveaux' });

  const allSubjectModules = window.MODULES.filter(m => (m.subject || 'maths') === subjectDef.id);
  const themeFreq = {};
  allSubjectModules.forEach(m => getModuleThemes(m).forEach(t => { themeFreq[t] = (themeFreq[t] || 0) + 1; }));
  const availableThemes = Object.entries(themeFreq)
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => ({ id, label: getThemeLabel(id) }));

  const modules = allSubjectModules.filter(m => {
    if (state.moduleSelectionMode === 'theme') {
      if (state.selectedTheme === 'all') return true;
      return getModuleThemes(m).includes(state.selectedTheme);
    }
    const matchLevel = state.level === 'all' ? true : m.level === state.level;
    return matchLevel;
  });

  const kwFreq = {};
  modules.forEach(m => getModuleSearchKeywords(m).forEach(k => { kwFreq[k] = (kwFreq[k] || 0) + 1; }));
  const topKeywords = Object.entries(kwFreq).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([k]) => k);

  return `
    <div class="container">
      <div class="level-switcher">
        <button class="btn-back" onclick="navigate('levels', {subject: '${subjectDef.id}'})" aria-label="Retour aux niveaux">← ${subjectDef.icon} ${subjectDef.label}</button>
        <div class="module-mode-switch" role="tablist" aria-label="Mode de sélection">
          <button class="module-mode-btn ${state.moduleSelectionMode === 'level' ? 'active' : ''}" onclick="setModuleSelectionMode('level')">Par niveau</button>
          <button class="module-mode-btn ${state.moduleSelectionMode === 'theme' ? 'active' : ''}" onclick="setModuleSelectionMode('theme')">Par thème</button>
        </div>
      </div>

      ${state.moduleSelectionMode === 'level' ? `
        <div class="level-switch-tabs">
          ${allLevels.map(l => `
            <button class="level-switch-btn ${state.level === l.id ? 'active' : ''}"
                    onclick="navigate('modules', {level: ${typeof l.id === 'string' ? `'${l.id}'` : l.id}, subject: '${subjectDef.id}'})">${l.label}</button>
          `).join('')}
        </div>
      ` : `
        <div class="theme-switch-tabs">
          <button class="level-switch-btn ${state.selectedTheme === 'all' ? 'active' : ''}" onclick="setModuleTheme('all')">Tous les thèmes</button>
          ${availableThemes.map(t => `
            <button class="level-switch-btn ${state.selectedTheme === t.id ? 'active' : ''}" onclick="setModuleTheme('${t.id}')">${t.label}</button>
          `).join('')}
        </div>
      `}

      <div class="search-bar-wrapper">
        <label for="search-modules" class="sr-only">Rechercher un module</label>
        <span class="search-icon" aria-hidden="true">🔍</span>
        <input type="text" id="search-modules" class="search-input"
               placeholder="Rechercher un module, un mot-clé…"
               value="${(state.searchQuery || '').replace(/"/g, '&quot;')}"
               oninput="filterModules(this.value)"
               autocomplete="off" spellcheck="false" />
        <button class="search-clear" onclick="filterModules('')"
                aria-label="Effacer la recherche" style="display:${state.searchQuery ? 'flex' : 'none'}">✕</button>
      </div>

      <div class="search-tools-row">
        ${topKeywords.length > 0 ? `
          <div class="keyword-filters" id="keyword-filters">
            ${topKeywords.map(k => `
              <button class="keyword-tag ${state.activeKeywords.includes(k) ? 'active' : ''}"
                      data-kw="${k.replace(/"/g, '&quot;')}">${k}</button>
            `).join('')}
          </div>
        ` : ''}
        <div class="sort-selector">
          <label for="sort-modules" class="sr-only">Trier par</label>
          <select id="sort-modules" class="sort-select" onchange="sortModules(this.value)">
            <option value="default" ${state.sortBy === 'default' ? 'selected' : ''}>Ordre du programme</option>
            <option value="alpha" ${state.sortBy === 'alpha' ? 'selected' : ''}>Alphabétique</option>
            <option value="progress" ${state.sortBy === 'progress' ? 'selected' : ''}>Progression ↓</option>
            <option value="theme" ${state.sortBy === 'theme' ? 'selected' : ''}>Thème (mots-clés)</option>
          </select>
        </div>
        <button class="btn btn-outline btn-print-batch" onclick="toggleBatchPrintMode()">
          Imprimer les fiches 🖨️
        </button>
      </div>

      <div id="no-results" class="no-results" style="display:none;">
        <div style="font-size:2.5rem;margin-bottom:12px;">🔍</div>
        <div style="font-weight:600;margin-bottom:6px;">Aucun module trouvé</div>
        <div style="font-size:0.88rem;color:var(--text-muted);margin-bottom:16px;">Essaie d'autres mots-clés ou explore les modules populaires</div>
        <button class="btn btn-secondary btn-sm" onclick="filterModules('')">Effacer la recherche</button>
      </div>

      <div class="modules-grid" id="modules-grid">
        ${modules.map(m => {
          const prog = getModuleProgress(m.id);
          const access = getModuleAccess(m.id);
          const unavailable = access.locked || access.maintenance;
          const statusBadge = access.locked
            ? '<span class="badge badge-admin-locked">🔒 Verrouillé</span>'
            : access.maintenance
              ? '<span class="badge badge-admin-maintenance">🛠️ Maintenance</span>'
              : '';
          return `
            <div class="card-base module-card ${unavailable ? 'module-card-unavailable' : ''}"
                 ${unavailable ? '' : `onclick="navigate('module', {moduleId: '${m.id}'})"`}
                 tabindex="0" role="button"
                 aria-label="Module ${m.title}"
                 aria-disabled="${unavailable}"
                 data-title="${m.title.toLowerCase().replace(/"/g, '&quot;')}"
                 data-subtitle="${m.subtitle.toLowerCase().replace(/"/g, '&quot;')}"
                 data-keywords="${getModuleSearchKeywords(m).join('|').toLowerCase().replace(/"/g, '&quot;')}"
                 data-theme="${(getThemeLabel(getModuleThemes(m)[0]) || '').toLowerCase().replace(/"/g, '&quot;')}"
                 data-progress="${prog.pct}">
              <div class="module-card-top">
                <div class="module-card-icon">${m.icon}</div>
                <div class="module-card-info">
                  <div class="module-card-title">${m.title}</div>
                  <div class="module-card-subtitle">${m.subtitle}</div>
                </div>
              </div>
              ${statusBadge}
              <div class="module-card-keywords">
                ${getModuleSearchKeywords(m).slice(0, 3).map(k => `<span class="badge">${k}</span>`).join('')}
              </div>
              <div class="module-card-physics">${subjectDef.applicationIcon} ${m.physics}</div>
              <div class="module-card-progress">
                <div class="progress-label">
                  <span>Progression</span>
                  <span>${prog.done}/${prog.total}</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${prog.pct}%;"></div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderModuleDetail() {
  const mod = getModule(state.moduleId);
  if (!mod) return '<div class="container"><p>Module introuvable.</p></div>';

  if (isModuleLocked(mod.id) || isModuleInMaintenance(mod.id)) {
    const isLocked = isModuleLocked(mod.id);
    const statusTitle = isLocked ? 'Module verrouillé' : 'Module en maintenance';
    const statusText = isLocked
      ? 'Ce module est actuellement verrouillé par l\'administration.'
      : 'Ce module est temporairement indisponible pour maintenance.';

    return `
      <div class="container module-detail">
        <div class="page-header">
          <button class="btn-back" onclick="navigate('modules', {level: ${mod.level}, subject: '${mod.subject || 'maths'}'})">← Retour aux modules</button>
          <h1 class="page-title">${statusTitle}</h1>
          <p class="page-subtitle">${statusText}</p>
        </div>
      </div>
    `;
  }

  const tabs = [
    { id: 'cours',      label: '📖 Cours' },
    { id: 'quiz',       label: '❓ Quiz' },
    { id: 'exercice',   label: '🔢 Exercice' },
    { id: 'probleme',   label: '🔭 Problème' },
    { id: 'evaluation', label: '📝 Évaluation' },
    { id: 'companion',  label: '🚀 Remédiation' }
  ];

  const modSubject = mod.subject || 'maths';
  const subjectDef = getSubjectDef(modSubject);
  const levelModules = window.MODULES.filter(m => m.level === mod.level && (m.subject || 'maths') === modSubject);
  const currentIdx = levelModules.findIndex(m => m.id === mod.id);
  const prevMod = currentIdx > 0 ? levelModules[currentIdx - 1] : null;
  const nextMod = currentIdx < levelModules.length - 1 ? levelModules[currentIdx + 1] : null;

  return `
    <div class="container module-detail">
      <div class="module-detail-header">
        <div class="module-breadcrumb">
          <button class="breadcrumb-link" onclick="navigate('subjects')">Matières</button>
          <span class="breadcrumb-sep">›</span>
          <button class="breadcrumb-link" onclick="navigate('levels', {subject: '${modSubject}'})">${subjectDef.icon} ${subjectDef.label}</button>
          <span class="breadcrumb-sep">›</span>
          <button class="breadcrumb-link" onclick="navigate('modules', {level: ${mod.level}, subject: '${modSubject}'})">${LEVEL_NAMES[mod.level]}</button>
          <span class="breadcrumb-sep">›</span>
          <span aria-current="page">${mod.title}</span>
        </div>
        <div class="module-detail-title-row">
          <span class="module-detail-icon">${mod.icon}</span>
          <h1 class="module-detail-title">${mod.title}</h1>
        </div>
        <p class="module-detail-subtitle">${mod.subtitle}</p>
        <div class="module-detail-physics">${subjectDef.applicationIcon} ${subjectDef.applicationLabel} : ${mod.physics}</div>

        <nav class="tab-bar" role="tablist" aria-label="Onglets du module">
          ${tabs.map(t => `
            <button
              class="tab-btn ${state.tab === t.id ? 'active' : ''}"
              data-tab="${t.id}"
              onclick="switchTab('${t.id}')"
              role="tab"
              aria-selected="${state.tab === t.id}"
              aria-controls="tab-panel-${t.id}"
            >${t.label}</button>
          `).join('')}
        </nav>
      </div>

      <div class="tab-content" id="tab-panel-${state.tab}" role="tabpanel">
        ${renderTabContentHTML(mod)}
      </div>

      <div class="module-nav-arrows">
        ${prevMod
          ? `<button class="btn btn-secondary btn-nav" onclick="navigate('module', {moduleId: '${prevMod.id}'})">← ${prevMod.title}</button>`
          : '<span></span>'}
        <span class="module-nav-counter">${currentIdx + 1} / ${levelModules.length}</span>
        ${nextMod
          ? `<button class="btn btn-secondary btn-nav" onclick="navigate('module', {moduleId: '${nextMod.id}'})">→ ${nextMod.title}</button>`
          : '<span></span>'}
      </div>
    </div>
  `;
}
