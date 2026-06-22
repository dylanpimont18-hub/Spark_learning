var SyncService = {
  _uid: null,
  _wrapped: false,
  _origSet: null,

  _SYNC_KEYS: {
    sparkProgress:  'progress',
    sparkTracking:  'tracking',
    sparkStreak:    'streak',
    sparkFlashcards:'flashcards'
  },

  init: async function(uid) {
    SyncService._uid = uid;
    SyncService._wrapStorage();
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
    if (SyncService._wrapped || typeof Storage === 'undefined' || !Storage._set) return;
    SyncService._wrapped = true;

    SyncService._origSet = Storage._set.bind(Storage);

    Storage._set = function(key, value) {
      SyncService._origSet(key, value);
      var field = SyncService._SYNC_KEYS[key];
      if (field) SyncService._push(field, value);
    };
  },

  unwrap: function() {
    SyncService._uid = null;
    if (SyncService._wrapped && SyncService._origSet) {
      Storage._set = SyncService._origSet;
    }
    SyncService._wrapped = false;
  }
};
