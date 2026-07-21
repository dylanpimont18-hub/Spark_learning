/* =========================================================
   Spark Learning – positioningClient.js
   Appels aux Cloud Functions publiques du test de positionnement
   ========================================================= */

var PositioningClient = {
  _call: function(name, data) {
    var fn = AuthService.getFunctions().httpsCallable(name);
    return fn(data).then(function(result) { return result.data; });
  },

  getLinkInfo: function(token) {
    return PositioningClient._call('getPositioningLinkInfo', { token: token });
  },

  getQuestionBank: function(subject) {
    return PositioningClient._call('getPositioningQuestionBank', { subject: subject });
  },

  submitResult: function(token, subject, payload) {
    return PositioningClient._call('submitPositioningResult', Object.assign({ token: token, subject: subject }, payload));
  }
};
