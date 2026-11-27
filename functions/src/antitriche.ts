// Anti-triche (MVP-3) : perte de focus avec délai, invalidation et remplacement de l'exercice,
// verrouillage au-delà du quota, collage bloqué, annulation d'un incident par l'enseignant.
// Le navigateur signale des événements ; c'est ici que la règle est appliquée (§5) : la durée
// d'absence retenue est mesurée par le serveur entre le départ et le retour.
import { onCall } from 'firebase-functions/v2/https';
import {
  db, COL, OPTIONS, Donnees, HttpsError, Timestamp, FieldValue, uidDe, exigerEnseignant, texte,
  millis, estActive, refNouvelEvenement, donneesEvenement
} from './commun';
import { chargerExercices, choisirExercices, construireAttribution, melanger } from './tirage';

const ABSENCE_MAX_MS = 4 * 60 * 60 * 1000;
const COLLAGES_JOURNALISES_MAX = 300;   // au-delà, un script qui spamme n'écrit plus rien

function sourceValide(v: any): 'blur' | 'visibility_hidden' {
  return v === 'visibility_hidden' ? 'visibility_hidden' : 'blur';
}

function pluriel(n: number, mot: string): string {
  return n + ' ' + mot + (n > 1 ? 's' : '');
}

function secondes(ms: number): string {
  const s = Math.round(ms / 100) / 10;
  return String(s).replace('.', ',') + ' s';
}

// Messages affichés à l'étudiant à son retour : factuels, sans accusation (§5).
function messageRemplacement(delaiMs: number, restants: number): string {
  return 'Vous avez quitté la page de l\'épreuve pendant plus de ' + secondes(delaiMs) + '. ' +
    'L\'exercice en cours a été remplacé par un nouvel exercice ; vos réponses à l\'exercice précédent sont conservées pour votre enseignant. ' +
    (restants > 0
      ? 'Il reste ' + pluriel(restants, 'remplacement') + ' possible' + (restants > 1 ? 's' : '') + ' avant la mise en attente de votre copie.'
      : 'À la prochaine sortie de la page, votre copie sera mise en attente.');
}
const MESSAGE_VERROUILLAGE = 'Vous avez quitté la page de l\'épreuve à plusieurs reprises : votre copie est mise en attente. ' +
  'Vos réponses sont conservées. Levez la main : votre enseignant va venir vous voir.';

interface Candidats { exercices: Donnees[]; dejaFaits: string[] }

async function chargerCandidats(copie: Donnees): Promise<Candidats> {
  const session = await db().collection(COL.sessions).doc(copie.session_id).get();
  const ids: string[] = session.exists ? ((session.data() as Donnees).exercice_ids || []) : [];
  const exercices = (await chargerExercices(ids)).filter((ex) => ex.actif !== false);
  const hist = await db().collection(COL.historique).doc(copie.etudiant_id).get();
  return { exercices, dejaFaits: hist.exists ? ((hist.data() as Donnees).exercice_ids || []) : [] };
}

// Invalide l'attribution et lui attribue un remplaçant (même rang). Renvoie l'identifiant du
// remplaçant, ou null si la sélection de la session n'offre plus aucun exercice.
function remplacerDans(copie: Donnees, prive: Donnees, attributionId: string, motif: string, cand: Candidats,
  majCopie: Donnees, majPrive: Donnees): { remplacementId: string | null; exerciceId: string | null } {
  const attributions: Donnees[] = (copie.attributions || []).map((a: Donnees) => Object.assign({}, a));
  const cible = attributions.find((a) => a.id === attributionId);
  if (!cible) throw new HttpsError('not-found', 'Exercice introuvable dans cette copie.');
  const privees: Donnees = prive.attributions || {};
  const dansCopie = Object.keys(privees).map((k) => privees[k].exercice_id);
  // Priorité : un exercice jamais attribué à cet étudiant ; à défaut, un exercice de la session
  // absent de cette copie ; en dernier recours, un exercice déjà vu (hors exercices encore
  // actifs), avec de nouvelles valeurs (§5 et §12).
  let choix = choisirExercices(cand.exercices, cand.dejaFaits, dansCopie, 1)[0];
  if (!choix) {
    const encoreActifs = attributions.filter((a) => a.statut === 'active' && a.id !== attributionId).map((a) => privees[a.id].exercice_id);
    choix = melanger(cand.exercices.filter((ex) => encoreActifs.indexOf(ex.id) === -1))[0];
  }
  if (!choix) return { remplacementId: null, exerciceId: null };
  const nouvelle = construireAttribution(choix, cible.rang, cible.id);
  cible.statut = 'invalidee';
  cible.motif = motif;
  attributions.push(nouvelle.publique);
  majCopie.attributions = attributions;
  majCopie.exercice_courant = nouvelle.publique.id;
  majPrive['attributions.' + nouvelle.publique.id] = nouvelle.privee;
  return { remplacementId: nouvelle.publique.id, exerciceId: choix.id };
}

// Retour de l'étudiant sur la page (ou reconnexion avec une absence en cours) : mesure la durée
// et applique la règle. uid : identité de l'appelant, qui doit être le titulaire de la copie.
export async function traiterRetour(copieId: string, uid: string,
  o: { dureeClientMs?: any; source?: any; attributionId?: any; detail?: string }): Promise<Donnees> {
  const copieRef = db().collection(COL.copies).doc(copieId);
  const priveRef = db().collection(COL.prive).doc(copieId);
  const avant = await copieRef.get();
  if (!avant.exists || (avant.data() as Donnees).uid !== uid) throw new HttpsError('permission-denied', 'Cette copie n\'est pas la vôtre.');
  const declaree = typeof o.dureeClientMs === 'number' && isFinite(o.dureeClientMs)
    ? Math.min(Math.max(0, Math.round(o.dureeClientMs)), ABSENCE_MAX_MS) : 0;
  // La banque n'est lue que si un remplacement est plausible (une absence brève est fréquente).
  const c0 = avant.data() as Donnees;
  const p0 = ((await priveRef.get()).data() || {}) as Donnees;
  const mesure0 = p0.absence ? Date.now() - millis(p0.absence.debut) : 0;
  const cand = estActive(c0) && Math.max(mesure0, declaree) >= c0.delai_perte_focus_ms - 500 && c0.changements_utilises < c0.quota_remplacements
    ? await chargerCandidats(c0) : null;

  return db().runTransaction(async (tx) => {
    const [cs, ps] = await Promise.all([tx.get(copieRef), tx.get(priveRef)]);
    const copie = cs.data() as Donnees;
    const prive = (ps.data() || {}) as Donnees;
    if (copie.uid !== uid) throw new HttpsError('permission-denied', 'Cette copie n\'est pas la vôtre.');
    const absence = prive.absence || null;
    if (!absence && !declaree) return { incident: false };
    // Durée retenue : celle que le serveur a mesurée entre le départ et le retour. La durée
    // déclarée par le navigateur ne sert que si le signal de départ n'est jamais arrivé.
    const mesuree = absence ? Math.min(Date.now() - millis(absence.debut), ABSENCE_MAX_MS) : 0;
    const duree = Math.max(mesuree, declaree);
    const type = sourceValide((absence && absence.source) || o.source);
    const actives: Donnees[] = (copie.attributions || []).filter((a: Donnees) => a.statut === 'active');
    const souhaitee = [absence && absence.attribution_id, o.attributionId, copie.exercice_courant];
    const premiere = souhaitee.find((x) => actives.some((b) => b.id === x));
    const cible = actives.find((a) => a.id === premiere) || actives[0] || null;
    const base = {
      session_id: copie.session_id, copie_id: copieId, etudiant_id: copie.etudiant_id, type,
      attribution_id: cible ? cible.id : null, duree_absence_ms: duree, detail: o.detail || null
    };
    const majCopie: Donnees = { absence_depuis: null, updated_at: FieldValue.serverTimestamp() };
    const majPrive: Donnees = { absence: null, updated_at: FieldValue.serverTimestamp() };
    const evRef = refNouvelEvenement();

    if (!estActive(copie) || !cible) {
      // Copie déjà rendue ou en attente : l'événement est consigné, sans conséquence.
      tx.set(evRef, donneesEvenement(Object.assign(base, { bref: duree < copie.delai_perte_focus_ms, incident: false })));
      tx.update(copieRef, majCopie); tx.update(priveRef, majPrive);
      return { incident: false };
    }
    if (duree < copie.delai_perte_focus_ms) {
      // Retour avant la fin du délai : aucun incident, mais l'absence brève est journalisée.
      tx.set(evRef, donneesEvenement(Object.assign(base, { bref: true, incident: false })));
      tx.update(copieRef, majCopie); tx.update(priveRef, majPrive);
      return { incident: false, bref: true };
    }

    const numero = (copie.changements_utilises || 0) + 1;
    majCopie.changements_utilises = numero;
    if (numero <= copie.quota_remplacements && cand) {
      const r = remplacerDans(copie, prive, cible.id, 'sortie de la page (' + secondes(duree) + ')', cand, majCopie, majPrive);
      if (r.remplacementId) {
        majCopie.message = { type: 'remplacement', texte: messageRemplacement(copie.delai_perte_focus_ms, copie.quota_remplacements - numero), a: Timestamp.now() };
        tx.set(db().collection(COL.historique).doc(copie.etudiant_id), { exercice_ids: FieldValue.arrayUnion(r.exerciceId), updated_at: FieldValue.serverTimestamp() }, { merge: true });
        tx.set(evRef, donneesEvenement(Object.assign(base, { bref: false, incident: true, numero, effet: 'remplacement', remplacement_id: r.remplacementId, annule: false })));
        tx.update(copieRef, majCopie); tx.update(priveRef, majPrive);
        return { incident: true, effet: 'remplacement', numero };
      }
      // Sélection épuisée : l'incident compte et reste visible de l'enseignant, l'exercice reste.
      majCopie.message = { type: 'remplacement', texte: 'Vous avez quitté la page de l\'épreuve. Votre enseignant en est informé.', a: Timestamp.now() };
      tx.set(evRef, donneesEvenement(Object.assign(base, { bref: false, incident: true, numero, effet: 'sans_remplacement', annule: false })));
      tx.update(copieRef, majCopie); tx.update(priveRef, majPrive);
      return { incident: true, effet: 'sans_remplacement', numero };
    }
    // Quota épuisé (3e incident par défaut) : plus de remplacement, copie verrouillée et signalée.
    majCopie.statut = 'verrouillee';
    majCopie.statut_avant_verrou = copie.statut;
    majCopie.message = { type: 'verrouillage', texte: MESSAGE_VERROUILLAGE, a: Timestamp.now() };
    tx.set(evRef, donneesEvenement(Object.assign(base, { bref: false, incident: true, numero, effet: 'verrouillage', annule: false })));
    tx.update(copieRef, majCopie); tx.update(priveRef, majPrive);
    return { incident: true, effet: 'verrouillage', numero };
  });
}

// ── Étudiant : signalement d'un événement ────────────────────────────────────
export const logEvent = onCall(OPTIONS, async (req) => {
  const uid = uidDe(req);
  const d = req.data || {};
  const copieId = texte(d.copie_id, 'copie_id');
  const type = texte(d.type, 'type', 30);
  const copieRef = db().collection(COL.copies).doc(copieId);
  const priveRef = db().collection(COL.prive).doc(copieId);

  if (type === 'focus_revenu') {
    return traiterRetour(copieId, uid, { dureeClientMs: d.duree_client_ms, source: d.source, attributionId: d.attribution_id });
  }

  if (type === 'focus_perdu') {
    return db().runTransaction(async (tx) => {
      const [cs, ps] = await Promise.all([tx.get(copieRef), tx.get(priveRef)]);
      if (!cs.exists || (cs.data() as Donnees).uid !== uid) throw new HttpsError('permission-denied', 'Cette copie n\'est pas la vôtre.');
      const copie = cs.data() as Donnees;
      if (!estActive(copie)) return { note: false };
      // Un départ déjà en cours (retour jamais signalé) garde son heure d'origine.
      if (((ps.data() || {}) as Donnees).absence) return { note: true };
      const debut = Timestamp.now();
      const att = (copie.attributions || []).find((a: Donnees) => a.id === d.attribution_id && a.statut === 'active');
      tx.update(priveRef, { absence: { debut, source: sourceValide(d.source), attribution_id: att ? att.id : (copie.exercice_courant || null) }, updated_at: FieldValue.serverTimestamp() });
      tx.update(copieRef, { absence_depuis: debut, updated_at: FieldValue.serverTimestamp() });
      return { note: true };
    });
  }

  if (type === 'paste_blocked' || type === 'drop_blocked') {
    return db().runTransaction(async (tx) => {
      const cs = await tx.get(copieRef);
      if (!cs.exists || (cs.data() as Donnees).uid !== uid) throw new HttpsError('permission-denied', 'Cette copie n\'est pas la vôtre.');
      const copie = cs.data() as Donnees;
      if ((copie.collages_bloques || 0) >= COLLAGES_JOURNALISES_MAX) return { note: false };
      const att = (copie.attributions || []).find((a: Donnees) => a.id === d.attribution_id);
      tx.update(copieRef, { collages_bloques: FieldValue.increment(1), updated_at: FieldValue.serverTimestamp() });
      tx.set(refNouvelEvenement(), donneesEvenement({
        session_id: copie.session_id, copie_id: copieId, etudiant_id: copie.etudiant_id, type,
        attribution_id: att ? att.id : null,
        detail: typeof d.bloc === 'string' ? 'bloc « ' + d.bloc.slice(0, 40) + ' »' : null
      }));
      return { note: true };
    });
  }

  throw new HttpsError('invalid-argument', 'Type d\'événement inconnu.');
});

// ── Enseignant ───────────────────────────────────────────────────────────────
// Remplacement décidé par l'enseignant (exercice mal posé, par exemple) : même mécanisme que
// l'anti-triche, mais sans toucher au compteur d'incidents de l'étudiant.
export const replaceAssignment = onCall(OPTIONS, async (req) => {
  await exigerEnseignant(req);
  const d = req.data || {};
  const copieId = texte(d.copie_id, 'copie_id');
  const attributionId = texte(d.attribution_id, 'attribution_id');
  const copieRef = db().collection(COL.copies).doc(copieId);
  const priveRef = db().collection(COL.prive).doc(copieId);
  const avant = await copieRef.get();
  if (!avant.exists) throw new HttpsError('not-found', 'Copie introuvable.');
  const cand = await chargerCandidats(avant.data() as Donnees);
  return db().runTransaction(async (tx) => {
    const [cs, ps] = await Promise.all([tx.get(copieRef), tx.get(priveRef)]);
    const copie = cs.data() as Donnees;
    if (!estActive(copie)) throw new HttpsError('failed-precondition', 'La copie n\'est plus en cours.');
    const att = (copie.attributions || []).find((a: Donnees) => a.id === attributionId);
    if (!att || att.statut !== 'active') throw new HttpsError('failed-precondition', 'Cet exercice n\'est pas en cours.');
    const majCopie: Donnees = { updated_at: FieldValue.serverTimestamp() };
    const majPrive: Donnees = { updated_at: FieldValue.serverTimestamp() };
    const r = remplacerDans(copie, (ps.data() || {}) as Donnees, attributionId, 'remplacé par l\'enseignant', cand, majCopie, majPrive);
    if (!r.remplacementId) throw new HttpsError('failed-precondition', 'La sélection de la session n\'offre plus d\'exercice de remplacement.');
    majCopie.message = { type: 'remplacement', texte: 'Votre enseignant a remplacé un exercice de votre copie. Vos réponses précédentes sont conservées.', a: Timestamp.now() };
    tx.set(db().collection(COL.historique).doc(copie.etudiant_id), { exercice_ids: FieldValue.arrayUnion(r.exerciceId), updated_at: FieldValue.serverTimestamp() }, { merge: true });
    tx.set(refNouvelEvenement(), donneesEvenement({
      session_id: copie.session_id, copie_id: copieId, etudiant_id: copie.etudiant_id, type: 'remplacement_manuel',
      attribution_id: attributionId, remplacement_id: r.remplacementId, detail: 'par l\'enseignant'
    }));
    tx.update(copieRef, majCopie); tx.update(priveRef, majPrive);
    return { remplacement_id: r.remplacementId };
  });
});

// Annule un incident (faux positif, §5.5) : l'exercice invalidé est rétabli, son remplaçant est
// conservé avec le statut « remplacement_annule » (non noté par défaut), le compteur est
// décrémenté. Seul l'incident le plus récent d'une copie s'annule : les remplacements
// s'enchaînent, on les défait donc dans l'ordre inverse.
export const cancelIncident = onCall(OPTIONS, async (req) => {
  await exigerEnseignant(req);
  const evenementId = texte((req.data || {}).evenement_id, 'evenement_id');
  const evRef = db().collection(COL.evenements).doc(evenementId);
  const avant = await evRef.get();
  if (!avant.exists) throw new HttpsError('not-found', 'Incident introuvable.');
  const copieId = (avant.data() as Donnees).copie_id;
  const autres = await db().collection(COL.evenements).where('copie_id', '==', copieId).get();
  const copieRef = db().collection(COL.copies).doc(copieId);
  return db().runTransaction(async (tx) => {
    const [es, cs] = await Promise.all([tx.get(evRef), tx.get(copieRef)]);
    const ev = es.data() as Donnees;
    const copie = cs.data() as Donnees;
    if (!ev.incident || ev.annule) throw new HttpsError('failed-precondition', 'Cet événement n\'est pas un incident en vigueur.');
    const plusRecent = autres.docs.some((doc) => {
      const e = doc.data();
      return doc.id !== evenementId && e.incident && !e.annule && (e.numero || 0) > (ev.numero || 0);
    });
    if (plusRecent) throw new HttpsError('failed-precondition', 'Annulez d\'abord l\'incident le plus récent de cette copie.');

    const tempsRestant = Date.now() < millis(copie.fin);
    const maj: Donnees = {
      changements_utilises: Math.max(0, (copie.changements_utilises || 0) - 1),
      updated_at: FieldValue.serverTimestamp()
    };
    let effet = 'compteur décrémenté';
    if (ev.effet === 'remplacement') {
      const enCours = estActive(copie) || copie.statut === 'verrouillee';
      maj.attributions = (copie.attributions || []).map((a: Donnees) => {
        // « Rétabli si le temps le permet » : copie encore ouverte → l'exercice redevient actif ;
        // copie déjà rendue → il est rétabli comme rendu, avec les réponses archivées.
        if (a.id === ev.attribution_id) { const r = Object.assign({}, a, { statut: enCours ? 'active' : 'rendue' }); delete r.motif; return r; }
        if (a.id === ev.remplacement_id) return Object.assign({}, a, { statut: 'remplacement_annule' });
        return a;
      });
      if (copie.exercice_courant === ev.remplacement_id) maj.exercice_courant = ev.attribution_id;
      effet = 'exercice d\'origine rétabli';
      if (estActive(copie)) maj.message = { type: 'annulation', texte: 'Votre enseignant a annulé le remplacement : vous retrouvez l\'exercice précédent, avec vos réponses.', a: Timestamp.now() };
    } else if (ev.effet === 'verrouillage' && copie.statut === 'verrouillee') {
      if (tempsRestant) {
        maj.statut = copie.statut_avant_verrou || 'en_cours';
        maj.message = { type: 'annulation', texte: 'Votre enseignant a rouvert votre copie : vous pouvez continuer.', a: Timestamp.now() };
        effet = 'copie déverrouillée';
      } else {
        maj.statut = 'rendue_auto';
        maj.rendue_a = FieldValue.serverTimestamp();
        maj.attributions = (copie.attributions || []).map((a: Donnees) => a.statut === 'active' ? Object.assign({}, a, { statut: 'rendue' }) : a);
        effet = 'copie rendue (temps écoulé)';
      }
    }
    tx.update(copieRef, maj);
    tx.update(evRef, { annule: true, annule_a: FieldValue.serverTimestamp() });
    tx.set(refNouvelEvenement(), donneesEvenement({
      session_id: copie.session_id, copie_id: copieId, etudiant_id: copie.etudiant_id, type: 'incident_annule',
      attribution_id: ev.attribution_id || null, detail: effet
    }));
    return { ok: true, effet };
  });
});

// Déverrouille une copie sans annuler d'incident (§1 : « l'enseignant peut la déverrouiller »).
// Le compteur reste au-dessus du quota : une nouvelle sortie de page la verrouille de nouveau.
export const unlockCopy = onCall(OPTIONS, async (req) => {
  await exigerEnseignant(req);
  const copieId = texte((req.data || {}).copie_id, 'copie_id');
  const copieRef = db().collection(COL.copies).doc(copieId);
  return db().runTransaction(async (tx) => {
    const cs = await tx.get(copieRef);
    if (!cs.exists) throw new HttpsError('not-found', 'Copie introuvable.');
    const copie = cs.data() as Donnees;
    if (copie.statut !== 'verrouillee') throw new HttpsError('failed-precondition', 'Cette copie n\'est pas verrouillée.');
    if (Date.now() >= millis(copie.fin)) throw new HttpsError('failed-precondition', 'Le temps de cette copie est écoulé : prolongez d\'abord la durée de la session.');
    tx.update(copieRef, {
      statut: copie.statut_avant_verrou || 'en_cours',
      message: { type: 'annulation', texte: 'Votre enseignant a rouvert votre copie : vous pouvez continuer.', a: Timestamp.now() },
      updated_at: FieldValue.serverTimestamp()
    });
    tx.set(refNouvelEvenement(), donneesEvenement({
      session_id: copie.session_id, copie_id: copieId, etudiant_id: copie.etudiant_id, type: 'copie_deverrouillee', detail: 'par l\'enseignant'
    }));
    return { ok: true };
  });
});
