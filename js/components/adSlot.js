/* =========================================================
	 Spark Learning – components/adSlot.js
	 Emplacements publicitaires (pages de navigation uniquement,
	 jamais dans les onglets d'apprentissage actif).
	 Pour l'instant : simple placeholder visuel pour valider les
	 emplacements avant intégration réelle AdSense.
	 ========================================================= */

function renderAdSlot(placement, slotKey) {
	const slotId = slotKey && typeof AD_SLOTS !== 'undefined' ? AD_SLOTS[slotKey] : null;
	const adsReady = typeof ADS_ENABLED !== 'undefined' && ADS_ENABLED && slotId;

	if (adsReady) {
		return `
			<ins class="adsbygoogle" style="display:block" data-ad-slot-key="${slotKey}"
					 data-ad-client="${ADSENSE_CLIENT}" data-ad-slot="${slotId}"
					 data-ad-format="auto" data-full-width-responsive="true"></ins>
		`;
	}

	return `
		<div class="ad-slot-placeholder" data-ad-placement="${placement}" aria-hidden="true">
			<span class="ad-slot-placeholder-label">📢 Emplacement publicitaire (exemple) — ${placement}</span>
		</div>
	`;
}

// À appeler après chaque rendu de vue (comme renderMath()) : initialise les
// <ins class="adsbygoogle"> nouvellement injectés dans le DOM. Sans effet
// tant qu'aucun ad unit réel n'est rendu (ADS_ENABLED reste à false).
function initAdSlots() {
	if (typeof ADS_ENABLED === 'undefined' || !ADS_ENABLED) return;
	document.querySelectorAll('ins.adsbygoogle:not([data-adsbygoogle-status])').forEach(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (e) { /* silencieux */ }
	});
}
