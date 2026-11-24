/* =========================================================
	 Spark Learning – views/confidentialite.js
	 Politique de confidentialité (RGPD).
	 ========================================================= */

function renderConfidentialite() {
	return `
		<div class="container legal-page">
			<div class="page-header">
				<button class="btn-back" onclick="navigate('home')" aria-label="Retour à l'accueil">← Accueil</button>
				<h1 class="page-title">Politique de confidentialité</h1>
				<p class="page-subtitle">Dernière mise à jour : juillet 2026</p>
			</div>

			<div class="legal-content">
				<p>Spark Learning est édité par Dylan Pimont. Cette page explique quelles données sont collectées, pourquoi, et comment tu peux les contrôler.</p>

				<h2>1. Utilisation sans compte</h2>
				<p>Spark Learning est utilisable <strong>sans création de compte</strong>. Ta progression, tes statistiques, ton historique de recherche et tes préférences (thème, etc.) sont enregistrés uniquement dans le navigateur via <strong>localStorage</strong>. Ces données ne quittent jamais ton appareil et ne sont jamais transmises à nos serveurs.</p>

				<h2>2. Comptes d'administration</h2>
				<p>Il n'est pas possible de créer un compte sur Spark Learning. Seuls quelques comptes d'administration, attribués directement par l'éditeur du site, existent pour gérer la plateforme (annonces, maintenance). Pour ces comptes uniquement, le nom, l'email et le rôle sont stockés de façon sécurisée sur les serveurs Google Firebase (Authentification et Firestore).</p>


				<h2>3. Formulaire de contact</h2>
				<p>Les formulaires "Nous contacter" — la bulle flottante accessible depuis n'importe quelle page (bug, remarque, question) et la page dédiée <strong>/contact</strong> (question, erreur, proposition, partenariat, presse) — transmettent ton message à <strong>Formspree</strong>, un service tiers de traitement de formulaires, uniquement dans le but de te répondre. Aucune donnée n'est conservée au-delà de ce traitement.</p>
				<p>Les vidéos des TD de la page <strong>BTS FED</strong> peuvent être lues avec le lecteur <strong>YouTube</strong> en mode confidentialité renforcée (youtube-nocookie.com). Ce lecteur n'est chargé que lorsque tu lances une vidéo : YouTube (Google) peut alors recevoir ton adresse IP et des informations de lecture, selon sa propre politique de confidentialité. Tant que tu ne cliques pas, aucune donnée ne lui est transmise.</p>

				<h2>4. Aucune vente de données</h2>
				<p>Spark Learning ne vend, ne loue et ne partage jamais tes données personnelles à des fins commerciales.</p>

				<h2>5. Tes droits</h2>
				<p>Conformément au RGPD, tu peux à tout moment demander l'accès, la rectification ou la suppression de tes données de compte, ou supprimer localement ta progression en vidant les données de site de ton navigateur. Pour toute demande liée à un compte, utilise le formulaire "Nous contacter" accessible depuis n'importe quelle page.</p>
			</div>
		</div>
	`;
}
