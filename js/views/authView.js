/* =========================================================
   Spark Learning – authView.js
   Page Connexion.
   L'inscription publique a été retirée (2026-10-12) : les comptes
   restants (enseignants, élèves de classe, tutorat) sont attribués
   par l'administrateur ; le site reste utilisable sans compte.
   ========================================================= */

var AuthView = {

  render: function(fromGuest) {
    var app = document.getElementById('app');
    app.innerHTML =
      '<div class="auth-overlay">' +
        '<div class="auth-card">' +
          (fromGuest ? '<button class="auth-close" aria-label="Continuer sans compte" title="Continuer sans compte" onclick="AuthView._closeToGuest()">✕</button>' : '') +
          '<img src="images/Logo_noir.jpeg" alt="Spark Learning" class="auth-logo" />' +
          '<h1 class="auth-title">Connexion</h1>' +
          '<p class="auth-subtitle">Espace réservé aux comptes existants (enseignants, classes, tutorat). Tout le contenu reste accessible sans compte.</p>' +
          '<div id="auth-content"></div>' +
        '</div>' +
      '</div>';
    this._renderLogin();
  },

  renderPending: function() {
    var app = document.getElementById('app');
    app.innerHTML =
      '<div class="auth-overlay">' +
        '<div class="auth-card">' +
          '<img src="images/Logo_noir.jpeg" alt="Spark Learning" class="auth-logo" />' +
          '<div class="auth-pending">' +
            '<div class="auth-pending-icon">⏳</div>' +
            '<h2>Compte en attente de validation</h2>' +
            '<p>Votre demande de compte enseignant a bien été reçue.<br/>' +
            "L'administrateur validera votre accès prochainement.</p>" +
            '<button class="auth-link" onclick="AuthService.signOut().then(function(){ AuthView.render(); })">Se déconnecter</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  },

  _closeToGuest: function() {
    navigate('home');
  },

  /* ══ LOGIN ══ */
  _renderLogin: function() {
    document.getElementById('auth-content').innerHTML =
      '<form id="login-form" novalidate onsubmit="AuthView._loginEmail(); return false;">' +
        '<div id="login-error" role="alert" aria-live="assertive"></div>' +
        '<div class="auth-field"><label class="auth-label" for="login-email">Email</label>' +
        '<input class="auth-input" id="login-email" name="email" type="email" autocomplete="email" placeholder="prenom@exemple.fr" /></div>' +
        '<div class="auth-field"><label class="auth-label" for="login-password">Mot de passe</label>' +
        '<input class="auth-input" id="login-password" name="password" type="password" autocomplete="current-password" placeholder="••••••••" /></div>' +
        '<button type="submit" class="auth-btn-primary" id="login-submit">Se connecter</button>' +
      '</form>';
  },

  _loginEmail: async function() {
    var email = document.getElementById('login-email').value.trim();
    var password = document.getElementById('login-password').value;
    if (!email || !password) return AuthView._showError('login-error', 'Remplissez tous les champs.');
    var btn = document.getElementById('login-submit');
    if (btn) { btn.disabled = true; btn.textContent = 'Connexion…'; }
    try {
      await AuthService.signInWithEmail(email, password);
      // onAuthStateChanged dans app.js gère la redirection
    } catch (e) {
      AuthView._showError('login-error', 'Email ou mot de passe incorrect.');
      if (btn) { btn.disabled = false; btn.textContent = 'Se connecter'; }
    }
  },

  _showError: function(containerId, message) {
    var el = document.getElementById(containerId);
    if (el) el.innerHTML = '<div class="auth-error">' + message + '</div>';
  }
};
