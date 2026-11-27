// Lance la Firebase Emulator Suite pour le module devoir (auth, firestore, functions, hosting).
//
//   node scripts/devoir-emulateurs.js            → essai local : données de démo, site sur
//                                                  http://127.0.0.1:5055 (Ctrl+C pour arrêter)
//   node scripts/devoir-emulateurs.js test       → tous les tests (règles, fonctions, bout en bout)
//   node scripts/devoir-emulateurs.js test regles|fonctions|e2e   → une seule suite
//
// Projet « demo-spark-devoir » : les émulateurs n'appellent jamais la production. L'IA est
// simulée par un faux serveur local (scripts/lib/devoir-fausse-ia.js) : aucune clé, aucun coût.
const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { PROJET, PORTS } = require('./lib/devoir-emulateur.js');

const RACINE = path.join(__dirname, '..');
const FONCTIONS = path.join(RACINE, 'functions');
const WINDOWS = process.platform === 'win32';

function executer(commande, args, options) {
  // shell: true — sous Windows, npm et firebase sont des scripts .cmd.
  const r = spawnSync(commande, args, Object.assign({ stdio: 'inherit', shell: true, cwd: RACINE }, options || {}));
  return r.status === null ? 1 : r.status;
}

function disponible(commande, args) {
  return spawnSync(commande, args, { stdio: 'ignore', shell: true }).status === 0;
}

// L'émulateur Firestore a besoin de Java. S'il n'est pas dans le PATH, on utilise le JDK portable
// de %USERPROFILE%\tools\jdk (Eclipse Temurin), ajouté au PATH de ce processus seulement.
function preparerJava() {
  if (disponible('java', ['-version'])) return;
  const base = path.join(os.homedir(), 'tools', 'jdk');
  const dossiers = fs.existsSync(base) ? fs.readdirSync(base).filter((d) => fs.existsSync(path.join(base, d, 'bin'))) : [];
  if (!dossiers.length) {
    console.error('Java est introuvable. Installez un JDK 21 (Eclipse Temurin, archive .zip) dans ' + base + ' — voir docs/evaluation/RAPPORT-MVP-2-4.md.');
    process.exit(1);
  }
  const bin = path.join(base, dossiers.sort().pop(), 'bin');
  process.env.PATH = bin + path.delimiter + process.env.PATH;
  process.env.JAVA_HOME = path.dirname(bin);
}

function preparerFonctions() {
  if (!fs.existsSync(path.join(FONCTIONS, 'node_modules'))) {
    console.log('Installation des dépendances de functions/ (première fois)…');
    if (executer('npm', ['install'], { cwd: FONCTIONS })) process.exit(1);
  }
  if (executer('npm', ['run', 'build'], { cwd: FONCTIONS })) process.exit(1);
  // Fichiers lus par le seul émulateur (non versionnés) : fausse clé et adresse de la fausse IA.
  fs.writeFileSync(path.join(FONCTIONS, '.secret.local'), 'ANTHROPIC_API_KEY=cle-factice-emulateur\n');
  fs.writeFileSync(path.join(FONCTIONS, '.env.local'), 'DEVOIR_IA_URL_TEST=http://127.0.0.1:' + PORTS.ia + '\n');
}

const mode = process.argv[2] || 'demo';
const suite = process.argv[3] || 'tout';
preparerJava();
preparerFonctions();

const firebase = disponible('firebase', ['--version']) ? 'firebase' : 'npx firebase-tools';
const script = mode === 'test' ? 'node scripts/test-devoir-tout.js ' + suite : 'node scripts/devoir-demo.js';
const code = executer(firebase, ['emulators:exec', '--project', PROJET, '--only', 'auth,firestore,functions,hosting',
  mode === 'test' ? '' : '--ui', WINDOWS ? '"' + script + '"' : "'" + script + "'"].filter(Boolean));
process.exit(code);
