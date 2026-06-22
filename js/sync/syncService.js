var SyncService = {
  _uid: null,
  _wrapped: false,

  init: async function(uid) {
    SyncService._uid = uid;
    try {
      var db = firebase.firestore();
      var snap = await db.collection('progress').doc(uid).get();
      var remote = snap.exists ? snap.data() : null;
      var remoteTs = (remote && remote.lastSync) ? remote.lastSync.toMillis() : 0;

      var localTs = parseInt(localStorage.getItem('sparkLastSync') || '0', 10);

      if (remoteTs > localTs && remote) {
        // Firestore plus récent → écraser localStorage
        if (remote.progress)   localStorage.setItem('sparkProgress',  JSON.stringify(remote.progress));
        if (remote.tracking)   localStorage.setItem('sparkTracking',  JSON.stringify(remote.tracking));
        if (remote.streak)     localStorage.setItem('sparkStreak',    JSON.stringify(remote.streak));
        if (remote.flashcards) localStorage.setItem('sparkFlashcards',JSON.stringify(remote.flashcards));
        localStorage.setItem('sparkLastSync', String(remoteTs));
      } else if (localTs > 0) {
        // localStorage plus récent → pousser vers Firestore
        var localData = {};
        var lp = localStorage.getItem('sparkProgress');
        var lt = localStorage.getItem('sparkTracking');
        var ls = localStorage.getItem('sparkStreak');
        var lf = localStorage.getItem('sparkFlashcards');
        if (lp) localData.progress   = JSON.parse(lp);
        if (lt) localData.tracking   = JSON.parse(lt);
        if (ls) localData.streak     = JSON.parse(ls);
        if (lf) localData.flashcards = JSON.parse(lf);
        if (Object.keys(localData).length > 0) {
          localData.lastSync = firebase.firestore.FieldValue.serverTimestamp();
          db.collection('progress').doc(uid).set(localData, { merge: true })
            .catch(function(e) { console.warn('[SyncService] initial push failed:', e); });
        }
      }
    } catch (e) {
      console.warn('[SyncService] init failed:', e);
    }
    SyncService._wrapStorage();
  },

  _push: function(field, data) {
    if (!SyncService._uid) return;
    var payload = {};
    payload[field] = data;
    payload.lastSync = firebase.firestore.FieldValue.serverTimestamp();
    firebase.firestore().collection('progress').doc(SyncService._uid)
      .set(payload, { merge: true })
      .then(function() { localStorage.setItem('sparkLastSync', String(Date.now())); })
      .catch(function(e) { console.warn('[SyncService] push failed:', e); });
  },

  _wrapStorage: function() {
    if (SyncService._wrapped || typeof Storage === 'undefined') return;
    SyncService._wrapped = true;

    var _origSaveProgress   = Storage.saveProgress.bind(Storage);
    var _origSaveTracking   = Storage.saveTracking.bind(Storage);
    var _origSaveStreak     = Storage.saveStreak.bind(Storage);
    var _origSaveFlashcards = Storage.saveFlashcards.bind(Storage);

    Storage.saveProgress = function(data) {
      _origSaveProgress(data);
      SyncService._push('progress', data);
    };
    Storage.saveTracking = function(data) {
      _origSaveTracking(data);
      SyncService._push('tracking', data);
    };
    Storage.saveStreak = function(data) {
      _origSaveStreak(data);
      SyncService._push('streak', data);
    };
    Storage.saveFlashcards = function(data) {
      _origSaveFlashcards(data);
      SyncService._push('flashcards', data);
    };
  },

  unwrap: function() {
    // Appelé lors du logout pour arrêter la sync
    SyncService._uid = null;
    SyncService._wrapped = false;
  }
};
