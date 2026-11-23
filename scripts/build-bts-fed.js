#!/usr/bin/env node
/* =========================================================
   Spark Learning – scripts/build-bts-fed.js
   Publie les TD du projet « L'Escale » (BTS FED) : copie les vidéos, les
   énoncés, les corrigés et les maquettes de départ depuis le dossier
   d'enseignement vers media/bts-fed/, puis écrit js/data/bts-fed.js
   (variable globale BTS_FED, lue par js/views/btsFed.js et par
   scripts/generate-sitemap.js).

   Relançable : ne recopie que les fichiers dont la taille ou la date a
   changé, signale les fichiers publiés dont la source a disparu.

   Usage : node scripts/build-bts-fed.js [--source "chemin\BTS FED"] [--dry-run]
   Outils externes requis (pas de dépendance npm) : ffprobe, ffmpeg, pdftotext.
   ========================================================= */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
// Le dossier d'enseignement est un voisin du dépôt : Desktop\Creation_site\Spark_learning
// et Desktop\Enseignement\BTS FED. Chemin relatif pour ne publier aucun chemin absolu.
const DEFAULT_SOURCE = path.resolve(root, '..', '..', 'Enseignement', 'BTS FED');

const OUT_DATA = path.join(root, 'js', 'data', 'bts-fed.js');
const OUT_MEDIA = path.join(root, 'media', 'bts-fed');
const PUBLIC_PREFIX = 'media/bts-fed';

const TD_NUMBERS = [0, 1, 2, 3, 4, 5, 6];
// Dossiers de TD-Escale à ne jamais publier : pilote abandonné, sources de montage.
const EXCLUDED_VIDEO_DIRS = new Set(['TD1-C-niveaux-pilote', 'sources-TD0']);
// Version voisée d'une vidéo : prioritaire sur la version muette, publiée sous le nom de base.
const VOICED_SUFFIX = '-AVEC-VOIX';
// GitHub avertit au-delà de 50 Mio et refuse au-delà de 100 Mio ; pas de Git LFS
// (Firebase ne lit pas les pointeurs LFS au déploiement).
const MAX_FILE_BYTES = 50 * 1024 * 1024;
// En dessous de ce pic, la piste audio est considérée comme muette (silence numérique = -91 dB).
const SILENCE_MAX_DB = -50;

/* ── Arguments ── */
function parseArgs(argv) {
  const opts = { source: DEFAULT_SOURCE, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--source') opts.source = path.resolve(argv[++i]);
    else if (argv[i] === '--dry-run') opts.dryRun = true;
    else throw new Error(`Argument inconnu : ${argv[i]}`);
  }
  return opts;
}

/* ── Outils externes ── */
function run(cmd, args) {
  return execFileSync(cmd, args, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] });
}

function runStderr(cmd, args) {
  // ffmpeg écrit ses mesures sur stderr ; execFileSync ne le renvoie qu'en cas d'échec.
  const { spawnSync } = require('child_process');
  const r = spawnSync(cmd, args, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  if (r.error) throw r.error;
  return r.stderr || '';
}

function checkTools() {
  for (const [cmd, arg] of [['ffprobe', '-version'], ['ffmpeg', '-version'], ['pdftotext', '-v']]) {
    try { runStderr(cmd, [arg]); } catch (e) {
      throw new Error(`Outil introuvable dans le PATH : ${cmd} (requis par ce script)`);
    }
  }
}

/* ── Fichiers ── */
function sha1Short(file) {
  const h = crypto.createHash('sha1');
  const fd = fs.openSync(file, 'r');
  const buf = Buffer.alloc(4 * 1024 * 1024);
  let n;
  try {
    while ((n = fs.readSync(fd, buf, 0, buf.length, null)) > 0) h.update(buf.subarray(0, n));
  } finally { fs.closeSync(fd); }
  return h.digest('hex').slice(0, 10);
}

// Copie si la destination manque ou diffère (taille ou date). La date de la source
// est reportée sur la copie pour que la comparaison suivante soit stable.
function syncFile(src, dest, report, dryRun) {
  const s = fs.statSync(src);
  if (s.size > MAX_FILE_BYTES) {
    report.errors.push(`${path.basename(src)} pèse ${mib(s.size)} Mio (> 50 Mio) : non publié. Réencoder (ex. ffmpeg -crf 28) ou découper.`);
    return false;
  }
  let same = false;
  if (fs.existsSync(dest)) {
    const d = fs.statSync(dest);
    same = d.size === s.size && Math.abs(d.mtimeMs - s.mtimeMs) < 2000;
  }
  if (same) { report.unchanged.push(rel(dest)); return true; }
  report.copied.push(`${rel(dest)} (${mib(s.size)} Mio)`);
  if (!dryRun) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    fs.utimesSync(dest, s.atime, s.mtime);
  }
  return true;
}

function rel(p) { return path.relative(root, p).split(path.sep).join('/'); }
function mib(bytes) { return (bytes / 1048576).toFixed(1); }

// Le moov (index de la vidéo) doit précéder les données (mdat) : sinon le navigateur
// doit aller chercher la fin du fichier avant de pouvoir lire ou avancer au milieu.
function isFastStart(file) {
  const fd = fs.openSync(file, 'r');
  try {
    const head = Buffer.alloc(16);
    let pos = 0;
    const size = fs.fstatSync(fd).size;
    while (pos < size) {
      if (fs.readSync(fd, head, 0, 16, pos) < 8) return false;
      let boxSize = head.readUInt32BE(0);
      const type = head.toString('latin1', 4, 8);
      if (boxSize === 1) boxSize = Number(head.readBigUInt64BE(8));
      if (type === 'moov') return true;
      if (type === 'mdat') return false;
      if (boxSize < 8) return false;
      pos += boxSize;
    }
    return false;
  } finally { fs.closeSync(fd); }
}

/* ── Vidéos : sonde ffprobe / ffmpeg ── */
function probeVideo(file) {
  const json = JSON.parse(run('ffprobe', ['-v', 'error', '-show_entries', 'format=duration:stream=codec_type',
    '-of', 'json', file]));
  const duration = Math.round(parseFloat(json.format.duration));
  const hasAudioStream = (json.streams || []).some(s => s.codec_type === 'audio');
  let voix = false;
  if (hasAudioStream) {
    // Les vidéos muettes portent une piste AAC de silence : la présence d'une piste
    // ne suffit pas, on mesure son niveau de crête.
    const out = runStderr('ffmpeg', ['-hide_banner', '-nostats', '-i', file, '-map', '0:a:0', '-vn',
      '-af', 'volumedetect', '-f', 'null', '-']);
    const m = out.match(/max_volume:\s*(-?[\d.]+|-inf) dB/);
    const maxDb = m ? (m[1] === '-inf' ? -Infinity : parseFloat(m[1])) : -Infinity;
    voix = maxDb > SILENCE_MAX_DB;
  }
  return { duration, voix };
}

/* ── Fiches vidéo (.md) : seuls titre, points à retenir et pièges sont publiés ── */
const FORBIDDEN = [
  { re: /[A-Za-z]:\\|\\\\/, why: 'chemin Windows' },
  { re: /(^|[\s(`])(projets|Banque-Revit|ressources|outils|production|annales)\//, why: 'chemin local' },
  { re: /\.(typ|py|json|wav)\b/i, why: 'fichier de travail' },
  { re: /lien à (ajouter|compléter)/i, why: 'mention « lien à compléter »' },
  // Places réservées. Les autres crochets sont légitimes (ex. « IFC4 - Vue de référence [Service de bâtiment] »).
  { re: /\[\s*(?:À|A) (?:vous|compléter|ajouter|remplir)|\[\s*lien/i, why: 'place réservée entre crochets' },
  { re: /voix off|tournage/i, why: 'note de tournage' },
  // « Dans cette vidéo, seule F01 est posée à la souris ; les autres … hors caméra (la voix le dit) » :
  // note de montage. L'information utile (geste montré une fois) est rendue par le drapeau horsChamp.
  { re: /hors caméra|la voix le dit|interface de programmation|^Diapositives\s*:|Dans le TD d.origine/i, why: 'note de tournage', horsChamp: true }
];

function cleanInline(text) {
  return text
    .replace(/\[[^\]]*\]\([^)]*\)/g, '')        // liens markdown
    .replace(/\s*\[(?:À|A) vous[^\]]*\]/gi, '') // places réservées aux anecdotes
    .replace(/\s*\([^)]*tournage[^)]*\)/gi, '') // apartés de tournage : « (vérifié … pendant le tournage) »
    .replace(/\s+/g, ' ')
    .trim();
}

function sectionBullets(lines, headingRe) {
  const start = lines.findIndex(l => headingRe.test(l));
  if (start === -1) return [];
  const items = [];
  for (let i = start + 1; i < lines.length; i++) {
    const l = lines[i];
    if (/^#{1,6}\s/.test(l)) break;
    const bullet = l.match(/^\s*[-*]\s+(.*)$/);
    if (bullet) items.push(bullet[1]);
    else if (l.trim() && items.length && /^\s{2,}\S/.test(l)) items[items.length - 1] += ' ' + l.trim();
  }
  return items.map(cleanInline).filter(Boolean);
}

function parseVideoSheet(mdFile, report) {
  const lines = fs.readFileSync(mdFile, 'utf8').replace(/\r/g, '').split('\n');
  const h1 = (lines.find(l => /^#\s/.test(l)) || '').replace(/^#\s+/, '');
  // « TD1 corrigé · Créer et paramétrer le projet (TD1-01) » → « Créer et paramétrer le projet »
  let titre = h1.includes(' · ') ? h1.slice(h1.indexOf(' · ') + 3) : h1;
  titre = titre.replace(/\s*\([^)]*\)\s*$/, '').trim();
  const retenir = sectionBullets(lines, /^##\s+(Ce qu.on retient|Points à retenir)/i);
  const pieges = sectionBullets(lines, /^##\s+Pièges/i);
  const id = path.basename(mdFile, '.md');
  // Filet de sécurité : rien de ce qui suit ne doit atteindre le site public.
  let horsChamp = false;
  const keep = (item, where) => {
    const bad = FORBIDDEN.find(f => f.re.test(item));
    if (bad) {
      if (bad.horsChamp && /hors caméra/i.test(item)) horsChamp = true;
      report.dropped.push(`${id} › ${where} : « ${item} » (${bad.why})`);
      return false;
    }
    return true;
  };
  if (!titre) report.errors.push(`${id} : titre introuvable dans la fiche`);
  return {
    titre: keep(titre, 'titre') ? titre : id,
    retenir: retenir.filter(i => keep(i, 'à retenir')),
    pieges: pieges.filter(i => keep(i, 'pièges')),
    horsChamp
  };
}

/* ── Énoncés : première page du PDF ── */
function pdfFirstPage(file) {
  return run('pdftotext', ['-f', '1', '-l', '1', '-enc', 'UTF-8', file, '-'])
    .replace(/\r/g, '')
    .replace(/­\s*/g, '');   // césures de Typst : « toi­ tures » → « toitures »
}

function parseStatement(file, num, report) {
  const text = pdfFirstPage(file);
  const lines = text.split('\n');
  const header = lines[0] || '';
  const titleLine = lines.find(l => /^TD\b.*—/.test(l)) || '';
  const titre = titleLine.slice(titleLine.indexOf('—') + 1).trim();
  const duree = (header.match(/·\s*(\d+\s*h(?:\s*\d+)?)\s*$/) || [])[1] || null;
  const niveauGcf = parseInt((header.match(/Niveau GCF (\d)/) || [])[1], 10) || null;

  // « À la fin de ce TD, je saurai… • a ; • b ; • c. » (paragraphe sur une ou plusieurs lignes)
  const paras = text.split(/\n\s*\n/).map(p => p.replace(/\s*\n\s*/g, ' ').trim());
  const objPara = paras.find(p => /^À la fin de ce TD/.test(p)) || '';
  const [objIntro, ...objItems] = objPara.split('•').map(s => s.trim().replace(/\s*;$/, '').replace(/\.$/, ''));

  // « Fichier de départ » : texte jusqu'à « À rendre ».
  const iDep = paras.findIndex(p => p === 'Fichier de départ');
  let depart = null;
  if (iDep !== -1) {
    depart = paras.slice(iDep + 1).join(' ');
    depart = depart.slice(0, depart.search(/À rendre|$/)).trim();
  }

  if (!titre) report.errors.push(`TD${num} : titre introuvable en page 1 de ${path.basename(file)}`);
  if (!objItems.length) report.errors.push(`TD${num} : « À la fin de ce TD, je saurai… » introuvable`);
  if (!depart) report.errors.push(`TD${num} : « Fichier de départ » introuvable`);
  return {
    titre,
    duree,
    niveauGcf,
    objectif: { intro: (objIntro || 'À la fin de ce TD, je saurai').replace(/…$/, '').trim(), items: objItems },
    depart
  };
}

/* ── Données précédentes : réutilise les mesures audio/durée si le fichier n'a pas changé ── */
function readPreviousData() {
  if (!fs.existsSync(OUT_DATA)) return {};
  try {
    const vm = require('vm');
    const ctx = {};
    vm.runInNewContext(fs.readFileSync(OUT_DATA, 'utf8'), ctx);
    const byId = {};
    (ctx.BTS_FED && ctx.BTS_FED.tds || []).forEach(td => td.videos.forEach(v => { byId[v.id] = v; }));
    return byId;
  } catch (e) { return {}; }
}

/* ── Programme principal ── */
function main() {
  const opts = parseArgs(process.argv.slice(2));
  checkTools();
  const SRC_VIDEOS = path.join(opts.source, 'Banque-Revit', 'TD-Escale');
  const SRC_TD = path.join(opts.source, 'projets', 'td-revit');
  const SRC_DEPART = path.join(SRC_TD, 'revit2026', 'ressources', 'fichiers-depart');
  for (const d of [SRC_VIDEOS, SRC_TD, SRC_DEPART]) {
    if (!fs.existsSync(d)) throw new Error(`Dossier source introuvable : ${d} (option --source ?)`);
  }

  const report = { copied: [], unchanged: [], dropped: [], errors: [], warnings: [], orphans: [] };
  const expected = new Set();
  const previous = readPreviousData();
  const tdFiles = fs.readdirSync(SRC_TD);
  const departFiles = fs.readdirSync(SRC_DEPART);
  const videoDirs = fs.readdirSync(SRC_VIDEOS, { withFileTypes: true })
    .filter(e => e.isDirectory() && /^TD\d+-/.test(e.name) && !EXCLUDED_VIDEO_DIRS.has(e.name))
    .map(e => e.name)
    .sort((a, b) => a.localeCompare(b, 'fr', { numeric: true }));

  const publish = (src, subdir, publishedName) => {
    const dest = path.join(OUT_MEDIA, subdir, publishedName);
    expected.add(path.resolve(dest));
    if (!syncFile(src, dest, report, opts.dryRun)) return null;
    const file = opts.dryRun && !fs.existsSync(dest) ? src : dest;
    return {
      url: `${PUBLIC_PREFIX}/${subdir}/${publishedName}?v=${sha1Short(file)}`,
      taille: fs.statSync(src).size,
      file
    };
  };

  const tds = [];
  for (const num of TD_NUMBERS) {
    const enonceName = tdFiles.find(f => new RegExp(`^TD${num}-.*-etudiant\\.pdf$`).test(f));
    const corrigeName = tdFiles.find(f => new RegExp(`^TD${num}-.*-corrige\\.pdf$`).test(f));
    if (!enonceName || !corrigeName) {
      report.errors.push(`TD${num} : énoncé ou corrigé PDF introuvable dans projets/td-revit`);
      continue;
    }
    const meta = parseStatement(path.join(SRC_TD, enonceName), num, report);
    const enonce = publish(path.join(SRC_TD, enonceName), 'td', enonceName);
    const corrige = publish(path.join(SRC_TD, corrigeName), 'td', corrigeName);

    const departName = departFiles.find(f => f === `TD${num}_depart.rvt`); // jamais les *.0001.rvt
    const maquette = departName ? publish(path.join(SRC_DEPART, departName), 'depart', departName) : null;

    const videos = [];
    for (const dir of videoDirs.filter(d => d.startsWith(`TD${num}-`))) {
      const dirPath = path.join(SRC_VIDEOS, dir);
      const voiced = path.join(dirPath, `${dir}${VOICED_SUFFIX}.mp4`);
      const plain = path.join(dirPath, `${dir}.mp4`);
      const src = fs.existsSync(voiced) ? voiced : (fs.existsSync(plain) ? plain : null);
      const sheet = path.join(dirPath, `${dir}.md`);
      if (!src) { report.errors.push(`${dir} : aucune vidéo ${dir}.mp4`); continue; }
      if (!fs.existsSync(sheet)) { report.errors.push(`${dir} : fiche ${dir}.md introuvable`); continue; }
      const pub = publish(src, 'videos', `${dir}.mp4`);
      if (!pub) continue;
      if (!isFastStart(pub.file)) report.warnings.push(`${dir}.mp4 : index (moov) en fin de fichier, la lecture démarrera plus lentement (ffmpeg -movflags +faststart)`);
      const hash = pub.url.split('?v=')[1];
      const prev = previous[dir];
      const probe = prev && prev.url && prev.url.endsWith(`?v=${hash}`)
        ? { duration: prev.duree, voix: prev.voix }
        : probeVideo(pub.file);
      const fiche = parseVideoSheet(sheet, report);
      videos.push({
        id: dir,
        titre: fiche.titre,
        duree: probe.duration,
        voix: probe.voix,
        url: pub.url,
        taille: pub.taille,
        retenir: fiche.retenir,
        pieges: fiche.pieges,
        horsChamp: fiche.horsChamp
      });
    }
    if (!videos.length) report.warnings.push(`TD${num} : aucune vidéo publiée`);

    tds.push({
      id: `td${num}`,
      num,
      titre: meta.titre,
      logiciel: /archiwizard/i.test(enonceName) ? 'ArchiWIZARD' : 'Revit 2026',
      duree: meta.duree,
      niveauGcf: meta.niveauGcf,
      objectif: meta.objectif,
      depart: meta.depart,
      enonce: { url: enonce && enonce.url, nom: enonceName, taille: enonce && enonce.taille },
      corrige: { url: corrige && corrige.url, nom: corrigeName, taille: corrige && corrige.taille },
      maquette: maquette ? { url: maquette.url, nom: departName, taille: maquette.taille } : null,
      videos
    });
  }

  // Fichiers publiés dont la source a disparu (signalés, jamais supprimés d'office).
  for (const sub of ['videos', 'td', 'depart']) {
    const dir = path.join(OUT_MEDIA, sub);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      const p = path.resolve(dir, f);
      if (!expected.has(p)) report.orphans.push(rel(p));
    }
  }

  // Pas de date de génération : une relance sans changement doit laisser le fichier intact.
  const data = { projet: "L'Escale, du modèle au dimensionnement", tds };
  const js = '/* Généré par scripts/build-bts-fed.js — ne pas éditer à la main. */\n' +
    'var BTS_FED = ' + JSON.stringify(data, null, 2) + ';\n';
  const unchangedData = fs.existsSync(OUT_DATA) && fs.readFileSync(OUT_DATA, 'utf8') === js;
  if (!opts.dryRun && !unchangedData) fs.writeFileSync(OUT_DATA, js, 'utf8');

  /* ── Compte rendu ── */
  const nbVideos = tds.reduce((n, t) => n + t.videos.length, 0);
  const muettes = tds.reduce((n, t) => n + t.videos.filter(v => !v.voix).length, 0);
  console.log(`${opts.dryRun ? '[simulation] ' : ''}${tds.length} TD, ${nbVideos} vidéos (${muettes} sans voix).`);
  console.log(`Copiés : ${report.copied.length} · inchangés : ${report.unchanged.length}`);
  report.copied.forEach(c => console.log(`  + ${c}`));
  if (report.dropped.length) {
    console.log(`Écartés de la page publique (${report.dropped.length}) :`);
    report.dropped.forEach(d => console.log(`  - ${d}`));
  }
  if (report.orphans.length) {
    console.warn(`Publiés mais source disparue (${report.orphans.length}) — à retirer avec git rm si c'est voulu :`);
    report.orphans.forEach(o => console.warn(`  ? ${o}`));
  }
  report.warnings.forEach(w => console.warn(`Attention : ${w}`));
  if (report.errors.length) {
    report.errors.forEach(e => console.error(`Erreur : ${e}`));
    process.exitCode = 1;
  }
  if (!opts.dryRun) console.log(unchangedData ? `${rel(OUT_DATA)} : inchangé` : `Écrit : ${rel(OUT_DATA)}`);
}

if (require.main === module) {
  try { main(); } catch (e) { console.error(e.message); process.exit(1); }
}

module.exports = { parseArgs, parseVideoSheet, parseStatement, isFastStart };
