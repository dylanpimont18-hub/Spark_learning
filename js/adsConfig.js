/* =========================================================
	 Spark Learning – adsConfig.js
	 Point unique de contrôle des emplacements publicitaires.
	 Tant que ADS_ENABLED est à false, renderAdSlot() affiche un
	 placeholder au lieu d'une vraie annonce (aucun ad unit créé
	 côté AdSense pour l'instant).
	 ========================================================= */

var ADS_ENABLED = false;
var ADSENSE_CLIENT = 'ca-pub-5320273649803132';

// Renseigner un data-ad-slot (créé dans le dashboard AdSense) par
// emplacement puis passer ADS_ENABLED à true pour activer les vraies pubs.
var AD_SLOTS = {
	home: '',
	subjects: '',
	modules: ''
};
