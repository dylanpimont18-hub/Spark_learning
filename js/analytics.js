/* =========================================================
	 Spark Learning – analytics.js
	 Chargement de Google Analytics 4 (gtag.js) et suivi des pages
	 vues. Le site est une SPA (routage pushState) : GA4 ne détecte
	 pas seul les changements de route, chaque navigation doit donc
	 déclencher un événement page_view manuel via trackPageView().

	 Aucun chargement sans ANALYTICS_ENABLED=true (js/analyticsConfig.js)
	 ET consentement explicite (Consent.hasAdConsent()).
	 ========================================================= */

function loadAnalytics() {
	if (typeof ANALYTICS_ENABLED === 'undefined' || !ANALYTICS_ENABLED || !GA_MEASUREMENT_ID) return;
	if (typeof Consent === 'undefined' || !Consent.hasAdConsent()) return;
	if (window._gaLoaded) return;
	window._gaLoaded = true;

	var script = document.createElement('script');
	script.async = true;
	script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
	document.head.appendChild(script);

	window.dataLayer = window.dataLayer || [];
	window.gtag = function () { window.dataLayer.push(arguments); };
	window.gtag('js', new Date());
	// send_page_view désactivé : trackPageView() envoie le premier page_view
	// comme tous les suivants, pour éviter un double comptage au chargement.
	window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
}

// Appelé à chaque navigation (voir js/app.js) et juste après acceptation
// du consentement (voir js/consent.js).
function trackPageView() {
	if (typeof ANALYTICS_ENABLED === 'undefined' || !ANALYTICS_ENABLED || !GA_MEASUREMENT_ID) return;
	if (typeof Consent === 'undefined' || !Consent.hasAdConsent()) return;

	loadAnalytics();
	if (typeof window.gtag !== 'function') return;

	window.gtag('event', 'page_view', {
		page_path: window.location.pathname,
		page_title: document.title,
		page_location: window.location.href
	});
}
