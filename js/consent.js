/* =========================================================
   Spark Learning – consent.js
   Bannière de consentement cookies (RGPD/CNIL). Catégorie
   'ads' active aujourd'hui ; structure de données prête pour
   une future catégorie 'analytics' (Semaine 4 du plan).
   ========================================================= */

var Consent = {
  CATEGORY_ADS: 'ads',

  hasAdConsent() {
    const record = Storage.getConsent(this.CATEGORY_ADS);
    return !!(record && record.granted === true);
  },

  needsPrompt() {
    return Storage.getConsent(this.CATEGORY_ADS) === null;
  },

  init() {
    if (this.needsPrompt()) this.showBanner();
  },

  accept() {
    Storage.setConsent(this.CATEGORY_ADS, true);
    this.hideBanner();
    if (typeof initAdSlots === 'function') initAdSlots();
  },

  reject() {
    Storage.setConsent(this.CATEGORY_ADS, false);
    this.hideBanner();
  },

  openPreferences() {
    this.showBanner();
  },

  showBanner() {
    if (document.getElementById('consent-banner')) return;
    const el = document.createElement('div');
    el.id = 'consent-banner';
    el.className = 'consent-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Préférences de cookies');
    el.innerHTML = `
      <p class="consent-banner-text">
        Spark Learning peut afficher des publicités <strong>non personnalisées</strong> pour financer l'hébergement, sans jamais te suivre ni vendre tes données. Le contenu pédagogique reste 100&nbsp;% gratuit dans tous les cas.
        <button class="consent-banner-link" onclick="navigate('confidentialite')">En savoir plus</button>
      </p>
      <div class="consent-banner-actions">
        <button class="consent-btn consent-btn-refuse" onclick="Consent.reject()">Refuser</button>
        <button class="consent-btn consent-btn-accept" onclick="Consent.accept()">Accepter</button>
      </div>
    `;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('consent-banner-visible'));
  },

  hideBanner() {
    const el = document.getElementById('consent-banner');
    if (!el) return;
    el.classList.remove('consent-banner-visible');
    setTimeout(() => el.remove(), 300);
  }
};
