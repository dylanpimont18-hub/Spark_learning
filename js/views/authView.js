/* =========================================================
   Spark Learning – authView.js
   Pages Inscription / Connexion
   ========================================================= */

var AuthView = {
  _recaptchaVerifier: null,
  _confirmationResult: null,
  _selectedRole: 'student',
  _selectedMethod: 'phone',
  _joinedClasses: [],

  render: function(fromGuest) {
    var app = document.getElementById('app');
    app.innerHTML =
      '<div class="auth-overlay">' +
        '<div class="auth-card">' +
          (fromGuest ? '<button class="auth-close" aria-label="Continuer sans compte" title="Continuer sans compte" onclick="AuthView._closeToGuest()">✕</button>' : '') +
          '<img src="images/Logo_noir.jpeg" alt="Spark Learning" class="auth-logo" />' +
          '<h1 class="auth-title">Spark Learning</h1>' +
          '<div class="auth-tabs">' +
            '<button class="auth-tab active" data-tab="login" onclick="AuthView._switchTab(\'login\')">Connexion</button>' +
            '<button class="auth-tab" data-tab="register" onclick="AuthView._switchTab(\'register\')">Inscription</button>' +
          '</div>' +
          '<div id="auth-content"></div>' +
        '</div>' +
      '</div>' +
      '<div id="recaptcha-container"></div>';
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

  _switchTab: function(tab) {
    document.querySelectorAll('.auth-tab').forEach(function(t) {
      t.classList.toggle('active', t.dataset.tab === tab);
    });
    if (tab === 'login') AuthView._renderLogin();
    else AuthView._renderRegister();
  },

  /* ══ LOGIN ══ */
  _renderLogin: function() {
    this._selectedMethod = 'phone';
    document.getElementById('auth-content').innerHTML =
      '<div class="auth-method-toggle">' +
        '<button class="auth-method-btn active" id="method-phone" onclick="AuthView._setLoginMethod(\'phone\')">📱 Téléphone</button>' +
        '<button class="auth-method-btn" id="method-email" onclick="AuthView._setLoginMethod(\'email\')">✉️ Email</button>' +
      '</div>' +
      '<div id="login-form"></div>';
    this._renderLoginPhone();
  },

  _setLoginMethod: function(method) {
    this._selectedMethod = method;
    document.querySelectorAll('.auth-method-btn').forEach(function(b) { b.classList.remove('active'); });
    document.getElementById('method-' + method).classList.add('active');
    if (method === 'phone') AuthView._renderLoginPhone();
    else AuthView._renderLoginEmail();
  },

  _renderLoginPhone: function() {
    document.getElementById('login-form').innerHTML =
      '<div id="login-error"></div>' +
      '<div id="phone-step">' +
        '<div class="auth-field"><label class="auth-label">Numéro de téléphone</label>' +
        '<input class="auth-input" id="login-phone" type="tel" placeholder="+33 6 00 00 00 00" /></div>' +
        '<button class="auth-btn-primary" onclick="AuthView._loginSendOTP()">Envoyer le code SMS</button>' +
      '</div>' +
      '<div id="otp-step" style="display:none">' +
        '<div class="auth-field"><label class="auth-label">Code reçu par SMS</label>' +
        '<input class="auth-input" id="login-otp" type="text" placeholder="123456" maxlength="6" /></div>' +
        '<button class="auth-btn-primary" onclick="AuthView._loginConfirmOTP()">Confirmer</button>' +
      '</div>';
  },

  _renderLoginEmail: function() {
    document.getElementById('login-form').innerHTML =
      '<div id="login-error"></div>' +
      '<div class="auth-field"><label class="auth-label">Email</label>' +
      '<input class="auth-input" id="login-email" type="email" placeholder="prenom@exemple.fr" /></div>' +
      '<div class="auth-field"><label class="auth-label">Mot de passe</label>' +
      '<input class="auth-input" id="login-password" type="password" placeholder="••••••••" /></div>' +
      '<button class="auth-btn-primary" onclick="AuthView._loginEmail()">Se connecter</button>';
  },

  _loginSendOTP: async function() {
    var phone = document.getElementById('login-phone').value.trim();
    if (!phone) return AuthView._showError('login-error', 'Entrez votre numéro de téléphone.');
    try {
      if (!AuthView._recaptchaVerifier) {
        AuthView._recaptchaVerifier = AuthService.setupRecaptcha('recaptcha-container');
      }
      AuthView._confirmationResult = await AuthService.sendOTP(phone, AuthView._recaptchaVerifier);
      document.getElementById('phone-step').style.display = 'none';
      document.getElementById('otp-step').style.display = 'block';
    } catch (e) {
      AuthView._showError('login-error', 'Erreur : ' + (e.message || 'Numéro invalide.'));
    }
  },

  _loginConfirmOTP: async function() {
    var code = document.getElementById('login-otp').value.trim();
    if (!code) return AuthView._showError('login-error', 'Entrez le code SMS.');
    try {
      await AuthService.confirmOTP(AuthView._confirmationResult, code);
    } catch (e) {
      AuthView._showError('login-error', 'Code incorrect ou expiré.');
    }
  },

  _loginEmail: async function() {
    var email = document.getElementById('login-email').value.trim();
    var password = document.getElementById('login-password').value;
    if (!email || !password) return AuthView._showError('login-error', 'Remplissez tous les champs.');
    try {
      await AuthService.signInWithEmail(email, password);
    } catch (e) {
      AuthView._showError('login-error', 'Email ou mot de passe incorrect.');
    }
  },

  /* ══ REGISTER ══ */
  _renderRegister: function() {
    AuthView._selectedRole = 'student';
    AuthView._selectedMethod = 'phone';
    AuthView._joinedClasses = [];
    document.getElementById('auth-content').innerHTML =
      '<div id="register-error"></div>' +
      '<div class="auth-role-select">' +
        '<button class="auth-role-btn active" id="role-student" onclick="AuthView._setRole(\'student\')">' +
          '<span class="role-icon">🎓</span>Élève</button>' +
        '<button class="auth-role-btn" id="role-teacher" onclick="AuthView._setRole(\'teacher\')">' +
          '<span class="role-icon">👨‍🏫</span>Enseignant</button>' +
      '</div>' +
      '<div class="auth-method-toggle">' +
        '<button class="auth-method-btn active" id="reg-method-phone" onclick="AuthView._setRegMethod(\'phone\')">📱 Téléphone</button>' +
        '<button class="auth-method-btn" id="reg-method-email" onclick="AuthView._setRegMethod(\'email\')">✉️ Email</button>' +
      '</div>' +
      '<div id="register-form"></div>';
    this._renderRegisterPhone();
  },

  _setRole: function(role) {
    AuthView._selectedRole = role;
    document.querySelectorAll('.auth-role-btn').forEach(function(b) { b.classList.remove('active'); });
    document.getElementById('role-' + role).classList.add('active');
  },

  _setRegMethod: function(method) {
    AuthView._selectedMethod = method;
    document.querySelectorAll('.auth-method-btn').forEach(function(b) { b.classList.remove('active'); });
    document.getElementById('reg-method-' + method).classList.add('active');
    if (method === 'phone') AuthView._renderRegisterPhone();
    else AuthView._renderRegisterEmail();
  },

  _renderRegisterPhone: function() {
    document.getElementById('register-form').innerHTML =
      '<div class="auth-field"><label class="auth-label">Prénom et Nom</label>' +
      '<input class="auth-input" id="reg-name" type="text" placeholder="Marie Curie" /></div>' +
      '<div id="reg-phone-step">' +
        '<div class="auth-field"><label class="auth-label">Numéro de téléphone</label>' +
        '<input class="auth-input" id="reg-phone" type="tel" placeholder="+33 6 00 00 00 00" /></div>' +
        '<button class="auth-btn-primary" onclick="AuthView._registerSendOTP()">Envoyer le code SMS</button>' +
      '</div>' +
      '<div id="reg-otp-step" style="display:none">' +
        '<div class="auth-field"><label class="auth-label">Code reçu par SMS</label>' +
        '<input class="auth-input" id="reg-otp" type="text" placeholder="123456" maxlength="6" /></div>' +
        '<div id="reg-class-section"></div>' +
        '<button class="auth-btn-primary" onclick="AuthView._registerConfirmOTP()">Créer mon compte</button>' +
      '</div>';
  },

  _renderRegisterEmail: function() {
    document.getElementById('register-form').innerHTML =
      '<div class="auth-field"><label class="auth-label">Prénom et Nom</label>' +
      '<input class="auth-input" id="reg-name" type="text" placeholder="Marie Curie" /></div>' +
      '<div class="auth-field"><label class="auth-label">Email</label>' +
      '<input class="auth-input" id="reg-email" type="email" placeholder="prenom@exemple.fr" /></div>' +
      '<div class="auth-field"><label class="auth-label">Mot de passe</label>' +
      '<input class="auth-input" id="reg-password" type="password" placeholder="••••••••" /></div>' +
      '<div id="reg-class-section"></div>' +
      '<button class="auth-btn-primary" onclick="AuthView._registerEmail()">Créer mon compte</button>';
    this._renderClassSection();
  },

  _renderClassSection: function() {
    var container = document.getElementById('reg-class-section');
    if (!container) return;
    if (AuthView._selectedRole !== 'student') { container.innerHTML = ''; return; }
    var esc = function(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); };
    var tags = AuthView._joinedClasses.map(function(c, i) {
      return '<span class="auth-class-tag">' + esc(c) + '<button onclick="AuthView._removeClass(' + i + ')">✕</button></span>';
    }).join('');
    container.innerHTML =
      '<div class="auth-field">' +
        '<label class="auth-label">Code(s) de classe (optionnel)</label>' +
        '<div style="display:flex;gap:0.5rem">' +
          '<input class="auth-input" id="class-code-input" type="text" placeholder="MATHS-TS1" style="flex:1" />' +
          '<button class="auth-btn-primary" style="width:auto;padding:0.7rem 1rem;margin-top:0" onclick="AuthView._addClass()">+</button>' +
        '</div>' +
        '<div style="margin-top:0.5rem">' + tags + '</div>' +
      '</div>';
  },

  _addClass: function() {
    var input = document.getElementById('class-code-input');
    var code = input.value.trim().toUpperCase();
    if (code && AuthView._joinedClasses.indexOf(code) === -1) {
      AuthView._joinedClasses.push(code);
      input.value = '';
      AuthView._renderClassSection();
    }
  },

  _removeClass: function(index) {
    AuthView._joinedClasses.splice(index, 1);
    AuthView._renderClassSection();
  },

  _registerSendOTP: async function() {
    var phone = document.getElementById('reg-phone').value.trim();
    if (!phone) return AuthView._showError('register-error', 'Entrez votre numéro de téléphone.');
    try {
      if (!AuthView._recaptchaVerifier) {
        AuthView._recaptchaVerifier = AuthService.setupRecaptcha('recaptcha-container');
      }
      AuthView._confirmationResult = await AuthService.sendOTP(phone, AuthView._recaptchaVerifier);
      document.getElementById('reg-phone-step').style.display = 'none';
      document.getElementById('reg-otp-step').style.display = 'block';
      AuthView._renderClassSection();
    } catch (e) {
      AuthView._showError('register-error', 'Erreur : ' + (e.message || 'Numéro invalide.'));
    }
  },

  _registerConfirmOTP: async function() {
    var code = document.getElementById('reg-otp').value.trim();
    var name = document.getElementById('reg-name').value.trim();
    if (!code) return AuthView._showError('register-error', 'Entrez le code SMS.');
    if (!name) return AuthView._showError('register-error', 'Entrez votre prénom et nom.');
    try {
      var cred = await AuthService.confirmOTP(AuthView._confirmationResult, code);
      await AuthView._finishRegistration(cred.user, { phone: cred.user.phoneNumber }, name);
    } catch (e) {
      AuthView._showError('register-error', 'Code incorrect ou expiré.');
    }
  },

  _registerEmail: async function() {
    var name = document.getElementById('reg-name').value.trim();
    var email = document.getElementById('reg-email').value.trim();
    var password = document.getElementById('reg-password').value;
    if (!name || !email || !password) return AuthView._showError('register-error', 'Remplissez tous les champs.');
    if (password.length < 6) return AuthView._showError('register-error', 'Mot de passe trop court (6 caractères min).');
    try {
      var cred = await AuthService.signUpWithEmail(email, password);
      await AuthView._finishRegistration(cred.user, { email: email }, name);
    } catch (e) {
      var msg = e.code === 'auth/email-already-in-use'
        ? 'Cet email est déjà utilisé.'
        : (e.message || "Erreur lors de l'inscription.");
      AuthView._showError('register-error', msg);
    }
  },

  _finishRegistration: async function(user, contactData, displayName) {
    var isTeacher = AuthView._selectedRole === 'teacher';
    var profile = {
      role: isTeacher ? 'teacher' : 'student',
      status: isTeacher ? 'pending' : 'active',
      displayName: displayName,
      phone: contactData.phone || null,
      email: contactData.email || null,
      classes: []
    };
    await AuthService.createUserProfile(user.uid, profile);
    if (!isTeacher) {
      for (var i = 0; i < AuthView._joinedClasses.length; i++) {
        try { await AuthService.joinClass(user.uid, AuthView._joinedClasses[i]); } catch (e) { /* code invalide */ }
      }
    }
    // onAuthStateChanged dans app.js gère la redirection
  },

  _showError: function(containerId, message) {
    var el = document.getElementById(containerId);
    if (el) el.innerHTML = '<div class="auth-error">' + message + '</div>';
  }
};
