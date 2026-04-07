/* =========================================================
   Spark Learning – components/renderCours.js
   Rendu du contenu du cours
   ========================================================= */

function renderCours(mod) {
  const c = mod.cours;
  const subjectDef = getSubjectDef(mod.subject || 'maths');
  return `
    <div class="cours-content">
      <blockquote class="cours-intro">${c.intro}</blockquote>

      ${c.definitions && c.definitions.length ? `
      <div class="cours-section">
        <h2 class="cours-section-title">📖 Vocabulaire clé</h2>
        <div class="definitions-grid">
          ${c.definitions.map(d => `
            <div class="definition-item">
              <strong class="definition-term">${d.term}</strong>
              <span class="definition-sep">:</span>
              <span class="definition-def">${d.def}</span>
            </div>
          `).join('')}
        </div>
      </div>
      ` : ''}

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

      ${c.example ? `
      <div class="cours-section">
        <h2 class="cours-section-title">✅ Exemple résolu</h2>
        <div class="worked-example">
          <div class="worked-example-statement">
            <strong>Énoncé :</strong> ${c.example.statement}
          </div>
          <div class="worked-example-steps">
            <strong>Démarche :</strong>
            <ol>
              ${c.example.steps.map(s => `<li>${s}</li>`).join('')}
            </ol>
          </div>
          <div class="worked-example-answer">
            <strong>Réponse :</strong> ${c.example.answer}
          </div>
        </div>
      </div>
      ` : ''}

      <div class="cours-section">
        <h2 class="cours-section-title">${subjectDef.formulasIcon} ${subjectDef.formulasLabel}</h2>
        <div class="formulas-grid">
          ${c.formulas.map(f => `<div class="formula-chip">${f}</div>`).join('')}
        </div>
      </div>

      ${c.diagram ? `
      <div class="cours-section">
        <h2 class="cours-section-title">🎨 Illustration</h2>
        <div class="cours-diagram">${c.diagram}</div>
      </div>
      ` : ''}

      <div class="cours-section">
        <h2 class="cours-section-title">❌ Une erreur, une suggestion</h2>
        ${renderErreurConseil(c.piege)}
        <button class="teacher-suggest-btn" onclick="openTeacherErrorModal('${mod.id}')" aria-label="Proposer un piège">
          👤‍🏫 Proposer un piège (Espace Enseignant)
        </button>
      </div>

      ${c.recap && c.recap.length ? `
      <div class="cours-section">
        <h2 class="cours-section-title">💡 À retenir</h2>
        <div class="recap-box">
          <ul>
            ${c.recap.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      </div>
      ` : ''}

      <div class="cours-section">
        <h2 class="cours-section-title">${subjectDef.applicationIcon} ${subjectDef.applicationLabel}</h2>
        <div style="padding:14px 18px;background:color-mix(in srgb,var(--secondary) 10%, var(--bg-card));border-radius:var(--radius);border:1px solid color-mix(in srgb,var(--secondary) 25%,transparent);font-size:0.92rem;line-height:1.6;">
          <strong>${subjectDef.applicationQuestion}</strong><br/>
          ${mod.physics}<br/><br/>
          <em>Mots-clés associés :</em> ${mod.keywords.map(k => `<span class="badge badge-secondary" style="margin:2px;">${k}</span>`).join('')}
        </div>
      </div>

      <div style="margin-top:24px;display:flex;gap:12px;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="switchTab('quiz')">
          Tester mes connaissances
        </button>
        <button class="btn btn-secondary" onclick="switchTab('exercice')">
          Passer à l'exercice
        </button>
        <button class="btn btn-secondary" onclick="navigate('flashcards', {moduleId: '${mod.id}'})">
          Flashcards
        </button>
        <button class="btn btn-outline" onclick="printFiche('${mod.id}')">
          Imprimer la fiche
        </button>
      </div>
    </div>
  `;
}
