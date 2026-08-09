/* =========================================================
   Spark Learning – views/contact.js
   Page de contact dédiée (question, erreur, proposition, partenariat, presse)
   ========================================================= */

const _CONTACT_PAGE_CATEGORIES = [
  { value: 'question', emoji: '🎓', label: 'Question pédagogique' },
  { value: 'erreur', emoji: '🐛', label: 'Signaler une erreur' },
  { value: 'proposition', emoji: '💼', label: 'Proposition commerciale' },
  { value: 'partenariat', emoji: '🤝', label: 'Partenariat (école, éditeur...)' },
  { value: 'presse', emoji: '📰', label: 'Presse & médias' }
];

const _CONTACT_PAGE_LABELS = _CONTACT_PAGE_CATEGORIES.reduce((acc, c) => {
  acc[c.value] = c.label;
  return acc;
}, {});

function renderContact() {
  const chips = _CONTACT_PAGE_CATEGORIES.map((c, i) => `
    <label class="contact-cat">
      <input type="radio" name="contact-page-type" value="${c.value}" ${i === 0 ? 'checked' : ''} />
      <span class="contact-cat-chip">${c.emoji} ${c.label}</span>
    </label>`).join('');

  return `
    <div class="container legal-page">
      <div class="page-header">
        <button class="btn-back" onclick="navigate('home')" aria-label="Retour à l'accueil">← Accueil</button>
        <h1 class="page-title">Nous contacter</h1>
        <p class="page-subtitle">Une question, une remarque, une proposition&nbsp;? Je te réponds personnellement — Dylan.</p>
      </div>

      <form class="contact-page-form" id="contact-page-form" onsubmit="handleContactPageSubmit(event)">
        <div class="contact-page-field">
          <label class="contact-page-label" for="contact-page-name">Nom</label>
          <input class="contact-page-input" id="contact-page-name" type="text" required />
        </div>
        <div class="contact-page-field">
          <label class="contact-page-label" for="contact-page-email">Email</label>
          <input class="contact-page-input" id="contact-page-email" type="email" required />
        </div>
        <fieldset class="contact-categories">
          <legend class="sr-only">Motif du message</legend>
          ${chips}
        </fieldset>
        <div class="contact-page-field">
          <label class="contact-page-label" for="contact-page-message">Message</label>
          <textarea class="contact-message" id="contact-page-message" rows="6" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary contact-send">Envoyer</button>
      </form>
    </div>
  `;
}

function handleContactPageSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('#contact-page-name').value.trim();
  const email = form.querySelector('#contact-page-email').value.trim();
  const type = form.querySelector('input[name="contact-page-type"]:checked')?.value || 'question';
  const message = form.querySelector('#contact-page-message').value.trim();
  if (!name || !email || !message) return;

  const sendBtn = form.querySelector('.contact-send');
  sendBtn.disabled = true;
  sendBtn.textContent = 'Envoi...';

  fetch('https://formspree.io/f/xnjgyrjd', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      _subject: `Spark Learning — ${_CONTACT_PAGE_LABELS[type]}`,
      name: name,
      email: email,
      categorie: _CONTACT_PAGE_LABELS[type],
      message: message,
      page: 'Page contact'
    })
  })
  .then(r => r.json())
  .then(data => {
    if (data.ok) {
      form.outerHTML = '<div class="contact-success contact-page-success">Merci pour ton message&nbsp;! Je te réponds au plus vite à l\'adresse indiquée.</div>';
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
