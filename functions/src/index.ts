// Cloud Functions du module devoir en classe (docs/evaluation/CAHIER-DES-CHARGES.md §11).
// Toutes sont des fonctions appelables (onCall) en europe-west1.
export { createSession, updateSession, syncSession, releaseName, joinSession, saveDraft, submitCopy } from './session';
export { logEvent, replaceAssignment, cancelIncident, unlockCopy } from './antitriche';
