// Passage en classe (MVP-2) : sessions, entrée par code et nom, brouillon, rendu.
// Principe du cahier des charges (§3) : le serveur décide du temps, du tirage et des statuts ;
// le navigateur de l'étudiant n'affiche et ne transmet que des demandes.
import { createHash, randomInt } from 'crypto';
import { onCall, CallableRequest } from 'firebase-functions/v2/https';
import {
  db, COL, DEFAUTS, GRACE_MS, LONGUEUR_MAX_BLOC, VERSIONS_BROUILLON, OPTIONS, Donnees,
  HttpsError, Timestamp, FieldValue, uidDe, exigerEnseignant, texte, entier, millis, estActive,
  journaliser, refNouvelEvenement, donneesEvenement
} from './commun';
import { chargerExercices, choisirExercices, construireAttribution, validerExercice } from './tirage';
import { traiterRetour } from './antitriche';

const MESSAGE_CODE = 'Code invalide ou session fermée.';
// Sans I, L, O, 0 ni 1 : un code se lit au tableau et se tape sans ambiguïté.
const ALPHABET_CODE = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const LONGUEUR_CODE = 6;
const FENETRE_TENTATIVES_MS = 10 * 60 * 1000;
const ECHECS_MAX_UID = 5;
// Toute la classe sort par la même adresse IP du lycée : seuil large, sur les seuls échecs.
const ECHECS_MAX_IP = 30;

function genererCode(): string {
  let c = '';
  for (let i = 0; i < LONGUEUR_CODE; i++) c += ALPHABET_CODE.charAt(randomInt(0, ALPHABET_CODE.length));
  return c;
}

function normaliserCode(v: any): string {
  return typeof v === 'string' ? v.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12) : '';
}

export function idCopie(sessionId: string, etudiantId: string): string {
  return sessionId + '_' + etudiantId;
}

// ── Limitation des tentatives de code (§8) ───────────────────────────────────
function clesTentatives(req: CallableRequest<any>, uid: string): { cle: string; max: number }[] {
  const cles = [{ cle: 'uid_' + uid, max: ECHECS_MAX_UID }];
  const ip = req.rawRequest && (req.rawRequest.ip || '');
  if (ip) cles.push({ cle: 'ip_' + createHash('sha256').update(String(ip)).digest('hex').slice(0, 32), max: ECHECS_MAX_IP });
  return cles;
}

async function verifierTentatives(cles: { cle: string; max: number }[]): Promise<void> {
  const limite = Date.now() - FENETRE_TENTATIVES_MS;
  const docs = await db().getAll(...cles.map((c) => db().collection(COL.tentatives).doc(c.cle)));
  docs.forEach((d, i) => {
    const echecs: number[] = d.exists ? ((d.data() as Donnees).echecs || []) : [];
    if (echecs.filter((t) => t > limite).length >= cles[i].max) {
      throw new HttpsError('resource-exhausted', 'Trop de tentatives. Patientez quelques minutes ou appelez votre enseignant.');
    }
  });
}

async function noterEchec(cles: { cle: string; max: number }[]): Promise<void> {
  const limite = Date.now() - FENETRE_TENTATIVES_MS;
  await Promise.all(cles.map((c) => db().runTransaction(async (tx) => {
    const ref = db().collection(COL.tentatives).doc(c.cle);
    const d = await tx.get(ref);
    const echecs: number[] = d.exists ? ((d.data() as Donnees).echecs || []) : [];
    tx.set(ref, { echecs: echecs.filter((t) => t > limite).concat([Date.now()]).slice(-50), updated_at: FieldValue.serverTimestamp() });
  })));
}

// ── Fin d'une copie ────────────────────────────────────────────────────────
// Fige une copie : statut final, exercices actifs marqués « rendue ». À appeler dans une
// transaction qui a déjà lu la copie. Renvoie les champs écrits.
export function figer(tx: FirebaseFirestore.Transaction, ref: FirebaseFirestore.DocumentReference,
  copie: Donnees, statut: 'rendue' | 'rendue_auto', typeEvenement: string, detail: string | null): Donnees {
  const maj: Donnees = {
    statut,
    rendue_a: FieldValue.serverTimestamp(),
    updated_at: FieldValue.serverTimestamp(),
    attributions: (copie.attributions || []).map((a: Donnees) => a.statut === 'active' ? Object.assign({}, a, { statut: 'rendue' }) : a)
  };
  tx.update(ref, maj);
  tx.set(refNouvelEvenement(), donneesEvenement({
    session_id: copie.session_id, copie_id: ref.id, etudiant_id: copie.etudiant_id, type: typeEvenement, detail
  }));
  return maj;
}

// Rend automatiquement les copies dont le temps est écoulé (étudiant parti sans rendre, poste
// éteint…). Appelée à la fermeture, depuis le tableau de bord et avant la pré-correction.
export async function finaliserExpirees(sessionId: string, toutes: boolean, detail: string): Promise<number> {
  const snap = await db().collection(COL.copies).where('session_id', '==', sessionId).get();
  let n = 0;
  for (const doc of snap.docs) {
    const c = doc.data();
    if (!estActive(c) && c.statut !== 'verrouillee') continue;
    if (c.statut === 'verrouillee' && !toutes) continue;
    if (!toutes && Date.now() <= millis(c.fin) + GRACE_MS) continue;
    const fait = await db().runTransaction(async (tx) => {
      const frais = await tx.get(doc.ref);
      const cc = frais.data() as Donnees;
      if (cc.statut === 'verrouillee') {
        // Une copie verrouillée reste verrouillée : on fige seulement ses exercices.
        tx.update(doc.ref, {
          attributions: (cc.attributions || []).map((a: Donnees) => a.statut === 'active' ? Object.assign({}, a, { statut: 'rendue' }) : a),
          updated_at: FieldValue.serverTimestamp()
        });
        return false;
      }
      if (!estActive(cc)) return false;
      figer(tx, doc.ref, cc, 'rendue_auto', 'timeout', detail);
      return true;
    });
    if (fait) n++;
  }
  return n;
}

// ── Salle d'attente ──────────────────────────────────────────────────────────
// Tant que l'enseignant n'a pas lancé l'épreuve, une copie est « en_attente » : elle porte le
// nom de l'étudiant, mais aucun exercice et aucun minuteur. Le tirage et le départ du temps se
// font ici, au lancement (ou à l'arrivée d'un retardataire, une fois l'épreuve lancée).
export async function demarrerCopie(sessionId: string, session: Donnees, copieId: string,
  debutMs?: number, exercicesCharges?: Donnees[]): Promise<boolean> {
  const copieRef = db().collection(COL.copies).doc(copieId);
  const avant = await copieRef.get();
  if (!avant.exists || (avant.data() as Donnees).statut !== 'en_attente') return false;
  const etudiantId: string = (avant.data() as Donnees).etudiant_id;
  const histRef = db().collection(COL.historique).doc(etudiantId);
  const exercices = (exercicesCharges || await chargerExercices(session.exercice_ids || [])).filter((ex) => ex.actif !== false);
  const hist = await histRef.get();
  const dejaFaits: string[] = hist.exists ? ((hist.data() as Donnees).exercice_ids || []) : [];
  const choisis = choisirExercices(exercices as any, dejaFaits, [], session.exercices_par_etudiant);
  if (choisis.length < session.exercices_par_etudiant) {
    throw new HttpsError('failed-precondition', 'La session n\'a plus assez d\'exercices disponibles. Appelez votre enseignant.');
  }
  const attributions = choisis.map((ex, i) => construireAttribution(ex, i + 1, null));
  return db().runTransaction(async (tx) => {
    const frais = await tx.get(copieRef);
    if (!frais.exists || (frais.data() as Donnees).statut !== 'en_attente') return false;
    const debut = debutMs || Date.now();
    const privees: Donnees = {};
    attributions.forEach((a) => { privees[a.publique.id] = a.privee; });
    tx.update(copieRef, {
      statut: 'connecte',
      debut: Timestamp.fromMillis(debut),
      fin: Timestamp.fromMillis(debut + session.duree_minutes * 60000),
      attributions: attributions.map((a) => a.publique),
      exercice_courant: attributions[0].publique.id,
      updated_at: FieldValue.serverTimestamp()
    });
    tx.set(db().collection(COL.prive).doc(copieId), {
      session_id: sessionId, etudiant_id: etudiantId,
      attributions: privees, historique: {}, absence: null,
      created_at: FieldValue.serverTimestamp(), updated_at: FieldValue.serverTimestamp()
    });
    tx.set(histRef, { exercice_ids: FieldValue.arrayUnion(...attributions.map((a) => a.privee.exercice_id)), updated_at: FieldValue.serverTimestamp() }, { merge: true });
    tx.set(refNouvelEvenement(), donneesEvenement({ session_id: sessionId, copie_id: copieId, etudiant_id: etudiantId, type: 'depart' }));
    return true;
  });
}

// ── Enseignant : création et pilotage d'une session ──────────────────────────
export const createSession = onCall(OPTIONS, async (req) => {
  await exigerEnseignant(req);
  const d = req.data || {};
  const titre = texte(d.titre, 'titre', 120);
  const classeId = texte(d.classe_id, 'classe_id');
  const ids: string[] = Array.isArray(d.exercice_ids) ? Array.from(new Set(d.exercice_ids.filter((x: any) => typeof x === 'string'))) : [];
  const duree = entier(d.duree_minutes, 'duree_minutes', 1, 480, DEFAUTS.duree_minutes);
  const n = entier(d.exercices_par_etudiant, 'exercices_par_etudiant', 1, 10, DEFAUTS.exercices_par_etudiant);
  const quota = entier(d.quota_remplacements, 'quota_remplacements', 0, 5, DEFAUTS.quota_remplacements);
  const delai = entier(d.delai_perte_focus_ms, 'delai_perte_focus_ms', 500, 60000, DEFAUTS.delai_perte_focus_ms);

  const classe = await db().collection(COL.classes).doc(classeId).get();
  if (!classe.exists) throw new HttpsError('not-found', 'Classe introuvable.');
  const cl = classe.data() as Donnees;
  const etudiants = (cl.etudiants || []).filter((s: Donnees) => s.actif !== false).map((s: Donnees) => ({ id: s.id, nom: s.nom }));
  if (!etudiants.length) throw new HttpsError('failed-precondition', 'La classe ne contient aucun étudiant actif.');

  const exercices = await chargerExercices(ids);
  const inactifs = exercices.filter((ex) => ex.actif === false).map((ex) => ex.id);
  if (exercices.length !== ids.length || inactifs.length) {
    throw new HttpsError('failed-precondition', 'Certains exercices sont introuvables ou inactifs : ' +
      ids.filter((id) => !exercices.some((ex) => ex.id === id)).concat(inactifs).join(', '));
  }
  for (const ex of exercices) {
    const erreurs = validerExercice(ex);
    if (erreurs.length) throw new HttpsError('failed-precondition', 'L\'exercice « ' + ex.id + ' » ne passe pas la validation : ' + erreurs[0]);
  }
  if (exercices.length < n) {
    throw new HttpsError('failed-precondition', 'Il faut au moins ' + n + ' exercice(s) pour en attribuer ' + n + ' à chaque étudiant.');
  }

  const ref = db().collection(COL.sessions).doc();
  await ref.set({
    titre, classe_id: classeId, classe_nom: cl.nom || '', etudiants,
    exercice_ids: ids,
    exercices: exercices.map((ex) => ({ id: ex.id, titre: ex.titre, chapitre: ex.chapitre || null })),
    code: null, statut: 'brouillon', lancee_a: null,
    duree_minutes: duree, exercices_par_etudiant: n, quota_remplacements: quota, delai_perte_focus_ms: delai,
    ouverte_a: null, fermee_a: null,
    created_at: FieldValue.serverTimestamp(), updated_at: FieldValue.serverTimestamp()
  });
  // §12 : avertir si la banque sélectionnée ne couvre pas les remplacements possibles.
  const avertissement = exercices.length < n + quota
    ? 'La sélection contient ' + exercices.length + ' exercice(s) pour ' + n + ' par étudiant et ' + quota +
      ' remplacement(s) possible(s) : un remplacement pourra manquer d\'exercice inédit.'
    : null;
  return { session_id: ref.id, avertissement };
});

export const updateSession = onCall(OPTIONS, async (req) => {
  await exigerEnseignant(req);
  const d = req.data || {};
  const sessionId = texte(d.session_id, 'session_id');
  const action = texte(d.action, 'action', 20);
  const ref = db().collection(COL.sessions).doc(sessionId);

  if (action === 'ouvrir') {
    for (let essai = 0; essai < 8; essai++) {
      const code = genererCode();
      const ok = await db().runTransaction(async (tx) => {
        const s = await tx.get(ref);
        if (!s.exists) throw new HttpsError('not-found', 'Session introuvable.');
        if ((s.data() as Donnees).statut !== 'brouillon') throw new HttpsError('failed-precondition', 'Seule une session en brouillon peut être ouverte.');
        const codeRef = db().collection(COL.codes).doc(code);
        if ((await tx.get(codeRef)).exists) return false;   // code déjà utilisé par une session ouverte
        tx.set(codeRef, { session_id: sessionId, created_at: FieldValue.serverTimestamp() });
        tx.update(ref, { statut: 'ouverte', code, ouverte_a: FieldValue.serverTimestamp(), updated_at: FieldValue.serverTimestamp() });
        return true;
      });
      if (ok) return { statut: 'ouverte', code };
    }
    throw new HttpsError('aborted', 'Impossible de générer un code unique, réessayez.');
  }

  const snap = await ref.get();
  if (!snap.exists) throw new HttpsError('not-found', 'Session introuvable.');
  const s = snap.data() as Donnees;

  if (action === 'lancer') {
    // Marque d'abord la session : tout étudiant qui entre ensuite démarre directement.
    await db().runTransaction(async (tx) => {
      const frais = (await tx.get(ref)).data() as Donnees;
      if (frais.statut !== 'ouverte') throw new HttpsError('failed-precondition', 'La session n\'est pas ouverte.');
      if (frais.lancee_a) throw new HttpsError('failed-precondition', 'L\'épreuve est déjà lancée.');
      tx.update(ref, { lancee_a: FieldValue.serverTimestamp(), updated_at: FieldValue.serverTimestamp() });
    });
    // Même heure de départ, donc même heure de fin, pour tous ceux qui attendaient.
    const debut = Date.now();
    const exercices = await chargerExercices(s.exercice_ids || []);
    const attente = await db().collection(COL.copies).where('session_id', '==', sessionId).get();
    let n = 0;
    for (const doc of attente.docs) {
      const c = doc.data();
      if (c.statut !== 'en_attente' || !c.uid) continue;   // nom libéré : démarrera quand il sera repris
      if (await demarrerCopie(sessionId, s, doc.id, debut, exercices)) n++;
    }
    return { statut: 'ouverte', lancee: true, copies_lancees: n };
  }

  if (action === 'fermer') {
    if (s.statut !== 'ouverte') throw new HttpsError('failed-precondition', 'La session n\'est pas ouverte.');
    // Copies restées en salle d'attente : elles n'ont ni exercice ni réponse, elles disparaissent.
    const enAttente = await db().collection(COL.copies).where('session_id', '==', sessionId).where('statut', '==', 'en_attente').get();
    const lot = db().batch();
    enAttente.docs.forEach((doc) => lot.delete(doc.ref));
    if (s.code) lot.delete(db().collection(COL.codes).doc(s.code));
    lot.update(ref, { statut: 'terminee', fermee_a: FieldValue.serverTimestamp(), updated_at: FieldValue.serverTimestamp() });
    await lot.commit();
    const rendues = await finaliserExpirees(sessionId, true, 'fermeture de la session');
    return { statut: 'terminee', copies_rendues_auto: rendues };
  }

  if (action === 'prolonger') {
    if (s.statut !== 'ouverte') throw new HttpsError('failed-precondition', 'La session n\'est pas ouverte.');
    const minutes = entier(d.minutes, 'minutes', 1, 120);
    const copies = await db().collection(COL.copies).where('session_id', '==', sessionId).get();
    const lot = db().batch();
    let n = 0;
    copies.docs.forEach((doc) => {
      const c = doc.data();
      if (!estActive(c) && c.statut !== 'verrouillee') return;
      lot.update(doc.ref, { fin: Timestamp.fromMillis(millis(c.fin) + minutes * 60000), updated_at: FieldValue.serverTimestamp() });
      n++;
    });
    lot.update(ref, { duree_minutes: s.duree_minutes + minutes, updated_at: FieldValue.serverTimestamp() });
    await lot.commit();
    return { statut: 'ouverte', copies_prolongees: n, duree_minutes: s.duree_minutes + minutes };
  }

  if (action === 'archiver') {
    if (s.statut !== 'terminee') throw new HttpsError('failed-precondition', 'Seule une session terminée peut être archivée.');
    await ref.update({ statut: 'archivee', updated_at: FieldValue.serverTimestamp() });
    return { statut: 'archivee' };
  }

  if (action === 'supprimer') {
    if (s.statut !== 'brouillon') throw new HttpsError('failed-precondition', 'Seule une session en brouillon, sans copie, peut être supprimée.');
    await ref.delete();
    return { statut: 'supprimee' };
  }

  throw new HttpsError('invalid-argument', 'Action inconnue.');
});

// Rend les copies expirées (appelée par le tableau de bord quand un minuteur arrive à zéro).
export const syncSession = onCall(OPTIONS, async (req) => {
  await exigerEnseignant(req);
  const sessionId = texte((req.data || {}).session_id, 'session_id');
  return { copies_rendues_auto: await finaliserExpirees(sessionId, false, 'temps écoulé') };
});

// Libère un nom (§5) : l'étudiant dont le poste a planté peut reprendre sa copie depuis un autre
// navigateur. La copie et ses réponses sont conservées.
export const releaseName = onCall(OPTIONS, async (req) => {
  await exigerEnseignant(req);
  const copieId = texte((req.data || {}).copie_id, 'copie_id');
  const ref = db().collection(COL.copies).doc(copieId);
  const snap = await ref.get();
  if (!snap.exists) throw new HttpsError('not-found', 'Copie introuvable.');
  const c = snap.data() as Donnees;
  await ref.update({ uid: null, updated_at: FieldValue.serverTimestamp() });
  await journaliser({ session_id: c.session_id, copie_id: copieId, etudiant_id: c.etudiant_id, type: 'nom_libere', detail: 'par l\'enseignant' });
  return { ok: true };
});

// ── Étudiant : entrée ──────────────────────────────────────────────────────
// Classes qui ont un devoir ouvert en ce moment : premier écran de l'étudiant. Ne renvoie que
// des noms de classe ; la liste des étudiants reste protégée par le code de la session.
export const listOpenClasses = onCall(OPTIONS, async (req) => {
  uidDe(req);
  const snap = await db().collection(COL.sessions).where('statut', '==', 'ouverte').get();
  const vues: Record<string, boolean> = {};
  const classes: { id: string; nom: string }[] = [];
  snap.docs.forEach((doc) => {
    const s = doc.data();
    if (!s.classe_id || vues[s.classe_id]) return;
    vues[s.classe_id] = true;
    classes.push({ id: s.classe_id, nom: s.classe_nom || s.classe_id });
  });
  classes.sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
  return { classes };
});

// L'étudiant s'est trompé de nom : tant que l'épreuve n'est pas lancée, il le rend lui-même.
export const leaveWaiting = onCall(OPTIONS, async (req) => {
  const uid = uidDe(req);
  const copieId = texte((req.data || {}).copie_id, 'copie_id');
  const ref = db().collection(COL.copies).doc(copieId);
  return db().runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists || (snap.data() as Donnees).uid !== uid) throw new HttpsError('permission-denied', 'Cette copie n\'est pas la vôtre.');
    const c = snap.data() as Donnees;
    if (c.statut !== 'en_attente') throw new HttpsError('failed-precondition', 'L\'épreuve a commencé : appelez votre enseignant.');
    tx.delete(ref);
    tx.set(refNouvelEvenement(), donneesEvenement({ session_id: c.session_id, copie_id: copieId, etudiant_id: c.etudiant_id, type: 'nom_rendu', detail: 'par l\'étudiant, avant le lancement' }));
    return { ok: true };
  });
});

export const joinSession = onCall(OPTIONS, async (req) => {
  const uid = uidDe(req);
  const d = req.data || {};
  const code = normaliserCode(d.code);
  const cles = clesTentatives(req, uid);
  await verifierTentatives(cles);

  let sessionId: string | null = null;
  let session: Donnees | null = null;
  if (code.length === LONGUEUR_CODE) {
    const codeDoc = await db().collection(COL.codes).doc(code).get();
    if (codeDoc.exists) {
      sessionId = (codeDoc.data() as Donnees).session_id;
      const s = await db().collection(COL.sessions).doc(sessionId as string).get();
      if (s.exists) session = s.data() as Donnees;
    }
  }
  // La classe choisie au premier écran doit être celle de la session : même refus qu'un mauvais code.
  const classeDemandee = typeof d.classe_id === 'string' ? d.classe_id : null;
  if (!sessionId || !session || session.statut !== 'ouverte' || (classeDemandee && session.classe_id !== classeDemandee)) {
    await noterEchec(cles);
    throw new HttpsError('not-found', MESSAGE_CODE);
  }

  const copies = db().collection(COL.copies);
  const resume = {
    titre: session.titre, classe_nom: session.classe_nom,
    duree_minutes: session.duree_minutes, exercices_par_etudiant: session.exercices_par_etudiant,
    lancee: !!session.lancee_a
  };
  const lancee = !!session.lancee_a;

  // Reconnexion (rafraîchissement, plantage du navigateur) : même identité anonyme → même copie.
  const miennes = await copies.where('session_id', '==', sessionId).where('uid', '==', uid).limit(1).get();
  if (!miennes.empty) {
    const doc = miennes.docs[0];
    const c = doc.data();
    if (c.statut === 'en_attente') {
      if (lancee) await demarrerCopie(sessionId, session, doc.id);
      return { etape: 'copie', copie_id: doc.id, session: resume, maintenant: Date.now() };
    }
    if (estActive(c) && Date.now() > millis(c.fin) + GRACE_MS) {
      await db().runTransaction(async (tx) => {
        const frais = (await tx.get(doc.ref)).data() as Donnees;
        if (estActive(frais)) figer(tx, doc.ref, frais, 'rendue_auto', 'timeout', 'temps écoulé (constaté à la reconnexion)');
      });
    } else {
      // Onglet quitté puis fermé sans retour : l'absence encore ouverte est soldée maintenant.
      await traiterRetour(doc.id, uid, { detail: 'constaté à la reconnexion' });
      // Durée pendant laquelle la page n'a plus donné signe de vie, déclarée par le navigateur :
      // consignée pour l'enseignant, sans conséquence automatique (un plantage est légitime, §5).
      const silence = typeof d.absence_client_ms === 'number' && isFinite(d.absence_client_ms)
        ? Math.min(Math.max(0, Math.round(d.absence_client_ms)), 4 * 3600 * 1000) : null;
      await journaliser({ session_id: sessionId, copie_id: doc.id, etudiant_id: c.etudiant_id, type: 'reconnect', duree_absence_ms: silence });
    }
    return { etape: 'copie', copie_id: doc.id, session: resume, maintenant: Date.now() };
  }

  const etudiants: Donnees[] = session.etudiants || [];
  if (d.etudiant_id === undefined || d.etudiant_id === null) {
    const prises = await copies.where('session_id', '==', sessionId).get();
    const pris: Record<string, boolean> = {};
    prises.docs.forEach((doc) => { const c = doc.data(); if (c.uid) pris[c.etudiant_id] = true; });
    return {
      etape: 'choix', session: resume, maintenant: Date.now(),
      etudiants: etudiants.map((s) => ({ id: s.id, nom: s.nom, pris: !!pris[s.id] }))
    };
  }

  const etudiantId = texte(d.etudiant_id, 'etudiant_id');
  const etudiant = etudiants.find((s) => s.id === etudiantId);
  if (!etudiant) throw new HttpsError('not-found', 'Nom introuvable dans la liste de la classe.');
  const copieId = idCopie(sessionId, etudiantId);
  const copieRef = copies.doc(copieId);

  // La copie naît « en_attente », sans exercice ni minuteur ; l'unicité (session, étudiant) est
  // garantie par son identifiant et par la transaction. Le tirage a lieu au lancement.
  await db().runTransaction(async (tx) => {
    const snap = await tx.get(copieRef);
    if (snap.exists) {
      const c = snap.data() as Donnees;
      if (c.uid && c.uid !== uid) {
        throw new HttpsError('already-exists', 'Ce nom est déjà utilisé sur un autre poste. Si c\'est bien le vôtre, demandez à votre enseignant de le libérer.');
      }
      // Nom libéré par l'enseignant : la copie existante est reprise telle quelle.
      tx.update(copieRef, { uid, updated_at: FieldValue.serverTimestamp() });
      tx.set(refNouvelEvenement(), donneesEvenement({
        session_id: sessionId as string, copie_id: copieId, etudiant_id: etudiantId, type: 'reconnect', detail: 'reprise après libération du nom'
      }));
      return;
    }
    tx.set(copieRef, {
      session_id: sessionId, etudiant_id: etudiantId, nom: etudiant.nom, uid,
      titre: session!.titre,
      statut: 'en_attente',
      debut: null,
      fin: null,
      rendue_a: null,
      attributions: [],
      reponses: {},
      exercice_courant: null,
      changements_utilises: 0,
      collages_bloques: 0,
      quota_remplacements: session!.quota_remplacements,
      delai_perte_focus_ms: session!.delai_perte_focus_ms,
      message: null,
      absence_depuis: null,
      created_at: FieldValue.serverTimestamp(), updated_at: FieldValue.serverTimestamp()
    });
    tx.set(refNouvelEvenement(), donneesEvenement({ session_id: sessionId as string, copie_id: copieId, etudiant_id: etudiantId, type: 'join' }));
  });
  // Épreuve déjà lancée (retardataire, nom libéré puis repris) : la copie démarre tout de suite.
  if (lancee) await demarrerCopie(sessionId, session, copieId);
  return { etape: 'copie', copie_id: copieId, session: resume, maintenant: Date.now() };
});

// ── Étudiant : brouillon et rendu ────────────────────────────────────────────
function validerBlocs(v: any, attribution: Donnees): Record<string, string> {
  if (!v || typeof v !== 'object' || Array.isArray(v)) throw new HttpsError('invalid-argument', 'Réponse invalide.');
  const permis: string[] = (attribution.blocs || []).map((b: Donnees) => b.id);
  const blocs: Record<string, string> = {};
  Object.keys(v).forEach((k) => {
    if (permis.indexOf(k) === -1) throw new HttpsError('invalid-argument', 'Bloc de réponse inconnu.');
    if (typeof v[k] !== 'string' || v[k].length > LONGUEUR_MAX_BLOC) {
      throw new HttpsError('invalid-argument', 'Un bloc de réponse dépasse ' + LONGUEUR_MAX_BLOC + ' caractères.');
    }
    blocs[k] = v[k];
  });
  return blocs;
}

function memesBlocs(a: Record<string, string>, b: Record<string, string>): boolean {
  const ka = Object.keys(a).filter((k) => a[k] !== '');
  const kb = Object.keys(b).filter((k) => b[k] !== '');
  return ka.length === kb.length && ka.every((k) => a[k] === b[k]);
}

// Applique un brouillon dans une transaction déjà ouverte. Renvoie les mises à jour à écrire.
function appliquerBrouillon(copie: Donnees, prive: Donnees, attributionId: string, brut: any, majCopie: Donnees, majPrive: Donnees): void {
  const att = (copie.attributions || []).find((a: Donnees) => a.id === attributionId);
  if (!att) throw new HttpsError('not-found', 'Exercice introuvable dans cette copie.');
  if (att.statut !== 'active') return;   // exercice invalidé entre-temps : la saisie tardive est ignorée
  const blocs = validerBlocs(brut, att);
  const precedent = (copie.reponses || {})[attributionId] || { blocs: {}, version: 0 };
  if (memesBlocs(precedent.blocs || {}, blocs)) return;
  const quand = Timestamp.now();
  majCopie['reponses.' + attributionId] = { blocs, version: (precedent.version || 0) + 1, sauvegardee_a: quand };
  const versions: Donnees[] = ((prive.historique || {})[attributionId] || []).concat([{ blocs, a: quand }]);
  majPrive['historique.' + attributionId] = versions.slice(-VERSIONS_BROUILLON);
}

async function lireCopieDe(tx: FirebaseFirestore.Transaction, copieId: string, uid: string) {
  const copieRef = db().collection(COL.copies).doc(copieId);
  const priveRef = db().collection(COL.prive).doc(copieId);
  const [cs, ps] = await Promise.all([tx.get(copieRef), tx.get(priveRef)]);
  // Même message que la copie soit absente ou à quelqu'un d'autre : rien ne fuit.
  if (!cs.exists || (cs.data() as Donnees).uid !== uid) throw new HttpsError('permission-denied', 'Cette copie n\'est pas la vôtre.');
  return { copieRef, priveRef, copie: cs.data() as Donnees, prive: (ps.data() || {}) as Donnees };
}

export const saveDraft = onCall(OPTIONS, async (req) => {
  const uid = uidDe(req);
  const d = req.data || {};
  const copieId = texte(d.copie_id, 'copie_id');
  const attributionId = texte(d.attribution_id, 'attribution_id');
  return db().runTransaction(async (tx) => {
    const { copieRef, priveRef, copie, prive } = await lireCopieDe(tx, copieId, uid);
    if (!estActive(copie)) return { statut: copie.statut, enregistre: false, maintenant: Date.now() };
    if (Date.now() > millis(copie.fin) + GRACE_MS) {
      figer(tx, copieRef, copie, 'rendue_auto', 'timeout', 'temps écoulé');
      return { statut: 'rendue_auto', enregistre: false, maintenant: Date.now() };
    }
    const majCopie: Donnees = {};
    const majPrive: Donnees = {};
    appliquerBrouillon(copie, prive, attributionId, d.blocs || {}, majCopie, majPrive);
    const enregistre = Object.keys(majCopie).length > 0;
    const courant = (copie.attributions || []).find((a: Donnees) => a.id === d.exercice_courant && a.statut === 'active');
    if (courant) majCopie.exercice_courant = courant.id;
    majCopie.statut = 'en_cours';
    majCopie.updated_at = FieldValue.serverTimestamp();
    tx.update(copieRef, majCopie);
    if (Object.keys(majPrive).length) tx.update(priveRef, Object.assign(majPrive, { updated_at: FieldValue.serverTimestamp() }));
    const version = enregistre ? majCopie['reponses.' + attributionId].version : (((copie.reponses || {})[attributionId] || {}).version || 0);
    return { statut: 'en_cours', enregistre, version, maintenant: Date.now() };
  });
});

export const submitCopy = onCall(OPTIONS, async (req) => {
  const uid = uidDe(req);
  const d = req.data || {};
  const copieId = texte(d.copie_id, 'copie_id');
  return db().runTransaction(async (tx) => {
    const { copieRef, priveRef, copie, prive } = await lireCopieDe(tx, copieId, uid);
    if (!estActive(copie)) return { statut: copie.statut, maintenant: Date.now() };
    const maintenant = Date.now();
    const fin = millis(copie.fin);
    // Rendu « automatique » demandé par un navigateur dont l'horloge avance : le serveur refuse,
    // le navigateur se resynchronise sur l'heure renvoyée.
    if (d.auto === true && maintenant < fin - 3000) return { statut: copie.statut, maintenant, trop_tot: true };
    const majCopie: Donnees = {};
    const majPrive: Donnees = {};
    if (maintenant <= fin + GRACE_MS && d.brouillons && typeof d.brouillons === 'object') {
      Object.keys(d.brouillons).slice(0, 20).forEach((attId) => {
        if ((copie.attributions || []).some((a: Donnees) => a.id === attId)) {
          appliquerBrouillon(copie, prive, attId, d.brouillons[attId], majCopie, majPrive);
        }
      });
    }
    if (Object.keys(majCopie).length) tx.update(copieRef, majCopie);
    if (Object.keys(majPrive).length) tx.update(priveRef, Object.assign(majPrive, { updated_at: FieldValue.serverTimestamp() }));
    const statut = maintenant >= fin ? 'rendue_auto' : 'rendue';
    figer(tx, copieRef, copie, statut, statut === 'rendue' ? 'submit' : 'timeout', statut === 'rendue' ? 'rendu anticipé' : 'temps écoulé');
    return { statut, maintenant: Date.now() };
  });
});
