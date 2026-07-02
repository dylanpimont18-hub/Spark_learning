/* =========================================================
	 Spark Learning – components/adSlot.js
	 Emplacements publicitaires (pages de navigation uniquement,
	 jamais dans les onglets d'apprentissage actif).
	 Le rendu d'une vraie pub exige ADS_ENABLED=true, un slot ID
	 configuré, ET un consentement cookies explicite (js/consent.js).
	 ========================================================= */

function renderAdSlot(placement, slotKey) {
	const slotId = slotKey && typeof AD_SLOTS !== 'undefined' ? AD_SLOTS[slotKey] : null;
	const adsEnabled = typeof ADS_ENABLED !== 'undefined' && ADS_ENABLED && slotId;

	if (!adsEnabled) {
		return `
			<div class="ad-slot-placeholder" data-ad-placement="${placement}" aria-hidden="true">
				<span class="ad-slot-placeholder-label">📢 Emplacement publicitaire (exemple) — ${placement}</span>
			</div>
		`;
	}

	// ADS_ENABLED + slot configuré, mais pas de vraie pub sans consentement explicite
	const hasConsent = typeof Consent !== 'undefined' && Consent.hasAdConsent();
	if (!hasConsent) return '';

	return `
		<ins class="adsbygoogle" style="display:block" data-ad-slot-key="${slotKey}"
				 data-ad-client="${ADSENSE_CLIENT}" data-ad-slot="${slotId}"
				 data-ad-format="auto" data-full-width-responsive="true"></ins>
	`;
}

// À appeler après chaque rendu de vue (comme renderMath()) : initialise les
// <ins class="adsbygoogle"> nouvellement injectés dans le DOM. Sans effet
// tant qu'ADS_ENABLED est à false OU que le consentement n'a pas été donné.
function initAdSlots() {
	if (typeof ADS_ENABLED === 'undefined' || !ADS_ENABLED) return;
	if (typeof Consent === 'undefined' || !Consent.hasAdConsent()) return;
	document.querySelectorAll('ins.adsbygoogle:not([data-adsbygoogle-status])').forEach(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (e) { /* silencieux */ }
	});
}
