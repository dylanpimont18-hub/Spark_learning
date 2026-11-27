// Essai local du module devoir : remplit les émulateurs avec un jeu de démonstration (compte
// enseignant, classe de 11 étudiants, 6 exercices génériques), démarre la fausse IA, puis reste
// en attente. Lancé par : node scripts/devoir-emulateurs.js   (Ctrl+C pour tout arrêter)
const E = require('./lib/devoir-emulateur.js');

(async () => {
  await E.toutEffacer();
  await E.semer();
  try { require('./lib/devoir-fausse-ia.js').demarrer(); } catch (e) { /* pré-correction IA : MVP-4 */ }
  console.log([
    '',
    '════════════════════════════════════════════════════════════════════',
    '  Module devoir — essai local (émulateurs, aucune donnée réelle)',
    '',
    '  1. Enseignant : ' + E.URL_SITE + '/connexion',
    '       e-mail : ' + E.ENSEIGNANT.email + '     mot de passe : ' + E.ENSEIGNANT.motDePasse,
    '       puis ' + E.URL_SITE + '/admin → onglet « Devoirs » → « Sessions »',
    '  2. Étudiant (fenêtre de navigation privée) : ' + E.URL_SITE + '/devoirs',
    '  3. Données en direct : http://127.0.0.1:4000 (interface des émulateurs)',
    '',
    '  Ctrl+C pour arrêter. Tout est effacé à chaque lancement.',
    '════════════════════════════════════════════════════════════════════',
    ''
  ].join('\n'));
  setInterval(() => {}, 1 << 30);   // garde le processus (et donc les émulateurs) en vie
})().catch((e) => { console.error(e); process.exit(1); });
