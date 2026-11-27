// Outils partagés par les tests du module devoir contre la Firebase Emulator Suite.
// Aucune dépendance npm : API REST des émulateurs (auth, firestore, functions) via fetch.
// Le projet « demo-… » garantit qu'aucun appel ne peut atteindre la production.
const Moteur = require('../../js/devoir/devoirEngine.js');
const PROJET = 'demo-spark-devoir';
const REGION = 'europe-west1';
const HOTE = '127.0.0.1';
const PORTS = { auth: 9099, firestore: 8080, functions: 5001, hosting: 5055, ia: 5998 };
const URL_SITE = 'http://' + HOTE + ':' + PORTS.hosting;
const FS = 'http://' + HOTE + ':' + PORTS.firestore + '/v1/projects/' + PROJET + '/databases/(default)/documents';
const ENSEIGNANT = { email: 'prof@demo.test', motDePasse: 'devoir-demo-2026' };

// ── Encodage des valeurs Firestore (API REST) ────────────────────────────────
function encoder(v) {
  if (v === null || v === undefined) return { nullValue: null };
  if (v instanceof Date) return { timestampValue: v.toISOString() };
  if (typeof v === 'boolean') return { booleanValue: v };
  if (typeof v === 'number') return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  if (typeof v === 'string') return { stringValue: v };
  if (Array.isArray(v)) return { arrayValue: { values: v.map(encoder) } };
  return { mapValue: { fields: encoderChamps(v) } };
}
function encoderChamps(o) {
  const f = {};
  Object.keys(o).forEach((k) => { f[k] = encoder(o[k]); });
  return f;
}
function decoder(v) {
  if ('nullValue' in v) return null;
  if ('booleanValue' in v) return v.booleanValue;
  if ('integerValue' in v) return Number(v.integerValue);
  if ('doubleValue' in v) return v.doubleValue;
  if ('stringValue' in v) return v.stringValue;
  if ('timestampValue' in v) return new Date(v.timestampValue);
  if ('arrayValue' in v) return (v.arrayValue.values || []).map(decoder);
  if ('mapValue' in v) return decoderChamps(v.mapValue.fields || {});
  return undefined;
}
function decoderChamps(f) {
  const o = {};
  Object.keys(f || {}).forEach((k) => { o[k] = decoder(f[k]); });
  return o;
}

// ── Firestore ───────────────────────────────────────────────────────────────
// jeton : null → accès « propriétaire » (contourne les règles, comme le SDK admin) ;
// sinon jeton d'identité d'un utilisateur : les règles de sécurité s'appliquent.
// jeton === false → requête sans aucune identité (visiteur non connecté).
function entetes(jeton) {
  if (jeton === false) return { 'Content-Type': 'application/json' };
  return { 'Content-Type': 'application/json', Authorization: 'Bearer ' + (jeton || 'owner') };
}
// Modifie quelques champs sans remplacer le document (accès propriétaire : sert aux tests à
// simuler le temps qui passe, par exemple en reculant l'heure de fin d'une copie).
async function majChamps(chemin, donnees) {
  const masque = Object.keys(donnees).map((k) => 'updateMask.fieldPaths=' + encodeURIComponent(k)).join('&');
  const r = await fetch(FS + '/' + chemin + '?' + masque, { method: 'PATCH', headers: entetes(null), body: JSON.stringify({ fields: encoderChamps(donnees) }) });
  return { statut: r.status, ok: r.ok };
}
async function ecrire(chemin, donnees, jeton) {
  const r = await fetch(FS + '/' + chemin, { method: 'PATCH', headers: entetes(jeton), body: JSON.stringify({ fields: encoderChamps(donnees) }) });
  return { statut: r.status, ok: r.ok };
}
async function lire(chemin, jeton) {
  const r = await fetch(FS + '/' + chemin, { headers: entetes(jeton) });
  if (!r.ok) return { statut: r.status, ok: false, donnees: null };
  const j = await r.json();
  return { statut: r.status, ok: true, donnees: decoderChamps(j.fields) };
}
async function lister(collection, jeton) {
  const r = await fetch(FS + '/' + collection + '?pageSize=300', { headers: entetes(jeton) });
  if (!r.ok) return { statut: r.status, ok: false, docs: [] };
  const j = await r.json();
  return { statut: r.status, ok: true, docs: (j.documents || []).map((d) => Object.assign({ _id: d.name.split('/').pop() }, decoderChamps(d.fields))) };
}
// Requête d'égalité sur un champ (comme le tableau de bord : where('session_id', '==', …)).
async function chercher(collection, champ, valeur, jeton) {
  const r = await fetch(FS + ':runQuery', {
    method: 'POST', headers: entetes(jeton),
    body: JSON.stringify({ structuredQuery: { from: [{ collectionId: collection }], where: { fieldFilter: { field: { fieldPath: champ }, op: 'EQUAL', value: encoder(valeur) } } } })
  });
  if (!r.ok) return { statut: r.status, ok: false, docs: [] };
  const j = await r.json();
  const refus = j.find((x) => x.error);
  if (refus) return { statut: refus.error.code, ok: false, docs: [] };
  return { statut: r.status, ok: true, docs: j.filter((x) => x.document).map((x) => Object.assign({ _id: x.document.name.split('/').pop() }, decoderChamps(x.document.fields))) };
}
async function supprimer(chemin, jeton) {
  const r = await fetch(FS + '/' + chemin, { method: 'DELETE', headers: entetes(jeton) });
  return { statut: r.status, ok: r.ok };
}

// ── Auth ───────────────────────────────────────────────────────────────────
const AUTH = 'http://' + HOTE + ':' + PORTS.auth + '/identitytoolkit.googleapis.com/v1/accounts:';
async function auth(action, corps) {
  const r = await fetch(AUTH + action + '?key=cle-factice', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(corps) });
  const j = await r.json();
  if (!r.ok) throw new Error('auth ' + action + ' : ' + JSON.stringify(j.error));
  return { uid: j.localId, jeton: j.idToken };
}
function connexionAnonyme() { return auth('signUp', { returnSecureToken: true }); }
function creerCompte(email, motDePasse) { return auth('signUp', { email, password: motDePasse, returnSecureToken: true }); }
function connexion(email, motDePasse) { return auth('signInWithPassword', { email, password: motDePasse, returnSecureToken: true }); }

// ── Fonctions appelables ───────────────────────────────────────────────────
// Renvoie { ok, resultat } ou { ok: false, code, message } (jamais d'exception pour un refus).
async function appeler(nom, donnees, jeton) {
  const h = { 'Content-Type': 'application/json' };
  if (jeton) h.Authorization = 'Bearer ' + jeton;
  const r = await fetch('http://' + HOTE + ':' + PORTS.functions + '/' + PROJET + '/' + REGION + '/' + nom, { method: 'POST', headers: h, body: JSON.stringify({ data: donnees || {} }) });
  let j;
  try { j = await r.json(); } catch (e) { return { ok: false, code: 'HTTP_' + r.status, message: 'réponse illisible' }; }
  if (j.error) return { ok: false, code: j.error.status, message: j.error.message };
  return { ok: true, resultat: j.result };
}

// ── Remise à zéro et jeu de données de démonstration ─────────────────────────
async function toutEffacer() {
  await fetch('http://' + HOTE + ':' + PORTS.firestore + '/emulator/v1/projects/' + PROJET + '/databases/(default)/documents', { method: 'DELETE' });
  await fetch('http://' + HOTE + ':' + PORTS.auth + '/emulator/v1/projects/' + PROJET + '/accounts', { method: 'DELETE' });
}

// Crée le compte enseignant, une classe de 11 étudiants et la banque de démonstration.
async function semer() {
  const demo = require('./devoir-demo.js');
  let prof;
  try { prof = await creerCompte(ENSEIGNANT.email, ENSEIGNANT.motDePasse); }
  catch (e) { prof = await connexion(ENSEIGNANT.email, ENSEIGNANT.motDePasse); }
  await ecrire('users/' + prof.uid, { email: ENSEIGNANT.email, displayName: 'Enseignant (démo)', role: 'admin', status: 'active', createdAt: new Date() });
  await ecrire('devoir_classes/' + demo.CLASSE.id, { nom: demo.CLASSE.nom, annee_scolaire: demo.CLASSE.annee_scolaire, etudiants: demo.CLASSE.etudiants, created_at: new Date(), updated_at: new Date() });
  for (const ex of demo.EXERCICES.concat(demo.EXERCICES_REDIGES)) {
    await ecrire('devoir_exercices/' + ex.id, Object.assign({}, Moteur.pourStockage(ex), { actif: true, created_at: new Date(), updated_at: new Date() }));
  }
  // exercices : les six exercices chiffrés (les suites historiques comptent leurs tirages) ;
  // rediges : la question rédigée et l'exercice mixte.
  return { prof, classe: demo.CLASSE, exercices: demo.EXERCICES, rediges: demo.EXERCICES_REDIGES };
}

async function attendre(ms) { return new Promise((r) => setTimeout(r, ms)); }

// Petit cadre de test (même présentation que scripts/test-devoir-engine.js).
function cadre() {
  const etat = { passes: 0, echecs: 0 };
  async function test(nom, fn) {
    try { await fn(); etat.passes++; console.log('  ok  ' + nom); }
    catch (e) { etat.echecs++; process.exitCode = 1; console.error('  ÉCHEC  ' + nom + '\n        ' + (e && e.message)); }
  }
  return { test, etat };
}

module.exports = {
  PROJET, REGION, HOTE, PORTS, URL_SITE, ENSEIGNANT,
  ecrire, majChamps, lire, lister, chercher, supprimer, connexionAnonyme, creerCompte, connexion, appeler,
  toutEffacer, semer, attendre, cadre
};
