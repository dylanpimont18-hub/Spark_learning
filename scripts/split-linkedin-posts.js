// Script ponctuel : découpe docs/linkedin-aout-2026.md en dossiers LinkedIn/JJ-slug/
// Usage : node scripts/split-linkedin-posts.js
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'docs', 'linkedin-aout-2026.md');
const OUT = path.join(__dirname, '..', 'LinkedIn');

function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const raw = fs.readFileSync(SRC, 'utf8');
const blocks = raw.split(/\n## /).slice(1); // drop intro before first "## "

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

let dayNum = 0;
for (const block of blocks) {
  dayNum++;
  const lines = block.split('\n');
  const titleLine = lines[0].trim(); // ex: "1er août — bts-prep / si-unites.js"

  const captureIdx = lines.findIndex((l) => l.trim().startsWith('*Capture'));
  const captureLine = captureIdx !== -1 ? lines[captureIdx].trim().replace(/^\*Capture\s*:\s*/, '').replace(/\*$/, '') : '';

  // Corps du post = tout entre le titre et la ligne "---" ou la ligne Capture, en retirant les lignes vides de bord
  let bodyLines = lines.slice(1);
  const sepIdx = bodyLines.findIndex((l) => l.trim() === '---');
  if (sepIdx !== -1) bodyLines = bodyLines.slice(0, sepIdx);
  bodyLines = bodyLines.filter((l, i) => !(captureIdx !== -1 && i === captureIdx - 1));
  bodyLines = bodyLines.filter((l) => !l.trim().startsWith('*Capture'));
  const post = bodyLines.join('\n').trim();

  const dayFolder = String(dayNum).padStart(2, '0') + '-' + slugify(titleLine.split('—')[0].trim());
  const dir = path.join(OUT, dayFolder);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  fs.writeFileSync(path.join(dir, 'titre.txt'), titleLine + '\n', 'utf8');
  fs.writeFileSync(path.join(dir, 'post.txt'), post + '\n', 'utf8');
  fs.writeFileSync(
    path.join(dir, 'screenshot-a-faire.txt'),
    'Capture à faire : ' + captureLine + '\n\n' +
    'Une fois la capture prise, enregistre-la dans ce dossier sous le nom : screenshot.png\n',
    'utf8'
  );

  console.log('OK', dayFolder);
}
console.log('Total jours :', dayNum);
