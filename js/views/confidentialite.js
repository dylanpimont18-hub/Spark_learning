/* =========================================================
	 Spark Learning – views/confidentialite.js
	 Politique de confidentialité (RGPD, exigence Google AdSense).
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

				<h2>2. Si tu crées un compte (élève ou enseignant)</h2>
				<p>La création d'un compte est optionnelle. Si tu choisis de t'inscrire, les données suivantes sont stockées de façon sécurisée sur les serveurs Google Firebase (Authentification et Firestore), hébergés en Europe ou aux États-Unis selon la configuration Google :</p>
				<ul>
					<li>Prénom, nom, et email ou numéro de téléphone (selon la méthode de connexion choisie)</li>
					<li>Rôle (élève ou enseignant) et statut (pour les enseignants, validation par un administrateur)</li>
					<li>Ta progression pédagogique (modules, quiz, exercices, évaluations) et tes séries de connexion</li>
					<li>Pour les élèves : les classes rejointes et les devoirs assignés par ton enseignant</li>
					<li>Pour les enseignants : les classes créées, la liste des élèves inscrits et leur progression</li>
				</ul>
				<p>Un enseignant ne peut consulter que la progression des élèves inscrits dans ses propres classes — jamais celle de l'ensemble des utilisateurs de la plateforme.</p>
				<p>La connexion par téléphone utilise l'envoi d'un code par SMS via Firebase (Google), protégé par <strong>Google reCAPTCHA</strong>, qui peut déposer ses propres cookies techniques.</p>

				<h2>3. Publicité</h2>
				<p>Pour financer l'hébergement et le développement de Spark Learning tout en gardant le contenu pédagogique 100&nbsp;% gratuit, le site peut afficher des publicités fournies par <strong>Google AdSense</strong>, uniquement sur les pages de navigation (accueil, liste des matières, liste des modules) — <strong>jamais</strong> pendant une session de cours, quiz, exercice ou évaluation.</p>
				<p>Ces publicités sont affichées en mode <strong>non personnalisé</strong> : elles sont basées sur le contenu de la page consultée, pas sur ton profil ou ton comportement de navigation. Google peut néanmoins déposer des cookies techniques nécessaires au fonctionnement de la publicité. Tu peux en savoir plus et gérer tes préférences sur <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">la page dédiée de Google</a>.</p>

				<h2>4. Formulaire de contact</h2>
				<p>Le formulaire "Nous contacter" (bug, remarque, question) transmet ton message à <strong>Formspree</strong>, un service tiers de traitement de formulaires, uniquement dans le but de te répondre. Aucune donnée n'est conservée au-delà de ce traitement.</p>

				<h2>5. Aucune vente de données</h2>
				<p>Spark Learning ne vend, ne loue et ne partage jamais tes données personnelles à des fins commerciales.</p>

				<h2>6. Tes droits</h2>
				<p>Conformément au RGPD, tu peux à tout moment demander l'accès, la rectification ou la suppression de tes données de compte, ou supprimer localement ta progression en vidant les données de site de ton navigateur. Pour toute demande liée à un compte, utilise le formulaire "Nous contacter" accessible depuis n'importe quelle page.</p>
			</div>
		</div>
	`;
}
