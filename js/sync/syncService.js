var SyncService = {
  _uid: null,
  _wrapped: false,
  _origSaveProgress: null,
  _origSaveTracking: null,
  _origSaveStreak: null,
  _origSaveFlashcards: null,

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
    if (SyncService._wrapped || typeof Storage === 'undefined') return;
    SyncService._wrapped = true;

    // Sauvegarde les originaux AVANT de les remplacer
    SyncService._origSaveProgress   = Storage.saveProgress;
    SyncService._origSaveTracking   = Storage.saveTracking;
    SyncService._origSaveStreak     = Storage.saveStreak;
    SyncService._origSaveFlashcards = Storage.saveFlashcards;

    var _origSaveProgress   = SyncService._origSaveProgress.bind(Storage);
    var _origSaveTracking   = SyncService._origSaveTracking.bind(Storage);
    var _origSaveStreak     = SyncService._origSaveStreak.bind(Storage);
    var _origSaveFlashcards = SyncService._origSaveFlashcards.bind(Storage);

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
    if (SyncService._wrapped) {
      // Restaure les méthodes originales si elles ont été sauvegardées
      if (SyncService._origSaveProgress)   Storage.saveProgress   = SyncService._origSaveProgress;
      if (SyncService._origSaveTracking)   Storage.saveTracking   = SyncService._origSaveTracking;
      if (SyncService._origSaveStreak)     Storage.saveStreak     = SyncService._origSaveStreak;
      if (SyncService._origSaveFlashcards) Storage.saveFlashcards = SyncService._origSaveFlashcards;
    }
    SyncService._wrapped = false;
  }
};
