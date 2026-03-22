/* =========================================================
   Spark Learning – render.js
   Toutes les fonctions de rendu HTML (vues + onglets)
   ========================================================= */

/* ═══════════════════════════════════════
   CONTINUE SECTION (homepage)
═══════════════════════════════════════ */
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
                    <div class="continue-card-level">${LEVEL_NAMES[m.level]}</div>
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

/* ═══════════════════════════════════════
   STATS DASHBOARD (homepage)
═══════════════════════════════════════ */
function renderStatsSection() {
  const allModules = window.MODULES || [];
  const progress = state.progress || {};
  const hasProgress = Object.keys(progress).length > 0;
  if (!hasProgress) return '';

  // Detect which levels the student has actually worked on
  const activeLevels = new Set();
  for (const moduleId of Object.keys(progress)) {
    const mod = getModule(moduleId);
    if (mod) activeLevels.add(mod.level);
  }
  if (activeLevels.size === 0) return '';

  const levels = LEVEL_DEFS
    .map(l => ({ ...l, label: `${l.icon} ${l.label}` }))
    .filter(l => activeLevels.has(l.id));

  // Single-pass progress computation
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

        <div class="stats-overview">
          <div class="stats-global">
            <div class="stats-global-number">${totalDone}<span class="stats-global-total">/${totalModules}</span></div>
            <div class="stats-global-label">modules complétés</div>
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

/* ═══════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════ */
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
        <div class="hero-kicker">✨ Remédiation mathématique </div>
        <h1 class="hero-title">
          Tes lacunes en maths ne bloqueront plus<br/>
          ta <span class="highlight">physique-chimie</span>.
        </h1>
        <p class="hero-subtitle">
          Spark Learning te remet à niveau avec une pédagogie bienveillante, étape par étape — du Collège au BTS.
        </p>
        <div class="hero-cta">
          <button class="btn btn-primary" onclick="navigate('levels')">
            Commencer maintenant 🚀
          </button>
          <button class="btn btn-secondary" onclick="navigate('levels')">
            Voir le programme
          </button>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="hero-stat-number">${totalModules}</div>
            <div class="hero-stat-label">modules</div>
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
        <p class="section-subtitle">Une approche différente, conçue pour les étudiants en physique-chimie</p>
        <div class="features-grid">
          <div class="card-base feature-card">
            <div class="feature-icon">🎯</div>
            <div class="feature-title">Ciblé Physique-Chimie</div>
            <p class="feature-desc">Chaque concept mathématique est justifié par son application directe en physique ou chimie. Tu sais toujours pourquoi tu apprends ce que tu apprends.</p>
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
            <div class="feature-title">1. Cours orienté physique</div>
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
            <p class="feature-desc">Un vrai problème de physique-chimie résolu étape par étape.</p>
          </div>
          <div class="card-base feature-card" style="text-align:center;">
            <div class="feature-icon">📝</div>
            <div class="feature-title">5. Évaluation type</div>
            <p class="feature-desc">Un devoir type pour te préparer aux évaluations de ton enseignant.</p>
          </div>
        </div>
        <div style="text-align:center; margin-top:32px;">
          <button class="btn btn-primary" onclick="navigate('levels')">
            Choisir mon niveau 🎓
          </button>
        </div>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════
   LEVELS PAGE
═══════════════════════════════════════ */
function renderLevels() {
  const levels = [
    {
      id: 1, icon: '🏫', title: 'Fin de Collège', subtitle: '4ème – 3ème',
      desc: 'Bases essentielles : proportionnalité, puissances, équations, trigonométrie.',
      color: 'var(--primary)'
    },
    {
      id: 2, icon: '🎓', title: 'Lycée', subtitle: 'Général & Techno',
      desc: 'Vecteurs, fonctions, dérivation, intégration, équations différentielles.',
      color: 'var(--secondary)'
    },
    {
      id: 3, icon: '🏆', title: 'BTS', subtitle: 'Enseignement supérieur',
      desc: 'Nombres complexes, équations diff. 2nd ordre, statistiques et incertitudes.',
      color: 'var(--accent)'
    }
  ];

  return `
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Choisir ton niveau</h1>
        <p class="page-subtitle">Commence là où tu te sens le plus à l'aise. Tu peux toujours changer !</p>
      </div>
      <div class="levels-grid">
        ${levels.map(l => {
          const levelModules = window.MODULES.filter(m => m.level === l.id);
          const count = levelModules.length;
          const done = levelModules.filter(m => {
            const p = getModuleProgress(m.id);
            return p.done === p.total && p.done > 0;
          }).length;
          const pct = count > 0 ? Math.round((done / count) * 100) : 0;
          return `
            <div class="level-card" style="--level-color: ${l.color};" onclick="navigate('modules', {level: ${l.id}})" tabindex="0" role="button" aria-label="Niveau ${l.title}">
              <div class="level-card-icon">${l.icon}</div>
              <div class="level-card-title">${l.title}</div>
              <div class="level-card-subtitle">${l.subtitle}</div>
              <p style="font-size:0.88rem;color:var(--text-muted);margin-bottom:16px;line-height:1.5;">${l.desc}</p>
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
    </div>
  `;
}

/* ═══════════════════════════════════════
   MODULES LIST
═══════════════════════════════════════ */
function renderModulesList() {
  const allLevels = LEVEL_DEFS.map(l => ({ id: l.id, label: `${l.icon} ${l.label}` }));
  const modules = window.MODULES.filter(m => m.level === state.level);

  // Top keywords for this level
  const kwFreq = {};
  modules.forEach(m => m.keywords.forEach(k => { kwFreq[k] = (kwFreq[k] || 0) + 1; }));
  const topKeywords = Object.entries(kwFreq).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([k]) => k);

  return `
    <div class="container">
      <div class="level-switcher">
        <button class="btn-back" onclick="navigate('levels')" aria-label="Retour aux niveaux">← Parcours</button>
        <div class="level-switch-tabs">
          ${allLevels.map(l => `
            <button class="level-switch-btn ${state.level === l.id ? 'active' : ''}"
                    onclick="navigate('modules', {level: ${l.id}})">${l.label}</button>
          `).join('')}
        </div>
      </div>

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
          </select>
        </div>
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
          return `
            <div class="card-base module-card"
                 onclick="navigate('module', {moduleId: '${m.id}'})"
                 tabindex="0" role="button"
                 aria-label="Module ${m.title}"
                 data-title="${m.title.toLowerCase().replace(/"/g, '&quot;')}"
                 data-subtitle="${m.subtitle.toLowerCase().replace(/"/g, '&quot;')}"
                 data-keywords="${m.keywords.join('|').toLowerCase().replace(/"/g, '&quot;')}"
                 data-progress="${prog.pct}">
              <div class="module-card-top">
                <div class="module-card-icon">${m.icon}</div>
                <div class="module-card-info">
                  <div class="module-card-title">${m.title}</div>
                  <div class="module-card-subtitle">${m.subtitle}</div>
                </div>
              </div>
              <div class="module-card-keywords">
                ${m.keywords.slice(0, 2).map(k => `<span class="badge">${k}</span>`).join('')}
              </div>
              <div class="module-card-physics">⚗️ ${m.physics}</div>
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

/* ═══════════════════════════════════════
   MODULE DETAIL
═══════════════════════════════════════ */
function renderModuleDetail() {
  const mod = getModule(state.moduleId);
  if (!mod) return '<div class="container"><p>Module introuvable.</p></div>';

  const tabs = [
    { id: 'cours',      label: '📖 Cours' },
    { id: 'quiz',       label: '❓ Quiz' },
    { id: 'exercice',   label: '🔢 Exercice' },
    { id: 'probleme',   label: '🔭 Problème' },
    { id: 'evaluation', label: '📝 Évaluation' }
  ];

  const levelModules = window.MODULES.filter(m => m.level === mod.level);
  const currentIdx = levelModules.findIndex(m => m.id === mod.id);
  const prevMod = currentIdx > 0 ? levelModules[currentIdx - 1] : null;
  const nextMod = currentIdx < levelModules.length - 1 ? levelModules[currentIdx + 1] : null;

  return `
    <div class="container module-detail">
      <div class="module-detail-header">
        <div class="module-breadcrumb">
          <button class="breadcrumb-link" onclick="navigate('levels')">Parcours</button>
          <span class="breadcrumb-sep">›</span>
          <button class="breadcrumb-link" onclick="navigate('modules', {level: ${mod.level}})">${LEVEL_NAMES[mod.level]}</button>
          <span class="breadcrumb-sep">›</span>
          <span aria-current="page">${mod.title}</span>
        </div>
        <div class="module-detail-title-row">
          <span class="module-detail-icon">${mod.icon}</span>
          <h1 class="module-detail-title">${mod.title}</h1>
        </div>
        <p class="module-detail-subtitle">${mod.subtitle}</p>
        <div class="module-detail-physics">🔬 Physique-chimie : ${mod.physics}</div>

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

function renderTabContent() {
  const mod = getModule(state.moduleId);
  if (!mod) return;

  // Update tab buttons active state
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const tabId = btn.dataset.tab;
    btn.classList.toggle('active', tabId === state.tab);
    btn.setAttribute('aria-selected', tabId === state.tab);
  });

  const panel = document.querySelector('.tab-content');
  if (panel) {
    panel.id = `tab-panel-${state.tab}`;
    // Re-trigger CSS animation on tab switch
    panel.style.animation = 'none';
    panel.offsetHeight; // force reflow
    panel.style.animation = '';
    panel.innerHTML = renderTabContentHTML(mod);
  }
}

function renderTabContentHTML(mod) {
  switch (state.tab) {
    case 'cours':    return renderCours(mod);
    case 'quiz':     return renderQuiz(mod);
    case 'exercice': return renderExercice(mod);
    case 'probleme':   return renderProbleme(mod);
    case 'evaluation': return renderEvaluation(mod);
    default:           return renderCours(mod);
  }
}

/* ═══════════════════════════════════════
   ERREUR / CONSEIL HELPER
═══════════════════════════════════════ */
function renderErreurConseil(piege) {
  // Strip the "Piège [label] :" prefix
  const clean = piege.replace(/^Piège\s*(classique)?\s*:\s*/i, '').trim();

  // Split at the first sentence boundary outside KaTeX blocks
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
    // No clean split: show as single "erreur" card
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

/* ═══════════════════════════════════════
   COURS TAB
═══════════════════════════════════════ */
function renderCours(mod) {
  const c = mod.cours;
  return `
    <div class="cours-content">
      <blockquote class="cours-intro">${c.intro}</blockquote>

      <div class="cours-section">
        <h2 class="cours-section-title">📋 ${c.method.title}</h2>
        <ol class="cours-steps">
          ${c.method.steps.map((s, i) => `
            <li class="cours-step">
              <span class="step-number">${i + 1}</span>
              <span class="step-text">${s}</span>
            </li>
          `).join('')}
        </ol>
      </div>

      <div class="cours-section">
        <h2 class="cours-section-title">📐 Formules clés</h2>
        <div class="formulas-grid">
          ${c.formulas.map(f => `<div class="formula-chip">${f}</div>`).join('')}
        </div>
      </div>

      <div class="cours-section">
        <h2 class="cours-section-title">🔍 Une erreur, une suggestion</h2>
        ${renderErreurConseil(c.piege)}
      </div>

      <div class="cours-section">
        <h2 class="cours-section-title">🔬 Application physique-chimie</h2>
        <div style="padding:14px 18px;background:color-mix(in srgb,var(--secondary) 10%, var(--bg-card));border-radius:var(--radius);border:1px solid color-mix(in srgb,var(--secondary) 25%,transparent);font-size:0.92rem;line-height:1.6;">
          <strong>Où cette notion est-elle utilisée ?</strong><br/>
          ${mod.physics}<br/><br/>
          <em>Mots-clés associés :</em> ${mod.keywords.map(k => `<span class="badge badge-secondary" style="margin:2px;">${k}</span>`).join('')}
        </div>
      </div>

      <div style="margin-top:24px;display:flex;gap:12px;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="switchTab('quiz')">
          Tester mes connaissances ❓
        </button>
        <button class="btn btn-secondary" onclick="switchTab('exercice')">
          Passer à l'exercice 🔢
        </button>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════
   QUIZ TAB
═══════════════════════════════════════ */
function renderQuiz(mod) {
  if (state.quizState.complete) {
    return renderQuizResults(mod);
  }
  return renderQuizQuestion(mod);
}

function renderQuizQuestion(mod) {
  const qs = state.quizState;
  const q = mod.quiz[qs.current];
  const total = mod.quiz.length;
  const letters = ['A', 'B', 'C', 'D'];

  const progressPct = Math.round((qs.current / total) * 100);

  return `
    <div class="quiz-card">
      <div class="quiz-progress-row">
        <span>Question ${qs.current + 1} / ${total}</span>
        <span>Score : ${qs.score} / ${qs.current}</span>
      </div>
      <div class="progress-bar" style="margin-bottom:24px;">
        <div class="progress-fill" style="width:${progressPct}%;"></div>
      </div>

      <p class="quiz-question-text">${q.q}</p>

      <ul class="quiz-options" id="quiz-options">
        ${q.options.map((opt, i) => `
          <li>
            <button
              class="quiz-option"
              id="quiz-opt-${i}"
              onclick="submitQuizAnswer('${mod.id}', ${qs.current}, ${i})"
              ${qs.answered ? 'disabled' : ''}
              aria-label="Option ${letters[i]}: ${opt}"
            >
              <span class="quiz-option-letter">${letters[i]}</span>
              <span>${opt}</span>
            </button>
          </li>
        `).join('')}
      </ul>

      ${qs.answered ? `
        <div class="quiz-correction" id="quiz-correction">
          💬 ${q.correction}
        </div>
        <div class="quiz-nav">
          <button class="btn btn-primary" onclick="nextQuizQuestion('${mod.id}')">
            ${qs.current + 1 < total ? 'Question suivante →' : 'Voir mes résultats 🏆'}
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

function renderQuizResults(mod) {
  const qs = state.quizState;
  const total = mod.quiz.length;
  const pct = Math.round((qs.score / total) * 100);
  let message, emoji;
  if (pct === 100) { message = 'Parfait ! Tu maîtrises complètement cette notion. 🌟'; emoji = '🏆'; }
  else if (pct >= 67) { message = 'Très bien ! Quelques points à consolider, mais tu es sur la bonne voie.'; emoji = '🎯'; }
  else if (pct >= 33) { message = 'Pas mal ! Relis le cours et retente l\'exercice pour consolider.'; emoji = '📖'; }
  else { message = 'C\'est un bon début. Relis le cours attentivement, l\'essentiel est de comprendre.'; emoji = '💪'; }

  return `
    <div class="quiz-results">
      <div style="font-size:4rem;margin-bottom:12px;">${emoji}</div>
      <div class="score-display">${qs.score}/${total}</div>
      <div class="score-fraction">${pct}% de bonnes réponses</div>
      <p class="score-message">${message}</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="resetQuiz('${mod.id}')">
          Recommencer le quiz 🔄
        </button>
        <button class="btn btn-secondary" onclick="switchTab('exercice')">
          Passer à l'exercice 🔢
        </button>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════
   EXERCICE TAB
═══════════════════════════════════════ */
function renderExercice(mod) {
  // Generate exercise data if not present
  if (!state.exerciceState.current) {
    state.exerciceState.current = mod.exercice.generate();
  }

  const ex = state.exerciceState.current;
  const es = state.exerciceState;

  return `
    <div class="card-exercise" id="exercice-card">
      <div class="exercice-statement">${ex.statement}</div>

      ${!es.solved ? `
        <div class="exercice-input-row">
          <input
            type="number"
            id="exercice-input"
            class="exercice-input"
            placeholder="Ta réponse…"
            step="any"
            aria-label="Entrer ta réponse"
            onkeydown="if(event.key==='Enter') submitExerciceAnswer('${mod.id}')"
          />
          ${ex.unit ? `<span class="exercice-unit">${ex.unit}</span>` : ''}
          <button class="btn btn-primary" onclick="submitExerciceAnswer('${mod.id}')">
            Valider ✓
          </button>
        </div>

        ${es.attempts > 0 ? `
          <div class="exercice-feedback feedback-error" id="exercice-feedback" role="alert">
            ${getErrorFeedback(mod, es.attempts)}
          </div>
        ` : ''}

        ${es.hintShown ? `
          <div class="hint-box" id="hint-box">
            <div class="hint-box-title">💡 Indice</div>
            <div>${ex.hint}</div>
          </div>
        ` : ''}

        ${es.attempts >= 2 && !es.hintShown ? `
          <div class="exercice-actions">
            <button class="btn btn-hint" onclick="showHint('${mod.id}')">
              💡 Voir un indice
            </button>
          </div>
        ` : ''}

        ${es.attempts >= 3 ? `
          <div style="margin-top:12px;">
            <button class="btn btn-secondary btn-sm" onclick="showSolution('${mod.id}')">
              📖 Voir la solution complète
            </button>
          </div>
        ` : ''}

        ${es.solutionShown ? renderSolutionSteps(ex.solution) : ''}

      ` : `
        <div class="exercice-feedback feedback-success" role="alert">
          🎉 Bravo ! Tu as trouvé la bonne réponse : <strong>${ex.answer}${ex.unit ? ' ' + ex.unit : ''}</strong>. La persévérance, ça paie !
        </div>
        ${renderSolutionSteps(ex.solution)}
        <div class="exercice-actions">
          <button class="btn btn-primary" onclick="generateNewExercice('${mod.id}')">
            Nouvel exercice 🎲
          </button>
          <button class="btn btn-secondary" onclick="switchTab('probleme')">
            Passer au problème 🔭
          </button>
        </div>
      `}

      ${!es.solved && !es.attempts ? `
        <div class="exercice-actions" style="margin-top:12px;">
          <button class="btn btn-secondary btn-sm" onclick="generateNewExercice('${mod.id}')">
            Autre exercice 🎲
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

function renderSolutionSteps(steps) {
  return `
    <div class="solution-reveal">
      <div style="font-weight:700;color:var(--secondary);font-size:0.85rem;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;">Correction détaillée</div>
      ${steps.map((s, i) => `
        <div class="step-solution">
          <span class="step-solution-num">${i + 1}</span>
          <span>${s}</span>
        </div>
      `).join('')}
    </div>
  `;
}

/* ═══════════════════════════════════════
   PROBLÈME TAB
═══════════════════════════════════════ */
function renderProbleme(mod) {
  const p = mod.probleme;
  const ps = state.problemeState;
  const allRevealed = ps.revealed >= p.tasks.length;

  return `
    <div class="probleme-content">
      <div class="probleme-context">
        <div class="probleme-context-label">📚 Mise en contexte</div>
        <div>${p.context}</div>
        ${p.schema ? `
          <div style="margin-top:12px;padding:10px 14px;background:color-mix(in srgb,var(--primary) 8%,var(--bg-card));border-radius:10px;font-size:0.85rem;color:var(--text-muted);font-family:'Inter',monospace;">
            🖼️ ${p.schema}
          </div>
        ` : ''}
      </div>

      <h2 style="font-family:'Poppins',sans-serif;font-size:1.1rem;font-weight:700;margin-bottom:16px;color:var(--primary);">
        🧩 Tâches guidées
      </h2>

      <ul class="probleme-tasks">
        ${p.tasks.map((task, i) => `
          <li class="task-item">
            <div class="task-header">
              <div>
                <div class="task-label">Tâche ${i + 1}</div>
                <div class="task-text">${task}</div>
              </div>
              ${ps.revealed <= i ? `
                <button
                  class="btn btn-hint btn-sm${ps.revealed < i ? ' btn-disabled' : ''}"
                  onclick="revealSolution('${mod.id}', ${i})"
                  style="flex-shrink:0;"
                  ${ps.revealed < i ? 'disabled' : ''}
                  aria-label="Voir la solution de la tâche ${i + 1}"
                >
                  Voir la solution 💡
                </button>
              ` : ''}
            </div>
            ${ps.revealed > i ? `
              <div class="task-solution">
                <div class="task-solution-label">✅ Correction</div>
                <div>${p.solutions[i]}</div>
              </div>
            ` : ''}
          </li>
        `).join('')}
      </ul>

      ${allRevealed ? `
        <div class="final-answer-box">
          🎯 <strong>Réponse finale :</strong> ${p.finalAnswer}
        </div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:20px;">
          ${mod.evaluation ? `
            <button class="btn btn-primary" onclick="switchTab('evaluation')">
              Passer à l'évaluation 📝
            </button>
          ` : `
            <button class="btn btn-primary" onclick="navigate('modules', {level: ${mod.level}})">
              Retour aux modules 📚
            </button>
          `}
          <button class="btn btn-secondary" onclick="switchTab('cours')">
            Revoir le cours 📖
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

/* ═══════════════════════════════════════
   EVALUATION TAB
═══════════════════════════════════════ */
function renderEvaluation(mod) {
  if (!mod.evaluation) {
    return `<div class="eval-placeholder">
      <div style="font-size:3rem;margin-bottom:16px;">📝</div>
      <p style="color:var(--text-muted);font-size:1rem;">
        L'évaluation type pour ce module sera bientôt disponible.
      </p>
    </div>`;
  }
  if (state.evaluationState.complete) {
    return renderEvaluationResults(mod);
  }
  return renderEvaluationQuestion(mod);
}

function renderEvaluationQuestion(mod) {
  const es = state.evaluationState;
  const questions = mod.evaluation.questions;
  const q = questions[es.current];
  const total = questions.length;
  const totalPoints = questions.reduce((s, q) => s + q.points, 0);
  const progressPct = Math.round((es.current / total) * 100);
  const letters = ['A', 'B', 'C', 'D'];

  return `
    <div class="eval-content">
      <div class="eval-header">
        <div class="eval-title-row">
          <span class="eval-badge">📝 ${mod.evaluation.title}</span>
          <span class="eval-duration">⏱ ${mod.evaluation.duration}</span>
        </div>
        <div style="font-size:0.85rem;color:var(--text-muted);margin-top:6px;">
          Barème : ${totalPoints} points
        </div>
      </div>

      <div class="eval-card" id="eval-card">
        <div class="eval-progress-row">
          <span>Question ${es.current + 1} / ${total}</span>
          <span>${q.points} ${pluralize('point', q.points)}</span>
        </div>
        <div class="progress-bar" style="margin-bottom:24px;">
          <div class="progress-fill" style="width:${progressPct}%;"></div>
        </div>

        <div class="eval-statement">${q.statement}</div>

        ${q.type === 'numeric' ? `
          <div class="exercice-input-row">
            <input type="number" id="eval-input" class="exercice-input"
                   placeholder="Ta réponse…" step="any"
                   onkeydown="if(event.key==='Enter') submitEvaluationAnswer('${mod.id}')" />
            ${q.unit ? `<span class="exercice-unit">${q.unit}</span>` : ''}
            <button class="btn btn-primary" onclick="submitEvaluationAnswer('${mod.id}')">
              Valider ✓
            </button>
          </div>
        ` : `
          <ul class="quiz-options">
            ${q.options.map((opt, i) => `
              <li>
                <button class="eval-option quiz-option" id="eval-opt-${i}"
                        onclick="submitEvaluationChoice('${mod.id}', ${i})">
                  <span class="quiz-option-letter">${letters[i]}</span>
                  <span>${opt}</span>
                </button>
              </li>
            `).join('')}
          </ul>
        `}
      </div>
    </div>
  `;
}

function renderEvaluationResults(mod) {
  const es = state.evaluationState;
  const questions = mod.evaluation.questions;
  const pct = es.totalPoints > 0 ? Math.round((es.score / es.totalPoints) * 100) : 0;

  let message, emoji;
  if (pct >= 90)      { message = 'Excellent ! Tu es prêt(e) pour cette évaluation.'; emoji = '🏆'; }
  else if (pct >= 70) { message = 'Bien joué ! Quelques points à revoir, mais c\'est solide.'; emoji = '🎯'; }
  else if (pct >= 50) { message = 'Pas mal ! Relis le cours et les exercices pour consolider.'; emoji = '📖'; }
  else                { message = 'Continue tes efforts ! Reprends le cours et les exercices, tu progresseras.'; emoji = '💪'; }

  return `
    <div class="eval-results">
      <div style="font-size:4rem;margin-bottom:12px;">${emoji}</div>
      <div class="score-display">${es.score}/${es.totalPoints}</div>
      <div class="score-fraction">${pct}% — ${es.answers.filter(a => a.correct).length}/${questions.length} questions correctes</div>
      <p class="score-message">${message}</p>

      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:24px;">
        <button class="btn btn-primary" onclick="resetEvaluation('${mod.id}')">
          Recommencer l'évaluation 🔄
        </button>
        <button class="btn btn-secondary" onclick="toggleEvaluationCorrection()">
          ${es.showCorrection ? 'Masquer' : 'Voir'} la correction 📖
        </button>
      </div>

      ${es.showCorrection ? `
        <div class="eval-corrections">
          ${questions.map((q, i) => `
            <div class="eval-correction-item ${es.answers[i].correct ? 'correct' : 'incorrect'}">
              <div class="eval-correction-header">
                <span class="eval-q-num">Q${i + 1}</span>
                <span>${es.answers[i].correct ? '✅' : '❌'}</span>
                <span class="eval-q-points">${es.answers[i].correct ? q.points : 0}/${q.points} ${pluralize('pt', q.points)}</span>
              </div>
              <div class="eval-q-statement">${q.statement}</div>
              <div class="eval-q-correction">${q.correction}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:24px;">
        <button class="btn btn-primary" onclick="navigate('modules', {level: ${mod.level}})">
          Retour aux modules 📚
        </button>
        <button class="btn btn-secondary" onclick="switchTab('cours')">
          Revoir le cours 📖
        </button>
      </div>
    </div>
  `;
}
