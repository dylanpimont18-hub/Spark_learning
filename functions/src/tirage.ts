// Tirage côté serveur : choix des exercices d'un étudiant, valeurs de la variante et corrigé.
// Le calcul est fait par le moteur partagé avec le navigateur (js/devoir/devoirEngine.js, copié
// dans functions/vendor/ au build). Le corrigé et le barème ne quittent jamais la partie privée.
import { randomInt } from 'crypto';
import * as math from 'mathjs';
import { db, COL, Donnees } from './commun';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Moteur: any = require('../vendor/devoirEngine.js');

let _calc: any = null;
function calc(): any {
  if (!_calc) _calc = Moteur.creerCalculateur(math);
  return _calc;
}

// Aléa cryptographique : un étudiant ne peut pas prédire la variante de son voisin.
function alea(): number {
  return randomInt(0, 0x100000000) / 0x100000000;
}

export function melanger<T>(liste: T[]): T[] {
  const t = liste.slice();
  for (let i = t.length - 1; i > 0; i--) {
    const j = randomInt(0, i + 1);
    const tmp = t[i]; t[i] = t[j]; t[j] = tmp;
  }
  return t;
}

export function validerExercice(ex: Donnees): string[] {
  return Moteur.valider(ex, calc()).erreurs;
}

export async function chargerExercices(ids: string[]): Promise<Donnees[]> {
  if (!ids.length) return [];
  const refs = ids.map((id) => db().collection(COL.exercices).doc(id));
  const docs = await db().getAll(...refs);
  return docs.filter((d) => d.exists).map((d) => Moteur.depuisStockage(Object.assign({}, d.data(), { id: d.id })));
}

// Choisit n exercices parmi les candidats (hors « exclus »), en priorité ceux que l'étudiant n'a
// jamais faits lors d'un devoir précédent (§12). Un exercice déjà vu peut être réutilisé si la
// sélection est trop petite : ses valeurs seront de toute façon retirées.
export function choisirExercices(candidats: Donnees[], dejaFaits: string[], exclus: string[], n: number): Donnees[] {
  const libres = candidats.filter((ex) => exclus.indexOf(ex.id) === -1);
  const neufs = melanger(libres.filter((ex) => dejaFaits.indexOf(ex.id) === -1));
  const vus = melanger(libres.filter((ex) => dejaFaits.indexOf(ex.id) !== -1));
  return neufs.concat(vus).slice(0, n);
}

export interface Attribution {
  publique: Donnees;   // ce que l'étudiant reçoit : énoncé instancié et libellés des blocs
  privee: Donnees;     // valeurs tirées, corrigé calculé, barème : enseignant seulement
}

export function construireAttribution(ex: Donnees, rang: number, remplace: string | null): Attribution {
  const id = db().collection(COL.copies).doc().id;
  const v = Moteur.instancier(ex, calc(), { rng: alea });
  return {
    publique: {
      id,
      rang,
      statut: 'active',
      titre: ex.titre,
      enonce: v.enonce,
      // long : bloc de rédaction (zone de saisie plus grande, limite de longueur relevée).
      blocs: (ex.blocs_reponse || []).map((b: Donnees) => b.long === true ? { id: b.id, label: b.label, long: true } : { id: b.id, label: b.label }),
      medias: (ex.medias || []).map((m: Donnees) => ({ type: m.type, ref: m.ref, legende: m.legende || '' })),
      remplace
    },
    privee: {
      exercice_id: ex.id,
      titre: ex.titre,
      chapitre: ex.chapitre || null,
      type: v.type,
      valeurs: v.valeurs,
      donnees: v.donnees,
      corrige: v.corrige,
      // Critères notés : blocs de calcul et, pour une question rédigée ou mixte, éléments attendus
      // (nature « element », avec le texte attendu de cette variante).
      bareme: v.bareme
    }
  };
}
