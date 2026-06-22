/* =========================================================
   Spark Learning – authGuard.js
   Vérifie l'état Firebase auth avant d'afficher l'app
   ========================================================= */

var AuthGuard = {
  _currentUser: null,
  _currentProfile: null,

  init: function() {
    var self = this;
    return new Promise(function(resolve) {
      AuthService.onAuthStateChanged(async function(user) {
        if (user) {
          self._currentUser = user;
          self._currentProfile = await AuthService.getUserProfile(user.uid);
          resolve(self._currentProfile);
        } else {
          self._currentUser = null;
          self._currentProfile = null;
          resolve(null);
        }
      });
    });
  },

  getCurrentUser:    function() { return this._currentUser; },
  getCurrentProfile: function() { return this._currentProfile; },
  getRole:   function() { return this._currentProfile ? this._currentProfile.role : null; },
  getStatus: function() { return this._currentProfile ? this._currentProfile.status : null; },

  isAuthenticated: function() { return !!this._currentUser; },
  isAdmin:   function() { return !!(this._currentProfile && this._currentProfile.role === 'admin'); },
  isTeacher: function() { return !!(this._currentProfile && (this._currentProfile.role === 'teacher' || this._currentProfile.role === 'admin')); },
  isStudent: function() { return !!(this._currentProfile && this._currentProfile.role === 'student'); },
  isActive:  function() { return !!(this._currentProfile && this._currentProfile.status === 'active'); }
};
