#!/usr/bin/env node
/* =========================================================
   Spark Learning – scripts/youtube-daily.js
   Tâche planifiée Windows « Spark Learning - envoi YouTube » (chaque jour) :
     1. envoie les vidéos suivantes (YouTube : 10 envois par jour et par chaîne) ;
     2. rattrape les vignettes refusées ;
     3. reporte les identifiants dans js/data/bts-fed.js (--apply, sans relancer
        build-bts-fed.js : rien d'autre que YouTube ne part en ligne) ;
     4. quand les 45 sont envoyées : passe vidéos et playlists en publique (--publish) ;
     5. commit + push des seuls fichiers YouTube (+ cache ?v=) : le déploiement suit ;
     6. tout est fait : supprime la tâche planifiée.
   Journal : ~/.config/spark-youtube/daily.log
   ========================================================= */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const LOG = path.join(os.homedir(), '.config', 'spark-youtube', 'daily.log');
const TASK_NAME = 'Spark Learning - envoi YouTube';
const FILES = ['js/data/bts-fed.js', 'scripts/bts-fed.youtube.json', 'index.html'];

function log(msg) {
  const line = `[${new Date().toLocaleString('fr-FR')}] ${msg}`;
  console.log(line);
  fs.appendFileSync(LOG, line + '\n', 'utf8');
}

function run(cmd, args, { allowFail = false } = {}) {
  const r = spawnSync(cmd, args, { cwd: root, encoding: 'utf8', shell: false });
  const out = `${r.stdout || ''}${r.stderr || ''}`.split('\n').filter(l => l.trim() && !l.startsWith('Assertion failed')).join('\n');
  if (out) log(`${path.basename(cmd)} ${args.join(' ')}\n${out}`);
  if (r.status !== 0 && !allowFail) throw new Error(`${cmd} ${args.join(' ')} : code ${r.status}`);
  return { status: r.status, out };
}

const node = (...args) => run(process.execPath, ['scripts/youtube-upload.js', ...args], { allowFail: true });

function state() {
  const vm = require('vm');
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(root, 'js/data/bts-fed.js'), 'utf8') + '\n;this.B = BTS_FED;', ctx);
  const ids = [ctx.B.presentation, ...ctx.B.tds.flatMap(t => t.videos)].filter(Boolean).map(v => v.id);
  const map = JSON.parse(fs.readFileSync(path.join(root, 'scripts/bts-fed.youtube.json'), 'utf8'));
  const sent = ids.filter(id => map.videos[id]);
  return {
    total: ids.length,
    sent: sent.length,
    public: sent.filter(id => map.videos[id].public).length,
    thumbs: sent.filter(id => map.videos[id].thumb).length
  };
}

function main() {
  fs.mkdirSync(path.dirname(LOG), { recursive: true });
  log('— début —');

  // Jamais de changement de branche sous les pieds de Dylan : hors de main, on ne fait rien.
  const branch = run('git', ['rev-parse', '--abbrev-ref', 'HEAD']).out.trim();
  if (branch !== 'main') { log(`branche « ${branch} » et non main : rien fait aujourd'hui`); return; }
  // Dépôt à jour avant d'écrire (Dylan peut pousser depuis un autre poste).
  run('git', ['pull', '--rebase', '--autostash', 'origin', 'main']);

  node();                    // 1. envoi (s'arrête seul à la limite du jour)
  node('--thumbnails-only'); // 2. vignettes manquantes
  let st = state();
  if (st.sent === st.total && st.public < st.total) node('--publish'); // 4. publique
  node('--apply');           // 3. identifiants sur le site
  st = state();
  log(`état : ${st.sent}/${st.total} envoyées · ${st.thumbs} vignettes · ${st.public} publiques`);

  // 5. commit + push des seuls fichiers YouTube
  const changed = run('git', ['status', '--porcelain', '--', ...FILES]).out.trim();
  if (changed) {
    const html = path.join(root, 'index.html');
    const src = fs.readFileSync(html, 'utf8');
    const v = Math.max(...[...src.matchAll(/\?v=(\d+)/g)].map(m => +m[1]));
    fs.writeFileSync(html, src.replace(/\?v=\d+/g, `?v=${v + 1}`), 'utf8');
    run('git', ['add', '--', ...FILES]);
    const msg = `chore(bts-fed) : vidéos YouTube ${st.sent}/${st.total}` +
      (st.public === st.total ? ', toutes publiques' : '') +
      ' (tâche planifiée)\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>';
    run('git', ['commit', '-m', msg, '--', ...FILES]);
    run('git', ['push', 'origin', 'main']);
    log('poussé sur main : déploiement Firebase lancé par GitHub Actions');
  } else {
    log('rien à publier sur le site');
  }

  // 6. terminé : la tâche se retire
  if (st.sent === st.total && st.public === st.total && !changed) {
    run('schtasks', ['/Delete', '/TN', TASK_NAME, '/F'], { allowFail: true });
    log('tout est envoyé, public et en ligne : tâche planifiée supprimée');
  }
  log('— fin —');
}

try { main(); } catch (e) { log(`ERREUR : ${e.message}`); process.exit(1); }
