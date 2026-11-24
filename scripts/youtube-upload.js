#!/usr/bin/env node
/* =========================================================
   Spark Learning – scripts/youtube-upload.js
   Envoie les vidéos des TD BTS FED (projet L'Escale) sur la chaîne YouTube
   de l'enseignant, en « non répertoriée », une playlist par TD, avec titre,
   description et chapitres tirés de js/data/bts-fed.js, et la vignette du site.

   Les identifiants YouTube obtenus sont notés dans scripts/bts-fed.youtube.json
   (écrit après chaque envoi : une interruption ne fait rien perdre). Ensuite,
   node scripts/build-bts-fed.js les reporte dans js/data/bts-fed.js et la page
   BTS FED lit la vidéo sur YouTube au lieu du fichier.

   Identifiants Google (jamais dans le dépôt) : dossier ~/.config/spark-youtube/
     client_secret.json — client OAuth « application de bureau » (Google Cloud)
     token.json         — jeton de rafraîchissement, écrit au premier lancement
   Premier lancement : le navigateur s'ouvre pour autoriser l'accès à la chaîne.

   Quota gratuit de l'API : quelques envois par jour. Le script s'arrête
   proprement au dépassement ; relancez-le le lendemain, il reprend où il en était.

   Sécurité : rien n'est envoyé tant que la chaîne n'a pas été confirmée. Lancer
   d'abord --whoami : il affiche la chaîne autorisée ; --confirm-channel l'enregistre
   dans bts-fed.youtube.json. Les envois suivants refusent toute autre chaîne.

   Usage :
     node scripts/youtube-upload.js --whoami         affiche la chaîne autorisée
     node scripts/youtube-upload.js --whoami --confirm-channel   la retient comme chaîne d'envoi
     node scripts/youtube-upload.js --dry-run        liste + métadonnées, sans rien envoyer
     node scripts/youtube-upload.js [--max N]        envoie au plus N vidéos
     node scripts/youtube-upload.js --only <id>      une seule vidéo (ex. TD1-01-creer-et-parametrer-le-projet)
     node scripts/youtube-upload.js --no-thumbnails  sans envoyer les vignettes
     node scripts/youtube-upload.js --thumbnails-only  renvoie seulement les vignettes manquantes
     node scripts/youtube-upload.js --publish        passe en « publique » les vidéos et playlists déjà envoyées
   Pas de dépendance npm (fetch natif, Node 18+).
   ========================================================= */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const crypto = require('crypto');
const vm = require('vm');
const { spawn } = require('child_process');

const root = path.resolve(__dirname, '..');
const DATA_FILE = path.join(root, 'js', 'data', 'bts-fed.js');
const MAP_FILE = path.join(__dirname, 'bts-fed.youtube.json');
const SECRET_DIR = path.join(os.homedir(), '.config', 'spark-youtube');
const CLIENT_FILE = path.join(SECRET_DIR, 'client_secret.json');
const TOKEN_FILE = path.join(SECRET_DIR, 'token.json');
const SITE = 'https://sparklearning.fr';
const SCOPE = 'https://www.googleapis.com/auth/youtube';
const API = 'https://www.googleapis.com/youtube/v3';
const UPLOAD_API = 'https://www.googleapis.com/upload/youtube/v3';

/* ── Arguments ── */
function parseArgs(argv) {
  const opts = { dryRun: false, max: Infinity, only: null, thumbnails: true, whoami: false, confirmChannel: false, thumbnailsOnly: false, publish: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dry-run') opts.dryRun = true;
    else if (a === '--max') opts.max = parseInt(argv[++i], 10);
    else if (a === '--only') opts.only = argv[++i];
    else if (a === '--no-thumbnails') opts.thumbnails = false;
    else if (a === '--thumbnails-only') opts.thumbnailsOnly = true;
    else if (a === '--publish') opts.publish = true;
    else if (a === '--whoami') opts.whoami = true;
    else if (a === '--confirm-channel') opts.confirmChannel = true;
    else throw new Error(`Argument inconnu : ${a}`);
  }
  if (!(opts.max > 0)) throw new Error('--max attend un nombre positif');
  return opts;
}

/* ── Données ── */
function readBtsFed() {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(DATA_FILE, 'utf8') + '\n;this.BTS_FED = BTS_FED;', ctx);
  if (!ctx.BTS_FED) throw new Error('BTS_FED introuvable dans js/data/bts-fed.js');
  return ctx.BTS_FED;
}

function readMap() {
  const m = fs.existsSync(MAP_FILE) ? JSON.parse(fs.readFileSync(MAP_FILE, 'utf8')) : {};
  return { channel: m.channel || null, playlists: m.playlists || {}, videos: m.videos || {} };
}

function writeMap(map) {
  const sortKeys = o => Object.fromEntries(Object.keys(o).sort().map(k => [k, o[k]]));
  const out = {
    _note: 'Écrit par scripts/youtube-upload.js — ne pas éditer à la main. hash = empreinte du fichier envoyé (?v= de js/data/bts-fed.js).',
    channel: map.channel,
    playlists: sortKeys(map.playlists),
    videos: sortKeys(map.videos)
  };
  fs.writeFileSync(MAP_FILE, JSON.stringify(out, null, 2) + '\n', 'utf8');
}

const hashOf = v => (v.url.split('?v=')[1] || '');
const fileOf = v => path.join(root, decodeURIComponent(v.url.split('?')[0]));
const posterOf = v => path.join(root, decodeURIComponent(v.poster.split('?')[0]));

// Liste ordonnée des vidéos à publier : le film de présentation (playlist td0), puis les TD.
function listVideos(data) {
  const items = [];
  const td0 = data.tds.find(t => t.num === 0);
  if (data.presentation) items.push({ v: data.presentation, td: td0 || { id: 'td0', num: 0, titre: 'Découvrir le projet', logiciel: 'Revit' }, index: null, count: null, presentation: true });
  data.tds.forEach(td => td.videos.forEach((v, i) => items.push({ v, td, index: i, count: td.videos.length, presentation: false })));
  return items;
}

/* ── Métadonnées YouTube ── */
// YouTube refuse « < » et « > » dans les titres et descriptions.
const clean = s => String(s || '').replace(/</g, '‹').replace(/>/g, '›').replace(/\s+/g, ' ').trim();

function horloge(sec) {
  const s = Math.floor(sec);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  const mm = String(m).padStart(2, '0'), ss = String(r).padStart(2, '0');
  return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

function cut(s, max) { return s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…'; }

function metadata(item, data) {
  const { v, td, index, count, presentation } = item;
  const title = presentation
    ? cut(`${clean(v.titre)} | BTS FED · L'Escale`, 100)
    : cut(`TD${td.num} · ${String(index + 1).padStart(2, '0')} · ${clean(v.titre)} | BTS FED`, 100);

  const lines = [];
  if (presentation) {
    lines.push(`Film de présentation du projet « ${clean(data.projet)} », support des TD Revit et ArchiWIZARD du BTS FED (génie climatique et fluidique).`);
    lines.push('', `Tous les TD, énoncés, corrigés et maquettes : ${SITE}/bts-fed`);
  } else {
    lines.push(`TD ${td.num} · ${clean(td.logiciel)} — « ${clean(td.titre)} », vidéo ${index + 1} sur ${count}.`);
    lines.push(`Projet « ${clean(data.projet)} », BTS FED (génie climatique et fluidique).`);
    lines.push('', `Énoncé, corrigé, maquette de départ et autres vidéos du TD : ${SITE}/bts-fed/${td.id}`);
  }
  // Chapitres YouTube : la liste doit commencer à 00:00.
  const chaps = (v.chapitres || []).map(c => ({ t: c.t, titre: clean(c.titre) }));
  if (chaps.length) {
    if (Math.floor(chaps[0].t) > 0) chaps.unshift({ t: 0, titre: 'Début' });
    lines.push('', 'Étapes :', ...chaps.map(c => `${horloge(c.t)} ${c.titre}`));
  }
  const retenir = (v.retenir || []).map(clean).filter(Boolean);
  if (retenir.length) lines.push('', 'À retenir :', ...retenir.map(x => `• ${x}`));
  const description = cut(lines.join('\n'), 4900);

  return {
    snippet: {
      title,
      description,
      tags: ['BTS FED', 'génie climatique', clean(td.logiciel || 'Revit'), 'Revit MEP', 'tutoriel', "L'Escale"],
      categoryId: '27', // Éducation
      defaultLanguage: 'fr',
      defaultAudioLanguage: 'fr'
    },
    status: { privacyStatus: 'unlisted', selfDeclaredMadeForKids: false, embeddable: true }
  };
}

// Le film de présentation a sa propre playlist (clé « presentation »), une par TD sinon.
const playlistKey = it => it.presentation ? 'presentation' : it.td.id;

function playlistMeta(it, data) {
  const td = it.td;
  if (it.presentation) {
    return {
      snippet: {
        title: `BTS FED · L'Escale — film de présentation du projet`,
        description: `Film de présentation du projet « ${clean(data.projet)} », support des TD Revit et ArchiWIZARD du BTS FED. Tous les TD : ${SITE}/bts-fed`,
        defaultLanguage: 'fr'
      },
      status: { privacyStatus: 'unlisted' }
    };
  }
  return {
    snippet: {
      title: cut(`BTS FED · TD${td.num} — ${clean(td.titre)}`, 150),
      description: `Vidéos de correction du TD ${td.num} (projet « ${clean(data.projet)} »). Énoncé, corrigé et maquettes : ${SITE}/bts-fed/${td.id}`,
      defaultLanguage: 'fr'
    },
    status: { privacyStatus: 'unlisted' }
  };
}

/* ── OAuth (application de bureau, redirection locale + PKCE) ── */
function readClient() {
  if (!fs.existsSync(CLIENT_FILE)) throw new Error(`Identifiant OAuth absent : ${CLIENT_FILE}`);
  const raw = JSON.parse(fs.readFileSync(CLIENT_FILE, 'utf8'));
  const c = raw.installed || raw.web;
  if (!c) throw new Error('client_secret.json : bloc « installed » attendu (application de bureau)');
  return c;
}

function openBrowser(url) {
  const cmd = process.platform === 'win32' ? 'cmd' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  const args = process.platform === 'win32' ? ['/c', 'start', '""', url.replace(/&/g, '^&')] : [url];
  try { spawn(cmd, args, { detached: true, stdio: 'ignore' }).unref(); } catch (_) { /* l'URL est affichée */ }
}

async function authorize(client) {
  const verifier = crypto.randomBytes(48).toString('base64url');
  const challenge = crypto.createHash('sha256').update(verifier).digest('base64url');
  const state = crypto.randomBytes(16).toString('hex');
  const { code, redirectUri } = await new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const u = new URL(req.url, 'http://localhost');
      if (u.pathname !== '/') { res.writeHead(404); res.end(); return; }
      const ok = u.searchParams.get('state') === state && u.searchParams.get('code');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(ok ? '<p>Accès autorisé. Vous pouvez fermer cet onglet et revenir au terminal.</p>'
                 : `<p>Autorisation refusée ou invalide (${u.searchParams.get('error') || 'état'}).</p>`);
      const redirectUri = `http://localhost:${server.address().port}`; // avant close() : address() vaut ensuite null
      server.close();
      if (ok) resolve({ code: u.searchParams.get('code'), redirectUri });
      else reject(new Error(`Autorisation refusée : ${u.searchParams.get('error') || 'état invalide'}`));
    });
    server.listen(0, '127.0.0.1', () => {
      const redirect = `http://localhost:${server.address().port}`;
      const url = `${client.auth_uri}?` + new URLSearchParams({
        client_id: client.client_id, redirect_uri: redirect, response_type: 'code', scope: SCOPE,
        access_type: 'offline', prompt: 'consent', state, code_challenge: challenge, code_challenge_method: 'S256'
      });
      console.log('\nAutorisez l\'accès à la chaîne YouTube dans le navigateur. Si rien ne s\'ouvre, copiez cette adresse :\n' + url + '\n');
      console.log(`Autorisation depuis un autre ordinateur : la page « localhost » finale ne s'y chargera pas ; ` +
        `copiez son adresse complète et ouvrez-la ici, en remplaçant « localhost » par 127.0.0.1 (port ${server.address().port}).\n`);
      openBrowser(url);
    });
    setTimeout(() => { server.close(); reject(new Error('Pas d\'autorisation reçue en 30 minutes.')); }, 1800000).unref();
  });
  const res = await fetch(client.token_uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ code, client_id: client.client_id, client_secret: client.client_secret, redirect_uri: redirectUri, grant_type: 'authorization_code', code_verifier: verifier })
  });
  const tok = await res.json();
  if (!res.ok || !tok.refresh_token) throw new Error(`Échange du code refusé : ${JSON.stringify(tok)}`);
  fs.mkdirSync(SECRET_DIR, { recursive: true });
  fs.writeFileSync(TOKEN_FILE, JSON.stringify({ refresh_token: tok.refresh_token }, null, 2), { mode: 0o600 });
  return tok.access_token;
}

async function accessToken(client) {
  if (!fs.existsSync(TOKEN_FILE)) return authorize(client);
  const { refresh_token } = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
  const res = await fetch(client.token_uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ refresh_token, client_id: client.client_id, client_secret: client.client_secret, grant_type: 'refresh_token' })
  });
  const tok = await res.json();
  if (res.ok && tok.access_token) return tok.access_token;
  // Jeton révoqué ou expiré (application Google en mode « test » : 7 jours) : on redemande.
  console.warn(`Jeton refusé (${tok.error || res.status}) : nouvelle autorisation.`);
  fs.unlinkSync(TOKEN_FILE);
  return authorize(client);
}

/* ── Appels API ── */
class QuotaError extends Error {}

async function api(token, method, url, body) {
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${token}`, ...(body ? { 'Content-Type': 'application/json; charset=UTF-8' } : {}) },
    body: body ? JSON.stringify(body) : undefined
  });
  const json = res.status === 204 ? {} : await res.json().catch(() => ({}));
  if (!res.ok) throw apiError(res.status, json);
  return json;
}

function apiError(status, json) {
  const reason = json && json.error && json.error.errors && json.error.errors[0] && json.error.errors[0].reason;
  const msg = `${status} ${reason || ''} ${(json && json.error && json.error.message) || ''}`.trim();
  // quotaExceeded : quota de l'API ; uploadLimitExceeded : limite d'envois par jour de la chaîne.
  return /quota|uploadLimitExceeded/i.test(reason || '') || /quota/i.test(msg) ? new QuotaError(msg) : new Error(msg);
}

async function uploadVideo(token, file, meta) {
  const size = fs.statSync(file).size;
  const init = await fetch(`${UPLOAD_API}/videos?uploadType=resumable&part=snippet,status`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'X-Upload-Content-Type': 'video/mp4',
      'X-Upload-Content-Length': String(size)
    },
    body: JSON.stringify(meta)
  });
  if (!init.ok) throw apiError(init.status, await init.json().catch(() => ({})));
  const location = init.headers.get('location');
  if (!location) throw new Error('Pas d\'adresse d\'envoi renvoyée par YouTube');
  const put = await fetch(location, {
    method: 'PUT',
    headers: { 'Content-Type': 'video/mp4', 'Content-Length': String(size) },
    body: fs.readFileSync(file)
  });
  const json = await put.json().catch(() => ({}));
  if (!put.ok) throw apiError(put.status, json);
  return json;
}

async function setThumbnail(token, videoId, jpg) {
  const res = await fetch(`${UPLOAD_API}/thumbnails/set?videoId=${videoId}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'image/jpeg' },
    body: fs.readFileSync(jpg)
  });
  if (!res.ok) throw apiError(res.status, await res.json().catch(() => ({})));
}

async function ensurePlaylist(token, it, data, map) {
  const key = playlistKey(it);
  if (map.playlists[key]) return map.playlists[key];
  const pl = await api(token, 'POST', `${API}/playlists?part=snippet,status`, playlistMeta(it, data));
  map.playlists[key] = pl.id;
  writeMap(map);
  console.log(`  playlist créée : ${pl.snippet.title}`);
  return pl.id;
}

async function addToPlaylist(token, playlistId, videoId, position) {
  const body = { snippet: { playlistId, resourceId: { kind: 'youtube#video', videoId } } };
  if (Number.isInteger(position)) body.snippet.position = position;
  try {
    await api(token, 'POST', `${API}/playlistItems?part=snippet`, body);
  } catch (e) {
    if (e instanceof QuotaError) throw e;
    // Position au-delà de la fin (vidéos précédentes pas encore envoyées) : on ajoute à la fin.
    delete body.snippet.position;
    await api(token, 'POST', `${API}/playlistItems?part=snippet`, body);
  }
}

async function myChannel(token) {
  const r = await api(token, 'GET', `${API}/channels?part=snippet&mine=true`);
  const c = r.items && r.items[0];
  if (!c) throw new Error("Ce compte Google n'a pas de chaîne YouTube.");
  return { id: c.id, titre: c.snippet.title, url: `https://www.youtube.com/channel/${c.id}` };
}

/* ── Principal ── */
async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const data = readBtsFed();
  const map = readMap();

  if (opts.whoami) {
    const ch = await myChannel(await accessToken(readClient()));
    console.log(`Chaîne autorisée : « ${ch.titre} » — ${ch.url}`);
    if (opts.confirmChannel) {
      map.channel = ch;
      writeMap(map);
      console.log("Chaîne enregistrée comme chaîne d'envoi.");
    } else if (!map.channel || map.channel.id !== ch.id) {
      console.log("Pas encore confirmée : relancez avec --whoami --confirm-channel si c'est la bonne." +
        (map.channel ? `\n(Chaîne d'envoi actuelle : « ${map.channel.titre} ».)` : `\nPour changer de chaîne, supprimez ${TOKEN_FILE} et relancez.`));
    }
    return;
  }
  const items = listVideos(data).filter(it => !opts.only || it.v.id === opts.only);
  if (opts.only && !items.length) throw new Error(`Vidéo inconnue : ${opts.only}`);

  const todo = [], stale = [];
  items.forEach(it => {
    const known = map.videos[it.v.id];
    if (!known) todo.push(it);
    else if (known.hash !== hashOf(it.v)) stale.push(it);
  });
  console.log(`${items.length} vidéo(s) · ${items.length - todo.length} déjà sur YouTube · ${todo.length} à envoyer`);
  stale.forEach(it => console.warn(`  ⚠ ${it.v.id} : le fichier a changé depuis l'envoi (${map.videos[it.v.id].id}). Le site reprend le fichier local tant que la vidéo n'est pas remplacée sur YouTube (supprimez son entrée dans bts-fed.youtube.json pour la renvoyer).`));

  if (opts.dryRun) {
    todo.slice(0, opts.max).forEach(it => console.log(`  · ${it.v.id} → playlist ${playlistKey(it)} · ${(fs.statSync(fileOf(it.v)).size / 1048576).toFixed(1)} Mo`));
    if (todo[0]) {
      const m = metadata(todo[0], data);
      console.log(`\nExemple — ${todo[0].v.id}\nTitre : ${m.snippet.title}\n\n${m.snippet.description}`);
    }
    return;
  }
  if (!todo.length && !opts.thumbnailsOnly && !opts.publish) return;

  const client = readClient();
  let token = await accessToken(client);
  let tokenAt = Date.now();
  const ch = await myChannel(token);
  if (!map.channel) throw new Error(`Chaîne pas encore confirmée (autorisée : « ${ch.titre} »). Lancez --whoami --confirm-channel.`);
  if (map.channel.id !== ch.id) throw new Error(`Chaîne autorisée « ${ch.titre} » ≠ chaîne d'envoi « ${map.channel.titre} ». Rien n'est envoyé.`);
  console.log(`Chaîne d'envoi : « ${ch.titre} »`);

  if (opts.thumbnailsOnly) {
    const missing = items.filter(it => map.videos[it.v.id] && !map.videos[it.v.id].thumb && fs.existsSync(posterOf(it.v)));
    console.log(`${missing.length} vignette(s) à envoyer`);
    for (const it of missing) {
      const known = map.videos[it.v.id];
      try { await setThumbnail(token, known.id, posterOf(it.v)); }
      catch (e) { console.log(`  ⚠ ${it.v.id} : ${e.message} — arrêt, relancez plus tard.`); break; }
      known.thumb = true;
      writeMap(map);
      console.log(`  ✓ ${it.v.id}`);
    }
    return;
  }

  if (opts.publish) {
    if (todo.length) console.warn(`  ⚠ ${todo.length} vidéo(s) pas encore envoyée(s) : elles resteront à publier plus tard.`);
    let n = 0;
    for (const it of items) {
      const known = map.videos[it.v.id];
      if (!known || known.public) continue;
      try {
        await api(token, 'PUT', `${API}/videos?part=status`, { id: known.id, status: { privacyStatus: 'public', embeddable: true, selfDeclaredMadeForKids: false } });
      } catch (e) { console.log(`  ⚠ ${it.v.id} : ${e.message} — arrêt, relancez plus tard.`); return; }
      known.public = true;
      writeMap(map);
      n++;
    }
    for (const [key, plId] of Object.entries(map.playlists)) {
      const r = await api(token, 'GET', `${API}/playlists?part=snippet,status&id=${plId}`);
      const pl = r.items && r.items[0];
      if (!pl || pl.status.privacyStatus === 'public') continue;
      await api(token, 'PUT', `${API}/playlists?part=snippet,status`, {
        id: plId,
        snippet: { title: pl.snippet.title, description: pl.snippet.description, defaultLanguage: pl.snippet.defaultLanguage || 'fr' },
        status: { privacyStatus: 'public' }
      });
      console.log(`  playlist publique : ${pl.snippet.title} (${key})`);
    }
    console.log(`${n} vidéo(s) passée(s) en publique.`);
    return;
  }

  let thumbs = opts.thumbnails;
  let sent = 0;

  for (const it of todo) {
    if (sent >= opts.max) break;
    if (Date.now() - tokenAt > 45 * 60000) { token = await accessToken(client); tokenAt = Date.now(); }
    const file = fileOf(it.v);
    if (!fs.existsSync(file)) { console.warn(`  ⚠ ${it.v.id} : fichier absent (${path.relative(root, file)})`); continue; }
    process.stdout.write(`→ ${it.v.id} (${(fs.statSync(file).size / 1048576).toFixed(1)} Mo)… `);
    let video;
    try {
      video = await uploadVideo(token, file, metadata(it, data));
    } catch (e) {
      if (e instanceof QuotaError) { console.log('\nLimite YouTube du jour atteinte : relancez demain, le script reprendra ici.'); break; }
      throw e;
    }
    map.videos[it.v.id] = { id: video.id, hash: hashOf(it.v), td: it.td.id };
    writeMap(map);
    sent++;
    console.log(`https://youtu.be/${video.id} (${video.status && video.status.privacyStatus})`);
    if (video.status && video.status.privacyStatus !== 'unlisted') {
      console.warn(`  ⚠ statut « ${video.status.privacyStatus} » au lieu de « unlisted » : vérifiez dans YouTube Studio.`);
    }
    try {
      const pl = await ensurePlaylist(token, it, data, map);
      await addToPlaylist(token, pl, video.id, it.presentation ? 0 : it.index);
    } catch (e) {
      if (e instanceof QuotaError) { console.log('\nQuota atteint pendant le rangement en playlist : la vidéo est envoyée, à ranger à la main.'); break; }
      console.warn(`  ⚠ playlist : ${e.message}`);
    }
    if (thumbs && fs.existsSync(posterOf(it.v))) {
      try {
        await setThumbnail(token, video.id, posterOf(it.v));
        map.videos[it.v.id].thumb = true;
        writeMap(map);
      } catch (e) {
        if (e instanceof QuotaError) { console.log('\nQuota atteint pendant l\'envoi de la vignette.'); break; }
        // Vignettes personnalisées : chaîne vérifiée par téléphone requise.
        console.warn(`  ⚠ vignette non envoyée (${e.message}) — vignettes désactivées pour la suite (--thumbnails-only pour les rattraper).`);
        thumbs = false;
      }
    }
  }
  const left = todo.length - sent;
  console.log(`\n${sent} envoyée(s)${left ? `, ${left} restante(s)` : ''}. Ensuite : node scripts/build-bts-fed.js, puis déployer.`);
}

main().catch(e => { console.error(`Erreur : ${e.message}`); process.exit(1); });
