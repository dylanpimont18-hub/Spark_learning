/* =========================================================
	 Spark Learning – hero3d.js
	 Couche 3D de l'accueil. Trois effets, tous décoratifs :
	   1. la bannière rotative du hero (prisme à trois faces) ;
	   2. la profondeur des formules qui flottent dans le hero ;
	   3. l'inclinaison des cartes au survol.

	 Appelé par render() (js/app.js) après chaque rendu de vue :
	 la SPA recrée le DOM à chaque navigation, donc initHero3D()
	 doit être ré-exécutable sans empiler de timers ni d'écouteurs.
	 ========================================================= */

(function () {
	'use strict';

	var DELAI_BANNIERE = 4000;   // rotation automatique, en ms

	var timer = null;            // intervalle de la bannière en cours
	var floats = null;           // .hero-math-floats du rendu courant (null hors accueil)
	var ecouteursGlobauxPoses = false;

	/* Le décor du hero suit la souris avec du retard, et se décale au
	   scroll. Comme les formules sont à des profondeurs différentes, la
	   perspective les déplace de façon inégale : c'est ce qui donne le relief. */
	var cible = { x: 0, y: 0 };
	var courant = { x: 0, y: 0 };
	var decalage = 0;
	var raf = null;

	function mouvementReduit() {
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}
	function pointeurFin() {
		return window.matchMedia('(pointer: fine)').matches;
	}

	/* ── 1. Décor du hero ─────────────────────────────────────── */

	function dessinerDecor() {
		raf = null;
		if (!floats) return;

		courant.x += (cible.x - courant.x) * 0.055;
		courant.y += (cible.y - courant.y) * 0.055;

		floats.style.transform =
			'translate3d(0,' + decalage.toFixed(1) + 'px,0)' +
			' rotateY(' + courant.x.toFixed(2) + 'deg)' +
			' rotateX(' + courant.y.toFixed(2) + 'deg)';

		var stabilise = Math.abs(cible.x - courant.x) < 0.01
			&& Math.abs(cible.y - courant.y) < 0.01;
		if (!stabilise) relancerDecor();
	}

	function relancerDecor() {
		if (raf === null && floats) raf = requestAnimationFrame(dessinerDecor);
	}

	// Posés une seule fois pour toute la session : ils ne font rien
	// tant que `floats` est null, c'est-à-dire hors de l'accueil.
	function poserEcouteursGlobaux() {
		if (ecouteursGlobauxPoses) return;
		ecouteursGlobauxPoses = true;

		window.addEventListener('pointermove', function (e) {
			if (!floats) return;
			cible.x = (e.clientX / window.innerWidth - 0.5) * 5;      // 5° max
			cible.y = (e.clientY / window.innerHeight - 0.5) * -3.5;  // 3,5° max
			relancerDecor();
		}, { passive: true });

		// retour au repos quand le curseur quitte la fenêtre
		document.documentElement.addEventListener('pointerleave', function () {
			cible.x = 0; cible.y = 0;
			relancerDecor();
		});

		var scrollEnAttente = false;
		window.addEventListener('scroll', function () {
			if (!floats || scrollEnAttente) return;
			scrollEnAttente = true;
			requestAnimationFrame(function () {
				scrollEnAttente = false;
				decalage = Math.min(window.scrollY, 700) * 0.22;
				dessinerDecor();
			});
		}, { passive: true });
	}

	/* ── 2. Bannière rotative ─────────────────────────────────── */

	function arreterBanniere() {
		if (timer) { clearInterval(timer); timer = null; }
	}

	function initBanniere() {
		var tambour = document.getElementById('promoDrum');
		if (!tambour) return;

		var promo = document.getElementById('promo');
		var faces = tambour.querySelectorAll('.promo-face');
		var puces = promo.querySelectorAll('.promo-dot');
		var boutonPause = document.getElementById('promoPause');
		if (!faces.length) return;

		var index = 0;
		var enPause = false;

		function afficher(i) {
			index = (i + faces.length) % faces.length;
			tambour.style.transform = 'rotateX(' + (-120 * index) + 'deg)';

			faces.forEach(function (face, n) {
				var active = n === index;
				face.classList.toggle('is-active', active);
				face.setAttribute('aria-hidden', active ? 'false' : 'true');
				// un lien invisible ne doit pas être atteignable au clavier
				var lien = face.querySelector('.promo-link');
				if (lien) lien.tabIndex = active ? 0 : -1;
			});
			puces.forEach(function (puce, n) {
				puce.setAttribute('aria-selected', n === index ? 'true' : 'false');
			});
		}

		function demarrer() {
			if (!timer && !enPause) {
				timer = setInterval(function () { afficher(index + 1); }, DELAI_BANNIERE);
			}
		}

		puces.forEach(function (puce, n) {
			puce.addEventListener('click', function () {
				arreterBanniere(); afficher(n); demarrer();
			});
		});

		if (boutonPause) {
			boutonPause.addEventListener('click', function () {
				enPause = !enPause;
				boutonPause.textContent = enPause ? '▶' : '⏸';
				boutonPause.setAttribute('aria-label',
					enPause ? 'Reprendre le défilement' : 'Mettre le défilement en pause');
				if (enPause) arreterBanniere(); else demarrer();
			});
		}

		// on n'escamote pas un message pendant qu'il est lu ou visé
		promo.addEventListener('pointerenter', arreterBanniere);
		promo.addEventListener('pointerleave', demarrer);
		promo.addEventListener('focusin', arreterBanniere);
		promo.addEventListener('focusout', demarrer);
		document.addEventListener('visibilitychange', function () {
			if (document.hidden) arreterBanniere(); else demarrer();
		});

		afficher(0);
		demarrer();
	}

	/* ── 3. Inclinaison des cartes ────────────────────────────── */

	function initCartes() {
		document.querySelectorAll('.feature-card').forEach(function (carte) {
			var rx = 0, ry = 0, enAttente = null;

			function appliquer() {
				enAttente = null;
				// on conserve le translateY(-4px) du survol d'origine
				carte.style.transform = 'translateY(-4px) rotateY(' + ry.toFixed(2) + 'deg)'
					+ ' rotateX(' + rx.toFixed(2) + 'deg)';
			}

			carte.addEventListener('pointerenter', function () {
				carte.classList.add('is-tilting');   // coupe la transition pendant le geste
				carte.style.willChange = 'transform';
			});

			carte.addEventListener('pointermove', function (e) {
				var r = carte.getBoundingClientRect();
				var px = (e.clientX - r.left) / r.width;
				var py = (e.clientY - r.top) / r.height;

				ry = (px - 0.5) * 6;
				rx = (py - 0.5) * -6;

				carte.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
				carte.style.setProperty('--my', (py * 100).toFixed(1) + '%');

				if (enAttente === null) enAttente = requestAnimationFrame(appliquer);
			}, { passive: true });

			carte.addEventListener('pointerleave', function () {
				if (enAttente !== null) { cancelAnimationFrame(enAttente); enAttente = null; }
				carte.classList.remove('is-tilting');   // la transition reprend : retour en douceur
				carte.style.transform = '';
				carte.style.willChange = '';
			});
		});
	}

	/* ── Point d'entrée ───────────────────────────────────────── */

	window.initHero3D = function () {
		// Le rendu précédent a disparu : on repart d'un état propre.
		arreterBanniere();
		floats = null;
		decalage = 0;
		courant.x = 0; courant.y = 0;
		cible.x = 0; cible.y = 0;

		var reduit = mouvementReduit();

		// La bannière fonctionne aussi au doigt ; seul le mouvement
		// réduit la fige (le CSS empile alors les trois messages).
		if (!reduit) initBanniere();

		// Relief et parallaxe : uniquement à la souris.
		if (reduit || !pointeurFin()) return;

		floats = document.querySelector('.hero-math-floats');
		if (floats) {
			poserEcouteursGlobaux();
			decalage = Math.min(window.scrollY, 700) * 0.22;
			relancerDecor();
		}

		initCartes();
	};
})();
