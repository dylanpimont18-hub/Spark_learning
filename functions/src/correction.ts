// Correction (MVP-4) : pré-correction par l'IA lancée par l'enseignant, modification manuelle
// en conservant la proposition de l'IA, validation et note finale. Tout est écrit dans
// devoir_corrections et devoir_copies_prive, que les règles Firestore interdisent aux
// étudiants : la copie lisible par l'étudiant n'est jamais touchée ici (rien avant publication).
import { onCall } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';
import {
  db, COL, REGION, Donnees, HttpsError, Timestamp, FieldValue, exigerEnseignant, texte, estActive
} from './commun';
import { finaliserExpirees } from './session';
import {
  Demande, Critere, VERSION_PROMPT, MODELE_PAR_DEFAUT, preCorriger, appelerModele, reponseVide, correctionReponseVide
} from './ia';

// Clé lue dans le gestionnaire de secrets : firebase functions:secrets:set ANTHROPIC_API_KEY.
// Elle n'est accessible qu'à runPreCorrection, jamais au navigateur ni au dépôt.
const CLE_IA = defineSecret('ANTHROPIC_API_KEY');
// Modèle et plafond modifiables sans toucher au code : variables d'environnement lues dans le
// fichier functions/.env (non versionné, voir functions/.env.example), puis redéploiement.
// Simples variables plutôt que des « paramètres » Firebase : ceux-ci posent une question au
// clavier à chaque lancement de l'émulateur et à chaque déploiement.
function modeleIa(): string {
  return (process.env.DEVOIR_MODELE_IA || '').trim() || MODELE_PAR_DEFAUT;
}
function appelsMaxParJour(): number {
  const n = parseInt(process.env.DEVOIR_IA_APPELS_MAX_PAR_JOUR || '', 10);
  return n > 0 ? n : 300;
}

const NOTE_SUR = 20;
const ARRONDI_NOTE = 0.5;
const PARALLELE = 3;
const MODIFICATIONS_GARDEES = 20;

// Dans l'émulateur uniquement, l'appel est dirigé vers un faux serveur local : les tests ne
// font aucun appel réel et n'ont besoin d'aucune clé. Hors émulateur, la variable est ignorée.
function urlDeTest(): string | undefined {
  return process.env.FUNCTIONS_EMULATOR === 'true' ? (process.env.DEVOIR_IA_URL_TEST || undefined) : undefined;
}

// Garde-fou de dépense, en plus du plafond réglé chez Anthropic : nombre d'appels par jour.
async function reserverAppel(): Promise<void> {
  const jour = new Date().toISOString().slice(0, 10);
  const ref = db().collection(COL.tentatives).doc('ia_' + jour);
  await db().runTransaction(async (tx) => {
    const d = await tx.get(ref);
    const n = d.exists ? ((d.data() as Donnees).appels || 0) : 0;
    if (n >= appelsMaxParJour()) {
      throw new HttpsError('resource-exhausted', 'Plafond quotidien d\'appels à l\'IA atteint (' + appelsMaxParJour() + '). Réessayez demain ou relevez DEVOIR_IA_APPELS_MAX_PAR_JOUR.');
    }
    tx.set(ref, { appels: n + 1, updated_at: FieldValue.serverTimestamp() }, { merge: true });
  });
}

function finaleDepuis(proposition: Donnees | null, bareme: Critere[]): Donnees {
  const criteres = bareme.map((b) => {
    const c = proposition ? proposition.criteres.find((x: Donnees) => x.critere_id === b.id) : null;
    const critere: Donnees = { critere_id: b.id, label: b.label, points_obtenus: c ? c.points_obtenus : 0, points_max: b.points };
    if (b.nature === 'element') critere.nature = 'element';   // élément attendu d'une question rédigée
    return critere;
  });
  return {
    criteres,
    note: criteres.reduce((s, c) => s + c.points_obtenus, 0),
    note_max: bareme.reduce((s, b) => s + b.points, 0),
    commentaire_pour_etudiant: proposition ? proposition.commentaire_pour_etudiant : '',
    axes_progression: proposition ? proposition.axes_progression : [],
    erreurs: proposition ? proposition.erreurs : []
  };
}

async function enParallele<T>(taches: (() => Promise<T>)[], limite: number): Promise<T[]> {
  const resultats: T[] = new Array(taches.length);
  let suivant = 0;
  async function ouvrier(): Promise<void> {
    while (suivant < taches.length) {
      const i = suivant++;
      resultats[i] = await taches[i]();
    }
  }
  await Promise.all(Array.from({ length: Math.min(limite, taches.length) }, ouvrier));
  return resultats;
}

// Exercices notés par défaut : ceux que l'étudiant a rendus. Un exercice invalidé (anti-triche)
// ou un remplacement annulé reste dans la copie, non noté : l'enseignant décide (§12).
function estNotable(copie: Donnees, a: Donnees): boolean {
  return a.statut === 'rendue' || (copie.statut === 'verrouillee' && a.statut === 'active');
}

// Pré-corrige une copie (un appel au modèle par exercice rendu). Lancement manuel par
// l'enseignant, copie par copie : le tableau de relecture enchaîne les copies et affiche
// l'avancement. sans_ia : prépare seulement les fiches de correction, à remplir à la main.
export const runPreCorrection = onCall({ region: REGION, secrets: [CLE_IA], timeoutSeconds: 540, memory: '512MiB', maxInstances: 5 }, async (req) => {
  await exigerEnseignant(req);
  const d = req.data || {};
  const copieId = texte(d.copie_id, 'copie_id');
  const sansIa = d.sans_ia === true;
  const forcer = d.forcer === true;
  const copieRef = db().collection(COL.copies).doc(copieId);
  let cs = await copieRef.get();
  if (!cs.exists) throw new HttpsError('not-found', 'Copie introuvable.');
  if (estActive(cs.data() as Donnees)) {
    await finaliserExpirees((cs.data() as Donnees).session_id, false, 'temps écoulé');
    cs = await copieRef.get();
  }
  const copie = cs.data() as Donnees;
  if (estActive(copie)) throw new HttpsError('failed-precondition', 'Cette copie est encore en cours : attendez le rendu ou fermez la session.');
  const prive = ((await db().collection(COL.prive).doc(copieId).get()).data() || {}) as Donnees;
  if (prive.correction && prive.correction.statut === 'validee' && !forcer) {
    return { corrigees: 0, erreurs: 0, vides: 0, ignorees: (copie.attributions || []).length, deja_validee: true };
  }
  const existantes: Record<string, Donnees> = {};
  (await db().collection(COL.corrections).where('copie_id', '==', copieId).get()).docs.forEach((doc) => { existantes[doc.id] = doc.data(); });

  const cle = sansIa ? '' : CLE_IA.value();
  if (!sansIa && !cle) throw new HttpsError('failed-precondition', 'Le secret ANTHROPIC_API_KEY n\'est pas défini.');
  const reglages = { cle, modele: modeleIa(), baseURL: urlDeTest() };
  const bilan = { corrigees: 0, erreurs: 0, vides: 0, ignorees: 0, preparees: 0 };

  const taches = (copie.attributions || []).map((a: Donnees) => async () => {
    const pa = (prive.attributions || {})[a.id];
    const ref = db().collection(COL.corrections).doc(a.id);
    const dejaLa = existantes[a.id];
    if (!pa) { bilan.ignorees++; return; }
    const bareme: Critere[] = (pa.bareme || []).map((b: Donnees) => b.nature === 'element'
      ? { id: b.id, label: b.label, points: b.points, nature: 'element', attendu: b.attendu || '' }
      : { id: b.id, label: b.label, points: b.points });
    const base = {
      session_id: copie.session_id, copie_id: copieId, etudiant_id: copie.etudiant_id, attribution_id: a.id,
      exercice_id: pa.exercice_id, rang: a.rang, statut_attribution: a.statut, updated_at: FieldValue.serverTimestamp(),
      // Pour le suivi par chapitre (panneau admin) : repris de l'exercice au moment du tirage.
      chapitre: pa.chapitre || null, titre: pa.titre || a.titre || '', type: pa.type || 'chiffre'
    };
    if (!estNotable(copie, a)) {
      // Exercice invalidé ou remplacement annulé : fiche créée, non notée par l'IA.
      if (!dejaLa) {
        await ref.set(Object.assign({}, base, {
          statut: 'non_notee', compte_dans_note: false, source: 'enseignant', ia: null, erreur_ia: null, prioritaire: false,
          finale: finaleDepuis(null, bareme), modifications: [], created_at: FieldValue.serverTimestamp()
        }));
      }
      bilan.ignorees++;
      return;
    }
    // Ne jamais écraser le travail de l'enseignant : fiche validée ou déjà modifiée à la main.
    if (dejaLa && (dejaLa.statut === 'validee' || (dejaLa.modifications || []).length)) { bilan.ignorees++; return; }
    if (dejaLa && dejaLa.ia && !forcer) { bilan.ignorees++; return; }
    if (sansIa) {
      if (!dejaLa) {
        await ref.set(Object.assign({}, base, {
          statut: 'brouillon', compte_dans_note: true, source: 'enseignant', ia: null, erreur_ia: null, prioritaire: false,
          finale: finaleDepuis(null, bareme), modifications: [], created_at: FieldValue.serverTimestamp()
        }));
        bilan.preparees++;
      } else { bilan.ignorees++; }
      return;
    }
    const demande: Demande = {
      attribution_id: a.id, enonce: a.enonce, valeurs: pa.valeurs || {}, corrige: pa.corrige || {}, bareme,
      blocs: (a.blocs || []).map((b: Donnees) => ({ id: b.id, label: b.label })),
      reponse: ((copie.reponses || {})[a.id] || {}).blocs || {}
    };
    let proposition: Donnees | null = null;
    let erreur: string | null = null;
    let essais = 0;
    let modele = reglages.modele;
    if (reponseVide(demande)) {
      proposition = correctionReponseVide(demande);
      modele = 'aucun (réponse vide)';
      bilan.vides++;
    } else {
      const r = await preCorriger(demande, async (dd) => { await reserverAppel(); return appelerModele(reglages, dd); });
      proposition = r.correction; erreur = r.erreur; essais = r.essais;
    }
    if (proposition) {
      await ref.set(Object.assign({}, base, {
        statut: 'brouillon', compte_dans_note: true, source: 'ia', erreur_ia: null, prioritaire: proposition.prioritaire,
        ia: Object.assign({}, proposition, { modele, version_prompt: VERSION_PROMPT, essais, cree_a: Timestamp.now() }),
        finale: finaleDepuis(proposition, bareme), modifications: [], created_at: FieldValue.serverTimestamp()
      }));
      bilan.corrigees++;
    } else {
      // Statut « erreur IA » : la fiche existe, vide, pour une correction manuelle (§6).
      await ref.set(Object.assign({}, base, {
        statut: 'erreur_ia', compte_dans_note: true, source: 'enseignant', ia: null, erreur_ia: erreur, prioritaire: true,
        finale: finaleDepuis(null, bareme), modifications: [], created_at: FieldValue.serverTimestamp()
      }));
      bilan.erreurs++;
    }
  });
  await enParallele(taches, PARALLELE);
  // Le statut de la copie n'est touché que si des fiches ont été écrites : relancer sur une copie
  // déjà validée ne lui retire pas sa validation.
  if (bilan.corrigees + bilan.erreurs + bilan.preparees > 0 || !prive.correction) {
    await db().collection(COL.prive).doc(copieId).set({
      correction: { statut: 'pre_corrigee', note_finale: null, pre_corrigee_a: FieldValue.serverTimestamp() }, updated_at: FieldValue.serverTimestamp()
    }, { merge: true });
  }
  return bilan;
});

// Modification manuelle d'une fiche. La proposition de l'IA (champ « ia ») n'est jamais
// réécrite ; chaque modification est ajoutée à l'historique avec l'état précédent.
export const saveCorrection = onCall({ region: REGION, maxInstances: 10 }, async (req) => {
  const uid = await exigerEnseignant(req);
  const d = req.data || {};
  const attributionId = texte(d.attribution_id, 'attribution_id');
  const ref = db().collection(COL.corrections).doc(attributionId);
  return db().runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists) throw new HttpsError('not-found', 'Fiche de correction introuvable : lancez d\'abord la pré-correction (avec ou sans IA).');
    const c = snap.data() as Donnees;
    const finale: Donnees = JSON.parse(JSON.stringify(c.finale));
    if (d.criteres !== undefined) {
      if (!Array.isArray(d.criteres)) throw new HttpsError('invalid-argument', 'criteres : liste attendue.');
      d.criteres.forEach((x: Donnees) => {
        const cible = finale.criteres.find((k: Donnees) => k.critere_id === (x && x.critere_id));
        if (!cible) throw new HttpsError('invalid-argument', 'Critère inconnu du barème.');
        if (typeof x.points_obtenus !== 'number' || !isFinite(x.points_obtenus) || x.points_obtenus < 0 || x.points_obtenus > cible.points_max) {
          throw new HttpsError('invalid-argument', '« ' + cible.label + ' » : entre 0 et ' + cible.points_max + ' points.');
        }
        cible.points_obtenus = Math.round(x.points_obtenus * 100) / 100;
      });
      finale.note = Math.round(finale.criteres.reduce((s: number, k: Donnees) => s + k.points_obtenus, 0) * 100) / 100;
    }
    if (d.commentaire_pour_etudiant !== undefined) {
      if (typeof d.commentaire_pour_etudiant !== 'string' || d.commentaire_pour_etudiant.length > 4000) throw new HttpsError('invalid-argument', 'Commentaire trop long.');
      finale.commentaire_pour_etudiant = d.commentaire_pour_etudiant;
    }
    if (d.axes_progression !== undefined) {
      if (!Array.isArray(d.axes_progression) || d.axes_progression.length > 20) throw new HttpsError('invalid-argument', 'axes_progression : liste attendue.');
      finale.axes_progression = d.axes_progression.map((x: Donnees) => ({
        axe: String((x && x.axe) || '').slice(0, 300), action_concrete: String((x && x.action_concrete) || '').slice(0, 600)
      })).filter((x: Donnees) => x.axe || x.action_concrete);
    }
    const compte = d.compte_dans_note === undefined ? c.compte_dans_note : d.compte_dans_note === true;
    const modification = {
      a: Timestamp.now(), par: uid,
      avant: { note: c.finale.note, criteres: c.finale.criteres.map((k: Donnees) => ({ critere_id: k.critere_id, points_obtenus: k.points_obtenus })), compte_dans_note: c.compte_dans_note },
      apres: { note: finale.note, compte_dans_note: compte }
    };
    tx.update(ref, {
      finale, compte_dans_note: compte, source: 'enseignant',
      // Une fiche modifiée repasse en brouillon : la copie devra être validée de nouveau.
      statut: 'brouillon',
      modifications: (c.modifications || []).concat([modification]).slice(-MODIFICATIONS_GARDEES),
      updated_at: FieldValue.serverTimestamp()
    });
    if (c.statut === 'validee') {
      tx.set(db().collection(COL.prive).doc(c.copie_id), { correction: { statut: 'pre_corrigee', note_finale: null } }, { merge: true });
    }
    return { note: finale.note, note_max: finale.note_max, statut: 'brouillon' };
  });
});

export function noteSur20(points: number, max: number): number {
  if (!(max > 0)) return 0;
  return Math.round((points / max) * NOTE_SUR / ARRONDI_NOTE) * ARRONDI_NOTE;
}

// Valide la correction d'une copie : toutes ses fiches deviennent « validée » et la note finale
// (sur 20, arrondie au demi-point) est calculée sur les exercices pris en compte.
export const validateCorrection = onCall({ region: REGION, maxInstances: 10 }, async (req) => {
  const uid = await exigerEnseignant(req);
  const copieId = texte((req.data || {}).copie_id, 'copie_id');
  const copieRef = db().collection(COL.copies).doc(copieId);
  const cs = await copieRef.get();
  if (!cs.exists) throw new HttpsError('not-found', 'Copie introuvable.');
  const copie = cs.data() as Donnees;
  if (estActive(copie)) throw new HttpsError('failed-precondition', 'Cette copie est encore en cours.');
  const fiches = await db().collection(COL.corrections).where('copie_id', '==', copieId).get();
  const parId: Record<string, Donnees> = {};
  fiches.docs.forEach((doc) => { parId[doc.id] = doc.data(); });
  const manquantes = (copie.attributions || []).filter((a: Donnees) => estNotable(copie, a) && !parId[a.id]);
  if (manquantes.length) throw new HttpsError('failed-precondition', 'Tous les exercices rendus doivent avoir une fiche de correction : lancez la pré-correction (avec ou sans IA).');
  const enErreur = fiches.docs.filter((doc) => doc.data().statut === 'erreur_ia');
  if (enErreur.length) throw new HttpsError('failed-precondition', enErreur.length + ' exercice(s) en « erreur IA » : corrigez-les à la main avant de valider.');

  let points = 0;
  let max = 0;
  const lot = db().batch();
  fiches.docs.forEach((doc) => {
    const f = doc.data();
    if (f.compte_dans_note) { points += f.finale.note; max += f.finale.note_max; }
    lot.update(doc.ref, { statut: 'validee', validee_a: FieldValue.serverTimestamp(), validee_par: uid, updated_at: FieldValue.serverTimestamp() });
  });
  const note = noteSur20(points, max);
  lot.set(db().collection(COL.prive).doc(copieId), {
    correction: { statut: 'validee', note_finale: note, note_sur: NOTE_SUR, points, points_max: max, validee_a: FieldValue.serverTimestamp(), validee_par: uid },
    updated_at: FieldValue.serverTimestamp()
  }, { merge: true });
  await lot.commit();
  return { note_finale: note, note_sur: NOTE_SUR, points, points_max: max };
});
