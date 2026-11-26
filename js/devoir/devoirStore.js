// Accès Firestore du module « devoir », côté enseignant (compte admin).
// Collections réservées à l'admin par firestore.rules : devoir_classes, devoir_exercices.
// Les étudiants n'y ont jamais accès : au MVP-2, une session recopiera la seule liste des noms
// (sans le profil Dys) dans un document lisible par les participants.
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
    return snap.docs.map(function (d) { return Object.assign({}, d.data(), { id: d.id }); })
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
    var data = JSON.parse(JSON.stringify(ex));
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
  }
};
