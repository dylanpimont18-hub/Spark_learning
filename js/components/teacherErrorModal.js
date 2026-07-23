/* =========================================================
   Spark Learning – components/teacherErrorModal.js
   Modale enseignant : proposer un piège fréquent sur un module
   ========================================================= */
function openTeacherErrorModal(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return;

  const piege = mod.cours && mod.cours.piege ? mod.cours.piege : 'Aucun piège référencé.';

  const overlay = document.createElement('div');
  overlay.className = 'teacher-modal-overlay';
  overlay.id = 'teacher-modal';
  overlay.onclick = (e) => { if (e.target === overlay) closeTeacherErrorModal(); };
  overlay.innerHTML = `
    <div class="teacher-modal">
      <button class="teacher-modal-close" onclick="closeTeacherErrorModal()" aria-label="Fermer">&times;</button>
      <h3>Proposer un piège (Espace Enseignant)</h3>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:var(--space-md);">Module : <strong>${mod.title}</strong></p>
      <div class="teacher-modal-context">
        <strong>Piège actuel :</strong><br>${piege}
      </div>
      <label style="font-weight:600;font-size:0.9rem;display:block;margin-bottom:6px;">Votre suggestion :</label>
      <textarea id="teacher-error-text" placeholder="Décrivez l'erreur fréquente que vous observez chez vos élèves…" aria-label="Suggestion d'erreur"></textarea>
      <button class="btn btn-primary" onclick="submitTeacherError('${moduleId}')" style="width:100%;">Envoyer</button>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector('textarea').focus();
}

function closeTeacherErrorModal() {
  const modal = document.getElementById('teacher-modal');
  if (modal) modal.remove();
}

function submitTeacherError(moduleId) {
  const textarea = document.getElementById('teacher-error-text');
  if (!textarea) return;
  if (!textarea.value.trim()) {
    textarea.style.borderColor = 'var(--error)';
    return;
  }
  const mod = getModule(moduleId);
  const modTitle = mod ? mod.title : moduleId;

  const btn = document.querySelector('#teacher-modal .btn-primary');
  if (btn) { btn.disabled = true; btn.textContent = 'Envoi…'; }

  fetch('https://formspree.io/f/xnjgyrjd', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      _subject: 'Piège enseignant — ' + modTitle,
      message: textarea.value.trim(),
      module: moduleId,
      type: 'piege-enseignant'
    })
  })
  .then(r => r.json())
  .then(data => {
    if (data.ok) {
      showToast('Merci pour votre contribution !', 'success');
      closeTeacherErrorModal();
    } else {
      showToast('Erreur lors de l\'envoi.', 'error');
      if (btn) { btn.disabled = false; btn.textContent = 'Envoyer'; }
    }
  })
  .catch(() => {
    showToast('Erreur réseau.', 'error');
    if (btn) { btn.disabled = false; btn.textContent = 'Envoyer'; }
  });
}
