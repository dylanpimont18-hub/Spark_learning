/* =========================================================
   Spark Learning – components/contactPanel.js
   Panneau de contact flottant (signalement erreur/remarque/question)
   ========================================================= */
function toggleContactPanel() {
  const panel = document.getElementById('contact-panel');
  const btn = document.getElementById('contact-toggle');
  if (!panel || !btn) return;
  const isOpen = panel.classList.toggle('open');
  btn.classList.toggle('active', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
  panel.setAttribute('aria-hidden', !isOpen);
  if (isOpen) {
    panel.querySelector('.contact-message')?.focus();
  }
}

function closeContactPanel() {
  const panel = document.getElementById('contact-panel');
  const btn = document.getElementById('contact-toggle');
  if (!panel || !btn) return;
  panel.classList.remove('open');
  btn.classList.remove('active');
  btn.setAttribute('aria-expanded', 'false');
  panel.setAttribute('aria-hidden', 'true');
}

const _CONTACT_FORM_HTML = `
  <form class="contact-form" id="contact-form">
    <fieldset class="contact-categories">
      <legend class="sr-only">Type de message</legend>
      <label class="contact-cat">
        <input type="radio" name="contact-type" value="erreur" checked />
        <span class="contact-cat-chip">&#x1F41B; Une erreur</span>
      </label>
      <label class="contact-cat">
        <input type="radio" name="contact-type" value="remarque" />
        <span class="contact-cat-chip">&#x1F4AC; Une remarque</span>
      </label>
      <label class="contact-cat">
        <input type="radio" name="contact-type" value="question" />
        <span class="contact-cat-chip">&#x2753; Une question</span>
      </label>
    </fieldset>
    <textarea class="contact-message" id="contact-message" rows="4" placeholder="Ton message..." required></textarea>
    <button type="submit" class="btn btn-primary contact-send">Envoyer</button>
  </form>`;

function _restoreContactForm() {
  const panel = document.getElementById('contact-panel');
  if (!panel) return;
  const body = panel.querySelector('.contact-form') || panel.querySelector('.contact-success');
  if (body) body.outerHTML = _CONTACT_FORM_HTML;
  panel.querySelector('#contact-form')?.addEventListener('submit', handleContactSubmit);
}

function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const type = form.querySelector('input[name="contact-type"]:checked')?.value || 'question';
  const message = form.querySelector('.contact-message')?.value?.trim();
  if (!message) return;

  const sendBtn = form.querySelector('.contact-send');
  sendBtn.disabled = true;
  sendBtn.textContent = 'Envoi...';

  const labels = { erreur: 'Signalement d\'erreur', remarque: 'Remarque', question: 'Question' };
  const page = state.moduleId ? `Module : ${state.moduleId}` : `Page : ${state.view}`;

  fetch('https://formspree.io/f/xnjgyrjd', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      _subject: `Spark Learning — ${labels[type]}`,
      message: message,
      categorie: labels[type],
      page: page
    })
  })
  .then(r => r.json())
  .then(data => {
    if (data.ok) {
      const panel = document.getElementById('contact-panel');
      const formEl = panel.querySelector('.contact-form');
      formEl.outerHTML = '<div class="contact-success">Merci pour ton retour !</div>';
      setTimeout(() => { closeContactPanel(); setTimeout(_restoreContactForm, 300); }, 2000);
    } else {
      showToast('Erreur lors de l\'envoi. Réessaie.', 'error');
      sendBtn.disabled = false;
      sendBtn.textContent = 'Envoyer';
    }
  })
  .catch(() => {
    showToast('Erreur réseau. Vérifie ta connexion.', 'error');
    sendBtn.disabled = false;
    sendBtn.textContent = 'Envoyer';
  });
}
