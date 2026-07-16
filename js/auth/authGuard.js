/* =========================================================
   Spark Learning – authGuard.js
   Vérifie l'état Firebase auth avant d'afficher l'app
   ========================================================= */

var AuthGuard = {
  _currentUser: null,
  _currentProfile: null,

  // Reçoit l'utilisateur Firebase déjà résolu par l'unique listener global (js/app.js) —
  // ne doit JAMAIS s'abonner lui-même à onAuthStateChanged, sinon chaque changement d'état
  // (y compris les rafraîchissements de token) empile un nouveau listener imbriqué non nettoyé.
  init: async function(user) {
    if (user) {
      this._currentUser = user;
      this._currentProfile = await AuthService.getUserProfile(user.uid);
      return this._currentProfile;
    }
    this._currentUser = null;
    this._currentProfile = null;
    return null;
  },

  reset: function() { this._currentUser = null; this._currentProfile = null; },

  getCurrentUser:    function() { return this._currentUser; },
  getCurrentProfile: function() { return this._currentProfile; },
  getRole:   function() { return this._currentProfile ? this._currentProfile.role : null; },
  getStatus: function() { return this._currentProfile ? this._currentProfile.status : null; },

  isAuthenticated: function() { return !!this._currentUser; },
  isAdmin:   function() { return !!(this._currentProfile && this._currentProfile.role === 'admin'); },
  isTeacher: function() { return !!(this._currentProfile && (this._currentProfile.role === 'teacher' || this._currentProfile.role === 'admin')); },
  isStudent: function() { return !!(this._currentProfile && this._currentProfile.role === 'student'); },
  isActive:  function() { return !!(this._currentProfile && this._currentProfile.status === 'active'); },
  isTutor:   function() { return !!(this._currentProfile && this._currentProfile.tutorAccess === true); }
};
