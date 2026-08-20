/* =========================================================
   Spark Learning – data/helpers.js
   Utilitaires aléatoires + initialisation du tableau
   ========================================================= */

window.MODULES = [];

const rand      = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randFloat = (min, max, d = 1) => parseFloat((Math.random() * (max - min) + min).toFixed(d));

/* TIRAGE SANS REMISE.
   `pick` tirait uniformement a chaque appel : sur une liste de 4 contextes,
   deux exercices consecutifs partageaient le meme une fois sur quatre. Dans le
   manuel imprime cela donnait « Un cartographe releve une echelle » deux fois
   de suite, puis « En cuisine, une recette impose une proportion » deux fois de
   suite — 25 paires d'enonces consecutifs identiques dans 19 chapitres sur 48
   (audit du 2026-08-16).

   On sert donc chaque liste par TOURNEES melangees : tous les elements sortent
   une fois avant qu'aucun ne revienne, et la tournee suivante ne redemarre
   jamais sur celui qui vient d'etre servi. La memoire est indexee par le
   CONTENU de la liste, pas par son identite : un `generate()` reconstruit son
   tableau litteral a chaque appel, l'identite changerait a chaque fois.

   Reste deterministe sous Math.random ensemence. */
const _tournees = new Map();

const pick = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  if (arr.length === 1) return arr[0];

  const cle = arr.map(x => (x && typeof x === 'object') ? JSON.stringify(x) : String(x)).join(' ');
  let etat = _tournees.get(cle);
  if (!etat) { etat = { reste: [], dernier: -1 }; _tournees.set(cle, etat); }

  if (etat.reste.length === 0) {
    etat.reste = arr.map((_, i) => i);
    for (let i = etat.reste.length - 1; i > 0; i--) {          // Fisher-Yates
      const j = Math.floor(Math.random() * (i + 1));
      [etat.reste[i], etat.reste[j]] = [etat.reste[j], etat.reste[i]];
    }
    // On tire depuis la FIN : si c'est celui qu'on vient de servir, on
    // l'echange avec le debut pour ne jamais repeter d'un tour a l'autre.
    const dernierIndex = etat.reste.length - 1;
    if (etat.reste[dernierIndex] === etat.dernier) {
      [etat.reste[dernierIndex], etat.reste[0]] = [etat.reste[0], etat.reste[dernierIndex]];
    }
  }

  etat.dernier = etat.reste.pop();
  return arr[etat.dernier];
};

// Formate un nombre pour un template LaTeX avec la virgule française (ex: fr(1.5) -> "1{,}5").
// Passer `decimals` pour arrondir avant conversion (ex: fr(x, 2) équivaut à x.toFixed(2) + virgule fr).
// À utiliser systématiquement dans exercice.generate() au lieu de .replace('.', '{,}') à la main
// (source d'un bug récurrent : notation anglaise oubliée ou accolade fermante manquante).
const fr = (value, decimals) => (decimals === undefined ? String(value) : value.toFixed(decimals)).replace('.', '{,}');
