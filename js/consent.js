/* =========================================================
   Spark Learning – consent.js
   Bannière de consentement cookies (RGPD/CNIL). Un seul
   consentement global (catégorie 'ads') couvre à la fois la
   pub et la mesure d'audience (Google Analytics, analytics.js).
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
    if (this.needsPrompt()) {
      this.showBanner();
      return;
    }
    // Le choix est déjà fait : on retire une bannière éventuellement DÉJÀ présente dans le
    // HTML servi. Cas réel : les pages pré-rendues (scripts/prerender.js) sont capturées
    // depuis un profil navigateur neuf, donc la bannière peut être figée dans le HTML
    // statique ; sans ce nettoyage, un visiteur ayant déjà accepté/refusé la reverrait à
    // chaque chargement de page et croirait son choix ignoré. Le pré-rendu assainit déjà
    // le HTML capturé, mais ce filet protège aussi les pages déjà déployées.
    const stale = document.getElementById('consent-banner');
    if (stale) {
      stale.remove();
      document.documentElement.style.setProperty('--consent-banner-h', '0px');
    }
  },

  accept() {
    Storage.setConsent(this.CATEGORY_ADS, true);
    this.hideBanner();
    if (typeof trackPageView === 'function') trackPageView();
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
        Spark Learning mesure l'audience du site (Google Analytics) pour améliorer le contenu, sans jamais te suivre ni vendre tes données. Le contenu pédagogique reste 100&nbsp;% gratuit et sans publicité.
        <button class="consent-banner-link" onclick="navigate('confidentialite')">En savoir plus</button>
      </p>
      <div class="consent-banner-actions">
        <button class="consent-btn consent-btn-refuse" onclick="Consent.reject()">Refuser</button>
        <button class="consent-btn consent-btn-accept" onclick="Consent.accept()">Accepter</button>
      </div>
    `;
    document.body.appendChild(el);
    requestAnimationFrame(() => {
      el.classList.add('consent-banner-visible');
      document.documentElement.style.setProperty('--consent-banner-h', el.offsetHeight + 'px');
    });
  },

  hideBanner() {
    const el = document.getElementById('consent-banner');
    if (!el) return;
    el.classList.remove('consent-banner-visible');
    document.documentElement.style.setProperty('--consent-banner-h', '0px');
    setTimeout(() => el.remove(), 300);
  }
};
