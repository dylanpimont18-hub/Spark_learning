// Accès Firestore du module « devoir », côté enseignant (compte admin).
// Classes et banque (devoir_classes, devoir_exercices) : lecture et écriture directes, admin seul.
// Passage en classe (devoir_sessions, devoir_copies, devoir_copies_prive, devoir_evenements,
// devoir_corrections) : lecture seule ici, en temps réel ; toute écriture passe par une Cloud
// Function (DevoirFirebase.appeler). Voir firestore.rules.
var DevoirStore = {
  _db: function () { return firebase.firestore(); },
  _now: function () { return firebase.firestore.FieldValue.serverTimestamp(); },

  nouvelId: function (collection) { return this._db().collection(collection).doc().id; },

  // ── Classes : { nom, annee_scolaire, etudiants: [{ id, nom, mode_dys, actif }] } ──
  listClasses: async function () {
    var snap = await this._db().collection('devoir_classes').get();
    return snap.docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); })
      .sort(function (a, b) { return (b.annee_scolaire || '').localeCompare(a.annee_scolaire || '') || (a.nom || '').localeCompare(b.nom || '', 'fr'); });
  },

  saveClasse: async function (classe) {
    var id = classe.id || this.nouvelId('devoir_classes');
    var data = {
      nom: classe.nom,
      annee_scolaire: classe.annee_scolaire,
      etudiants: classe.etudiants,
      updated_at: this._now()
    };
    if (!classe.id) data.created_at = this._now();
    await this._db().collection('devoir_classes').doc(id).set(data, { merge: true });
    return id;
  },

  deleteClasse: async function (id) {
    await this._db().collection('devoir_classes').doc(id).delete();
  },

  // ── Banque d'exercices : un document par exercice, id = ex.id (slug) ──
  listExercices: async function () {
    var snap = await this._db().collection('devoir_exercices').get();
    return snap.docs.map(function (d) { return DevoirEngine.depuisStockage(Object.assign({}, d.data(), { id: d.id })); })
      .sort(function (a, b) { return (a.titre || '').localeCompare(b.titre || '', 'fr'); });
  },

  exerciceExiste: async function (id) {
    var doc = await this._db().collection('devoir_exercices').doc(id).get();
    return doc.exists;
  },

  // ex : objet au format du moteur (DevoirEngine), déjà validé. actif : booléen.
  // Écriture complète (sans merge) : un champ retiré dans l'éditeur doit disparaître du document.
  // createdAt : horodatage d'origine à conserver lors d'une modification (null pour une création).
  saveExercice: async function (ex, actif, createdAt) {
    // pourStockage : les lignes de catalogue (tableaux de tableaux) sont refusées telles quelles par Firestore.
    var data = DevoirEngine.pourStockage(JSON.parse(JSON.stringify(ex)));
    data.actif = actif !== false;
    data.updated_at = this._now();
    data.created_at = createdAt || this._now();
    await this._db().collection('devoir_exercices').doc(ex.id).set(data);
  },

  setExerciceActif: async function (id, actif) {
    await this._db().collection('devoir_exercices').doc(id).update({ actif: actif, updated_at: this._now() });
  },

  deleteExercice: async function (id) {
    await this._db().collection('devoir_exercices').doc(id).delete();
  },

  // ── Sessions et copies (lecture seule) ──
  _avecId: function (d) { return Object.assign({}, d.data(), { id: d.id }); },
  _ms: function (ts) { return ts && ts.toMillis ? ts.toMillis() : 0; },

  listSessions: async function () {
    var self = this;
    var snap = await this._db().collection('devoir_sessions').get();
    return snap.docs.map(this._avecId).sort(function (a, b) { return self._ms(b.created_at) - self._ms(a.created_at); });
  },

  // Les trois écoutes renvoient la fonction qui les arrête.
  ecouterSession: function (id, surDonnees, surErreur) {
    var self = this;
    return this._db().collection('devoir_sessions').doc(id).onSnapshot(function (d) { surDonnees(d.exists ? self._avecId(d) : null); }, surErreur);
  },

  ecouterCopies: function (sessionId, surDonnees, surErreur) {
    var self = this;
    return this._db().collection('devoir_copies').where('session_id', '==', sessionId).onSnapshot(function (snap) {
      surDonnees(snap.docs.map(self._avecId).sort(function (a, b) { return (a.nom || '').localeCompare(b.nom || '', 'fr'); }));
    }, surErreur);
  },

  // Du plus récent au plus ancien. Tri côté navigateur : pas d'index composite à déployer.
  ecouterEvenements: function (sessionId, surDonnees, surErreur) {
    var self = this;
    return this._db().collection('devoir_evenements').where('session_id', '==', sessionId).onSnapshot(function (snap) {
      surDonnees(snap.docs.map(self._avecId).sort(function (a, b) { return self._ms(b.horodatage) - self._ms(a.horodatage); }));
    }, surErreur);
  },

  // Fiches de correction de la session (proposition de l'IA, correction de l'enseignant).
  ecouterCorrections: function (sessionId, surDonnees, surErreur) {
    var self = this;
    return this._db().collection('devoir_corrections').where('session_id', '==', sessionId).onSnapshot(function (snap) {
      surDonnees(snap.docs.map(self._avecId));
    }, surErreur);
  },

  // Parties privées de toutes les copies d'une session (corrigés, barèmes, notes finales).
  listPrives: async function (sessionId) {
    var snap = await this._db().collection('devoir_copies_prive').where('session_id', '==', sessionId).get();
    return snap.docs.map(this._avecId);
  },

  // ── Suivi dans le temps (devoirSuivi.js) : seulement ce que l'enseignant a validé ──
  // Fiches de correction validées, toutes sessions confondues.
  listFichesValidees: async function () {
    var snap = await this._db().collection('devoir_corrections').where('statut', '==', 'validee').get();
    return snap.docs.map(this._avecId);
  },

  // Parties privées des copies dont la correction est validée (note finale sur 20).
  listCopiesValidees: async function () {
    var snap = await this._db().collection('devoir_copies_prive').where('correction.statut', '==', 'validee').get();
    return snap.docs.map(this._avecId);
  },

  // Partie privée d'une copie : valeurs tirées, corrigé calculé, barème, historique de brouillon.
  lirePrive: async function (copieId) {
    var d = await this._db().collection('devoir_copies_prive').doc(copieId).get();
    return d.exists ? this._avecId(d) : null;
  }
};
