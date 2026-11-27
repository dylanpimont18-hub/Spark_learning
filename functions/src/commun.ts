// Socle commun des Cloud Functions du module devoir : accès Firestore (SDK admin, qui contourne
// les règles de sécurité), contrôle du rôle enseignant, journal d'événements, constantes.
import { initializeApp, getApps } from 'firebase-admin/app';
import { getFirestore, Firestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import { HttpsError, CallableRequest } from 'firebase-functions/v2/https';

if (!getApps().length) initializeApp();

let _db: Firestore | null = null;
export function db(): Firestore {
  if (!_db) {
    _db = getFirestore();
    _db.settings({ ignoreUndefinedProperties: true });
  }
  return _db;
}

export { Timestamp, FieldValue, HttpsError };

// Région des fonctions (Belgique). Le front appelle la même région : js/devoir/devoirFirebase.js.
export const REGION = 'europe-west1';
export const OPTIONS = { region: REGION, maxInstances: 10 };

export const COL = {
  classes: 'devoir_classes',
  exercices: 'devoir_exercices',
  sessions: 'devoir_sessions',
  codes: 'devoir_codes',
  copies: 'devoir_copies',
  prive: 'devoir_copies_prive',
  evenements: 'devoir_evenements',
  historique: 'devoir_historique',
  tentatives: 'devoir_tentatives',
  corrections: 'devoir_corrections'
};

// Valeurs par défaut du cahier des charges (§11).
export const DEFAUTS = {
  duree_minutes: 60,
  exercices_par_etudiant: 3,
  quota_remplacements: 2,
  delai_perte_focus_ms: 2000
};

// Tolérance réseau après la fin du temps : un dernier enregistrement parti à la dernière seconde
// est encore accepté. Au-delà, le serveur refuse toute écriture de l'étudiant.
export const GRACE_MS = 5000;
export const LONGUEUR_MAX_BLOC = 2000;
// Bloc de rédaction (question rédigée ou conclusion d'un exercice mixte).
export const LONGUEUR_MAX_BLOC_LONG = 6000;
export const VERSIONS_BROUILLON = 5;

export const STATUTS_ACTIFS = ['connecte', 'en_cours'];
export function estActive(copie: any): boolean {
  return STATUTS_ACTIFS.indexOf(copie.statut) !== -1;
}

export type Donnees = Record<string, any>;

export function uidDe(req: CallableRequest<any>): string {
  if (!req.auth || !req.auth.uid) throw new HttpsError('unauthenticated', 'Connexion requise.');
  return req.auth.uid;
}

// Enseignant = compte dont le profil users/{uid} porte role == 'admin' (même critère que
// isAdmin() dans firestore.rules). Vérifié à chaque appel : aucun jeton personnalisé à gérer.
export async function exigerEnseignant(req: CallableRequest<any>): Promise<string> {
  const uid = uidDe(req);
  const profil = await db().collection('users').doc(uid).get();
  if (!profil.exists || (profil.data() as Donnees).role !== 'admin') {
    throw new HttpsError('permission-denied', 'Action réservée à l\'enseignant.');
  }
  return uid;
}

export function texte(v: any, nom: string, max = 200): string {
  if (typeof v !== 'string' || !v.trim() || v.length > max) {
    throw new HttpsError('invalid-argument', 'Paramètre « ' + nom + ' » invalide.');
  }
  return v.trim();
}

export function entier(v: any, nom: string, min: number, max: number, defaut?: number): number {
  if ((v === undefined || v === null) && defaut !== undefined) return defaut;
  if (typeof v !== 'number' || !Number.isInteger(v) || v < min || v > max) {
    throw new HttpsError('invalid-argument', 'Paramètre « ' + nom + ' » : entier entre ' + min + ' et ' + max + ' attendu.');
  }
  return v;
}

export function millis(ts: any): number {
  return ts && typeof ts.toMillis === 'function' ? ts.toMillis() : 0;
}

// Journal en ajout seul, horodaté par le serveur. Les règles Firestore n'autorisent aucune
// écriture cliente dans cette collection : seul ce code y écrit.
export interface Evenement {
  session_id: string;
  copie_id: string;
  etudiant_id: string;
  type: string;
  attribution_id?: string | null;
  duree_absence_ms?: number | null;
  detail?: string | null;
  [cle: string]: any;
}

export function refNouvelEvenement() {
  return db().collection(COL.evenements).doc();
}

export function donneesEvenement(e: Evenement): Donnees {
  return Object.assign({ attribution_id: null, duree_absence_ms: null, detail: null }, e, {
    horodatage: FieldValue.serverTimestamp()
  });
}

export async function journaliser(e: Evenement): Promise<string> {
  const ref = refNouvelEvenement();
  await ref.set(donneesEvenement(e));
  return ref.id;
}
